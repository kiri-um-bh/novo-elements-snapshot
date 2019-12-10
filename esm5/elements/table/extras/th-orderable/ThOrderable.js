/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/th-orderable/ThOrderable.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @type {?}
     * @private
     */
    ThOrderable.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmRlcmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBEO0lBcUJFLHFCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTnZDLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFPcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELHNCQUFJLDhCQUFLOzs7O1FBQVQ7O2dCQUNNLEtBQUssR0FBVyxJQUFJO1lBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFOztvQkFDbkUsUUFBUSxHQUFlLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO2dCQUNyRyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENB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dkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxLQUFVO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVc7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkE1SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLElBQUksRUFBRTt3QkFDSixhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxZQUFZLEVBQUUsb0JBQW9CO3dCQUNsQyxhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO3FCQUMzQjtpQkFDRjs7OztnQkFkaUMsVUFBVTs7O3lCQWdCekMsS0FBSyxTQUFDLGlCQUFpQjtnQ0FFdkIsTUFBTTs7SUErSFQsa0JBQUM7Q0FBQSxBQTdJRCxJQTZJQztTQWxJWSxXQUFXOzs7SUFDdEIsNkJBQ1k7O0lBQ1osb0NBQ3NEOztJQUV0RCw0QkFBVzs7SUFDWCw0QkFBVzs7SUFDWCw2QkFBWTs7Ozs7SUFFQSw4QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1RoT3JkZXJhYmxlXScsXG4gIGhvc3Q6IHtcbiAgICAnKGRyYWdzdGFydCknOiAnb25EcmFnU3RhcnQoJGV2ZW50KScsXG4gICAgJyhkcmFnb3ZlciknOiAnb25EcmFnT3ZlcigkZXZlbnQpJyxcbiAgICAnKGRyYWdlbnRlciknOiAnb25EcmFnRW50ZXIoJGV2ZW50KScsXG4gICAgJyhkcmFnbGVhdmUpJzogJ29uRHJhZ0xlYXZlKCRldmVudCknLFxuICAgICcoZHJhZ2VuZCknOiAnb25EcmFnRW5kKCRldmVudCknLFxuICAgICcoZHJvcCknOiAnb25Ecm9wKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUaE9yZGVyYWJsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnbm92b1RoT3JkZXJhYmxlJylcbiAgY29sdW1uOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBvbk9yZGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0YWJsZTogYW55O1xuICBjbG9uZTogYW55O1xuICB0YXJnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgZ2V0IGluZGV4KCkge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgbGV0IGNoaWxkcmVuOiBBcnJheTxhbnk+ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbik7XG4gICAgICBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3JkZXJpbmcpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgdHJ1ZSk7XG4gICAgICB0aGlzLnRhYmxlID0gdGhpcy5maW5kVGFibGUodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRyYWdTdGFydFxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ1N0YXJ0KGV2ZW50PzogYW55KSB7XG4gICAgaWYgKHRoaXMuY29sdW1uLm9yZGVyaW5nKSB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sdW1uKSk7XG5cbiAgICAgIHRoaXMuY2xvbmUgPSB0aGlzLnRhYmxlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIHRoaXMuY2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS5sZWZ0ID0gJzEwMCUnO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS53aWR0aCA9ICcxNTBweCc7XG4gICAgICB0aGlzLmRlbGV0ZUNvbHVtbnModGhpcy5jbG9uZSk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2xvbmUpO1xuICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERyYWdJbWFnZSh0aGlzLmNsb25lLCA3NSwgMzApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZWxldGVDb2x1bW5zXG4gICAqIEBwYXJhbSB0YWJsZVxuICAgKi9cbiAgZGVsZXRlQ29sdW1ucyh0YWJsZTogeyByb3dzOiBBcnJheTxhbnk+OyBkZWxldGVSb3c6IEZ1bmN0aW9uIH0pIHtcbiAgICAvLyBUT0RPOiBgdGFibGVgIHNob3VsZCBiZSBpbW11dGFibGUgYW5kIHRoaXMgbWV0aG9kIHNob3VsZCByZXR1cm4gdGhlIG1vZGlmaWVkIGRhdGEgdG8gaXRzIGNhbGxlclxuICAgIGlmICh0YWJsZS5yb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGFsbFJvd3MgPSB0YWJsZS5yb3dzO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxSb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpID4gMTApIHtcbiAgICAgICAgICB0YWJsZS5kZWxldGVSb3coLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNlbGxMZW5ndGggPSBhbGxSb3dzW2ldLmNlbGxzLmxlbmd0aDtcbiAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNlbGxMZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgaWYgKGMgPCB0aGlzLmluZGV4KSB7XG4gICAgICAgICAgICAgIGFsbFJvd3NbaV0uZGVsZXRlQ2VsbCgwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYyA+IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgYWxsUm93c1tpXS5kZWxldGVDZWxsKC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmaW5kVGFibGUoc3RhcnQpIHtcbiAgICBsZXQgaHRtbEVsZW1lbnROb2RlID0gc3RhcnQ7XG4gICAgd2hpbGUgKGh0bWxFbGVtZW50Tm9kZSkge1xuICAgICAgaHRtbEVsZW1lbnROb2RlID0gaHRtbEVsZW1lbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBpZiAoaHRtbEVsZW1lbnROb2RlICYmIGh0bWxFbGVtZW50Tm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0YWJsZScpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbGVtZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9uRHJhZyhldmVudD86IGFueSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyYWdFbmQoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmNsb25lKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyb3AoZXZlbnQ/OiBhbnkpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKCd0ZXh0L3BsYWluJykpO1xuXG4gICAgdGhpcy5vbk9yZGVyQ2hhbmdlLmVtaXQoe1xuICAgICAgZmlyc3Q6IGRhdGEsXG4gICAgICBzZWNvbmQ6IHRoaXMuY29sdW1uLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRHJhZ092ZXJcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBvbkRyYWdPdmVyKGV2ZW50OiB7IHByZXZlbnREZWZhdWx0OiBGdW5jdGlvbjsgZGF0YVRyYW5zZmVyOiB7IGRyb3BFZmZlY3Q6IHN0cmluZyB9OyBzdG9wUHJvcGFnYXRpb246IEZ1bmN0aW9uIH0pOiBib29sZWFuIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnbW92ZSc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25EcmFnRW50ZXIoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ292ZXInKTtcbiAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgfVxuXG4gIG9uRHJhZ0xlYXZlKGV2ZW50PzogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcicpO1xuICB9XG59XG4iXX0=