/**
 * @fileoverview added by tsickle
 * Generated from: elements/dragula/DragulaService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, EventEmitter } from '@angular/core';
// Vendor
import * as dragulaImported from '@bullhorn/dragula';
/** @type {?} */
var dragula = dragulaImported;
var NovoDragulaService = /** @class */ (function () {
    function NovoDragulaService() {
        this.cancel = new EventEmitter();
        this.cloned = new EventEmitter();
        this.drag = new EventEmitter();
        this.dragend = new EventEmitter();
        this.drop = new EventEmitter();
        this.out = new EventEmitter();
        this.over = new EventEmitter();
        this.remove = new EventEmitter();
        this.shadow = new EventEmitter();
        this.dropModel = new EventEmitter();
        this.removeModel = new EventEmitter();
        this.events = ['cancel', 'cloned', 'drag', 'dragend', 'drop', 'out', 'over', 'remove', 'shadow', 'dropModel', 'removeModel'];
        this.bags = [];
    }
    /**
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    NovoDragulaService.prototype.add = /**
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    function (name, drake) {
        /** @type {?} */
        var bag = this.find(name);
        if (bag) {
            throw new Error("Bag named: " + name + " already exists.");
        }
        bag = {
            name: name,
            drake: drake,
        };
        this.bags.push(bag);
        if (drake.models) {
            // models to sync with (must have same structure as containers)
            this.handleModels(name, drake);
        }
        if (!bag.initEvents) {
            this.setupEvents(bag);
        }
        return bag;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NovoDragulaService.prototype.find = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        for (var i = 0; i < this.bags.length; i++) {
            if (this.bags[i].name === name) {
                return this.bags[i];
            }
        }
        return null;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NovoDragulaService.prototype.destroy = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var bag = this.find(name);
        /** @type {?} */
        var i = this.bags.indexOf(bag);
        this.bags.splice(i, 1);
        bag.drake.destroy();
    };
    /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    NovoDragulaService.prototype.setOptions = /**
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    function (name, options) {
        /** @type {?} */
        var bag = this.add(name, dragula(options));
        this.handleModels(name, bag.drake);
    };
    /**
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    NovoDragulaService.prototype.handleModels = /**
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    function (name, drake) {
        var _this = this;
        /** @type {?} */
        var dragElm;
        /** @type {?} */
        var dragIndex;
        /** @type {?} */
        var dropIndex;
        /** @type {?} */
        var sourceModel;
        drake.on('remove', (/**
         * @param {?} el
         * @param {?} source
         * @return {?}
         */
        function (el, source) {
            if (!drake.models) {
                return;
            }
            sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel.splice(dragIndex, 1);
            _this.removeModel.emit([name, el, source]);
        }));
        drake.on('drag', (/**
         * @param {?} el
         * @param {?} source
         * @return {?}
         */
        function (el, source) {
            dragElm = el;
            dragIndex = _this.domIndexOf(el, source);
        }));
        drake.on('drop', (/**
         * @param {?} dropElm
         * @param {?} target
         * @param {?} source
         * @return {?}
         */
        function (dropElm, target, source) {
            if (!drake.models) {
                return;
            }
            dropIndex = _this.domIndexOf(dropElm, target);
            sourceModel = drake.models[drake.containers.indexOf(source)];
            if (target === source) {
                sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
            }
            else {
                /** @type {?} */
                var notCopy = dragElm === dropElm;
                /** @type {?} */
                var targetModel = drake.models[drake.containers.indexOf(target)];
                /** @type {?} */
                var dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
                if (notCopy) {
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel.splice(dropIndex, 0, dropElmModel);
                target.removeChild(dropElm); // element must be removed for ngFor to apply correctly
            }
            _this.dropModel.emit([name, dropElm, target, source]);
        }));
    };
    /**
     * @param {?} bag
     * @return {?}
     */
    NovoDragulaService.prototype.setupEvents = /**
     * @param {?} bag
     * @return {?}
     */
    function (bag) {
        bag.initEvents = true;
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var emitter = (/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            /**
             * @return {?}
             */
            function replicate() {
                /** @type {?} */
                var args = Array.prototype.slice.call(arguments);
                that[type].emit([bag.name].concat(args));
            }
            bag.drake.on(type, replicate);
        });
        this.events.forEach(emitter);
    };
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    NovoDragulaService.prototype.domIndexOf = /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    function (child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    };
    NovoDragulaService.decorators = [
        { type: Injectable }
    ];
    return NovoDragulaService;
}());
export { NovoDragulaService };
if (false) {
    /** @type {?} */
    NovoDragulaService.prototype.cancel;
    /** @type {?} */
    NovoDragulaService.prototype.cloned;
    /** @type {?} */
    NovoDragulaService.prototype.drag;
    /** @type {?} */
    NovoDragulaService.prototype.dragend;
    /** @type {?} */
    NovoDragulaService.prototype.drop;
    /** @type {?} */
    NovoDragulaService.prototype.out;
    /** @type {?} */
    NovoDragulaService.prototype.over;
    /** @type {?} */
    NovoDragulaService.prototype.remove;
    /** @type {?} */
    NovoDragulaService.prototype.shadow;
    /** @type {?} */
    NovoDragulaService.prototype.dropModel;
    /** @type {?} */
    NovoDragulaService.prototype.removeModel;
    /** @type {?} */
    NovoDragulaService.prototype.events;
    /** @type {?} */
    NovoDragulaService.prototype.bags;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFDL0MsT0FBTyxHQUFHLGVBQWU7QUFFL0I7SUFBQTtRQUVFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsUUFBRyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELFdBQU0sR0FBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkksU0FBSSxHQUFlLEVBQUUsQ0FBQztJQW9HeEIsQ0FBQzs7Ozs7O0lBbEdDLGdDQUFHOzs7OztJQUFILFVBQUksSUFBSSxFQUFFLEtB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b0NBQXVJOztJQUN2SSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkcmFndWxhSW1wb3J0ZWQgZnJvbSAnQGJ1bGxob3JuL2RyYWd1bGEnO1xuY29uc3QgZHJhZ3VsYSA9IGRyYWd1bGFJbXBvcnRlZDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9EcmFndWxhU2VydmljZSB7XG4gIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsb25lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcmFnZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZHJvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG91dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzaGFkb3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcm9wTW9kZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZW1vdmVNb2RlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50czogQXJyYXk8c3RyaW5nPiA9IFsnY2FuY2VsJywgJ2Nsb25lZCcsICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJvcCcsICdvdXQnLCAnb3ZlcicsICdyZW1vdmUnLCAnc2hhZG93JywgJ2Ryb3BNb2RlbCcsICdyZW1vdmVNb2RlbCddO1xuICBiYWdzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgYWRkKG5hbWUsIGRyYWtlKSB7XG4gICAgbGV0IGJhZyA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBpZiAoYmFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhZyBuYW1lZDogJHtuYW1lfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9XG4gICAgYmFnID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGRyYWtlLFxuICAgIH07XG4gICAgdGhpcy5iYWdzLnB1c2goYmFnKTtcbiAgICBpZiAoZHJha2UubW9kZWxzKSB7XG4gICAgICAvLyBtb2RlbHMgdG8gc3luYyB3aXRoIChtdXN0IGhhdmUgc2FtZSBzdHJ1Y3R1cmUgYXMgY29udGFpbmVycylcbiAgICAgIHRoaXMuaGFuZGxlTW9kZWxzKG5hbWUsIGRyYWtlKTtcbiAgICB9XG4gICAgaWYgKCFiYWcuaW5pdEV2ZW50cykge1xuICAgICAgdGhpcy5zZXR1cEV2ZW50cyhiYWcpO1xuICAgIH1cbiAgICByZXR1cm4gYmFnO1xuICB9XG5cbiAgZmluZChuYW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmJhZ3NbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWdzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRlc3Ryb3kobmFtZSkge1xuICAgIGNvbnN0IGJhZyA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBjb25zdCBpID0gdGhpcy5iYWdzLmluZGV4T2YoYmFnKTtcbiAgICB0aGlzLmJhZ3Muc3BsaWNlKGksIDEpO1xuICAgIGJhZy5kcmFrZS5kZXN0cm95KCk7XG4gIH1cblxuICBzZXRPcHRpb25zKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBiYWcgPSB0aGlzLmFkZChuYW1lLCBkcmFndWxhKG9wdGlvbnMpKTtcbiAgICB0aGlzLmhhbmRsZU1vZGVscyhuYW1lLCBiYWcuZHJha2UpO1xuICB9XG5cbiAgaGFuZGxlTW9kZWxzKG5hbWUsIGRyYWtlKSB7XG4gICAgbGV0IGRyYWdFbG07XG4gICAgbGV0IGRyYWdJbmRleDtcbiAgICBsZXQgZHJvcEluZGV4O1xuICAgIGxldCBzb3VyY2VNb2RlbDtcbiAgICBkcmFrZS5vbigncmVtb3ZlJywgKGVsLCBzb3VyY2UpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpO1xuICAgICAgdGhpcy5yZW1vdmVNb2RlbC5lbWl0KFtuYW1lLCBlbCwgc291cmNlXSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2RyYWcnLCAoZWwsIHNvdXJjZSkgPT4ge1xuICAgICAgZHJhZ0VsbSA9IGVsO1xuICAgICAgZHJhZ0luZGV4ID0gdGhpcy5kb21JbmRleE9mKGVsLCBzb3VyY2UpO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcm9wJywgKGRyb3BFbG0sIHRhcmdldCwgc291cmNlKSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcm9wSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZHJvcEVsbSwgdGFyZ2V0KTtcbiAgICAgIHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHNvdXJjZSkge1xuICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKVswXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub3RDb3B5ID0gZHJhZ0VsbSA9PT0gZHJvcEVsbTtcbiAgICAgICAgY29uc3QgdGFyZ2V0TW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHRhcmdldCldO1xuICAgICAgICBjb25zdCBkcm9wRWxtTW9kZWwgPSBub3RDb3B5ID8gc291cmNlTW9kZWxbZHJhZ0luZGV4XSA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlTW9kZWxbZHJhZ0luZGV4XSkpO1xuXG4gICAgICAgIGlmIChub3RDb3B5KSB7XG4gICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0TW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgZHJvcEVsbU1vZGVsKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGRyb3BFbG0pOyAvLyBlbGVtZW50IG11c3QgYmUgcmVtb3ZlZCBmb3IgbmdGb3IgdG8gYXBwbHkgY29ycmVjdGx5XG4gICAgICB9XG4gICAgICB0aGlzLmRyb3BNb2RlbC5lbWl0KFtuYW1lLCBkcm9wRWxtLCB0YXJnZXQsIHNvdXJjZV0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0dXBFdmVudHMoYmFnKSB7XG4gICAgYmFnLmluaXRFdmVudHMgPSB0cnVlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGVtaXR0ZXIgPSAodHlwZSkgPT4ge1xuICAgICAgZnVuY3Rpb24gcmVwbGljYXRlKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdGhhdFt0eXBlXS5lbWl0KFtiYWcubmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cblxuICAgICAgYmFnLmRyYWtlLm9uKHR5cGUsIHJlcGxpY2F0ZSk7XG4gICAgfTtcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGVtaXR0ZXIpO1xuICB9XG5cbiAgZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG4gIH1cbn1cbiJdfQ==