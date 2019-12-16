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
export class GooglePlacesService {
    /**
     * @param {?} _http
     * @param {?} platformId
     * @param {?} _global
     * @param {?} _localStorageService
     */
    constructor(_http, platformId, _global, _localStorageService) {
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
    getPredictions(url, query) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this._http.get(url + '?query=' + query).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    }
    /**
     * @param {?} url
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    getLatLngDetail(url, lat, lng) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this._http.get(url + '?lat=' + lat + '&lng=' + lng).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    }
    /**
     * @param {?} url
     * @param {?} placeId
     * @return {?}
     */
    getPlaceDetails(url, placeId) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this._http.get(url + '?query=' + placeId).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    getGeoCurrentLocation() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (isPlatformBrowser(this.platformId)) {
                /** @type {?} */
                let _window = this._global.nativeGlobal;
                if (_window.navigator.geolocation) {
                    _window.navigator.geolocation.getCurrentPosition((/**
                     * @param {?} pos
                     * @return {?}
                     */
                    (pos) => {
                        /** @type {?} */
                        let latlng = { lat: parseFloat(pos.coords.latitude + ''), lng: parseFloat(pos.coords.longitude + '') };
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
    }
    /**
     * @param {?} latlng
     * @return {?}
     */
    getGeoLatLngDetail(latlng) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (isPlatformBrowser(this.platformId)) {
                /** @type {?} */
                let _window = this._global.nativeGlobal;
                /** @type {?} */
                let geocoder = new _window.google.maps.Geocoder();
                geocoder.geocode({ location: latlng }, (/**
                 * @param {?} results
                 * @param {?} status
                 * @return {?}
                 */
                (results, status) => {
                    if (status === 'OK') {
                        this.getGeoPlaceDetail(results[0].place_id).then((/**
                         * @param {?} result
                         * @return {?}
                         */
                        (result) => {
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
    }
    /**
     * @param {?} params
     * @return {?}
     */
    getGeoPrediction(params) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (isPlatformBrowser(this.platformId)) {
                /** @type {?} */
                let _window = this._global.nativeGlobal;
                /** @type {?} */
                let placesService = new _window.google.maps.places.AutocompleteService();
                /** @type {?} */
                let queryInput = {};
                /** @type {?} */
                let promiseArr = [];
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
                    for (let i = 0; i < params.geoTypes.length; i++) {
                        /** @type {?} */
                        let _tempQuery = queryInput;
                        _tempQuery['types'] = new Array(params.geoTypes[i]);
                        promiseArr.push(this.geoPredictionCall(placesService, _tempQuery));
                    }
                }
                else {
                    promiseArr.push(this.geoPredictionCall(placesService, queryInput));
                }
                Promise.all(promiseArr).then((/**
                 * @param {?} values
                 * @return {?}
                 */
                (values) => {
                    /** @type {?} */
                    let val = values;
                    if (val.length > 1) {
                        /** @type {?} */
                        let _tempArr = [];
                        for (let j = 0; j < val.length; j++) {
                            if (val[j] && val[j].length) {
                                _tempArr = _tempArr.concat(val[j]);
                            }
                        }
                        _tempArr = this.getUniqueResults(_tempArr);
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
    }
    /**
     * @param {?} placeId
     * @return {?}
     */
    getGeoPlaceDetail(placeId) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (isPlatformBrowser(this.platformId)) {
                /** @type {?} */
                let _window = this._global.nativeGlobal;
                /** @type {?} */
                let placesService = new _window.google.maps.places.PlacesService(document.createElement('div'));
                placesService.getDetails({ placeId: placeId }, (/**
                 * @param {?} result
                 * @param {?} status
                 * @return {?}
                 */
                (result, status) => {
                    if (result === null || result.length === 0) {
                        this.getGeoPaceDetailByReferance(result.referance).then((/**
                         * @param {?} referanceData
                         * @return {?}
                         */
                        (referanceData) => {
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
    }
    /**
     * @param {?} referance
     * @return {?}
     */
    getGeoPaceDetailByReferance(referance) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (isPlatformBrowser(this.platformId)) {
                /** @type {?} */
                let _window = this._global.nativeGlobal;
                /** @type {?} */
                let placesService = new _window.google.maps.places.PlacesService();
                placesService.getDetails({ reference: referance }, (/**
                 * @param {?} result
                 * @param {?} status
                 * @return {?}
                 */
                (result, status) => {
                    if (status === _window.google.maps.places.PlacesServiceStatus.OK) {
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
    /**
     * @param {?} localStorageName
     * @param {?} result
     * @param {?} itemSavedLength
     * @return {?}
     */
    addRecentList(localStorageName, result, itemSavedLength) {
        this.getRecentList(localStorageName).then((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            if (data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].description === result.description) {
                        data.splice(i, 1);
                        break;
                    }
                }
                data.unshift(result);
                if (data.length > itemSavedLength) {
                    data.pop();
                }
                this._localStorageService.setItem(localStorageName, JSON.stringify(data));
            }
        }));
    }
    /**
     * @param {?} localStorageName
     * @return {?}
     */
    getRecentList(localStorageName) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            /** @type {?} */
            let value = this._localStorageService.getItem(localStorageName);
            if (value) {
                value = JSON.parse(value);
            }
            else {
                value = [];
            }
            resolve(value);
        }));
    }
    /**
     * @private
     * @param {?} arr
     * @return {?}
     */
    getUniqueResults(arr) {
        return Array.from(arr.reduce((/**
         * @param {?} m
         * @param {?} t
         * @return {?}
         */
        (m, t) => m.set(t.place_id, t)), new Map()).values());
    }
    /**
     * @private
     * @param {?} placesService
     * @param {?} queryInput
     * @return {?}
     */
    geoPredictionCall(placesService, queryInput) {
        /** @type {?} */
        let _window = this._global.nativeGlobal;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            placesService.getPlacePredictions(queryInput, (/**
             * @param {?} result
             * @param {?} status
             * @return {?}
             */
            (result, status) => {
                if (status === _window.google.maps.places.PlacesServiceStatus.OK) {
                    resolve(result);
                }
                else {
                    resolve(false);
                }
            }));
        }));
    }
}
GooglePlacesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GooglePlacesService.ctorParameters = () => [
    { type: HttpClient },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: GlobalRef },
    { type: LocalStorageService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHN0UsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQUM5QixZQUNVLEtBQWlCLEVBQ0ksVUFBa0IsRUFDdkMsT0FBa0IsRUFDbEIsb0JBQXlDO1FBSHpDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUNoRCxDQUFDOzs7Ozs7SUFFSixjQUFjLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDdkMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQzlELElBQUksSUFBSSxFQUFFO29CQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDZjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2hCO1lBQ0gsQ0FBQyxFQUFDLENBQUM7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QUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxHQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxhQUFrQixFQUFFLFVBQWU7O1lBQ3ZELE9BQU8sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7UUFDNUMsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVOzs7OztZQUFFLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxFQUFFO2dCQUN6RSxJQUFJLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFO29CQUNoRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ2pCO3FCQUFNO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEI7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBbE9GLFVBQVU7Ozs7WUFKRixVQUFVO1lBUTBCLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO1lBUGQsU0FBUztZQUNULG1CQUFtQjs7Ozs7OztJQUt4QixvQ0FBeUI7Ozs7O0lBQ3pCLHlDQUErQzs7Ozs7SUFDL0Msc0NBQTBCOzs7OztJQUMxQixtREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgR2xvYmFsUmVmIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ2xvYmFsL2dsb2JhbC5zZXJ2aWNlJztcbmltcG9ydCB7IExvY2FsU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zdG9yYWdlL3N0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVQbGFjZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBwcml2YXRlIF9nbG9iYWw6IEdsb2JhbFJlZixcbiAgICBwcml2YXRlIF9sb2NhbFN0b3JhZ2VTZXJ2aWNlOiBMb2NhbFN0b3JhZ2VTZXJ2aWNlLFxuICApIHt9XG5cbiAgZ2V0UHJlZGljdGlvbnModXJsOiBzdHJpbmcsIHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5faHR0cC5nZXQodXJsICsgJz9xdWVyeT0nICsgcXVlcnkpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRMYXRMbmdEZXRhaWwodXJsOiBzdHJpbmcsIGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9odHRwLmdldCh1cmwgKyAnP2xhdD0nICsgbGF0ICsgJyZsbmc9JyArIGxuZykuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBsYWNlRGV0YWlscyh1cmw6IHN0cmluZywgcGxhY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KHVybCArICc/cXVlcnk9JyArIHBsYWNlSWQpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9DdXJyZW50TG9jYXRpb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGxldCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBpZiAoX3dpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICBfd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvcykgPT4ge1xuICAgICAgICAgICAgbGV0IGxhdGxuZzogYW55ID0geyBsYXQ6IHBhcnNlRmxvYXQocG9zLmNvb3Jkcy5sYXRpdHVkZSArICcnKSwgbG5nOiBwYXJzZUZsb2F0KHBvcy5jb29yZHMubG9uZ2l0dWRlICsgJycpIH07XG4gICAgICAgICAgICByZXNvbHZlKGxhdGxuZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvTGF0TG5nRGV0YWlsKGxhdGxuZzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGxldCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBsZXQgZ2VvY29kZXI6IGFueSA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBsb2NhdGlvbjogbGF0bG5nIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgICB0aGlzLmdldEdlb1BsYWNlRGV0YWlsKHJlc3VsdHNbMF0ucGxhY2VfaWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvUHJlZGljdGlvbihwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBsZXQgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgbGV0IHBsYWNlc1NlcnZpY2U6IGFueSA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGVTZXJ2aWNlKCk7XG4gICAgICAgIGxldCBxdWVyeUlucHV0OiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHByb21pc2VBcnI6IGFueSA9IFtdO1xuICAgICAgICBpZiAocGFyYW1zLmNvdW50cnlSZXN0cmljdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBxdWVyeUlucHV0ID0ge1xuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5xdWVyeSxcbiAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiBwYXJhbXMuY291bnRyeVJlc3RyaWN0aW9uIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeUlucHV0ID0ge1xuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5xdWVyeSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZ2VvTG9jYXRpb24pIHtcbiAgICAgICAgICBxdWVyeUlucHV0LmxvY2F0aW9uID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nKHBhcnNlRmxvYXQocGFyYW1zLmdlb0xvY2F0aW9uWzBdKSwgcGFyc2VGbG9hdChwYXJhbXMuZ2VvTG9jYXRpb25bMV0pKTtcbiAgICAgICAgICBxdWVyeUlucHV0LnJhZGl1cyA9IHBhcmFtcy5yYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5nZW9UeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1zLmdlb1R5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgX3RlbXBRdWVyeTogYW55ID0gcXVlcnlJbnB1dDtcbiAgICAgICAgICAgIF90ZW1wUXVlcnlbJ3R5cGVzJ10gPSBuZXcgQXJyYXkocGFyYW1zLmdlb1R5cGVzW2ldKTtcbiAgICAgICAgICAgIHByb21pc2VBcnIucHVzaCh0aGlzLmdlb1ByZWRpY3Rpb25DYWxsKHBsYWNlc1NlcnZpY2UsIF90ZW1wUXVlcnkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvbWlzZUFyci5wdXNoKHRoaXMuZ2VvUHJlZGljdGlvbkNhbGwocGxhY2VzU2VydmljZSwgcXVlcnlJbnB1dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgUHJvbWlzZS5hbGwocHJvbWlzZUFycikudGhlbigodmFsdWVzKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbDogYW55ID0gdmFsdWVzO1xuICAgICAgICAgIGlmICh2YWwubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IF90ZW1wQXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB2YWwubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKHZhbFtqXSAmJiB2YWxbal0ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX3RlbXBBcnIgPSBfdGVtcEFyci5jb25jYXQodmFsW2pdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RlbXBBcnIgPSB0aGlzLmdldFVuaXF1ZVJlc3VsdHMoX3RlbXBBcnIpO1xuICAgICAgICAgICAgcmVzb2x2ZShfdGVtcEFycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUodmFsdWVzWzBdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9QbGFjZURldGFpbChwbGFjZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgbGV0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGxldCBwbGFjZXNTZXJ2aWNlOiBhbnkgPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuUGxhY2VzU2VydmljZShkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgIHBsYWNlc1NlcnZpY2UuZ2V0RGV0YWlscyh7IHBsYWNlSWQ6IHBsYWNlSWQgfSwgKHJlc3VsdDogYW55LCBzdGF0dXM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwgfHwgcmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5nZXRHZW9QYWNlRGV0YWlsQnlSZWZlcmFuY2UocmVzdWx0LnJlZmVyYW5jZSkudGhlbigocmVmZXJhbmNlRGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghcmVmZXJhbmNlRGF0YSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVmZXJhbmNlRGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvUGFjZURldGFpbEJ5UmVmZXJhbmNlKHJlZmVyYW5jZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGxldCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBsZXQgcGxhY2VzU2VydmljZTogYW55ID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UoKTtcbiAgICAgICAgcGxhY2VzU2VydmljZS5nZXREZXRhaWxzKHsgcmVmZXJlbmNlOiByZWZlcmFuY2UgfSwgKHJlc3VsdDogYW55LCBzdGF0dXM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkUmVjZW50TGlzdChsb2NhbFN0b3JhZ2VOYW1lOiBzdHJpbmcsIHJlc3VsdDogYW55LCBpdGVtU2F2ZWRMZW5ndGg6IG51bWJlcik6IGFueSB7XG4gICAgdGhpcy5nZXRSZWNlbnRMaXN0KGxvY2FsU3RvcmFnZU5hbWUpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZGF0YVtpXS5kZXNjcmlwdGlvbiA9PT0gcmVzdWx0LmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhLnVuc2hpZnQocmVzdWx0KTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gaXRlbVNhdmVkTGVuZ3RoKSB7XG4gICAgICAgICAgZGF0YS5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0obG9jYWxTdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVjZW50TGlzdChsb2NhbFN0b3JhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlOiBhbnkgPSB0aGlzLl9sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0obG9jYWxTdG9yYWdlTmFtZSk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gW107XG4gICAgICB9XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VW5pcXVlUmVzdWx0cyhhcnI6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyLnJlZHVjZSgobSwgdCkgPT4gbS5zZXQodC5wbGFjZV9pZCwgdCksIG5ldyBNYXAoKSkudmFsdWVzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW9QcmVkaWN0aW9uQ2FsbChwbGFjZXNTZXJ2aWNlOiBhbnksIHF1ZXJ5SW5wdXQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBwbGFjZXNTZXJ2aWNlLmdldFBsYWNlUHJlZGljdGlvbnMocXVlcnlJbnB1dCwgKHJlc3VsdDogYW55LCBzdGF0dXM6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBfd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlU3RhdHVzLk9LKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19