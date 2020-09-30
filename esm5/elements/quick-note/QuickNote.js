/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var QUICK_NOTE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return QuickNoteElement; })),
    multi: true,
};
var QuickNoteElement = /** @class */ (function (_super) {
    tslib_1.__extends(QuickNoteElement, _super);
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
        // in pixels - configured by stylesheet
        _this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        _this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
        // Bind to the active change event from the OutsideClick
        _this.onActiveChange.subscribe((/**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            if (!active) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.hideResults();
                }));
            }
        }));
        return _this;
    }
    /**
     * @return {?}
     */
    QuickNoteElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    /**
     * @return {?}
     */
    QuickNoteElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Tear down the CKEditor instance
        if (this.ckeInstance) {
            this.ckeInstance.focusManager.blur(true); // Remove focus from editor
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.ckeInstance.removeAllListeners();
                CKEDITOR.instances[_this.ckeInstance.name].destroy();
                _this.ckeInstance.destroy();
                _this.ckeInstance = null;
            }));
        }
    };
    /**
     * Connect to key/mouse events from CKEditor after the editor has been initialized
     */
    /**
     * Connect to key/mouse events from CKEditor after the editor has been initialized
     * @return {?}
     */
    QuickNoteElement.prototype.ngAfterViewInit = /**
     * Connect to key/mouse events from CKEditor after the editor has been initialized
     * @return {?}
     */
    function () {
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
        this.ckeInstance.on('key', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (!_this.onKey(event.data.domEvent.$)) {
                event.cancel();
            }
        }));
        // Connect to the change event in CKEditor for debouncing user modifications
        this.ckeInstance.on('change', (/**
         * @return {?}
         */
        function () {
            // Debounce update
            if (_this.debounceTimeout) {
                clearTimeout(_this.debounceTimeout);
            }
            _this.debounceTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                // Run within the context of this angular element since we don't need to cancel event
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    _this.onValueChange();
                }));
                _this.debounceTimeout = null;
            }), 250);
        }));
        // Propagate blur events from CKEditor to the Element's listeners
        this.ckeInstance.on('blur', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.showPlaceholder();
            _this.blur.emit(event);
        }));
        // Propagate blur events from CKEditor to the Element's listeners
        this.ckeInstance.on('focus', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.hidePlaceholder();
            _this.focus.emit(event);
        }));
        // Show placeholder if the note is empty, after the editor is instantiated
        this.ckeInstance.on('instanceReady', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.showPlaceholder();
            // Set editor to readOnly
            if (_this.config.readOnly) {
                _this.ckeInstance.setReadOnly(_this.config.readOnly);
            }
        }));
    };
    // Set touched on blur
    // Set touched on blur
    /**
     * @param {?=} event
     * @return {?}
     */
    QuickNoteElement.prototype.onTouched = 
    // Set touched on blur
    /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.onModelTouched();
    };
    /**
     * Handles setting the model and the view from the outside caller or the user's typing
     *
     * @param model A model that has a note (html content) and references (array of objects)
     */
    /**
     * Handles setting the model and the view from the outside caller or the user's typing
     *
     * @param {?} model A model that has a note (html content) and references (array of objects)
     * @return {?}
     */
    QuickNoteElement.prototype.writeValue = /**
     * Handles setting the model and the view from the outside caller or the user's typing
     *
     * @param {?} model A model that has a note (html content) and references (array of objects)
     * @return {?}
     */
    function (model) {
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
    /**
     * @param {?} fn
     * @return {?}
     */
    QuickNoteElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    QuickNoteElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * If a renderer is not provided, the QuickNote will default to using this one, an anchor tag with no href
     */
    /**
     * If a renderer is not provided, the QuickNote will default to using this one, an anchor tag with no href
     * @private
     * @param {?} symbol
     * @param {?} item
     * @return {?}
     */
    QuickNoteElement.defaultRenderer = /**
     * If a renderer is not provided, the QuickNote will default to using this one, an anchor tag with no href
     * @private
     * @param {?} symbol
     * @param {?} item
     * @return {?}
     */
    function (symbol, item) {
        return "<a>" + symbol + item.label + "</a>";
    };
    /**
     * Returns the renderer for a given tagging mode if it exists in the config, otherwise the default.
     */
    /**
     * Returns the renderer for a given tagging mode if it exists in the config, otherwise the default.
     * @private
     * @param {?} taggingMode
     * @return {?}
     */
    QuickNoteElement.prototype.getRenderer = /**
     * Returns the renderer for a given tagging mode if it exists in the config, otherwise the default.
     * @private
     * @param {?} taggingMode
     * @return {?}
     */
    function (taggingMode) {
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
    QuickNoteElement.prototype.onKey = /**
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
    function (event) {
        var _this = this;
        if (event.key) {
            if (this.quickNoteResults) {
                // Hide results on escape key
                if (event.keyCode === KeyCodes.ESC) {
                    this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.hideResults();
                    }));
                    return false;
                }
                // Navigation inside the results
                if (event.keyCode === KeyCodes.UP) {
                    this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.quickNoteResults.instance.prevActiveMatch();
                    }));
                    return false;
                }
                if (event.keyCode === KeyCodes.DOWN) {
                    this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.quickNoteResults.instance.nextActiveMatch();
                    }));
                    return false;
                }
                if (event.keyCode === KeyCodes.ENTER) {
                    this.zone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.quickNoteResults.instance.selectActiveMatch();
                    }));
                    return false;
                }
            }
            else {
                // Loop through all triggers and turn on tagging mode if the user just pressed a trigger character
                /** @type {?} */
                var triggers_1 = this.config.triggers || {};
                Object.keys(triggers_1).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) {
                    /** @type {?} */
                    var trigger = triggers_1[key] || {};
                    if (event.key === trigger) {
                        _this.isTagging = true;
                        _this.taggingMode = key;
                    }
                }));
            }
        }
        return true;
    };
    /**
     * Debounced method that is run in the proper Angular context when the user has modified the CKEditor.
     * After the value has been updated in CKEditor, this will propagate that change to the model and listeners.
     */
    /**
     * Debounced method that is run in the proper Angular context when the user has modified the CKEditor.
     * After the value has been updated in CKEditor, this will propagate that change to the model and listeners.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.onValueChange = /**
     * Debounced method that is run in the proper Angular context when the user has modified the CKEditor.
     * After the value has been updated in CKEditor, this will propagate that change to the model and listeners.
     * @private
     * @return {?}
     */
    function () {
        // Get the html text in CKEditor
        /** @type {?} */
        var value = this.ckeInstance.getData();
        // Remove empty 'ZERO WIDTH SPACE' characters that can get added erroneously by the editor
        /** @type {?} */
        var regex = new RegExp(String.fromCharCode(8203), 'g');
        value = value.replace(regex, '');
        // Make sure that any references in the model are still valid
        this.validateReferences();
        // Possibly show results if the user has entered a search term
        this.showResults();
        // Propagate change to ngModel for form validation, and send null if the note is empty
        /** @type {?} */
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
    /**
     * Creates an instance of the results (called popup) and adds all the bindings to that instance.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.showResults = /**
     * Creates an instance of the results (called popup) and adds all the bindings to that instance.
     * @private
     * @return {?}
     */
    function () {
        if (this.isTagging) {
            /** @type {?} */
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
    /**
     * Deletes the picker results from the DOM.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.hideResults = /**
     * Deletes the picker results from the DOM.
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * Handles the selection from the QuickNoteResults Component. Called by the QuickNoteResults component on it's
     * parent (this element).
     *
     * @private
     * @param {?} taggingMode - type of tags we are looking for
     * @param {?} selected - selected object from the picker that has a label and value
     * @return {?}
     */
    QuickNoteElement.prototype.onSelected = /**
     * Handles the selection from the QuickNoteResults Component. Called by the QuickNoteResults component on it's
     * parent (this element).
     *
     * @private
     * @param {?} taggingMode - type of tags we are looking for
     * @param {?} selected - selected object from the picker that has a label and value
     * @return {?}
     */
    function (taggingMode, selected) {
        // Turn off tagging
        this.isTagging = false;
        // Replace searchTerm with link
        /** @type {?} */
        var symbol = this.config.triggers[taggingMode];
        /** @type {?} */
        var renderer = this.getRenderer(taggingMode);
        /** @type {?} */
        var renderedText = renderer(symbol, selected);
        this.replaceWordAtCursor(renderedText);
        // Add the new reference, if it doesn't already exist
        this.model.references = this.model.references || {};
        this.model.references[taggingMode] = this.model.references[taggingMode] || [];
        /** @type {?} */
        var matchingItems = this.model.references[taggingMode].filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return JSON.stringify(item) === JSON.stringify(selected); }));
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
    /**
     * Convenience method that gets the current word that the cursor is on, minus the tag.
     * Also, trims any whitespace before/after the term to aid in searching.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.getSearchTerm = /**
     * Convenience method that gets the current word that the cursor is on, minus the tag.
     * Also, trims any whitespace before/after the term to aid in searching.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var word = this.getWordAtCursor().trim();
        if (this.isTagging) {
            /** @type {?} */
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
    /**
     * Gets the current word that the cursor is on CKEditor. Current word starts at the beginning of the line or a
     * tag character if we are in tagging mode. Current word ends at the end of the line or an empty space.
     *
     * @private
     * @return {?} plain text string (removes all html formatting)
     */
    QuickNoteElement.prototype.getWordAtCursor = /**
     * Gets the current word that the cursor is on CKEditor. Current word starts at the beginning of the line or a
     * tag character if we are in tagging mode. Current word ends at the end of the line or an empty space.
     *
     * @private
     * @return {?} plain text string (removes all html formatting)
     */
    function () {
        /** @type {?} */
        var range = this.ckeInstance.getSelection().getRanges()[0];
        /** @type {?} */
        var start = range.startContainer;
        if (start.type === CKEDITOR.NODE_TEXT && range.startOffset) {
            /** @type {?} */
            var text = start.getText();
            /** @type {?} */
            var symbol = this.config.triggers[this.taggingMode];
            /** @type {?} */
            var wordStart = text.lastIndexOf(symbol, range.startOffset - 1);
            if (wordStart > 0) {
                /** @type {?} */
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
            /** @type {?} */
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
    /**
     * Replaces the word that the user is on with the given html.
     *
     * CKEditor gives us access to the current line of html in the editor, so we replace the content of
     * the line, replacing only the current word.
     * @private
     * @param {?} newWord
     * @return {?}
     */
    QuickNoteElement.prototype.replaceWordAtCursor = /**
     * Replaces the word that the user is on with the given html.
     *
     * CKEditor gives us access to the current line of html in the editor, so we replace the content of
     * the line, replacing only the current word.
     * @private
     * @param {?} newWord
     * @return {?}
     */
    function (newWord) {
        /** @type {?} */
        var originalWord = this.getWordAtCursor().trim();
        /** @type {?} */
        var range = this.ckeInstance.getSelection().getRanges()[0];
        /** @type {?} */
        var start = range.startContainer;
        /** @type {?} */
        var parentNode = start.getParent();
        if (start.type === CKEDITOR.NODE_TEXT && parentNode) {
            /** @type {?} */
            var line = parentNode.getHtml();
            /** @type {?} */
            var index = line.lastIndexOf(originalWord);
            if (index >= 0) {
                // Add a space after the replaced word so that multiple references can be added back to back
                /** @type {?} */
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
    /**
     * Returns current references, minus any from the model that have been removed from the editor.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.validateReferences = /**
     * Returns current references, minus any from the model that have been removed from the editor.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var html = this.ckeInstance.document.getBody().getHtml();
        // CKEditor stopped supporting the config.forceSimpleAmpersand setting, so we have to convert '&amp;' to '&'
        // when we pull html from the editor - see: https://dev.ckeditor.com/ticket/13723
        /** @type {?} */
        var ampRegex = new RegExp('&amp;', 'g');
        html = html.replace(ampRegex, '&');
        Object.keys(this.model.references).forEach((/**
         * @param {?} taggingMode
         * @return {?}
         */
        function (taggingMode) {
            /** @type {?} */
            var array = _this.model.references[taggingMode] || [];
            /** @type {?} */
            var symbol = _this.config.triggers[taggingMode];
            /** @type {?} */
            var renderer = _this.getRenderer(taggingMode);
            _this.model.references[taggingMode] = array.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var renderedText = renderer(symbol, item);
                return html.includes(renderedText);
            }));
            // If no references, then delete the key
            if (_this.model.references[taggingMode].length === 0) {
                delete _this.model.references[taggingMode];
            }
        }));
    };
    /**
     * Configures the CKEditor for QuickNote functionality.
     *
     * Sets the height of the CKEditor dynamically to the height of the wrapper upon initialization.
     * Removes the toolbar on the bottom and configures a slimmed down version of the toolbar.
     * Removes plugins and turns off setting to allow browser based spell checking.
     */
    /**
     * Configures the CKEditor for QuickNote functionality.
     *
     * Sets the height of the CKEditor dynamically to the height of the wrapper upon initialization.
     * Removes the toolbar on the bottom and configures a slimmed down version of the toolbar.
     * Removes plugins and turns off setting to allow browser based spell checking.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.getCKEditorConfig = /**
     * Configures the CKEditor for QuickNote functionality.
     *
     * Sets the height of the CKEditor dynamically to the height of the wrapper upon initialization.
     * Removes the toolbar on the bottom and configures a slimmed down version of the toolbar.
     * Removes plugins and turns off setting to allow browser based spell checking.
     * @private
     * @return {?}
     */
    function () {
        // Use the height of the wrapper element to set the initial height of the editor, then
        // set it to 100% to allow the editor to resize using the grippy.
        /** @type {?} */
        var editorHeight = this.wrapper.nativeElement.clientHeight - QuickNoteElement.TOOLBAR_HEIGHT;
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
    };
    /**
     * Returns the current screen position of the cursor in CKEditor, accounting for any scrolling in the editor.
     */
    /**
     * Returns the current screen position of the cursor in CKEditor, accounting for any scrolling in the editor.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.getCursorPosition = /**
     * Returns the current screen position of the cursor in CKEditor, accounting for any scrolling in the editor.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var range = this.ckeInstance.getSelection().getRanges()[0];
        /** @type {?} */
        var parentElement = range.startContainer.$.parentElement;
        /** @type {?} */
        var editorElement = this.ckeInstance.editable().$;
        // Since the editor is a text node in the DOM that does not know about it's position, a temporary element has to
        // be inserted in order to locate the cursor position.
        /** @type {?} */
        var cursorElement = document.createElement('img');
        cursorElement.setAttribute('src', 'null');
        cursorElement.setAttribute('width', '0');
        cursorElement.setAttribute('height', '0');
        parentElement.appendChild(cursorElement);
        /** @type {?} */
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
    /**
     * Positions the results dropdown based on the location of the cursor in the text field
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.positionResultsDropdown = /**
     * Positions the results dropdown based on the location of the cursor in the text field
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var MIN_MARGIN_TOP = QuickNoteElement.TOOLBAR_HEIGHT * 2;
        /** @type {?} */
        var MAX_MARGIN_TOP = this.getContentHeight() + QuickNoteElement.TOOLBAR_HEIGHT;
        /** @type {?} */
        var cursorPosition = this.getCursorPosition();
        /** @type {?} */
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
    /**
     * Returns the height in pixels of the content area - the text that the user has entered.
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.getContentHeight = /**
     * Returns the height in pixels of the content area - the text that the user has entered.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var contentHeight = 0;
        if (this.ckeInstance.ui &&
            this.ckeInstance.ui.contentsElement &&
            this.ckeInstance.ui.contentsElement.$ &&
            this.ckeInstance.ui.contentsElement.$.style) {
            /** @type {?} */
            var cssText = this.ckeInstance.ui.contentsElement.$.style.cssText;
            if (cssText.indexOf('height: ') !== -1) {
                /** @type {?} */
                var height = cssText.split('height: ')[1];
                height = height.split('px')[0];
                contentHeight = parseInt(height);
            }
        }
        return contentHeight;
    };
    /**
     * Show the placeholder text if the editor is empty
     */
    /**
     * Show the placeholder text if the editor is empty
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.showPlaceholder = /**
     * Show the placeholder text if the editor is empty
     * @private
     * @return {?}
     */
    function () {
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
    /**
     * Hide the placeholder text by removing the placeholder element from the DOM
     * @private
     * @return {?}
     */
    QuickNoteElement.prototype.hidePlaceholder = /**
     * Hide the placeholder text by removing the placeholder element from the DOM
     * @private
     * @return {?}
     */
    function () {
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
        get: /**
         * Get or create the single placeholder object that is constructed only when needed.
         * @private
         * @return {?}
         */
        function () {
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
    QuickNoteElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-quick-note',
                    providers: [QUICK_NOTE_VALUE_ACCESSOR],
                    template: "\n        <div class=\"quick-note-wrapper\" #wrapper>\n            <textarea #host></textarea>\n            <span #results></span>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    QuickNoteElement.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: ComponentUtils }
    ]; };
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
    return QuickNoteElement;
}(OutsideClick));
export { QuickNoteElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUNULGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7OztJQUd4RSx5QkFBeUIsR0FBRztJQUNoQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUlEO0lBVXNDLDRDQUFZO0lBdUNoRCwwQkFBb0IsSUFBWSxFQUFFLE9BQW1CLEVBQVUsY0FBOEI7UUFBN0YsWUFDRSxrQkFBTSxPQUFPLENBQUMsU0FTZjtRQVZtQixVQUFJLEdBQUosSUFBSSxDQUFRO1FBQStCLG9CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTVCN0Ysa0JBQVksR0FBWSxLQUFLLENBQUM7O1FBTTlCLFdBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QyxVQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFN0MsWUFBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxD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eWxCVCx1QkFBQztDQUFBLEFBdm5CRCxDQVVzQyxZQUFZLEdBNm1CakQ7U0E3bUJZLGdCQUFnQjs7Ozs7O0lBa0MzQixnQ0FBbUM7O0lBakNuQyxtQ0FDMkI7O0lBQzNCLGdDQUN3Qjs7SUFDeEIsbUNBQzBCOztJQUUxQixrQ0FDWTs7SUFDWix3Q0FDOEI7O0lBQzlCLHVDQUNvQjs7SUFHcEIsaUNBQzhDOztJQUM5QyxnQ0FDNkM7O0lBQzdDLGtDQUMrQzs7Ozs7SUFHL0MsNENBQThCOzs7OztJQUM5Qiw0Q0FBOEI7Ozs7O0lBQzlCLHFDQUEyQjs7Ozs7SUFDM0IsdUNBQTRCOzs7OztJQUM1QixpQ0FBbUI7Ozs7O0lBQ25CLHVDQUF5Qjs7Ozs7SUFDekIsMkNBQTZCOzs7OztJQUM3Qiw4Q0FBNEM7Ozs7O0lBQzVDLCtDQUF3Qzs7Ozs7SUFJeEMseUNBQTJDOzs7OztJQUMzQywwQ0FBNEM7Ozs7O0lBRWhDLGdDQUFvQjs7Ozs7SUFBdUIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUXVpY2tOb3RlUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3F1aWNrLW5vdGUtcmVzdWx0cy9RdWlja05vdGVSZXN1bHRzJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFFVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBRdWlja05vdGVFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXF1aWNrLW5vdGUnLFxuICBwcm92aWRlcnM6IFtRVUlDS19OT1RFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLW5vdGUtd3JhcHBlclwiICN3cmFwcGVyPlxuICAgICAgICAgICAgPHRleHRhcmVhICNob3N0PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8c3BhbiAjcmVzdWx0cz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZUVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInKVxuICBwdWJsaWMgd3JhcHBlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaG9zdCcpXG4gIHB1YmxpYyBob3N0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyZXN1bHRzJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHJlc3VsdHM6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0dXBGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8vIEVtaXR0ZXIgZm9yIHNlbGVjdHNcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBUaGUgY2hhcmFjdGVycyB0aGF0IHRoZSB1c2VyIGVudGVycyBpbiBvcmRlciB0byBzZWFyY2ggZm9yIGEgcGVyc29uL3RoaW5nIHRvIHRhZ1xuICBwcml2YXRlIHJlc3VsdHNDb21wb25lbnQ6IGFueTtcbiAgcHJpdmF0ZSBxdWlja05vdGVSZXN1bHRzOiBhbnk7XG4gIHByaXZhdGUgaXNUYWdnaW5nOiBib29sZWFuO1xuICBwcml2YXRlIHRhZ2dpbmdNb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgbW9kZWw6IGFueTtcbiAgcHJpdmF0ZSBja2VJbnN0YW5jZTogYW55O1xuICBwcml2YXRlIGRlYm91bmNlVGltZW91dDogYW55O1xuICBwcml2YXRlIHBsYWNlaG9sZGVyVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlckVsZW1lbnQ6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgVE9PTEJBUl9IRUlHSFQgPSA0MDsgLy8gaW4gcGl4ZWxzIC0gY29uZmlndXJlZCBieSBzdHlsZXNoZWV0XG5cbiAgcHJpdmF0ZSBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIC8vIEJpbmQgdG8gdGhlIGFjdGl2ZSBjaGFuZ2UgZXZlbnQgZnJvbSB0aGUgT3V0c2lkZUNsaWNrXG4gICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGFjdGl2ZSkgPT4ge1xuICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHByb3BlciBjb25maWdcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbmZpZyBzZXQgZm9yIFF1aWNrTm90ZSEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSB0cmlnZ2Vyc1xuICAgIGlmICghdGhpcy5jb25maWcudHJpZ2dlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVpY2tOb3RlIGNvbmZpZyBtdXN0IHN1cHBseSB0cmlnZ2VycyEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBvcHRpb25zXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1aWNrTm90ZSBjb25maWcgbXVzdCBzdXBwbHkgb3B0aW9ucyEnKTtcbiAgICB9XG4gICAgLy8gQWxsb3cgZm9yIGNhbGxlcnMgdG8gdXNlIGEgY3VzdG9tIHJlc3VsdHMgdGVtcGxhdGUgY2xhc3MgaW4gdGhlIGNvbmZpZ1xuICAgIHRoaXMucmVzdWx0c0NvbXBvbmVudCA9IHRoaXMuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCBRdWlja05vdGVSZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIFRlYXIgZG93biB0aGUgQ0tFZGl0b3IgaW5zdGFuY2VcbiAgICBpZiAodGhpcy5ja2VJbnN0YW5jZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZS5mb2N1c01hbmFnZXIuYmx1cih0cnVlKTsgLy8gUmVtb3ZlIGZvY3VzIGZyb20gZWRpdG9yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuY2tlSW5zdGFuY2UubmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byBrZXkvbW91c2UgZXZlbnRzIGZyb20gQ0tFZGl0b3IgYWZ0ZXIgdGhlIGVkaXRvciBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgKi9cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIUNLRURJVE9SKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYWtlIHN1cmUgdG8gaW5jbHVkZSBDS0VkaXRvciBzb3VyY2VzIGluIHlvdXIgZGVwZW5kZW5jaWVzIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgdGhlIHRleHRhcmVhIHdpdGggYW4gaW5zdGFuY2Ugb2YgQ0tFZGl0b3JcbiAgICB0aGlzLmNrZUluc3RhbmNlID0gQ0tFRElUT1IucmVwbGFjZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgdGhpcy5nZXRDS0VkaXRvckNvbmZpZygpKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHZhbHVlIG9mIHRoZSBub3RlIGluIHRoZSBlZGl0b3JcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG5cbiAgICAvLyBDb25uZWN0IHRvIHRoZSBrZXkgZXZlbnQgaW4gQ0tFZGl0b3IgZm9yIHNob3dpbmcgcmVzdWx0cyBkcm9wZG93blxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2tleScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMub25LZXkoZXZlbnQuZGF0YS5kb21FdmVudC4kKSkge1xuICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGNoYW5nZSBldmVudCBpbiBDS0VkaXRvciBmb3IgZGVib3VuY2luZyB1c2VyIG1vZGlmaWNhdGlvbnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAvLyBEZWJvdW5jZSB1cGRhdGVcbiAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gUnVuIHdpdGhpbiB0aGUgY29udGV4dCBvZiB0aGlzIGFuZ3VsYXIgZWxlbWVudCBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIGNhbmNlbCBldmVudFxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIDI1MCk7XG4gICAgfSk7XG5cbiAgICAvLyBQcm9wYWdhdGUgYmx1ciBldmVudHMgZnJvbSBDS0VkaXRvciB0byB0aGUgRWxlbWVudCdzIGxpc3RlbmVyc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2JsdXInLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFByb3BhZ2F0ZSBibHVyIGV2ZW50cyBmcm9tIENLRWRpdG9yIHRvIHRoZSBFbGVtZW50J3MgbGlzdGVuZXJzXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignZm9jdXMnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oaWRlUGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTaG93IHBsYWNlaG9sZGVyIGlmIHRoZSBub3RlIGlzIGVtcHR5LCBhZnRlciB0aGUgZWRpdG9yIGlzIGluc3RhbnRpYXRlZFxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIC8vIFNldCBlZGl0b3IgdG8gcmVhZE9ubHlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZWFkT25seSkge1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLnNldFJlYWRPbmx5KHRoaXMuY29uZmlnLnJlYWRPbmx5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgcHVibGljIG9uVG91Y2hlZChldmVudD86IGFueSkge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHNldHRpbmcgdGhlIG1vZGVsIGFuZCB0aGUgdmlldyBmcm9tIHRoZSBvdXRzaWRlIGNhbGxlciBvciB0aGUgdXNlcidzIHR5cGluZ1xuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgQSBtb2RlbCB0aGF0IGhhcyBhIG5vdGUgKGh0bWwgY29udGVudCkgYW5kIHJlZmVyZW5jZXMgKGFycmF5IG9mIG9iamVjdHMpXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgLy8gU2V0IHZhbHVlIG9mIHRoZSBtb2RlbFxuICAgIGlmIChtb2RlbCAmJiAobW9kZWwucmVmZXJlbmNlcyB8fCBtb2RlbC5ub3RlKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgbm90ZTogbW9kZWwubm90ZSB8fCAnJyxcbiAgICAgICAgcmVmZXJlbmNlczogbW9kZWwucmVmZXJlbmNlcyB8fCB7fSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IG1vZGVsLFxuICAgICAgICByZWZlcmVuY2VzOiB7fSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBub3RlIGh0bWwgdmFsdWUgaW4gdGhlIGVkaXRvclxuICAgIGlmICh0aGlzLmNrZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnNldERhdGEodGhpcy5tb2RlbC5ub3RlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogSWYgYSByZW5kZXJlciBpcyBub3QgcHJvdmlkZWQsIHRoZSBRdWlja05vdGUgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoaXMgb25lLCBhbiBhbmNob3IgdGFnIHdpdGggbm8gaHJlZlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFJlbmRlcmVyKHN5bWJvbDogc3RyaW5nLCBpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGE+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbmRlcmVyIGZvciBhIGdpdmVuIHRhZ2dpbmcgbW9kZSBpZiBpdCBleGlzdHMgaW4gdGhlIGNvbmZpZywgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRSZW5kZXJlcih0YWdnaW5nTW9kZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVuZGVyZXIgPyB0aGlzLmNvbmZpZy5yZW5kZXJlclt0YWdnaW5nTW9kZV0gOiBRdWlja05vdGVFbGVtZW50LmRlZmF1bHRSZW5kZXJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgZXZlcnkgdGltZSBhIGtleXN0cm9rZSBpcyBtYWRlIGluIHRoZSBlZGl0b3IuIExpc3RlbnMgZm9yIHBhcnRpY3VsYXIga2V5cyAoZS5nLiBVUCBhcnJvdywgRVNDLCBldGMuKVxuICAgKiB0byBoYW5kbGUgY2VydGFpbiBiZWhhdmlvcnMgb2YgdGhlIHBpY2tlci5cbiAgICpcbiAgICogUnVucyB3aXRoaW4gdGhlIGNvbnRleHQgb2YgdGhlIENLRWRpdG9yLCBzbyBhY3Rpb25zIHRoYXQgYWZmZWN0IHRoZSB2aWV3IGhhdmUgdG8gYmUgcnVuIGJhY2sgaW5zaWRlIG9mIHRoZVxuICAgKiBBbmd1bGFyIHpvbmUgb2YgdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IFRoZSBrZXkgcHJlc3MgZXZlbnRcbiAgICogQHJldHVybiB0cnVlIHRvIGFsbG93IHRoZSBldmVudCB0byBvY2N1ciwgZmFsc2UgdG8gY2FuY2VsIHRoZSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgLy8gSGlkZSByZXN1bHRzIG9uIGVzY2FwZSBrZXlcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5hdmlnYXRpb24gaW5zaWRlIHRoZSByZXN1bHRzXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2Uuc2VsZWN0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdHJpZ2dlcnMgYW5kIHR1cm4gb24gdGFnZ2luZyBtb2RlIGlmIHRoZSB1c2VyIGp1c3QgcHJlc3NlZCBhIHRyaWdnZXIgY2hhcmFjdGVyXG4gICAgICAgIGxldCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXJzIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0cmlnZ2VycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgbGV0IHRyaWdnZXIgPSB0cmlnZ2Vyc1trZXldIHx8IHt9O1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGFnZ2luZ01vZGUgPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVib3VuY2VkIG1ldGhvZCB0aGF0IGlzIHJ1biBpbiB0aGUgcHJvcGVyIEFuZ3VsYXIgY29udGV4dCB3aGVuIHRoZSB1c2VyIGhhcyBtb2RpZmllZCB0aGUgQ0tFZGl0b3IuXG4gICAqIEFmdGVyIHRoZSB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkIGluIENLRWRpdG9yLCB0aGlzIHdpbGwgcHJvcGFnYXRlIHRoYXQgY2hhbmdlIHRvIHRoZSBtb2RlbCBhbmQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlKCk6IHZvaWQge1xuICAgIC8vIEdldCB0aGUgaHRtbCB0ZXh0IGluIENLRWRpdG9yXG4gICAgbGV0IHZhbHVlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAvLyBSZW1vdmUgZW1wdHkgJ1pFUk8gV0lEVEggU1BBQ0UnIGNoYXJhY3RlcnMgdGhhdCBjYW4gZ2V0IGFkZGVkIGVycm9uZW91c2x5IGJ5IHRoZSBlZGl0b3JcbiAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFN0cmluZy5mcm9tQ2hhckNvZGUoODIwMyksICdnJyk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCBhbnkgcmVmZXJlbmNlcyBpbiB0aGUgbW9kZWwgYXJlIHN0aWxsIHZhbGlkXG4gICAgdGhpcy52YWxpZGF0ZVJlZmVyZW5jZXMoKTtcblxuICAgIC8vIFBvc3NpYmx5IHNob3cgcmVzdWx0cyBpZiB0aGUgdXNlciBoYXMgZW50ZXJlZCBhIHNlYXJjaCB0ZXJtXG4gICAgdGhpcy5zaG93UmVzdWx0cygpO1xuXG4gICAgLy8gUHJvcGFnYXRlIGNoYW5nZSB0byBuZ01vZGVsIGZvciBmb3JtIHZhbGlkYXRpb24sIGFuZCBzZW5kIG51bGwgaWYgdGhlIG5vdGUgaXMgZW1wdHlcbiAgICBsZXQgbmV3TW9kZWwgPSBudWxsO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3TW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IHZhbHVlLFxuICAgICAgICByZWZlcmVuY2VzOiB0aGlzLm1vZGVsLnJlZmVyZW5jZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgdG8gdGhlIG5nTW9kZWwgY2hhbmdlIGV2ZW50IHRoYXQgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKG5ld01vZGVsKTtcblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgb2YgdGhlIGBAT3V0cHV0KCkgY2hhbmdlYCBldmVudCB0aGF0IHRoZSBtb2RlbCBoYXMgYmVlbiB1cGRhdGVkXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChuZXdNb2RlbCk7XG5cbiAgICAvLyBJbmZvcm0gbGlzdGVuZXJzIHRvIHRoZSBuZ01vZGVsIHRvdWNoZWQgZXZlbnQgdGhhdCBzb21ldGhpbmcgaGFzIGNoYW5nZWRcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdHMgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG93UmVzdWx0cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ2dpbmcpIHtcbiAgICAgIGxldCBzZWFyY2hUZXJtID0gdGhpcy5nZXRTZWFyY2hUZXJtKCk7XG4gICAgICBpZiAoc2VhcmNoVGVybS5sZW5ndGgpIHtcbiAgICAgICAgLy8gVXBkYXRlIE1hdGNoZXNcbiAgICAgICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBsaXN0XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnRlcm0gPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdGFnZ2luZ01vZGU6IHRoaXMudGFnZ2luZ01vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDcmVhdGUgdGhlIHJlc3VsdHMgRE9NIGVsZW1lbnRcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0aGlzLnJlc3VsdHNDb21wb25lbnQsIHRoaXMucmVzdWx0cyk7XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnBhcmVudCA9IHRoaXM7XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS50ZXJtID0ge1xuICAgICAgICAgICAgc2VhcmNoVGVybTogc2VhcmNoVGVybSxcbiAgICAgICAgICAgIHRhZ2dpbmdNb2RlOiB0aGlzLnRhZ2dpbmdNb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblJlc3VsdHNEcm9wZG93bigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBUZWxsIHRoZSBPdXRzaWRlQ2xpY2sgYmFzZSBjbGFzcyB0byBzdGFydCBsaXN0ZW5pbmcgZm9yIGFuIG91dHNpZGUgY2xpY2tzXG4gICAgICB0aGlzLnRvZ2dsZUFjdGl2ZShudWxsLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyB0aGUgcGlja2VyIHJlc3VsdHMgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgcHJpdmF0ZSBoaWRlUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLmlzVGFnZ2luZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5kZXN0cm95KCk7XG4gICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRoZSBzZWxlY3Rpb24gZnJvbSB0aGUgUXVpY2tOb3RlUmVzdWx0cyBDb21wb25lbnQuIENhbGxlZCBieSB0aGUgUXVpY2tOb3RlUmVzdWx0cyBjb21wb25lbnQgb24gaXQnc1xuICAgKiBwYXJlbnQgKHRoaXMgZWxlbWVudCkuXG4gICAqXG4gICAqIEBwYXJhbSB0YWdnaW5nTW9kZSAtIHR5cGUgb2YgdGFncyB3ZSBhcmUgbG9va2luZyBmb3JcbiAgICogQHBhcmFtIHNlbGVjdGVkIC0gc2VsZWN0ZWQgb2JqZWN0IGZyb20gdGhlIHBpY2tlciB0aGF0IGhhcyBhIGxhYmVsIGFuZCB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBvblNlbGVjdGVkKHRhZ2dpbmdNb2RlOiBzdHJpbmcsIHNlbGVjdGVkOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBUdXJuIG9mZiB0YWdnaW5nXG4gICAgdGhpcy5pc1RhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8vIFJlcGxhY2Ugc2VhcmNoVGVybSB3aXRoIGxpbmtcbiAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGFnZ2luZ01vZGVdO1xuICAgIGxldCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIodGFnZ2luZ01vZGUpO1xuICAgIGxldCByZW5kZXJlZFRleHQgPSByZW5kZXJlcihzeW1ib2wsIHNlbGVjdGVkKTtcblxuICAgIHRoaXMucmVwbGFjZVdvcmRBdEN1cnNvcihyZW5kZXJlZFRleHQpO1xuXG4gICAgLy8gQWRkIHRoZSBuZXcgcmVmZXJlbmNlLCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcbiAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXMgPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXMgfHwge307XG4gICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSA9IHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gfHwgW107XG4gICAgbGV0IG1hdGNoaW5nSXRlbXMgPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLmZpbHRlcigoaXRlbSkgPT4gSlNPTi5zdHJpbmdpZnkoaXRlbSkgPT09IEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkKSk7XG4gICAgaWYgKG1hdGNoaW5nSXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLnB1c2goc2VsZWN0ZWQpO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgcXVpY2sgbm90ZSB3aXRoIHRoZSBjaGFuZ2VzIGR1ZSB0byB0aGUgdXNlcidzIHNlbGVjdGlvbiBvZiBhbiBpdGVtIGluIHRoZSBkcm9wZG93blxuICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGdldHMgdGhlIGN1cnJlbnQgd29yZCB0aGF0IHRoZSBjdXJzb3IgaXMgb24sIG1pbnVzIHRoZSB0YWcuXG4gICAqIEFsc28sIHRyaW1zIGFueSB3aGl0ZXNwYWNlIGJlZm9yZS9hZnRlciB0aGUgdGVybSB0byBhaWQgaW4gc2VhcmNoaW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTZWFyY2hUZXJtKCk6IHN0cmluZyB7XG4gICAgbGV0IHdvcmQgPSB0aGlzLmdldFdvcmRBdEN1cnNvcigpLnRyaW0oKTtcbiAgICBpZiAodGhpcy5pc1RhZ2dpbmcpIHtcbiAgICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0aGlzLnRhZ2dpbmdNb2RlXTtcbiAgICAgIGlmICghd29yZC5pbmNsdWRlcyhzeW1ib2wpKSB7XG4gICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgd29yZCA9IHdvcmQuc2xpY2Uod29yZC5pbmRleE9mKHN5bWJvbCkgKyBzeW1ib2wubGVuZ3RoKTtcbiAgICB9XG4gICAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCB3b3JkIHRoYXQgdGhlIGN1cnNvciBpcyBvbiBDS0VkaXRvci4gQ3VycmVudCB3b3JkIHN0YXJ0cyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaW5lIG9yIGFcbiAgICogdGFnIGNoYXJhY3RlciBpZiB3ZSBhcmUgaW4gdGFnZ2luZyBtb2RlLiBDdXJyZW50IHdvcmQgZW5kcyBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lIG9yIGFuIGVtcHR5IHNwYWNlLlxuICAgKlxuICAgKiBAcmV0dXJucyBwbGFpbiB0ZXh0IHN0cmluZyAocmVtb3ZlcyBhbGwgaHRtbCBmb3JtYXR0aW5nKVxuICAgKi9cbiAgcHJpdmF0ZSBnZXRXb3JkQXRDdXJzb3IoKTogc3RyaW5nIHtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLmdldFJhbmdlcygpWzBdO1xuICAgIGxldCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuXG4gICAgaWYgKHN0YXJ0LnR5cGUgPT09IENLRURJVE9SLk5PREVfVEVYVCAmJiByYW5nZS5zdGFydE9mZnNldCkge1xuICAgICAgbGV0IHRleHQgPSBzdGFydC5nZXRUZXh0KCk7XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGhpcy50YWdnaW5nTW9kZV07XG4gICAgICBsZXQgd29yZFN0YXJ0ID0gdGV4dC5sYXN0SW5kZXhPZihzeW1ib2wsIHJhbmdlLnN0YXJ0T2Zmc2V0IC0gMSk7XG5cbiAgICAgIGlmICh3b3JkU3RhcnQgPiAwKSB7XG4gICAgICAgIGxldCBiZWZvcmVTeW1ib2w6IHN0cmluZyA9IHRleHQuY2hhckF0KHdvcmRTdGFydCAtIDEpO1xuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIHRyaWdnZXIgdGhlIGxvb2t1cCBjYWxsIHVubGVzcyB0aGUgc3ltYm9sIHdhcyBwcmVjZWRlZCBieSB3aGl0ZXNwYWNlXG4gICAgICAgIGlmIChiZWZvcmVTeW1ib2wgIT09ICdcXHUyMDBCJyAmJiAvXFxTLy50ZXN0KGJlZm9yZVN5bWJvbCkpIHtcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhcnQuaGFzUHJldmlvdXMoKSAmJiAvXFxTJC8udGVzdChzdGFydC5nZXRQcmV2aW91cygpLmdldFRleHQoKSkpIHtcbiAgICAgICAgLy8gV2hlbiB3b3JkU3RhcnQgaXMgPD0gMCwgd2UgbmVlZCB0byBjaGVjayB0aGUgcHJldmlvdXMgbm9kZSdzIHRleHQgdG8gc2VlIGlmIGl0IGVuZGVkIHdpdGggd2hpdGVzcGFjZSBvciBub3RcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBsZXQgd29yZEVuZCA9IHRleHQuaW5kZXhPZignICcsIHJhbmdlLnN0YXJ0T2Zmc2V0ICsgMSk7XG4gICAgICBpZiAod29yZFN0YXJ0ID09PSAtMSkge1xuICAgICAgICB3b3JkU3RhcnQgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHdvcmRFbmQgPT09IC0xKSB7XG4gICAgICAgIHdvcmRFbmQgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRleHQuc3Vic3RyaW5nKHdvcmRTdGFydCwgd29yZEVuZCk7XG4gICAgfVxuXG4gICAgLy8gU2VsZWN0aW9uIHN0YXJ0cyBhdCB0aGUgMCBpbmRleCBvZiB0aGUgdGV4dCBub2RlIG9yIHRoZXJlJ3Mgbm8gcHJldmlvdXMgdGV4dCBub2RlIGluIGNvbnRlbnRzXG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSB3b3JkIHRoYXQgdGhlIHVzZXIgaXMgb24gd2l0aCB0aGUgZ2l2ZW4gaHRtbC5cbiAgICpcbiAgICogQ0tFZGl0b3IgZ2l2ZXMgdXMgYWNjZXNzIHRvIHRoZSBjdXJyZW50IGxpbmUgb2YgaHRtbCBpbiB0aGUgZWRpdG9yLCBzbyB3ZSByZXBsYWNlIHRoZSBjb250ZW50IG9mXG4gICAqIHRoZSBsaW5lLCByZXBsYWNpbmcgb25seSB0aGUgY3VycmVudCB3b3JkLlxuICAgKi9cbiAgcHJpdmF0ZSByZXBsYWNlV29yZEF0Q3Vyc29yKG5ld1dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBvcmlnaW5hbFdvcmQgPSB0aGlzLmdldFdvcmRBdEN1cnNvcigpLnRyaW0oKTtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLmdldFJhbmdlcygpWzBdO1xuICAgIGxldCBzdGFydCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyO1xuICAgIGxldCBwYXJlbnROb2RlID0gc3RhcnQuZ2V0UGFyZW50KCk7XG5cbiAgICBpZiAoc3RhcnQudHlwZSA9PT0gQ0tFRElUT1IuTk9ERV9URVhUICYmIHBhcmVudE5vZGUpIHtcbiAgICAgIGxldCBsaW5lID0gcGFyZW50Tm9kZS5nZXRIdG1sKCk7XG4gICAgICBsZXQgaW5kZXggPSBsaW5lLmxhc3RJbmRleE9mKG9yaWdpbmFsV29yZCk7XG5cbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIC8vIEFkZCBhIHNwYWNlIGFmdGVyIHRoZSByZXBsYWNlZCB3b3JkIHNvIHRoYXQgbXVsdGlwbGUgcmVmZXJlbmNlcyBjYW4gYmUgYWRkZWQgYmFjayB0byBiYWNrXG4gICAgICAgIGxldCBuZXdMaW5lID0gbGluZS5zdWJzdHJpbmcoMCwgaW5kZXgpICsgbmV3V29yZCArICcgJyArIGxpbmUuc3Vic3RyaW5nKGluZGV4ICsgb3JpZ2luYWxXb3JkLmxlbmd0aCk7XG4gICAgICAgIHBhcmVudE5vZGUuc2V0SHRtbChuZXdMaW5lKTtcblxuICAgICAgICAvLyBQbGFjZSBzZWxlY3Rpb24gYXQgdGhlIGVuZCBvZiB0aGUgbGluZVxuICAgICAgICByYW5nZS5tb3ZlVG9Qb3NpdGlvbihwYXJlbnROb2RlLCBDS0VESVRPUi5QT1NJVElPTl9CRUZPUkVfRU5EKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5zZWxlY3RSYW5nZXMoW3JhbmdlXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgY3VycmVudCByZWZlcmVuY2VzLCBtaW51cyBhbnkgZnJvbSB0aGUgbW9kZWwgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBlZGl0b3IuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlUmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICBsZXQgaHRtbCA9IHRoaXMuY2tlSW5zdGFuY2UuZG9jdW1lbnQuZ2V0Qm9keSgpLmdldEh0bWwoKTtcblxuICAgIC8vIENLRWRpdG9yIHN0b3BwZWQgc3VwcG9ydGluZyB0aGUgY29uZmlnLmZvcmNlU2ltcGxlQW1wZXJzYW5kIHNldHRpbmcsIHNvIHdlIGhhdmUgdG8gY29udmVydCAnJmFtcDsnIHRvICcmJ1xuICAgIC8vIHdoZW4gd2UgcHVsbCBodG1sIGZyb20gdGhlIGVkaXRvciAtIHNlZTogaHR0cHM6Ly9kZXYuY2tlZGl0b3IuY29tL3RpY2tldC8xMzcyM1xuICAgIGxldCBhbXBSZWdleCA9IG5ldyBSZWdFeHAoJyZhbXA7JywgJ2cnKTtcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKGFtcFJlZ2V4LCAnJicpO1xuXG4gICAgT2JqZWN0LmtleXModGhpcy5tb2RlbC5yZWZlcmVuY2VzKS5mb3JFYWNoKCh0YWdnaW5nTW9kZSkgPT4ge1xuICAgICAgbGV0IGFycmF5ID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSB8fCBbXTtcbiAgICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0YWdnaW5nTW9kZV07XG4gICAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKHRhZ2dpbmdNb2RlKTtcblxuICAgICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSA9IGFycmF5LmZpbHRlcigoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgcmVuZGVyZWRUZXh0ID0gcmVuZGVyZXIoc3ltYm9sLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIGh0bWwuaW5jbHVkZXMocmVuZGVyZWRUZXh0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiBubyByZWZlcmVuY2VzLCB0aGVuIGRlbGV0ZSB0aGUga2V5XG4gICAgICBpZiAodGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgQ0tFZGl0b3IgZm9yIFF1aWNrTm90ZSBmdW5jdGlvbmFsaXR5LlxuICAgKlxuICAgKiBTZXRzIHRoZSBoZWlnaHQgb2YgdGhlIENLRWRpdG9yIGR5bmFtaWNhbGx5IHRvIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZXIgdXBvbiBpbml0aWFsaXphdGlvbi5cbiAgICogUmVtb3ZlcyB0aGUgdG9vbGJhciBvbiB0aGUgYm90dG9tIGFuZCBjb25maWd1cmVzIGEgc2xpbW1lZCBkb3duIHZlcnNpb24gb2YgdGhlIHRvb2xiYXIuXG4gICAqIFJlbW92ZXMgcGx1Z2lucyBhbmQgdHVybnMgb2ZmIHNldHRpbmcgdG8gYWxsb3cgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q0tFZGl0b3JDb25maWcoKTogYW55IHtcbiAgICAvLyBVc2UgdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlciBlbGVtZW50IHRvIHNldCB0aGUgaW5pdGlhbCBoZWlnaHQgb2YgdGhlIGVkaXRvciwgdGhlblxuICAgIC8vIHNldCBpdCB0byAxMDAlIHRvIGFsbG93IHRoZSBlZGl0b3IgdG8gcmVzaXplIHVzaW5nIHRoZSBncmlwcHkuXG4gICAgbGV0IGVkaXRvckhlaWdodCA9IHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG4gICAgdGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2hlaWdodCcsICcxMDAlJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9CUixcbiAgICAgIHNoaWZ0RW50ZXJNb2RlOiBDS0VESVRPUi5FTlRFUl9QLFxuICAgICAgZGlzYWJsZU5hdGl2ZVNwZWxsQ2hlY2tlcjogZmFsc2UsXG4gICAgICBoZWlnaHQ6IGVkaXRvckhlaWdodCxcbiAgICAgIHN0YXJ0dXBGb2N1czogdGhpcy5zdGFydHVwRm9jdXMsXG4gICAgICByZW1vdmVQbHVnaW5zOiAnbGlzdHN0eWxlLHRhYmxldG9vbHMsY29udGV4dG1lbnUnLCAvLyBhbGxvd3MgYnJvd3NlciBiYXNlZCBzcGVsbCBjaGVja2luZ1xuICAgICAgdG9vbGJhcjogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Jhc2ljc3R5bGVzJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ1N0eWxlcycsXG4gICAgICAgICAgICAnRm9udFNpemUnLFxuICAgICAgICAgICAgJ0JvbGQnLFxuICAgICAgICAgICAgJ0l0YWxpYycsXG4gICAgICAgICAgICAnVW5kZXJsaW5lJyxcbiAgICAgICAgICAgICdUZXh0Q29sb3InLFxuICAgICAgICAgICAgJy0nLFxuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0xpbmsnLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBzY3JlZW4gcG9zaXRpb24gb2YgdGhlIGN1cnNvciBpbiBDS0VkaXRvciwgYWNjb3VudGluZyBmb3IgYW55IHNjcm9sbGluZyBpbiB0aGUgZWRpdG9yLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDdXJzb3JQb3NpdGlvbigpOiBhbnkge1xuICAgIGxldCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgbGV0IHBhcmVudEVsZW1lbnQgPSByYW5nZS5zdGFydENvbnRhaW5lci4kLnBhcmVudEVsZW1lbnQ7XG4gICAgbGV0IGVkaXRvckVsZW1lbnQgPSB0aGlzLmNrZUluc3RhbmNlLmVkaXRhYmxlKCkuJDtcblxuICAgIC8vIFNpbmNlIHRoZSBlZGl0b3IgaXMgYSB0ZXh0IG5vZGUgaW4gdGhlIERPTSB0aGF0IGRvZXMgbm90IGtub3cgYWJvdXQgaXQncyBwb3NpdGlvbiwgYSB0ZW1wb3JhcnkgZWxlbWVudCBoYXMgdG9cbiAgICAvLyBiZSBpbnNlcnRlZCBpbiBvcmRlciB0byBsb2NhdGUgdGhlIGN1cnNvciBwb3NpdGlvbi5cbiAgICBsZXQgY3Vyc29yRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGN1cnNvckVsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCAnbnVsbCcpO1xuICAgIGN1cnNvckVsZW1lbnQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcwJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcwJyk7XG5cbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGN1cnNvckVsZW1lbnQpO1xuICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogY3Vyc29yRWxlbWVudC5vZmZzZXRUb3AgLSBlZGl0b3JFbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgIGxlZnQ6IGN1cnNvckVsZW1lbnQub2Zmc2V0TGVmdCAtIGVkaXRvckVsZW1lbnQuc2Nyb2xsTGVmdCxcbiAgICB9O1xuICAgIGN1cnNvckVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICByZXR1cm4gY3Vyc29yUG9zaXRpb247XG4gIH1cblxuICAvKipcbiAgICogUG9zaXRpb25zIHRoZSByZXN1bHRzIGRyb3Bkb3duIGJhc2VkIG9uIHRoZSBsb2NhdGlvbiBvZiB0aGUgY3Vyc29yIGluIHRoZSB0ZXh0IGZpZWxkXG4gICAqL1xuICBwcml2YXRlIHBvc2l0aW9uUmVzdWx0c0Ryb3Bkb3duKCk6IHZvaWQge1xuICAgIGNvbnN0IE1JTl9NQVJHSU5fVE9QOiBudW1iZXIgPSBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUICogMjtcbiAgICBjb25zdCBNQVhfTUFSR0lOX1RPUDogbnVtYmVyID0gdGhpcy5nZXRDb250ZW50SGVpZ2h0KCkgKyBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUO1xuXG4gICAgbGV0IGN1cnNvclBvc2l0aW9uID0gdGhpcy5nZXRDdXJzb3JQb3NpdGlvbigpO1xuICAgIGxldCBtYXJnaW5Ub3A6IG51bWJlciA9IGN1cnNvclBvc2l0aW9uLnRvcCArIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG5cbiAgICAvLyBDaGVjayB0aGF0IHRoZSBtYXJnaW4gaXMgd2l0aGluIHRoZSB2aXNpYmxlIGJvdW5kc1xuICAgIG1hcmdpblRvcCA9IE1hdGgubWF4KG1hcmdpblRvcCwgTUlOX01BUkdJTl9UT1ApO1xuICAgIG1hcmdpblRvcCA9IE1hdGgubWluKG1hcmdpblRvcCwgTUFYX01BUkdJTl9UT1ApO1xuXG4gICAgLy8gU2V0IHRoZSBtYXJnaW4tdG9wIG9mIHRoZSBkcm9wZG93blxuICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ21hcmdpbi10b3AnLCBtYXJnaW5Ub3AgKyAncHgnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoZWlnaHQgaW4gcGl4ZWxzIG9mIHRoZSBjb250ZW50IGFyZWEgLSB0aGUgdGV4dCB0aGF0IHRoZSB1c2VyIGhhcyBlbnRlcmVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDb250ZW50SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgbGV0IGNvbnRlbnRIZWlnaHQ6IG51bWJlciA9IDA7XG4gICAgaWYgKFxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aSAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQuc3R5bGVcbiAgICApIHtcbiAgICAgIGxldCBjc3NUZXh0OiBzdHJpbmcgPSB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudC4kLnN0eWxlLmNzc1RleHQ7XG4gICAgICBpZiAoY3NzVGV4dC5pbmRleE9mKCdoZWlnaHQ6ICcpICE9PSAtMSkge1xuICAgICAgICBsZXQgaGVpZ2h0OiBzdHJpbmcgPSBjc3NUZXh0LnNwbGl0KCdoZWlnaHQ6ICcpWzFdO1xuICAgICAgICBoZWlnaHQgPSBoZWlnaHQuc3BsaXQoJ3B4JylbMF07XG4gICAgICAgIGNvbnRlbnRIZWlnaHQgPSBwYXJzZUludChoZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29udGVudEhlaWdodDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBwbGFjZWhvbGRlciB0ZXh0IGlmIHRoZSBlZGl0b3IgaXMgZW1wdHlcbiAgICovXG4gIHByaXZhdGUgc2hvd1BsYWNlaG9sZGVyKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5ja2VJbnN0YW5jZS5nZXREYXRhKCkgJiYgIXRoaXMuc3RhcnR1cEZvY3VzKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlXG4gICAgICAgIC5lZGl0YWJsZSgpXG4gICAgICAgIC5nZXRQYXJlbnQoKVxuICAgICAgICAuJC5hcHBlbmRDaGlsZCh0aGlzLnBsYWNlaG9sZGVyRWxlbWVudCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHBsYWNlaG9sZGVyIHRleHQgYnkgcmVtb3ZpbmcgdGhlIHBsYWNlaG9sZGVyIGVsZW1lbnQgZnJvbSB0aGUgRE9NXG4gICAqL1xuICBwcml2YXRlIGhpZGVQbGFjZWhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlclZpc2libGUpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2VcbiAgICAgICAgLmVkaXRhYmxlKClcbiAgICAgICAgLmdldFBhcmVudCgpXG4gICAgICAgIC4kLnJlbW92ZUNoaWxkKHRoaXMucGxhY2Vob2xkZXJFbGVtZW50KTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCBvciBjcmVhdGUgdGhlIHNpbmdsZSBwbGFjZWhvbGRlciBvYmplY3QgdGhhdCBpcyBjb25zdHJ1Y3RlZCBvbmx5IHdoZW4gbmVlZGVkLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgcGxhY2Vob2xkZXJFbGVtZW50KCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdwbGFjZWhvbGRlcic7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICdtYXJnaW46IDIwcHg7IGNvbG9yOiAjQUFBQUFBOyBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMjBweDsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDAnO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudDtcbiAgfVxufVxuIl19