/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            let children = Array.prototype.slice.call(this.element.nativeElement.parentNode.children);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmRlcmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFhcEQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFVdEIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQU52QyxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBT3BELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7O1lBQ0gsS0FBSyxHQUFXLElBQUk7UUFDeEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7O2dCQUNuRSxRQUFRLEdBQWUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN0RDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7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QU0sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFXO1FBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBNUlGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixJQUFJLEVBQUU7b0JBQ0osYUFBYSxFQUFFLHFCQUFxQjtvQkFDcEMsWUFBWSxFQUFFLG9CQUFvQjtvQkFDbEMsYUFBYSxFQUFFLHFCQUFxQjtvQkFDcEMsYUFBYSxFQUFFLHFCQUFxQjtvQkFDcEMsV0FBVyxFQUFFLG1CQUFtQjtvQkFDaEMsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7YUFDRjs7OztZQWRpQyxVQUFVOzs7cUJBZ0J6QyxLQUFLLFNBQUMsaUJBQWlCOzRCQUV2QixNQUFNOzs7O0lBRlAsNkJBQ1k7O0lBQ1osb0NBQ3NEOztJQUV0RCw0QkFBVzs7SUFDWCw0QkFBVzs7SUFDWCw2QkFBWTs7Ozs7SUFFQSw4QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1RoT3JkZXJhYmxlXScsXG4gIGhvc3Q6IHtcbiAgICAnKGRyYWdzdGFydCknOiAnb25EcmFnU3RhcnQoJGV2ZW50KScsXG4gICAgJyhkcmFnb3ZlciknOiAnb25EcmFnT3ZlcigkZXZlbnQpJyxcbiAgICAnKGRyYWdlbnRlciknOiAnb25EcmFnRW50ZXIoJGV2ZW50KScsXG4gICAgJyhkcmFnbGVhdmUpJzogJ29uRHJhZ0xlYXZlKCRldmVudCknLFxuICAgICcoZHJhZ2VuZCknOiAnb25EcmFnRW5kKCRldmVudCknLFxuICAgICcoZHJvcCknOiAnb25Ecm9wKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUaE9yZGVyYWJsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnbm92b1RoT3JkZXJhYmxlJylcbiAgY29sdW1uOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBvbk9yZGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0YWJsZTogYW55O1xuICBjbG9uZTogYW55O1xuICB0YXJnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgZ2V0IGluZGV4KCkge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgbGV0IGNoaWxkcmVuOiBBcnJheTxhbnk+ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbik7XG4gICAgICBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3JkZXJpbmcpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICB0aGlzLnRhYmxlID0gdGhpcy5maW5kVGFibGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRyYWdTdGFydFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ1N0YXJ0KGV2ZW50PzogYW55KSB7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9yZGVyaW5nKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sdW1uKSk7XG5cbiAgICAgIHRoaXMuY2xvbmUgPSB0aGlzLnRhYmxlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRoaXMuY2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS5sZWZ0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS53aWR0aCA9ICcxNTBweCc7XG4gICAgICB0aGlzLmRlbGV0ZUNvbHVtbnModGhpcy5jbG9uZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2xvbmUpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSh0aGlzLmNsb25lLCA3NSwgMzApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZWxldGVDb2x1bW5zXG4gICAqIEBwYXJhbSB0YWJsZVxuICAgKi9cbiAgZGVsZXRlQ29sdW1ucyh0YWJsZTogeyByb3dzOiBBcnJheTxhbnk+OyBkZWxldGVSb3c6IEZ1bmN0aW9uIH0pIHtcbiAgICAvLyBUT0RPOiBgdGFibGVgIHNob3VsZCBiZSBpbW11dGFibGUgYW5kIHRoaXMgbWV0aG9kIHNob3VsZCByZXR1cm4gdGhlIG1vZGlmaWVkIGRhdGEgdG8gaXRzIGNhbGxlclxuICAgIGlmICh0YWJsZS5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFsbFJvd3MgPSB0YWJsZS5yb3dzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID4gMTApIHtcbiAgICAgICAgICB0YWJsZS5kZWxldGVSb3coLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNlbGxMZW5ndGggPSBhbGxSb3dzW2ldLmNlbGxzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNlbGxMZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgaWYgKGMgPCB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICAgIGFsbFJvd3NbaV0uZGVsZXRlQ2VsbCgwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA+IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgYWxsUm93c1tpXS5kZWxldGVDZWxsKC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5kVGFibGUoc3RhcnQpIHtcbiAgICBsZXQgaHRtbEVsZW1lbnROb2RlID0gc3RhcnQ7XG4gICAgd2hpbGUgKGh0bWxFbGVtZW50Tm9kZSkge1xuICAgICAgaHRtbEVsZW1lbnROb2RlID0gaHRtbEVsZW1lbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBpZiAoaHRtbEVsZW1lbnROb2RlICYmIGh0bWxFbGVtZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0YWJsZScpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbGVtZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uRHJhZyhldmVudD86IGFueSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyYWdFbmQoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmNsb25lKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJykpO1xuXG4gICAgdGhpcy5vbk9yZGVyQ2hhbmdlLmVtaXQoe1xuICAgICAgZmlyc3Q6IGRhdGEsXG4gICAgICBzZWNvbmQ6IHRoaXMuY29sdW1uLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRHJhZ092ZXJcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbkRyYWdPdmVyKGV2ZW50OiB7IHByZXZlbnREZWZhdWx0OiBGdW5jdGlvbjsgZGF0YVRyYW5zZmVyOiB7IGRyb3BFZmZlY3Q6IHN0cmluZyB9OyBzdG9wUHJvcGFnYXRpb246IEZ1bmN0aW9uIH0pOiBib29sZWFuIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25EcmFnRW50ZXIoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIG9uRHJhZ0xlYXZlKGV2ZW50PzogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICB9XG59XG4iXX0=