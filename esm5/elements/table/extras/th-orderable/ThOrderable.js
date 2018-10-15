/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Directive, EventEmitter, ElementRef, Input, Output } from '@angular/core';
// App
import { Helpers } from '../../../../utils/Helpers';
var ThOrderable = /** @class */ (function () {
    function ThOrderable(element) {
        this.element = element;
        this.onOrderChange = new EventEmitter();
        this.element = element;
    }
    Object.defineProperty(ThOrderable.prototype, "index", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var index = null;
            if (this.element.nativeElement && this.element.nativeElement.parentNode) {
                /** @type {?} */
                var children = Array.prototype.slice.call(this.element.nativeElement.parentNode.children);
                index = children.indexOf(this.element.nativeElement);
            }
            return index;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ThOrderable.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.column.ordering) {
            this.element.nativeElement.setAttribute('draggable', true);
            this.table = this.findTable(this.element.nativeElement);
        }
    };
    /**
     * @name onDragStart
     * @param event
     */
    /**
     * \@name onDragStart
     * @param {?=} event
     * @return {?}
     */
    ThOrderable.prototype.onDragStart = /**
     * \@name onDragStart
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (this.column.ordering) {
            this.element.nativeElement.classList.add('dragging');
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', JSON.stringify(this.column));
            this.clone = this.table.cloneNode(true);
            this.clone.style.position = 'absolute';
            this.clone.style.left = '100%';
            this.clone.style.width = '150px';
            this.deleteColumns(this.clone);
            document.body.appendChild(this.clone);
            event.dataTransfer.setDragImage(this.clone, 75, 30);
        }
    };
    /**
     * @name deleteColumns
     * @param table
     */
    /**
     * \@name deleteColumns
     * @param {?} table
     * @return {?}
     */
    ThOrderable.prototype.deleteColumns = /**
     * \@name deleteColumns
     * @param {?} table
     * @return {?}
     */
    function (table) {
        // TODO: `table` should be immutable and this method should return the modified data to its caller
        if (table.rows.length > 0) {
            /** @type {?} */
            var allRows = table.rows;
            for (var i = 0; i < allRows.length; i++) {
                if (i > 10) {
                    table.deleteRow(-1);
                }
                else {
                    /** @type {?} */
                    var cellLength = allRows[i].cells.length;
                    for (var c = 0; c < cellLength; c++) {
                        if (c < this.index) {
                            allRows[i].deleteCell(0);
                        }
                        else if (c > this.index) {
                            allRows[i].deleteCell(-1);
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?} start
     * @return {?}
     */
    ThOrderable.prototype.findTable = /**
     * @param {?} start
     * @return {?}
     */
    function (start) {
        /** @type {?} */
        var htmlElementNode = start;
        while (htmlElementNode) {
            htmlElementNode = htmlElementNode.parentNode;
            if (htmlElementNode && htmlElementNode.tagName.toLowerCase() === 'table') {
                return htmlElementNode;
            }
        }
        return undefined;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ThOrderable.prototype.onDrag = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        return false;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ThOrderable.prototype.onDragEnd = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        this.element.nativeElement.classList.remove('over');
        this.element.nativeElement.classList.remove('dragging');
        document.body.removeChild(this.clone);
        return false;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ThOrderable.prototype.onDrop = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        this.element.nativeElement.classList.remove('over');
        /** @type {?} */
        var data = JSON.parse(event.dataTransfer.getData('text/plain'));
        this.onOrderChange.emit({
            first: data,
            second: this.column,
        });
        return false;
    };
    /**
     * @name onDragOver
     * @param event
     */
    /**
     * \@name onDragOver
     * @param {?} event
     * @return {?}
     */
    ThOrderable.prototype.onDragOver = /**
     * \@name onDragOver
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        event.dataTransfer.dropEffect = 'move';
        return false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ThOrderable.prototype.onDragEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.element.nativeElement.classList.add('over');
        this.target = event.target;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    ThOrderable.prototype.onDragLeave = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        this.element.nativeElement.classList.remove('over');
    };
    ThOrderable.decorators = [
        { type: Directive, args: [{
                    selector: '[novoThOrderable]',
                    host: {
                        '(dragstart)': 'onDragStart($event)',
                        '(dragover)': 'onDragOver($event)',
                        '(dragenter)': 'onDragEnter($event)',
                        '(dragleave)': 'onDragLeave($event)',
                        '(dragend)': 'onDragEnd($event)',
                        '(drop)': 'onDrop($event)',
                    },
                },] }
    ];
    ThOrderable.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ThOrderable.propDecorators = {
        column: [{ type: Input, args: ['novoThOrderable',] }],
        onOrderChange: [{ type: Output }]
    };
    return ThOrderable;
}());
export { ThOrderable };
if (false) {
    /** @type {?} */
    ThOrderable.prototype.column;
    /** @type {?} */
    ThOrderable.prototype.onOrderChange;
    /** @type {?} */
    ThOrderable.prototype.table;
    /** @type {?} */
    ThOrderable.prototype.clone;
    /** @type {?} */
    ThOrderable.prototype.target;
    /** @type {?} */
    ThOrderable.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmRlcmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEQ7SUFxQkUscUJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFOdkMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU9wRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsc0JBQUksOEJBQUs7Ozs7UUFBVDs7Z0JBQ00sS0FBSyxHQUFXLElBQUk7WUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7O29CQUNuRSxRQUFRLEdBQWUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JHLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdEQ7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7OztPQUFBOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FB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QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksS0FBVztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQTVJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsSUFBSSxFQUFFO3dCQUNKLGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLFlBQVksRUFBRSxvQkFBb0I7d0JBQ2xDLGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLFdBQVcsRUFBRSxtQkFBbUI7d0JBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzNCO2lCQUNGOzs7Z0JBZGlDLFVBQVU7Ozt5QkFnQnpDLEtBQUssU0FBQyxpQkFBaUI7Z0NBRXZCLE1BQU07O0lBK0hULGtCQUFDO0NBQUEsQUE3SUQsSUE2SUM7U0FsSVksV0FBVzs7O0lBQ3RCLDZCQUNZOztJQUNaLG9DQUNzRDs7SUFFdEQsNEJBQVc7O0lBQ1gsNEJBQVc7O0lBQ1gsNkJBQVk7O0lBRUEsOEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9UaE9yZGVyYWJsZV0nLFxuICBob3N0OiB7XG4gICAgJyhkcmFnc3RhcnQpJzogJ29uRHJhZ1N0YXJ0KCRldmVudCknLFxuICAgICcoZHJhZ292ZXIpJzogJ29uRHJhZ092ZXIoJGV2ZW50KScsXG4gICAgJyhkcmFnZW50ZXIpJzogJ29uRHJhZ0VudGVyKCRldmVudCknLFxuICAgICcoZHJhZ2xlYXZlKSc6ICdvbkRyYWdMZWF2ZSgkZXZlbnQpJyxcbiAgICAnKGRyYWdlbmQpJzogJ29uRHJhZ0VuZCgkZXZlbnQpJyxcbiAgICAnKGRyb3ApJzogJ29uRHJvcCgkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGhPcmRlcmFibGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ25vdm9UaE9yZGVyYWJsZScpXG4gIGNvbHVtbjogYW55O1xuICBAT3V0cHV0KClcbiAgb25PcmRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGFibGU6IGFueTtcbiAgY2xvbmU6IGFueTtcbiAgdGFyZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGdldCBpbmRleCgpIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGxldCBjaGlsZHJlbjogQXJyYXk8YW55PiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2hpbGRyZW4pO1xuICAgICAgaW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9yZGVyaW5nKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgdGhpcy50YWJsZSA9IHRoaXMuZmluZFRhYmxlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25EcmFnU3RhcnRcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbkRyYWdTdGFydChldmVudD86IGFueSkge1xuICAgIGlmICh0aGlzLmNvbHVtbi5vcmRlcmluZykge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbHVtbikpO1xuXG4gICAgICB0aGlzLmNsb25lID0gdGhpcy50YWJsZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB0aGlzLmNsb25lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRoaXMuY2xvbmUuc3R5bGUubGVmdCA9ICcxMDAlJztcbiAgICAgIHRoaXMuY2xvbmUuc3R5bGUud2lkdGggPSAnMTUwcHgnO1xuICAgICAgdGhpcy5kZWxldGVDb2x1bW5zKHRoaXMuY2xvbmUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNsb25lKTtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREcmFnSW1hZ2UodGhpcy5jbG9uZSwgNzUsIDMwKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgZGVsZXRlQ29sdW1uc1xuICAgKiBAcGFyYW0gdGFibGVcbiAgICovXG4gIGRlbGV0ZUNvbHVtbnModGFibGU6IHsgcm93czogQXJyYXk8YW55PjsgZGVsZXRlUm93OiBGdW5jdGlvbiB9KSB7XG4gICAgLy8gVE9ETzogYHRhYmxlYCBzaG91bGQgYmUgaW1tdXRhYmxlIGFuZCB0aGlzIG1ldGhvZCBzaG91bGQgcmV0dXJuIHRoZSBtb2RpZmllZCBkYXRhIHRvIGl0cyBjYWxsZXJcbiAgICBpZiAodGFibGUucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhbGxSb3dzID0gdGFibGUucm93cztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA+IDEwKSB7XG4gICAgICAgICAgdGFibGUuZGVsZXRlUm93KC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjZWxsTGVuZ3RoID0gYWxsUm93c1tpXS5jZWxscy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsTGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGlmIChjIDwgdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICBhbGxSb3dzW2ldLmRlbGV0ZUNlbGwoMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMgPiB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICAgIGFsbFJvd3NbaV0uZGVsZXRlQ2VsbCgtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmluZFRhYmxlKHN0YXJ0KSB7XG4gICAgbGV0IGh0bWxFbGVtZW50Tm9kZSA9IHN0YXJ0O1xuICAgIHdoaWxlIChodG1sRWxlbWVudE5vZGUpIHtcbiAgICAgIGh0bWxFbGVtZW50Tm9kZSA9IGh0bWxFbGVtZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgaWYgKGh0bWxFbGVtZW50Tm9kZSAmJiBodG1sRWxlbWVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGFibGUnKSB7XG4gICAgICAgIHJldHVybiBodG1sRWxlbWVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBvbkRyYWcoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25EcmFnRW5kKGV2ZW50PzogYW55KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5jbG9uZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25Ecm9wKGV2ZW50PzogYW55KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpKTtcblxuICAgIHRoaXMub25PcmRlckNoYW5nZS5lbWl0KHtcbiAgICAgIGZpcnN0OiBkYXRhLFxuICAgICAgc2Vjb25kOiB0aGlzLmNvbHVtbixcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRyYWdPdmVyXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgb25EcmFnT3ZlcihldmVudDogeyBwcmV2ZW50RGVmYXVsdDogRnVuY3Rpb247IGRhdGFUcmFuc2ZlcjogeyBkcm9wRWZmZWN0OiBzdHJpbmcgfTsgc3RvcFByb3BhZ2F0aW9uOiBGdW5jdGlvbiB9KTogYm9vbGVhbiB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ21vdmUnO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uRHJhZ0VudGVyKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdvdmVyJyk7XG4gICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIH1cblxuICBvbkRyYWdMZWF2ZShldmVudD86IGFueSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgfVxufVxuIl19