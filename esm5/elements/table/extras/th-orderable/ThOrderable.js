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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhPcmRlcmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RoLW9yZGVyYWJsZS9UaE9yZGVyYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFM0YsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBEO0lBcUJFLHFCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTnZDLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFPcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELHNCQUFJLDhCQUFLOzs7O1FBQVQ7O2dCQUNNLEtBQUssR0FBVyxJQUFJO1lBQ3hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFOztvQkFDakUsUUFBUSxHQUFlLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO2dCQUN2RyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3REO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDOzs7T0FBQTs7OztJQUVELDhCQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGlDQUFXOzs7OztJQUFYLFVBQVksS0FBVztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBQzFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBRXRFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztZQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsbUNBQWE7Ozs7O0lBQWIsVUFBYyxLQUFnRDtRQUM1RCxrR0FBa0c7UUFDbEcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUNuQixPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUk7WUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDVixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNOzt3QkFDQyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNO29CQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUNuQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMxQjs2QkFBTSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFOzRCQUN6QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzNCO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsK0JBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7O1lBQ1QsZUFBZSxHQUFHLEtBQUs7UUFDM0IsT0FBTyxlQUFlLEVBQUU7WUFDdEIsZUFBZSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7WUFDN0MsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7Z0JBQ3hFLE9BQU8sZUFBZSxDQUFDO2FBQ3hCO1NBQ0Y7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVELDRCQUFNOzs7O0lBQU4sVUFBTyxLQUFXO1FBQ2hCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELCtCQUFTOzs7O0lBQVQsVUFBVSxLQUFXO1FBQ25CLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRUQsNEJBQU07Ozs7SUFBTixVQUFPLEtBQVc7UUFDaEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUM5QyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixLQUFLLEVBQUUsSUFBSTtZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7UUFFSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdDQUFVOzs7OztJQUFWLFVBQVcsS0FBb0c7UUFDN0csT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDdkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxLQUFVO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLEtBQVc7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkE1SUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLElBQUksRUFBRTt3QkFDSixhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxZQUFZLEVBQUUsb0JBQW9CO3dCQUNsQyxhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxhQUFhLEVBQUUscUJBQXFCO3dCQUNwQyxXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxRQUFRLEVBQUUsZ0JBQWdCO3FCQUMzQjtpQkFDRjs7OztnQkFkaUMsVUFBVTs7O3lCQWdCekMsS0FBSyxTQUFDLGlCQUFpQjtnQ0FFdkIsTUFBTTs7SUErSFQsa0JBQUM7Q0FBQSxBQTdJRCxJQTZJQztTQWxJWSxXQUFXOzs7SUFDdEIsNkJBQ1k7O0lBQ1osb0NBQ3NEOztJQUV0RCw0QkFBVzs7SUFDWCw0QkFBVzs7SUFDWCw2QkFBWTs7Ozs7SUFFQSw4QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1RoT3JkZXJhYmxlXScsXG4gIGhvc3Q6IHtcbiAgICAnKGRyYWdzdGFydCknOiAnb25EcmFnU3RhcnQoJGV2ZW50KScsXG4gICAgJyhkcmFnb3ZlciknOiAnb25EcmFnT3ZlcigkZXZlbnQpJyxcbiAgICAnKGRyYWdlbnRlciknOiAnb25EcmFnRW50ZXIoJGV2ZW50KScsXG4gICAgJyhkcmFnbGVhdmUpJzogJ29uRHJhZ0xlYXZlKCRldmVudCknLFxuICAgICcoZHJhZ2VuZCknOiAnb25EcmFnRW5kKCRldmVudCknLFxuICAgICcoZHJvcCknOiAnb25Ecm9wKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBUaE9yZGVyYWJsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnbm92b1RoT3JkZXJhYmxlJylcbiAgY29sdW1uOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBvbk9yZGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICB0YWJsZTogYW55O1xuICBjbG9uZTogYW55O1xuICB0YXJnZXQ6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgZ2V0IGluZGV4KCkge1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gbnVsbDtcbiAgICBpZiAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgY29uc3QgY2hpbGRyZW46IEFycmF5PGFueT4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuKTtcbiAgICAgIGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbHVtbi5vcmRlcmluZykge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCB0cnVlKTtcbiAgICAgIHRoaXMudGFibGUgPSB0aGlzLmZpbmRUYWJsZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRHJhZ1N0YXJ0XG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgb25EcmFnU3RhcnQoZXZlbnQ/OiBhbnkpIHtcbiAgICBpZiAodGhpcy5jb2x1bW4ub3JkZXJpbmcpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RyYWdnaW5nJyk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0L3BsYWluJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2x1bW4pKTtcblxuICAgICAgdGhpcy5jbG9uZSA9IHRoaXMudGFibGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgdGhpcy5jbG9uZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICB0aGlzLmNsb25lLnN0eWxlLmxlZnQgPSAnMTAwJSc7XG4gICAgICB0aGlzLmNsb25lLnN0eWxlLndpZHRoID0gJzE1MHB4JztcbiAgICAgIHRoaXMuZGVsZXRlQ29sdW1ucyh0aGlzLmNsb25lKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jbG9uZSk7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RHJhZ0ltYWdlKHRoaXMuY2xvbmUsIDc1LCAzMCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRlbGV0ZUNvbHVtbnNcbiAgICogQHBhcmFtIHRhYmxlXG4gICAqL1xuICBkZWxldGVDb2x1bW5zKHRhYmxlOiB7IHJvd3M6IEFycmF5PGFueT47IGRlbGV0ZVJvdzogRnVuY3Rpb24gfSkge1xuICAgIC8vIFRPRE86IGB0YWJsZWAgc2hvdWxkIGJlIGltbXV0YWJsZSBhbmQgdGhpcyBtZXRob2Qgc2hvdWxkIHJldHVybiB0aGUgbW9kaWZpZWQgZGF0YSB0byBpdHMgY2FsbGVyXG4gICAgaWYgKHRhYmxlLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYWxsUm93cyA9IHRhYmxlLnJvd3M7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGkgPiAxMCkge1xuICAgICAgICAgIHRhYmxlLmRlbGV0ZVJvdygtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY2VsbExlbmd0aCA9IGFsbFJvd3NbaV0uY2VsbHMubGVuZ3RoO1xuICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY2VsbExlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICBpZiAoYyA8IHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgICAgYWxsUm93c1tpXS5kZWxldGVDZWxsKDApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjID4gdGhpcy5pbmRleCkge1xuICAgICAgICAgICAgICBhbGxSb3dzW2ldLmRlbGV0ZUNlbGwoLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZpbmRUYWJsZShzdGFydCkge1xuICAgIGxldCBodG1sRWxlbWVudE5vZGUgPSBzdGFydDtcbiAgICB3aGlsZSAoaHRtbEVsZW1lbnROb2RlKSB7XG4gICAgICBodG1sRWxlbWVudE5vZGUgPSBodG1sRWxlbWVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGlmIChodG1sRWxlbWVudE5vZGUgJiYgaHRtbEVsZW1lbnROb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RhYmxlJykge1xuICAgICAgICByZXR1cm4gaHRtbEVsZW1lbnROb2RlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgb25EcmFnKGV2ZW50PzogYW55KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uRHJhZ0VuZChldmVudD86IGFueSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuY2xvbmUpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uRHJvcChldmVudD86IGFueSkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YVRyYW5zZmVyLmdldERhdGEoJ3RleHQvcGxhaW4nKSk7XG5cbiAgICB0aGlzLm9uT3JkZXJDaGFuZ2UuZW1pdCh7XG4gICAgICBmaXJzdDogZGF0YSxcbiAgICAgIHNlY29uZDogdGhpcy5jb2x1bW4sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQG5hbWUgb25EcmFnT3ZlclxuICAgKiBAcGFyYW0gZXZlbnRcbiAgICovXG4gIG9uRHJhZ092ZXIoZXZlbnQ6IHsgcHJldmVudERlZmF1bHQ6IEZ1bmN0aW9uOyBkYXRhVHJhbnNmZXI6IHsgZHJvcEVmZmVjdDogc3RyaW5nIH07IHN0b3BQcm9wYWdhdGlvbjogRnVuY3Rpb24gfSk6IGJvb2xlYW4ge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdtb3ZlJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvbkRyYWdFbnRlcihldmVudDogYW55KSB7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnb3ZlcicpO1xuICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICB9XG5cbiAgb25EcmFnTGVhdmUoZXZlbnQ/OiBhbnkpIHtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyJyk7XG4gIH1cbn1cbiJdfQ==