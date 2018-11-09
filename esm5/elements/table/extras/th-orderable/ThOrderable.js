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
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmRlcmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEQ7SUFxQkUscUJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFOdkMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU9wRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsc0JBQUksOEJBQUs7Ozs7UUFBVDs7Z0JBQ00sS0FBSyxHQUFXLElBQUk7WUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7O29CQUNuRSxRQUFRLEdBQWUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JHLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDdEQ7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7OztPQUFBOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FB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QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksS0FBVztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQTVJRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsSUFBSSxFQUFFO3dCQUNKLGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLFlBQVksRUFBRSxvQkFBb0I7d0JBQ2xDLGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLGFBQWEsRUFBRSxxQkFBcUI7d0JBQ3BDLFdBQVcsRUFBRSxtQkFBbUI7d0JBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7cUJBQzNCO2lCQUNGOzs7O2dCQWRpQyxVQUFVOzs7eUJBZ0J6QyxLQUFLLFNBQUMsaUJBQWlCO2dDQUV2QixNQUFNOztJQStIVCxrQkFBQztDQUFBLEFBN0lELElBNklDO1NBbElZLFdBQVc7OztJQUN0Qiw2QkFDWTs7SUFDWixvQ0FDc0Q7O0lBRXRELDRCQUFXOztJQUNYLDRCQUFXOztJQUNYLDZCQUFZOztJQUVBLDhCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQXBwXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvVGhPcmRlcmFibGVdJyxcbiAgaG9zdDoge1xuICAgICcoZHJhZ3N0YXJ0KSc6ICdvbkRyYWdTdGFydCgkZXZlbnQpJyxcbiAgICAnKGRyYWdvdmVyKSc6ICdvbkRyYWdPdmVyKCRldmVudCknLFxuICAgICcoZHJhZ2VudGVyKSc6ICdvbkRyYWdFbnRlcigkZXZlbnQpJyxcbiAgICAnKGRyYWdsZWF2ZSknOiAnb25EcmFnTGVhdmUoJGV2ZW50KScsXG4gICAgJyhkcmFnZW5kKSc6ICdvbkRyYWdFbmQoJGV2ZW50KScsXG4gICAgJyhkcm9wKSc6ICdvbkRyb3AoJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIFRoT3JkZXJhYmxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCdub3ZvVGhPcmRlcmFibGUnKVxuICBjb2x1bW46IGFueTtcbiAgQE91dHB1dCgpXG4gIG9uT3JkZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHRhYmxlOiBhbnk7XG4gIGNsb25lOiBhbnk7XG4gIHRhcmdldDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXQgaW5kZXgoKSB7XG4gICAgbGV0IGluZGV4OiBudW1iZXIgPSBudWxsO1xuICAgIGlmICh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICBsZXQgY2hpbGRyZW46IEFycmF5PGFueT4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuKTtcbiAgICAgIGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbHVtbi5vcmRlcmluZykge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgIHRoaXMudGFibGUgPSB0aGlzLmZpbmRUYWJsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRHJhZ1N0YXJ0XG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgb25EcmFnU3RhcnQoZXZlbnQ/OiBhbnkpIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3JkZXJpbmcpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2x1bW4pKTtcblxuICAgICAgdGhpcy5jbG9uZSA9IHRoaXMudGFibGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmNsb25lLnN0eWxlLmxlZnQgPSAnMTAwJSc7XG4gICAgICB0aGlzLmNsb25lLnN0eWxlLndpZHRoID0gJzE1MHB4JztcbiAgICAgIHRoaXMuZGVsZXRlQ29sdW1ucyh0aGlzLmNsb25lKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jbG9uZSk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKHRoaXMuY2xvbmUsIDc1LCAzMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRlbGV0ZUNvbHVtbnNcbiAgICogQHBhcmFtIHRhYmxlXG4gICAqL1xuICBkZWxldGVDb2x1bW5zKHRhYmxlOiB7IHJvd3M6IEFycmF5PGFueT47IGRlbGV0ZVJvdzogRnVuY3Rpb24gfSkge1xuICAgIC8vIFRPRE86IGB0YWJsZWAgc2hvdWxkIGJlIGltbXV0YWJsZSBhbmQgdGhpcyBtZXRob2Qgc2hvdWxkIHJldHVybiB0aGUgbW9kaWZpZWQgZGF0YSB0byBpdHMgY2FsbGVyXG4gICAgaWYgKHRhYmxlLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWxsUm93cyA9IHRhYmxlLnJvd3M7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAxMCkge1xuICAgICAgICAgIHRhYmxlLmRlbGV0ZVJvdygtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2VsbExlbmd0aCA9IGFsbFJvd3NbaV0uY2VsbHMubGVuZ3RoO1xuICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbExlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBpZiAoYyA8IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgYWxsUm93c1tpXS5kZWxldGVDZWxsKDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjID4gdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICBhbGxSb3dzW2ldLmRlbGV0ZUNlbGwoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbmRUYWJsZShzdGFydCkge1xuICAgIGxldCBodG1sRWxlbWVudE5vZGUgPSBzdGFydDtcbiAgICB3aGlsZSAoaHRtbEVsZW1lbnROb2RlKSB7XG4gICAgICBodG1sRWxlbWVudE5vZGUgPSBodG1sRWxlbWVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGlmIChodG1sRWxlbWVudE5vZGUgJiYgaHRtbEVsZW1lbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RhYmxlJykge1xuICAgICAgICByZXR1cm4gaHRtbEVsZW1lbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgb25EcmFnKGV2ZW50PzogYW55KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uRHJhZ0VuZChldmVudD86IGFueSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY2xvbmUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uRHJvcChldmVudD86IGFueSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSk7XG5cbiAgICB0aGlzLm9uT3JkZXJDaGFuZ2UuZW1pdCh7XG4gICAgICBmaXJzdDogZGF0YSxcbiAgICAgIHNlY29uZDogdGhpcy5jb2x1bW4sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25EcmFnT3ZlclxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IHsgcHJldmVudERlZmF1bHQ6IEZ1bmN0aW9uOyBkYXRhVHJhbnNmZXI6IHsgZHJvcEVmZmVjdDogc3RyaW5nIH07IHN0b3BQcm9wYWdhdGlvbjogRnVuY3Rpb24gfSk6IGJvb2xlYW4ge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyYWdFbnRlcihldmVudDogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICB9XG5cbiAgb25EcmFnTGVhdmUoZXZlbnQ/OiBhbnkpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gIH1cbn1cbiJdfQ==