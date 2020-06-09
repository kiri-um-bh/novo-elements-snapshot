import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { GlobalRef } from '../../services/global/global.service';
import { LocalStorageService } from '../../services/storage/storage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../services/global/global.service";
import * as i3 from "../../services/storage/storage.service";
var GooglePlacesService = /** @class */ (function () {
    function GooglePlacesService(_http, platformId, _global, _localStorageService) {
        this._http = _http;
        this.platformId = platformId;
        this._global = _global;
        this._localStorageService = _localStorageService;
    }
    GooglePlacesService.prototype.getPredictions = function (url, query) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._http.get(url + '?query=' + query).subscribe(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    GooglePlacesService.prototype.getLatLngDetail = function (url, lat, lng) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._http.get(url + '?lat=' + lat + '&lng=' + lng).subscribe(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    GooglePlacesService.prototype.getPlaceDetails = function (url, placeId) {
        var _this = this;
        return new Promise(function (resolve) {
            _this._http.get(url + '?query=' + placeId).subscribe(function (data) {
                if (data) {
                    resolve(data);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    GooglePlacesService.prototype.getGeoCurrentLocation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                var _window = _this._global.nativeGlobal;
                if (_window.navigator.geolocation) {
                    _window.navigator.geolocation.getCurrentPosition(function (pos) {
                        var latlng = { lat: parseFloat(pos.coords.latitude + ''), lng: parseFloat(pos.coords.longitude + '') };
                        resolve(latlng);
                    });
                }
                else {
                    resolve(false);
                }
            }
            else {
                resolve(false);
            }
        });
    };
    GooglePlacesService.prototype.getGeoLatLngDetail = function (latlng) {
        var _this = this;
        return new Promise(function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                var _window = _this._global.nativeGlobal;
                var geocoder = new _window.google.maps.Geocoder();
                geocoder.geocode({ location: latlng }, function (results, status) {
                    if (status === 'OK') {
                        _this.getGeoPlaceDetail(results[0].place_id).then(function (result) {
                            if (result) {
                                resolve(result);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        resolve(false);
                    }
                });
            }
            else {
                resolve(false);
            }
        });
    };
    GooglePlacesService.prototype.getGeoPrediction = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                var _window = _this._global.nativeGlobal;
                var placesService = new _window.google.maps.places.AutocompleteService();
                var queryInput = {};
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
                        var _tempQuery = queryInput;
                        _tempQuery['types'] = new Array(params.geoTypes[i]);
                        promiseArr.push(_this.geoPredictionCall(placesService, _tempQuery));
                    }
                }
                else {
                    promiseArr.push(_this.geoPredictionCall(placesService, queryInput));
                }
                Promise.all(promiseArr).then(function (values) {
                    var val = values;
                    if (val.length > 1) {
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
                });
            }
            else {
                resolve(false);
            }
        });
    };
    GooglePlacesService.prototype.getGeoPlaceDetail = function (placeId) {
        var _this = this;
        return new Promise(function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                var _window = _this._global.nativeGlobal;
                var placesService = new _window.google.maps.places.PlacesService(document.createElement('div'));
                placesService.getDetails({ placeId: placeId }, function (result, status) {
                    if (result === null || result.length === 0) {
                        _this.getGeoPaceDetailByReferance(result.referance).then(function (referanceData) {
                            if (!referanceData) {
                                resolve(false);
                            }
                            else {
                                resolve(referanceData);
                            }
                        });
                    }
                    else {
                        resolve(result);
                    }
                });
            }
            else {
                resolve(false);
            }
        });
    };
    GooglePlacesService.prototype.getGeoPaceDetailByReferance = function (referance) {
        var _this = this;
        return new Promise(function (resolve) {
            if (isPlatformBrowser(_this.platformId)) {
                var _window_1 = _this._global.nativeGlobal;
                var placesService = new _window_1.google.maps.places.PlacesService();
                placesService.getDetails({ reference: referance }, function (result, status) {
                    if (status === _window_1.google.maps.places.PlacesServiceStatus.OK) {
                        resolve(result);
                    }
                    else {
                        resolve(false);
                    }
                });
            }
            else {
                resolve(false);
            }
        });
    };
    GooglePlacesService.prototype.addRecentList = function (localStorageName, result, itemSavedLength) {
        var _this = this;
        this.getRecentList(localStorageName).then(function (data) {
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
        });
    };
    GooglePlacesService.prototype.getRecentList = function (localStorageName) {
        var _this = this;
        return new Promise(function (resolve) {
            var value = _this._localStorageService.getItem(localStorageName);
            if (value) {
                value = JSON.parse(value);
            }
            else {
                value = [];
            }
            resolve(value);
        });
    };
    GooglePlacesService.prototype.getUniqueResults = function (arr) {
        return Array.from(arr.reduce(function (m, t) { return m.set(t.place_id, t); }, new Map()).values());
    };
    GooglePlacesService.prototype.geoPredictionCall = function (placesService, queryInput) {
        var _window = this._global.nativeGlobal;
        return new Promise(function (resolve) {
            placesService.getPlacePredictions(queryInput, function (result, status) {
                if (status === _window.google.maps.places.PlacesServiceStatus.OK) {
                    resolve(result);
                }
                else {
                    resolve(false);
                }
            });
        });
    };
    GooglePlacesService.ɵfac = function GooglePlacesService_Factory(t) { return new (t || GooglePlacesService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(i2.GlobalRef), i0.ɵɵinject(i3.LocalStorageService)); };
    GooglePlacesService.ɵprov = i0.ɵɵdefineInjectable({ token: GooglePlacesService, factory: GooglePlacesService.ɵfac });
    return GooglePlacesService;
}());
export { GooglePlacesService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GooglePlacesService, [{
        type: Injectable
    }], function () { return [{ type: i1.HttpClient }, { type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: i2.GlobalRef }, { type: i3.LocalStorageService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGxhY2VzL3BsYWNlcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7OztBQUU3RTtJQUVFLDZCQUNVLEtBQWlCLEVBQ0ksVUFBa0IsRUFDdkMsT0FBa0IsRUFDbEIsb0JBQXlDO1FBSHpDLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ3ZDLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUNoRCxDQUFDO0lBRUosNENBQWMsR0FBZCxVQUFlLEdBQVcsRUFBRSxLQUFhO1FBQXpDLGlCQVVDO1FBVEMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFTO2dCQUMxRCxJQUFJLElBQUksRUFBRTtvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNB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Q0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsRUFBRSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU8sK0NBQWlCLEdBQXpCLFVBQTBCLGFBQWtCLEVBQUUsVUFBZTtRQUMzRCxJQUFNLE9BQU8sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUMvQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN6QixhQUFhLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFVBQUMsTUFBVyxFQUFFLE1BQVc7Z0JBQ3JFLElBQUksTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUU7b0JBQ2hFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDakI7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQjtZQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzBGQWpPVSxtQkFBbUIsMENBR3BCLFdBQVc7K0RBSFYsbUJBQW1CLFdBQW5CLG1CQUFtQjs4QkFQaEM7Q0F5T0MsQUFuT0QsSUFtT0M7U0FsT1ksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVTsrREFJa0MsTUFBTTtzQkFBOUMsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEdsb2JhbFJlZiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2dsb2JhbC9nbG9iYWwuc2VydmljZSc7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RvcmFnZS9zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlUGxhY2VzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgcHJpdmF0ZSBfZ2xvYmFsOiBHbG9iYWxSZWYsXG4gICAgcHJpdmF0ZSBfbG9jYWxTdG9yYWdlU2VydmljZTogTG9jYWxTdG9yYWdlU2VydmljZSxcbiAgKSB7fVxuXG4gIGdldFByZWRpY3Rpb25zKHVybDogc3RyaW5nLCBxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX2h0dHAuZ2V0KHVybCArICc/cXVlcnk9JyArIHF1ZXJ5KS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TGF0TG5nRGV0YWlsKHVybDogc3RyaW5nLCBsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5faHR0cC5nZXQodXJsICsgJz9sYXQ9JyArIGxhdCArICcmbG5nPScgKyBsbmcpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQbGFjZURldGFpbHModXJsOiBzdHJpbmcsIHBsYWNlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9odHRwLmdldCh1cmwgKyAnP3F1ZXJ5PScgKyBwbGFjZUlkKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvQ3VycmVudExvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBjb25zdCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBpZiAoX3dpbmRvdy5uYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICBfd2luZG93Lm5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGF0bG5nOiBhbnkgPSB7IGxhdDogcGFyc2VGbG9hdChwb3MuY29vcmRzLmxhdGl0dWRlICsgJycpLCBsbmc6IHBhcnNlRmxvYXQocG9zLmNvb3Jkcy5sb25naXR1ZGUgKyAnJykgfTtcbiAgICAgICAgICAgIHJlc29sdmUobGF0bG5nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9MYXRMbmdEZXRhaWwobGF0bG5nOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgY29uc3QgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgY29uc3QgZ2VvY29kZXI6IGFueSA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBsb2NhdGlvbjogbGF0bG5nIH0sIChyZXN1bHRzLCBzdGF0dXMpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdHVzID09PSAnT0snKSB7XG4gICAgICAgICAgICB0aGlzLmdldEdlb1BsYWNlRGV0YWlsKHJlc3VsdHNbMF0ucGxhY2VfaWQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvUHJlZGljdGlvbihwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgICBjb25zdCBfd2luZG93OiBhbnkgPSB0aGlzLl9nbG9iYWwubmF0aXZlR2xvYmFsO1xuICAgICAgICBjb25zdCBwbGFjZXNTZXJ2aWNlOiBhbnkgPSBuZXcgX3dpbmRvdy5nb29nbGUubWFwcy5wbGFjZXMuQXV0b2NvbXBsZXRlU2VydmljZSgpO1xuICAgICAgICBsZXQgcXVlcnlJbnB1dDogYW55ID0ge307XG4gICAgICAgIGNvbnN0IHByb21pc2VBcnI6IGFueSA9IFtdO1xuICAgICAgICBpZiAocGFyYW1zLmNvdW50cnlSZXN0cmljdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICBxdWVyeUlucHV0ID0ge1xuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5xdWVyeSxcbiAgICAgICAgICAgIGNvbXBvbmVudFJlc3RyaWN0aW9uczogeyBjb3VudHJ5OiBwYXJhbXMuY291bnRyeVJlc3RyaWN0aW9uIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeUlucHV0ID0ge1xuICAgICAgICAgICAgaW5wdXQ6IHBhcmFtcy5xdWVyeSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJhbXMuZ2VvTG9jYXRpb24pIHtcbiAgICAgICAgICBxdWVyeUlucHV0LmxvY2F0aW9uID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMuTGF0TG5nKHBhcnNlRmxvYXQocGFyYW1zLmdlb0xvY2F0aW9uWzBdKSwgcGFyc2VGbG9hdChwYXJhbXMuZ2VvTG9jYXRpb25bMV0pKTtcbiAgICAgICAgICBxdWVyeUlucHV0LnJhZGl1cyA9IHBhcmFtcy5yYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmFtcy5nZW9UeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcGFyYW1zLmdlb1R5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBfdGVtcFF1ZXJ5OiBhbnkgPSBxdWVyeUlucHV0O1xuICAgICAgICAgICAgX3RlbXBRdWVyeVsndHlwZXMnXSA9IG5ldyBBcnJheShwYXJhbXMuZ2VvVHlwZXNbaV0pO1xuICAgICAgICAgICAgcHJvbWlzZUFyci5wdXNoKHRoaXMuZ2VvUHJlZGljdGlvbkNhbGwocGxhY2VzU2VydmljZSwgX3RlbXBRdWVyeSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9taXNlQXJyLnB1c2godGhpcy5nZW9QcmVkaWN0aW9uQ2FsbChwbGFjZXNTZXJ2aWNlLCBxdWVyeUlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlQXJyKS50aGVuKCh2YWx1ZXMpID0+IHtcbiAgICAgICAgICBjb25zdCB2YWw6IGFueSA9IHZhbHVlcztcbiAgICAgICAgICBpZiAodmFsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCBfdGVtcEFycjogYW55ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdmFsLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmICh2YWxbal0gJiYgdmFsW2pdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIF90ZW1wQXJyID0gX3RlbXBBcnIuY29uY2F0KHZhbFtqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90ZW1wQXJyID0gdGhpcy5nZXRVbmlxdWVSZXN1bHRzKF90ZW1wQXJyKTtcbiAgICAgICAgICAgIHJlc29sdmUoX3RlbXBBcnIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbHVlc1swXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0R2VvUGxhY2VEZXRhaWwocGxhY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICAgIGNvbnN0IF93aW5kb3c6IGFueSA9IHRoaXMuX2dsb2JhbC5uYXRpdmVHbG9iYWw7XG4gICAgICAgIGNvbnN0IHBsYWNlc1NlcnZpY2U6IGFueSA9IG5ldyBfd2luZG93Lmdvb2dsZS5tYXBzLnBsYWNlcy5QbGFjZXNTZXJ2aWNlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgcGxhY2VzU2VydmljZS5nZXREZXRhaWxzKHsgcGxhY2VJZCB9LCAocmVzdWx0OiBhbnksIHN0YXR1czogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCB8fCByZXN1bHQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdldEdlb1BhY2VEZXRhaWxCeVJlZmVyYW5jZShyZXN1bHQucmVmZXJhbmNlKS50aGVuKChyZWZlcmFuY2VEYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCFyZWZlcmFuY2VEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZWZlcmFuY2VEYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBnZXRHZW9QYWNlRGV0YWlsQnlSZWZlcmFuY2UocmVmZXJhbmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgICAgY29uc3QgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICAgICAgY29uc3QgcGxhY2VzU2VydmljZTogYW55ID0gbmV3IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UoKTtcbiAgICAgICAgcGxhY2VzU2VydmljZS5nZXREZXRhaWxzKHsgcmVmZXJlbmNlOiByZWZlcmFuY2UgfSwgKHJlc3VsdDogYW55LCBzdGF0dXM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkUmVjZW50TGlzdChsb2NhbFN0b3JhZ2VOYW1lOiBzdHJpbmcsIHJlc3VsdDogYW55LCBpdGVtU2F2ZWRMZW5ndGg6IG51bWJlcik6IGFueSB7XG4gICAgdGhpcy5nZXRSZWNlbnRMaXN0KGxvY2FsU3RvcmFnZU5hbWUpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZGF0YVtpXS5kZXNjcmlwdGlvbiA9PT0gcmVzdWx0LmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBkYXRhLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhLnVuc2hpZnQocmVzdWx0KTtcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gaXRlbVNhdmVkTGVuZ3RoKSB7XG4gICAgICAgICAgZGF0YS5wb3AoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldEl0ZW0obG9jYWxTdG9yYWdlTmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVjZW50TGlzdChsb2NhbFN0b3JhZ2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlOiBhbnkgPSB0aGlzLl9sb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldEl0ZW0obG9jYWxTdG9yYWdlTmFtZSk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gW107XG4gICAgICB9XG4gICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VW5pcXVlUmVzdWx0cyhhcnI6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYXJyLnJlZHVjZSgobSwgdCkgPT4gbS5zZXQodC5wbGFjZV9pZCwgdCksIG5ldyBNYXAoKSkudmFsdWVzKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW9QcmVkaWN0aW9uQ2FsbChwbGFjZXNTZXJ2aWNlOiBhbnksIHF1ZXJ5SW5wdXQ6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgX3dpbmRvdzogYW55ID0gdGhpcy5fZ2xvYmFsLm5hdGl2ZUdsb2JhbDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VQcmVkaWN0aW9ucyhxdWVyeUlucHV0LCAocmVzdWx0OiBhbnksIHN0YXR1czogYW55KSA9PiB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IF93aW5kb3cuZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2VTdGF0dXMuT0spIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=