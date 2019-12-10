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
        this.optionsFunctionHasChanged = false;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set config(value) {
        if (this.config && this.config.options !== value.options) {
            this.optionsFunctionHasChanged = true; // reset page so that new options call is used to search
        }
        this._config = value;
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    shouldSearch(value) {
        /** @type {?} */
        const termHasChanged = value !== this._term;
        /** @type {?} */
        const optionsNotYetCalled = this.page === 0;
        return termHasChanged || optionsNotYetCalled || this.optionsFunctionHasChanged;
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
    /**
     * @param {?=} shouldReset
     * @return {?}
     */
    processSearch(shouldReset) {
        this.hasError = false;
        this.isLoading = true;
        this.ref.markForCheck();
        this.search(this.term).subscribe((/**
         * @param {?} results
         * @return {?}
         */
        (results) => {
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
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.overlay.updatePosition();
                this.addScrollListener();
            })); // @bkimball: This was added for Dylan Schulte, 9.18.2017 4:14PM EST, you're welcome!
        }), (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            this.hasError = this.term && this.term.length !== 0;
            this.isLoading = false;
            this.lastPage = true;
            if (this.term && this.term.length !== 0) {
                console.error(err); // tslint:disable-lineno
            }
            this.ref.markForCheck();
        }));
    }
    /**
     * @param {?} term
     * @param {?=} mode
     * @return {?}
     */
    search(term, mode) {
        /** @type {?} */
        let options = this.config.options;
        return from(new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Check if there is match data
            if (options) {
                // Resolve the data
                if (Array.isArray(options)) {
                    this.isStatic = true;
                    // Arrays are returned immediately
                    resolve(this.structureArray(options));
                }
                else if (this.shouldCallOptionsFunction(term)) {
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
        })));
    }
    /**
     * @param {?} term
     * @return {?}
     */
    shouldCallOptionsFunction(term) {
        if (this.config && 'minSearchLength' in this.config && Number.isInteger(this.config.minSearchLength)) {
            return typeof term === 'string' && term.length >= this.config.minSearchLength;
        }
        else {
            return !!(term && term.length);
        }
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
            return collection.map((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
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
        (data) => {
            /** @type {?} */
            let value = this.config.field ? data[this.config.field] : data.value || data;
            if (this.config.valueFormat) {
                value = Helpers.interpolate(this.config.valueFormat, data);
            }
            /** @type {?} */
            let label = this.config.format ? Helpers.interpolate(this.config.format, data) : data.label || String(value);
            return { value, label, data };
        }));
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
            return matches.filter((/**
             * @param {?} match
             * @return {?}
             */
            (match) => {
                return ~String(match.label)
                    .toLowerCase()
                    .indexOf(this.term.toLowerCase());
            }));
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
        if (this.config && this.config.preselected) {
            /** @type {?} */
            let preselectedFunc = this.config.preselected;
            return (this.selected.findIndex((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return preselectedFunc(match, item);
            })) !== -1);
        }
        return (this.selected.findIndex((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            let isPreselected = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXBELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFVeEMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFvQjVCLFlBQVksT0FBbUIsRUFBRSxHQUFzQjtRQW5CdkQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFNekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUV0Qyw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFDbkMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBSXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsT0FBTzs7WUFDRCxPQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUM1QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDckQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBaUI7O1lBQ3hCLE9BQU8sR0FBUSxLQUFLLENBQUMsTUFBTTtRQUMvQixJQUFJLE9BQU8sRUFBRTs7Z0JBQ1AsTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLFNBQVM7O2dCQUNuRCxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksR0FBRyxHQUFHO1lBQ3JDLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtnQkFDcEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ3JDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDdEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVELElBQUksSUFBSSxDQUFDLEtBQUs7UUFDWixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMseUJBQXlCLEdBQUcsS0FBSyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7YUFBTTtZQUNMLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFrQztRQUMzQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN4RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLENBQUMsd0RBQXdEO1NBQ2hHO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFjOztjQUNuQixjQUFjLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLOztjQUNyQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUM7UUFFM0MsT0FBTyxjQUFjLElBQUksbUJBQW1CLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7O2dCQUNoQyxPQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM1QyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtnQkFDdEQsT0FBTyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDeEQ7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQXFCO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUzs7OztRQUM5QixDQUFDLE9BQVksRUFBRSxFQUFFO1lBQ2YsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7YUFDNUM7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ25GLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEIsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQzNCLENBQUMsRUFBQyxDQUFDLENBQUMscUZBQXFGO1FBQzNGLENBQUM7Ozs7UUFDRCxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO2FBQzdDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxQixDQUFDLEVBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSzs7WUFDWixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2pDLE9BQU8sSUFBSSxDQUNULElBQUksT0FBTzs7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM5QiwrQkFBK0I7WUFDL0IsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsbUJBQW1CO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixrQ0FBa0M7b0JBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ3ZDO3FCQUFNLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMvQyxJQUNFLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUN2RSxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFDckQ7d0JBQ0EsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7d0JBQ3RCLGdFQUFnRTt3QkFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQ3BFO3lCQUFNLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO3dCQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsZ0VBQWdFO3dCQUNoRSxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQzs2QkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUMxQjt5QkFBTTt3QkFDTCx1Q0FBdUM7d0JBQ3ZDLE1BQU0sQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO3dCQUN6RCxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7cUJBQ25FO2lCQUNGO3FCQUFNO29CQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEtBQUssVUFBVSxFQUFFOztnQ0FDaEQsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUM7NEJBQ2xFLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0NBQ2hFLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzZCQUMzRTtpQ0FBTTtnQ0FDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzZCQUM5Qzt5QkFDRjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7eUJBQzFEO3FCQUNGO3lCQUFNO3dCQUNMLCtCQUErQjt3QkFDL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7cUJBQzFCO2lCQUNGO2FBQ0Y7aUJBQU07Z0JBQ0wsd0JBQXdCO2dCQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakI7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxJQUFZO1FBQ3BDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxpQkFBaUIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNwRyxPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1NBQy9FO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7Ozs7Ozs7SUFTRCxjQUFjLENBQUMsVUFBZTs7WUFDeEIsU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDOUQsSUFBSSxTQUFTLElBQUksQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLEVBQUU7WUFDdkYsT0FBTyxVQUFVLENBQUMsR0FBRzs7OztZQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzdCLE9BQU87b0JBQ0wsS0FBSyxFQUFFLElBQUk7b0JBQ1gsS0FBSyxFQUFFLElBQUk7aUJBQ1osQ0FBQztZQUNKLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLFNBQVMsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7Z0JBQ3hCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSTtZQUM1RSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUMzQixLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM1RDs7Z0JBQ0csS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDNUcsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7Ozs7SUFTRCxVQUFVLENBQUMsT0FBTztRQUNoQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3hCLE9BQU8sT0FBTyxDQUFDLE1BQU07Ozs7WUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM5QixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7cUJBQ3hCLFdBQVcsRUFBRTtxQkFDYixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxrQ0FBa0M7UUFDbEMsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQU9ELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBT0QsZUFBZTs7WUFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7Ozs7SUFPRCxlQUFlOztZQUNULEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3BDLENBQUM7Ozs7SUFFRCx3QkFBd0I7O1lBQ2xCLFFBQVEsR0FBRyxFQUFFO1FBQ2pCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3pCLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7OztJQUVELGNBQWM7O1lBQ1IsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7O1lBQzVCLEtBQUssR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7O1lBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDOztZQUM5QyxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNqQztJQUNILENBQUM7Ozs7Ozs7O0lBUUQsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQzs7Ozs7Ozs7SUFRRCxRQUFRLENBQUMsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUM7SUFDcEMsQ0FBQzs7Ozs7Ozs7O0lBU0QsV0FBVyxDQUFDLEtBQVcsRUFBRSxJQUFVO1FBQ2pDLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4Qjs7Y0FFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVc7UUFDakMsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7Ozs7O0lBU0QsWUFBWSxDQUFDLGFBQWE7UUFDeEIsa0RBQWtEO1FBQ2xELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7Ozs7SUFTRCxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUs7UUFDcEIsOEVBQThFO1FBQzlFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2pILENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7O2dCQUN0QyxlQUFlLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1lBQ3ZELE9BQU8sQ0FDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUMvQixPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQ1YsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O2dCQUMzQixhQUFhLEdBQUcsS0FBSztZQUN6QixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUM5QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFO29CQUNuQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7aUJBQ2xEO3FCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssWUFBWSxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzdFLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUM1QzthQUNGO1lBQ0QsT0FBTyxhQUFhLENBQUM7UUFDdkIsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDLENBQ1YsQ0FBQztJQUNKLENBQUM7OztzQkFqWUEsS0FBSzs7OztJQUZOLGtDQUFtQjs7SUFDbkIscUNBQTBCOztJQUMxQixvQ0FBMkI7O0lBQzNCLHFDQUEwQjs7SUFDMUIsc0NBQTJCOztJQUMzQixxQ0FBeUI7O0lBQ3pCLG9DQUFxQzs7SUFDckMsd0NBQWlCOztJQUNqQixtQ0FBWTs7SUFDWixvQ0FBb0I7O0lBQ3BCLGdDQUF1Qjs7SUFDdkIsaUNBQWlCOztJQUNqQixxQ0FBMEI7O0lBQzFCLGtEQUFzQzs7SUFDdEMsb0NBQW9COztJQUNwQixzREFBMkM7Ozs7O0lBQzNDLDZDQUEwQzs7Ozs7SUFDMUMsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPdmVybGF5UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLi8uLi8uLi9mb3JtL2NvbnRyb2xzL0Jhc2VDb250cm9sJztcblxuLyoqXG4gKiBAbmFtZTogUGlja2VyUmVzdWx0c1xuICpcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIGlzIHRoZSBhY3R1YWwgbGlzdCBvZiBtYXRjaGVzIHRoYXQgZ2V0cyBpbmplY3RlZCBpbnRvIHRoZSBET00uIEl0J3MgYWxzbyB0aGUgcGllY2UgdGhhdCBjYW4gYmVcbiAqIG92ZXJ3cml0dGVuIGlmIGN1c3RvbSBsaXN0IG9wdGlvbnMgYXJlIG5lZWRlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgX3Rlcm06IHN0cmluZyA9ICcnO1xuICBzZWxlY3RlZDogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKSBtYXRjaGVzOiBhbnkgPSBbXTtcbiAgaGFzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGlzU3RhdGljOiBib29sZWFuID0gdHJ1ZTtcbiAgX2NvbmZpZzogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddO1xuICBhY3RpdmVNYXRjaDogYW55O1xuICBwYXJlbnQ6IGFueTtcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcbiAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgcGFnZTogbnVtYmVyID0gMDtcbiAgbGFzdFBhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYXV0b1NlbGVjdEZpcnN0T3B0aW9uOiBib29sZWFuID0gdHJ1ZTtcbiAgb3ZlcmxheTogT3ZlcmxheVJlZjtcbiAgb3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGluZ01hdGNoZXM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzY3JvbGxIYW5kbGVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZWYgPSByZWY7XG4gICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gdGhpcy5vblNjcm9sbERvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsZWFuVXAoKTogdm9pZCB7XG4gICAgbGV0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJykpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicpO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsRG93bihldmVudDogV2hlZWxFdmVudCkge1xuICAgIGxldCBlbGVtZW50OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGxldCBvZmZzZXQgPSBlbGVtZW50Lm9mZnNldEhlaWdodCArIGVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICBib3R0b20gPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIDMwMDtcbiAgICAgIGlmIChvZmZzZXQgPj0gYm90dG9tKSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIXRoaXMubGFzdFBhZ2UgJiYgIXRoaXMuaXNMb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5wcm9jZXNzU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXQgdGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGVybTtcbiAgfVxuXG4gIHNldCB0ZXJtKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuc2hvdWxkU2VhcmNoKHZhbHVlKSkge1xuICAgICAgdGhpcy5fdGVybSA9IHZhbHVlO1xuICAgICAgdGhpcy5wYWdlID0gMDtcbiAgICAgIHRoaXMub3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICB0aGlzLnByb2Nlc3NTZWFyY2godHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICB9XG4gIH1cblxuICBzZXQgY29uZmlnKHZhbHVlOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ10pIHtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcub3B0aW9ucyAhPT0gdmFsdWUub3B0aW9ucykge1xuICAgICAgdGhpcy5vcHRpb25zRnVuY3Rpb25IYXNDaGFuZ2VkID0gdHJ1ZTsgLy8gcmVzZXQgcGFnZSBzbyB0aGF0IG5ldyBvcHRpb25zIGNhbGwgaXMgdXNlZCB0byBzZWFyY2hcbiAgICB9XG4gICAgdGhpcy5fY29uZmlnID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29uZmlnKCk6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgfVxuXG4gIHNob3VsZFNlYXJjaCh2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRlcm1IYXNDaGFuZ2VkID0gdmFsdWUgIT09IHRoaXMuX3Rlcm07XG4gICAgY29uc3Qgb3B0aW9uc05vdFlldENhbGxlZCA9IHRoaXMucGFnZSA9PT0gMDtcblxuICAgIHJldHVybiB0ZXJtSGFzQ2hhbmdlZCB8fCBvcHRpb25zTm90WWV0Q2FsbGVkIHx8IHRoaXMub3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZDtcbiAgfVxuXG4gIGFkZFNjcm9sbExpc3RlbmVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZy5lbmFibGVJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgbGV0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJywgJ3RydWUnKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NTZWFyY2goc2hvdWxkUmVzZXQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnNlYXJjaCh0aGlzLnRlcm0pLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZFJlc2V0KSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlckRhdGEocmVzdWx0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5tYXRjaGVzLmNvbmNhdChyZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLmxhc3RQYWdlID0gcmVzdWx0cyAmJiAhcmVzdWx0cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2hlcy5sZW5ndGggPiAwICYmIHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uICYmICF0aGlzLnNlbGVjdGluZ01hdGNoZXMpIHtcbiAgICAgICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm92ZXJsYXkudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICB0aGlzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH0pOyAvLyBAYmtpbWJhbGw6IFRoaXMgd2FzIGFkZGVkIGZvciBEeWxhbiBTY2h1bHRlLCA5LjE4LjIwMTcgNDoxNFBNIEVTVCwgeW91J3JlIHdlbGNvbWUhXG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdGhpcy50ZXJtICYmIHRoaXMudGVybS5sZW5ndGggIT09IDA7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy50ZXJtICYmIHRoaXMudGVybS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVub1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoKHRlcm0sIG1vZGU/KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY29uZmlnLm9wdGlvbnM7XG4gICAgcmV0dXJuIGZyb20oXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIG1hdGNoIGRhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIHRoZSBkYXRhXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSB0cnVlO1xuICAgICAgICAgICAgLy8gQXJyYXlzIGFyZSByZXR1cm5lZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KG9wdGlvbnMpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvdWxkQ2FsbE9wdGlvbnNGdW5jdGlvbih0ZXJtKSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVqZWN0JykgJiYgb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgncmVzb2x2ZScpKSB8fFxuICAgICAgICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob3B0aW9ucykuaGFzT3duUHJvcGVydHkoJ3RoZW4nKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgICBvcHRpb25zLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgLy8gUHJvbWlzZXMgKEVTNiBvciBEZWZlcnJlZCkgYXJlIHJlc29sdmVkIHdoZW5ldmVyIHRoZXkgcmVzb2x2ZVxuICAgICAgICAgICAgICBvcHRpb25zKHRlcm0sICsrdGhpcy5wYWdlKVxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gQWxsIG90aGVyIGtpbmRzIG9mIGRhdGEgYXJlIHJlamVjdGVkXG4gICAgICAgICAgICAgIHJlamVjdCgnVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhIHByb3ZpZGVkIGlzIG5vdCBhbiBhcnJheSBvciBhIHByb21pc2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKSB7XG4gICAgICAgICAgICAgIHRoaXMuaXNTdGF0aWMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0T3B0aW9ucyA9IHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKHRlcm0sICsrdGhpcy5wYWdlKTtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlZmF1bHRPcHRpb25zKS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpKSB7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0T3B0aW9ucy50aGVuKHRoaXMuc3RydWN0dXJlQXJyYXkuYmluZCh0aGlzKSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkoZGVmYXVsdE9wdGlvbnMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIE5vIHNlYXJjaCB0ZXJtIGdldHMgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgcmVqZWN0KCdObyBzZWFyY2ggdGVybScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBObyBkYXRhIGdldHMgcmVqZWN0ZWRcbiAgICAgICAgICByZWplY3QoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICBzaG91bGRDYWxsT3B0aW9uc0Z1bmN0aW9uKHRlcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiAnbWluU2VhcmNoTGVuZ3RoJyBpbiB0aGlzLmNvbmZpZyAmJiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuY29uZmlnLm1pblNlYXJjaExlbmd0aCkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGVybSA9PT0gJ3N0cmluZycgJiYgdGVybS5sZW5ndGggPj0gdGhpcy5jb25maWcubWluU2VhcmNoTGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gISEodGVybSAmJiB0ZXJtLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0cnVjdHVyZUFycmF5XG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gdGhlIGRhdGEgb25jZSBnZXREYXRhIHJlc29sdmVzIGl0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHN0cnVjdHVyZXMgYW4gYXJyYXkgb2Ygbm9kZXMgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggYVxuICAgKiAnbmFtZScgZmllbGQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHN0cnVjdHVyZUFycmF5KGNvbGxlY3Rpb246IGFueSk6IGFueSB7XG4gICAgbGV0IGRhdGFBcnJheSA9IGNvbGxlY3Rpb24uZGF0YSA/IGNvbGxlY3Rpb24uZGF0YSA6IGNvbGxlY3Rpb247XG4gICAgaWYgKGRhdGFBcnJheSAmJiAodHlwZW9mIGRhdGFBcnJheVswXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGFBcnJheVswXSA9PT0gJ251bWJlcicpKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUFycmF5Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5jb25maWcuZmllbGQgPyBkYXRhW3RoaXMuY29uZmlnLmZpZWxkXSA6IGRhdGEudmFsdWUgfHwgZGF0YTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy52YWx1ZUZvcm1hdCkge1xuICAgICAgICB2YWx1ZSA9IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcudmFsdWVGb3JtYXQsIGRhdGEpO1xuICAgICAgfVxuICAgICAgbGV0IGxhYmVsID0gdGhpcy5jb25maWcuZm9ybWF0ID8gSGVscGVycy5pbnRlcnBvbGF0ZSh0aGlzLmNvbmZpZy5mb3JtYXQsIGRhdGEpIDogZGF0YS5sYWJlbCB8fCBTdHJpbmcodmFsdWUpO1xuICAgICAgcmV0dXJuIHsgdmFsdWUsIGxhYmVsLCBkYXRhIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZmlsdGVyRGF0YT1cbiAgICogQHBhcmFtIG1hdGNoZXMgLSBDb2xsZWN0aW9uIG9mIG9iamVjdHM9XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGxvb3BzIHRocm91Z2ggdGhlIHBpY2tlciBvcHRpb25zIGFuZCBjcmVhdGVzIGEgZmlsdGVyZWQgbGlzdCBvZiBvYmplY3RzIHRoYXQgY29udGFpblxuICAgKiB0aGUgbmV3U2VhcmNoLlxuICAgKi9cbiAgZmlsdGVyRGF0YShtYXRjaGVzKTogQXJyYXk8YW55PiB7XG4gICAgaWYgKHRoaXMudGVybSAmJiBtYXRjaGVzKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiB+U3RyaW5nKG1hdGNoLmxhYmVsKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgLmluZGV4T2YodGhpcy50ZXJtLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIFNob3cgbm8gcmVjZW50IHJlc3VsdHMgdGVtcGxhdGVcbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RBY3RpdmVNYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBwcmVzc2VzIHRoZSBlbnRlciBrZXkgdG8gY2FsbCB0aGUgc2VsZWN0TWF0Y2ggbWV0aG9kLlxuICAgKi9cbiAgc2VsZWN0QWN0aXZlTWF0Y2goKSB7XG4gICAgdGhpcy5zZWxlY3RNYXRjaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHByZXZBY3RpdmVNYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzZXRzIGFjdGl2ZU1hdGNoIHRvIHRoZSBtYXRjaCBiZWZvcmUgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICovXG4gIHByZXZBY3RpdmVNYXRjaCgpIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm1hdGNoZXMuaW5kZXhPZih0aGlzLmFjdGl2ZU1hdGNoKTtcbiAgICB0aGlzLmFjdGl2ZU1hdGNoID0gdGhpcy5tYXRjaGVzW2luZGV4IC0gMSA8IDAgPyB0aGlzLm1hdGNoZXMubGVuZ3RoIC0gMSA6IGluZGV4IC0gMV07XG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZSgpO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG5leHRBY3RpdmVNYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzZXRzIGFjdGl2ZU1hdGNoIHRvIHRoZSBtYXRjaCBhZnRlciB0aGUgY3VycmVudCBub2RlLlxuICAgKi9cbiAgbmV4dEFjdGl2ZU1hdGNoKCkge1xuICAgIGxldCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuYWN0aXZlTWF0Y2gpO1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSB0aGlzLm1hdGNoZXNbaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxXTtcbiAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbk9mTGlzdEVsZW1lbnQoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gW107XG4gICAgaWYgKHRoaXMuZ2V0TGlzdEVsZW1lbnQoKSkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldExpc3RFbGVtZW50KCkuY2hpbGRyZW47XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHNjcm9sbFRvQWN0aXZlKCkge1xuICAgIGxldCBsaXN0ID0gdGhpcy5nZXRMaXN0RWxlbWVudCgpO1xuICAgIGxldCBpdGVtcyA9IHRoaXMuZ2V0Q2hpbGRyZW5PZkxpc3RFbGVtZW50KCk7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgbGV0IGl0ZW0gPSBpdGVtc1tpbmRleF07XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdEFjdGl2ZVxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBzZWxlY3RBY3RpdmUobWF0Y2gpIHtcbiAgICB0aGlzLmFjdGl2ZU1hdGNoID0gbWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaXNBY3RpdmVcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgaXNBY3RpdmUobWF0Y2gpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVNYXRjaCA9PT0gbWF0Y2g7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0TWF0Y2hcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqIEBwYXJhbSBpdGVtXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKi9cbiAgc2VsZWN0TWF0Y2goZXZlbnQ/OiBhbnksIGl0ZW0/OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuYWN0aXZlTWF0Y2g7XG4gICAgaWYgKHNlbGVjdGVkICYmIHRoaXMucGFyZW50KSB7XG4gICAgICB0aGlzLnBhcmVudC52YWx1ZSA9IHNlbGVjdGVkO1xuICAgICAgdGhpcy5zZWxlY3RpbmdNYXRjaGVzID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnBhcmVudC5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICAgIHRoaXMucGFyZW50LmhpZGVSZXN1bHRzKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0aW5nTWF0Y2hlcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZXNjYXBlUmVnZXhwXG4gICAqIEBwYXJhbSBxdWVyeVRvRXNjYXBlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGNhcHR1cmVzIHRoZSB3aG9sZSBxdWVyeSBzdHJpbmcgYW5kIHJlcGxhY2UgaXQgd2l0aCB0aGUgc3RyaW5nIHRoYXQgd2lsbCBiZSB1c2VkIHRvXG4gICAqIG1hdGNoLlxuICAgKi9cbiAgZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGUpIHtcbiAgICAvLyBFeDogaWYgdGhlIGNhcHR1cmUgaXMgXCJhXCIgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxuICAgIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiBhIDxzdHJvbmc+LXRhZyB3cmFwcGVkIEhUTUwgc3RyaW5nLlxuICAgKi9cbiAgaGlnaGxpZ2h0KG1hdGNoLCBxdWVyeSkge1xuICAgIC8vIFJlcGxhY2VzIHRoZSBjYXB0dXJlIHN0cmluZyB3aXRoIGEgdGhlIHNhbWUgc3RyaW5nIGluc2lkZSBvZiBhIFwic3Ryb25nXCIgdGFnXG4gICAgcmV0dXJuIHF1ZXJ5ID8gbWF0Y2gucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuZXNjYXBlUmVnZXhwKHF1ZXJ5LnRyaW0oKSksICdnaScpLCAnPHN0cm9uZz4kJjwvc3Ryb25nPicpIDogbWF0Y2g7XG4gIH1cblxuICBwcmVzZWxlY3RlZChtYXRjaCkge1xuICAgIGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5wcmVzZWxlY3RlZCkge1xuICAgICAgbGV0IHByZXNlbGVjdGVkRnVuYzogRnVuY3Rpb24gPSB0aGlzLmNvbmZpZy5wcmVzZWxlY3RlZDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByZXNlbGVjdGVkRnVuYyhtYXRjaCwgaXRlbSk7XG4gICAgICAgIH0pICE9PSAtMVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZmluZEluZGV4KChpdGVtKSA9PiB7XG4gICAgICAgIGxldCBpc1ByZXNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChpdGVtICYmIGl0ZW0udmFsdWUgJiYgbWF0Y2ggJiYgbWF0Y2gudmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXRlbS52YWx1ZS5pZCAmJiBtYXRjaC52YWx1ZS5pZCkge1xuICAgICAgICAgICAgaXNQcmVzZWxlY3RlZCA9IGl0ZW0udmFsdWUuaWQgPT09IG1hdGNoLnZhbHVlLmlkO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS52YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiBpdGVtLnZhbHVlLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZS52YWx1ZSA9PT0gbWF0Y2gudmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzUHJlc2VsZWN0ZWQgPSBpdGVtLnZhbHVlID09PSBtYXRjaC52YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzUHJlc2VsZWN0ZWQ7XG4gICAgICB9KSAhPT0gLTFcbiAgICApO1xuICB9XG59XG4iXX0=