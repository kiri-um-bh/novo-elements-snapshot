/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, forwardRef, ElementRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { NovoChipElement, NovoChipsElement } from './Chips';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CHIPS_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoRowChipsElement),
    multi: true,
};
export class NovoRowChipElement extends NovoChipElement {
    /**
     * @param {?} e
     * @return {?}
     */
    onSelect(e) {
        return false;
    }
}
NovoRowChipElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-row-chip',
                template: `<div class="novo-row-chips-columns"><ng-content></ng-content><i class="bhi-delete-o" *ngIf="!disabled" (click)="onRemove($event)"></i></div>`
            }] }
];
export class NovoRowChipsElement extends NovoChipsElement {
    /**
     * @param {?} element
     * @param {?} componentUtils
     * @param {?} labels
     */
    constructor(element, componentUtils, labels) {
        super(element, componentUtils, labels);
        this.closeOnSelect = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        return;
    }
}
NovoRowChipsElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-row-chips',
                providers: [CHIPS_VALUE_ACCESSOR],
                host: {
                    '[class.with-value]': 'items.length > 0',
                },
                template: `
        <div class="novo-row-chips-columns" *ngIf="items.length > 0">
          <div class="column-label" *ngFor="let column of source.columns">{{ column.label }}</div>
        </div>
        <div class="novo-row-chips-empty-message" *ngIf="source.emptyReadOnlyMessage && disablePickerInput && items.length === 0">{{source.emptyReadOnlyMessage}}</div>
        <novo-row-chip
          *ngFor="let item of _items | async"
          [type]="type || item?.value?.searchEntity"
          [class.selected]="item == selected"
          [disabled]="disablePickerInput"
          (remove)="remove($event, item)"
          (select)="select($event, item)">
          <div class="column-data" *ngFor="let column of source.columns"><span>{{ column.data(item) }}</span></div>
        </novo-row-chip>
        <novo-picker
            clearValueOnSelect="true"
            [closeOnSelect]="closeOnSelect"
            [config]="source"
            [disablePickerInput]="disablePickerInput"
            [hidden]="disablePickerInput"
            [placeholder]="placeholder"
            [(ngModel)]="itemToAdd"
            (select)="add($event)"
            (keydown)="onKeyDown($event)"
            (focus)="onFocus($event)"
            (typing)="onTyping($event)"
            (blur)="onTouched($event)"
            [selected]="items"
            [overrideElement]="element">
        </novo-picker>
        <div class="preview-container">
            <span #preview></span>
        </div>
   `
            }] }
];
/** @nocollapse */
NovoRowChipsElement.ctorParameters = () => [
    { type: ElementRef },
    { type: ComponentUtils },
    { type: NovoLabelService }
];
NovoRowChipsElement.propDecorators = {
    closeOnSelect: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoRowChipsElement.prototype.closeOnSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7O01BR3RELG9CQUFvQixHQUFHO0lBQzNCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBTUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7Ozs7O0lBQ3JELFFBQVEsQ0FBQyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSw4SUFBOEk7YUFDeko7O0FBZ0RELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7Ozs7OztJQUl2RCxZQUFZLE9BQW1CLEVBQUUsY0FBOEIsRUFBRSxNQUF3QjtRQUN2RixLQUFLLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUh6QyxrQkFBYSxHQUFZLElBQUksQ0FBQztJQUk5QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsT0FBTztJQUNULENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2pDLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxrQkFBa0I7aUJBQ3pDO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUNSO2FBQ0g7Ozs7WUFoRStCLFVBQVU7WUFJakMsY0FBYztZQURkLGdCQUFnQjs7OzRCQStEdEIsS0FBSzs7OztJQUFOLDRDQUM4QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuaW1wb3J0IHsgTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50IH0gZnJvbSAnLi9DaGlwcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hJUFNfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUm93Q2hpcHNFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48aSBjbGFzcz1cImJoaS1kZWxldGUtb1wiICpuZ0lmPVwiIWRpc2FibGVkXCIgKGNsaWNrKT1cIm9uUmVtb3ZlKCRldmVudClcIj48L2k+PC9kaXY+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Jvd0NoaXBFbGVtZW50IGV4dGVuZHMgTm92b0NoaXBFbGVtZW50IHtcbiAgb25TZWxlY3QoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXJvdy1jaGlwcycsXG4gIHByb3ZpZGVyczogW0NISVBTX1ZBTFVFX0FDQ0VTU09SXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3Mud2l0aC12YWx1ZV0nOiAnaXRlbXMubGVuZ3RoID4gMCcsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1jb2x1bW5zXCIgKm5nSWY9XCJpdGVtcy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1sYWJlbFwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj57eyBjb2x1bW4ubGFiZWwgfX08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXJvdy1jaGlwcy1lbXB0eS1tZXNzYWdlXCIgKm5nSWY9XCJzb3VyY2UuZW1wdHlSZWFkT25seU1lc3NhZ2UgJiYgZGlzYWJsZVBpY2tlcklucHV0ICYmIGl0ZW1zLmxlbmd0aCA9PT0gMFwiPnt7c291cmNlLmVtcHR5UmVhZE9ubHlNZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgPG5vdm8tcm93LWNoaXBcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfaXRlbXMgfCBhc3luY1wiXG4gICAgICAgICAgW3R5cGVdPVwidHlwZSB8fCBpdGVtPy52YWx1ZT8uc2VhcmNoRW50aXR5XCJcbiAgICAgICAgICBbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbSA9PSBzZWxlY3RlZFwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgKHJlbW92ZSk9XCJyZW1vdmUoJGV2ZW50LCBpdGVtKVwiXG4gICAgICAgICAgKHNlbGVjdCk9XCJzZWxlY3QoJGV2ZW50LCBpdGVtKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tZGF0YVwiICpuZ0Zvcj1cImxldCBjb2x1bW4gb2Ygc291cmNlLmNvbHVtbnNcIj48c3Bhbj57eyBjb2x1bW4uZGF0YShpdGVtKSB9fTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgPC9ub3ZvLXJvdy1jaGlwPlxuICAgICAgICA8bm92by1waWNrZXJcbiAgICAgICAgICAgIGNsZWFyVmFsdWVPblNlbGVjdD1cInRydWVcIlxuICAgICAgICAgICAgW2Nsb3NlT25TZWxlY3RdPVwiY2xvc2VPblNlbGVjdFwiXG4gICAgICAgICAgICBbY29uZmlnXT1cInNvdXJjZVwiXG4gICAgICAgICAgICBbZGlzYWJsZVBpY2tlcklucHV0XT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbaGlkZGVuXT1cImRpc2FibGVQaWNrZXJJbnB1dFwiXG4gICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtVG9BZGRcIlxuICAgICAgICAgICAgKHNlbGVjdCk9XCJhZGQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCJcbiAgICAgICAgICAgICh0eXBpbmcpPVwib25UeXBpbmcoJGV2ZW50KVwiXG4gICAgICAgICAgICAoYmx1cik9XCJvblRvdWNoZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbXNcIlxuICAgICAgICAgICAgW292ZXJyaWRlRWxlbWVudF09XCJlbGVtZW50XCI+XG4gICAgICAgIDwvbm92by1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gI3ByZXZpZXc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Sb3dDaGlwc0VsZW1lbnQgZXh0ZW5kcyBOb3ZvQ2hpcHNFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb21wb25lbnRVdGlscywgbGFiZWxzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19