/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @name add
     * @param name
     * @param drake
     */
    /**
     * \@name add
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    NovoDragulaService.prototype.add = /**
     * \@name add
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
     * @name find
     * @param name
     */
    /**
     * \@name find
     * @param {?} name
     * @return {?}
     */
    NovoDragulaService.prototype.find = /**
     * \@name find
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
     * @name destroy
     * @param name
     */
    /**
     * \@name destroy
     * @param {?} name
     * @return {?}
     */
    NovoDragulaService.prototype.destroy = /**
     * \@name destroy
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
     * @name setOptions
     * @param name
     * @param options
     */
    /**
     * \@name setOptions
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    NovoDragulaService.prototype.setOptions = /**
     * \@name setOptions
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
     * @name handleModels
     * @param name
     * @param drake
     */
    /**
     * \@name handleModels
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    NovoDragulaService.prototype.handleModels = /**
     * \@name handleModels
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
        drake.on('remove', function (el, source) {
            if (!drake.models) {
                return;
            }
            sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel.splice(dragIndex, 1);
            _this.removeModel.emit([name, el, source]);
        });
        drake.on('drag', function (el, source) {
            dragElm = el;
            dragIndex = _this.domIndexOf(el, source);
        });
        drake.on('drop', function (dropElm, target, source) {
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
        });
    };
    /**
     * @name setupEvents
     * @param bag
     */
    /**
     * \@name setupEvents
     * @param {?} bag
     * @return {?}
     */
    NovoDragulaService.prototype.setupEvents = /**
     * \@name setupEvents
     * @param {?} bag
     * @return {?}
     */
    function (bag) {
        bag.initEvents = true;
        /** @type {?} */
        var that = this;
        /** @type {?} */
        var emitter = function (type) {
            /**
             * @return {?}
             */
            function replicate() {
                /** @type {?} */
                var args = Array.prototype.slice.call(arguments);
                that[type].emit([bag.name].concat(args));
            }
            bag.drake.on(type, replicate);
        };
        this.events.forEach(emitter);
    };
    /**
     * @name domIndexOf
     * @param child
     * @param parent
     */
    /**
     * \@name domIndexOf
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    NovoDragulaService.prototype.domIndexOf = /**
     * \@name domIndexOf
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV6RCxPQUFPLEtBQUssZUFBZSxNQUFNLG1CQUFtQixDQUFDOztJQUMvQyxPQUFPLEdBQUcsZUFBZTtBQUUvQjtJQUFBO1FBRUUsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxRQUFHLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsV0FBTSxHQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2SSxTQUFJLEdBQWUsRUFBRSxDQUFDO0lBb0l4QixDQUFDO0lBbElDOzs7O09BSUc7Ozs7Ozs7SUFDSCxnQ0FBRzs7Ozs7O0lBQUgsVUFB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NEM7O0lBQzVDLGtDQUE2Qzs7SUFDN0Msb0NBQStDOztJQUMvQyxvQ0FBK0M7O0lBQy9DLHVDQUFrRDs7SUFDbEQseUNBQW9EOztJQUNwRCxvQ0FBdUk7O0lBQ3ZJLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRyYWd1bGFJbXBvcnRlZCBmcm9tICdAYnVsbGhvcm4vZHJhZ3VsYSc7XG5jb25zdCBkcmFndWxhID0gZHJhZ3VsYUltcG9ydGVkO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b0RyYWd1bGFTZXJ2aWNlIHtcbiAgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2xvbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZHJhZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyYWdlbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb3V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNoYWRvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyb3BNb2RlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlbW92ZU1vZGVsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRzOiBBcnJheTxzdHJpbmc+ID0gWydjYW5jZWwnLCAnY2xvbmVkJywgJ2RyYWcnLCAnZHJhZ2VuZCcsICdkcm9wJywgJ291dCcsICdvdmVyJywgJ3JlbW92ZScsICdzaGFkb3cnLCAnZHJvcE1vZGVsJywgJ3JlbW92ZU1vZGVsJ107XG4gIGJhZ3M6IEFycmF5PGFueT4gPSBbXTtcblxuICAvKipcbiAgICogQG5hbWUgYWRkXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBkcmFrZVxuICAgKi9cbiAgYWRkKG5hbWUsIGRyYWtlKSB7XG4gICAgbGV0IGJhZyA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBpZiAoYmFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhZyBuYW1lZDogJHtuYW1lfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9XG4gICAgYmFnID0ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRyYWtlOiBkcmFrZSxcbiAgICB9O1xuICAgIHRoaXMuYmFncy5wdXNoKGJhZyk7XG4gICAgaWYgKGRyYWtlLm1vZGVscykge1xuICAgICAgLy8gbW9kZWxzIHRvIHN5bmMgd2l0aCAobXVzdCBoYXZlIHNhbWUgc3RydWN0dXJlIGFzIGNvbnRhaW5lcnMpXG4gICAgICB0aGlzLmhhbmRsZU1vZGVscyhuYW1lLCBkcmFrZSk7XG4gICAgfVxuICAgIGlmICghYmFnLmluaXRFdmVudHMpIHtcbiAgICAgIHRoaXMuc2V0dXBFdmVudHMoYmFnKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaW5kXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBmaW5kKG5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYmFnc1tpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhZ3NbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRlc3Ryb3lcbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIGRlc3Ryb3kobmFtZSkge1xuICAgIGxldCBiYWcgPSB0aGlzLmZpbmQobmFtZSk7XG4gICAgbGV0IGkgPSB0aGlzLmJhZ3MuaW5kZXhPZihiYWcpO1xuICAgIHRoaXMuYmFncy5zcGxpY2UoaSwgMSk7XG4gICAgYmFnLmRyYWtlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRPcHRpb25zXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPcHRpb25zKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBsZXQgYmFnID0gdGhpcy5hZGQobmFtZSwgZHJhZ3VsYShvcHRpb25zKSk7XG4gICAgdGhpcy5oYW5kbGVNb2RlbHMobmFtZSwgYmFnLmRyYWtlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoYW5kbGVNb2RlbHNcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGRyYWtlXG4gICAqL1xuICBoYW5kbGVNb2RlbHMobmFtZSwgZHJha2UpIHtcbiAgICBsZXQgZHJhZ0VsbTtcbiAgICBsZXQgZHJhZ0luZGV4O1xuICAgIGxldCBkcm9wSW5kZXg7XG4gICAgbGV0IHNvdXJjZU1vZGVsO1xuICAgIGRyYWtlLm9uKCdyZW1vdmUnLCAoZWwsIHNvdXJjZSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICB0aGlzLnJlbW92ZU1vZGVsLmVtaXQoW25hbWUsIGVsLCBzb3VyY2VdKTtcbiAgICB9KTtcbiAgICBkcmFrZS5vbignZHJhZycsIChlbCwgc291cmNlKSA9PiB7XG4gICAgICBkcmFnRWxtID0gZWw7XG4gICAgICBkcmFnSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZWwsIHNvdXJjZSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2Ryb3AnLCAoZHJvcEVsbSwgdGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3BJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihkcm9wRWxtLCB0YXJnZXQpO1xuICAgICAgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcm9wSW5kZXgsIDAsIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBub3RDb3B5ID0gZHJhZ0VsbSA9PT0gZHJvcEVsbTtcbiAgICAgICAgbGV0IHRhcmdldE1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgbGV0IGRyb3BFbG1Nb2RlbCA9IG5vdENvcHkgPyBzb3VyY2VNb2RlbFtkcmFnSW5kZXhdIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2VNb2RlbFtkcmFnSW5kZXhdKSk7XG5cbiAgICAgICAgaWYgKG5vdENvcHkpIHtcbiAgICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcm9wRWxtTW9kZWwpO1xuICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZHJvcEVsbSk7IC8vIGVsZW1lbnQgbXVzdCBiZSByZW1vdmVkIGZvciBuZ0ZvciB0byBhcHBseSBjb3JyZWN0bHlcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJvcE1vZGVsLmVtaXQoW25hbWUsIGRyb3BFbG0sIHRhcmdldCwgc291cmNlXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0dXBFdmVudHNcbiAgICogQHBhcmFtIGJhZ1xuICAgKi9cbiAgc2V0dXBFdmVudHMoYmFnKSB7XG4gICAgYmFnLmluaXRFdmVudHMgPSB0cnVlO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZW1pdHRlciA9ICh0eXBlKSA9PiB7XG4gICAgICBmdW5jdGlvbiByZXBsaWNhdGUoKSB7XG4gICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdGhhdFt0eXBlXS5lbWl0KFtiYWcubmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cblxuICAgICAgYmFnLmRyYWtlLm9uKHR5cGUsIHJlcGxpY2F0ZSk7XG4gICAgfTtcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGVtaXR0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRvbUluZGV4T2ZcbiAgICogQHBhcmFtIGNoaWxkXG4gICAqIEBwYXJhbSBwYXJlbnRcbiAgICovXG4gIGRvbUluZGV4T2YoY2hpbGQsIHBhcmVudCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICB9XG59XG4iXX0=