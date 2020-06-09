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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmRlcmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBYXBELE1BQU0sT0FBTyxXQUFXOzs7O0lBVXRCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFOdkMsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU9wRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxLQUFLOztZQUNILEtBQUssR0FBVyxJQUFJO1FBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFOztrQkFDakUsUUFBUSxHQUFlLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3ZHLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFD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LENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQWhJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsSUFBSSxFQUFFO29CQUNKLGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLFlBQVksRUFBRSxvQkFBb0I7b0JBQ2xDLGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLGFBQWEsRUFBRSxxQkFBcUI7b0JBQ3BDLFdBQVcsRUFBRSxtQkFBbUI7b0JBQ2hDLFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCO2FBQ0Y7Ozs7WUFkaUMsVUFBVTs7O3FCQWdCekMsS0FBSyxTQUFDLGlCQUFpQjs0QkFFdkIsTUFBTTs7OztJQUZQLDZCQUNZOztJQUNaLG9DQUNzRDs7SUFFdEQsNEJBQVc7O0lBQ1gsNEJBQVc7O0lBQ1gsNkJBQVk7Ozs7O0lBRUEsOEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9UaE9yZGVyYWJsZV0nLFxuICBob3N0OiB7XG4gICAgJyhkcmFnc3RhcnQpJzogJ29uRHJhZ1N0YXJ0KCRldmVudCknLFxuICAgICcoZHJhZ292ZXIpJzogJ29uRHJhZ092ZXIoJGV2ZW50KScsXG4gICAgJyhkcmFnZW50ZXIpJzogJ29uRHJhZ0VudGVyKCRldmVudCknLFxuICAgICcoZHJhZ2xlYXZlKSc6ICdvbkRyYWdMZWF2ZSgkZXZlbnQpJyxcbiAgICAnKGRyYWdlbmQpJzogJ29uRHJhZ0VuZCgkZXZlbnQpJyxcbiAgICAnKGRyb3ApJzogJ29uRHJvcCgkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgVGhPcmRlcmFibGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoJ25vdm9UaE9yZGVyYWJsZScpXG4gIGNvbHVtbjogYW55O1xuICBAT3V0cHV0KClcbiAgb25PcmRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgdGFibGU6IGFueTtcbiAgY2xvbmU6IGFueTtcbiAgdGFyZ2V0OiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGdldCBpbmRleCgpIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciA9IG51bGw7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuOiBBcnJheTxhbnk+ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbik7XG4gICAgICBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3JkZXJpbmcpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICB0aGlzLnRhYmxlID0gdGhpcy5maW5kVGFibGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0KGV2ZW50PzogYW55KSB7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9yZGVyaW5nKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sdW1uKSk7XG5cbiAgICAgIHRoaXMuY2xvbmUgPSB0aGlzLnRhYmxlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRoaXMuY2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS5sZWZ0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS53aWR0aCA9ICcxNTBweCc7XG4gICAgICB0aGlzLmRlbGV0ZUNvbHVtbnModGhpcy5jbG9uZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2xvbmUpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSh0aGlzLmNsb25lLCA3NSwgMzApO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUNvbHVtbnModGFibGU6IHsgcm93czogQXJyYXk8YW55PjsgZGVsZXRlUm93OiBGdW5jdGlvbiB9KSB7XG4gICAgLy8gVE9ETzogYHRhYmxlYCBzaG91bGQgYmUgaW1tdXRhYmxlIGFuZCB0aGlzIG1ldGhvZCBzaG91bGQgcmV0dXJuIHRoZSBtb2RpZmllZCBkYXRhIHRvIGl0cyBjYWxsZXJcbiAgICBpZiAodGFibGUucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhbGxSb3dzID0gdGFibGUucm93cztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA+IDEwKSB7XG4gICAgICAgICAgdGFibGUuZGVsZXRlUm93KC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjZWxsTGVuZ3RoID0gYWxsUm93c1tpXS5jZWxscy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjZWxsTGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgIGlmIChjIDwgdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICBhbGxSb3dzW2ldLmRlbGV0ZUNlbGwoMCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGMgPiB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICAgIGFsbFJvd3NbaV0uZGVsZXRlQ2VsbCgtMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmluZFRhYmxlKHN0YXJ0KSB7XG4gICAgbGV0IGh0bWxFbGVtZW50Tm9kZSA9IHN0YXJ0O1xuICAgIHdoaWxlIChodG1sRWxlbWVudE5vZGUpIHtcbiAgICAgIGh0bWxFbGVtZW50Tm9kZSA9IGh0bWxFbGVtZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgaWYgKGh0bWxFbGVtZW50Tm9kZSAmJiBodG1sRWxlbWVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAndGFibGUnKSB7XG4gICAgICAgIHJldHVybiBodG1sRWxlbWVudE5vZGU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBvbkRyYWcoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25EcmFnRW5kKGV2ZW50PzogYW55KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2luZycpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5jbG9uZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25Ecm9wKGV2ZW50PzogYW55KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ292ZXInKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpKTtcblxuICAgIHRoaXMub25PcmRlckNoYW5nZS5lbWl0KHtcbiAgICAgIGZpcnN0OiBkYXRhLFxuICAgICAgc2Vjb25kOiB0aGlzLmNvbHVtbixcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IHsgcHJldmVudERlZmF1bHQ6IEZ1bmN0aW9uOyBkYXRhVHJhbnNmZXI6IHsgZHJvcEVmZmVjdDogc3RyaW5nIH07IHN0b3BQcm9wYWdhdGlvbjogRnVuY3Rpb24gfSk6IGJvb2xlYW4ge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyYWdFbnRlcihldmVudDogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICB9XG5cbiAgb25EcmFnTGVhdmUoZXZlbnQ/OiBhbnkpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gIH1cbn1cbiJdfQ==