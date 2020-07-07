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
            name,
            drake,
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
        const bag = this.find(name);
        /** @type {?} */
        const i = this.bags.indexOf(bag);
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
        const bag = this.add(name, dragula(options));
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
        drake.on('remove', (/**
         * @param {?} el
         * @param {?} source
         * @return {?}
         */
        (el, source) => {
            if (!drake.models) {
                return;
            }
            sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel.splice(dragIndex, 1);
            this.removeModel.emit([name, el, source]);
        }));
        drake.on('drag', (/**
         * @param {?} el
         * @param {?} source
         * @return {?}
         */
        (el, source) => {
            dragElm = el;
            dragIndex = this.domIndexOf(el, source);
        }));
        drake.on('drop', (/**
         * @param {?} dropElm
         * @param {?} target
         * @param {?} source
         * @return {?}
         */
        (dropElm, target, source) => {
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
                const notCopy = dragElm === dropElm;
                /** @type {?} */
                const targetModel = drake.models[drake.containers.indexOf(target)];
                /** @type {?} */
                const dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
                if (notCopy) {
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel.splice(dropIndex, 0, dropElmModel);
                target.removeChild(dropElm); // element must be removed for ngFor to apply correctly
            }
            this.dropModel.emit([name, dropElm, target, source]);
        }));
    }
    /**
     * \@name setupEvents
     * @param {?} bag
     * @return {?}
     */
    setupEvents(bag) {
        bag.initEvents = true;
        /** @type {?} */
        const that = this;
        /** @type {?} */
        const emitter = (/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            /**
             * @return {?}
             */
            function replicate() {
                /** @type {?} */
                const args = Array.prototype.slice.call(arguments);
                that[type].emit([bag.name].concat(args));
            }
            bag.drake.on(type, replicate);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFDL0MsT0FBTyxHQUFHLGVBQWU7QUFHL0IsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsUUFBRyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELFdBQU0sR0FBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkksU0FBSSxHQUFlLEVBQUUsQ0FBQztJQW9JeEIsQ0FBQzs7Ozs7OztJQTdIQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUs7O1lBQ1QsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksR0FBRyxFQUFFO1lBQ1AsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLElBQUksa0JBQWtCLENBQUMsQ0FBQztTQUN2RDtRQUNELEdBQUcsR0FBRztZQUNKLElBQUk7WUFDSixLQUFLO1NBQ04sQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNoQiwrREFBK0Q7WUFDL0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7Ozs7SUFNRCxJQUFJLENBQUMsSUFBSTtRQUNQLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7OztJQU1ELE9BQU8sQ0FBQyxJQUFJOztjQUNKLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7Y0FDckIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7Ozs7O0lBT0QsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPOztjQUNoQixHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBT0QsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLOztZQUNsQixPQUFPOztZQUNQLFNBQVM7O1lBQ1QsU0FBUzs7WUFDVCxXQUFXO1FBQ2YsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7OztRQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNqQixPQUFPO2FBQ1I7WUFDRCxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdELFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNOzs7OztRQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzlCLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDYixTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU07Ozs7OztRQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDakIsT0FBTzthQUNSO1lBQ0QsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdDLFdBQVcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDN0QsSUFBSSxNQUFNLEtBQUssTUFBTSxFQUFFO2dCQUNyQixXQUFXLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2RTtpQkFBTTs7c0JBQ0MsT0FBTyxHQUFHLE9BQU8sS0FBSyxPQUFPOztzQkFDN0IsV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7O3NCQUM1RCxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFFMUcsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ2xDO2dCQUNELFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLHVEQUF1RDthQUNyRjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQU1ELFdBQVcsQ0FBQyxHQUFHO1FBQ2IsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O2NBQ2hCLElBQUksR0FBRyxJQUFJOztjQUNYLE9BQU87Ozs7UUFBRyxDQUFDLElBQUksRUFBRSxFQUFFOzs7O1lBQ3ZCLFNBQVMsU0FBUzs7c0JBQ1YsSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDM0MsQ0FBQztZQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7O0lBT0QsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQ3RCLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7O1lBakpGLFVBQVU7Ozs7SUFFVCxvQ0FBK0M7O0lBQy9DLG9DQUErQzs7SUFDL0Msa0NBQTZDOztJQUM3QyxxQ0FBZ0Q7O0lBQ2hELGtDQUE2Qzs7SUFDN0MsaUNBQTRDOztJQUM1QyxrQ0FBNkM7O0lBQzdDLG9DQUErQzs7SUFDL0Msb0NBQStDOztJQUMvQyx1Q0FBa0Q7O0lBQ2xELHlDQUFvRDs7SUFDcEQsb0NBQXVJOztJQUN2SSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVmVuZG9yXG5pbXBvcnQgKiBhcyBkcmFndWxhSW1wb3J0ZWQgZnJvbSAnQGJ1bGxob3JuL2RyYWd1bGEnO1xuY29uc3QgZHJhZ3VsYSA9IGRyYWd1bGFJbXBvcnRlZDtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9EcmFndWxhU2VydmljZSB7XG4gIGNhbmNlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNsb25lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyYWc6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcmFnZW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZHJvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG91dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzaGFkb3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcm9wTW9kZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICByZW1vdmVNb2RlbDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGV2ZW50czogQXJyYXk8c3RyaW5nPiA9IFsnY2FuY2VsJywgJ2Nsb25lZCcsICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJvcCcsICdvdXQnLCAnb3ZlcicsICdyZW1vdmUnLCAnc2hhZG93JywgJ2Ryb3BNb2RlbCcsICdyZW1vdmVNb2RlbCddO1xuICBiYWdzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgLyoqXG4gICAqIEBuYW1lIGFkZFxuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gZHJha2VcbiAgICovXG4gIGFkZChuYW1lLCBkcmFrZSkge1xuICAgIGxldCBiYWcgPSB0aGlzLmZpbmQobmFtZSk7XG4gICAgaWYgKGJhZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBCYWcgbmFtZWQ6ICR7bmFtZX0gYWxyZWFkeSBleGlzdHMuYCk7XG4gICAgfVxuICAgIGJhZyA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBkcmFrZSxcbiAgICB9O1xuICAgIHRoaXMuYmFncy5wdXNoKGJhZyk7XG4gICAgaWYgKGRyYWtlLm1vZGVscykge1xuICAgICAgLy8gbW9kZWxzIHRvIHN5bmMgd2l0aCAobXVzdCBoYXZlIHNhbWUgc3RydWN0dXJlIGFzIGNvbnRhaW5lcnMpXG4gICAgICB0aGlzLmhhbmRsZU1vZGVscyhuYW1lLCBkcmFrZSk7XG4gICAgfVxuICAgIGlmICghYmFnLmluaXRFdmVudHMpIHtcbiAgICAgIHRoaXMuc2V0dXBFdmVudHMoYmFnKTtcbiAgICB9XG4gICAgcmV0dXJuIGJhZztcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaW5kXG4gICAqIEBwYXJhbSBuYW1lXG4gICAqL1xuICBmaW5kKG5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmFncy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuYmFnc1tpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhZ3NbaV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRlc3Ryb3lcbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIGRlc3Ryb3kobmFtZSkge1xuICAgIGNvbnN0IGJhZyA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBjb25zdCBpID0gdGhpcy5iYWdzLmluZGV4T2YoYmFnKTtcbiAgICB0aGlzLmJhZ3Muc3BsaWNlKGksIDEpO1xuICAgIGJhZy5kcmFrZS5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0T3B0aW9uc1xuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgc2V0T3B0aW9ucyhuYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgYmFnID0gdGhpcy5hZGQobmFtZSwgZHJhZ3VsYShvcHRpb25zKSk7XG4gICAgdGhpcy5oYW5kbGVNb2RlbHMobmFtZSwgYmFnLmRyYWtlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBoYW5kbGVNb2RlbHNcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGRyYWtlXG4gICAqL1xuICBoYW5kbGVNb2RlbHMobmFtZSwgZHJha2UpIHtcbiAgICBsZXQgZHJhZ0VsbTtcbiAgICBsZXQgZHJhZ0luZGV4O1xuICAgIGxldCBkcm9wSW5kZXg7XG4gICAgbGV0IHNvdXJjZU1vZGVsO1xuICAgIGRyYWtlLm9uKCdyZW1vdmUnLCAoZWwsIHNvdXJjZSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSk7XG4gICAgICB0aGlzLnJlbW92ZU1vZGVsLmVtaXQoW25hbWUsIGVsLCBzb3VyY2VdKTtcbiAgICB9KTtcbiAgICBkcmFrZS5vbignZHJhZycsIChlbCwgc291cmNlKSA9PiB7XG4gICAgICBkcmFnRWxtID0gZWw7XG4gICAgICBkcmFnSW5kZXggPSB0aGlzLmRvbUluZGV4T2YoZWwsIHNvdXJjZSk7XG4gICAgfSk7XG4gICAgZHJha2Uub24oJ2Ryb3AnLCAoZHJvcEVsbSwgdGFyZ2V0LCBzb3VyY2UpID0+IHtcbiAgICAgIGlmICghZHJha2UubW9kZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRyb3BJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihkcm9wRWxtLCB0YXJnZXQpO1xuICAgICAgc291cmNlTW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHNvdXJjZSldO1xuICAgICAgaWYgKHRhcmdldCA9PT0gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcm9wSW5kZXgsIDAsIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vdENvcHkgPSBkcmFnRWxtID09PSBkcm9wRWxtO1xuICAgICAgICBjb25zdCB0YXJnZXRNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2YodGFyZ2V0KV07XG4gICAgICAgIGNvbnN0IGRyb3BFbG1Nb2RlbCA9IG5vdENvcHkgPyBzb3VyY2VNb2RlbFtkcmFnSW5kZXhdIDogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2VNb2RlbFtkcmFnSW5kZXhdKSk7XG5cbiAgICAgICAgaWYgKG5vdENvcHkpIHtcbiAgICAgICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRNb2RlbC5zcGxpY2UoZHJvcEluZGV4LCAwLCBkcm9wRWxtTW9kZWwpO1xuICAgICAgICB0YXJnZXQucmVtb3ZlQ2hpbGQoZHJvcEVsbSk7IC8vIGVsZW1lbnQgbXVzdCBiZSByZW1vdmVkIGZvciBuZ0ZvciB0byBhcHBseSBjb3JyZWN0bHlcbiAgICAgIH1cbiAgICAgIHRoaXMuZHJvcE1vZGVsLmVtaXQoW25hbWUsIGRyb3BFbG0sIHRhcmdldCwgc291cmNlXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgc2V0dXBFdmVudHNcbiAgICogQHBhcmFtIGJhZ1xuICAgKi9cbiAgc2V0dXBFdmVudHMoYmFnKSB7XG4gICAgYmFnLmluaXRFdmVudHMgPSB0cnVlO1xuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgIGNvbnN0IGVtaXR0ZXIgPSAodHlwZSkgPT4ge1xuICAgICAgZnVuY3Rpb24gcmVwbGljYXRlKCkge1xuICAgICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdGhhdFt0eXBlXS5lbWl0KFtiYWcubmFtZV0uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cblxuICAgICAgYmFnLmRyYWtlLm9uKHR5cGUsIHJlcGxpY2F0ZSk7XG4gICAgfTtcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGVtaXR0ZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRvbUluZGV4T2ZcbiAgICogQHBhcmFtIGNoaWxkXG4gICAqIEBwYXJhbSBwYXJlbnRcbiAgICovXG4gIGRvbUluZGV4T2YoY2hpbGQsIHBhcmVudCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuICB9XG59XG4iXX0=