/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/base-picker-results/BasePickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Input } from '@angular/core';
// APP
import { Helpers } from '../../../../utils/Helpers';
// Vendor
import { from } from 'rxjs';
/**
 * \@name: PickerResults
 *
 * \@description This is the actual list of matches that gets injected into the DOM. It's also the piece that can be
 * overwritten if custom list options are needed.
 */
var BasePickerResults = /** @class */ (function () {
    function BasePickerResults(element, ref) {
        this._term = '';
        this.selected = [];
        this.matches = [];
        this.hasError = false;
        this.isLoading = false;
        this.isStatic = true;
        this.page = 0;
        this.lastPage = false;
        this.autoSelectFirstOption = true;
        this.optionsFunctionHasChanged = false;
        this.selectingMatches = false;
        this.element = element;
        this.ref = ref;
        this.scrollHandler = this.onScrollDown.bind(this);
    }
    /**
     * @return {?}
     */
    BasePickerResults.prototype.cleanUp = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.getListElement();
        if (element && element.hasAttribute('scrollListener')) {
            element.removeAttribute('scrollListener');
            element.removeEventListener('scroll', this.scrollHandler);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BasePickerResults.prototype.onScrollDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var element = event.target;
        if (element) {
            /** @type {?} */
            var offset = element.offsetHeight + element.scrollTop;
            /** @type {?} */
            var bottom = element.scrollHeight - 300;
            if (offset >= bottom) {
                event.stopPropagation();
                if (!this.lastPage && !this.isLoading) {
                    this.processSearch();
                }
            }
        }
    };
    Object.defineProperty(BasePickerResults.prototype, "term", {
        get: /**
         * @return {?}
         */
        function () {
            return this._term;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.shouldSearch(value)) {
                this._term = value;
                this.page = 0;
                this.optionsFunctionHasChanged = false;
                this.matches = [];
                this.processSearch(true);
            }
            else {
                this.addScrollListener();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePickerResults.prototype, "config", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.config && this.config.options !== value.options) {
                this.optionsFunctionHasChanged = true; // reset page so that new options call is used to search
            }
            this._config = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    BasePickerResults.prototype.shouldSearch = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var termHasChanged = value !== this._term;
        /** @type {?} */
        var optionsNotYetCalled = this.page === 0;
        return termHasChanged || optionsNotYetCalled || this.optionsFunctionHasChanged;
    };
    /**
     * @return {?}
     */
    BasePickerResults.prototype.addScrollListener = /**
     * @return {?}
     */
    function () {
        if (this.config.enableInfiniteScroll) {
            /** @type {?} */
            var element = this.getListElement();
            if (element && !element.hasAttribute('scrollListener')) {
                element.setAttribute('scrollListener', 'true');
                element.addEventListener('scroll', this.scrollHandler);
            }
        }
    };
    /**
     * @param {?=} shouldReset
     * @return {?}
     */
    BasePickerResults.prototype.processSearch = /**
     * @param {?=} shouldReset
     * @return {?}
     */
    function (shouldReset) {
        var _this = this;
        this.hasError = false;
        this.isLoading = true;
        this.ref.markForCheck();
        this.search(this.term).subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            if (shouldReset) {
                _this.matches = [];
            }
            if (_this.isStatic) {
                _this.matches = _this.filterData(results);
            }
            else {
                _this.matches = _this.matches.concat(results);
                _this.lastPage = results && !results.length;
            }
            if (_this.matches.length > 0 && _this.autoSelectFirstOption && !_this.selectingMatches) {
                _this.nextActiveMatch();
            }
            _this.isLoading = false;
            _this.ref.markForCheck();
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.overlay.updatePosition();
                _this.addScrollListener();
            })); // @bkimball: This was added for Dylan Schulte, 9.18.2017 4:14PM EST, you're welcome!
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            _this.hasError = _this.term && _this.term.length !== 0;
            _this.isLoading = false;
            _this.lastPage = true;
            if (_this.term && _this.term.length !== 0) {
                console.error(err); // tslint:disable-lineno
            }
            _this.ref.markForCheck();
        }));
    };
    /**
     * @param {?} term
     * @param {?=} mode
     * @return {?}
     */
    BasePickerResults.prototype.search = /**
     * @param {?} term
     * @param {?=} mode
     * @return {?}
     */
    function (term, mode) {
        var _this = this;
        /** @type {?} */
        var options = this.config.options;
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            // Check if there is match data
            if (options) {
                // Resolve the data
                if (Array.isArray(options)) {
                    _this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(_this.structureArray(options));
                }
                else if (_this.shouldCallOptionsFunction(term)) {
                    if ((options.hasOwnProperty('reject') && options.hasOwnProperty('resolve')) ||
                        Object.getPrototypeOf(options).hasOwnProperty('then')) {
                        _this.isStatic = false;
                        // Promises (ES6 or Deferred) are resolved whenever they resolve
                        options.then(_this.structureArray.bind(_this)).then(resolve, reject);
                    }
                    else if (typeof options === 'function') {
                        _this.isStatic = false;
                        // Promises (ES6 or Deferred) are resolved whenever they resolve
                        options(term, ++_this.page)
                            .then(_this.structureArray.bind(_this))
                            .then(resolve, reject);
                    }
                    else {
                        // All other kinds of data are rejected
                        reject('The data provided is not an array or a promise');
                        throw new Error('The data provided is not an array or a promise');
                    }
                }
                else {
                    if (_this.config.defaultOptions) {
                        _this.isStatic = false;
                        if (typeof _this.config.defaultOptions === 'function') {
                            /** @type {?} */
                            var defaultOptions = _this.config.defaultOptions(term, ++_this.page);
                            if (Object.getPrototypeOf(defaultOptions).hasOwnProperty('then')) {
                                defaultOptions.then(_this.structureArray.bind(_this)).then(resolve, reject);
                            }
                            else {
                                resolve(_this.structureArray(defaultOptions));
                            }
                        }
                        else {
                            resolve(_this.structureArray(_this.config.defaultOptions));
                        }
                    }
                    else {
                        // No search term gets rejected
                        reject('No search term');
                    }
                }
            }
            else {
                // No data gets rejected
                reject('error');
            }
        })));
    };
    /**
     * @param {?} term
     * @return {?}
     */
    BasePickerResults.prototype.shouldCallOptionsFunction = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        if (this.config && 'minSearchLength' in this.config && Number.isInteger(this.config.minSearchLength)) {
            return typeof term === 'string' && term.length >= this.config.minSearchLength;
        }
        else {
            return !!(term && term.length);
        }
    };
    /**
     * @name structureArray
     * @param collection - the data once getData resolves it
     *
     * @description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     */
    /**
     * \@name structureArray
     * \@description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     * @param {?} collection - the data once getData resolves it
     *
     * @return {?}
     */
    BasePickerResults.prototype.structureArray = /**
     * \@name structureArray
     * \@description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     * @param {?} collection - the data once getData resolves it
     *
     * @return {?}
     */
    function (collection) {
        var _this = this;
        /** @type {?} */
        var dataArray = collection.data ? collection.data : collection;
        if (dataArray && (typeof dataArray[0] === 'string' || typeof dataArray[0] === 'number')) {
            return collection.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return {
                    value: item,
                    label: item,
                };
            }));
        }
        return dataArray.map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var value = _this.config.field ? data[_this.config.field] : data.value || data;
            if (_this.config.valueFormat) {
                value = Helpers.interpolate(_this.config.valueFormat, data);
            }
            /** @type {?} */
            var label = _this.config.format ? Helpers.interpolate(_this.config.format, data) : data.label || String(value);
            return { value: value, label: label, data: data };
        }));
    };
    /**
     * @name filterData=
     * @param matches - Collection of objects=
     *
     * @description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     */
    /**
     * \@name filterData=
     * \@description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     * @param {?} matches - Collection of objects=
     *
     * @return {?}
     */
    BasePickerResults.prototype.filterData = /**
     * \@name filterData=
     * \@description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     * @param {?} matches - Collection of objects=
     *
     * @return {?}
     */
    function (matches) {
        var _this = this;
        if (this.term && matches) {
            return matches.filter((/**
             * @param {?} match
             * @return {?}
             */
            function (match) {
                return ~String(match.label)
                    .toLowerCase()
                    .indexOf(_this.term.toLowerCase());
            }));
        }
        // Show no recent results template
        return matches;
    };
    /**
     * @name selectActiveMatch
     *
     * @description This function is called when the user presses the enter key to call the selectMatch method.
     */
    /**
     * \@name selectActiveMatch
     *
     * \@description This function is called when the user presses the enter key to call the selectMatch method.
     * @return {?}
     */
    BasePickerResults.prototype.selectActiveMatch = /**
     * \@name selectActiveMatch
     *
     * \@description This function is called when the user presses the enter key to call the selectMatch method.
     * @return {?}
     */
    function () {
        this.selectMatch();
    };
    /**
     * @name prevActiveMatch
     *
     * @description This function sets activeMatch to the match before the current node.
     */
    /**
     * \@name prevActiveMatch
     *
     * \@description This function sets activeMatch to the match before the current node.
     * @return {?}
     */
    BasePickerResults.prototype.prevActiveMatch = /**
     * \@name prevActiveMatch
     *
     * \@description This function sets activeMatch to the match before the current node.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.matches.indexOf(this.activeMatch);
        this.activeMatch = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        this.scrollToActive();
        this.ref.markForCheck();
    };
    /**
     * @name nextActiveMatch
     *
     * @description This function sets activeMatch to the match after the current node.
     */
    /**
     * \@name nextActiveMatch
     *
     * \@description This function sets activeMatch to the match after the current node.
     * @return {?}
     */
    BasePickerResults.prototype.nextActiveMatch = /**
     * \@name nextActiveMatch
     *
     * \@description This function sets activeMatch to the match after the current node.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = this.matches.indexOf(this.activeMatch);
        this.activeMatch = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        this.scrollToActive();
        this.ref.markForCheck();
    };
    /**
     * @return {?}
     */
    BasePickerResults.prototype.getListElement = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement;
    };
    /**
     * @return {?}
     */
    BasePickerResults.prototype.getChildrenOfListElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = [];
        if (this.getListElement()) {
            children = this.getListElement().children;
        }
        return children;
    };
    /**
     * @return {?}
     */
    BasePickerResults.prototype.scrollToActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var list = this.getListElement();
        /** @type {?} */
        var items = this.getChildrenOfListElement();
        /** @type {?} */
        var index = this.matches.indexOf(this.activeMatch);
        /** @type {?} */
        var item = items[index];
        if (item) {
            list.scrollTop = item.offsetTop;
        }
    };
    /**
     * @name selectActive
     * @param match
     *
     * @description
     */
    /**
     * \@name selectActive
     * \@description
     * @param {?} match
     *
     * @return {?}
     */
    BasePickerResults.prototype.selectActive = /**
     * \@name selectActive
     * \@description
     * @param {?} match
     *
     * @return {?}
     */
    function (match) {
        this.activeMatch = match;
    };
    /**
     * @name isActive
     * @param match
     *
     * @description
     */
    /**
     * \@name isActive
     * \@description
     * @param {?} match
     *
     * @return {?}
     */
    BasePickerResults.prototype.isActive = /**
     * \@name isActive
     * \@description
     * @param {?} match
     *
     * @return {?}
     */
    function (match) {
        return this.activeMatch === match;
    };
    /**
     * @name selectMatch
     * @param event
     * @param item
     *
     * @description
     */
    /**
     * \@name selectMatch
     * \@description
     * @param {?=} event
     * @param {?=} item
     *
     * @return {?}
     */
    BasePickerResults.prototype.selectMatch = /**
     * \@name selectMatch
     * \@description
     * @param {?=} event
     * @param {?=} item
     *
     * @return {?}
     */
    function (event, item) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        /** @type {?} */
        var selected = this.activeMatch;
        if (selected && this.parent) {
            this.parent.value = selected;
            this.selectingMatches = true;
            if (this.parent.closeOnSelect) {
                this.parent.hideResults();
                this.selectingMatches = false;
            }
        }
        this.ref.markForCheck();
        return false;
    };
    /**
     * @name escapeRegexp
     * @param queryToEscape
     *
     * @description This function captures the whole query string and replace it with the string that will be used to
     * match.
     */
    /**
     * \@name escapeRegexp
     * \@description This function captures the whole query string and replace it with the string that will be used to
     * match.
     * @param {?} queryToEscape
     *
     * @return {?}
     */
    BasePickerResults.prototype.escapeRegexp = /**
     * \@name escapeRegexp
     * \@description This function captures the whole query string and replace it with the string that will be used to
     * match.
     * @param {?} queryToEscape
     *
     * @return {?}
     */
    function (queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    };
    /**
     * @name highlight
     * @param match
     * @param query
     *
     * @description This function should return a <strong>-tag wrapped HTML string.
     */
    /**
     * \@name highlight
     * \@description This function should return a <strong>-tag wrapped HTML string.
     * @param {?} match
     * @param {?} query
     *
     * @return {?}
     */
    BasePickerResults.prototype.highlight = /**
     * \@name highlight
     * \@description This function should return a <strong>-tag wrapped HTML string.
     * @param {?} match
     * @param {?} query
     *
     * @return {?}
     */
    function (match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query ? match.replace(new RegExp(this.escapeRegexp(query.trim()), 'gi'), '<strong>$&</strong>') : match;
    };
    /**
     * @param {?} match
     * @return {?}
     */
    BasePickerResults.prototype.preselected = /**
     * @param {?} match
     * @return {?}
     */
    function (match) {
        if (this.config && this.config.preselected) {
            /** @type {?} */
            var preselectedFunc_1 = this.config.preselected;
            return (this.selected.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return preselectedFunc_1(match, item);
            })) !== -1);
        }
        return (this.selected.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var isPreselected = false;
            if (item && item.value && match && match.value) {
                if (item.value.id && match.value.id) {
                    isPreselected = item.value.id === match.value.id;
                }
                else if (item.value instanceof Object && item.value.hasOwnProperty('value')) {
                    isPreselected = item.value.value === match.value;
                }
                else {
                    isPreselected = item.value === match.value;
                }
            }
            return isPreselected;
        })) !== -1);
    };
    BasePickerResults.propDecorators = {
        matches: [{ type: Input }]
    };
    return BasePickerResults;
}());
export { BasePickerResults };
if (false) {
    /** @type {?} */
    BasePickerResults.prototype._term;
    /** @type {?} */
    BasePickerResults.prototype.selected;
    /** @type {?} */
    BasePickerResults.prototype.matches;
    /** @type {?} */
    BasePickerResults.prototype.hasError;
    /** @type {?} */
    BasePickerResults.prototype.isLoading;
    /** @type {?} */
    BasePickerResults.prototype.isStatic;
    /** @type {?} */
    BasePickerResults.prototype._config;
    /** @type {?} */
    BasePickerResults.prototype.activeMatch;
    /** @type {?} */
    BasePickerResults.prototype.parent;
    /** @type {?} */
    BasePickerResults.prototype.element;
    /** @type {?} */
    BasePickerResults.prototype.ref;
    /** @type {?} */
    BasePickerResults.prototype.page;
    /** @type {?} */
    BasePickerResults.prototype.lastPage;
    /** @type {?} */
    BasePickerResults.prototype.autoSelectFirstOption;
    /** @type {?} */
    BasePickerResults.prototype.overlay;
    /** @type {?} */
    BasePickerResults.prototype.optionsFunctionHasChanged;
    /**
     * @type {?}
     * @private
     */
    BasePickerResults.prototype.selectingMatches;
    /**
     * @type {?}
     * @private
     */
    BasePickerResults.prototype.scrollHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXBELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFVeEM7SUFvQkUsMkJBQVksT0FBbUIsRUFBRSxHQUFzQjtRQW5CdkQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFNekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUV0Qyw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFDbkMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBSXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsbUNBQU87OztJQUFQOztZQUNNLE9BQU8sR0FBWSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQzVDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JB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Qyx3Q0FBaUI7O0lBQ2pCLG1DQUFZOztJQUNaLG9DQUFvQjs7SUFDcEIsZ0NBQXVCOztJQUN2QixpQ0FBaUI7O0lBQ2pCLHFDQUEwQjs7SUFDMUIsa0RBQXNDOztJQUN0QyxvQ0FBb0I7O0lBQ3BCLHNEQUEyQzs7Ozs7SUFDM0MsNkNBQTBDOzs7OztJQUMxQywwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2Zvcm0vY29udHJvbHMvQmFzZUNvbnRyb2wnO1xuXG4vKipcbiAqIEBuYW1lOiBQaWNrZXJSZXN1bHRzXG4gKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGFjdHVhbCBsaXN0IG9mIG1hdGNoZXMgdGhhdCBnZXRzIGluamVjdGVkIGludG8gdGhlIERPTS4gSXQncyBhbHNvIHRoZSBwaWVjZSB0aGF0IGNhbiBiZVxuICogb3ZlcndyaXR0ZW4gaWYgY3VzdG9tIGxpc3Qgb3B0aW9ucyBhcmUgbmVlZGVkLlxuICovXG5leHBvcnQgY2xhc3MgQmFzZVBpY2tlclJlc3VsdHMge1xuICBfdGVybTogc3RyaW5nID0gJyc7XG4gIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIG1hdGNoZXM6IGFueSA9IFtdO1xuICBoYXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNTdGF0aWM6IGJvb2xlYW4gPSB0cnVlO1xuICBfY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ107XG4gIGFjdGl2ZU1hdGNoOiBhbnk7XG4gIHBhcmVudDogYW55O1xuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICByZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwYWdlOiBudW1iZXIgPSAwO1xuICBsYXN0UGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBvdmVybGF5OiBPdmVybGF5UmVmO1xuICBvcHRpb25zRnVuY3Rpb25IYXNDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0aW5nTWF0Y2hlczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNjcm9sbEhhbmRsZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSB0aGlzLm9uU2Nyb2xsRG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2xlYW5VcCgpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJyk7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGxEb3duKGV2ZW50OiBXaGVlbEV2ZW50KSB7XG4gICAgbGV0IGVsZW1lbnQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgbGV0IG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbSA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwO1xuICAgICAgaWYgKG9mZnNldCA+PSBib3R0b20pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5sYXN0UGFnZSAmJiAhdGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnByb2Nlc3NTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXJtKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXJtO1xuICB9XG5cbiAgc2V0IHRlcm0odmFsdWUpIHtcbiAgICBpZiAodGhpcy5zaG91bGRTZWFyY2godmFsdWUpKSB7XG4gICAgICB0aGlzLl90ZXJtID0gdmFsdWU7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5vcHRpb25zRnVuY3Rpb25IYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHNldCBjb25maWcodmFsdWU6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXSkge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5vcHRpb25zICE9PSB2YWx1ZS5vcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnNGdW5jdGlvbkhhc0NoYW5nZWQgPSB0cnVlOyAvLyByZXNldCBwYWdlIHNvIHRoYXQgbmV3IG9wdGlvbnMgY2FsbCBpcyB1c2VkIHRvIHNlYXJjaFxuICAgIH1cbiAgICB0aGlzLl9jb25maWcgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjb25maWcoKTogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddIHtcbiAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICB9XG5cbiAgc2hvdWxkU2VhcmNoKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdGVybUhhc0NoYW5nZWQgPSB2YWx1ZSAhPT0gdGhpcy5fdGVybTtcbiAgICBjb25zdCBvcHRpb25zTm90WWV0Q2FsbGVkID0gdGhpcy5wYWdlID09PSAwO1xuXG4gICAgcmV0dXJuIHRlcm1IYXNDaGFuZ2VkIHx8IG9wdGlvbnNOb3RZZXRDYWxsZWQgfHwgdGhpcy5vcHRpb25zRnVuY3Rpb25IYXNDaGFuZ2VkO1xuICB9XG5cbiAgYWRkU2Nyb2xsTGlzdGVuZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmVuYWJsZUluZmluaXRlU2Nyb2xsKSB7XG4gICAgICBsZXQgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICAgIGlmIChlbGVtZW50ICYmICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInLCAndHJ1ZScpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc1NlYXJjaChzaG91bGRSZXNldD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuc2VhcmNoKHRoaXMudGVybSkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkUmVzZXQpIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1N0YXRpYykge1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyRGF0YShyZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLm1hdGNoZXMuY29uY2F0KHJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMubGFzdFBhZ2UgPSByZXN1bHRzICYmICFyZXN1bHRzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gJiYgIXRoaXMuc2VsZWN0aW5nTWF0Y2hlcykge1xuICAgICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3ZlcmxheS51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgfSk7IC8vIEBia2ltYmFsbDogVGhpcyB3YXMgYWRkZWQgZm9yIER5bGFuIFNjaHVsdGUsIDkuMTguMjAxNyA0OjE0UE0gRVNULCB5b3UncmUgd2VsY29tZSFcbiAgICAgIH0sXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0aGlzLnRlcm0gJiYgdGhpcy50ZXJtLmxlbmd0aCAhPT0gMDtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnRlcm0gJiYgdGhpcy50ZXJtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZW5vXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzZWFyY2godGVybSwgbW9kZT8pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICByZXR1cm4gZnJvbShcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgbWF0Y2ggZGF0YVxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGFcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICAvLyBBcnJheXMgYXJlIHJldHVybmVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkob3B0aW9ucykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRDYWxsT3B0aW9uc0Z1bmN0aW9uKHRlcm0pKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChvcHRpb25zLmhhc093blByb3BlcnR5KCdyZWplY3QnKSAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KCdyZXNvbHZlJykpIHx8XG4gICAgICAgICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcHRpb25zKS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBQcm9taXNlcyAoRVM2IG9yIERlZmVycmVkKSBhcmUgcmVzb2x2ZWQgd2hlbmV2ZXIgdGhleSByZXNvbHZlXG4gICAgICAgICAgICAgIG9wdGlvbnMudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBQcm9taXNlcyAoRVM2IG9yIERlZmVycmVkKSBhcmUgcmVzb2x2ZWQgd2hlbmV2ZXIgdGhleSByZXNvbHZlXG4gICAgICAgICAgICAgIG9wdGlvbnModGVybSwgKyt0aGlzLnBhZ2UpXG4gICAgICAgICAgICAgICAgLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgcmVqZWN0KCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0gdGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnModGVybSwgKyt0aGlzLnBhZ2UpO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoZGVmYXVsdE9wdGlvbnMpLmhhc093blByb3BlcnR5KCd0aGVuJykpIHtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShkZWZhdWx0T3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkodGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTm8gc2VhcmNoIHRlcm0gZ2V0cyByZWplY3RlZFxuICAgICAgICAgICAgICByZWplY3QoJ05vIHNlYXJjaCB0ZXJtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIHNob3VsZENhbGxPcHRpb25zRnVuY3Rpb24odGVybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmICdtaW5TZWFyY2hMZW5ndGgnIGluIHRoaXMuY29uZmlnICYmIE51bWJlci5pc0ludGVnZXIodGhpcy5jb25maWcubWluU2VhcmNoTGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB0ZXJtID09PSAnc3RyaW5nJyAmJiB0ZXJtLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5taW5TZWFyY2hMZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhISh0ZXJtICYmIHRlcm0ubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RydWN0dXJlQXJyYXlcbiAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSB0aGUgZGF0YSBvbmNlIGdldERhdGEgcmVzb2x2ZXMgaXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc3RydWN0dXJlcyBhbiBhcnJheSBvZiBub2RlcyBpbnRvIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBhXG4gICAqICduYW1lJyBmaWVsZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgc3RydWN0dXJlQXJyYXkoY29sbGVjdGlvbjogYW55KTogYW55IHtcbiAgICBsZXQgZGF0YUFycmF5ID0gY29sbGVjdGlvbi5kYXRhID8gY29sbGVjdGlvbi5kYXRhIDogY29sbGVjdGlvbjtcbiAgICBpZiAoZGF0YUFycmF5ICYmICh0eXBlb2YgZGF0YUFycmF5WzBdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0YUFycmF5WzBdID09PSAnbnVtYmVyJykpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgIGxhYmVsOiBpdGVtLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhQXJyYXkubWFwKChkYXRhKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmNvbmZpZy5maWVsZCA/IGRhdGFbdGhpcy5jb25maWcuZmllbGRdIDogZGF0YS52YWx1ZSB8fCBkYXRhO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlRm9ybWF0KSB7XG4gICAgICAgIHZhbHVlID0gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy52YWx1ZUZvcm1hdCwgZGF0YSk7XG4gICAgICB9XG4gICAgICBsZXQgbGFiZWwgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmZvcm1hdCwgZGF0YSkgOiBkYXRhLmxhYmVsIHx8IFN0cmluZyh2YWx1ZSk7XG4gICAgICByZXR1cm4geyB2YWx1ZSwgbGFiZWwsIGRhdGEgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaWx0ZXJEYXRhPVxuICAgKiBAcGFyYW0gbWF0Y2hlcyAtIENvbGxlY3Rpb24gb2Ygb2JqZWN0cz1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCB0aGUgcGlja2VyIG9wdGlvbnMgYW5kIGNyZWF0ZXMgYSBmaWx0ZXJlZCBsaXN0IG9mIG9iamVjdHMgdGhhdCBjb250YWluXG4gICAqIHRoZSBuZXdTZWFyY2guXG4gICAqL1xuICBmaWx0ZXJEYXRhKG1hdGNoZXMpOiBBcnJheTxhbnk+IHtcbiAgICBpZiAodGhpcy50ZXJtICYmIG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgcmV0dXJuIH5TdHJpbmcobWF0Y2gubGFiZWwpXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuaW5kZXhPZih0aGlzLnRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gU2hvdyBubyByZWNlbnQgcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdEFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIGVudGVyIGtleSB0byBjYWxsIHRoZSBzZWxlY3RNYXRjaCBtZXRob2QuXG4gICAqL1xuICBzZWxlY3RBY3RpdmVNYXRjaCgpIHtcbiAgICB0aGlzLnNlbGVjdE1hdGNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcHJldkFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNldHMgYWN0aXZlTWF0Y2ggdG8gdGhlIG1hdGNoIGJlZm9yZSB0aGUgY3VycmVudCBub2RlLlxuICAgKi9cbiAgcHJldkFjdGl2ZU1hdGNoKCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuYWN0aXZlTWF0Y2gpO1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSB0aGlzLm1hdGNoZXNbaW5kZXggLSAxIDwgMCA/IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXTtcbiAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbmV4dEFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNldHMgYWN0aXZlTWF0Y2ggdG8gdGhlIG1hdGNoIGFmdGVyIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqL1xuICBuZXh0QWN0aXZlTWF0Y2goKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IHRoaXMubWF0Y2hlc1tpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFdO1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuT2ZMaXN0RWxlbWVudCgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBpZiAodGhpcy5nZXRMaXN0RWxlbWVudCgpKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKS5jaGlsZHJlbjtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgc2Nyb2xsVG9BY3RpdmUoKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5nZXRDaGlsZHJlbk9mTGlzdEVsZW1lbnQoKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICBsZXQgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0QWN0aXZlXG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHNlbGVjdEFjdGl2ZShtYXRjaCkge1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSBtYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0FjdGl2ZVxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBpc0FjdGl2ZShtYXRjaCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZU1hdGNoID09PSBtYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RNYXRjaFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5hY3RpdmVNYXRjaDtcbiAgICBpZiAoc2VsZWN0ZWQgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LnZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnNlbGVjdGluZ01hdGNoZXMgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucGFyZW50LmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdNYXRjaGVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlc2NhcGVSZWdleHBcbiAgICogQHBhcmFtIHF1ZXJ5VG9Fc2NhcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWdobGlnaHRcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIHByZXNlbGVjdGVkKG1hdGNoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLnByZXNlbGVjdGVkKSB7XG4gICAgICBsZXQgcHJlc2VsZWN0ZWRGdW5jOiBGdW5jdGlvbiA9IHRoaXMuY29uZmlnLnByZXNlbGVjdGVkO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdGhpcy5zZWxlY3RlZC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICAgICAgICByZXR1cm4gcHJlc2VsZWN0ZWRGdW5jKG1hdGNoLCBpdGVtKTtcbiAgICAgICAgfSkgIT09IC0xXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zZWxlY3RlZC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGlzUHJlc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS52YWx1ZSAmJiBtYXRjaCAmJiBtYXRjaC52YWx1ZSkge1xuICAgICAgICAgIGlmIChpdGVtLnZhbHVlLmlkICYmIG1hdGNoLnZhbHVlLmlkKSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZS5pZCA9PT0gbWF0Y2gudmFsdWUuaWQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtLnZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ICYmIGl0ZW0udmFsdWUuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgIGlzUHJlc2VsZWN0ZWQgPSBpdGVtLnZhbHVlLnZhbHVlID09PSBtYXRjaC52YWx1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNQcmVzZWxlY3RlZCA9IGl0ZW0udmFsdWUgPT09IG1hdGNoLnZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNQcmVzZWxlY3RlZDtcbiAgICAgIH0pICE9PSAtMVxuICAgICk7XG4gIH1cbn1cbiJdfQ==