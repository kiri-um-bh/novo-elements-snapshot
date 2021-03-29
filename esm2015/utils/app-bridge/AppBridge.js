/**
 * @fileoverview added by tsickle
 * Generated from: utils/app-bridge/AppBridge.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AppBridgeHandler = {
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
const HTTP_VERBS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
};
/** @type {?} */
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
    /**
     * @param {?} name
     * @return {?}
     */
    create(name) {
        return new AppBridge(name);
    }
}
export class DevAppBridgeService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    create(name) {
        return new DevAppBridge(name, this.http);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    DevAppBridgeService.prototype.http;
}
export class AppBridge {
    // Type?
    /**
     * @param {?=} traceName
     */
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
    /**
     * @param {?} tracing
     * @return {?}
     */
    set tracing(tracing) {
        this._tracing = tracing;
    }
    /**
     * @param {?} type
     * @param {?} handler
     * @return {?}
     */
    handle(type, handler) {
        this._handlers[type] = handler;
    }
    /**
     * @private
     * @param {?} eventType
     * @param {?} event
     * @return {?}
     */
    _trace(eventType, event) {
        if (this._tracing) {
            console.log(`[${this.traceName || this.id}] "${eventType}"`, event); // tslint:disable-line
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _setupHandlers() {
        // Register
        postRobot.on(MESSAGE_TYPES.REGISTER, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.REGISTER, event);
            this._registeredFrames.push(event);
            return this.register(event.data).then((/**
             * @param {?} windowName
             * @return {?}
             */
            (windowName) => {
                return { windowName };
            }));
        }));
        // Update
        postRobot.on(MESSAGE_TYPES.UPDATE, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.UPDATE, event);
            return this.update(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                return { success };
            }));
        }));
        // Open
        postRobot.on(MESSAGE_TYPES.OPEN, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.OPEN, event);
            return this.open(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                return { success };
            }));
        }));
        postRobot.on(MESSAGE_TYPES.OPEN_LIST, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.OPEN_LIST, event);
            return this.openList(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                return { success };
            }));
        }));
        // Close
        postRobot.on(MESSAGE_TYPES.CLOSE, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.CLOSE, event);
            /** @type {?} */
            const index = this._registeredFrames.findIndex((/**
             * @param {?} frame
             * @return {?}
             */
            (frame) => frame.data.id === event.data.id));
            if (index !== -1) {
                this._registeredFrames.splice(index, 1);
            }
            return this.close(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                return { success };
            }));
        }));
        // Refresh
        postRobot.on(MESSAGE_TYPES.REFRESH, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.REFRESH, event);
            return this.refresh(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                return { success };
            }));
        }));
        // PIN
        postRobot.on(MESSAGE_TYPES.PIN, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.PIN, event);
            return this.pin(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                return { success };
            }));
        }));
        // REQUEST_DATA
        postRobot.on(MESSAGE_TYPES.REQUEST_DATA, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.REQUEST_DATA, event);
            return this.requestData(event.data).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                return { data: result.data, error: result.error };
            }));
        }));
        // CALLBACKS
        postRobot.on(MESSAGE_TYPES.CALLBACK, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.CALLBACK, event);
            return this.callback(event.data).then((/**
             * @param {?} success
             * @return {?}
             */
            (success) => {
                return { success };
            }));
        }));
        // HTTP-GET
        postRobot.on(MESSAGE_TYPES.HTTP_GET, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.HTTP_GET, event);
            return this.httpGET(event.data.relativeURL).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                return { data: result.data, error: result.error };
            }));
        }));
        // HTTP-POST
        postRobot.on(MESSAGE_TYPES.HTTP_POST, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.HTTP_POST, event);
            return this.httpPOST(event.data.relativeURL, event.data.data).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                return { data: result.data, error: result.error };
            }));
        }));
        // HTTP-PUT
        postRobot.on(MESSAGE_TYPES.HTTP_PUT, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.HTTP_PUT, event);
            return this.httpPUT(event.data.relativeURL, event.data.data).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                return { data: result.data, error: result.error };
            }));
        }));
        // HTTP-DELETE
        postRobot.on(MESSAGE_TYPES.HTTP_DELETE, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.HTTP_DELETE, event);
            return this.httpDELETE(event.data.relativeURL).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                return { data: result.data, error: result.error };
            }));
        }));
        // Custom Events
        postRobot.on(MESSAGE_TYPES.CUSTOM_EVENT, (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._trace(MESSAGE_TYPES.CUSTOM_EVENT, event);
            if (this._eventListeners[event.data.event]) {
                this._eventListeners[event.data.event].forEach((/**
                 * @param {?} listener
                 * @return {?}
                 */
                (listener) => {
                    listener(event.data.data);
                }));
            }
            if (this._registeredFrames.length > 0) {
                this._registeredFrames.forEach((/**
                 * @param {?} frame
                 * @return {?}
                 */
                (frame) => {
                    postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, event.data);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an open event
     * @param {?} packet any - packet of data to send with the open event
     * @return {?}
     */
    open(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.OPEN]) {
                this._handlers[AppBridgeHandler.OPEN](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.OPEN} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an openList event
     * @param {?} packet any - packet of data to send with the open event
     * @return {?}
     */
    openList(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.OPEN_LIST]) {
                this._handlers[AppBridgeHandler.OPEN_LIST](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
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
                const openListPacket = {};
                Object.assign(openListPacket, { type: 'List', entityType: packet.type, keywords: packet.keywords, criteria: packet.criteria });
                postRobot
                    .sendToParent(MESSAGE_TYPES.OPEN_LIST, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.OPEN_LIST} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an close event
     * @param {?} packet any - packet of data to send with the close event
     * @return {?}
     */
    update(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.UPDATE]) {
                this._handlers[AppBridgeHandler.UPDATE](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.UPDATE, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.UPDATE} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an close event
     * @param {?=} packet
     * @return {?}
     */
    close(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.CLOSE]) {
                this._handlers[AppBridgeHandler.CLOSE](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
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
                const realPacket = { id: this.id, windowName: this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.CLOSE, realPacket)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.CLOSE} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an close event
     * @param {?=} packet
     * @return {?}
     */
    refresh(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.REFRESH]) {
                this._handlers[AppBridgeHandler.REFRESH](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
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
                const realPacket = { id: this.id, windowName: this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.REFRESH, realPacket)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.REFRESH} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires or responds to a pin event
     * @param {?=} packet
     * @return {?}
     */
    pin(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.PIN]) {
                this._handlers[AppBridgeHandler.PIN](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
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
                const realPacket = { id: this.id, windowName: this.windowName };
                postRobot
                    .sendToParent(MESSAGE_TYPES.PIN, realPacket)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.PIN} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires or responds to a requestData event
     * @param {?} packet any - packet of data to send with the requestData event
     * @return {?}
     */
    requestData(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.REQUEST_DATA]) {
                this._handlers[AppBridgeHandler.REQUEST_DATA](packet, (/**
                 * @param {?} data
                 * @return {?}
                 */
                (data) => {
                    if (data) {
                        resolve({ data });
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REQUEST_DATA, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.REQUEST_DATA} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires a generic callback command
     * @param {?} packet string - key: string, generic: boolean
     * @return {?}
     */
    callback(packet) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.CALLBACK]) {
                this._handlers[AppBridgeHandler.CALLBACK](packet, (/**
                 * @param {?} success
                 * @return {?}
                 */
                (success) => {
                    if (success) {
                        resolve(true);
                    }
                    else {
                        reject(false);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: this.id, windowName: this.windowName });
                postRobot
                    .sendToParent(MESSAGE_TYPES.CALLBACK, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.CALLBACK} (callback)`, event);
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
                (err) => {
                    reject(false);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an register event
     * @param {?=} packet any - packet of data to send with the event
     * @return {?}
     */
    register(packet = {}) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.REGISTER]) {
                this._handlers[AppBridgeHandler.REGISTER](packet, (/**
                 * @param {?} windowName
                 * @return {?}
                 */
                (windowName) => {
                    if (windowName) {
                        resolve(windowName);
                    }
                    else {
                        resolve(null);
                    }
                }));
            }
            else {
                Object.assign(packet, { id: this.id });
                postRobot
                    .sendToParent(MESSAGE_TYPES.REGISTER, packet)
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    this._trace(`${MESSAGE_TYPES.REGISTER} (callback)`, event);
                    if (event.data) {
                        this.windowName = event.data.windowName;
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
                (err) => {
                    this._trace(`${MESSAGE_TYPES.REGISTER} - FAILED - (no parent)`, err);
                    reject(err);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an HTTP_GET event
     * @param {?} relativeURL
     * @param {?=} timeout
     * @return {?}
     */
    httpGET(relativeURL, timeout = 10000) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.GET, relativeURL }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                (data, error) => {
                    resolve({ data, error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_GET, { relativeURL }, { timeout })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    reject(null);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an HTTP_POST event
     * @param {?} relativeURL
     * @param {?} postData
     * @param {?=} timeout
     * @return {?}
     */
    httpPOST(relativeURL, postData, timeout = 10000) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.POST, relativeURL, data: postData }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                (data, error) => {
                    resolve({ data, error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_POST, { relativeURL, data: postData }, { timeout })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    reject(null);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an HTTP_PUT event
     * @param {?} relativeURL
     * @param {?} putData
     * @param {?=} timeout
     * @return {?}
     */
    httpPUT(relativeURL, putData, timeout = 10000) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.PUT, relativeURL, data: putData }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                (data, error) => {
                    resolve({ data, error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_PUT, { relativeURL, data: putData }, { timeout })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    reject(null);
                }));
            }
        }));
    }
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param {?} relativeURL
     * @param {?=} timeout
     * @return {?}
     */
    httpDELETE(relativeURL, timeout = 10000) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.DELETE, relativeURL }, (/**
                 * @param {?} data
                 * @param {?} error
                 * @return {?}
                 */
                (data, error) => {
                    resolve({ data, error });
                }));
            }
            else {
                postRobot
                    .sendToParent(MESSAGE_TYPES.HTTP_DELETE, { relativeURL }, { timeout })
                    .then((/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    resolve({ data: event.data.data, error: event.data.error });
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    reject(null);
                }));
            }
        }));
    }
    /**
     * Fires a custom event to anywhere in the application
     * @param {?} event string - event name to fire
     * @param {?} data any - data to be sent along with the event
     * @return {?}
     */
    fireEvent(event, data) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            postRobot
                .sendToParent(MESSAGE_TYPES.CUSTOM_EVENT, { event, data })
                .then((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                resolve(e);
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                reject(null);
            }));
        }));
    }
    /**
     * Fires a custom event to all registered frames
     * @param {?} event string - event name to fire
     * @param {?} data any - data to be sent along with the event
     * @return {?}
     */
    fireEventToChildren(event, data) {
        if (this._registeredFrames.length > 0) {
            this._registeredFrames.forEach((/**
             * @param {?} frame
             * @return {?}
             */
            (frame) => {
                postRobot.send(frame.source, MESSAGE_TYPES.CUSTOM_EVENT, {
                    eventType: event,
                    data,
                });
            }));
        }
    }
    /**
     * Adds an event listener to a custom event
     * @param {?} event string - event name to listen to
     * @param {?} callback function - callback to be fired when an event is caught
     * @return {?}
     */
    addEventListener(event, callback) {
        if (!this._eventListeners[event]) {
            this._eventListeners[event] = [];
        }
        this._eventListeners[event].push(callback);
    }
}
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
export class DevAppBridge extends AppBridge {
    /**
     * @param {?=} traceName
     * @param {?=} http
     */
    constructor(traceName = 'DevAppBridge', http) {
        super(traceName);
        this.http = http;
        /** @type {?} */
        const cookie = this.getCookie('UlEncodedIdentity');
        if (cookie && cookie.length) {
            /** @type {?} */
            const identity = JSON.parse(decodeURIComponent(cookie));
            /** @type {?} */
            const endpoints = identity.sessions.reduce((/**
             * @param {?} obj
             * @param {?} session
             * @return {?}
             */
            (obj, session) => {
                obj[session.name] = session.value.endpoint;
                return obj;
            }), {});
            this.baseURL = endpoints.rest;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    _setupHandlers() { }
    /**
     * Fires or responds to an HTTP_GET event
     * @param {?} relativeURL
     * @return {?}
     */
    httpGET(relativeURL) {
        return this.http.get(`${this.baseURL}/${relativeURL}`, { withCredentials: true }).toPromise();
    }
    /**
     * Fires or responds to an HTTP_POST event
     * @param {?} relativeURL
     * @param {?} postData
     * @return {?}
     */
    httpPOST(relativeURL, postData) {
        return this.http.post(`${this.baseURL}/${relativeURL}`, postData, { withCredentials: true }).toPromise();
    }
    /**
     * Fires or responds to an HTTP_PUT event
     * @param {?} relativeURL
     * @param {?} putData
     * @return {?}
     */
    httpPUT(relativeURL, putData) {
        return this.http.put(`${this.baseURL}/${relativeURL}`, putData, { withCredentials: true }).toPromise();
    }
    /**
     * Fires or responds to an HTTP_DELETE event
     * @param {?} relativeURL
     * @return {?}
     */
    httpDELETE(relativeURL) {
        return this.http.delete(`${this.baseURL}/${relativeURL}`, { withCredentials: true }).toPromise();
    }
    /**
     * @private
     * @param {?} cname
     * @return {?}
     */
    getCookie(cname) {
        if (document) {
            /** @type {?} */
            const name = `${cname}=`;
            /** @type {?} */
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQnJpZGdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQVksZ0JBQWdCO0lBQzFCLElBQUksR0FBQTtJQUNKLElBQUksR0FBQTtJQUNKLFNBQVMsR0FBQTtJQUNULEtBQUssR0FBQTtJQUNMLE9BQU8sR0FBQTtJQUNQLEdBQUcsR0FBQTtJQUNILFFBQVEsR0FBQTtJQUNSLE1BQU0sR0FBQTtJQUNOLFlBQVksR0FBQTtJQUNaLFFBQVEsR0FBQTtFQUNUOzs7Ozs7Ozs7Ozs7Ozs7QUFRRCx5Q0FPQzs7O0lBTkMsbUNBQWU7O0lBQ2YseUNBQW1COztJQUNuQix1Q0FBa0I7O0lBQ2xCLGtDQUFhOztJQUNiLG1DQUFXOztJQUNYLDBDQUFxQjs7Ozs7QUFjdkIsNkNBSUM7OztJQUhDLHVDQUFrQjs7SUFDbEIsMkNBQXdCOztJQUN4QiwyQ0FBYzs7Ozs7QUFLaEIsZ0RBRUM7OztJQURDLDBDQUFtQjs7O01BR2YsVUFBVSxHQUFHO0lBQ2pCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsS0FBSztJQUNWLE1BQU0sRUFBRSxRQUFRO0NBQ2pCOztNQUVLLGFBQWEsR0FBRztJQUNwQixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsR0FBRyxFQUFFLEtBQUs7SUFDVixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsU0FBUztJQUNuQixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsU0FBUztJQUNuQixXQUFXLEVBQUUsWUFBWTtJQUN6QixZQUFZLEVBQUUsYUFBYTtJQUMzQixZQUFZLEVBQUUsYUFBYTtJQUMzQixRQUFRLEVBQUUsVUFBVTtDQUNyQjtBQUlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBQzNCLE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUM5QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFDeEMsTUFBTSxDQUFDLElBQVk7UUFDakIsT0FBTyxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjs7Ozs7O0lBSmEsbUNBQXdCOztBQU10QyxNQUFNLE9BQU8sU0FBUzs7Ozs7SUFXcEIsWUFBWSxZQUFvQixXQUFXO1FBVnBDLE9BQUUsR0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1FBSTVCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUloQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLFNBQVMsRUFBRTtZQUNiLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUNyQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLFFBQVE7YUFDVDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFnQjtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFTSxNQUFNLENBQUMsSUFBc0IsRUFBRSxPQUFpQjtRQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDOzs7Ozs7O0lBRU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLO1FBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxNQUFNLFNBQVMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1NBQzVGO0lBQ0gsQ0FBQzs7Ozs7SUFFUyxjQUFjO1FBQ3RCLFdBQVc7UUFDWCxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILFNBQVM7UUFDVCxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDekMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPO1FBQ1AsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ2hELE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsUUFBUTtRQUNSLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUs7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzs7a0JBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUzs7OztZQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQztZQUMxRixJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDekM7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUM3QyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILFVBQVU7UUFDVixTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtnQkFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxNQUFNO1FBQ04sU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsZUFBZTtRQUNmLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVk7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMvQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNsRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwRCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsWUFBWTtRQUNaLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVE7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILFdBQVc7UUFDWCxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFROzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzFELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxZQUFZO1FBQ1osU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUM1RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwRCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsV0FBVztRQUNYLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFFBQVE7Ozs7UUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDM0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEQsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILGNBQWM7UUFDZCxTQUFTLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXOzs7O1FBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSTs7OztZQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzdELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BELENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxnQkFBZ0I7UUFDaEIsU0FBUyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWTs7OztRQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUMxRCxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkUsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sSUFBSSxDQUFDLE1BQTJCO1FBQ3JDLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNOzs7O2dCQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFO29CQUNqRSxJQUFJLE9BQU8sRUFBRTt3QkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BFLFNBQVM7cUJBQ04sWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO3FCQUN4QyxJQUFJOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxJQUFJLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU1NLFFBQVEsQ0FBQyxNQUF3QztRQUN0RCxPQUFPLElBQUksT0FBTzs7Ozs7UUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM5QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTTs7OztnQkFBRSxDQUFDLE9BQWdCLEVBQUUsRUFBRTtvQkFDdEUsSUFBSSxPQUFPLEVBQUU7d0JBQ1gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDZjtnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNOztzQkFDQyxjQUFjLEdBQUcsRUFBRTtnQkFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDL0gsU0FBUztxQkFDTixZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7cUJBQzdDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLFNBQVMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM1RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7d0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDZjtnQkFDSCxDQUFDLEVBQUM7cUJBQ0QsS0FBSzs7OztnQkFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxFQUFDLENBQUM7YUFDTjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sTUFBTSxDQUNYLE1BQXlHO1FBRXpHLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNOzs7O2dCQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFO29CQUNuRSxJQUFJLE9BQU8sRUFBRTt3QkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3BFLFNBQVM7cUJBQ04sWUFBWSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO3FCQUMxQyxJQUFJOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDekQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUtNLEtBQUssQ0FBQyxNQUFlO1FBQzFCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNOzs7O2dCQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFO29CQUNsRSxJQUFJLE9BQU8sRUFBRTt3QkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO2lCQUM1Rzs7c0JBQ0ssVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQy9ELFNBQVM7cUJBQ04sWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDO3FCQUM3QyxJQUFJOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDeEQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUtNLE9BQU8sQ0FBQyxNQUFlO1FBQzVCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNOzs7O2dCQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFO29CQUNwRSxJQUFJLE9BQU8sRUFBRTt3QkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO2lCQUNoSDs7c0JBQ0ssVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQy9ELFNBQVM7cUJBQ04sWUFBWSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO3FCQUMvQyxJQUFJOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxPQUFPLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUtNLEdBQUcsQ0FBQyxNQUFlO1FBQ3hCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNOzs7O2dCQUFFLENBQUMsT0FBZ0IsRUFBRSxFQUFFO29CQUNoRSxJQUFJLE9BQU8sRUFBRTt3QkFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsSUFBSSxNQUFNLEVBQUU7b0JBQ1YsT0FBTyxDQUFDLElBQUksQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUMsc0JBQXNCO2lCQUN4Rzs7c0JBQ0ssVUFBVSxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQy9ELFNBQVM7cUJBQ04sWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDO3FCQUMzQyxJQUFJOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU1NLFdBQVcsQ0FBQyxNQUF3QjtRQUN6QyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTTs7OztnQkFBRSxDQUFDLElBQVMsRUFBRSxFQUFFO29CQUNsRSxJQUFJLElBQUksRUFBRTt3QkFDUixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3FCQUNuQjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDcEUsU0FBUztxQkFDTixZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7cUJBQ2hELElBQUk7Ozs7Z0JBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLFlBQVksYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMvRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7d0JBQ2QsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztxQkFDcEM7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQztxQkFDRCxLQUFLOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQixDQUFDLEVBQUMsQ0FBQzthQUNOO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFNTSxRQUFRLENBQUMsTUFBMEQ7UUFDeEUsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07Ozs7Z0JBQUUsQ0FBQyxPQUFnQixFQUFFLEVBQUU7b0JBQ3JFLElBQUksT0FBTyxFQUFFO3dCQUNYLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDZjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDcEUsU0FBUztxQkFDTixZQUFZLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7cUJBQzVDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtvQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMzRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7d0JBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDZjtnQkFDSCxDQUFDLEVBQUM7cUJBQ0QsS0FBSzs7OztnQkFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEIsQ0FBQyxFQUFDLENBQUM7YUFDTjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTU0sUUFBUSxDQUFDLFNBQWlFLEVBQUU7UUFDakYsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU07Ozs7Z0JBQUUsQ0FBQyxVQUFrQixFQUFFLEVBQUU7b0JBQ3ZFLElBQUksVUFBVSxFQUFFO3dCQUNkLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztxQkFDckI7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZDLFNBQVM7cUJBQ04sWUFBWSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDO3FCQUM1QyxJQUFJOzs7O2dCQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxRQUFRLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO3dCQUNkLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUNoQzt5QkFBTTt3QkFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Y7Z0JBQ0gsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLFFBQVEseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3JFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZCxDQUFDLEVBQUMsQ0FBQzthQUNOO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBTU0sT0FBTyxDQUFDLFdBQW1CLEVBQUUsVUFBa0IsS0FBSztRQUN6RCxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxXQUFXLEVBQUU7Ozs7O2dCQUFFLENBQUMsSUFBUyxFQUFFLEtBQVUsRUFBRSxFQUFFO29CQUNyRyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxTQUFTO3FCQUNOLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztxQkFDbEUsSUFBSTs7OztnQkFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUNuQixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDOUQsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxFQUFDLENBQUM7YUFDTjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7Ozs7SUFNTSxRQUFRLENBQUMsV0FBbUIsRUFBRSxRQUFhLEVBQUUsVUFBa0IsS0FBSztRQUN6RSxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs7Ozs7Z0JBQUUsQ0FBQyxJQUFTLEVBQUUsS0FBVSxFQUFFLEVBQUU7b0JBQ3RILE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLFNBQVM7cUJBQ04sWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7cUJBQ25GLElBQUk7Ozs7Z0JBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtvQkFDbkIsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBQzlELENBQUMsRUFBQztxQkFDRCxLQUFLOzs7O2dCQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNmLENBQUMsRUFBQyxDQUFDO2FBQ047UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBTU0sT0FBTyxDQUFDLFdBQW1CLEVBQUUsT0FBWSxFQUFFLFVBQWtCLEtBQUs7UUFDdkUsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Ozs7O2dCQUFFLENBQUMsSUFBUyxFQUFFLEtBQVUsRUFBRSxFQUFFO29CQUNwSCxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxTQUFTO3FCQUNOLFlBQVksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO3FCQUNqRixJQUFJOzs7O2dCQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7b0JBQ25CLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RCxDQUFDLEVBQUM7cUJBQ0QsS0FBSzs7OztnQkFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZixDQUFDLEVBQUMsQ0FBQzthQUNOO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7O0lBTU0sVUFBVSxDQUFDLFdBQW1CLEVBQUUsVUFBa0IsS0FBSztRQUM1RCxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUU7Ozs7O2dCQUFFLENBQUMsSUFBUyxFQUFFLEtBQVUsRUFBRSxFQUFFO29CQUN4RyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDM0IsQ0FBQyxFQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxTQUFTO3FCQUNOLFlBQVksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztxQkFDckUsSUFBSTs7OztnQkFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO29CQUNuQixPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDOUQsQ0FBQyxFQUFDO3FCQUNELEtBQUs7Ozs7Z0JBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDYixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxFQUFDLENBQUM7YUFDTjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQU9NLFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBUztRQUN2QyxPQUFPLElBQUksT0FBTzs7Ozs7UUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMxQyxTQUFTO2lCQUNOLFlBQVksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUN6RCxJQUFJOzs7O1lBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixDQUFDLEVBQUM7aUJBQ0QsS0FBSzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFPTSxtQkFBbUIsQ0FBQyxLQUFhLEVBQUUsSUFBUztRQUNqRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxZQUFZLEVBQUU7b0JBQ3ZELFNBQVMsRUFBRSxLQUFLO29CQUNoQixJQUFJO2lCQUNMLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7Ozs7O0lBT00sZ0JBQWdCLENBQUMsS0FBYSxFQUFFLFFBQWtCO1FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGOzs7SUFqbEJDLHVCQUFvQzs7SUFDcEMsOEJBQXlCOztJQUN6QiwrQkFBMEI7Ozs7O0lBRTFCLHNDQUErQjs7Ozs7SUFDL0IsOEJBQXVCOzs7OztJQUN2Qiw2QkFBa0M7Ozs7O0lBQ2xDLG9DQUFrQzs7QUE0a0JwQyxNQUFNLE9BQU8sWUFBYSxTQUFRLFNBQVM7Ozs7O0lBR3pDLFlBQVksWUFBb0IsY0FBYyxFQUFVLElBQWdCO1FBQ3RFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQURxQyxTQUFJLEdBQUosSUFBSSxDQUFZOztjQUVoRSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQztRQUNsRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFOztrQkFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7O2tCQUNqRCxTQUFTLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNOzs7OztZQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFO2dCQUMxRCxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2dCQUMzQyxPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsR0FBRSxFQUFFLENBQUM7WUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDL0I7SUFDSCxDQUFDOzs7OztJQUNTLGNBQWMsS0FBVSxDQUFDOzs7Ozs7SUFNNUIsT0FBTyxDQUFDLFdBQW1CO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLFdBQVcsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEcsQ0FBQzs7Ozs7OztJQU1NLFFBQVEsQ0FBQyxXQUFtQixFQUFFLFFBQWE7UUFDaEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0csQ0FBQzs7Ozs7OztJQU1NLE9BQU8sQ0FBQyxXQUFtQixFQUFFLE9BQVk7UUFDOUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDekcsQ0FBQzs7Ozs7O0lBTU0sVUFBVSxDQUFDLFdBQW1CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLFdBQVcsRUFBRSxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkcsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLEtBQWE7UUFDN0IsSUFBSSxRQUFRLEVBQUU7O2tCQUNOLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRzs7a0JBQ2xCLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUM5QixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDYixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUMxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDekIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRjs7Ozs7O0lBaEVDLCtCQUF3Qjs7Ozs7SUFFd0IsNEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgZW51bSBBcHBCcmlkZ2VIYW5kbGVyIHtcbiAgSFRUUCxcbiAgT1BFTixcbiAgT1BFTl9MSVNULFxuICBDTE9TRSxcbiAgUkVGUkVTSCxcbiAgUElOLFxuICBSRUdJU1RFUixcbiAgVVBEQVRFLFxuICBSRVFVRVNUX0RBVEEsXG4gIENBTExCQUNLLFxufVxuXG4vLyByZWNvcmQgICAgICAgLSBhbiBpbmRpdmlkdWFsIGVudGl0eSByZWNvcmRcbi8vIGFkZC9mYXN0LWFkZCAtIHRoZSBhZGQgcGFnZSBmb3IgYSBuZXcgcmVjb3JkXG4vLyBjdXN0b20gICAgICAgLSBjdXN0b20gYWN0aW9uIHRoYXQgb3BlbnMgdGhlIHVybCBwcm92aWRlZCBpbiBkYXRhLnVybFxuLy8gcHJldmlldyAgICAgIC0gdGhlIHByZXZpZXcgc2xpZGVvdXQgYXZhaWxhYmxlIG9ubHkgaW4gTm92b1xuZXhwb3J0IHR5cGUgTm92b0FwcHMgPSAncmVjb3JkJyB8ICdhZGQnIHwgJ2Zhc3QtYWRkJyB8ICdjdXN0b20nIHwgJ3ByZXZpZXcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCcmlkZ2VPcGVuRXZlbnQge1xuICB0eXBlOiBOb3ZvQXBwcztcbiAgZW50aXR5VHlwZTogc3RyaW5nO1xuICBlbnRpdHlJZD86IHN0cmluZztcbiAgdGFiPzogc3RyaW5nO1xuICBkYXRhPzogYW55O1xuICBwYXNzdGhyb3VnaD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTW9zYWljTGlzdHMgPVxuICB8ICdDYW5kaWRhdGUnXG4gIHwgJ0NsaWVudENvbnRhY3QnXG4gIHwgJ0NsaWVudENvcnBvcmF0aW9uJ1xuICB8ICdKb2JPcmRlcidcbiAgfCAnSm9iU3VibWlzc2lvbidcbiAgfCAnSm9iUG9zdGluZydcbiAgfCAnUGxhY2VtZW50J1xuICB8ICdMZWFkJ1xuICB8ICdPcHBvcnR1bml0eSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJyaWRnZU9wZW5MaXN0RXZlbnQge1xuICB0eXBlOiBNb3NhaWNMaXN0cztcbiAga2V5d29yZHM6IEFycmF5PHN0cmluZz47XG4gIGNyaXRlcmlhOiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIE5vdm9EYXRhVHlwZSA9ICdlbnRpdGxlbWVudHMnIHwgJ3NldHRpbmdzJyB8ICd1c2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQnJpZGdlUmVxdWVzdERhdGFFdmVudCB7XG4gIHR5cGU6IE5vdm9EYXRhVHlwZTtcbn1cblxuY29uc3QgSFRUUF9WRVJCUyA9IHtcbiAgR0VUOiAnZ2V0JyxcbiAgUE9TVDogJ3Bvc3QnLFxuICBQVVQ6ICdwdXQnLFxuICBERUxFVEU6ICdkZWxldGUnLFxufTtcblxuY29uc3QgTUVTU0FHRV9UWVBFUyA9IHtcbiAgUkVHSVNURVI6ICdyZWdpc3RlcicsXG4gIE9QRU46ICdvcGVuJyxcbiAgT1BFTl9MSVNUOiAnb3Blbkxpc3QnLFxuICBDTE9TRTogJ2Nsb3NlJyxcbiAgUkVGUkVTSDogJ3JlZnJlc2gnLFxuICBQSU46ICdwaW4nLFxuICBVUERBVEU6ICd1cGRhdGUnLFxuICBIVFRQX0dFVDogJ2h0dHBHRVQnLFxuICBIVFRQX1BPU1Q6ICdodHRwUE9TVCcsXG4gIEhUVFBfUFVUOiAnaHR0cFBVVCcsXG4gIEhUVFBfREVMRVRFOiAnaHR0cERFTEVURScsXG4gIENVU1RPTV9FVkVOVDogJ2N1c3RvbUV2ZW50JyxcbiAgUkVRVUVTVF9EQVRBOiAncmVxdWVzdERhdGEnLFxuICBDQUxMQkFDSzogJ2NhbGxiYWNrJyxcbn07XG5cbmRlY2xhcmUgY29uc3QgcG9zdFJvYm90OiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBBcHBCcmlkZ2VTZXJ2aWNlIHtcbiAgY3JlYXRlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgQXBwQnJpZGdlKG5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXZBcHBCcmlkZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuICBjcmVhdGUobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIG5ldyBEZXZBcHBCcmlkZ2UobmFtZSwgdGhpcy5odHRwKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXBwQnJpZGdlIHtcbiAgcHVibGljIGlkOiBzdHJpbmcgPSBgJHtEYXRlLm5vdygpfWA7XG4gIHB1YmxpYyB0cmFjZU5hbWU6IHN0cmluZztcbiAgcHVibGljIHdpbmRvd05hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9yZWdpc3RlcmVkRnJhbWVzID0gW107XG4gIHByaXZhdGUgX2hhbmRsZXJzID0ge307XG4gIHByaXZhdGUgX3RyYWNpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZXZlbnRMaXN0ZW5lcnM6IGFueSA9IHt9O1xuXG4gIC8vIFR5cGU/XG4gIGNvbnN0cnVjdG9yKHRyYWNlTmFtZTogc3RyaW5nID0gJ0FwcEJyaWRnZScpIHtcbiAgICB0aGlzLnRyYWNlTmFtZSA9IHRyYWNlTmFtZTtcbiAgICBpZiAocG9zdFJvYm90KSB7XG4gICAgICBwb3N0Um9ib3QuQ09ORklHLkxPR19MRVZFTCA9ICdlcnJvcic7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9zZXR1cEhhbmRsZXJzKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBObyBvcFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNldCB0cmFjaW5nKHRyYWNpbmc6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl90cmFjaW5nID0gdHJhY2luZztcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGUodHlwZTogQXBwQnJpZGdlSGFuZGxlciwgaGFuZGxlcjogRnVuY3Rpb24pIHtcbiAgICB0aGlzLl9oYW5kbGVyc1t0eXBlXSA9IGhhbmRsZXI7XG4gIH1cblxuICBwcml2YXRlIF90cmFjZShldmVudFR5cGUsIGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX3RyYWNpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBbJHt0aGlzLnRyYWNlTmFtZSB8fCB0aGlzLmlkfV0gXCIke2V2ZW50VHlwZX1cImAsIGV2ZW50KTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc2V0dXBIYW5kbGVycygpOiB2b2lkIHtcbiAgICAvLyBSZWdpc3RlclxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlJFR0lTVEVSLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuUkVHSVNURVIsIGV2ZW50KTtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMucHVzaChldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5yZWdpc3RlcihldmVudC5kYXRhKS50aGVuKCh3aW5kb3dOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHdpbmRvd05hbWUgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFVwZGF0ZVxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlVQREFURSwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLlVQREFURSwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gT3BlblxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLk9QRU4sIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5PUEVOLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5vcGVuKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuT1BFTl9MSVNULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuT1BFTl9MSVNULCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5vcGVuTGlzdChldmVudC5kYXRhKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIENsb3NlXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuQ0xPU0UsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DTE9TRSwgZXZlbnQpO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmZpbmRJbmRleCgoZnJhbWUpID0+IGZyYW1lLmRhdGEuaWQgPT09IGV2ZW50LmRhdGEuaWQpO1xuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jbG9zZShldmVudC5kYXRhKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFJlZnJlc2hcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5SRUZSRVNILCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuUkVGUkVTSCwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaChldmVudC5kYXRhKS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3MgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIFBJTlxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlBJTiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLlBJTiwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMucGluKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUkVRVUVTVF9EQVRBXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUkVRVUVTVF9EQVRBLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuUkVRVUVTVF9EQVRBLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0RGF0YShldmVudC5kYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIENBTExCQUNLU1xuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkNBTExCQUNLLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuQ0FMTEJBQ0ssIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmNhbGxiYWNrKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gSFRUUC1HRVRcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5IVFRQX0dFVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkhUVFBfR0VULCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwR0VUKGV2ZW50LmRhdGEucmVsYXRpdmVVUkwpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gSFRUUC1QT1NUXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuSFRUUF9QT1NULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9QT1NULCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwUE9TVChldmVudC5kYXRhLnJlbGF0aXZlVVJMLCBldmVudC5kYXRhLmRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gSFRUUC1QVVRcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5IVFRQX1BVVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkhUVFBfUFVULCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwUFVUKGV2ZW50LmRhdGEucmVsYXRpdmVVUkwsIGV2ZW50LmRhdGEuZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLURFTEVURVxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfREVMRVRFLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9ERUxFVEUsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBERUxFVEUoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBDdXN0b20gRXZlbnRzXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuQ1VTVE9NX0VWRU5ULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuQ1VTVE9NX0VWRU5ULCBldmVudCk7XG4gICAgICBpZiAodGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnQuZGF0YS5ldmVudF0pIHtcbiAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnQuZGF0YS5ldmVudF0uZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICAgICAgICBsaXN0ZW5lcihldmVudC5kYXRhLmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICAgIHBvc3RSb2JvdC5zZW5kKGZyYW1lLnNvdXJjZSwgTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIGV2ZW50LmRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBvcGVuIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBvcGVuIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb3BlbihwYWNrZXQ6IElBcHBCcmlkZ2VPcGVuRXZlbnQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuT1BFTl0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5PUEVOLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLk9QRU59IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIG9wZW5MaXN0IGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBvcGVuIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgb3Blbkxpc3QocGFja2V0OiBQYXJ0aWFsPElBcHBCcmlkZ2VPcGVuTGlzdEV2ZW50Pik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOX0xJU1RdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuT1BFTl9MSVNUXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9wZW5MaXN0UGFja2V0ID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3Blbkxpc3RQYWNrZXQsIHsgdHlwZTogJ0xpc3QnLCBlbnRpdHlUeXBlOiBwYWNrZXQudHlwZSwga2V5d29yZHM6IHBhY2tldC5rZXl3b3JkcywgY3JpdGVyaWE6IHBhY2tldC5jcml0ZXJpYSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU5fTElTVCwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5PUEVOX0xJU1R9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIGNsb3NlIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShcbiAgICBwYWNrZXQ6IFBhcnRpYWw8eyBlbnRpdHlUeXBlOiBzdHJpbmc7IGVudGl0eUlkOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHRpdGxlS2V5OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5VUERBVEVdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuVVBEQVRFXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5VUERBVEUsIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuVVBEQVRFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIGNsb3NlKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIGNsb3NlKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIGNsb3NlKCkhJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFsUGFja2V0ID0geyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH07XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5DTE9TRSwgcmVhbFBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuQ0xPU0V9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIGNsb3NlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcmVmcmVzaChwYWNrZXQ/OiBvYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVGUkVTSF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5SRUZSRVNIXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ1tBcHBCcmlkZ2VdIC0gcmVmcmVzaChwYWNrZXQpIGlzIGRlcHJlY2F0ZWQhIFBsZWFzZSBqdXN0IHVzZSByZWZyZXNoKCkhJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFsUGFja2V0ID0geyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH07XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5SRUZSRVNILCByZWFsUGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5SRUZSRVNIfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhIHBpbiBldmVudFxuICAgKi9cbiAgcHVibGljIHBpbihwYWNrZXQ/OiBvYmplY3QpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUElOXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlBJTl0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIHBpbihwYWNrZXQpIGlzIGRlcHJlY2F0ZWQhIFBsZWFzZSBqdXN0IHVzZSBwaW4oKSEnKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlBJTiwgcmVhbFBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUElOfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhIHJlcXVlc3REYXRhIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0RGF0YSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlcXVlc3REYXRhKHBhY2tldDogeyB0eXBlOiBzdHJpbmcgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVRVUVTVF9EQVRBXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFUVVFU1RfREFUQV0ocGFja2V0LCAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuUkVRVUVTVF9EQVRBLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFUVVFU1RfREFUQX0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBnZW5lcmljIGNhbGxiYWNrIGNvbW1hbmRcbiAgICogQHBhcmFtIHBhY2tldCBzdHJpbmcgLSBrZXk6IHN0cmluZywgZ2VuZXJpYzogYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbGxiYWNrKHBhY2tldDogeyBrZXk6IHN0cmluZzsgZ2VuZXJpYzogYm9vbGVhbjsgb3B0aW9uczogb2JqZWN0IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5DQUxMQkFDS30gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gcmVnaXN0ZXIgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIocGFja2V0OiBQYXJ0aWFsPHsgdGl0bGU6IHN0cmluZzsgdXJsOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4gPSB7fSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKHBhY2tldCwgKHdpbmRvd05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3dOYW1lKSB7XG4gICAgICAgICAgICByZXNvbHZlKHdpbmRvd05hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFR0lTVEVSLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFR0lTVEVSfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy53aW5kb3dOYW1lID0gZXZlbnQuZGF0YS53aW5kb3dOYW1lO1xuICAgICAgICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEud2luZG93TmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUkVHSVNURVJ9IC0gRkFJTEVEIC0gKG5vIHBhcmVudClgLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9HRVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cEdFVChyZWxhdGl2ZVVSTDogc3RyaW5nLCB0aW1lb3V0OiBudW1iZXIgPSAxMDAwMCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSh7IHZlcmI6IEhUVFBfVkVSQlMuR0VULCByZWxhdGl2ZVVSTCB9LCAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX0dFVCwgeyByZWxhdGl2ZVVSTCB9LCB7IHRpbWVvdXQgfSlcbiAgICAgICAgICAudGhlbigoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGE6IGV2ZW50LmRhdGEuZGF0YSwgZXJyb3I6IGV2ZW50LmRhdGEuZXJyb3IgfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfUE9TVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUE9TVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwb3N0RGF0YTogYW55LCB0aW1lb3V0OiBudW1iZXIgPSAxMDAwMCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSh7IHZlcmI6IEhUVFBfVkVSQlMuUE9TVCwgcmVsYXRpdmVVUkwsIGRhdGE6IHBvc3REYXRhIH0sIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfUE9TVCwgeyByZWxhdGl2ZVVSTCwgZGF0YTogcG9zdERhdGEgfSwgeyB0aW1lb3V0IH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BVVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUFVUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHB1dERhdGE6IGFueSwgdGltZW91dDogbnVtYmVyID0gMTAwMDApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oeyB2ZXJiOiBIVFRQX1ZFUkJTLlBVVCwgcmVsYXRpdmVVUkwsIGRhdGE6IHB1dERhdGEgfSwgKGRhdGE6IGFueSwgZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoeyBkYXRhLCBlcnJvciB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIHsgcmVsYXRpdmVVUkwsIGRhdGE6IHB1dERhdGEgfSwgeyB0aW1lb3V0IH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0RFTEVURSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwREVMRVRFKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDEwMDAwKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKHsgdmVyYjogSFRUUF9WRVJCUy5ERUxFVEUsIHJlbGF0aXZlVVJMIH0sIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfREVMRVRFLCB7IHJlbGF0aXZlVVJMIH0sIHsgdGltZW91dCB9KVxuICAgICAgICAgIC50aGVuKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhLCBlcnJvcjogZXZlbnQuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBjdXN0b20gZXZlbnQgdG8gYW55d2hlcmUgaW4gdGhlIGFwcGxpY2F0aW9uXG4gICAqIEBwYXJhbSBldmVudCBzdHJpbmcgLSBldmVudCBuYW1lIHRvIGZpcmVcbiAgICogQHBhcmFtIGRhdGEgYW55IC0gZGF0YSB0byBiZSBzZW50IGFsb25nIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgZmlyZUV2ZW50KGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcG9zdFJvYm90XG4gICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIHsgZXZlbnQsIGRhdGEgfSlcbiAgICAgICAgLnRoZW4oKGU6IGFueSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGN1c3RvbSBldmVudCB0byBhbGwgcmVnaXN0ZXJlZCBmcmFtZXNcbiAgICogQHBhcmFtIGV2ZW50IHN0cmluZyAtIGV2ZW50IG5hbWUgdG8gZmlyZVxuICAgKiBAcGFyYW0gZGF0YSBhbnkgLSBkYXRhIHRvIGJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBmaXJlRXZlbnRUb0NoaWxkcmVuKGV2ZW50OiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgICAgcG9zdFJvYm90LnNlbmQoZnJhbWUuc291cmNlLCBNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwge1xuICAgICAgICAgIGV2ZW50VHlwZTogZXZlbnQsXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIGN1c3RvbSBldmVudFxuICAgKiBAcGFyYW0gZXZlbnQgc3RyaW5nIC0gZXZlbnQgbmFtZSB0byBsaXN0ZW4gdG9cbiAgICogQHBhcmFtIGNhbGxiYWNrIGZ1bmN0aW9uIC0gY2FsbGJhY2sgdG8gYmUgZmlyZWQgd2hlbiBhbiBldmVudCBpcyBjYXVnaHRcbiAgICovXG4gIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGlmICghdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdKSB7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXZBcHBCcmlkZ2UgZXh0ZW5kcyBBcHBCcmlkZ2Uge1xuICBwcml2YXRlIGJhc2VVUkw6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0cmFjZU5hbWU6IHN0cmluZyA9ICdEZXZBcHBCcmlkZ2UnLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBzdXBlcih0cmFjZU5hbWUpO1xuICAgIGNvbnN0IGNvb2tpZSA9IHRoaXMuZ2V0Q29va2llKCdVbEVuY29kZWRJZGVudGl0eScpO1xuICAgIGlmIChjb29raWUgJiYgY29va2llLmxlbmd0aCkge1xuICAgICAgY29uc3QgaWRlbnRpdHkgPSBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChjb29raWUpKTtcbiAgICAgIGNvbnN0IGVuZHBvaW50cyA9IGlkZW50aXR5LnNlc3Npb25zLnJlZHVjZSgob2JqLCBzZXNzaW9uKSA9PiB7XG4gICAgICAgIG9ialtzZXNzaW9uLm5hbWVdID0gc2Vzc2lvbi52YWx1ZS5lbmRwb2ludDtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHRoaXMuYmFzZVVSTCA9IGVuZHBvaW50cy5yZXN0O1xuICAgIH1cbiAgfVxuICBwcm90ZWN0ZWQgX3NldHVwSGFuZGxlcnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0dFVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwR0VUKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BPU1QgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cFBPU1QocmVsYXRpdmVVUkw6IHN0cmluZywgcG9zdERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCBwb3N0RGF0YSwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QVVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cFBVVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwdXREYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCBwdXREYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0RFTEVURSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwREVMRVRFKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGAke3RoaXMuYmFzZVVSTH0vJHtyZWxhdGl2ZVVSTH1gLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29va2llKGNuYW1lOiBzdHJpbmcpOiBhbnkge1xuICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgY29uc3QgbmFtZSA9IGAke2NuYW1lfT1gO1xuICAgICAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGMgPSBjYVtpXTtcbiAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19