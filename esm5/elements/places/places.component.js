/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            this._googlePlacesService.getGeoCurrentLocation().then(function (result) {
                if (!result) {
                    _this.gettingCurrentLocationFlag = false;
                }
                else {
                    _this.getCurrentLocationInfo(result);
                }
            });
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
            this._googlePlacesService.getGeoPrediction(_tempParams).then(function (result) {
                _this.updateListItem(result);
            });
        }
        else {
            this._googlePlacesService.getPredictions(this.settings.geoPredictionServerUrl, value).then(function (result) {
                result = _this.extractServerList(_this.settings.serverResponseListHierarchy, result);
                _this.updateListItem(result);
            });
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
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then(function (result) {
            if (result) {
                _this.queryItems = result;
            }
            else {
                _this.queryItems = [];
            }
        });
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
            this._googlePlacesService.getGeoLatLngDetail(latlng).then(function (result) {
                if (result) {
                    _this.setRecentLocation(result);
                }
                _this.gettingCurrentLocationFlag = false;
            });
        }
        else {
            this._googlePlacesService.getLatLngDetail(this.settings.geoLatLangServiceUrl, latlng.lat, latlng.lng).then(function (result) {
                if (result) {
                    result = _this.extractServerList(_this.settings.serverResponseatLangHierarchy, result);
                    _this.setRecentLocation(result);
                }
                _this.gettingCurrentLocationFlag = false;
            });
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
            this._googlePlacesService.getGeoPlaceDetail(selectedData.place_id).then(function (data) {
                if (data) {
                    _this.setRecentLocation(data);
                }
            });
        }
        else {
            this._googlePlacesService.getPlaceDetails(this.settings.geoLocDetailServerUrl, selectedData.place_id).then(function (result) {
                if (result) {
                    result = _this.extractServerList(_this.settings.serverResponseDetailHierarchy, result);
                    _this.setRecentLocation(result);
                }
            });
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
        this._googlePlacesService.getRecentList(this.settings.recentStorageName).then(function (data) {
            _this.recentSearchData = data && data.length ? data : [];
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEVBSVosVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBb0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFdkQsOEJBdUJDOzs7SUF0QkMsMENBQWdDOztJQUNoQyx3Q0FBOEI7O0lBQzlCLHlDQUErQjs7SUFDL0IseUNBQTRCOztJQUM1Qiw0QkFBZTs7SUFDZiwrQkFBa0I7O0lBQ2xCLDZCQUFtQjs7SUFDbkIsK0NBQWtDOztJQUNsQyxpREFBb0M7O0lBQ3BDLGlEQUFvQzs7SUFDcEMsOENBQXFDOztJQUNyQyxtQ0FBMEI7O0lBQzFCLHdDQUE4Qjs7SUFDOUIsK0JBQXFCOztJQUNyQixvQ0FBMkI7O0lBQzNCLG9DQUEyQjs7SUFDM0IsdUNBQThCOztJQUM5QixxQ0FBMkI7O0lBQzNCLHdDQUE4Qjs7SUFDOUIscUNBQTJCOztJQUMzQixpQ0FBdUI7O0lBQ3ZCLG1DQUF5Qjs7QUFHM0I7SUE2REUsNkJBQytCLFVBQWtCLEVBQ3ZDLE9BQW1CLEVBQ25CLE9BQWtCLEVBQ2xCLG9CQUF5QztRQUhwQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO1FBL0NuRCxTQUFJLEdB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LHlDQUN3RDs7SUFDeEQscUNBQ29EOztJQUVwRCw0Q0FBa0M7O0lBQ2xDLHlEQUFtRDs7SUFDbkQsMkNBQXFDOztJQUNyQyxpREFBMkM7O0lBQzNDLHlDQUE0Qjs7SUFDNUIsOENBQXdDOztJQUN4QywrQ0FBcUM7O0lBQ3JDLHVDQUErQjs7Ozs7SUFDL0IseUNBQW9DOzs7OztJQUNwQyxnREFBdUM7Ozs7O0lBQ3ZDLCtDQUFtQzs7Ozs7SUFDbkMsaURBQXFDOzs7OztJQUNyQyw4Q0F1QkU7Ozs7O0lBR0EseUNBQStDOzs7OztJQUMvQyxzQ0FBMkI7Ozs7O0lBQzNCLHNDQUEwQjs7Ozs7SUFDMUIsbURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIE9wdGlvbmFsLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5vdm9TZWFyY2hCb3hFbGVtZW50IH0gZnJvbSAnLi4vc2VhcmNoL1NlYXJjaEJveCc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBHbG9iYWxSZWYgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgR29vZ2xlUGxhY2VzU2VydmljZSB9IGZyb20gJy4vcGxhY2VzLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzIHtcbiAgZ2VvUHJlZGljdGlvblNlcnZlclVybD86IHN0cmluZztcbiAgZ2VvTGF0TGFuZ1NlcnZpY2VVcmw/OiBzdHJpbmc7XG4gIGdlb0xvY0RldGFpbFNlcnZlclVybD86IHN0cmluZztcbiAgZ2VvQ291bnRyeVJlc3RyaWN0aW9uPzogYW55O1xuICBnZW9UeXBlcz86IGFueTtcbiAgZ2VvTG9jYXRpb24/OiBhbnk7XG4gIGdlb1JhZGl1cz86IG51bWJlcjtcbiAgc2VydmVyUmVzcG9uc2VMaXN0SGllcmFyY2h5PzogYW55O1xuICBzZXJ2ZXJSZXNwb25zZWF0TGFuZ0hpZXJhcmNoeT86IGFueTtcbiAgc2VydmVyUmVzcG9uc2VEZXRhaWxIaWVyYXJjaHk/OiBhbnk7XG4gIHJlc09uU2VhcmNoQnV0dG9uQ2xpY2tPbmx5PzogYm9vbGVhbjtcbiAgdXNlR29vZ2xlR2VvQXBpPzogYm9vbGVhbjtcbiAgaW5wdXRQbGFjZWhvbGRlclRleHQ/OiBzdHJpbmc7XG4gIGlucHV0U3RyaW5nPzogc3RyaW5nO1xuICBzaG93U2VhcmNoQnV0dG9uPzogYm9vbGVhbjtcbiAgc2hvd1JlY2VudFNlYXJjaD86IGJvb2xlYW47XG4gIHNob3dDdXJyZW50TG9jYXRpb24/OiBib29sZWFuO1xuICByZWNlbnRTdG9yYWdlTmFtZT86IHN0cmluZztcbiAgbm9PZlJlY2VudFNlYXJjaFNhdmU/OiBudW1iZXI7XG4gIGN1cnJlbnRMb2NJY29uVXJsPzogc3RyaW5nO1xuICBzZWFyY2hJY29uVXJsPzogc3RyaW5nO1xuICBsb2NhdGlvbkljb25Vcmw/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dvb2dsZS1wbGFjZXMtbGlzdCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgZGF0YSBvZiBxdWVyeUl0ZW1zO2xldCAkaW5kZXggPSBpbmRleFwiIChjbGljayk9XCJzZWxlY3RlZExpc3ROb2RlKCRldmVudCwgJGluZGV4KVwiPlxuICAgICAgICAgICAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tYXZhdGFyIGljb249XCJsb2NhdGlvblwiPjwvaXRlbS1hdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLXRpdGxlPnt7ZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmc/Lm1haW5fdGV4dCA/IGRhdGEuc3RydWN0dXJlZF9mb3JtYXR0aW5nLm1haW5fdGV4dCA6IGRhdGEuZGVzY3JpcHRpb259fTwvaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICA8L2l0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQ+e3tkYXRhLnN0cnVjdHVyZWRfZm9ybWF0dGluZz8uc2Vjb25kYXJ5X3RleHR9fTwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUGxhY2VzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgdXNlclNldHRpbmdzOiBTZXR0aW5ncztcbiAgQElucHV0KClcbiAgdGVybTogc3RyaW5nID0gJyc7XG4gIEBPdXRwdXQoKVxuICB0ZXJtQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBsb2NhdGlvbklucHV0OiBzdHJpbmcgPSAnJztcbiAgcHVibGljIGdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkcm9wZG93bk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJlY2VudERyb3Bkb3duT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcXVlcnlJdGVtczogYW55ID0gW107XG4gIHB1YmxpYyBpc1NldHRpbmdzRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNldHRpbmdzRXJyb3JNc2c6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgc2V0dGluZ3M6IFNldHRpbmdzID0ge307XG4gIHByaXZhdGUgbW9kdWxlaW5pdDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRGF0YUluZGV4OiBudW1iZXIgPSAtMTtcbiAgcHJpdmF0ZSByZWNlbnRTZWFyY2hEYXRhOiBhbnkgPSBbXTtcbiAgcHJpdmF0ZSB1c2VyU2VsZWN0ZWRPcHRpb246IGFueSA9ICcnO1xuICBwcml2YXRlIGRlZmF1bHRTZXR0aW5nczogU2V0dGluZ3MgPSB7XG4gICAgZ2VvUHJlZGljdGlvblNlcnZlclVybDogJycsXG4gICAgZ2VvTGF0TGFuZ1NlcnZpY2VVcmw6ICcnLFxuICAgIGdlb0xvY0RldGFpbFNlcnZlclVybDogJycsXG4gICAgZ2VvQ291bnRyeVJlc3RyaWN0aW9uOiBbXSxcbiAgICBnZW9UeXBlczogW10sXG4gICAgZ2VvTG9jYXRpb246IFtdLFxuICAgIGdlb1JhZGl1czogMCxcbiAgICBzZXJ2ZXJSZXNwb25zZUxpc3RIaWVyYXJjaHk6IFtdLFxuICAgIHNlcnZlclJlc3BvbnNlYXRMYW5nSGllcmFyY2h5OiBbXSxcbiAgICBzZXJ2ZXJSZXNwb25zZURldGFpbEhpZXJhcmNoeTogW10sXG4gICAgcmVzT25TZWFyY2hCdXR0b25DbGlja09ubHk6IGZhbHNlLFxuICAgIHVzZUdvb2dsZUdlb0FwaTogdHJ1ZSxcbiAgICBpbnB1dFBsYWNlaG9sZGVyVGV4dDogJ0VudGVyIEFyZWEgTmFtZScsXG4gICAgaW5wdXRTdHJpbmc6ICcnLFxuICAgIHNob3dTZWFyY2hCdXR0b246IHRydWUsXG4gICAgc2hvd1JlY2VudFNlYXJjaDogdHJ1ZSxcbiAgICBzaG93Q3VycmVudExvY2F0aW9uOiB0cnVlLFxuICAgIHJlY2VudFN0b3JhZ2VOYW1lOiAncmVjZW50U2VhcmNoZXMnLFxuICAgIG5vT2ZSZWNlbnRTZWFyY2hTYXZlOiA1LFxuICAgIGN1cnJlbnRMb2NJY29uVXJsOiAnJyxcbiAgICBzZWFyY2hJY29uVXJsOiAnJyxcbiAgICBsb2NhdGlvbkljb25Vcmw6ICcnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgX2VsbVJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9nbG9iYWw6IEdsb2JhbFJlZixcbiAgICBwcml2YXRlIF9nb29nbGVQbGFjZXNTZXJ2aWNlOiBHb29nbGVQbGFjZXNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICBpZiAoIXRoaXMubW9kdWxlaW5pdCkge1xuICAgICAgdGhpcy5tb2R1bGVJbml0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogYW55IHtcbiAgICB0aGlzLm1vZHVsZWluaXQgPSB0cnVlO1xuICAgIHRoaXMubW9kdWxlSW5pdCgpO1xuICAgIHRoaXMuc2VhcmNoaW5wdXRDYWxsYmFjayhudWxsKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGNsaWNrIGV2ZW50IGhhcHBlbnMgaW4gaW5wdXQgYm94LiAoQmluZGVkIHdpdGggdmlldylcbiAgc2VhcmNoaW5wdXRDbGlja0NhbGxiYWNrKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGV2ZW50LnRhcmdldC5zZWxlY3QoKTtcbiAgICB0aGlzLnNlYXJjaGlucHV0Q2FsbGJhY2soZXZlbnQpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY2FsbGVkIHdoZW4gdGhlcmUgaXMgYSBjaGFuZ2UgaW4gaW5wdXQuIChCaW5kZWQgd2l0aCB2aWV3KVxuICBzZWFyY2hpbnB1dENhbGxiYWNrKGV2ZW50OiBhbnkpOiBhbnkge1xuICAgIGxldCBpbnB1dFZhbDogYW55ID0gdGhpcy5sb2NhdGlvbklucHV0O1xuICAgIGlmIChpbnB1dFZhbCkge1xuICAgICAgdGhpcy5nZXRMaXN0UXVlcnkoaW5wdXRWYWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXJ5SXRlbXMgPSBbXTtcbiAgICAgIGlmICh0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbikge1xuICAgICAgICB0aGlzLnVzZXJRdWVyeVN1Ym1pdCgnZmFsc2UnKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXNlclNlbGVjdGVkT3B0aW9uID0gJyc7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93UmVjZW50U2VhcmNoKSB7XG4gICAgICAgIHRoaXMuc2hvd1JlY2VudFNlYXJjaCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdXNlciBob3ZlciBvdmVyIGF1dG9jb21wbGV0ZSBsaXN0LihiaW5kZWQgd2l0aCB2aWV3KVxuICBhY3RpdmVMaXN0Tm9kZShpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5xdWVyeUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPSBpbmRleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtc1tpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gdXNlciBzZWxlY3QgdGhlIGF1dG9jb21wbGV0ZSBsaXN0LihiaW5kZWQgd2l0aCB2aWV3KVxuICBzZWxlY3RlZExpc3ROb2RlKGV2ZW50OiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnJlY2VudERyb3Bkb3duT3Blbikge1xuICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbih0aGlzLnF1ZXJ5SXRlbXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRQbGFjZUxvY2F0aW9uSW5mbyh0aGlzLnF1ZXJ5SXRlbXNbaW5kZXhdKTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBjbG9zZSB0aGUgYXV0b2NvbXBsZXRlIGxpc3Qgd2hlbiBjbGlja2VkIG91dHNpZGUuIChiaW5kZWQgd2l0aCB2aWV3KVxuICBjbG9zZUF1dG9jb21wbGV0ZShldmVudDogYW55KTogYW55IHtcbiAgICBpZiAoIXRoaXMuX2VsbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPSAtMTtcbiAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gbWFudWFsbHkgdHJpZ2dlciB0aGUgY2FsbGJhY2sgdG8gcGFyZW50IGNvbXBvbmVudCB3aGVuIGNsaWNrZWQgc2VhcmNoIGJ1dHRvbi5cbiAgdXNlclF1ZXJ5U3VibWl0KHNlbGVjdGVkT3B0aW9uPzogYW55KTogYW55IHtcbiAgICBsZXQgX3VzZXJPcHRpb246IGFueSA9IHNlbGVjdGVkT3B0aW9uID09PSAnZmFsc2UnID8gJycgOiB0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbjtcbiAgICBpZiAoX3VzZXJPcHRpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy51c2VyU2VsZWN0ZWRPcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnNlbGVjdC5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBnZXQgdXNlciBjdXJyZW50IGxvY2F0aW9uIGZyb20gdGhlIGRldmljZS5cbiAgY3VycmVudExvY2F0aW9uU2VsZWN0ZWQoKTogYW55IHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IHRydWU7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9DdXJyZW50TG9jYXRpb24oKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdldEN1cnJlbnRMb2NhdGlvbkluZm8ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kdWxlIGluaXRpYWxpemF0aW9uIGhhcHBlbnMuIGZ1bmN0aW9uIGNhbGxlZCBieSBuZ09uaW5pdCBhbmQgbmdPbkNoYW5nZVxuICBwcml2YXRlIG1vZHVsZUluaXQoKTogYW55IHtcbiAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5zZXRVc2VyU2V0dGluZ3MoKTtcbiAgICAvLyBjb25kaXRpb24gdG8gY2hlY2sgaWYgUmFkaXVzIGlzIHNldCB3aXRob3V0IGxvY2F0aW9uIGRldGFpbC5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9SYWRpdXMpIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uLmxlbmd0aCAhPT0gMikge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ1JhZGl1cyBzaG91bGQgYmUgdXNlZCB3aXRoIEdlb0xvY2F0aW9uLiBQbGVhc2UgdXNlIFwiZ2VvTG9jYXRpb25cIiBrZXkgdG8gc2V0IGxhdCBhbmQgbG5nLiAnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbmRpdGlvbiB0byBjaGVjayBpZiBsYXQgYW5kIGxuZyBpcyBzZXQgYW5kIHJhZGlvdXMgaXMgbm90IHNldCB0aGVuIGl0IHdpbGwgc2V0IHRvIDIwLDAwMEtNIGJ5IGRlZmF1bHRcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbi5sZW5ndGggPT09IDIgJiYgIXRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzKSB7XG4gICAgICB0aGlzLnNldHRpbmdzLmdlb1JhZGl1cyA9IDIwMDAwMDAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93UmVjZW50U2VhcmNoKSB7XG4gICAgICB0aGlzLmdldFJlY2VudExvY2F0aW9ucygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZ2VvUHJlZGljdGlvblNlcnZlclVybCkge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ1ByZWRpY3Rpb24gY3VzdG9tIHNlcnZlciB1cmwgaXMgbm90IGRlZmluZWQuIFBsZWFzZSB1c2UgXCJnZW9QcmVkaWN0aW9uU2VydmVyVXJsXCIga2V5IHRvIHNldC4gJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5nZW9MYXRMYW5nU2VydmljZVVybCkge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ0xhdGl0dWRlIGFuZCBsb25naXR1ZGUgY3VzdG9tIHNlcnZlciB1cmwgaXMgbm90IGRlZmluZWQuIFBsZWFzZSB1c2UgXCJnZW9MYXRMYW5nU2VydmljZVVybFwiIGtleSB0byBzZXQuICc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZ2VvTG9jRGV0YWlsU2VydmVyVXJsKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnTG9jYXRpb24gZGV0YWlsIGN1c3RvbSBzZXJ2ZXIgdXJsIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgdXNlIFwiZ2VvTG9jRGV0YWlsU2VydmVyVXJsXCIga2V5IHRvIHNldC4gJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2NhdGlvbklucHV0ID0gdGhpcy50ZXJtO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gcHJvY2VzcyB0aGUgc2VhcmNoIHF1ZXJ5IHdoZW4gcHJlc3NlZCBlbnRlci5cbiAgcHJpdmF0ZSBwcm9jZXNzU2VhcmNoUXVlcnkoKTogYW55IHtcbiAgICBpZiAodGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdE5vZGUobnVsbCwgdGhpcy5zZWxlY3RlZERhdGFJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdE5vZGUobnVsbCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gc2V0IHVzZXIgc2V0dGluZ3MgaWYgaXQgaXMgYXZhaWxhYmxlLlxuICBwcml2YXRlIHNldFVzZXJTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgbGV0IF90ZW1wT2JqOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy51c2VyU2V0dGluZ3MgJiYgdHlwZW9mIHRoaXMudXNlclNldHRpbmdzID09PSAnb2JqZWN0Jykge1xuICAgICAgbGV0IGtleXM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModGhpcy5kZWZhdWx0U2V0dGluZ3MpO1xuICAgICAgZm9yIChsZXQgdmFsdWUgb2Yga2V5cykge1xuICAgICAgICBfdGVtcE9ialt2YWx1ZV0gPSB0aGlzLnVzZXJTZXR0aW5nc1t2YWx1ZV0gIT09IHVuZGVmaW5lZCA/IHRoaXMudXNlclNldHRpbmdzW3ZhbHVlXSA6IHRoaXMuZGVmYXVsdFNldHRpbmdzW3ZhbHVlXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGVtcE9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgYXV0b2NvbXBsZXRlIGxpc3QgYmFzZWQgb24gdXNlciBpbnB1dC5cbiAgcHJpdmF0ZSBnZXRMaXN0UXVlcnkodmFsdWU6IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy5yZWNlbnREcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIGxldCBfdGVtcFBhcmFtczogYW55ID0ge1xuICAgICAgICBxdWVyeTogdmFsdWUsXG4gICAgICAgIGNvdW50cnlSZXN0cmljdGlvbjogdGhpcy5zZXR0aW5ncy5nZW9Db3VudHJ5UmVzdHJpY3Rpb24sXG4gICAgICAgIGdlb1R5cGVzOiB0aGlzLnNldHRpbmdzLmdlb1R5cGVzLFxuICAgICAgfTtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBfdGVtcFBhcmFtcy5nZW9Mb2NhdGlvbiA9IHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb247XG4gICAgICAgIF90ZW1wUGFyYW1zLnJhZGl1cyA9IHRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzO1xuICAgICAgfVxuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9QcmVkaWN0aW9uKF90ZW1wUGFyYW1zKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0SXRlbShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UHJlZGljdGlvbnModGhpcy5zZXR0aW5ncy5nZW9QcmVkaWN0aW9uU2VydmVyVXJsLCB2YWx1ZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMuZXh0cmFjdFNlcnZlckxpc3QodGhpcy5zZXR0aW5ncy5zZXJ2ZXJSZXNwb25zZUxpc3RIaWVyYXJjaHksIHJlc3VsdCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdEl0ZW0ocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4dHJhdGMgY3VzdG9tIGRhdGEgd2hpY2ggaXMgc2VuZCBieSB0aGUgc2VydmVyLlxuICBwcml2YXRlIGV4dHJhY3RTZXJ2ZXJMaXN0KGFycmF5TGlzdDogYW55LCBkYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmIChhcnJheUxpc3QubGVuZ3RoKSB7XG4gICAgICBsZXQgX3RlbXBEYXRhOiBhbnkgPSBkYXRhO1xuICAgICAgZm9yIChsZXQga2V5IG9mIGFycmF5TGlzdCkge1xuICAgICAgICBfdGVtcERhdGEgPSBfdGVtcERhdGFba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGVtcERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgcHJlZGljdGVkIGxpc3QuXG4gIHByaXZhdGUgdXBkYXRlTGlzdEl0ZW0obGlzdERhdGE6IGFueSk6IGFueSB7XG4gICAgdGhpcy5xdWVyeUl0ZW1zID0gbGlzdERhdGEgPyBsaXN0RGF0YSA6IFtdO1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHNob3cgdGhlIHJlY2VudCBzZWFyY2ggcmVzdWx0LlxuICBwcml2YXRlIHNob3dSZWNlbnRTZWFyY2goKTogYW55IHtcbiAgICB0aGlzLnJlY2VudERyb3Bkb3duT3BlbiA9IHRydWU7XG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSB0cnVlO1xuICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UmVjZW50TGlzdCh0aGlzLnNldHRpbmdzLnJlY2VudFN0b3JhZ2VOYW1lKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXMgPSByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXMgPSBbXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIC8vZnVuY3Rpb24gdG8gbmF2aWdhdGUgdGhyb3VnaCBsaXN0IHdoZW4gdXAgYW5kIGRvd24ga2V5Ym9hcmQga2V5IGlzIHByZXNzZWQ7XG4gIC8vIHByaXZhdGUgbmF2aWdhdGVJbkxpc3Qoa2V5Q29kZTogbnVtYmVyKTogYW55IHtcbiAgLy8gICAgIGxldCBhcnJheUluZGV4OiBudW1iZXIgPSAwO1xuICAvLyAgICAgLy9hcnJvdyBkb3duXG4gIC8vICAgICBpZiAoa2V5Q29kZSA9PT0gNDApIHtcbiAgLy8gICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGFJbmRleCA+PSAwKSB7XG4gIC8vICAgICAgICAgICAgIGFycmF5SW5kZXggPSAoKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggKyAxKSA8PSAodGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCAtIDEpKSA/ICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ICsgMSkgOiAwO1xuICAvLyAgICAgICAgIH1cbiAgLy8gICAgICAgICB0aGlzLmFjdGl2ZUxpc3ROb2RlKGFycmF5SW5kZXgpO1xuICAvLyAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSAzOCkgey8vYXJyb3cgdXBcbiAgLy8gICAgICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGFJbmRleCA+PSAwKSB7XG4gIC8vICAgICAgICAgICAgIGFycmF5SW5kZXggPSAoKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggLSAxKSA+PSAwKSA/ICh0aGlzLnNlbGVjdGVkRGF0YUluZGV4IC0gMSkgOiAodGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCAtIDEpO1xuICAvLyAgICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgICAgIGFycmF5SW5kZXggPSB0aGlzLnF1ZXJ5SXRlbXMubGVuZ3RoIC0gMTtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgdGhpcy5hY3RpdmVMaXN0Tm9kZShhcnJheUluZGV4KTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgdGhpcy5wcm9jZXNzU2VhcmNoUXVlcnkoKTtcbiAgLy8gICAgIH1cbiAgLy8gfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgdG8gZ2V0IGxvY2F0aW9uIGRldGFpbCBiYXNlZCBvbiBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlLlxuICBwcml2YXRlIGdldEN1cnJlbnRMb2NhdGlvbkluZm8obGF0bG5nOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9MYXRMbmdEZXRhaWwobGF0bG5nKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldExhdExuZ0RldGFpbCh0aGlzLnNldHRpbmdzLmdlb0xhdExhbmdTZXJ2aWNlVXJsLCBsYXRsbmcubGF0LCBsYXRsbmcubG5nKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5leHRyYWN0U2VydmVyTGlzdCh0aGlzLnNldHRpbmdzLnNlcnZlclJlc3BvbnNlYXRMYW5nSGllcmFyY2h5LCByZXN1bHQpO1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byByZXRyaXZlIHRoZSBsb2NhdGlvbiBpbmZvIGJhc2VkIG9uIGdvb3ZsZSBwbGFjZSBpZC5cbiAgcHJpdmF0ZSBnZXRQbGFjZUxvY2F0aW9uSW5mbyhzZWxlY3RlZERhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb1BsYWNlRGV0YWlsKHNlbGVjdGVkRGF0YS5wbGFjZV9pZCkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VEZXRhaWxzKHRoaXMuc2V0dGluZ3MuZ2VvTG9jRGV0YWlsU2VydmVyVXJsLCBzZWxlY3RlZERhdGEucGxhY2VfaWQpLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSB0aGlzLmV4dHJhY3RTZXJ2ZXJMaXN0KHRoaXMuc2V0dGluZ3Muc2VydmVyUmVzcG9uc2VEZXRhaWxIaWVyYXJjaHksIHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5zZXRSZWNlbnRMb2NhdGlvbihyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBzdG9yZSB0aGUgc2VsZWN0ZWQgdXNlciBzZWFyY2ggaW4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAgcHJpdmF0ZSBzZXRSZWNlbnRMb2NhdGlvbihkYXRhOiBhbnkpOiBhbnkge1xuICAgIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICBkYXRhLmRlc2NyaXB0aW9uID0gZGF0YS5kZXNjcmlwdGlvbiA/IGRhdGEuZGVzY3JpcHRpb24gOiBkYXRhLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgIGRhdGEuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZERhdGFJbmRleCA9IC0xO1xuICAgIHRoaXMubG9jYXRpb25JbnB1dCA9IGRhdGEuZGVzY3JpcHRpb247XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1JlY2VudFNlYXJjaCkge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5hZGRSZWNlbnRMaXN0KHRoaXMuc2V0dGluZ3MucmVjZW50U3RvcmFnZU5hbWUsIGRhdGEsIHRoaXMuc2V0dGluZ3Mubm9PZlJlY2VudFNlYXJjaFNhdmUpO1xuICAgICAgdGhpcy5nZXRSZWNlbnRMb2NhdGlvbnMoKTtcbiAgICB9XG4gICAgdGhpcy51c2VyU2VsZWN0ZWRPcHRpb24gPSBkYXRhO1xuICAgIC8vIGJlbG93IGNvZGUgd2lsbCBleGVjdXRlIG9ubHkgd2hlbiB1c2VyIHByZXNzIGVudGVyIG9yIHNlbGVjdCBhbnkgb3B0aW9uIHNlbGVjdGlvbiBhbmQgaXQgZW1pdCBhIGNhbGxiYWNrIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5yZXNPblNlYXJjaEJ1dHRvbkNsaWNrT25seSkge1xuICAgICAgdGhpcy5zZWxlY3QuZW1pdChkYXRhKTtcbiAgICAgIHRoaXMudGVybUNoYW5nZS5lbWl0KGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIHJldHJpdmUgdGhlIHN0b3JlZCByZWNlbnQgdXNlciBzZWFyY2ggZnJvbSB0aGUgbG9jYWxzdG9yYWdlLlxuICBwcml2YXRlIGdldFJlY2VudExvY2F0aW9ucygpOiBhbnkge1xuICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0UmVjZW50TGlzdCh0aGlzLnNldHRpbmdzLnJlY2VudFN0b3JhZ2VOYW1lKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVjZW50U2VhcmNoRGF0YSA9IGRhdGEgJiYgZGF0YS5sZW5ndGggPyBkYXRhIDogW107XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==