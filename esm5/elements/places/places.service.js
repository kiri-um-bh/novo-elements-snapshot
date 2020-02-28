/**
 * @fileoverview added by tsickle
 * Generated from: elements/places/places.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { GlobalRef } from '../../services/global/global.service';
import { LocalStorageService } from '../../services/storage/storage.service';
var GooglePlacesService = /** @class */ (function () {
    function GooglePlacesService(_http, platformId, _global, _localStorageService) {
        this._http = _http;
        this.platformId = platformId;
        this._global = _global;
        this._localStorageService = _localStorageService;
    }
    /**
     * @param {?} url
     * @param {?} query
     * @return {?}
     */
    GooglePlacesService.prototype.getPredictions = /**
     * @param {?} url
     * @param {?} query
     * @return {?}
     */
    function (url, query) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this._http.get(url + '?query=' + query).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    };
    /**
     * @param {?} url
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    GooglePlacesService.prototype.getLatLngDetail = /**
     * @param {?} url
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    function (url, lat, lng) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this._http.get(url + '?lat=' + lat + '&lng=' + lng).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    };
    /**
     * @param {?} url
     * @param {?} placeId
     * @return {?}
     */
    GooglePlacesService.prototype.getPlaceDetails = /**
     * @param {?} url
     * @param {?} placeId
     * @return {?}
     */
    function (url, placeId) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this._http.get(url + '?query=' + placeId).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    };
    /**
     * @return {?}
     */
    GooglePlacesService.prototype.getGeoCurrentLocation = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                /** @type {?} */
                var _window = _this._global.nativeGlobal;
                if (_window.navigator.geolocation) {
                    _window.navigator.geolocation.getCurrentPosition((/**
                     * @param {?} pos
                     * @return {?}
                     */
                    function (pos) {
                        /** @type {?} */
                        var latlng = { lat: parseFloat(pos.coords.latitude + ''), lng: parseFloat(pos.coords.longitude + '') };
                        resolve(latlng);
                    }));
                }
                else {
                    resolve(false);
                }
            }
            else {
                resolve(false);
            }
        }));
    };
    /**
     * @param {?} latlng
     * @return {?}
     */
    GooglePlacesService.prototype.getGeoLatLngDetail = /**
     * @param {?} latlng
     * @return {?}
     */
    function (latlng) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                /** @type {?} */
                var _window = _this._global.nativeGlobal;
                /** @type {?} */
                var geocoder = new _window.google.maps.Geocoder();
                geocoder.geocode({ location: latlng }, (/**
                 * @param {?} results
                 * @param {?} status
                 * @return {?}
                 */
                function (results, status) {
                    if (status === 'OK') {
                        _this.getGeoPlaceDetail(results[0].place_id).then((/**
                         * @param {?} result
                         * @return {?}
                         */
                        function (result) {
                            if (result) {
                                resolve(result);
                            }
                            else {
                                resolve(false);
                            }
                        }));
                    }
                    else {
                        resolve(false);
                    }
                }));
            }
            else {
                resolve(false);
            }
        }));
    };
    /**
     * @param {?} params
     * @return {?}
     */
    GooglePlacesService.prototype.getGeoPrediction = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                /** @type {?} */
                var _window = _this._global.nativeGlobal;
                /** @type {?} */
                var placesService = new _window.google.maps.places.AutocompleteService();
                /** @type {?} */
                var queryInput = {};
                /** @type {?} */
                var promiseArr = [];
                if (params.countryRestriction.length) {
                    queryInput = {
                        input: params.query,
                        componentRestrictions: { country: params.countryRestriction },
                    };
                }
                else {
                    queryInput = {
                        input: params.query,
                    };
                }
                if (params.geoLocation) {
                    queryInput.location = new _window.google.maps.LatLng(parseFloat(params.geoLocation[0]), parseFloat(params.geoLocation[1]));
                    queryInput.radius = params.radius;
                }
                if (params.geoTypes.length) {
                    for (var i = 0; i < params.geoTypes.length; i++) {
                        /** @type {?} */
                        var _tempQuery = queryInput;
                        _tempQuery['types'] = new Array(params.geoTypes[i]);
                        promiseArr.push(_this.geoPredictionCall(placesService, _tempQuery));
                    }
                }
                else {
                    promiseArr.push(_this.geoPredictionCall(placesService, queryInput));
                }
                Promise.all(promiseArr).then((/**
                 * @param {?} values
                 * @return {?}
                 */
                function (values) {
                    /** @type {?} */
                    var val = values;
                    if (val.length > 1) {
                        /** @type {?} */
                        var _tempArr = [];
                        for (var j = 0; j < val.length; j++) {
                            if (val[j] && val[j].length) {
                                _tempArr = _tempArr.concat(val[j]);
                            }
                        }
                        _tempArr = _this.getUniqueResults(_tempArr);
                        resolve(_tempArr);
                    }
                    else {
                        resolve(values[0]);
                    }
                }));
            }
            else {
                resolve(false);
            }
        }));
    };
    /**
     * @param {?} placeId
     * @return {?}
     */
    GooglePlacesService.prototype.getGeoPlaceDetail = /**
     * @param {?} placeId
     * @return {?}
     */
    function (placeId) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                /** @type {?} */
                var _window = _this._global.nativeGlobal;
                /** @type {?} */
                var placesService = new _window.google.maps.places.PlacesService(document.createElement('div'));
                placesService.getDetails({ placeId: placeId }, (/**
                 * @param {?} result
                 * @param {?} status
                 * @return {?}
                 */
                function (result, status) {
                    if (result === null || result.length === 0) {
                        _this.getGeoPaceDetailByReferance(result.referance).then((/**
                         * @param {?} referanceData
                         * @return {?}
                         */
                        function (referanceData) {
                            if (!referanceData) {
                                resolve(false);
                            }
                            else {
                                resolve(referanceData);
                            }
                        }));
                    }
                    else {
                        resolve(result);
                    }
                }));
            }
            else {
                resolve(false);
            }
        }));
    };
    /**
     * @param {?} referance
     * @return {?}
     */
    GooglePlacesService.prototype.getGeoPaceDetailByReferance = /**
     * @param {?} referance
     * @return {?}
     */
    function (referance) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                /** @type {?} */
                var _window_1 = _this._global.nativeGlobal;
                /** @type {?} */
                var placesService = new _window_1.google.maps.places.PlacesService();
                placesService.getDetails({ reference: referance }, (/**
                 * @param {?} result
                 * @param {?} status
                 * @return {?}
                 */
                function (result, status) {
                    if (status === _window_1.google.maps.places.PlacesServiceStatus.OK) {
                        resolve(result);
                    }
                    else {
                        resolve(false);
                    }
                }));
            }
            else {
                resolve(false);
            }
        }));
    };
    /**
     * @param {?} localStorageName
     * @param {?} result
     * @param {?} itemSavedLength
     * @return {?}
     */
    GooglePlacesService.prototype.addRecentList = /**
     * @param {?} localStorageName
     * @param {?} result
     * @param {?} itemSavedLength
     * @return {?}
     */
    function (localStorageName, result, itemSavedLength) {
        var _this = this;
        this.getRecentList(localStorageName).then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].description === result.description) {
                        data.splice(i, 1);
                        break;
                    }
                }
                data.unshift(result);
                if (data.length > itemSavedLength) {
                    data.pop();
                }
                _this._localStorageService.setItem(localStorageName, JSON.stringify(data));
            }
        }));
    };
    /**
     * @param {?} localStorageName
     * @return {?}
     */
    GooglePlacesService.prototype.getRecentList = /**
     * @param {?} localStorageName
     * @return {?}
     */
    function (localStorageName) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var value = _this._localStorageService.getItem(localStorageName);
            if (value) {
                value = JSON.parse(value);
            }
            else {
                value = [];
            }
            resolve(value);
        }));
    };
    /**
     * @private
     * @param {?} arr
     * @return {?}
     */
    GooglePlacesService.prototype.getUniqueResults = /**
     * @private
     * @param {?} arr
     * @return {?}
     */
    function (arr) {
        return Array.from(arr.reduce((/**
         * @param {?} m
         * @param {?} t
         * @return {?}
         */
        function (m, t) { return m.set(t.place_id, t); }), new Map()).values());
    };
    /**
     * @private
     * @param {?} placesService
     * @param {?} queryInput
     * @return {?}
     */
    GooglePlacesService.prototype.geoPredictionCall = /**
     * @private
     * @param {?} placesService
     * @param {?} queryInput
     * @return {?}
     */
    function (placesService, queryInput) {
        /** @type {?} */
        var _window = this._global.nativeGlobal;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            placesService.getPlacePredictions(queryInput, (/**
             * @param {?} result
             * @param {?} status
             * @return {?}
             */
            function (result, status) {
                if (status === _window.google.maps.places.PlacesServiceStatus.OK) {
                    resolve(result);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    };
    GooglePlacesService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GooglePlacesService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: GlobalRef },
        { type: LocalStorageService }
    ]; };
    return GooglePlacesService;
}());
export { GooglePlacesService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GooglePlacesService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    GooglePlacesService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GooglePlacesService.prototype._global;
    /**
     * @type {?}
     * @private
     */
    GooglePlacesService.prototype._localStorageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFN0U7SUFFRSw2QkFDVSxLQUFpQixFQUNJLFVBQWtCLEVBQ3ZDLE9BQWtCLEVBQ2xCLG9CQUF5QztRQUh6QyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7SUFDaEQsQ0FBQzs7Ozs7O0lBRUosNENBQWM7Ozs7O0lBQWQsVUFBZSxHQUFXLEVBQUUsS0FBYTtRQUF6QyxpQkFVQztRQVRDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBUztnQkFDMUQsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lB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LEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFwQixDQUFvQixHQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7Ozs7SUFFTywrQ0FBaUI7Ozs7OztJQUF6QixVQUEwQixhQUFrQixFQUFFLFVBQWU7O1lBQ3JELE9BQU8sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7UUFDOUMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDekIsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFVBQVU7Ozs7O1lBQUUsVUFBQyxNQUFXLEVBQUUsTUFBVztnQkFDckUsSUFBSSxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRTtvQkFDaEUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNqQjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxPRixVQUFVOzs7O2dCQUpGLFVBQVU7Z0JBUTBCLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO2dCQVBkLFNBQVM7Z0JBQ1QsbUJBQW1COztJQXFPNUIsMEJBQUM7Q0FBQSxBQW5PRCxJQW1PQztTQWxPWSxtQkFBbUI7Ozs7OztJQUU1QixvQ0FBeUI7Ozs7O0lBQ3pCLHlDQUErQzs7Ozs7SUFDL0Msc0NBQTBCOzs7OztJQUMxQixtREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgR2xvYmFsUmVmIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVQbGFjZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIF9nbG9iYWw6IEdsb2JhbFJlZixcbiAgICBwcml2YXRlIF9sb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICApIHt9XG5cbiAgZ2V0UHJlZGljdGlvbnModXJsOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5faHR0cC5nZXQodXJsICsgJz9xdWVyeT0nICsgcXVlcnkpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRMYXRMbmdEZXRhaWwodXJsOiBzdHJpbmcsIGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9odHRwLmdldCh1cmwgKyAnP2xhdD0nICsgbGF0ICsgJyZsbmc9JyArIGxuZykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBsYWNlRGV0YWlscyh1cmw6IHN0cmluZywgcGxhY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KHVybCArICc/cXVlcnk9JyArIHBsYWNlSWQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9DdXJyZW50TG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGNvbnN0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGlmIChfd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIF93aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYXRsbmc6IGFueSA9IHsgbGF0OiBwYXJzZUZsb2F0KHBvcy5jb29yZHMubGF0aXR1ZGUgKyAnJyksIGxuZzogcGFyc2VGbG9hdChwb3MuY29vcmRzLmxvbmdpdHVkZSArICcnKSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShsYXRsbmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEdlb0xhdExuZ0RldGFpbChsYXRsbmc6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBjb25zdCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBjb25zdCBnZW9jb2RlcjogYW55ID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7IGxvY2F0aW9uOiBsYXRsbmcgfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0R2VvUGxhY2VEZXRhaWwocmVzdWx0c1swXS5wbGFjZV9pZCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9QcmVkaWN0aW9uKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGNvbnN0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGNvbnN0IHBsYWNlc1NlcnZpY2U6IGFueSA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGVTZXJ2aWNlKCk7XG4gICAgICAgIGxldCBxdWVyeUlucHV0OiBhbnkgPSB7fTtcbiAgICAgICAgY29uc3QgcHJvbWlzZUFycjogYW55ID0gW107XG4gICAgICAgIGlmIChwYXJhbXMuY291bnRyeVJlc3RyaWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIHF1ZXJ5SW5wdXQgPSB7XG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLnF1ZXJ5LFxuICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7IGNvdW50cnk6IHBhcmFtcy5jb3VudHJ5UmVzdHJpY3Rpb24gfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5SW5wdXQgPSB7XG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLnF1ZXJ5LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5nZW9Mb2NhdGlvbikge1xuICAgICAgICAgIHF1ZXJ5SW5wdXQubG9jYXRpb24gPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5MYXRMbmcocGFyc2VGbG9hdChwYXJhbXMuZ2VvTG9jYXRpb25bMF0pLCBwYXJzZUZsb2F0KHBhcmFtcy5nZW9Mb2NhdGlvblsxXSkpO1xuICAgICAgICAgIHF1ZXJ5SW5wdXQucmFkaXVzID0gcGFyYW1zLnJhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmdlb1R5cGVzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbXMuZ2VvVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IF90ZW1wUXVlcnk6IGFueSA9IHF1ZXJ5SW5wdXQ7XG4gICAgICAgICAgICBfdGVtcFF1ZXJ5Wyd0eXBlcyddID0gbmV3IEFycmF5KHBhcmFtcy5nZW9UeXBlc1tpXSk7XG4gICAgICAgICAgICBwcm9taXNlQXJyLnB1c2godGhpcy5nZW9QcmVkaWN0aW9uQ2FsbChwbGFjZXNTZXJ2aWNlLCBfdGVtcFF1ZXJ5KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2VBcnIucHVzaCh0aGlzLmdlb1ByZWRpY3Rpb25DYWxsKHBsYWNlc1NlcnZpY2UsIHF1ZXJ5SW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VBcnIpLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbDogYW55ID0gdmFsdWVzO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IF90ZW1wQXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB2YWwubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKHZhbFtqXSAmJiB2YWxbal0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RlbXBBcnIgPSBfdGVtcEFyci5jb25jYXQodmFsW2pdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RlbXBBcnIgPSB0aGlzLmdldFVuaXF1ZVJlc3VsdHMoX3RlbXBBcnIpO1xuICAgICAgICAgICAgcmVzb2x2ZShfdGVtcEFycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9QbGFjZURldGFpbChwbGFjZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgY29uc3QgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgY29uc3QgcGxhY2VzU2VydmljZTogYW55ID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBwbGFjZXNTZXJ2aWNlLmdldERldGFpbHMoeyBwbGFjZUlkIH0sIChyZXN1bHQ6IGFueSwgc3RhdHVzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0R2VvUGFjZURldGFpbEJ5UmVmZXJhbmNlKHJlc3VsdC5yZWZlcmFuY2UpLnRoZW4oKHJlZmVyYW5jZURhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXJlZmVyYW5jZURhdGEpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlZmVyYW5jZURhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEdlb1BhY2VEZXRhaWxCeVJlZmVyYW5jZShyZWZlcmFuY2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBjb25zdCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBjb25zdCBwbGFjZXNTZXJ2aWNlOiBhbnkgPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZSgpO1xuICAgICAgICBwbGFjZXNTZXJ2aWNlLmdldERldGFpbHMoeyByZWZlcmVuY2U6IHJlZmVyYW5jZSB9LCAocmVzdWx0OiBhbnksIHN0YXR1czogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZVN0YXR1cy5PSykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRSZWNlbnRMaXN0KGxvY2FsU3RvcmFnZU5hbWU6IHN0cmluZywgcmVzdWx0OiBhbnksIGl0ZW1TYXZlZExlbmd0aDogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLmdldFJlY2VudExpc3QobG9jYWxTdG9yYWdlTmFtZSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChkYXRhW2ldLmRlc2NyaXB0aW9uID09PSByZXN1bHQuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEudW5zaGlmdChyZXN1bHQpO1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiBpdGVtU2F2ZWRMZW5ndGgpIHtcbiAgICAgICAgICBkYXRhLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VOYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWNlbnRMaXN0KGxvY2FsU3RvcmFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgdmFsdWU6IGFueSA9IHRoaXMuX2xvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VOYW1lKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbmlxdWVSZXN1bHRzKGFycjogYW55KTogYW55IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIucmVkdWNlKChtLCB0KSA9PiBtLnNldCh0LnBsYWNlX2lkLCB0KSwgbmV3IE1hcCgpKS52YWx1ZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlb1ByZWRpY3Rpb25DYWxsKHBsYWNlc1NlcnZpY2U6IGFueSwgcXVlcnlJbnB1dDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcGxhY2VzU2VydmljZS5nZXRQbGFjZVByZWRpY3Rpb25zKHF1ZXJ5SW5wdXQsIChyZXN1bHQ6IGFueSwgc3RhdHVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZVN0YXR1cy5PSykge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==