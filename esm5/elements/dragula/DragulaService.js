/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV6RCxPQUFPLEtBQUssZUFBZSxNQUFNLG1CQUFtQixDQUFDOztJQUMvQyxPQUFPLEdBQUcsZUFBZTtBQUUvQjtJQUFBO1FBRUUsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hELFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxRQUFHLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xELGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsV0FBTSxHQUFrQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2SSxTQUFJLEdBQWUsRUFBRSxDQUFDO0lBb0l4QixDQUFDO0lBbElDOzs7O09BSUc7Ozs7Ozs7SUFDSCxnQ0FBRzs7Ozs7O0lBQUgsVUFB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Q0FBZ0Q7O0lBQ2hELGtDQUE2Qzs7SUFDN0MsaUNBQTRDOztJQUM1QyxrQ0FBNkM7O0lBQzdDLG9DQUErQzs7SUFDL0Msb0NBQStDOztJQUMvQyx1Q0FBa0Q7O0lBQ2xELHlDQUFvRDs7SUFDcEQsb0NBQXVJOztJQUN2SSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkcmFndWxhSW1wb3J0ZWQgZnJvbSAnQGJ1bGxob3JuL2RyYWd1bGEnO1xuY29uc3QgZHJhZ3VsYSA9IGRyYWd1bGFJbXBvcnRlZDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9EcmFndWxhU2VydmljZSB7XG4gIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsb25lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcmFnZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZHJvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG91dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzaGFkb3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcm9wTW9kZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZW1vdmVNb2RlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50czogQXJyYXk8c3RyaW5nPiA9IFsnY2FuY2VsJywgJ2Nsb25lZCcsICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJvcCcsICdvdXQnLCAnb3ZlcicsICdyZW1vdmUnLCAnc2hhZG93JywgJ2Ryb3BNb2RlbCcsICdyZW1vdmVNb2RlbCddO1xuICBiYWdzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgLyoqXG4gICAqIEBuYW1lIGFkZFxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gZHJha2VcbiAgICovXG4gIGFkZChuYW1lLCBkcmFrZSkge1xuICAgIGxldCBiYWcgPSB0aGlzLmZpbmQobmFtZSk7XG4gICAgaWYgKGJhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWcgbmFtZWQ6ICR7bmFtZX0gYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgfVxuICAgIGJhZyA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBkcmFrZTogZHJha2UsXG4gICAgfTtcbiAgICB0aGlzLmJhZ3MucHVzaChiYWcpO1xuICAgIGlmIChkcmFrZS5tb2RlbHMpIHtcbiAgICAgIC8vIG1vZGVscyB0byBzeW5jIHdpdGggKG11c3QgaGF2ZSBzYW1lIHN0cnVjdHVyZSBhcyBjb250YWluZXJzKVxuICAgICAgdGhpcy5oYW5kbGVNb2RlbHMobmFtZSwgZHJha2UpO1xuICAgIH1cbiAgICBpZiAoIWJhZy5pbml0RXZlbnRzKSB7XG4gICAgICB0aGlzLnNldHVwRXZlbnRzKGJhZyk7XG4gICAgfVxuICAgIHJldHVybiBiYWc7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZmluZFxuICAgKiBAcGFyYW0gbmFtZVxuICAgKi9cbiAgZmluZChuYW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJhZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmJhZ3NbaV0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYWdzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZXN0cm95XG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBkZXN0cm95KG5hbWUpIHtcbiAgICBsZXQgYmFnID0gdGhpcy5maW5kKG5hbWUpO1xuICAgIGxldCBpID0gdGhpcy5iYWdzLmluZGV4T2YoYmFnKTtcbiAgICB0aGlzLmJhZ3Muc3BsaWNlKGksIDEpO1xuICAgIGJhZy5kcmFrZS5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0T3B0aW9uc1xuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc2V0T3B0aW9ucyhuYW1lLCBvcHRpb25zKSB7XG4gICAgbGV0IGJhZyA9IHRoaXMuYWRkKG5hbWUsIGRyYWd1bGEob3B0aW9ucykpO1xuICAgIHRoaXMuaGFuZGxlTW9kZWxzKG5hbWUsIGJhZy5kcmFrZSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgaGFuZGxlTW9kZWxzXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBkcmFrZVxuICAgKi9cbiAgaGFuZGxlTW9kZWxzKG5hbWUsIGRyYWtlKSB7XG4gICAgbGV0IGRyYWdFbG07XG4gICAgbGV0IGRyYWdJbmRleDtcbiAgICBsZXQgZHJvcEluZGV4O1xuICAgIGxldCBzb3VyY2VNb2RlbDtcbiAgICBkcmFrZS5vbigncmVtb3ZlJywgKGVsLCBzb3VyY2UpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpO1xuICAgICAgdGhpcy5yZW1vdmVNb2RlbC5lbWl0KFtuYW1lLCBlbCwgc291cmNlXSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2RyYWcnLCAoZWwsIHNvdXJjZSkgPT4ge1xuICAgICAgZHJhZ0VsbSA9IGVsO1xuICAgICAgZHJhZ0luZGV4ID0gdGhpcy5kb21JbmRleE9mKGVsLCBzb3VyY2UpO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcm9wJywgKGRyb3BFbG0sIHRhcmdldCwgc291cmNlKSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkcm9wSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZHJvcEVsbSwgdGFyZ2V0KTtcbiAgICAgIHNvdXJjZU1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZihzb3VyY2UpXTtcbiAgICAgIGlmICh0YXJnZXQgPT09IHNvdXJjZSkge1xuICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKVswXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbm90Q29weSA9IGRyYWdFbG0gPT09IGRyb3BFbG07XG4gICAgICAgIGxldCB0YXJnZXRNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgIGxldCBkcm9wRWxtTW9kZWwgPSBub3RDb3B5ID8gc291cmNlTW9kZWxbZHJhZ0luZGV4XSA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlTW9kZWxbZHJhZ0luZGV4XSkpO1xuXG4gICAgICAgIGlmIChub3RDb3B5KSB7XG4gICAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0TW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgZHJvcEVsbU1vZGVsKTtcbiAgICAgICAgdGFyZ2V0LnJlbW92ZUNoaWxkKGRyb3BFbG0pOyAvLyBlbGVtZW50IG11c3QgYmUgcmVtb3ZlZCBmb3IgbmdGb3IgdG8gYXBwbHkgY29ycmVjdGx5XG4gICAgICB9XG4gICAgICB0aGlzLmRyb3BNb2RlbC5lbWl0KFtuYW1lLCBkcm9wRWxtLCB0YXJnZXQsIHNvdXJjZV0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNldHVwRXZlbnRzXG4gICAqIEBwYXJhbSBiYWdcbiAgICovXG4gIHNldHVwRXZlbnRzKGJhZykge1xuICAgIGJhZy5pbml0RXZlbnRzID0gdHJ1ZTtcbiAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgbGV0IGVtaXR0ZXIgPSAodHlwZSkgPT4ge1xuICAgICAgZnVuY3Rpb24gcmVwbGljYXRlKCkge1xuICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHRoYXRbdHlwZV0uZW1pdChbYmFnLm5hbWVdLmNvbmNhdChhcmdzKSk7XG4gICAgICB9XG5cbiAgICAgIGJhZy5kcmFrZS5vbih0eXBlLCByZXBsaWNhdGUpO1xuICAgIH07XG4gICAgdGhpcy5ldmVudHMuZm9yRWFjaChlbWl0dGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkb21JbmRleE9mXG4gICAqIEBwYXJhbSBjaGlsZFxuICAgKiBAcGFyYW0gcGFyZW50XG4gICAqL1xuICBkb21JbmRleE9mKGNoaWxkLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sIGNoaWxkKTtcbiAgfVxufVxuIl19