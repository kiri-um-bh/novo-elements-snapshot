// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from './../button/Button.module';
import { NovoSliderElement } from './Slider';
import * as i0 from "@angular/core";
var NovoSliderModule = /** @class */ (function () {
    function NovoSliderModule() {
    }
    NovoSliderModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoSliderModule });
    NovoSliderModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoSliderModule_Factory(t) { return new (t || NovoSliderModule)(); }, imports: [[CommonModule, NovoButtonModule]] });
    return NovoSliderModule;
}());
export { NovoSliderModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoSliderModule, { declarations: [NovoSliderElement], imports: [CommonModule, NovoButtonModule], exports: [NovoSliderElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSliderModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoSliderElement],
                exports: [NovoSliderElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zbGlkZXIvU2xpZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFN0M7SUFBQTtLQUtnQzt3REFBbkIsZ0JBQWdCO21IQUFoQixnQkFBZ0Isa0JBSmxCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDOzJCQVIzQztDQVlnQyxBQUxoQyxJQUtnQztTQUFuQixnQkFBZ0I7d0ZBQWhCLGdCQUFnQixtQkFIWixpQkFBaUIsYUFEdEIsWUFBWSxFQUFFLGdCQUFnQixhQUU5QixpQkFBaUI7a0RBRWhCLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvQnV0dG9uTW9kdWxlIH0gZnJvbSAnLi8uLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvU2xpZGVyRWxlbWVudCB9IGZyb20gJy4vU2xpZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9TbGlkZXJFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9TbGlkZXJFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NsaWRlck1vZHVsZSB7fVxuIl19