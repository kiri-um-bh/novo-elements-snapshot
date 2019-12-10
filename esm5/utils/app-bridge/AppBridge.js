/**
 * @fileoverview added by tsickle
 * Generated from: utils/app-bridge/AppBridge.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        postRobot.on(MESSAGE_TYPES.REGISTER, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.REGISTER, event);
            _this._registeredFrames.push(event);
            return _this.register(event.data).then((/**
             * @param {?} windowName
             * @return {?}
             */
            function (windowName) {
                return { windowName: windowName };
            }));
        }));
        // Update
        postRobot.on(MESSAGE_TYPES.UPDATE, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.UPDATE, event);
            return _this.update(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                return { success: success };
            }));
        }));
        // Open
        postRobot.on(MESSAGE_TYPES.OPEN, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.OPEN, event);
            return _this.open(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                return { success: success };
            }));
        }));
        postRobot.on(MESSAGE_TYPES.OPEN_LIST, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.OPEN_LIST, event);
            return _this.openList(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                return { success: success };
            }));
        }));
        // Close
        postRobot.on(MESSAGE_TYPES.CLOSE, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.CLOSE, event);
            /** @type {?} */
            var index = _this._registeredFrames.findIndex((/**
             * @param {?} frame
             * @return {?}
             */
            function (frame) { return frame.data.id === event.data.id; }));
            if (index !== -1) {
                _this._registeredFrames.splice(index, 1);
            }
            return _this.close(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                return { success: success };
            }));
        }));
        // Refresh
        postRobot.on(MESSAGE_TYPES.REFRESH, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.REFRESH, event);
            return _this.refresh(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                return { success: success };
            }));
        }));
        // PIN
        postRobot.on(MESSAGE_TYPES.PIN, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.PIN, event);
            return _this.pin(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                return { success: success };
            }));
        }));
        // REQUEST_DATA
        postRobot.on(MESSAGE_TYPES.REQUEST_DATA, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.REQUEST_DATA, event);
            return _this.requestData(event.data).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return { data: result.data, error: result.error };
            }));
        }));
        // CALLBACKS
        postRobot.on(MESSAGE_TYPES.CALLBACK, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.CALLBACK, event);
            return _this.callback(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            function (success) {
                return { success: success };
            }));
        }));
        // HTTP-GET
        postRobot.on(MESSAGE_TYPES.HTTP_GET, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_GET, event);
            return _this.httpGET(event.data.relativeURL).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return { data: result.data, error: result.error };
            }));
        }));
        // HTTP-POST
        postRobot.on(MESSAGE_TYPES.HTTP_POST, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_POST, event);
            return _this.httpPOST(event.data.relativeURL, event.data.data).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return { data: result.data, error: result.error };
            }));
        }));
        // HTTP-PUT
        postRobot.on(MESSAGE_TYPES.HTTP_PUT, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_PUT, event);
            return _this.httpPUT(event.data.relativeURL, event.data.data).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return { data: result.data, error: result.error };
            }));
        }));
        // HTTP-DELETE
        postRobot.on(MESSAGE_TYPES.HTTP_DELETE, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.HTTP_DELETE, event);
            return _this.httpDELETE(event.data.relativeURL).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                return { data: result.data, error: result.error };
            }));
        }));
        // Custom Events
        postRobot.on(MESSAGE_TYPES.CUSTOM_EVENT, (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this._trace(MESSAGE_TYPES.CUSTOM_EVENT, event);
            if (_this._eventListeners[event.data.event]) {
                _this._eventListeners[event.data.event].forEach((/**
                 * @param {?} listener
                 * @return {?}
                 */
                function (listener) {
                    listener(event.data.data);
                }));
            }
            if (_this._registeredFrames.length > 0) {
                _this._registeredFrames.forEach((/**
                 * @param {?} frame
                 * @return {?}
                 */
                function (frame) {
                    postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, event.data);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.OPEN]) {
                _this._handlers[AppBridgeHandler.OPEN](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.OPEN + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.OPEN_LIST]) {
                _this._handlers[AppBridgeHandler.OPEN_LIST](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                /** @type {?} */
                var openListPacket = {};
                Object.assign(openListPacket, { type: 'List', entityType: packet.type, keywords: packet.keywords, criteria: packet.criteria });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN_LIST, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.OPEN_LIST + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.UPDATE]) {
                _this._handlers[AppBridgeHandler.UPDATE](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.UPDATE, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.UPDATE + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.CLOSE]) {
                _this._handlers[AppBridgeHandler.CLOSE](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                if (packet) {
                    console.info('[AppBridge] - close(packet) is deprecated! Please just use close()!'); // tslint:disable-line
                }
                /** @type {?} */
                var realPacket = { id: _this.id, windowName: _this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.CLOSE, realPacket)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.CLOSE + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.REFRESH]) {
                _this._handlers[AppBridgeHandler.REFRESH](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                if (packet) {
                    console.info('[AppBridge] - refresh(packet) is deprecated! Please just use refresh()!'); // tslint:disable-line
                }
                /** @type {?} */
                var realPacket = { id: _this.id, windowName: _this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.REFRESH, realPacket)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.REFRESH + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.PIN]) {
                _this._handlers[AppBridgeHandler.PIN](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                if (packet) {
                    console.info('[AppBridge] - pin(packet) is deprecated! Please just use pin()!'); // tslint:disable-line
                }
                /** @type {?} */
                var realPacket = { id: _this.id, windowName: _this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.PIN, realPacket)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.PIN + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.REQUEST_DATA]) {
                _this._handlers[AppBridgeHandler.REQUEST_DATA](packet, (/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    if (data) {
                        resolve({ data: data });
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REQUEST_DATA, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.REQUEST_DATA + " (callback)", event);
                    if (event.data) {
                        resolve({ data: event.data.data });
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.CALLBACK]) {
                _this._handlers[AppBridgeHandler.CALLBACK](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                function (success) {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: _this.id, windowName: _this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.CALLBACK, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.CALLBACK + " (callback)", event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(false);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.REGISTER]) {
                _this._handlers[AppBridgeHandler.REGISTER](packet, (/**
                 * @param {?} windowName
                 * @return {?}
                 */
                function (windowName) {
                    if (windowName) {
                        resolve(windowName);
                    }
                    else {
                        resolve(null);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: _this.id });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REGISTER, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    _this._trace(MESSAGE_TYPES.REGISTER + " (callback)", event);
                    if (event.data) {
                        _this.windowName = event.data.windowName;
                        resolve(event.data.windowName);
                    }
                    else {
                        resolve(null);
                    }
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    _this._trace(MESSAGE_TYPES.REGISTER + " - FAILED - (no parent)", err);
                    reject(err);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.GET, relativeURL: relativeURL }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                function (data, error) {
                    resolve({ data: data, error: error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_GET, { relativeURL: relativeURL })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(null);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.POST, relativeURL: relativeURL, data: postData }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                function (data, error) {
                    resolve({ data: data, error: error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_POST, { relativeURL: relativeURL, data: postData })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(null);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.PUT, relativeURL: relativeURL, data: putData }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                function (data, error) {
                    resolve({ data: data, error: error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_PUT, { relativeURL: relativeURL, data: putData })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(null);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (_this._handlers[AppBridgeHandler.HTTP]) {
                _this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.DELETE, relativeURL: relativeURL }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                function (data, error) {
                    resolve({ data: data, error: error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_DELETE, { relativeURL: relativeURL })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    reject(null);
                }));
            }
        }));
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            postRobot
                .sendToParent(MESSAGE_TYPES.CUSTOM_EVENT, { event: event, data: data })
                .then((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                resolve(e);
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                reject(null);
            }));
        }));
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
            this._registeredFrames.forEach((/**
             * @param {?} frame
             * @return {?}
             */
            function (frame) {
                postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, {
                    eventType: event,
                    data: data,
                });
            }));
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
            var endpoints = identity.sessions.reduce((/**
             * @param {?} obj
             * @param {?} session
             * @return {?}
             */
            function (obj, session) {
                obj[session.name] = session.value.endpoint;
                return obj;
            }), {});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQnJpZGdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxJQUFZLGdCQUFnQjtJQUMxQixJQUFJLEdBQUE7SUFDSixJQUFJLEdBQUE7SUFDSixTQUFTLEdBQUE7SUFDVCxLQUFLLEdBQUE7SUFDTCxPQUFPLEdBQUE7SUFDUCxHQUFHLEdBQUE7SUFDSCxRQUFRLEdBQUE7SUFDUixNQUFNLEdBQUE7SUFDTixZQUFZLEdBQUE7SUFDWixRQUFRLEdBQUE7RUFDVDs7Ozs7Ozs7Ozs7Ozs7O0FBUUQseUNBT0M7OztJQU5DLG1DQUFlOztJQUNmLHlDQUFtQjs7SUFDbkIsdUNBQWtCOztJQUNsQixrQ0FBYTs7SUFDYixtQ0FBVzs7SUFDWCwwQ0FBcUI7Ozs7O0FBY3ZCLDZDQUlDOzs7SUFIQyx1Q0FBa0I7O0lBQ2xCLDJDQUF3Qjs7SUFDeEIsMkNBQWM7Ozs7O0FBS2hCLGdEQUVDOzs7SUFEQywwQ0FBbUI7OztJQUdmLFVBQVUsR0FBRztJQUNqQixHQUFHLEVBQUUsS0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixNQUFNLEVBQUUsUUFBUTtDQUNqQjs7SUFFSyxhQUFhLEdBQUc7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsSUFBSSxFQUFFLE1BQU07SUFDWixTQUFTLEVBQUUsVUFBVTtJQUNyQixLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsU0FBUyxFQUFFLFVBQVU7SUFDckIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsV0FBVyxFQUFFLFlBQVk7SUFDekIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsWUFBWSxFQUFFLGFBQWE7SUFD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QyxTQUFTLENBQUMsTUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNDO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUFrQyxTQUFTLEdBaUUxQzs7Ozs7OztJQWhFQywrQkFBd0I7Ozs7O0lBRXdCLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGVudW0gQXBwQnJpZGdlSGFuZGxlciB7XG4gIEhUVFAsXG4gIE9QRU4sXG4gIE9QRU5fTElTVCxcbiAgQ0xPU0UsXG4gIFJFRlJFU0gsXG4gIFBJTixcbiAgUkVHSVNURVIsXG4gIFVQREFURSxcbiAgUkVRVUVTVF9EQVRBLFxuICBDQUxMQkFDSyxcbn1cblxuLy8gcmVjb3JkICAgICAgIC0gYW4gaW5kaXZpZHVhbCBlbnRpdHkgcmVjb3JkXG4vLyBhZGQvZmFzdC1hZGQgLSB0aGUgYWRkIHBhZ2UgZm9yIGEgbmV3IHJlY29yZFxuLy8gY3VzdG9tICAgICAgIC0gY3VzdG9tIGFjdGlvbiB0aGF0IG9wZW5zIHRoZSB1cmwgcHJvdmlkZWQgaW4gZGF0YS51cmxcbi8vIHByZXZpZXcgICAgICAtIHRoZSBwcmV2aWV3IHNsaWRlb3V0IGF2YWlsYWJsZSBvbmx5IGluIE5vdm9cbmV4cG9ydCB0eXBlIE5vdm9BcHBzID0gJ3JlY29yZCcgfCAnYWRkJyB8ICdmYXN0LWFkZCcgfCAnY3VzdG9tJyB8ICdwcmV2aWV3JztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQnJpZGdlT3BlbkV2ZW50IHtcbiAgdHlwZTogTm92b0FwcHM7XG4gIGVudGl0eVR5cGU6IHN0cmluZztcbiAgZW50aXR5SWQ/OiBzdHJpbmc7XG4gIHRhYj86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbiAgcGFzc3Rocm91Z2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE1vc2FpY0xpc3RzID1cbiAgfCAnQ2FuZGlkYXRlJ1xuICB8ICdDbGllbnRDb250YWN0J1xuICB8ICdDbGllbnRDb3Jwb3JhdGlvbidcbiAgfCAnSm9iT3JkZXInXG4gIHwgJ0pvYlN1Ym1pc3Npb24nXG4gIHwgJ0pvYlBvc3RpbmcnXG4gIHwgJ1BsYWNlbWVudCdcbiAgfCAnTGVhZCdcbiAgfCAnT3Bwb3J0dW5pdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCcmlkZ2VPcGVuTGlzdEV2ZW50IHtcbiAgdHlwZTogTW9zYWljTGlzdHM7XG4gIGtleXdvcmRzOiBBcnJheTxzdHJpbmc+O1xuICBjcml0ZXJpYTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBOb3ZvRGF0YVR5cGUgPSAnZW50aXRsZW1lbnRzJyB8ICdzZXR0aW5ncycgfCAndXNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJyaWRnZVJlcXVlc3REYXRhRXZlbnQge1xuICB0eXBlOiBOb3ZvRGF0YVR5cGU7XG59XG5cbmNvbnN0IEhUVFBfVkVSQlMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJyxcbn07XG5cbmNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gIFJFR0lTVEVSOiAncmVnaXN0ZXInLFxuICBPUEVOOiAnb3BlbicsXG4gIE9QRU5fTElTVDogJ29wZW5MaXN0JyxcbiAgQ0xPU0U6ICdjbG9zZScsXG4gIFJFRlJFU0g6ICdyZWZyZXNoJyxcbiAgUElOOiAncGluJyxcbiAgVVBEQVRFOiAndXBkYXRlJyxcbiAgSFRUUF9HRVQ6ICdodHRwR0VUJyxcbiAgSFRUUF9QT1NUOiAnaHR0cFBPU1QnLFxuICBIVFRQX1BVVDogJ2h0dHBQVVQnLFxuICBIVFRQX0RFTEVURTogJ2h0dHBERUxFVEUnLFxuICBDVVNUT01fRVZFTlQ6ICdjdXN0b21FdmVudCcsXG4gIFJFUVVFU1RfREFUQTogJ3JlcXVlc3REYXRhJyxcbiAgQ0FMTEJBQ0s6ICdjYWxsYmFjaycsXG59O1xuXG5kZWNsYXJlIGNvbnN0IHBvc3RSb2JvdDogYW55O1xuXG5leHBvcnQgY2xhc3MgQXBwQnJpZGdlU2VydmljZSB7XG4gIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFwcEJyaWRnZShuYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2QXBwQnJpZGdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgY3JlYXRlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGV2QXBwQnJpZGdlKG5hbWUsIHRoaXMuaHR0cCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcEJyaWRnZSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nID0gYCR7RGF0ZS5ub3coKX1gO1xuICBwdWJsaWMgdHJhY2VOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyB3aW5kb3dOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJlZEZyYW1lczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfaGFuZGxlcnMgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhY2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogYW55ID0ge307XG5cbiAgLy8gVHlwZT9cbiAgY29uc3RydWN0b3IodHJhY2VOYW1lOiBzdHJpbmcgPSAnQXBwQnJpZGdlJykge1xuICAgIHRoaXMudHJhY2VOYW1lID0gdHJhY2VOYW1lO1xuICAgIGlmIChwb3N0Um9ib3QpIHtcbiAgICAgIHBvc3RSb2JvdC5DT05GSUcuTE9HX0xFVkVMID0gJ2Vycm9yJztcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3NldHVwSGFuZGxlcnMoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0IHRyYWNpbmcodHJhY2luZzogYm9vbGVhbikge1xuICAgIHRoaXMuX3RyYWNpbmcgPSB0cmFjaW5nO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZSh0eXBlOiBBcHBCcmlkZ2VIYW5kbGVyLCBoYW5kbGVyOiBGdW5jdGlvbikge1xuICAgIHRoaXMuX2hhbmRsZXJzW3R5cGVdID0gaGFuZGxlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYWNlKGV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fdHJhY2luZykge1xuICAgICAgY29uc29sZS5sb2coYFske3RoaXMudHJhY2VOYW1lIHx8IHRoaXMuaWR9XSBcIiR7ZXZlbnRUeXBlfVwiYCwgZXZlbnQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXR1cEhhbmRsZXJzKCk6IHZvaWQge1xuICAgIC8vIFJlZ2lzdGVyXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUkVHSVNURVIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUdJU1RFUiwgZXZlbnQpO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5wdXNoKGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKGV2ZW50LmRhdGEpLnRoZW4oKHdpbmRvd05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2luZG93TmFtZSB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gVXBkYXRlXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBPcGVuXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuT1BFTiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLk9QRU4sIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5MaXN0KGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ2xvc2VcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DTE9TRSwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkNMT1NFLCBldmVudCk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuZmluZEluZGV4KChmcmFtZSkgPT4gZnJhbWUuZGF0YS5pZCA9PT0gZXZlbnQuZGF0YS5pZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNsb3NlKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUmVmcmVzaFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUZSRVNILCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUElOXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUElOLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuUElOLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5waW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBSRVFVRVNUX0RBVEFcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3REYXRhKGV2ZW50LmRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ0FMTEJBQ0tTXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuQ0FMTEJBQ0ssIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2soZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLUdFVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfR0VULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9HRVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBHRVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBPU1RcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQT1NUKGV2ZW50LmRhdGEucmVsYXRpdmVVUkwsIGV2ZW50LmRhdGEuZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBVVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfUFVULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQVVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCwgZXZlbnQuZGF0YS5kYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEhUVFAtREVMRVRFXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuSFRUUF9ERUxFVEUsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX0RFTEVURSwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cERFTEVURShldmVudC5kYXRhLnJlbGF0aXZlVVJMKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEN1c3RvbSBFdmVudHNcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XSkge1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGxpc3RlbmVyKGV2ZW50LmRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgICAgcG9zdFJvYm90LnNlbmQoZnJhbWUuc291cmNlLCBNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIG9wZW4gZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuKHBhY2tldDogSUFwcEJyaWRnZU9wZW5FdmVudCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5dKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU4sIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuT1BFTn0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gb3Blbkxpc3QgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuTGlzdChwYWNrZXQ6IFBhcnRpYWw8SUFwcEJyaWRnZU9wZW5MaXN0RXZlbnQ+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5fTElTVF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOX0xJU1RdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9wZW5MaXN0UGFja2V0ID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3Blbkxpc3RQYWNrZXQsIHsgdHlwZTogJ0xpc3QnLCBlbnRpdHlUeXBlOiBwYWNrZXQudHlwZSwga2V5d29yZHM6IHBhY2tldC5rZXl3b3JkcywgY3JpdGVyaWE6IHBhY2tldC5jcml0ZXJpYSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU5fTElTVCwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5PUEVOX0xJU1R9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIGNsb3NlIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShcbiAgICBwYWNrZXQ6IFBhcnRpYWw8eyBlbnRpdHlUeXBlOiBzdHJpbmc7IGVudGl0eUlkOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHRpdGxlS2V5OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5VUERBVEVdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuVVBEQVRFXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5VUERBVEUsIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuVVBEQVRFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIGNsb3NlKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIGNsb3NlKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIGNsb3NlKCkhJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVhbFBhY2tldCA9IHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9O1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuQ0xPU0UsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLkNMT1NFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlZnJlc2gocGFja2V0Pzogb2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFRlJFU0hdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVGUkVTSF0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIHJlZnJlc2gocGFja2V0KSBpcyBkZXByZWNhdGVkISBQbGVhc2UganVzdCB1c2UgcmVmcmVzaCgpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFRlJFU0h9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGEgcGluIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcGluKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5QSU5dKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUElOXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ1tBcHBCcmlkZ2VdIC0gcGluKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIHBpbigpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlBJTiwgcmVhbFBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUElOfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhIHJlcXVlc3REYXRhIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0RGF0YSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlcXVlc3REYXRhKHBhY2tldDogeyB0eXBlOiBzdHJpbmcgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVRVUVTVF9EQVRBXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFUVVFU1RfREFUQV0ocGFja2V0LCAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuUkVRVUVTVF9EQVRBLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFUVVFU1RfREFUQX0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBnZW5lcmljIGNhbGxiYWNrIGNvbW1hbmRcbiAgICogQHBhcmFtIHBhY2tldCBzdHJpbmcgLSBrZXk6IHN0cmluZywgZ2VuZXJpYzogYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbGxiYWNrKHBhY2tldDogeyBrZXk6IHN0cmluZzsgZ2VuZXJpYzogYm9vbGVhbjsgb3B0aW9uczogb2JqZWN0IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5DQUxMQkFDS30gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gcmVnaXN0ZXIgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIocGFja2V0OiBQYXJ0aWFsPHsgdGl0bGU6IHN0cmluZzsgdXJsOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4gPSB7fSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKHBhY2tldCwgKHdpbmRvd05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3dOYW1lKSB7XG4gICAgICAgICAgICByZXNvbHZlKHdpbmRvd05hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFR0lTVEVSLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFR0lTVEVSfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy53aW5kb3dOYW1lID0gZXZlbnQuZGF0YS53aW5kb3dOYW1lO1xuICAgICAgICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEud2luZG93TmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUkVHSVNURVJ9IC0gRkFJTEVEIC0gKG5vIHBhcmVudClgLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9HRVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cEdFVChyZWxhdGl2ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKHsgdmVyYjogSFRUUF9WRVJCUy5HRVQsIHJlbGF0aXZlVVJMOiByZWxhdGl2ZVVSTCB9LCAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX0dFVCwgeyByZWxhdGl2ZVVSTCB9KVxuICAgICAgICAgIC50aGVuKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhLCBlcnJvcjogZXZlbnQuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QT1NUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQT1NUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHBvc3REYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oXG4gICAgICAgICAgeyB2ZXJiOiBIVFRQX1ZFUkJTLlBPU1QsIHJlbGF0aXZlVVJMOiByZWxhdGl2ZVVSTCwgZGF0YTogcG9zdERhdGEgfSxcbiAgICAgICAgICAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIHsgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMLCBkYXRhOiBwb3N0RGF0YSB9KVxuICAgICAgICAgIC50aGVuKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhLCBlcnJvcjogZXZlbnQuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QVVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cFBVVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwdXREYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oXG4gICAgICAgICAgeyB2ZXJiOiBIVFRQX1ZFUkJTLlBVVCwgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMLCBkYXRhOiBwdXREYXRhIH0sXG4gICAgICAgICAgKGRhdGE6IGFueSwgZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIHsgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMLCBkYXRhOiBwdXREYXRhIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0RFTEVURSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwREVMRVRFKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oeyB2ZXJiOiBIVFRQX1ZFUkJTLkRFTEVURSwgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMIH0sIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfREVMRVRFLCB7IHJlbGF0aXZlVVJMIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGN1c3RvbSBldmVudCB0byBhbnl3aGVyZSBpbiB0aGUgYXBwbGljYXRpb25cbiAgICogQHBhcmFtIGV2ZW50IHN0cmluZyAtIGV2ZW50IG5hbWUgdG8gZmlyZVxuICAgKiBAcGFyYW0gZGF0YSBhbnkgLSBkYXRhIHRvIGJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBmaXJlRXZlbnQoZXZlbnQ6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwb3N0Um9ib3RcbiAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgeyBldmVudCwgZGF0YSB9KVxuICAgICAgICAudGhlbigoZTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3VzdG9tIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIGZyYW1lc1xuICAgKiBAcGFyYW0gZXZlbnQgc3RyaW5nIC0gZXZlbnQgbmFtZSB0byBmaXJlXG4gICAqIEBwYXJhbSBkYXRhIGFueSAtIGRhdGEgdG8gYmUgc2VudCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGZpcmVFdmVudFRvQ2hpbGRyZW4oZXZlbnQ6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBwb3N0Um9ib3Quc2VuZChmcmFtZS5zb3VyY2UsIE1FU1NBR0VfVFlQRVMuQ1VTVE9NX0VWRU5ULCB7XG4gICAgICAgICAgZXZlbnRUeXBlOiBldmVudCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgY3VzdG9tIGV2ZW50XG4gICAqIEBwYXJhbSBldmVudCBzdHJpbmcgLSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0gY2FsbGJhY2sgZnVuY3Rpb24gLSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIGFuIGV2ZW50IGlzIGNhdWdodFxuICAgKi9cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldkFwcEJyaWRnZSBleHRlbmRzIEFwcEJyaWRnZSB7XG4gIHByaXZhdGUgYmFzZVVSTDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHRyYWNlTmFtZTogc3RyaW5nID0gJ0RldkFwcEJyaWRnZScsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKHRyYWNlTmFtZSk7XG4gICAgbGV0IGNvb2tpZSA9IHRoaXMuZ2V0Q29va2llKCdVbEVuY29kZWRJZGVudGl0eScpO1xuICAgIGlmIChjb29raWUgJiYgY29va2llLmxlbmd0aCkge1xuICAgICAgbGV0IGlkZW50aXR5ID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoY29va2llKSk7XG4gICAgICBsZXQgZW5kcG9pbnRzID0gaWRlbnRpdHkuc2Vzc2lvbnMucmVkdWNlKChvYmosIHNlc3Npb24pID0+IHtcbiAgICAgICAgb2JqW3Nlc3Npb24ubmFtZV0gPSBzZXNzaW9uLnZhbHVlLmVuZHBvaW50O1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5iYXNlVVJMID0gZW5kcG9pbnRzLnJlc3Q7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfc2V0dXBIYW5kbGVycygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfR0VUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBHRVQocmVsYXRpdmVVUkw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfUE9TVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUE9TVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwb3N0RGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHBvc3REYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BVVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUFVUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHB1dERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHB1dERhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfREVMRVRFIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBERUxFVEUocmVsYXRpdmVVUkw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb29raWUoY25hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICBsZXQgbmFtZSA9IGAke2NuYW1lfT1gO1xuICAgICAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==