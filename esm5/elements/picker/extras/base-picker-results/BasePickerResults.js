/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            if (value !== this._term || this.page === 0) {
                this._term = value;
                this.page = 0;
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
        this.search(this.term).subscribe(function (results) {
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
            setTimeout(function () {
                _this.overlay.updatePosition();
                _this.addScrollListener();
            }); // @bkimball: This was added for Dylan Schulte, 9.18.2017 4:14PM EST, you're welcome!
        }, function (err) {
            _this.hasError = _this.term && _this.term.length !== 0;
            _this.isLoading = false;
            _this.lastPage = true;
            if (_this.term && _this.term.length !== 0) {
                console.error(err); // tslint:disable-lineno
            }
            _this.ref.markForCheck();
        });
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
        return from(new Promise(function (resolve, reject) {
            // Check if there is match data
            if (options) {
                // Resolve the data
                if (Array.isArray(options)) {
                    _this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(_this.structureArray(options));
                }
                else if (term && term.length >= (_this.config.minSearchLength || 1)) {
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
        }));
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
            return collection.map(function (item) {
                return {
                    value: item,
                    label: item,
                };
            });
        }
        return dataArray.map(function (data) {
            /** @type {?} */
            var value = _this.config.field ? data[_this.config.field] : data.value || data;
            if (_this.config.valueFormat) {
                value = Helpers.interpolate(_this.config.valueFormat, data);
            }
            /** @type {?} */
            var label = _this.config.format ? Helpers.interpolate(_this.config.format, data) : data.label || String(value);
            return { value: value, label: label, data: data };
        });
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
            return matches.filter(function (match) {
                return ~String(match.label)
                    .toLowerCase()
                    .indexOf(_this.term.toLowerCase());
            });
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
        return (this.selected.findIndex(function (item) {
            /** @type {?} */
            var isPreselected = false;
            if (item && item.value && match && match.value) {
                if (item.value.id && match.value.id) {
                    isPreselected = item.value.id === match.value.id;
                }
                else {
                    isPreselected = item.value === match.value;
                }
            }
            return isPreselected;
        }) !== -1);
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
    BasePickerResults.prototype.config;
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
    BasePickerResults.prototype.selectingMatches;
    /** @type {?} */
    BasePickerResults.prototype.scrollHandler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBRXJFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFcEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQVN4QztJQXFCRSwyQkFBWSxPQUFtQixFQUFFLEdBQXNCO1FBcEJ2RCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLElBQUksQ0FBQztRQU16QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBRzlCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUl4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELG1DQUFPOzs7SUFBUDs7WUFDTSxPQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUM1QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDckQsT0FBTyxDQUFD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Q0FBQyxVQUFDLElBQUk7O2dCQUN2QixhQUFhLEdBQUcsS0FBSztZQUN6QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO29CQUNuQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQzVDO2FBQ0Y7WUFDRCxPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDVixDQUFDO0lBQ0osQ0FBQzs7MEJBN1ZBLEtBQUs7O0lBOFZSLHdCQUFDO0NBQUEsQUFqV0QsSUFpV0M7U0FqV1ksaUJBQWlCOzs7SUFDNUIsa0NBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLG9DQUNrQjs7SUFDbEIscUNBQTBCOztJQUMxQixzQ0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFDekIsbUNBQVk7O0lBQ1osd0NBQWlCOztJQUNqQixtQ0FBWTs7SUFDWixvQ0FBb0I7O0lBQ3BCLGdDQUF1Qjs7SUFDdkIsaUNBQWlCOztJQUNqQixxQ0FBMEI7O0lBQzFCLGtEQUFzQzs7SUFDdEMsb0NBQW9COztJQUVwQiw2Q0FBMEM7O0lBQzFDLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuLyoqXG4gKiBAbmFtZTogUGlja2VyUmVzdWx0c1xuICpcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHRoZSBhY3R1YWwgbGlzdCBvZiBtYXRjaGVzIHRoYXQgZ2V0cyBpbmplY3RlZCBpbnRvIHRoZSBET00uIEl0J3MgYWxzbyB0aGUgcGllY2UgdGhhdCBjYW4gYmVcbiAqIG92ZXJ3cml0dGVuIGlmIGN1c3RvbSBsaXN0IG9wdGlvbnMgYXJlIG5lZWRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgX3Rlcm06IHN0cmluZyA9ICcnO1xuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBtYXRjaGVzOiBhbnkgPSBbXTtcbiAgaGFzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGlzU3RhdGljOiBib29sZWFuID0gdHJ1ZTtcbiAgY29uZmlnOiBhbnk7XG4gIGFjdGl2ZU1hdGNoOiBhbnk7XG4gIHBhcmVudDogYW55O1xuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICByZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwYWdlOiBudW1iZXIgPSAwO1xuICBsYXN0UGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBvdmVybGF5OiBPdmVybGF5UmVmO1xuXG4gIHByaXZhdGUgc2VsZWN0aW5nTWF0Y2hlczogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNjcm9sbEhhbmRsZXI6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlZiA9IHJlZjtcbiAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSB0aGlzLm9uU2Nyb2xsRG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY2xlYW5VcCgpOiB2b2lkIHtcbiAgICBsZXQgZWxlbWVudDogRWxlbWVudCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc2Nyb2xsTGlzdGVuZXInKSkge1xuICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJyk7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGxEb3duKGV2ZW50OiBNb3VzZVdoZWVsRXZlbnQpIHtcbiAgICBsZXQgZWxlbWVudDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBsZXQgb2Zmc2V0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBlbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDA7XG4gICAgICBpZiAob2Zmc2V0ID49IGJvdHRvbSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RQYWdlICYmICF0aGlzLmlzTG9hZGluZykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm07XG4gIH1cblxuICBzZXQgdGVybSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdGVybSB8fCB0aGlzLnBhZ2UgPT09IDApIHtcbiAgICAgIHRoaXMuX3Rlcm0gPSB2YWx1ZTtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNjcm9sbExpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5lbmFibGVJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgbGV0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJywgJ3RydWUnKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NTZWFyY2goc2hvdWxkUmVzZXQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnNlYXJjaCh0aGlzLnRlcm0pLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZFJlc2V0KSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlckRhdGEocmVzdWx0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5tYXRjaGVzLmNvbmNhdChyZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLmxhc3RQYWdlID0gcmVzdWx0cyAmJiAhcmVzdWx0cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2hlcy5sZW5ndGggPiAwICYmIHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uICYmICF0aGlzLnNlbGVjdGluZ01hdGNoZXMpIHtcbiAgICAgICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm92ZXJsYXkudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICB0aGlzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH0pOyAvLyBAYmtpbWJhbGw6IFRoaXMgd2FzIGFkZGVkIGZvciBEeWxhbiBTY2h1bHRlLCA5LjE4LjIwMTcgNDoxNFBNIEVTVCwgeW91J3JlIHdlbGNvbWUhXG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdGhpcy50ZXJtICYmIHRoaXMudGVybS5sZW5ndGggIT09IDA7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy50ZXJtICYmIHRoaXMudGVybS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVub1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoKHRlcm0sIG1vZGU/KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY29uZmlnLm9wdGlvbnM7XG4gICAgcmV0dXJuIGZyb20oXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIG1hdGNoIGRhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIHRoZSBkYXRhXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSB0cnVlO1xuICAgICAgICAgICAgLy8gQXJyYXlzIGFyZSByZXR1cm5lZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KG9wdGlvbnMpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRlcm0gJiYgdGVybS5sZW5ndGggPj0gKHRoaXMuY29uZmlnLm1pblNlYXJjaExlbmd0aCB8fCAxKSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVqZWN0JykgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVzb2x2ZScpKSB8fFxuICAgICAgICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3B0aW9ucykuaGFzT3duUHJvcGVydHkoJ3RoZW4nKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgICBvcHRpb25zLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgICBvcHRpb25zKHRlcm0sICsrdGhpcy5wYWdlKVxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQWxsIG90aGVyIGtpbmRzIG9mIGRhdGEgYXJlIHJlamVjdGVkXG4gICAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0T3B0aW9ucyA9IHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKHRlcm0sICsrdGhpcy5wYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlZmF1bHRPcHRpb25zKS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkoZGVmYXVsdE9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIE5vIHNlYXJjaCB0ZXJtIGdldHMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgcmVqZWN0KCdObyBzZWFyY2ggdGVybScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBObyBkYXRhIGdldHMgcmVqZWN0ZWRcbiAgICAgICAgICByZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc3RydWN0dXJlQXJyYXlcbiAgICogQHBhcmFtIGNvbGxlY3Rpb24gLSB0aGUgZGF0YSBvbmNlIGdldERhdGEgcmVzb2x2ZXMgaXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc3RydWN0dXJlcyBhbiBhcnJheSBvZiBub2RlcyBpbnRvIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCBhXG4gICAqICduYW1lJyBmaWVsZCBieSBkZWZhdWx0LlxuICAgKi9cbiAgc3RydWN0dXJlQXJyYXkoY29sbGVjdGlvbjogYW55KTogYW55IHtcbiAgICBsZXQgZGF0YUFycmF5ID0gY29sbGVjdGlvbi5kYXRhID8gY29sbGVjdGlvbi5kYXRhIDogY29sbGVjdGlvbjtcbiAgICBpZiAoZGF0YUFycmF5ICYmICh0eXBlb2YgZGF0YUFycmF5WzBdID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZGF0YUFycmF5WzBdID09PSAnbnVtYmVyJykpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgIGxhYmVsOiBpdGVtLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhQXJyYXkubWFwKChkYXRhKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmNvbmZpZy5maWVsZCA/IGRhdGFbdGhpcy5jb25maWcuZmllbGRdIDogZGF0YS52YWx1ZSB8fCBkYXRhO1xuICAgICAgaWYgKHRoaXMuY29uZmlnLnZhbHVlRm9ybWF0KSB7XG4gICAgICAgIHZhbHVlID0gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy52YWx1ZUZvcm1hdCwgZGF0YSk7XG4gICAgICB9XG4gICAgICBsZXQgbGFiZWwgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmZvcm1hdCwgZGF0YSkgOiBkYXRhLmxhYmVsIHx8IFN0cmluZyh2YWx1ZSk7XG4gICAgICByZXR1cm4geyB2YWx1ZSwgbGFiZWwsIGRhdGEgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaWx0ZXJEYXRhPVxuICAgKiBAcGFyYW0gbWF0Y2hlcyAtIENvbGxlY3Rpb24gb2Ygb2JqZWN0cz1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCB0aGUgcGlja2VyIG9wdGlvbnMgYW5kIGNyZWF0ZXMgYSBmaWx0ZXJlZCBsaXN0IG9mIG9iamVjdHMgdGhhdCBjb250YWluXG4gICAqIHRoZSBuZXdTZWFyY2guXG4gICAqL1xuICBmaWx0ZXJEYXRhKG1hdGNoZXMpOiBBcnJheTxhbnk+IHtcbiAgICBpZiAodGhpcy50ZXJtICYmIG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgcmV0dXJuIH5TdHJpbmcobWF0Y2gubGFiZWwpXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuaW5kZXhPZih0aGlzLnRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gU2hvdyBubyByZWNlbnQgcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdEFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIGVudGVyIGtleSB0byBjYWxsIHRoZSBzZWxlY3RNYXRjaCBtZXRob2QuXG4gICAqL1xuICBzZWxlY3RBY3RpdmVNYXRjaCgpIHtcbiAgICB0aGlzLnNlbGVjdE1hdGNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcHJldkFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNldHMgYWN0aXZlTWF0Y2ggdG8gdGhlIG1hdGNoIGJlZm9yZSB0aGUgY3VycmVudCBub2RlLlxuICAgKi9cbiAgcHJldkFjdGl2ZU1hdGNoKCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuYWN0aXZlTWF0Y2gpO1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSB0aGlzLm1hdGNoZXNbaW5kZXggLSAxIDwgMCA/IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxIDogaW5kZXggLSAxXTtcbiAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgbmV4dEFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNldHMgYWN0aXZlTWF0Y2ggdG8gdGhlIG1hdGNoIGFmdGVyIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqL1xuICBuZXh0QWN0aXZlTWF0Y2goKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IHRoaXMubWF0Y2hlc1tpbmRleCArIDEgPiB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDFdO1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuT2ZMaXN0RWxlbWVudCgpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXTtcbiAgICBpZiAodGhpcy5nZXRMaXN0RWxlbWVudCgpKSB7XG4gICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKS5jaGlsZHJlbjtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgc2Nyb2xsVG9BY3RpdmUoKSB7XG4gICAgbGV0IGxpc3QgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgbGV0IGl0ZW1zID0gdGhpcy5nZXRDaGlsZHJlbk9mTGlzdEVsZW1lbnQoKTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICBsZXQgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0QWN0aXZlXG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHNlbGVjdEFjdGl2ZShtYXRjaCkge1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSBtYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0FjdGl2ZVxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBpc0FjdGl2ZShtYXRjaCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZU1hdGNoID09PSBtYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RNYXRjaFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5hY3RpdmVNYXRjaDtcbiAgICBpZiAoc2VsZWN0ZWQgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LnZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnNlbGVjdGluZ01hdGNoZXMgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucGFyZW50LmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdNYXRjaGVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlc2NhcGVSZWdleHBcbiAgICogQHBhcmFtIHF1ZXJ5VG9Fc2NhcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWdobGlnaHRcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIHByZXNlbGVjdGVkKG1hdGNoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBpc1ByZXNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0udmFsdWUgJiYgbWF0Y2ggJiYgbWF0Y2gudmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZS5pZCAmJiBtYXRjaC52YWx1ZS5pZCkge1xuICAgICAgICAgICAgaXNQcmVzZWxlY3RlZCA9IGl0ZW0udmFsdWUuaWQgPT09IG1hdGNoLnZhbHVlLmlkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZSA9PT0gbWF0Y2gudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ByZXNlbGVjdGVkO1xuICAgICAgfSkgIT09IC0xXG4gICAgKTtcbiAgfVxufVxuIl19