/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/th-orderable/ThOrderable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, EventEmitter, ElementRef, Input, Output } from '@angular/core';
// App
import { Helpers } from '../../../../utils/Helpers';
export class ThOrderable {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.onOrderChange = new EventEmitter();
        this.element = element;
    }
    /**
     * @return {?}
     */
    get index() {
        /** @type {?} */
        let index = null;
        if (this.element.nativeElement && this.element.nativeElement.parentNode) {
            /** @type {?} */
            const children = Array.prototype.slice.call(this.element.nativeElement.parentNode.children);
            index = children.indexOf(this.element.nativeElement);
        }
        return index;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.column.ordering) {
            this.element.nativeElement.setAttribute('draggable', true);
            this.table = this.findTable(this.element.nativeElement);
        }
    }
    /**
     * \@name onDragStart
     * @param {?=} event
     * @return {?}
     */
    onDragStart(event) {
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
    }
    /**
     * \@name deleteColumns
     * @param {?} table
     * @return {?}
     */
    deleteColumns(table) {
        // TODO: `table` should be immutable and this method should return the modified data to its caller
        if (table.rows.length > 0) {
            /** @type {?} */
            const allRows = table.rows;
            for (let i = 0; i < allRows.length; i++) {
                if (i > 10) {
                    table.deleteRow(-1);
                }
                else {
                    /** @type {?} */
                    const cellLength = allRows[i].cells.length;
                    for (let c = 0; c < cellLength; c++) {
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
    }
    /**
     * @param {?} start
     * @return {?}
     */
    findTable(start) {
        /** @type {?} */
        let htmlElementNode = start;
        while (htmlElementNode) {
            htmlElementNode = htmlElementNode.parentNode;
            if (htmlElementNode && htmlElementNode.tagName.toLowerCase() === 'table') {
                return htmlElementNode;
            }
        }
        return undefined;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDrag(event) {
        Helpers.swallowEvent(event);
        return false;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDragEnd(event) {
        Helpers.swallowEvent(event);
        this.element.nativeElement.classList.remove('over');
        this.element.nativeElement.classList.remove('dragging');
        document.body.removeChild(this.clone);
        return false;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDrop(event) {
        Helpers.swallowEvent(event);
        this.element.nativeElement.classList.remove('over');
        /** @type {?} */
        const data = JSON.parse(event.dataTransfer.getData('text/plain'));
        this.onOrderChange.emit({
            first: data,
            second: this.column,
        });
        return false;
    }
    /**
     * \@name onDragOver
     * @param {?} event
     * @return {?}
     */
    onDragOver(event) {
        Helpers.swallowEvent(event);
        event.dataTransfer.dropEffect = 'move';
        return false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDragEnter(event) {
        this.element.nativeElement.classList.add('over');
        this.target = event.target;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDragLeave(event) {
        this.element.nativeElement.classList.remove('over');
    }
}
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
ThOrderable.ctorParameters = () => [
    { type: ElementRef }
];
ThOrderable.propDecorators = {
    column: [{ type: Input, args: ['novoThOrderable',] }],
    onOrderChange: [{ type: Output }]
};
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
    /**
     * @type {?}
     * @private
     */
    ThOrderable.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmRlcmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBYXBELE1BQU0sT0FBTyxXQUFXOzs7O0lBVXRCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFOdkMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU9wRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLOztZQUNILEtBQUssR0FBVyxJQUFJO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFOztrQkFDakUsUUFBUSxHQUFlLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3ZHLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFD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QUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQTVJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsSUFBSSxFQUFFO29CQUNKLGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLFlBQVksRUFBRSxvQkFBb0I7b0JBQ2xDLGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLFdBQVcsRUFBRSxtQkFBbUI7b0JBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2FBQ0Y7Ozs7WUFkaUMsVUFBVTs7O3FCQWdCekMsS0FBSyxTQUFDLGlCQUFpQjs0QkFFdkIsTUFBTTs7OztJQUZQLDZCQUNZOztJQUNaLG9DQUNzRDs7SUFFdEQsNEJBQVc7O0lBQ1gsNEJBQVc7O0lBQ1gsNkJBQVk7Ozs7O0lBRUEsOEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9UaE9yZGVyYWJsZV0nLFxuICBob3N0OiB7XG4gICAgJyhkcmFnc3RhcnQpJzogJ29uRHJhZ1N0YXJ0KCRldmVudCknLFxuICAgICcoZHJhZ292ZXIpJzogJ29uRHJhZ092ZXIoJGV2ZW50KScsXG4gICAgJyhkcmFnZW50ZXIpJzogJ29uRHJhZ0VudGVyKCRldmVudCknLFxuICAgICcoZHJhZ2xlYXZlKSc6ICdvbkRyYWdMZWF2ZSgkZXZlbnQpJyxcbiAgICAnKGRyYWdlbmQpJzogJ29uRHJhZ0VuZCgkZXZlbnQpJyxcbiAgICAnKGRyb3ApJzogJ29uRHJvcCgkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGhPcmRlcmFibGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ25vdm9UaE9yZGVyYWJsZScpXG4gIGNvbHVtbjogYW55O1xuICBAT3V0cHV0KClcbiAgb25PcmRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGFibGU6IGFueTtcbiAgY2xvbmU6IGFueTtcbiAgdGFyZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGdldCBpbmRleCgpIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuOiBBcnJheTxhbnk+ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbik7XG4gICAgICBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3JkZXJpbmcpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICB0aGlzLnRhYmxlID0gdGhpcy5maW5kVGFibGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRyYWdTdGFydFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ1N0YXJ0KGV2ZW50PzogYW55KSB7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9yZGVyaW5nKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sdW1uKSk7XG5cbiAgICAgIHRoaXMuY2xvbmUgPSB0aGlzLnRhYmxlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRoaXMuY2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS5sZWZ0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS53aWR0aCA9ICcxNTBweCc7XG4gICAgICB0aGlzLmRlbGV0ZUNvbHVtbnModGhpcy5jbG9uZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2xvbmUpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSh0aGlzLmNsb25lLCA3NSwgMzApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZWxldGVDb2x1bW5zXG4gICAqIEBwYXJhbSB0YWJsZVxuICAgKi9cbiAgZGVsZXRlQ29sdW1ucyh0YWJsZTogeyByb3dzOiBBcnJheTxhbnk+OyBkZWxldGVSb3c6IEZ1bmN0aW9uIH0pIHtcbiAgICAvLyBUT0RPOiBgdGFibGVgIHNob3VsZCBiZSBpbW11dGFibGUgYW5kIHRoaXMgbWV0aG9kIHNob3VsZCByZXR1cm4gdGhlIG1vZGlmaWVkIGRhdGEgdG8gaXRzIGNhbGxlclxuICAgIGlmICh0YWJsZS5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFsbFJvd3MgPSB0YWJsZS5yb3dzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID4gMTApIHtcbiAgICAgICAgICB0YWJsZS5kZWxldGVSb3coLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNlbGxMZW5ndGggPSBhbGxSb3dzW2ldLmNlbGxzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNlbGxMZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgaWYgKGMgPCB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICAgIGFsbFJvd3NbaV0uZGVsZXRlQ2VsbCgwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA+IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgYWxsUm93c1tpXS5kZWxldGVDZWxsKC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5kVGFibGUoc3RhcnQpIHtcbiAgICBsZXQgaHRtbEVsZW1lbnROb2RlID0gc3RhcnQ7XG4gICAgd2hpbGUgKGh0bWxFbGVtZW50Tm9kZSkge1xuICAgICAgaHRtbEVsZW1lbnROb2RlID0gaHRtbEVsZW1lbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBpZiAoaHRtbEVsZW1lbnROb2RlICYmIGh0bWxFbGVtZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0YWJsZScpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbGVtZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uRHJhZyhldmVudD86IGFueSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyYWdFbmQoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmNsb25lKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJykpO1xuXG4gICAgdGhpcy5vbk9yZGVyQ2hhbmdlLmVtaXQoe1xuICAgICAgZmlyc3Q6IGRhdGEsXG4gICAgICBzZWNvbmQ6IHRoaXMuY29sdW1uLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRHJhZ092ZXJcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbkRyYWdPdmVyKGV2ZW50OiB7IHByZXZlbnREZWZhdWx0OiBGdW5jdGlvbjsgZGF0YVRyYW5zZmVyOiB7IGRyb3BFZmZlY3Q6IHN0cmluZyB9OyBzdG9wUHJvcGFnYXRpb246IEZ1bmN0aW9uIH0pOiBib29sZWFuIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25EcmFnRW50ZXIoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIG9uRHJhZ0xlYXZlKGV2ZW50PzogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICB9XG59XG4iXX0=