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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFN0U7SUFFRSw2QkFDVSxLQUFpQixFQUNJLFVBQWtCLEVBQ3ZDLE9BQWtCLEVBQ2xCLG9CQUF5QztRQUh6QyxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUN2QyxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7SUFDaEQsQ0FBQzs7Ozs7O0lBRUosNENBQWM7Ozs7O0lBQWQsVUFBZSxHQUFXLEVBQUUsS0FBYTtRQUF6QyxpQkFVQztRQVRDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBUztnQkFDMUQsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lB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LE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTs7Ozs7UUFBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQXBCLENBQW9CLEdBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7Ozs7OztJQUVPLCtDQUFpQjs7Ozs7O0lBQXpCLFVBQTBCLGFBQWtCLEVBQUUsVUFBZTs7WUFDdkQsT0FBTyxHQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTtRQUM1QyxPQUFPLElBQUksT0FBTzs7OztRQUFDLFVBQUMsT0FBTztZQUN6QixhQUFhLENBQUMsbUJBQW1CLENBQUMsVUFBVTs7Ozs7WUFBRSxVQUFDLE1BQVcsRUFBRSxNQUFXO2dCQUNyRSxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFO29CQUNoRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbE9GLFVBQVU7Ozs7Z0JBSkYsVUFBVTtnQkFRMEIsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7Z0JBUGQsU0FBUztnQkFDVCxtQkFBbUI7O0lBcU81QiwwQkFBQztDQUFBLEFBbk9ELElBbU9DO1NBbE9ZLG1CQUFtQjs7Ozs7O0lBRTVCLG9DQUF5Qjs7Ozs7SUFDekIseUNBQStDOzs7OztJQUMvQyxzQ0FBMEI7Ozs7O0lBQzFCLG1EQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBHbG9iYWxSZWYgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nbG9iYWwvZ2xvYmFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0b3JhZ2Uvc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZVBsYWNlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0LFxuICAgIHByaXZhdGUgX2dsb2JhbDogR2xvYmFsUmVmLFxuICAgIHByaXZhdGUgX2xvY2FsU3RvcmFnZVNlcnZpY2U6IExvY2FsU3RvcmFnZVNlcnZpY2UsXG4gICkge31cblxuICBnZXRQcmVkaWN0aW9ucyh1cmw6IHN0cmluZywgcXVlcnk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9odHRwLmdldCh1cmwgKyAnP3F1ZXJ5PScgKyBxdWVyeSkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldExhdExuZ0RldGFpbCh1cmw6IHN0cmluZywgbGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KHVybCArICc/bGF0PScgKyBsYXQgKyAnJmxuZz0nICsgbG5nKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UGxhY2VEZXRhaWxzKHVybDogc3RyaW5nLCBwbGFjZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5faHR0cC5nZXQodXJsICsgJz9xdWVyeT0nICsgcGxhY2VJZCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEdlb0N1cnJlbnRMb2NhdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgbGV0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGlmIChfd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgIF93aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zKSA9PiB7XG4gICAgICAgICAgICBsZXQgbGF0bG5nOiBhbnkgPSB7IGxhdDogcGFyc2VGbG9hdChwb3MuY29vcmRzLmxhdGl0dWRlICsgJycpLCBsbmc6IHBhcnNlRmxvYXQocG9zLmNvb3Jkcy5sb25naXR1ZGUgKyAnJykgfTtcbiAgICAgICAgICAgIHJlc29sdmUobGF0bG5nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9MYXRMbmdEZXRhaWwobGF0bG5nOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgbGV0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGxldCBnZW9jb2RlcjogYW55ID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7IGxvY2F0aW9uOiBsYXRsbmcgfSwgKHJlc3VsdHMsIHN0YXR1cykgPT4ge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0R2VvUGxhY2VEZXRhaWwocmVzdWx0c1swXS5wbGFjZV9pZCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9QcmVkaWN0aW9uKHBhcmFtczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGxldCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBsZXQgcGxhY2VzU2VydmljZTogYW55ID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZVNlcnZpY2UoKTtcbiAgICAgICAgbGV0IHF1ZXJ5SW5wdXQ6IGFueSA9IHt9O1xuICAgICAgICBsZXQgcHJvbWlzZUFycjogYW55ID0gW107XG4gICAgICAgIGlmIChwYXJhbXMuY291bnRyeVJlc3RyaWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgIHF1ZXJ5SW5wdXQgPSB7XG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLnF1ZXJ5LFxuICAgICAgICAgICAgY29tcG9uZW50UmVzdHJpY3Rpb25zOiB7IGNvdW50cnk6IHBhcmFtcy5jb3VudHJ5UmVzdHJpY3Rpb24gfSxcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHF1ZXJ5SW5wdXQgPSB7XG4gICAgICAgICAgICBpbnB1dDogcGFyYW1zLnF1ZXJ5LFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5nZW9Mb2NhdGlvbikge1xuICAgICAgICAgIHF1ZXJ5SW5wdXQubG9jYXRpb24gPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5MYXRMbmcocGFyc2VGbG9hdChwYXJhbXMuZ2VvTG9jYXRpb25bMF0pLCBwYXJzZUZsb2F0KHBhcmFtcy5nZW9Mb2NhdGlvblsxXSkpO1xuICAgICAgICAgIHF1ZXJ5SW5wdXQucmFkaXVzID0gcGFyYW1zLnJhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmdlb1R5cGVzLmxlbmd0aCkge1xuICAgICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwYXJhbXMuZ2VvVHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfdGVtcFF1ZXJ5OiBhbnkgPSBxdWVyeUlucHV0O1xuICAgICAgICAgICAgX3RlbXBRdWVyeVsndHlwZXMnXSA9IG5ldyBBcnJheShwYXJhbXMuZ2VvVHlwZXNbaV0pO1xuICAgICAgICAgICAgcHJvbWlzZUFyci5wdXNoKHRoaXMuZ2VvUHJlZGljdGlvbkNhbGwocGxhY2VzU2VydmljZSwgX3RlbXBRdWVyeSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlQXJyLnB1c2godGhpcy5nZW9QcmVkaWN0aW9uQ2FsbChwbGFjZXNTZXJ2aWNlLCBxdWVyeUlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlQXJyKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgICBsZXQgdmFsOiBhbnkgPSB2YWx1ZXM7XG4gICAgICAgICAgaWYgKHZhbC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgX3RlbXBBcnI6IGFueSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHZhbC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBpZiAodmFsW2pdICYmIHZhbFtqXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBfdGVtcEFyciA9IF90ZW1wQXJyLmNvbmNhdCh2YWxbal0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGVtcEFyciA9IHRoaXMuZ2V0VW5pcXVlUmVzdWx0cyhfdGVtcEFycik7XG4gICAgICAgICAgICByZXNvbHZlKF90ZW1wQXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZXNbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEdlb1BsYWNlRGV0YWlsKHBsYWNlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBsZXQgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgbGV0IHBsYWNlc1NlcnZpY2U6IGFueSA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgcGxhY2VzU2VydmljZS5nZXREZXRhaWxzKHsgcGxhY2VJZDogcGxhY2VJZCB9LCAocmVzdWx0OiBhbnksIHN0YXR1czogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdldEdlb1BhY2VEZXRhaWxCeVJlZmVyYW5jZShyZXN1bHQucmVmZXJhbmNlKS50aGVuKChyZWZlcmFuY2VEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFyZWZlcmFuY2VEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZWZlcmFuY2VEYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9QYWNlRGV0YWlsQnlSZWZlcmFuY2UocmVmZXJhbmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgbGV0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGxldCBwbGFjZXNTZXJ2aWNlOiBhbnkgPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZSgpO1xuICAgICAgICBwbGFjZXNTZXJ2aWNlLmdldERldGFpbHMoeyByZWZlcmVuY2U6IHJlZmVyYW5jZSB9LCAocmVzdWx0OiBhbnksIHN0YXR1czogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZVN0YXR1cy5PSykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRSZWNlbnRMaXN0KGxvY2FsU3RvcmFnZU5hbWU6IHN0cmluZywgcmVzdWx0OiBhbnksIGl0ZW1TYXZlZExlbmd0aDogbnVtYmVyKTogYW55IHtcbiAgICB0aGlzLmdldFJlY2VudExpc3QobG9jYWxTdG9yYWdlTmFtZSkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChkYXRhW2ldLmRlc2NyaXB0aW9uID09PSByZXN1bHQuZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRhdGEuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEudW5zaGlmdChyZXN1bHQpO1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiBpdGVtU2F2ZWRMZW5ndGgpIHtcbiAgICAgICAgICBkYXRhLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VOYW1lLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRSZWNlbnRMaXN0KGxvY2FsU3RvcmFnZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBsZXQgdmFsdWU6IGFueSA9IHRoaXMuX2xvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2VOYW1lKTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbmlxdWVSZXN1bHRzKGFycjogYW55KTogYW55IHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShhcnIucmVkdWNlKChtLCB0KSA9PiBtLnNldCh0LnBsYWNlX2lkLCB0KSwgbmV3IE1hcCgpKS52YWx1ZXMoKSk7XG4gIH1cblxuICBwcml2YXRlIGdlb1ByZWRpY3Rpb25DYWxsKHBsYWNlc1NlcnZpY2U6IGFueSwgcXVlcnlJbnB1dDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VQcmVkaWN0aW9ucyhxdWVyeUlucHV0LCAocmVzdWx0OiBhbnksIHN0YXR1czogYW55KSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=