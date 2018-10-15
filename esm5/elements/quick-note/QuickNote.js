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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUNULGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7OztJQUd4RSx5QkFBeUIsR0FBRztJQUNoQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFJRDtJQVVzQyw0Q0FBWTtJQXVDaEQsMEJBQW9CLElBQVksRUFBRSxPQUFtQixFQUFVLGNBQThCO1FBQTdGLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBU2Y7UUFWbUIsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUErQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1QjdGLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBSTlCLHNCQUFzQjtRQUV0QixXQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsVUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLFlBQU0sR0FBc0IsSUFBSSxZ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Q0FDMkI7O0lBQzNCLGdDQUN3Qjs7SUFDeEIsbUNBQzBCOztJQUUxQixrQ0FDWTs7SUFDWix3Q0FDOEI7O0lBQzlCLHVDQUNvQjs7SUFHcEIsaUNBQzhDOztJQUM5QyxnQ0FDNkM7O0lBQzdDLGtDQUMrQzs7SUFHL0MsNENBQThCOztJQUM5Qiw0Q0FBOEI7O0lBQzlCLHFDQUEyQjs7SUFDM0IsdUNBQTRCOztJQUM1QixpQ0FBbUI7O0lBQ25CLHVDQUF5Qjs7SUFDekIsMkNBQTZCOztJQUM3Qiw4Q0FBNEM7O0lBQzVDLCtDQUF3Qzs7SUFJeEMseUNBQTJDOztJQUMzQywwQ0FBNEM7O0lBRWhDLGdDQUFvQjs7SUFBdUIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uRGVzdHJveSxcbiAgTmdab25lLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBPdXRzaWRlQ2xpY2sgfSBmcm9tICcuLy4uLy4uL3V0aWxzL291dHNpZGUtY2xpY2svT3V0c2lkZUNsaWNrJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgUXVpY2tOb3RlUmVzdWx0cyB9IGZyb20gJy4vZXh0cmFzL3F1aWNrLW5vdGUtcmVzdWx0cy9RdWlja05vdGVSZXN1bHRzJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFFVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBRdWlja05vdGVFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5kZWNsYXJlIHZhciBDS0VESVRPUjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXF1aWNrLW5vdGUnLFxuICBwcm92aWRlcnM6IFtRVUlDS19OT1RFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInF1aWNrLW5vdGUtd3JhcHBlclwiICN3cmFwcGVyPlxuICAgICAgICAgICAgPHRleHRhcmVhICNob3N0PjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8c3BhbiAjcmVzdWx0cz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFF1aWNrTm90ZUVsZW1lbnQgZXh0ZW5kcyBPdXRzaWRlQ2xpY2sgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInKVxuICBwdWJsaWMgd3JhcHBlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaG9zdCcpXG4gIHB1YmxpYyBob3N0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyZXN1bHRzJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIHJlc3VsdHM6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgY29uZmlnOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0dXBGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIC8vIEVtaXR0ZXIgZm9yIHNlbGVjdHNcbiAgQE91dHB1dCgpXG4gIGZvY3VzOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBUaGUgY2hhcmFjdGVycyB0aGF0IHRoZSB1c2VyIGVudGVycyBpbiBvcmRlciB0byBzZWFyY2ggZm9yIGEgcGVyc29uL3RoaW5nIHRvIHRhZ1xuICBwcml2YXRlIHJlc3VsdHNDb21wb25lbnQ6IGFueTtcbiAgcHJpdmF0ZSBxdWlja05vdGVSZXN1bHRzOiBhbnk7XG4gIHByaXZhdGUgaXNUYWdnaW5nOiBib29sZWFuO1xuICBwcml2YXRlIHRhZ2dpbmdNb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgbW9kZWw6IGFueTtcbiAgcHJpdmF0ZSBja2VJbnN0YW5jZTogYW55O1xuICBwcml2YXRlIGRlYm91bmNlVGltZW91dDogYW55O1xuICBwcml2YXRlIHBsYWNlaG9sZGVyVmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlckVsZW1lbnQ6IGFueSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgVE9PTEJBUl9IRUlHSFQgPSA0MDsgLy8gaW4gcGl4ZWxzIC0gY29uZmlndXJlZCBieSBzdHlsZXNoZWV0XG5cbiAgcHJpdmF0ZSBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBwcml2YXRlIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgem9uZTogTmdab25lLCBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge1xuICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgIC8vIEJpbmQgdG8gdGhlIGFjdGl2ZSBjaGFuZ2UgZXZlbnQgZnJvbSB0aGUgT3V0c2lkZUNsaWNrXG4gICAgdGhpcy5vbkFjdGl2ZUNoYW5nZS5zdWJzY3JpYmUoKGFjdGl2ZSkgPT4ge1xuICAgICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgaGF2ZSBhIHByb3BlciBjb25maWdcbiAgICBpZiAoIXRoaXMuY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbmZpZyBzZXQgZm9yIFF1aWNrTm90ZSEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSB0cmlnZ2Vyc1xuICAgIGlmICghdGhpcy5jb25maWcudHJpZ2dlcnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVpY2tOb3RlIGNvbmZpZyBtdXN0IHN1cHBseSB0cmlnZ2VycyEnKTtcbiAgICB9XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgd2UgaGF2ZSBvcHRpb25zXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vcHRpb25zKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1F1aWNrTm90ZSBjb25maWcgbXVzdCBzdXBwbHkgb3B0aW9ucyEnKTtcbiAgICB9XG4gICAgLy8gQWxsb3cgZm9yIGNhbGxlcnMgdG8gdXNlIGEgY3VzdG9tIHJlc3VsdHMgdGVtcGxhdGUgY2xhc3MgaW4gdGhlIGNvbmZpZ1xuICAgIHRoaXMucmVzdWx0c0NvbXBvbmVudCA9IHRoaXMuY29uZmlnLnJlc3VsdHNUZW1wbGF0ZSB8fCBRdWlja05vdGVSZXN1bHRzO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIFRlYXIgZG93biB0aGUgQ0tFZGl0b3IgaW5zdGFuY2VcbiAgICBpZiAodGhpcy5ja2VJbnN0YW5jZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZS5mb2N1c01hbmFnZXIuYmx1cih0cnVlKTsgLy8gUmVtb3ZlIGZvY3VzIGZyb20gZWRpdG9yXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW3RoaXMuY2tlSW5zdGFuY2UubmFtZV0uZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5ja2VJbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byBrZXkvbW91c2UgZXZlbnRzIGZyb20gQ0tFZGl0b3IgYWZ0ZXIgdGhlIGVkaXRvciBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgKi9cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIUNLRURJVE9SKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdNYWtlIHN1cmUgdG8gaW5jbHVkZSBDS0VkaXRvciBzb3VyY2VzIGluIHlvdXIgZGVwZW5kZW5jaWVzIScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlcGxhY2UgdGhlIHRleHRhcmVhIHdpdGggYW4gaW5zdGFuY2Ugb2YgQ0tFZGl0b3JcbiAgICB0aGlzLmNrZUluc3RhbmNlID0gQ0tFRElUT1IucmVwbGFjZSh0aGlzLmhvc3QubmF0aXZlRWxlbWVudCwgdGhpcy5nZXRDS0VkaXRvckNvbmZpZygpKTtcblxuICAgIC8vIFNldCBpbml0aWFsIHZhbHVlIG9mIHRoZSBub3RlIGluIHRoZSBlZGl0b3JcbiAgICB0aGlzLndyaXRlVmFsdWUodGhpcy5tb2RlbCk7XG5cbiAgICAvLyBDb25uZWN0IHRvIHRoZSBrZXkgZXZlbnQgaW4gQ0tFZGl0b3IgZm9yIHNob3dpbmcgcmVzdWx0cyBkcm9wZG93blxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2tleScsIChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMub25LZXkoZXZlbnQuZGF0YS5kb21FdmVudC4kKSkge1xuICAgICAgICBldmVudC5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGNoYW5nZSBldmVudCBpbiBDS0VkaXRvciBmb3IgZGVib3VuY2luZyB1c2VyIG1vZGlmaWNhdGlvbnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAvLyBEZWJvdW5jZSB1cGRhdGVcbiAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gUnVuIHdpdGhpbiB0aGUgY29udGV4dCBvZiB0aGlzIGFuZ3VsYXIgZWxlbWVudCBzaW5jZSB3ZSBkb24ndCBuZWVkIHRvIGNhbmNlbCBldmVudFxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gbnVsbDtcbiAgICAgIH0sIDI1MCk7XG4gICAgfSk7XG5cbiAgICAvLyBQcm9wYWdhdGUgYmx1ciBldmVudHMgZnJvbSBDS0VkaXRvciB0byB0aGUgRWxlbWVudCdzIGxpc3RlbmVyc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2JsdXInLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuYmx1ci5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFByb3BhZ2F0ZSBibHVyIGV2ZW50cyBmcm9tIENLRWRpdG9yIHRvIHRoZSBFbGVtZW50J3MgbGlzdGVuZXJzXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignZm9jdXMnLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5oaWRlUGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG4gICAgfSk7XG5cbiAgICAvLyBTaG93IHBsYWNlaG9sZGVyIGlmIHRoZSBub3RlIGlzIGVtcHR5LCBhZnRlciB0aGUgZWRpdG9yIGlzIGluc3RhbnRpYXRlZFxuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5zaG93UGxhY2Vob2xkZXIoKTtcbiAgICAgIC8vIFNldCBlZGl0b3IgdG8gcmVhZE9ubHlcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5yZWFkT25seSkge1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLnNldFJlYWRPbmx5KHRoaXMuY29uZmlnLnJlYWRPbmx5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNldCB0b3VjaGVkIG9uIGJsdXJcbiAgcHVibGljIG9uVG91Y2hlZChldmVudD86IGFueSkge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHNldHRpbmcgdGhlIG1vZGVsIGFuZCB0aGUgdmlldyBmcm9tIHRoZSBvdXRzaWRlIGNhbGxlciBvciB0aGUgdXNlcidzIHR5cGluZ1xuICAgKlxuICAgKiBAcGFyYW0gbW9kZWwgQSBtb2RlbCB0aGF0IGhhcyBhIG5vdGUgKGh0bWwgY29udGVudCkgYW5kIHJlZmVyZW5jZXMgKGFycmF5IG9mIG9iamVjdHMpXG4gICAqL1xuICBwdWJsaWMgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgLy8gU2V0IHZhbHVlIG9mIHRoZSBtb2RlbFxuICAgIGlmIChtb2RlbCAmJiAobW9kZWwucmVmZXJlbmNlcyB8fCBtb2RlbC5ub3RlKSkge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgbm90ZTogbW9kZWwubm90ZSB8fCAnJyxcbiAgICAgICAgcmVmZXJlbmNlczogbW9kZWwucmVmZXJlbmNlcyB8fCB7fSxcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IG1vZGVsLFxuICAgICAgICByZWZlcmVuY2VzOiB7fSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBub3RlIGh0bWwgdmFsdWUgaW4gdGhlIGVkaXRvclxuICAgIGlmICh0aGlzLmNrZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnNldERhdGEodGhpcy5tb2RlbC5ub3RlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICAvKipcbiAgICogSWYgYSByZW5kZXJlciBpcyBub3QgcHJvdmlkZWQsIHRoZSBRdWlja05vdGUgd2lsbCBkZWZhdWx0IHRvIHVzaW5nIHRoaXMgb25lLCBhbiBhbmNob3IgdGFnIHdpdGggbm8gaHJlZlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdFJlbmRlcmVyKHN5bWJvbDogc3RyaW5nLCBpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBgPGE+JHtzeW1ib2x9JHtpdGVtLmxhYmVsfTwvYT5gO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlbmRlcmVyIGZvciBhIGdpdmVuIHRhZ2dpbmcgbW9kZSBpZiBpdCBleGlzdHMgaW4gdGhlIGNvbmZpZywgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRSZW5kZXJlcih0YWdnaW5nTW9kZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucmVuZGVyZXIgPyB0aGlzLmNvbmZpZy5yZW5kZXJlclt0YWdnaW5nTW9kZV0gOiBRdWlja05vdGVFbGVtZW50LmRlZmF1bHRSZW5kZXJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgZXZlcnkgdGltZSBhIGtleXN0cm9rZSBpcyBtYWRlIGluIHRoZSBlZGl0b3IuIExpc3RlbnMgZm9yIHBhcnRpY3VsYXIga2V5cyAoZS5nLiBVUCBhcnJvdywgRVNDLCBldGMuKVxuICAgKiB0byBoYW5kbGUgY2VydGFpbiBiZWhhdmlvcnMgb2YgdGhlIHBpY2tlci5cbiAgICpcbiAgICogUnVucyB3aXRoaW4gdGhlIGNvbnRleHQgb2YgdGhlIENLRWRpdG9yLCBzbyBhY3Rpb25zIHRoYXQgYWZmZWN0IHRoZSB2aWV3IGhhdmUgdG8gYmUgcnVuIGJhY2sgaW5zaWRlIG9mIHRoZVxuICAgKiBBbmd1bGFyIHpvbmUgb2YgdGhpcyBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50IFRoZSBrZXkgcHJlc3MgZXZlbnRcbiAgICogQHJldHVybiB0cnVlIHRvIGFsbG93IHRoZSBldmVudCB0byBvY2N1ciwgZmFsc2UgdG8gY2FuY2VsIHRoZSBldmVudFxuICAgKi9cbiAgcHJpdmF0ZSBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IGJvb2xlYW4ge1xuICAgIGlmIChldmVudC5rZXkpIHtcbiAgICAgIGlmICh0aGlzLnF1aWNrTm90ZVJlc3VsdHMpIHtcbiAgICAgICAgLy8gSGlkZSByZXN1bHRzIG9uIGVzY2FwZSBrZXlcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVTQykge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5hdmlnYXRpb24gaW5zaWRlIHRoZSByZXN1bHRzXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5VUCkge1xuICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnByZXZBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLZXlDb2Rlcy5ET1dOKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkVOVEVSKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2Uuc2VsZWN0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgdHJpZ2dlcnMgYW5kIHR1cm4gb24gdGFnZ2luZyBtb2RlIGlmIHRoZSB1c2VyIGp1c3QgcHJlc3NlZCBhIHRyaWdnZXIgY2hhcmFjdGVyXG4gICAgICAgIGxldCB0cmlnZ2VycyA9IHRoaXMuY29uZmlnLnRyaWdnZXJzIHx8IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyh0cmlnZ2VycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgbGV0IHRyaWdnZXIgPSB0cmlnZ2Vyc1trZXldIHx8IHt9O1xuICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNUYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudGFnZ2luZ01vZGUgPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGVib3VuY2VkIG1ldGhvZCB0aGF0IGlzIHJ1biBpbiB0aGUgcHJvcGVyIEFuZ3VsYXIgY29udGV4dCB3aGVuIHRoZSB1c2VyIGhhcyBtb2RpZmllZCB0aGUgQ0tFZGl0b3IuXG4gICAqIEFmdGVyIHRoZSB2YWx1ZSBoYXMgYmVlbiB1cGRhdGVkIGluIENLRWRpdG9yLCB0aGlzIHdpbGwgcHJvcGFnYXRlIHRoYXQgY2hhbmdlIHRvIHRoZSBtb2RlbCBhbmQgbGlzdGVuZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBvblZhbHVlQ2hhbmdlKCk6IHZvaWQge1xuICAgIC8vIEdldCB0aGUgaHRtbCB0ZXh0IGluIENLRWRpdG9yXG4gICAgbGV0IHZhbHVlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXREYXRhKCk7XG5cbiAgICAvLyBSZW1vdmUgZW1wdHkgJ1pFUk8gV0lEVEggU1BBQ0UnIGNoYXJhY3RlcnMgdGhhdCBjYW4gZ2V0IGFkZGVkIGVycm9uZW91c2x5IGJ5IHRoZSBlZGl0b3JcbiAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFN0cmluZy5mcm9tQ2hhckNvZGUoODIwMyksICdnJyk7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCBhbnkgcmVmZXJlbmNlcyBpbiB0aGUgbW9kZWwgYXJlIHN0aWxsIHZhbGlkXG4gICAgdGhpcy52YWxpZGF0ZVJlZmVyZW5jZXMoKTtcblxuICAgIC8vIFBvc3NpYmx5IHNob3cgcmVzdWx0cyBpZiB0aGUgdXNlciBoYXMgZW50ZXJlZCBhIHNlYXJjaCB0ZXJtXG4gICAgdGhpcy5zaG93UmVzdWx0cygpO1xuXG4gICAgLy8gUHJvcGFnYXRlIGNoYW5nZSB0byBuZ01vZGVsIGZvciBmb3JtIHZhbGlkYXRpb24sIGFuZCBzZW5kIG51bGwgaWYgdGhlIG5vdGUgaXMgZW1wdHlcbiAgICBsZXQgbmV3TW9kZWwgPSBudWxsO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3TW9kZWwgPSB7XG4gICAgICAgIG5vdGU6IHZhbHVlLFxuICAgICAgICByZWZlcmVuY2VzOiB0aGlzLm1vZGVsLnJlZmVyZW5jZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgdG8gdGhlIG5nTW9kZWwgY2hhbmdlIGV2ZW50IHRoYXQgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKG5ld01vZGVsKTtcblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgb2YgdGhlIGBAT3V0cHV0KCkgY2hhbmdlYCBldmVudCB0aGF0IHRoZSBtb2RlbCBoYXMgYmVlbiB1cGRhdGVkXG4gICAgdGhpcy5jaGFuZ2UuZW1pdChuZXdNb2RlbCk7XG5cbiAgICAvLyBJbmZvcm0gbGlzdGVuZXJzIHRvIHRoZSBuZ01vZGVsIHRvdWNoZWQgZXZlbnQgdGhhdCBzb21ldGhpbmcgaGFzIGNoYW5nZWRcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgdGhlIHJlc3VsdHMgKGNhbGxlZCBwb3B1cCkgYW5kIGFkZHMgYWxsIHRoZSBiaW5kaW5ncyB0byB0aGF0IGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBzaG93UmVzdWx0cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ2dpbmcpIHtcbiAgICAgIGxldCBzZWFyY2hUZXJtID0gdGhpcy5nZXRTZWFyY2hUZXJtKCk7XG4gICAgICBpZiAoc2VhcmNoVGVybS5sZW5ndGgpIHtcbiAgICAgICAgLy8gVXBkYXRlIE1hdGNoZXNcbiAgICAgICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBsaXN0XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnRlcm0gPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdGFnZ2luZ01vZGU6IHRoaXMudGFnZ2luZ01vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDcmVhdGUgdGhlIHJlc3VsdHMgRE9NIGVsZW1lbnRcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRoaXMucmVzdWx0c0NvbXBvbmVudCwgdGhpcy5yZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UucGFyZW50ID0gdGhpcztcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnRlcm0gPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdGFnZ2luZ01vZGU6IHRoaXMudGFnZ2luZ01vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uUmVzdWx0c0Ryb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFRlbGwgdGhlIE91dHNpZGVDbGljayBiYXNlIGNsYXNzIHRvIHN0YXJ0IGxpc3RlbmluZyBmb3IgYW4gb3V0c2lkZSBjbGlja3NcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKG51bGwsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwaWNrZXIgcmVzdWx0cyBmcm9tIHRoZSBET00uXG4gICAqL1xuICBwcml2YXRlIGhpZGVSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNUYWdnaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIHNlbGVjdGlvbiBmcm9tIHRoZSBRdWlja05vdGVSZXN1bHRzIENvbXBvbmVudC4gQ2FsbGVkIGJ5IHRoZSBRdWlja05vdGVSZXN1bHRzIGNvbXBvbmVudCBvbiBpdCdzXG4gICAqIHBhcmVudCAodGhpcyBlbGVtZW50KS5cbiAgICpcbiAgICogQHBhcmFtIHRhZ2dpbmdNb2RlIC0gdHlwZSBvZiB0YWdzIHdlIGFyZSBsb29raW5nIGZvclxuICAgKiBAcGFyYW0gc2VsZWN0ZWQgLSBzZWxlY3RlZCBvYmplY3QgZnJvbSB0aGUgcGlja2VyIHRoYXQgaGFzIGEgbGFiZWwgYW5kIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIG9uU2VsZWN0ZWQodGFnZ2luZ01vZGU6IHN0cmluZywgc2VsZWN0ZWQ6IGFueSk6IHZvaWQge1xuICAgIC8vIFR1cm4gb2ZmIHRhZ2dpbmdcbiAgICB0aGlzLmlzVGFnZ2luZyA9IGZhbHNlO1xuXG4gICAgLy8gUmVwbGFjZSBzZWFyY2hUZXJtIHdpdGggbGlua1xuICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0YWdnaW5nTW9kZV07XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcih0YWdnaW5nTW9kZSk7XG4gICAgbGV0IHJlbmRlcmVkVGV4dCA9IHJlbmRlcmVyKHN5bWJvbCwgc2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5yZXBsYWNlV29yZEF0Q3Vyc29yKHJlbmRlcmVkVGV4dCk7XG5cbiAgICAvLyBBZGQgdGhlIG5ldyByZWZlcmVuY2UsIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgIHRoaXMubW9kZWwucmVmZXJlbmNlcyA9IHRoaXMubW9kZWwucmVmZXJlbmNlcyB8fCB7fTtcbiAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSB8fCBbXTtcbiAgICBsZXQgbWF0Y2hpbmdJdGVtcyA9IHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0uZmlsdGVyKChpdGVtKSA9PiBKU09OLnN0cmluZ2lmeShpdGVtKSA9PT0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWQpKTtcbiAgICBpZiAobWF0Y2hpbmdJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0ucHVzaChzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBxdWljayBub3RlIHdpdGggdGhlIGNoYW5nZXMgZHVlIHRvIHRoZSB1c2VyJ3Mgc2VsZWN0aW9uIG9mIGFuIGl0ZW0gaW4gdGhlIGRyb3Bkb3duXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRoYXQgZ2V0cyB0aGUgY3VycmVudCB3b3JkIHRoYXQgdGhlIGN1cnNvciBpcyBvbiwgbWludXMgdGhlIHRhZy5cbiAgICogQWxzbywgdHJpbXMgYW55IHdoaXRlc3BhY2UgYmVmb3JlL2FmdGVyIHRoZSB0ZXJtIHRvIGFpZCBpbiBzZWFyY2hpbmcuXG4gICAqL1xuICBwcml2YXRlIGdldFNlYXJjaFRlcm0oKTogc3RyaW5nIHtcbiAgICBsZXQgd29yZCA9IHRoaXMuZ2V0V29yZEF0Q3Vyc29yKCkudHJpbSgpO1xuICAgIGlmICh0aGlzLmlzVGFnZ2luZykge1xuICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RoaXMudGFnZ2luZ01vZGVdO1xuICAgICAgaWYgKCF3b3JkLmluY2x1ZGVzKHN5bWJvbCkpIHtcbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICB3b3JkID0gd29yZC5zbGljZSh3b3JkLmluZGV4T2Yoc3ltYm9sKSArIHN5bWJvbC5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHdvcmQgdGhhdCB0aGUgY3Vyc29yIGlzIG9uIENLRWRpdG9yLiBDdXJyZW50IHdvcmQgc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgb3IgYVxuICAgKiB0YWcgY2hhcmFjdGVyIGlmIHdlIGFyZSBpbiB0YWdnaW5nIG1vZGUuIEN1cnJlbnQgd29yZCBlbmRzIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgb3IgYW4gZW1wdHkgc3BhY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHBsYWluIHRleHQgc3RyaW5nIChyZW1vdmVzIGFsbCBodG1sIGZvcm1hdHRpbmcpXG4gICAqL1xuICBwcml2YXRlIGdldFdvcmRBdEN1cnNvcigpOiBzdHJpbmcge1xuICAgIGxldCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgbGV0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XG5cbiAgICBpZiAoc3RhcnQudHlwZSA9PT0gQ0tFRElUT1IuTk9ERV9URVhUICYmIHJhbmdlLnN0YXJ0T2Zmc2V0KSB7XG4gICAgICBsZXQgdGV4dCA9IHN0YXJ0LmdldFRleHQoKTtcbiAgICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0aGlzLnRhZ2dpbmdNb2RlXTtcbiAgICAgIGxldCB3b3JkU3RhcnQgPSB0ZXh0Lmxhc3RJbmRleE9mKHN5bWJvbCwgcmFuZ2Uuc3RhcnRPZmZzZXQgLSAxKTtcblxuICAgICAgaWYgKHdvcmRTdGFydCA+IDApIHtcbiAgICAgICAgbGV0IGJlZm9yZVN5bWJvbDogc3RyaW5nID0gdGV4dC5jaGFyQXQod29yZFN0YXJ0IC0gMSk7XG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gdHJpZ2dlciB0aGUgbG9va3VwIGNhbGwgdW5sZXNzIHRoZSBzeW1ib2wgd2FzIHByZWNlZGVkIGJ5IHdoaXRlc3BhY2VcbiAgICAgICAgaWYgKGJlZm9yZVN5bWJvbCAhPT0gJ1xcdTIwMEInICYmIC9cXFMvLnRlc3QoYmVmb3JlU3ltYm9sKSkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGFydC5oYXNQcmV2aW91cygpICYmIC9cXFMkLy50ZXN0KHN0YXJ0LmdldFByZXZpb3VzKCkuZ2V0VGV4dCgpKSkge1xuICAgICAgICAvLyBXaGVuIHdvcmRTdGFydCBpcyA8PSAwLCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBwcmV2aW91cyBub2RlJ3MgdGV4dCB0byBzZWUgaWYgaXQgZW5kZWQgd2l0aCB3aGl0ZXNwYWNlIG9yIG5vdFxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGxldCB3b3JkRW5kID0gdGV4dC5pbmRleE9mKCcgJywgcmFuZ2Uuc3RhcnRPZmZzZXQgKyAxKTtcbiAgICAgIGlmICh3b3JkU3RhcnQgPT09IC0xKSB7XG4gICAgICAgIHdvcmRTdGFydCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAod29yZEVuZCA9PT0gLTEpIHtcbiAgICAgICAgd29yZEVuZCA9IHRleHQubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcod29yZFN0YXJ0LCB3b3JkRW5kKTtcbiAgICB9XG5cbiAgICAvLyBTZWxlY3Rpb24gc3RhcnRzIGF0IHRoZSAwIGluZGV4IG9mIHRoZSB0ZXh0IG5vZGUgb3IgdGhlcmUncyBubyBwcmV2aW91cyB0ZXh0IG5vZGUgaW4gY29udGVudHNcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHdvcmQgdGhhdCB0aGUgdXNlciBpcyBvbiB3aXRoIHRoZSBnaXZlbiBodG1sLlxuICAgKlxuICAgKiBDS0VkaXRvciBnaXZlcyB1cyBhY2Nlc3MgdG8gdGhlIGN1cnJlbnQgbGluZSBvZiBodG1sIGluIHRoZSBlZGl0b3IsIHNvIHdlIHJlcGxhY2UgdGhlIGNvbnRlbnQgb2ZcbiAgICogdGhlIGxpbmUsIHJlcGxhY2luZyBvbmx5IHRoZSBjdXJyZW50IHdvcmQuXG4gICAqL1xuICBwcml2YXRlIHJlcGxhY2VXb3JkQXRDdXJzb3IobmV3V29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IG9yaWdpbmFsV29yZCA9IHRoaXMuZ2V0V29yZEF0Q3Vyc29yKCkudHJpbSgpO1xuICAgIGxldCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgbGV0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBzdGFydC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChzdGFydC50eXBlID09PSBDS0VESVRPUi5OT0RFX1RFWFQgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgbGV0IGxpbmUgPSBwYXJlbnROb2RlLmdldEh0bWwoKTtcbiAgICAgIGxldCBpbmRleCA9IGxpbmUubGFzdEluZGV4T2Yob3JpZ2luYWxXb3JkKTtcblxuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgLy8gQWRkIGEgc3BhY2UgYWZ0ZXIgdGhlIHJlcGxhY2VkIHdvcmQgc28gdGhhdCBtdWx0aXBsZSByZWZlcmVuY2VzIGNhbiBiZSBhZGRlZCBiYWNrIHRvIGJhY2tcbiAgICAgICAgbGV0IG5ld0xpbmUgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCkgKyBuZXdXb3JkICsgJyAnICsgbGluZS5zdWJzdHJpbmcoaW5kZXggKyBvcmlnaW5hbFdvcmQubGVuZ3RoKTtcbiAgICAgICAgcGFyZW50Tm9kZS5zZXRIdG1sKG5ld0xpbmUpO1xuXG4gICAgICAgIC8vIFBsYWNlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAgIHJhbmdlLm1vdmVUb1Bvc2l0aW9uKHBhcmVudE5vZGUsIENLRURJVE9SLlBPU0lUSU9OX0JFRk9SRV9FTkQpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLnNlbGVjdFJhbmdlcyhbcmFuZ2VdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IHJlZmVyZW5jZXMsIG1pbnVzIGFueSBmcm9tIHRoZSBtb2RlbCB0aGF0IGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIGVkaXRvci5cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVSZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIGxldCBodG1sID0gdGhpcy5ja2VJbnN0YW5jZS5kb2N1bWVudC5nZXRCb2R5KCkuZ2V0SHRtbCgpO1xuXG4gICAgLy8gQ0tFZGl0b3Igc3RvcHBlZCBzdXBwb3J0aW5nIHRoZSBjb25maWcuZm9yY2VTaW1wbGVBbXBlcnNhbmQgc2V0dGluZywgc28gd2UgaGF2ZSB0byBjb252ZXJ0ICcmYW1wOycgdG8gJyYnXG4gICAgLy8gd2hlbiB3ZSBwdWxsIGh0bWwgZnJvbSB0aGUgZWRpdG9yIC0gc2VlOiBodHRwczovL2Rldi5ja2VkaXRvci5jb20vdGlja2V0LzEzNzIzXG4gICAgbGV0IGFtcFJlZ2V4ID0gbmV3IFJlZ0V4cCgnJmFtcDsnLCAnZycpO1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoYW1wUmVnZXgsICcmJyk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLm1vZGVsLnJlZmVyZW5jZXMpLmZvckVhY2goKHRhZ2dpbmdNb2RlKSA9PiB7XG4gICAgICBsZXQgYXJyYXkgPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdIHx8IFtdO1xuICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RhZ2dpbmdNb2RlXTtcbiAgICAgIGxldCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIodGFnZ2luZ01vZGUpO1xuXG4gICAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCByZW5kZXJlZFRleHQgPSByZW5kZXJlcihzeW1ib2wsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gaHRtbC5pbmNsdWRlcyhyZW5kZXJlZFRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIG5vIHJlZmVyZW5jZXMsIHRoZW4gZGVsZXRlIHRoZSBrZXlcbiAgICAgIGlmICh0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBDS0VkaXRvciBmb3IgUXVpY2tOb3RlIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgQ0tFZGl0b3IgZHluYW1pY2FsbHkgdG8gdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlciB1cG9uIGluaXRpYWxpemF0aW9uLlxuICAgKiBSZW1vdmVzIHRoZSB0b29sYmFyIG9uIHRoZSBib3R0b20gYW5kIGNvbmZpZ3VyZXMgYSBzbGltbWVkIGRvd24gdmVyc2lvbiBvZiB0aGUgdG9vbGJhci5cbiAgICogUmVtb3ZlcyBwbHVnaW5zIGFuZCB0dXJucyBvZmYgc2V0dGluZyB0byBhbGxvdyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDS0VkaXRvckNvbmZpZygpOiBhbnkge1xuICAgIC8vIFVzZSB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVyIGVsZW1lbnQgdG8gc2V0IHRoZSBpbml0aWFsIGhlaWdodCBvZiB0aGUgZWRpdG9yLCB0aGVuXG4gICAgLy8gc2V0IGl0IHRvIDEwMCUgdG8gYWxsb3cgdGhlIGVkaXRvciB0byByZXNpemUgdXNpbmcgdGhlIGdyaXBweS5cbiAgICBsZXQgZWRpdG9ySGVpZ2h0ID0gdGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgJzEwMCUnKTtcblxuICAgIHJldHVybiB7XG4gICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgc2hpZnRFbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX1AsXG4gICAgICBkaXNhYmxlTmF0aXZlU3BlbGxDaGVja2VyOiBmYWxzZSxcbiAgICAgIGhlaWdodDogZWRpdG9ySGVpZ2h0LFxuICAgICAgc3RhcnR1cEZvY3VzOiB0aGlzLnN0YXJ0dXBGb2N1cyxcbiAgICAgIHJlbW92ZVBsdWdpbnM6ICdsaXN0c3R5bGUsdGFibGV0b29scyxjb250ZXh0bWVudScsIC8vIGFsbG93cyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nXG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYmFzaWNzdHlsZXMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAnU3R5bGVzJyxcbiAgICAgICAgICAgICdGb250U2l6ZScsXG4gICAgICAgICAgICAnQm9sZCcsXG4gICAgICAgICAgICAnSXRhbGljJyxcbiAgICAgICAgICAgICdVbmRlcmxpbmUnLFxuICAgICAgICAgICAgJ1RleHRDb2xvcicsXG4gICAgICAgICAgICAnLScsXG4gICAgICAgICAgICAnTnVtYmVyZWRMaXN0JyxcbiAgICAgICAgICAgICdCdWxsZXRlZExpc3QnLFxuICAgICAgICAgICAgJ091dGRlbnQnLFxuICAgICAgICAgICAgJ0luZGVudCcsXG4gICAgICAgICAgICAnTGluaycsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNjcmVlbiBwb3NpdGlvbiBvZiB0aGUgY3Vyc29yIGluIENLRWRpdG9yLCBhY2NvdW50aW5nIGZvciBhbnkgc2Nyb2xsaW5nIGluIHRoZSBlZGl0b3IuXG4gICAqL1xuICBwcml2YXRlIGdldEN1cnNvclBvc2l0aW9uKCk6IGFueSB7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLiQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgZWRpdG9yRWxlbWVudCA9IHRoaXMuY2tlSW5zdGFuY2UuZWRpdGFibGUoKS4kO1xuXG4gICAgLy8gU2luY2UgdGhlIGVkaXRvciBpcyBhIHRleHQgbm9kZSBpbiB0aGUgRE9NIHRoYXQgZG9lcyBub3Qga25vdyBhYm91dCBpdCdzIHBvc2l0aW9uLCBhIHRlbXBvcmFyeSBlbGVtZW50IGhhcyB0b1xuICAgIC8vIGJlIGluc2VydGVkIGluIG9yZGVyIHRvIGxvY2F0ZSB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgIGxldCBjdXJzb3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdudWxsJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3Vyc29yRWxlbWVudCk7XG4gICAgbGV0IGN1cnNvclBvc2l0aW9uID0ge1xuICAgICAgdG9wOiBjdXJzb3JFbGVtZW50Lm9mZnNldFRvcCAtIGVkaXRvckVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogY3Vyc29yRWxlbWVudC5vZmZzZXRMZWZ0IC0gZWRpdG9yRWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIH07XG4gICAgY3Vyc29yRWxlbWVudC5yZW1vdmUoKTtcblxuICAgIHJldHVybiBjdXJzb3JQb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3NpdGlvbnMgdGhlIHJlc3VsdHMgZHJvcGRvd24gYmFzZWQgb24gdGhlIGxvY2F0aW9uIG9mIHRoZSBjdXJzb3IgaW4gdGhlIHRleHQgZmllbGRcbiAgICovXG4gIHByaXZhdGUgcG9zaXRpb25SZXN1bHRzRHJvcGRvd24oKTogdm9pZCB7XG4gICAgY29uc3QgTUlOX01BUkdJTl9UT1A6IG51bWJlciA9IFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQgKiAyO1xuICAgIGNvbnN0IE1BWF9NQVJHSU5fVE9QOiBudW1iZXIgPSB0aGlzLmdldENvbnRlbnRIZWlnaHQoKSArIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG5cbiAgICBsZXQgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgbGV0IG1hcmdpblRvcDogbnVtYmVyID0gY3Vyc29yUG9zaXRpb24udG9wICsgUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcblxuICAgIC8vIENoZWNrIHRoYXQgdGhlIG1hcmdpbiBpcyB3aXRoaW4gdGhlIHZpc2libGUgYm91bmRzXG4gICAgbWFyZ2luVG9wID0gTWF0aC5tYXgobWFyZ2luVG9wLCBNSU5fTUFSR0lOX1RPUCk7XG4gICAgbWFyZ2luVG9wID0gTWF0aC5taW4obWFyZ2luVG9wLCBNQVhfTUFSR0lOX1RPUCk7XG5cbiAgICAvLyBTZXQgdGhlIG1hcmdpbi10b3Agb2YgdGhlIGRyb3Bkb3duXG4gICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWFyZ2luLXRvcCcsIG1hcmdpblRvcCArICdweCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIGNvbnRlbnQgYXJlYSAtIHRoZSB0ZXh0IHRoYXQgdGhlIHVzZXIgaGFzIGVudGVyZWQuXG4gICAqL1xuICBwcml2YXRlIGdldENvbnRlbnRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBsZXQgY29udGVudEhlaWdodDogbnVtYmVyID0gMDtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpICYmXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudCAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJCAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJC5zdHlsZVxuICAgICkge1xuICAgICAgbGV0IGNzc1RleHQ6IHN0cmluZyA9IHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGlmIChjc3NUZXh0LmluZGV4T2YoJ2hlaWdodDogJykgIT09IC0xKSB7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyA9IGNzc1RleHQuc3BsaXQoJ2hlaWdodDogJylbMV07XG4gICAgICAgIGhlaWdodCA9IGhlaWdodC5zcGxpdCgncHgnKVswXTtcbiAgICAgICAgY29udGVudEhlaWdodCA9IHBhcnNlSW50KGhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHBsYWNlaG9sZGVyIHRleHQgaWYgdGhlIGVkaXRvciBpcyBlbXB0eVxuICAgKi9cbiAgcHJpdmF0ZSBzaG93UGxhY2Vob2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNrZUluc3RhbmNlLmdldERhdGEoKSAmJiAhdGhpcy5zdGFydHVwRm9jdXMpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2VcbiAgICAgICAgLmVkaXRhYmxlKClcbiAgICAgICAgLmdldFBhcmVudCgpXG4gICAgICAgIC4kLmFwcGVuZENoaWxkKHRoaXMucGxhY2Vob2xkZXJFbGVtZW50KTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgcGxhY2Vob2xkZXIgdGV4dCBieSByZW1vdmluZyB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICovXG4gIHByaXZhdGUgaGlkZVBsYWNlaG9sZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZVxuICAgICAgICAuZWRpdGFibGUoKVxuICAgICAgICAuZ2V0UGFyZW50KClcbiAgICAgICAgLiQucmVtb3ZlQ2hpbGQodGhpcy5wbGFjZWhvbGRlckVsZW1lbnQpO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlclZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yIGNyZWF0ZSB0aGUgc2luZ2xlIHBsYWNlaG9sZGVyIG9iamVjdCB0aGF0IGlzIGNvbnN0cnVjdGVkIG9ubHkgd2hlbiBuZWVkZWQuXG4gICAqL1xuICBwcml2YXRlIGdldCBwbGFjZWhvbGRlckVsZW1lbnQoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQuY2xhc3NOYW1lID0gJ3BsYWNlaG9sZGVyJztcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgJ21hcmdpbjogMjBweDsgY29sb3I6ICNBQUFBQUE7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEzcHg7IGxpbmUtaGVpZ2h0OiAyMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMCc7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50O1xuICB9XG59XG4iXX0=