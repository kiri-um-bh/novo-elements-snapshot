/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tOb3RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3F1aWNrLW5vdGUvUXVpY2tOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixVQUFVLEVBQ1YsU0FBUyxFQUNULGdCQUFnQixFQUNoQixLQUFLLEVBQ0wsTUFBTSxFQUlOLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7OztJQUd4RSx5QkFBeUIsR0FBRztJQUNoQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDO0lBQy9DLEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFJRDtJQVVzQyw0Q0FBWTtJQXVDaEQsMEJBQW9CLElBQVksRUFBRSxPQUFtQixFQUFVLGNBQThCO1FBQTdGLFlBQ0Usa0JBQU0sT0FBTyxDQUFDLFNBU2Y7UUFWbUIsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUErQixvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUE1QjdGLGtCQUFZLEdBQVksS0FBSyxDQUFDOztRQU05QixXQUFLLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUMsVUFBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdDLFlBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FB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Ozs7SUFrQzNCLGdDQUFtQzs7SUFqQ25DLG1DQUMyQjs7SUFDM0IsZ0NBQ3dCOztJQUN4QixtQ0FDMEI7O0lBRTFCLGtDQUNZOztJQUNaLHdDQUM4Qjs7SUFDOUIsdUNBQ29COztJQUdwQixpQ0FDOEM7O0lBQzlDLGdDQUM2Qzs7SUFDN0Msa0NBQytDOzs7OztJQUcvQyw0Q0FBOEI7Ozs7O0lBQzlCLDRDQUE4Qjs7Ozs7SUFDOUIscUNBQTJCOzs7OztJQUMzQix1Q0FBNEI7Ozs7O0lBQzVCLGlDQUFtQjs7Ozs7SUFDbkIsdUNBQXlCOzs7OztJQUN6QiwyQ0FBNkI7Ozs7O0lBQzdCLDhDQUE0Qzs7Ozs7SUFDNUMsK0NBQXdDOzs7OztJQUl4Qyx5Q0FBMkM7Ozs7O0lBQzNDLDBDQUE0Qzs7Ozs7SUFFaEMsZ0NBQW9COzs7OztJQUF1QiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25EZXN0cm95LFxuICBOZ1pvbmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE91dHNpZGVDbGljayB9IGZyb20gJy4vLi4vLi4vdXRpbHMvb3V0c2lkZS1jbGljay9PdXRzaWRlQ2xpY2snO1xuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBRdWlja05vdGVSZXN1bHRzIH0gZnJvbSAnLi9leHRyYXMvcXVpY2stbm90ZS1yZXN1bHRzL1F1aWNrTm90ZVJlc3VsdHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgUVVJQ0tfTk9URV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFF1aWNrTm90ZUVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcXVpY2stbm90ZScsXG4gIHByb3ZpZGVyczogW1FVSUNLX05PVEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicXVpY2stbm90ZS13cmFwcGVyXCIgI3dyYXBwZXI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgI2hvc3Q+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxzcGFuICNyZXN1bHRzPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUXVpY2tOb3RlRWxlbWVudCBleHRlbmRzIE91dHNpZGVDbGljayBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnd3JhcHBlcicpXG4gIHB1YmxpYyB3cmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdob3N0JylcbiAgcHVibGljIGhvc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdHMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgcmVzdWx0czogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBjb25maWc6IGFueTtcbiAgQElucHV0KClcbiAgc3RhcnR1cEZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgLy8gRW1pdHRlciBmb3Igc2VsZWN0c1xuICBAT3V0cHV0KClcbiAgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIFRoZSBjaGFyYWN0ZXJzIHRoYXQgdGhlIHVzZXIgZW50ZXJzIGluIG9yZGVyIHRvIHNlYXJjaCBmb3IgYSBwZXJzb24vdGhpbmcgdG8gdGFnXG4gIHByaXZhdGUgcmVzdWx0c0NvbXBvbmVudDogYW55O1xuICBwcml2YXRlIHF1aWNrTm90ZVJlc3VsdHM6IGFueTtcbiAgcHJpdmF0ZSBpc1RhZ2dpbmc6IGJvb2xlYW47XG4gIHByaXZhdGUgdGFnZ2luZ01vZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBtb2RlbDogYW55O1xuICBwcml2YXRlIGNrZUluc3RhbmNlOiBhbnk7XG4gIHByaXZhdGUgZGVib3VuY2VUaW1lb3V0OiBhbnk7XG4gIHByaXZhdGUgcGxhY2Vob2xkZXJWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyRWxlbWVudDogYW55ID0gbnVsbDtcblxuICBwcml2YXRlIHN0YXRpYyBUT09MQkFSX0hFSUdIVCA9IDQwOyAvLyBpbiBwaXhlbHMgLSBjb25maWd1cmVkIGJ5IHN0eWxlc2hlZXRcblxuICBwcml2YXRlIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7XG4gICAgc3VwZXIoZWxlbWVudCk7XG4gICAgLy8gQmluZCB0byB0aGUgYWN0aXZlIGNoYW5nZSBldmVudCBmcm9tIHRoZSBPdXRzaWRlQ2xpY2tcbiAgICB0aGlzLm9uQWN0aXZlQ2hhbmdlLnN1YnNjcmliZSgoYWN0aXZlKSA9PiB7XG4gICAgICBpZiAoIWFjdGl2ZSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGEgcHJvcGVyIGNvbmZpZ1xuICAgIGlmICghdGhpcy5jb25maWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29uZmlnIHNldCBmb3IgUXVpY2tOb3RlIScpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIHRyaWdnZXJzXG4gICAgaWYgKCF0aGlzLmNvbmZpZy50cmlnZ2Vycykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdRdWlja05vdGUgY29uZmlnIG11c3Qgc3VwcGx5IHRyaWdnZXJzIScpO1xuICAgIH1cbiAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSBoYXZlIG9wdGlvbnNcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUXVpY2tOb3RlIGNvbmZpZyBtdXN0IHN1cHBseSBvcHRpb25zIScpO1xuICAgIH1cbiAgICAvLyBBbGxvdyBmb3IgY2FsbGVycyB0byB1c2UgYSBjdXN0b20gcmVzdWx0cyB0ZW1wbGF0ZSBjbGFzcyBpbiB0aGUgY29uZmlnXG4gICAgdGhpcy5yZXN1bHRzQ29tcG9uZW50ID0gdGhpcy5jb25maWcucmVzdWx0c1RlbXBsYXRlIHx8IFF1aWNrTm90ZVJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gVGVhciBkb3duIHRoZSBDS0VkaXRvciBpbnN0YW5jZVxuICAgIGlmICh0aGlzLmNrZUluc3RhbmNlKSB7XG4gICAgICB0aGlzLmNrZUluc3RhbmNlLmZvY3VzTWFuYWdlci5ibHVyKHRydWUpOyAvLyBSZW1vdmUgZm9jdXMgZnJvbSBlZGl0b3JcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgICAgICBDS0VESVRPUi5pbnN0YW5jZXNbdGhpcy5ja2VJbnN0YW5jZS5uYW1lXS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb25uZWN0IHRvIGtleS9tb3VzZSBldmVudHMgZnJvbSBDS0VkaXRvciBhZnRlciB0aGUgZWRpdG9yIGhhcyBiZWVuIGluaXRpYWxpemVkXG4gICAqL1xuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICghQ0tFRElUT1IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01ha2Ugc3VyZSB0byBpbmNsdWRlIENLRWRpdG9yIHNvdXJjZXMgaW4geW91ciBkZXBlbmRlbmNpZXMhJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVwbGFjZSB0aGUgdGV4dGFyZWEgd2l0aCBhbiBpbnN0YW5jZSBvZiBDS0VkaXRvclxuICAgIHRoaXMuY2tlSW5zdGFuY2UgPSBDS0VESVRPUi5yZXBsYWNlKHRoaXMuaG9zdC5uYXRpdmVFbGVtZW50LCB0aGlzLmdldENLRWRpdG9yQ29uZmlnKCkpO1xuXG4gICAgLy8gU2V0IGluaXRpYWwgdmFsdWUgb2YgdGhlIG5vdGUgaW4gdGhlIGVkaXRvclxuICAgIHRoaXMud3JpdGVWYWx1ZSh0aGlzLm1vZGVsKTtcblxuICAgIC8vIENvbm5lY3QgdG8gdGhlIGtleSBldmVudCBpbiBDS0VkaXRvciBmb3Igc2hvd2luZyByZXN1bHRzIGRyb3Bkb3duXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbigna2V5JywgKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIGlmICghdGhpcy5vbktleShldmVudC5kYXRhLmRvbUV2ZW50LiQpKSB7XG4gICAgICAgIGV2ZW50LmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgY2hhbmdlIGV2ZW50IGluIENLRWRpdG9yIGZvciBkZWJvdW5jaW5nIHVzZXIgbW9kaWZpY2F0aW9uc1xuICAgIHRoaXMuY2tlSW5zdGFuY2Uub24oJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIC8vIERlYm91bmNlIHVwZGF0ZVxuICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSdW4gd2l0aGluIHRoZSBjb250ZXh0IG9mIHRoaXMgYW5ndWxhciBlbGVtZW50IHNpbmNlIHdlIGRvbid0IG5lZWQgdG8gY2FuY2VsIGV2ZW50XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgfSwgMjUwKTtcbiAgICB9KTtcblxuICAgIC8vIFByb3BhZ2F0ZSBibHVyIGV2ZW50cyBmcm9tIENLRWRpdG9yIHRvIHRoZSBFbGVtZW50J3MgbGlzdGVuZXJzXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignYmx1cicsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlcigpO1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgLy8gUHJvcGFnYXRlIGJsdXIgZXZlbnRzIGZyb20gQ0tFZGl0b3IgdG8gdGhlIEVsZW1lbnQncyBsaXN0ZW5lcnNcbiAgICB0aGlzLmNrZUluc3RhbmNlLm9uKCdmb2N1cycsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmhpZGVQbGFjZWhvbGRlcigpO1xuICAgICAgdGhpcy5mb2N1cy5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIC8vIFNob3cgcGxhY2Vob2xkZXIgaWYgdGhlIG5vdGUgaXMgZW1wdHksIGFmdGVyIHRoZSBlZGl0b3IgaXMgaW5zdGFudGlhdGVkXG4gICAgdGhpcy5ja2VJbnN0YW5jZS5vbignaW5zdGFuY2VSZWFkeScsIChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLnNob3dQbGFjZWhvbGRlcigpO1xuICAgICAgLy8gU2V0IGVkaXRvciB0byByZWFkT25seVxuICAgICAgaWYgKHRoaXMuY29uZmlnLnJlYWRPbmx5KSB7XG4gICAgICAgIHRoaXMuY2tlSW5zdGFuY2Uuc2V0UmVhZE9ubHkodGhpcy5jb25maWcucmVhZE9ubHkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2V0IHRvdWNoZWQgb24gYmx1clxuICBwdWJsaWMgb25Ub3VjaGVkKGV2ZW50PzogYW55KSB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgc2V0dGluZyB0aGUgbW9kZWwgYW5kIHRoZSB2aWV3IGZyb20gdGhlIG91dHNpZGUgY2FsbGVyIG9yIHRoZSB1c2VyJ3MgdHlwaW5nXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbCBBIG1vZGVsIHRoYXQgaGFzIGEgbm90ZSAoaHRtbCBjb250ZW50KSBhbmQgcmVmZXJlbmNlcyAoYXJyYXkgb2Ygb2JqZWN0cylcbiAgICovXG4gIHB1YmxpYyB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICAvLyBTZXQgdmFsdWUgb2YgdGhlIG1vZGVsXG4gICAgaWYgKG1vZGVsICYmIChtb2RlbC5yZWZlcmVuY2VzIHx8IG1vZGVsLm5vdGUpKSB7XG4gICAgICB0aGlzLm1vZGVsID0ge1xuICAgICAgICBub3RlOiBtb2RlbC5ub3RlIHx8ICcnLFxuICAgICAgICByZWZlcmVuY2VzOiBtb2RlbC5yZWZlcmVuY2VzIHx8IHt9LFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tb2RlbCA9IHtcbiAgICAgICAgbm90ZTogbW9kZWwsXG4gICAgICAgIHJlZmVyZW5jZXM6IHt9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBTZXQgdGhlIG5vdGUgaHRtbCB2YWx1ZSBpbiB0aGUgZWRpdG9yXG4gICAgaWYgKHRoaXMuY2tlSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2Uuc2V0RGF0YSh0aGlzLm1vZGVsLm5vdGUpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBhIHJlbmRlcmVyIGlzIG5vdCBwcm92aWRlZCwgdGhlIFF1aWNrTm90ZSB3aWxsIGRlZmF1bHQgdG8gdXNpbmcgdGhpcyBvbmUsIGFuIGFuY2hvciB0YWcgd2l0aCBubyBocmVmXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBkZWZhdWx0UmVuZGVyZXIoc3ltYm9sOiBzdHJpbmcsIGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGA8YT4ke3N5bWJvbH0ke2l0ZW0ubGFiZWx9PC9hPmA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVuZGVyZXIgZm9yIGEgZ2l2ZW4gdGFnZ2luZyBtb2RlIGlmIGl0IGV4aXN0cyBpbiB0aGUgY29uZmlnLCBvdGhlcndpc2UgdGhlIGRlZmF1bHQuXG4gICAqL1xuICBwcml2YXRlIGdldFJlbmRlcmVyKHRhZ2dpbmdNb2RlOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5yZW5kZXJlciA/IHRoaXMuY29uZmlnLnJlbmRlcmVyW3RhZ2dpbmdNb2RlXSA6IFF1aWNrTm90ZUVsZW1lbnQuZGVmYXVsdFJlbmRlcmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBldmVyeSB0aW1lIGEga2V5c3Ryb2tlIGlzIG1hZGUgaW4gdGhlIGVkaXRvci4gTGlzdGVucyBmb3IgcGFydGljdWxhciBrZXlzIChlLmcuIFVQIGFycm93LCBFU0MsIGV0Yy4pXG4gICAqIHRvIGhhbmRsZSBjZXJ0YWluIGJlaGF2aW9ycyBvZiB0aGUgcGlja2VyLlxuICAgKlxuICAgKiBSdW5zIHdpdGhpbiB0aGUgY29udGV4dCBvZiB0aGUgQ0tFZGl0b3IsIHNvIGFjdGlvbnMgdGhhdCBhZmZlY3QgdGhlIHZpZXcgaGF2ZSB0byBiZSBydW4gYmFjayBpbnNpZGUgb2YgdGhlXG4gICAqIEFuZ3VsYXIgem9uZSBvZiB0aGlzIGNsYXNzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnQgVGhlIGtleSBwcmVzcyBldmVudFxuICAgKiBAcmV0dXJuIHRydWUgdG8gYWxsb3cgdGhlIGV2ZW50IHRvIG9jY3VyLCBmYWxzZSB0byBjYW5jZWwgdGhlIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKGV2ZW50LmtleSkge1xuICAgICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgICAvLyBIaWRlIHJlc3VsdHMgb24gZXNjYXBlIGtleVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRVNDKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGVSZXN1bHRzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTmF2aWdhdGlvbiBpbnNpZGUgdGhlIHJlc3VsdHNcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlVQKSB7XG4gICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UucHJldkFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLkRPV04pIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZXMuRU5URVIpIHtcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5pbnN0YW5jZS5zZWxlY3RBY3RpdmVNYXRjaCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCB0cmlnZ2VycyBhbmQgdHVybiBvbiB0YWdnaW5nIG1vZGUgaWYgdGhlIHVzZXIganVzdCBwcmVzc2VkIGEgdHJpZ2dlciBjaGFyYWN0ZXJcbiAgICAgICAgbGV0IHRyaWdnZXJzID0gdGhpcy5jb25maWcudHJpZ2dlcnMgfHwge307XG4gICAgICAgIE9iamVjdC5rZXlzKHRyaWdnZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBsZXQgdHJpZ2dlciA9IHRyaWdnZXJzW2tleV0gfHwge307XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gdHJpZ2dlcikge1xuICAgICAgICAgICAgdGhpcy5pc1RhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy50YWdnaW5nTW9kZSA9IGtleTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWJvdW5jZWQgbWV0aG9kIHRoYXQgaXMgcnVuIGluIHRoZSBwcm9wZXIgQW5ndWxhciBjb250ZXh0IHdoZW4gdGhlIHVzZXIgaGFzIG1vZGlmaWVkIHRoZSBDS0VkaXRvci5cbiAgICogQWZ0ZXIgdGhlIHZhbHVlIGhhcyBiZWVuIHVwZGF0ZWQgaW4gQ0tFZGl0b3IsIHRoaXMgd2lsbCBwcm9wYWdhdGUgdGhhdCBjaGFuZ2UgdG8gdGhlIG1vZGVsIGFuZCBsaXN0ZW5lcnMuXG4gICAqL1xuICBwcml2YXRlIG9uVmFsdWVDaGFuZ2UoKTogdm9pZCB7XG4gICAgLy8gR2V0IHRoZSBodG1sIHRleHQgaW4gQ0tFZGl0b3JcbiAgICBsZXQgdmFsdWUgPSB0aGlzLmNrZUluc3RhbmNlLmdldERhdGEoKTtcblxuICAgIC8vIFJlbW92ZSBlbXB0eSAnWkVSTyBXSURUSCBTUEFDRScgY2hhcmFjdGVycyB0aGF0IGNhbiBnZXQgYWRkZWQgZXJyb25lb3VzbHkgYnkgdGhlIGVkaXRvclxuICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoU3RyaW5nLmZyb21DaGFyQ29kZSg4MjAzKSwgJ2cnKTtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblxuICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGFueSByZWZlcmVuY2VzIGluIHRoZSBtb2RlbCBhcmUgc3RpbGwgdmFsaWRcbiAgICB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlcygpO1xuXG4gICAgLy8gUG9zc2libHkgc2hvdyByZXN1bHRzIGlmIHRoZSB1c2VyIGhhcyBlbnRlcmVkIGEgc2VhcmNoIHRlcm1cbiAgICB0aGlzLnNob3dSZXN1bHRzKCk7XG5cbiAgICAvLyBQcm9wYWdhdGUgY2hhbmdlIHRvIG5nTW9kZWwgZm9yIGZvcm0gdmFsaWRhdGlvbiwgYW5kIHNlbmQgbnVsbCBpZiB0aGUgbm90ZSBpcyBlbXB0eVxuICAgIGxldCBuZXdNb2RlbCA9IG51bGw7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdNb2RlbCA9IHtcbiAgICAgICAgbm90ZTogdmFsdWUsXG4gICAgICAgIHJlZmVyZW5jZXM6IHRoaXMubW9kZWwucmVmZXJlbmNlcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSW5mb3JtIGxpc3RlbmVycyB0byB0aGUgbmdNb2RlbCBjaGFuZ2UgZXZlbnQgdGhhdCBzb21ldGhpbmcgaGFzIGNoYW5nZWRcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UobmV3TW9kZWwpO1xuXG4gICAgLy8gSW5mb3JtIGxpc3RlbmVycyBvZiB0aGUgYEBPdXRwdXQoKSBjaGFuZ2VgIGV2ZW50IHRoYXQgdGhlIG1vZGVsIGhhcyBiZWVuIHVwZGF0ZWRcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG5ld01vZGVsKTtcblxuICAgIC8vIEluZm9ybSBsaXN0ZW5lcnMgdG8gdGhlIG5nTW9kZWwgdG91Y2hlZCBldmVudCB0aGF0IHNvbWV0aGluZyBoYXMgY2hhbmdlZFxuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgcmVzdWx0cyAoY2FsbGVkIHBvcHVwKSBhbmQgYWRkcyBhbGwgdGhlIGJpbmRpbmdzIHRvIHRoYXQgaW5zdGFuY2UuXG4gICAqL1xuICBwcml2YXRlIHNob3dSZXN1bHRzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnZ2luZykge1xuICAgICAgbGV0IHNlYXJjaFRlcm0gPSB0aGlzLmdldFNlYXJjaFRlcm0oKTtcbiAgICAgIGlmIChzZWFyY2hUZXJtLmxlbmd0aCkge1xuICAgICAgICAvLyBVcGRhdGUgTWF0Y2hlc1xuICAgICAgICBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICAgICAgLy8gVXBkYXRlIGV4aXN0aW5nIGxpc3RcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UudGVybSA9IHtcbiAgICAgICAgICAgIHNlYXJjaFRlcm06IHNlYXJjaFRlcm0sXG4gICAgICAgICAgICB0YWdnaW5nTW9kZTogdGhpcy50YWdnaW5nTW9kZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIENyZWF0ZSB0aGUgcmVzdWx0cyBET00gZWxlbWVudFxuICAgICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRoaXMucmVzdWx0c0NvbXBvbmVudCwgdGhpcy5yZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UucGFyZW50ID0gdGhpcztcbiAgICAgICAgICB0aGlzLnF1aWNrTm90ZVJlc3VsdHMuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLnRlcm0gPSB7XG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBzZWFyY2hUZXJtLFxuICAgICAgICAgICAgdGFnZ2luZ01vZGU6IHRoaXMudGFnZ2luZ01vZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uUmVzdWx0c0Ryb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5xdWlja05vdGVSZXN1bHRzKSB7XG4gICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cy5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFRlbGwgdGhlIE91dHNpZGVDbGljayBiYXNlIGNsYXNzIHRvIHN0YXJ0IGxpc3RlbmluZyBmb3IgYW4gb3V0c2lkZSBjbGlja3NcbiAgICAgIHRoaXMudG9nZ2xlQWN0aXZlKG51bGwsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSBwaWNrZXIgcmVzdWx0cyBmcm9tIHRoZSBET00uXG4gICAqL1xuICBwcml2YXRlIGhpZGVSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMuaXNUYWdnaW5nID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucXVpY2tOb3RlUmVzdWx0cykge1xuICAgICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMucXVpY2tOb3RlUmVzdWx0cyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgdGhlIHNlbGVjdGlvbiBmcm9tIHRoZSBRdWlja05vdGVSZXN1bHRzIENvbXBvbmVudC4gQ2FsbGVkIGJ5IHRoZSBRdWlja05vdGVSZXN1bHRzIGNvbXBvbmVudCBvbiBpdCdzXG4gICAqIHBhcmVudCAodGhpcyBlbGVtZW50KS5cbiAgICpcbiAgICogQHBhcmFtIHRhZ2dpbmdNb2RlIC0gdHlwZSBvZiB0YWdzIHdlIGFyZSBsb29raW5nIGZvclxuICAgKiBAcGFyYW0gc2VsZWN0ZWQgLSBzZWxlY3RlZCBvYmplY3QgZnJvbSB0aGUgcGlja2VyIHRoYXQgaGFzIGEgbGFiZWwgYW5kIHZhbHVlXG4gICAqL1xuICBwcml2YXRlIG9uU2VsZWN0ZWQodGFnZ2luZ01vZGU6IHN0cmluZywgc2VsZWN0ZWQ6IGFueSk6IHZvaWQge1xuICAgIC8vIFR1cm4gb2ZmIHRhZ2dpbmdcbiAgICB0aGlzLmlzVGFnZ2luZyA9IGZhbHNlO1xuXG4gICAgLy8gUmVwbGFjZSBzZWFyY2hUZXJtIHdpdGggbGlua1xuICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0YWdnaW5nTW9kZV07XG4gICAgbGV0IHJlbmRlcmVyID0gdGhpcy5nZXRSZW5kZXJlcih0YWdnaW5nTW9kZSk7XG4gICAgbGV0IHJlbmRlcmVkVGV4dCA9IHJlbmRlcmVyKHN5bWJvbCwgc2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5yZXBsYWNlV29yZEF0Q3Vyc29yKHJlbmRlcmVkVGV4dCk7XG5cbiAgICAvLyBBZGQgdGhlIG5ldyByZWZlcmVuY2UsIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgIHRoaXMubW9kZWwucmVmZXJlbmNlcyA9IHRoaXMubW9kZWwucmVmZXJlbmNlcyB8fCB7fTtcbiAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdID0gdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXSB8fCBbXTtcbiAgICBsZXQgbWF0Y2hpbmdJdGVtcyA9IHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0uZmlsdGVyKChpdGVtKSA9PiBKU09OLnN0cmluZ2lmeShpdGVtKSA9PT0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWQpKTtcbiAgICBpZiAobWF0Y2hpbmdJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMubW9kZWwucmVmZXJlbmNlc1t0YWdnaW5nTW9kZV0ucHVzaChzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHRoZSBxdWljayBub3RlIHdpdGggdGhlIGNoYW5nZXMgZHVlIHRvIHRoZSB1c2VyJ3Mgc2VsZWN0aW9uIG9mIGFuIGl0ZW0gaW4gdGhlIGRyb3Bkb3duXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIHRoYXQgZ2V0cyB0aGUgY3VycmVudCB3b3JkIHRoYXQgdGhlIGN1cnNvciBpcyBvbiwgbWludXMgdGhlIHRhZy5cbiAgICogQWxzbywgdHJpbXMgYW55IHdoaXRlc3BhY2UgYmVmb3JlL2FmdGVyIHRoZSB0ZXJtIHRvIGFpZCBpbiBzZWFyY2hpbmcuXG4gICAqL1xuICBwcml2YXRlIGdldFNlYXJjaFRlcm0oKTogc3RyaW5nIHtcbiAgICBsZXQgd29yZCA9IHRoaXMuZ2V0V29yZEF0Q3Vyc29yKCkudHJpbSgpO1xuICAgIGlmICh0aGlzLmlzVGFnZ2luZykge1xuICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RoaXMudGFnZ2luZ01vZGVdO1xuICAgICAgaWYgKCF3b3JkLmluY2x1ZGVzKHN5bWJvbCkpIHtcbiAgICAgICAgdGhpcy5oaWRlUmVzdWx0cygpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICB3b3JkID0gd29yZC5zbGljZSh3b3JkLmluZGV4T2Yoc3ltYm9sKSArIHN5bWJvbC5sZW5ndGgpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBjdXJyZW50IHdvcmQgdGhhdCB0aGUgY3Vyc29yIGlzIG9uIENLRWRpdG9yLiBDdXJyZW50IHdvcmQgc3RhcnRzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmUgb3IgYVxuICAgKiB0YWcgY2hhcmFjdGVyIGlmIHdlIGFyZSBpbiB0YWdnaW5nIG1vZGUuIEN1cnJlbnQgd29yZCBlbmRzIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgb3IgYW4gZW1wdHkgc3BhY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHBsYWluIHRleHQgc3RyaW5nIChyZW1vdmVzIGFsbCBodG1sIGZvcm1hdHRpbmcpXG4gICAqL1xuICBwcml2YXRlIGdldFdvcmRBdEN1cnNvcigpOiBzdHJpbmcge1xuICAgIGxldCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgbGV0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XG5cbiAgICBpZiAoc3RhcnQudHlwZSA9PT0gQ0tFRElUT1IuTk9ERV9URVhUICYmIHJhbmdlLnN0YXJ0T2Zmc2V0KSB7XG4gICAgICBsZXQgdGV4dCA9IHN0YXJ0LmdldFRleHQoKTtcbiAgICAgIGxldCBzeW1ib2wgPSB0aGlzLmNvbmZpZy50cmlnZ2Vyc1t0aGlzLnRhZ2dpbmdNb2RlXTtcbiAgICAgIGxldCB3b3JkU3RhcnQgPSB0ZXh0Lmxhc3RJbmRleE9mKHN5bWJvbCwgcmFuZ2Uuc3RhcnRPZmZzZXQgLSAxKTtcblxuICAgICAgaWYgKHdvcmRTdGFydCA+IDApIHtcbiAgICAgICAgbGV0IGJlZm9yZVN5bWJvbDogc3RyaW5nID0gdGV4dC5jaGFyQXQod29yZFN0YXJ0IC0gMSk7XG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gdHJpZ2dlciB0aGUgbG9va3VwIGNhbGwgdW5sZXNzIHRoZSBzeW1ib2wgd2FzIHByZWNlZGVkIGJ5IHdoaXRlc3BhY2VcbiAgICAgICAgaWYgKGJlZm9yZVN5bWJvbCAhPT0gJ1xcdTIwMEInICYmIC9cXFMvLnRlc3QoYmVmb3JlU3ltYm9sKSkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzdGFydC5oYXNQcmV2aW91cygpICYmIC9cXFMkLy50ZXN0KHN0YXJ0LmdldFByZXZpb3VzKCkuZ2V0VGV4dCgpKSkge1xuICAgICAgICAvLyBXaGVuIHdvcmRTdGFydCBpcyA8PSAwLCB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBwcmV2aW91cyBub2RlJ3MgdGV4dCB0byBzZWUgaWYgaXQgZW5kZWQgd2l0aCB3aGl0ZXNwYWNlIG9yIG5vdFxuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGxldCB3b3JkRW5kID0gdGV4dC5pbmRleE9mKCcgJywgcmFuZ2Uuc3RhcnRPZmZzZXQgKyAxKTtcbiAgICAgIGlmICh3b3JkU3RhcnQgPT09IC0xKSB7XG4gICAgICAgIHdvcmRTdGFydCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAod29yZEVuZCA9PT0gLTEpIHtcbiAgICAgICAgd29yZEVuZCA9IHRleHQubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGV4dC5zdWJzdHJpbmcod29yZFN0YXJ0LCB3b3JkRW5kKTtcbiAgICB9XG5cbiAgICAvLyBTZWxlY3Rpb24gc3RhcnRzIGF0IHRoZSAwIGluZGV4IG9mIHRoZSB0ZXh0IG5vZGUgb3IgdGhlcmUncyBubyBwcmV2aW91cyB0ZXh0IG5vZGUgaW4gY29udGVudHNcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHdvcmQgdGhhdCB0aGUgdXNlciBpcyBvbiB3aXRoIHRoZSBnaXZlbiBodG1sLlxuICAgKlxuICAgKiBDS0VkaXRvciBnaXZlcyB1cyBhY2Nlc3MgdG8gdGhlIGN1cnJlbnQgbGluZSBvZiBodG1sIGluIHRoZSBlZGl0b3IsIHNvIHdlIHJlcGxhY2UgdGhlIGNvbnRlbnQgb2ZcbiAgICogdGhlIGxpbmUsIHJlcGxhY2luZyBvbmx5IHRoZSBjdXJyZW50IHdvcmQuXG4gICAqL1xuICBwcml2YXRlIHJlcGxhY2VXb3JkQXRDdXJzb3IobmV3V29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IG9yaWdpbmFsV29yZCA9IHRoaXMuZ2V0V29yZEF0Q3Vyc29yKCkudHJpbSgpO1xuICAgIGxldCByYW5nZSA9IHRoaXMuY2tlSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCkuZ2V0UmFuZ2VzKClbMF07XG4gICAgbGV0IHN0YXJ0ID0gcmFuZ2Uuc3RhcnRDb250YWluZXI7XG4gICAgbGV0IHBhcmVudE5vZGUgPSBzdGFydC5nZXRQYXJlbnQoKTtcblxuICAgIGlmIChzdGFydC50eXBlID09PSBDS0VESVRPUi5OT0RFX1RFWFQgJiYgcGFyZW50Tm9kZSkge1xuICAgICAgbGV0IGxpbmUgPSBwYXJlbnROb2RlLmdldEh0bWwoKTtcbiAgICAgIGxldCBpbmRleCA9IGxpbmUubGFzdEluZGV4T2Yob3JpZ2luYWxXb3JkKTtcblxuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgLy8gQWRkIGEgc3BhY2UgYWZ0ZXIgdGhlIHJlcGxhY2VkIHdvcmQgc28gdGhhdCBtdWx0aXBsZSByZWZlcmVuY2VzIGNhbiBiZSBhZGRlZCBiYWNrIHRvIGJhY2tcbiAgICAgICAgbGV0IG5ld0xpbmUgPSBsaW5lLnN1YnN0cmluZygwLCBpbmRleCkgKyBuZXdXb3JkICsgJyAnICsgbGluZS5zdWJzdHJpbmcoaW5kZXggKyBvcmlnaW5hbFdvcmQubGVuZ3RoKTtcbiAgICAgICAgcGFyZW50Tm9kZS5zZXRIdG1sKG5ld0xpbmUpO1xuXG4gICAgICAgIC8vIFBsYWNlIHNlbGVjdGlvbiBhdCB0aGUgZW5kIG9mIHRoZSBsaW5lXG4gICAgICAgIHJhbmdlLm1vdmVUb1Bvc2l0aW9uKHBhcmVudE5vZGUsIENLRURJVE9SLlBPU0lUSU9OX0JFRk9SRV9FTkQpO1xuICAgICAgICB0aGlzLmNrZUluc3RhbmNlLmdldFNlbGVjdGlvbigpLnNlbGVjdFJhbmdlcyhbcmFuZ2VdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBjdXJyZW50IHJlZmVyZW5jZXMsIG1pbnVzIGFueSBmcm9tIHRoZSBtb2RlbCB0aGF0IGhhdmUgYmVlbiByZW1vdmVkIGZyb20gdGhlIGVkaXRvci5cbiAgICovXG4gIHByaXZhdGUgdmFsaWRhdGVSZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIGxldCBodG1sID0gdGhpcy5ja2VJbnN0YW5jZS5kb2N1bWVudC5nZXRCb2R5KCkuZ2V0SHRtbCgpO1xuXG4gICAgLy8gQ0tFZGl0b3Igc3RvcHBlZCBzdXBwb3J0aW5nIHRoZSBjb25maWcuZm9yY2VTaW1wbGVBbXBlcnNhbmQgc2V0dGluZywgc28gd2UgaGF2ZSB0byBjb252ZXJ0ICcmYW1wOycgdG8gJyYnXG4gICAgLy8gd2hlbiB3ZSBwdWxsIGh0bWwgZnJvbSB0aGUgZWRpdG9yIC0gc2VlOiBodHRwczovL2Rldi5ja2VkaXRvci5jb20vdGlja2V0LzEzNzIzXG4gICAgbGV0IGFtcFJlZ2V4ID0gbmV3IFJlZ0V4cCgnJmFtcDsnLCAnZycpO1xuICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoYW1wUmVnZXgsICcmJyk7XG5cbiAgICBPYmplY3Qua2V5cyh0aGlzLm1vZGVsLnJlZmVyZW5jZXMpLmZvckVhY2goKHRhZ2dpbmdNb2RlKSA9PiB7XG4gICAgICBsZXQgYXJyYXkgPSB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdIHx8IFtdO1xuICAgICAgbGV0IHN5bWJvbCA9IHRoaXMuY29uZmlnLnRyaWdnZXJzW3RhZ2dpbmdNb2RlXTtcbiAgICAgIGxldCByZW5kZXJlciA9IHRoaXMuZ2V0UmVuZGVyZXIodGFnZ2luZ01vZGUpO1xuXG4gICAgICB0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdID0gYXJyYXkuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICAgIGxldCByZW5kZXJlZFRleHQgPSByZW5kZXJlcihzeW1ib2wsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gaHRtbC5pbmNsdWRlcyhyZW5kZXJlZFRleHQpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIG5vIHJlZmVyZW5jZXMsIHRoZW4gZGVsZXRlIHRoZSBrZXlcbiAgICAgIGlmICh0aGlzLm1vZGVsLnJlZmVyZW5jZXNbdGFnZ2luZ01vZGVdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkZWxldGUgdGhpcy5tb2RlbC5yZWZlcmVuY2VzW3RhZ2dpbmdNb2RlXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIHRoZSBDS0VkaXRvciBmb3IgUXVpY2tOb3RlIGZ1bmN0aW9uYWxpdHkuXG4gICAqXG4gICAqIFNldHMgdGhlIGhlaWdodCBvZiB0aGUgQ0tFZGl0b3IgZHluYW1pY2FsbHkgdG8gdGhlIGhlaWdodCBvZiB0aGUgd3JhcHBlciB1cG9uIGluaXRpYWxpemF0aW9uLlxuICAgKiBSZW1vdmVzIHRoZSB0b29sYmFyIG9uIHRoZSBib3R0b20gYW5kIGNvbmZpZ3VyZXMgYSBzbGltbWVkIGRvd24gdmVyc2lvbiBvZiB0aGUgdG9vbGJhci5cbiAgICogUmVtb3ZlcyBwbHVnaW5zIGFuZCB0dXJucyBvZmYgc2V0dGluZyB0byBhbGxvdyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDS0VkaXRvckNvbmZpZygpOiBhbnkge1xuICAgIC8vIFVzZSB0aGUgaGVpZ2h0IG9mIHRoZSB3cmFwcGVyIGVsZW1lbnQgdG8gc2V0IHRoZSBpbml0aWFsIGhlaWdodCBvZiB0aGUgZWRpdG9yLCB0aGVuXG4gICAgLy8gc2V0IGl0IHRvIDEwMCUgdG8gYWxsb3cgdGhlIGVkaXRvciB0byByZXNpemUgdXNpbmcgdGhlIGdyaXBweS5cbiAgICBsZXQgZWRpdG9ySGVpZ2h0ID0gdGhpcy53cmFwcGVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcbiAgICB0aGlzLndyYXBwZXIubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnaGVpZ2h0JywgJzEwMCUnKTtcblxuICAgIHJldHVybiB7XG4gICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgc2hpZnRFbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX1AsXG4gICAgICBkaXNhYmxlTmF0aXZlU3BlbGxDaGVja2VyOiBmYWxzZSxcbiAgICAgIGhlaWdodDogZWRpdG9ySGVpZ2h0LFxuICAgICAgc3RhcnR1cEZvY3VzOiB0aGlzLnN0YXJ0dXBGb2N1cyxcbiAgICAgIHJlbW92ZVBsdWdpbnM6ICdsaXN0c3R5bGUsdGFibGV0b29scyxjb250ZXh0bWVudScsIC8vIGFsbG93cyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nXG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnYmFzaWNzdHlsZXMnLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAnU3R5bGVzJyxcbiAgICAgICAgICAgICdGb250U2l6ZScsXG4gICAgICAgICAgICAnQm9sZCcsXG4gICAgICAgICAgICAnSXRhbGljJyxcbiAgICAgICAgICAgICdVbmRlcmxpbmUnLFxuICAgICAgICAgICAgJ1RleHRDb2xvcicsXG4gICAgICAgICAgICAnLScsXG4gICAgICAgICAgICAnTnVtYmVyZWRMaXN0JyxcbiAgICAgICAgICAgICdCdWxsZXRlZExpc3QnLFxuICAgICAgICAgICAgJ091dGRlbnQnLFxuICAgICAgICAgICAgJ0luZGVudCcsXG4gICAgICAgICAgICAnTGluaycsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHNjcmVlbiBwb3NpdGlvbiBvZiB0aGUgY3Vyc29yIGluIENLRWRpdG9yLCBhY2NvdW50aW5nIGZvciBhbnkgc2Nyb2xsaW5nIGluIHRoZSBlZGl0b3IuXG4gICAqL1xuICBwcml2YXRlIGdldEN1cnNvclBvc2l0aW9uKCk6IGFueSB7XG4gICAgbGV0IHJhbmdlID0gdGhpcy5ja2VJbnN0YW5jZS5nZXRTZWxlY3Rpb24oKS5nZXRSYW5nZXMoKVswXTtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyLiQucGFyZW50RWxlbWVudDtcbiAgICBsZXQgZWRpdG9yRWxlbWVudCA9IHRoaXMuY2tlSW5zdGFuY2UuZWRpdGFibGUoKS4kO1xuXG4gICAgLy8gU2luY2UgdGhlIGVkaXRvciBpcyBhIHRleHQgbm9kZSBpbiB0aGUgRE9NIHRoYXQgZG9lcyBub3Qga25vdyBhYm91dCBpdCdzIHBvc2l0aW9uLCBhIHRlbXBvcmFyeSBlbGVtZW50IGhhcyB0b1xuICAgIC8vIGJlIGluc2VydGVkIGluIG9yZGVyIHRvIGxvY2F0ZSB0aGUgY3Vyc29yIHBvc2l0aW9uLlxuICAgIGxldCBjdXJzb3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdudWxsJyk7XG4gICAgY3Vyc29yRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzAnKTtcbiAgICBjdXJzb3JFbGVtZW50LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzAnKTtcblxuICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3Vyc29yRWxlbWVudCk7XG4gICAgbGV0IGN1cnNvclBvc2l0aW9uID0ge1xuICAgICAgdG9wOiBjdXJzb3JFbGVtZW50Lm9mZnNldFRvcCAtIGVkaXRvckVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgbGVmdDogY3Vyc29yRWxlbWVudC5vZmZzZXRMZWZ0IC0gZWRpdG9yRWxlbWVudC5zY3JvbGxMZWZ0LFxuICAgIH07XG4gICAgY3Vyc29yRWxlbWVudC5yZW1vdmUoKTtcblxuICAgIHJldHVybiBjdXJzb3JQb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3NpdGlvbnMgdGhlIHJlc3VsdHMgZHJvcGRvd24gYmFzZWQgb24gdGhlIGxvY2F0aW9uIG9mIHRoZSBjdXJzb3IgaW4gdGhlIHRleHQgZmllbGRcbiAgICovXG4gIHByaXZhdGUgcG9zaXRpb25SZXN1bHRzRHJvcGRvd24oKTogdm9pZCB7XG4gICAgY29uc3QgTUlOX01BUkdJTl9UT1A6IG51bWJlciA9IFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQgKiAyO1xuICAgIGNvbnN0IE1BWF9NQVJHSU5fVE9QOiBudW1iZXIgPSB0aGlzLmdldENvbnRlbnRIZWlnaHQoKSArIFF1aWNrTm90ZUVsZW1lbnQuVE9PTEJBUl9IRUlHSFQ7XG5cbiAgICBsZXQgY3Vyc29yUG9zaXRpb24gPSB0aGlzLmdldEN1cnNvclBvc2l0aW9uKCk7XG4gICAgbGV0IG1hcmdpblRvcDogbnVtYmVyID0gY3Vyc29yUG9zaXRpb24udG9wICsgUXVpY2tOb3RlRWxlbWVudC5UT09MQkFSX0hFSUdIVDtcblxuICAgIC8vIENoZWNrIHRoYXQgdGhlIG1hcmdpbiBpcyB3aXRoaW4gdGhlIHZpc2libGUgYm91bmRzXG4gICAgbWFyZ2luVG9wID0gTWF0aC5tYXgobWFyZ2luVG9wLCBNSU5fTUFSR0lOX1RPUCk7XG4gICAgbWFyZ2luVG9wID0gTWF0aC5taW4obWFyZ2luVG9wLCBNQVhfTUFSR0lOX1RPUCk7XG5cbiAgICAvLyBTZXQgdGhlIG1hcmdpbi10b3Agb2YgdGhlIGRyb3Bkb3duXG4gICAgdGhpcy5xdWlja05vdGVSZXN1bHRzLmluc3RhbmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnbWFyZ2luLXRvcCcsIG1hcmdpblRvcCArICdweCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIGNvbnRlbnQgYXJlYSAtIHRoZSB0ZXh0IHRoYXQgdGhlIHVzZXIgaGFzIGVudGVyZWQuXG4gICAqL1xuICBwcml2YXRlIGdldENvbnRlbnRIZWlnaHQoKTogbnVtYmVyIHtcbiAgICBsZXQgY29udGVudEhlaWdodDogbnVtYmVyID0gMDtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpICYmXG4gICAgICB0aGlzLmNrZUluc3RhbmNlLnVpLmNvbnRlbnRzRWxlbWVudCAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJCAmJlxuICAgICAgdGhpcy5ja2VJbnN0YW5jZS51aS5jb250ZW50c0VsZW1lbnQuJC5zdHlsZVxuICAgICkge1xuICAgICAgbGV0IGNzc1RleHQ6IHN0cmluZyA9IHRoaXMuY2tlSW5zdGFuY2UudWkuY29udGVudHNFbGVtZW50LiQuc3R5bGUuY3NzVGV4dDtcbiAgICAgIGlmIChjc3NUZXh0LmluZGV4T2YoJ2hlaWdodDogJykgIT09IC0xKSB7XG4gICAgICAgIGxldCBoZWlnaHQ6IHN0cmluZyA9IGNzc1RleHQuc3BsaXQoJ2hlaWdodDogJylbMV07XG4gICAgICAgIGhlaWdodCA9IGhlaWdodC5zcGxpdCgncHgnKVswXTtcbiAgICAgICAgY29udGVudEhlaWdodCA9IHBhcnNlSW50KGhlaWdodCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb250ZW50SGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHBsYWNlaG9sZGVyIHRleHQgaWYgdGhlIGVkaXRvciBpcyBlbXB0eVxuICAgKi9cbiAgcHJpdmF0ZSBzaG93UGxhY2Vob2xkZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNrZUluc3RhbmNlLmdldERhdGEoKSAmJiAhdGhpcy5zdGFydHVwRm9jdXMpIHtcbiAgICAgIHRoaXMuY2tlSW5zdGFuY2VcbiAgICAgICAgLmVkaXRhYmxlKClcbiAgICAgICAgLmdldFBhcmVudCgpXG4gICAgICAgIC4kLmFwcGVuZENoaWxkKHRoaXMucGxhY2Vob2xkZXJFbGVtZW50KTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJWaXNpYmxlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgcGxhY2Vob2xkZXIgdGV4dCBieSByZW1vdmluZyB0aGUgcGxhY2Vob2xkZXIgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICovXG4gIHByaXZhdGUgaGlkZVBsYWNlaG9sZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyVmlzaWJsZSkge1xuICAgICAgdGhpcy5ja2VJbnN0YW5jZVxuICAgICAgICAuZWRpdGFibGUoKVxuICAgICAgICAuZ2V0UGFyZW50KClcbiAgICAgICAgLiQucmVtb3ZlQ2hpbGQodGhpcy5wbGFjZWhvbGRlckVsZW1lbnQpO1xuICAgICAgdGhpcy5wbGFjZWhvbGRlclZpc2libGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IG9yIGNyZWF0ZSB0aGUgc2luZ2xlIHBsYWNlaG9sZGVyIG9iamVjdCB0aGF0IGlzIGNvbnN0cnVjdGVkIG9ubHkgd2hlbiBuZWVkZWQuXG4gICAqL1xuICBwcml2YXRlIGdldCBwbGFjZWhvbGRlckVsZW1lbnQoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudCkge1xuICAgICAgdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQuY2xhc3NOYW1lID0gJ3BsYWNlaG9sZGVyJztcbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyRWxlbWVudC5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgJ21hcmdpbjogMjBweDsgY29sb3I6ICNBQUFBQUE7IGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEzcHg7IGxpbmUtaGVpZ2h0OiAyMHB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMCc7XG4gICAgICB0aGlzLl9wbGFjZWhvbGRlckVsZW1lbnQudGV4dENvbnRlbnQgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXJFbGVtZW50O1xuICB9XG59XG4iXX0=