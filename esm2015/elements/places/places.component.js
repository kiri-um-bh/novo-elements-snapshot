/**
 * @fileoverview added by tsickle
 * Generated from: elements/places/places.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, PLATFORM_ID, Inject, Input, Output, EventEmitter, ElementRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GlobalRef } from '../../services/global/global.service';
import { GooglePlacesService } from './places.service';
/**
 * @record
 */
export function Settings() { }
if (false) {
    /** @type {?|undefined} */
    Settings.prototype.geoPredictionServerUrl;
    /** @type {?|undefined} */
    Settings.prototype.geoLatLangServiceUrl;
    /** @type {?|undefined} */
    Settings.prototype.geoLocDetailServerUrl;
    /** @type {?|undefined} */
    Settings.prototype.geoCountryRestriction;
    /** @type {?|undefined} */
    Settings.prototype.geoTypes;
    /** @type {?|undefined} */
    Settings.prototype.geoLocation;
    /** @type {?|undefined} */
    Settings.prototype.geoRadius;
    /** @type {?|undefined} */
    Settings.prototype.serverResponseListHierarchy;
    /** @type {?|undefined} */
    Settings.prototype.serverResponseatLangHierarchy;
    /** @type {?|undefined} */
    Settings.prototype.serverResponseDetailHierarchy;
    /** @type {?|undefined} */
    Settings.prototype.resOnSearchButtonClickOnly;
    /** @type {?|undefined} */
    Settings.prototype.useGoogleGeoApi;
    /** @type {?|undefined} */
    Settings.prototype.inputPlaceholderText;
    /** @type {?|undefined} */
    Settings.prototype.inputString;
    /** @type {?|undefined} */
    Settings.prototype.showSearchButton;
    /** @type {?|undefined} */
    Settings.prototype.showRecentSearch;
    /** @type {?|undefined} */
    Settings.prototype.showCurrentLocation;
    /** @type {?|undefined} */
    Settings.prototype.recentStorageName;
    /** @type {?|undefined} */
    Settings.prototype.noOfRecentSearchSave;
    /** @type {?|undefined} */
    Settings.prototype.currentLocIconUrl;
    /** @type {?|undefined} */
    Settings.prototype.searchIconUrl;
    /** @type {?|undefined} */
    Settings.prototype.locationIconUrl;
}
export class PlacesListComponent {
    /**
     * @param {?} platformId
     * @param {?} _elmRef
     * @param {?} _global
     * @param {?} _googlePlacesService
     */
    constructor(platformId, _elmRef, _global, _googlePlacesService) {
        this.platformId = platformId;
        this._elmRef = _elmRef;
        this._global = _global;
        this._googlePlacesService = _googlePlacesService;
        this.term = '';
        this.termChange = new EventEmitter();
        this.select = new EventEmitter();
        this.locationInput = '';
        this.gettingCurrentLocationFlag = false;
        this.dropdownOpen = false;
        this.recentDropdownOpen = false;
        this.queryItems = [];
        this.isSettingsError = false;
        this.settingsErrorMsg = '';
        this.settings = {};
        this.moduleinit = false;
        this.selectedDataIndex = -1;
        this.recentSearchData = [];
        this.userSelectedOption = '';
        this.defaultSettings = {
            geoPredictionServerUrl: '',
            geoLatLangServiceUrl: '',
            geoLocDetailServerUrl: '',
            geoCountryRestriction: [],
            geoTypes: [],
            geoLocation: [],
            geoRadius: 0,
            serverResponseListHierarchy: [],
            serverResponseatLangHierarchy: [],
            serverResponseDetailHierarchy: [],
            resOnSearchButtonClickOnly: false,
            useGoogleGeoApi: true,
            inputPlaceholderText: 'Enter Area Name',
            inputString: '',
            showSearchButton: true,
            showRecentSearch: true,
            showCurrentLocation: true,
            recentStorageName: 'recentSearches',
            noOfRecentSearchSave: 5,
            currentLocIconUrl: '',
            searchIconUrl: '',
            locationIconUrl: '',
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.moduleinit) {
            this.moduleInit();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.moduleinit = true;
        this.moduleInit();
        this.searchinputCallback(null);
    }
    // function called when click event happens in input box. (Binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    searchinputClickCallback(event) {
        event.target.select();
        this.searchinputCallback(event);
    }
    // function called when there is a change in input. (Binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    searchinputCallback(event) {
        /** @type {?} */
        const inputVal = this.locationInput;
        if (inputVal) {
            this.getListQuery(inputVal);
        }
        else {
            this.queryItems = [];
            if (this.userSelectedOption) {
                this.userQuerySubmit('false');
            }
            this.userSelectedOption = '';
            if (this.settings.showRecentSearch) {
                this.showRecentSearch();
            }
            else {
                this.dropdownOpen = false;
            }
        }
    }
    // function to execute when user hover over autocomplete list.(binded with view)
    /**
     * @param {?} index
     * @return {?}
     */
    activeListNode(index) {
        for (let i = 0; i < this.queryItems.length; i++) {
            if (index === i) {
                this.queryItems[i].active = true;
                this.selectedDataIndex = index;
            }
            else {
                this.queryItems[i].active = false;
            }
        }
    }
    // function to execute when user select the autocomplete list.(binded with view)
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    selectedListNode(event, index) {
        this.dropdownOpen = false;
        if (this.recentDropdownOpen) {
            this.setRecentLocation(this.queryItems[index]);
        }
        else {
            this.getPlaceLocationInfo(this.queryItems[index]);
        }
    }
    // function to close the autocomplete list when clicked outside. (binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    closeAutocomplete(event) {
        if (!this._elmRef.nativeElement.contains(event.target)) {
            this.selectedDataIndex = -1;
            this.dropdownOpen = false;
        }
    }
    // function to manually trigger the callback to parent component when clicked search button.
    /**
     * @param {?=} selectedOption
     * @return {?}
     */
    userQuerySubmit(selectedOption) {
        /** @type {?} */
        const _userOption = selectedOption === 'false' ? '' : this.userSelectedOption;
        if (_userOption) {
            this.select.emit(this.userSelectedOption);
        }
        else {
            // this.select.emit(false);
        }
    }
    // function to get user current location from the device.
    /**
     * @return {?}
     */
    currentLocationSelected() {
        if (isPlatformBrowser(this.platformId)) {
            this.gettingCurrentLocationFlag = true;
            this.dropdownOpen = false;
            this._googlePlacesService.getGeoCurrentLocation().then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                if (!result) {
                    this.gettingCurrentLocationFlag = false;
                }
                else {
                    this.getCurrentLocationInfo(result);
                }
            }));
        }
    }
    // module initialization happens. function called by ngOninit and ngOnChange
    /**
     * @private
     * @return {?}
     */
    moduleInit() {
        this.settings = this.setUserSettings();
        // condition to check if Radius is set without location detail.
        if (this.settings.geoRadius) {
            if (this.settings.geoLocation.length !== 2) {
                this.isSettingsError = true;
                this.settingsErrorMsg =
                    this.settingsErrorMsg + 'Radius should be used with GeoLocation. Please use "geoLocation" key to set lat and lng. ';
            }
        }
        // condition to check if lat and lng is set and radious is not set then it will set to 20,000KM by default
        if (this.settings.geoLocation.length === 2 && !this.settings.geoRadius) {
            this.settings.geoRadius = 20000000;
        }
        if (this.settings.showRecentSearch) {
            this.getRecentLocations();
        }
        if (!this.settings.useGoogleGeoApi) {
            if (!this.settings.geoPredictionServerUrl) {
                this.isSettingsError = true;
                this.settingsErrorMsg =
                    this.settingsErrorMsg + 'Prediction custom server url is not defined. Please use "geoPredictionServerUrl" key to set. ';
            }
            if (!this.settings.geoLatLangServiceUrl) {
                this.isSettingsError = true;
                this.settingsErrorMsg =
                    this.settingsErrorMsg + 'Latitude and longitude custom server url is not defined. Please use "geoLatLangServiceUrl" key to set. ';
            }
            if (!this.settings.geoLocDetailServerUrl) {
                this.isSettingsError = true;
                this.settingsErrorMsg =
                    this.settingsErrorMsg + 'Location detail custom server url is not defined. Please use "geoLocDetailServerUrl" key to set. ';
            }
        }
        this.locationInput = this.term;
    }
    // function to process the search query when pressed enter.
    /**
     * @private
     * @return {?}
     */
    processSearchQuery() {
        if (this.queryItems.length) {
            if (this.selectedDataIndex > -1) {
                this.selectedListNode(null, this.selectedDataIndex);
            }
            else {
                this.selectedListNode(null, 0);
            }
        }
    }
    // function to set user settings if it is available.
    /**
     * @private
     * @return {?}
     */
    setUserSettings() {
        /** @type {?} */
        const _tempObj = {};
        if (this.userSettings && typeof this.userSettings === 'object') {
            /** @type {?} */
            const keys = Object.keys(this.defaultSettings);
            for (const value of keys) {
                _tempObj[value] = this.userSettings[value] !== undefined ? this.userSettings[value] : this.defaultSettings[value];
            }
            return _tempObj;
        }
        else {
            return this.defaultSettings;
        }
    }
    // function to get the autocomplete list based on user input.
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    getListQuery(value) {
        this.recentDropdownOpen = false;
        if (this.settings.useGoogleGeoApi) {
            /** @type {?} */
            const _tempParams = {
                query: value,
                countryRestriction: this.settings.geoCountryRestriction,
                geoTypes: this.settings.geoTypes,
            };
            if (this.settings.geoLocation.length === 2) {
                _tempParams.geoLocation = this.settings.geoLocation;
                _tempParams.radius = this.settings.geoRadius;
            }
            this._googlePlacesService.getGeoPrediction(_tempParams).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                this.updateListItem(result);
            }));
        }
        else {
            this._googlePlacesService.getPredictions(this.settings.geoPredictionServerUrl, value).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                result = this.extractServerList(this.settings.serverResponseListHierarchy, result);
                this.updateListItem(result);
            }));
        }
    }
    // function to extratc custom data which is send by the server.
    /**
     * @private
     * @param {?} arrayList
     * @param {?} data
     * @return {?}
     */
    extractServerList(arrayList, data) {
        if (arrayList.length) {
            /** @type {?} */
            let _tempData = data;
            for (const key of arrayList) {
                _tempData = _tempData[key];
            }
            return _tempData;
        }
        else {
            return data;
        }
    }
    // function to update the predicted list.
    /**
     * @private
     * @param {?} listData
     * @return {?}
     */
    updateListItem(listData) {
        this.queryItems = listData ? listData : [];
        this.dropdownOpen = true;
    }
    // function to show the recent search result.
    /**
     * @private
     * @return {?}
     */
    showRecentSearch() {
        this.recentDropdownOpen = true;
        this.dropdownOpen = true;
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then((/**
         * @param {?} result
         * @return {?}
         */
        (result) => {
            if (result) {
                this.queryItems = result;
            }
            else {
                this.queryItems = [];
            }
        }));
    }
    // //function to navigate through list when up and down keyboard key is pressed;
    // private navigateInList(keyCode: number): any {
    //     let arrayIndex: number = 0;
    //     //arrow down
    //     if (keyCode === 40) {
    //         if (this.selectedDataIndex >= 0) {
    //             arrayIndex = ((this.selectedDataIndex + 1) <= (this.queryItems.length - 1)) ? (this.selectedDataIndex + 1) : 0;
    //         }
    //         this.activeListNode(arrayIndex);
    //     } else if (keyCode === 38) {//arrow up
    //         if (this.selectedDataIndex >= 0) {
    //             arrayIndex = ((this.selectedDataIndex - 1) >= 0) ? (this.selectedDataIndex - 1) : (this.queryItems.length - 1);
    //         } else {
    //             arrayIndex = this.queryItems.length - 1;
    //         }
    //         this.activeListNode(arrayIndex);
    //     } else {
    //         this.processSearchQuery();
    //     }
    // }
    // function to execute to get location detail based on latitude and longitude.
    /**
     * @private
     * @param {?} latlng
     * @return {?}
     */
    getCurrentLocationInfo(latlng) {
        if (this.settings.useGoogleGeoApi) {
            this._googlePlacesService.getGeoLatLngDetail(latlng).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                if (result) {
                    this.setRecentLocation(result);
                }
                this.gettingCurrentLocationFlag = false;
            }));
        }
        else {
            this._googlePlacesService.getLatLngDetail(this.settings.geoLatLangServiceUrl, latlng.lat, latlng.lng).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                if (result) {
                    result = this.extractServerList(this.settings.serverResponseatLangHierarchy, result);
                    this.setRecentLocation(result);
                }
                this.gettingCurrentLocationFlag = false;
            }));
        }
    }
    // function to retrive the location info based on goovle place id.
    /**
     * @private
     * @param {?} selectedData
     * @return {?}
     */
    getPlaceLocationInfo(selectedData) {
        if (this.settings.useGoogleGeoApi) {
            this._googlePlacesService.getGeoPlaceDetail(selectedData.place_id).then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (data) {
                    this.setRecentLocation(data);
                }
            }));
        }
        else {
            this._googlePlacesService.getPlaceDetails(this.settings.geoLocDetailServerUrl, selectedData.place_id).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                if (result) {
                    result = this.extractServerList(this.settings.serverResponseDetailHierarchy, result);
                    this.setRecentLocation(result);
                }
            }));
        }
    }
    // function to store the selected user search in the localstorage.
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    setRecentLocation(data) {
        data = JSON.parse(JSON.stringify(data));
        data.description = data.description ? data.description : data.formatted_address;
        data.active = false;
        this.selectedDataIndex = -1;
        this.locationInput = data.description;
        if (this.settings.showRecentSearch) {
            this._googlePlacesService.addRecentList(this.settings.recentStorageName, data, this.settings.noOfRecentSearchSave);
            this.getRecentLocations();
        }
        this.userSelectedOption = data;
        // below code will execute only when user press enter or select any option selection and it emit a callback to the parent component.
        if (!this.settings.resOnSearchButtonClickOnly) {
            this.select.emit(data);
            this.termChange.emit(data);
        }
    }
    // function to retrive the stored recent user search from the localstorage.
    /**
     * @private
     * @return {?}
     */
    getRecentLocations() {
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.recentSearchData = data && data.length ? data : [];
        }));
    }
}
PlacesListComponent.decorators = [
    { type: Component, args: [{
                selector: 'google-places-list',
                template: `
        <novo-list direction="vertical">
            <novo-list-item *ngFor="let data of queryItems;let $index = index" (click)="selectedListNode($event, $index)">
                <item-header>
                    <item-avatar icon="location"></item-avatar>
                    <item-title>{{data.structured_formatting?.main_text ? data.structured_formatting.main_text : data.description}}</item-title>
                </item-header>
                <item-content>{{data.structured_formatting?.secondary_text}}</item-content>
            </novo-list-item>
        </novo-list>
    `
            }] }
];
/** @nocollapse */
PlacesListComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: GlobalRef },
    { type: GooglePlacesService }
];
PlacesListComponent.propDecorators = {
    userSettings: [{ type: Input }],
    term: [{ type: Input }],
    termChange: [{ type: Output }],
    select: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PlacesListComponent.prototype.userSettings;
    /** @type {?} */
    PlacesListComponent.prototype.term;
    /** @type {?} */
    PlacesListComponent.prototype.termChange;
    /** @type {?} */
    PlacesListComponent.prototype.select;
    /** @type {?} */
    PlacesListComponent.prototype.locationInput;
    /** @type {?} */
    PlacesListComponent.prototype.gettingCurrentLocationFlag;
    /** @type {?} */
    PlacesListComponent.prototype.dropdownOpen;
    /** @type {?} */
    PlacesListComponent.prototype.recentDropdownOpen;
    /** @type {?} */
    PlacesListComponent.prototype.queryItems;
    /** @type {?} */
    PlacesListComponent.prototype.isSettingsError;
    /** @type {?} */
    PlacesListComponent.prototype.settingsErrorMsg;
    /** @type {?} */
    PlacesListComponent.prototype.settings;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype.moduleinit;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype.selectedDataIndex;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype.recentSearchData;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype.userSelectedOption;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype.defaultSettings;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype._elmRef;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype._global;
    /**
     * @type {?}
     * @private
     */
    PlacesListComponent.prototype._googlePlacesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSVosVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFdkQsOEJBdUJDOzs7SUF0QkMsMENBQWdDOztJQUNoQyx3Q0FBOEI7O0lBQzlCLHlDQUErQjs7SUFDL0IseUNBQTRCOztJQUM1Qiw0QkFBZTs7SUFDZiwrQkFBa0I7O0lBQ2xCLDZCQUFtQjs7SUFDbkIsK0NBQWtDOztJQUNsQyxpREFBb0M7O0lBQ3BDLGlEQUFvQzs7SUFDcEMsOENBQXFDOztJQUNyQyxtQ0FBMEI7O0lBQzFCLHdDQUE4Qjs7SUFDOUIsK0JBQXFCOztJQUNyQixvQ0FBMkI7O0lBQzNCLG9DQUEyQjs7SUFDM0IsdUNBQThCOztJQUM5QixxQ0FBMkI7O0lBQzNCLHdDQUE4Qjs7SUFDOUIscUNBQTJCOztJQUMzQixpQ0FBdUI7O0lBQ3ZCLG1DQUF5Qjs7QUFpQjNCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUErQzlCLFlBQytCLFVBQWtCLEVBQ3ZDLE9BQW1CLEVBQ25CLE9BQWtCLEVBQ2xCLG9CQUF5QztRQUhwQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQix5QkFBb0IsR0FBcEIsb0JB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WUFJSCxTQUFTO1lBQ1QsbUJBQW1COzs7MkJBMEN6QixLQUFLO21CQUVMLEtBQUs7eUJBRUwsTUFBTTtxQkFFTixNQUFNOzs7O0lBTlAsMkNBQ3VCOztJQUN2QixtQ0FDa0I7O0lBQ2xCLHlDQUN3RDs7SUFDeEQscUNBQ29EOztJQUVwRCw0Q0FBa0M7O0lBQ2xDLHlEQUFtRDs7SUFDbkQsMkNBQXFDOztJQUNyQyxpREFBMkM7O0lBQzNDLHlDQUE0Qjs7SUFDNUIsOENBQXdDOztJQUN4QywrQ0FBcUM7O0lBQ3JDLHVDQUErQjs7Ozs7SUFDL0IseUNBQW9DOzs7OztJQUNwQyxnREFBdUM7Ozs7O0lBQ3ZDLCtDQUFtQzs7Ozs7SUFDbkMsaURBQXFDOzs7OztJQUNyQyw4Q0F1QkU7Ozs7O0lBR0EseUNBQStDOzs7OztJQUMvQyxzQ0FBMkI7Ozs7O0lBQzNCLHNDQUEwQjs7Ozs7SUFDMUIsbURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9wdGlvbmFsLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hFbGVtZW50IH0gZnJvbSAnLi4vc2VhcmNoL1NlYXJjaEJveCc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHbG9iYWxSZWYgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlUGxhY2VzU2VydmljZSB9IGZyb20gJy4vcGxhY2VzLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzIHtcbiAgZ2VvUHJlZGljdGlvblNlcnZlclVybD86IHN0cmluZztcbiAgZ2VvTGF0TGFuZ1NlcnZpY2VVcmw/OiBzdHJpbmc7XG4gIGdlb0xvY0RldGFpbFNlcnZlclVybD86IHN0cmluZztcbiAgZ2VvQ291bnRyeVJlc3RyaWN0aW9uPzogYW55O1xuICBnZW9UeXBlcz86IGFueTtcbiAgZ2VvTG9jYXRpb24/OiBhbnk7XG4gIGdlb1JhZGl1cz86IG51bWJlcjtcbiAgc2VydmVyUmVzcG9uc2VMaXN0SGllcmFyY2h5PzogYW55O1xuICBzZXJ2ZXJSZXNwb25zZWF0TGFuZ0hpZXJhcmNoeT86IGFueTtcbiAgc2VydmVyUmVzcG9uc2VEZXRhaWxIaWVyYXJjaHk/OiBhbnk7XG4gIHJlc09uU2VhcmNoQnV0dG9uQ2xpY2tPbmx5PzogYm9vbGVhbjtcbiAgdXNlR29vZ2xlR2VvQXBpPzogYm9vbGVhbjtcbiAgaW5wdXRQbGFjZWhvbGRlclRleHQ/OiBzdHJpbmc7XG4gIGlucHV0U3RyaW5nPzogc3RyaW5nO1xuICBzaG93U2VhcmNoQnV0dG9uPzogYm9vbGVhbjtcbiAgc2hvd1JlY2VudFNlYXJjaD86IGJvb2xlYW47XG4gIHNob3dDdXJyZW50TG9jYXRpb24/OiBib29sZWFuO1xuICByZWNlbnRTdG9yYWdlTmFtZT86IHN0cmluZztcbiAgbm9PZlJlY2VudFNlYXJjaFNhdmU/OiBudW1iZXI7XG4gIGN1cnJlbnRMb2NJY29uVXJsPzogc3RyaW5nO1xuICBzZWFyY2hJY29uVXJsPzogc3RyaW5nO1xuICBsb2NhdGlvbkljb25Vcmw/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvb2dsZS1wbGFjZXMtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgZGF0YSBvZiBxdWVyeUl0ZW1zO2xldCAkaW5kZXggPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RlZExpc3ROb2RlKCRldmVudCwgJGluZGV4KVwiPlxuICAgICAgICAgICAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tYXZhdGFyIGljb249XCJsb2NhdGlvblwiPjwvaXRlbS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLXRpdGxlPnt7ZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmc/Lm1haW5fdGV4dCA/IGRhdGEuc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCA6IGRhdGEuZGVzY3JpcHRpb259fTwvaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICA8L2l0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+e3tkYXRhLnN0cnVjdHVyZWRfZm9ybWF0dGluZz8uc2Vjb25kYXJ5X3RleHR9fTwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgdXNlclNldHRpbmdzOiBTZXR0aW5ncztcbiAgQElucHV0KClcbiAgdGVybTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKVxuICB0ZXJtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBsb2NhdGlvbklucHV0OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkcm9wZG93bk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJlY2VudERyb3Bkb3duT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcXVlcnlJdGVtczogYW55ID0gW107XG4gIHB1YmxpYyBpc1NldHRpbmdzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNldHRpbmdzRXJyb3JNc2c6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzID0ge307XG4gIHByaXZhdGUgbW9kdWxlaW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRGF0YUluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSByZWNlbnRTZWFyY2hEYXRhOiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSB1c2VyU2VsZWN0ZWRPcHRpb246IGFueSA9ICcnO1xuICBwcml2YXRlIGRlZmF1bHRTZXR0aW5nczogU2V0dGluZ3MgPSB7XG4gICAgZ2VvUHJlZGljdGlvblNlcnZlclVybDogJycsXG4gICAgZ2VvTGF0TGFuZ1NlcnZpY2VVcmw6ICcnLFxuICAgIGdlb0xvY0RldGFpbFNlcnZlclVybDogJycsXG4gICAgZ2VvQ291bnRyeVJlc3RyaWN0aW9uOiBbXSxcbiAgICBnZW9UeXBlczogW10sXG4gICAgZ2VvTG9jYXRpb246IFtdLFxuICAgIGdlb1JhZGl1czogMCxcbiAgICBzZXJ2ZXJSZXNwb25zZUxpc3RIaWVyYXJjaHk6IFtdLFxuICAgIHNlcnZlclJlc3BvbnNlYXRMYW5nSGllcmFyY2h5OiBbXSxcbiAgICBzZXJ2ZXJSZXNwb25zZURldGFpbEhpZXJhcmNoeTogW10sXG4gICAgcmVzT25TZWFyY2hCdXR0b25DbGlja09ubHk6IGZhbHNlLFxuICAgIHVzZUdvb2dsZUdlb0FwaTogdHJ1ZSxcbiAgICBpbnB1dFBsYWNlaG9sZGVyVGV4dDogJ0VudGVyIEFyZWEgTmFtZScsXG4gICAgaW5wdXRTdHJpbmc6ICcnLFxuICAgIHNob3dTZWFyY2hCdXR0b246IHRydWUsXG4gICAgc2hvd1JlY2VudFNlYXJjaDogdHJ1ZSxcbiAgICBzaG93Q3VycmVudExvY2F0aW9uOiB0cnVlLFxuICAgIHJlY2VudFN0b3JhZ2VOYW1lOiAncmVjZW50U2VhcmNoZXMnLFxuICAgIG5vT2ZSZWNlbnRTZWFyY2hTYXZlOiA1LFxuICAgIGN1cnJlbnRMb2NJY29uVXJsOiAnJyxcbiAgICBzZWFyY2hJY29uVXJsOiAnJyxcbiAgICBsb2NhdGlvbkljb25Vcmw6ICcnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgX2VsbVJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9nbG9iYWw6IEdsb2JhbFJlZixcbiAgICBwcml2YXRlIF9nb29nbGVQbGFjZXNTZXJ2aWNlOiBHb29nbGVQbGFjZXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICBpZiAoIXRoaXMubW9kdWxlaW5pdCkge1xuICAgICAgdGhpcy5tb2R1bGVJbml0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogYW55IHtcbiAgICB0aGlzLm1vZHVsZWluaXQgPSB0cnVlO1xuICAgIHRoaXMubW9kdWxlSW5pdCgpO1xuICAgIHRoaXMuc2VhcmNoaW5wdXRDYWxsYmFjayhudWxsKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGNsaWNrIGV2ZW50IGhhcHBlbnMgaW4gaW5wdXQgYm94LiAoQmluZGVkIHdpdGggdmlldylcbiAgc2VhcmNoaW5wdXRDbGlja0NhbGxiYWNrKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcbiAgICB0aGlzLnNlYXJjaGlucHV0Q2FsbGJhY2soZXZlbnQpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBjaGFuZ2UgaW4gaW5wdXQuIChCaW5kZWQgd2l0aCB2aWV3KVxuICBzZWFyY2hpbnB1dENhbGxiYWNrKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IGlucHV0VmFsOiBhbnkgPSB0aGlzLmxvY2F0aW9uSW5wdXQ7XG4gICAgaWYgKGlucHV0VmFsKSB7XG4gICAgICB0aGlzLmdldExpc3RRdWVyeShpbnB1dFZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlcnlJdGVtcyA9IFtdO1xuICAgICAgaWYgKHRoaXMudXNlclNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIHRoaXMudXNlclF1ZXJ5U3VibWl0KCdmYWxzZScpO1xuICAgICAgfVxuICAgICAgdGhpcy51c2VyU2VsZWN0ZWRPcHRpb24gPSAnJztcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dSZWNlbnRTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zaG93UmVjZW50U2VhcmNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB1c2VyIGhvdmVyIG92ZXIgYXV0b2NvbXBsZXRlIGxpc3QuKGJpbmRlZCB3aXRoIHZpZXcpXG4gIGFjdGl2ZUxpc3ROb2RlKGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbmRleCA9PT0gaSkge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGFJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB1c2VyIHNlbGVjdCB0aGUgYXV0b2NvbXBsZXRlIGxpc3QuKGJpbmRlZCB3aXRoIHZpZXcpXG4gIHNlbGVjdGVkTGlzdE5vZGUoZXZlbnQ6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucmVjZW50RHJvcGRvd25PcGVuKSB7XG4gICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHRoaXMucXVlcnlJdGVtc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldFBsYWNlTG9jYXRpb25JbmZvKHRoaXMucXVlcnlJdGVtc1tpbmRleF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBhdXRvY29tcGxldGUgbGlzdCB3aGVuIGNsaWNrZWQgb3V0c2lkZS4gKGJpbmRlZCB3aXRoIHZpZXcpXG4gIGNsb3NlQXV0b2NvbXBsZXRlKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGlmICghdGhpcy5fZWxtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGFJbmRleCA9IC0xO1xuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBtYW51YWxseSB0cmlnZ2VyIHRoZSBjYWxsYmFjayB0byBwYXJlbnQgY29tcG9uZW50IHdoZW4gY2xpY2tlZCBzZWFyY2ggYnV0dG9uLlxuICB1c2VyUXVlcnlTdWJtaXQoc2VsZWN0ZWRPcHRpb24/OiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IF91c2VyT3B0aW9uOiBhbnkgPSBzZWxlY3RlZE9wdGlvbiA9PT0gJ2ZhbHNlJyA/ICcnIDogdGhpcy51c2VyU2VsZWN0ZWRPcHRpb247XG4gICAgaWYgKF91c2VyT3B0aW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMudXNlclNlbGVjdGVkT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5zZWxlY3QuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZ2V0IHVzZXIgY3VycmVudCBsb2NhdGlvbiBmcm9tIHRoZSBkZXZpY2UuXG4gIGN1cnJlbnRMb2NhdGlvblNlbGVjdGVkKCk6IGFueSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSB0cnVlO1xuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvQ3VycmVudExvY2F0aW9uKCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50TG9jYXRpb25JbmZvKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZHVsZSBpbml0aWFsaXphdGlvbiBoYXBwZW5zLiBmdW5jdGlvbiBjYWxsZWQgYnkgbmdPbmluaXQgYW5kIG5nT25DaGFuZ2VcbiAgcHJpdmF0ZSBtb2R1bGVJbml0KCk6IGFueSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2V0VXNlclNldHRpbmdzKCk7XG4gICAgLy8gY29uZGl0aW9uIHRvIGNoZWNrIGlmIFJhZGl1cyBpcyBzZXQgd2l0aG91dCBsb2NhdGlvbiBkZXRhaWwuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbi5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdSYWRpdXMgc2hvdWxkIGJlIHVzZWQgd2l0aCBHZW9Mb2NhdGlvbi4gUGxlYXNlIHVzZSBcImdlb0xvY2F0aW9uXCIga2V5IHRvIHNldCBsYXQgYW5kIGxuZy4gJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25kaXRpb24gdG8gY2hlY2sgaWYgbGF0IGFuZCBsbmcgaXMgc2V0IGFuZCByYWRpb3VzIGlzIG5vdCBzZXQgdGhlbiBpdCB3aWxsIHNldCB0byAyMCwwMDBLTSBieSBkZWZhdWx0XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb24ubGVuZ3RoID09PSAyICYmICF0aGlzLnNldHRpbmdzLmdlb1JhZGl1cykge1xuICAgICAgdGhpcy5zZXR0aW5ncy5nZW9SYWRpdXMgPSAyMDAwMDAwMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1JlY2VudFNlYXJjaCkge1xuICAgICAgdGhpcy5nZXRSZWNlbnRMb2NhdGlvbnMoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmwpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdQcmVkaWN0aW9uIGN1c3RvbSBzZXJ2ZXIgdXJsIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgdXNlIFwiZ2VvUHJlZGljdGlvblNlcnZlclVybFwiIGtleSB0byBzZXQuICc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZ2VvTGF0TGFuZ1NlcnZpY2VVcmwpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdMYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGN1c3RvbSBzZXJ2ZXIgdXJsIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgdXNlIFwiZ2VvTGF0TGFuZ1NlcnZpY2VVcmxcIiBrZXkgdG8gc2V0LiAnO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmdlb0xvY0RldGFpbFNlcnZlclVybCkge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ0xvY2F0aW9uIGRldGFpbCBjdXN0b20gc2VydmVyIHVybCBpcyBub3QgZGVmaW5lZC4gUGxlYXNlIHVzZSBcImdlb0xvY0RldGFpbFNlcnZlclVybFwiIGtleSB0byBzZXQuICc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9jYXRpb25JbnB1dCA9IHRoaXMudGVybTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHByb2Nlc3MgdGhlIHNlYXJjaCBxdWVyeSB3aGVuIHByZXNzZWQgZW50ZXIuXG4gIHByaXZhdGUgcHJvY2Vzc1NlYXJjaFF1ZXJ5KCk6IGFueSB7XG4gICAgaWYgKHRoaXMucXVlcnlJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3ROb2RlKG51bGwsIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3ROb2RlKG51bGwsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHNldCB1c2VyIHNldHRpbmdzIGlmIGl0IGlzIGF2YWlsYWJsZS5cbiAgcHJpdmF0ZSBzZXRVc2VyU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIGNvbnN0IF90ZW1wT2JqOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy51c2VyU2V0dGluZ3MgJiYgdHlwZW9mIHRoaXMudXNlclNldHRpbmdzID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIGtleXMpIHtcbiAgICAgICAgX3RlbXBPYmpbdmFsdWVdID0gdGhpcy51c2VyU2V0dGluZ3NbdmFsdWVdICE9PSB1bmRlZmluZWQgPyB0aGlzLnVzZXJTZXR0aW5nc1t2YWx1ZV0gOiB0aGlzLmRlZmF1bHRTZXR0aW5nc1t2YWx1ZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RlbXBPYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBnZXQgdGhlIGF1dG9jb21wbGV0ZSBsaXN0IGJhc2VkIG9uIHVzZXIgaW5wdXQuXG4gIHByaXZhdGUgZ2V0TGlzdFF1ZXJ5KHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgIHRoaXMucmVjZW50RHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICBjb25zdCBfdGVtcFBhcmFtczogYW55ID0ge1xuICAgICAgICBxdWVyeTogdmFsdWUsXG4gICAgICAgIGNvdW50cnlSZXN0cmljdGlvbjogdGhpcy5zZXR0aW5ncy5nZW9Db3VudHJ5UmVzdHJpY3Rpb24sXG4gICAgICAgIGdlb1R5cGVzOiB0aGlzLnNldHRpbmdzLmdlb1R5cGVzLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBfdGVtcFBhcmFtcy5nZW9Mb2NhdGlvbiA9IHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb247XG4gICAgICAgIF90ZW1wUGFyYW1zLnJhZGl1cyA9IHRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzO1xuICAgICAgfVxuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9QcmVkaWN0aW9uKF90ZW1wUGFyYW1zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0SXRlbShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UHJlZGljdGlvbnModGhpcy5zZXR0aW5ncy5nZW9QcmVkaWN0aW9uU2VydmVyVXJsLCB2YWx1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuZXh0cmFjdFNlcnZlckxpc3QodGhpcy5zZXR0aW5ncy5zZXJ2ZXJSZXNwb25zZUxpc3RIaWVyYXJjaHksIHJlc3VsdCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW0ocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4dHJhdGMgY3VzdG9tIGRhdGEgd2hpY2ggaXMgc2VuZCBieSB0aGUgc2VydmVyLlxuICBwcml2YXRlIGV4dHJhY3RTZXJ2ZXJMaXN0KGFycmF5TGlzdDogYW55LCBkYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmIChhcnJheUxpc3QubGVuZ3RoKSB7XG4gICAgICBsZXQgX3RlbXBEYXRhOiBhbnkgPSBkYXRhO1xuICAgICAgZm9yIChjb25zdCBrZXkgb2YgYXJyYXlMaXN0KSB7XG4gICAgICAgIF90ZW1wRGF0YSA9IF90ZW1wRGF0YVtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90ZW1wRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwcmVkaWN0ZWQgbGlzdC5cbiAgcHJpdmF0ZSB1cGRhdGVMaXN0SXRlbShsaXN0RGF0YTogYW55KTogYW55IHtcbiAgICB0aGlzLnF1ZXJ5SXRlbXMgPSBsaXN0RGF0YSA/IGxpc3REYXRhIDogW107XG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSB0cnVlO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gc2hvdyB0aGUgcmVjZW50IHNlYXJjaCByZXN1bHQuXG4gIHByaXZhdGUgc2hvd1JlY2VudFNlYXJjaCgpOiBhbnkge1xuICAgIHRoaXMucmVjZW50RHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XG4gICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRSZWNlbnRMaXN0KHRoaXMuc2V0dGluZ3MucmVjZW50U3RvcmFnZU5hbWUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtcyA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtcyA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gLy9mdW5jdGlvbiB0byBuYXZpZ2F0ZSB0aHJvdWdoIGxpc3Qgd2hlbiB1cCBhbmQgZG93biBrZXlib2FyZCBrZXkgaXMgcHJlc3NlZDtcbiAgLy8gcHJpdmF0ZSBuYXZpZ2F0ZUluTGlzdChrZXlDb2RlOiBudW1iZXIpOiBhbnkge1xuICAvLyAgICAgbGV0IGFycmF5SW5kZXg6IG51bWJlciA9IDA7XG4gIC8vICAgICAvL2Fycm93IGRvd25cbiAgLy8gICAgIGlmIChrZXlDb2RlID09PSA0MCkge1xuICAvLyAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID49IDApIHtcbiAgLy8gICAgICAgICAgICAgYXJyYXlJbmRleCA9ICgodGhpcy5zZWxlY3RlZERhdGFJbmRleCArIDEpIDw9ICh0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoIC0gMSkpID8gKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggKyAxKSA6IDA7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHRoaXMuYWN0aXZlTGlzdE5vZGUoYXJyYXlJbmRleCk7XG4gIC8vICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IDM4KSB7Ly9hcnJvdyB1cFxuICAvLyAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID49IDApIHtcbiAgLy8gICAgICAgICAgICAgYXJyYXlJbmRleCA9ICgodGhpcy5zZWxlY3RlZERhdGFJbmRleCAtIDEpID49IDApID8gKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggLSAxKSA6ICh0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoIC0gMSk7XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgICAgYXJyYXlJbmRleCA9IHRoaXMucXVlcnlJdGVtcy5sZW5ndGggLSAxO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICB0aGlzLmFjdGl2ZUxpc3ROb2RlKGFycmF5SW5kZXgpO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICB0aGlzLnByb2Nlc3NTZWFyY2hRdWVyeSgpO1xuICAvLyAgICAgfVxuICAvLyB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXhlY3V0ZSB0byBnZXQgbG9jYXRpb24gZGV0YWlsIGJhc2VkIG9uIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUuXG4gIHByaXZhdGUgZ2V0Q3VycmVudExvY2F0aW9uSW5mbyhsYXRsbmc6IGFueSk6IGFueSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb0xhdExuZ0RldGFpbChsYXRsbmcpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0TGF0TG5nRGV0YWlsKHRoaXMuc2V0dGluZ3MuZ2VvTGF0TGFuZ1NlcnZpY2VVcmwsIGxhdGxuZy5sYXQsIGxhdGxuZy5sbmcpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmV4dHJhY3RTZXJ2ZXJMaXN0KHRoaXMuc2V0dGluZ3Muc2VydmVyUmVzcG9uc2VhdExhbmdIaWVyYXJjaHksIHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHJldHJpdmUgdGhlIGxvY2F0aW9uIGluZm8gYmFzZWQgb24gZ29vdmxlIHBsYWNlIGlkLlxuICBwcml2YXRlIGdldFBsYWNlTG9jYXRpb25JbmZvKHNlbGVjdGVkRGF0YTogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvUGxhY2VEZXRhaWwoc2VsZWN0ZWREYXRhLnBsYWNlX2lkKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRQbGFjZURldGFpbHModGhpcy5zZXR0aW5ncy5nZW9Mb2NEZXRhaWxTZXJ2ZXJVcmwsIHNlbGVjdGVkRGF0YS5wbGFjZV9pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXh0cmFjdFNlcnZlckxpc3QodGhpcy5zZXR0aW5ncy5zZXJ2ZXJSZXNwb25zZURldGFpbEhpZXJhcmNoeSwgcmVzdWx0KTtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHN0b3JlIHRoZSBzZWxlY3RlZCB1c2VyIHNlYXJjaCBpbiB0aGUgbG9jYWxzdG9yYWdlLlxuICBwcml2YXRlIHNldFJlY2VudExvY2F0aW9uKGRhdGE6IGFueSk6IGFueSB7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGRhdGEuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uID8gZGF0YS5kZXNjcmlwdGlvbiA6IGRhdGEuZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgZGF0YS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID0gLTE7XG4gICAgdGhpcy5sb2NhdGlvbklucHV0ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93UmVjZW50U2VhcmNoKSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmFkZFJlY2VudExpc3QodGhpcy5zZXR0aW5ncy5yZWNlbnRTdG9yYWdlTmFtZSwgZGF0YSwgdGhpcy5zZXR0aW5ncy5ub09mUmVjZW50U2VhcmNoU2F2ZSk7XG4gICAgICB0aGlzLmdldFJlY2VudExvY2F0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbiA9IGRhdGE7XG4gICAgLy8gYmVsb3cgY29kZSB3aWxsIGV4ZWN1dGUgb25seSB3aGVuIHVzZXIgcHJlc3MgZW50ZXIgb3Igc2VsZWN0IGFueSBvcHRpb24gc2VsZWN0aW9uIGFuZCBpdCBlbWl0IGEgY2FsbGJhY2sgdG8gdGhlIHBhcmVudCBjb21wb25lbnQuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnJlc09uU2VhcmNoQnV0dG9uQ2xpY2tPbmx5KSB7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICAgICAgdGhpcy50ZXJtQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gcmV0cml2ZSB0aGUgc3RvcmVkIHJlY2VudCB1c2VyIHNlYXJjaCBmcm9tIHRoZSBsb2NhbHN0b3JhZ2UuXG4gIHByaXZhdGUgZ2V0UmVjZW50TG9jYXRpb25zKCk6IGFueSB7XG4gICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRSZWNlbnRMaXN0KHRoaXMuc2V0dGluZ3MucmVjZW50U3RvcmFnZU5hbWUpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWNlbnRTZWFyY2hEYXRhID0gZGF0YSAmJiBkYXRhLmxlbmd0aCA/IGRhdGEgOiBbXTtcbiAgICB9KTtcbiAgfVxufVxuIl19