/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @enum {number} */
var AppBridgeHandler = {
    HTTP: 0,
    OPEN: 1,
    OPEN_LIST: 2,
    CLOSE: 3,
    REFRESH: 4,
    PIN: 5,
    REGISTER: 6,
    UPDATE: 7,
    REQUEST_DATA: 8,
    CALLBACK: 9,
};
export { AppBridgeHandler };
AppBridgeHandler[AppBridgeHandler.HTTP] = 'HTTP';
AppBridgeHandler[AppBridgeHandler.OPEN] = 'OPEN';
AppBridgeHandler[AppBridgeHandler.OPEN_LIST] = 'OPEN_LIST';
AppBridgeHandler[AppBridgeHandler.CLOSE] = 'CLOSE';
AppBridgeHandler[AppBridgeHandler.REFRESH] = 'REFRESH';
AppBridgeHandler[AppBridgeHandler.PIN] = 'PIN';
AppBridgeHandler[AppBridgeHandler.REGISTER] = 'REGISTER';
AppBridgeHandler[AppBridgeHandler.UPDATE] = 'UPDATE';
AppBridgeHandler[AppBridgeHandler.REQUEST_DATA] = 'REQUEST_DATA';
AppBridgeHandler[AppBridgeHandler.CALLBACK] = 'CALLBACK';
/**
 * @record
 */
export function IAppBridgeOpenEvent() { }
if (false) {
    /** @type {?} */
    IAppBridgeOpenEvent.prototype.type;
    /** @type {?} */
    IAppBridgeOpenEvent.prototype.entityType;
    /** @type {?|undefined} */
    IAppBridgeOpenEvent.prototype.entityId;
    /** @type {?|undefined} */
    IAppBridgeOpenEvent.prototype.tab;
    /** @type {?|undefined} */
    IAppBridgeOpenEvent.prototype.data;
    /** @type {?|undefined} */
    IAppBridgeOpenEvent.prototype.passthrough;
}
/**
 * @record
 */
export function IAppBridgeOpenListEvent() { }
if (false) {
    /** @type {?} */
    IAppBridgeOpenListEvent.prototype.type;
    /** @type {?} */
    IAppBridgeOpenListEvent.prototype.keywords;
    /** @type {?} */
    IAppBridgeOpenListEvent.prototype.criteria;
}
/**
 * @record
 */
export function IAppBridgeRequestDataEvent() { }
if (false) {
    /** @type {?} */
    IAppBridgeRequestDataEvent.prototype.type;
}
/** @type {?} */
var HTTP_VERBS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};
/** @type {?} */
var MESSAGE_TYPES = {
    REGISTER: 'register',
    OPEN: 'open',
    OPEN_LIST: 'openList',
    CLOSE: 'close',
    REFRESH: 'refresh',
    PIN: 'pin',
    UPDATE: 'update',
    HTTP_GET: 'httpGET',
    HTTP_POST: 'httpPOST',
    HTTP_PUT: 'httpPUT',
    HTTP_DELETE: 'httpDELETE',
    CUSTOM_EVENT: 'customEvent',
    REQUEST_DATA: 'requestData',
    CALLBACK: 'callback',
};
var AppBridgeService = /** @class */ (function () {
    function AppBridgeService() {
    }
    /**
     * @param {?} name
     * @return {?}
     */
    AppBridgeService.prototype.create = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return new AppBridge(name);
    };
    return AppBridgeService;
}());
export { AppBridgeService };
var DevAppBridgeService = /** @class */ (function () {
    function DevAppBridgeService(http) {
        this.http = http;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    DevAppBridgeService.prototype.create = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return new DevAppBridge(name, this.http);
    };
    return DevAppBridgeService;
}());
export { DevAppBridgeService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DevAppBridgeService.prototype.http;
}
var AppBridge = /** @class */ (function () {
    // Type?
    function AppBridge(traceName) {
        if (traceName === void 0) { traceName = 'AppBridge'; }
        this.id = "" + Date.now();
        this._registeredFrames = [];
        this._handlers = {};
        this._tracing = false;
        this._eventListeners = {};
        this.traceName = traceName;
        if (postRobot) {
            postRobot.CONFIG.LOG_LEVEL = 'error';
            try {
                this._setupHandlers();
            }
            catch (error) {
                // No op
            }
        }
    }
    Object.defineProperty(AppBridge.prototype, "tracing", {
        set: /**
         * @param {?} tracing
         * @return {?}
         */
        function (tracing) {
            this._tracing = tracing;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} type
     * @param {?} handler
     * @return {?}
     */
    AppBridge.prototype.handle = /**
     * @param {?} type
     * @param {?} handler
     * @return {?}
     */
    function (type, handler) {
        this._handlers[type] = handler;
    };
    /**
     * @private
     * @param {?} eventType
     * @param {?} event
     * @return {?}
     */
    AppBridge.prototype._trace = /**
     * @private
     * @param {?} eventType
     * @param {?} event
     * @return {?}
     */
    function (eventType, event) {
        if (this._tracing) {
            console.log("[" + (this.traceName || this.id) + "] \"" + eventType + "\"", event); // tslint:disable-line
        }
    };
    /**
     * @protected
     * @return {?}
     */
    AppBridge.prototype._setupHandlers = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        // Register
        postRobot.on(MESSAGE_TYPES.REGISTER, function (event) {
            _this._trace(MESSAGE_TYPES.REGISTER, event);
            _this._registeredFrames.push(event);
            return _this.register(event.data).then(function (windowName) {
                return { windowName: windowName };
            });
        });
        // Update
        postRobot.on(MESSAGE_TYPES.UPDATE, function (event) {
            _this._trace(MESSAGE_TYPES.UPDATE, event);
            return _this.update(event.data).then(function (success) {
                return { success: success };
            });
        });
        // Open
        postRobot.on(MESSAGE_TYPES.OPEN, function (event) {
            _this._trace(MESSAGE_TYPES.OPEN, event);
            return _this.open(event.data).then(function (success) {
                return { success: success };
            });
        });
        postRobot.on(MESSAGE_TYPES.OPEN_LIST, function (event) {
            _this._trace(MESSAGE_TYPES.OPEN_LIST, event);
            return _this.openList(event.data).then(function (success) {
                return { success: success };
            });
        });
        // Close
        postRobot.on(MESSAGE_TYPES.CLOSE, function (event) {
            _this._trace(MESSAGE_TYPES.CLOSE, event);
            /** @type {?} */
            var index = _this._registeredFrames.findIndex(function (frame) { return frame.data.id === event.data.id; });
            if (index !== -1) {
                _this._registeredFrames.splice(index, 1);
            }
            return _this.close(event.data).then(function (success) {
                return { success: success };
            });
        });
        // Refresh
        postRobot.on(MESSAGE_TYPES.REFRESH, function (event) {
            _this._trace(MESSAGE_TYPES.REFRESH, event);
            return _this.refresh(event.data).then(function (success) {
                return { success: success };
            });
        });
        // PIN
        postRobot.on(MESSAGE_TYPES.PIN, function (event) {
            _this._trace(MESSAGE_TYPES.PIN, event);
            return _this.pin(event.data).then(function (success) {
                return { success: success };
            });
        });
        // REQUEST_DATA
        postRobot.on(MESSAGE_TYPES.REQUEST_DATA, function (event) {
            _this._trace(MESSAGE_TYPES.REQUEST_DATA, event);
            return _this.requestData(event.data).then(function (result) {
                return { data: result.data, error: result.error };
            });
        });
        // CALLBACKS
        postRobot.on(MESSAGE_TYPES.CALLBACK, function (event) {
            _this._trace(MESSAGE_TYPES.CALLBACK, event);
            return _this.callback(event.data).then(function (success) {
                return { success: success };
            });
        });
        // HTTP-GET
        postRobot.on(MESSAGE_TYPES.HTTP_GET, function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_GET, event);
            return _this.httpGET(event.data.relativeURL).then(function (result) {
                return { data: result.data, error: result.error };
            });
        });
        // HTTP-POST
        postRobot.on(MESSAGE_TYPES.HTTP_POST, function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_POST, event);
            return _this.httpPOST(event.data.relativeURL, event.data.data).then(function (result) {
                return { data: result.data, error: result.error };
            });
        });
        // HTTP-PUT
        postRobot.on(MESSAGE_TYPES.HTTP_PUT, function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_PUT, event);
            return _this.httpPUT(event.data.relativeURL, event.data.data).then(function (result) {
                return { data: result.data, error: result.error };
            });
        });
        // HTTP-DELETE
        postRobot.on(MESSAGE_TYPES.HTTP_DELETE, function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_DELETE, event);
            return _this.httpDELETE(event.data.relativeURL).then(function (result) {
                return { data: result.data, error: result.error };
            });
        });
        // Custom Events
        postRobot.on(MESSAGE_TYPES.CUSTOM_EVENT, function (event) {
            _this._trace(MESSAGE_TYPES.CUSTOM_EVENT, event);
            if (_this._eventListeners[event.data.event]) {
                _this._eventListeners[event.data.event].forEach(function (listener) {
                    listener(event.data.data);
                });
            }
            if (_this._registeredFrames.length > 0) {
                _this._registeredFrames.forEach(function (frame) {
                    postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, event.data);
                });
            }
        });
    };
    /**
     * Fires or responds to an open event
     * @param packet any - packet of data to send with the open event
     */
    /**
     * Fires or responds to an open event
     * @param {?} packet any - packet of data to send with the open event
     * @return {?}
     */
    AppBridge.prototype.open = /**
     * Fires or responds to an open event
     * @param {?} packet any - packet of data to send with the open event
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.OPEN]) {
                _this._handlers[AppBridgeHandler.OPEN](packet, function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN, packet)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.OPEN + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires or responds to an openList event
     * @param packet any - packet of data to send with the open event
     */
    /**
     * Fires or responds to an openList event
     * @param {?} packet any - packet of data to send with the open event
     * @return {?}
     */
    AppBridge.prototype.openList = /**
     * Fires or responds to an openList event
     * @param {?} packet any - packet of data to send with the open event
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.OPEN_LIST]) {
                _this._handlers[AppBridgeHandler.OPEN_LIST](packet, function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                /** @type {?} */
                var openListPacket = {};
                Object.assign(openListPacket, { type: 'List', entityType: packet.type, keywords: packet.keywords, criteria: packet.criteria });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN_LIST, packet)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.OPEN_LIST + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires or responds to an close event
     * @param packet any - packet of data to send with the close event
     */
    /**
     * Fires or responds to an close event
     * @param {?} packet any - packet of data to send with the close event
     * @return {?}
     */
    AppBridge.prototype.update = /**
     * Fires or responds to an close event
     * @param {?} packet any - packet of data to send with the close event
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.UPDATE]) {
                _this._handlers[AppBridgeHandler.UPDATE](packet, function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.UPDATE, packet)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.UPDATE + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires or responds to an close event
     */
    /**
     * Fires or responds to an close event
     * @param {?=} packet
     * @return {?}
     */
    AppBridge.prototype.close = /**
     * Fires or responds to an close event
     * @param {?=} packet
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.CLOSE]) {
                _this._handlers[AppBridgeHandler.CLOSE](packet, function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                if (packet) {
                    console.info('[AppBridge] - close(packet) is deprecated! Please just use close()!'); // tslint:disable-line
                }
                /** @type {?} */
                var realPacket = { id: _this.id, windowName: _this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.CLOSE, realPacket)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.CLOSE + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires or responds to an close event
     */
    /**
     * Fires or responds to an close event
     * @param {?=} packet
     * @return {?}
     */
    AppBridge.prototype.refresh = /**
     * Fires or responds to an close event
     * @param {?=} packet
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.REFRESH]) {
                _this._handlers[AppBridgeHandler.REFRESH](packet, function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                if (packet) {
                    console.info('[AppBridge] - refresh(packet) is deprecated! Please just use refresh()!'); // tslint:disable-line
                }
                /** @type {?} */
                var realPacket = { id: _this.id, windowName: _this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.REFRESH, realPacket)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.REFRESH + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires or responds to a pin event
     */
    /**
     * Fires or responds to a pin event
     * @param {?=} packet
     * @return {?}
     */
    AppBridge.prototype.pin = /**
     * Fires or responds to a pin event
     * @param {?=} packet
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.PIN]) {
                _this._handlers[AppBridgeHandler.PIN](packet, function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                if (packet) {
                    console.info('[AppBridge] - pin(packet) is deprecated! Please just use pin()!'); // tslint:disable-line
                }
                /** @type {?} */
                var realPacket = { id: _this.id, windowName: _this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.PIN, realPacket)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.PIN + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires or responds to a requestData event
     * @param packet any - packet of data to send with the requestData event
     */
    /**
     * Fires or responds to a requestData event
     * @param {?} packet any - packet of data to send with the requestData event
     * @return {?}
     */
    AppBridge.prototype.requestData = /**
     * Fires or responds to a requestData event
     * @param {?} packet any - packet of data to send with the requestData event
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.REQUEST_DATA]) {
                _this._handlers[AppBridgeHandler.REQUEST_DATA](packet, function (data) {
                    if (data) {
                        resolve({ data: data });
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REQUEST_DATA, packet)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.REQUEST_DATA + " (callback)", event);
                    if (event.data) {
                        resolve({ data: event.data.data });
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires a generic callback command
     * @param packet string - key: string, generic: boolean
     */
    /**
     * Fires a generic callback command
     * @param {?} packet string - key: string, generic: boolean
     * @return {?}
     */
    AppBridge.prototype.callback = /**
     * Fires a generic callback command
     * @param {?} packet string - key: string, generic: boolean
     * @return {?}
     */
    function (packet) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.CALLBACK]) {
                _this._handlers[AppBridgeHandler.CALLBACK](packet, function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.CALLBACK, packet)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.CALLBACK + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch(function (err) {
                    reject(false);
                });
            }
        });
    };
    /**
     * Fires or responds to an register event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an register event
     * @param {?=} packet any - packet of data to send with the event
     * @return {?}
     */
    AppBridge.prototype.register = /**
     * Fires or responds to an register event
     * @param {?=} packet any - packet of data to send with the event
     * @return {?}
     */
    function (packet) {
        var _this = this;
        if (packet === void 0) { packet = {}; }
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.REGISTER]) {
                _this._handlers[AppBridgeHandler.REGISTER](packet, function (windowName) {
                    if (windowName) {
                        resolve(windowName);
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                Object.assign(packet, { id: _this.id });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REGISTER, packet)
                    .then(function (event) {
                    _this._trace(MESSAGE_TYPES.REGISTER + " (callback)", event);
                    if (event.data) {
                        _this.windowName = event.data.windowName;
                        resolve(event.data.windowName);
                    }
                    else {
                        resolve(null);
                    }
                })
                    .catch(function (err) {
                    _this._trace(MESSAGE_TYPES.REGISTER + " - FAILED - (no parent)", err);
                    resolve(null);
                });
            }
        });
    };
    /**
     * Fires or responds to an HTTP_GET event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_GET event
     * @param {?} relativeURL
     * @return {?}
     */
    AppBridge.prototype.httpGET = /**
     * Fires or responds to an HTTP_GET event
     * @param {?} relativeURL
     * @return {?}
     */
    function (relativeURL) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.GET, relativeURL: relativeURL }, function (data, error) {
                    resolve({ data: data, error: error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_GET, { relativeURL: relativeURL })
                    .then(function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch(function (err) {
                    reject(null);
                });
            }
        });
    };
    /**
     * Fires or responds to an HTTP_POST event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_POST event
     * @param {?} relativeURL
     * @param {?} postData
     * @return {?}
     */
    AppBridge.prototype.httpPOST = /**
     * Fires or responds to an HTTP_POST event
     * @param {?} relativeURL
     * @param {?} postData
     * @return {?}
     */
    function (relativeURL, postData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.POST, relativeURL: relativeURL, data: postData }, function (data, error) {
                    resolve({ data: data, error: error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_POST, { relativeURL: relativeURL, data: postData })
                    .then(function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch(function (err) {
                    reject(null);
                });
            }
        });
    };
    /**
     * Fires or responds to an HTTP_PUT event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_PUT event
     * @param {?} relativeURL
     * @param {?} putData
     * @return {?}
     */
    AppBridge.prototype.httpPUT = /**
     * Fires or responds to an HTTP_PUT event
     * @param {?} relativeURL
     * @param {?} putData
     * @return {?}
     */
    function (relativeURL, putData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.PUT, relativeURL: relativeURL, data: putData }, function (data, error) {
                    resolve({ data: data, error: error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_PUT, { relativeURL: relativeURL, data: putData })
                    .then(function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch(function (err) {
                    reject(null);
                });
            }
        });
    };
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param {?} relativeURL
     * @return {?}
     */
    AppBridge.prototype.httpDELETE = /**
     * Fires or responds to an HTTP_DELETE event
     * @param {?} relativeURL
     * @return {?}
     */
    function (relativeURL) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.DELETE, relativeURL: relativeURL }, function (data, error) {
                    resolve({ data: data, error: error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_DELETE, { relativeURL: relativeURL })
                    .then(function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch(function (err) {
                    reject(null);
                });
            }
        });
    };
    /**
     * Fires a custom event to anywhere in the application
     * @param event string - event name to fire
     * @param data any - data to be sent along with the event
     */
    /**
     * Fires a custom event to anywhere in the application
     * @param {?} event string - event name to fire
     * @param {?} data any - data to be sent along with the event
     * @return {?}
     */
    AppBridge.prototype.fireEvent = /**
     * Fires a custom event to anywhere in the application
     * @param {?} event string - event name to fire
     * @param {?} data any - data to be sent along with the event
     * @return {?}
     */
    function (event, data) {
        return new Promise(function (resolve, reject) {
            postRobot
                .sendToParent(MESSAGE_TYPES.CUSTOM_EVENT, { event: event, data: data })
                .then(function (e) {
                resolve(e);
            })
                .catch(function (err) {
                reject(null);
            });
        });
    };
    /**
     * Fires a custom event to all registered frames
     * @param event string - event name to fire
     * @param data any - data to be sent along with the event
     */
    /**
     * Fires a custom event to all registered frames
     * @param {?} event string - event name to fire
     * @param {?} data any - data to be sent along with the event
     * @return {?}
     */
    AppBridge.prototype.fireEventToChildren = /**
     * Fires a custom event to all registered frames
     * @param {?} event string - event name to fire
     * @param {?} data any - data to be sent along with the event
     * @return {?}
     */
    function (event, data) {
        if (this._registeredFrames.length > 0) {
            this._registeredFrames.forEach(function (frame) {
                postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, {
                    eventType: event,
                    data: data,
                });
            });
        }
    };
    /**
     * Adds an event listener to a custom event
     * @param event string - event name to listen to
     * @param callback function - callback to be fired when an event is caught
     */
    /**
     * Adds an event listener to a custom event
     * @param {?} event string - event name to listen to
     * @param {?} callback function - callback to be fired when an event is caught
     * @return {?}
     */
    AppBridge.prototype.addEventListener = /**
     * Adds an event listener to a custom event
     * @param {?} event string - event name to listen to
     * @param {?} callback function - callback to be fired when an event is caught
     * @return {?}
     */
    function (event, callback) {
        if (!this._eventListeners[event]) {
            this._eventListeners[event] = [];
        }
        this._eventListeners[event].push(callback);
    };
    return AppBridge;
}());
export { AppBridge };
if (false) {
    /** @type {?} */
    AppBridge.prototype.id;
    /** @type {?} */
    AppBridge.prototype.traceName;
    /** @type {?} */
    AppBridge.prototype.windowName;
    /**
     * @type {?}
     * @private
     */
    AppBridge.prototype._registeredFrames;
    /**
     * @type {?}
     * @private
     */
    AppBridge.prototype._handlers;
    /**
     * @type {?}
     * @private
     */
    AppBridge.prototype._tracing;
    /**
     * @type {?}
     * @private
     */
    AppBridge.prototype._eventListeners;
}
var DevAppBridge = /** @class */ (function (_super) {
    tslib_1.__extends(DevAppBridge, _super);
    function DevAppBridge(traceName, http) {
        if (traceName === void 0) { traceName = 'DevAppBridge'; }
        var _this = _super.call(this, traceName) || this;
        _this.http = http;
        /** @type {?} */
        var cookie = _this.getCookie('UlEncodedIdentity');
        if (cookie && cookie.length) {
            /** @type {?} */
            var identity = JSON.parse(decodeURIComponent(cookie));
            /** @type {?} */
            var endpoints = identity.sessions.reduce(function (obj, session) {
                obj[session.name] = session.value.endpoint;
                return obj;
            }, {});
            _this.baseURL = endpoints.rest;
        }
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    DevAppBridge.prototype._setupHandlers = /**
     * @protected
     * @return {?}
     */
    function () { };
    /**
     * Fires or responds to an HTTP_GET event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_GET event
     * @param {?} relativeURL
     * @return {?}
     */
    DevAppBridge.prototype.httpGET = /**
     * Fires or responds to an HTTP_GET event
     * @param {?} relativeURL
     * @return {?}
     */
    function (relativeURL) {
        return this.http.get(this.baseURL + "/" + relativeURL, { withCredentials: true }).toPromise();
    };
    /**
     * Fires or responds to an HTTP_POST event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_POST event
     * @param {?} relativeURL
     * @param {?} postData
     * @return {?}
     */
    DevAppBridge.prototype.httpPOST = /**
     * Fires or responds to an HTTP_POST event
     * @param {?} relativeURL
     * @param {?} postData
     * @return {?}
     */
    function (relativeURL, postData) {
        return this.http.post(this.baseURL + "/" + relativeURL, postData, { withCredentials: true }).toPromise();
    };
    /**
     * Fires or responds to an HTTP_PUT event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_PUT event
     * @param {?} relativeURL
     * @param {?} putData
     * @return {?}
     */
    DevAppBridge.prototype.httpPUT = /**
     * Fires or responds to an HTTP_PUT event
     * @param {?} relativeURL
     * @param {?} putData
     * @return {?}
     */
    function (relativeURL, putData) {
        return this.http.put(this.baseURL + "/" + relativeURL, putData, { withCredentials: true }).toPromise();
    };
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param packet any - packet of data to send with the event
     */
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param {?} relativeURL
     * @return {?}
     */
    DevAppBridge.prototype.httpDELETE = /**
     * Fires or responds to an HTTP_DELETE event
     * @param {?} relativeURL
     * @return {?}
     */
    function (relativeURL) {
        return this.http.delete(this.baseURL + "/" + relativeURL, { withCredentials: true }).toPromise();
    };
    /**
     * @private
     * @param {?} cname
     * @return {?}
     */
    DevAppBridge.prototype.getCookie = /**
     * @private
     * @param {?} cname
     * @return {?}
     */
    function (cname) {
        if (document) {
            /** @type {?} */
            var name_1 = cname + "=";
            /** @type {?} */
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                /** @type {?} */
                var c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name_1) === 0) {
                    return c.substring(name_1.length, c.length);
                }
            }
        }
        return false;
    };
    return DevAppBridge;
}(AppBridge));
export { DevAppBridge };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DevAppBridge.prototype.baseURL;
    /**
     * @type {?}
     * @private
     */
    DevAppBridge.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQnJpZGdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFJRSxPQUFJO0lBQ0osT0FBSTtJQUNKLFlBQVM7SUFDVCxRQUFLO0lBQ0wsVUFBTztJQUNQLE1BQUc7SUFDSCxXQUFRO0lBQ1IsU0FBTTtJQUNOLGVBQVk7SUFDWixXQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FBS1YseUNBT0M7OztJQU5DLG1DQUFlOztJQUNmLHlDQUFtQjs7SUFDbkIsdUNBQWtCOztJQUNsQixrQ0FBYTs7SUFDYixtQ0FBVzs7SUFDWCwwQ0FBcUI7Ozs7O0FBY3ZCLDZDQUlDOzs7SUFIQyx1Q0FBa0I7O0lBQ2xCLDJDQUF3Qjs7SUFDeEIsMkNBQWM7Ozs7O0FBS2hCLGdEQUVDOzs7SUFEQywwQ0FBbUI7OztJQUdmLFVBQVUsR0FBRztJQUNqQixHQUFHLEVBQUUsS0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixNQUFNLEVBQUUsUUFBUTtDQUNqQjs7SUFFSyxhQUFhLEdBQUc7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsSUFBSSxFQUFFLE1BQU07SUFDWixTQUFTLEVBQUUsVUFBVTtJQUNyQixLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsU0FBUyxFQUFFLFVBQVU7SUFDckIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsV0FBVyxFQUFFLFlBQVk7SUFDekIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsWUFBWSxFQUFFLGFBQWE7SUFDM0IsUUFBUSxFQUFFLFVBQVU7Q0FDckI7QUFJRDtJQUFBO0lBSUEsQ0FBQzs7Ozs7SUFIQyxpQ0FBTTs7OztJQUFOLFVBQU8s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QUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuRyxDQUFDOzs7Ozs7SUFFTyxnQ0FBUzs7Ozs7SUFBakIsVUFBa0IsS0FBYTtRQUM3QixJQUFJLFFBQVEsRUFBRTs7Z0JBQ1IsTUFBSSxHQUFNLEtBQUssTUFBRzs7Z0JBQ2xCLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUM5QixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFqRUQsQ0FBa0MsU0FBUyxHQWlFMUM7Ozs7Ozs7SUFoRUMsK0JBQXdCOzs7OztJQUV3Qiw0QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBlbnVtIEFwcEJyaWRnZUhhbmRsZXIge1xuICBIVFRQLFxuICBPUEVOLFxuICBPUEVOX0xJU1QsXG4gIENMT1NFLFxuICBSRUZSRVNILFxuICBQSU4sXG4gIFJFR0lTVEVSLFxuICBVUERBVEUsXG4gIFJFUVVFU1RfREFUQSxcbiAgQ0FMTEJBQ0ssXG59XG5cbmV4cG9ydCB0eXBlIE5vdm9BcHBzID0gJ3JlY29yZCcgfCAnYWRkJyB8ICdmYXN0LWFkZCcgfCAnY3VzdG9tJztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQnJpZGdlT3BlbkV2ZW50IHtcbiAgdHlwZTogTm92b0FwcHM7XG4gIGVudGl0eVR5cGU6IHN0cmluZztcbiAgZW50aXR5SWQ/OiBzdHJpbmc7XG4gIHRhYj86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbiAgcGFzc3Rocm91Z2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE1vc2FpY0xpc3RzID1cbiAgfCAnQ2FuZGlkYXRlJ1xuICB8ICdDbGllbnRDb250YWN0J1xuICB8ICdDbGllbnRDb3Jwb3JhdGlvbidcbiAgfCAnSm9iT3JkZXInXG4gIHwgJ0pvYlN1Ym1pc3Npb24nXG4gIHwgJ0pvYlBvc3RpbmcnXG4gIHwgJ1BsYWNlbWVudCdcbiAgfCAnTGVhZCdcbiAgfCAnT3Bwb3J0dW5pdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCcmlkZ2VPcGVuTGlzdEV2ZW50IHtcbiAgdHlwZTogTW9zYWljTGlzdHM7XG4gIGtleXdvcmRzOiBBcnJheTxzdHJpbmc+O1xuICBjcml0ZXJpYTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBOb3ZvRGF0YVR5cGUgPSAnZW50aXRsZW1lbnRzJyB8ICdzZXR0aW5ncycgfCAndXNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJyaWRnZVJlcXVlc3REYXRhRXZlbnQge1xuICB0eXBlOiBOb3ZvRGF0YVR5cGU7XG59XG5cbmNvbnN0IEhUVFBfVkVSQlMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJyxcbn07XG5cbmNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gIFJFR0lTVEVSOiAncmVnaXN0ZXInLFxuICBPUEVOOiAnb3BlbicsXG4gIE9QRU5fTElTVDogJ29wZW5MaXN0JyxcbiAgQ0xPU0U6ICdjbG9zZScsXG4gIFJFRlJFU0g6ICdyZWZyZXNoJyxcbiAgUElOOiAncGluJyxcbiAgVVBEQVRFOiAndXBkYXRlJyxcbiAgSFRUUF9HRVQ6ICdodHRwR0VUJyxcbiAgSFRUUF9QT1NUOiAnaHR0cFBPU1QnLFxuICBIVFRQX1BVVDogJ2h0dHBQVVQnLFxuICBIVFRQX0RFTEVURTogJ2h0dHBERUxFVEUnLFxuICBDVVNUT01fRVZFTlQ6ICdjdXN0b21FdmVudCcsXG4gIFJFUVVFU1RfREFUQTogJ3JlcXVlc3REYXRhJyxcbiAgQ0FMTEJBQ0s6ICdjYWxsYmFjaycsXG59O1xuXG5kZWNsYXJlIGNvbnN0IHBvc3RSb2JvdDogYW55O1xuXG5leHBvcnQgY2xhc3MgQXBwQnJpZGdlU2VydmljZSB7XG4gIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFwcEJyaWRnZShuYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2QXBwQnJpZGdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgY3JlYXRlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGV2QXBwQnJpZGdlKG5hbWUsIHRoaXMuaHR0cCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcEJyaWRnZSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nID0gYCR7RGF0ZS5ub3coKX1gO1xuICBwdWJsaWMgdHJhY2VOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyB3aW5kb3dOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJlZEZyYW1lczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfaGFuZGxlcnMgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhY2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogYW55ID0ge307XG5cbiAgLy8gVHlwZT9cbiAgY29uc3RydWN0b3IodHJhY2VOYW1lOiBzdHJpbmcgPSAnQXBwQnJpZGdlJykge1xuICAgIHRoaXMudHJhY2VOYW1lID0gdHJhY2VOYW1lO1xuICAgIGlmIChwb3N0Um9ib3QpIHtcbiAgICAgIHBvc3RSb2JvdC5DT05GSUcuTE9HX0xFVkVMID0gJ2Vycm9yJztcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3NldHVwSGFuZGxlcnMoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0IHRyYWNpbmcodHJhY2luZzogYm9vbGVhbikge1xuICAgIHRoaXMuX3RyYWNpbmcgPSB0cmFjaW5nO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZSh0eXBlOiBBcHBCcmlkZ2VIYW5kbGVyLCBoYW5kbGVyOiBGdW5jdGlvbikge1xuICAgIHRoaXMuX2hhbmRsZXJzW3R5cGVdID0gaGFuZGxlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYWNlKGV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fdHJhY2luZykge1xuICAgICAgY29uc29sZS5sb2coYFske3RoaXMudHJhY2VOYW1lIHx8IHRoaXMuaWR9XSBcIiR7ZXZlbnRUeXBlfVwiYCwgZXZlbnQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXR1cEhhbmRsZXJzKCk6IHZvaWQge1xuICAgIC8vIFJlZ2lzdGVyXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUkVHSVNURVIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUdJU1RFUiwgZXZlbnQpO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5wdXNoKGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKGV2ZW50LmRhdGEpLnRoZW4oKHdpbmRvd05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2luZG93TmFtZSB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gVXBkYXRlXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBPcGVuXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuT1BFTiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLk9QRU4sIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5MaXN0KGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ2xvc2VcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DTE9TRSwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkNMT1NFLCBldmVudCk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuZmluZEluZGV4KChmcmFtZSkgPT4gZnJhbWUuZGF0YS5pZCA9PT0gZXZlbnQuZGF0YS5pZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNsb3NlKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUmVmcmVzaFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUZSRVNILCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUElOXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUElOLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuUElOLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5waW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBSRVFVRVNUX0RBVEFcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3REYXRhKGV2ZW50LmRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ0FMTEJBQ0tTXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuQ0FMTEJBQ0ssIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2soZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLUdFVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfR0VULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9HRVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBHRVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBPU1RcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQT1NUKGV2ZW50LmRhdGEucmVsYXRpdmVVUkwsIGV2ZW50LmRhdGEuZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBVVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfUFVULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQVVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCwgZXZlbnQuZGF0YS5kYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEhUVFAtREVMRVRFXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuSFRUUF9ERUxFVEUsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX0RFTEVURSwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cERFTEVURShldmVudC5kYXRhLnJlbGF0aXZlVVJMKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEN1c3RvbSBFdmVudHNcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XSkge1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGxpc3RlbmVyKGV2ZW50LmRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgICAgcG9zdFJvYm90LnNlbmQoZnJhbWUuc291cmNlLCBNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIG9wZW4gZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuKHBhY2tldDogSUFwcEJyaWRnZU9wZW5FdmVudCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5dKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU4sIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuT1BFTn0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gb3Blbkxpc3QgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuTGlzdChwYWNrZXQ6IFBhcnRpYWw8SUFwcEJyaWRnZU9wZW5MaXN0RXZlbnQ+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5fTElTVF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOX0xJU1RdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9wZW5MaXN0UGFja2V0ID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3Blbkxpc3RQYWNrZXQsIHsgdHlwZTogJ0xpc3QnLCBlbnRpdHlUeXBlOiBwYWNrZXQudHlwZSwga2V5d29yZHM6IHBhY2tldC5rZXl3b3JkcywgY3JpdGVyaWE6IHBhY2tldC5jcml0ZXJpYSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU5fTElTVCwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5PUEVOX0xJU1R9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIGNsb3NlIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShcbiAgICBwYWNrZXQ6IFBhcnRpYWw8eyBlbnRpdHlUeXBlOiBzdHJpbmc7IGVudGl0eUlkOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHRpdGxlS2V5OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5VUERBVEVdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuVVBEQVRFXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5VUERBVEUsIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuVVBEQVRFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIGNsb3NlKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIGNsb3NlKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIGNsb3NlKCkhJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVhbFBhY2tldCA9IHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9O1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuQ0xPU0UsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLkNMT1NFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlZnJlc2gocGFja2V0Pzogb2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFRlJFU0hdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVGUkVTSF0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIHJlZnJlc2gocGFja2V0KSBpcyBkZXByZWNhdGVkISBQbGVhc2UganVzdCB1c2UgcmVmcmVzaCgpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFRlJFU0h9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGEgcGluIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcGluKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5QSU5dKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUElOXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ1tBcHBCcmlkZ2VdIC0gcGluKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIHBpbigpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlBJTiwgcmVhbFBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUElOfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhIHJlcXVlc3REYXRhIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0RGF0YSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlcXVlc3REYXRhKHBhY2tldDogeyB0eXBlOiBzdHJpbmcgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVRVUVTVF9EQVRBXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFUVVFU1RfREFUQV0ocGFja2V0LCAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuUkVRVUVTVF9EQVRBLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFUVVFU1RfREFUQX0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBnZW5lcmljIGNhbGxiYWNrIGNvbW1hbmRcbiAgICogQHBhcmFtIHBhY2tldCBzdHJpbmcgLSBrZXk6IHN0cmluZywgZ2VuZXJpYzogYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbGxiYWNrKHBhY2tldDogeyBrZXk6IHN0cmluZzsgZ2VuZXJpYzogYm9vbGVhbjsgb3B0aW9uczogb2JqZWN0IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5DQUxMQkFDS30gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gcmVnaXN0ZXIgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIocGFja2V0OiBQYXJ0aWFsPHsgdGl0bGU6IHN0cmluZzsgdXJsOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4gPSB7fSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKHBhY2tldCwgKHdpbmRvd05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3dOYW1lKSB7XG4gICAgICAgICAgICByZXNvbHZlKHdpbmRvd05hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFR0lTVEVSLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFR0lTVEVSfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy53aW5kb3dOYW1lID0gZXZlbnQuZGF0YS53aW5kb3dOYW1lO1xuICAgICAgICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEud2luZG93TmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUkVHSVNURVJ9IC0gRkFJTEVEIC0gKG5vIHBhcmVudClgLCBlcnIpO1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0dFVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwR0VUKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oeyB2ZXJiOiBIVFRQX1ZFUkJTLkdFVCwgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMIH0sIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfR0VULCB7IHJlbGF0aXZlVVJMIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BPU1QgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cFBPU1QocmVsYXRpdmVVUkw6IHN0cmluZywgcG9zdERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXShcbiAgICAgICAgICB7IHZlcmI6IEhUVFBfVkVSQlMuUE9TVCwgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMLCBkYXRhOiBwb3N0RGF0YSB9LFxuICAgICAgICAgIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBlcnJvciB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfUE9TVCwgeyByZWxhdGl2ZVVSTDogcmVsYXRpdmVVUkwsIGRhdGE6IHBvc3REYXRhIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BVVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUFVUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHB1dERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXShcbiAgICAgICAgICB7IHZlcmI6IEhUVFBfVkVSQlMuUFVULCByZWxhdGl2ZVVSTDogcmVsYXRpdmVVUkwsIGRhdGE6IHB1dERhdGEgfSxcbiAgICAgICAgICAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX1BVVCwgeyByZWxhdGl2ZVVSTDogcmVsYXRpdmVVUkwsIGRhdGE6IHB1dERhdGEgfSlcbiAgICAgICAgICAudGhlbigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSwgZXJyb3I6IGV2ZW50LmRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfREVMRVRFIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBERUxFVEUocmVsYXRpdmVVUkw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSh7IHZlcmI6IEhUVFBfVkVSQlMuREVMRVRFLCByZWxhdGl2ZVVSTDogcmVsYXRpdmVVUkwgfSwgKGRhdGE6IGFueSwgZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBlcnJvciB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuSFRUUF9ERUxFVEUsIHsgcmVsYXRpdmVVUkwgfSlcbiAgICAgICAgICAudGhlbigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSwgZXJyb3I6IGV2ZW50LmRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3VzdG9tIGV2ZW50IHRvIGFueXdoZXJlIGluIHRoZSBhcHBsaWNhdGlvblxuICAgKiBAcGFyYW0gZXZlbnQgc3RyaW5nIC0gZXZlbnQgbmFtZSB0byBmaXJlXG4gICAqIEBwYXJhbSBkYXRhIGFueSAtIGRhdGEgdG8gYmUgc2VudCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGZpcmVFdmVudChldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBvc3RSb2JvdFxuICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuQ1VTVE9NX0VWRU5ULCB7IGV2ZW50LCBkYXRhIH0pXG4gICAgICAgIC50aGVuKChlOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGUpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjdXN0b20gZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgZnJhbWVzXG4gICAqIEBwYXJhbSBldmVudCBzdHJpbmcgLSBldmVudCBuYW1lIHRvIGZpcmVcbiAgICogQHBhcmFtIGRhdGEgYW55IC0gZGF0YSB0byBiZSBzZW50IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgZmlyZUV2ZW50VG9DaGlsZHJlbihldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIHBvc3RSb2JvdC5zZW5kKGZyYW1lLnNvdXJjZSwgTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIHtcbiAgICAgICAgICBldmVudFR5cGU6IGV2ZW50LFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBjdXN0b20gZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50IHN0cmluZyAtIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayBmdW5jdGlvbiAtIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gYW4gZXZlbnQgaXMgY2F1Z2h0XG4gICAqL1xuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2QXBwQnJpZGdlIGV4dGVuZHMgQXBwQnJpZGdlIHtcbiAgcHJpdmF0ZSBiYXNlVVJMOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHJhY2VOYW1lOiBzdHJpbmcgPSAnRGV2QXBwQnJpZGdlJywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIodHJhY2VOYW1lKTtcbiAgICBsZXQgY29va2llID0gdGhpcy5nZXRDb29raWUoJ1VsRW5jb2RlZElkZW50aXR5Jyk7XG4gICAgaWYgKGNvb2tpZSAmJiBjb29raWUubGVuZ3RoKSB7XG4gICAgICBsZXQgaWRlbnRpdHkgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChjb29raWUpKTtcbiAgICAgIGxldCBlbmRwb2ludHMgPSBpZGVudGl0eS5zZXNzaW9ucy5yZWR1Y2UoKG9iaiwgc2Vzc2lvbikgPT4ge1xuICAgICAgICBvYmpbc2Vzc2lvbi5uYW1lXSA9IHNlc3Npb24udmFsdWUuZW5kcG9pbnQ7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9LCB7fSk7XG4gICAgICB0aGlzLmJhc2VVUkwgPSBlbmRwb2ludHMucmVzdDtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9zZXR1cEhhbmRsZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9HRVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cEdFVChyZWxhdGl2ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QT1NUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQT1NUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHBvc3REYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgcG9zdERhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfUFVUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQVVQocmVsYXRpdmVVUkw6IHN0cmluZywgcHV0RGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgcHV0RGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9ERUxFVEUgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cERFTEVURShyZWxhdGl2ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvb2tpZShjbmFtZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgIGxldCBuYW1lID0gYCR7Y25hbWV9PWA7XG4gICAgICBsZXQgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19