/**
 * @fileoverview added by tsickle
 * Generated from: elements/chips/RowChips.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoRowChipsElement)),
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
            [overrideElement]="element"
            *ngIf="!maxlength || (maxlength && items.length < maxlength)">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93Q2hpcHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2hpcHMvUm93Q2hpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7OztNQUd0RCxvQkFBb0IsR0FBRztJQUMzQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsRUFBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBTUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGVBQWU7Ozs7O0lBQ3JELFFBQVEsQ0FBQyxDQUFDO1FBQ1IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSw4SUFBOEk7YUFDeko7O0FBaURELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7Ozs7OztJQUl2RCxZQUFZLE9BQW1CLEVBQUUsY0FBOEIsRUFBRSxNQUF3QjtRQUN2RixLQUFLLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUh6QyxrQkFBYSxHQUFZLElBQUksQ0FBQztJQUk5QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsT0FBTztJQUNULENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2pDLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxrQkFBa0I7aUJBQ3pDO2dCQUNELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWtDUjthQUNIOzs7O1lBakUrQixVQUFVO1lBSWpDLGNBQWM7WUFEZCxnQkFBZ0I7Ozs0QkFnRXRCLEtBQUs7Ozs7SUFBTiw0Q0FDOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcbmltcG9ydCB7IE5vdm9DaGlwRWxlbWVudCwgTm92b0NoaXBzRWxlbWVudCB9IGZyb20gJy4vQ2hpcHMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENISVBTX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b1Jvd0NoaXBzRWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yb3ctY2hpcCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5vdm8tcm93LWNoaXBzLWNvbHVtbnNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PGkgY2xhc3M9XCJiaGktZGVsZXRlLW9cIiAqbmdJZj1cIiFkaXNhYmxlZFwiIChjbGljayk9XCJvblJlbW92ZSgkZXZlbnQpXCI+PC9pPjwvZGl2PmAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Sb3dDaGlwRWxlbWVudCBleHRlbmRzIE5vdm9DaGlwRWxlbWVudCB7XG4gIG9uU2VsZWN0KGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1yb3ctY2hpcHMnLFxuICBwcm92aWRlcnM6IFtDSElQU19WQUxVRV9BQ0NFU1NPUl0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLndpdGgtdmFsdWVdJzogJ2l0ZW1zLmxlbmd0aCA+IDAnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtY29sdW1uc1wiICpuZ0lmPVwiaXRlbXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tbGFiZWxcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHNvdXJjZS5jb2x1bW5zXCI+e3sgY29sdW1uLmxhYmVsIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1yb3ctY2hpcHMtZW1wdHktbWVzc2FnZVwiICpuZ0lmPVwic291cmNlLmVtcHR5UmVhZE9ubHlNZXNzYWdlICYmIGRpc2FibGVQaWNrZXJJbnB1dCAmJiBpdGVtcy5sZW5ndGggPT09IDBcIj57e3NvdXJjZS5lbXB0eVJlYWRPbmx5TWVzc2FnZX19PC9kaXY+XG4gICAgICAgIDxub3ZvLXJvdy1jaGlwXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2l0ZW1zIHwgYXN5bmNcIlxuICAgICAgICAgIFt0eXBlXT1cInR5cGUgfHwgaXRlbT8udmFsdWU/LnNlYXJjaEVudGl0eVwiXG4gICAgICAgICAgW2NsYXNzLnNlbGVjdGVkXT1cIml0ZW0gPT0gc2VsZWN0ZWRcIlxuICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgIChyZW1vdmUpPVwicmVtb3ZlKCRldmVudCwgaXRlbSlcIlxuICAgICAgICAgIChzZWxlY3QpPVwic2VsZWN0KCRldmVudCwgaXRlbSlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLWRhdGFcIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIHNvdXJjZS5jb2x1bW5zXCI+PHNwYW4+e3sgY29sdW1uLmRhdGEoaXRlbSkgfX08L3NwYW4+PC9kaXY+XG4gICAgICAgIDwvbm92by1yb3ctY2hpcD5cbiAgICAgICAgPG5vdm8tcGlja2VyXG4gICAgICAgICAgICBjbGVhclZhbHVlT25TZWxlY3Q9XCJ0cnVlXCJcbiAgICAgICAgICAgIFtjbG9zZU9uU2VsZWN0XT1cImNsb3NlT25TZWxlY3RcIlxuICAgICAgICAgICAgW2NvbmZpZ109XCJzb3VyY2VcIlxuICAgICAgICAgICAgW2Rpc2FibGVQaWNrZXJJbnB1dF09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgW2hpZGRlbl09XCJkaXNhYmxlUGlja2VySW5wdXRcIlxuICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbVRvQWRkXCJcbiAgICAgICAgICAgIChzZWxlY3QpPVwiYWRkKCRldmVudClcIlxuICAgICAgICAgICAgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudClcIlxuICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiXG4gICAgICAgICAgICAodHlwaW5nKT1cIm9uVHlwaW5nKCRldmVudClcIlxuICAgICAgICAgICAgKGJsdXIpPVwib25Ub3VjaGVkKCRldmVudClcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cIml0ZW1zXCJcbiAgICAgICAgICAgIFtvdmVycmlkZUVsZW1lbnRdPVwiZWxlbWVudFwiXG4gICAgICAgICAgICAqbmdJZj1cIiFtYXhsZW5ndGggfHwgKG1heGxlbmd0aCAmJiBpdGVtcy5sZW5ndGggPCBtYXhsZW5ndGgpXCI+XG4gICAgICAgIDwvbm92by1waWNrZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmV2aWV3LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gI3ByZXZpZXc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Sb3dDaGlwc0VsZW1lbnQgZXh0ZW5kcyBOb3ZvQ2hpcHNFbGVtZW50IHtcbiAgQElucHV0KClcbiAgY2xvc2VPblNlbGVjdDogYm9vbGVhbiA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzLCBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb21wb25lbnRVdGlscywgbGFiZWxzKTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19