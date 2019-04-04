/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                else if (item.value instanceof Object && item.value.hasOwnProperty('value')) {
                    isPreselected = item.value.value === match.value;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBRXJFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFcEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQVN4QztJQXFCRSwyQkFBWSxPQUFtQixFQUFFLEdBQXNCO1FBcEJ2RCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLElBQUksQ0FBQztRQU16QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBRzlCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUl4QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELG1DQUFPOzs7SUFBUDs7WUFDTSxPQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUM1QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDckQsT0FBTyxDQUFD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dCB7IEVsZW1lbnRSZWYsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG4vLyBWZW5kb3JcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbi8qKlxuICogQG5hbWU6IFBpY2tlclJlc3VsdHNcbiAqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyB0aGUgYWN0dWFsIGxpc3Qgb2YgbWF0Y2hlcyB0aGF0IGdldHMgaW5qZWN0ZWQgaW50byB0aGUgRE9NLiBJdCdzIGFsc28gdGhlIHBpZWNlIHRoYXQgY2FuIGJlXG4gKiBvdmVyd3JpdHRlbiBpZiBjdXN0b20gbGlzdCBvcHRpb25zIGFyZSBuZWVkZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIF90ZXJtOiBzdHJpbmcgPSAnJztcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgbWF0Y2hlczogYW55ID0gW107XG4gIGhhc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBpc1N0YXRpYzogYm9vbGVhbiA9IHRydWU7XG4gIGNvbmZpZzogYW55O1xuICBhY3RpdmVNYXRjaDogYW55O1xuICBwYXJlbnQ6IGFueTtcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgcGFnZTogbnVtYmVyID0gMDtcbiAgbGFzdFBhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYXV0b1NlbGVjdEZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgb3ZlcmxheTogT3ZlcmxheVJlZjtcblxuICBwcml2YXRlIHNlbGVjdGluZ01hdGNoZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZWYgPSByZWY7XG4gICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gdGhpcy5vblNjcm9sbERvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsZWFuVXAoKTogdm9pZCB7XG4gICAgbGV0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJykpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicpO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsRG93bihldmVudDogTW91c2VXaGVlbEV2ZW50KSB7XG4gICAgbGV0IGVsZW1lbnQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgbGV0IG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbSA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwO1xuICAgICAgaWYgKG9mZnNldCA+PSBib3R0b20pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5sYXN0UGFnZSAmJiAhdGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnByb2Nlc3NTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXJtKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXJtO1xuICB9XG5cbiAgc2V0IHRlcm0odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3Rlcm0gfHwgdGhpcy5wYWdlID09PSAwKSB7XG4gICAgICB0aGlzLl90ZXJtID0gdmFsdWU7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICB0aGlzLnByb2Nlc3NTZWFyY2godHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBhZGRTY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIGxldCBlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5nZXRMaXN0RWxlbWVudCgpO1xuICAgICAgaWYgKGVsZW1lbnQgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicsICd0cnVlJyk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm9jZXNzU2VhcmNoKHNob3VsZFJlc2V0PzogYm9vbGVhbikge1xuICAgIHRoaXMuaGFzRXJyb3IgPSBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5zZWFyY2godGhpcy50ZXJtKS5zdWJzY3JpYmUoXG4gICAgICAocmVzdWx0czogYW55KSA9PiB7XG4gICAgICAgIGlmIChzaG91bGRSZXNldCkge1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3RhdGljKSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5maWx0ZXJEYXRhKHJlc3VsdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMubWF0Y2hlcy5jb25jYXQocmVzdWx0cyk7XG4gICAgICAgICAgdGhpcy5sYXN0UGFnZSA9IHJlc3VsdHMgJiYgIXJlc3VsdHMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1hdGNoZXMubGVuZ3RoID4gMCAmJiB0aGlzLmF1dG9TZWxlY3RGaXJzdE9wdGlvbiAmJiAhdGhpcy5zZWxlY3RpbmdNYXRjaGVzKSB7XG4gICAgICAgICAgdGhpcy5uZXh0QWN0aXZlTWF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vdmVybGF5LnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgICAgdGhpcy5hZGRTY3JvbGxMaXN0ZW5lcigpO1xuICAgICAgICB9KTsgLy8gQGJraW1iYWxsOiBUaGlzIHdhcyBhZGRlZCBmb3IgRHlsYW4gU2NodWx0ZSwgOS4xOC4yMDE3IDQ6MTRQTSBFU1QsIHlvdSdyZSB3ZWxjb21lIVxuICAgICAgfSxcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5oYXNFcnJvciA9IHRoaXMudGVybSAmJiB0aGlzLnRlcm0ubGVuZ3RoICE9PSAwO1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RQYWdlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMudGVybSAmJiB0aGlzLnRlcm0ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lbm9cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIHNlYXJjaCh0ZXJtLCBtb2RlPyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNvbmZpZy5vcHRpb25zO1xuICAgIHJldHVybiBmcm9tKFxuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBtYXRjaCBkYXRhXG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgZGF0YVxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIEFycmF5cyBhcmUgcmV0dXJuZWQgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShvcHRpb25zKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0ZXJtICYmIHRlcm0ubGVuZ3RoID49ICh0aGlzLmNvbmZpZy5taW5TZWFyY2hMZW5ndGggfHwgMSkpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3JlamVjdCcpICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3Jlc29sdmUnKSkgfHxcbiAgICAgICAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9wdGlvbnMpLmhhc093blByb3BlcnR5KCd0aGVuJylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgICAgb3B0aW9ucy50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIFByb21pc2VzIChFUzYgb3IgRGVmZXJyZWQpIGFyZSByZXNvbHZlZCB3aGVuZXZlciB0aGV5IHJlc29sdmVcbiAgICAgICAgICAgICAgb3B0aW9ucyh0ZXJtLCArK3RoaXMucGFnZSlcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIEFsbCBvdGhlciBraW5kcyBvZiBkYXRhIGFyZSByZWplY3RlZFxuICAgICAgICAgICAgICByZWplY3QoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucyh0ZXJtLCArK3RoaXMucGFnZSk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihkZWZhdWx0T3B0aW9ucykuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KGRlZmF1bHRPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheSh0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBObyBzZWFyY2ggdGVybSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgICAgIHJlamVjdCgnTm8gc2VhcmNoIHRlcm0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm8gZGF0YSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0cnVjdHVyZUFycmF5XG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gdGhlIGRhdGEgb25jZSBnZXREYXRhIHJlc29sdmVzIGl0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHN0cnVjdHVyZXMgYW4gYXJyYXkgb2Ygbm9kZXMgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggYVxuICAgKiAnbmFtZScgZmllbGQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHN0cnVjdHVyZUFycmF5KGNvbGxlY3Rpb246IGFueSk6IGFueSB7XG4gICAgbGV0IGRhdGFBcnJheSA9IGNvbGxlY3Rpb24uZGF0YSA/IGNvbGxlY3Rpb24uZGF0YSA6IGNvbGxlY3Rpb247XG4gICAgaWYgKGRhdGFBcnJheSAmJiAodHlwZW9mIGRhdGFBcnJheVswXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGFBcnJheVswXSA9PT0gJ251bWJlcicpKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUFycmF5Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5jb25maWcuZmllbGQgPyBkYXRhW3RoaXMuY29uZmlnLmZpZWxkXSA6IGRhdGEudmFsdWUgfHwgZGF0YTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy52YWx1ZUZvcm1hdCkge1xuICAgICAgICB2YWx1ZSA9IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcudmFsdWVGb3JtYXQsIGRhdGEpO1xuICAgICAgfVxuICAgICAgbGV0IGxhYmVsID0gdGhpcy5jb25maWcuZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy5mb3JtYXQsIGRhdGEpIDogZGF0YS5sYWJlbCB8fCBTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHsgdmFsdWUsIGxhYmVsLCBkYXRhIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZmlsdGVyRGF0YT1cbiAgICogQHBhcmFtIG1hdGNoZXMgLSBDb2xsZWN0aW9uIG9mIG9iamVjdHM9XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGxvb3BzIHRocm91Z2ggdGhlIHBpY2tlciBvcHRpb25zIGFuZCBjcmVhdGVzIGEgZmlsdGVyZWQgbGlzdCBvZiBvYmplY3RzIHRoYXQgY29udGFpblxuICAgKiB0aGUgbmV3U2VhcmNoLlxuICAgKi9cbiAgZmlsdGVyRGF0YShtYXRjaGVzKTogQXJyYXk8YW55PiB7XG4gICAgaWYgKHRoaXMudGVybSAmJiBtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiB+U3RyaW5nKG1hdGNoLmxhYmVsKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLmluZGV4T2YodGhpcy50ZXJtLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFNob3cgbm8gcmVjZW50IHJlc3VsdHMgdGVtcGxhdGVcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RBY3RpdmVNYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBlbnRlciBrZXkgdG8gY2FsbCB0aGUgc2VsZWN0TWF0Y2ggbWV0aG9kLlxuICAgKi9cbiAgc2VsZWN0QWN0aXZlTWF0Y2goKSB7XG4gICAgdGhpcy5zZWxlY3RNYXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHByZXZBY3RpdmVNYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzZXRzIGFjdGl2ZU1hdGNoIHRvIHRoZSBtYXRjaCBiZWZvcmUgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICovXG4gIHByZXZBY3RpdmVNYXRjaCgpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICB0aGlzLmFjdGl2ZU1hdGNoID0gdGhpcy5tYXRjaGVzW2luZGV4IC0gMSA8IDAgPyB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMV07XG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG5leHRBY3RpdmVNYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzZXRzIGFjdGl2ZU1hdGNoIHRvIHRoZSBtYXRjaCBhZnRlciB0aGUgY3VycmVudCBub2RlLlxuICAgKi9cbiAgbmV4dEFjdGl2ZU1hdGNoKCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuYWN0aXZlTWF0Y2gpO1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSB0aGlzLm1hdGNoZXNbaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxXTtcbiAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbk9mTGlzdEVsZW1lbnQoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gW107XG4gICAgaWYgKHRoaXMuZ2V0TGlzdEVsZW1lbnQoKSkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldExpc3RFbGVtZW50KCkuY2hpbGRyZW47XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHNjcm9sbFRvQWN0aXZlKCkge1xuICAgIGxldCBsaXN0ID0gdGhpcy5nZXRMaXN0RWxlbWVudCgpO1xuICAgIGxldCBpdGVtcyA9IHRoaXMuZ2V0Q2hpbGRyZW5PZkxpc3RFbGVtZW50KCk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgbGV0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdEFjdGl2ZVxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBzZWxlY3RBY3RpdmUobWF0Y2gpIHtcbiAgICB0aGlzLmFjdGl2ZU1hdGNoID0gbWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNBY3RpdmVcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgaXNBY3RpdmUobWF0Y2gpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVNYXRjaCA9PT0gbWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0TWF0Y2hcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0TWF0Y2goZXZlbnQ/OiBhbnksIGl0ZW0/OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkICYmIHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC52YWx1ZSA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5zZWxlY3RpbmdNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnBhcmVudC5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucGFyZW50LmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nTWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZXNjYXBlUmVnZXhwXG4gICAqIEBwYXJhbSBxdWVyeVRvRXNjYXBlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvXG4gICAqIG1hdGNoLlxuICAgKi9cbiAgZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGUpIHtcbiAgICAvLyBFeDogaWYgdGhlIGNhcHR1cmUgaXMgXCJhXCIgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICAgIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIDxzdHJvbmc+LXRhZyB3cmFwcGVkIEhUTUwgc3RyaW5nLlxuICAgKi9cbiAgaGlnaGxpZ2h0KG1hdGNoLCBxdWVyeSkge1xuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIGEgdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgcmV0dXJuIHF1ZXJ5ID8gbWF0Y2gucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuZXNjYXBlUmVnZXhwKHF1ZXJ5LnRyaW0oKSksICdnaScpLCAnPHN0cm9uZz4kJjwvc3Ryb25nPicpIDogbWF0Y2g7XG4gIH1cblxuICBwcmVzZWxlY3RlZChtYXRjaCkge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgaXNQcmVzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnZhbHVlICYmIG1hdGNoICYmIG1hdGNoLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUuaWQgJiYgbWF0Y2gudmFsdWUuaWQpIHtcbiAgICAgICAgICAgIGlzUHJlc2VsZWN0ZWQgPSBpdGVtLnZhbHVlLmlkID09PSBtYXRjaC52YWx1ZS5pZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgaXRlbS52YWx1ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgaXNQcmVzZWxlY3RlZCA9IGl0ZW0udmFsdWUudmFsdWUgPT09IG1hdGNoLnZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZSA9PT0gbWF0Y2gudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ByZXNlbGVjdGVkO1xuICAgICAgfSkgIT09IC0xXG4gICAgKTtcbiAgfVxufVxuIl19