// NG2
import { Component, EventEmitter, forwardRef, ElementRef, ViewChild, ViewContainerRef, Input, Output, NgZone, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { OutsideClick } from './../../utils/outside-click/OutsideClick';
import { KeyCodes } from './../../utils/key-codes/KeyCodes';
import { QuickNoteResults } from './extras/quick-note-results/QuickNoteResults';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
import * as i0 from "@angular/core";
import * as i1 from "./../../utils/component-utils/ComponentUtils";
const _c0 = ["wrapper"];
const _c1 = ["host"];
const _c2 = ["results"];
// Value accessor for the component (supports ngModel)
const QUICK_NOTE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuickNoteElement),
    multi: true,
};
export class QuickNoteElement extends OutsideClick {
    constructor(zone, element, componentUtils) {
        super(element);
        this.zone = zone;
        this.componentUtils = componentUtils;
        this.startupFocus = false;
        // Emitter for selects
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
        this.change = new EventEmitter();
        this.placeholderVisible = false;
        this._placeholderElement = null;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        // Bind to the active change event from the OutsideClick
        this.onActiveChange.subscribe((active) => {
            if (!active) {
                setTimeout(() => {
                    this.hideResults();
                });
            }
        });
    }
    ngOnInit() {
        // Make sure we have a proper config
        if (!this.config) {
            throw new Error('No config set for QuickNote!');
        }
        // Make sure that we have triggers
        if (!this.config.triggers) {
            throw new Error('QuickNote config must supply triggers!');
        }
        // Make sure that we have options
        if (!this.config.options) {
            throw new Error('QuickNote config must supply options!');
        }
        // Allow for callers to use a custom results template class in the config
        this.resultsComponent = this.config.resultsTemplate || QuickNoteResults;
    }
    ngOnDestroy() {
        // Tear down the CKEditor instance
        if (this.ckeInstance) {
            this.ckeInstance.focusManager.blur(true); // Remove focus from editor
            setTimeout(() => {
                this.ckeInstance.removeAllListeners();
                CKEDITOR.instances[this.ckeInstance.name].destroy();
                this.ckeInstance.destroy();
                this.ckeInstance = null;
            });
        }
    }
    /**
     * Connect to key/mouse events from CKEditor after the editor has been initialized
     */
    ngAfterViewInit() {
        if (!CKEDITOR) {
            console.error('Make sure to include CKEditor sources in your dependencies!');
            return;
        }
        // Replace the textarea with an instance of CKEditor
        this.ckeInstance = CKEDITOR.replace(this.host.nativeElement, this.getCKEditorConfig());
        // Set initial value of the note in the editor
        this.writeValue(this.model);
        // Connect to the key event in CKEditor for showing results dropdown
        this.ckeInstance.on('key', (event) => {
            if (!this.onKey(event.data.domEvent.$)) {
                event.cancel();
            }
        });
        // Connect to the change event in CKEditor for debouncing user modifications
        this.ckeInstance.on('change', () => {
            // Debounce update
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            this.debounceTimeout = setTimeout(() => {
                // Run within the context of this angular element since we don't need to cancel event
                this.zone.run(() => {
                    this.onValueChange();
                });
                this.debounceTimeout = null;
            }, 250);
        });
        // Propagate blur events from CKEditor to the Element's listeners
        this.ckeInstance.on('blur', (event) => {
            this.showPlaceholder();
            this.blur.emit(event);
        });
        // Propagate blur events from CKEditor to the Element's listeners
        this.ckeInstance.on('focus', (event) => {
            this.hidePlaceholder();
            this.focus.emit(event);
        });
        // Show placeholder if the note is empty, after the editor is instantiated
        this.ckeInstance.on('instanceReady', (event) => {
            this.showPlaceholder();
            // Set editor to readOnly
            if (this.config.readOnly) {
                this.ckeInstance.setReadOnly(this.config.readOnly);
            }
        });
    }
    // Set touched on blur
    onTouched(event) {
        this.onModelTouched();
    }
    /**
     * Handles setting the model and the view from the outside caller or the user's typing
     *
     * @param model A model that has a note (html content) and references (array of objects)
     */
    writeValue(model) {
        // Set value of the model
        if (model && (model.references || model.note)) {
            this.model = {
                note: model.note || '',
                references: model.references || {},
            };
        }
        else {
            this.model = {
                note: model,
                references: {},
            };
        }
        // Set the note html value in the editor
        if (this.ckeInstance) {
            this.ckeInstance.setData(this.model.note);
        }
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * If a renderer is not provided, the QuickNote will default to using this one, an anchor tag with no href
     */
    static defaultRenderer(symbol, item) {
        return `<a>${symbol}${item.label}</a>`;
    }
    /**
     * Returns the renderer for a given tagging mode if it exists in the config, otherwise the default.
     */
    getRenderer(taggingMode) {
        return this.config.renderer ? this.config.renderer[taggingMode] : QuickNoteElement.defaultRenderer;
    }
    /**
     * Called every time a keystroke is made in the editor. Listens for particular keys (e.g. UP arrow, ESC, etc.)
     * to handle certain behaviors of the picker.
     *
     * Runs within the context of the CKEditor, so actions that affect the view have to be run back inside of the
     * Angular zone of this class.
     *
     * @param event The key press event
     * @return true to allow the event to occur, false to cancel the event
     */
    onKey(event) {
        if (event.key) {
            if (this.quickNoteResults) {
                // Hide results on escape key
                if (event.keyCode === KeyCodes.ESC) {
                    this.zone.run(() => {
                        this.hideResults();
                    });
                    return false;
                }
                // Navigation inside the results
                if (event.keyCode === KeyCodes.UP) {
                    this.zone.run(() => {
                        this.quickNoteResults.instance.prevActiveMatch();
                    });
                    return false;
                }
                if (event.keyCode === KeyCodes.DOWN) {
                    this.zone.run(() => {
                        this.quickNoteResults.instance.nextActiveMatch();
                    });
                    return false;
                }
                if (event.keyCode === KeyCodes.ENTER) {
                    this.zone.run(() => {
                        this.quickNoteResults.instance.selectActiveMatch();
                    });
                    return false;
                }
            }
            else {
                // Loop through all triggers and turn on tagging mode if the user just pressed a trigger character
                const triggers = this.config.triggers || {};
                Object.keys(triggers).forEach((key) => {
                    const trigger = triggers[key] || {};
                    if (event.key === trigger) {
                        this.isTagging = true;
                        this.taggingMode = key;
                    }
                });
            }
        }
        return true;
    }
    /**
     * Debounced method that is run in the proper Angular context when the user has modified the CKEditor.
     * After the value has been updated in CKEditor, this will propagate that change to the model and listeners.
     */
    onValueChange() {
        // Get the html text in CKEditor
        let value = this.ckeInstance.getData();
        // Remove empty 'ZERO WIDTH SPACE' characters that can get added erroneously by the editor
        const regex = new RegExp(String.fromCharCode(8203), 'g');
        value = value.replace(regex, '');
        // Make sure that any references in the model are still valid
        this.validateReferences();
        // Possibly show results if the user has entered a search term
        this.showResults();
        // Propagate change to ngModel for form validation, and send null if the note is empty
        let newModel = null;
        if (value) {
            newModel = {
                note: value,
                references: this.model.references,
            };
        }
        // Inform listeners to the ngModel change event that something has changed
        this.onModelChange(newModel);
        // Inform listeners of the `@Output() change` event that the model has been updated
        this.change.emit(newModel);
        // Inform listeners to the ngModel touched event that something has changed
        this.onTouched();
    }
    /**
     * Creates an instance of the results (called popup) and adds all the bindings to that instance.
     */
    showResults() {
        if (this.isTagging) {
            const searchTerm = this.getSearchTerm();
            if (searchTerm.length) {
                // Update Matches
                if (this.quickNoteResults) {
                    // Update existing list
                    this.quickNoteResults.instance.term = {
                        searchTerm,
                        taggingMode: this.taggingMode,
                    };
                }
                else {
                    // Create the results DOM element
                    this.quickNoteResults = this.componentUtils.append(this.resultsComponent, this.results);
                    this.quickNoteResults.instance.parent = this;
                    this.quickNoteResults.instance.config = this.config;
                    this.quickNoteResults.instance.term = {
                        searchTerm,
                        taggingMode: this.taggingMode,
                    };
                    this.positionResultsDropdown();
                }
            }
            else if (this.quickNoteResults) {
                this.quickNoteResults.destroy();
                this.quickNoteResults = null;
            }
            // Tell the OutsideClick base class to start listening for an outside clicks
            this.toggleActive(null, true);
        }
    }
    /**
     * Deletes the picker results from the DOM.
     */
    hideResults() {
        this.isTagging = false;
        if (this.quickNoteResults) {
            this.quickNoteResults.destroy();
            this.quickNoteResults = null;
        }
    }
    /**
     * Handles the selection from the QuickNoteResults Component. Called by the QuickNoteResults component on it's
     * parent (this element).
     *
     * @param taggingMode - type of tags we are looking for
     * @param selected - selected object from the picker that has a label and value
     */
    onSelected(taggingMode, selected) {
        // Turn off tagging
        this.isTagging = false;
        // Replace searchTerm with link
        const symbol = this.config.triggers[taggingMode];
        const renderer = this.getRenderer(taggingMode);
        const renderedText = renderer(symbol, selected);
        this.replaceWordAtCursor(renderedText);
        // Add the new reference, if it doesn't already exist
        this.model.references = this.model.references || {};
        this.model.references[taggingMode] = this.model.references[taggingMode] || [];
        const matchingItems = this.model.references[taggingMode].filter((item) => JSON.stringify(item) === JSON.stringify(selected));
        if (matchingItems.length === 0) {
            this.model.references[taggingMode].push(selected);
        }
        // Update the quick note with the changes due to the user's selection of an item in the dropdown
        this.onValueChange();
    }
    /**
     * Convenience method that gets the current word that the cursor is on, minus the tag.
     * Also, trims any whitespace before/after the term to aid in searching.
     */
    getSearchTerm() {
        let word = this.getWordAtCursor().trim();
        if (this.isTagging) {
            const symbol = this.config.triggers[this.taggingMode];
            if (!word.includes(symbol)) {
                this.hideResults();
                return '';
            }
            word = word.slice(word.indexOf(symbol) + symbol.length);
        }
        return word;
    }
    /**
     * Gets the current word that the cursor is on CKEditor. Current word starts at the beginning of the line or a
     * tag character if we are in tagging mode. Current word ends at the end of the line or an empty space.
     *
     * @returns plain text string (removes all html formatting)
     */
    getWordAtCursor() {
        const range = this.ckeInstance.getSelection().getRanges()[0];
        const start = range.startContainer;
        if (start.type === CKEDITOR.NODE_TEXT && range.startOffset) {
            const text = start.getText();
            const symbol = this.config.triggers[this.taggingMode];
            let wordStart = text.lastIndexOf(symbol, range.startOffset - 1);
            if (wordStart > 0) {
                const beforeSymbol = text.charAt(wordStart - 1);
                // We don't want to trigger the lookup call unless the symbol was preceded by whitespace
                if (beforeSymbol !== '\u200B' && /\S/.test(beforeSymbol)) {
                    return '';
                }
            }
            else if (start.hasPrevious() && /\S$/.test(start.getPrevious().getText())) {
                // When wordStart is <= 0, we need to check the previous node's text to see if it ended with whitespace or not
                return '';
            }
            let wordEnd = text.indexOf(' ', range.startOffset + 1);
            if (wordStart === -1) {
                wordStart = 0;
            }
            if (wordEnd === -1) {
                wordEnd = text.length;
            }
            return text.substring(wordStart, wordEnd);
        }
        // Selection starts at the 0 index of the text node or there's no previous text node in contents
        return '';
    }
    /**
     * Replaces the word that the user is on with the given html.
     *
     * CKEditor gives us access to the current line of html in the editor, so we replace the content of
     * the line, replacing only the current word.
     */
    replaceWordAtCursor(newWord) {
        const originalWord = this.getWordAtCursor().trim();
        const range = this.ckeInstance.getSelection().getRanges()[0];
        const start = range.startContainer;
        const parentNode = start.getParent();
        if (start.type === CKEDITOR.NODE_TEXT && parentNode) {
            const line = parentNode.getHtml();
            const index = line.lastIndexOf(originalWord);
            if (index >= 0) {
                // Add a space after the replaced word so that multiple references can be added back to back
                const newLine = line.substring(0, index) + newWord + ' ' + line.substring(index + originalWord.length);
                parentNode.setHtml(newLine);
                // Place selection at the end of the line
                range.moveToPosition(parentNode, CKEDITOR.POSITION_BEFORE_END);
                this.ckeInstance.getSelection().selectRanges([range]);
            }
        }
    }
    /**
     * Returns current references, minus any from the model that have been removed from the editor.
     */
    validateReferences() {
        let html = this.ckeInstance.document.getBody().getHtml();
        // CKEditor stopped supporting the config.forceSimpleAmpersand setting, so we have to convert '&amp;' to '&'
        // when we pull html from the editor - see: https://dev.ckeditor.com/ticket/13723
        const ampRegex = new RegExp('&amp;', 'g');
        html = html.replace(ampRegex, '&');
        Object.keys(this.model.references).forEach((taggingMode) => {
            const array = this.model.references[taggingMode] || [];
            const symbol = this.config.triggers[taggingMode];
            const renderer = this.getRenderer(taggingMode);
            this.model.references[taggingMode] = array.filter((item) => {
                const renderedText = renderer(symbol, item);
                return html.includes(renderedText);
            });
            // If no references, then delete the key
            if (this.model.references[taggingMode].length === 0) {
                delete this.model.references[taggingMode];
            }
        });
    }
    /**
     * Configures the CKEditor for QuickNote functionality.
     *
     * Sets the height of the CKEditor dynamically to the height of the wrapper upon initialization.
     * Removes the toolbar on the bottom and configures a slimmed down version of the toolbar.
     * Removes plugins and turns off setting to allow browser based spell checking.
     */
    getCKEditorConfig() {
        // Use the height of the wrapper element to set the initial height of the editor, then
        // set it to 100% to allow the editor to resize using the grippy.
        const editorHeight = this.wrapper.nativeElement.clientHeight - QuickNoteElement.TOOLBAR_HEIGHT;
        this.wrapper.nativeElement.style.setProperty('height', '100%');
        return {
            enterMode: CKEDITOR.ENTER_BR,
            shiftEnterMode: CKEDITOR.ENTER_P,
            disableNativeSpellChecker: false,
            height: editorHeight,
            startupFocus: this.startupFocus,
            removePlugins: 'liststyle,tabletools,contextmenu',
            toolbar: [
                {
                    name: 'basicstyles',
                    items: [
                        'Styles',
                        'FontSize',
                        'Bold',
                        'Italic',
                        'Underline',
                        'TextColor',
                        '-',
                        'NumberedList',
                        'BulletedList',
                        'Outdent',
                        'Indent',
                        'Link',
                    ],
                },
            ],
        };
    }
    /**
     * Returns the current screen position of the cursor in CKEditor, accounting for any scrolling in the editor.
     */
    getCursorPosition() {
        const range = this.ckeInstance.getSelection().getRanges()[0];
        const parentElement = range.startContainer.$.parentElement;
        const editorElement = this.ckeInstance.editable().$;
        // Since the editor is a text node in the DOM that does not know about it's position, a temporary element has to
        // be inserted in order to locate the cursor position.
        const cursorElement = document.createElement('img');
        cursorElement.setAttribute('src', 'null');
        cursorElement.setAttribute('width', '0');
        cursorElement.setAttribute('height', '0');
        parentElement.appendChild(cursorElement);
        const cursorPosition = {
            top: cursorElement.offsetTop - editorElement.scrollTop,
            left: cursorElement.offsetLeft - editorElement.scrollLeft,
        };
        cursorElement.remove();
        return cursorPosition;
    }
    /**
     * Positions the results dropdown based on the location of the cursor in the text field
     */
    positionResultsDropdown() {
        const MIN_MARGIN_TOP = QuickNoteElement.TOOLBAR_HEIGHT * 2;
        const MAX_MARGIN_TOP = this.getContentHeight() + QuickNoteElement.TOOLBAR_HEIGHT;
        const cursorPosition = this.getCursorPosition();
        let marginTop = cursorPosition.top + QuickNoteElement.TOOLBAR_HEIGHT;
        // Check that the margin is within the visible bounds
        marginTop = Math.max(marginTop, MIN_MARGIN_TOP);
        marginTop = Math.min(marginTop, MAX_MARGIN_TOP);
        // Set the margin-top of the dropdown
        this.quickNoteResults.instance.element.nativeElement.style.setProperty('margin-top', marginTop + 'px');
    }
    /**
     * Returns the height in pixels of the content area - the text that the user has entered.
     */
    getContentHeight() {
        let contentHeight = 0;
        if (this.ckeInstance.ui &&
            this.ckeInstance.ui.contentsElement &&
            this.ckeInstance.ui.contentsElement.$ &&
            this.ckeInstance.ui.contentsElement.$.style) {
            const cssText = this.ckeInstance.ui.contentsElement.$.style.cssText;
            if (cssText.indexOf('height: ') !== -1) {
                let height = cssText.split('height: ')[1];
                height = height.split('px')[0];
                contentHeight = parseInt(height, 10);
            }
        }
        return contentHeight;
    }
    /**
     * Show the placeholder text if the editor is empty
     */
    showPlaceholder() {
        if (!this.ckeInstance.getData() && !this.startupFocus) {
            this.ckeInstance
                .editable()
                .getParent()
                .$.appendChild(this.placeholderElement);
            this.placeholderVisible = true;
        }
    }
    /**
     * Hide the placeholder text by removing the placeholder element from the DOM
     */
    hidePlaceholder() {
        if (this.placeholderVisible) {
            this.ckeInstance
                .editable()
                .getParent()
                .$.removeChild(this.placeholderElement);
            this.placeholderVisible = false;
        }
    }
    /**
     * Get or create the single placeholder object that is constructed only when needed.
     */
    get placeholderElement() {
        if (!this._placeholderElement) {
            this._placeholderElement = document.createElement('div');
            this._placeholderElement.className = 'placeholder';
            this._placeholderElement.style.cssText =
                'margin: 20px; color: #AAAAAA; font-family: sans-serif; font-size: 13px; line-height: 20px; position: absolute; top: 0';
            this._placeholderElement.textContent = this.placeholder;
        }
        return this._placeholderElement;
    }
}
QuickNoteElement.TOOLBAR_HEIGHT = 40; // in pixels - configured by stylesheet
QuickNoteElement.ɵfac = function QuickNoteElement_Factory(t) { return new (t || QuickNoteElement)(i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ComponentUtils)); };
QuickNoteElement.ɵcmp = i0.ɵɵdefineComponent({ type: QuickNoteElement, selectors: [["novo-quick-note"]], viewQuery: function QuickNoteElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
        i0.ɵɵstaticViewQuery(_c1, true);
        i0.ɵɵstaticViewQuery(_c2, true, ViewContainerRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.wrapper = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.host = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.results = _t.first);
    } }, inputs: { config: "config", startupFocus: "startupFocus", placeholder: "placeholder" }, outputs: { focus: "focus", blur: "blur", change: "change" }, features: [i0.ɵɵProvidersFeature([QUICK_NOTE_VALUE_ACCESSOR]), i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 0, consts: [[1, "quick-note-wrapper"], ["wrapper", ""], ["host", ""], ["results", ""]], template: function QuickNoteElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelement(2, "textarea", null, 2);
        i0.ɵɵelement(4, "span", null, 3);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QuickNoteElement, [{
        type: Component,
        args: [{
                selector: 'novo-quick-note',
                providers: [QUICK_NOTE_VALUE_ACCESSOR],
                template: `
    <div class="quick-note-wrapper" #wrapper><textarea #host></textarea> <span #results></span></div>
  `,
            }]
    }], function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i1.ComponentUtils }]; }, { wrapper: [{
            type: ViewChild,
            args: ['wrapper', { static: true }]
        }], host: [{
            type: ViewChild,
            args: ['host', { static: true }]
        }], results: [{
            type: ViewChild,
            args: ['results', { read: ViewContainerRef, static: true }]
        }], config: [{
            type: Input
        }], startupFocus: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], focus: [{
            type: Output
        }], blur: [{
            type: Output
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7QUFFOUUsc0RBQXNEO0FBQ3RELE1BQU0seUJBQXlCLEdBQUc7SUFDaEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVdGLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxZQUFZO0lBdUNoRCxZQUFvQixJQUFZLEVBQUUsT0FBbUIsRUFBVSxjQUE4QjtRQUMzRixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFERyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQStCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTVCN0YsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFJOUIsc0JBQXNCO1FBRXRCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBVXZDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyx3QkFBbUIsR0FBUSxJQUFJLENBQUM7UUFJaEMsa0JBQWEsR0FBYSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsbUJBQWMsR0FBYSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFJM0Msd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLFFBQVE7UUFDYixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0Qsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQztTQUMxRDtRQUNELHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLElBQUksZ0JBQWdCLENBQUM7SUFDMUUsQ0FBQztJQUVNLFdBQVc7UUFDaEIsa0NBQWtDO1FBQ2xDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyQkFBMkI7WUFDckUsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3RDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztZQUM3RSxPQUFPO1NBQ1I7UUFFRCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFFdkYsOENBQThDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTVCLG9FQUFvRTtRQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFFSCw0RUFBNEU7UUFDNUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUNqQyxrQkFBa0I7WUFDbEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNyQyxxRkFBcUY7Z0JBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtvQkFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM5QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztRQUVILGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2Qix5QkFBeUI7WUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQjtJQUNmLFNBQVMsQ0FBQyxLQUFXO1FBQzFCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLHlCQUF5QjtRQUN6QixJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDdEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRTthQUNuQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUc7Z0JBQ1gsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsVUFBVSxFQUFFLEVBQUU7YUFDZixDQUFDO1NBQ0g7UUFFRCx3Q0FBd0M7UUFDeEMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRU0sZ0JBQWdCLENBQUMsRUFBWTtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0saUJBQWlCLENBQUMsRUFBWTtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQWMsRUFBRSxJQUFTO1FBQ3RELE9BQU8sTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNLLFdBQVcsQ0FBQyxXQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBQ3JHLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSyxLQUFLLENBQUMsS0FBb0I7UUFDaEMsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLDZCQUE2QjtnQkFDN0IsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxHQUFHLEVBQUU7b0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTt3QkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyQixDQUFDLENBQUMsQ0FBQztvQkFDSCxPQUFPLEtBQUssQ0FBQztpQkFDZDtnQkFFRCxnQ0FBZ0M7Z0JBQ2hDLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsRUFBRSxFQUFFO29CQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ25ELENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sS0FBSyxDQUFDO2lCQUNkO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO29CQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ25ELENBQUMsQ0FBQyxDQUFDO29CQUNILE9BQU8sS0FBSyxDQUFDO2lCQUNkO2dCQUVELElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFO29CQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztvQkFDckQsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtpQkFBTTtnQkFDTCxrR0FBa0c7Z0JBQ2xHLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDcEMsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFBRTt3QkFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO3FCQUN4QjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7O09BR0c7SUFDSyxhQUFhO1FBQ25CLGdDQUFnQztRQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXZDLDBGQUEwRjtRQUMxRixNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQyw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUIsOERBQThEO1FBQzlELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixzRkFBc0Y7UUFDdEYsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksS0FBSyxFQUFFO1lBQ1QsUUFBUSxHQUFHO2dCQUNULElBQUksRUFBRSxLQUFLO2dCQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7YUFDbEMsQ0FBQztTQUNIO1FBRUQsMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0IsbUZBQW1GO1FBQ25GLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssV0FBVztRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hDLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsaUJBQWlCO2dCQUNqQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtvQkFDekIsdUJBQXVCO29CQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRzt3QkFDcEMsVUFBVTt3QkFDVixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQzlCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsaUNBQWlDO29CQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNwRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRzt3QkFDcEMsVUFBVTt3QkFDVixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQzlCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7aUJBQ2hDO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzthQUM5QjtZQUVELDRFQUE0RTtZQUM1RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLFdBQVc7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssVUFBVSxDQUFDLFdBQW1CLEVBQUUsUUFBYTtRQUNuRCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdkIsK0JBQStCO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkMscURBQXFEO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUUsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3SCxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNuRDtRQUVELGdHQUFnRztRQUNoRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGFBQWE7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxlQUFlO1FBQ3JCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUVuQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFO1lBQzFELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVoRSxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pCLE1BQU0sWUFBWSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCx3RkFBd0Y7Z0JBQ3hGLElBQUksWUFBWSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO29CQUN4RCxPQUFPLEVBQUUsQ0FBQztpQkFDWDthQUNGO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUU7Z0JBQzNFLDhHQUE4RztnQkFDOUcsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUVELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxTQUFTLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3BCLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDZjtZQUNELElBQUksT0FBTyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNsQixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN2QjtZQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0M7UUFFRCxnR0FBZ0c7UUFDaEcsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxtQkFBbUIsQ0FBQyxPQUFlO1FBQ3pDLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUM7UUFDbkMsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXJDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNuRCxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUU3QyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ2QsNEZBQTRGO2dCQUM1RixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdkcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFFNUIseUNBQXlDO2dCQUN6QyxLQUFLLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxrQkFBa0I7UUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFekQsNEdBQTRHO1FBQzVHLGlGQUFpRjtRQUNqRixNQUFNLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUN6RCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3pELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztZQUVILHdDQUF3QztZQUN4QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ25ELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxpQkFBaUI7UUFDdkIsc0ZBQXNGO1FBQ3RGLGlFQUFpRTtRQUNqRSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1FBQy9GLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRS9ELE9BQU87WUFDTCxTQUFTLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDNUIsY0FBYyxFQUFFLFFBQVEsQ0FBQyxPQUFPO1lBQ2hDLHlCQUF5QixFQUFFLEtBQUs7WUFDaEMsTUFBTSxFQUFFLFlBQVk7WUFDcEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxrQ0FBa0M7WUFDakQsT0FBTyxFQUFFO2dCQUNQO29CQUNFLElBQUksRUFBRSxhQUFhO29CQUNuQixLQUFLLEVBQUU7d0JBQ0wsUUFBUTt3QkFDUixVQUFVO3dCQUNWLE1BQU07d0JBQ04sUUFBUTt3QkFDUixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsR0FBRzt3QkFDSCxjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsU0FBUzt3QkFDVCxRQUFRO3dCQUNSLE1BQU07cUJBQ1A7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxpQkFBaUI7UUFDdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDM0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFcEQsZ0hBQWdIO1FBQ2hILHNEQUFzRDtRQUN0RCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BELGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekMsTUFBTSxjQUFjLEdBQUc7WUFDckIsR0FBRyxFQUFFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVM7WUFDdEQsSUFBSSxFQUFFLGFBQWEsQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLFVBQVU7U0FDMUQsQ0FBQztRQUNGLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV2QixPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSyx1QkFBdUI7UUFDN0IsTUFBTSxjQUFjLEdBQVcsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUNuRSxNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFFekYsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDaEQsSUFBSSxTQUFTLEdBQVcsY0FBYyxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFFN0UscURBQXFEO1FBQ3JELFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRCxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFaEQscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZ0JBQWdCO1FBQ3RCLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQztRQUM5QixJQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxlQUFlO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUMzQztZQUNBLE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUM1RSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksTUFBTSxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixhQUFhLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN0QztTQUNGO1FBQ0QsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssZUFBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckQsSUFBSSxDQUFDLFdBQVc7aUJBQ2IsUUFBUSxFQUFFO2lCQUNWLFNBQVMsRUFBRTtpQkFDWCxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxlQUFlO1FBQ3JCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxXQUFXO2lCQUNiLFFBQVEsRUFBRTtpQkFDVixTQUFTLEVBQUU7aUJBQ1gsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxrQkFBa0I7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztZQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU87Z0JBQ3BDLHVIQUF1SCxDQUFDO1lBQzFILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6RDtRQUNELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xDLENBQUM7O0FBMWtCYywrQkFBYyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHVDQUF1QztnRkFsQ2hFLGdCQUFnQjtxREFBaEIsZ0JBQWdCOzs7d0NBS0csZ0JBQWdCOzs7Ozs7K0xBVm5DLENBQUMseUJBQXlCLENBQUM7UUFFcEMsaUNBQXlDO1FBQUEsb0NBQTJCO1FBQUMsZ0NBQXNCO1FBQUEsaUJBQU07O2tEQUd4RixnQkFBZ0I7Y0FQNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxRQUFRLEVBQUU7O0dBRVQ7YUFDRjs7a0JBRUUsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFckMsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFbEMsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRzdELEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUlMLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4vLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBRdWlja05vdGVSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcXVpY2stbm90ZS1yZXN1bHRzL1F1aWNrTm90ZVJlc3VsdHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUVVJQ0tfTk9URV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFF1aWNrTm90ZUVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcXVpY2stbm90ZScsXG4gIHByb3ZpZGVyczogW1FVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJxdWljay1ub3RlLXdyYXBwZXJcIiAjd3JhcHBlcj48dGV4dGFyZWEgI2hvc3Q+PC90ZXh0YXJlYT4gPHNwYW4gI3Jlc3VsdHM+PC9zcGFuPjwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBRdWlja05vdGVFbGVtZW50IGV4dGVuZHMgT3V0c2lkZUNsaWNrIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCd3cmFwcGVyJywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIHdyYXBwZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2hvc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBwdWJsaWMgaG9zdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncmVzdWx0cycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIHJlc3VsdHM6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0dXBGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8vIEVtaXR0ZXIgZm9yIHNlbGVjdHNcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBUaGUgY2hhcmFjdGVycyB0aGF0IHRoZSB1c2VyIGVudGVycyBpbiBvcmRlciB0byBzZWFyY2ggZm9yIGEgcGVyc29uL3RoaW5nIHRvIHRhZ1xuICBwcml2YXRlIHJlc3VsdHNDb21wb25lbnQ6IGFueTtcbiAgcHJpdmF0ZSBxdWlja05vdGVSZXN1bHRzOiBhbnk7XG4gIHByaXZhdGUgaXNUYWdnaW5nOiBib29sZWFuO1xuICBwcml2YXRlIHRhZ2dpbmdNb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgbW9kZWw6IGFueTtcbiAgcHJpdmF0ZSBja2VJbnN0YW5jZTogYW55O1xuICBwcml2YXRlIGRlYm91bmNlVGltZW91dDogYW55O1xuICBwcml2YXRlIHBsYWNlaG9sZGVyVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlckVsZW1lbnQ6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgVE9PTEJBUl9IRUlHSFQgPSA0MDsgLy8gaW4gcGl4ZWxzIC0gY29uZmlndXJlZCBieSBzdHlsZXNoZWV0XG5cbiAgcHJpdmF0ZSBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgcHJpdmF0ZSBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgLy8gQmluZCB0byB0aGUgYWN0aXZlIGNoYW5nZSBldmVudCBmcm9tIHRoZSBPdXRzaWRlQ2xpY2tcbiAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoYWN0aXZlKSA9PiB7XG4gICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcHJvcGVyIGNvbmZpZ1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29uZmlnIHNldCBmb3IgUXVpY2tOb3RlIScpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIHRyaWdnZXJzXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50cmlnZ2Vycykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWlja05vdGUgY29uZmlnIG11c3Qgc3VwcGx5IHRyaWdnZXJzIScpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIG9wdGlvbnNcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVpY2tOb3RlIGNvbmZpZyBtdXN0IHN1cHBseSBvcHRpb25zIScpO1xuICAgIH1cbiAgICAvLyBBbGxvdyBmb3IgY2FsbGVycyB0byB1c2UgYSBjdXN0b20gcmVzdWx0cyB0ZW1wbGF0ZSBjbGFzcyBpbiB0aGUgY29uZmlnXG4gICAgdGhpcy5yZXN1bHRzQ29tcG9uZW50ID0gdGhpcy5jb25maWcucmVzdWx0c1RlbXBsYXRlIHx8IFF1aWNrTm90ZVJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gVGVhciBkb3duIHRoZSBDS0VkaXRvciBpbnN0YW5jZVxuICAgIGlmICh0aGlzLmNrZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlLmZvY3VzTWFuYWdlci5ibHVyKHRydWUpOyAvLyBSZW1vdmUgZm9jdXMgZnJvbSBlZGl0b3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5ja2VJbnN0YW5jZS5uYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGtleS9tb3VzZSBldmVudHMgZnJvbSBDS0VkaXRvciBhZnRlciB0aGUgZWRpdG9yIGhhcyBiZWVuIGluaXRpYWxpemVkXG4gICAqL1xuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghQ0tFRElUT1IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01ha2Ugc3VyZSB0byBpbmNsdWRlIENLRWRpdG9yIHNvdXJjZXMgaW4geW91ciBkZXBlbmRlbmNpZXMhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSB0aGUgdGV4dGFyZWEgd2l0aCBhbiBpbnN0YW5jZSBvZiBDS0VkaXRvclxuICAgIHRoaXMuY2tlSW5zdGFuY2UgPSBDS0VESVRPUi5yZXBsYWNlKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCB0aGlzLmdldENLRWRpdG9yQ29uZmlnKCkpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgdmFsdWUgb2YgdGhlIG5vdGUgaW4gdGhlIGVkaXRvclxuICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLm1vZGVsKTtcblxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGtleSBldmVudCBpbiBDS0VkaXRvciBmb3Igc2hvd2luZyByZXN1bHRzIGRyb3Bkb3duXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbigna2V5JywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICghdGhpcy5vbktleShldmVudC5kYXRhLmRvbUV2ZW50LiQpKSB7XG4gICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgY2hhbmdlIGV2ZW50IGluIENLRWRpdG9yIGZvciBkZWJvdW5jaW5nIHVzZXIgbW9kaWZpY2F0aW9uc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIC8vIERlYm91bmNlIHVwZGF0ZVxuICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSdW4gd2l0aGluIHRoZSBjb250ZXh0IG9mIHRoaXMgYW5ndWxhciBlbGVtZW50IHNpbmNlIHdlIGRvbid0IG5lZWQgdG8gY2FuY2VsIGV2ZW50XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgMjUwKTtcbiAgICB9KTtcblxuICAgIC8vIFByb3BhZ2F0ZSBibHVyIGV2ZW50cyBmcm9tIENLRWRpdG9yIHRvIHRoZSBFbGVtZW50J3MgbGlzdGVuZXJzXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignYmx1cicsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlcigpO1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gUHJvcGFnYXRlIGJsdXIgZXZlbnRzIGZyb20gQ0tFZGl0b3IgdG8gdGhlIEVsZW1lbnQncyBsaXN0ZW5lcnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdmb2N1cycsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmhpZGVQbGFjZWhvbGRlcigpO1xuICAgICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFNob3cgcGxhY2Vob2xkZXIgaWYgdGhlIG5vdGUgaXMgZW1wdHksIGFmdGVyIHRoZSBlZGl0b3IgaXMgaW5zdGFudGlhdGVkXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignaW5zdGFuY2VSZWFkeScsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlcigpO1xuICAgICAgLy8gU2V0IGVkaXRvciB0byByZWFkT25seVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnJlYWRPbmx5KSB7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2Uuc2V0UmVhZE9ubHkodGhpcy5jb25maWcucmVhZE9ubHkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBwdWJsaWMgb25Ub3VjaGVkKGV2ZW50PzogYW55KSB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgc2V0dGluZyB0aGUgbW9kZWwgYW5kIHRoZSB2aWV3IGZyb20gdGhlIG91dHNpZGUgY2FsbGVyIG9yIHRoZSB1c2VyJ3MgdHlwaW5nXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbCBBIG1vZGVsIHRoYXQgaGFzIGEgbm90ZSAoaHRtbCBjb250ZW50KSBhbmQgcmVmZXJlbmNlcyAoYXJyYXkgb2Ygb2JqZWN0cylcbiAgICovXG4gIHB1YmxpYyB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBTZXQgdmFsdWUgb2YgdGhlIG1vZGVsXG4gICAgaWYgKG1vZGVsICYmIChtb2RlbC5yZWZlcmVuY2VzIHx8IG1vZGVsLm5vdGUpKSB7XG4gICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICBub3RlOiBtb2RlbC5ub3RlIHx8ICcnLFxuICAgICAgICByZWZlcmVuY2VzOiBtb2RlbC5yZWZlcmVuY2VzIHx8IHt9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgbm90ZTogbW9kZWwsXG4gICAgICAgIHJlZmVyZW5jZXM6IHt9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIG5vdGUgaHRtbCB2YWx1ZSBpbiB0aGUgZWRpdG9yXG4gICAgaWYgKHRoaXMuY2tlSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2Uuc2V0RGF0YSh0aGlzLm1vZGVsLm5vdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBhIHJlbmRlcmVyIGlzIG5vdCBwcm92aWRlZCwgdGhlIFF1aWNrTm90ZSB3aWxsIGRlZmF1bHQgdG8gdXNpbmcgdGhpcyBvbmUsIGFuIGFuY2hvciB0YWcgd2l0aCBubyBocmVmXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0UmVuZGVyZXIoc3ltYm9sOiBzdHJpbmcsIGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8YT4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVuZGVyZXIgZm9yIGEgZ2l2ZW4gdGFnZ2luZyBtb2RlIGlmIGl0IGV4aXN0cyBpbiB0aGUgY29uZmlnLCBvdGhlcndpc2UgdGhlIGRlZmF1bHQuXG4gICAqL1xuICBwcml2YXRlIGdldFJlbmRlcmVyKHRhZ2dpbmdNb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZW5kZXJlciA/IHRoaXMuY29uZmlnLnJlbmRlcmVyW3RhZ2dpbmdNb2RlXSA6IFF1aWNrTm90ZUVsZW1lbnQuZGVmYXVsdFJlbmRlcmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBldmVyeSB0aW1lIGEga2V5c3Ryb2tlIGlzIG1hZGUgaW4gdGhlIGVkaXRvci4gTGlzdGVucyBmb3IgcGFydGljdWxhciBrZXlzIChlLmcuIFVQIGFycm93LCBFU0MsIGV0Yy4pXG4gICAqIHRvIGhhbmRsZSBjZXJ0YWluIGJlaGF2aW9ycyBvZiB0aGUgcGlja2VyLlxuICAgKlxuICAgKiBSdW5zIHdpdGhpbiB0aGUgY29udGV4dCBvZiB0aGUgQ0tFZGl0b3IsIHNvIGFjdGlvbnMgdGhhdCBhZmZlY3QgdGhlIHZpZXcgaGF2ZSB0byBiZSBydW4gYmFjayBpbnNpZGUgb2YgdGhlXG4gICAqIEFuZ3VsYXIgem9uZSBvZiB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGtleSBwcmVzcyBldmVudFxuICAgKiBAcmV0dXJuIHRydWUgdG8gYWxsb3cgdGhlIGV2ZW50IHRvIG9jY3VyLCBmYWxzZSB0byBjYW5jZWwgdGhlIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKGV2ZW50LmtleSkge1xuICAgICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICAvLyBIaWRlIHJlc3VsdHMgb24gZXNjYXBlIGtleVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmF2aWdhdGlvbiBpbnNpZGUgdGhlIHJlc3VsdHNcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UucHJldkFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0cmlnZ2VycyBhbmQgdHVybiBvbiB0YWdnaW5nIG1vZGUgaWYgdGhlIHVzZXIganVzdCBwcmVzc2VkIGEgdHJpZ2dlciBjaGFyYWN0ZXJcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VycyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModHJpZ2dlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSB0cmlnZ2Vyc1trZXldIHx8IHt9O1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGFnZ2luZ01vZGUgPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVib3VuY2VkIG1ldGhvZCB0aGF0IGlzIHJ1biBpbiB0aGUgcHJvcGVyIEFuZ3VsYXIgY29udGV4dCB3aGVuIHRoZSB1c2VyIGhhcyBtb2RpZmllZCB0aGUgQ0tFZGl0b3IuXG4gICAqIEFmdGVyIHRoZSB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkIGluIENLRWRpdG9yLCB0aGlzIHdpbGwgcHJvcGFnYXRlIHRoYXQgY2hhbmdlIHRvIHRoZSBtb2RlbCBhbmQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlKCk6IHZvaWQge1xuICAgIC8vIEdldCB0aGUgaHRtbCB0ZXh0IGluIENLRWRpdG9yXG4gICAgbGV0IHZhbHVlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAvLyBSZW1vdmUgZW1wdHkgJ1pFUk8gV0lEVEggU1BBQ0UnIGNoYXJhY3RlcnMgdGhhdCBjYW4gZ2V0IGFkZGVkIGVycm9uZW91c2x5IGJ5IHRoZSBlZGl0b3JcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoU3RyaW5nLmZyb21DaGFyQ29kZSg4MjAzKSwgJ2cnKTtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGFueSByZWZlcmVuY2VzIGluIHRoZSBtb2RlbCBhcmUgc3RpbGwgdmFsaWRcbiAgICB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlcygpO1xuXG4gICAgLy8gUG9zc2libHkgc2hvdyByZXN1bHRzIGlmIHRoZSB1c2VyIGhhcyBlbnRlcmVkIGEgc2VhcmNoIHRlcm1cbiAgICB0aGlzLnNob3dSZXN1bHRzKCk7XG5cbiAgICAvLyBQcm9wYWdhdGUgY2hhbmdlIHRvIG5nTW9kZWwgZm9yIGZvcm0gdmFsaWRhdGlvbiwgYW5kIHNlbmQgbnVsbCBpZiB0aGUgbm90ZSBpcyBlbXB0eVxuICAgIGxldCBuZXdNb2RlbCA9IG51bGw7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdNb2RlbCA9IHtcbiAgICAgICAgbm90ZTogdmFsdWUsXG4gICAgICAgIHJlZmVyZW5jZXM6IHRoaXMubW9kZWwucmVmZXJlbmNlcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSW5mb3JtIGxpc3RlbmVycyB0byB0aGUgbmdNb2RlbCBjaGFuZ2UgZXZlbnQgdGhhdCBzb21ldGhpbmcgaGFzIGNoYW5nZWRcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UobmV3TW9kZWwpO1xuXG4gICAgLy8gSW5mb3JtIGxpc3RlbmVycyBvZiB0aGUgYEBPdXRwdXQoKSBjaGFuZ2VgIGV2ZW50IHRoYXQgdGhlIG1vZGVsIGhhcyBiZWVuIHVwZGF0ZWRcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5ld01vZGVsKTtcblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgdG8gdGhlIG5nTW9kZWwgdG91Y2hlZCBldmVudCB0aGF0IHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0cyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXQgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIHNob3dSZXN1bHRzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnZ2luZykge1xuICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHRoaXMuZ2V0U2VhcmNoVGVybSgpO1xuICAgICAgaWYgKHNlYXJjaFRlcm0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBNYXRjaGVzXG4gICAgICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgbGlzdFxuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS50ZXJtID0ge1xuICAgICAgICAgICAgc2VhcmNoVGVybSxcbiAgICAgICAgICAgIHRhZ2dpbmdNb2RlOiB0aGlzLnRhZ2dpbmdNb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIHRoZSByZXN1bHRzIERPTSBlbGVtZW50XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5yZXN1bHRzQ29tcG9uZW50LCB0aGlzLnJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UudGVybSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0YWdnaW5nTW9kZTogdGhpcy50YWdnaW5nTW9kZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucG9zaXRpb25SZXN1bHRzRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gVGVsbCB0aGUgT3V0c2lkZUNsaWNrIGJhc2UgY2xhc3MgdG8gc3RhcnQgbGlzdGVuaW5nIGZvciBhbiBvdXRzaWRlIGNsaWNrc1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUobnVsbCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIHBpY2tlciByZXN1bHRzIGZyb20gdGhlIERPTS5cbiAgICovXG4gIHByaXZhdGUgaGlkZVJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5pc1RhZ2dpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgc2VsZWN0aW9uIGZyb20gdGhlIFF1aWNrTm90ZVJlc3VsdHMgQ29tcG9uZW50LiBDYWxsZWQgYnkgdGhlIFF1aWNrTm90ZVJlc3VsdHMgY29tcG9uZW50IG9uIGl0J3NcbiAgICogcGFyZW50ICh0aGlzIGVsZW1lbnQpLlxuICAgKlxuICAgKiBAcGFyYW0gdGFnZ2luZ01vZGUgLSB0eXBlIG9mIHRhZ3Mgd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAqIEBwYXJhbSBzZWxlY3RlZCAtIHNlbGVjdGVkIG9iamVjdCBmcm9tIHRoZSBwaWNrZXIgdGhhdCBoYXMgYSBsYWJlbCBhbmQgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgb25TZWxlY3RlZCh0YWdnaW5nTW9kZTogc3RyaW5nLCBzZWxlY3RlZDogYW55KTogdm9pZCB7XG4gICAgLy8gVHVybiBvZmYgdGFnZ2luZ1xuICAgIHRoaXMuaXNUYWdnaW5nID0gZmFsc2U7XG5cbiAgICAvLyBSZXBsYWNlIHNlYXJjaFRlcm0gd2l0aCBsaW5rXG4gICAgY29uc3Qgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGFnZ2luZ01vZGVdO1xuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcih0YWdnaW5nTW9kZSk7XG4gICAgY29uc3QgcmVuZGVyZWRUZXh0ID0gcmVuZGVyZXIoc3ltYm9sLCBzZWxlY3RlZCk7XG5cbiAgICB0aGlzLnJlcGxhY2VXb3JkQXRDdXJzb3IocmVuZGVyZWRUZXh0KTtcblxuICAgIC8vIEFkZCB0aGUgbmV3IHJlZmVyZW5jZSwgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzIHx8IHt9O1xuICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdIHx8IFtdO1xuICAgIGNvbnN0IG1hdGNoaW5nSXRlbXMgPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLmZpbHRlcigoaXRlbSkgPT4gSlNPTi5zdHJpbmdpZnkoaXRlbSkgPT09IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkKSk7XG4gICAgaWYgKG1hdGNoaW5nSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLnB1c2goc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgcXVpY2sgbm90ZSB3aXRoIHRoZSBjaGFuZ2VzIGR1ZSB0byB0aGUgdXNlcidzIHNlbGVjdGlvbiBvZiBhbiBpdGVtIGluIHRoZSBkcm9wZG93blxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGdldHMgdGhlIGN1cnJlbnQgd29yZCB0aGF0IHRoZSBjdXJzb3IgaXMgb24sIG1pbnVzIHRoZSB0YWcuXG4gICAqIEFsc28sIHRyaW1zIGFueSB3aGl0ZXNwYWNlIGJlZm9yZS9hZnRlciB0aGUgdGVybSB0byBhaWQgaW4gc2VhcmNoaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTZWFyY2hUZXJtKCk6IHN0cmluZyB7XG4gICAgbGV0IHdvcmQgPSB0aGlzLmdldFdvcmRBdEN1cnNvcigpLnRyaW0oKTtcbiAgICBpZiAodGhpcy5pc1RhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RoaXMudGFnZ2luZ01vZGVdO1xuICAgICAgaWYgKCF3b3JkLmluY2x1ZGVzKHN5bWJvbCkpIHtcbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICB3b3JkID0gd29yZC5zbGljZSh3b3JkLmluZGV4T2Yoc3ltYm9sKSArIHN5bWJvbC5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHdvcmQgdGhhdCB0aGUgY3Vyc29yIGlzIG9uIENLRWRpdG9yLiBDdXJyZW50IHdvcmQgc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgb3IgYVxuICAgKiB0YWcgY2hhcmFjdGVyIGlmIHdlIGFyZSBpbiB0YWdnaW5nIG1vZGUuIEN1cnJlbnQgd29yZCBlbmRzIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgb3IgYW4gZW1wdHkgc3BhY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHBsYWluIHRleHQgc3RyaW5nIChyZW1vdmVzIGFsbCBodG1sIGZvcm1hdHRpbmcpXG4gICAqL1xuICBwcml2YXRlIGdldFdvcmRBdEN1cnNvcigpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuXG4gICAgaWYgKHN0YXJ0LnR5cGUgPT09IENLRURJVE9SLk5PREVfVEVYVCAmJiByYW5nZS5zdGFydE9mZnNldCkge1xuICAgICAgY29uc3QgdGV4dCA9IHN0YXJ0LmdldFRleHQoKTtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RoaXMudGFnZ2luZ01vZGVdO1xuICAgICAgbGV0IHdvcmRTdGFydCA9IHRleHQubGFzdEluZGV4T2Yoc3ltYm9sLCByYW5nZS5zdGFydE9mZnNldCAtIDEpO1xuXG4gICAgICBpZiAod29yZFN0YXJ0ID4gMCkge1xuICAgICAgICBjb25zdCBiZWZvcmVTeW1ib2w6IHN0cmluZyA9IHRleHQuY2hhckF0KHdvcmRTdGFydCAtIDEpO1xuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHRyaWdnZXIgdGhlIGxvb2t1cCBjYWxsIHVubGVzcyB0aGUgc3ltYm9sIHdhcyBwcmVjZWRlZCBieSB3aGl0ZXNwYWNlXG4gICAgICAgIGlmIChiZWZvcmVTeW1ib2wgIT09ICdcXHUyMDBCJyAmJiAvXFxTLy50ZXN0KGJlZm9yZVN5bWJvbCkpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhcnQuaGFzUHJldmlvdXMoKSAmJiAvXFxTJC8udGVzdChzdGFydC5nZXRQcmV2aW91cygpLmdldFRleHQoKSkpIHtcbiAgICAgICAgLy8gV2hlbiB3b3JkU3RhcnQgaXMgPD0gMCwgd2UgbmVlZCB0byBjaGVjayB0aGUgcHJldmlvdXMgbm9kZSdzIHRleHQgdG8gc2VlIGlmIGl0IGVuZGVkIHdpdGggd2hpdGVzcGFjZSBvciBub3RcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgd29yZEVuZCA9IHRleHQuaW5kZXhPZignICcsIHJhbmdlLnN0YXJ0T2Zmc2V0ICsgMSk7XG4gICAgICBpZiAod29yZFN0YXJ0ID09PSAtMSkge1xuICAgICAgICB3b3JkU3RhcnQgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHdvcmRFbmQgPT09IC0xKSB7XG4gICAgICAgIHdvcmRFbmQgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHdvcmRTdGFydCwgd29yZEVuZCk7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0aW9uIHN0YXJ0cyBhdCB0aGUgMCBpbmRleCBvZiB0aGUgdGV4dCBub2RlIG9yIHRoZXJlJ3Mgbm8gcHJldmlvdXMgdGV4dCBub2RlIGluIGNvbnRlbnRzXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSB3b3JkIHRoYXQgdGhlIHVzZXIgaXMgb24gd2l0aCB0aGUgZ2l2ZW4gaHRtbC5cbiAgICpcbiAgICogQ0tFZGl0b3IgZ2l2ZXMgdXMgYWNjZXNzIHRvIHRoZSBjdXJyZW50IGxpbmUgb2YgaHRtbCBpbiB0aGUgZWRpdG9yLCBzbyB3ZSByZXBsYWNlIHRoZSBjb250ZW50IG9mXG4gICAqIHRoZSBsaW5lLCByZXBsYWNpbmcgb25seSB0aGUgY3VycmVudCB3b3JkLlxuICAgKi9cbiAgcHJpdmF0ZSByZXBsYWNlV29yZEF0Q3Vyc29yKG5ld1dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsV29yZCA9IHRoaXMuZ2V0V29yZEF0Q3Vyc29yKCkudHJpbSgpO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBjb25zdCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBzdGFydC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChzdGFydC50eXBlID09PSBDS0VESVRPUi5OT0RFX1RFWFQgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgY29uc3QgbGluZSA9IHBhcmVudE5vZGUuZ2V0SHRtbCgpO1xuICAgICAgY29uc3QgaW5kZXggPSBsaW5lLmxhc3RJbmRleE9mKG9yaWdpbmFsV29yZCk7XG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIC8vIEFkZCBhIHNwYWNlIGFmdGVyIHRoZSByZXBsYWNlZCB3b3JkIHNvIHRoYXQgbXVsdGlwbGUgcmVmZXJlbmNlcyBjYW4gYmUgYWRkZWQgYmFjayB0byBiYWNrXG4gICAgICAgIGNvbnN0IG5ld0xpbmUgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCkgKyBuZXdXb3JkICsgJyAnICsgbGluZS5zdWJzdHJpbmcoaW5kZXggKyBvcmlnaW5hbFdvcmQubGVuZ3RoKTtcbiAgICAgICAgcGFyZW50Tm9kZS5zZXRIdG1sKG5ld0xpbmUpO1xuXG4gICAgICAgIC8vIFBsYWNlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAgIHJhbmdlLm1vdmVUb1Bvc2l0aW9uKHBhcmVudE5vZGUsIENLRURJVE9SLlBPU0lUSU9OX0JFRk9SRV9FTkQpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLnNlbGVjdFJhbmdlcyhbcmFuZ2VdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IHJlZmVyZW5jZXMsIG1pbnVzIGFueSBmcm9tIHRoZSBtb2RlbCB0aGF0IGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIGVkaXRvci5cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVSZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIGxldCBodG1sID0gdGhpcy5ja2VJbnN0YW5jZS5kb2N1bWVudC5nZXRCb2R5KCkuZ2V0SHRtbCgpO1xuXG4gICAgLy8gQ0tFZGl0b3Igc3RvcHBlZCBzdXBwb3J0aW5nIHRoZSBjb25maWcuZm9yY2VTaW1wbGVBbXBlcnNhbmQgc2V0dGluZywgc28gd2UgaGF2ZSB0byBjb252ZXJ0ICcmYW1wOycgdG8gJyYnXG4gICAgLy8gd2hlbiB3ZSBwdWxsIGh0bWwgZnJvbSB0aGUgZWRpdG9yIC0gc2VlOiBodHRwczovL2Rldi5ja2VkaXRvci5jb20vdGlja2V0LzEzNzIzXG4gICAgY29uc3QgYW1wUmVnZXggPSBuZXcgUmVnRXhwKCcmYW1wOycsICdnJyk7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZShhbXBSZWdleCwgJyYnKTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMubW9kZWwucmVmZXJlbmNlcykuZm9yRWFjaCgodGFnZ2luZ01vZGUpID0+IHtcbiAgICAgIGNvbnN0IGFycmF5ID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSB8fCBbXTtcbiAgICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RhZ2dpbmdNb2RlXTtcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcih0YWdnaW5nTW9kZSk7XG5cbiAgICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZWRUZXh0ID0gcmVuZGVyZXIoc3ltYm9sLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGh0bWwuaW5jbHVkZXMocmVuZGVyZWRUZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiBubyByZWZlcmVuY2VzLCB0aGVuIGRlbGV0ZSB0aGUga2V5XG4gICAgICBpZiAodGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgQ0tFZGl0b3IgZm9yIFF1aWNrTm90ZSBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIENLRWRpdG9yIGR5bmFtaWNhbGx5IHRvIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZXIgdXBvbiBpbml0aWFsaXphdGlvbi5cbiAgICogUmVtb3ZlcyB0aGUgdG9vbGJhciBvbiB0aGUgYm90dG9tIGFuZCBjb25maWd1cmVzIGEgc2xpbW1lZCBkb3duIHZlcnNpb24gb2YgdGhlIHRvb2xiYXIuXG4gICAqIFJlbW92ZXMgcGx1Z2lucyBhbmQgdHVybnMgb2ZmIHNldHRpbmcgdG8gYWxsb3cgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q0tFZGl0b3JDb25maWcoKTogYW55IHtcbiAgICAvLyBVc2UgdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlciBlbGVtZW50IHRvIHNldCB0aGUgaW5pdGlhbCBoZWlnaHQgb2YgdGhlIGVkaXRvciwgdGhlblxuICAgIC8vIHNldCBpdCB0byAxMDAlIHRvIGFsbG93IHRoZSBlZGl0b3IgdG8gcmVzaXplIHVzaW5nIHRoZSBncmlwcHkuXG4gICAgY29uc3QgZWRpdG9ySGVpZ2h0ID0gdGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgJzEwMCUnKTtcblxuICAgIHJldHVybiB7XG4gICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgc2hpZnRFbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX1AsXG4gICAgICBkaXNhYmxlTmF0aXZlU3BlbGxDaGVja2VyOiBmYWxzZSxcbiAgICAgIGhlaWdodDogZWRpdG9ySGVpZ2h0LFxuICAgICAgc3RhcnR1cEZvY3VzOiB0aGlzLnN0YXJ0dXBGb2N1cyxcbiAgICAgIHJlbW92ZVBsdWdpbnM6ICdsaXN0c3R5bGUsdGFibGV0b29scyxjb250ZXh0bWVudScsIC8vIGFsbG93cyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nXG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYmFzaWNzdHlsZXMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAnU3R5bGVzJyxcbiAgICAgICAgICAgICdGb250U2l6ZScsXG4gICAgICAgICAgICAnQm9sZCcsXG4gICAgICAgICAgICAnSXRhbGljJyxcbiAgICAgICAgICAgICdVbmRlcmxpbmUnLFxuICAgICAgICAgICAgJ1RleHRDb2xvcicsXG4gICAgICAgICAgICAnLScsXG4gICAgICAgICAgICAnTnVtYmVyZWRMaXN0JyxcbiAgICAgICAgICAgICdCdWxsZXRlZExpc3QnLFxuICAgICAgICAgICAgJ091dGRlbnQnLFxuICAgICAgICAgICAgJ0luZGVudCcsXG4gICAgICAgICAgICAnTGluaycsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNjcmVlbiBwb3NpdGlvbiBvZiB0aGUgY3Vyc29yIGluIENLRWRpdG9yLCBhY2NvdW50aW5nIGZvciBhbnkgc2Nyb2xsaW5nIGluIHRoZSBlZGl0b3IuXG4gICAqL1xuICBwcml2YXRlIGdldEN1cnNvclBvc2l0aW9uKCk6IGFueSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLmdldFJhbmdlcygpWzBdO1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSByYW5nZS5zdGFydENvbnRhaW5lci4kLnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgZWRpdG9yRWxlbWVudCA9IHRoaXMuY2tlSW5zdGFuY2UuZWRpdGFibGUoKS4kO1xuXG4gICAgLy8gU2luY2UgdGhlIGVkaXRvciBpcyBhIHRleHQgbm9kZSBpbiB0aGUgRE9NIHRoYXQgZG9lcyBub3Qga25vdyBhYm91dCBpdCdzIHBvc2l0aW9uLCBhIHRlbXBvcmFyeSBlbGVtZW50IGhhcyB0b1xuICAgIC8vIGJlIGluc2VydGVkIGluIG9yZGVyIHRvIGxvY2F0ZSB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgIGNvbnN0IGN1cnNvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJ251bGwnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIGN1cnNvckVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuXG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjdXJzb3JFbGVtZW50KTtcbiAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogY3Vyc29yRWxlbWVudC5vZmZzZXRUb3AgLSBlZGl0b3JFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IGN1cnNvckVsZW1lbnQub2Zmc2V0TGVmdCAtIGVkaXRvckVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICB9O1xuICAgIGN1cnNvckVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gY3Vyc29yUG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogUG9zaXRpb25zIHRoZSByZXN1bHRzIGRyb3Bkb3duIGJhc2VkIG9uIHRoZSBsb2NhdGlvbiBvZiB0aGUgY3Vyc29yIGluIHRoZSB0ZXh0IGZpZWxkXG4gICAqL1xuICBwcml2YXRlIHBvc2l0aW9uUmVzdWx0c0Ryb3Bkb3duKCk6IHZvaWQge1xuICAgIGNvbnN0IE1JTl9NQVJHSU5fVE9QOiBudW1iZXIgPSBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUICogMjtcbiAgICBjb25zdCBNQVhfTUFSR0lOX1RPUDogbnVtYmVyID0gdGhpcy5nZXRDb250ZW50SGVpZ2h0KCkgKyBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUO1xuXG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgbGV0IG1hcmdpblRvcDogbnVtYmVyID0gY3Vyc29yUG9zaXRpb24udG9wICsgUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcblxuICAgIC8vIENoZWNrIHRoYXQgdGhlIG1hcmdpbiBpcyB3aXRoaW4gdGhlIHZpc2libGUgYm91bmRzXG4gICAgbWFyZ2luVG9wID0gTWF0aC5tYXgobWFyZ2luVG9wLCBNSU5fTUFSR0lOX1RPUCk7XG4gICAgbWFyZ2luVG9wID0gTWF0aC5taW4obWFyZ2luVG9wLCBNQVhfTUFSR0lOX1RPUCk7XG5cbiAgICAvLyBTZXQgdGhlIG1hcmdpbi10b3Agb2YgdGhlIGRyb3Bkb3duXG4gICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWFyZ2luLXRvcCcsIG1hcmdpblRvcCArICdweCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIGNvbnRlbnQgYXJlYSAtIHRoZSB0ZXh0IHRoYXQgdGhlIHVzZXIgaGFzIGVudGVyZWQuXG4gICAqL1xuICBwcml2YXRlIGdldENvbnRlbnRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBsZXQgY29udGVudEhlaWdodDogbnVtYmVyID0gMDtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpICYmXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudCAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJCAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJC5zdHlsZVxuICAgICkge1xuICAgICAgY29uc3QgY3NzVGV4dDogc3RyaW5nID0gdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJC5zdHlsZS5jc3NUZXh0O1xuICAgICAgaWYgKGNzc1RleHQuaW5kZXhPZignaGVpZ2h0OiAnKSAhPT0gLTEpIHtcbiAgICAgICAgbGV0IGhlaWdodDogc3RyaW5nID0gY3NzVGV4dC5zcGxpdCgnaGVpZ2h0OiAnKVsxXTtcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0LnNwbGl0KCdweCcpWzBdO1xuICAgICAgICBjb250ZW50SGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LCAxMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHBsYWNlaG9sZGVyIHRleHQgaWYgdGhlIGVkaXRvciBpcyBlbXB0eVxuICAgKi9cbiAgcHJpdmF0ZSBzaG93UGxhY2Vob2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNrZUluc3RhbmNlLmdldERhdGEoKSAmJiAhdGhpcy5zdGFydHVwRm9jdXMpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2VcbiAgICAgICAgLmVkaXRhYmxlKClcbiAgICAgICAgLmdldFBhcmVudCgpXG4gICAgICAgIC4kLmFwcGVuZENoaWxkKHRoaXMucGxhY2Vob2xkZXJFbGVtZW50KTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgcGxhY2Vob2xkZXIgdGV4dCBieSByZW1vdmluZyB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICovXG4gIHByaXZhdGUgaGlkZVBsYWNlaG9sZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZVxuICAgICAgICAuZWRpdGFibGUoKVxuICAgICAgICAuZ2V0UGFyZW50KClcbiAgICAgICAgLiQucmVtb3ZlQ2hpbGQodGhpcy5wbGFjZWhvbGRlckVsZW1lbnQpO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlclZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yIGNyZWF0ZSB0aGUgc2luZ2xlIHBsYWNlaG9sZGVyIG9iamVjdCB0aGF0IGlzIGNvbnN0cnVjdGVkIG9ubHkgd2hlbiBuZWVkZWQuXG4gICAqL1xuICBwcml2YXRlIGdldCBwbGFjZWhvbGRlckVsZW1lbnQoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQuY2xhc3NOYW1lID0gJ3BsYWNlaG9sZGVyJztcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgJ21hcmdpbjogMjBweDsgY29sb3I6ICNBQUFBQUE7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEzcHg7IGxpbmUtaGVpZ2h0OiAyMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMCc7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50O1xuICB9XG59XG4iXX0=