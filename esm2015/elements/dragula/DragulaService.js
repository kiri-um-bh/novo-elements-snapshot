/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable, EventEmitter } from '@angular/core';
// Vendor
import * as dragulaImported from '@bullhorn/dragula';
/** @type {?} */
const dragula = dragulaImported;
export class NovoDragulaService {
    constructor() {
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
     * \@name add
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    add(name, drake) {
        /** @type {?} */
        let bag = this.find(name);
        if (bag) {
            throw new Error(`Bag named: ${name} already exists.`);
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
    }
    /**
     * \@name find
     * @param {?} name
     * @return {?}
     */
    find(name) {
        for (let i = 0; i < this.bags.length; i++) {
            if (this.bags[i].name === name) {
                return this.bags[i];
            }
        }
        return null;
    }
    /**
     * \@name destroy
     * @param {?} name
     * @return {?}
     */
    destroy(name) {
        /** @type {?} */
        let bag = this.find(name);
        /** @type {?} */
        let i = this.bags.indexOf(bag);
        this.bags.splice(i, 1);
        bag.drake.destroy();
    }
    /**
     * \@name setOptions
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    setOptions(name, options) {
        /** @type {?} */
        let bag = this.add(name, dragula(options));
        this.handleModels(name, bag.drake);
    }
    /**
     * \@name handleModels
     * @param {?} name
     * @param {?} drake
     * @return {?}
     */
    handleModels(name, drake) {
        /** @type {?} */
        let dragElm;
        /** @type {?} */
        let dragIndex;
        /** @type {?} */
        let dropIndex;
        /** @type {?} */
        let sourceModel;
        drake.on('remove', (el, source) => {
            if (!drake.models) {
                return;
            }
            sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel.splice(dragIndex, 1);
            this.removeModel.emit([name, el, source]);
        });
        drake.on('drag', (el, source) => {
            dragElm = el;
            dragIndex = this.domIndexOf(el, source);
        });
        drake.on('drop', (dropElm, target, source) => {
            if (!drake.models) {
                return;
            }
            dropIndex = this.domIndexOf(dropElm, target);
            sourceModel = drake.models[drake.containers.indexOf(source)];
            if (target === source) {
                sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
            }
            else {
                /** @type {?} */
                let notCopy = dragElm === dropElm;
                /** @type {?} */
                let targetModel = drake.models[drake.containers.indexOf(target)];
                /** @type {?} */
                let dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
                if (notCopy) {
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel.splice(dropIndex, 0, dropElmModel);
                target.removeChild(dropElm); // element must be removed for ngFor to apply correctly
            }
            this.dropModel.emit([name, dropElm, target, source]);
        });
    }
    /**
     * \@name setupEvents
     * @param {?} bag
     * @return {?}
     */
    setupEvents(bag) {
        bag.initEvents = true;
        /** @type {?} */
        let that = this;
        /** @type {?} */
        let emitter = (type) => {
            /**
             * @return {?}
             */
            function replicate() {
                /** @type {?} */
                let args = Array.prototype.slice.call(arguments);
                that[type].emit([bag.name].concat(args));
            }
            bag.drake.on(type, replicate);
        };
        this.events.forEach(emitter);
    }
    /**
     * \@name domIndexOf
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    domIndexOf(child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    }
}
NovoDragulaService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUV6RCxPQUFPLEtBQUssZUFBZSxNQUFNLG1CQUFtQixDQUFDOztNQUMvQyxPQUFPLEdBQUcsZUFBZTtBQUcvQixNQUFNO0lBRE47UUFFRSxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDaEQsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFFBQUcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwRCxXQUFNLEdBQWtCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZJLFNBQUksR0FBZSxFQUFFLENBQUM7SUFvSXhCLENBQUM7Ozs7Ozs7SUE3SEMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLOztZ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QU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBTUQsV0FBVyxDQUFDLEdBQUc7UUFDYixHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7WUFDbEIsSUFBSSxHQUFHLElBQUk7O1lBQ1gsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7Ozs7WUFDckI7O29CQUNNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUM7WUFFRCxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7Ozs7SUFPRCxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDdEIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7WUFqSkYsVUFBVTs7OztJQUVULG9DQUErQzs7SUFDL0Msb0NBQStDOztJQUMvQyxrQ0FBNkM7O0lBQzdDLHFDQUFnRDs7SUFDaEQsa0NBQTZDOztJQUM3QyxpQ0FBNEM7O0lBQzVDLGtDQUE2Qzs7SUFDN0Msb0NBQStDOztJQUMvQyxvQ0FBK0M7O0lBQy9DLHVDQUFrRDs7SUFDbEQseUNBQW9EOztJQUNwRCxvQ0FBdUk7O0lBQ3ZJLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBWZW5kb3JcbmltcG9ydCAqIGFzIGRyYWd1bGFJbXBvcnRlZCBmcm9tICdAYnVsbGhvcm4vZHJhZ3VsYSc7XG5jb25zdCBkcmFndWxhID0gZHJhZ3VsYUltcG9ydGVkO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b0RyYWd1bGFTZXJ2aWNlIHtcbiAgY2FuY2VsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY2xvbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZHJhZzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyYWdlbmQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb3V0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNoYWRvdzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyb3BNb2RlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJlbW92ZU1vZGVsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZXZlbnRzOiBBcnJheTxzdHJpbmc+ID0gWydjYW5jZWwnLCAnY2xvbmVkJywgJ2RyYWcnLCAnZHJhZ2VuZCcsICdkcm9wJywgJ291dCcsICdvdmVyJywgJ3JlbW92ZScsICdzaGFkb3cnLCAnZHJvcE1vZGVsJywgJ3JlbW92ZU1vZGVsJ107XG4gIGJhZ3M6IEFycmF5PGFueT4gPSBbXTtcblxuICAvKipcbiAgICogQG5hbWUgYWRkXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBkcmFrZVxuICAgKi9cbiAgYWRkKG5hbWUsIGRyYWtlKSB7XG4gICAgbGV0IGJhZyA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBpZiAoYmFnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEJhZyBuYW1lZDogJHtuYW1lfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9XG4gICAgYmFnID0ge1xuICAgICAgbmFtZTogbmFtZSxcbiAgICAgIGRyYWtlOiBkcmFrZSxcbiAgICB9O1xuICAgIHRoaXMuYmFncy5wdXNoKGJhZyk7XG4gICAgaWYgKGRyYWtlLm1vZGVscykge1xuICAgICAgLy8gbW9kZWxzIHRvIHN5bmMgd2l0aCAobXVzdCBoYXZlIHNhbWUgc3RydWN0dXJlIGFzIGNvbnRhaW5lcnMpXG4gICAgICB0aGlzLmhhbmRsZU1vZGVscyhuYW1lLCBkcmFrZSk7XG4gICAgfVxuICAgIGlmICghYmFnLmluaXRFdmVudHMpIHtcbiAgICAgIHRoaXMuc2V0dXBFdmVudHMoYmFnKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaW5kXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBmaW5kKG5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYmFnc1tpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhZ3NbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRlc3Ryb3lcbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIGRlc3Ryb3kobmFtZSkge1xuICAgIGxldCBiYWcgPSB0aGlzLmZpbmQobmFtZSk7XG4gICAgbGV0IGkgPSB0aGlzLmJhZ3MuaW5kZXhPZihiYWcpO1xuICAgIHRoaXMuYmFncy5zcGxpY2UoaSwgMSk7XG4gICAgYmFnLmRyYWtlLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXRPcHRpb25zXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBzZXRPcHRpb25zKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBsZXQgYmFnID0gdGhpcy5hZGQobmFtZSwgZHJhZ3VsYShvcHRpb25zKSk7XG4gICAgdGhpcy5oYW5kbGVNb2RlbHMobmFtZSwgYmFnLmRyYWtlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoYW5kbGVNb2RlbHNcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGRyYWtlXG4gICAqL1xuICBoYW5kbGVNb2RlbHMobmFtZSwgZHJha2UpIHtcbiAgICBsZXQgZHJhZ0VsbTtcbiAgICBsZXQgZHJhZ0luZGV4O1xuICAgIGxldCBkcm9wSW5kZXg7XG4gICAgbGV0IHNvdXJjZU1vZGVsO1xuICAgIGRyYWtlLm9uKCdyZW1vdmUnLCAoZWwsIHNvdXJjZSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICB0aGlzLnJlbW92ZU1vZGVsLmVtaXQoW25hbWUsIGVsLCBzb3VyY2VdKTtcbiAgICB9KTtcbiAgICBkcmFrZS5vbignZHJhZycsIChlbCwgc291cmNlKSA9PiB7XG4gICAgICBkcmFnRWxtID0gZWw7XG4gICAgICBkcmFnSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZWwsIHNvdXJjZSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2Ryb3AnLCAoZHJvcEVsbSwgdGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3BJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihkcm9wRWxtLCB0YXJnZXQpO1xuICAgICAgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcm9wSW5kZXgsIDAsIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBub3RDb3B5ID0gZHJhZ0VsbSA9PT0gZHJvcEVsbTtcbiAgICAgICAgbGV0IHRhcmdldE1vZGVsID0gZHJha2UubW9kZWxzW2RyYWtlLmNvbnRhaW5lcnMuaW5kZXhPZih0YXJnZXQpXTtcbiAgICAgICAgbGV0IGRyb3BFbG1Nb2RlbCA9IG5vdENvcHkgPyBzb3VyY2VNb2RlbFtkcmFnSW5kZXhdIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2VNb2RlbFtkcmFnSW5kZXhdKSk7XG5cbiAgICAgICAgaWYgKG5vdENvcHkpIHtcbiAgICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcm9wRWxtTW9kZWwpO1xuICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZHJvcEVsbSk7IC8vIGVsZW1lbnQgbXVzdCBiZSByZW1vdmVkIGZvciBuZ0ZvciB0byBhcHBseSBjb3JyZWN0bHlcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJvcE1vZGVsLmVtaXQoW25hbWUsIGRyb3BFbG0sIHRhcmdldCwgc291cmNlXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0dXBFdmVudHNcbiAgICogQHBhcmFtIGJhZ1xuICAgKi9cbiAgc2V0dXBFdmVudHMoYmFnKSB7XG4gICAgYmFnLmluaXRFdmVudHMgPSB0cnVlO1xuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICBsZXQgZW1pdHRlciA9ICh0eXBlKSA9PiB7XG4gICAgICBmdW5jdGlvbiByZXBsaWNhdGUoKSB7XG4gICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdGhhdFt0eXBlXS5lbWl0KFtiYWcubmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cblxuICAgICAgYmFnLmRyYWtlLm9uKHR5cGUsIHJlcGxpY2F0ZSk7XG4gICAgfTtcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGVtaXR0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRvbUluZGV4T2ZcbiAgICogQHBhcmFtIGNoaWxkXG4gICAqIEBwYXJhbSBwYXJlbnRcbiAgICovXG4gIGRvbUluZGV4T2YoY2hpbGQsIHBhcmVudCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICB9XG59XG4iXX0=