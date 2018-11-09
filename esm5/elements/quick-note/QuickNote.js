/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
    useExisting: forwardRef(function () { return QuickNoteElement; }),
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
     * @param {?} symbol
     * @param {?} item
     * @return {?}
     */
    QuickNoteElement.defaultRenderer = /**
     * If a renderer is not provided, the QuickNote will default to using this one, an anchor tag with no href
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
     * @param {?} taggingMode
     * @return {?}
     */
    QuickNoteElement.prototype.getRenderer = /**
     * Returns the renderer for a given tagging mode if it exists in the config, otherwise the default.
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
     * @param {?} event The key press event
     * @return {?} true to allow the event to occur, false to cancel the event
     */
    function (event) {
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
                /** @type {?} */
                var triggers_1 = this.config.triggers || {};
                Object.keys(triggers_1).forEach(function (key) {
                    /** @type {?} */
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
    /**
     * Debounced method that is run in the proper Angular context when the user has modified the CKEditor.
     * After the value has been updated in CKEditor, this will propagate that change to the model and listeners.
     * @return {?}
     */
    QuickNoteElement.prototype.onValueChange = /**
     * Debounced method that is run in the proper Angular context when the user has modified the CKEditor.
     * After the value has been updated in CKEditor, this will propagate that change to the model and listeners.
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
     * @return {?}
     */
    QuickNoteElement.prototype.showResults = /**
     * Creates an instance of the results (called popup) and adds all the bindings to that instance.
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
                    this.quickNoteResults = this.componentUtils.appendNextToLocation(this.resultsComponent, this.results);
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
     * @return {?}
     */
    QuickNoteElement.prototype.hideResults = /**
     * Deletes the picker results from the DOM.
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
     * @param {?} taggingMode - type of tags we are looking for
     * @param {?} selected - selected object from the picker that has a label and value
     * @return {?}
     */
    QuickNoteElement.prototype.onSelected = /**
     * Handles the selection from the QuickNoteResults Component. Called by the QuickNoteResults component on it's
     * parent (this element).
     *
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
    /**
     * Convenience method that gets the current word that the cursor is on, minus the tag.
     * Also, trims any whitespace before/after the term to aid in searching.
     * @return {?}
     */
    QuickNoteElement.prototype.getSearchTerm = /**
     * Convenience method that gets the current word that the cursor is on, minus the tag.
     * Also, trims any whitespace before/after the term to aid in searching.
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
     * @return {?} plain text string (removes all html formatting)
     */
    QuickNoteElement.prototype.getWordAtCursor = /**
     * Gets the current word that the cursor is on CKEditor. Current word starts at the beginning of the line or a
     * tag character if we are in tagging mode. Current word ends at the end of the line or an empty space.
     *
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
     * @param {?} newWord
     * @return {?}
     */
    QuickNoteElement.prototype.replaceWordAtCursor = /**
     * Replaces the word that the user is on with the given html.
     *
     * CKEditor gives us access to the current line of html in the editor, so we replace the content of
     * the line, replacing only the current word.
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
     * @return {?}
     */
    QuickNoteElement.prototype.validateReferences = /**
     * Returns current references, minus any from the model that have been removed from the editor.
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
        Object.keys(this.model.references).forEach(function (taggingMode) {
            /** @type {?} */
            var array = _this.model.references[taggingMode] || [];
            /** @type {?} */
            var symbol = _this.config.triggers[taggingMode];
            /** @type {?} */
            var renderer = _this.getRenderer(taggingMode);
            _this.model.references[taggingMode] = array.filter(function (item) {
                /** @type {?} */
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
    /**
     * Configures the CKEditor for QuickNote functionality.
     *
     * Sets the height of the CKEditor dynamically to the height of the wrapper upon initialization.
     * Removes the toolbar on the bottom and configures a slimmed down version of the toolbar.
     * Removes plugins and turns off setting to allow browser based spell checking.
     * @return {?}
     */
    QuickNoteElement.prototype.getCKEditorConfig = /**
     * Configures the CKEditor for QuickNote functionality.
     *
     * Sets the height of the CKEditor dynamically to the height of the wrapper upon initialization.
     * Removes the toolbar on the bottom and configures a slimmed down version of the toolbar.
     * Removes plugins and turns off setting to allow browser based spell checking.
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
     * @return {?}
     */
    QuickNoteElement.prototype.getCursorPosition = /**
     * Returns the current screen position of the cursor in CKEditor, accounting for any scrolling in the editor.
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
     * @return {?}
     */
    QuickNoteElement.prototype.positionResultsDropdown = /**
     * Positions the results dropdown based on the location of the cursor in the text field
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
     * @return {?}
     */
    QuickNoteElement.prototype.getContentHeight = /**
     * Returns the height in pixels of the content area - the text that the user has entered.
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
     * @return {?}
     */
    QuickNoteElement.prototype.showPlaceholder = /**
     * Show the placeholder text if the editor is empty
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
     * @return {?}
     */
    QuickNoteElement.prototype.hidePlaceholder = /**
     * Hide the placeholder text by removing the placeholder element from the DOM
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
    /** @type {?} */
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
    /** @type {?} */
    QuickNoteElement.prototype.resultsComponent;
    /** @type {?} */
    QuickNoteElement.prototype.quickNoteResults;
    /** @type {?} */
    QuickNoteElement.prototype.isTagging;
    /** @type {?} */
    QuickNoteElement.prototype.taggingMode;
    /** @type {?} */
    QuickNoteElement.prototype.model;
    /** @type {?} */
    QuickNoteElement.prototype.ckeInstance;
    /** @type {?} */
    QuickNoteElement.prototype.debounceTimeout;
    /** @type {?} */
    QuickNoteElement.prototype.placeholderVisible;
    /** @type {?} */
    QuickNoteElement.prototype._placeholderElement;
    /** @type {?} */
    QuickNoteElement.prototype.onModelChange;
    /** @type {?} */
    QuickNoteElement.prototype.onModelTouched;
    /** @type {?} */
    QuickNoteElement.prototype.zone;
    /** @type {?} */
    QuickNoteElement.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUNULGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7OztJQUd4RSx5QkFBeUIsR0FBRztJQUNoQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFJRDtJQVVzQyw0Q0FBWTtJQXVDaEQsMEJBQW9CLElBQVksRUFBRSxPQUFtQixFQUFVLGNBQThCO1FBQTdGLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBU2Y7UUFWbUIsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUErQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1QjdGLGtCQUFZLEdBQVksS0FBSyxDQUFDOztRQU05QixXQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsVUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FB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M0IsZ0NBQ3dCOztJQUN4QixtQ0FDMEI7O0lBRTFCLGtDQUNZOztJQUNaLHdDQUM4Qjs7SUFDOUIsdUNBQ29COztJQUdwQixpQ0FDOEM7O0lBQzlDLGdDQUM2Qzs7SUFDN0Msa0NBQytDOztJQUcvQyw0Q0FBOEI7O0lBQzlCLDRDQUE4Qjs7SUFDOUIscUNBQTJCOztJQUMzQix1Q0FBNEI7O0lBQzVCLGlDQUFtQjs7SUFDbkIsdUNBQXlCOztJQUN6QiwyQ0FBNkI7O0lBQzdCLDhDQUE0Qzs7SUFDNUMsK0NBQXdDOztJQUl4Qyx5Q0FBMkM7O0lBQzNDLDBDQUE0Qzs7SUFFaEMsZ0NBQW9COztJQUF1QiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4vLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBRdWlja05vdGVSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcXVpY2stbm90ZS1yZXN1bHRzL1F1aWNrTm90ZVJlc3VsdHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUVVJQ0tfTk9URV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFF1aWNrTm90ZUVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcXVpY2stbm90ZScsXG4gIHByb3ZpZGVyczogW1FVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVpY2stbm90ZS13cmFwcGVyXCIgI3dyYXBwZXI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgI2hvc3Q+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxzcGFuICNyZXN1bHRzPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tOb3RlRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicpXG4gIHB1YmxpYyB3cmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdob3N0JylcbiAgcHVibGljIGhvc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgcmVzdWx0czogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IGFueTtcbiAgQElucHV0KClcbiAgc3RhcnR1cEZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLy8gRW1pdHRlciBmb3Igc2VsZWN0c1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIFRoZSBjaGFyYWN0ZXJzIHRoYXQgdGhlIHVzZXIgZW50ZXJzIGluIG9yZGVyIHRvIHNlYXJjaCBmb3IgYSBwZXJzb24vdGhpbmcgdG8gdGFnXG4gIHByaXZhdGUgcmVzdWx0c0NvbXBvbmVudDogYW55O1xuICBwcml2YXRlIHF1aWNrTm90ZVJlc3VsdHM6IGFueTtcbiAgcHJpdmF0ZSBpc1RhZ2dpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgdGFnZ2luZ01vZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBtb2RlbDogYW55O1xuICBwcml2YXRlIGNrZUluc3RhbmNlOiBhbnk7XG4gIHByaXZhdGUgZGVib3VuY2VUaW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgcGxhY2Vob2xkZXJWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyRWxlbWVudDogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIHN0YXRpYyBUT09MQkFSX0hFSUdIVCA9IDQwOyAvLyBpbiBwaXhlbHMgLSBjb25maWd1cmVkIGJ5IHN0eWxlc2hlZXRcblxuICBwcml2YXRlIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgLy8gQmluZCB0byB0aGUgYWN0aXZlIGNoYW5nZSBldmVudCBmcm9tIHRoZSBPdXRzaWRlQ2xpY2tcbiAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoYWN0aXZlKSA9PiB7XG4gICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcHJvcGVyIGNvbmZpZ1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29uZmlnIHNldCBmb3IgUXVpY2tOb3RlIScpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIHRyaWdnZXJzXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50cmlnZ2Vycykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWlja05vdGUgY29uZmlnIG11c3Qgc3VwcGx5IHRyaWdnZXJzIScpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIG9wdGlvbnNcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVpY2tOb3RlIGNvbmZpZyBtdXN0IHN1cHBseSBvcHRpb25zIScpO1xuICAgIH1cbiAgICAvLyBBbGxvdyBmb3IgY2FsbGVycyB0byB1c2UgYSBjdXN0b20gcmVzdWx0cyB0ZW1wbGF0ZSBjbGFzcyBpbiB0aGUgY29uZmlnXG4gICAgdGhpcy5yZXN1bHRzQ29tcG9uZW50ID0gdGhpcy5jb25maWcucmVzdWx0c1RlbXBsYXRlIHx8IFF1aWNrTm90ZVJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gVGVhciBkb3duIHRoZSBDS0VkaXRvciBpbnN0YW5jZVxuICAgIGlmICh0aGlzLmNrZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlLmZvY3VzTWFuYWdlci5ibHVyKHRydWUpOyAvLyBSZW1vdmUgZm9jdXMgZnJvbSBlZGl0b3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5ja2VJbnN0YW5jZS5uYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGtleS9tb3VzZSBldmVudHMgZnJvbSBDS0VkaXRvciBhZnRlciB0aGUgZWRpdG9yIGhhcyBiZWVuIGluaXRpYWxpemVkXG4gICAqL1xuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghQ0tFRElUT1IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01ha2Ugc3VyZSB0byBpbmNsdWRlIENLRWRpdG9yIHNvdXJjZXMgaW4geW91ciBkZXBlbmRlbmNpZXMhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSB0aGUgdGV4dGFyZWEgd2l0aCBhbiBpbnN0YW5jZSBvZiBDS0VkaXRvclxuICAgIHRoaXMuY2tlSW5zdGFuY2UgPSBDS0VESVRPUi5yZXBsYWNlKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCB0aGlzLmdldENLRWRpdG9yQ29uZmlnKCkpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgdmFsdWUgb2YgdGhlIG5vdGUgaW4gdGhlIGVkaXRvclxuICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLm1vZGVsKTtcblxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGtleSBldmVudCBpbiBDS0VkaXRvciBmb3Igc2hvd2luZyByZXN1bHRzIGRyb3Bkb3duXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbigna2V5JywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICghdGhpcy5vbktleShldmVudC5kYXRhLmRvbUV2ZW50LiQpKSB7XG4gICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgY2hhbmdlIGV2ZW50IGluIENLRWRpdG9yIGZvciBkZWJvdW5jaW5nIHVzZXIgbW9kaWZpY2F0aW9uc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIC8vIERlYm91bmNlIHVwZGF0ZVxuICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSdW4gd2l0aGluIHRoZSBjb250ZXh0IG9mIHRoaXMgYW5ndWxhciBlbGVtZW50IHNpbmNlIHdlIGRvbid0IG5lZWQgdG8gY2FuY2VsIGV2ZW50XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgMjUwKTtcbiAgICB9KTtcblxuICAgIC8vIFByb3BhZ2F0ZSBibHVyIGV2ZW50cyBmcm9tIENLRWRpdG9yIHRvIHRoZSBFbGVtZW50J3MgbGlzdGVuZXJzXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignYmx1cicsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlcigpO1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gUHJvcGFnYXRlIGJsdXIgZXZlbnRzIGZyb20gQ0tFZGl0b3IgdG8gdGhlIEVsZW1lbnQncyBsaXN0ZW5lcnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdmb2N1cycsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmhpZGVQbGFjZWhvbGRlcigpO1xuICAgICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFNob3cgcGxhY2Vob2xkZXIgaWYgdGhlIG5vdGUgaXMgZW1wdHksIGFmdGVyIHRoZSBlZGl0b3IgaXMgaW5zdGFudGlhdGVkXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignaW5zdGFuY2VSZWFkeScsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlcigpO1xuICAgICAgLy8gU2V0IGVkaXRvciB0byByZWFkT25seVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnJlYWRPbmx5KSB7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2Uuc2V0UmVhZE9ubHkodGhpcy5jb25maWcucmVhZE9ubHkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBwdWJsaWMgb25Ub3VjaGVkKGV2ZW50PzogYW55KSB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgc2V0dGluZyB0aGUgbW9kZWwgYW5kIHRoZSB2aWV3IGZyb20gdGhlIG91dHNpZGUgY2FsbGVyIG9yIHRoZSB1c2VyJ3MgdHlwaW5nXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbCBBIG1vZGVsIHRoYXQgaGFzIGEgbm90ZSAoaHRtbCBjb250ZW50KSBhbmQgcmVmZXJlbmNlcyAoYXJyYXkgb2Ygb2JqZWN0cylcbiAgICovXG4gIHB1YmxpYyB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBTZXQgdmFsdWUgb2YgdGhlIG1vZGVsXG4gICAgaWYgKG1vZGVsICYmIChtb2RlbC5yZWZlcmVuY2VzIHx8IG1vZGVsLm5vdGUpKSB7XG4gICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICBub3RlOiBtb2RlbC5ub3RlIHx8ICcnLFxuICAgICAgICByZWZlcmVuY2VzOiBtb2RlbC5yZWZlcmVuY2VzIHx8IHt9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgbm90ZTogbW9kZWwsXG4gICAgICAgIHJlZmVyZW5jZXM6IHt9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIG5vdGUgaHRtbCB2YWx1ZSBpbiB0aGUgZWRpdG9yXG4gICAgaWYgKHRoaXMuY2tlSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2Uuc2V0RGF0YSh0aGlzLm1vZGVsLm5vdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBhIHJlbmRlcmVyIGlzIG5vdCBwcm92aWRlZCwgdGhlIFF1aWNrTm90ZSB3aWxsIGRlZmF1bHQgdG8gdXNpbmcgdGhpcyBvbmUsIGFuIGFuY2hvciB0YWcgd2l0aCBubyBocmVmXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0UmVuZGVyZXIoc3ltYm9sOiBzdHJpbmcsIGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8YT4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVuZGVyZXIgZm9yIGEgZ2l2ZW4gdGFnZ2luZyBtb2RlIGlmIGl0IGV4aXN0cyBpbiB0aGUgY29uZmlnLCBvdGhlcndpc2UgdGhlIGRlZmF1bHQuXG4gICAqL1xuICBwcml2YXRlIGdldFJlbmRlcmVyKHRhZ2dpbmdNb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZW5kZXJlciA/IHRoaXMuY29uZmlnLnJlbmRlcmVyW3RhZ2dpbmdNb2RlXSA6IFF1aWNrTm90ZUVsZW1lbnQuZGVmYXVsdFJlbmRlcmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBldmVyeSB0aW1lIGEga2V5c3Ryb2tlIGlzIG1hZGUgaW4gdGhlIGVkaXRvci4gTGlzdGVucyBmb3IgcGFydGljdWxhciBrZXlzIChlLmcuIFVQIGFycm93LCBFU0MsIGV0Yy4pXG4gICAqIHRvIGhhbmRsZSBjZXJ0YWluIGJlaGF2aW9ycyBvZiB0aGUgcGlja2VyLlxuICAgKlxuICAgKiBSdW5zIHdpdGhpbiB0aGUgY29udGV4dCBvZiB0aGUgQ0tFZGl0b3IsIHNvIGFjdGlvbnMgdGhhdCBhZmZlY3QgdGhlIHZpZXcgaGF2ZSB0byBiZSBydW4gYmFjayBpbnNpZGUgb2YgdGhlXG4gICAqIEFuZ3VsYXIgem9uZSBvZiB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGtleSBwcmVzcyBldmVudFxuICAgKiBAcmV0dXJuIHRydWUgdG8gYWxsb3cgdGhlIGV2ZW50IHRvIG9jY3VyLCBmYWxzZSB0byBjYW5jZWwgdGhlIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKGV2ZW50LmtleSkge1xuICAgICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICAvLyBIaWRlIHJlc3VsdHMgb24gZXNjYXBlIGtleVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmF2aWdhdGlvbiBpbnNpZGUgdGhlIHJlc3VsdHNcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UucHJldkFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0cmlnZ2VycyBhbmQgdHVybiBvbiB0YWdnaW5nIG1vZGUgaWYgdGhlIHVzZXIganVzdCBwcmVzc2VkIGEgdHJpZ2dlciBjaGFyYWN0ZXJcbiAgICAgICAgbGV0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlcnMgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRyaWdnZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBsZXQgdHJpZ2dlciA9IHRyaWdnZXJzW2tleV0gfHwge307XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gdHJpZ2dlcikge1xuICAgICAgICAgICAgdGhpcy5pc1RhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50YWdnaW5nTW9kZSA9IGtleTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJvdW5jZWQgbWV0aG9kIHRoYXQgaXMgcnVuIGluIHRoZSBwcm9wZXIgQW5ndWxhciBjb250ZXh0IHdoZW4gdGhlIHVzZXIgaGFzIG1vZGlmaWVkIHRoZSBDS0VkaXRvci5cbiAgICogQWZ0ZXIgdGhlIHZhbHVlIGhhcyBiZWVuIHVwZGF0ZWQgaW4gQ0tFZGl0b3IsIHRoaXMgd2lsbCBwcm9wYWdhdGUgdGhhdCBjaGFuZ2UgdG8gdGhlIG1vZGVsIGFuZCBsaXN0ZW5lcnMuXG4gICAqL1xuICBwcml2YXRlIG9uVmFsdWVDaGFuZ2UoKTogdm9pZCB7XG4gICAgLy8gR2V0IHRoZSBodG1sIHRleHQgaW4gQ0tFZGl0b3JcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmNrZUluc3RhbmNlLmdldERhdGEoKTtcblxuICAgIC8vIFJlbW92ZSBlbXB0eSAnWkVSTyBXSURUSCBTUEFDRScgY2hhcmFjdGVycyB0aGF0IGNhbiBnZXQgYWRkZWQgZXJyb25lb3VzbHkgYnkgdGhlIGVkaXRvclxuICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoU3RyaW5nLmZyb21DaGFyQ29kZSg4MjAzKSwgJ2cnKTtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGFueSByZWZlcmVuY2VzIGluIHRoZSBtb2RlbCBhcmUgc3RpbGwgdmFsaWRcbiAgICB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlcygpO1xuXG4gICAgLy8gUG9zc2libHkgc2hvdyByZXN1bHRzIGlmIHRoZSB1c2VyIGhhcyBlbnRlcmVkIGEgc2VhcmNoIHRlcm1cbiAgICB0aGlzLnNob3dSZXN1bHRzKCk7XG5cbiAgICAvLyBQcm9wYWdhdGUgY2hhbmdlIHRvIG5nTW9kZWwgZm9yIGZvcm0gdmFsaWRhdGlvbiwgYW5kIHNlbmQgbnVsbCBpZiB0aGUgbm90ZSBpcyBlbXB0eVxuICAgIGxldCBuZXdNb2RlbCA9IG51bGw7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdNb2RlbCA9IHtcbiAgICAgICAgbm90ZTogdmFsdWUsXG4gICAgICAgIHJlZmVyZW5jZXM6IHRoaXMubW9kZWwucmVmZXJlbmNlcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSW5mb3JtIGxpc3RlbmVycyB0byB0aGUgbmdNb2RlbCBjaGFuZ2UgZXZlbnQgdGhhdCBzb21ldGhpbmcgaGFzIGNoYW5nZWRcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UobmV3TW9kZWwpO1xuXG4gICAgLy8gSW5mb3JtIGxpc3RlbmVycyBvZiB0aGUgYEBPdXRwdXQoKSBjaGFuZ2VgIGV2ZW50IHRoYXQgdGhlIG1vZGVsIGhhcyBiZWVuIHVwZGF0ZWRcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5ld01vZGVsKTtcblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgdG8gdGhlIG5nTW9kZWwgdG91Y2hlZCBldmVudCB0aGF0IHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0cyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXQgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIHNob3dSZXN1bHRzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnZ2luZykge1xuICAgICAgbGV0IHNlYXJjaFRlcm0gPSB0aGlzLmdldFNlYXJjaFRlcm0oKTtcbiAgICAgIGlmIChzZWFyY2hUZXJtLmxlbmd0aCkge1xuICAgICAgICAvLyBVcGRhdGUgTWF0Y2hlc1xuICAgICAgICBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGxpc3RcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UudGVybSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0YWdnaW5nTW9kZTogdGhpcy50YWdnaW5nTW9kZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENyZWF0ZSB0aGUgcmVzdWx0cyBET00gZWxlbWVudFxuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kTmV4dFRvTG9jYXRpb24odGhpcy5yZXN1bHRzQ29tcG9uZW50LCB0aGlzLnJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5jb25maWcgPSB0aGlzLmNvbmZpZztcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UudGVybSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0YWdnaW5nTW9kZTogdGhpcy50YWdnaW5nTW9kZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucG9zaXRpb25SZXN1bHRzRHJvcGRvd24oKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgLy8gVGVsbCB0aGUgT3V0c2lkZUNsaWNrIGJhc2UgY2xhc3MgdG8gc3RhcnQgbGlzdGVuaW5nIGZvciBhbiBvdXRzaWRlIGNsaWNrc1xuICAgICAgdGhpcy50b2dnbGVBY3RpdmUobnVsbCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGhlIHBpY2tlciByZXN1bHRzIGZyb20gdGhlIERPTS5cbiAgICovXG4gIHByaXZhdGUgaGlkZVJlc3VsdHMoKTogdm9pZCB7XG4gICAgdGhpcy5pc1RhZ2dpbmcgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuZGVzdHJveSgpO1xuICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgc2VsZWN0aW9uIGZyb20gdGhlIFF1aWNrTm90ZVJlc3VsdHMgQ29tcG9uZW50LiBDYWxsZWQgYnkgdGhlIFF1aWNrTm90ZVJlc3VsdHMgY29tcG9uZW50IG9uIGl0J3NcbiAgICogcGFyZW50ICh0aGlzIGVsZW1lbnQpLlxuICAgKlxuICAgKiBAcGFyYW0gdGFnZ2luZ01vZGUgLSB0eXBlIG9mIHRhZ3Mgd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAqIEBwYXJhbSBzZWxlY3RlZCAtIHNlbGVjdGVkIG9iamVjdCBmcm9tIHRoZSBwaWNrZXIgdGhhdCBoYXMgYSBsYWJlbCBhbmQgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgb25TZWxlY3RlZCh0YWdnaW5nTW9kZTogc3RyaW5nLCBzZWxlY3RlZDogYW55KTogdm9pZCB7XG4gICAgLy8gVHVybiBvZmYgdGFnZ2luZ1xuICAgIHRoaXMuaXNUYWdnaW5nID0gZmFsc2U7XG5cbiAgICAvLyBSZXBsYWNlIHNlYXJjaFRlcm0gd2l0aCBsaW5rXG4gICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RhZ2dpbmdNb2RlXTtcbiAgICBsZXQgcmVuZGVyZXIgPSB0aGlzLmdldFJlbmRlcmVyKHRhZ2dpbmdNb2RlKTtcbiAgICBsZXQgcmVuZGVyZWRUZXh0ID0gcmVuZGVyZXIoc3ltYm9sLCBzZWxlY3RlZCk7XG5cbiAgICB0aGlzLnJlcGxhY2VXb3JkQXRDdXJzb3IocmVuZGVyZWRUZXh0KTtcblxuICAgIC8vIEFkZCB0aGUgbmV3IHJlZmVyZW5jZSwgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzIHx8IHt9O1xuICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdIHx8IFtdO1xuICAgIGxldCBtYXRjaGluZ0l0ZW1zID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5maWx0ZXIoKGl0ZW0pID0+IEpTT04uc3RyaW5naWZ5KGl0ZW0pID09PSBKU09OLnN0cmluZ2lmeShzZWxlY3RlZCkpO1xuICAgIGlmIChtYXRjaGluZ0l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXS5wdXNoKHNlbGVjdGVkKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgdGhlIHF1aWNrIG5vdGUgd2l0aCB0aGUgY2hhbmdlcyBkdWUgdG8gdGhlIHVzZXIncyBzZWxlY3Rpb24gb2YgYW4gaXRlbSBpbiB0aGUgZHJvcGRvd25cbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgdGhhdCBnZXRzIHRoZSBjdXJyZW50IHdvcmQgdGhhdCB0aGUgY3Vyc29yIGlzIG9uLCBtaW51cyB0aGUgdGFnLlxuICAgKiBBbHNvLCB0cmltcyBhbnkgd2hpdGVzcGFjZSBiZWZvcmUvYWZ0ZXIgdGhlIHRlcm0gdG8gYWlkIGluIHNlYXJjaGluZy5cbiAgICovXG4gIHByaXZhdGUgZ2V0U2VhcmNoVGVybSgpOiBzdHJpbmcge1xuICAgIGxldCB3b3JkID0gdGhpcy5nZXRXb3JkQXRDdXJzb3IoKS50cmltKCk7XG4gICAgaWYgKHRoaXMuaXNUYWdnaW5nKSB7XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGhpcy50YWdnaW5nTW9kZV07XG4gICAgICBpZiAoIXdvcmQuaW5jbHVkZXMoc3ltYm9sKSkge1xuICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHdvcmQgPSB3b3JkLnNsaWNlKHdvcmQuaW5kZXhPZihzeW1ib2wpICsgc3ltYm9sLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiB3b3JkO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGN1cnJlbnQgd29yZCB0aGF0IHRoZSBjdXJzb3IgaXMgb24gQ0tFZGl0b3IuIEN1cnJlbnQgd29yZCBzdGFydHMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgbGluZSBvciBhXG4gICAqIHRhZyBjaGFyYWN0ZXIgaWYgd2UgYXJlIGluIHRhZ2dpbmcgbW9kZS4gQ3VycmVudCB3b3JkIGVuZHMgYXQgdGhlIGVuZCBvZiB0aGUgbGluZSBvciBhbiBlbXB0eSBzcGFjZS5cbiAgICpcbiAgICogQHJldHVybnMgcGxhaW4gdGV4dCBzdHJpbmcgKHJlbW92ZXMgYWxsIGh0bWwgZm9ybWF0dGluZylcbiAgICovXG4gIHByaXZhdGUgZ2V0V29yZEF0Q3Vyc29yKCk6IHN0cmluZyB7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBsZXQgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcblxuICAgIGlmIChzdGFydC50eXBlID09PSBDS0VESVRPUi5OT0RFX1RFWFQgJiYgcmFuZ2Uuc3RhcnRPZmZzZXQpIHtcbiAgICAgIGxldCB0ZXh0ID0gc3RhcnQuZ2V0VGV4dCgpO1xuICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RoaXMudGFnZ2luZ01vZGVdO1xuICAgICAgbGV0IHdvcmRTdGFydCA9IHRleHQubGFzdEluZGV4T2Yoc3ltYm9sLCByYW5nZS5zdGFydE9mZnNldCAtIDEpO1xuXG4gICAgICBpZiAod29yZFN0YXJ0ID4gMCkge1xuICAgICAgICBsZXQgYmVmb3JlU3ltYm9sOiBzdHJpbmcgPSB0ZXh0LmNoYXJBdCh3b3JkU3RhcnQgLSAxKTtcbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byB0cmlnZ2VyIHRoZSBsb29rdXAgY2FsbCB1bmxlc3MgdGhlIHN5bWJvbCB3YXMgcHJlY2VkZWQgYnkgd2hpdGVzcGFjZVxuICAgICAgICBpZiAoYmVmb3JlU3ltYm9sICE9PSAnXFx1MjAwQicgJiYgL1xcUy8udGVzdChiZWZvcmVTeW1ib2wpKSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXJ0Lmhhc1ByZXZpb3VzKCkgJiYgL1xcUyQvLnRlc3Qoc3RhcnQuZ2V0UHJldmlvdXMoKS5nZXRUZXh0KCkpKSB7XG4gICAgICAgIC8vIFdoZW4gd29yZFN0YXJ0IGlzIDw9IDAsIHdlIG5lZWQgdG8gY2hlY2sgdGhlIHByZXZpb3VzIG5vZGUncyB0ZXh0IHRvIHNlZSBpZiBpdCBlbmRlZCB3aXRoIHdoaXRlc3BhY2Ugb3Igbm90XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cblxuICAgICAgbGV0IHdvcmRFbmQgPSB0ZXh0LmluZGV4T2YoJyAnLCByYW5nZS5zdGFydE9mZnNldCArIDEpO1xuICAgICAgaWYgKHdvcmRTdGFydCA9PT0gLTEpIHtcbiAgICAgICAgd29yZFN0YXJ0ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmICh3b3JkRW5kID09PSAtMSkge1xuICAgICAgICB3b3JkRW5kID0gdGV4dC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0LnN1YnN0cmluZyh3b3JkU3RhcnQsIHdvcmRFbmQpO1xuICAgIH1cblxuICAgIC8vIFNlbGVjdGlvbiBzdGFydHMgYXQgdGhlIDAgaW5kZXggb2YgdGhlIHRleHQgbm9kZSBvciB0aGVyZSdzIG5vIHByZXZpb3VzIHRleHQgbm9kZSBpbiBjb250ZW50c1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyB0aGUgd29yZCB0aGF0IHRoZSB1c2VyIGlzIG9uIHdpdGggdGhlIGdpdmVuIGh0bWwuXG4gICAqXG4gICAqIENLRWRpdG9yIGdpdmVzIHVzIGFjY2VzcyB0byB0aGUgY3VycmVudCBsaW5lIG9mIGh0bWwgaW4gdGhlIGVkaXRvciwgc28gd2UgcmVwbGFjZSB0aGUgY29udGVudCBvZlxuICAgKiB0aGUgbGluZSwgcmVwbGFjaW5nIG9ubHkgdGhlIGN1cnJlbnQgd29yZC5cbiAgICovXG4gIHByaXZhdGUgcmVwbGFjZVdvcmRBdEN1cnNvcihuZXdXb3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBsZXQgb3JpZ2luYWxXb3JkID0gdGhpcy5nZXRXb3JkQXRDdXJzb3IoKS50cmltKCk7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBsZXQgc3RhcnQgPSByYW5nZS5zdGFydENvbnRhaW5lcjtcbiAgICBsZXQgcGFyZW50Tm9kZSA9IHN0YXJ0LmdldFBhcmVudCgpO1xuXG4gICAgaWYgKHN0YXJ0LnR5cGUgPT09IENLRURJVE9SLk5PREVfVEVYVCAmJiBwYXJlbnROb2RlKSB7XG4gICAgICBsZXQgbGluZSA9IHBhcmVudE5vZGUuZ2V0SHRtbCgpO1xuICAgICAgbGV0IGluZGV4ID0gbGluZS5sYXN0SW5kZXhPZihvcmlnaW5hbFdvcmQpO1xuXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAvLyBBZGQgYSBzcGFjZSBhZnRlciB0aGUgcmVwbGFjZWQgd29yZCBzbyB0aGF0IG11bHRpcGxlIHJlZmVyZW5jZXMgY2FuIGJlIGFkZGVkIGJhY2sgdG8gYmFja1xuICAgICAgICBsZXQgbmV3TGluZSA9IGxpbmUuc3Vic3RyaW5nKDAsIGluZGV4KSArIG5ld1dvcmQgKyAnICcgKyBsaW5lLnN1YnN0cmluZyhpbmRleCArIG9yaWdpbmFsV29yZC5sZW5ndGgpO1xuICAgICAgICBwYXJlbnROb2RlLnNldEh0bWwobmV3TGluZSk7XG5cbiAgICAgICAgLy8gUGxhY2Ugc2VsZWN0aW9uIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmVcbiAgICAgICAgcmFuZ2UubW92ZVRvUG9zaXRpb24ocGFyZW50Tm9kZSwgQ0tFRElUT1IuUE9TSVRJT05fQkVGT1JFX0VORCk7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuc2VsZWN0UmFuZ2VzKFtyYW5nZV0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGN1cnJlbnQgcmVmZXJlbmNlcywgbWludXMgYW55IGZyb20gdGhlIG1vZGVsIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgZWRpdG9yLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZVJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgbGV0IGh0bWwgPSB0aGlzLmNrZUluc3RhbmNlLmRvY3VtZW50LmdldEJvZHkoKS5nZXRIdG1sKCk7XG5cbiAgICAvLyBDS0VkaXRvciBzdG9wcGVkIHN1cHBvcnRpbmcgdGhlIGNvbmZpZy5mb3JjZVNpbXBsZUFtcGVyc2FuZCBzZXR0aW5nLCBzbyB3ZSBoYXZlIHRvIGNvbnZlcnQgJyZhbXA7JyB0byAnJidcbiAgICAvLyB3aGVuIHdlIHB1bGwgaHRtbCBmcm9tIHRoZSBlZGl0b3IgLSBzZWU6IGh0dHBzOi8vZGV2LmNrZWRpdG9yLmNvbS90aWNrZXQvMTM3MjNcbiAgICBsZXQgYW1wUmVnZXggPSBuZXcgUmVnRXhwKCcmYW1wOycsICdnJyk7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZShhbXBSZWdleCwgJyYnKTtcblxuICAgIE9iamVjdC5rZXlzKHRoaXMubW9kZWwucmVmZXJlbmNlcykuZm9yRWFjaCgodGFnZ2luZ01vZGUpID0+IHtcbiAgICAgIGxldCBhcnJheSA9IHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gfHwgW107XG4gICAgICBsZXQgc3ltYm9sID0gdGhpcy5jb25maWcudHJpZ2dlcnNbdGFnZ2luZ01vZGVdO1xuICAgICAgbGV0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcih0YWdnaW5nTW9kZSk7XG5cbiAgICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0gPSBhcnJheS5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IHJlbmRlcmVkVGV4dCA9IHJlbmRlcmVyKHN5bWJvbCwgaXRlbSk7XG4gICAgICAgIHJldHVybiBodG1sLmluY2x1ZGVzKHJlbmRlcmVkVGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgbm8gcmVmZXJlbmNlcywgdGhlbiBkZWxldGUgdGhlIGtleVxuICAgICAgaWYgKHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIENLRWRpdG9yIGZvciBRdWlja05vdGUgZnVuY3Rpb25hbGl0eS5cbiAgICpcbiAgICogU2V0cyB0aGUgaGVpZ2h0IG9mIHRoZSBDS0VkaXRvciBkeW5hbWljYWxseSB0byB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVyIHVwb24gaW5pdGlhbGl6YXRpb24uXG4gICAqIFJlbW92ZXMgdGhlIHRvb2xiYXIgb24gdGhlIGJvdHRvbSBhbmQgY29uZmlndXJlcyBhIHNsaW1tZWQgZG93biB2ZXJzaW9uIG9mIHRoZSB0b29sYmFyLlxuICAgKiBSZW1vdmVzIHBsdWdpbnMgYW5kIHR1cm5zIG9mZiBzZXR0aW5nIHRvIGFsbG93IGJyb3dzZXIgYmFzZWQgc3BlbGwgY2hlY2tpbmcuXG4gICAqL1xuICBwcml2YXRlIGdldENLRWRpdG9yQ29uZmlnKCk6IGFueSB7XG4gICAgLy8gVXNlIHRoZSBoZWlnaHQgb2YgdGhlIHdyYXBwZXIgZWxlbWVudCB0byBzZXQgdGhlIGluaXRpYWwgaGVpZ2h0IG9mIHRoZSBlZGl0b3IsIHRoZW5cbiAgICAvLyBzZXQgaXQgdG8gMTAwJSB0byBhbGxvdyB0aGUgZWRpdG9yIHRvIHJlc2l6ZSB1c2luZyB0aGUgZ3JpcHB5LlxuICAgIGxldCBlZGl0b3JIZWlnaHQgPSB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUO1xuICAgIHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCdoZWlnaHQnLCAnMTAwJScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVudGVyTW9kZTogQ0tFRElUT1IuRU5URVJfQlIsXG4gICAgICBzaGlmdEVudGVyTW9kZTogQ0tFRElUT1IuRU5URVJfUCxcbiAgICAgIGRpc2FibGVOYXRpdmVTcGVsbENoZWNrZXI6IGZhbHNlLFxuICAgICAgaGVpZ2h0OiBlZGl0b3JIZWlnaHQsXG4gICAgICBzdGFydHVwRm9jdXM6IHRoaXMuc3RhcnR1cEZvY3VzLFxuICAgICAgcmVtb3ZlUGx1Z2luczogJ2xpc3RzdHlsZSx0YWJsZXRvb2xzLGNvbnRleHRtZW51JywgLy8gYWxsb3dzIGJyb3dzZXIgYmFzZWQgc3BlbGwgY2hlY2tpbmdcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdTdHlsZXMnLFxuICAgICAgICAgICAgJ0ZvbnRTaXplJyxcbiAgICAgICAgICAgICdCb2xkJyxcbiAgICAgICAgICAgICdJdGFsaWMnLFxuICAgICAgICAgICAgJ1VuZGVybGluZScsXG4gICAgICAgICAgICAnVGV4dENvbG9yJyxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdMaW5rJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc2NyZWVuIHBvc2l0aW9uIG9mIHRoZSBjdXJzb3IgaW4gQ0tFZGl0b3IsIGFjY291bnRpbmcgZm9yIGFueSBzY3JvbGxpbmcgaW4gdGhlIGVkaXRvci5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q3Vyc29yUG9zaXRpb24oKTogYW55IHtcbiAgICBsZXQgcmFuZ2UgPSB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLmdldFJhbmdlcygpWzBdO1xuICAgIGxldCBwYXJlbnRFbGVtZW50ID0gcmFuZ2Uuc3RhcnRDb250YWluZXIuJC5wYXJlbnRFbGVtZW50O1xuICAgIGxldCBlZGl0b3JFbGVtZW50ID0gdGhpcy5ja2VJbnN0YW5jZS5lZGl0YWJsZSgpLiQ7XG5cbiAgICAvLyBTaW5jZSB0aGUgZWRpdG9yIGlzIGEgdGV4dCBub2RlIGluIHRoZSBET00gdGhhdCBkb2VzIG5vdCBrbm93IGFib3V0IGl0J3MgcG9zaXRpb24sIGEgdGVtcG9yYXJ5IGVsZW1lbnQgaGFzIHRvXG4gICAgLy8gYmUgaW5zZXJ0ZWQgaW4gb3JkZXIgdG8gbG9jYXRlIHRoZSBjdXJzb3IgcG9zaXRpb24uXG4gICAgbGV0IGN1cnNvckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgJ251bGwnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnMCcpO1xuICAgIGN1cnNvckVsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMCcpO1xuXG4gICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjdXJzb3JFbGVtZW50KTtcbiAgICBsZXQgY3Vyc29yUG9zaXRpb24gPSB7XG4gICAgICB0b3A6IGN1cnNvckVsZW1lbnQub2Zmc2V0VG9wIC0gZWRpdG9yRWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICBsZWZ0OiBjdXJzb3JFbGVtZW50Lm9mZnNldExlZnQgLSBlZGl0b3JFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgfTtcbiAgICBjdXJzb3JFbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGN1cnNvclBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9ucyB0aGUgcmVzdWx0cyBkcm9wZG93biBiYXNlZCBvbiB0aGUgbG9jYXRpb24gb2YgdGhlIGN1cnNvciBpbiB0aGUgdGV4dCBmaWVsZFxuICAgKi9cbiAgcHJpdmF0ZSBwb3NpdGlvblJlc3VsdHNEcm9wZG93bigpOiB2b2lkIHtcbiAgICBjb25zdCBNSU5fTUFSR0lOX1RPUDogbnVtYmVyID0gUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVCAqIDI7XG4gICAgY29uc3QgTUFYX01BUkdJTl9UT1A6IG51bWJlciA9IHRoaXMuZ2V0Q29udGVudEhlaWdodCgpICsgUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcblxuICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IHRoaXMuZ2V0Q3Vyc29yUG9zaXRpb24oKTtcbiAgICBsZXQgbWFyZ2luVG9wOiBudW1iZXIgPSBjdXJzb3JQb3NpdGlvbi50b3AgKyBRdWlja05vdGVFbGVtZW50LlRPT0xCQVJfSEVJR0hUO1xuXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgbWFyZ2luIGlzIHdpdGhpbiB0aGUgdmlzaWJsZSBib3VuZHNcbiAgICBtYXJnaW5Ub3AgPSBNYXRoLm1heChtYXJnaW5Ub3AsIE1JTl9NQVJHSU5fVE9QKTtcbiAgICBtYXJnaW5Ub3AgPSBNYXRoLm1pbihtYXJnaW5Ub3AsIE1BWF9NQVJHSU5fVE9QKTtcblxuICAgIC8vIFNldCB0aGUgbWFyZ2luLXRvcCBvZiB0aGUgZHJvcGRvd25cbiAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCdtYXJnaW4tdG9wJywgbWFyZ2luVG9wICsgJ3B4Jyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVpZ2h0IGluIHBpeGVscyBvZiB0aGUgY29udGVudCBhcmVhIC0gdGhlIHRleHQgdGhhdCB0aGUgdXNlciBoYXMgZW50ZXJlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q29udGVudEhlaWdodCgpOiBudW1iZXIge1xuICAgIGxldCBjb250ZW50SGVpZ2h0OiBudW1iZXIgPSAwO1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkgJiZcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50ICYmXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudC4kICYmXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudC4kLnN0eWxlXG4gICAgKSB7XG4gICAgICBsZXQgY3NzVGV4dDogc3RyaW5nID0gdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJC5zdHlsZS5jc3NUZXh0O1xuICAgICAgaWYgKGNzc1RleHQuaW5kZXhPZignaGVpZ2h0OiAnKSAhPT0gLTEpIHtcbiAgICAgICAgbGV0IGhlaWdodDogc3RyaW5nID0gY3NzVGV4dC5zcGxpdCgnaGVpZ2h0OiAnKVsxXTtcbiAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0LnNwbGl0KCdweCcpWzBdO1xuICAgICAgICBjb250ZW50SGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbnRlbnRIZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgcGxhY2Vob2xkZXIgdGV4dCBpZiB0aGUgZWRpdG9yIGlzIGVtcHR5XG4gICAqL1xuICBwcml2YXRlIHNob3dQbGFjZWhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2tlSW5zdGFuY2UuZ2V0RGF0YSgpICYmICF0aGlzLnN0YXJ0dXBGb2N1cykge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZVxuICAgICAgICAuZWRpdGFibGUoKVxuICAgICAgICAuZ2V0UGFyZW50KClcbiAgICAgICAgLiQuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZWhvbGRlckVsZW1lbnQpO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlclZpc2libGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBwbGFjZWhvbGRlciB0ZXh0IGJ5IHJlbW92aW5nIHRoZSBwbGFjZWhvbGRlciBlbGVtZW50IGZyb20gdGhlIERPTVxuICAgKi9cbiAgcHJpdmF0ZSBoaWRlUGxhY2Vob2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlXG4gICAgICAgIC5lZGl0YWJsZSgpXG4gICAgICAgIC5nZXRQYXJlbnQoKVxuICAgICAgICAuJC5yZW1vdmVDaGlsZCh0aGlzLnBsYWNlaG9sZGVyRWxlbWVudCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgb3IgY3JlYXRlIHRoZSBzaW5nbGUgcGxhY2Vob2xkZXIgb2JqZWN0IHRoYXQgaXMgY29uc3RydWN0ZWQgb25seSB3aGVuIG5lZWRlZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHBsYWNlaG9sZGVyRWxlbWVudCgpOiBhbnkge1xuICAgIGlmICghdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudC5jbGFzc05hbWUgPSAncGxhY2Vob2xkZXInO1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAnbWFyZ2luOiAyMHB4OyBjb2xvcjogI0FBQUFBQTsgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDIwcHg7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwJztcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudC50ZXh0Q29udGVudCA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQ7XG4gIH1cbn1cbiJdfQ==