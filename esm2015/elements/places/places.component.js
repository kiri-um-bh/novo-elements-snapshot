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
        let inputVal = this.locationInput;
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
        let _userOption = selectedOption === 'false' ? '' : this.userSelectedOption;
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
        let _tempObj = {};
        if (this.userSettings && typeof this.userSettings === 'object') {
            /** @type {?} */
            let keys = Object.keys(this.defaultSettings);
            for (let value of keys) {
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
            let _tempParams = {
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
            for (let key of arrayList) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSVosVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFdkQsOEJBdUJDOzs7SUF0QkMsMENBQWdDOztJQUNoQyx3Q0FBOEI7O0lBQzlCLHlDQUErQjs7SUFDL0IseUNBQTRCOztJQUM1Qiw0QkFBZTs7SUFDZiwrQkFBa0I7O0lBQ2xCLDZCQUFtQjs7SUFDbkIsK0NBQWtDOztJQUNsQyxpREFBb0M7O0lBQ3BDLGlEQUFvQzs7SUFDcEMsOENBQXFDOztJQUNyQyxtQ0FBMEI7O0lBQzFCLHdDQUE4Qjs7SUFDOUIsK0JBQXFCOztJQUNyQixvQ0FBMkI7O0lBQzNCLG9DQUEyQjs7SUFDM0IsdUNBQThCOztJQUM5QixxQ0FBMkI7O0lBQzNCLHdDQUE4Qjs7SUFDOUIscUNBQTJCOztJQUMzQixpQ0FBdUI7O0lBQ3ZCLG1DQUF5Qjs7QUFpQjNCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUErQzlCLFlBQytCLFVBQWtCLEVBQ3ZDLE9BQW1CLEVBQ25CLE9BQWtCLEVBQ2xCLG9CQUF5QztRQUhwQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQix5QkFBb0IsR0FBcEIsb0JB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O1lBSUgsU0FBUztZQUNULG1CQUFtQjs7OzJCQTBDekIsS0FBSzttQkFFTCxLQUFLO3lCQUVMLE1BQU07cUJBRU4sTUFBTTs7OztJQU5QLDJDQUN1Qjs7SUFDdkIsbUNBQ2tCOztJQUNsQix5Q0FDd0Q7O0lBQ3hELHFDQUNvRDs7SUFFcEQsNENBQWtDOztJQUNsQyx5REFBbUQ7O0lBQ25ELDJDQUFxQzs7SUFDckMsaURBQTJDOztJQUMzQyx5Q0FBNEI7O0lBQzVCLDhDQUF3Qzs7SUFDeEMsK0NBQXFDOztJQUNyQyx1Q0FBK0I7Ozs7O0lBQy9CLHlDQUFvQzs7Ozs7SUFDcEMsZ0RBQXVDOzs7OztJQUN2QywrQ0FBbUM7Ozs7O0lBQ25DLGlEQUFxQzs7Ozs7SUFDckMsOENBdUJFOzs7OztJQUdBLHlDQUErQzs7Ozs7SUFDL0Msc0NBQTJCOzs7OztJQUMzQixzQ0FBMEI7Ozs7O0lBQzFCLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPcHRpb25hbCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvU2VhcmNoQm94RWxlbWVudCB9IGZyb20gJy4uL3NlYXJjaC9TZWFyY2hCb3gnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR2xvYmFsUmVmIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5ncyB7XG4gIGdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmw/OiBzdHJpbmc7XG4gIGdlb0xhdExhbmdTZXJ2aWNlVXJsPzogc3RyaW5nO1xuICBnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmw/OiBzdHJpbmc7XG4gIGdlb0NvdW50cnlSZXN0cmljdGlvbj86IGFueTtcbiAgZ2VvVHlwZXM/OiBhbnk7XG4gIGdlb0xvY2F0aW9uPzogYW55O1xuICBnZW9SYWRpdXM/OiBudW1iZXI7XG4gIHNlcnZlclJlc3BvbnNlTGlzdEhpZXJhcmNoeT86IGFueTtcbiAgc2VydmVyUmVzcG9uc2VhdExhbmdIaWVyYXJjaHk/OiBhbnk7XG4gIHNlcnZlclJlc3BvbnNlRGV0YWlsSGllcmFyY2h5PzogYW55O1xuICByZXNPblNlYXJjaEJ1dHRvbkNsaWNrT25seT86IGJvb2xlYW47XG4gIHVzZUdvb2dsZUdlb0FwaT86IGJvb2xlYW47XG4gIGlucHV0UGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xuICBpbnB1dFN0cmluZz86IHN0cmluZztcbiAgc2hvd1NlYXJjaEJ1dHRvbj86IGJvb2xlYW47XG4gIHNob3dSZWNlbnRTZWFyY2g/OiBib29sZWFuO1xuICBzaG93Q3VycmVudExvY2F0aW9uPzogYm9vbGVhbjtcbiAgcmVjZW50U3RvcmFnZU5hbWU/OiBzdHJpbmc7XG4gIG5vT2ZSZWNlbnRTZWFyY2hTYXZlPzogbnVtYmVyO1xuICBjdXJyZW50TG9jSWNvblVybD86IHN0cmluZztcbiAgc2VhcmNoSWNvblVybD86IHN0cmluZztcbiAgbG9jYXRpb25JY29uVXJsPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnb29nbGUtcGxhY2VzLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGRhdGEgb2YgcXVlcnlJdGVtcztsZXQgJGluZGV4ID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0ZWRMaXN0Tm9kZSgkZXZlbnQsICRpbmRleClcIj5cbiAgICAgICAgICAgICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWF2YXRhciBpY29uPVwibG9jYXRpb25cIj48L2l0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS10aXRsZT57e2RhdGEuc3RydWN0dXJlZF9mb3JtYXR0aW5nPy5tYWluX3RleHQgPyBkYXRhLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQgOiBkYXRhLmRlc2NyaXB0aW9ufX08L2l0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7ZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmc/LnNlY29uZGFyeV90ZXh0fX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHVzZXJTZXR0aW5nczogU2V0dGluZ3M7XG4gIEBJbnB1dCgpXG4gIHRlcm06IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KClcbiAgdGVybUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgbG9jYXRpb25JbnB1dDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBnZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWNlbnREcm9wZG93bk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHF1ZXJ5SXRlbXM6IGFueSA9IFtdO1xuICBwdWJsaWMgaXNTZXR0aW5nc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZXR0aW5nc0Vycm9yTXNnOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncyA9IHt9O1xuICBwcml2YXRlIG1vZHVsZWluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZERhdGFJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgcmVjZW50U2VhcmNoRGF0YTogYW55ID0gW107XG4gIHByaXZhdGUgdXNlclNlbGVjdGVkT3B0aW9uOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBkZWZhdWx0U2V0dGluZ3M6IFNldHRpbmdzID0ge1xuICAgIGdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmw6ICcnLFxuICAgIGdlb0xhdExhbmdTZXJ2aWNlVXJsOiAnJyxcbiAgICBnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmw6ICcnLFxuICAgIGdlb0NvdW50cnlSZXN0cmljdGlvbjogW10sXG4gICAgZ2VvVHlwZXM6IFtdLFxuICAgIGdlb0xvY2F0aW9uOiBbXSxcbiAgICBnZW9SYWRpdXM6IDAsXG4gICAgc2VydmVyUmVzcG9uc2VMaXN0SGllcmFyY2h5OiBbXSxcbiAgICBzZXJ2ZXJSZXNwb25zZWF0TGFuZ0hpZXJhcmNoeTogW10sXG4gICAgc2VydmVyUmVzcG9uc2VEZXRhaWxIaWVyYXJjaHk6IFtdLFxuICAgIHJlc09uU2VhcmNoQnV0dG9uQ2xpY2tPbmx5OiBmYWxzZSxcbiAgICB1c2VHb29nbGVHZW9BcGk6IHRydWUsXG4gICAgaW5wdXRQbGFjZWhvbGRlclRleHQ6ICdFbnRlciBBcmVhIE5hbWUnLFxuICAgIGlucHV0U3RyaW5nOiAnJyxcbiAgICBzaG93U2VhcmNoQnV0dG9uOiB0cnVlLFxuICAgIHNob3dSZWNlbnRTZWFyY2g6IHRydWUsXG4gICAgc2hvd0N1cnJlbnRMb2NhdGlvbjogdHJ1ZSxcbiAgICByZWNlbnRTdG9yYWdlTmFtZTogJ3JlY2VudFNlYXJjaGVzJyxcbiAgICBub09mUmVjZW50U2VhcmNoU2F2ZTogNSxcbiAgICBjdXJyZW50TG9jSWNvblVybDogJycsXG4gICAgc2VhcmNoSWNvblVybDogJycsXG4gICAgbG9jYXRpb25JY29uVXJsOiAnJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIF9lbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZ2xvYmFsOiBHbG9iYWxSZWYsXG4gICAgcHJpdmF0ZSBfZ29vZ2xlUGxhY2VzU2VydmljZTogR29vZ2xlUGxhY2VzU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLm1vZHVsZWluaXQpIHtcbiAgICAgIHRoaXMubW9kdWxlSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IGFueSB7XG4gICAgdGhpcy5tb2R1bGVpbml0ID0gdHJ1ZTtcbiAgICB0aGlzLm1vZHVsZUluaXQoKTtcbiAgICB0aGlzLnNlYXJjaGlucHV0Q2FsbGJhY2sobnVsbCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBjbGljayBldmVudCBoYXBwZW5zIGluIGlucHV0IGJveC4gKEJpbmRlZCB3aXRoIHZpZXcpXG4gIHNlYXJjaGlucHV0Q2xpY2tDYWxsYmFjayhldmVudDogYW55KTogYW55IHtcbiAgICBldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gICAgdGhpcy5zZWFyY2hpbnB1dENhbGxiYWNrKGV2ZW50KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgY2hhbmdlIGluIGlucHV0LiAoQmluZGVkIHdpdGggdmlldylcbiAgc2VhcmNoaW5wdXRDYWxsYmFjayhldmVudDogYW55KTogYW55IHtcbiAgICBsZXQgaW5wdXRWYWw6IGFueSA9IHRoaXMubG9jYXRpb25JbnB1dDtcbiAgICBpZiAoaW5wdXRWYWwpIHtcbiAgICAgIHRoaXMuZ2V0TGlzdFF1ZXJ5KGlucHV0VmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWVyeUl0ZW1zID0gW107XG4gICAgICBpZiAodGhpcy51c2VyU2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgdGhpcy51c2VyUXVlcnlTdWJtaXQoJ2ZhbHNlJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbiA9ICcnO1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1JlY2VudFNlYXJjaCkge1xuICAgICAgICB0aGlzLnNob3dSZWNlbnRTZWFyY2goKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHVzZXIgaG92ZXIgb3ZlciBhdXRvY29tcGxldGUgbGlzdC4oYmluZGVkIHdpdGggdmlldylcbiAgYWN0aXZlTGlzdE5vZGUoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucXVlcnlJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHVzZXIgc2VsZWN0IHRoZSBhdXRvY29tcGxldGUgbGlzdC4oYmluZGVkIHdpdGggdmlldylcbiAgc2VsZWN0ZWRMaXN0Tm9kZShldmVudDogTW91c2VFdmVudCwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5yZWNlbnREcm9wZG93bk9wZW4pIHtcbiAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24odGhpcy5xdWVyeUl0ZW1zW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0UGxhY2VMb2NhdGlvbkluZm8odGhpcy5xdWVyeUl0ZW1zW2luZGV4XSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBsaXN0IHdoZW4gY2xpY2tlZCBvdXRzaWRlLiAoYmluZGVkIHdpdGggdmlldylcbiAgY2xvc2VBdXRvY29tcGxldGUoZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9lbG1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID0gLTE7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIG1hbnVhbGx5IHRyaWdnZXIgdGhlIGNhbGxiYWNrIHRvIHBhcmVudCBjb21wb25lbnQgd2hlbiBjbGlja2VkIHNlYXJjaCBidXR0b24uXG4gIHVzZXJRdWVyeVN1Ym1pdChzZWxlY3RlZE9wdGlvbj86IGFueSk6IGFueSB7XG4gICAgbGV0IF91c2VyT3B0aW9uOiBhbnkgPSBzZWxlY3RlZE9wdGlvbiA9PT0gJ2ZhbHNlJyA/ICcnIDogdGhpcy51c2VyU2VsZWN0ZWRPcHRpb247XG4gICAgaWYgKF91c2VyT3B0aW9uKSB7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMudXNlclNlbGVjdGVkT3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5zZWxlY3QuZW1pdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZ2V0IHVzZXIgY3VycmVudCBsb2NhdGlvbiBmcm9tIHRoZSBkZXZpY2UuXG4gIGN1cnJlbnRMb2NhdGlvblNlbGVjdGVkKCk6IGFueSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSB0cnVlO1xuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvQ3VycmVudExvY2F0aW9uKCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5nZXRDdXJyZW50TG9jYXRpb25JbmZvKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIG1vZHVsZSBpbml0aWFsaXphdGlvbiBoYXBwZW5zLiBmdW5jdGlvbiBjYWxsZWQgYnkgbmdPbmluaXQgYW5kIG5nT25DaGFuZ2VcbiAgcHJpdmF0ZSBtb2R1bGVJbml0KCk6IGFueSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHRoaXMuc2V0VXNlclNldHRpbmdzKCk7XG4gICAgLy8gY29uZGl0aW9uIHRvIGNoZWNrIGlmIFJhZGl1cyBpcyBzZXQgd2l0aG91dCBsb2NhdGlvbiBkZXRhaWwuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbi5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdSYWRpdXMgc2hvdWxkIGJlIHVzZWQgd2l0aCBHZW9Mb2NhdGlvbi4gUGxlYXNlIHVzZSBcImdlb0xvY2F0aW9uXCIga2V5IHRvIHNldCBsYXQgYW5kIGxuZy4gJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25kaXRpb24gdG8gY2hlY2sgaWYgbGF0IGFuZCBsbmcgaXMgc2V0IGFuZCByYWRpb3VzIGlzIG5vdCBzZXQgdGhlbiBpdCB3aWxsIHNldCB0byAyMCwwMDBLTSBieSBkZWZhdWx0XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb24ubGVuZ3RoID09PSAyICYmICF0aGlzLnNldHRpbmdzLmdlb1JhZGl1cykge1xuICAgICAgdGhpcy5zZXR0aW5ncy5nZW9SYWRpdXMgPSAyMDAwMDAwMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1JlY2VudFNlYXJjaCkge1xuICAgICAgdGhpcy5nZXRSZWNlbnRMb2NhdGlvbnMoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmwpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdQcmVkaWN0aW9uIGN1c3RvbSBzZXJ2ZXIgdXJsIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgdXNlIFwiZ2VvUHJlZGljdGlvblNlcnZlclVybFwiIGtleSB0byBzZXQuICc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZ2VvTGF0TGFuZ1NlcnZpY2VVcmwpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdMYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGN1c3RvbSBzZXJ2ZXIgdXJsIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgdXNlIFwiZ2VvTGF0TGFuZ1NlcnZpY2VVcmxcIiBrZXkgdG8gc2V0LiAnO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmdlb0xvY0RldGFpbFNlcnZlclVybCkge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ0xvY2F0aW9uIGRldGFpbCBjdXN0b20gc2VydmVyIHVybCBpcyBub3QgZGVmaW5lZC4gUGxlYXNlIHVzZSBcImdlb0xvY0RldGFpbFNlcnZlclVybFwiIGtleSB0byBzZXQuICc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9jYXRpb25JbnB1dCA9IHRoaXMudGVybTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHByb2Nlc3MgdGhlIHNlYXJjaCBxdWVyeSB3aGVuIHByZXNzZWQgZW50ZXIuXG4gIHByaXZhdGUgcHJvY2Vzc1NlYXJjaFF1ZXJ5KCk6IGFueSB7XG4gICAgaWYgKHRoaXMucXVlcnlJdGVtcy5sZW5ndGgpIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3ROb2RlKG51bGwsIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZExpc3ROb2RlKG51bGwsIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHNldCB1c2VyIHNldHRpbmdzIGlmIGl0IGlzIGF2YWlsYWJsZS5cbiAgcHJpdmF0ZSBzZXRVc2VyU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIGxldCBfdGVtcE9iajogYW55ID0ge307XG4gICAgaWYgKHRoaXMudXNlclNldHRpbmdzICYmIHR5cGVvZiB0aGlzLnVzZXJTZXR0aW5ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgIGZvciAobGV0IHZhbHVlIG9mIGtleXMpIHtcbiAgICAgICAgX3RlbXBPYmpbdmFsdWVdID0gdGhpcy51c2VyU2V0dGluZ3NbdmFsdWVdICE9PSB1bmRlZmluZWQgPyB0aGlzLnVzZXJTZXR0aW5nc1t2YWx1ZV0gOiB0aGlzLmRlZmF1bHRTZXR0aW5nc1t2YWx1ZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RlbXBPYmo7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmRlZmF1bHRTZXR0aW5ncztcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBnZXQgdGhlIGF1dG9jb21wbGV0ZSBsaXN0IGJhc2VkIG9uIHVzZXIgaW5wdXQuXG4gIHByaXZhdGUgZ2V0TGlzdFF1ZXJ5KHZhbHVlOiBzdHJpbmcpOiBhbnkge1xuICAgIHRoaXMucmVjZW50RHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICBsZXQgX3RlbXBQYXJhbXM6IGFueSA9IHtcbiAgICAgICAgcXVlcnk6IHZhbHVlLFxuICAgICAgICBjb3VudHJ5UmVzdHJpY3Rpb246IHRoaXMuc2V0dGluZ3MuZ2VvQ291bnRyeVJlc3RyaWN0aW9uLFxuICAgICAgICBnZW9UeXBlczogdGhpcy5zZXR0aW5ncy5nZW9UeXBlcyxcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbi5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgX3RlbXBQYXJhbXMuZ2VvTG9jYXRpb24gPSB0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uO1xuICAgICAgICBfdGVtcFBhcmFtcy5yYWRpdXMgPSB0aGlzLnNldHRpbmdzLmdlb1JhZGl1cztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvUHJlZGljdGlvbihfdGVtcFBhcmFtcykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW0ocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFByZWRpY3Rpb25zKHRoaXMuc2V0dGluZ3MuZ2VvUHJlZGljdGlvblNlcnZlclVybCwgdmFsdWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQgPSB0aGlzLmV4dHJhY3RTZXJ2ZXJMaXN0KHRoaXMuc2V0dGluZ3Muc2VydmVyUmVzcG9uc2VMaXN0SGllcmFyY2h5LCByZXN1bHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBleHRyYXRjIGN1c3RvbSBkYXRhIHdoaWNoIGlzIHNlbmQgYnkgdGhlIHNlcnZlci5cbiAgcHJpdmF0ZSBleHRyYWN0U2VydmVyTGlzdChhcnJheUxpc3Q6IGFueSwgZGF0YTogYW55KTogYW55IHtcbiAgICBpZiAoYXJyYXlMaXN0Lmxlbmd0aCkge1xuICAgICAgbGV0IF90ZW1wRGF0YTogYW55ID0gZGF0YTtcbiAgICAgIGZvciAobGV0IGtleSBvZiBhcnJheUxpc3QpIHtcbiAgICAgICAgX3RlbXBEYXRhID0gX3RlbXBEYXRhW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RlbXBEYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHByZWRpY3RlZCBsaXN0LlxuICBwcml2YXRlIHVwZGF0ZUxpc3RJdGVtKGxpc3REYXRhOiBhbnkpOiBhbnkge1xuICAgIHRoaXMucXVlcnlJdGVtcyA9IGxpc3REYXRhID8gbGlzdERhdGEgOiBbXTtcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBzaG93IHRoZSByZWNlbnQgc2VhcmNoIHJlc3VsdC5cbiAgcHJpdmF0ZSBzaG93UmVjZW50U2VhcmNoKCk6IGFueSB7XG4gICAgdGhpcy5yZWNlbnREcm9wZG93bk9wZW4gPSB0cnVlO1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFJlY2VudExpc3QodGhpcy5zZXR0aW5ncy5yZWNlbnRTdG9yYWdlTmFtZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zID0gW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyAvL2Z1bmN0aW9uIHRvIG5hdmlnYXRlIHRocm91Z2ggbGlzdCB3aGVuIHVwIGFuZCBkb3duIGtleWJvYXJkIGtleSBpcyBwcmVzc2VkO1xuICAvLyBwcml2YXRlIG5hdmlnYXRlSW5MaXN0KGtleUNvZGU6IG51bWJlcik6IGFueSB7XG4gIC8vICAgICBsZXQgYXJyYXlJbmRleDogbnVtYmVyID0gMDtcbiAgLy8gICAgIC8vYXJyb3cgZG93blxuICAvLyAgICAgaWYgKGtleUNvZGUgPT09IDQwKSB7XG4gIC8vICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPj0gMCkge1xuICAvLyAgICAgICAgICAgICBhcnJheUluZGV4ID0gKCh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ICsgMSkgPD0gKHRoaXMucXVlcnlJdGVtcy5sZW5ndGggLSAxKSkgPyAodGhpcy5zZWxlY3RlZERhdGFJbmRleCArIDEpIDogMDtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgdGhpcy5hY3RpdmVMaXN0Tm9kZShhcnJheUluZGV4KTtcbiAgLy8gICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gMzgpIHsvL2Fycm93IHVwXG4gIC8vICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPj0gMCkge1xuICAvLyAgICAgICAgICAgICBhcnJheUluZGV4ID0gKCh0aGlzLnNlbGVjdGVkRGF0YUluZGV4IC0gMSkgPj0gMCkgPyAodGhpcy5zZWxlY3RlZERhdGFJbmRleCAtIDEpIDogKHRoaXMucXVlcnlJdGVtcy5sZW5ndGggLSAxKTtcbiAgLy8gICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBhcnJheUluZGV4ID0gdGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCAtIDE7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHRoaXMuYWN0aXZlTGlzdE5vZGUoYXJyYXlJbmRleCk7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaFF1ZXJ5KCk7XG4gIC8vICAgICB9XG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiB0byBleGVjdXRlIHRvIGdldCBsb2NhdGlvbiBkZXRhaWwgYmFzZWQgb24gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZS5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50TG9jYXRpb25JbmZvKGxhdGxuZzogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvTGF0TG5nRGV0YWlsKGxhdGxuZykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRMYXRMbmdEZXRhaWwodGhpcy5zZXR0aW5ncy5nZW9MYXRMYW5nU2VydmljZVVybCwgbGF0bG5nLmxhdCwgbGF0bG5nLmxuZykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXh0cmFjdFNlcnZlckxpc3QodGhpcy5zZXR0aW5ncy5zZXJ2ZXJSZXNwb25zZWF0TGFuZ0hpZXJhcmNoeSwgcmVzdWx0KTtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gcmV0cml2ZSB0aGUgbG9jYXRpb24gaW5mbyBiYXNlZCBvbiBnb292bGUgcGxhY2UgaWQuXG4gIHByaXZhdGUgZ2V0UGxhY2VMb2NhdGlvbkluZm8oc2VsZWN0ZWREYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9QbGFjZURldGFpbChzZWxlY3RlZERhdGEucGxhY2VfaWQpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFBsYWNlRGV0YWlscyh0aGlzLnNldHRpbmdzLmdlb0xvY0RldGFpbFNlcnZlclVybCwgc2VsZWN0ZWREYXRhLnBsYWNlX2lkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5leHRyYWN0U2VydmVyTGlzdCh0aGlzLnNldHRpbmdzLnNlcnZlclJlc3BvbnNlRGV0YWlsSGllcmFyY2h5LCByZXN1bHQpO1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHVzZXIgc2VhcmNoIGluIHRoZSBsb2NhbHN0b3JhZ2UuXG4gIHByaXZhdGUgc2V0UmVjZW50TG9jYXRpb24oZGF0YTogYW55KTogYW55IHtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgZGF0YS5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24gPyBkYXRhLmRlc2NyaXB0aW9uIDogZGF0YS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICBkYXRhLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPSAtMTtcbiAgICB0aGlzLmxvY2F0aW9uSW5wdXQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dSZWNlbnRTZWFyY2gpIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuYWRkUmVjZW50TGlzdCh0aGlzLnNldHRpbmdzLnJlY2VudFN0b3JhZ2VOYW1lLCBkYXRhLCB0aGlzLnNldHRpbmdzLm5vT2ZSZWNlbnRTZWFyY2hTYXZlKTtcbiAgICAgIHRoaXMuZ2V0UmVjZW50TG9jYXRpb25zKCk7XG4gICAgfVxuICAgIHRoaXMudXNlclNlbGVjdGVkT3B0aW9uID0gZGF0YTtcbiAgICAvLyBiZWxvdyBjb2RlIHdpbGwgZXhlY3V0ZSBvbmx5IHdoZW4gdXNlciBwcmVzcyBlbnRlciBvciBzZWxlY3QgYW55IG9wdGlvbiBzZWxlY3Rpb24gYW5kIGl0IGVtaXQgYSBjYWxsYmFjayB0byB0aGUgcGFyZW50IGNvbXBvbmVudC5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MucmVzT25TZWFyY2hCdXR0b25DbGlja09ubHkpIHtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gICAgICB0aGlzLnRlcm1DaGFuZ2UuZW1pdChkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byByZXRyaXZlIHRoZSBzdG9yZWQgcmVjZW50IHVzZXIgc2VhcmNoIGZyb20gdGhlIGxvY2Fsc3RvcmFnZS5cbiAgcHJpdmF0ZSBnZXRSZWNlbnRMb2NhdGlvbnMoKTogYW55IHtcbiAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFJlY2VudExpc3QodGhpcy5zZXR0aW5ncy5yZWNlbnRTdG9yYWdlTmFtZSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlY2VudFNlYXJjaERhdGEgPSBkYXRhICYmIGRhdGEubGVuZ3RoID8gZGF0YSA6IFtdO1xuICAgIH0pO1xuICB9XG59XG4iXX0=