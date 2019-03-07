/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
            this._googlePlacesService.getGeoCurrentLocation().then((result) => {
                if (!result) {
                    this.gettingCurrentLocationFlag = false;
                }
                else {
                    this.getCurrentLocationInfo(result);
                }
            });
        }
    }
    // module initialization happens. function called by ngOninit and ngOnChange
    /**
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
            this._googlePlacesService.getGeoPrediction(_tempParams).then((result) => {
                this.updateListItem(result);
            });
        }
        else {
            this._googlePlacesService.getPredictions(this.settings.geoPredictionServerUrl, value).then((result) => {
                result = this.extractServerList(this.settings.serverResponseListHierarchy, result);
                this.updateListItem(result);
            });
        }
    }
    // function to extratc custom data which is send by the server.
    /**
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
     * @param {?} listData
     * @return {?}
     */
    updateListItem(listData) {
        this.queryItems = listData ? listData : [];
        this.dropdownOpen = true;
    }
    // function to show the recent search result.
    /**
     * @return {?}
     */
    showRecentSearch() {
        this.recentDropdownOpen = true;
        this.dropdownOpen = true;
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then((result) => {
            if (result) {
                this.queryItems = result;
            }
            else {
                this.queryItems = [];
            }
        });
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
     * @param {?} latlng
     * @return {?}
     */
    getCurrentLocationInfo(latlng) {
        if (this.settings.useGoogleGeoApi) {
            this._googlePlacesService.getGeoLatLngDetail(latlng).then((result) => {
                if (result) {
                    this.setRecentLocation(result);
                }
                this.gettingCurrentLocationFlag = false;
            });
        }
        else {
            this._googlePlacesService.getLatLngDetail(this.settings.geoLatLangServiceUrl, latlng.lat, latlng.lng).then((result) => {
                if (result) {
                    result = this.extractServerList(this.settings.serverResponseatLangHierarchy, result);
                    this.setRecentLocation(result);
                }
                this.gettingCurrentLocationFlag = false;
            });
        }
    }
    // function to retrive the location info based on goovle place id.
    /**
     * @param {?} selectedData
     * @return {?}
     */
    getPlaceLocationInfo(selectedData) {
        if (this.settings.useGoogleGeoApi) {
            this._googlePlacesService.getGeoPlaceDetail(selectedData.place_id).then((data) => {
                if (data) {
                    this.setRecentLocation(data);
                }
            });
        }
        else {
            this._googlePlacesService.getPlaceDetails(this.settings.geoLocDetailServerUrl, selectedData.place_id).then((result) => {
                if (result) {
                    result = this.extractServerList(this.settings.serverResponseDetailHierarchy, result);
                    this.setRecentLocation(result);
                }
            });
        }
    }
    // function to store the selected user search in the localstorage.
    /**
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
     * @return {?}
     */
    getRecentLocations() {
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then((data) => {
            this.recentSearchData = data && data.length ? data : [];
        });
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
    /** @type {?} */
    PlacesListComponent.prototype.moduleinit;
    /** @type {?} */
    PlacesListComponent.prototype.selectedDataIndex;
    /** @type {?} */
    PlacesListComponent.prototype.recentSearchData;
    /** @type {?} */
    PlacesListComponent.prototype.userSelectedOption;
    /** @type {?} */
    PlacesListComponent.prototype.defaultSettings;
    /** @type {?} */
    PlacesListComponent.prototype.platformId;
    /** @type {?} */
    PlacesListComponent.prototype._elmRef;
    /** @type {?} */
    PlacesListComponent.prototype._global;
    /** @type {?} */
    PlacesListComponent.prototype._googlePlacesService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUVOLFlBQVksRUFJWixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUV2RCw4QkF1QkM7OztJQXRCQywwQ0FBZ0M7O0lBQ2hDLHdDQUE4Qjs7SUFDOUIseUNBQStCOztJQUMvQix5Q0FBNEI7O0lBQzVCLDRCQUFlOztJQUNmLCtCQUFrQjs7SUFDbEIsNkJBQW1COztJQUNuQiwrQ0FBa0M7O0lBQ2xDLGlEQUFvQzs7SUFDcEMsaURBQW9DOztJQUNwQyw4Q0FBcUM7O0lBQ3JDLG1DQUEwQjs7SUFDMUIsd0NBQThCOztJQUM5QiwrQkFBcUI7O0lBQ3JCLG9DQUEyQjs7SUFDM0Isb0NBQTJCOztJQUMzQix1Q0FBOEI7O0lBQzlCLHFDQUEyQjs7SUFDM0Isd0NBQThCOztJQUM5QixxQ0FBMkI7O0lBQzNCLGlDQUF1Qjs7SUFDdkIsbUNBQXlCOztBQWlCM0IsTUFBTTs7Ozs7OztJQStDSixZQUMrQixVQUFrQixFQUN2QyxPQUFtQixFQUNuQixPQUFrQixFQUNsQixvQkFBeUM7UUFIcEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQS9D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TCxNQUFNO3FCQUVOLE1BQU07Ozs7SUFOUCwyQ0FDdUI7O0lBQ3ZCLG1DQUNrQjs7SUFDbEIseUNBQ3dEOztJQUN4RCxxQ0FDb0Q7O0lBRXBELDRDQUFrQzs7SUFDbEMseURBQW1EOztJQUNuRCwyQ0FBcUM7O0lBQ3JDLGlEQUEyQzs7SUFDM0MseUNBQTRCOztJQUM1Qiw4Q0FBd0M7O0lBQ3hDLCtDQUFxQzs7SUFDckMsdUNBQStCOztJQUMvQix5Q0FBb0M7O0lBQ3BDLGdEQUF1Qzs7SUFDdkMsK0NBQW1DOztJQUNuQyxpREFBcUM7O0lBQ3JDLDhDQXVCRTs7SUFHQSx5Q0FBK0M7O0lBQy9DLHNDQUEyQjs7SUFDM0Isc0NBQTBCOztJQUMxQixtREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgUExBVEZPUk1fSUQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT3B0aW9uYWwsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEVsZW1lbnRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b1NlYXJjaEJveEVsZW1lbnQgfSBmcm9tICcuLi9zZWFyY2gvU2VhcmNoQm94JztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEdsb2JhbFJlZiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBHb29nbGVQbGFjZXNTZXJ2aWNlIH0gZnJvbSAnLi9wbGFjZXMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3Mge1xuICBnZW9QcmVkaWN0aW9uU2VydmVyVXJsPzogc3RyaW5nO1xuICBnZW9MYXRMYW5nU2VydmljZVVybD86IHN0cmluZztcbiAgZ2VvTG9jRGV0YWlsU2VydmVyVXJsPzogc3RyaW5nO1xuICBnZW9Db3VudHJ5UmVzdHJpY3Rpb24/OiBhbnk7XG4gIGdlb1R5cGVzPzogYW55O1xuICBnZW9Mb2NhdGlvbj86IGFueTtcbiAgZ2VvUmFkaXVzPzogbnVtYmVyO1xuICBzZXJ2ZXJSZXNwb25zZUxpc3RIaWVyYXJjaHk/OiBhbnk7XG4gIHNlcnZlclJlc3BvbnNlYXRMYW5nSGllcmFyY2h5PzogYW55O1xuICBzZXJ2ZXJSZXNwb25zZURldGFpbEhpZXJhcmNoeT86IGFueTtcbiAgcmVzT25TZWFyY2hCdXR0b25DbGlja09ubHk/OiBib29sZWFuO1xuICB1c2VHb29nbGVHZW9BcGk/OiBib29sZWFuO1xuICBpbnB1dFBsYWNlaG9sZGVyVGV4dD86IHN0cmluZztcbiAgaW5wdXRTdHJpbmc/OiBzdHJpbmc7XG4gIHNob3dTZWFyY2hCdXR0b24/OiBib29sZWFuO1xuICBzaG93UmVjZW50U2VhcmNoPzogYm9vbGVhbjtcbiAgc2hvd0N1cnJlbnRMb2NhdGlvbj86IGJvb2xlYW47XG4gIHJlY2VudFN0b3JhZ2VOYW1lPzogc3RyaW5nO1xuICBub09mUmVjZW50U2VhcmNoU2F2ZT86IG51bWJlcjtcbiAgY3VycmVudExvY0ljb25Vcmw/OiBzdHJpbmc7XG4gIHNlYXJjaEljb25Vcmw/OiBzdHJpbmc7XG4gIGxvY2F0aW9uSWNvblVybD86IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ29vZ2xlLXBsYWNlcy1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBkYXRhIG9mIHF1ZXJ5SXRlbXM7bGV0ICRpbmRleCA9IGluZGV4XCIgKGNsaWNrKT1cInNlbGVjdGVkTGlzdE5vZGUoJGV2ZW50LCAkaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgPGl0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS1hdmF0YXIgaWNvbj1cImxvY2F0aW9uXCI+PC9pdGVtLWF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tdGl0bGU+e3tkYXRhLnN0cnVjdHVyZWRfZm9ybWF0dGluZz8ubWFpbl90ZXh0ID8gZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmcubWFpbl90ZXh0IDogZGF0YS5kZXNjcmlwdGlvbn19PC9pdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgIDwvaXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD57e2RhdGEuc3RydWN0dXJlZF9mb3JtYXR0aW5nPy5zZWNvbmRhcnlfdGV4dH19PC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQbGFjZXNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICB1c2VyU2V0dGluZ3M6IFNldHRpbmdzO1xuICBASW5wdXQoKVxuICB0ZXJtOiBzdHJpbmcgPSAnJztcbiAgQE91dHB1dCgpXG4gIHRlcm1DaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBzZWxlY3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIGxvY2F0aW9uSW5wdXQ6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRyb3Bkb3duT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVjZW50RHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBxdWVyeUl0ZW1zOiBhbnkgPSBbXTtcbiAgcHVibGljIGlzU2V0dGluZ3NFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2V0dGluZ3NFcnJvck1zZzogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzZXR0aW5nczogU2V0dGluZ3MgPSB7fTtcbiAgcHJpdmF0ZSBtb2R1bGVpbml0OiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0ZWREYXRhSW5kZXg6IG51bWJlciA9IC0xO1xuICBwcml2YXRlIHJlY2VudFNlYXJjaERhdGE6IGFueSA9IFtdO1xuICBwcml2YXRlIHVzZXJTZWxlY3RlZE9wdGlvbjogYW55ID0gJyc7XG4gIHByaXZhdGUgZGVmYXVsdFNldHRpbmdzOiBTZXR0aW5ncyA9IHtcbiAgICBnZW9QcmVkaWN0aW9uU2VydmVyVXJsOiAnJyxcbiAgICBnZW9MYXRMYW5nU2VydmljZVVybDogJycsXG4gICAgZ2VvTG9jRGV0YWlsU2VydmVyVXJsOiAnJyxcbiAgICBnZW9Db3VudHJ5UmVzdHJpY3Rpb246IFtdLFxuICAgIGdlb1R5cGVzOiBbXSxcbiAgICBnZW9Mb2NhdGlvbjogW10sXG4gICAgZ2VvUmFkaXVzOiAwLFxuICAgIHNlcnZlclJlc3BvbnNlTGlzdEhpZXJhcmNoeTogW10sXG4gICAgc2VydmVyUmVzcG9uc2VhdExhbmdIaWVyYXJjaHk6IFtdLFxuICAgIHNlcnZlclJlc3BvbnNlRGV0YWlsSGllcmFyY2h5OiBbXSxcbiAgICByZXNPblNlYXJjaEJ1dHRvbkNsaWNrT25seTogZmFsc2UsXG4gICAgdXNlR29vZ2xlR2VvQXBpOiB0cnVlLFxuICAgIGlucHV0UGxhY2Vob2xkZXJUZXh0OiAnRW50ZXIgQXJlYSBOYW1lJyxcbiAgICBpbnB1dFN0cmluZzogJycsXG4gICAgc2hvd1NlYXJjaEJ1dHRvbjogdHJ1ZSxcbiAgICBzaG93UmVjZW50U2VhcmNoOiB0cnVlLFxuICAgIHNob3dDdXJyZW50TG9jYXRpb246IHRydWUsXG4gICAgcmVjZW50U3RvcmFnZU5hbWU6ICdyZWNlbnRTZWFyY2hlcycsXG4gICAgbm9PZlJlY2VudFNlYXJjaFNhdmU6IDUsXG4gICAgY3VycmVudExvY0ljb25Vcmw6ICcnLFxuICAgIHNlYXJjaEljb25Vcmw6ICcnLFxuICAgIGxvY2F0aW9uSWNvblVybDogJycsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSBfZWxtUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2dsb2JhbDogR2xvYmFsUmVmLFxuICAgIHByaXZhdGUgX2dvb2dsZVBsYWNlc1NlcnZpY2U6IEdvb2dsZVBsYWNlc1NlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIGlmICghdGhpcy5tb2R1bGVpbml0KSB7XG4gICAgICB0aGlzLm1vZHVsZUluaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiBhbnkge1xuICAgIHRoaXMubW9kdWxlaW5pdCA9IHRydWU7XG4gICAgdGhpcy5tb2R1bGVJbml0KCk7XG4gICAgdGhpcy5zZWFyY2hpbnB1dENhbGxiYWNrKG51bGwpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY2FsbGVkIHdoZW4gY2xpY2sgZXZlbnQgaGFwcGVucyBpbiBpbnB1dCBib3guIChCaW5kZWQgd2l0aCB2aWV3KVxuICBzZWFyY2hpbnB1dENsaWNrQ2FsbGJhY2soZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICAgIHRoaXMuc2VhcmNoaW5wdXRDYWxsYmFjayhldmVudCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBpbnB1dC4gKEJpbmRlZCB3aXRoIHZpZXcpXG4gIHNlYXJjaGlucHV0Q2FsbGJhY2soZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgbGV0IGlucHV0VmFsOiBhbnkgPSB0aGlzLmxvY2F0aW9uSW5wdXQ7XG4gICAgaWYgKGlucHV0VmFsKSB7XG4gICAgICB0aGlzLmdldExpc3RRdWVyeShpbnB1dFZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlcnlJdGVtcyA9IFtdO1xuICAgICAgaWYgKHRoaXMudXNlclNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgIHRoaXMudXNlclF1ZXJ5U3VibWl0KCdmYWxzZScpO1xuICAgICAgfVxuICAgICAgdGhpcy51c2VyU2VsZWN0ZWRPcHRpb24gPSAnJztcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dSZWNlbnRTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5zaG93UmVjZW50U2VhcmNoKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB1c2VyIGhvdmVyIG92ZXIgYXV0b2NvbXBsZXRlIGxpc3QuKGJpbmRlZCB3aXRoIHZpZXcpXG4gIGFjdGl2ZUxpc3ROb2RlKGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpbmRleCA9PT0gaSkge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXNbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGFJbmRleCA9IGluZGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zW2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiB1c2VyIHNlbGVjdCB0aGUgYXV0b2NvbXBsZXRlIGxpc3QuKGJpbmRlZCB3aXRoIHZpZXcpXG4gIHNlbGVjdGVkTGlzdE5vZGUoZXZlbnQ6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgaWYgKHRoaXMucmVjZW50RHJvcGRvd25PcGVuKSB7XG4gICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHRoaXMucXVlcnlJdGVtc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldFBsYWNlTG9jYXRpb25JbmZvKHRoaXMucXVlcnlJdGVtc1tpbmRleF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGNsb3NlIHRoZSBhdXRvY29tcGxldGUgbGlzdCB3aGVuIGNsaWNrZWQgb3V0c2lkZS4gKGJpbmRlZCB3aXRoIHZpZXcpXG4gIGNsb3NlQXV0b2NvbXBsZXRlKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGlmICghdGhpcy5fZWxtUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGFJbmRleCA9IC0xO1xuICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBtYW51YWxseSB0cmlnZ2VyIHRoZSBjYWxsYmFjayB0byBwYXJlbnQgY29tcG9uZW50IHdoZW4gY2xpY2tlZCBzZWFyY2ggYnV0dG9uLlxuICB1c2VyUXVlcnlTdWJtaXQoc2VsZWN0ZWRPcHRpb24/OiBhbnkpOiBhbnkge1xuICAgIGxldCBfdXNlck9wdGlvbjogYW55ID0gc2VsZWN0ZWRPcHRpb24gPT09ICdmYWxzZScgPyAnJyA6IHRoaXMudXNlclNlbGVjdGVkT3B0aW9uO1xuICAgIGlmIChfdXNlck9wdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuc2VsZWN0LmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGdldCB1c2VyIGN1cnJlbnQgbG9jYXRpb24gZnJvbSB0aGUgZGV2aWNlLlxuICBjdXJyZW50TG9jYXRpb25TZWxlY3RlZCgpOiBhbnkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb0N1cnJlbnRMb2NhdGlvbigpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudExvY2F0aW9uSW5mbyhyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBtb2R1bGUgaW5pdGlhbGl6YXRpb24gaGFwcGVucy4gZnVuY3Rpb24gY2FsbGVkIGJ5IG5nT25pbml0IGFuZCBuZ09uQ2hhbmdlXG4gIHByaXZhdGUgbW9kdWxlSW5pdCgpOiBhbnkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNldFVzZXJTZXR0aW5ncygpO1xuICAgIC8vIGNvbmRpdGlvbiB0byBjaGVjayBpZiBSYWRpdXMgaXMgc2V0IHdpdGhvdXQgbG9jYXRpb24gZGV0YWlsLlxuICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb1JhZGl1cykge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb24ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnUmFkaXVzIHNob3VsZCBiZSB1c2VkIHdpdGggR2VvTG9jYXRpb24uIFBsZWFzZSB1c2UgXCJnZW9Mb2NhdGlvblwiIGtleSB0byBzZXQgbGF0IGFuZCBsbmcuICc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uZGl0aW9uIHRvIGNoZWNrIGlmIGxhdCBhbmQgbG5nIGlzIHNldCBhbmQgcmFkaW91cyBpcyBub3Qgc2V0IHRoZW4gaXQgd2lsbCBzZXQgdG8gMjAsMDAwS00gYnkgZGVmYXVsdFxuICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uLmxlbmd0aCA9PT0gMiAmJiAhdGhpcy5zZXR0aW5ncy5nZW9SYWRpdXMpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzID0gMjAwMDAwMDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dSZWNlbnRTZWFyY2gpIHtcbiAgICAgIHRoaXMuZ2V0UmVjZW50TG9jYXRpb25zKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5nZW9QcmVkaWN0aW9uU2VydmVyVXJsKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnUHJlZGljdGlvbiBjdXN0b20gc2VydmVyIHVybCBpcyBub3QgZGVmaW5lZC4gUGxlYXNlIHVzZSBcImdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmxcIiBrZXkgdG8gc2V0LiAnO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmdlb0xhdExhbmdTZXJ2aWNlVXJsKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnTGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBjdXN0b20gc2VydmVyIHVybCBpcyBub3QgZGVmaW5lZC4gUGxlYXNlIHVzZSBcImdlb0xhdExhbmdTZXJ2aWNlVXJsXCIga2V5IHRvIHNldC4gJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5nZW9Mb2NEZXRhaWxTZXJ2ZXJVcmwpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdMb2NhdGlvbiBkZXRhaWwgY3VzdG9tIHNlcnZlciB1cmwgaXMgbm90IGRlZmluZWQuIFBsZWFzZSB1c2UgXCJnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmxcIiBrZXkgdG8gc2V0LiAnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvY2F0aW9uSW5wdXQgPSB0aGlzLnRlcm07XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBwcm9jZXNzIHRoZSBzZWFyY2ggcXVlcnkgd2hlbiBwcmVzc2VkIGVudGVyLlxuICBwcml2YXRlIHByb2Nlc3NTZWFyY2hRdWVyeSgpOiBhbnkge1xuICAgIGlmICh0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGFJbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0Tm9kZShudWxsLCB0aGlzLnNlbGVjdGVkRGF0YUluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0Tm9kZShudWxsLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBzZXQgdXNlciBzZXR0aW5ncyBpZiBpdCBpcyBhdmFpbGFibGUuXG4gIHByaXZhdGUgc2V0VXNlclNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICBsZXQgX3RlbXBPYmo6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLnVzZXJTZXR0aW5ncyAmJiB0eXBlb2YgdGhpcy51c2VyU2V0dGluZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQga2V5czogc3RyaW5nW10gPSBPYmplY3Qua2V5cyh0aGlzLmRlZmF1bHRTZXR0aW5ncyk7XG4gICAgICBmb3IgKGxldCB2YWx1ZSBvZiBrZXlzKSB7XG4gICAgICAgIF90ZW1wT2JqW3ZhbHVlXSA9IHRoaXMudXNlclNldHRpbmdzW3ZhbHVlXSAhPT0gdW5kZWZpbmVkID8gdGhpcy51c2VyU2V0dGluZ3NbdmFsdWVdIDogdGhpcy5kZWZhdWx0U2V0dGluZ3NbdmFsdWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90ZW1wT2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBhdXRvY29tcGxldGUgbGlzdCBiYXNlZCBvbiB1c2VyIGlucHV0LlxuICBwcml2YXRlIGdldExpc3RRdWVyeSh2YWx1ZTogc3RyaW5nKTogYW55IHtcbiAgICB0aGlzLnJlY2VudERyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgbGV0IF90ZW1wUGFyYW1zOiBhbnkgPSB7XG4gICAgICAgIHF1ZXJ5OiB2YWx1ZSxcbiAgICAgICAgY291bnRyeVJlc3RyaWN0aW9uOiB0aGlzLnNldHRpbmdzLmdlb0NvdW50cnlSZXN0cmljdGlvbixcbiAgICAgICAgZ2VvVHlwZXM6IHRoaXMuc2V0dGluZ3MuZ2VvVHlwZXMsXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIF90ZW1wUGFyYW1zLmdlb0xvY2F0aW9uID0gdGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbjtcbiAgICAgICAgX3RlbXBQYXJhbXMucmFkaXVzID0gdGhpcy5zZXR0aW5ncy5nZW9SYWRpdXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb1ByZWRpY3Rpb24oX3RlbXBQYXJhbXMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRQcmVkaWN0aW9ucyh0aGlzLnNldHRpbmdzLmdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmwsIHZhbHVlKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5leHRyYWN0U2VydmVyTGlzdCh0aGlzLnNldHRpbmdzLnNlcnZlclJlc3BvbnNlTGlzdEhpZXJhcmNoeSwgcmVzdWx0KTtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0SXRlbShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXh0cmF0YyBjdXN0b20gZGF0YSB3aGljaCBpcyBzZW5kIGJ5IHRoZSBzZXJ2ZXIuXG4gIHByaXZhdGUgZXh0cmFjdFNlcnZlckxpc3QoYXJyYXlMaXN0OiBhbnksIGRhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKGFycmF5TGlzdC5sZW5ndGgpIHtcbiAgICAgIGxldCBfdGVtcERhdGE6IGFueSA9IGRhdGE7XG4gICAgICBmb3IgKGxldCBrZXkgb2YgYXJyYXlMaXN0KSB7XG4gICAgICAgIF90ZW1wRGF0YSA9IF90ZW1wRGF0YVtrZXldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90ZW1wRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSBwcmVkaWN0ZWQgbGlzdC5cbiAgcHJpdmF0ZSB1cGRhdGVMaXN0SXRlbShsaXN0RGF0YTogYW55KTogYW55IHtcbiAgICB0aGlzLnF1ZXJ5SXRlbXMgPSBsaXN0RGF0YSA/IGxpc3REYXRhIDogW107XG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSB0cnVlO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gc2hvdyB0aGUgcmVjZW50IHNlYXJjaCByZXN1bHQuXG4gIHByaXZhdGUgc2hvd1JlY2VudFNlYXJjaCgpOiBhbnkge1xuICAgIHRoaXMucmVjZW50RHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XG4gICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRSZWNlbnRMaXN0KHRoaXMuc2V0dGluZ3MucmVjZW50U3RvcmFnZU5hbWUpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtcyA9IHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtcyA9IFtdO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gLy9mdW5jdGlvbiB0byBuYXZpZ2F0ZSB0aHJvdWdoIGxpc3Qgd2hlbiB1cCBhbmQgZG93biBrZXlib2FyZCBrZXkgaXMgcHJlc3NlZDtcbiAgLy8gcHJpdmF0ZSBuYXZpZ2F0ZUluTGlzdChrZXlDb2RlOiBudW1iZXIpOiBhbnkge1xuICAvLyAgICAgbGV0IGFycmF5SW5kZXg6IG51bWJlciA9IDA7XG4gIC8vICAgICAvL2Fycm93IGRvd25cbiAgLy8gICAgIGlmIChrZXlDb2RlID09PSA0MCkge1xuICAvLyAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID49IDApIHtcbiAgLy8gICAgICAgICAgICAgYXJyYXlJbmRleCA9ICgodGhpcy5zZWxlY3RlZERhdGFJbmRleCArIDEpIDw9ICh0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoIC0gMSkpID8gKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggKyAxKSA6IDA7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHRoaXMuYWN0aXZlTGlzdE5vZGUoYXJyYXlJbmRleCk7XG4gIC8vICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IDM4KSB7Ly9hcnJvdyB1cFxuICAvLyAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID49IDApIHtcbiAgLy8gICAgICAgICAgICAgYXJyYXlJbmRleCA9ICgodGhpcy5zZWxlY3RlZERhdGFJbmRleCAtIDEpID49IDApID8gKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggLSAxKSA6ICh0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoIC0gMSk7XG4gIC8vICAgICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICAgICAgYXJyYXlJbmRleCA9IHRoaXMucXVlcnlJdGVtcy5sZW5ndGggLSAxO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICB0aGlzLmFjdGl2ZUxpc3ROb2RlKGFycmF5SW5kZXgpO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICB0aGlzLnByb2Nlc3NTZWFyY2hRdWVyeSgpO1xuICAvLyAgICAgfVxuICAvLyB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXhlY3V0ZSB0byBnZXQgbG9jYXRpb24gZGV0YWlsIGJhc2VkIG9uIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUuXG4gIHByaXZhdGUgZ2V0Q3VycmVudExvY2F0aW9uSW5mbyhsYXRsbmc6IGFueSk6IGFueSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb0xhdExuZ0RldGFpbChsYXRsbmcpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0TGF0TG5nRGV0YWlsKHRoaXMuc2V0dGluZ3MuZ2VvTGF0TGFuZ1NlcnZpY2VVcmwsIGxhdGxuZy5sYXQsIGxhdGxuZy5sbmcpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmV4dHJhY3RTZXJ2ZXJMaXN0KHRoaXMuc2V0dGluZ3Muc2VydmVyUmVzcG9uc2VhdExhbmdIaWVyYXJjaHksIHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHJldHJpdmUgdGhlIGxvY2F0aW9uIGluZm8gYmFzZWQgb24gZ29vdmxlIHBsYWNlIGlkLlxuICBwcml2YXRlIGdldFBsYWNlTG9jYXRpb25JbmZvKHNlbGVjdGVkRGF0YTogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvUGxhY2VEZXRhaWwoc2VsZWN0ZWREYXRhLnBsYWNlX2lkKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRQbGFjZURldGFpbHModGhpcy5zZXR0aW5ncy5nZW9Mb2NEZXRhaWxTZXJ2ZXJVcmwsIHNlbGVjdGVkRGF0YS5wbGFjZV9pZCkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXh0cmFjdFNlcnZlckxpc3QodGhpcy5zZXR0aW5ncy5zZXJ2ZXJSZXNwb25zZURldGFpbEhpZXJhcmNoeSwgcmVzdWx0KTtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHN0b3JlIHRoZSBzZWxlY3RlZCB1c2VyIHNlYXJjaCBpbiB0aGUgbG9jYWxzdG9yYWdlLlxuICBwcml2YXRlIHNldFJlY2VudExvY2F0aW9uKGRhdGE6IGFueSk6IGFueSB7XG4gICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIGRhdGEuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uID8gZGF0YS5kZXNjcmlwdGlvbiA6IGRhdGEuZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgZGF0YS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID0gLTE7XG4gICAgdGhpcy5sb2NhdGlvbklucHV0ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93UmVjZW50U2VhcmNoKSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmFkZFJlY2VudExpc3QodGhpcy5zZXR0aW5ncy5yZWNlbnRTdG9yYWdlTmFtZSwgZGF0YSwgdGhpcy5zZXR0aW5ncy5ub09mUmVjZW50U2VhcmNoU2F2ZSk7XG4gICAgICB0aGlzLmdldFJlY2VudExvY2F0aW9ucygpO1xuICAgIH1cbiAgICB0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbiA9IGRhdGE7XG4gICAgLy8gYmVsb3cgY29kZSB3aWxsIGV4ZWN1dGUgb25seSB3aGVuIHVzZXIgcHJlc3MgZW50ZXIgb3Igc2VsZWN0IGFueSBvcHRpb24gc2VsZWN0aW9uIGFuZCBpdCBlbWl0IGEgY2FsbGJhY2sgdG8gdGhlIHBhcmVudCBjb21wb25lbnQuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnJlc09uU2VhcmNoQnV0dG9uQ2xpY2tPbmx5KSB7XG4gICAgICB0aGlzLnNlbGVjdC5lbWl0KGRhdGEpO1xuICAgICAgdGhpcy50ZXJtQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gcmV0cml2ZSB0aGUgc3RvcmVkIHJlY2VudCB1c2VyIHNlYXJjaCBmcm9tIHRoZSBsb2NhbHN0b3JhZ2UuXG4gIHByaXZhdGUgZ2V0UmVjZW50TG9jYXRpb25zKCk6IGFueSB7XG4gICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRSZWNlbnRMaXN0KHRoaXMuc2V0dGluZ3MucmVjZW50U3RvcmFnZU5hbWUpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZWNlbnRTZWFyY2hEYXRhID0gZGF0YSAmJiBkYXRhLmxlbmd0aCA/IGRhdGEgOiBbXTtcbiAgICB9KTtcbiAgfVxufVxuIl19