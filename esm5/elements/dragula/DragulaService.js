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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ3VsYVNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFekQsT0FBTyxLQUFLLGVBQWUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFDL0MsT0FBTyxHQUFHLGVBQWU7QUFFL0I7SUFBQTtRQUVFLFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvQyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsU0FBSSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzdDLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsUUFBRyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVDLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsRCxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELFdBQU0sR0FBa0IsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDdkksU0FBSSxHQUFlLEVBQUUsQ0FBQztJQW9JeEIsQ0FBQztJQWxJQzs7OztPQUlHOzs7Ozs7O0lBQ0gsZ0NBQUc7Ozs7OztJQUFILFVB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cUNBQWdEOztJQUNoRCxrQ0FBNkM7O0lBQzdDLGlDQUE0Qzs7SUFDNUMsa0NBQTZDOztJQUM3QyxvQ0FBK0M7O0lBQy9DLG9DQUErQzs7SUFDL0MsdUNBQWtEOztJQUNsRCx5Q0FBb0Q7O0lBQ3BELG9DQUF1STs7SUFDdkksa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIFZlbmRvclxuaW1wb3J0ICogYXMgZHJhZ3VsYUltcG9ydGVkIGZyb20gJ0BidWxsaG9ybi9kcmFndWxhJztcbmNvbnN0IGRyYWd1bGEgPSBkcmFndWxhSW1wb3J0ZWQ7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvRHJhZ3VsYVNlcnZpY2Uge1xuICBjYW5jZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjbG9uZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkcmFnOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZHJhZ2VuZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRyb3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvdXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgc2hhZG93OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZHJvcE1vZGVsOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcmVtb3ZlTW9kZWw6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBldmVudHM6IEFycmF5PHN0cmluZz4gPSBbJ2NhbmNlbCcsICdjbG9uZWQnLCAnZHJhZycsICdkcmFnZW5kJywgJ2Ryb3AnLCAnb3V0JywgJ292ZXInLCAncmVtb3ZlJywgJ3NoYWRvdycsICdkcm9wTW9kZWwnLCAncmVtb3ZlTW9kZWwnXTtcbiAgYmFnczogQXJyYXk8YW55PiA9IFtdO1xuXG4gIC8qKlxuICAgKiBAbmFtZSBhZGRcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIGRyYWtlXG4gICAqL1xuICBhZGQobmFtZSwgZHJha2UpIHtcbiAgICBsZXQgYmFnID0gdGhpcy5maW5kKG5hbWUpO1xuICAgIGlmIChiYWcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQmFnIG5hbWVkOiAke25hbWV9IGFscmVhZHkgZXhpc3RzLmApO1xuICAgIH1cbiAgICBiYWcgPSB7XG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgZHJha2U6IGRyYWtlLFxuICAgIH07XG4gICAgdGhpcy5iYWdzLnB1c2goYmFnKTtcbiAgICBpZiAoZHJha2UubW9kZWxzKSB7XG4gICAgICAvLyBtb2RlbHMgdG8gc3luYyB3aXRoIChtdXN0IGhhdmUgc2FtZSBzdHJ1Y3R1cmUgYXMgY29udGFpbmVycylcbiAgICAgIHRoaXMuaGFuZGxlTW9kZWxzKG5hbWUsIGRyYWtlKTtcbiAgICB9XG4gICAgaWYgKCFiYWcuaW5pdEV2ZW50cykge1xuICAgICAgdGhpcy5zZXR1cEV2ZW50cyhiYWcpO1xuICAgIH1cbiAgICByZXR1cm4gYmFnO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGZpbmRcbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIGZpbmQobmFtZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iYWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5iYWdzW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFnc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGVzdHJveVxuICAgKiBAcGFyYW0gbmFtZVxuICAgKi9cbiAgZGVzdHJveShuYW1lKSB7XG4gICAgbGV0IGJhZyA9IHRoaXMuZmluZChuYW1lKTtcbiAgICBsZXQgaSA9IHRoaXMuYmFncy5pbmRleE9mKGJhZyk7XG4gICAgdGhpcy5iYWdzLnNwbGljZShpLCAxKTtcbiAgICBiYWcuZHJha2UuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHNldE9wdGlvbnNcbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIHNldE9wdGlvbnMobmFtZSwgb3B0aW9ucykge1xuICAgIGxldCBiYWcgPSB0aGlzLmFkZChuYW1lLCBkcmFndWxhKG9wdGlvbnMpKTtcbiAgICB0aGlzLmhhbmRsZU1vZGVscyhuYW1lLCBiYWcuZHJha2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGhhbmRsZU1vZGVsc1xuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gZHJha2VcbiAgICovXG4gIGhhbmRsZU1vZGVscyhuYW1lLCBkcmFrZSkge1xuICAgIGxldCBkcmFnRWxtO1xuICAgIGxldCBkcmFnSW5kZXg7XG4gICAgbGV0IGRyb3BJbmRleDtcbiAgICBsZXQgc291cmNlTW9kZWw7XG4gICAgZHJha2Uub24oJ3JlbW92ZScsIChlbCwgc291cmNlKSA9PiB7XG4gICAgICBpZiAoIWRyYWtlLm1vZGVscykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzb3VyY2VNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2Yoc291cmNlKV07XG4gICAgICBzb3VyY2VNb2RlbC5zcGxpY2UoZHJhZ0luZGV4LCAxKTtcbiAgICAgIHRoaXMucmVtb3ZlTW9kZWwuZW1pdChbbmFtZSwgZWwsIHNvdXJjZV0pO1xuICAgIH0pO1xuICAgIGRyYWtlLm9uKCdkcmFnJywgKGVsLCBzb3VyY2UpID0+IHtcbiAgICAgIGRyYWdFbG0gPSBlbDtcbiAgICAgIGRyYWdJbmRleCA9IHRoaXMuZG9tSW5kZXhPZihlbCwgc291cmNlKTtcbiAgICB9KTtcbiAgICBkcmFrZS5vbignZHJvcCcsIChkcm9wRWxtLCB0YXJnZXQsIHNvdXJjZSkgPT4ge1xuICAgICAgaWYgKCFkcmFrZS5tb2RlbHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZHJvcEluZGV4ID0gdGhpcy5kb21JbmRleE9mKGRyb3BFbG0sIHRhcmdldCk7XG4gICAgICBzb3VyY2VNb2RlbCA9IGRyYWtlLm1vZGVsc1tkcmFrZS5jb250YWluZXJzLmluZGV4T2Yoc291cmNlKV07XG4gICAgICBpZiAodGFyZ2V0ID09PSBzb3VyY2UpIHtcbiAgICAgICAgc291cmNlTW9kZWwuc3BsaWNlKGRyb3BJbmRleCwgMCwgc291cmNlTW9kZWwuc3BsaWNlKGRyYWdJbmRleCwgMSlbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5vdENvcHkgPSBkcmFnRWxtID09PSBkcm9wRWxtO1xuICAgICAgICBsZXQgdGFyZ2V0TW9kZWwgPSBkcmFrZS5tb2RlbHNbZHJha2UuY29udGFpbmVycy5pbmRleE9mKHRhcmdldCldO1xuICAgICAgICBsZXQgZHJvcEVsbU1vZGVsID0gbm90Q29weSA/IHNvdXJjZU1vZGVsW2RyYWdJbmRleF0gOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZU1vZGVsW2RyYWdJbmRleF0pKTtcblxuICAgICAgICBpZiAobm90Q29weSkge1xuICAgICAgICAgIHNvdXJjZU1vZGVsLnNwbGljZShkcmFnSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRhcmdldE1vZGVsLnNwbGljZShkcm9wSW5kZXgsIDAsIGRyb3BFbG1Nb2RlbCk7XG4gICAgICAgIHRhcmdldC5yZW1vdmVDaGlsZChkcm9wRWxtKTsgLy8gZWxlbWVudCBtdXN0IGJlIHJlbW92ZWQgZm9yIG5nRm9yIHRvIGFwcGx5IGNvcnJlY3RseVxuICAgICAgfVxuICAgICAgdGhpcy5kcm9wTW9kZWwuZW1pdChbbmFtZSwgZHJvcEVsbSwgdGFyZ2V0LCBzb3VyY2VdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzZXR1cEV2ZW50c1xuICAgKiBAcGFyYW0gYmFnXG4gICAqL1xuICBzZXR1cEV2ZW50cyhiYWcpIHtcbiAgICBiYWcuaW5pdEV2ZW50cyA9IHRydWU7XG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgIGxldCBlbWl0dGVyID0gKHR5cGUpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHJlcGxpY2F0ZSgpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB0aGF0W3R5cGVdLmVtaXQoW2JhZy5uYW1lXS5jb25jYXQoYXJncykpO1xuICAgICAgfVxuXG4gICAgICBiYWcuZHJha2Uub24odHlwZSwgcmVwbGljYXRlKTtcbiAgICB9O1xuICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZW1pdHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZG9tSW5kZXhPZlxuICAgKiBAcGFyYW0gY2hpbGRcbiAgICogQHBhcmFtIHBhcmVudFxuICAgKi9cbiAgZG9tSW5kZXhPZihjaGlsZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG4gIH1cbn1cbiJdfQ==