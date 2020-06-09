import { __extends } from "tslib";
export var AppBridgeHandler;
(function (AppBridgeHandler) {
    AppBridgeHandler[AppBridgeHandler["HTTP"] = 0] = "HTTP";
    AppBridgeHandler[AppBridgeHandler["OPEN"] = 1] = "OPEN";
    AppBridgeHandler[AppBridgeHandler["OPEN_LIST"] = 2] = "OPEN_LIST";
    AppBridgeHandler[AppBridgeHandler["CLOSE"] = 3] = "CLOSE";
    AppBridgeHandler[AppBridgeHandler["REFRESH"] = 4] = "REFRESH";
    AppBridgeHandler[AppBridgeHandler["PIN"] = 5] = "PIN";
    AppBridgeHandler[AppBridgeHandler["REGISTER"] = 6] = "REGISTER";
    AppBridgeHandler[AppBridgeHandler["UPDATE"] = 7] = "UPDATE";
    AppBridgeHandler[AppBridgeHandler["REQUEST_DATA"] = 8] = "REQUEST_DATA";
    AppBridgeHandler[AppBridgeHandler["CALLBACK"] = 9] = "CALLBACK";
})(AppBridgeHandler || (AppBridgeHandler = {}));
var HTTP_VERBS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};
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
    AppBridgeService.prototype.create = function (name) {
        return new AppBridge(name);
    };
    return AppBridgeService;
}());
export { AppBridgeService };
var DevAppBridgeService = /** @class */ (function () {
    function DevAppBridgeService(http) {
        this.http = http;
    }
    DevAppBridgeService.prototype.create = function (name) {
        return new DevAppBridge(name, this.http);
    };
    return DevAppBridgeService;
}());
export { DevAppBridgeService };
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
        set: function (tracing) {
            this._tracing = tracing;
        },
        enumerable: true,
        configurable: true
    });
    AppBridge.prototype.handle = function (type, handler) {
        this._handlers[type] = handler;
    };
    AppBridge.prototype._trace = function (eventType, event) {
        if (this._tracing) {
            console.log("[" + (this.traceName || this.id) + "] \"" + eventType + "\"", event); // tslint:disable-line
        }
    };
    AppBridge.prototype._setupHandlers = function () {
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
    AppBridge.prototype.open = function (packet) {
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
    AppBridge.prototype.openList = function (packet) {
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
    AppBridge.prototype.update = function (packet) {
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
    AppBridge.prototype.close = function (packet) {
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
    AppBridge.prototype.refresh = function (packet) {
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
    AppBridge.prototype.pin = function (packet) {
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
    AppBridge.prototype.requestData = function (packet) {
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
    AppBridge.prototype.callback = function (packet) {
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
    AppBridge.prototype.register = function (packet) {
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
                    reject(err);
                });
            }
        });
    };
    /**
     * Fires or responds to an HTTP_GET event
     * @param packet any - packet of data to send with the event
     */
    AppBridge.prototype.httpGET = function (relativeURL) {
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
    AppBridge.prototype.httpPOST = function (relativeURL, postData) {
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
    AppBridge.prototype.httpPUT = function (relativeURL, putData) {
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
    AppBridge.prototype.httpDELETE = function (relativeURL) {
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
    AppBridge.prototype.fireEvent = function (event, data) {
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
    AppBridge.prototype.fireEventToChildren = function (event, data) {
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
    AppBridge.prototype.addEventListener = function (event, callback) {
        if (!this._eventListeners[event]) {
            this._eventListeners[event] = [];
        }
        this._eventListeners[event].push(callback);
    };
    return AppBridge;
}());
export { AppBridge };
var DevAppBridge = /** @class */ (function (_super) {
    __extends(DevAppBridge, _super);
    function DevAppBridge(traceName, http) {
        if (traceName === void 0) { traceName = 'DevAppBridge'; }
        var _this = _super.call(this, traceName) || this;
        _this.http = http;
        var cookie = _this.getCookie('UlEncodedIdentity');
        if (cookie && cookie.length) {
            var identity = JSON.parse(decodeURIComponent(cookie));
            var endpoints = identity.sessions.reduce(function (obj, session) {
                obj[session.name] = session.value.endpoint;
                return obj;
            }, {});
            _this.baseURL = endpoints.rest;
        }
        return _this;
    }
    DevAppBridge.prototype._setupHandlers = function () { };
    /**
     * Fires or responds to an HTTP_GET event
     * @param packet any - packet of data to send with the event
     */
    DevAppBridge.prototype.httpGET = function (relativeURL) {
        return this.http.get(this.baseURL + "/" + relativeURL, { withCredentials: true }).toPromise();
    };
    /**
     * Fires or responds to an HTTP_POST event
     * @param packet any - packet of data to send with the event
     */
    DevAppBridge.prototype.httpPOST = function (relativeURL, postData) {
        return this.http.post(this.baseURL + "/" + relativeURL, postData, { withCredentials: true }).toPromise();
    };
    /**
     * Fires or responds to an HTTP_PUT event
     * @param packet any - packet of data to send with the event
     */
    DevAppBridge.prototype.httpPUT = function (relativeURL, putData) {
        return this.http.put(this.baseURL + "/" + relativeURL, putData, { withCredentials: true }).toPromise();
    };
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param packet any - packet of data to send with the event
     */
    DevAppBridge.prototype.httpDELETE = function (relativeURL) {
        return this.http.delete(this.baseURL + "/" + relativeURL, { withCredentials: true }).toPromise();
    };
    DevAppBridge.prototype.getCookie = function (cname) {
        if (document) {
            var name_1 = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQnJpZGdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxNQUFNLENBQU4sSUFBWSxnQkFXWDtBQVhELFdBQVksZ0JBQWdCO0lBQzFCLHVEQUFJLENBQUE7SUFDSix1REFBSSxDQUFBO0lBQ0osaUVBQVMsQ0FBQTtJQUNULHlEQUFLLENBQUE7SUFDTCw2REFBTyxDQUFBO0lBQ1AscURBQUcsQ0FBQTtJQUNILCtEQUFRLENBQUE7SUFDUiwyREFBTSxDQUFBO0lBQ04sdUVBQVksQ0FBQTtJQUNaLCtEQUFRLENBQUE7QUFDVixDQUFDLEVBWFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQVczQjtBQXdDRCxJQUFNLFVBQVUsR0FBRztJQUNqQixHQUFHLEVBQUUsS0FBSztJQUNWLElBQUksRUFBRSxNQUFNO0lBQ1osR0FBRyxFQUFFLEtBQUs7SUFDVixNQUFNLEVBQUUsUUFBUTtDQUNqQixDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUc7SUFDcEIsUUFBUSxFQUFFLFVBQVU7SUFDcEIsSUFBSSxFQUFFLE1BQU07SUFDWixTQUFTLEVBQUUsVUFBVTtJQUNyQixLQUFLLEVBQUUsT0FBTztJQUNkLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsU0FBUyxFQUFFLFVBQVU7SUFDckIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsV0FBVyxFQUFFLFlBQVk7SUFDekIsWUFBWSxFQUFFLGFBQWE7SUFDM0IsWUFBWSxFQUFFLGFBQWE7SUFDM0IsUUFBUSxFQUFFLFVBQVU7Q0FDckIsQ0FBQztBQUlGO0lBQUE7SUFJQSxDQUFDO0lBSEMsaUNBQU0sR0FBTixVQUFPLElBQVk7UUFDakIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMs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RyxFQUFFO29CQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFqRUQsQ0FBa0MsU0FBUyxHQWlFMUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBlbnVtIEFwcEJyaWRnZUhhbmRsZXIge1xuICBIVFRQLFxuICBPUEVOLFxuICBPUEVOX0xJU1QsXG4gIENMT1NFLFxuICBSRUZSRVNILFxuICBQSU4sXG4gIFJFR0lTVEVSLFxuICBVUERBVEUsXG4gIFJFUVVFU1RfREFUQSxcbiAgQ0FMTEJBQ0ssXG59XG5cbi8vIHJlY29yZCAgICAgICAtIGFuIGluZGl2aWR1YWwgZW50aXR5IHJlY29yZFxuLy8gYWRkL2Zhc3QtYWRkIC0gdGhlIGFkZCBwYWdlIGZvciBhIG5ldyByZWNvcmRcbi8vIGN1c3RvbSAgICAgICAtIGN1c3RvbSBhY3Rpb24gdGhhdCBvcGVucyB0aGUgdXJsIHByb3ZpZGVkIGluIGRhdGEudXJsXG4vLyBwcmV2aWV3ICAgICAgLSB0aGUgcHJldmlldyBzbGlkZW91dCBhdmFpbGFibGUgb25seSBpbiBOb3ZvXG5leHBvcnQgdHlwZSBOb3ZvQXBwcyA9ICdyZWNvcmQnIHwgJ2FkZCcgfCAnZmFzdC1hZGQnIHwgJ2N1c3RvbScgfCAncHJldmlldyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJyaWRnZU9wZW5FdmVudCB7XG4gIHR5cGU6IE5vdm9BcHBzO1xuICBlbnRpdHlUeXBlOiBzdHJpbmc7XG4gIGVudGl0eUlkPzogc3RyaW5nO1xuICB0YWI/OiBzdHJpbmc7XG4gIGRhdGE/OiBhbnk7XG4gIHBhc3N0aHJvdWdoPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBNb3NhaWNMaXN0cyA9XG4gIHwgJ0NhbmRpZGF0ZSdcbiAgfCAnQ2xpZW50Q29udGFjdCdcbiAgfCAnQ2xpZW50Q29ycG9yYXRpb24nXG4gIHwgJ0pvYk9yZGVyJ1xuICB8ICdKb2JTdWJtaXNzaW9uJ1xuICB8ICdKb2JQb3N0aW5nJ1xuICB8ICdQbGFjZW1lbnQnXG4gIHwgJ0xlYWQnXG4gIHwgJ09wcG9ydHVuaXR5JztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQnJpZGdlT3Blbkxpc3RFdmVudCB7XG4gIHR5cGU6IE1vc2FpY0xpc3RzO1xuICBrZXl3b3JkczogQXJyYXk8c3RyaW5nPjtcbiAgY3JpdGVyaWE6IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgTm92b0RhdGFUeXBlID0gJ2VudGl0bGVtZW50cycgfCAnc2V0dGluZ3MnIHwgJ3VzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCcmlkZ2VSZXF1ZXN0RGF0YUV2ZW50IHtcbiAgdHlwZTogTm92b0RhdGFUeXBlO1xufVxuXG5jb25zdCBIVFRQX1ZFUkJTID0ge1xuICBHRVQ6ICdnZXQnLFxuICBQT1NUOiAncG9zdCcsXG4gIFBVVDogJ3B1dCcsXG4gIERFTEVURTogJ2RlbGV0ZScsXG59O1xuXG5jb25zdCBNRVNTQUdFX1RZUEVTID0ge1xuICBSRUdJU1RFUjogJ3JlZ2lzdGVyJyxcbiAgT1BFTjogJ29wZW4nLFxuICBPUEVOX0xJU1Q6ICdvcGVuTGlzdCcsXG4gIENMT1NFOiAnY2xvc2UnLFxuICBSRUZSRVNIOiAncmVmcmVzaCcsXG4gIFBJTjogJ3BpbicsXG4gIFVQREFURTogJ3VwZGF0ZScsXG4gIEhUVFBfR0VUOiAnaHR0cEdFVCcsXG4gIEhUVFBfUE9TVDogJ2h0dHBQT1NUJyxcbiAgSFRUUF9QVVQ6ICdodHRwUFVUJyxcbiAgSFRUUF9ERUxFVEU6ICdodHRwREVMRVRFJyxcbiAgQ1VTVE9NX0VWRU5UOiAnY3VzdG9tRXZlbnQnLFxuICBSRVFVRVNUX0RBVEE6ICdyZXF1ZXN0RGF0YScsXG4gIENBTExCQUNLOiAnY2FsbGJhY2snLFxufTtcblxuZGVjbGFyZSBjb25zdCBwb3N0Um9ib3Q6IGFueTtcblxuZXhwb3J0IGNsYXNzIEFwcEJyaWRnZVNlcnZpY2Uge1xuICBjcmVhdGUobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBBcHBCcmlkZ2UobmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldkFwcEJyaWRnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHt9XG4gIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IERldkFwcEJyaWRnZShuYW1lLCB0aGlzLmh0dHApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcHBCcmlkZ2Uge1xuICBwdWJsaWMgaWQ6IHN0cmluZyA9IGAke0RhdGUubm93KCl9YDtcbiAgcHVibGljIHRyYWNlTmFtZTogc3RyaW5nO1xuICBwdWJsaWMgd2luZG93TmFtZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgX3JlZ2lzdGVyZWRGcmFtZXMgPSBbXTtcbiAgcHJpdmF0ZSBfaGFuZGxlcnMgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhY2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogYW55ID0ge307XG5cbiAgLy8gVHlwZT9cbiAgY29uc3RydWN0b3IodHJhY2VOYW1lOiBzdHJpbmcgPSAnQXBwQnJpZGdlJykge1xuICAgIHRoaXMudHJhY2VOYW1lID0gdHJhY2VOYW1lO1xuICAgIGlmIChwb3N0Um9ib3QpIHtcbiAgICAgIHBvc3RSb2JvdC5DT05GSUcuTE9HX0xFVkVMID0gJ2Vycm9yJztcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3NldHVwSGFuZGxlcnMoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0IHRyYWNpbmcodHJhY2luZzogYm9vbGVhbikge1xuICAgIHRoaXMuX3RyYWNpbmcgPSB0cmFjaW5nO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZSh0eXBlOiBBcHBCcmlkZ2VIYW5kbGVyLCBoYW5kbGVyOiBGdW5jdGlvbikge1xuICAgIHRoaXMuX2hhbmRsZXJzW3R5cGVdID0gaGFuZGxlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYWNlKGV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fdHJhY2luZykge1xuICAgICAgY29uc29sZS5sb2coYFske3RoaXMudHJhY2VOYW1lIHx8IHRoaXMuaWR9XSBcIiR7ZXZlbnRUeXBlfVwiYCwgZXZlbnQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXR1cEhhbmRsZXJzKCk6IHZvaWQge1xuICAgIC8vIFJlZ2lzdGVyXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUkVHSVNURVIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUdJU1RFUiwgZXZlbnQpO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5wdXNoKGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKGV2ZW50LmRhdGEpLnRoZW4oKHdpbmRvd05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2luZG93TmFtZSB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gVXBkYXRlXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBPcGVuXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuT1BFTiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLk9QRU4sIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5MaXN0KGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ2xvc2VcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DTE9TRSwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkNMT1NFLCBldmVudCk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuZmluZEluZGV4KChmcmFtZSkgPT4gZnJhbWUuZGF0YS5pZCA9PT0gZXZlbnQuZGF0YS5pZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNsb3NlKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUmVmcmVzaFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUZSRVNILCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUElOXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUElOLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuUElOLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5waW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBSRVFVRVNUX0RBVEFcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3REYXRhKGV2ZW50LmRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ0FMTEJBQ0tTXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuQ0FMTEJBQ0ssIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2soZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLUdFVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfR0VULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9HRVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBHRVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBPU1RcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQT1NUKGV2ZW50LmRhdGEucmVsYXRpdmVVUkwsIGV2ZW50LmRhdGEuZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBVVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfUFVULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQVVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCwgZXZlbnQuZGF0YS5kYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEhUVFAtREVMRVRFXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuSFRUUF9ERUxFVEUsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX0RFTEVURSwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cERFTEVURShldmVudC5kYXRhLnJlbGF0aXZlVVJMKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEN1c3RvbSBFdmVudHNcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XSkge1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGxpc3RlbmVyKGV2ZW50LmRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgICAgcG9zdFJvYm90LnNlbmQoZnJhbWUuc291cmNlLCBNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIG9wZW4gZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuKHBhY2tldDogSUFwcEJyaWRnZU9wZW5FdmVudCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5dKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU4sIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuT1BFTn0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gb3Blbkxpc3QgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuTGlzdChwYWNrZXQ6IFBhcnRpYWw8SUFwcEJyaWRnZU9wZW5MaXN0RXZlbnQ+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5fTElTVF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOX0xJU1RdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3Blbkxpc3RQYWNrZXQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvcGVuTGlzdFBhY2tldCwgeyB0eXBlOiAnTGlzdCcsIGVudGl0eVR5cGU6IHBhY2tldC50eXBlLCBrZXl3b3JkczogcGFja2V0LmtleXdvcmRzLCBjcml0ZXJpYTogcGFja2V0LmNyaXRlcmlhIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuT1BFTl9MSVNULCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLk9QRU5fTElTVH0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gY2xvc2UgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGNsb3NlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKFxuICAgIHBhY2tldDogUGFydGlhbDx7IGVudGl0eVR5cGU6IHN0cmluZzsgZW50aXR5SWQ6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgdGl0bGVLZXk6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PixcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlVQREFURV0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5VUERBVEVdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlVQREFURSwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5VUERBVEV9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIGNsb3NlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgY2xvc2UocGFja2V0Pzogb2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNMT1NFXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNMT1NFXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ1tBcHBCcmlkZ2VdIC0gY2xvc2UocGFja2V0KSBpcyBkZXByZWNhdGVkISBQbGVhc2UganVzdCB1c2UgY2xvc2UoKSEnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkNMT1NFLCByZWFsUGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5DTE9TRX0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gY2xvc2UgZXZlbnRcbiAgICovXG4gIHB1YmxpYyByZWZyZXNoKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5SRUZSRVNIXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFRlJFU0hdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbygnW0FwcEJyaWRnZV0gLSByZWZyZXNoKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIHJlZnJlc2goKSEnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFRlJFU0h9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGEgcGluIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcGluKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5QSU5dKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUElOXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ1tBcHBCcmlkZ2VdIC0gcGluKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIHBpbigpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhbFBhY2tldCA9IHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9O1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuUElOLCByZWFsUGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5QSU59IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGEgcmVxdWVzdERhdGEgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIHJlcXVlc3REYXRhIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcmVxdWVzdERhdGEocGFja2V0OiB7IHR5cGU6IHN0cmluZyB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5SRVFVRVNUX0RBVEFdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVRVUVTVF9EQVRBXShwYWNrZXQsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGEgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUkVRVUVTVF9EQVRBfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGdlbmVyaWMgY2FsbGJhY2sgY29tbWFuZFxuICAgKiBAcGFyYW0gcGFja2V0IHN0cmluZyAtIGtleTogc3RyaW5nLCBnZW5lcmljOiBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgY2FsbGJhY2socGFja2V0OiB7IGtleTogc3RyaW5nOyBnZW5lcmljOiBib29sZWFuOyBvcHRpb25zOiBvYmplY3QgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuQ0FMTEJBQ0tdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuQ0FMTEJBQ0tdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkNBTExCQUNLLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLkNBTExCQUNLfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiByZWdpc3RlciBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyByZWdpc3RlcihwYWNrZXQ6IFBhcnRpYWw8eyB0aXRsZTogc3RyaW5nOyB1cmw6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PiA9IHt9KTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5SRUdJU1RFUl0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5SRUdJU1RFUl0ocGFja2V0LCAod2luZG93TmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgaWYgKHdpbmRvd05hbWUpIHtcbiAgICAgICAgICAgIHJlc29sdmUod2luZG93TmFtZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuUkVHSVNURVIsIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUkVHSVNURVJ9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICB0aGlzLndpbmRvd05hbWUgPSBldmVudC5kYXRhLndpbmRvd05hbWU7XG4gICAgICAgICAgICAgIHJlc29sdmUoZXZlbnQuZGF0YS53aW5kb3dOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5SRUdJU1RFUn0gLSBGQUlMRUQgLSAobm8gcGFyZW50KWAsIGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0dFVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwR0VUKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oeyB2ZXJiOiBIVFRQX1ZFUkJTLkdFVCwgcmVsYXRpdmVVUkwgfSwgKGRhdGE6IGFueSwgZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBlcnJvciB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuSFRUUF9HRVQsIHsgcmVsYXRpdmVVUkwgfSlcbiAgICAgICAgICAudGhlbigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSwgZXJyb3I6IGV2ZW50LmRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfUE9TVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUE9TVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwb3N0RGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKFxuICAgICAgICAgIHsgdmVyYjogSFRUUF9WRVJCUy5QT1NULCByZWxhdGl2ZVVSTCwgZGF0YTogcG9zdERhdGEgfSxcbiAgICAgICAgICAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIHsgcmVsYXRpdmVVUkwsIGRhdGE6IHBvc3REYXRhIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BVVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUFVUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHB1dERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXShcbiAgICAgICAgICB7IHZlcmI6IEhUVFBfVkVSQlMuUFVULCByZWxhdGl2ZVVSTCwgZGF0YTogcHV0RGF0YSB9LFxuICAgICAgICAgIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBlcnJvciB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfUFVULCB7IHJlbGF0aXZlVVJMLCBkYXRhOiBwdXREYXRhIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0RFTEVURSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwREVMRVRFKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oeyB2ZXJiOiBIVFRQX1ZFUkJTLkRFTEVURSwgcmVsYXRpdmVVUkwgfSwgKGRhdGE6IGFueSwgZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBlcnJvciB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuSFRUUF9ERUxFVEUsIHsgcmVsYXRpdmVVUkwgfSlcbiAgICAgICAgICAudGhlbigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSwgZXJyb3I6IGV2ZW50LmRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3VzdG9tIGV2ZW50IHRvIGFueXdoZXJlIGluIHRoZSBhcHBsaWNhdGlvblxuICAgKiBAcGFyYW0gZXZlbnQgc3RyaW5nIC0gZXZlbnQgbmFtZSB0byBmaXJlXG4gICAqIEBwYXJhbSBkYXRhIGFueSAtIGRhdGEgdG8gYmUgc2VudCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGZpcmVFdmVudChldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHBvc3RSb2JvdFxuICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuQ1VTVE9NX0VWRU5ULCB7IGV2ZW50LCBkYXRhIH0pXG4gICAgICAgIC50aGVuKChlOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGUpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjdXN0b20gZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgZnJhbWVzXG4gICAqIEBwYXJhbSBldmVudCBzdHJpbmcgLSBldmVudCBuYW1lIHRvIGZpcmVcbiAgICogQHBhcmFtIGRhdGEgYW55IC0gZGF0YSB0byBiZSBzZW50IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgZmlyZUV2ZW50VG9DaGlsZHJlbihldmVudDogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgIHBvc3RSb2JvdC5zZW5kKGZyYW1lLnNvdXJjZSwgTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIHtcbiAgICAgICAgICBldmVudFR5cGU6IGV2ZW50LFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gYSBjdXN0b20gZXZlbnRcbiAgICogQHBhcmFtIGV2ZW50IHN0cmluZyAtIGV2ZW50IG5hbWUgdG8gbGlzdGVuIHRvXG4gICAqIEBwYXJhbSBjYWxsYmFjayBmdW5jdGlvbiAtIGNhbGxiYWNrIHRvIGJlIGZpcmVkIHdoZW4gYW4gZXZlbnQgaXMgY2F1Z2h0XG4gICAqL1xuICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSkge1xuICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdID0gW107XG4gICAgfVxuICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2QXBwQnJpZGdlIGV4dGVuZHMgQXBwQnJpZGdlIHtcbiAgcHJpdmF0ZSBiYXNlVVJMOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHJhY2VOYW1lOiBzdHJpbmcgPSAnRGV2QXBwQnJpZGdlJywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIodHJhY2VOYW1lKTtcbiAgICBjb25zdCBjb29raWUgPSB0aGlzLmdldENvb2tpZSgnVWxFbmNvZGVkSWRlbnRpdHknKTtcbiAgICBpZiAoY29va2llICYmIGNvb2tpZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGlkZW50aXR5ID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoY29va2llKSk7XG4gICAgICBjb25zdCBlbmRwb2ludHMgPSBpZGVudGl0eS5zZXNzaW9ucy5yZWR1Y2UoKG9iaiwgc2Vzc2lvbikgPT4ge1xuICAgICAgICBvYmpbc2Vzc2lvbi5uYW1lXSA9IHNlc3Npb24udmFsdWUuZW5kcG9pbnQ7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgICB9LCB7fSk7XG4gICAgICB0aGlzLmJhc2VVUkwgPSBlbmRwb2ludHMucmVzdDtcbiAgICB9XG4gIH1cbiAgcHJvdGVjdGVkIF9zZXR1cEhhbmRsZXJzKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9HRVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cEdFVChyZWxhdGl2ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QT1NUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQT1NUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHBvc3REYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgcG9zdERhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfUFVUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQVVQocmVsYXRpdmVVUkw6IHN0cmluZywgcHV0RGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgcHV0RGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9ERUxFVEUgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cERFTEVURShyZWxhdGl2ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShgJHt0aGlzLmJhc2VVUkx9LyR7cmVsYXRpdmVVUkx9YCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENvb2tpZShjbmFtZTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBgJHtjbmFtZX09YDtcbiAgICAgIGNvbnN0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==