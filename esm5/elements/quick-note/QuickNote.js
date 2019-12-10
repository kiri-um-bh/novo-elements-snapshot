/**
 * @fileoverview added by tsickle
 * Generated from: elements/quick-note/QuickNote.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "\n    <div class=\"quick-note-wrapper\" #wrapper><textarea #host></textarea> <span #results></span></div>\n  "
                }] }
    ];
    /** @nocollapse */
    QuickNoteElement.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: ComponentUtils }
    ]; };
    QuickNoteElement.propDecorators = {
        wrapper: [{ type: ViewChild, args: ['wrapper', { static: true },] }],
        host: [{ type: ViewChild, args: ['host', { static: true },] }],
        results: [{ type: ViewChild, args: ['results', { read: ViewContainerRef, static: true },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDOzs7SUFHeEUseUJBQXlCLEdBQUc7SUFDaEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixFQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFJRDtJQU9zQyw0Q0FBWTtJQXVDaEQsMEJBQW9CLElBQVksRUFBRSxPQUFtQixFQUFVLGNBQThCO1FBQTdGLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBU2Y7UUFWbUIsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUErQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1QjdGLGtCQUFZLEdBQVksS0FBSyxDQUFDOztRQU05QixXQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsVUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUs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LElBQUksRUFBRTt5QkFHN0QsS0FBSzsrQkFFTCxLQUFLOzhCQUVMLEtBQUs7d0JBSUwsTUFBTTt1QkFFTixNQUFNO3lCQUVOLE1BQU07O0lBeWxCVCx1QkFBQztDQUFBLEFBcG5CRCxDQU9zQyxZQUFZLEdBNm1CakQ7U0E3bUJZLGdCQUFnQjs7Ozs7O0lBa0MzQixnQ0FBbUM7O0lBakNuQyxtQ0FDMkI7O0lBQzNCLGdDQUN3Qjs7SUFDeEIsbUNBQzBCOztJQUUxQixrQ0FDWTs7SUFDWix3Q0FDOEI7O0lBQzlCLHVDQUNvQjs7SUFHcEIsaUNBQzhDOztJQUM5QyxnQ0FDNkM7O0lBQzdDLGtDQUMrQzs7Ozs7SUFHL0MsNENBQThCOzs7OztJQUM5Qiw0Q0FBOEI7Ozs7O0lBQzlCLHFDQUEyQjs7Ozs7SUFDM0IsdUNBQTRCOzs7OztJQUM1QixpQ0FBbUI7Ozs7O0lBQ25CLHVDQUF5Qjs7Ozs7SUFDekIsMkNBQTZCOzs7OztJQUM3Qiw4Q0FBNEM7Ozs7O0lBQzVDLCtDQUF3Qzs7Ozs7SUFJeEMseUNBQTJDOzs7OztJQUMzQywwQ0FBNEM7Ozs7O0lBRWhDLGdDQUFvQjs7Ozs7SUFBdUIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUXVpY2tOb3RlUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3F1aWNrLW5vdGUtcmVzdWx0cy9RdWlja05vdGVSZXN1bHRzJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFFVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBRdWlja05vdGVFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXF1aWNrLW5vdGUnLFxuICBwcm92aWRlcnM6IFtRVUlDS19OT1RFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwicXVpY2stbm90ZS13cmFwcGVyXCIgI3dyYXBwZXI+PHRleHRhcmVhICNob3N0PjwvdGV4dGFyZWE+IDxzcGFuICNyZXN1bHRzPjwvc3Bhbj48L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tOb3RlRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pXG4gIHB1YmxpYyB3cmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdob3N0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgcHVibGljIGhvc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICByZXN1bHRzOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogYW55O1xuICBASW5wdXQoKVxuICBzdGFydHVwRm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICAvLyBFbWl0dGVyIGZvciBzZWxlY3RzXG4gIEBPdXRwdXQoKVxuICBmb2N1czogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gVGhlIGNoYXJhY3RlcnMgdGhhdCB0aGUgdXNlciBlbnRlcnMgaW4gb3JkZXIgdG8gc2VhcmNoIGZvciBhIHBlcnNvbi90aGluZyB0byB0YWdcbiAgcHJpdmF0ZSByZXN1bHRzQ29tcG9uZW50OiBhbnk7XG4gIHByaXZhdGUgcXVpY2tOb3RlUmVzdWx0czogYW55O1xuICBwcml2YXRlIGlzVGFnZ2luZzogYm9vbGVhbjtcbiAgcHJpdmF0ZSB0YWdnaW5nTW9kZTogc3RyaW5nO1xuICBwcml2YXRlIG1vZGVsOiBhbnk7XG4gIHByaXZhdGUgY2tlSW5zdGFuY2U6IGFueTtcbiAgcHJpdmF0ZSBkZWJvdW5jZVRpbWVvdXQ6IGFueTtcbiAgcHJpdmF0ZSBwbGFjZWhvbGRlclZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXJFbGVtZW50OiBhbnkgPSBudWxsO1xuXG4gIHByaXZhdGUgc3RhdGljIFRPT0xCQVJfSEVJR0hUID0gNDA7IC8vIGluIHBpeGVscyAtIGNvbmZpZ3VyZWQgYnkgc3R5bGVzaGVldFxuXG4gIHByaXZhdGUgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSwgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHtcbiAgICBzdXBlcihlbGVtZW50KTtcbiAgICAvLyBCaW5kIHRvIHRoZSBhY3RpdmUgY2hhbmdlIGV2ZW50IGZyb20gdGhlIE91dHNpZGVDbGlja1xuICAgIHRoaXMub25BY3RpdmVDaGFuZ2Uuc3Vic2NyaWJlKChhY3RpdmUpID0+IHtcbiAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGhhdmUgYSBwcm9wZXIgY29uZmlnXG4gICAgaWYgKCF0aGlzLmNvbmZpZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb25maWcgc2V0IGZvciBRdWlja05vdGUhJyk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgdHJpZ2dlcnNcbiAgICBpZiAoIXRoaXMuY29uZmlnLnRyaWdnZXJzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1aWNrTm90ZSBjb25maWcgbXVzdCBzdXBwbHkgdHJpZ2dlcnMhJyk7XG4gICAgfVxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHdlIGhhdmUgb3B0aW9uc1xuICAgIGlmICghdGhpcy5jb25maWcub3B0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWlja05vdGUgY29uZmlnIG11c3Qgc3VwcGx5IG9wdGlvbnMhJyk7XG4gICAgfVxuICAgIC8vIEFsbG93IGZvciBjYWxsZXJzIHRvIHVzZSBhIGN1c3RvbSByZXN1bHRzIHRlbXBsYXRlIGNsYXNzIGluIHRoZSBjb25maWdcbiAgICB0aGlzLnJlc3VsdHNDb21wb25lbnQgPSB0aGlzLmNvbmZpZy5yZXN1bHRzVGVtcGxhdGUgfHwgUXVpY2tOb3RlUmVzdWx0cztcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBUZWFyIGRvd24gdGhlIENLRWRpdG9yIGluc3RhbmNlXG4gICAgaWYgKHRoaXMuY2tlSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UuZm9jdXNNYW5hZ2VyLmJsdXIodHJ1ZSk7IC8vIFJlbW92ZSBmb2N1cyBmcm9tIGVkaXRvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2UucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmNrZUluc3RhbmNlLm5hbWVdLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2UgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbm5lY3QgdG8ga2V5L21vdXNlIGV2ZW50cyBmcm9tIENLRWRpdG9yIGFmdGVyIHRoZSBlZGl0b3IgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcbiAgICovXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgaWYgKCFDS0VESVRPUikge1xuICAgICAgY29uc29sZS5lcnJvcignTWFrZSBzdXJlIHRvIGluY2x1ZGUgQ0tFZGl0b3Igc291cmNlcyBpbiB5b3VyIGRlcGVuZGVuY2llcyEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZXBsYWNlIHRoZSB0ZXh0YXJlYSB3aXRoIGFuIGluc3RhbmNlIG9mIENLRWRpdG9yXG4gICAgdGhpcy5ja2VJbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZ2V0Q0tFZGl0b3JDb25maWcoKSk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgbm90ZSBpbiB0aGUgZWRpdG9yXG4gICAgdGhpcy53cml0ZVZhbHVlKHRoaXMubW9kZWwpO1xuXG4gICAgLy8gQ29ubmVjdCB0byB0aGUga2V5IGV2ZW50IGluIENLRWRpdG9yIGZvciBzaG93aW5nIHJlc3VsdHMgZHJvcGRvd25cbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdrZXknLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLm9uS2V5KGV2ZW50LmRhdGEuZG9tRXZlbnQuJCkpIHtcbiAgICAgICAgZXZlbnQuY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDb25uZWN0IHRvIHRoZSBjaGFuZ2UgZXZlbnQgaW4gQ0tFZGl0b3IgZm9yIGRlYm91bmNpbmcgdXNlciBtb2RpZmljYXRpb25zXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXG4gICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFJ1biB3aXRoaW4gdGhlIGNvbnRleHQgb2YgdGhpcyBhbmd1bGFyIGVsZW1lbnQgc2luY2Ugd2UgZG9uJ3QgbmVlZCB0byBjYW5jZWwgZXZlbnRcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XG4gICAgICB9LCAyNTApO1xuICAgIH0pO1xuXG4gICAgLy8gUHJvcGFnYXRlIGJsdXIgZXZlbnRzIGZyb20gQ0tFZGl0b3IgdG8gdGhlIEVsZW1lbnQncyBsaXN0ZW5lcnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdibHVyJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2hvd1BsYWNlaG9sZGVyKCk7XG4gICAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBQcm9wYWdhdGUgYmx1ciBldmVudHMgZnJvbSBDS0VkaXRvciB0byB0aGUgRWxlbWVudCdzIGxpc3RlbmVyc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuaGlkZVBsYWNlaG9sZGVyKCk7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gU2hvdyBwbGFjZWhvbGRlciBpZiB0aGUgbm90ZSBpcyBlbXB0eSwgYWZ0ZXIgdGhlIGVkaXRvciBpcyBpbnN0YW50aWF0ZWRcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdpbnN0YW5jZVJlYWR5JywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc2hvd1BsYWNlaG9sZGVyKCk7XG4gICAgICAvLyBTZXQgZWRpdG9yIHRvIHJlYWRPbmx5XG4gICAgICBpZiAodGhpcy5jb25maWcucmVhZE9ubHkpIHtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5zZXRSZWFkT25seSh0aGlzLmNvbmZpZy5yZWFkT25seSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBTZXQgdG91Y2hlZCBvbiBibHVyXG4gIHB1YmxpYyBvblRvdWNoZWQoZXZlbnQ/OiBhbnkpIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyBzZXR0aW5nIHRoZSBtb2RlbCBhbmQgdGhlIHZpZXcgZnJvbSB0aGUgb3V0c2lkZSBjYWxsZXIgb3IgdGhlIHVzZXIncyB0eXBpbmdcbiAgICpcbiAgICogQHBhcmFtIG1vZGVsIEEgbW9kZWwgdGhhdCBoYXMgYSBub3RlIChodG1sIGNvbnRlbnQpIGFuZCByZWZlcmVuY2VzIChhcnJheSBvZiBvYmplY3RzKVxuICAgKi9cbiAgcHVibGljIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIC8vIFNldCB2YWx1ZSBvZiB0aGUgbW9kZWxcbiAgICBpZiAobW9kZWwgJiYgKG1vZGVsLnJlZmVyZW5jZXMgfHwgbW9kZWwubm90ZSkpIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IG1vZGVsLm5vdGUgfHwgJycsXG4gICAgICAgIHJlZmVyZW5jZXM6IG1vZGVsLnJlZmVyZW5jZXMgfHwge30sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICBub3RlOiBtb2RlbCxcbiAgICAgICAgcmVmZXJlbmNlczoge30sXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIFNldCB0aGUgbm90ZSBodG1sIHZhbHVlIGluIHRoZSBlZGl0b3JcbiAgICBpZiAodGhpcy5ja2VJbnN0YW5jZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZS5zZXREYXRhKHRoaXMubW9kZWwubm90ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLyoqXG4gICAqIElmIGEgcmVuZGVyZXIgaXMgbm90IHByb3ZpZGVkLCB0aGUgUXVpY2tOb3RlIHdpbGwgZGVmYXVsdCB0byB1c2luZyB0aGlzIG9uZSwgYW4gYW5jaG9yIHRhZyB3aXRoIG5vIGhyZWZcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGRlZmF1bHRSZW5kZXJlcihzeW1ib2w6IHN0cmluZywgaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gYDxhPiR7c3ltYm9sfSR7aXRlbS5sYWJlbH08L2E+YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW5kZXJlciBmb3IgYSBnaXZlbiB0YWdnaW5nIG1vZGUgaWYgaXQgZXhpc3RzIGluIHRoZSBjb25maWcsIG90aGVyd2lzZSB0aGUgZGVmYXVsdC5cbiAgICovXG4gIHByaXZhdGUgZ2V0UmVuZGVyZXIodGFnZ2luZ01vZGU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnJlbmRlcmVyID8gdGhpcy5jb25maWcucmVuZGVyZXJbdGFnZ2luZ01vZGVdIDogUXVpY2tOb3RlRWxlbWVudC5kZWZhdWx0UmVuZGVyZXI7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGV2ZXJ5IHRpbWUgYSBrZXlzdHJva2UgaXMgbWFkZSBpbiB0aGUgZWRpdG9yLiBMaXN0ZW5zIGZvciBwYXJ0aWN1bGFyIGtleXMgKGUuZy4gVVAgYXJyb3csIEVTQywgZXRjLilcbiAgICogdG8gaGFuZGxlIGNlcnRhaW4gYmVoYXZpb3JzIG9mIHRoZSBwaWNrZXIuXG4gICAqXG4gICAqIFJ1bnMgd2l0aGluIHRoZSBjb250ZXh0IG9mIHRoZSBDS0VkaXRvciwgc28gYWN0aW9ucyB0aGF0IGFmZmVjdCB0aGUgdmlldyBoYXZlIHRvIGJlIHJ1biBiYWNrIGluc2lkZSBvZiB0aGVcbiAgICogQW5ndWxhciB6b25lIG9mIHRoaXMgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudCBUaGUga2V5IHByZXNzIGV2ZW50XG4gICAqIEByZXR1cm4gdHJ1ZSB0byBhbGxvdyB0aGUgZXZlbnQgdG8gb2NjdXIsIGZhbHNlIHRvIGNhbmNlbCB0aGUgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuIHtcbiAgICBpZiAoZXZlbnQua2V5KSB7XG4gICAgICBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICAgIC8vIEhpZGUgcmVzdWx0cyBvbiBlc2NhcGUga2V5XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FU0MpIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOYXZpZ2F0aW9uIGluc2lkZSB0aGUgcmVzdWx0c1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuVVApIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5wcmV2QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRE9XTikge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5FTlRFUikge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnNlbGVjdEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRyaWdnZXJzIGFuZCB0dXJuIG9uIHRhZ2dpbmcgbW9kZSBpZiB0aGUgdXNlciBqdXN0IHByZXNzZWQgYSB0cmlnZ2VyIGNoYXJhY3RlclxuICAgICAgICBsZXQgdHJpZ2dlcnMgPSB0aGlzLmNvbmZpZy50cmlnZ2VycyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmtleXModHJpZ2dlcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGxldCB0cmlnZ2VyID0gdHJpZ2dlcnNba2V5XSB8fCB7fTtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSB0cmlnZ2VyKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnRhZ2dpbmdNb2RlID0ga2V5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERlYm91bmNlZCBtZXRob2QgdGhhdCBpcyBydW4gaW4gdGhlIHByb3BlciBBbmd1bGFyIGNvbnRleHQgd2hlbiB0aGUgdXNlciBoYXMgbW9kaWZpZWQgdGhlIENLRWRpdG9yLlxuICAgKiBBZnRlciB0aGUgdmFsdWUgaGFzIGJlZW4gdXBkYXRlZCBpbiBDS0VkaXRvciwgdGhpcyB3aWxsIHByb3BhZ2F0ZSB0aGF0IGNoYW5nZSB0byB0aGUgbW9kZWwgYW5kIGxpc3RlbmVycy5cbiAgICovXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICAvLyBHZXQgdGhlIGh0bWwgdGV4dCBpbiBDS0VkaXRvclxuICAgIGxldCB2YWx1ZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0RGF0YSgpO1xuXG4gICAgLy8gUmVtb3ZlIGVtcHR5ICdaRVJPIFdJRFRIIFNQQUNFJyBjaGFyYWN0ZXJzIHRoYXQgY2FuIGdldCBhZGRlZCBlcnJvbmVvdXNseSBieSB0aGUgZWRpdG9yXG4gICAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChTdHJpbmcuZnJvbUNoYXJDb2RlKDgyMDMpLCAnZycpO1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShyZWdleCwgJycpO1xuXG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgYW55IHJlZmVyZW5jZXMgaW4gdGhlIG1vZGVsIGFyZSBzdGlsbCB2YWxpZFxuICAgIHRoaXMudmFsaWRhdGVSZWZlcmVuY2VzKCk7XG5cbiAgICAvLyBQb3NzaWJseSBzaG93IHJlc3VsdHMgaWYgdGhlIHVzZXIgaGFzIGVudGVyZWQgYSBzZWFyY2ggdGVybVxuICAgIHRoaXMuc2hvd1Jlc3VsdHMoKTtcblxuICAgIC8vIFByb3BhZ2F0ZSBjaGFuZ2UgdG8gbmdNb2RlbCBmb3IgZm9ybSB2YWxpZGF0aW9uLCBhbmQgc2VuZCBudWxsIGlmIHRoZSBub3RlIGlzIGVtcHR5XG4gICAgbGV0IG5ld01vZGVsID0gbnVsbDtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld01vZGVsID0ge1xuICAgICAgICBub3RlOiB2YWx1ZSxcbiAgICAgICAgcmVmZXJlbmNlczogdGhpcy5tb2RlbC5yZWZlcmVuY2VzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJbmZvcm0gbGlzdGVuZXJzIHRvIHRoZSBuZ01vZGVsIGNoYW5nZSBldmVudCB0aGF0IHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuICAgIHRoaXMub25Nb2RlbENoYW5nZShuZXdNb2RlbCk7XG5cbiAgICAvLyBJbmZvcm0gbGlzdGVuZXJzIG9mIHRoZSBgQE91dHB1dCgpIGNoYW5nZWAgZXZlbnQgdGhhdCB0aGUgbW9kZWwgaGFzIGJlZW4gdXBkYXRlZFxuICAgIHRoaXMuY2hhbmdlLmVtaXQobmV3TW9kZWwpO1xuXG4gICAgLy8gSW5mb3JtIGxpc3RlbmVycyB0byB0aGUgbmdNb2RlbCB0b3VjaGVkIGV2ZW50IHRoYXQgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSByZXN1bHRzIChjYWxsZWQgcG9wdXApIGFuZCBhZGRzIGFsbCB0aGUgYmluZGluZ3MgdG8gdGhhdCBpbnN0YW5jZS5cbiAgICovXG4gIHByaXZhdGUgc2hvd1Jlc3VsdHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNUYWdnaW5nKSB7XG4gICAgICBsZXQgc2VhcmNoVGVybSA9IHRoaXMuZ2V0U2VhcmNoVGVybSgpO1xuICAgICAgaWYgKHNlYXJjaFRlcm0ubGVuZ3RoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBNYXRjaGVzXG4gICAgICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgICAvLyBVcGRhdGUgZXhpc3RpbmcgbGlzdFxuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS50ZXJtID0ge1xuICAgICAgICAgICAgc2VhcmNoVGVybTogc2VhcmNoVGVybSxcbiAgICAgICAgICAgIHRhZ2dpbmdNb2RlOiB0aGlzLnRhZ2dpbmdNb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gQ3JlYXRlIHRoZSByZXN1bHRzIERPTSBlbGVtZW50XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodGhpcy5yZXN1bHRzQ29tcG9uZW50LCB0aGlzLnJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UudGVybSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0YWdnaW5nTW9kZTogdGhpcy50YWdnaW5nTW9kZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucG9zaXRpb25SZXN1bHRzRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gVGVsbCB0aGUgT3V0c2lkZUNsaWNrIGJhc2UgY2xhc3MgdG8gc3RhcnQgbGlzdGVuaW5nIGZvciBhbiBvdXRzaWRlIGNsaWNrc1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUobnVsbCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIHBpY2tlciByZXN1bHRzIGZyb20gdGhlIERPTS5cbiAgICovXG4gIHByaXZhdGUgaGlkZVJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5pc1RhZ2dpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgc2VsZWN0aW9uIGZyb20gdGhlIFF1aWNrTm90ZVJlc3VsdHMgQ29tcG9uZW50LiBDYWxsZWQgYnkgdGhlIFF1aWNrTm90ZVJlc3VsdHMgY29tcG9uZW50IG9uIGl0J3NcbiAgICogcGFyZW50ICh0aGlzIGVsZW1lbnQpLlxuICAgKlxuICAgKiBAcGFyYW0gdGFnZ2luZ01vZGUgLSB0eXBlIG9mIHRhZ3Mgd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAqIEBwYXJhbSBzZWxlY3RlZCAtIHNlbGVjdGVkIG9iamVjdCBmcm9tIHRoZSBwaWNrZXIgdGhhdCBoYXMgYSBsYWJlbCBhbmQgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgb25TZWxlY3RlZCh0YWdnaW5nTW9kZTogc3RyaW5nLCBzZWxlY3RlZDogYW55KTogdm9pZCB7XG4gICAgLy8gVHVybiBvZmYgdGFnZ2luZ1xuICAgIHRoaXMuaXNUYWdnaW5nID0gZmFsc2U7XG5cbiAgICAvLyBSZXBsYWNlIHNlYXJjaFRlcm0gd2l0aCBsaW5rXG4gICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RhZ2dpbmdNb2RlXTtcbiAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKHRhZ2dpbmdNb2RlKTtcbiAgICBsZXQgcmVuZGVyZWRUZXh0ID0gcmVuZGVyZXIoc3ltYm9sLCBzZWxlY3RlZCk7XG5cbiAgICB0aGlzLnJlcGxhY2VXb3JkQXRDdXJzb3IocmVuZGVyZWRUZXh0KTtcblxuICAgIC8vIEFkZCB0aGUgbmV3IHJlZmVyZW5jZSwgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzIHx8IHt9O1xuICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdIHx8IFtdO1xuICAgIGxldCBtYXRjaGluZ0l0ZW1zID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5maWx0ZXIoKGl0ZW0pID0+IEpTT04uc3RyaW5naWZ5KGl0ZW0pID09PSBKU09OLnN0cmluZ2lmeShzZWxlY3RlZCkpO1xuICAgIGlmIChtYXRjaGluZ0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5wdXNoKHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHF1aWNrIG5vdGUgd2l0aCB0aGUgY2hhbmdlcyBkdWUgdG8gdGhlIHVzZXIncyBzZWxlY3Rpb24gb2YgYW4gaXRlbSBpbiB0aGUgZHJvcGRvd25cbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdGhhdCBnZXRzIHRoZSBjdXJyZW50IHdvcmQgdGhhdCB0aGUgY3Vyc29yIGlzIG9uLCBtaW51cyB0aGUgdGFnLlxuICAgKiBBbHNvLCB0cmltcyBhbnkgd2hpdGVzcGFjZSBiZWZvcmUvYWZ0ZXIgdGhlIHRlcm0gdG8gYWlkIGluIHNlYXJjaGluZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0U2VhcmNoVGVybSgpOiBzdHJpbmcge1xuICAgIGxldCB3b3JkID0gdGhpcy5nZXRXb3JkQXRDdXJzb3IoKS50cmltKCk7XG4gICAgaWYgKHRoaXMuaXNUYWdnaW5nKSB7XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGhpcy50YWdnaW5nTW9kZV07XG4gICAgICBpZiAoIXdvcmQuaW5jbHVkZXMoc3ltYm9sKSkge1xuICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHdvcmQgPSB3b3JkLnNsaWNlKHdvcmQuaW5kZXhPZihzeW1ib2wpICsgc3ltYm9sLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiB3b3JkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgd29yZCB0aGF0IHRoZSBjdXJzb3IgaXMgb24gQ0tFZGl0b3IuIEN1cnJlbnQgd29yZCBzdGFydHMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZSBvciBhXG4gICAqIHRhZyBjaGFyYWN0ZXIgaWYgd2UgYXJlIGluIHRhZ2dpbmcgbW9kZS4gQ3VycmVudCB3b3JkIGVuZHMgYXQgdGhlIGVuZCBvZiB0aGUgbGluZSBvciBhbiBlbXB0eSBzcGFjZS5cbiAgICpcbiAgICogQHJldHVybnMgcGxhaW4gdGV4dCBzdHJpbmcgKHJlbW92ZXMgYWxsIGh0bWwgZm9ybWF0dGluZylcbiAgICovXG4gIHByaXZhdGUgZ2V0V29yZEF0Q3Vyc29yKCk6IHN0cmluZyB7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBsZXQgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcblxuICAgIGlmIChzdGFydC50eXBlID09PSBDS0VESVRPUi5OT0RFX1RFWFQgJiYgcmFuZ2Uuc3RhcnRPZmZzZXQpIHtcbiAgICAgIGxldCB0ZXh0ID0gc3RhcnQuZ2V0VGV4dCgpO1xuICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RoaXMudGFnZ2luZ01vZGVdO1xuICAgICAgbGV0IHdvcmRTdGFydCA9IHRleHQubGFzdEluZGV4T2Yoc3ltYm9sLCByYW5nZS5zdGFydE9mZnNldCAtIDEpO1xuXG4gICAgICBpZiAod29yZFN0YXJ0ID4gMCkge1xuICAgICAgICBsZXQgYmVmb3JlU3ltYm9sOiBzdHJpbmcgPSB0ZXh0LmNoYXJBdCh3b3JkU3RhcnQgLSAxKTtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0cmlnZ2VyIHRoZSBsb29rdXAgY2FsbCB1bmxlc3MgdGhlIHN5bWJvbCB3YXMgcHJlY2VkZWQgYnkgd2hpdGVzcGFjZVxuICAgICAgICBpZiAoYmVmb3JlU3ltYm9sICE9PSAnXFx1MjAwQicgJiYgL1xcUy8udGVzdChiZWZvcmVTeW1ib2wpKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0Lmhhc1ByZXZpb3VzKCkgJiYgL1xcUyQvLnRlc3Qoc3RhcnQuZ2V0UHJldmlvdXMoKS5nZXRUZXh0KCkpKSB7XG4gICAgICAgIC8vIFdoZW4gd29yZFN0YXJ0IGlzIDw9IDAsIHdlIG5lZWQgdG8gY2hlY2sgdGhlIHByZXZpb3VzIG5vZGUncyB0ZXh0IHRvIHNlZSBpZiBpdCBlbmRlZCB3aXRoIHdoaXRlc3BhY2Ugb3Igbm90XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgbGV0IHdvcmRFbmQgPSB0ZXh0LmluZGV4T2YoJyAnLCByYW5nZS5zdGFydE9mZnNldCArIDEpO1xuICAgICAgaWYgKHdvcmRTdGFydCA9PT0gLTEpIHtcbiAgICAgICAgd29yZFN0YXJ0ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmICh3b3JkRW5kID09PSAtMSkge1xuICAgICAgICB3b3JkRW5kID0gdGV4dC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyh3b3JkU3RhcnQsIHdvcmRFbmQpO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdGlvbiBzdGFydHMgYXQgdGhlIDAgaW5kZXggb2YgdGhlIHRleHQgbm9kZSBvciB0aGVyZSdzIG5vIHByZXZpb3VzIHRleHQgbm9kZSBpbiBjb250ZW50c1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgd29yZCB0aGF0IHRoZSB1c2VyIGlzIG9uIHdpdGggdGhlIGdpdmVuIGh0bWwuXG4gICAqXG4gICAqIENLRWRpdG9yIGdpdmVzIHVzIGFjY2VzcyB0byB0aGUgY3VycmVudCBsaW5lIG9mIGh0bWwgaW4gdGhlIGVkaXRvciwgc28gd2UgcmVwbGFjZSB0aGUgY29udGVudCBvZlxuICAgKiB0aGUgbGluZSwgcmVwbGFjaW5nIG9ubHkgdGhlIGN1cnJlbnQgd29yZC5cbiAgICovXG4gIHByaXZhdGUgcmVwbGFjZVdvcmRBdEN1cnNvcihuZXdXb3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgb3JpZ2luYWxXb3JkID0gdGhpcy5nZXRXb3JkQXRDdXJzb3IoKS50cmltKCk7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBsZXQgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IHN0YXJ0LmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHN0YXJ0LnR5cGUgPT09IENLRURJVE9SLk5PREVfVEVYVCAmJiBwYXJlbnROb2RlKSB7XG4gICAgICBsZXQgbGluZSA9IHBhcmVudE5vZGUuZ2V0SHRtbCgpO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5sYXN0SW5kZXhPZihvcmlnaW5hbFdvcmQpO1xuXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAvLyBBZGQgYSBzcGFjZSBhZnRlciB0aGUgcmVwbGFjZWQgd29yZCBzbyB0aGF0IG11bHRpcGxlIHJlZmVyZW5jZXMgY2FuIGJlIGFkZGVkIGJhY2sgdG8gYmFja1xuICAgICAgICBsZXQgbmV3TGluZSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KSArIG5ld1dvcmQgKyAnICcgKyBsaW5lLnN1YnN0cmluZyhpbmRleCArIG9yaWdpbmFsV29yZC5sZW5ndGgpO1xuICAgICAgICBwYXJlbnROb2RlLnNldEh0bWwobmV3TGluZSk7XG5cbiAgICAgICAgLy8gUGxhY2Ugc2VsZWN0aW9uIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgcmFuZ2UubW92ZVRvUG9zaXRpb24ocGFyZW50Tm9kZSwgQ0tFRElUT1IuUE9TSVRJT05fQkVGT1JFX0VORCk7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuc2VsZWN0UmFuZ2VzKFtyYW5nZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgcmVmZXJlbmNlcywgbWludXMgYW55IGZyb20gdGhlIG1vZGVsIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgZWRpdG9yLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgbGV0IGh0bWwgPSB0aGlzLmNrZUluc3RhbmNlLmRvY3VtZW50LmdldEJvZHkoKS5nZXRIdG1sKCk7XG5cbiAgICAvLyBDS0VkaXRvciBzdG9wcGVkIHN1cHBvcnRpbmcgdGhlIGNvbmZpZy5mb3JjZVNpbXBsZUFtcGVyc2FuZCBzZXR0aW5nLCBzbyB3ZSBoYXZlIHRvIGNvbnZlcnQgJyZhbXA7JyB0byAnJidcbiAgICAvLyB3aGVuIHdlIHB1bGwgaHRtbCBmcm9tIHRoZSBlZGl0b3IgLSBzZWU6IGh0dHBzOi8vZGV2LmNrZWRpdG9yLmNvbS90aWNrZXQvMTM3MjNcbiAgICBsZXQgYW1wUmVnZXggPSBuZXcgUmVnRXhwKCcmYW1wOycsICdnJyk7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZShhbXBSZWdleCwgJyYnKTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMubW9kZWwucmVmZXJlbmNlcykuZm9yRWFjaCgodGFnZ2luZ01vZGUpID0+IHtcbiAgICAgIGxldCBhcnJheSA9IHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gfHwgW107XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGFnZ2luZ01vZGVdO1xuICAgICAgbGV0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcih0YWdnaW5nTW9kZSk7XG5cbiAgICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHJlbmRlcmVkVGV4dCA9IHJlbmRlcmVyKHN5bWJvbCwgaXRlbSk7XG4gICAgICAgIHJldHVybiBodG1sLmluY2x1ZGVzKHJlbmRlcmVkVGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgbm8gcmVmZXJlbmNlcywgdGhlbiBkZWxldGUgdGhlIGtleVxuICAgICAgaWYgKHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIENLRWRpdG9yIGZvciBRdWlja05vdGUgZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBDS0VkaXRvciBkeW5hbWljYWxseSB0byB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVyIHVwb24gaW5pdGlhbGl6YXRpb24uXG4gICAqIFJlbW92ZXMgdGhlIHRvb2xiYXIgb24gdGhlIGJvdHRvbSBhbmQgY29uZmlndXJlcyBhIHNsaW1tZWQgZG93biB2ZXJzaW9uIG9mIHRoZSB0b29sYmFyLlxuICAgKiBSZW1vdmVzIHBsdWdpbnMgYW5kIHR1cm5zIG9mZiBzZXR0aW5nIHRvIGFsbG93IGJyb3dzZXIgYmFzZWQgc3BlbGwgY2hlY2tpbmcuXG4gICAqL1xuICBwcml2YXRlIGdldENLRWRpdG9yQ29uZmlnKCk6IGFueSB7XG4gICAgLy8gVXNlIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZXIgZWxlbWVudCB0byBzZXQgdGhlIGluaXRpYWwgaGVpZ2h0IG9mIHRoZSBlZGl0b3IsIHRoZW5cbiAgICAvLyBzZXQgaXQgdG8gMTAwJSB0byBhbGxvdyB0aGUgZWRpdG9yIHRvIHJlc2l6ZSB1c2luZyB0aGUgZ3JpcHB5LlxuICAgIGxldCBlZGl0b3JIZWlnaHQgPSB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUO1xuICAgIHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCAnMTAwJScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGVyTW9kZTogQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgICBzaGlmdEVudGVyTW9kZTogQ0tFRElUT1IuRU5URVJfUCxcbiAgICAgIGRpc2FibGVOYXRpdmVTcGVsbENoZWNrZXI6IGZhbHNlLFxuICAgICAgaGVpZ2h0OiBlZGl0b3JIZWlnaHQsXG4gICAgICBzdGFydHVwRm9jdXM6IHRoaXMuc3RhcnR1cEZvY3VzLFxuICAgICAgcmVtb3ZlUGx1Z2luczogJ2xpc3RzdHlsZSx0YWJsZXRvb2xzLGNvbnRleHRtZW51JywgLy8gYWxsb3dzIGJyb3dzZXIgYmFzZWQgc3BlbGwgY2hlY2tpbmdcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdTdHlsZXMnLFxuICAgICAgICAgICAgJ0ZvbnRTaXplJyxcbiAgICAgICAgICAgICdCb2xkJyxcbiAgICAgICAgICAgICdJdGFsaWMnLFxuICAgICAgICAgICAgJ1VuZGVybGluZScsXG4gICAgICAgICAgICAnVGV4dENvbG9yJyxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdMaW5rJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2NyZWVuIHBvc2l0aW9uIG9mIHRoZSBjdXJzb3IgaW4gQ0tFZGl0b3IsIGFjY291bnRpbmcgZm9yIGFueSBzY3JvbGxpbmcgaW4gdGhlIGVkaXRvci5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q3Vyc29yUG9zaXRpb24oKTogYW55IHtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLmdldFJhbmdlcygpWzBdO1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuJC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBlZGl0b3JFbGVtZW50ID0gdGhpcy5ja2VJbnN0YW5jZS5lZGl0YWJsZSgpLiQ7XG5cbiAgICAvLyBTaW5jZSB0aGUgZWRpdG9yIGlzIGEgdGV4dCBub2RlIGluIHRoZSBET00gdGhhdCBkb2VzIG5vdCBrbm93IGFib3V0IGl0J3MgcG9zaXRpb24sIGEgdGVtcG9yYXJ5IGVsZW1lbnQgaGFzIHRvXG4gICAgLy8gYmUgaW5zZXJ0ZWQgaW4gb3JkZXIgdG8gbG9jYXRlIHRoZSBjdXJzb3IgcG9zaXRpb24uXG4gICAgbGV0IGN1cnNvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJ251bGwnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIGN1cnNvckVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuXG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjdXJzb3JFbGVtZW50KTtcbiAgICBsZXQgY3Vyc29yUG9zaXRpb24gPSB7XG4gICAgICB0b3A6IGN1cnNvckVsZW1lbnQub2Zmc2V0VG9wIC0gZWRpdG9yRWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiBjdXJzb3JFbGVtZW50Lm9mZnNldExlZnQgLSBlZGl0b3JFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgfTtcbiAgICBjdXJzb3JFbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGN1cnNvclBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgcmVzdWx0cyBkcm9wZG93biBiYXNlZCBvbiB0aGUgbG9jYXRpb24gb2YgdGhlIGN1cnNvciBpbiB0aGUgdGV4dCBmaWVsZFxuICAgKi9cbiAgcHJpdmF0ZSBwb3NpdGlvblJlc3VsdHNEcm9wZG93bigpOiB2b2lkIHtcbiAgICBjb25zdCBNSU5fTUFSR0lOX1RPUDogbnVtYmVyID0gUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVCAqIDI7XG4gICAgY29uc3QgTUFYX01BUkdJTl9UT1A6IG51bWJlciA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpICsgUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcblxuICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcbiAgICBsZXQgbWFyZ2luVG9wOiBudW1iZXIgPSBjdXJzb3JQb3NpdGlvbi50b3AgKyBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUO1xuXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgbWFyZ2luIGlzIHdpdGhpbiB0aGUgdmlzaWJsZSBib3VuZHNcbiAgICBtYXJnaW5Ub3AgPSBNYXRoLm1heChtYXJnaW5Ub3AsIE1JTl9NQVJHSU5fVE9QKTtcbiAgICBtYXJnaW5Ub3AgPSBNYXRoLm1pbihtYXJnaW5Ub3AsIE1BWF9NQVJHSU5fVE9QKTtcblxuICAgIC8vIFNldCB0aGUgbWFyZ2luLXRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCdtYXJnaW4tdG9wJywgbWFyZ2luVG9wICsgJ3B4Jyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ2h0IGluIHBpeGVscyBvZiB0aGUgY29udGVudCBhcmVhIC0gdGhlIHRleHQgdGhhdCB0aGUgdXNlciBoYXMgZW50ZXJlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q29udGVudEhlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBjb250ZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50ICYmXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudC4kICYmXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudC4kLnN0eWxlXG4gICAgKSB7XG4gICAgICBsZXQgY3NzVGV4dDogc3RyaW5nID0gdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJC5zdHlsZS5jc3NUZXh0O1xuICAgICAgaWYgKGNzc1RleHQuaW5kZXhPZignaGVpZ2h0OiAnKSAhPT0gLTEpIHtcbiAgICAgICAgbGV0IGhlaWdodDogc3RyaW5nID0gY3NzVGV4dC5zcGxpdCgnaGVpZ2h0OiAnKVsxXTtcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0LnNwbGl0KCdweCcpWzBdO1xuICAgICAgICBjb250ZW50SGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnRIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgcGxhY2Vob2xkZXIgdGV4dCBpZiB0aGUgZWRpdG9yIGlzIGVtcHR5XG4gICAqL1xuICBwcml2YXRlIHNob3dQbGFjZWhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2tlSW5zdGFuY2UuZ2V0RGF0YSgpICYmICF0aGlzLnN0YXJ0dXBGb2N1cykge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZVxuICAgICAgICAuZWRpdGFibGUoKVxuICAgICAgICAuZ2V0UGFyZW50KClcbiAgICAgICAgLiQuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZWhvbGRlckVsZW1lbnQpO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlclZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBwbGFjZWhvbGRlciB0ZXh0IGJ5IHJlbW92aW5nIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBoaWRlUGxhY2Vob2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlXG4gICAgICAgIC5lZGl0YWJsZSgpXG4gICAgICAgIC5nZXRQYXJlbnQoKVxuICAgICAgICAuJC5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyRWxlbWVudCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3IgY3JlYXRlIHRoZSBzaW5nbGUgcGxhY2Vob2xkZXIgb2JqZWN0IHRoYXQgaXMgY29uc3RydWN0ZWQgb25seSB3aGVuIG5lZWRlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHBsYWNlaG9sZGVyRWxlbWVudCgpOiBhbnkge1xuICAgIGlmICghdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudC5jbGFzc05hbWUgPSAncGxhY2Vob2xkZXInO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAnbWFyZ2luOiAyMHB4OyBjb2xvcjogI0FBQUFBQTsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDIwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwJztcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==