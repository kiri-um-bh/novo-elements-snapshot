// NG2
import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { GlobalRef } from '../../services/global/global.service';
import { GooglePlacesService } from './places.service';
export class PlacesListComponent {
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
    ngOnInit() {
        if (!this.moduleinit) {
            this.moduleInit();
        }
    }
    ngOnChanges() {
        this.moduleinit = true;
        this.moduleInit();
        this.searchinputCallback(null);
    }
    // function called when click event happens in input box. (Binded with view)
    searchinputClickCallback(event) {
        event.target.select();
        this.searchinputCallback(event);
    }
    // function called when there is a change in input. (Binded with view)
    searchinputCallback(event) {
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
    closeAutocomplete(event) {
        if (!this._elmRef.nativeElement.contains(event.target)) {
            this.selectedDataIndex = -1;
            this.dropdownOpen = false;
        }
    }
    // function to manually trigger the callback to parent component when clicked search button.
    userQuerySubmit(selectedOption) {
        const _userOption = selectedOption === 'false' ? '' : this.userSelectedOption;
        if (_userOption) {
            this.select.emit(this.userSelectedOption);
        }
        else {
            // this.select.emit(false);
        }
    }
    // function to get user current location from the device.
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
    setUserSettings() {
        const _tempObj = {};
        if (this.userSettings && typeof this.userSettings === 'object') {
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
    getListQuery(value) {
        this.recentDropdownOpen = false;
        if (this.settings.useGoogleGeoApi) {
            const _tempParams = {
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
    extractServerList(arrayList, data) {
        if (arrayList.length) {
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
    updateListItem(listData) {
        this.queryItems = listData ? listData : [];
        this.dropdownOpen = true;
    }
    // function to show the recent search result.
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
            },] }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0gsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBeUN2RCxNQUFNLE9BQU8sbUJBQW1CO0lBK0M5QixZQUMrQixVQUFrQixFQUN2QyxPQUFtQixFQUNuQixPQUFrQixFQUNsQixvQkFBeUM7UUFIcEIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQS9DbkQsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVsQixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFFeEQsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRTdDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLCtCQUEwQixHQUFZLEtBQUssQ0FBQztRQUM1QyxpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5Qix1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixvQkFBZSxHQUFZLEtBQUssQ0FB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Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7O0tBVVA7YUFDSjs7O1lBaUQ0QyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztZQTNGSCxVQUFVO1lBQ3JCLFNBQVM7WUFDVCxtQkFBbUI7OzsyQkEwQ3pCLEtBQUs7bUJBRUwsS0FBSzt5QkFFTCxNQUFNO3FCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR2xvYmFsUmVmIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEdvb2dsZVBsYWNlc1NlcnZpY2UgfSBmcm9tICcuL3BsYWNlcy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5ncyB7XG4gIGdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmw/OiBzdHJpbmc7XG4gIGdlb0xhdExhbmdTZXJ2aWNlVXJsPzogc3RyaW5nO1xuICBnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmw/OiBzdHJpbmc7XG4gIGdlb0NvdW50cnlSZXN0cmljdGlvbj86IGFueTtcbiAgZ2VvVHlwZXM/OiBhbnk7XG4gIGdlb0xvY2F0aW9uPzogYW55O1xuICBnZW9SYWRpdXM/OiBudW1iZXI7XG4gIHNlcnZlclJlc3BvbnNlTGlzdEhpZXJhcmNoeT86IGFueTtcbiAgc2VydmVyUmVzcG9uc2VhdExhbmdIaWVyYXJjaHk/OiBhbnk7XG4gIHNlcnZlclJlc3BvbnNlRGV0YWlsSGllcmFyY2h5PzogYW55O1xuICByZXNPblNlYXJjaEJ1dHRvbkNsaWNrT25seT86IGJvb2xlYW47XG4gIHVzZUdvb2dsZUdlb0FwaT86IGJvb2xlYW47XG4gIGlucHV0UGxhY2Vob2xkZXJUZXh0Pzogc3RyaW5nO1xuICBpbnB1dFN0cmluZz86IHN0cmluZztcbiAgc2hvd1NlYXJjaEJ1dHRvbj86IGJvb2xlYW47XG4gIHNob3dSZWNlbnRTZWFyY2g/OiBib29sZWFuO1xuICBzaG93Q3VycmVudExvY2F0aW9uPzogYm9vbGVhbjtcbiAgcmVjZW50U3RvcmFnZU5hbWU/OiBzdHJpbmc7XG4gIG5vT2ZSZWNlbnRTZWFyY2hTYXZlPzogbnVtYmVyO1xuICBjdXJyZW50TG9jSWNvblVybD86IHN0cmluZztcbiAgc2VhcmNoSWNvblVybD86IHN0cmluZztcbiAgbG9jYXRpb25JY29uVXJsPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnb29nbGUtcGxhY2VzLWxpc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1saXN0IGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGRhdGEgb2YgcXVlcnlJdGVtcztsZXQgJGluZGV4ID0gaW5kZXhcIiAoY2xpY2spPVwic2VsZWN0ZWRMaXN0Tm9kZSgkZXZlbnQsICRpbmRleClcIj5cbiAgICAgICAgICAgICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLWF2YXRhciBpY29uPVwibG9jYXRpb25cIj48L2l0ZW0tYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8aXRlbS10aXRsZT57e2RhdGEuc3RydWN0dXJlZF9mb3JtYXR0aW5nPy5tYWluX3RleHQgPyBkYXRhLnN0cnVjdHVyZWRfZm9ybWF0dGluZy5tYWluX3RleHQgOiBkYXRhLmRlc2NyaXB0aW9ufX08L2l0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50Pnt7ZGF0YS5zdHJ1Y3R1cmVkX2Zvcm1hdHRpbmc/LnNlY29uZGFyeV90ZXh0fX08L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlc0xpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIHVzZXJTZXR0aW5nczogU2V0dGluZ3M7XG4gIEBJbnB1dCgpXG4gIHRlcm06IHN0cmluZyA9ICcnO1xuICBAT3V0cHV0KClcbiAgdGVybUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgbG9jYXRpb25JbnB1dDogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBnZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWNlbnREcm9wZG93bk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHF1ZXJ5SXRlbXM6IGFueSA9IFtdO1xuICBwdWJsaWMgaXNTZXR0aW5nc0Vycm9yOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZXR0aW5nc0Vycm9yTXNnOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNldHRpbmdzOiBTZXR0aW5ncyA9IHt9O1xuICBwcml2YXRlIG1vZHVsZWluaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZERhdGFJbmRleDogbnVtYmVyID0gLTE7XG4gIHByaXZhdGUgcmVjZW50U2VhcmNoRGF0YTogYW55ID0gW107XG4gIHByaXZhdGUgdXNlclNlbGVjdGVkT3B0aW9uOiBhbnkgPSAnJztcbiAgcHJpdmF0ZSBkZWZhdWx0U2V0dGluZ3M6IFNldHRpbmdzID0ge1xuICAgIGdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmw6ICcnLFxuICAgIGdlb0xhdExhbmdTZXJ2aWNlVXJsOiAnJyxcbiAgICBnZW9Mb2NEZXRhaWxTZXJ2ZXJVcmw6ICcnLFxuICAgIGdlb0NvdW50cnlSZXN0cmljdGlvbjogW10sXG4gICAgZ2VvVHlwZXM6IFtdLFxuICAgIGdlb0xvY2F0aW9uOiBbXSxcbiAgICBnZW9SYWRpdXM6IDAsXG4gICAgc2VydmVyUmVzcG9uc2VMaXN0SGllcmFyY2h5OiBbXSxcbiAgICBzZXJ2ZXJSZXNwb25zZWF0TGFuZ0hpZXJhcmNoeTogW10sXG4gICAgc2VydmVyUmVzcG9uc2VEZXRhaWxIaWVyYXJjaHk6IFtdLFxuICAgIHJlc09uU2VhcmNoQnV0dG9uQ2xpY2tPbmx5OiBmYWxzZSxcbiAgICB1c2VHb29nbGVHZW9BcGk6IHRydWUsXG4gICAgaW5wdXRQbGFjZWhvbGRlclRleHQ6ICdFbnRlciBBcmVhIE5hbWUnLFxuICAgIGlucHV0U3RyaW5nOiAnJyxcbiAgICBzaG93U2VhcmNoQnV0dG9uOiB0cnVlLFxuICAgIHNob3dSZWNlbnRTZWFyY2g6IHRydWUsXG4gICAgc2hvd0N1cnJlbnRMb2NhdGlvbjogdHJ1ZSxcbiAgICByZWNlbnRTdG9yYWdlTmFtZTogJ3JlY2VudFNlYXJjaGVzJyxcbiAgICBub09mUmVjZW50U2VhcmNoU2F2ZTogNSxcbiAgICBjdXJyZW50TG9jSWNvblVybDogJycsXG4gICAgc2VhcmNoSWNvblVybDogJycsXG4gICAgbG9jYXRpb25JY29uVXJsOiAnJyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIF9lbG1SZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfZ2xvYmFsOiBHbG9iYWxSZWYsXG4gICAgcHJpdmF0ZSBfZ29vZ2xlUGxhY2VzU2VydmljZTogR29vZ2xlUGxhY2VzU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIGlmICghdGhpcy5tb2R1bGVpbml0KSB7XG4gICAgICB0aGlzLm1vZHVsZUluaXQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiBhbnkge1xuICAgIHRoaXMubW9kdWxlaW5pdCA9IHRydWU7XG4gICAgdGhpcy5tb2R1bGVJbml0KCk7XG4gICAgdGhpcy5zZWFyY2hpbnB1dENhbGxiYWNrKG51bGwpO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gY2FsbGVkIHdoZW4gY2xpY2sgZXZlbnQgaGFwcGVucyBpbiBpbnB1dCBib3guIChCaW5kZWQgd2l0aCB2aWV3KVxuICBzZWFyY2hpbnB1dENsaWNrQ2FsbGJhY2soZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgZXZlbnQudGFyZ2V0LnNlbGVjdCgpO1xuICAgIHRoaXMuc2VhcmNoaW5wdXRDYWxsYmFjayhldmVudCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBpbnB1dC4gKEJpbmRlZCB3aXRoIHZpZXcpXG4gIHNlYXJjaGlucHV0Q2FsbGJhY2soZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgY29uc3QgaW5wdXRWYWw6IGFueSA9IHRoaXMubG9jYXRpb25JbnB1dDtcbiAgICBpZiAoaW5wdXRWYWwpIHtcbiAgICAgIHRoaXMuZ2V0TGlzdFF1ZXJ5KGlucHV0VmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWVyeUl0ZW1zID0gW107XG4gICAgICBpZiAodGhpcy51c2VyU2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgdGhpcy51c2VyUXVlcnlTdWJtaXQoJ2ZhbHNlJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbiA9ICcnO1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd1JlY2VudFNlYXJjaCkge1xuICAgICAgICB0aGlzLnNob3dSZWNlbnRTZWFyY2goKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25PcGVuID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHVzZXIgaG92ZXIgb3ZlciBhdXRvY29tcGxldGUgbGlzdC4oYmluZGVkIHdpdGggdmlldylcbiAgYWN0aXZlTGlzdE5vZGUoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMucXVlcnlJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgIHRoaXMucXVlcnlJdGVtc1tpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID0gaW5kZXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnF1ZXJ5SXRlbXNbaV0uYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIHVzZXIgc2VsZWN0IHRoZSBhdXRvY29tcGxldGUgbGlzdC4oYmluZGVkIHdpdGggdmlldylcbiAgc2VsZWN0ZWRMaXN0Tm9kZShldmVudDogTW91c2VFdmVudCwgaW5kZXg6IG51bWJlcik6IGFueSB7XG4gICAgdGhpcy5kcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5yZWNlbnREcm9wZG93bk9wZW4pIHtcbiAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24odGhpcy5xdWVyeUl0ZW1zW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2V0UGxhY2VMb2NhdGlvbkluZm8odGhpcy5xdWVyeUl0ZW1zW2luZGV4XSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gY2xvc2UgdGhlIGF1dG9jb21wbGV0ZSBsaXN0IHdoZW4gY2xpY2tlZCBvdXRzaWRlLiAoYmluZGVkIHdpdGggdmlldylcbiAgY2xvc2VBdXRvY29tcGxldGUoZXZlbnQ6IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9lbG1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0YUluZGV4ID0gLTE7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIG1hbnVhbGx5IHRyaWdnZXIgdGhlIGNhbGxiYWNrIHRvIHBhcmVudCBjb21wb25lbnQgd2hlbiBjbGlja2VkIHNlYXJjaCBidXR0b24uXG4gIHVzZXJRdWVyeVN1Ym1pdChzZWxlY3RlZE9wdGlvbj86IGFueSk6IGFueSB7XG4gICAgY29uc3QgX3VzZXJPcHRpb246IGFueSA9IHNlbGVjdGVkT3B0aW9uID09PSAnZmFsc2UnID8gJycgOiB0aGlzLnVzZXJTZWxlY3RlZE9wdGlvbjtcbiAgICBpZiAoX3VzZXJPcHRpb24pIHtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcy51c2VyU2VsZWN0ZWRPcHRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnNlbGVjdC5lbWl0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBnZXQgdXNlciBjdXJyZW50IGxvY2F0aW9uIGZyb20gdGhlIGRldmljZS5cbiAgY3VycmVudExvY2F0aW9uU2VsZWN0ZWQoKTogYW55IHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IHRydWU7XG4gICAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9DdXJyZW50TG9jYXRpb24oKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuZ2V0dGluZ0N1cnJlbnRMb2NhdGlvbkZsYWcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmdldEN1cnJlbnRMb2NhdGlvbkluZm8ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gbW9kdWxlIGluaXRpYWxpemF0aW9uIGhhcHBlbnMuIGZ1bmN0aW9uIGNhbGxlZCBieSBuZ09uaW5pdCBhbmQgbmdPbkNoYW5nZVxuICBwcml2YXRlIG1vZHVsZUluaXQoKTogYW55IHtcbiAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5zZXRVc2VyU2V0dGluZ3MoKTtcbiAgICAvLyBjb25kaXRpb24gdG8gY2hlY2sgaWYgUmFkaXVzIGlzIHNldCB3aXRob3V0IGxvY2F0aW9uIGRldGFpbC5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9SYWRpdXMpIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmdlb0xvY2F0aW9uLmxlbmd0aCAhPT0gMikge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ1JhZGl1cyBzaG91bGQgYmUgdXNlZCB3aXRoIEdlb0xvY2F0aW9uLiBQbGVhc2UgdXNlIFwiZ2VvTG9jYXRpb25cIiBrZXkgdG8gc2V0IGxhdCBhbmQgbG5nLiAnO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbmRpdGlvbiB0byBjaGVjayBpZiBsYXQgYW5kIGxuZyBpcyBzZXQgYW5kIHJhZGlvdXMgaXMgbm90IHNldCB0aGVuIGl0IHdpbGwgc2V0IHRvIDIwLDAwMEtNIGJ5IGRlZmF1bHRcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbi5sZW5ndGggPT09IDIgJiYgIXRoaXMuc2V0dGluZ3MuZ2VvUmFkaXVzKSB7XG4gICAgICB0aGlzLnNldHRpbmdzLmdlb1JhZGl1cyA9IDIwMDAwMDAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaG93UmVjZW50U2VhcmNoKSB7XG4gICAgICB0aGlzLmdldFJlY2VudExvY2F0aW9ucygpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MudXNlR29vZ2xlR2VvQXBpKSB7XG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZ2VvUHJlZGljdGlvblNlcnZlclVybCkge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ1ByZWRpY3Rpb24gY3VzdG9tIHNlcnZlciB1cmwgaXMgbm90IGRlZmluZWQuIFBsZWFzZSB1c2UgXCJnZW9QcmVkaWN0aW9uU2VydmVyVXJsXCIga2V5IHRvIHNldC4gJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5nZW9MYXRMYW5nU2VydmljZVVybCkge1xuICAgICAgICB0aGlzLmlzU2V0dGluZ3NFcnJvciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NFcnJvck1zZyA9XG4gICAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnICsgJ0xhdGl0dWRlIGFuZCBsb25naXR1ZGUgY3VzdG9tIHNlcnZlciB1cmwgaXMgbm90IGRlZmluZWQuIFBsZWFzZSB1c2UgXCJnZW9MYXRMYW5nU2VydmljZVVybFwiIGtleSB0byBzZXQuICc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZ2VvTG9jRGV0YWlsU2VydmVyVXJsKSB7XG4gICAgICAgIHRoaXMuaXNTZXR0aW5nc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXR0aW5nc0Vycm9yTXNnID1cbiAgICAgICAgICB0aGlzLnNldHRpbmdzRXJyb3JNc2cgKyAnTG9jYXRpb24gZGV0YWlsIGN1c3RvbSBzZXJ2ZXIgdXJsIGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgdXNlIFwiZ2VvTG9jRGV0YWlsU2VydmVyVXJsXCIga2V5IHRvIHNldC4gJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2NhdGlvbklucHV0ID0gdGhpcy50ZXJtO1xuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gcHJvY2VzcyB0aGUgc2VhcmNoIHF1ZXJ5IHdoZW4gcHJlc3NlZCBlbnRlci5cbiAgcHJpdmF0ZSBwcm9jZXNzU2VhcmNoUXVlcnkoKTogYW55IHtcbiAgICBpZiAodGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCkge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPiAtMSkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdE5vZGUobnVsbCwgdGhpcy5zZWxlY3RlZERhdGFJbmRleCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkTGlzdE5vZGUobnVsbCwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gc2V0IHVzZXIgc2V0dGluZ3MgaWYgaXQgaXMgYXZhaWxhYmxlLlxuICBwcml2YXRlIHNldFVzZXJTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgY29uc3QgX3RlbXBPYmo6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLnVzZXJTZXR0aW5ncyAmJiB0eXBlb2YgdGhpcy51c2VyU2V0dGluZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBrZXlzOiBzdHJpbmdbXSA9IE9iamVjdC5rZXlzKHRoaXMuZGVmYXVsdFNldHRpbmdzKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2Yga2V5cykge1xuICAgICAgICBfdGVtcE9ialt2YWx1ZV0gPSB0aGlzLnVzZXJTZXR0aW5nc1t2YWx1ZV0gIT09IHVuZGVmaW5lZCA/IHRoaXMudXNlclNldHRpbmdzW3ZhbHVlXSA6IHRoaXMuZGVmYXVsdFNldHRpbmdzW3ZhbHVlXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfdGVtcE9iajtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgYXV0b2NvbXBsZXRlIGxpc3QgYmFzZWQgb24gdXNlciBpbnB1dC5cbiAgcHJpdmF0ZSBnZXRMaXN0UXVlcnkodmFsdWU6IHN0cmluZyk6IGFueSB7XG4gICAgdGhpcy5yZWNlbnREcm9wZG93bk9wZW4gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIGNvbnN0IF90ZW1wUGFyYW1zOiBhbnkgPSB7XG4gICAgICAgIHF1ZXJ5OiB2YWx1ZSxcbiAgICAgICAgY291bnRyeVJlc3RyaWN0aW9uOiB0aGlzLnNldHRpbmdzLmdlb0NvdW50cnlSZXN0cmljdGlvbixcbiAgICAgICAgZ2VvVHlwZXM6IHRoaXMuc2V0dGluZ3MuZ2VvVHlwZXMsXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2VvTG9jYXRpb24ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIF90ZW1wUGFyYW1zLmdlb0xvY2F0aW9uID0gdGhpcy5zZXR0aW5ncy5nZW9Mb2NhdGlvbjtcbiAgICAgICAgX3RlbXBQYXJhbXMucmFkaXVzID0gdGhpcy5zZXR0aW5ncy5nZW9SYWRpdXM7XG4gICAgICB9XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldEdlb1ByZWRpY3Rpb24oX3RlbXBQYXJhbXMpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUxpc3RJdGVtKHJlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRQcmVkaWN0aW9ucyh0aGlzLnNldHRpbmdzLmdlb1ByZWRpY3Rpb25TZXJ2ZXJVcmwsIHZhbHVlKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5leHRyYWN0U2VydmVyTGlzdCh0aGlzLnNldHRpbmdzLnNlcnZlclJlc3BvbnNlTGlzdEhpZXJhcmNoeSwgcmVzdWx0KTtcbiAgICAgICAgdGhpcy51cGRhdGVMaXN0SXRlbShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gZXh0cmF0YyBjdXN0b20gZGF0YSB3aGljaCBpcyBzZW5kIGJ5IHRoZSBzZXJ2ZXIuXG4gIHByaXZhdGUgZXh0cmFjdFNlcnZlckxpc3QoYXJyYXlMaXN0OiBhbnksIGRhdGE6IGFueSk6IGFueSB7XG4gICAgaWYgKGFycmF5TGlzdC5sZW5ndGgpIHtcbiAgICAgIGxldCBfdGVtcERhdGE6IGFueSA9IGRhdGE7XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBhcnJheUxpc3QpIHtcbiAgICAgICAgX3RlbXBEYXRhID0gX3RlbXBEYXRhW2tleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RlbXBEYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHByZWRpY3RlZCBsaXN0LlxuICBwcml2YXRlIHVwZGF0ZUxpc3RJdGVtKGxpc3REYXRhOiBhbnkpOiBhbnkge1xuICAgIHRoaXMucXVlcnlJdGVtcyA9IGxpc3REYXRhID8gbGlzdERhdGEgOiBbXTtcbiAgICB0aGlzLmRyb3Bkb3duT3BlbiA9IHRydWU7XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBzaG93IHRoZSByZWNlbnQgc2VhcmNoIHJlc3VsdC5cbiAgcHJpdmF0ZSBzaG93UmVjZW50U2VhcmNoKCk6IGFueSB7XG4gICAgdGhpcy5yZWNlbnREcm9wZG93bk9wZW4gPSB0cnVlO1xuICAgIHRoaXMuZHJvcGRvd25PcGVuID0gdHJ1ZTtcbiAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFJlY2VudExpc3QodGhpcy5zZXR0aW5ncy5yZWNlbnRTdG9yYWdlTmFtZSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5xdWVyeUl0ZW1zID0gW107XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyAvL2Z1bmN0aW9uIHRvIG5hdmlnYXRlIHRocm91Z2ggbGlzdCB3aGVuIHVwIGFuZCBkb3duIGtleWJvYXJkIGtleSBpcyBwcmVzc2VkO1xuICAvLyBwcml2YXRlIG5hdmlnYXRlSW5MaXN0KGtleUNvZGU6IG51bWJlcik6IGFueSB7XG4gIC8vICAgICBsZXQgYXJyYXlJbmRleDogbnVtYmVyID0gMDtcbiAgLy8gICAgIC8vYXJyb3cgZG93blxuICAvLyAgICAgaWYgKGtleUNvZGUgPT09IDQwKSB7XG4gIC8vICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPj0gMCkge1xuICAvLyAgICAgICAgICAgICBhcnJheUluZGV4ID0gKCh0aGlzLnNlbGVjdGVkRGF0YUluZGV4ICsgMSkgPD0gKHRoaXMucXVlcnlJdGVtcy5sZW5ndGggLSAxKSkgPyAodGhpcy5zZWxlY3RlZERhdGFJbmRleCArIDEpIDogMDtcbiAgLy8gICAgICAgICB9XG4gIC8vICAgICAgICAgdGhpcy5hY3RpdmVMaXN0Tm9kZShhcnJheUluZGV4KTtcbiAgLy8gICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gMzgpIHsvL2Fycm93IHVwXG4gIC8vICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPj0gMCkge1xuICAvLyAgICAgICAgICAgICBhcnJheUluZGV4ID0gKCh0aGlzLnNlbGVjdGVkRGF0YUluZGV4IC0gMSkgPj0gMCkgPyAodGhpcy5zZWxlY3RlZERhdGFJbmRleCAtIDEpIDogKHRoaXMucXVlcnlJdGVtcy5sZW5ndGggLSAxKTtcbiAgLy8gICAgICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgICAgICBhcnJheUluZGV4ID0gdGhpcy5xdWVyeUl0ZW1zLmxlbmd0aCAtIDE7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIHRoaXMuYWN0aXZlTGlzdE5vZGUoYXJyYXlJbmRleCk7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICAgIHRoaXMucHJvY2Vzc1NlYXJjaFF1ZXJ5KCk7XG4gIC8vICAgICB9XG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiB0byBleGVjdXRlIHRvIGdldCBsb2NhdGlvbiBkZXRhaWwgYmFzZWQgb24gbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZS5cbiAgcHJpdmF0ZSBnZXRDdXJyZW50TG9jYXRpb25JbmZvKGxhdGxuZzogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy51c2VHb29nbGVHZW9BcGkpIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuZ2V0R2VvTGF0TG5nRGV0YWlsKGxhdGxuZykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldHRpbmdDdXJyZW50TG9jYXRpb25GbGFnID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRMYXRMbmdEZXRhaWwodGhpcy5zZXR0aW5ncy5nZW9MYXRMYW5nU2VydmljZVVybCwgbGF0bG5nLmxhdCwgbGF0bG5nLmxuZykudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXh0cmFjdFNlcnZlckxpc3QodGhpcy5zZXR0aW5ncy5zZXJ2ZXJSZXNwb25zZWF0TGFuZ0hpZXJhcmNoeSwgcmVzdWx0KTtcbiAgICAgICAgICB0aGlzLnNldFJlY2VudExvY2F0aW9uKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXR0aW5nQ3VycmVudExvY2F0aW9uRmxhZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gcmV0cml2ZSB0aGUgbG9jYXRpb24gaW5mbyBiYXNlZCBvbiBnb292bGUgcGxhY2UgaWQuXG4gIHByaXZhdGUgZ2V0UGxhY2VMb2NhdGlvbkluZm8oc2VsZWN0ZWREYXRhOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnVzZUdvb2dsZUdlb0FwaSkge1xuICAgICAgdGhpcy5fZ29vZ2xlUGxhY2VzU2VydmljZS5nZXRHZW9QbGFjZURldGFpbChzZWxlY3RlZERhdGEucGxhY2VfaWQpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24oZGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFBsYWNlRGV0YWlscyh0aGlzLnNldHRpbmdzLmdlb0xvY0RldGFpbFNlcnZlclVybCwgc2VsZWN0ZWREYXRhLnBsYWNlX2lkKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5leHRyYWN0U2VydmVyTGlzdCh0aGlzLnNldHRpbmdzLnNlcnZlclJlc3BvbnNlRGV0YWlsSGllcmFyY2h5LCByZXN1bHQpO1xuICAgICAgICAgIHRoaXMuc2V0UmVjZW50TG9jYXRpb24ocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gc3RvcmUgdGhlIHNlbGVjdGVkIHVzZXIgc2VhcmNoIGluIHRoZSBsb2NhbHN0b3JhZ2UuXG4gIHByaXZhdGUgc2V0UmVjZW50TG9jYXRpb24oZGF0YTogYW55KTogYW55IHtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgZGF0YS5kZXNjcmlwdGlvbiA9IGRhdGEuZGVzY3JpcHRpb24gPyBkYXRhLmRlc2NyaXB0aW9uIDogZGF0YS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICBkYXRhLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuc2VsZWN0ZWREYXRhSW5kZXggPSAtMTtcbiAgICB0aGlzLmxvY2F0aW9uSW5wdXQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dSZWNlbnRTZWFyY2gpIHtcbiAgICAgIHRoaXMuX2dvb2dsZVBsYWNlc1NlcnZpY2UuYWRkUmVjZW50TGlzdCh0aGlzLnNldHRpbmdzLnJlY2VudFN0b3JhZ2VOYW1lLCBkYXRhLCB0aGlzLnNldHRpbmdzLm5vT2ZSZWNlbnRTZWFyY2hTYXZlKTtcbiAgICAgIHRoaXMuZ2V0UmVjZW50TG9jYXRpb25zKCk7XG4gICAgfVxuICAgIHRoaXMudXNlclNlbGVjdGVkT3B0aW9uID0gZGF0YTtcbiAgICAvLyBiZWxvdyBjb2RlIHdpbGwgZXhlY3V0ZSBvbmx5IHdoZW4gdXNlciBwcmVzcyBlbnRlciBvciBzZWxlY3QgYW55IG9wdGlvbiBzZWxlY3Rpb24gYW5kIGl0IGVtaXQgYSBjYWxsYmFjayB0byB0aGUgcGFyZW50IGNvbXBvbmVudC5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MucmVzT25TZWFyY2hCdXR0b25DbGlja09ubHkpIHtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoZGF0YSk7XG4gICAgICB0aGlzLnRlcm1DaGFuZ2UuZW1pdChkYXRhKTtcbiAgICB9XG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byByZXRyaXZlIHRoZSBzdG9yZWQgcmVjZW50IHVzZXIgc2VhcmNoIGZyb20gdGhlIGxvY2Fsc3RvcmFnZS5cbiAgcHJpdmF0ZSBnZXRSZWNlbnRMb2NhdGlvbnMoKTogYW55IHtcbiAgICB0aGlzLl9nb29nbGVQbGFjZXNTZXJ2aWNlLmdldFJlY2VudExpc3QodGhpcy5zZXR0aW5ncy5yZWNlbnRTdG9yYWdlTmFtZSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlY2VudFNlYXJjaERhdGEgPSBkYXRhICYmIGRhdGEubGVuZ3RoID8gZGF0YSA6IFtdO1xuICAgIH0pO1xuICB9XG59XG4iXX0=