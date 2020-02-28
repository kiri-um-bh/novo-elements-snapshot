/**
 * @fileoverview added by tsickle
 * Generated from: elements/places/places.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var PlacesListComponent = /** @class */ (function () {
    function PlacesListComponent(platformId, _elmRef, _global, _googlePlacesService) {
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
    PlacesListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.moduleinit) {
            this.moduleInit();
        }
    };
    /**
     * @return {?}
     */
    PlacesListComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.moduleinit = true;
        this.moduleInit();
        this.searchinputCallback(null);
    };
    // function called when click event happens in input box. (Binded with view)
    // function called when click event happens in input box. (Binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    PlacesListComponent.prototype.searchinputClickCallback = 
    // function called when click event happens in input box. (Binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.target.select();
        this.searchinputCallback(event);
    };
    // function called when there is a change in input. (Binded with view)
    // function called when there is a change in input. (Binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    PlacesListComponent.prototype.searchinputCallback = 
    // function called when there is a change in input. (Binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var inputVal = this.locationInput;
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
    };
    // function to execute when user hover over autocomplete list.(binded with view)
    // function to execute when user hover over autocomplete list.(binded with view)
    /**
     * @param {?} index
     * @return {?}
     */
    PlacesListComponent.prototype.activeListNode = 
    // function to execute when user hover over autocomplete list.(binded with view)
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        for (var i = 0; i < this.queryItems.length; i++) {
            if (index === i) {
                this.queryItems[i].active = true;
                this.selectedDataIndex = index;
            }
            else {
                this.queryItems[i].active = false;
            }
        }
    };
    // function to execute when user select the autocomplete list.(binded with view)
    // function to execute when user select the autocomplete list.(binded with view)
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    PlacesListComponent.prototype.selectedListNode = 
    // function to execute when user select the autocomplete list.(binded with view)
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        this.dropdownOpen = false;
        if (this.recentDropdownOpen) {
            this.setRecentLocation(this.queryItems[index]);
        }
        else {
            this.getPlaceLocationInfo(this.queryItems[index]);
        }
    };
    // function to close the autocomplete list when clicked outside. (binded with view)
    // function to close the autocomplete list when clicked outside. (binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    PlacesListComponent.prototype.closeAutocomplete = 
    // function to close the autocomplete list when clicked outside. (binded with view)
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._elmRef.nativeElement.contains(event.target)) {
            this.selectedDataIndex = -1;
            this.dropdownOpen = false;
        }
    };
    // function to manually trigger the callback to parent component when clicked search button.
    // function to manually trigger the callback to parent component when clicked search button.
    /**
     * @param {?=} selectedOption
     * @return {?}
     */
    PlacesListComponent.prototype.userQuerySubmit = 
    // function to manually trigger the callback to parent component when clicked search button.
    /**
     * @param {?=} selectedOption
     * @return {?}
     */
    function (selectedOption) {
        /** @type {?} */
        var _userOption = selectedOption === 'false' ? '' : this.userSelectedOption;
        if (_userOption) {
            this.select.emit(this.userSelectedOption);
        }
        else {
            // this.select.emit(false);
        }
    };
    // function to get user current location from the device.
    // function to get user current location from the device.
    /**
     * @return {?}
     */
    PlacesListComponent.prototype.currentLocationSelected = 
    // function to get user current location from the device.
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            this.gettingCurrentLocationFlag = true;
            this.dropdownOpen = false;
            this._googlePlacesService.getGeoCurrentLocation().then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (!result) {
                    _this.gettingCurrentLocationFlag = false;
                }
                else {
                    _this.getCurrentLocationInfo(result);
                }
            }));
        }
    };
    // module initialization happens. function called by ngOninit and ngOnChange
    // module initialization happens. function called by ngOninit and ngOnChange
    /**
     * @private
     * @return {?}
     */
    PlacesListComponent.prototype.moduleInit = 
    // module initialization happens. function called by ngOninit and ngOnChange
    /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    // function to process the search query when pressed enter.
    // function to process the search query when pressed enter.
    /**
     * @private
     * @return {?}
     */
    PlacesListComponent.prototype.processSearchQuery = 
    // function to process the search query when pressed enter.
    /**
     * @private
     * @return {?}
     */
    function () {
        if (this.queryItems.length) {
            if (this.selectedDataIndex > -1) {
                this.selectedListNode(null, this.selectedDataIndex);
            }
            else {
                this.selectedListNode(null, 0);
            }
        }
    };
    // function to set user settings if it is available.
    // function to set user settings if it is available.
    /**
     * @private
     * @return {?}
     */
    PlacesListComponent.prototype.setUserSettings = 
    // function to set user settings if it is available.
    /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var _tempObj = {};
        if (this.userSettings && typeof this.userSettings === 'object') {
            /** @type {?} */
            var keys = Object.keys(this.defaultSettings);
            try {
                for (var keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var value = keys_1_1.value;
                    _tempObj[value] = this.userSettings[value] !== undefined ? this.userSettings[value] : this.defaultSettings[value];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return _tempObj;
        }
        else {
            return this.defaultSettings;
        }
    };
    // function to get the autocomplete list based on user input.
    // function to get the autocomplete list based on user input.
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    PlacesListComponent.prototype.getListQuery = 
    // function to get the autocomplete list based on user input.
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.recentDropdownOpen = false;
        if (this.settings.useGoogleGeoApi) {
            /** @type {?} */
            var _tempParams = {
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
            function (result) {
                _this.updateListItem(result);
            }));
        }
        else {
            this._googlePlacesService.getPredictions(this.settings.geoPredictionServerUrl, value).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                result = _this.extractServerList(_this.settings.serverResponseListHierarchy, result);
                _this.updateListItem(result);
            }));
        }
    };
    // function to extratc custom data which is send by the server.
    // function to extratc custom data which is send by the server.
    /**
     * @private
     * @param {?} arrayList
     * @param {?} data
     * @return {?}
     */
    PlacesListComponent.prototype.extractServerList = 
    // function to extratc custom data which is send by the server.
    /**
     * @private
     * @param {?} arrayList
     * @param {?} data
     * @return {?}
     */
    function (arrayList, data) {
        var e_2, _a;
        if (arrayList.length) {
            /** @type {?} */
            var _tempData = data;
            try {
                for (var arrayList_1 = tslib_1.__values(arrayList), arrayList_1_1 = arrayList_1.next(); !arrayList_1_1.done; arrayList_1_1 = arrayList_1.next()) {
                    var key = arrayList_1_1.value;
                    _tempData = _tempData[key];
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (arrayList_1_1 && !arrayList_1_1.done && (_a = arrayList_1.return)) _a.call(arrayList_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return _tempData;
        }
        else {
            return data;
        }
    };
    // function to update the predicted list.
    // function to update the predicted list.
    /**
     * @private
     * @param {?} listData
     * @return {?}
     */
    PlacesListComponent.prototype.updateListItem = 
    // function to update the predicted list.
    /**
     * @private
     * @param {?} listData
     * @return {?}
     */
    function (listData) {
        this.queryItems = listData ? listData : [];
        this.dropdownOpen = true;
    };
    // function to show the recent search result.
    // function to show the recent search result.
    /**
     * @private
     * @return {?}
     */
    PlacesListComponent.prototype.showRecentSearch = 
    // function to show the recent search result.
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.recentDropdownOpen = true;
        this.dropdownOpen = true;
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result) {
                _this.queryItems = result;
            }
            else {
                _this.queryItems = [];
            }
        }));
    };
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
    PlacesListComponent.prototype.getCurrentLocationInfo = 
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
    function (latlng) {
        var _this = this;
        if (this.settings.useGoogleGeoApi) {
            this._googlePlacesService.getGeoLatLngDetail(latlng).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result) {
                    _this.setRecentLocation(result);
                }
                _this.gettingCurrentLocationFlag = false;
            }));
        }
        else {
            this._googlePlacesService.getLatLngDetail(this.settings.geoLatLangServiceUrl, latlng.lat, latlng.lng).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result) {
                    result = _this.extractServerList(_this.settings.serverResponseatLangHierarchy, result);
                    _this.setRecentLocation(result);
                }
                _this.gettingCurrentLocationFlag = false;
            }));
        }
    };
    // function to retrive the location info based on goovle place id.
    // function to retrive the location info based on goovle place id.
    /**
     * @private
     * @param {?} selectedData
     * @return {?}
     */
    PlacesListComponent.prototype.getPlaceLocationInfo = 
    // function to retrive the location info based on goovle place id.
    /**
     * @private
     * @param {?} selectedData
     * @return {?}
     */
    function (selectedData) {
        var _this = this;
        if (this.settings.useGoogleGeoApi) {
            this._googlePlacesService.getGeoPlaceDetail(selectedData.place_id).then((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data) {
                    _this.setRecentLocation(data);
                }
            }));
        }
        else {
            this._googlePlacesService.getPlaceDetails(this.settings.geoLocDetailServerUrl, selectedData.place_id).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result) {
                    result = _this.extractServerList(_this.settings.serverResponseDetailHierarchy, result);
                    _this.setRecentLocation(result);
                }
            }));
        }
    };
    // function to store the selected user search in the localstorage.
    // function to store the selected user search in the localstorage.
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    PlacesListComponent.prototype.setRecentLocation = 
    // function to store the selected user search in the localstorage.
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
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
    };
    // function to retrive the stored recent user search from the localstorage.
    // function to retrive the stored recent user search from the localstorage.
    /**
     * @private
     * @return {?}
     */
    PlacesListComponent.prototype.getRecentLocations = 
    // function to retrive the stored recent user search from the localstorage.
    /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.recentSearchData = data && data.length ? data : [];
        }));
    };
    PlacesListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'google-places-list',
                    template: "\n        <novo-list direction=\"vertical\">\n            <novo-list-item *ngFor=\"let data of queryItems;let $index = index\" (click)=\"selectedListNode($event, $index)\">\n                <item-header>\n                    <item-avatar icon=\"location\"></item-avatar>\n                    <item-title>{{data.structured_formatting?.main_text ? data.structured_formatting.main_text : data.description}}</item-title>\n                </item-header>\n                <item-content>{{data.structured_formatting?.secondary_text}}</item-content>\n            </novo-list-item>\n        </novo-list>\n    "
                }] }
    ];
    /** @nocollapse */
    PlacesListComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: GlobalRef },
        { type: GooglePlacesService }
    ]; };
    PlacesListComponent.propDecorators = {
        userSettings: [{ type: Input }],
        term: [{ type: Input }],
        termChange: [{ type: Output }],
        select: [{ type: Output }]
    };
    return PlacesListComponent;
}());
export { PlacesListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUlaLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRXZELDhCQXVCQzs7O0lBdEJDLDBDQUFnQzs7SUFDaEMsd0NBQThCOztJQUM5Qix5Q0FBK0I7O0lBQy9CLHlDQUE0Qjs7SUFDNUIsNEJBQWU7O0lBQ2YsK0JBQWtCOztJQUNsQiw2QkFBbUI7O0lBQ25CLCtDQUFrQzs7SUFDbEMsaURBQW9DOztJQUNwQyxpREFBb0M7O0lBQ3BDLDhDQUFxQzs7SUFDckMsbUNBQTBCOztJQUMxQix3Q0FBOEI7O0lBQzlCLCtCQUFxQjs7SUFDckIsb0NBQTJCOztJQUMzQixvQ0FBMkI7O0lBQzNCLHVDQUE4Qjs7SUFDOUIscUNBQTJCOztJQUMzQix3Q0FBOEI7O0lBQzlCLHFDQUEyQjs7SUFDM0IsaUNBQXVCOztJQUN2QixtQ0FBeUI7O0FBRzNCO0lBNkRFLDZCQUMrQixVQUFrQixFQUN2QyxPQUFtQixFQUNuQixPQUFrQixFQUNsQixvQkFBeUM7UUFIcEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQS9DbkQsU0FBSSxH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LDJDQUN1Qjs7SUFDdkIsbUNBQ2tCOztJQUNsQix5Q0FDd0Q7O0lBQ3hELHFDQUNvRDs7SUFFcEQsNENBQWtDOztJQUNsQyx5REFBbUQ7O0lBQ25ELDJDQUFxQzs7SUFDckMsaURBQTJDOztJQUMzQyx5Q0FBNEI7O0lBQzVCLDhDQUF3Qzs7SUFDeEMsK0NBQXFDOztJQUNyQyx1Q0FBK0I7Ozs7O0lBQy9CLHlDQUFvQzs7Ozs7SUFDcEMsZ0RBQXVDOzs7OztJQUN2QywrQ0FBbUM7Ozs7O0lBQ25DLGlEQUFxQzs7Ozs7SUFDckMsOENBdUJFOzs7OztJQUdBLHlDQUErQzs7Ozs7SUFDL0Msc0NBQTJCOzs7OztJQUMzQixzQ0FBMEI7Ozs7O0lBQzFCLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBPcHRpb25hbCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3ZvU2VhcmNoQm94RWxlbWVudCB9IGZyb20gJy4uL3NlYXJjaC9TZWFyY2hCb3gnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgR2xvYmFsUmVmIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5ncyB7XG4gIGdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmw/OiBzdHJpbmc7XG4gIGdlb0xhdExhbmdTZXJ2aWNlVXJsPzogc3RyaW5nO1xuICBnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmw/OiBzdHJpbmc7XG4gIGdlb0NvdW50cnlSZXN0cmljdGlvbj86IGFueTtcbiAgZ2VvVHlwZXM/OiBhbnk7XG4gIGdlb0xvY2F0aW9uPzogYW55O1xuICBnZW9SYWRpdXM/OiBudW1iZXI7XG4gIHNlcnZlclJlc3BvbnNlTGlzdEhpZXJhcmNoeT86IGFueTtcbiAgc2VydmVyUmVzcG9uc2VhdExhbmdIaWVyYXJjaHk/OiBhbnk7XG4gIHNlcnZlclJlc3BvbnNlRGV0YWlsSGllcmFyY2h5PzogYW55O1xuICByZXNPblNlYXJjaEJ1dHRvbkNsaWNrT25seT86IGJvb2xlYW47XG4gIHVzZUdvb2dsZUdlb0FwaT86IGJvb2xlYW47XG4gIGlucHV0UGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xuICBpbnB1dFN0cmluZz86IHN0cmluZztcbiAgc2hvd1NlYXJjaEJ1dHRvbj86IGJvb2xlYW47XG4gIHNob3dSZWNlbnRTZWFyY2g/OiBib29sZWFuO1xuICBzaG93Q3VycmVudExvY2F0aW9uPzogYm9vbGVhbjtcbiAgcmVjZW50U3RvcmFnZU5hbWU/OiBzdHJpbmc7XG4gIG5vT2ZSZWNlbnRTZWFyY2hTYXZlPzogbnVtYmVyO1xuICBjdXJyZW50TG9jSWNvblVybD86IHN0cmluZztcbiAgc2VhcmNoSWNvblVybD86IHN0cmluZztcbiAgbG9jYXRpb25JY29uVXJsPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnb29nbGUtcGxhY2VzLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGRhdGEgb2YgcXVlcnlJdGVtcztsZXQgJGluZGV4ID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0ZWRMaXN0Tm9kZSgkZXZlbnQsICRpbmRleClcIj5cbiAgICAgICAgICAgICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWF2YXRhciBpY29uPVwibG9jYXRpb25cIj48L2l0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS10aXRsZT57e2RhdGEuc3RydWN0dXJlZF9mb3JtYXR0aW5nPy5tYWluX3RleHQgPyBkYXRhLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQgOiBkYXRhLmRlc2NyaXB0aW9ufX08L2l0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7ZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmc/LnNlY29uZGFyeV90ZXh0fX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHVzZXJTZXR0aW5nczogU2V0dGluZ3M7XG4gIEBJbnB1dCgpXG4gIHRlcm06IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KClcbiAgdGVybUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgbG9jYXRpb25JbnB1dDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBnZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWNlbnREcm9wZG93bk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHF1ZXJ5SXRlbXM6IGFueSA9IFtdO1xuICBwdWJsaWMgaXNTZXR0aW5nc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZXR0aW5nc0Vycm9yTXNnOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncyA9IHt9O1xuICBwcml2YXRlIG1vZHVsZWluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZERhdGFJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgcmVjZW50U2VhcmNoRGF0YTogYW55ID0gW107XG4gIHByaXZhdGUgdXNlclNlbGVjdGVkT3B0aW9uOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBkZWZhdWx0U2V0dGluZ3M6IFNldHRpbmdzID0ge1xuICAgIGdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmw6ICcnLFxuICAgIGdlb0xhdExhbmdTZXJ2aWNlVXJsOiAnJyxcbiAgICBnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmw6ICcnLFxuICAgIGdlb0NvdW50cnlSZXN0cmljdGlvbjogW10sXG4gICAgZ2VvVHlwZXM6IFtdLFxuICAgIGdlb0xvY2F0aW9uOiBbXSxcbiAgICBnZW9SYWRpdXM6IDAsXG4gICAgc2VydmVyUmVzcG9uc2VMaXN0SGllcmFyY2h5OiBbXSxcbiAgICBzZXJ2ZXJSZXNwb25zZWF0TGFuZ0hpZXJhcmNoeTogW10sXG4gICAgc2VydmVyUmVzcG9uc2VEZXRhaWxIaWVyYXJjaHk6IFtdLFxuICAgIHJlc09uU2VhcmNoQnV0dG9uQ2xpY2tPbmx5OiBmYWxzZSxcbiAgICB1c2VHb29nbGVHZW9BcGk6IHRydWUsXG4gICAgaW5wdXRQbGFjZWhvbGRlclRleHQ6ICdFbnRlciBBcmVhIE5hbWUnLFxuICAgIGlucHV0U3RyaW5nOiAnJyxcbiAgICBzaG93U2VhcmNoQnV0dG9uOiB0cnVlLFxuICAgIHNob3dSZWNlbnRTZWFyY2g6IHRydWUsXG4gICAgc2hvd0N1cnJlbnRMb2NhdGlvbjogdHJ1ZSxcbiAgICByZWNlbnRTdG9yYWdlTmFtZTogJ3JlY2VudFNlYXJjaGVzJyxcbiAgICBub09mUmVjZW50U2VhcmNoU2F2ZTogNSxcbiAgICBjdXJyZW50TG9jSWNvblVybDogJycsXG4gICAgc2VhcmNoSWNvblVybDogJycsXG4gICAgbG9jYXRpb25JY29uVXJsOiAnJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIF9lbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZ2xvYmFsOiBHbG9iYWxSZWYsXG4gICAgcHJpdmF0ZSBfZ29vZ2xlUGxhY2VzU2VydmljZTogR29vZ2xlUGxhY2VzU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLm1vZHVsZWluaXQpIHtcbiAgICAgIHRoaXMubW9kdWxlSW5pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IGFueSB7XG4gICAgdGhpcy5tb2R1bGVpbml0ID0gdHJ1ZTtcbiAgICB0aGlzLm1vZHVsZUluaXQoKTtcbiAgICB0aGlzLnNlYXJjaGlucHV0Q2FsbGJhY2sobnVsbCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiBjbGljayBldmVudCBoYXBwZW5zIGluIGlucHV0IGJveC4gKEJpbmRlZCB3aXRoIHZpZXcpXG4gIHNlYXJjaGlucHV0Q2xpY2tDYWxsYmFjayhldmVudDogYW55KTogYW55IHtcbiAgICBldmVudC50YXJnZXQuc2VsZWN0KCk7XG4gICAgdGhpcy5zZWFyY2hpbnB1dENhbGxiYWNrKGV2ZW50KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgY2hhbmdlIGluIGlucHV0LiAoQmluZGVkIHdpdGggdmlldylcbiAgc2VhcmNoaW5wdXRDYWxsYmFjayhldmVudDogYW55KTogYW55IHtcbiAgICBjb25zdCBpbnB1dFZhbDogYW55ID0gdGhpcy5sb2NhdGlvbklucHV0O1xuICAgIGlmIChpbnB1dFZhbCkge1xuICAgICAgdGhpcy5nZXRMaXN0UXVlcnkoaW5wdXRWYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXJ5SXRlbXMgPSBbXTtcbiAgICAgIGlmICh0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbikge1xuICAgICAgICB0aGlzLnVzZXJRdWVyeVN1Ym1pdCgnZmFsc2UnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXNlclNlbGVjdGVkT3B0aW9uID0gJyc7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93UmVjZW50U2VhcmNoKSB7XG4gICAgICAgIHRoaXMuc2hvd1JlY2VudFNlYXJjaCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdXNlciBob3ZlciBvdmVyIGF1dG9jb21wbGV0ZSBsaXN0LihiaW5kZWQgd2l0aCB2aWV3KVxuICBhY3RpdmVMaXN0Tm9kZShpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5xdWVyeUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdXNlciBzZWxlY3QgdGhlIGF1dG9jb21wbGV0ZSBsaXN0LihiaW5kZWQgd2l0aCB2aWV3KVxuICBzZWxlY3RlZExpc3ROb2RlKGV2ZW50OiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnJlY2VudERyb3Bkb3duT3Blbikge1xuICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbih0aGlzLnF1ZXJ5SXRlbXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRQbGFjZUxvY2F0aW9uSW5mbyh0aGlzLnF1ZXJ5SXRlbXNbaW5kZXhdKTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBjbG9zZSB0aGUgYXV0b2NvbXBsZXRlIGxpc3Qgd2hlbiBjbGlja2VkIG91dHNpZGUuIChiaW5kZWQgd2l0aCB2aWV3KVxuICBjbG9zZUF1dG9jb21wbGV0ZShldmVudDogYW55KTogYW55IHtcbiAgICBpZiAoIXRoaXMuX2VsbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gbWFudWFsbHkgdHJpZ2dlciB0aGUgY2FsbGJhY2sgdG8gcGFyZW50IGNvbXBvbmVudCB3aGVuIGNsaWNrZWQgc2VhcmNoIGJ1dHRvbi5cbiAgdXNlclF1ZXJ5U3VibWl0KHNlbGVjdGVkT3B0aW9uPzogYW55KTogYW55IHtcbiAgICBjb25zdCBfdXNlck9wdGlvbjogYW55ID0gc2VsZWN0ZWRPcHRpb24gPT09ICdmYWxzZScgPyAnJyA6IHRoaXMudXNlclNlbGVjdGVkT3B0aW9uO1xuICAgIGlmIChfdXNlck9wdGlvbikge1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdCh0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMuc2VsZWN0LmVtaXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGdldCB1c2VyIGN1cnJlbnQgbG9jYXRpb24gZnJvbSB0aGUgZGV2aWNlLlxuICBjdXJyZW50TG9jYXRpb25TZWxlY3RlZCgpOiBhbnkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gdHJ1ZTtcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb0N1cnJlbnRMb2NhdGlvbigpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2V0Q3VycmVudExvY2F0aW9uSW5mbyhyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBtb2R1bGUgaW5pdGlhbGl6YXRpb24gaGFwcGVucy4gZnVuY3Rpb24gY2FsbGVkIGJ5IG5nT25pbml0IGFuZCBuZ09uQ2hhbmdlXG4gIHByaXZhdGUgbW9kdWxlSW5pdCgpOiBhbnkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnNldFVzZXJTZXR0aW5ncygpO1xuICAgIC8vIGNvbmRpdGlvbiB0byBjaGVjayBpZiBSYWRpdXMgaXMgc2V0IHdpdGhvdXQgbG9jYXRpb24gZGV0YWlsLlxuICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb1JhZGl1cykge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb24ubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnUmFkaXVzIHNob3VsZCBiZSB1c2VkIHdpdGggR2VvTG9jYXRpb24uIFBsZWFzZSB1c2UgXCJnZW9Mb2NhdGlvblwiIGtleSB0byBzZXQgbGF0IGFuZCBsbmcuICc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uZGl0aW9uIHRvIGNoZWNrIGlmIGxhdCBhbmQgbG5nIGlzIHNldCBhbmQgcmFkaW91cyBpcyBub3Qgc2V0IHRoZW4gaXQgd2lsbCBzZXQgdG8gMjAsMDAwS00gYnkgZGVmYXVsdFxuICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uLmxlbmd0aCA9PT0gMiAmJiAhdGhpcy5zZXR0aW5ncy5nZW9SYWRpdXMpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzID0gMjAwMDAwMDA7XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dSZWNlbnRTZWFyY2gpIHtcbiAgICAgIHRoaXMuZ2V0UmVjZW50TG9jYXRpb25zKCk7XG4gICAgfVxuICAgIGlmICghdGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5nZW9QcmVkaWN0aW9uU2VydmVyVXJsKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnUHJlZGljdGlvbiBjdXN0b20gc2VydmVyIHVybCBpcyBub3QgZGVmaW5lZC4gUGxlYXNlIHVzZSBcImdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmxcIiBrZXkgdG8gc2V0LiAnO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmdlb0xhdExhbmdTZXJ2aWNlVXJsKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnTGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBjdXN0b20gc2VydmVyIHVybCBpcyBub3QgZGVmaW5lZC4gUGxlYXNlIHVzZSBcImdlb0xhdExhbmdTZXJ2aWNlVXJsXCIga2V5IHRvIHNldC4gJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5nZW9Mb2NEZXRhaWxTZXJ2ZXJVcmwpIHtcbiAgICAgICAgdGhpcy5pc1NldHRpbmdzRXJyb3IgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgPVxuICAgICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyArICdMb2NhdGlvbiBkZXRhaWwgY3VzdG9tIHNlcnZlciB1cmwgaXMgbm90IGRlZmluZWQuIFBsZWFzZSB1c2UgXCJnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmxcIiBrZXkgdG8gc2V0LiAnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvY2F0aW9uSW5wdXQgPSB0aGlzLnRlcm07XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBwcm9jZXNzIHRoZSBzZWFyY2ggcXVlcnkgd2hlbiBwcmVzc2VkIGVudGVyLlxuICBwcml2YXRlIHByb2Nlc3NTZWFyY2hRdWVyeSgpOiBhbnkge1xuICAgIGlmICh0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGFJbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0Tm9kZShudWxsLCB0aGlzLnNlbGVjdGVkRGF0YUluZGV4KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRMaXN0Tm9kZShudWxsLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBzZXQgdXNlciBzZXR0aW5ncyBpZiBpdCBpcyBhdmFpbGFibGUuXG4gIHByaXZhdGUgc2V0VXNlclNldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICBjb25zdCBfdGVtcE9iajogYW55ID0ge307XG4gICAgaWYgKHRoaXMudXNlclNldHRpbmdzICYmIHR5cGVvZiB0aGlzLnVzZXJTZXR0aW5ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGNvbnN0IGtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModGhpcy5kZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBrZXlzKSB7XG4gICAgICAgIF90ZW1wT2JqW3ZhbHVlXSA9IHRoaXMudXNlclNldHRpbmdzW3ZhbHVlXSAhPT0gdW5kZWZpbmVkID8gdGhpcy51c2VyU2V0dGluZ3NbdmFsdWVdIDogdGhpcy5kZWZhdWx0U2V0dGluZ3NbdmFsdWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF90ZW1wT2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBhdXRvY29tcGxldGUgbGlzdCBiYXNlZCBvbiB1c2VyIGlucHV0LlxuICBwcml2YXRlIGdldExpc3RRdWVyeSh2YWx1ZTogc3RyaW5nKTogYW55IHtcbiAgICB0aGlzLnJlY2VudERyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgY29uc3QgX3RlbXBQYXJhbXM6IGFueSA9IHtcbiAgICAgICAgcXVlcnk6IHZhbHVlLFxuICAgICAgICBjb3VudHJ5UmVzdHJpY3Rpb246IHRoaXMuc2V0dGluZ3MuZ2VvQ291bnRyeVJlc3RyaWN0aW9uLFxuICAgICAgICBnZW9UeXBlczogdGhpcy5zZXR0aW5ncy5nZW9UeXBlcyxcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbi5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgX3RlbXBQYXJhbXMuZ2VvTG9jYXRpb24gPSB0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uO1xuICAgICAgICBfdGVtcFBhcmFtcy5yYWRpdXMgPSB0aGlzLnNldHRpbmdzLmdlb1JhZGl1cztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvUHJlZGljdGlvbihfdGVtcFBhcmFtcykudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW0ocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFByZWRpY3Rpb25zKHRoaXMuc2V0dGluZ3MuZ2VvUHJlZGljdGlvblNlcnZlclVybCwgdmFsdWUpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXN1bHQgPSB0aGlzLmV4dHJhY3RTZXJ2ZXJMaXN0KHRoaXMuc2V0dGluZ3Muc2VydmVyUmVzcG9uc2VMaXN0SGllcmFyY2h5LCByZXN1bHQpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBleHRyYXRjIGN1c3RvbSBkYXRhIHdoaWNoIGlzIHNlbmQgYnkgdGhlIHNlcnZlci5cbiAgcHJpdmF0ZSBleHRyYWN0U2VydmVyTGlzdChhcnJheUxpc3Q6IGFueSwgZGF0YTogYW55KTogYW55IHtcbiAgICBpZiAoYXJyYXlMaXN0Lmxlbmd0aCkge1xuICAgICAgbGV0IF90ZW1wRGF0YTogYW55ID0gZGF0YTtcbiAgICAgIGZvciAoY29uc3Qga2V5IG9mIGFycmF5TGlzdCkge1xuICAgICAgICBfdGVtcERhdGEgPSBfdGVtcERhdGFba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGVtcERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcHJlZGljdGVkIGxpc3QuXG4gIHByaXZhdGUgdXBkYXRlTGlzdEl0ZW0obGlzdERhdGE6IGFueSk6IGFueSB7XG4gICAgdGhpcy5xdWVyeUl0ZW1zID0gbGlzdERhdGEgPyBsaXN0RGF0YSA6IFtdO1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHNob3cgdGhlIHJlY2VudCBzZWFyY2ggcmVzdWx0LlxuICBwcml2YXRlIHNob3dSZWNlbnRTZWFyY2goKTogYW55IHtcbiAgICB0aGlzLnJlY2VudERyb3Bkb3duT3BlbiA9IHRydWU7XG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSB0cnVlO1xuICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UmVjZW50TGlzdCh0aGlzLnNldHRpbmdzLnJlY2VudFN0b3JhZ2VOYW1lKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXMgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIC8vZnVuY3Rpb24gdG8gbmF2aWdhdGUgdGhyb3VnaCBsaXN0IHdoZW4gdXAgYW5kIGRvd24ga2V5Ym9hcmQga2V5IGlzIHByZXNzZWQ7XG4gIC8vIHByaXZhdGUgbmF2aWdhdGVJbkxpc3Qoa2V5Q29kZTogbnVtYmVyKTogYW55IHtcbiAgLy8gICAgIGxldCBhcnJheUluZGV4OiBudW1iZXIgPSAwO1xuICAvLyAgICAgLy9hcnJvdyBkb3duXG4gIC8vICAgICBpZiAoa2V5Q29kZSA9PT0gNDApIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGFJbmRleCA+PSAwKSB7XG4gIC8vICAgICAgICAgICAgIGFycmF5SW5kZXggPSAoKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggKyAxKSA8PSAodGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCAtIDEpKSA/ICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ICsgMSkgOiAwO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICB0aGlzLmFjdGl2ZUxpc3ROb2RlKGFycmF5SW5kZXgpO1xuICAvLyAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSAzOCkgey8vYXJyb3cgdXBcbiAgLy8gICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGFJbmRleCA+PSAwKSB7XG4gIC8vICAgICAgICAgICAgIGFycmF5SW5kZXggPSAoKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggLSAxKSA+PSAwKSA/ICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4IC0gMSkgOiAodGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCAtIDEpO1xuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIGFycmF5SW5kZXggPSB0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoIC0gMTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgdGhpcy5hY3RpdmVMaXN0Tm9kZShhcnJheUluZGV4KTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgdGhpcy5wcm9jZXNzU2VhcmNoUXVlcnkoKTtcbiAgLy8gICAgIH1cbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgdG8gZ2V0IGxvY2F0aW9uIGRldGFpbCBiYXNlZCBvbiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlLlxuICBwcml2YXRlIGdldEN1cnJlbnRMb2NhdGlvbkluZm8obGF0bG5nOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9MYXRMbmdEZXRhaWwobGF0bG5nKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldExhdExuZ0RldGFpbCh0aGlzLnNldHRpbmdzLmdlb0xhdExhbmdTZXJ2aWNlVXJsLCBsYXRsbmcubGF0LCBsYXRsbmcubG5nKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5leHRyYWN0U2VydmVyTGlzdCh0aGlzLnNldHRpbmdzLnNlcnZlclJlc3BvbnNlYXRMYW5nSGllcmFyY2h5LCByZXN1bHQpO1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byByZXRyaXZlIHRoZSBsb2NhdGlvbiBpbmZvIGJhc2VkIG9uIGdvb3ZsZSBwbGFjZSBpZC5cbiAgcHJpdmF0ZSBnZXRQbGFjZUxvY2F0aW9uSW5mbyhzZWxlY3RlZERhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb1BsYWNlRGV0YWlsKHNlbGVjdGVkRGF0YS5wbGFjZV9pZCkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VEZXRhaWxzKHRoaXMuc2V0dGluZ3MuZ2VvTG9jRGV0YWlsU2VydmVyVXJsLCBzZWxlY3RlZERhdGEucGxhY2VfaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmV4dHJhY3RTZXJ2ZXJMaXN0KHRoaXMuc2V0dGluZ3Muc2VydmVyUmVzcG9uc2VEZXRhaWxIaWVyYXJjaHksIHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBzdG9yZSB0aGUgc2VsZWN0ZWQgdXNlciBzZWFyY2ggaW4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAgcHJpdmF0ZSBzZXRSZWNlbnRMb2NhdGlvbihkYXRhOiBhbnkpOiBhbnkge1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBkYXRhLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbiA/IGRhdGEuZGVzY3JpcHRpb24gOiBkYXRhLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgIGRhdGEuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZERhdGFJbmRleCA9IC0xO1xuICAgIHRoaXMubG9jYXRpb25JbnB1dCA9IGRhdGEuZGVzY3JpcHRpb247XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1JlY2VudFNlYXJjaCkge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5hZGRSZWNlbnRMaXN0KHRoaXMuc2V0dGluZ3MucmVjZW50U3RvcmFnZU5hbWUsIGRhdGEsIHRoaXMuc2V0dGluZ3Mubm9PZlJlY2VudFNlYXJjaFNhdmUpO1xuICAgICAgdGhpcy5nZXRSZWNlbnRMb2NhdGlvbnMoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VsZWN0ZWRPcHRpb24gPSBkYXRhO1xuICAgIC8vIGJlbG93IGNvZGUgd2lsbCBleGVjdXRlIG9ubHkgd2hlbiB1c2VyIHByZXNzIGVudGVyIG9yIHNlbGVjdCBhbnkgb3B0aW9uIHNlbGVjdGlvbiBhbmQgaXQgZW1pdCBhIGNhbGxiYWNrIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5yZXNPblNlYXJjaEJ1dHRvbkNsaWNrT25seSkge1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgICAgIHRoaXMudGVybUNoYW5nZS5lbWl0KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHJldHJpdmUgdGhlIHN0b3JlZCByZWNlbnQgdXNlciBzZWFyY2ggZnJvbSB0aGUgbG9jYWxzdG9yYWdlLlxuICBwcml2YXRlIGdldFJlY2VudExvY2F0aW9ucygpOiBhbnkge1xuICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UmVjZW50TGlzdCh0aGlzLnNldHRpbmdzLnJlY2VudFN0b3JhZ2VOYW1lKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVjZW50U2VhcmNoRGF0YSA9IGRhdGEgJiYgZGF0YS5sZW5ndGggPyBkYXRhIDogW107XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==