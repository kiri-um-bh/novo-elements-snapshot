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
export class BasePickerResults {
    /**
     * @param {?} element
     * @param {?} ref
     */
    constructor(element, ref) {
        this._term = '';
        this.selected = [];
        this.matches = [];
        this.hasError = false;
        this.isLoading = false;
        this.isStatic = true;
        this.page = 0;
        this.lastPage = false;
        this.autoSelectFirstOption = true;
        this.statusDisplayValueMap = {
            blah332V: 'blah332DV,',
            testV: 'testDV,',
            'New LeadV': 'New LeadDV',
            InterviewingV: 'InterviewingDV',
            AcceptedV: 'AcceptedDV',
            RejectedV: 'RejectedDV',
            Archive: 'ArchiveDV',
        };
        this.selectingMatches = false;
        this.element = element;
        this.ref = ref;
        this.scrollHandler = this.onScrollDown.bind(this);
    }
    /**
     * @return {?}
     */
    cleanUp() {
        /** @type {?} */
        let element = this.getListElement();
        if (element && element.hasAttribute('scrollListener')) {
            element.removeAttribute('scrollListener');
            element.removeEventListener('scroll', this.scrollHandler);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onScrollDown(event) {
        /** @type {?} */
        let element = event.target;
        if (element) {
            /** @type {?} */
            let offset = element.offsetHeight + element.scrollTop;
            /** @type {?} */
            let bottom = element.scrollHeight - 300;
            if (offset >= bottom) {
                event.stopPropagation();
                if (!this.lastPage && !this.isLoading) {
                    this.processSearch();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    get term() {
        return this._term;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set term(value) {
        if (value !== this._term || this.page === 0) {
            this._term = value;
            this.page = 0;
            this.matches = [];
            this.processSearch(true);
        }
        else {
            this.addScrollListener();
        }
    }
    /**
     * @return {?}
     */
    addScrollListener() {
        if (this.config.enableInfiniteScroll) {
            /** @type {?} */
            let element = this.getListElement();
            if (element && !element.hasAttribute('scrollListener')) {
                element.setAttribute('scrollListener', 'true');
                element.addEventListener('scroll', this.scrollHandler);
            }
        }
    }
    /*
       * status can have a display value as well as an actual value per fieldmaps
       */
    /**
     * @param {?} results
     * @return {?}
     */
    resultsHaveStatus(results) {
        return this.statusDisplayValueMap && results.some(({ data }) => data && !!data.status);
    }
    /**
     * @param {?} results
     * @return {?}
     */
    mapStatusToDisplayValue(results) {
        return results.map((result) => (Object.assign({}, result, (result.data
            ? {
                data: Object.assign({}, result.data, (result.data.status ? { status: this.statusDisplayValueMap[result.data.status] } : {})),
            }
            : {}))));
    }
    /**
     * @param {?=} shouldReset
     * @return {?}
     */
    processSearch(shouldReset) {
        this.hasError = false;
        this.isLoading = true;
        this.ref.markForCheck();
        this.search(this.term).subscribe((results) => {
            if (this.resultsHaveStatus(results)) {
                results = this.mapStatusToDisplayValue(results);
            }
            if (shouldReset) {
                this.matches = [];
            }
            if (this.isStatic) {
                this.matches = this.filterData(results);
            }
            else {
                this.matches = this.matches.concat(results);
                this.lastPage = results && !results.length;
            }
            if (this.matches.length > 0 && this.autoSelectFirstOption && !this.selectingMatches) {
                this.nextActiveMatch();
            }
            this.isLoading = false;
            this.ref.markForCheck();
            setTimeout(() => {
                this.overlay.updatePosition();
                this.addScrollListener();
            }); // @bkimball: This was added for Dylan Schulte, 9.18.2017 4:14PM EST, you're welcome!
        }, (err) => {
            this.hasError = this.term && this.term.length !== 0;
            this.isLoading = false;
            this.lastPage = true;
            if (this.term && this.term.length !== 0) {
                console.error(err); // tslint:disable-lineno
            }
            this.ref.markForCheck();
        });
    }
    /**
     * @param {?} term
     * @param {?=} mode
     * @return {?}
     */
    search(term, mode) {
        /** @type {?} */
        let options = this.config.options;
        return from(new Promise((resolve, reject) => {
            // Check if there is match data
            if (options) {
                // Resolve the data
                if (Array.isArray(options)) {
                    this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(this.structureArray(options));
                }
                else if (term && term.length >= (this.config.minSearchLength || 1)) {
                    if ((options.hasOwnProperty('reject') && options.hasOwnProperty('resolve')) ||
                        Object.getPrototypeOf(options).hasOwnProperty('then')) {
                        this.isStatic = false;
                        // Promises (ES6 or Deferred) are resolved whenever they resolve
                        options.then(this.structureArray.bind(this)).then(resolve, reject);
                    }
                    else if (typeof options === 'function') {
                        this.isStatic = false;
                        // Promises (ES6 or Deferred) are resolved whenever they resolve
                        options(term, ++this.page)
                            .then(this.structureArray.bind(this))
                            .then(resolve, reject);
                    }
                    else {
                        // All other kinds of data are rejected
                        reject('The data provided is not an array or a promise');
                        throw new Error('The data provided is not an array or a promise');
                    }
                }
                else {
                    if (this.config.defaultOptions) {
                        this.isStatic = false;
                        if (typeof this.config.defaultOptions === 'function') {
                            /** @type {?} */
                            let defaultOptions = this.config.defaultOptions(term, ++this.page);
                            if (Object.getPrototypeOf(defaultOptions).hasOwnProperty('then')) {
                                defaultOptions.then(this.structureArray.bind(this)).then(resolve, reject);
                            }
                            else {
                                resolve(this.structureArray(defaultOptions));
                            }
                        }
                        else {
                            resolve(this.structureArray(this.config.defaultOptions));
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
    }
    /**
     * \@name structureArray
     * \@description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     * @param {?} collection - the data once getData resolves it
     *
     * @return {?}
     */
    structureArray(collection) {
        /** @type {?} */
        let dataArray = collection.data ? collection.data : collection;
        if (dataArray && (typeof dataArray[0] === 'string' || typeof dataArray[0] === 'number')) {
            return collection.map((item) => {
                return {
                    value: item,
                    label: item,
                };
            });
        }
        return dataArray.map((data) => {
            /** @type {?} */
            let value = this.config.field ? data[this.config.field] : data.value || data;
            if (this.config.valueFormat) {
                value = Helpers.interpolate(this.config.valueFormat, data);
            }
            /** @type {?} */
            let label = this.config.format ? Helpers.interpolate(this.config.format, data) : data.label || String(value);
            return { value, label, data };
        });
    }
    /**
     * \@name filterData=
     * \@description This function loops through the picker options and creates a filtered list of objects that contain
     * the newSearch.
     * @param {?} matches - Collection of objects=
     *
     * @return {?}
     */
    filterData(matches) {
        if (this.term && matches) {
            return matches.filter((match) => {
                return ~String(match.label)
                    .toLowerCase()
                    .indexOf(this.term.toLowerCase());
            });
        }
        // Show no recent results template
        return matches;
    }
    /**
     * \@name selectActiveMatch
     *
     * \@description This function is called when the user presses the enter key to call the selectMatch method.
     * @return {?}
     */
    selectActiveMatch() {
        this.selectMatch();
    }
    /**
     * \@name prevActiveMatch
     *
     * \@description This function sets activeMatch to the match before the current node.
     * @return {?}
     */
    prevActiveMatch() {
        /** @type {?} */
        let index = this.matches.indexOf(this.activeMatch);
        this.activeMatch = this.matches[index - 1 < 0 ? this.matches.length - 1 : index - 1];
        this.scrollToActive();
        this.ref.markForCheck();
    }
    /**
     * \@name nextActiveMatch
     *
     * \@description This function sets activeMatch to the match after the current node.
     * @return {?}
     */
    nextActiveMatch() {
        /** @type {?} */
        let index = this.matches.indexOf(this.activeMatch);
        this.activeMatch = this.matches[index + 1 > this.matches.length - 1 ? 0 : index + 1];
        this.scrollToActive();
        this.ref.markForCheck();
    }
    /**
     * @return {?}
     */
    getListElement() {
        return this.element.nativeElement;
    }
    /**
     * @return {?}
     */
    getChildrenOfListElement() {
        /** @type {?} */
        let children = [];
        if (this.getListElement()) {
            children = this.getListElement().children;
        }
        return children;
    }
    /**
     * @return {?}
     */
    scrollToActive() {
        /** @type {?} */
        let list = this.getListElement();
        /** @type {?} */
        let items = this.getChildrenOfListElement();
        /** @type {?} */
        let index = this.matches.indexOf(this.activeMatch);
        /** @type {?} */
        let item = items[index];
        if (item) {
            list.scrollTop = item.offsetTop;
        }
    }
    /**
     * \@name selectActive
     * \@description
     * @param {?} match
     *
     * @return {?}
     */
    selectActive(match) {
        this.activeMatch = match;
    }
    /**
     * \@name isActive
     * \@description
     * @param {?} match
     *
     * @return {?}
     */
    isActive(match) {
        return this.activeMatch === match;
    }
    /**
     * \@name selectMatch
     * \@description
     * @param {?=} event
     * @param {?=} item
     *
     * @return {?}
     */
    selectMatch(event, item) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        /** @type {?} */
        const selected = this.activeMatch;
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
    }
    /**
     * \@name escapeRegexp
     * \@description This function captures the whole query string and replace it with the string that will be used to
     * match.
     * @param {?} queryToEscape
     *
     * @return {?}
     */
    escapeRegexp(queryToEscape) {
        // Ex: if the capture is "a" the result will be \a
        return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }
    /**
     * \@name highlight
     * \@description This function should return a <strong>-tag wrapped HTML string.
     * @param {?} match
     * @param {?} query
     *
     * @return {?}
     */
    highlight(match, query) {
        // Replaces the capture string with a the same string inside of a "strong" tag
        return query ? match.replace(new RegExp(this.escapeRegexp(query.trim()), 'gi'), '<strong>$&</strong>') : match;
    }
    /**
     * @param {?} match
     * @return {?}
     */
    preselected(match) {
        return (this.selected.findIndex((item) => {
            /** @type {?} */
            let isPreselected = false;
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
    }
}
BasePickerResults.propDecorators = {
    matches: [{ type: Input }]
};
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
    BasePickerResults.prototype.statusDisplayValueMap;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFjLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7O0FBRXJFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFcEQsT0FBTyxFQUFFLElBQUksRUFBYyxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQVN4QyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQThCNUIsWUFBWSxPQUFtQixFQUFFLEdBQXNCO1FBN0J2RCxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFFMUIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFZLElBQUksQ0FBQztRQU16QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsMEJBQXFCLEdBQVksSUFBSSxDQUFDO1FBRXRDLDBCQUFxQixHQUFpQztZQUNwRCxRQUFRLEVBQUUsWUFBWTtZQUN0QixLQUFLLEVBQUUsU0FBUztZQUNoQixXQUFXLEVBQUUsWUFBWTtZQUN6QixhQUFhLEVBQUUsZ0JBQWdCO1lBQy9CLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLE9BQU8sRUFBRSxXQUFXO1NBQ3JCLENBQUM7UUFFTSxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFJeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENB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QUFDLENBQUMsQ0FDVixDQUFDO0lBQ0osQ0FBQzs7O3NCQTlYQSxLQUFLOzs7O0lBRk4sa0NBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLG9DQUNrQjs7SUFDbEIscUNBQTBCOztJQUMxQixzQ0FBMkI7O0lBQzNCLHFDQUF5Qjs7SUFDekIsbUNBQVk7O0lBQ1osd0NBQWlCOztJQUNqQixtQ0FBWTs7SUFDWixvQ0FBb0I7O0lBQ3BCLGdDQUF1Qjs7SUFDdkIsaUNBQWlCOztJQUNqQixxQ0FBMEI7O0lBQzFCLGtEQUFzQzs7SUFDdEMsb0NBQW9COztJQUNwQixrREFRRTs7Ozs7SUFFRiw2Q0FBMEM7Ozs7O0lBQzFDLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcblxuLyoqXG4gKiBAbmFtZTogUGlja2VyUmVzdWx0c1xuICpcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHRoZSBhY3R1YWwgbGlzdCBvZiBtYXRjaGVzIHRoYXQgZ2V0cyBpbmplY3RlZCBpbnRvIHRoZSBET00uIEl0J3MgYWxzbyB0aGUgcGllY2UgdGhhdCBjYW4gYmVcbiAqIG92ZXJ3cml0dGVuIGlmIGN1c3RvbSBsaXN0IG9wdGlvbnMgYXJlIG5lZWRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgX3Rlcm06IHN0cmluZyA9ICcnO1xuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBtYXRjaGVzOiBhbnkgPSBbXTtcbiAgaGFzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGlzU3RhdGljOiBib29sZWFuID0gdHJ1ZTtcbiAgY29uZmlnOiBhbnk7XG4gIGFjdGl2ZU1hdGNoOiBhbnk7XG4gIHBhcmVudDogYW55O1xuICBlbGVtZW50OiBFbGVtZW50UmVmO1xuICByZWY6IENoYW5nZURldGVjdG9yUmVmO1xuICBwYWdlOiBudW1iZXIgPSAwO1xuICBsYXN0UGFnZTogYm9vbGVhbiA9IGZhbHNlO1xuICBhdXRvU2VsZWN0Rmlyc3RPcHRpb246IGJvb2xlYW4gPSB0cnVlO1xuICBvdmVybGF5OiBPdmVybGF5UmVmO1xuICBzdGF0dXNEaXNwbGF5VmFsdWVNYXA6IHsgW3N0YXR1czogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgYmxhaDMzMlY6ICdibGFoMzMyRFYsJyxcbiAgICB0ZXN0VjogJ3Rlc3REViwnLFxuICAgICdOZXcgTGVhZFYnOiAnTmV3IExlYWREVicsXG4gICAgSW50ZXJ2aWV3aW5nVjogJ0ludGVydmlld2luZ0RWJyxcbiAgICBBY2NlcHRlZFY6ICdBY2NlcHRlZERWJyxcbiAgICBSZWplY3RlZFY6ICdSZWplY3RlZERWJyxcbiAgICBBcmNoaXZlOiAnQXJjaGl2ZURWJyxcbiAgfTtcblxuICBwcml2YXRlIHNlbGVjdGluZ01hdGNoZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZWYgPSByZWY7XG4gICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gdGhpcy5vblNjcm9sbERvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsZWFuVXAoKTogdm9pZCB7XG4gICAgbGV0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJykpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicpO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsRG93bihldmVudDogTW91c2VXaGVlbEV2ZW50KSB7XG4gICAgbGV0IGVsZW1lbnQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgbGV0IG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgZWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIGJvdHRvbSA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwO1xuICAgICAgaWYgKG9mZnNldCA+PSBib3R0b20pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICghdGhpcy5sYXN0UGFnZSAmJiAhdGhpcy5pc0xvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnByb2Nlc3NTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldCB0ZXJtKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXJtO1xuICB9XG5cbiAgc2V0IHRlcm0odmFsdWUpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3Rlcm0gfHwgdGhpcy5wYWdlID09PSAwKSB7XG4gICAgICB0aGlzLl90ZXJtID0gdmFsdWU7XG4gICAgICB0aGlzLnBhZ2UgPSAwO1xuICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICB0aGlzLnByb2Nlc3NTZWFyY2godHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBhZGRTY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIGxldCBlbGVtZW50OiBFbGVtZW50ID0gdGhpcy5nZXRMaXN0RWxlbWVudCgpO1xuICAgICAgaWYgKGVsZW1lbnQgJiYgIWVsZW1lbnQuaGFzQXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicsICd0cnVlJyk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBzdGF0dXMgY2FuIGhhdmUgYSBkaXNwbGF5IHZhbHVlIGFzIHdlbGwgYXMgYW4gYWN0dWFsIHZhbHVlIHBlciBmaWVsZG1hcHNcbiAgICovXG4gIHJlc3VsdHNIYXZlU3RhdHVzKHJlc3VsdHM6IHsgZGF0YT86IHsgc3RhdHVzPzogc3RyaW5nIH0gfVtdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdHVzRGlzcGxheVZhbHVlTWFwICYmIHJlc3VsdHMuc29tZSgoeyBkYXRhIH0pID0+IGRhdGEgJiYgISFkYXRhLnN0YXR1cyk7XG4gIH1cblxuICBtYXBTdGF0dXNUb0Rpc3BsYXlWYWx1ZShyZXN1bHRzOiB7IGRhdGE/OiB7IHN0YXR1cz86IHN0cmluZyB9IH1bXSk6IHsgZGF0YT86IHsgc3RhdHVzPzogc3RyaW5nIH0gfVtdIHtcbiAgICByZXR1cm4gcmVzdWx0cy5tYXAoKHJlc3VsdCkgPT4gKHtcbiAgICAgIC4uLnJlc3VsdCxcbiAgICAgIC4uLihyZXN1bHQuZGF0YVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4ucmVzdWx0LmRhdGEsXG4gICAgICAgICAgICAgIC4uLihyZXN1bHQuZGF0YS5zdGF0dXMgPyB7IHN0YXR1czogdGhpcy5zdGF0dXNEaXNwbGF5VmFsdWVNYXBbcmVzdWx0LmRhdGEuc3RhdHVzXSB9IDoge30pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9XG4gICAgICAgIDoge30pLFxuICAgIH0pKTtcbiAgfVxuXG4gIHByb2Nlc3NTZWFyY2goc2hvdWxkUmVzZXQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnNlYXJjaCh0aGlzLnRlcm0pLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucmVzdWx0c0hhdmVTdGF0dXMocmVzdWx0cykpIHtcbiAgICAgICAgICByZXN1bHRzID0gdGhpcy5tYXBTdGF0dXNUb0Rpc3BsYXlWYWx1ZShyZXN1bHRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkUmVzZXQpIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1N0YXRpYykge1xuICAgICAgICAgIHRoaXMubWF0Y2hlcyA9IHRoaXMuZmlsdGVyRGF0YShyZXN1bHRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLm1hdGNoZXMuY29uY2F0KHJlc3VsdHMpO1xuICAgICAgICAgIHRoaXMubGFzdFBhZ2UgPSByZXN1bHRzICYmICFyZXN1bHRzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tYXRjaGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5hdXRvU2VsZWN0Rmlyc3RPcHRpb24gJiYgIXRoaXMuc2VsZWN0aW5nTWF0Y2hlcykge1xuICAgICAgICAgIHRoaXMubmV4dEFjdGl2ZU1hdGNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub3ZlcmxheS51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgfSk7IC8vIEBia2ltYmFsbDogVGhpcyB3YXMgYWRkZWQgZm9yIER5bGFuIFNjaHVsdGUsIDkuMTguMjAxNyA0OjE0UE0gRVNULCB5b3UncmUgd2VsY29tZSFcbiAgICAgIH0sXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuaGFzRXJyb3IgPSB0aGlzLnRlcm0gJiYgdGhpcy50ZXJtLmxlbmd0aCAhPT0gMDtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnRlcm0gJiYgdGhpcy50ZXJtLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZW5vXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBzZWFyY2godGVybSwgbW9kZT8pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGxldCBvcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICByZXR1cm4gZnJvbShcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgbWF0Y2ggZGF0YVxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGFcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICAvLyBBcnJheXMgYXJlIHJldHVybmVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkob3B0aW9ucykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGVybSAmJiB0ZXJtLmxlbmd0aCA+PSAodGhpcy5jb25maWcubWluU2VhcmNoTGVuZ3RoIHx8IDEpKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChvcHRpb25zLmhhc093blByb3BlcnR5KCdyZWplY3QnKSAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KCdyZXNvbHZlJykpIHx8XG4gICAgICAgICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcHRpb25zKS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBQcm9taXNlcyAoRVM2IG9yIERlZmVycmVkKSBhcmUgcmVzb2x2ZWQgd2hlbmV2ZXIgdGhleSByZXNvbHZlXG4gICAgICAgICAgICAgIG9wdGlvbnMudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBQcm9taXNlcyAoRVM2IG9yIERlZmVycmVkKSBhcmUgcmVzb2x2ZWQgd2hlbmV2ZXIgdGhleSByZXNvbHZlXG4gICAgICAgICAgICAgIG9wdGlvbnModGVybSwgKyt0aGlzLnBhZ2UpXG4gICAgICAgICAgICAgICAgLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgcmVqZWN0KCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0gdGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnModGVybSwgKyt0aGlzLnBhZ2UpO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YoZGVmYXVsdE9wdGlvbnMpLmhhc093blByb3BlcnR5KCd0aGVuJykpIHtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheShkZWZhdWx0T3B0aW9ucykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkodGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gTm8gc2VhcmNoIHRlcm0gZ2V0cyByZWplY3RlZFxuICAgICAgICAgICAgICByZWplY3QoJ05vIHNlYXJjaCB0ZXJtJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE5vIGRhdGEgZ2V0cyByZWplY3RlZFxuICAgICAgICAgIHJlamVjdCgnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBhbnkpOiBhbnkge1xuICAgIGxldCBkYXRhQXJyYXkgPSBjb2xsZWN0aW9uLmRhdGEgPyBjb2xsZWN0aW9uLmRhdGEgOiBjb2xsZWN0aW9uO1xuICAgIGlmIChkYXRhQXJyYXkgJiYgKHR5cGVvZiBkYXRhQXJyYXlbMF0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBkYXRhQXJyYXlbMF0gPT09ICdudW1iZXInKSkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGl0ZW0sXG4gICAgICAgICAgbGFiZWw6IGl0ZW0sXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGFBcnJheS5tYXAoKGRhdGEpID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuY29uZmlnLmZpZWxkID8gZGF0YVt0aGlzLmNvbmZpZy5maWVsZF0gOiBkYXRhLnZhbHVlIHx8IGRhdGE7XG4gICAgICBpZiAodGhpcy5jb25maWcudmFsdWVGb3JtYXQpIHtcbiAgICAgICAgdmFsdWUgPSBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLnZhbHVlRm9ybWF0LCBkYXRhKTtcbiAgICAgIH1cbiAgICAgIGxldCBsYWJlbCA9IHRoaXMuY29uZmlnLmZvcm1hdCA/IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcuZm9ybWF0LCBkYXRhKSA6IGRhdGEubGFiZWwgfHwgU3RyaW5nKHZhbHVlKTtcbiAgICAgIHJldHVybiB7IHZhbHVlLCBsYWJlbCwgZGF0YSB9O1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGZpbHRlckRhdGE9XG4gICAqIEBwYXJhbSBtYXRjaGVzIC0gQ29sbGVjdGlvbiBvZiBvYmplY3RzPVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBsb29wcyB0aHJvdWdoIHRoZSBwaWNrZXIgb3B0aW9ucyBhbmQgY3JlYXRlcyBhIGZpbHRlcmVkIGxpc3Qgb2Ygb2JqZWN0cyB0aGF0IGNvbnRhaW5cbiAgICogdGhlIG5ld1NlYXJjaC5cbiAgICovXG4gIGZpbHRlckRhdGEobWF0Y2hlcyk6IEFycmF5PGFueT4ge1xuICAgIGlmICh0aGlzLnRlcm0gJiYgbWF0Y2hlcykge1xuICAgICAgcmV0dXJuIG1hdGNoZXMuZmlsdGVyKChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gflN0cmluZyhtYXRjaC5sYWJlbClcbiAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgIC5pbmRleE9mKHRoaXMudGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBTaG93IG5vIHJlY2VudCByZXN1bHRzIHRlbXBsYXRlXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgcHJlc3NlcyB0aGUgZW50ZXIga2V5IHRvIGNhbGwgdGhlIHNlbGVjdE1hdGNoIG1ldGhvZC5cbiAgICovXG4gIHNlbGVjdEFjdGl2ZU1hdGNoKCkge1xuICAgIHRoaXMuc2VsZWN0TWF0Y2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBwcmV2QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2V0cyBhY3RpdmVNYXRjaCB0byB0aGUgbWF0Y2ggYmVmb3JlIHRoZSBjdXJyZW50IG5vZGUuXG4gICAqL1xuICBwcmV2QWN0aXZlTWF0Y2goKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IHRoaXMubWF0Y2hlc1tpbmRleCAtIDEgPCAwID8gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFdO1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBuZXh0QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2V0cyBhY3RpdmVNYXRjaCB0byB0aGUgbWF0Y2ggYWZ0ZXIgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICovXG4gIG5leHRBY3RpdmVNYXRjaCgpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICB0aGlzLmFjdGl2ZU1hdGNoID0gdGhpcy5tYXRjaGVzW2luZGV4ICsgMSA+IHRoaXMubWF0Y2hlcy5sZW5ndGggLSAxID8gMCA6IGluZGV4ICsgMV07XG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0TGlzdEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW5PZkxpc3RFbGVtZW50KCkge1xuICAgIGxldCBjaGlsZHJlbiA9IFtdO1xuICAgIGlmICh0aGlzLmdldExpc3RFbGVtZW50KCkpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRMaXN0RWxlbWVudCgpLmNoaWxkcmVuO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICBzY3JvbGxUb0FjdGl2ZSgpIHtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZ2V0TGlzdEVsZW1lbnQoKTtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLmdldENoaWxkcmVuT2ZMaXN0RWxlbWVudCgpO1xuICAgIGxldCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuYWN0aXZlTWF0Y2gpO1xuICAgIGxldCBpdGVtID0gaXRlbXNbaW5kZXhdO1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW0ub2Zmc2V0VG9wO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RBY3RpdmVcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0QWN0aXZlKG1hdGNoKSB7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IG1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQWN0aXZlXG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIGlzQWN0aXZlKG1hdGNoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlTWF0Y2ggPT09IG1hdGNoO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdE1hdGNoXG4gICAqIEBwYXJhbSBldmVudFxuICAgKiBAcGFyYW0gaXRlbVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHNlbGVjdE1hdGNoKGV2ZW50PzogYW55LCBpdGVtPzogYW55KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmFjdGl2ZU1hdGNoO1xuICAgIGlmIChzZWxlY3RlZCAmJiB0aGlzLnBhcmVudCkge1xuICAgICAgdGhpcy5wYXJlbnQudmFsdWUgPSBzZWxlY3RlZDtcbiAgICAgIHRoaXMuc2VsZWN0aW5nTWF0Y2hlcyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5wYXJlbnQuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICB0aGlzLnBhcmVudC5oaWRlUmVzdWx0cygpO1xuICAgICAgICB0aGlzLnNlbGVjdGluZ01hdGNoZXMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGVzY2FwZVJlZ2V4cFxuICAgKiBAcGFyYW0gcXVlcnlUb0VzY2FwZVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBjYXB0dXJlcyB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZyB0aGF0IHdpbGwgYmUgdXNlZCB0b1xuICAgKiBtYXRjaC5cbiAgICovXG4gIGVzY2FwZVJlZ2V4cChxdWVyeVRvRXNjYXBlKSB7XG4gICAgLy8gRXg6IGlmIHRoZSBjYXB0dXJlIGlzIFwiYVwiIHRoZSByZXN1bHQgd2lsbCBiZSBcXGFcbiAgICByZXR1cm4gcXVlcnlUb0VzY2FwZS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNob3VsZCByZXR1cm4gYSA8c3Ryb25nPi10YWcgd3JhcHBlZCBIVE1MIHN0cmluZy5cbiAgICovXG4gIGhpZ2hsaWdodChtYXRjaCwgcXVlcnkpIHtcbiAgICAvLyBSZXBsYWNlcyB0aGUgY2FwdHVyZSBzdHJpbmcgd2l0aCBhIHRoZSBzYW1lIHN0cmluZyBpbnNpZGUgb2YgYSBcInN0cm9uZ1wiIHRhZ1xuICAgIHJldHVybiBxdWVyeSA/IG1hdGNoLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLmVzY2FwZVJlZ2V4cChxdWVyeS50cmltKCkpLCAnZ2knKSwgJzxzdHJvbmc+JCY8L3N0cm9uZz4nKSA6IG1hdGNoO1xuICB9XG5cbiAgcHJlc2VsZWN0ZWQobWF0Y2gpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5zZWxlY3RlZC5maW5kSW5kZXgoKGl0ZW0pID0+IHtcbiAgICAgICAgbGV0IGlzUHJlc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKGl0ZW0gJiYgaXRlbS52YWx1ZSAmJiBtYXRjaCAmJiBtYXRjaC52YWx1ZSkge1xuICAgICAgICAgIGlmIChpdGVtLnZhbHVlLmlkICYmIG1hdGNoLnZhbHVlLmlkKSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZS5pZCA9PT0gbWF0Y2gudmFsdWUuaWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzUHJlc2VsZWN0ZWQgPSBpdGVtLnZhbHVlID09PSBtYXRjaC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzUHJlc2VsZWN0ZWQ7XG4gICAgICB9KSAhPT0gLTFcbiAgICApO1xuICB9XG59XG4iXX0=