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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXBELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFVeEM7SUFvQkUsMkJBQVksT0FBbUIsRUFBRSxHQUFzQjtRQW5CdkQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFNekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUV0Qyw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFDbkMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBSXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsbUNBQU87OztJQUFQOztZQUNRLE9BQU8sR0FBWSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQzlDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JB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WTs7SUFDWixvQ0FBb0I7O0lBQ3BCLGdDQUF1Qjs7SUFDdkIsaUNBQWlCOztJQUNqQixxQ0FBMEI7O0lBQzFCLGtEQUFzQzs7SUFDdEMsb0NBQW9COztJQUNwQixzREFBMkM7Ozs7O0lBQzNDLDZDQUEwQzs7Ozs7SUFDMUMsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLi8uLi8uLi9mb3JtL2NvbnRyb2xzL0Jhc2VDb250cm9sJztcblxuLyoqXG4gKiBAbmFtZTogUGlja2VyUmVzdWx0c1xuICpcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHRoZSBhY3R1YWwgbGlzdCBvZiBtYXRjaGVzIHRoYXQgZ2V0cyBpbmplY3RlZCBpbnRvIHRoZSBET00uIEl0J3MgYWxzbyB0aGUgcGllY2UgdGhhdCBjYW4gYmVcbiAqIG92ZXJ3cml0dGVuIGlmIGN1c3RvbSBsaXN0IG9wdGlvbnMgYXJlIG5lZWRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgX3Rlcm06IHN0cmluZyA9ICcnO1xuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBtYXRjaGVzOiBhbnkgPSBbXTtcbiAgaGFzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGlzU3RhdGljOiBib29sZWFuID0gdHJ1ZTtcbiAgX2NvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddO1xuICBhY3RpdmVNYXRjaDogYW55O1xuICBwYXJlbnQ6IGFueTtcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgcGFnZTogbnVtYmVyID0gMDtcbiAgbGFzdFBhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYXV0b1NlbGVjdEZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgb3ZlcmxheTogT3ZlcmxheVJlZjtcbiAgb3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGluZ01hdGNoZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZWYgPSByZWY7XG4gICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gdGhpcy5vblNjcm9sbERvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsZWFuVXAoKTogdm9pZCB7XG4gICAgY29uc3QgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJyk7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGxEb3duKGV2ZW50OiBXaGVlbEV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBvZmZzZXQgPSBlbGVtZW50Lm9mZnNldEhlaWdodCArIGVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b20gPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMDtcbiAgICAgIGlmIChvZmZzZXQgPj0gYm90dG9tKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIXRoaXMubGFzdFBhZ2UgJiYgIXRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgdGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybTtcbiAgfVxuXG4gIHNldCB0ZXJtKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2VhcmNoKHZhbHVlKSkge1xuICAgICAgdGhpcy5fdGVybSA9IHZhbHVlO1xuICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgIHRoaXMub3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICB0aGlzLnByb2Nlc3NTZWFyY2godHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBzZXQgY29uZmlnKHZhbHVlOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ10pIHtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcub3B0aW9ucyAhPT0gdmFsdWUub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zRnVuY3Rpb25IYXNDaGFuZ2VkID0gdHJ1ZTsgLy8gcmVzZXQgcGFnZSBzbyB0aGF0IG5ldyBvcHRpb25zIGNhbGwgaXMgdXNlZCB0byBzZWFyY2hcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29uZmlnKCk6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIHNob3VsZFNlYXJjaCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRlcm1IYXNDaGFuZ2VkID0gdmFsdWUgIT09IHRoaXMuX3Rlcm07XG4gICAgY29uc3Qgb3B0aW9uc05vdFlldENhbGxlZCA9IHRoaXMucGFnZSA9PT0gMDtcblxuICAgIHJldHVybiB0ZXJtSGFzQ2hhbmdlZCB8fCBvcHRpb25zTm90WWV0Q2FsbGVkIHx8IHRoaXMub3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZDtcbiAgfVxuXG4gIGFkZFNjcm9sbExpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5lbmFibGVJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgY29uc3QgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICAgIGlmIChlbGVtZW50ICYmICFlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInKSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInLCAndHJ1ZScpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvY2Vzc1NlYXJjaChzaG91bGRSZXNldD86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmhhc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHRoaXMuc2VhcmNoKHRoaXMudGVybSkuc3Vic2NyaWJlKFxuICAgICAgKHJlc3VsdHM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc2hvdWxkUmVzZXQpIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1N0YXRpYykge1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyRGF0YShyZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLm1hdGNoZXMuY29uY2F0KHJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMubGFzdFBhZ2UgPSByZXN1bHRzICYmICFyZXN1bHRzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gJiYgIXRoaXMuc2VsZWN0aW5nTWF0Y2hlcykge1xuICAgICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3ZlcmxheS51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgfSk7IC8vIEBia2ltYmFsbDogVGhpcyB3YXMgYWRkZWQgZm9yIER5bGFuIFNjaHVsdGUsIDkuMTguMjAxNyA0OjE0UE0gRVNULCB5b3UncmUgd2VsY29tZSFcbiAgICAgIH0sXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0aGlzLnRlcm0gJiYgdGhpcy50ZXJtLmxlbmd0aCAhPT0gMDtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnRlcm0gJiYgdGhpcy50ZXJtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZW5vXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzZWFyY2godGVybSwgbW9kZT8pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIHJldHVybiBmcm9tKFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBtYXRjaCBkYXRhXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgZGF0YVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgcmV0dXJuZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShvcHRpb25zKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3VsZENhbGxPcHRpb25zRnVuY3Rpb24odGVybSkpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3JlamVjdCcpICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3Jlc29sdmUnKSkgfHxcbiAgICAgICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9wdGlvbnMpLmhhc093blByb3BlcnR5KCd0aGVuJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgICAgb3B0aW9ucy50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgICAgb3B0aW9ucyh0ZXJtLCArK3RoaXMucGFnZSlcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEFsbCBvdGhlciBraW5kcyBvZiBkYXRhIGFyZSByZWplY3RlZFxuICAgICAgICAgICAgICByZWplY3QoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKHRlcm0sICsrdGhpcy5wYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlZmF1bHRPcHRpb25zKS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkoZGVmYXVsdE9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIE5vIHNlYXJjaCB0ZXJtIGdldHMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgcmVqZWN0KCdObyBzZWFyY2ggdGVybScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBObyBkYXRhIGdldHMgcmVqZWN0ZWRcbiAgICAgICAgICByZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBzaG91bGRDYWxsT3B0aW9uc0Z1bmN0aW9uKHRlcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiAnbWluU2VhcmNoTGVuZ3RoJyBpbiB0aGlzLmNvbmZpZyAmJiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuY29uZmlnLm1pblNlYXJjaExlbmd0aCkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgJiYgdGVybS5sZW5ndGggPj0gdGhpcy5jb25maWcubWluU2VhcmNoTGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gISEodGVybSAmJiB0ZXJtLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0cnVjdHVyZUFycmF5XG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gdGhlIGRhdGEgb25jZSBnZXREYXRhIHJlc29sdmVzIGl0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHN0cnVjdHVyZXMgYW4gYXJyYXkgb2Ygbm9kZXMgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggYVxuICAgKiAnbmFtZScgZmllbGQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHN0cnVjdHVyZUFycmF5KGNvbGxlY3Rpb246IGFueSk6IGFueSB7XG4gICAgY29uc3QgZGF0YUFycmF5ID0gY29sbGVjdGlvbi5kYXRhID8gY29sbGVjdGlvbi5kYXRhIDogY29sbGVjdGlvbjtcbiAgICBpZiAoZGF0YUFycmF5ICYmICh0eXBlb2YgZGF0YUFycmF5WzBdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0YUFycmF5WzBdID09PSAnbnVtYmVyJykpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgIGxhYmVsOiBpdGVtLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhQXJyYXkubWFwKChkYXRhKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmNvbmZpZy5maWVsZCA/IGRhdGFbdGhpcy5jb25maWcuZmllbGRdIDogZGF0YS52YWx1ZSB8fCBkYXRhO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlRm9ybWF0KSB7XG4gICAgICAgIHZhbHVlID0gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy52YWx1ZUZvcm1hdCwgZGF0YSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuY29uZmlnLmZvcm1hdCA/IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcuZm9ybWF0LCBkYXRhKSA6IGRhdGEubGFiZWwgfHwgU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB7IHZhbHVlLCBsYWJlbCwgZGF0YSB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGZpbHRlckRhdGE9XG4gICAqIEBwYXJhbSBtYXRjaGVzIC0gQ29sbGVjdGlvbiBvZiBvYmplY3RzPVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBsb29wcyB0aHJvdWdoIHRoZSBwaWNrZXIgb3B0aW9ucyBhbmQgY3JlYXRlcyBhIGZpbHRlcmVkIGxpc3Qgb2Ygb2JqZWN0cyB0aGF0IGNvbnRhaW5cbiAgICogdGhlIG5ld1NlYXJjaC5cbiAgICovXG4gIGZpbHRlckRhdGEobWF0Y2hlcyk6IEFycmF5PGFueT4ge1xuICAgIGlmICh0aGlzLnRlcm0gJiYgbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gflN0cmluZyhtYXRjaC5sYWJlbClcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5pbmRleE9mKHRoaXMudGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTaG93IG5vIHJlY2VudCByZXN1bHRzIHRlbXBsYXRlXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgZW50ZXIga2V5IHRvIGNhbGwgdGhlIHNlbGVjdE1hdGNoIG1ldGhvZC5cbiAgICovXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKCkge1xuICAgIHRoaXMuc2VsZWN0TWF0Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBwcmV2QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2V0cyBhY3RpdmVNYXRjaCB0byB0aGUgbWF0Y2ggYmVmb3JlIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqL1xuICBwcmV2QWN0aXZlTWF0Y2goKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICB0aGlzLmFjdGl2ZU1hdGNoID0gdGhpcy5tYXRjaGVzW2luZGV4IC0gMSA8IDAgPyB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMV07XG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG5leHRBY3RpdmVNYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzZXRzIGFjdGl2ZU1hdGNoIHRvIHRoZSBtYXRjaCBhZnRlciB0aGUgY3VycmVudCBub2RlLlxuICAgKi9cbiAgbmV4dEFjdGl2ZU1hdGNoKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IHRoaXMubWF0Y2hlc1tpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFdO1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuT2ZMaXN0RWxlbWVudCgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBpZiAodGhpcy5nZXRMaXN0RWxlbWVudCgpKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKS5jaGlsZHJlbjtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgc2Nyb2xsVG9BY3RpdmUoKSB7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMuZ2V0Q2hpbGRyZW5PZkxpc3RFbGVtZW50KCk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RBY3RpdmVcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0QWN0aXZlKG1hdGNoKSB7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IG1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQWN0aXZlXG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIGlzQWN0aXZlKG1hdGNoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlTWF0Y2ggPT09IG1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdE1hdGNoXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHNlbGVjdE1hdGNoKGV2ZW50PzogYW55LCBpdGVtPzogYW55KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmFjdGl2ZU1hdGNoO1xuICAgIGlmIChzZWxlY3RlZCAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuc2VsZWN0aW5nTWF0Y2hlcyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5wYXJlbnQuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oaWRlUmVzdWx0cygpO1xuICAgICAgICB0aGlzLnNlbGVjdGluZ01hdGNoZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGVzY2FwZVJlZ2V4cFxuICAgKiBAcGFyYW0gcXVlcnlUb0VzY2FwZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgdXNlZCB0b1xuICAgKiBtYXRjaC5cbiAgICovXG4gIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlKSB7XG4gICAgLy8gRXg6IGlmIHRoZSBjYXB0dXJlIGlzIFwiYVwiIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSA8c3Ryb25nPi10YWcgd3JhcHBlZCBIVE1MIHN0cmluZy5cbiAgICovXG4gIGhpZ2hsaWdodChtYXRjaCwgcXVlcnkpIHtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCBhIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xuICAgIHJldHVybiBxdWVyeSA/IG1hdGNoLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ2V4cChxdWVyeS50cmltKCkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKSA6IG1hdGNoO1xuICB9XG5cbiAgcHJlc2VsZWN0ZWQobWF0Y2gpIHtcbiAgICBpZiAodGhpcy5jb25maWcucHJlc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHByZXNlbGVjdGVkRnVuYzogRnVuY3Rpb24gPSB0aGlzLmNvbmZpZy5wcmVzZWxlY3RlZDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXNlbGVjdGVkRnVuYyhtYXRjaCwgaXRlbSk7XG4gICAgICAgIH0pICE9PSAtMVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBpc1ByZXNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0udmFsdWUgJiYgbWF0Y2ggJiYgbWF0Y2gudmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZS5pZCAmJiBtYXRjaC52YWx1ZS5pZCkge1xuICAgICAgICAgICAgaXNQcmVzZWxlY3RlZCA9IGl0ZW0udmFsdWUuaWQgPT09IG1hdGNoLnZhbHVlLmlkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiBpdGVtLnZhbHVlLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZS52YWx1ZSA9PT0gbWF0Y2gudmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzUHJlc2VsZWN0ZWQgPSBpdGVtLnZhbHVlID09PSBtYXRjaC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzUHJlc2VsZWN0ZWQ7XG4gICAgICB9KSAhPT0gLTFcbiAgICApO1xuICB9XG59XG4iXX0=