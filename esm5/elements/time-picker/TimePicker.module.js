/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Vendor
import { TextMaskModule } from 'angular2-text-mask';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoListModule } from '../list/List.module';
import { NovoTimePickerElement } from './TimePicker';
import { NovoTimePickerInputElement } from './TimePickerInput';
var NovoTimePickerModule = /** @class */ (function () {
    function NovoTimePickerModule() {
    }
    NovoTimePickerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, TextMaskModule, NovoOverlayModule, NovoListModule],
                    declarations: [NovoTimePickerElement, NovoTimePickerInputElement],
                    exports: [NovoTimePickerElement, NovoTimePickerInputElement],
                },] }
    ];
    return NovoTimePickerModule;
}());
export { NovoTimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGltZS1waWNrZXIvVGltZVBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRS9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNyRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRDtJQUFBO0lBS21DLENBQUM7O2dCQUxuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxDQUFDO29CQUN2RixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSwwQkFBMEIsQ0FBQztvQkFDakUsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsMEJBQTBCLENBQUM7aUJBQzdEOztJQUNrQywyQkFBQztDQUFBLEFBTHBDLElBS29DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgVGV4dE1hc2tNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi10ZXh0LW1hc2snO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0xpc3RNb2R1bGUgfSBmcm9tICcuLi9saXN0L0xpc3QubW9kdWxlJztcbmltcG9ydCB7IE5vdm9UaW1lUGlja2VyRWxlbWVudCB9IGZyb20gJy4vVGltZVBpY2tlcic7XG5pbXBvcnQgeyBOb3ZvVGltZVBpY2tlcklucHV0RWxlbWVudCB9IGZyb20gJy4vVGltZVBpY2tlcklucHV0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFRleHRNYXNrTW9kdWxlLCBOb3ZvT3ZlcmxheU1vZHVsZSwgTm92b0xpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvVGltZVBpY2tlckVsZW1lbnQsIE5vdm9UaW1lUGlja2VySW5wdXRFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9UaW1lUGlja2VyRWxlbWVudCwgTm92b1RpbWVQaWNrZXJJbnB1dEVsZW1lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVGltZVBpY2tlck1vZHVsZSB7fVxuIl19