import { __extends } from "tslib";
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
var _c0 = ["wrapper"];
var _c1 = ["host"];
var _c2 = ["results"];
// Value accessor for the component (supports ngModel)
var QUICK_NOTE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return QuickNoteElement; }),
    multi: true,
};
var QuickNoteElement = /** @class */ (function (_super) {
    __extends(QuickNoteElement, _super);
    function QuickNoteElement(zone, element, componentUtils) {
        var _this = _super.call(this, element) || this;
        _this.zone = zone;
        _this.componentUtils = componentUtils;
        _this.startupFocus = false;
        // Emitter for selects
        _this.focus = new EventEmitter();
        _this.blur = new EventEmitter();
        _this.change = new EventEmitter();
        _this.placeholderVisible = false;
        _this._placeholderElement = null;
        _this.onModelChange = function () { };
        _this.onModelTouched = function () { };
        // Bind to the active change event from the OutsideClick
        _this.onActiveChange.subscribe(function (active) {
            if (!active) {
                setTimeout(function () {
                    _this.hideResults();
                });
            }
        });
        return _this;
    }
    QuickNoteElement.prototype.ngOnInit = function () {
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
    };
    QuickNoteElement.prototype.ngOnDestroy = function () {
        var _this = this;
        // Tear down the CKEditor instance
        if (this.ckeInstance) {
            this.ckeInstance.focusManager.blur(true); // Remove focus from editor
            setTimeout(function () {
                _this.ckeInstance.removeAllListeners();
                CKEDITOR.instances[_this.ckeInstance.name].destroy();
                _this.ckeInstance.destroy();
                _this.ckeInstance = null;
            });
        }
    };
    /**
     * Connect to key/mouse events from CKEditor after the editor has been initialized
     */
    QuickNoteElement.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!CKEDITOR) {
            console.error('Make sure to include CKEditor sources in your dependencies!');
            return;
        }
        // Replace the textarea with an instance of CKEditor
        this.ckeInstance = CKEDITOR.replace(this.host.nativeElement, this.getCKEditorConfig());
        // Set initial value of the note in the editor
        this.writeValue(this.model);
        // Connect to the key event in CKEditor for showing results dropdown
        this.ckeInstance.on('key', function (event) {
            if (!_this.onKey(event.data.domEvent.$)) {
                event.cancel();
            }
        });
        // Connect to the change event in CKEditor for debouncing user modifications
        this.ckeInstance.on('change', function () {
            // Debounce update
            if (_this.debounceTimeout) {
                clearTimeout(_this.debounceTimeout);
            }
            _this.debounceTimeout = setTimeout(function () {
                // Run within the context of this angular element since we don't need to cancel event
                _this.zone.run(function () {
                    _this.onValueChange();
                });
                _this.debounceTimeout = null;
            }, 250);
        });
        // Propagate blur events from CKEditor to the Element's listeners
        this.ckeInstance.on('blur', function (event) {
            _this.showPlaceholder();
            _this.blur.emit(event);
        });
        // Propagate blur events from CKEditor to the Element's listeners
        this.ckeInstance.on('focus', function (event) {
            _this.hidePlaceholder();
            _this.focus.emit(event);
        });
        // Show placeholder if the note is empty, after the editor is instantiated
        this.ckeInstance.on('instanceReady', function (event) {
            _this.showPlaceholder();
            // Set editor to readOnly
            if (_this.config.readOnly) {
                _this.ckeInstance.setReadOnly(_this.config.readOnly);
            }
        });
    };
    // Set touched on blur
    QuickNoteElement.prototype.onTouched = function (event) {
        this.onModelTouched();
    };
    /**
     * Handles setting the model and the view from the outside caller or the user's typing
     *
     * @param model A model that has a note (html content) and references (array of objects)
     */
    QuickNoteElement.prototype.writeValue = function (model) {
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
    };
    QuickNoteElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    QuickNoteElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * If a renderer is not provided, the QuickNote will default to using this one, an anchor tag with no href
     */
    QuickNoteElement.defaultRenderer = function (symbol, item) {
        return "<a>" + symbol + item.label + "</a>";
    };
    /**
     * Returns the renderer for a given tagging mode if it exists in the config, otherwise the default.
     */
    QuickNoteElement.prototype.getRenderer = function (taggingMode) {
        return this.config.renderer ? this.config.renderer[taggingMode] : QuickNoteElement.defaultRenderer;
    };
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
    QuickNoteElement.prototype.onKey = function (event) {
        var _this = this;
        if (event.key) {
            if (this.quickNoteResults) {
                // Hide results on escape key
                if (event.keyCode === KeyCodes.ESC) {
                    this.zone.run(function () {
                        _this.hideResults();
                    });
                    return false;
                }
                // Navigation inside the results
                if (event.keyCode === KeyCodes.UP) {
                    this.zone.run(function () {
                        _this.quickNoteResults.instance.prevActiveMatch();
                    });
                    return false;
                }
                if (event.keyCode === KeyCodes.DOWN) {
                    this.zone.run(function () {
                        _this.quickNoteResults.instance.nextActiveMatch();
                    });
                    return false;
                }
                if (event.keyCode === KeyCodes.ENTER) {
                    this.zone.run(function () {
                        _this.quickNoteResults.instance.selectActiveMatch();
                    });
                    return false;
                }
            }
            else {
                // Loop through all triggers and turn on tagging mode if the user just pressed a trigger character
                var triggers_1 = this.config.triggers || {};
                Object.keys(triggers_1).forEach(function (key) {
                    var trigger = triggers_1[key] || {};
                    if (event.key === trigger) {
                        _this.isTagging = true;
                        _this.taggingMode = key;
                    }
                });
            }
        }
        return true;
    };
    /**
     * Debounced method that is run in the proper Angular context when the user has modified the CKEditor.
     * After the value has been updated in CKEditor, this will propagate that change to the model and listeners.
     */
    QuickNoteElement.prototype.onValueChange = function () {
        // Get the html text in CKEditor
        var value = this.ckeInstance.getData();
        // Remove empty 'ZERO WIDTH SPACE' characters that can get added erroneously by the editor
        var regex = new RegExp(String.fromCharCode(8203), 'g');
        value = value.replace(regex, '');
        // Make sure that any references in the model are still valid
        this.validateReferences();
        // Possibly show results if the user has entered a search term
        this.showResults();
        // Propagate change to ngModel for form validation, and send null if the note is empty
        var newModel = null;
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
    };
    /**
     * Creates an instance of the results (called popup) and adds all the bindings to that instance.
     */
    QuickNoteElement.prototype.showResults = function () {
        if (this.isTagging) {
            var searchTerm = this.getSearchTerm();
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
    };
    /**
     * Deletes the picker results from the DOM.
     */
    QuickNoteElement.prototype.hideResults = function () {
        this.isTagging = false;
        if (this.quickNoteResults) {
            this.quickNoteResults.destroy();
            this.quickNoteResults = null;
        }
    };
    /**
     * Handles the selection from the QuickNoteResults Component. Called by the QuickNoteResults component on it's
     * parent (this element).
     *
     * @param taggingMode - type of tags we are looking for
     * @param selected - selected object from the picker that has a label and value
     */
    QuickNoteElement.prototype.onSelected = function (taggingMode, selected) {
        // Turn off tagging
        this.isTagging = false;
        // Replace searchTerm with link
        var symbol = this.config.triggers[taggingMode];
        var renderer = this.getRenderer(taggingMode);
        var renderedText = renderer(symbol, selected);
        this.replaceWordAtCursor(renderedText);
        // Add the new reference, if it doesn't already exist
        this.model.references = this.model.references || {};
        this.model.references[taggingMode] = this.model.references[taggingMode] || [];
        var matchingItems = this.model.references[taggingMode].filter(function (item) { return JSON.stringify(item) === JSON.stringify(selected); });
        if (matchingItems.length === 0) {
            this.model.references[taggingMode].push(selected);
        }
        // Update the quick note with the changes due to the user's selection of an item in the dropdown
        this.onValueChange();
    };
    /**
     * Convenience method that gets the current word that the cursor is on, minus the tag.
     * Also, trims any whitespace before/after the term to aid in searching.
     */
    QuickNoteElement.prototype.getSearchTerm = function () {
        var word = this.getWordAtCursor().trim();
        if (this.isTagging) {
            var symbol = this.config.triggers[this.taggingMode];
            if (!word.includes(symbol)) {
                this.hideResults();
                return '';
            }
            word = word.slice(word.indexOf(symbol) + symbol.length);
        }
        return word;
    };
    /**
     * Gets the current word that the cursor is on CKEditor. Current word starts at the beginning of the line or a
     * tag character if we are in tagging mode. Current word ends at the end of the line or an empty space.
     *
     * @returns plain text string (removes all html formatting)
     */
    QuickNoteElement.prototype.getWordAtCursor = function () {
        var range = this.ckeInstance.getSelection().getRanges()[0];
        var start = range.startContainer;
        if (start.type === CKEDITOR.NODE_TEXT && range.startOffset) {
            var text = start.getText();
            var symbol = this.config.triggers[this.taggingMode];
            var wordStart = text.lastIndexOf(symbol, range.startOffset - 1);
            if (wordStart > 0) {
                var beforeSymbol = text.charAt(wordStart - 1);
                // We don't want to trigger the lookup call unless the symbol was preceded by whitespace
                if (beforeSymbol !== '\u200B' && /\S/.test(beforeSymbol)) {
                    return '';
                }
            }
            else if (start.hasPrevious() && /\S$/.test(start.getPrevious().getText())) {
                // When wordStart is <= 0, we need to check the previous node's text to see if it ended with whitespace or not
                return '';
            }
            var wordEnd = text.indexOf(' ', range.startOffset + 1);
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
    };
    /**
     * Replaces the word that the user is on with the given html.
     *
     * CKEditor gives us access to the current line of html in the editor, so we replace the content of
     * the line, replacing only the current word.
     */
    QuickNoteElement.prototype.replaceWordAtCursor = function (newWord) {
        var originalWord = this.getWordAtCursor().trim();
        var range = this.ckeInstance.getSelection().getRanges()[0];
        var start = range.startContainer;
        var parentNode = start.getParent();
        if (start.type === CKEDITOR.NODE_TEXT && parentNode) {
            var line = parentNode.getHtml();
            var index = line.lastIndexOf(originalWord);
            if (index >= 0) {
                // Add a space after the replaced word so that multiple references can be added back to back
                var newLine = line.substring(0, index) + newWord + ' ' + line.substring(index + originalWord.length);
                parentNode.setHtml(newLine);
                // Place selection at the end of the line
                range.moveToPosition(parentNode, CKEDITOR.POSITION_BEFORE_END);
                this.ckeInstance.getSelection().selectRanges([range]);
            }
        }
    };
    /**
     * Returns current references, minus any from the model that have been removed from the editor.
     */
    QuickNoteElement.prototype.validateReferences = function () {
        var _this = this;
        var html = this.ckeInstance.document.getBody().getHtml();
        // CKEditor stopped supporting the config.forceSimpleAmpersand setting, so we have to convert '&amp;' to '&'
        // when we pull html from the editor - see: https://dev.ckeditor.com/ticket/13723
        var ampRegex = new RegExp('&amp;', 'g');
        html = html.replace(ampRegex, '&');
        Object.keys(this.model.references).forEach(function (taggingMode) {
            var array = _this.model.references[taggingMode] || [];
            var symbol = _this.config.triggers[taggingMode];
            var renderer = _this.getRenderer(taggingMode);
            _this.model.references[taggingMode] = array.filter(function (item) {
                var renderedText = renderer(symbol, item);
                return html.includes(renderedText);
            });
            // If no references, then delete the key
            if (_this.model.references[taggingMode].length === 0) {
                delete _this.model.references[taggingMode];
            }
        });
    };
    /**
     * Configures the CKEditor for QuickNote functionality.
     *
     * Sets the height of the CKEditor dynamically to the height of the wrapper upon initialization.
     * Removes the toolbar on the bottom and configures a slimmed down version of the toolbar.
     * Removes plugins and turns off setting to allow browser based spell checking.
     */
    QuickNoteElement.prototype.getCKEditorConfig = function () {
        // Use the height of the wrapper element to set the initial height of the editor, then
        // set it to 100% to allow the editor to resize using the grippy.
        var editorHeight = this.wrapper.nativeElement.clientHeight - QuickNoteElement.TOOLBAR_HEIGHT;
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
    };
    /**
     * Returns the current screen position of the cursor in CKEditor, accounting for any scrolling in the editor.
     */
    QuickNoteElement.prototype.getCursorPosition = function () {
        var range = this.ckeInstance.getSelection().getRanges()[0];
        var parentElement = range.startContainer.$.parentElement;
        var editorElement = this.ckeInstance.editable().$;
        // Since the editor is a text node in the DOM that does not know about it's position, a temporary element has to
        // be inserted in order to locate the cursor position.
        var cursorElement = document.createElement('img');
        cursorElement.setAttribute('src', 'null');
        cursorElement.setAttribute('width', '0');
        cursorElement.setAttribute('height', '0');
        parentElement.appendChild(cursorElement);
        var cursorPosition = {
            top: cursorElement.offsetTop - editorElement.scrollTop,
            left: cursorElement.offsetLeft - editorElement.scrollLeft,
        };
        cursorElement.remove();
        return cursorPosition;
    };
    /**
     * Positions the results dropdown based on the location of the cursor in the text field
     */
    QuickNoteElement.prototype.positionResultsDropdown = function () {
        var MIN_MARGIN_TOP = QuickNoteElement.TOOLBAR_HEIGHT * 2;
        var MAX_MARGIN_TOP = this.getContentHeight() + QuickNoteElement.TOOLBAR_HEIGHT;
        var cursorPosition = this.getCursorPosition();
        var marginTop = cursorPosition.top + QuickNoteElement.TOOLBAR_HEIGHT;
        // Check that the margin is within the visible bounds
        marginTop = Math.max(marginTop, MIN_MARGIN_TOP);
        marginTop = Math.min(marginTop, MAX_MARGIN_TOP);
        // Set the margin-top of the dropdown
        this.quickNoteResults.instance.element.nativeElement.style.setProperty('margin-top', marginTop + 'px');
    };
    /**
     * Returns the height in pixels of the content area - the text that the user has entered.
     */
    QuickNoteElement.prototype.getContentHeight = function () {
        var contentHeight = 0;
        if (this.ckeInstance.ui &&
            this.ckeInstance.ui.contentsElement &&
            this.ckeInstance.ui.contentsElement.$ &&
            this.ckeInstance.ui.contentsElement.$.style) {
            var cssText = this.ckeInstance.ui.contentsElement.$.style.cssText;
            if (cssText.indexOf('height: ') !== -1) {
                var height = cssText.split('height: ')[1];
                height = height.split('px')[0];
                contentHeight = parseInt(height, 10);
            }
        }
        return contentHeight;
    };
    /**
     * Show the placeholder text if the editor is empty
     */
    QuickNoteElement.prototype.showPlaceholder = function () {
        if (!this.ckeInstance.getData() && !this.startupFocus) {
            this.ckeInstance
                .editable()
                .getParent()
                .$.appendChild(this.placeholderElement);
            this.placeholderVisible = true;
        }
    };
    /**
     * Hide the placeholder text by removing the placeholder element from the DOM
     */
    QuickNoteElement.prototype.hidePlaceholder = function () {
        if (this.placeholderVisible) {
            this.ckeInstance
                .editable()
                .getParent()
                .$.removeChild(this.placeholderElement);
            this.placeholderVisible = false;
        }
    };
    Object.defineProperty(QuickNoteElement.prototype, "placeholderElement", {
        /**
         * Get or create the single placeholder object that is constructed only when needed.
         */
        get: function () {
            if (!this._placeholderElement) {
                this._placeholderElement = document.createElement('div');
                this._placeholderElement.className = 'placeholder';
                this._placeholderElement.style.cssText =
                    'margin: 20px; color: #AAAAAA; font-family: sans-serif; font-size: 13px; line-height: 20px; position: absolute; top: 0';
                this._placeholderElement.textContent = this.placeholder;
            }
            return this._placeholderElement;
        },
        enumerable: true,
        configurable: true
    });
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
    return QuickNoteElement;
}(OutsideClick));
export { QuickNoteElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(QuickNoteElement, [{
        type: Component,
        args: [{
                selector: 'novo-quick-note',
                providers: [QUICK_NOTE_VALUE_ACCESSOR],
                template: "\n    <div class=\"quick-note-wrapper\" #wrapper><textarea #host></textarea> <span #results></span></div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFVBQVUsRUFDVixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLEtBQUssRUFDTCxNQUFNLEVBSU4sTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7O0FBRTlFLHNEQUFzRDtBQUN0RCxJQUFNLHlCQUF5QixHQUFHO0lBQ2hDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBSUY7SUFPc0Msb0NBQVk7SUF1Q2hELDBCQUFvQixJQUFZLEVBQUUsT0FBbUIsRUFBVSxjQUE4QjtRQUE3RixZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQVNmO1FBVm1CLFVBQUksR0FBSixJQUFJLENBQVE7UUFBK0Isb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBNUI3RixrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUk5QixzQkFBc0I7UUFFdEIsV0FBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlDLFVBQUksR0FBc0IsSUFB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QWdCOzs7Ozs7bU1BVm5DLENBQUMseUJBQXlCLENBQUM7WUFFcEMsaUNBQXlDO1lBQUEsb0NBQTJCO1lBQUMsZ0NBQXNCO1lBQUEsaUJBQU07OzJCQW5Dckc7Q0FtcEJDLEFBcG5CRCxDQU9zQyxZQUFZLEdBNm1CakQ7U0E3bUJZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBUDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsUUFBUSxFQUFFLCtHQUVUO2FBQ0Y7O2tCQUVFLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRXJDLFNBQVM7bUJBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRWxDLFNBQVM7bUJBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUc3RCxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFJTCxNQUFNOztrQkFFTixNQUFNOztrQkFFTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUXVpY2tOb3RlUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3F1aWNrLW5vdGUtcmVzdWx0cy9RdWlja05vdGVSZXN1bHRzJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFFVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBRdWlja05vdGVFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXF1aWNrLW5vdGUnLFxuICBwcm92aWRlcnM6IFtRVUlDS19OT1RFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicXVpY2stbm90ZS13cmFwcGVyXCIgI3dyYXBwZXI+PHRleHRhcmVhICNob3N0PjwvdGV4dGFyZWE+IDxzcGFuICNyZXN1bHRzPjwvc3Bhbj48L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tOb3RlRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyB3cmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGhvc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICByZXN1bHRzOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogYW55O1xuICBASW5wdXQoKVxuICBzdGFydHVwRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvLyBFbWl0dGVyIGZvciBzZWxlY3RzXG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gVGhlIGNoYXJhY3RlcnMgdGhhdCB0aGUgdXNlciBlbnRlcnMgaW4gb3JkZXIgdG8gc2VhcmNoIGZvciBhIHBlcnNvbi90aGluZyB0byB0YWdcbiAgcHJpdmF0ZSByZXN1bHRzQ29tcG9uZW50OiBhbnk7XG4gIHByaXZhdGUgcXVpY2tOb3RlUmVzdWx0czogYW55O1xuICBwcml2YXRlIGlzVGFnZ2luZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSB0YWdnaW5nTW9kZTogc3RyaW5nO1xuICBwcml2YXRlIG1vZGVsOiBhbnk7XG4gIHByaXZhdGUgY2tlSW5zdGFuY2U6IGFueTtcbiAgcHJpdmF0ZSBkZWJvdW5jZVRpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSBwbGFjZWhvbGRlclZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJFbGVtZW50OiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgc3RhdGljIFRPT0xCQVJfSEVJR0hUID0gNDA7IC8vIGluIHBpeGVscyAtIGNvbmZpZ3VyZWQgYnkgc3R5bGVzaGVldFxuXG4gIHByaXZhdGUgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIHByaXZhdGUgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIC8vIEJpbmQgdG8gdGhlIGFjdGl2ZSBjaGFuZ2UgZXZlbnQgZnJvbSB0aGUgT3V0c2lkZUNsaWNrXG4gICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGFjdGl2ZSkgPT4ge1xuICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHByb3BlciBjb25maWdcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbmZpZyBzZXQgZm9yIFF1aWNrTm90ZSEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSB0cmlnZ2Vyc1xuICAgIGlmICghdGhpcy5jb25maWcudHJpZ2dlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVpY2tOb3RlIGNvbmZpZyBtdXN0IHN1cHBseSB0cmlnZ2VycyEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBvcHRpb25zXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1aWNrTm90ZSBjb25maWcgbXVzdCBzdXBwbHkgb3B0aW9ucyEnKTtcbiAgICB9XG4gICAgLy8gQWxsb3cgZm9yIGNhbGxlcnMgdG8gdXNlIGEgY3VzdG9tIHJlc3VsdHMgdGVtcGxhdGUgY2xhc3MgaW4gdGhlIGNvbmZpZ1xuICAgIHRoaXMucmVzdWx0c0NvbXBvbmVudCA9IHRoaXMuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCBRdWlja05vdGVSZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIFRlYXIgZG93biB0aGUgQ0tFZGl0b3IgaW5zdGFuY2VcbiAgICBpZiAodGhpcy5ja2VJbnN0YW5jZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZS5mb2N1c01hbmFnZXIuYmx1cih0cnVlKTsgLy8gUmVtb3ZlIGZvY3VzIGZyb20gZWRpdG9yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuY2tlSW5zdGFuY2UubmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byBrZXkvbW91c2UgZXZlbnRzIGZyb20gQ0tFZGl0b3IgYWZ0ZXIgdGhlIGVkaXRvciBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgKi9cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIUNLRURJVE9SKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYWtlIHN1cmUgdG8gaW5jbHVkZSBDS0VkaXRvciBzb3VyY2VzIGluIHlvdXIgZGVwZW5kZW5jaWVzIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgdGhlIHRleHRhcmVhIHdpdGggYW4gaW5zdGFuY2Ugb2YgQ0tFZGl0b3JcbiAgICB0aGlzLmNrZUluc3RhbmNlID0gQ0tFRElUT1IucmVwbGFjZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgdGhpcy5nZXRDS0VkaXRvckNvbmZpZygpKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHZhbHVlIG9mIHRoZSBub3RlIGluIHRoZSBlZGl0b3JcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG5cbiAgICAvLyBDb25uZWN0IHRvIHRoZSBrZXkgZXZlbnQgaW4gQ0tFZGl0b3IgZm9yIHNob3dpbmcgcmVzdWx0cyBkcm9wZG93blxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2tleScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMub25LZXkoZXZlbnQuZGF0YS5kb21FdmVudC4kKSkge1xuICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGNoYW5nZSBldmVudCBpbiBDS0VkaXRvciBmb3IgZGVib3VuY2luZyB1c2VyIG1vZGlmaWNhdGlvbnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAvLyBEZWJvdW5jZSB1cGRhdGVcbiAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gUnVuIHdpdGhpbiB0aGUgY29udGV4dCBvZiB0aGlzIGFuZ3VsYXIgZWxlbWVudCBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIGNhbmNlbCBldmVudFxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIDI1MCk7XG4gICAgfSk7XG5cbiAgICAvLyBQcm9wYWdhdGUgYmx1ciBldmVudHMgZnJvbSBDS0VkaXRvciB0byB0aGUgRWxlbWVudCdzIGxpc3RlbmVyc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2JsdXInLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFByb3BhZ2F0ZSBibHVyIGV2ZW50cyBmcm9tIENLRWRpdG9yIHRvIHRoZSBFbGVtZW50J3MgbGlzdGVuZXJzXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignZm9jdXMnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oaWRlUGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTaG93IHBsYWNlaG9sZGVyIGlmIHRoZSBub3RlIGlzIGVtcHR5LCBhZnRlciB0aGUgZWRpdG9yIGlzIGluc3RhbnRpYXRlZFxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIC8vIFNldCBlZGl0b3IgdG8gcmVhZE9ubHlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZWFkT25seSkge1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLnNldFJlYWRPbmx5KHRoaXMuY29uZmlnLnJlYWRPbmx5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgcHVibGljIG9uVG91Y2hlZChldmVudD86IGFueSkge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHNldHRpbmcgdGhlIG1vZGVsIGFuZCB0aGUgdmlldyBmcm9tIHRoZSBvdXRzaWRlIGNhbGxlciBvciB0aGUgdXNlcidzIHR5cGluZ1xuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgQSBtb2RlbCB0aGF0IGhhcyBhIG5vdGUgKGh0bWwgY29udGVudCkgYW5kIHJlZmVyZW5jZXMgKGFycmF5IG9mIG9iamVjdHMpXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgLy8gU2V0IHZhbHVlIG9mIHRoZSBtb2RlbFxuICAgIGlmIChtb2RlbCAmJiAobW9kZWwucmVmZXJlbmNlcyB8fCBtb2RlbC5ub3RlKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgbm90ZTogbW9kZWwubm90ZSB8fCAnJyxcbiAgICAgICAgcmVmZXJlbmNlczogbW9kZWwucmVmZXJlbmNlcyB8fCB7fSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IG1vZGVsLFxuICAgICAgICByZWZlcmVuY2VzOiB7fSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBub3RlIGh0bWwgdmFsdWUgaW4gdGhlIGVkaXRvclxuICAgIGlmICh0aGlzLmNrZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnNldERhdGEodGhpcy5tb2RlbC5ub3RlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogSWYgYSByZW5kZXJlciBpcyBub3QgcHJvdmlkZWQsIHRoZSBRdWlja05vdGUgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoaXMgb25lLCBhbiBhbmNob3IgdGFnIHdpdGggbm8gaHJlZlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFJlbmRlcmVyKHN5bWJvbDogc3RyaW5nLCBpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGE+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbmRlcmVyIGZvciBhIGdpdmVuIHRhZ2dpbmcgbW9kZSBpZiBpdCBleGlzdHMgaW4gdGhlIGNvbmZpZywgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRSZW5kZXJlcih0YWdnaW5nTW9kZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVuZGVyZXIgPyB0aGlzLmNvbmZpZy5yZW5kZXJlclt0YWdnaW5nTW9kZV0gOiBRdWlja05vdGVFbGVtZW50LmRlZmF1bHRSZW5kZXJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgZXZlcnkgdGltZSBhIGtleXN0cm9rZSBpcyBtYWRlIGluIHRoZSBlZGl0b3IuIExpc3RlbnMgZm9yIHBhcnRpY3VsYXIga2V5cyAoZS5nLiBVUCBhcnJvdywgRVNDLCBldGMuKVxuICAgKiB0byBoYW5kbGUgY2VydGFpbiBiZWhhdmlvcnMgb2YgdGhlIHBpY2tlci5cbiAgICpcbiAgICogUnVucyB3aXRoaW4gdGhlIGNvbnRleHQgb2YgdGhlIENLRWRpdG9yLCBzbyBhY3Rpb25zIHRoYXQgYWZmZWN0IHRoZSB2aWV3IGhhdmUgdG8gYmUgcnVuIGJhY2sgaW5zaWRlIG9mIHRoZVxuICAgKiBBbmd1bGFyIHpvbmUgb2YgdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IFRoZSBrZXkgcHJlc3MgZXZlbnRcbiAgICogQHJldHVybiB0cnVlIHRvIGFsbG93IHRoZSBldmVudCB0byBvY2N1ciwgZmFsc2UgdG8gY2FuY2VsIHRoZSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgLy8gSGlkZSByZXN1bHRzIG9uIGVzY2FwZSBrZXlcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5hdmlnYXRpb24gaW5zaWRlIHRoZSByZXN1bHRzXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2Uuc2VsZWN0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdHJpZ2dlcnMgYW5kIHR1cm4gb24gdGFnZ2luZyBtb2RlIGlmIHRoZSB1c2VyIGp1c3QgcHJlc3NlZCBhIHRyaWdnZXIgY2hhcmFjdGVyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlcnMgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRyaWdnZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCB0cmlnZ2VyID0gdHJpZ2dlcnNba2V5XSB8fCB7fTtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSB0cmlnZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRhZ2dpbmdNb2RlID0ga2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYm91bmNlZCBtZXRob2QgdGhhdCBpcyBydW4gaW4gdGhlIHByb3BlciBBbmd1bGFyIGNvbnRleHQgd2hlbiB0aGUgdXNlciBoYXMgbW9kaWZpZWQgdGhlIENLRWRpdG9yLlxuICAgKiBBZnRlciB0aGUgdmFsdWUgaGFzIGJlZW4gdXBkYXRlZCBpbiBDS0VkaXRvciwgdGhpcyB3aWxsIHByb3BhZ2F0ZSB0aGF0IGNoYW5nZSB0byB0aGUgbW9kZWwgYW5kIGxpc3RlbmVycy5cbiAgICovXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyBHZXQgdGhlIGh0bWwgdGV4dCBpbiBDS0VkaXRvclxuICAgIGxldCB2YWx1ZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0RGF0YSgpO1xuXG4gICAgLy8gUmVtb3ZlIGVtcHR5ICdaRVJPIFdJRFRIIFNQQUNFJyBjaGFyYWN0ZXJzIHRoYXQgY2FuIGdldCBhZGRlZCBlcnJvbmVvdXNseSBieSB0aGUgZWRpdG9yXG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKFN0cmluZy5mcm9tQ2hhckNvZGUoODIwMyksICdnJyk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCBhbnkgcmVmZXJlbmNlcyBpbiB0aGUgbW9kZWwgYXJlIHN0aWxsIHZhbGlkXG4gICAgdGhpcy52YWxpZGF0ZVJlZmVyZW5jZXMoKTtcblxuICAgIC8vIFBvc3NpYmx5IHNob3cgcmVzdWx0cyBpZiB0aGUgdXNlciBoYXMgZW50ZXJlZCBhIHNlYXJjaCB0ZXJtXG4gICAgdGhpcy5zaG93UmVzdWx0cygpO1xuXG4gICAgLy8gUHJvcGFnYXRlIGNoYW5nZSB0byBuZ01vZGVsIGZvciBmb3JtIHZhbGlkYXRpb24sIGFuZCBzZW5kIG51bGwgaWYgdGhlIG5vdGUgaXMgZW1wdHlcbiAgICBsZXQgbmV3TW9kZWwgPSBudWxsO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3TW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IHZhbHVlLFxuICAgICAgICByZWZlcmVuY2VzOiB0aGlzLm1vZGVsLnJlZmVyZW5jZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgdG8gdGhlIG5nTW9kZWwgY2hhbmdlIGV2ZW50IHRoYXQgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKG5ld01vZGVsKTtcblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgb2YgdGhlIGBAT3V0cHV0KCkgY2hhbmdlYCBldmVudCB0aGF0IHRoZSBtb2RlbCBoYXMgYmVlbiB1cGRhdGVkXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChuZXdNb2RlbCk7XG5cbiAgICAvLyBJbmZvcm0gbGlzdGVuZXJzIHRvIHRoZSBuZ01vZGVsIHRvdWNoZWQgZXZlbnQgdGhhdCBzb21ldGhpbmcgaGFzIGNoYW5nZWRcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdHMgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG93UmVzdWx0cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSB0aGlzLmdldFNlYXJjaFRlcm0oKTtcbiAgICAgIGlmIChzZWFyY2hUZXJtLmxlbmd0aCkge1xuICAgICAgICAvLyBVcGRhdGUgTWF0Y2hlc1xuICAgICAgICBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGxpc3RcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UudGVybSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0YWdnaW5nTW9kZTogdGhpcy50YWdnaW5nTW9kZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENyZWF0ZSB0aGUgcmVzdWx0cyBET00gZWxlbWVudFxuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMucmVzdWx0c0NvbXBvbmVudCwgdGhpcy5yZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UucGFyZW50ID0gdGhpcztcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnRlcm0gPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdGFnZ2luZ01vZGU6IHRoaXMudGFnZ2luZ01vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uUmVzdWx0c0Ryb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFRlbGwgdGhlIE91dHNpZGVDbGljayBiYXNlIGNsYXNzIHRvIHN0YXJ0IGxpc3RlbmluZyBmb3IgYW4gb3V0c2lkZSBjbGlja3NcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKG51bGwsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwaWNrZXIgcmVzdWx0cyBmcm9tIHRoZSBET00uXG4gICAqL1xuICBwcml2YXRlIGhpZGVSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNUYWdnaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIHNlbGVjdGlvbiBmcm9tIHRoZSBRdWlja05vdGVSZXN1bHRzIENvbXBvbmVudC4gQ2FsbGVkIGJ5IHRoZSBRdWlja05vdGVSZXN1bHRzIGNvbXBvbmVudCBvbiBpdCdzXG4gICAqIHBhcmVudCAodGhpcyBlbGVtZW50KS5cbiAgICpcbiAgICogQHBhcmFtIHRhZ2dpbmdNb2RlIC0gdHlwZSBvZiB0YWdzIHdlIGFyZSBsb29raW5nIGZvclxuICAgKiBAcGFyYW0gc2VsZWN0ZWQgLSBzZWxlY3RlZCBvYmplY3QgZnJvbSB0aGUgcGlja2VyIHRoYXQgaGFzIGEgbGFiZWwgYW5kIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIG9uU2VsZWN0ZWQodGFnZ2luZ01vZGU6IHN0cmluZywgc2VsZWN0ZWQ6IGFueSk6IHZvaWQge1xuICAgIC8vIFR1cm4gb2ZmIHRhZ2dpbmdcbiAgICB0aGlzLmlzVGFnZ2luZyA9IGZhbHNlO1xuXG4gICAgLy8gUmVwbGFjZSBzZWFyY2hUZXJtIHdpdGggbGlua1xuICAgIGNvbnN0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RhZ2dpbmdNb2RlXTtcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIodGFnZ2luZ01vZGUpO1xuICAgIGNvbnN0IHJlbmRlcmVkVGV4dCA9IHJlbmRlcmVyKHN5bWJvbCwgc2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5yZXBsYWNlV29yZEF0Q3Vyc29yKHJlbmRlcmVkVGV4dCk7XG5cbiAgICAvLyBBZGQgdGhlIG5ldyByZWZlcmVuY2UsIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgIHRoaXMubW9kZWwucmVmZXJlbmNlcyA9IHRoaXMubW9kZWwucmVmZXJlbmNlcyB8fCB7fTtcbiAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSB8fCBbXTtcbiAgICBjb25zdCBtYXRjaGluZ0l0ZW1zID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5maWx0ZXIoKGl0ZW0pID0+IEpTT04uc3RyaW5naWZ5KGl0ZW0pID09PSBKU09OLnN0cmluZ2lmeShzZWxlY3RlZCkpO1xuICAgIGlmIChtYXRjaGluZ0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5wdXNoKHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHF1aWNrIG5vdGUgd2l0aCB0aGUgY2hhbmdlcyBkdWUgdG8gdGhlIHVzZXIncyBzZWxlY3Rpb24gb2YgYW4gaXRlbSBpbiB0aGUgZHJvcGRvd25cbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdGhhdCBnZXRzIHRoZSBjdXJyZW50IHdvcmQgdGhhdCB0aGUgY3Vyc29yIGlzIG9uLCBtaW51cyB0aGUgdGFnLlxuICAgKiBBbHNvLCB0cmltcyBhbnkgd2hpdGVzcGFjZSBiZWZvcmUvYWZ0ZXIgdGhlIHRlcm0gdG8gYWlkIGluIHNlYXJjaGluZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0U2VhcmNoVGVybSgpOiBzdHJpbmcge1xuICAgIGxldCB3b3JkID0gdGhpcy5nZXRXb3JkQXRDdXJzb3IoKS50cmltKCk7XG4gICAgaWYgKHRoaXMuaXNUYWdnaW5nKSB7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0aGlzLnRhZ2dpbmdNb2RlXTtcbiAgICAgIGlmICghd29yZC5pbmNsdWRlcyhzeW1ib2wpKSB7XG4gICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgd29yZCA9IHdvcmQuc2xpY2Uod29yZC5pbmRleE9mKHN5bWJvbCkgKyBzeW1ib2wubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCB3b3JkIHRoYXQgdGhlIGN1cnNvciBpcyBvbiBDS0VkaXRvci4gQ3VycmVudCB3b3JkIHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lIG9yIGFcbiAgICogdGFnIGNoYXJhY3RlciBpZiB3ZSBhcmUgaW4gdGFnZ2luZyBtb2RlLiBDdXJyZW50IHdvcmQgZW5kcyBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lIG9yIGFuIGVtcHR5IHNwYWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyBwbGFpbiB0ZXh0IHN0cmluZyAocmVtb3ZlcyBhbGwgaHRtbCBmb3JtYXR0aW5nKVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRXb3JkQXRDdXJzb3IoKTogc3RyaW5nIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgY29uc3Qgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcblxuICAgIGlmIChzdGFydC50eXBlID09PSBDS0VESVRPUi5OT0RFX1RFWFQgJiYgcmFuZ2Uuc3RhcnRPZmZzZXQpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBzdGFydC5nZXRUZXh0KCk7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0aGlzLnRhZ2dpbmdNb2RlXTtcbiAgICAgIGxldCB3b3JkU3RhcnQgPSB0ZXh0Lmxhc3RJbmRleE9mKHN5bWJvbCwgcmFuZ2Uuc3RhcnRPZmZzZXQgLSAxKTtcblxuICAgICAgaWYgKHdvcmRTdGFydCA+IDApIHtcbiAgICAgICAgY29uc3QgYmVmb3JlU3ltYm9sOiBzdHJpbmcgPSB0ZXh0LmNoYXJBdCh3b3JkU3RhcnQgLSAxKTtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0cmlnZ2VyIHRoZSBsb29rdXAgY2FsbCB1bmxlc3MgdGhlIHN5bWJvbCB3YXMgcHJlY2VkZWQgYnkgd2hpdGVzcGFjZVxuICAgICAgICBpZiAoYmVmb3JlU3ltYm9sICE9PSAnXFx1MjAwQicgJiYgL1xcUy8udGVzdChiZWZvcmVTeW1ib2wpKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0Lmhhc1ByZXZpb3VzKCkgJiYgL1xcUyQvLnRlc3Qoc3RhcnQuZ2V0UHJldmlvdXMoKS5nZXRUZXh0KCkpKSB7XG4gICAgICAgIC8vIFdoZW4gd29yZFN0YXJ0IGlzIDw9IDAsIHdlIG5lZWQgdG8gY2hlY2sgdGhlIHByZXZpb3VzIG5vZGUncyB0ZXh0IHRvIHNlZSBpZiBpdCBlbmRlZCB3aXRoIHdoaXRlc3BhY2Ugb3Igbm90XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgbGV0IHdvcmRFbmQgPSB0ZXh0LmluZGV4T2YoJyAnLCByYW5nZS5zdGFydE9mZnNldCArIDEpO1xuICAgICAgaWYgKHdvcmRTdGFydCA9PT0gLTEpIHtcbiAgICAgICAgd29yZFN0YXJ0ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmICh3b3JkRW5kID09PSAtMSkge1xuICAgICAgICB3b3JkRW5kID0gdGV4dC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyh3b3JkU3RhcnQsIHdvcmRFbmQpO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdGlvbiBzdGFydHMgYXQgdGhlIDAgaW5kZXggb2YgdGhlIHRleHQgbm9kZSBvciB0aGVyZSdzIG5vIHByZXZpb3VzIHRleHQgbm9kZSBpbiBjb250ZW50c1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgd29yZCB0aGF0IHRoZSB1c2VyIGlzIG9uIHdpdGggdGhlIGdpdmVuIGh0bWwuXG4gICAqXG4gICAqIENLRWRpdG9yIGdpdmVzIHVzIGFjY2VzcyB0byB0aGUgY3VycmVudCBsaW5lIG9mIGh0bWwgaW4gdGhlIGVkaXRvciwgc28gd2UgcmVwbGFjZSB0aGUgY29udGVudCBvZlxuICAgKiB0aGUgbGluZSwgcmVwbGFjaW5nIG9ubHkgdGhlIGN1cnJlbnQgd29yZC5cbiAgICovXG4gIHByaXZhdGUgcmVwbGFjZVdvcmRBdEN1cnNvcihuZXdXb3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbFdvcmQgPSB0aGlzLmdldFdvcmRBdEN1cnNvcigpLnRyaW0oKTtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgY29uc3Qgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gc3RhcnQuZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAoc3RhcnQudHlwZSA9PT0gQ0tFRElUT1IuTk9ERV9URVhUICYmIHBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBwYXJlbnROb2RlLmdldEh0bWwoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gbGluZS5sYXN0SW5kZXhPZihvcmlnaW5hbFdvcmQpO1xuXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAvLyBBZGQgYSBzcGFjZSBhZnRlciB0aGUgcmVwbGFjZWQgd29yZCBzbyB0aGF0IG11bHRpcGxlIHJlZmVyZW5jZXMgY2FuIGJlIGFkZGVkIGJhY2sgdG8gYmFja1xuICAgICAgICBjb25zdCBuZXdMaW5lID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpICsgbmV3V29yZCArICcgJyArIGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgb3JpZ2luYWxXb3JkLmxlbmd0aCk7XG4gICAgICAgIHBhcmVudE5vZGUuc2V0SHRtbChuZXdMaW5lKTtcblxuICAgICAgICAvLyBQbGFjZSBzZWxlY3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICByYW5nZS5tb3ZlVG9Qb3NpdGlvbihwYXJlbnROb2RlLCBDS0VESVRPUi5QT1NJVElPTl9CRUZPUkVfRU5EKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5zZWxlY3RSYW5nZXMoW3JhbmdlXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCByZWZlcmVuY2VzLCBtaW51cyBhbnkgZnJvbSB0aGUgbW9kZWwgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBlZGl0b3IuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlUmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICBsZXQgaHRtbCA9IHRoaXMuY2tlSW5zdGFuY2UuZG9jdW1lbnQuZ2V0Qm9keSgpLmdldEh0bWwoKTtcblxuICAgIC8vIENLRWRpdG9yIHN0b3BwZWQgc3VwcG9ydGluZyB0aGUgY29uZmlnLmZvcmNlU2ltcGxlQW1wZXJzYW5kIHNldHRpbmcsIHNvIHdlIGhhdmUgdG8gY29udmVydCAnJmFtcDsnIHRvICcmJ1xuICAgIC8vIHdoZW4gd2UgcHVsbCBodG1sIGZyb20gdGhlIGVkaXRvciAtIHNlZTogaHR0cHM6Ly9kZXYuY2tlZGl0b3IuY29tL3RpY2tldC8xMzcyM1xuICAgIGNvbnN0IGFtcFJlZ2V4ID0gbmV3IFJlZ0V4cCgnJmFtcDsnLCAnZycpO1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoYW1wUmVnZXgsICcmJyk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLm1vZGVsLnJlZmVyZW5jZXMpLmZvckVhY2goKHRhZ2dpbmdNb2RlKSA9PiB7XG4gICAgICBjb25zdCBhcnJheSA9IHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gfHwgW107XG4gICAgICBjb25zdCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0YWdnaW5nTW9kZV07XG4gICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIodGFnZ2luZ01vZGUpO1xuXG4gICAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVkVGV4dCA9IHJlbmRlcmVyKHN5bWJvbCwgaXRlbSk7XG4gICAgICAgIHJldHVybiBodG1sLmluY2x1ZGVzKHJlbmRlcmVkVGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgbm8gcmVmZXJlbmNlcywgdGhlbiBkZWxldGUgdGhlIGtleVxuICAgICAgaWYgKHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIENLRWRpdG9yIGZvciBRdWlja05vdGUgZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBDS0VkaXRvciBkeW5hbWljYWxseSB0byB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVyIHVwb24gaW5pdGlhbGl6YXRpb24uXG4gICAqIFJlbW92ZXMgdGhlIHRvb2xiYXIgb24gdGhlIGJvdHRvbSBhbmQgY29uZmlndXJlcyBhIHNsaW1tZWQgZG93biB2ZXJzaW9uIG9mIHRoZSB0b29sYmFyLlxuICAgKiBSZW1vdmVzIHBsdWdpbnMgYW5kIHR1cm5zIG9mZiBzZXR0aW5nIHRvIGFsbG93IGJyb3dzZXIgYmFzZWQgc3BlbGwgY2hlY2tpbmcuXG4gICAqL1xuICBwcml2YXRlIGdldENLRWRpdG9yQ29uZmlnKCk6IGFueSB7XG4gICAgLy8gVXNlIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZXIgZWxlbWVudCB0byBzZXQgdGhlIGluaXRpYWwgaGVpZ2h0IG9mIHRoZSBlZGl0b3IsIHRoZW5cbiAgICAvLyBzZXQgaXQgdG8gMTAwJSB0byBhbGxvdyB0aGUgZWRpdG9yIHRvIHJlc2l6ZSB1c2luZyB0aGUgZ3JpcHB5LlxuICAgIGNvbnN0IGVkaXRvckhlaWdodCA9IHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG4gICAgdGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsICcxMDAlJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9CUixcbiAgICAgIHNoaWZ0RW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9QLFxuICAgICAgZGlzYWJsZU5hdGl2ZVNwZWxsQ2hlY2tlcjogZmFsc2UsXG4gICAgICBoZWlnaHQ6IGVkaXRvckhlaWdodCxcbiAgICAgIHN0YXJ0dXBGb2N1czogdGhpcy5zdGFydHVwRm9jdXMsXG4gICAgICByZW1vdmVQbHVnaW5zOiAnbGlzdHN0eWxlLHRhYmxldG9vbHMsY29udGV4dG1lbnUnLCAvLyBhbGxvd3MgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZ1xuICAgICAgdG9vbGJhcjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Jhc2ljc3R5bGVzJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ1N0eWxlcycsXG4gICAgICAgICAgICAnRm9udFNpemUnLFxuICAgICAgICAgICAgJ0JvbGQnLFxuICAgICAgICAgICAgJ0l0YWxpYycsXG4gICAgICAgICAgICAnVW5kZXJsaW5lJyxcbiAgICAgICAgICAgICdUZXh0Q29sb3InLFxuICAgICAgICAgICAgJy0nLFxuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0xpbmsnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzY3JlZW4gcG9zaXRpb24gb2YgdGhlIGN1cnNvciBpbiBDS0VkaXRvciwgYWNjb3VudGluZyBmb3IgYW55IHNjcm9sbGluZyBpbiB0aGUgZWRpdG9yLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDdXJzb3JQb3NpdGlvbigpOiBhbnkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuJC5wYXJlbnRFbGVtZW50O1xuICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSB0aGlzLmNrZUluc3RhbmNlLmVkaXRhYmxlKCkuJDtcblxuICAgIC8vIFNpbmNlIHRoZSBlZGl0b3IgaXMgYSB0ZXh0IG5vZGUgaW4gdGhlIERPTSB0aGF0IGRvZXMgbm90IGtub3cgYWJvdXQgaXQncyBwb3NpdGlvbiwgYSB0ZW1wb3JhcnkgZWxlbWVudCBoYXMgdG9cbiAgICAvLyBiZSBpbnNlcnRlZCBpbiBvcmRlciB0byBsb2NhdGUgdGhlIGN1cnNvciBwb3NpdGlvbi5cbiAgICBjb25zdCBjdXJzb3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdudWxsJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3Vyc29yRWxlbWVudCk7XG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSB7XG4gICAgICB0b3A6IGN1cnNvckVsZW1lbnQub2Zmc2V0VG9wIC0gZWRpdG9yRWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiBjdXJzb3JFbGVtZW50Lm9mZnNldExlZnQgLSBlZGl0b3JFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgfTtcbiAgICBjdXJzb3JFbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGN1cnNvclBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgcmVzdWx0cyBkcm9wZG93biBiYXNlZCBvbiB0aGUgbG9jYXRpb24gb2YgdGhlIGN1cnNvciBpbiB0aGUgdGV4dCBmaWVsZFxuICAgKi9cbiAgcHJpdmF0ZSBwb3NpdGlvblJlc3VsdHNEcm9wZG93bigpOiB2b2lkIHtcbiAgICBjb25zdCBNSU5fTUFSR0lOX1RPUDogbnVtYmVyID0gUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVCAqIDI7XG4gICAgY29uc3QgTUFYX01BUkdJTl9UT1A6IG51bWJlciA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpICsgUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcblxuICAgIGNvbnN0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5nZXRDdXJzb3JQb3NpdGlvbigpO1xuICAgIGxldCBtYXJnaW5Ub3A6IG51bWJlciA9IGN1cnNvclBvc2l0aW9uLnRvcCArIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG5cbiAgICAvLyBDaGVjayB0aGF0IHRoZSBtYXJnaW4gaXMgd2l0aGluIHRoZSB2aXNpYmxlIGJvdW5kc1xuICAgIG1hcmdpblRvcCA9IE1hdGgubWF4KG1hcmdpblRvcCwgTUlOX01BUkdJTl9UT1ApO1xuICAgIG1hcmdpblRvcCA9IE1hdGgubWluKG1hcmdpblRvcCwgTUFYX01BUkdJTl9UT1ApO1xuXG4gICAgLy8gU2V0IHRoZSBtYXJnaW4tdG9wIG9mIHRoZSBkcm9wZG93blxuICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ21hcmdpbi10b3AnLCBtYXJnaW5Ub3AgKyAncHgnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgaW4gcGl4ZWxzIG9mIHRoZSBjb250ZW50IGFyZWEgLSB0aGUgdGV4dCB0aGF0IHRoZSB1c2VyIGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDb250ZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgbGV0IGNvbnRlbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgaWYgKFxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aSAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQuc3R5bGVcbiAgICApIHtcbiAgICAgIGNvbnN0IGNzc1RleHQ6IHN0cmluZyA9IHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGlmIChjc3NUZXh0LmluZGV4T2YoJ2hlaWdodDogJykgIT09IC0xKSB7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyA9IGNzc1RleHQuc3BsaXQoJ2hlaWdodDogJylbMV07XG4gICAgICAgIGhlaWdodCA9IGhlaWdodC5zcGxpdCgncHgnKVswXTtcbiAgICAgICAgY29udGVudEhlaWdodCA9IHBhcnNlSW50KGhlaWdodCwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGVudEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBwbGFjZWhvbGRlciB0ZXh0IGlmIHRoZSBlZGl0b3IgaXMgZW1wdHlcbiAgICovXG4gIHByaXZhdGUgc2hvd1BsYWNlaG9sZGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ja2VJbnN0YW5jZS5nZXREYXRhKCkgJiYgIXRoaXMuc3RhcnR1cEZvY3VzKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlXG4gICAgICAgIC5lZGl0YWJsZSgpXG4gICAgICAgIC5nZXRQYXJlbnQoKVxuICAgICAgICAuJC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlaG9sZGVyRWxlbWVudCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHBsYWNlaG9sZGVyIHRleHQgYnkgcmVtb3ZpbmcgdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAqL1xuICBwcml2YXRlIGhpZGVQbGFjZWhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlclZpc2libGUpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2VcbiAgICAgICAgLmVkaXRhYmxlKClcbiAgICAgICAgLmdldFBhcmVudCgpXG4gICAgICAgIC4kLnJlbW92ZUNoaWxkKHRoaXMucGxhY2Vob2xkZXJFbGVtZW50KTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvciBjcmVhdGUgdGhlIHNpbmdsZSBwbGFjZWhvbGRlciBvYmplY3QgdGhhdCBpcyBjb25zdHJ1Y3RlZCBvbmx5IHdoZW4gbmVlZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgcGxhY2Vob2xkZXJFbGVtZW50KCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdwbGFjZWhvbGRlcic7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICdtYXJnaW46IDIwcHg7IGNvbG9yOiAjQUFBQUFBOyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMjBweDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDAnO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudDtcbiAgfVxufVxuIl19