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
                let openListPacket = {};
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
                let realPacket = { id: this.id, windowName: this.windowName };
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
                let realPacket = { id: this.id, windowName: this.windowName };
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
                let realPacket = { id: this.id, windowName: this.windowName };
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
     * @return {?}
     */
    httpGET(relativeURL) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.GET, relativeURL: relativeURL }, (/**
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
                    .sendToParent(MESSAGE_TYPES.HTTP_GET, { relativeURL })
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
     * @return {?}
     */
    httpPOST(relativeURL, postData) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.POST, relativeURL: relativeURL, data: postData }, (/**
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
                    .sendToParent(MESSAGE_TYPES.HTTP_POST, { relativeURL: relativeURL, data: postData })
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
     * @return {?}
     */
    httpPUT(relativeURL, putData) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.PUT, relativeURL: relativeURL, data: putData }, (/**
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
                    .sendToParent(MESSAGE_TYPES.HTTP_PUT, { relativeURL: relativeURL, data: putData })
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
     * @return {?}
     */
    httpDELETE(relativeURL) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (this._handlers[AppBridgeHandler.HTTP]) {
                this._handlers[AppBridgeHandler.HTTP]({ verb: HTTP_VERBS.DELETE, relativeURL: relativeURL }, (/**
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
                    .sendToParent(MESSAGE_TYPES.HTTP_DELETE, { relativeURL })
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
                    data: data,
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
        let cookie = this.getCookie('UlEncodedIdentity');
        if (cookie && cookie.length) {
            /** @type {?} */
            let identity = JSON.parse(decodeURIComponent(cookie));
            /** @type {?} */
            let endpoints = identity.sessions.reduce((/**
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
            let name = `${cname}=`;
            /** @type {?} */
            let ca = document.cookie.split(';');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwQnJpZGdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInV0aWxzL2FwcC1icmlkZ2UvQXBwQnJpZGdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQVksZ0JBQWdCO0lBQzFCLElBQUksR0FBQTtJQUNKLElBQUksR0FBQTtJQUNKLFNBQVMsR0FBQTtJQUNULEtBQUssR0FBQTtJQUNMLE9BQU8sR0FBQTtJQUNQLEdBQUcsR0FBQTtJQUNILFFBQVEsR0FBQTtJQUNSLE1BQU0sR0FBQTtJQUNOLFlBQVksR0FBQTtJQUNaLFFBQVEsR0FBQTtFQUNUOzs7Ozs7Ozs7Ozs7Ozs7QUFRRCx5Q0FPQzs7O0lBTkMsbUNBQWU7O0lBQ2YseUNBQW1COztJQUNuQix1Q0FBa0I7O0lBQ2xCLGtDQUFhOztJQUNiLG1DQUFXOztJQUNYLDBDQUFxQjs7Ozs7QUFjdkIsNkNBSUM7OztJQUhDLHVDQUFrQjs7SUFDbEIsMkNBQXdCOztJQUN4QiwyQ0FBYzs7Ozs7QUFLaEIsZ0RBRUM7OztJQURDLDBDQUFtQjs7O01BR2YsVUFBVSxHQUFHO0lBQ2pCLEdBQUcsRUFBRSxLQUFLO0lBQ1YsSUFBSSxFQUFFLE1BQU07SUFDWixHQUFHLEVBQUUsS0FBSztJQUNWLE1BQU0sRUFBRSxRQUFRO0NBQ2pCOztNQUVLLGFBQWEsR0FBRztJQUNwQixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsTUFBTTtJQUNaLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLEtBQUssRUFBRSxPQUFPO0lBQ2QsT0FBTyxFQUFFLFNBQVM7SUFDbEIsR0FBRyxFQUFFLEtBQUs7SUFDVixNQUFNLEVBQUUsUUFBUTtJQUNoQixRQUFRLEVBQUUsU0FBUztJQUNuQixTQUFTLEVBQUUsVUFBVTtJQUNyQixRQUFRLEVBQUUsU0FBUztJQUNuQixXQUFXLEVBQUUsWUFBWTtJQUN6QixZQUFZLEVBQUUsYUFBYTtJQUMzQixZQUFZLEVBQUUsYUFBYTtJQUMz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Q3pCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDM0M7YUFDRjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0NBQ0Y7Ozs7OztJQWhFQywrQkFBd0I7Ozs7O0lBRXdCLDRCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGVudW0gQXBwQnJpZGdlSGFuZGxlciB7XG4gIEhUVFAsXG4gIE9QRU4sXG4gIE9QRU5fTElTVCxcbiAgQ0xPU0UsXG4gIFJFRlJFU0gsXG4gIFBJTixcbiAgUkVHSVNURVIsXG4gIFVQREFURSxcbiAgUkVRVUVTVF9EQVRBLFxuICBDQUxMQkFDSyxcbn1cblxuLy8gcmVjb3JkICAgICAgIC0gYW4gaW5kaXZpZHVhbCBlbnRpdHkgcmVjb3JkXG4vLyBhZGQvZmFzdC1hZGQgLSB0aGUgYWRkIHBhZ2UgZm9yIGEgbmV3IHJlY29yZFxuLy8gY3VzdG9tICAgICAgIC0gY3VzdG9tIGFjdGlvbiB0aGF0IG9wZW5zIHRoZSB1cmwgcHJvdmlkZWQgaW4gZGF0YS51cmxcbi8vIHByZXZpZXcgICAgICAtIHRoZSBwcmV2aWV3IHNsaWRlb3V0IGF2YWlsYWJsZSBvbmx5IGluIE5vdm9cbmV4cG9ydCB0eXBlIE5vdm9BcHBzID0gJ3JlY29yZCcgfCAnYWRkJyB8ICdmYXN0LWFkZCcgfCAnY3VzdG9tJyB8ICdwcmV2aWV3JztcblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQnJpZGdlT3BlbkV2ZW50IHtcbiAgdHlwZTogTm92b0FwcHM7XG4gIGVudGl0eVR5cGU6IHN0cmluZztcbiAgZW50aXR5SWQ/OiBzdHJpbmc7XG4gIHRhYj86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbiAgcGFzc3Rocm91Z2g/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE1vc2FpY0xpc3RzID1cbiAgfCAnQ2FuZGlkYXRlJ1xuICB8ICdDbGllbnRDb250YWN0J1xuICB8ICdDbGllbnRDb3Jwb3JhdGlvbidcbiAgfCAnSm9iT3JkZXInXG4gIHwgJ0pvYlN1Ym1pc3Npb24nXG4gIHwgJ0pvYlBvc3RpbmcnXG4gIHwgJ1BsYWNlbWVudCdcbiAgfCAnTGVhZCdcbiAgfCAnT3Bwb3J0dW5pdHknO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBcHBCcmlkZ2VPcGVuTGlzdEV2ZW50IHtcbiAgdHlwZTogTW9zYWljTGlzdHM7XG4gIGtleXdvcmRzOiBBcnJheTxzdHJpbmc+O1xuICBjcml0ZXJpYTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBOb3ZvRGF0YVR5cGUgPSAnZW50aXRsZW1lbnRzJyB8ICdzZXR0aW5ncycgfCAndXNlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFwcEJyaWRnZVJlcXVlc3REYXRhRXZlbnQge1xuICB0eXBlOiBOb3ZvRGF0YVR5cGU7XG59XG5cbmNvbnN0IEhUVFBfVkVSQlMgPSB7XG4gIEdFVDogJ2dldCcsXG4gIFBPU1Q6ICdwb3N0JyxcbiAgUFVUOiAncHV0JyxcbiAgREVMRVRFOiAnZGVsZXRlJyxcbn07XG5cbmNvbnN0IE1FU1NBR0VfVFlQRVMgPSB7XG4gIFJFR0lTVEVSOiAncmVnaXN0ZXInLFxuICBPUEVOOiAnb3BlbicsXG4gIE9QRU5fTElTVDogJ29wZW5MaXN0JyxcbiAgQ0xPU0U6ICdjbG9zZScsXG4gIFJFRlJFU0g6ICdyZWZyZXNoJyxcbiAgUElOOiAncGluJyxcbiAgVVBEQVRFOiAndXBkYXRlJyxcbiAgSFRUUF9HRVQ6ICdodHRwR0VUJyxcbiAgSFRUUF9QT1NUOiAnaHR0cFBPU1QnLFxuICBIVFRQX1BVVDogJ2h0dHBQVVQnLFxuICBIVFRQX0RFTEVURTogJ2h0dHBERUxFVEUnLFxuICBDVVNUT01fRVZFTlQ6ICdjdXN0b21FdmVudCcsXG4gIFJFUVVFU1RfREFUQTogJ3JlcXVlc3REYXRhJyxcbiAgQ0FMTEJBQ0s6ICdjYWxsYmFjaycsXG59O1xuXG5kZWNsYXJlIGNvbnN0IHBvc3RSb2JvdDogYW55O1xuXG5leHBvcnQgY2xhc3MgQXBwQnJpZGdlU2VydmljZSB7XG4gIGNyZWF0ZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IEFwcEJyaWRnZShuYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGV2QXBwQnJpZGdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge31cbiAgY3JlYXRlKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgRGV2QXBwQnJpZGdlKG5hbWUsIHRoaXMuaHR0cCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFwcEJyaWRnZSB7XG4gIHB1YmxpYyBpZDogc3RyaW5nID0gYCR7RGF0ZS5ub3coKX1gO1xuICBwdWJsaWMgdHJhY2VOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyB3aW5kb3dOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcmVnaXN0ZXJlZEZyYW1lczogYW55W10gPSBbXTtcbiAgcHJpdmF0ZSBfaGFuZGxlcnMgPSB7fTtcbiAgcHJpdmF0ZSBfdHJhY2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogYW55ID0ge307XG5cbiAgLy8gVHlwZT9cbiAgY29uc3RydWN0b3IodHJhY2VOYW1lOiBzdHJpbmcgPSAnQXBwQnJpZGdlJykge1xuICAgIHRoaXMudHJhY2VOYW1lID0gdHJhY2VOYW1lO1xuICAgIGlmIChwb3N0Um9ib3QpIHtcbiAgICAgIHBvc3RSb2JvdC5DT05GSUcuTE9HX0xFVkVMID0gJ2Vycm9yJztcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3NldHVwSGFuZGxlcnMoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIE5vIG9wXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0IHRyYWNpbmcodHJhY2luZzogYm9vbGVhbikge1xuICAgIHRoaXMuX3RyYWNpbmcgPSB0cmFjaW5nO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZSh0eXBlOiBBcHBCcmlkZ2VIYW5kbGVyLCBoYW5kbGVyOiBGdW5jdGlvbikge1xuICAgIHRoaXMuX2hhbmRsZXJzW3R5cGVdID0gaGFuZGxlcjtcbiAgfVxuXG4gIHByaXZhdGUgX3RyYWNlKGV2ZW50VHlwZSwgZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fdHJhY2luZykge1xuICAgICAgY29uc29sZS5sb2coYFske3RoaXMudHJhY2VOYW1lIHx8IHRoaXMuaWR9XSBcIiR7ZXZlbnRUeXBlfVwiYCwgZXZlbnQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXR1cEhhbmRsZXJzKCk6IHZvaWQge1xuICAgIC8vIFJlZ2lzdGVyXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUkVHSVNURVIsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUdJU1RFUiwgZXZlbnQpO1xuICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5wdXNoKGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyKGV2ZW50LmRhdGEpLnRoZW4oKHdpbmRvd05hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgd2luZG93TmFtZSB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gVXBkYXRlXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuVVBEQVRFLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGUoZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBPcGVuXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuT1BFTiwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLk9QRU4sIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5PUEVOX0xJU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLm9wZW5MaXN0KGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ2xvc2VcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DTE9TRSwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLl90cmFjZShNRVNTQUdFX1RZUEVTLkNMT1NFLCBldmVudCk7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuZmluZEluZGV4KChmcmFtZSkgPT4gZnJhbWUuZGF0YS5pZCA9PT0gZXZlbnQuZGF0YS5pZCk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmNsb3NlKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUmVmcmVzaFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRUZSRVNILCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoKGV2ZW50LmRhdGEpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzcyB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gUElOXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuUElOLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuUElOLCBldmVudCk7XG4gICAgICByZXR1cm4gdGhpcy5waW4oZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBSRVFVRVNUX0RBVEFcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5SRVFVRVNUX0RBVEEsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3REYXRhKGV2ZW50LmRhdGEpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICByZXR1cm4geyBkYXRhOiByZXN1bHQuZGF0YSwgZXJyb3I6IHJlc3VsdC5lcnJvciB9O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8gQ0FMTEJBQ0tTXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuQ0FMTEJBQ0ssIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuY2FsbGJhY2soZXZlbnQuZGF0YSkudGhlbigoc3VjY2VzcykgPT4ge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLUdFVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfR0VULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9HRVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBHRVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBPU1RcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQT1NUKGV2ZW50LmRhdGEucmVsYXRpdmVVUkwsIGV2ZW50LmRhdGEuZGF0YSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHJldHVybiB7IGRhdGE6IHJlc3VsdC5kYXRhLCBlcnJvcjogcmVzdWx0LmVycm9yIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyBIVFRQLVBVVFxuICAgIHBvc3RSb2JvdC5vbihNRVNTQUdFX1RZUEVTLkhUVFBfUFVULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX3RyYWNlKE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIGV2ZW50KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBQVVQoZXZlbnQuZGF0YS5yZWxhdGl2ZVVSTCwgZXZlbnQuZGF0YS5kYXRhKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEhUVFAtREVMRVRFXG4gICAgcG9zdFJvYm90Lm9uKE1FU1NBR0VfVFlQRVMuSFRUUF9ERUxFVEUsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5IVFRQX0RFTEVURSwgZXZlbnQpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cERFTEVURShldmVudC5kYXRhLnJlbGF0aXZlVVJMKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgcmV0dXJuIHsgZGF0YTogcmVzdWx0LmRhdGEsIGVycm9yOiByZXN1bHQuZXJyb3IgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vIEN1c3RvbSBFdmVudHNcbiAgICBwb3N0Um9ib3Qub24oTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5fdHJhY2UoTUVTU0FHRV9UWVBFUy5DVVNUT01fRVZFTlQsIGV2ZW50KTtcbiAgICAgIGlmICh0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XSkge1xuICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudC5kYXRhLmV2ZW50XS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgIGxpc3RlbmVyKGV2ZW50LmRhdGEuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkRnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICAgICAgcG9zdFJvYm90LnNlbmQoZnJhbWUuc291cmNlLCBNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIG9wZW4gZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuKHBhY2tldDogSUFwcEJyaWRnZU9wZW5FdmVudCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5dKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihwYWNrZXQsIHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU4sIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuT1BFTn0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gb3Blbkxpc3QgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIG9wZW4gZXZlbnRcbiAgICovXG4gIHB1YmxpYyBvcGVuTGlzdChwYWNrZXQ6IFBhcnRpYWw8SUFwcEJyaWRnZU9wZW5MaXN0RXZlbnQ+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLk9QRU5fTElTVF0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5PUEVOX0xJU1RdKHBhY2tldCwgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG9wZW5MaXN0UGFja2V0ID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3Blbkxpc3RQYWNrZXQsIHsgdHlwZTogJ0xpc3QnLCBlbnRpdHlUeXBlOiBwYWNrZXQudHlwZSwga2V5d29yZHM6IHBhY2tldC5rZXl3b3JkcywgY3JpdGVyaWE6IHBhY2tldC5jcml0ZXJpYSB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLk9QRU5fTElTVCwgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5PUEVOX0xJU1R9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIGNsb3NlIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHVwZGF0ZShcbiAgICBwYWNrZXQ6IFBhcnRpYWw8eyBlbnRpdHlUeXBlOiBzdHJpbmc7IGVudGl0eUlkOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IHRpdGxlS2V5OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4sXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5VUERBVEVdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuVVBEQVRFXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5VUERBVEUsIHBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuVVBEQVRFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIGNsb3NlKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5DTE9TRV0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIGNsb3NlKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIGNsb3NlKCkhJyk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVhbFBhY2tldCA9IHsgaWQ6IHRoaXMuaWQsIHdpbmRvd05hbWU6IHRoaXMud2luZG93TmFtZSB9O1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuQ0xPU0UsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLkNMT1NFfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBjbG9zZSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlZnJlc2gocGFja2V0Pzogb2JqZWN0KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFRlJFU0hdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVGUkVTSF0ocGFja2V0LCAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocGFja2V0KSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvKCdbQXBwQnJpZGdlXSAtIHJlZnJlc2gocGFja2V0KSBpcyBkZXByZWNhdGVkISBQbGVhc2UganVzdCB1c2UgcmVmcmVzaCgpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFRlJFU0gsIHJlYWxQYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFRlJFU0h9IChjYWxsYmFjaylgLCBldmVudCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGEgcGluIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcGluKHBhY2tldD86IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5QSU5dKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUElOXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYWNrZXQpIHtcbiAgICAgICAgICBjb25zb2xlLmluZm8oJ1tBcHBCcmlkZ2VdIC0gcGluKHBhY2tldCkgaXMgZGVwcmVjYXRlZCEgUGxlYXNlIGp1c3QgdXNlIHBpbigpIScpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlYWxQYWNrZXQgPSB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlBJTiwgcmVhbFBhY2tldClcbiAgICAgICAgICAudGhlbigoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUElOfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KGZhbHNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhIHJlcXVlc3REYXRhIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSByZXF1ZXN0RGF0YSBldmVudFxuICAgKi9cbiAgcHVibGljIHJlcXVlc3REYXRhKHBhY2tldDogeyB0eXBlOiBzdHJpbmcgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVRVUVTVF9EQVRBXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLlJFUVVFU1RfREFUQV0ocGFja2V0LCAoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCwgd2luZG93TmFtZTogdGhpcy53aW5kb3dOYW1lIH0pO1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuUkVRVUVTVF9EQVRBLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFUVVFU1RfREFUQX0gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgYSBnZW5lcmljIGNhbGxiYWNrIGNvbW1hbmRcbiAgICogQHBhcmFtIHBhY2tldCBzdHJpbmcgLSBrZXk6IHN0cmluZywgZ2VuZXJpYzogYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGNhbGxiYWNrKHBhY2tldDogeyBrZXk6IHN0cmluZzsgZ2VuZXJpYzogYm9vbGVhbjsgb3B0aW9uczogb2JqZWN0IH0pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkNBTExCQUNLXShwYWNrZXQsIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24ocGFja2V0LCB7IGlkOiB0aGlzLmlkLCB3aW5kb3dOYW1lOiB0aGlzLndpbmRvd05hbWUgfSk7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5DQUxMQkFDSywgcGFja2V0KVxuICAgICAgICAgIC50aGVuKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdHJhY2UoYCR7TUVTU0FHRV9UWVBFUy5DQUxMQkFDS30gKGNhbGxiYWNrKWAsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZWplY3QoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChmYWxzZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gcmVnaXN0ZXIgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgcmVnaXN0ZXIocGFja2V0OiBQYXJ0aWFsPHsgdGl0bGU6IHN0cmluZzsgdXJsOiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT4gPSB7fSk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuUkVHSVNURVJdKHBhY2tldCwgKHdpbmRvd05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICh3aW5kb3dOYW1lKSB7XG4gICAgICAgICAgICByZXNvbHZlKHdpbmRvd05hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKHBhY2tldCwgeyBpZDogdGhpcy5pZCB9KTtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLlJFR0lTVEVSLCBwYWNrZXQpXG4gICAgICAgICAgLnRoZW4oKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl90cmFjZShgJHtNRVNTQUdFX1RZUEVTLlJFR0lTVEVSfSAoY2FsbGJhY2spYCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEpIHtcbiAgICAgICAgICAgICAgdGhpcy53aW5kb3dOYW1lID0gZXZlbnQuZGF0YS53aW5kb3dOYW1lO1xuICAgICAgICAgICAgICByZXNvbHZlKGV2ZW50LmRhdGEud2luZG93TmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3RyYWNlKGAke01FU1NBR0VfVFlQRVMuUkVHSVNURVJ9IC0gRkFJTEVEIC0gKG5vIHBhcmVudClgLCBlcnIpO1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9HRVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cEdFVChyZWxhdGl2ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAodGhpcy5faGFuZGxlcnNbQXBwQnJpZGdlSGFuZGxlci5IVFRQXSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKHsgdmVyYjogSFRUUF9WRVJCUy5HRVQsIHJlbGF0aXZlVVJMOiByZWxhdGl2ZVVSTCB9LCAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX0dFVCwgeyByZWxhdGl2ZVVSTCB9KVxuICAgICAgICAgIC50aGVuKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhLCBlcnJvcjogZXZlbnQuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QT1NUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBQT1NUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHBvc3REYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oXG4gICAgICAgICAgeyB2ZXJiOiBIVFRQX1ZFUkJTLlBPU1QsIHJlbGF0aXZlVVJMOiByZWxhdGl2ZVVSTCwgZGF0YTogcG9zdERhdGEgfSxcbiAgICAgICAgICAoZGF0YTogYW55LCBlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc3RSb2JvdFxuICAgICAgICAgIC5zZW5kVG9QYXJlbnQoTUVTU0FHRV9UWVBFUy5IVFRQX1BPU1QsIHsgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMLCBkYXRhOiBwb3N0RGF0YSB9KVxuICAgICAgICAgIC50aGVuKChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHsgZGF0YTogZXZlbnQuZGF0YS5kYXRhLCBlcnJvcjogZXZlbnQuZGF0YS5lcnJvciB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgb3IgcmVzcG9uZHMgdG8gYW4gSFRUUF9QVVQgZXZlbnRcbiAgICogQHBhcmFtIHBhY2tldCBhbnkgLSBwYWNrZXQgb2YgZGF0YSB0byBzZW5kIHdpdGggdGhlIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgaHR0cFBVVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwdXREYXRhOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oXG4gICAgICAgICAgeyB2ZXJiOiBIVFRQX1ZFUkJTLlBVVCwgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMLCBkYXRhOiBwdXREYXRhIH0sXG4gICAgICAgICAgKGRhdGE6IGFueSwgZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSh7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3N0Um9ib3RcbiAgICAgICAgICAuc2VuZFRvUGFyZW50KE1FU1NBR0VfVFlQRVMuSFRUUF9QVVQsIHsgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMLCBkYXRhOiBwdXREYXRhIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX0RFTEVURSBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwREVMRVRFKHJlbGF0aXZlVVJMOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICh0aGlzLl9oYW5kbGVyc1tBcHBCcmlkZ2VIYW5kbGVyLkhUVFBdKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzW0FwcEJyaWRnZUhhbmRsZXIuSFRUUF0oeyB2ZXJiOiBIVFRQX1ZFUkJTLkRFTEVURSwgcmVsYXRpdmVVUkw6IHJlbGF0aXZlVVJMIH0sIChkYXRhOiBhbnksIGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgZGF0YSwgZXJyb3IgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zdFJvYm90XG4gICAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkhUVFBfREVMRVRFLCB7IHJlbGF0aXZlVVJMIH0pXG4gICAgICAgICAgLnRoZW4oKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoeyBkYXRhOiBldmVudC5kYXRhLmRhdGEsIGVycm9yOiBldmVudC5kYXRhLmVycm9yIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBhIGN1c3RvbSBldmVudCB0byBhbnl3aGVyZSBpbiB0aGUgYXBwbGljYXRpb25cbiAgICogQHBhcmFtIGV2ZW50IHN0cmluZyAtIGV2ZW50IG5hbWUgdG8gZmlyZVxuICAgKiBAcGFyYW0gZGF0YSBhbnkgLSBkYXRhIHRvIGJlIHNlbnQgYWxvbmcgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBmaXJlRXZlbnQoZXZlbnQ6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBwb3N0Um9ib3RcbiAgICAgICAgLnNlbmRUb1BhcmVudChNRVNTQUdFX1RZUEVTLkNVU1RPTV9FVkVOVCwgeyBldmVudCwgZGF0YSB9KVxuICAgICAgICAudGhlbigoZTogYW55KSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIGEgY3VzdG9tIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIGZyYW1lc1xuICAgKiBAcGFyYW0gZXZlbnQgc3RyaW5nIC0gZXZlbnQgbmFtZSB0byBmaXJlXG4gICAqIEBwYXJhbSBkYXRhIGFueSAtIGRhdGEgdG8gYmUgc2VudCBhbG9uZyB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGZpcmVFdmVudFRvQ2hpbGRyZW4oZXZlbnQ6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JlZ2lzdGVyZWRGcmFtZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJlZEZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgICBwb3N0Um9ib3Quc2VuZChmcmFtZS5zb3VyY2UsIE1FU1NBR0VfVFlQRVMuQ1VTVE9NX0VWRU5ULCB7XG4gICAgICAgICAgZXZlbnRUeXBlOiBldmVudCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgY3VzdG9tIGV2ZW50XG4gICAqIEBwYXJhbSBldmVudCBzdHJpbmcgLSBldmVudCBuYW1lIHRvIGxpc3RlbiB0b1xuICAgKiBAcGFyYW0gY2FsbGJhY2sgZnVuY3Rpb24gLSBjYWxsYmFjayB0byBiZSBmaXJlZCB3aGVuIGFuIGV2ZW50IGlzIGNhdWdodFxuICAgKi9cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0pIHtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERldkFwcEJyaWRnZSBleHRlbmRzIEFwcEJyaWRnZSB7XG4gIHByaXZhdGUgYmFzZVVSTDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHRyYWNlTmFtZTogc3RyaW5nID0gJ0RldkFwcEJyaWRnZScsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKHRyYWNlTmFtZSk7XG4gICAgbGV0IGNvb2tpZSA9IHRoaXMuZ2V0Q29va2llKCdVbEVuY29kZWRJZGVudGl0eScpO1xuICAgIGlmIChjb29raWUgJiYgY29va2llLmxlbmd0aCkge1xuICAgICAgbGV0IGlkZW50aXR5ID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoY29va2llKSk7XG4gICAgICBsZXQgZW5kcG9pbnRzID0gaWRlbnRpdHkuc2Vzc2lvbnMucmVkdWNlKChvYmosIHNlc3Npb24pID0+IHtcbiAgICAgICAgb2JqW3Nlc3Npb24ubmFtZV0gPSBzZXNzaW9uLnZhbHVlLmVuZHBvaW50O1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgfSwge30pO1xuICAgICAgdGhpcy5iYXNlVVJMID0gZW5kcG9pbnRzLnJlc3Q7XG4gICAgfVxuICB9XG4gIHByb3RlY3RlZCBfc2V0dXBIYW5kbGVycygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfR0VUIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBHRVQocmVsYXRpdmVVUkw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfUE9TVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUE9TVChyZWxhdGl2ZVVSTDogc3RyaW5nLCBwb3N0RGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHBvc3REYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlcyBvciByZXNwb25kcyB0byBhbiBIVFRQX1BVVCBldmVudFxuICAgKiBAcGFyYW0gcGFja2V0IGFueSAtIHBhY2tldCBvZiBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgZXZlbnRcbiAgICovXG4gIHB1YmxpYyBodHRwUFVUKHJlbGF0aXZlVVJMOiBzdHJpbmcsIHB1dERhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHB1dERhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVzIG9yIHJlc3BvbmRzIHRvIGFuIEhUVFBfREVMRVRFIGV2ZW50XG4gICAqIEBwYXJhbSBwYWNrZXQgYW55IC0gcGFja2V0IG9mIGRhdGEgdG8gc2VuZCB3aXRoIHRoZSBldmVudFxuICAgKi9cbiAgcHVibGljIGh0dHBERUxFVEUocmVsYXRpdmVVUkw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUoYCR7dGhpcy5iYXNlVVJMfS8ke3JlbGF0aXZlVVJMfWAsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb29raWUoY25hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICBsZXQgbmFtZSA9IGAke2NuYW1lfT1gO1xuICAgICAgbGV0IGNhID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjID0gY2FbaV07XG4gICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XG4gICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==