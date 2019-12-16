/**
 * @fileoverview added by tsickle
 * Generated from: elements/chips/Chips.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipElement, NovoChipsElement } from './Chips';
import { NovoRowChipElement, NovoRowChipsElement } from './RowChips';
var NovoChipsModule = /** @class */ (function () {
    function NovoChipsModule() {
    }
    NovoChipsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, NovoPickerModule],
                    declarations: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement],
                    exports: [NovoChipElement, NovoChipsElement, NovoRowChipElement, NovoRowChipsElement],
                },] }
    ];
    return NovoChipsModule;
}());
export { NovoChipsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NoaXBzL0NoaXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDNUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXJFO0lBQUE7SUFLOEIsQ0FBQzs7Z0JBTDlCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDO29CQUN0RCxZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7b0JBQzFGLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQztpQkFDdEY7O0lBQzZCLHNCQUFDO0NBQUEsQUFML0IsSUFLK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1BpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vcGlja2VyL1BpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0NoaXBFbGVtZW50LCBOb3ZvQ2hpcHNFbGVtZW50IH0gZnJvbSAnLi9DaGlwcyc7XG5pbXBvcnQgeyBOb3ZvUm93Q2hpcEVsZW1lbnQsIE5vdm9Sb3dDaGlwc0VsZW1lbnQgfSBmcm9tICcuL1Jvd0NoaXBzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9QaWNrZXJNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvQ2hpcEVsZW1lbnQsIE5vdm9DaGlwc0VsZW1lbnQsIE5vdm9Sb3dDaGlwRWxlbWVudCwgTm92b1Jvd0NoaXBzRWxlbWVudF0sXG4gIGV4cG9ydHM6IFtOb3ZvQ2hpcEVsZW1lbnQsIE5vdm9DaGlwc0VsZW1lbnQsIE5vdm9Sb3dDaGlwRWxlbWVudCwgTm92b1Jvd0NoaXBzRWxlbWVudF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGlwc01vZHVsZSB7fVxuIl19