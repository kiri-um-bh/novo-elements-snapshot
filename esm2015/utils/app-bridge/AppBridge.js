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
const HTTP_VERBS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};
const MESSAGE_TYPES = {
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
export class AppBridgeService {
    create(name) {
        return new AppBridge(name);
    }
}
export class DevAppBridgeService {
    constructor(http) {
        this.http = http;
    }
    create(name) {
        return new DevAppBridge(name, this.http);
    }
}
export class AppBridge {
    // Type?
    constructor(traceName = 'AppBridge') {
        this.id = `${Date.now()}`;
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
    set tracing(tracing) {
        this._tracing = tracing;
    }
    handle(type, handler) {
        this._handlers[type] = handler;
    }
    _trace(eventType, event) {
        if (this._tracing) {
            console.log(`[${this.traceName || this.id}] "${eventType}"`, event); // tslint:disable-line
        }
    }
    _setupHandlers() {
        // Register
        postRobot.on(MESSAGE_TYPES.REGISTER, (event) => {
            this._trace(MESSAGE_TYPES.REGISTER, event);
            this._registeredFrames.push(event);
            return this.register(event.data).then((windowName) => {
                return { windowName };
            });
        });
        // Update
        postRobot.on(MESSAGE_TYPES.UPDATE, (event) => {
            this._trace(MESSAGE_TYPES.UPDATE, event);
            return this.update(event.data).then((success) => {
                return { success };
            });
        });
        // Open
        postRobot.on(MESSAGE_TYPES.OPEN, (event) => {
            this._trace(MESSAGE_TYPES.OPEN, event);
            return this.open(event.data).then((success) => {
                return { success };
            });
        });
        postRobot.on(MESSAGE_TYPES.OPEN_LIST, (event) => {
            this._trace(MESSAGE_TYPES.OPEN_LIST, event);
            return this.openList(event.data).then((success) => {
                return { success };
            });
        });
        // Close
        postRobot.on(MESSAGE_TYPES.CLOSE, (event) => {
            this._trace(MESSAGE_TYPES.CLOSE, event);
            const index = this._registeredFrames.findIndex((frame) => frame.data.id === event.data.id);
            if (index !== -1) {
                this._registeredFrames.splice(index, 1);
            }
            return this.close(event.data).then((success) => {
                return { success };
            });
        });
        // Refresh
        postRobot.on(MESSAGE_TYPES.REFRESH, (event) => {
            this._trace(MESSAGE_TYPES.REFRESH, event);
            return this.refresh(event.data).then((success) => {
                return { success };
            });
        });
        // PIN
        postRobot.on(MESSAGE_TYPES.PIN, (event) => {
            this._trace(MESSAGE_TYPES.PIN, event);
            return this.pin(event.data).then((success) => {
                return { success };
            });
        });
        // REQUEST_DATA
        postRobot.on(MESSAGE_TYPES.REQUEST_DATA, (event) => {
            this._trace(MESSAGE_TYPES.REQUEST_DATA, event);
            return this.requestData(event.data).then((result) => {
                return { data: result.data, error: result.error };
            });
        });
        // CALLBACKS
        postRobot.on(MESSAGE_TYPES.CALLBACK, (event) => {
            this._trace(MESSAGE_TYPES.CALLBACK, event);
            return this.callback(event.data).then((success) => {
                return { success };
            });
        });
        // HTTP-GET
        postRobot.on(MESSAGE_TYPES.HTTP_GET, (event) => {
            this._trace(MESSAGE_TYPES.HTTP_GET, event);
            return this.httpGET(event.data.relativeURL).then((result) => {
                return { data: result.data, error: result.error };
            });
        });
        // HTTP-POST
        postRobot.on(MESSAGE_TYPES.HTTP_POST, (event) => {
            this._trace(MESSAGE_TYPES.HTTP_POST, event);
            return this.httpPOST(event.data.relativeURL, event.data.data).then((result) => {
                return { data: result.data, error: result.error };
            });
        });
        // HTTP-PUT
        postRobot.on(MESSAGE_TYPES.HTTP_PUT, (event) => {
            this._trace(MESSAGE_TYPES.HTTP_PUT, event);
            return this.httpPUT(event.data.relativeURL, event.data.data).then((result) => {
                return { data: result.data, error: result.error };
            });
        });
        // HTTP-DELETE
        postRobot.on(MESSAGE_TYPES.HTTP_DELETE, (event) => {
            this._trace(MESSAGE_TYPES.HTTP_DELETE, event);
            return this.httpDELETE(event.data.relativeURL).then((result) => {
                return { data: result.data, error: result.error };
            });
        });
        // Custom Events
        postRobot.on(MESSAGE_TYPES.CUSTOM_EVENT, (event) => {
            this._trace(MESSAGE_TYPES.CUSTOM_EVENT, event);
            if (this._eventListeners[event.data.event]) {
                this._eventListeners[event.data.event].forEach((listener) => {
                    listener(event.data.data);
                });
            }
            if (this._registeredFrames.length > 0) {
                this._registeredFrames.forEach((frame) => {
                    postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, event.data);
                });
            }
        });
    }
    /**
     * Fires or responds to an open event
     * @param packet any - packet of data to send with the open event
     */
    open(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.OPEN]) {
                this._handlers[AppBridgeHandler.OPEN](packet, (success) => {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN, packet)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.OPEN} (callback)`, event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires or responds to an openList event
     * @param packet any - packet of data to send with the open event
     */
    openList(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.OPEN_LIST]) {
                this._handlers[AppBridgeHandler.OPEN_LIST](packet, (success) => {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                const openListPacket = {};
                Object.assign(openListPacket, { type: 'List', entityType: packet.type, keywords: packet.keywords, criteria: packet.criteria });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN_LIST, packet)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.OPEN_LIST} (callback)`, event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires or responds to an close event
     * @param packet any - packet of data to send with the close event
     */
    update(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.UPDATE]) {
                this._handlers[AppBridgeHandler.UPDATE](packet, (success) => {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.UPDATE, packet)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.UPDATE} (callback)`, event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires or responds to an close event
     */
    close(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.CLOSE]) {
                this._handlers[AppBridgeHandler.CLOSE](packet, (success) => {
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
                const realPacket = { id: this.id, windowName: this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.CLOSE, realPacket)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.CLOSE} (callback)`, event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires or responds to an close event
     */
    refresh(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.REFRESH]) {
                this._handlers[AppBridgeHandler.REFRESH](packet, (success) => {
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
                const realPacket = { id: this.id, windowName: this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.REFRESH, realPacket)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.REFRESH} (callback)`, event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires or responds to a pin event
     */
    pin(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.PIN]) {
                this._handlers[AppBridgeHandler.PIN](packet, (success) => {
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
                const realPacket = { id: this.id, windowName: this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.PIN, realPacket)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.PIN} (callback)`, event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires or responds to a requestData event
     * @param packet any - packet of data to send with the requestData event
     */
    requestData(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.REQUEST_DATA]) {
                this._handlers[AppBridgeHandler.REQUEST_DATA](packet, (data) => {
                    if (data) {
                        resolve({ data });
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REQUEST_DATA, packet)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.REQUEST_DATA} (callback)`, event);
                    if (event.data) {
                        resolve({ data: event.data.data });
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires a generic callback command
     * @param packet string - key: string, generic: boolean
     */
    callback(packet) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.CALLBACK]) {
                this._handlers[AppBridgeHandler.CALLBACK](packet, (success) => {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                });
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.CALLBACK, packet)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.CALLBACK} (callback)`, event);
                    if (event.data) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                })
                    .catch((err) => {
                    reject(false);
                });
            }
        });
    }
    /**
     * Fires or responds to an register event
     * @param packet any - packet of data to send with the event
     */
    register(packet = {}) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.REGISTER]) {
                this._handlers[AppBridgeHandler.REGISTER](packet, (windowName) => {
                    if (windowName) {
                        resolve(windowName);
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                Object.assign(packet, { id: this.id });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REGISTER, packet)
                    .then((event) => {
                    this._trace(`${MESSAGE_TYPES.REGISTER} (callback)`, event);
                    if (event.data) {
                        this.windowName = event.data.windowName;
                        resolve(event.data.windowName);
                    }
                    else {
                        resolve(null);
                    }
                })
                    .catch((err) => {
                    this._trace(`${MESSAGE_TYPES.REGISTER} - FAILED - (no parent)`, err);
                    reject(err);
                });
            }
        });
    }
    /**
     * Fires or responds to an HTTP_GET event
     * @param packet any - packet of data to send with the event
     */
    httpGET(relativeURL) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.GET, relativeURL }, (data, error) => {
                    resolve({ data, error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_GET, { relativeURL })
                    .then((event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch((err) => {
                    reject(null);
                });
            }
        });
    }
    /**
     * Fires or responds to an HTTP_POST event
     * @param packet any - packet of data to send with the event
     */
    httpPOST(relativeURL, postData) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.POST, relativeURL, data: postData }, (data, error) => {
                    resolve({ data, error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_POST, { relativeURL, data: postData })
                    .then((event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch((err) => {
                    reject(null);
                });
            }
        });
    }
    /**
     * Fires or responds to an HTTP_PUT event
     * @param packet any - packet of data to send with the event
     */
    httpPUT(relativeURL, putData) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.PUT, relativeURL, data: putData }, (data, error) => {
                    resolve({ data, error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_PUT, { relativeURL, data: putData })
                    .then((event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch((err) => {
                    reject(null);
                });
            }
        });
    }
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param packet any - packet of data to send with the event
     */
    httpDELETE(relativeURL) {
        return new Promise((resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.DELETE, relativeURL }, (data, error) => {
                    resolve({ data, error });
                });
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_DELETE, { relativeURL })
                    .then((event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                })
                    .catch((err) => {
                    reject(null);
                });
            }
        });
    }
    /**
     * Fires a custom event to anywhere in the application
     * @param event string - event name to fire
     * @param data any - data to be sent along with the event
     */
    fireEvent(event, data) {
        return new Promise((resolve, reject) => {
            postRobot
                .sendToParent(MESSAGE_TYPES.CUSTOM_EVENT, { event, data })
                .then((e) => {
                resolve(e);
            })
                .catch((err) => {
                reject(null);
            });
        });
    }
    /**
     * Fires a custom event to all registered frames
     * @param event string - event name to fire
     * @param data any - data to be sent along with the event
     */
    fireEventToChildren(event, data) {
        if (this._registeredFrames.length > 0) {
            this._registeredFrames.forEach((frame) => {
                postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, {
                    eventType: event,
                    data,
                });
            });
        }
    }
    /**
     * Adds an event listener to a custom event
     * @param event string - event name to listen to
     * @param callback function - callback to be fired when an event is caught
     */
    addEventListener(event, callback) {
        if (!this._eventListeners[event]) {
            this._eventListeners[event] = [];
        }
        this._eventListeners[event].push(callback);
    }
}
export class DevAppBridge extends AppBridge {
    constructor(traceName = 'DevAppBridge', http) {
        super(traceName);
        this.http = http;
        const cookie = this.getCookie('UlEncodedIdentity');
        if (cookie && cookie.length) {
            const identity = JSON.parse(decodeURIComponent(cookie));
            const endpoints = identity.sessions.reduce((obj, session) => {
                obj[session.name] = session.value.endpoint;
                return obj;
            }, {});
            this.baseURL = endpoints.rest;
        }
    }
    _setupHandlers() { }
    /**
     * Fires or responds to an HTTP_GET event
     * @param packet any - packet of data to send with the event
     */
    httpGET(relativeURL) {
        return this.http.get(`${this.baseURL}/${relativeURL}`, { withCredentials: true }).toPromise();
    }
    /**
     * Fires or responds to an HTTP_POST event
     * @param packet any - packet of data to send with the event
     */
    httpPOST(relativeURL, postData) {
        return this.http.post(`${this.baseURL}/${relativeURL}`, postData, { withCredentials: true }).toPromise();
    }
    /**
     * Fires or responds to an HTTP_PUT event
     * @param packet any - packet of data to send with the event
     */
    httpPUT(relativeURL, putData) {
        return this.http.put(`${this.baseURL}/${relativeURL}`, putData, { withCredentials: true }).toPromise();
    }
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param packet any - packet of data to send with the event
     */
    httpDELETE(relativeURL) {
        return this.http.delete(`${this.baseURL}/${relativeURL}`, { withCredentials: true }).toPromise();
    }
    getCookie(cname) {
        if (document) {
            const name = `${cname}=`;
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
        }
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQnJpZGdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBTixJQUFZLGdCQVdYO0FBWEQsV0FBWSxnQkFBZ0I7SUFDMUIsdURBQUksQ0FBQTtJQUNKLHVEQUFJLENBQUE7SUFDSixpRUFBUyxDQUFBO0lBQ1QseURBQUssQ0FBQTtJQUNMLDZEQUFPLENBQUE7SUFDUCxxREFBRyxDQUFBO0lBQ0gsK0RBQVEsQ0FBQTtJQUNSLDJEQUFNLENBQUE7SUFDTix1RUFBWSxDQUFBO0lBQ1osK0RBQVEsQ0FBQTtBQUNWLENBQUMsRUFYVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBVzNCO0FBd0NELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsS0FBSztJQUNWLE1BQU0sRUFBRSxRQUFRO0NBQ2pCLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRztJQUNwQixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsR0FBRyxFQUFFLEtBQUs7SUFDVixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsU0FBUztJQUNuQixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsU0FBUztJQUNuQixXQUFXLEVBQUUsWUFBWTtJQUN6QixZQUFZLEVBQUUsYUFBYTtJQUMzQixZQUFZLEVBQUUsYUFBYTtJQUMzQixRQUFRLEVBQUUsVUFBVTtDQUNyQixDQUFDO0FBSUYsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsSUFBWTtRQUNqQixPQUFPLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFD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Q25HLENBQUM7SUFFTyxTQUFTLENBQUMsS0FBYTtRQUM3QixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sSUFBSSxHQUFHLEdBQUcsS0FBSyxHQUFHLENBQUM7WUFDekIsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGVudW0gQXBwQnJpZGdlSGFuZGxlciB7XG4gIEhUVFAsXG4gIE9QRU4sXG4gIE9QRU5fTElTVCxcbiAgQ0xPU0UsXG4gIFJFRlJFU0gsXG4gIFBJTixcbiAgUkVHSVNURVIsXG4gIFVQREFURSxcbiAgUkVRVUVTVF9EQVRBLFxuICBDQUxMQkFDSyxcbn1cblxuLy8gcmVjb3JkICAgICAgIC0gYW4gaW5kaXZpZHVhbCBlbnRpdHkgcmVjb3JkXG4vLyBhZGQvZmFzdC1hZGQgLSB0aGUgYWRkIHBhZ2UgZm9yIGEgbmV3IHJlY29yZFxuLy8gY3VzdG9tICAgICAgIC0gY3VzdG9tIGFjdGlvbiB0aGF0IG9wZW5zIHRoZSB1cmwgcHJvdmlkZWQgaW4gZGF0YS51cmxcbi8vIHByZXZpZXcgICAgICAtIHRoZSBwcmV2aWV3IHNsaWRlb3V0IGF2YWlsYWJsZSBvbmx5IGluIE5vdm9cbmV4cG9ydCB0eXBlIE5vdm9BcHBzID0gJ3JlY29yZCcgfCAnYWRkJyB8ICdmYXN0LWFkZCcgfCAnY3VzdG9tJyB8ICdwcmV2aWV3JztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQnJpZGdlT3BlbkV2ZW50IHtcbiAgdHlwZTogTm92b0FwcHM7XG4gIGVudGl0eVR5cGU6IHN0cmluZztcbiAgZW50aXR5SWQ/OiBzdHJpbmc7XG4gIHRhYj86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbiAgcGFzc3Rocm91Z2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE1vc2FpY0xpc3RzID1cbiAgfCAnQ2FuZGlkYXRlJ1xuICB8ICdDbGllbnRDb250YWN0J1xuICB8ICdDbGllbnRDb3Jwb3JhdGlvbidcbiAgfCAnSm9iT3JkZXInXG4gIHwgJ0pvYlN1Ym1pc3Npb24nXG4gIHwgJ0pvYlBvc3RpbmcnXG4gIHwgJ1BsYWNlbWVudCdcbiAgfCAnTGVhZCdcbiAgfCAnT3Bwb3J0dW5pdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCcmlkZ2VPcGVuTGlzdEV2ZW50IHtcbiAgdHlwZTogTW9zYWljTGlzdHM7XG4gIGtleXdvcmRzOiBBcnJheTxzdHJpbmc+O1xuICBjcml0ZXJpYTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBOb3ZvRGF0YVR5cGUgPSAnZW50aXRsZW1lbnRzJyB8ICdzZXR0aW5ncycgfCAndXNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJyaWRnZVJlcXVlc3REYXRhRXZlbnQge1xuICB0eXBlOiBOb3ZvRGF0YVR5cGU7XG59XG5cbmNvbnN0IEhUVFBfVkVSQlMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJyxcbn07XG5cbmNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gIFJFR0lTVEVSOiAncmVnaXN0ZXInLFxuICBPUEVOOiAnb3BlbicsXG4gIE9QRU5fTElTVDogJ29wZW5MaXN0JyxcbiAgQ0xPU0U6ICdjbG9zZScsXG4gIFJFRlJFU0g6ICdyZWZyZXNoJyxcbiAgUElOOiAncGluJyxcbiAgVVBEQVRFOiAndXBkYXRlJyxcbiAgSFRUUF9HRVQ6ICdodHRwR0VUJyxcbiAgSFRUUF9QT1NUOiAnaHR0cFBPU1QnLFxuICBIVFRQX1BVVDogJ2h0dHBQVVQnLFxuICBIVFRQX0RFTEVURTogJ2h0dHBERUxFVEUnLFxuICBDVVNUT01fRVZFTlQ6ICdjdXN0b21FdmVudCcsXG4gIFJFUVVFU1RfREFUQTogJ3JlcXVlc3REYXRhJyxcbiAgQ0FMTEJBQ0s6ICdjYWxsYmFjaycsXG59O1xuXG5kZWNsYXJlIGNvbnN0IHBvc3RSb2JvdDogYW55O1xuXG5leHBvcnQgY2xhc3MgQXBwQnJpZGdlU2VydmljZSB7XG4gIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFwcEJyaWRnZShuYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2QXBwQnJpZGdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgY3JlYXRlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGV2QXBwQnJpZGdlKG5hbWUsIHRoaXMuaHR0cCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcEJyaWRnZSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nID0gYCR7RGF0ZS5ub3coKX1gO1xuICBwdWJsaWMgdHJhY2VOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyB3aW5kb3dOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJlZEZyYW1lcyA9IFtdO1xuICBwcml2YXRlIF9oYW5kbGVycyA9IHt9O1xuICBwcml2YXRlIF90cmFjaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2V2ZW50TGlzdGVuZXJzOiBhbnkgPSB7fTtcblxuICAvLyBUeXBlP1xuICBjb25zdHJ1Y3Rvcih0cmFjZU5hbWU6IHN0cmluZyA9ICdBcHBCcmlkZ2UnKSB7XG4gICAgdGhpcy50cmFjZU5hbWUgPSB0cmFjZU5hbWU7XG4gICAgaWYgKHBvc3RSb2JvdCkge1xuICAgICAgcG9zdFJvYm90LkNPTkZJRy5MT0dfTEVWRUwgPSAnZXJyb3InO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fc2V0dXBIYW5kbGVycygpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gTm8gb3BcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXQgdHJhY2luZyh0cmFjaW5nOiBib29sZWFuKSB7XG4gICAgdGhpcy5fdHJhY2luZyA9IHRyYWNpbmc7XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlKHR5cGU6IEFwcEJyaWRnZUhhbmRsZXIsIGhhbmRsZXI6IEZ1bmN0aW9uKSB7XG4gICAgdGhpcy5faGFuZGxlcnNbdHlwZV0gPSBoYW5kbGVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfdHJhY2UoZXZlbnRUeXBlLCBldmVudCkge1xuICAgIGlmICh0aGlzLl90cmFjaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgWyR7dGhpcy50cmFjZU5hbWUgfHwgdGhpcy5pZH1dIFwiJHtldmVudFR5cGV9XCJgLCBldmVudCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgX3NldHVwSGFuZGxlcnMoKTogdm9pZCB7XG4gICAgLy8gUmVnaXN0ZXJcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5SRUdJU1RFUiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLlJFR0lTVEVSLCBldmVudCk7XG4gICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLnB1c2goZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZXZlbnQuZGF0YSkudGhlbigod2luZG93TmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4geyB3aW5kb3dOYW1lIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBVcGRhdGVcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5VUERBVEUsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5VUERBVEUsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShldmVudC5kYXRhKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIE9wZW5cbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5PUEVOLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuT1BFTiwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMub3BlbihldmVudC5kYXRhKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLk9QRU5fTElTVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLk9QRU5fTElTVCwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMub3Blbkxpc3QoZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBDbG9zZVxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkNMT1NFLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuQ0xPU0UsIGV2ZW50KTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5maW5kSW5kZXgoKGZyYW1lKSA9PiBmcmFtZS5kYXRhLmlkID09PSBldmVudC5kYXRhLmlkKTtcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY2xvc2UoZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBSZWZyZXNoXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUkVGUkVTSCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2goZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBQSU5cbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5QSU4sIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5QSU4sIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnBpbihldmVudC5kYXRhKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFJFUVVFU1RfREFUQVxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlJFUVVFU1RfREFUQSwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLlJFUVVFU1RfREFUQSwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdERhdGEoZXZlbnQuZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBDQUxMQkFDS1NcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkNBTExCQUNLLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5jYWxsYmFjayhldmVudC5kYXRhKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEhUVFAtR0VUXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuSFRUUF9HRVQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX0dFVCwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cEdFVChldmVudC5kYXRhLnJlbGF0aXZlVVJMKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEhUVFAtUE9TVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfUE9TVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkhUVFBfUE9TVCwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFBPU1QoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCwgZXZlbnQuZGF0YS5kYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEhUVFAtUFVUXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX1BVVCwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFBVVChldmVudC5kYXRhLnJlbGF0aXZlVVJMLCBldmVudC5kYXRhLmRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gSFRUUC1ERUxFVEVcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5IVFRQX0RFTEVURSwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkhUVFBfREVMRVRFLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwREVMRVRFKGV2ZW50LmRhdGEucmVsYXRpdmVVUkwpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ3VzdG9tIEV2ZW50c1xuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgZXZlbnQpO1xuICAgICAgaWYgKHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50LmRhdGEuZXZlbnRdKSB7XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50LmRhdGEuZXZlbnRdLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgbGlzdGVuZXIoZXZlbnQuZGF0YS5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgICBwb3N0Um9ib3Quc2VuZChmcmFtZS5zb3VyY2UsIE1FU1NBR0VfVFlQRVMuQ1VTVE9NX0VWRU5ULCBldmVudC5kYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gb3BlbiBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgb3BlbiBldmVudFxuICAgKi9cbiAgcHVibGljIG9wZW4ocGFja2V0OiBJQXBwQnJpZGdlT3BlbkV2ZW50KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5dKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuT1BFTl0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuT1BFTiwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5PUEVOfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBvcGVuTGlzdCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgb3BlbiBldmVudFxuICAgKi9cbiAgcHVibGljIG9wZW5MaXN0KHBhY2tldDogUGFydGlhbDxJQXBwQnJpZGdlT3Blbkxpc3RFdmVudD4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuT1BFTl9MSVNUXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5fTElTVF0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvcGVuTGlzdFBhY2tldCA9IHt9O1xuICAgICAgICBPYmplY3QuYXNzaWduKG9wZW5MaXN0UGFja2V0LCB7IHR5cGU6ICdMaXN0JywgZW50aXR5VHlwZTogcGFja2V0LnR5cGUsIGtleXdvcmRzOiBwYWNrZXQua2V5d29yZHMsIGNyaXRlcmlhOiBwYWNrZXQuY3JpdGVyaWEgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuT1BFTl9MSVNUfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgY2xvc2UgZXZlbnRcbiAgICovXG4gIHB1YmxpYyB1cGRhdGUoXG4gICAgcGFja2V0OiBQYXJ0aWFsPHsgZW50aXR5VHlwZTogc3RyaW5nOyBlbnRpdHlJZDogc3RyaW5nOyB0aXRsZTogc3RyaW5nOyB0aXRsZUtleTogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+LFxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuVVBEQVRFXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlVQREFURV0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuVVBEQVRFLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlVQREFURX0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gY2xvc2UgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBjbG9zZShwYWNrZXQ/OiBvYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuQ0xPU0VdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuQ0xPU0VdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbygnW0FwcEJyaWRnZV0gLSBjbG9zZShwYWNrZXQpIGlzIGRlcHJlY2F0ZWQhIFBsZWFzZSBqdXN0IHVzZSBjbG9zZSgpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhbFBhY2tldCA9IHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9O1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuQ0xPU0UsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLkNMT1NFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlZnJlc2gocGFja2V0Pzogb2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFRlJFU0hdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVGUkVTSF0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIHJlZnJlc2gocGFja2V0KSBpcyBkZXByZWNhdGVkISBQbGVhc2UganVzdCB1c2UgcmVmcmVzaCgpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVhbFBhY2tldCA9IHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9O1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuUkVGUkVTSCwgcmVhbFBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUkVGUkVTSH0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYSBwaW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBwaW4ocGFja2V0Pzogb2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlBJTl0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5QSU5dKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhY2tldCkge1xuICAgICAgICAgIGNvbnNvbGUuaW5mbygnW0FwcEJyaWRnZV0gLSBwaW4ocGFja2V0KSBpcyBkZXByZWNhdGVkISBQbGVhc2UganVzdCB1c2UgcGluKCkhJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFsUGFja2V0ID0geyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH07XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5QSU4sIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlBJTn0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYSByZXF1ZXN0RGF0YSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgcmVxdWVzdERhdGEgZXZlbnRcbiAgICovXG4gIHB1YmxpYyByZXF1ZXN0RGF0YShwYWNrZXQ6IHsgdHlwZTogc3RyaW5nIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFUVVFU1RfREFUQV0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5SRVFVRVNUX0RBVEFdKHBhY2tldCwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YSB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFUVVFU1RfREFUQSwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEF9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgZ2VuZXJpYyBjYWxsYmFjayBjb21tYW5kXG4gICAqIEBwYXJhbSBwYWNrZXQgc3RyaW5nIC0ga2V5OiBzdHJpbmcsIGdlbmVyaWM6IGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBjYWxsYmFjayhwYWNrZXQ6IHsga2V5OiBzdHJpbmc7IGdlbmVyaWM6IGJvb2xlYW47IG9wdGlvbnM6IG9iamVjdCB9KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DQUxMQkFDS10pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DQUxMQkFDS10ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuQ0FMTEJBQ0ssIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuQ0FMTEJBQ0t9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIHJlZ2lzdGVyIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyKHBhY2tldDogUGFydGlhbDx7IHRpdGxlOiBzdHJpbmc7IHVybDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+ID0ge30pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxzdHJpbmc+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFR0lTVEVSXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFR0lTVEVSXShwYWNrZXQsICh3aW5kb3dOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICBpZiAod2luZG93TmFtZSkge1xuICAgICAgICAgICAgcmVzb2x2ZSh3aW5kb3dOYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5SRUdJU1RFUiwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5SRUdJU1RFUn0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHRoaXMud2luZG93TmFtZSA9IGV2ZW50LmRhdGEud2luZG93TmFtZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShldmVudC5kYXRhLndpbmRvd05hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFR0lTVEVSfSAtIEZBSUxFRCAtIChubyBwYXJlbnQpYCwgZXJyKTtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfR0VUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBHRVQocmVsYXRpdmVVUkw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSh7IHZlcmI6IEhUVFBfVkVSQlMuR0VULCByZWxhdGl2ZVVSTCB9LCAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX0dFVCwgeyByZWxhdGl2ZVVSTCB9KVxuICAgICAgICAgIC50aGVuKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhLCBlcnJvcjogZXZlbnQuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QT1NUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQT1NUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHBvc3REYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oXG4gICAgICAgICAgeyB2ZXJiOiBIVFRQX1ZFUkJTLlBPU1QsIHJlbGF0aXZlVVJMLCBkYXRhOiBwb3N0RGF0YSB9LFxuICAgICAgICAgIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBlcnJvciB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfUE9TVCwgeyByZWxhdGl2ZVVSTCwgZGF0YTogcG9zdERhdGEgfSlcbiAgICAgICAgICAudGhlbigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSwgZXJyb3I6IGV2ZW50LmRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfUFVUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQVVQocmVsYXRpdmVVUkw6IHN0cmluZywgcHV0RGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKFxuICAgICAgICAgIHsgdmVyYjogSFRUUF9WRVJCUy5QVVQsIHJlbGF0aXZlVVJMLCBkYXRhOiBwdXREYXRhIH0sXG4gICAgICAgICAgKGRhdGE6IGFueSwgZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIHsgcmVsYXRpdmVVUkwsIGRhdGE6IHB1dERhdGEgfSlcbiAgICAgICAgICAudGhlbigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSwgZXJyb3I6IGV2ZW50LmRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfREVMRVRFIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBERUxFVEUocmVsYXRpdmVVUkw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSh7IHZlcmI6IEhUVFBfVkVSQlMuREVMRVRFLCByZWxhdGl2ZVVSTCB9LCAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX0RFTEVURSwgeyByZWxhdGl2ZVVSTCB9KVxuICAgICAgICAgIC50aGVuKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhLCBlcnJvcjogZXZlbnQuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjdXN0b20gZXZlbnQgdG8gYW55d2hlcmUgaW4gdGhlIGFwcGxpY2F0aW9uXG4gICAqIEBwYXJhbSBldmVudCBzdHJpbmcgLSBldmVudCBuYW1lIHRvIGZpcmVcbiAgICogQHBhcmFtIGRhdGEgYW55IC0gZGF0YSB0byBiZSBzZW50IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgZmlyZUV2ZW50KGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcG9zdFJvYm90XG4gICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIHsgZXZlbnQsIGRhdGEgfSlcbiAgICAgICAgLnRoZW4oKGU6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGN1c3RvbSBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBmcmFtZXNcbiAgICogQHBhcmFtIGV2ZW50IHN0cmluZyAtIGV2ZW50IG5hbWUgdG8gZmlyZVxuICAgKiBAcGFyYW0gZGF0YSBhbnkgLSBkYXRhIHRvIGJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBmaXJlRXZlbnRUb0NoaWxkcmVuKGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgcG9zdFJvYm90LnNlbmQoZnJhbWUuc291cmNlLCBNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwge1xuICAgICAgICAgIGV2ZW50VHlwZTogZXZlbnQsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIGN1c3RvbSBldmVudFxuICAgKiBAcGFyYW0gZXZlbnQgc3RyaW5nIC0gZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIGNhbGxiYWNrIGZ1bmN0aW9uIC0gY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiBhbiBldmVudCBpcyBjYXVnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXZBcHBCcmlkZ2UgZXh0ZW5kcyBBcHBCcmlkZ2Uge1xuICBwcml2YXRlIGJhc2VVUkw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0cmFjZU5hbWU6IHN0cmluZyA9ICdEZXZBcHBCcmlkZ2UnLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBzdXBlcih0cmFjZU5hbWUpO1xuICAgIGNvbnN0IGNvb2tpZSA9IHRoaXMuZ2V0Q29va2llKCdVbEVuY29kZWRJZGVudGl0eScpO1xuICAgIGlmIChjb29raWUgJiYgY29va2llLmxlbmd0aCkge1xuICAgICAgY29uc3QgaWRlbnRpdHkgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChjb29raWUpKTtcbiAgICAgIGNvbnN0IGVuZHBvaW50cyA9IGlkZW50aXR5LnNlc3Npb25zLnJlZHVjZSgob2JqLCBzZXNzaW9uKSA9PiB7XG4gICAgICAgIG9ialtzZXNzaW9uLm5hbWVdID0gc2Vzc2lvbi52YWx1ZS5lbmRwb2ludDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuYmFzZVVSTCA9IGVuZHBvaW50cy5yZXN0O1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3NldHVwSGFuZGxlcnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0dFVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwR0VUKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BPU1QgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cFBPU1QocmVsYXRpdmVVUkw6IHN0cmluZywgcG9zdERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCBwb3N0RGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QVVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cFBVVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwdXREYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCBwdXREYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0RFTEVURSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwREVMRVRFKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29va2llKGNuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgY29uc3QgbmFtZSA9IGAke2NuYW1lfT1gO1xuICAgICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19