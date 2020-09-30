/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUU3RTtJQUVFLDZCQUNVLEtBQWlCLEVBQ0ksVUFBa0IsRUFDdkMsT0FBa0IsRUFDbEIsb0JBQXlDO1FBSHpDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUNoRCxDQUFDOzs7Ozs7SUFFSiw0Q0FBYzs7Ozs7SUFBZCxVQUFlLEdBQVcsRUFBRSxLQUFhO1FBQXpDLGlCQVVDO1FBVEMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFTO2dCQUMxRCxJQUFJLElBQUksRUFBRTtvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsNkNBQWU7Ozs7OztJQUFmLFVBQWdCLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUFyRCxpQkFVQztRQVRDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUFTO2dCQUN0RSxJQUFJLElBQUksRUFBRTtvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFRCw2Q0FBZTs7Ozs7SUFBZixVQUFnQixHQUFXLEVBQUUsT0FBZTtRQUE1QyxpQkFVQztRQVRDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3pCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBUztnQkFDNUQsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELG1EQUFxQjs7O0lBQXJCO1FBQUEsaUJBZ0JDO1FBZkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O29CQUNsQyxPQUFPLEdBQVEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZO2dCQUM1QyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO29CQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0I7Ozs7b0JBQUMsVUFBQyxHQUFHOzs0QkFDL0MsTUFBTSxHQUFRLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFO3dCQUMzRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ2xCLENBQUMsRUFBQyxDQUFDO2lCQUNKO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsZ0RBQWtCOzs7O0lBQWxCLFVBQW1CLE1BQVc7UUFBOUIsaUJBc0JDO1FBckJDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3pCLElBQUksaUJBQWlCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztvQkFDbEMsT0FBTyxHQUFRLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTs7b0JBQ3hDLFFBQVEsR0FBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDdEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Ozs7O2dCQUFFLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3JELElBQUksTUFBTSxLQUFLLElBQUksRUFBRTt3QkFDbkIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJOzs7O3dCQUFDLFVBQUMsTUFBTTs0QkFDdEQsSUFBSSxNQUFNLEVBQUU7Z0NBQ1YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOzZCQUNqQjtpQ0FBTTtnQ0FDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2hCO3dCQUNILENBQUMsRUFBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDaEI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEI7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLE1BQVc7UUFBNUIsaUJBa0RDO1FBakRDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3pCLElBQUksaUJBQWlCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFOztvQkFDbEMsT0FBTyxHQUFRLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWTs7b0JBQ3hDLGFBQWEsR0FBUSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTs7b0JBQ3pFLFVBQVUsR0FBUSxFQUFFOztvQkFDcEIsVUFBVSxHQUFRLEVBQUU7Z0JBQ3hCLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRTtvQkFDcEMsVUFBVSxHQUFHO3dCQUNYLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSzt3QkFDbkIscUJBQXFCLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLGtCQUFrQixFQUFFO3FCQUM5RCxDQUFDO2lCQUNIO3FCQUFNO29CQUNMLFVBQVUsR0FBRzt3QkFDWCxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7cUJBQ3BCLENBQUM7aUJBQ0g7Z0JBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO29CQUN0QixVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzSCxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ25DO2dCQUNELElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQzFCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7NEJBQ25ELFVBQVUsR0FBUSxVQUFVO3dCQUNoQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNwRCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztxQkFDcEU7aUJBQ0Y7cUJBQU07b0JBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLE1BQU07O3dCQUM5QixHQUFHLEdBQVEsTUFBTTtvQkFDckIsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7NEJBQ2QsUUFBUSxHQUFRLEVBQUU7d0JBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUMzQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO2dDQUMzQixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDcEM7eUJBQ0Y7d0JBQ0QsUUFBUSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNuQjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3BCO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELCtDQUFpQjs7OztJQUFqQixVQUFrQixPQUFlO1FBQWpDLGlCQXNCQztRQXJCQyxPQUFPLElBQUksT0FBTzs7OztRQUFDLFVBQUMsT0FBTztZQUN6QixJQUFJLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7b0JBQ2xDLE9BQU8sR0FBUSxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7O29CQUN4QyxhQUFhLEdBQVEsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3BHLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOzs7OztnQkFBRSxVQUFDLE1BQVcsRUFBRSxNQUFXO29CQUN0RSxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQzFDLEtBQUksQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTs7Ozt3QkFBQyxVQUFDLGFBQWtCOzRCQUN6RSxJQUFJLENBQUMsYUFBYSxFQUFFO2dDQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7NkJBQ2hCO2lDQUFNO2dDQUNMLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQzs2QkFDeEI7d0JBQ0gsQ0FBQyxFQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FCQUNqQjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx5REFBMkI7Ozs7SUFBM0IsVUFBNEIsU0FBaUI7UUFBN0MsaUJBZ0JDO1FBZkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7O29CQUNsQyxTQUFPLEdBQVEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZOztvQkFDeEMsYUFBYSxHQUFRLElBQUksU0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDdkUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUU7Ozs7O2dCQUFFLFVBQUMsTUFBVyxFQUFFLE1BQVc7b0JBQzFFLElBQUksTUFBTSxLQUFLLFNBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUU7d0JBQ2hFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDakI7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNoQjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELDJDQUFhOzs7Ozs7SUFBYixVQUFjLGdCQUF3QixFQUFFLE1BQVcsRUFBRSxlQUF1QjtRQUE1RSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsSUFBUztZQUNsRCxJQUFJLElBQUksRUFBRTtnQkFDUixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDNUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLE1BQU0sQ0FBQyxXQUFXLEVBQUU7d0JBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixNQUFNO3FCQUNQO2lCQUNGO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLEVBQUU7b0JBQ2pDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDWjtnQkFDRCxLQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUMzRTtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsZ0JBQXdCO1FBQXRDLGlCQVVDO1FBVEMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFDLE9BQU87O2dCQUNyQixLQUFLLEdBQVEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwRSxJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQ1o7WUFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFTyw4Q0FBZ0I7Ozs7O0lBQXhCLFVBQXlCLEdBQVE7UUFDL0IsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsR0FBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7Ozs7O0lBRU8sK0NBQWlCOzs7Ozs7SUFBekIsVUFBMEIsYUFBa0IsRUFBRSxVQUFlOztZQUN2RCxPQUFPLEdBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZO1FBQzVDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQyxPQUFPO1lBQ3pCLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVOzs7OztZQUFFLFVBQUMsTUFBVyxFQUFFLE1BQVc7Z0JBQ3JFLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQjtZQUNILENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFsT0YsVUFBVTs7OztnQkFKRixVQUFVO2dCQVEwQixNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztnQkFQZCxTQUFTO2dCQUNULG1CQUFtQjs7SUFxTzVCLDBCQUFDO0NBQUEsQUFuT0QsSUFtT0M7U0FsT1ksbUJBQW1COzs7Ozs7SUFFNUIsb0NBQXlCOzs7OztJQUN6Qix5Q0FBK0M7Ozs7O0lBQy9DLHNDQUEwQjs7Ozs7SUFDMUIsbURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEdsb2JhbFJlZiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlUGxhY2VzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSBfZ2xvYmFsOiBHbG9iYWxSZWYsXG4gICAgcHJpdmF0ZSBfbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgKSB7fVxuXG4gIGdldFByZWRpY3Rpb25zKHVybDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KHVybCArICc/cXVlcnk9JyArIHF1ZXJ5KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGF0TG5nRGV0YWlsKHVybDogc3RyaW5nLCBsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5faHR0cC5nZXQodXJsICsgJz9sYXQ9JyArIGxhdCArICcmbG5nPScgKyBsbmcpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQbGFjZURldGFpbHModXJsOiBzdHJpbmcsIHBsYWNlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9odHRwLmdldCh1cmwgKyAnP3F1ZXJ5PScgKyBwbGFjZUlkKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvQ3VycmVudExvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBsZXQgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgaWYgKF93aW5kb3cubmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgX3dpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3MpID0+IHtcbiAgICAgICAgICAgIGxldCBsYXRsbmc6IGFueSA9IHsgbGF0OiBwYXJzZUZsb2F0KHBvcy5jb29yZHMubGF0aXR1ZGUgKyAnJyksIGxuZzogcGFyc2VGbG9hdChwb3MuY29vcmRzLmxvbmdpdHVkZSArICcnKSB9O1xuICAgICAgICAgICAgcmVzb2x2ZShsYXRsbmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEdlb0xhdExuZ0RldGFpbChsYXRsbmc6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBsZXQgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgbGV0IGdlb2NvZGVyOiBhbnkgPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgICAgICBnZW9jb2Rlci5nZW9jb2RlKHsgbG9jYXRpb246IGxhdGxuZyB9LCAocmVzdWx0cywgc3RhdHVzKSA9PiB7XG4gICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICAgICAgdGhpcy5nZXRHZW9QbGFjZURldGFpbChyZXN1bHRzWzBdLnBsYWNlX2lkKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEdlb1ByZWRpY3Rpb24ocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgbGV0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGxldCBwbGFjZXNTZXJ2aWNlOiBhbnkgPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlU2VydmljZSgpO1xuICAgICAgICBsZXQgcXVlcnlJbnB1dDogYW55ID0ge307XG4gICAgICAgIGxldCBwcm9taXNlQXJyOiBhbnkgPSBbXTtcbiAgICAgICAgaWYgKHBhcmFtcy5jb3VudHJ5UmVzdHJpY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgcXVlcnlJbnB1dCA9IHtcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMucXVlcnksXG4gICAgICAgICAgICBjb21wb25lbnRSZXN0cmljdGlvbnM6IHsgY291bnRyeTogcGFyYW1zLmNvdW50cnlSZXN0cmljdGlvbiB9LFxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcXVlcnlJbnB1dCA9IHtcbiAgICAgICAgICAgIGlucHV0OiBwYXJhbXMucXVlcnksXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyYW1zLmdlb0xvY2F0aW9uKSB7XG4gICAgICAgICAgcXVlcnlJbnB1dC5sb2NhdGlvbiA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLkxhdExuZyhwYXJzZUZsb2F0KHBhcmFtcy5nZW9Mb2NhdGlvblswXSksIHBhcnNlRmxvYXQocGFyYW1zLmdlb0xvY2F0aW9uWzFdKSk7XG4gICAgICAgICAgcXVlcnlJbnB1dC5yYWRpdXMgPSBwYXJhbXMucmFkaXVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZ2VvVHlwZXMubGVuZ3RoKSB7XG4gICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBhcmFtcy5nZW9UeXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IF90ZW1wUXVlcnk6IGFueSA9IHF1ZXJ5SW5wdXQ7XG4gICAgICAgICAgICBfdGVtcFF1ZXJ5Wyd0eXBlcyddID0gbmV3IEFycmF5KHBhcmFtcy5nZW9UeXBlc1tpXSk7XG4gICAgICAgICAgICBwcm9taXNlQXJyLnB1c2godGhpcy5nZW9QcmVkaWN0aW9uQ2FsbChwbGFjZXNTZXJ2aWNlLCBfdGVtcFF1ZXJ5KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb21pc2VBcnIucHVzaCh0aGlzLmdlb1ByZWRpY3Rpb25DYWxsKHBsYWNlc1NlcnZpY2UsIHF1ZXJ5SW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VBcnIpLnRoZW4oKHZhbHVlcykgPT4ge1xuICAgICAgICAgIGxldCB2YWw6IGFueSA9IHZhbHVlcztcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBfdGVtcEFycjogYW55ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdmFsLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmICh2YWxbal0gJiYgdmFsW2pdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF90ZW1wQXJyID0gX3RlbXBBcnIuY29uY2F0KHZhbFtqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90ZW1wQXJyID0gdGhpcy5nZXRVbmlxdWVSZXN1bHRzKF90ZW1wQXJyKTtcbiAgICAgICAgICAgIHJlc29sdmUoX3RlbXBBcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvUGxhY2VEZXRhaWwocGxhY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGxldCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBsZXQgcGxhY2VzU2VydmljZTogYW55ID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICBwbGFjZXNTZXJ2aWNlLmdldERldGFpbHMoeyBwbGFjZUlkOiBwbGFjZUlkIH0sIChyZXN1bHQ6IGFueSwgc3RhdHVzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0R2VvUGFjZURldGFpbEJ5UmVmZXJhbmNlKHJlc3VsdC5yZWZlcmFuY2UpLnRoZW4oKHJlZmVyYW5jZURhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXJlZmVyYW5jZURhdGEpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlZmVyYW5jZURhdGEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEdlb1BhY2VEZXRhaWxCeVJlZmVyYW5jZShyZWZlcmFuY2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBsZXQgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgbGV0IHBsYWNlc1NlcnZpY2U6IGFueSA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKCk7XG4gICAgICAgIHBsYWNlc1NlcnZpY2UuZ2V0RGV0YWlscyh7IHJlZmVyZW5jZTogcmVmZXJhbmNlIH0sIChyZXN1bHQ6IGFueSwgc3RhdHVzOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSBfd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZFJlY2VudExpc3QobG9jYWxTdG9yYWdlTmFtZTogc3RyaW5nLCByZXN1bHQ6IGFueSwgaXRlbVNhdmVkTGVuZ3RoOiBudW1iZXIpOiBhbnkge1xuICAgIHRoaXMuZ2V0UmVjZW50TGlzdChsb2NhbFN0b3JhZ2VOYW1lKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRhdGFbaV0uZGVzY3JpcHRpb24gPT09IHJlc3VsdC5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgZGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS51bnNoaWZ0KHJlc3VsdCk7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IGl0ZW1TYXZlZExlbmd0aCkge1xuICAgICAgICAgIGRhdGEucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9jYWxTdG9yYWdlU2VydmljZS5zZXRJdGVtKGxvY2FsU3RvcmFnZU5hbWUsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlY2VudExpc3QobG9jYWxTdG9yYWdlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGxldCB2YWx1ZTogYW55ID0gdGhpcy5fbG9jYWxTdG9yYWdlU2VydmljZS5nZXRJdGVtKGxvY2FsU3RvcmFnZU5hbWUpO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IFtdO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXF1ZVJlc3VsdHMoYXJyOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFyci5yZWR1Y2UoKG0sIHQpID0+IG0uc2V0KHQucGxhY2VfaWQsIHQpLCBuZXcgTWFwKCkpLnZhbHVlcygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VvUHJlZGljdGlvbkNhbGwocGxhY2VzU2VydmljZTogYW55LCBxdWVyeUlucHV0OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcGxhY2VzU2VydmljZS5nZXRQbGFjZVByZWRpY3Rpb25zKHF1ZXJ5SW5wdXQsIChyZXN1bHQ6IGFueSwgc3RhdHVzOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZVN0YXR1cy5PSykge1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==