/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, ElementRef, ViewChild, ViewContainerRef, Input, Output, NgZone, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { OutsideClick } from './../../utils/outside-click/OutsideClick';
import { KeyCodes } from './../../utils/key-codes/KeyCodes';
import { QuickNoteResults } from './extras/quick-note-results/QuickNoteResults';
import { ComponentUtils } from './../../utils/component-utils/ComponentUtils';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const QUICK_NOTE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QuickNoteElement),
    multi: true,
};
export class QuickNoteElement extends OutsideClick {
    /**
     * @param {?} zone
     * @param {?} element
     * @param {?} componentUtils
     */
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
        // in pixels - configured by stylesheet
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
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
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
     * @return {?}
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
    /**
     * @param {?=} event
     * @return {?}
     */
    onTouched(event) {
        this.onModelTouched();
    }
    /**
     * Handles setting the model and the view from the outside caller or the user's typing
     *
     * @param {?} model A model that has a note (html content) and references (array of objects)
     * @return {?}
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
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * If a renderer is not provided, the QuickNote will default to using this one, an anchor tag with no href
     * @private
     * @param {?} symbol
     * @param {?} item
     * @return {?}
     */
    static defaultRenderer(symbol, item) {
        return `<a>${symbol}${item.label}</a>`;
    }
    /**
     * Returns the renderer for a given tagging mode if it exists in the config, otherwise the default.
     * @private
     * @param {?} taggingMode
     * @return {?}
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
     * @private
     * @param {?} event The key press event
     * @return {?} true to allow the event to occur, false to cancel the event
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
                /** @type {?} */
                let triggers = this.config.triggers || {};
                Object.keys(triggers).forEach((key) => {
                    /** @type {?} */
                    let trigger = triggers[key] || {};
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
     * @private
     * @return {?}
     */
    onValueChange() {
        // Get the html text in CKEditor
        /** @type {?} */
        let value = this.ckeInstance.getData();
        // Remove empty 'ZERO WIDTH SPACE' characters that can get added erroneously by the editor
        /** @type {?} */
        let regex = new RegExp(String.fromCharCode(8203), 'g');
        value = value.replace(regex, '');
        // Make sure that any references in the model are still valid
        this.validateReferences();
        // Possibly show results if the user has entered a search term
        this.showResults();
        // Propagate change to ngModel for form validation, and send null if the note is empty
        /** @type {?} */
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
     * @private
     * @return {?}
     */
    showResults() {
        if (this.isTagging) {
            /** @type {?} */
            let searchTerm = this.getSearchTerm();
            if (searchTerm.length) {
                // Update Matches
                if (this.quickNoteResults) {
                    // Update existing list
                    this.quickNoteResults.instance.term = {
                        searchTerm: searchTerm,
                        taggingMode: this.taggingMode,
                    };
                }
                else {
                    // Create the results DOM element
                    this.quickNoteResults = this.componentUtils.append(this.resultsComponent, this.results);
                    this.quickNoteResults.instance.parent = this;
                    this.quickNoteResults.instance.config = this.config;
                    this.quickNoteResults.instance.term = {
                        searchTerm: searchTerm,
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
     * @private
     * @return {?}
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
     * @private
     * @param {?} taggingMode - type of tags we are looking for
     * @param {?} selected - selected object from the picker that has a label and value
     * @return {?}
     */
    onSelected(taggingMode, selected) {
        // Turn off tagging
        this.isTagging = false;
        // Replace searchTerm with link
        /** @type {?} */
        let symbol = this.config.triggers[taggingMode];
        /** @type {?} */
        let renderer = this.getRenderer(taggingMode);
        /** @type {?} */
        let renderedText = renderer(symbol, selected);
        this.replaceWordAtCursor(renderedText);
        // Add the new reference, if it doesn't already exist
        this.model.references = this.model.references || {};
        this.model.references[taggingMode] = this.model.references[taggingMode] || [];
        /** @type {?} */
        let matchingItems = this.model.references[taggingMode].filter((item) => JSON.stringify(item) === JSON.stringify(selected));
        if (matchingItems.length === 0) {
            this.model.references[taggingMode].push(selected);
        }
        // Update the quick note with the changes due to the user's selection of an item in the dropdown
        this.onValueChange();
    }
    /**
     * Convenience method that gets the current word that the cursor is on, minus the tag.
     * Also, trims any whitespace before/after the term to aid in searching.
     * @private
     * @return {?}
     */
    getSearchTerm() {
        /** @type {?} */
        let word = this.getWordAtCursor().trim();
        if (this.isTagging) {
            /** @type {?} */
            let symbol = this.config.triggers[this.taggingMode];
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
     * @private
     * @return {?} plain text string (removes all html formatting)
     */
    getWordAtCursor() {
        /** @type {?} */
        let range = this.ckeInstance.getSelection().getRanges()[0];
        /** @type {?} */
        let start = range.startContainer;
        if (start.type === CKEDITOR.NODE_TEXT && range.startOffset) {
            /** @type {?} */
            let text = start.getText();
            /** @type {?} */
            let symbol = this.config.triggers[this.taggingMode];
            /** @type {?} */
            let wordStart = text.lastIndexOf(symbol, range.startOffset - 1);
            if (wordStart > 0) {
                /** @type {?} */
                let beforeSymbol = text.charAt(wordStart - 1);
                // We don't want to trigger the lookup call unless the symbol was preceded by whitespace
                if (beforeSymbol !== '\u200B' && /\S/.test(beforeSymbol)) {
                    return '';
                }
            }
            else if (start.hasPrevious() && /\S$/.test(start.getPrevious().getText())) {
                // When wordStart is <= 0, we need to check the previous node's text to see if it ended with whitespace or not
                return '';
            }
            /** @type {?} */
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
     * @private
     * @param {?} newWord
     * @return {?}
     */
    replaceWordAtCursor(newWord) {
        /** @type {?} */
        let originalWord = this.getWordAtCursor().trim();
        /** @type {?} */
        let range = this.ckeInstance.getSelection().getRanges()[0];
        /** @type {?} */
        let start = range.startContainer;
        /** @type {?} */
        let parentNode = start.getParent();
        if (start.type === CKEDITOR.NODE_TEXT && parentNode) {
            /** @type {?} */
            let line = parentNode.getHtml();
            /** @type {?} */
            let index = line.lastIndexOf(originalWord);
            if (index >= 0) {
                // Add a space after the replaced word so that multiple references can be added back to back
                /** @type {?} */
                let newLine = line.substring(0, index) + newWord + ' ' + line.substring(index + originalWord.length);
                parentNode.setHtml(newLine);
                // Place selection at the end of the line
                range.moveToPosition(parentNode, CKEDITOR.POSITION_BEFORE_END);
                this.ckeInstance.getSelection().selectRanges([range]);
            }
        }
    }
    /**
     * Returns current references, minus any from the model that have been removed from the editor.
     * @private
     * @return {?}
     */
    validateReferences() {
        /** @type {?} */
        let html = this.ckeInstance.document.getBody().getHtml();
        // CKEditor stopped supporting the config.forceSimpleAmpersand setting, so we have to convert '&amp;' to '&'
        // when we pull html from the editor - see: https://dev.ckeditor.com/ticket/13723
        /** @type {?} */
        let ampRegex = new RegExp('&amp;', 'g');
        html = html.replace(ampRegex, '&');
        Object.keys(this.model.references).forEach((taggingMode) => {
            /** @type {?} */
            let array = this.model.references[taggingMode] || [];
            /** @type {?} */
            let symbol = this.config.triggers[taggingMode];
            /** @type {?} */
            let renderer = this.getRenderer(taggingMode);
            this.model.references[taggingMode] = array.filter((item) => {
                /** @type {?} */
                let renderedText = renderer(symbol, item);
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
     * @private
     * @return {?}
     */
    getCKEditorConfig() {
        // Use the height of the wrapper element to set the initial height of the editor, then
        // set it to 100% to allow the editor to resize using the grippy.
        /** @type {?} */
        let editorHeight = this.wrapper.nativeElement.clientHeight - QuickNoteElement.TOOLBAR_HEIGHT;
        this.wrapper.nativeElement.style.setProperty('height', '100%');
        return {
            enterMode: CKEDITOR.ENTER_BR,
            shiftEnterMode: CKEDITOR.ENTER_P,
            disableNativeSpellChecker: false,
            height: editorHeight,
            startupFocus: this.startupFocus,
            removePlugins: 'liststyle,tabletools,contextmenu',
            // allows browser based spell checking
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
     * @private
     * @return {?}
     */
    getCursorPosition() {
        /** @type {?} */
        let range = this.ckeInstance.getSelection().getRanges()[0];
        /** @type {?} */
        let parentElement = range.startContainer.$.parentElement;
        /** @type {?} */
        let editorElement = this.ckeInstance.editable().$;
        // Since the editor is a text node in the DOM that does not know about it's position, a temporary element has to
        // be inserted in order to locate the cursor position.
        /** @type {?} */
        let cursorElement = document.createElement('img');
        cursorElement.setAttribute('src', 'null');
        cursorElement.setAttribute('width', '0');
        cursorElement.setAttribute('height', '0');
        parentElement.appendChild(cursorElement);
        /** @type {?} */
        let cursorPosition = {
            top: cursorElement.offsetTop - editorElement.scrollTop,
            left: cursorElement.offsetLeft - editorElement.scrollLeft,
        };
        cursorElement.remove();
        return cursorPosition;
    }
    /**
     * Positions the results dropdown based on the location of the cursor in the text field
     * @private
     * @return {?}
     */
    positionResultsDropdown() {
        /** @type {?} */
        const MIN_MARGIN_TOP = QuickNoteElement.TOOLBAR_HEIGHT * 2;
        /** @type {?} */
        const MAX_MARGIN_TOP = this.getContentHeight() + QuickNoteElement.TOOLBAR_HEIGHT;
        /** @type {?} */
        let cursorPosition = this.getCursorPosition();
        /** @type {?} */
        let marginTop = cursorPosition.top + QuickNoteElement.TOOLBAR_HEIGHT;
        // Check that the margin is within the visible bounds
        marginTop = Math.max(marginTop, MIN_MARGIN_TOP);
        marginTop = Math.min(marginTop, MAX_MARGIN_TOP);
        // Set the margin-top of the dropdown
        this.quickNoteResults.instance.element.nativeElement.style.setProperty('margin-top', marginTop + 'px');
    }
    /**
     * Returns the height in pixels of the content area - the text that the user has entered.
     * @private
     * @return {?}
     */
    getContentHeight() {
        /** @type {?} */
        let contentHeight = 0;
        if (this.ckeInstance.ui &&
            this.ckeInstance.ui.contentsElement &&
            this.ckeInstance.ui.contentsElement.$ &&
            this.ckeInstance.ui.contentsElement.$.style) {
            /** @type {?} */
            let cssText = this.ckeInstance.ui.contentsElement.$.style.cssText;
            if (cssText.indexOf('height: ') !== -1) {
                /** @type {?} */
                let height = cssText.split('height: ')[1];
                height = height.split('px')[0];
                contentHeight = parseInt(height);
            }
        }
        return contentHeight;
    }
    /**
     * Show the placeholder text if the editor is empty
     * @private
     * @return {?}
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
     * @private
     * @return {?}
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
     * @private
     * @return {?}
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
QuickNoteElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-quick-note',
                providers: [QUICK_NOTE_VALUE_ACCESSOR],
                template: `
        <div class="quick-note-wrapper" #wrapper>
            <textarea #host></textarea>
            <span #results></span>
        </div>
    `
            }] }
];
/** @nocollapse */
QuickNoteElement.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: ComponentUtils }
];
QuickNoteElement.propDecorators = {
    wrapper: [{ type: ViewChild, args: ['wrapper',] }],
    host: [{ type: ViewChild, args: ['host',] }],
    results: [{ type: ViewChild, args: ['results', { read: ViewContainerRef },] }],
    config: [{ type: Input }],
    startupFocus: [{ type: Input }],
    placeholder: [{ type: Input }],
    focus: [{ type: Output }],
    blur: [{ type: Output }],
    change: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.TOOLBAR_HEIGHT;
    /** @type {?} */
    QuickNoteElement.prototype.wrapper;
    /** @type {?} */
    QuickNoteElement.prototype.host;
    /** @type {?} */
    QuickNoteElement.prototype.results;
    /** @type {?} */
    QuickNoteElement.prototype.config;
    /** @type {?} */
    QuickNoteElement.prototype.startupFocus;
    /** @type {?} */
    QuickNoteElement.prototype.placeholder;
    /** @type {?} */
    QuickNoteElement.prototype.focus;
    /** @type {?} */
    QuickNoteElement.prototype.blur;
    /** @type {?} */
    QuickNoteElement.prototype.change;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.resultsComponent;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.quickNoteResults;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.isTagging;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.taggingMode;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.model;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.ckeInstance;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.debounceTimeout;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.placeholderVisible;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype._placeholderElement;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.onModelChange;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.zone;
    /**
     * @type {?}
     * @private
     */
    QuickNoteElement.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7O01BR3hFLHlCQUF5QixHQUFHO0lBQ2hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQyxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBY0QsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFlBQVk7Ozs7OztJQXVDaEQsWUFBb0IsSUFBWSxFQUFFLE9BQW1CLEVBQVUsY0FBOEI7UUFDM0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBREcsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUErQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1QjdGLGlCQUFZLEdBQVksS0FBSyxDQUFDOztRQU05QixVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLFdBQU0sR0FBc0IsSUFBSSxZQUFZ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SUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pEO1FBQ0QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDbEMsQ0FBQzs7QUExa0JjLCtCQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsdUNBQXVDOztZQTVDNUUsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxRQUFRLEVBQUU7Ozs7O0tBS1A7YUFDSjs7OztZQTNCQyxNQUFNO1lBUk4sVUFBVTtZQWVILGNBQWM7OztzQkFzQnBCLFNBQVMsU0FBQyxTQUFTO21CQUVuQixTQUFTLFNBQUMsTUFBTTtzQkFFaEIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtxQkFHL0MsS0FBSzsyQkFFTCxLQUFLOzBCQUVMLEtBQUs7b0JBSUwsTUFBTTttQkFFTixNQUFNO3FCQUVOLE1BQU07Ozs7Ozs7SUFjUCxnQ0FBbUM7O0lBakNuQyxtQ0FDMkI7O0lBQzNCLGdDQUN3Qjs7SUFDeEIsbUNBQzBCOztJQUUxQixrQ0FDWTs7SUFDWix3Q0FDOEI7O0lBQzlCLHVDQUNvQjs7SUFHcEIsaUNBQzhDOztJQUM5QyxnQ0FDNkM7O0lBQzdDLGtDQUMrQzs7Ozs7SUFHL0MsNENBQThCOzs7OztJQUM5Qiw0Q0FBOEI7Ozs7O0lBQzlCLHFDQUEyQjs7Ozs7SUFDM0IsdUNBQTRCOzs7OztJQUM1QixpQ0FBbUI7Ozs7O0lBQ25CLHVDQUF5Qjs7Ozs7SUFDekIsMkNBQTZCOzs7OztJQUM3Qiw4Q0FBNEM7Ozs7O0lBQzVDLCtDQUF3Qzs7Ozs7SUFJeEMseUNBQTJDOzs7OztJQUMzQywwQ0FBNEM7Ozs7O0lBRWhDLGdDQUFvQjs7Ozs7SUFBdUIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUXVpY2tOb3RlUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3F1aWNrLW5vdGUtcmVzdWx0cy9RdWlja05vdGVSZXN1bHRzJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFFVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBRdWlja05vdGVFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXF1aWNrLW5vdGUnLFxuICBwcm92aWRlcnM6IFtRVUlDS19OT1RFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLW5vdGUtd3JhcHBlclwiICN3cmFwcGVyPlxuICAgICAgICAgICAgPHRleHRhcmVhICNob3N0PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8c3BhbiAjcmVzdWx0cz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZUVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInKVxuICBwdWJsaWMgd3JhcHBlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaG9zdCcpXG4gIHB1YmxpYyBob3N0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyZXN1bHRzJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHJlc3VsdHM6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0dXBGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8vIEVtaXR0ZXIgZm9yIHNlbGVjdHNcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBUaGUgY2hhcmFjdGVycyB0aGF0IHRoZSB1c2VyIGVudGVycyBpbiBvcmRlciB0byBzZWFyY2ggZm9yIGEgcGVyc29uL3RoaW5nIHRvIHRhZ1xuICBwcml2YXRlIHJlc3VsdHNDb21wb25lbnQ6IGFueTtcbiAgcHJpdmF0ZSBxdWlja05vdGVSZXN1bHRzOiBhbnk7XG4gIHByaXZhdGUgaXNUYWdnaW5nOiBib29sZWFuO1xuICBwcml2YXRlIHRhZ2dpbmdNb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgbW9kZWw6IGFueTtcbiAgcHJpdmF0ZSBja2VJbnN0YW5jZTogYW55O1xuICBwcml2YXRlIGRlYm91bmNlVGltZW91dDogYW55O1xuICBwcml2YXRlIHBsYWNlaG9sZGVyVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlckVsZW1lbnQ6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgVE9PTEJBUl9IRUlHSFQgPSA0MDsgLy8gaW4gcGl4ZWxzIC0gY29uZmlndXJlZCBieSBzdHlsZXNoZWV0XG5cbiAgcHJpdmF0ZSBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIC8vIEJpbmQgdG8gdGhlIGFjdGl2ZSBjaGFuZ2UgZXZlbnQgZnJvbSB0aGUgT3V0c2lkZUNsaWNrXG4gICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGFjdGl2ZSkgPT4ge1xuICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHByb3BlciBjb25maWdcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbmZpZyBzZXQgZm9yIFF1aWNrTm90ZSEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSB0cmlnZ2Vyc1xuICAgIGlmICghdGhpcy5jb25maWcudHJpZ2dlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVpY2tOb3RlIGNvbmZpZyBtdXN0IHN1cHBseSB0cmlnZ2VycyEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBvcHRpb25zXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1aWNrTm90ZSBjb25maWcgbXVzdCBzdXBwbHkgb3B0aW9ucyEnKTtcbiAgICB9XG4gICAgLy8gQWxsb3cgZm9yIGNhbGxlcnMgdG8gdXNlIGEgY3VzdG9tIHJlc3VsdHMgdGVtcGxhdGUgY2xhc3MgaW4gdGhlIGNvbmZpZ1xuICAgIHRoaXMucmVzdWx0c0NvbXBvbmVudCA9IHRoaXMuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCBRdWlja05vdGVSZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIFRlYXIgZG93biB0aGUgQ0tFZGl0b3IgaW5zdGFuY2VcbiAgICBpZiAodGhpcy5ja2VJbnN0YW5jZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZS5mb2N1c01hbmFnZXIuYmx1cih0cnVlKTsgLy8gUmVtb3ZlIGZvY3VzIGZyb20gZWRpdG9yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuY2tlSW5zdGFuY2UubmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byBrZXkvbW91c2UgZXZlbnRzIGZyb20gQ0tFZGl0b3IgYWZ0ZXIgdGhlIGVkaXRvciBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgKi9cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIUNLRURJVE9SKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYWtlIHN1cmUgdG8gaW5jbHVkZSBDS0VkaXRvciBzb3VyY2VzIGluIHlvdXIgZGVwZW5kZW5jaWVzIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgdGhlIHRleHRhcmVhIHdpdGggYW4gaW5zdGFuY2Ugb2YgQ0tFZGl0b3JcbiAgICB0aGlzLmNrZUluc3RhbmNlID0gQ0tFRElUT1IucmVwbGFjZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgdGhpcy5nZXRDS0VkaXRvckNvbmZpZygpKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHZhbHVlIG9mIHRoZSBub3RlIGluIHRoZSBlZGl0b3JcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG5cbiAgICAvLyBDb25uZWN0IHRvIHRoZSBrZXkgZXZlbnQgaW4gQ0tFZGl0b3IgZm9yIHNob3dpbmcgcmVzdWx0cyBkcm9wZG93blxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2tleScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMub25LZXkoZXZlbnQuZGF0YS5kb21FdmVudC4kKSkge1xuICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGNoYW5nZSBldmVudCBpbiBDS0VkaXRvciBmb3IgZGVib3VuY2luZyB1c2VyIG1vZGlmaWNhdGlvbnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAvLyBEZWJvdW5jZSB1cGRhdGVcbiAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gUnVuIHdpdGhpbiB0aGUgY29udGV4dCBvZiB0aGlzIGFuZ3VsYXIgZWxlbWVudCBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIGNhbmNlbCBldmVudFxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIDI1MCk7XG4gICAgfSk7XG5cbiAgICAvLyBQcm9wYWdhdGUgYmx1ciBldmVudHMgZnJvbSBDS0VkaXRvciB0byB0aGUgRWxlbWVudCdzIGxpc3RlbmVyc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2JsdXInLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFByb3BhZ2F0ZSBibHVyIGV2ZW50cyBmcm9tIENLRWRpdG9yIHRvIHRoZSBFbGVtZW50J3MgbGlzdGVuZXJzXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignZm9jdXMnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oaWRlUGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTaG93IHBsYWNlaG9sZGVyIGlmIHRoZSBub3RlIGlzIGVtcHR5LCBhZnRlciB0aGUgZWRpdG9yIGlzIGluc3RhbnRpYXRlZFxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIC8vIFNldCBlZGl0b3IgdG8gcmVhZE9ubHlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZWFkT25seSkge1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLnNldFJlYWRPbmx5KHRoaXMuY29uZmlnLnJlYWRPbmx5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgcHVibGljIG9uVG91Y2hlZChldmVudD86IGFueSkge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHNldHRpbmcgdGhlIG1vZGVsIGFuZCB0aGUgdmlldyBmcm9tIHRoZSBvdXRzaWRlIGNhbGxlciBvciB0aGUgdXNlcidzIHR5cGluZ1xuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgQSBtb2RlbCB0aGF0IGhhcyBhIG5vdGUgKGh0bWwgY29udGVudCkgYW5kIHJlZmVyZW5jZXMgKGFycmF5IG9mIG9iamVjdHMpXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgLy8gU2V0IHZhbHVlIG9mIHRoZSBtb2RlbFxuICAgIGlmIChtb2RlbCAmJiAobW9kZWwucmVmZXJlbmNlcyB8fCBtb2RlbC5ub3RlKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgbm90ZTogbW9kZWwubm90ZSB8fCAnJyxcbiAgICAgICAgcmVmZXJlbmNlczogbW9kZWwucmVmZXJlbmNlcyB8fCB7fSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IG1vZGVsLFxuICAgICAgICByZWZlcmVuY2VzOiB7fSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBub3RlIGh0bWwgdmFsdWUgaW4gdGhlIGVkaXRvclxuICAgIGlmICh0aGlzLmNrZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnNldERhdGEodGhpcy5tb2RlbC5ub3RlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogSWYgYSByZW5kZXJlciBpcyBub3QgcHJvdmlkZWQsIHRoZSBRdWlja05vdGUgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoaXMgb25lLCBhbiBhbmNob3IgdGFnIHdpdGggbm8gaHJlZlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFJlbmRlcmVyKHN5bWJvbDogc3RyaW5nLCBpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGE+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbmRlcmVyIGZvciBhIGdpdmVuIHRhZ2dpbmcgbW9kZSBpZiBpdCBleGlzdHMgaW4gdGhlIGNvbmZpZywgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRSZW5kZXJlcih0YWdnaW5nTW9kZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVuZGVyZXIgPyB0aGlzLmNvbmZpZy5yZW5kZXJlclt0YWdnaW5nTW9kZV0gOiBRdWlja05vdGVFbGVtZW50LmRlZmF1bHRSZW5kZXJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgZXZlcnkgdGltZSBhIGtleXN0cm9rZSBpcyBtYWRlIGluIHRoZSBlZGl0b3IuIExpc3RlbnMgZm9yIHBhcnRpY3VsYXIga2V5cyAoZS5nLiBVUCBhcnJvdywgRVNDLCBldGMuKVxuICAgKiB0byBoYW5kbGUgY2VydGFpbiBiZWhhdmlvcnMgb2YgdGhlIHBpY2tlci5cbiAgICpcbiAgICogUnVucyB3aXRoaW4gdGhlIGNvbnRleHQgb2YgdGhlIENLRWRpdG9yLCBzbyBhY3Rpb25zIHRoYXQgYWZmZWN0IHRoZSB2aWV3IGhhdmUgdG8gYmUgcnVuIGJhY2sgaW5zaWRlIG9mIHRoZVxuICAgKiBBbmd1bGFyIHpvbmUgb2YgdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IFRoZSBrZXkgcHJlc3MgZXZlbnRcbiAgICogQHJldHVybiB0cnVlIHRvIGFsbG93IHRoZSBldmVudCB0byBvY2N1ciwgZmFsc2UgdG8gY2FuY2VsIHRoZSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgLy8gSGlkZSByZXN1bHRzIG9uIGVzY2FwZSBrZXlcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5hdmlnYXRpb24gaW5zaWRlIHRoZSByZXN1bHRzXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2Uuc2VsZWN0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdHJpZ2dlcnMgYW5kIHR1cm4gb24gdGFnZ2luZyBtb2RlIGlmIHRoZSB1c2VyIGp1c3QgcHJlc3NlZCBhIHRyaWdnZXIgY2hhcmFjdGVyXG4gICAgICAgIGxldCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXJzIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0cmlnZ2VycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgbGV0IHRyaWdnZXIgPSB0cmlnZ2Vyc1trZXldIHx8IHt9O1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGFnZ2luZ01vZGUgPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVib3VuY2VkIG1ldGhvZCB0aGF0IGlzIHJ1biBpbiB0aGUgcHJvcGVyIEFuZ3VsYXIgY29udGV4dCB3aGVuIHRoZSB1c2VyIGhhcyBtb2RpZmllZCB0aGUgQ0tFZGl0b3IuXG4gICAqIEFmdGVyIHRoZSB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkIGluIENLRWRpdG9yLCB0aGlzIHdpbGwgcHJvcGFnYXRlIHRoYXQgY2hhbmdlIHRvIHRoZSBtb2RlbCBhbmQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlKCk6IHZvaWQge1xuICAgIC8vIEdldCB0aGUgaHRtbCB0ZXh0IGluIENLRWRpdG9yXG4gICAgbGV0IHZhbHVlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAvLyBSZW1vdmUgZW1wdHkgJ1pFUk8gV0lEVEggU1BBQ0UnIGNoYXJhY3RlcnMgdGhhdCBjYW4gZ2V0IGFkZGVkIGVycm9uZW91c2x5IGJ5IHRoZSBlZGl0b3JcbiAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFN0cmluZy5mcm9tQ2hhckNvZGUoODIwMyksICdnJyk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCBhbnkgcmVmZXJlbmNlcyBpbiB0aGUgbW9kZWwgYXJlIHN0aWxsIHZhbGlkXG4gICAgdGhpcy52YWxpZGF0ZVJlZmVyZW5jZXMoKTtcblxuICAgIC8vIFBvc3NpYmx5IHNob3cgcmVzdWx0cyBpZiB0aGUgdXNlciBoYXMgZW50ZXJlZCBhIHNlYXJjaCB0ZXJtXG4gICAgdGhpcy5zaG93UmVzdWx0cygpO1xuXG4gICAgLy8gUHJvcGFnYXRlIGNoYW5nZSB0byBuZ01vZGVsIGZvciBmb3JtIHZhbGlkYXRpb24sIGFuZCBzZW5kIG51bGwgaWYgdGhlIG5vdGUgaXMgZW1wdHlcbiAgICBsZXQgbmV3TW9kZWwgPSBudWxsO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3TW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IHZhbHVlLFxuICAgICAgICByZWZlcmVuY2VzOiB0aGlzLm1vZGVsLnJlZmVyZW5jZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgdG8gdGhlIG5nTW9kZWwgY2hhbmdlIGV2ZW50IHRoYXQgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKG5ld01vZGVsKTtcblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgb2YgdGhlIGBAT3V0cHV0KCkgY2hhbmdlYCBldmVudCB0aGF0IHRoZSBtb2RlbCBoYXMgYmVlbiB1cGRhdGVkXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChuZXdNb2RlbCk7XG5cbiAgICAvLyBJbmZvcm0gbGlzdGVuZXJzIHRvIHRoZSBuZ01vZGVsIHRvdWNoZWQgZXZlbnQgdGhhdCBzb21ldGhpbmcgaGFzIGNoYW5nZWRcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdHMgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG93UmVzdWx0cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ2dpbmcpIHtcbiAgICAgIGxldCBzZWFyY2hUZXJtID0gdGhpcy5nZXRTZWFyY2hUZXJtKCk7XG4gICAgICBpZiAoc2VhcmNoVGVybS5sZW5ndGgpIHtcbiAgICAgICAgLy8gVXBkYXRlIE1hdGNoZXNcbiAgICAgICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBsaXN0XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnRlcm0gPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdGFnZ2luZ01vZGU6IHRoaXMudGFnZ2luZ01vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDcmVhdGUgdGhlIHJlc3VsdHMgRE9NIGVsZW1lbnRcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLnJlc3VsdHNDb21wb25lbnQsIHRoaXMucmVzdWx0cyk7XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS50ZXJtID0ge1xuICAgICAgICAgICAgc2VhcmNoVGVybTogc2VhcmNoVGVybSxcbiAgICAgICAgICAgIHRhZ2dpbmdNb2RlOiB0aGlzLnRhZ2dpbmdNb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblJlc3VsdHNEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBUZWxsIHRoZSBPdXRzaWRlQ2xpY2sgYmFzZSBjbGFzcyB0byBzdGFydCBsaXN0ZW5pbmcgZm9yIGFuIG91dHNpZGUgY2xpY2tzXG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShudWxsLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyB0aGUgcGlja2VyIHJlc3VsdHMgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgcHJpdmF0ZSBoaWRlUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLmlzVGFnZ2luZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBzZWxlY3Rpb24gZnJvbSB0aGUgUXVpY2tOb3RlUmVzdWx0cyBDb21wb25lbnQuIENhbGxlZCBieSB0aGUgUXVpY2tOb3RlUmVzdWx0cyBjb21wb25lbnQgb24gaXQnc1xuICAgKiBwYXJlbnQgKHRoaXMgZWxlbWVudCkuXG4gICAqXG4gICAqIEBwYXJhbSB0YWdnaW5nTW9kZSAtIHR5cGUgb2YgdGFncyB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICogQHBhcmFtIHNlbGVjdGVkIC0gc2VsZWN0ZWQgb2JqZWN0IGZyb20gdGhlIHBpY2tlciB0aGF0IGhhcyBhIGxhYmVsIGFuZCB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBvblNlbGVjdGVkKHRhZ2dpbmdNb2RlOiBzdHJpbmcsIHNlbGVjdGVkOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBUdXJuIG9mZiB0YWdnaW5nXG4gICAgdGhpcy5pc1RhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlcGxhY2Ugc2VhcmNoVGVybSB3aXRoIGxpbmtcbiAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGFnZ2luZ01vZGVdO1xuICAgIGxldCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIodGFnZ2luZ01vZGUpO1xuICAgIGxldCByZW5kZXJlZFRleHQgPSByZW5kZXJlcihzeW1ib2wsIHNlbGVjdGVkKTtcblxuICAgIHRoaXMucmVwbGFjZVdvcmRBdEN1cnNvcihyZW5kZXJlZFRleHQpO1xuXG4gICAgLy8gQWRkIHRoZSBuZXcgcmVmZXJlbmNlLCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcbiAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXMgPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXMgfHwge307XG4gICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSA9IHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gfHwgW107XG4gICAgbGV0IG1hdGNoaW5nSXRlbXMgPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLmZpbHRlcigoaXRlbSkgPT4gSlNPTi5zdHJpbmdpZnkoaXRlbSkgPT09IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkKSk7XG4gICAgaWYgKG1hdGNoaW5nSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLnB1c2goc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgcXVpY2sgbm90ZSB3aXRoIHRoZSBjaGFuZ2VzIGR1ZSB0byB0aGUgdXNlcidzIHNlbGVjdGlvbiBvZiBhbiBpdGVtIGluIHRoZSBkcm9wZG93blxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGdldHMgdGhlIGN1cnJlbnQgd29yZCB0aGF0IHRoZSBjdXJzb3IgaXMgb24sIG1pbnVzIHRoZSB0YWcuXG4gICAqIEFsc28sIHRyaW1zIGFueSB3aGl0ZXNwYWNlIGJlZm9yZS9hZnRlciB0aGUgdGVybSB0byBhaWQgaW4gc2VhcmNoaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTZWFyY2hUZXJtKCk6IHN0cmluZyB7XG4gICAgbGV0IHdvcmQgPSB0aGlzLmdldFdvcmRBdEN1cnNvcigpLnRyaW0oKTtcbiAgICBpZiAodGhpcy5pc1RhZ2dpbmcpIHtcbiAgICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0aGlzLnRhZ2dpbmdNb2RlXTtcbiAgICAgIGlmICghd29yZC5pbmNsdWRlcyhzeW1ib2wpKSB7XG4gICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgd29yZCA9IHdvcmQuc2xpY2Uod29yZC5pbmRleE9mKHN5bWJvbCkgKyBzeW1ib2wubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCB3b3JkIHRoYXQgdGhlIGN1cnNvciBpcyBvbiBDS0VkaXRvci4gQ3VycmVudCB3b3JkIHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lIG9yIGFcbiAgICogdGFnIGNoYXJhY3RlciBpZiB3ZSBhcmUgaW4gdGFnZ2luZyBtb2RlLiBDdXJyZW50IHdvcmQgZW5kcyBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lIG9yIGFuIGVtcHR5IHNwYWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyBwbGFpbiB0ZXh0IHN0cmluZyAocmVtb3ZlcyBhbGwgaHRtbCBmb3JtYXR0aW5nKVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRXb3JkQXRDdXJzb3IoKTogc3RyaW5nIHtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLmdldFJhbmdlcygpWzBdO1xuICAgIGxldCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuXG4gICAgaWYgKHN0YXJ0LnR5cGUgPT09IENLRURJVE9SLk5PREVfVEVYVCAmJiByYW5nZS5zdGFydE9mZnNldCkge1xuICAgICAgbGV0IHRleHQgPSBzdGFydC5nZXRUZXh0KCk7XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGhpcy50YWdnaW5nTW9kZV07XG4gICAgICBsZXQgd29yZFN0YXJ0ID0gdGV4dC5sYXN0SW5kZXhPZihzeW1ib2wsIHJhbmdlLnN0YXJ0T2Zmc2V0IC0gMSk7XG5cbiAgICAgIGlmICh3b3JkU3RhcnQgPiAwKSB7XG4gICAgICAgIGxldCBiZWZvcmVTeW1ib2w6IHN0cmluZyA9IHRleHQuY2hhckF0KHdvcmRTdGFydCAtIDEpO1xuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHRyaWdnZXIgdGhlIGxvb2t1cCBjYWxsIHVubGVzcyB0aGUgc3ltYm9sIHdhcyBwcmVjZWRlZCBieSB3aGl0ZXNwYWNlXG4gICAgICAgIGlmIChiZWZvcmVTeW1ib2wgIT09ICdcXHUyMDBCJyAmJiAvXFxTLy50ZXN0KGJlZm9yZVN5bWJvbCkpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhcnQuaGFzUHJldmlvdXMoKSAmJiAvXFxTJC8udGVzdChzdGFydC5nZXRQcmV2aW91cygpLmdldFRleHQoKSkpIHtcbiAgICAgICAgLy8gV2hlbiB3b3JkU3RhcnQgaXMgPD0gMCwgd2UgbmVlZCB0byBjaGVjayB0aGUgcHJldmlvdXMgbm9kZSdzIHRleHQgdG8gc2VlIGlmIGl0IGVuZGVkIHdpdGggd2hpdGVzcGFjZSBvciBub3RcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgd29yZEVuZCA9IHRleHQuaW5kZXhPZignICcsIHJhbmdlLnN0YXJ0T2Zmc2V0ICsgMSk7XG4gICAgICBpZiAod29yZFN0YXJ0ID09PSAtMSkge1xuICAgICAgICB3b3JkU3RhcnQgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHdvcmRFbmQgPT09IC0xKSB7XG4gICAgICAgIHdvcmRFbmQgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHdvcmRTdGFydCwgd29yZEVuZCk7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0aW9uIHN0YXJ0cyBhdCB0aGUgMCBpbmRleCBvZiB0aGUgdGV4dCBub2RlIG9yIHRoZXJlJ3Mgbm8gcHJldmlvdXMgdGV4dCBub2RlIGluIGNvbnRlbnRzXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSB3b3JkIHRoYXQgdGhlIHVzZXIgaXMgb24gd2l0aCB0aGUgZ2l2ZW4gaHRtbC5cbiAgICpcbiAgICogQ0tFZGl0b3IgZ2l2ZXMgdXMgYWNjZXNzIHRvIHRoZSBjdXJyZW50IGxpbmUgb2YgaHRtbCBpbiB0aGUgZWRpdG9yLCBzbyB3ZSByZXBsYWNlIHRoZSBjb250ZW50IG9mXG4gICAqIHRoZSBsaW5lLCByZXBsYWNpbmcgb25seSB0aGUgY3VycmVudCB3b3JkLlxuICAgKi9cbiAgcHJpdmF0ZSByZXBsYWNlV29yZEF0Q3Vyc29yKG5ld1dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBvcmlnaW5hbFdvcmQgPSB0aGlzLmdldFdvcmRBdEN1cnNvcigpLnRyaW0oKTtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLmdldFJhbmdlcygpWzBdO1xuICAgIGxldCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuICAgIGxldCBwYXJlbnROb2RlID0gc3RhcnQuZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAoc3RhcnQudHlwZSA9PT0gQ0tFRElUT1IuTk9ERV9URVhUICYmIHBhcmVudE5vZGUpIHtcbiAgICAgIGxldCBsaW5lID0gcGFyZW50Tm9kZS5nZXRIdG1sKCk7XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmxhc3RJbmRleE9mKG9yaWdpbmFsV29yZCk7XG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIC8vIEFkZCBhIHNwYWNlIGFmdGVyIHRoZSByZXBsYWNlZCB3b3JkIHNvIHRoYXQgbXVsdGlwbGUgcmVmZXJlbmNlcyBjYW4gYmUgYWRkZWQgYmFjayB0byBiYWNrXG4gICAgICAgIGxldCBuZXdMaW5lID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpICsgbmV3V29yZCArICcgJyArIGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgb3JpZ2luYWxXb3JkLmxlbmd0aCk7XG4gICAgICAgIHBhcmVudE5vZGUuc2V0SHRtbChuZXdMaW5lKTtcblxuICAgICAgICAvLyBQbGFjZSBzZWxlY3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICByYW5nZS5tb3ZlVG9Qb3NpdGlvbihwYXJlbnROb2RlLCBDS0VESVRPUi5QT1NJVElPTl9CRUZPUkVfRU5EKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5zZWxlY3RSYW5nZXMoW3JhbmdlXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCByZWZlcmVuY2VzLCBtaW51cyBhbnkgZnJvbSB0aGUgbW9kZWwgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBlZGl0b3IuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlUmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICBsZXQgaHRtbCA9IHRoaXMuY2tlSW5zdGFuY2UuZG9jdW1lbnQuZ2V0Qm9keSgpLmdldEh0bWwoKTtcblxuICAgIC8vIENLRWRpdG9yIHN0b3BwZWQgc3VwcG9ydGluZyB0aGUgY29uZmlnLmZvcmNlU2ltcGxlQW1wZXJzYW5kIHNldHRpbmcsIHNvIHdlIGhhdmUgdG8gY29udmVydCAnJmFtcDsnIHRvICcmJ1xuICAgIC8vIHdoZW4gd2UgcHVsbCBodG1sIGZyb20gdGhlIGVkaXRvciAtIHNlZTogaHR0cHM6Ly9kZXYuY2tlZGl0b3IuY29tL3RpY2tldC8xMzcyM1xuICAgIGxldCBhbXBSZWdleCA9IG5ldyBSZWdFeHAoJyZhbXA7JywgJ2cnKTtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKGFtcFJlZ2V4LCAnJicpO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5tb2RlbC5yZWZlcmVuY2VzKS5mb3JFYWNoKCh0YWdnaW5nTW9kZSkgPT4ge1xuICAgICAgbGV0IGFycmF5ID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSB8fCBbXTtcbiAgICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0YWdnaW5nTW9kZV07XG4gICAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKHRhZ2dpbmdNb2RlKTtcblxuICAgICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSA9IGFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgcmVuZGVyZWRUZXh0ID0gcmVuZGVyZXIoc3ltYm9sLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGh0bWwuaW5jbHVkZXMocmVuZGVyZWRUZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiBubyByZWZlcmVuY2VzLCB0aGVuIGRlbGV0ZSB0aGUga2V5XG4gICAgICBpZiAodGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgQ0tFZGl0b3IgZm9yIFF1aWNrTm90ZSBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIENLRWRpdG9yIGR5bmFtaWNhbGx5IHRvIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZXIgdXBvbiBpbml0aWFsaXphdGlvbi5cbiAgICogUmVtb3ZlcyB0aGUgdG9vbGJhciBvbiB0aGUgYm90dG9tIGFuZCBjb25maWd1cmVzIGEgc2xpbW1lZCBkb3duIHZlcnNpb24gb2YgdGhlIHRvb2xiYXIuXG4gICAqIFJlbW92ZXMgcGx1Z2lucyBhbmQgdHVybnMgb2ZmIHNldHRpbmcgdG8gYWxsb3cgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q0tFZGl0b3JDb25maWcoKTogYW55IHtcbiAgICAvLyBVc2UgdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlciBlbGVtZW50IHRvIHNldCB0aGUgaW5pdGlhbCBoZWlnaHQgb2YgdGhlIGVkaXRvciwgdGhlblxuICAgIC8vIHNldCBpdCB0byAxMDAlIHRvIGFsbG93IHRoZSBlZGl0b3IgdG8gcmVzaXplIHVzaW5nIHRoZSBncmlwcHkuXG4gICAgbGV0IGVkaXRvckhlaWdodCA9IHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG4gICAgdGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsICcxMDAlJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9CUixcbiAgICAgIHNoaWZ0RW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9QLFxuICAgICAgZGlzYWJsZU5hdGl2ZVNwZWxsQ2hlY2tlcjogZmFsc2UsXG4gICAgICBoZWlnaHQ6IGVkaXRvckhlaWdodCxcbiAgICAgIHN0YXJ0dXBGb2N1czogdGhpcy5zdGFydHVwRm9jdXMsXG4gICAgICByZW1vdmVQbHVnaW5zOiAnbGlzdHN0eWxlLHRhYmxldG9vbHMsY29udGV4dG1lbnUnLCAvLyBhbGxvd3MgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZ1xuICAgICAgdG9vbGJhcjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Jhc2ljc3R5bGVzJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ1N0eWxlcycsXG4gICAgICAgICAgICAnRm9udFNpemUnLFxuICAgICAgICAgICAgJ0JvbGQnLFxuICAgICAgICAgICAgJ0l0YWxpYycsXG4gICAgICAgICAgICAnVW5kZXJsaW5lJyxcbiAgICAgICAgICAgICdUZXh0Q29sb3InLFxuICAgICAgICAgICAgJy0nLFxuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0xpbmsnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzY3JlZW4gcG9zaXRpb24gb2YgdGhlIGN1cnNvciBpbiBDS0VkaXRvciwgYWNjb3VudGluZyBmb3IgYW55IHNjcm9sbGluZyBpbiB0aGUgZWRpdG9yLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDdXJzb3JQb3NpdGlvbigpOiBhbnkge1xuICAgIGxldCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSByYW5nZS5zdGFydENvbnRhaW5lci4kLnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGVkaXRvckVsZW1lbnQgPSB0aGlzLmNrZUluc3RhbmNlLmVkaXRhYmxlKCkuJDtcblxuICAgIC8vIFNpbmNlIHRoZSBlZGl0b3IgaXMgYSB0ZXh0IG5vZGUgaW4gdGhlIERPTSB0aGF0IGRvZXMgbm90IGtub3cgYWJvdXQgaXQncyBwb3NpdGlvbiwgYSB0ZW1wb3JhcnkgZWxlbWVudCBoYXMgdG9cbiAgICAvLyBiZSBpbnNlcnRlZCBpbiBvcmRlciB0byBsb2NhdGUgdGhlIGN1cnNvciBwb3NpdGlvbi5cbiAgICBsZXQgY3Vyc29yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGN1cnNvckVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnbnVsbCcpO1xuICAgIGN1cnNvckVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcwJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG5cbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGN1cnNvckVsZW1lbnQpO1xuICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogY3Vyc29yRWxlbWVudC5vZmZzZXRUb3AgLSBlZGl0b3JFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IGN1cnNvckVsZW1lbnQub2Zmc2V0TGVmdCAtIGVkaXRvckVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICB9O1xuICAgIGN1cnNvckVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gY3Vyc29yUG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogUG9zaXRpb25zIHRoZSByZXN1bHRzIGRyb3Bkb3duIGJhc2VkIG9uIHRoZSBsb2NhdGlvbiBvZiB0aGUgY3Vyc29yIGluIHRoZSB0ZXh0IGZpZWxkXG4gICAqL1xuICBwcml2YXRlIHBvc2l0aW9uUmVzdWx0c0Ryb3Bkb3duKCk6IHZvaWQge1xuICAgIGNvbnN0IE1JTl9NQVJHSU5fVE9QOiBudW1iZXIgPSBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUICogMjtcbiAgICBjb25zdCBNQVhfTUFSR0lOX1RPUDogbnVtYmVyID0gdGhpcy5nZXRDb250ZW50SGVpZ2h0KCkgKyBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUO1xuXG4gICAgbGV0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5nZXRDdXJzb3JQb3NpdGlvbigpO1xuICAgIGxldCBtYXJnaW5Ub3A6IG51bWJlciA9IGN1cnNvclBvc2l0aW9uLnRvcCArIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG5cbiAgICAvLyBDaGVjayB0aGF0IHRoZSBtYXJnaW4gaXMgd2l0aGluIHRoZSB2aXNpYmxlIGJvdW5kc1xuICAgIG1hcmdpblRvcCA9IE1hdGgubWF4KG1hcmdpblRvcCwgTUlOX01BUkdJTl9UT1ApO1xuICAgIG1hcmdpblRvcCA9IE1hdGgubWluKG1hcmdpblRvcCwgTUFYX01BUkdJTl9UT1ApO1xuXG4gICAgLy8gU2V0IHRoZSBtYXJnaW4tdG9wIG9mIHRoZSBkcm9wZG93blxuICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ21hcmdpbi10b3AnLCBtYXJnaW5Ub3AgKyAncHgnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgaW4gcGl4ZWxzIG9mIHRoZSBjb250ZW50IGFyZWEgLSB0aGUgdGV4dCB0aGF0IHRoZSB1c2VyIGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDb250ZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgbGV0IGNvbnRlbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgaWYgKFxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aSAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQuc3R5bGVcbiAgICApIHtcbiAgICAgIGxldCBjc3NUZXh0OiBzdHJpbmcgPSB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudC4kLnN0eWxlLmNzc1RleHQ7XG4gICAgICBpZiAoY3NzVGV4dC5pbmRleE9mKCdoZWlnaHQ6ICcpICE9PSAtMSkge1xuICAgICAgICBsZXQgaGVpZ2h0OiBzdHJpbmcgPSBjc3NUZXh0LnNwbGl0KCdoZWlnaHQ6ICcpWzFdO1xuICAgICAgICBoZWlnaHQgPSBoZWlnaHQuc3BsaXQoJ3B4JylbMF07XG4gICAgICAgIGNvbnRlbnRIZWlnaHQgPSBwYXJzZUludChoZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGVudEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBwbGFjZWhvbGRlciB0ZXh0IGlmIHRoZSBlZGl0b3IgaXMgZW1wdHlcbiAgICovXG4gIHByaXZhdGUgc2hvd1BsYWNlaG9sZGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ja2VJbnN0YW5jZS5nZXREYXRhKCkgJiYgIXRoaXMuc3RhcnR1cEZvY3VzKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlXG4gICAgICAgIC5lZGl0YWJsZSgpXG4gICAgICAgIC5nZXRQYXJlbnQoKVxuICAgICAgICAuJC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlaG9sZGVyRWxlbWVudCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHBsYWNlaG9sZGVyIHRleHQgYnkgcmVtb3ZpbmcgdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAqL1xuICBwcml2YXRlIGhpZGVQbGFjZWhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlclZpc2libGUpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2VcbiAgICAgICAgLmVkaXRhYmxlKClcbiAgICAgICAgLmdldFBhcmVudCgpXG4gICAgICAgIC4kLnJlbW92ZUNoaWxkKHRoaXMucGxhY2Vob2xkZXJFbGVtZW50KTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvciBjcmVhdGUgdGhlIHNpbmdsZSBwbGFjZWhvbGRlciBvYmplY3QgdGhhdCBpcyBjb25zdHJ1Y3RlZCBvbmx5IHdoZW4gbmVlZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgcGxhY2Vob2xkZXJFbGVtZW50KCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdwbGFjZWhvbGRlcic7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICdtYXJnaW46IDIwcHg7IGNvbG9yOiAjQUFBQUFBOyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMjBweDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDAnO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudDtcbiAgfVxufVxuIl19