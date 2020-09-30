/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        if (this.config.preselected) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBRXJFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFcEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQVV4QztJQW9CRSwyQkFBWSxPQUFtQixFQUFFLEdBQXNCO1FBbkJ2RCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUMzQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLElBQUksQ0FBQztRQU16QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBRXRDLDhCQUF5QixHQUFZLEtBQUssQ0FBQztRQUNuQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFJeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxtQ0FBTzs7O0lBQVA7O1lBQ00sT0FBTyxHQUFZLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFB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OztJQUNaLG9DQUFvQjs7SUFDcEIsZ0NBQXVCOztJQUN2QixpQ0FBaUI7O0lBQ2pCLHFDQUEwQjs7SUFDMUIsa0RBQXNDOztJQUN0QyxvQ0FBb0I7O0lBQ3BCLHNEQUEyQzs7Ozs7SUFDM0MsNkNBQTBDOzs7OztJQUMxQywwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBOb3ZvQ29udHJvbENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2Zvcm0vY29udHJvbHMvQmFzZUNvbnRyb2wnO1xuXG4vKipcbiAqIEBuYW1lOiBQaWNrZXJSZXN1bHRzXG4gKlxuICogQGRlc2NyaXB0aW9uIFRoaXMgaXMgdGhlIGFjdHVhbCBsaXN0IG9mIG1hdGNoZXMgdGhhdCBnZXRzIGluamVjdGVkIGludG8gdGhlIERPTS4gSXQncyBhbHNvIHRoZSBwaWVjZSB0aGF0IGNhbiBiZVxuICogb3ZlcndyaXR0ZW4gaWYgY3VzdG9tIGxpc3Qgb3B0aW9ucyBhcmUgbmVlZGVkLlxuICovXG5leHBvcnQgY2xhc3MgQmFzZVBpY2tlclJlc3VsdHMge1xuICBfdGVybTogc3RyaW5nID0gJyc7XG4gIHNlbGVjdGVkOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIG1hdGNoZXM6IGFueSA9IFtdO1xuICBoYXNFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNTdGF0aWM6IGJvb2xlYW4gPSB0cnVlO1xuICBfY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ107XG4gIGFjdGl2ZU1hdGNoOiBhbnk7XG4gIHBhcmVudDogYW55O1xuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICByZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwYWdlOiBudW1iZXIgPSAwO1xuICBsYXN0UGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBvdmVybGF5OiBPdmVybGF5UmVmO1xuICBvcHRpb25zRnVuY3Rpb25IYXNDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0aW5nTWF0Y2hlczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNjcm9sbEhhbmRsZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSB0aGlzLm9uU2Nyb2xsRG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2xlYW5VcCgpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJyk7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGxEb3duKGV2ZW50OiBNb3VzZVdoZWVsRXZlbnQpIHtcbiAgICBsZXQgZWxlbWVudDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBlbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDA7XG4gICAgICBpZiAob2Zmc2V0ID49IGJvdHRvbSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RQYWdlICYmICF0aGlzLmlzTG9hZGluZykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm07XG4gIH1cblxuICBzZXQgdGVybSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNob3VsZFNlYXJjaCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3Rlcm0gPSB2YWx1ZTtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLm9wdGlvbnNGdW5jdGlvbkhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IFtdO1xuICAgICAgdGhpcy5wcm9jZXNzU2VhcmNoKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGNvbmZpZyh2YWx1ZTogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9wdGlvbnMgIT09IHZhbHVlLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZCA9IHRydWU7IC8vIHJlc2V0IHBhZ2Ugc28gdGhhdCBuZXcgb3B0aW9ucyBjYWxsIGlzIHVzZWQgdG8gc2VhcmNoXG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ10ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cblxuICBzaG91bGRTZWFyY2godmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgICBjb25zdCB0ZXJtSGFzQ2hhbmdlZCA9IHZhbHVlICE9PSB0aGlzLl90ZXJtO1xuICAgIGNvbnN0IG9wdGlvbnNOb3RZZXRDYWxsZWQgPSB0aGlzLnBhZ2UgPT09IDA7XG5cbiAgICByZXR1cm4gdGVybUhhc0NoYW5nZWQgfHwgb3B0aW9uc05vdFlldENhbGxlZCB8fCB0aGlzLm9wdGlvbnNGdW5jdGlvbkhhc0NoYW5nZWQ7XG4gIH1cblxuICBhZGRTY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIGxldCBlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5nZXRMaXN0RWxlbWVudCgpO1xuICAgICAgaWYgKGVsZW1lbnQgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicsICd0cnVlJyk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm9jZXNzU2VhcmNoKHNob3VsZFJlc2V0PzogYm9vbGVhbikge1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5zZWFyY2godGhpcy50ZXJtKS5zdWJzY3JpYmUoXG4gICAgICAocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRSZXNldCkge1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXJEYXRhKHJlc3VsdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMubWF0Y2hlcy5jb25jYXQocmVzdWx0cyk7XG4gICAgICAgICAgdGhpcy5sYXN0UGFnZSA9IHJlc3VsdHMgJiYgIXJlc3VsdHMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hdGNoZXMubGVuZ3RoID4gMCAmJiB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiAmJiAhdGhpcy5zZWxlY3RpbmdNYXRjaGVzKSB7XG4gICAgICAgICAgdGhpcy5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vdmVybGF5LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgdGhpcy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB9KTsgLy8gQGJraW1iYWxsOiBUaGlzIHdhcyBhZGRlZCBmb3IgRHlsYW4gU2NodWx0ZSwgOS4xOC4yMDE3IDQ6MTRQTSBFU1QsIHlvdSdyZSB3ZWxjb21lIVxuICAgICAgfSxcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRoaXMudGVybSAmJiB0aGlzLnRlcm0ubGVuZ3RoICE9PSAwO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudGVybSAmJiB0aGlzLnRlcm0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lbm9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHNlYXJjaCh0ZXJtLCBtb2RlPyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIHJldHVybiBmcm9tKFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBtYXRjaCBkYXRhXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgZGF0YVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgcmV0dXJuZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShvcHRpb25zKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3VsZENhbGxPcHRpb25zRnVuY3Rpb24odGVybSkpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3JlamVjdCcpICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3Jlc29sdmUnKSkgfHxcbiAgICAgICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9wdGlvbnMpLmhhc093blByb3BlcnR5KCd0aGVuJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgICAgb3B0aW9ucy50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgICAgb3B0aW9ucyh0ZXJtLCArK3RoaXMucGFnZSlcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEFsbCBvdGhlciBraW5kcyBvZiBkYXRhIGFyZSByZWplY3RlZFxuICAgICAgICAgICAgICByZWplY3QoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucyh0ZXJtLCArK3RoaXMucGFnZSk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihkZWZhdWx0T3B0aW9ucykuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KGRlZmF1bHRPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheSh0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBObyBzZWFyY2ggdGVybSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgICAgIHJlamVjdCgnTm8gc2VhcmNoIHRlcm0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm8gZGF0YSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgc2hvdWxkQ2FsbE9wdGlvbnNGdW5jdGlvbih0ZXJtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgJ21pblNlYXJjaExlbmd0aCcgaW4gdGhpcy5jb25maWcgJiYgTnVtYmVyLmlzSW50ZWdlcih0aGlzLmNvbmZpZy5taW5TZWFyY2hMZW5ndGgpKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRlcm0gPT09ICdzdHJpbmcnICYmIHRlcm0ubGVuZ3RoID49IHRoaXMuY29uZmlnLm1pblNlYXJjaExlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICEhKHRlcm0gJiYgdGVybS5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBhbnkpOiBhbnkge1xuICAgIGxldCBkYXRhQXJyYXkgPSBjb2xsZWN0aW9uLmRhdGEgPyBjb2xsZWN0aW9uLmRhdGEgOiBjb2xsZWN0aW9uO1xuICAgIGlmIChkYXRhQXJyYXkgJiYgKHR5cGVvZiBkYXRhQXJyYXlbMF0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRhQXJyYXlbMF0gPT09ICdudW1iZXInKSkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICAgICAgbGFiZWw6IGl0ZW0sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFBcnJheS5tYXAoKGRhdGEpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuY29uZmlnLmZpZWxkID8gZGF0YVt0aGlzLmNvbmZpZy5maWVsZF0gOiBkYXRhLnZhbHVlIHx8IGRhdGE7XG4gICAgICBpZiAodGhpcy5jb25maWcudmFsdWVGb3JtYXQpIHtcbiAgICAgICAgdmFsdWUgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLnZhbHVlRm9ybWF0LCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIGxldCBsYWJlbCA9IHRoaXMuY29uZmlnLmZvcm1hdCA/IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcuZm9ybWF0LCBkYXRhKSA6IGRhdGEubGFiZWwgfHwgU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB7IHZhbHVlLCBsYWJlbCwgZGF0YSB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGZpbHRlckRhdGE9XG4gICAqIEBwYXJhbSBtYXRjaGVzIC0gQ29sbGVjdGlvbiBvZiBvYmplY3RzPVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBsb29wcyB0aHJvdWdoIHRoZSBwaWNrZXIgb3B0aW9ucyBhbmQgY3JlYXRlcyBhIGZpbHRlcmVkIGxpc3Qgb2Ygb2JqZWN0cyB0aGF0IGNvbnRhaW5cbiAgICogdGhlIG5ld1NlYXJjaC5cbiAgICovXG4gIGZpbHRlckRhdGEobWF0Y2hlcyk6IEFycmF5PGFueT4ge1xuICAgIGlmICh0aGlzLnRlcm0gJiYgbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gflN0cmluZyhtYXRjaC5sYWJlbClcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5pbmRleE9mKHRoaXMudGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTaG93IG5vIHJlY2VudCByZXN1bHRzIHRlbXBsYXRlXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgZW50ZXIga2V5IHRvIGNhbGwgdGhlIHNlbGVjdE1hdGNoIG1ldGhvZC5cbiAgICovXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKCkge1xuICAgIHRoaXMuc2VsZWN0TWF0Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBwcmV2QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2V0cyBhY3RpdmVNYXRjaCB0byB0aGUgbWF0Y2ggYmVmb3JlIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqL1xuICBwcmV2QWN0aXZlTWF0Y2goKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IHRoaXMubWF0Y2hlc1tpbmRleCAtIDEgPCAwID8gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFdO1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBuZXh0QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2V0cyBhY3RpdmVNYXRjaCB0byB0aGUgbWF0Y2ggYWZ0ZXIgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICovXG4gIG5leHRBY3RpdmVNYXRjaCgpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICB0aGlzLmFjdGl2ZU1hdGNoID0gdGhpcy5tYXRjaGVzW2luZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMV07XG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW5PZkxpc3RFbGVtZW50KCkge1xuICAgIGxldCBjaGlsZHJlbiA9IFtdO1xuICAgIGlmICh0aGlzLmdldExpc3RFbGVtZW50KCkpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRMaXN0RWxlbWVudCgpLmNoaWxkcmVuO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICBzY3JvbGxUb0FjdGl2ZSgpIHtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLmdldENoaWxkcmVuT2ZMaXN0RWxlbWVudCgpO1xuICAgIGxldCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuYWN0aXZlTWF0Y2gpO1xuICAgIGxldCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RBY3RpdmVcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0QWN0aXZlKG1hdGNoKSB7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IG1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQWN0aXZlXG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIGlzQWN0aXZlKG1hdGNoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlTWF0Y2ggPT09IG1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdE1hdGNoXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHNlbGVjdE1hdGNoKGV2ZW50PzogYW55LCBpdGVtPzogYW55KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmFjdGl2ZU1hdGNoO1xuICAgIGlmIChzZWxlY3RlZCAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuc2VsZWN0aW5nTWF0Y2hlcyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5wYXJlbnQuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oaWRlUmVzdWx0cygpO1xuICAgICAgICB0aGlzLnNlbGVjdGluZ01hdGNoZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGVzY2FwZVJlZ2V4cFxuICAgKiBAcGFyYW0gcXVlcnlUb0VzY2FwZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgdXNlZCB0b1xuICAgKiBtYXRjaC5cbiAgICovXG4gIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlKSB7XG4gICAgLy8gRXg6IGlmIHRoZSBjYXB0dXJlIGlzIFwiYVwiIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSA8c3Ryb25nPi10YWcgd3JhcHBlZCBIVE1MIHN0cmluZy5cbiAgICovXG4gIGhpZ2hsaWdodChtYXRjaCwgcXVlcnkpIHtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCBhIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xuICAgIHJldHVybiBxdWVyeSA/IG1hdGNoLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ2V4cChxdWVyeS50cmltKCkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKSA6IG1hdGNoO1xuICB9XG5cbiAgcHJlc2VsZWN0ZWQobWF0Y2gpIHtcbiAgICBpZiAodGhpcy5jb25maWcucHJlc2VsZWN0ZWQpIHtcbiAgICAgIGxldCBwcmVzZWxlY3RlZEZ1bmM6IEZ1bmN0aW9uID0gdGhpcy5jb25maWcucHJlc2VsZWN0ZWQ7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmVzZWxlY3RlZEZ1bmMobWF0Y2gsIGl0ZW0pO1xuICAgICAgICB9KSAhPT0gLTFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgaXNQcmVzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnZhbHVlICYmIG1hdGNoICYmIG1hdGNoLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUuaWQgJiYgbWF0Y2gudmFsdWUuaWQpIHtcbiAgICAgICAgICAgIGlzUHJlc2VsZWN0ZWQgPSBpdGVtLnZhbHVlLmlkID09PSBtYXRjaC52YWx1ZS5pZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgaXRlbS52YWx1ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgaXNQcmVzZWxlY3RlZCA9IGl0ZW0udmFsdWUudmFsdWUgPT09IG1hdGNoLnZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZSA9PT0gbWF0Y2gudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ByZXNlbGVjdGVkO1xuICAgICAgfSkgIT09IC0xXG4gICAgKTtcbiAgfVxufVxuIl19