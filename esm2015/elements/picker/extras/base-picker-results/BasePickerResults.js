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
        const element = this.getListElement();
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
        const element = event.target;
        if (element) {
            /** @type {?} */
            const offset = element.offsetHeight + element.scrollTop;
            /** @type {?} */
            const bottom = element.scrollHeight - 300;
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
            const element = this.getListElement();
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
        const options = this.config.options;
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
                            const defaultOptions = this.config.defaultOptions(term, ++this.page);
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
        const dataArray = collection.data ? collection.data : collection;
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
            const label = this.config.format ? Helpers.interpolate(this.config.format, data) : data.label || String(value);
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
        const index = this.matches.indexOf(this.activeMatch);
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
        const index = this.matches.indexOf(this.activeMatch);
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
        const list = this.getListElement();
        /** @type {?} */
        const items = this.getChildrenOfListElement();
        /** @type {?} */
        const index = this.matches.indexOf(this.activeMatch);
        /** @type {?} */
        const item = items[index];
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
        if (this.config.preselected) {
            /** @type {?} */
            const preselectedFunc = this.config.preselected;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBYyxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOztBQUVyRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXBELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7QUFVeEMsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFvQjVCLFlBQVksT0FBbUIsRUFBRSxHQUFzQjtRQW5CdkQsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBUSxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFNekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLDBCQUFxQixHQUFZLElBQUksQ0FBQztRQUV0Qyw4QkFBeUIsR0FBWSxLQUFLLENBQUM7UUFDbkMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBSXhDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsT0FBTzs7Y0FDQyxPQUFPLEdBQVksSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUM5QyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMs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QkFDbkMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2lCQUNsRDtxQkFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM3RSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDbEQ7cUJBQU07b0JBQ0wsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQztpQkFDNUM7YUFDRjtZQUNELE9BQU8sYUFBYSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQyxDQUNWLENBQUM7SUFDSixDQUFDOzs7c0JBallBLEtBQUs7Ozs7SUFGTixrQ0FBbUI7O0lBQ25CLHFDQUEwQjs7SUFDMUIsb0NBQTJCOztJQUMzQixxQ0FBMEI7O0lBQzFCLHNDQUEyQjs7SUFDM0IscUNBQXlCOztJQUN6QixvQ0FBcUM7O0lBQ3JDLHdDQUFpQjs7SUFDakIsbUNBQVk7O0lBQ1osb0NBQW9COztJQUNwQixnQ0FBdUI7O0lBQ3ZCLGlDQUFpQjs7SUFDakIscUNBQTBCOztJQUMxQixrREFBc0M7O0lBQ3RDLG9DQUFvQjs7SUFDcEIsc0RBQTJDOzs7OztJQUMzQyw2Q0FBMEM7Ozs7O0lBQzFDLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5wdXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZm9ybS9jb250cm9scy9CYXNlQ29udHJvbCc7XG5cbi8qKlxuICogQG5hbWU6IFBpY2tlclJlc3VsdHNcbiAqXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBpcyB0aGUgYWN0dWFsIGxpc3Qgb2YgbWF0Y2hlcyB0aGF0IGdldHMgaW5qZWN0ZWQgaW50byB0aGUgRE9NLiBJdCdzIGFsc28gdGhlIHBpZWNlIHRoYXQgY2FuIGJlXG4gKiBvdmVyd3JpdHRlbiBpZiBjdXN0b20gbGlzdCBvcHRpb25zIGFyZSBuZWVkZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIF90ZXJtOiBzdHJpbmcgPSAnJztcbiAgc2VsZWN0ZWQ6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgbWF0Y2hlczogYW55ID0gW107XG4gIGhhc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBpc1N0YXRpYzogYm9vbGVhbiA9IHRydWU7XG4gIF9jb25maWc6IE5vdm9Db250cm9sQ29uZmlnWydjb25maWcnXTtcbiAgYWN0aXZlTWF0Y2g6IGFueTtcbiAgcGFyZW50OiBhbnk7XG4gIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XG4gIHBhZ2U6IG51bWJlciA9IDA7XG4gIGxhc3RQYWdlOiBib29sZWFuID0gZmFsc2U7XG4gIGF1dG9TZWxlY3RGaXJzdE9wdGlvbjogYm9vbGVhbiA9IHRydWU7XG4gIG92ZXJsYXk6IE92ZXJsYXlSZWY7XG4gIG9wdGlvbnNGdW5jdGlvbkhhc0NoYW5nZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RpbmdNYXRjaGVzOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2Nyb2xsSGFuZGxlcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVmID0gcmVmO1xuICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IHRoaXMub25TY3JvbGxEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICBjbGVhblVwKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJykpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzY3JvbGxMaXN0ZW5lcicpO1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsRG93bihldmVudDogV2hlZWxFdmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyBlbGVtZW50LnNjcm9sbFRvcCxcbiAgICAgICAgYm90dG9tID0gZWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDA7XG4gICAgICBpZiAob2Zmc2V0ID49IGJvdHRvbSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCF0aGlzLmxhc3RQYWdlICYmICF0aGlzLmlzTG9hZGluZykge1xuICAgICAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IHRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Rlcm07XG4gIH1cblxuICBzZXQgdGVybSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLnNob3VsZFNlYXJjaCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3Rlcm0gPSB2YWx1ZTtcbiAgICAgIHRoaXMucGFnZSA9IDA7XG4gICAgICB0aGlzLm9wdGlvbnNGdW5jdGlvbkhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMubWF0Y2hlcyA9IFtdO1xuICAgICAgdGhpcy5wcm9jZXNzU2VhcmNoKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGNvbmZpZyh2YWx1ZTogTm92b0NvbnRyb2xDb25maWdbJ2NvbmZpZyddKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLm9wdGlvbnMgIT09IHZhbHVlLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9uc0Z1bmN0aW9uSGFzQ2hhbmdlZCA9IHRydWU7IC8vIHJlc2V0IHBhZ2Ugc28gdGhhdCBuZXcgb3B0aW9ucyBjYWxsIGlzIHVzZWQgdG8gc2VhcmNoXG4gICAgfVxuICAgIHRoaXMuX2NvbmZpZyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGNvbmZpZygpOiBOb3ZvQ29udHJvbENvbmZpZ1snY29uZmlnJ10ge1xuICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gIH1cblxuICBzaG91bGRTZWFyY2godmFsdWU6IHVua25vd24pOiBib29sZWFuIHtcbiAgICBjb25zdCB0ZXJtSGFzQ2hhbmdlZCA9IHZhbHVlICE9PSB0aGlzLl90ZXJtO1xuICAgIGNvbnN0IG9wdGlvbnNOb3RZZXRDYWxsZWQgPSB0aGlzLnBhZ2UgPT09IDA7XG5cbiAgICByZXR1cm4gdGVybUhhc0NoYW5nZWQgfHwgb3B0aW9uc05vdFlldENhbGxlZCB8fCB0aGlzLm9wdGlvbnNGdW5jdGlvbkhhc0NoYW5nZWQ7XG4gIH1cblxuICBhZGRTY3JvbGxMaXN0ZW5lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlSW5maW5pdGVTY3JvbGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEVsZW1lbnQgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgICBpZiAoZWxlbWVudCAmJiAhZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJykpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3Njcm9sbExpc3RlbmVyJywgJ3RydWUnKTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb2Nlc3NTZWFyY2goc2hvdWxkUmVzZXQ/OiBib29sZWFuKSB7XG4gICAgdGhpcy5oYXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLnNlYXJjaCh0aGlzLnRlcm0pLnN1YnNjcmliZShcbiAgICAgIChyZXN1bHRzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHNob3VsZFJlc2V0KSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTdGF0aWMpIHtcbiAgICAgICAgICB0aGlzLm1hdGNoZXMgPSB0aGlzLmZpbHRlckRhdGEocmVzdWx0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5tYXRjaGVzID0gdGhpcy5tYXRjaGVzLmNvbmNhdChyZXN1bHRzKTtcbiAgICAgICAgICB0aGlzLmxhc3RQYWdlID0gcmVzdWx0cyAmJiAhcmVzdWx0cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWF0Y2hlcy5sZW5ndGggPiAwICYmIHRoaXMuYXV0b1NlbGVjdEZpcnN0T3B0aW9uICYmICF0aGlzLnNlbGVjdGluZ01hdGNoZXMpIHtcbiAgICAgICAgICB0aGlzLm5leHRBY3RpdmVNYXRjaCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLm92ZXJsYXkudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgICB0aGlzLmFkZFNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgIH0pOyAvLyBAYmtpbWJhbGw6IFRoaXMgd2FzIGFkZGVkIGZvciBEeWxhbiBTY2h1bHRlLCA5LjE4LjIwMTcgNDoxNFBNIEVTVCwgeW91J3JlIHdlbGNvbWUhXG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICB0aGlzLmhhc0Vycm9yID0gdGhpcy50ZXJtICYmIHRoaXMudGVybS5sZW5ndGggIT09IDA7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBhZ2UgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy50ZXJtICYmIHRoaXMudGVybS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVub1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSxcbiAgICApO1xuICB9XG5cbiAgc2VhcmNoKHRlcm0sIG1vZGU/KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb25maWcub3B0aW9ucztcbiAgICByZXR1cm4gZnJvbShcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgbWF0Y2ggZGF0YVxuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIC8vIFJlc29sdmUgdGhlIGRhdGFcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICAvLyBBcnJheXMgYXJlIHJldHVybmVkIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuc3RydWN0dXJlQXJyYXkob3B0aW9ucykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG91bGRDYWxsT3B0aW9uc0Z1bmN0aW9uKHRlcm0pKSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIChvcHRpb25zLmhhc093blByb3BlcnR5KCdyZWplY3QnKSAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KCdyZXNvbHZlJykpIHx8XG4gICAgICAgICAgICAgIE9iamVjdC5nZXRQcm90b3R5cGVPZihvcHRpb25zKS5oYXNPd25Qcm9wZXJ0eSgndGhlbicpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBQcm9taXNlcyAoRVM2IG9yIERlZmVycmVkKSBhcmUgcmVzb2x2ZWQgd2hlbmV2ZXIgdGhleSByZXNvbHZlXG4gICAgICAgICAgICAgIG9wdGlvbnMudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyBQcm9taXNlcyAoRVM2IG9yIERlZmVycmVkKSBhcmUgcmVzb2x2ZWQgd2hlbmV2ZXIgdGhleSByZXNvbHZlXG4gICAgICAgICAgICAgIG9wdGlvbnModGVybSwgKyt0aGlzLnBhZ2UpXG4gICAgICAgICAgICAgICAgLnRoZW4odGhpcy5zdHJ1Y3R1cmVBcnJheS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBbGwgb3RoZXIga2luZHMgb2YgZGF0YSBhcmUgcmVqZWN0ZWRcbiAgICAgICAgICAgICAgcmVqZWN0KCdUaGUgZGF0YSBwcm92aWRlZCBpcyBub3QgYW4gYXJyYXkgb3IgYSBwcm9taXNlJyk7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGRhdGEgcHJvdmlkZWQgaXMgbm90IGFuIGFycmF5IG9yIGEgcHJvbWlzZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWcuZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pc1N0YXRpYyA9IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLmRlZmF1bHRPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucyh0ZXJtLCArK3RoaXMucGFnZSk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZihkZWZhdWx0T3B0aW9ucykuaGFzT3duUHJvcGVydHkoJ3RoZW4nKSkge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMudGhlbih0aGlzLnN0cnVjdHVyZUFycmF5LmJpbmQodGhpcykpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLnN0cnVjdHVyZUFycmF5KGRlZmF1bHRPcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5zdHJ1Y3R1cmVBcnJheSh0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBObyBzZWFyY2ggdGVybSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgICAgIHJlamVjdCgnTm8gc2VhcmNoIHRlcm0nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTm8gZGF0YSBnZXRzIHJlamVjdGVkXG4gICAgICAgICAgcmVqZWN0KCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgc2hvdWxkQ2FsbE9wdGlvbnNGdW5jdGlvbih0ZXJtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb25maWcgJiYgJ21pblNlYXJjaExlbmd0aCcgaW4gdGhpcy5jb25maWcgJiYgTnVtYmVyLmlzSW50ZWdlcih0aGlzLmNvbmZpZy5taW5TZWFyY2hMZW5ndGgpKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRlcm0gPT09ICdzdHJpbmcnICYmIHRlcm0ubGVuZ3RoID49IHRoaXMuY29uZmlnLm1pblNlYXJjaExlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICEhKHRlcm0gJiYgdGVybS5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGRhdGFBcnJheSA9IGNvbGxlY3Rpb24uZGF0YSA/IGNvbGxlY3Rpb24uZGF0YSA6IGNvbGxlY3Rpb247XG4gICAgaWYgKGRhdGFBcnJheSAmJiAodHlwZW9mIGRhdGFBcnJheVswXSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGRhdGFBcnJheVswXSA9PT0gJ251bWJlcicpKSB7XG4gICAgICByZXR1cm4gY29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YUFycmF5Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gdGhpcy5jb25maWcuZmllbGQgPyBkYXRhW3RoaXMuY29uZmlnLmZpZWxkXSA6IGRhdGEudmFsdWUgfHwgZGF0YTtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy52YWx1ZUZvcm1hdCkge1xuICAgICAgICB2YWx1ZSA9IEhlbHBlcnMuaW50ZXJwb2xhdGUodGhpcy5jb25maWcudmFsdWVGb3JtYXQsIGRhdGEpO1xuICAgICAgfVxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmNvbmZpZy5mb3JtYXQgPyBIZWxwZXJzLmludGVycG9sYXRlKHRoaXMuY29uZmlnLmZvcm1hdCwgZGF0YSkgOiBkYXRhLmxhYmVsIHx8IFN0cmluZyh2YWx1ZSk7XG4gICAgICByZXR1cm4geyB2YWx1ZSwgbGFiZWwsIGRhdGEgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaWx0ZXJEYXRhPVxuICAgKiBAcGFyYW0gbWF0Y2hlcyAtIENvbGxlY3Rpb24gb2Ygb2JqZWN0cz1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gbG9vcHMgdGhyb3VnaCB0aGUgcGlja2VyIG9wdGlvbnMgYW5kIGNyZWF0ZXMgYSBmaWx0ZXJlZCBsaXN0IG9mIG9iamVjdHMgdGhhdCBjb250YWluXG4gICAqIHRoZSBuZXdTZWFyY2guXG4gICAqL1xuICBmaWx0ZXJEYXRhKG1hdGNoZXMpOiBBcnJheTxhbnk+IHtcbiAgICBpZiAodGhpcy50ZXJtICYmIG1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzLmZpbHRlcigobWF0Y2gpID0+IHtcbiAgICAgICAgcmV0dXJuIH5TdHJpbmcobWF0Y2gubGFiZWwpXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAuaW5kZXhPZih0aGlzLnRlcm0udG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gU2hvdyBubyByZWNlbnQgcmVzdWx0cyB0ZW1wbGF0ZVxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNlbGVjdEFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIHByZXNzZXMgdGhlIGVudGVyIGtleSB0byBjYWxsIHRoZSBzZWxlY3RNYXRjaCBtZXRob2QuXG4gICAqL1xuICBzZWxlY3RBY3RpdmVNYXRjaCgpIHtcbiAgICB0aGlzLnNlbGVjdE1hdGNoKCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgcHJldkFjdGl2ZU1hdGNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHNldHMgYWN0aXZlTWF0Y2ggdG8gdGhlIG1hdGNoIGJlZm9yZSB0aGUgY3VycmVudCBub2RlLlxuICAgKi9cbiAgcHJldkFjdGl2ZU1hdGNoKCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgdGhpcy5hY3RpdmVNYXRjaCA9IHRoaXMubWF0Y2hlc1tpbmRleCAtIDEgPCAwID8gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgOiBpbmRleCAtIDFdO1xuICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmUoKTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBuZXh0QWN0aXZlTWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gc2V0cyBhY3RpdmVNYXRjaCB0byB0aGUgbWF0Y2ggYWZ0ZXIgdGhlIGN1cnJlbnQgbm9kZS5cbiAgICovXG4gIG5leHRBY3RpdmVNYXRjaCgpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubWF0Y2hlcy5pbmRleE9mKHRoaXMuYWN0aXZlTWF0Y2gpO1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSB0aGlzLm1hdGNoZXNbaW5kZXggKyAxID4gdGhpcy5tYXRjaGVzLmxlbmd0aCAtIDEgPyAwIDogaW5kZXggKyAxXTtcbiAgICB0aGlzLnNjcm9sbFRvQWN0aXZlKCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBnZXRDaGlsZHJlbk9mTGlzdEVsZW1lbnQoKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gW107XG4gICAgaWYgKHRoaXMuZ2V0TGlzdEVsZW1lbnQoKSkge1xuICAgICAgY2hpbGRyZW4gPSB0aGlzLmdldExpc3RFbGVtZW50KCkuY2hpbGRyZW47XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIHNjcm9sbFRvQWN0aXZlKCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldExpc3RFbGVtZW50KCk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLmdldENoaWxkcmVuT2ZMaXN0RWxlbWVudCgpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tYXRjaGVzLmluZGV4T2YodGhpcy5hY3RpdmVNYXRjaCk7XG4gICAgY29uc3QgaXRlbSA9IGl0ZW1zW2luZGV4XTtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2VsZWN0QWN0aXZlXG4gICAqIEBwYXJhbSBtYXRjaFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb25cbiAgICovXG4gIHNlbGVjdEFjdGl2ZShtYXRjaCkge1xuICAgIHRoaXMuYWN0aXZlTWF0Y2ggPSBtYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0FjdGl2ZVxuICAgKiBAcGFyYW0gbWF0Y2hcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBpc0FjdGl2ZShtYXRjaCkge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZU1hdGNoID09PSBtYXRjaDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZWxlY3RNYXRjaFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICogQHBhcmFtIGl0ZW1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqL1xuICBzZWxlY3RNYXRjaChldmVudD86IGFueSwgaXRlbT86IGFueSkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5hY3RpdmVNYXRjaDtcbiAgICBpZiAoc2VsZWN0ZWQgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LnZhbHVlID0gc2VsZWN0ZWQ7XG4gICAgICB0aGlzLnNlbGVjdGluZ01hdGNoZXMgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucGFyZW50LmNsb3NlT25TZWxlY3QpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuaGlkZVJlc3VsdHMoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RpbmdNYXRjaGVzID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBlc2NhcGVSZWdleHBcbiAgICogQHBhcmFtIHF1ZXJ5VG9Fc2NhcGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoaXMgZnVuY3Rpb24gY2FwdHVyZXMgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmcgdGhhdCB3aWxsIGJlIHVzZWQgdG9cbiAgICogbWF0Y2guXG4gICAqL1xuICBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIC8vIEV4OiBpZiB0aGUgY2FwdHVyZSBpcyBcImFcIiB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXG4gICAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoaWdobGlnaHRcbiAgICogQHBhcmFtIG1hdGNoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzaG91bGQgcmV0dXJuIGEgPHN0cm9uZz4tdGFnIHdyYXBwZWQgSFRNTCBzdHJpbmcuXG4gICAqL1xuICBoaWdobGlnaHQobWF0Y2gsIHF1ZXJ5KSB7XG4gICAgLy8gUmVwbGFjZXMgdGhlIGNhcHR1cmUgc3RyaW5nIHdpdGggYSB0aGUgc2FtZSBzdHJpbmcgaW5zaWRlIG9mIGEgXCJzdHJvbmdcIiB0YWdcbiAgICByZXR1cm4gcXVlcnkgPyBtYXRjaC5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5lc2NhcGVSZWdleHAocXVlcnkudHJpbSgpKSwgJ2dpJyksICc8c3Ryb25nPiQmPC9zdHJvbmc+JykgOiBtYXRjaDtcbiAgfVxuXG4gIHByZXNlbGVjdGVkKG1hdGNoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLnByZXNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBwcmVzZWxlY3RlZEZ1bmM6IEZ1bmN0aW9uID0gdGhpcy5jb25maWcucHJlc2VsZWN0ZWQ7XG4gICAgICByZXR1cm4gKFxuICAgICAgICB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmVzZWxlY3RlZEZ1bmMobWF0Y2gsIGl0ZW0pO1xuICAgICAgICB9KSAhPT0gLTFcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnNlbGVjdGVkLmZpbmRJbmRleCgoaXRlbSkgPT4ge1xuICAgICAgICBsZXQgaXNQcmVzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLnZhbHVlICYmIG1hdGNoICYmIG1hdGNoLnZhbHVlKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udmFsdWUuaWQgJiYgbWF0Y2gudmFsdWUuaWQpIHtcbiAgICAgICAgICAgIGlzUHJlc2VsZWN0ZWQgPSBpdGVtLnZhbHVlLmlkID09PSBtYXRjaC52YWx1ZS5pZDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0udmFsdWUgaW5zdGFuY2VvZiBPYmplY3QgJiYgaXRlbS52YWx1ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgICAgaXNQcmVzZWxlY3RlZCA9IGl0ZW0udmFsdWUudmFsdWUgPT09IG1hdGNoLnZhbHVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpc1ByZXNlbGVjdGVkID0gaXRlbS52YWx1ZSA9PT0gbWF0Y2gudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ByZXNlbGVjdGVkO1xuICAgICAgfSkgIT09IC0xXG4gICAgKTtcbiAgfVxufVxuIl19