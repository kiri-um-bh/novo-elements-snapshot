// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoButtonModule } from './../button/Button.module';
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoTooltipModule } from './../tooltip/Tooltip.module';
import { NovoSearchBoxElement } from './SearchBox';
import * as i0 from "@angular/core";
var NovoSearchBoxModule = /** @class */ (function () {
    function NovoSearchBoxModule() {
    }
    NovoSearchBoxModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoSearchBoxModule });
    NovoSearchBoxModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoSearchBoxModule_Factory(t) { return new (t || NovoSearchBoxModule)(); }, imports: [[CommonModule, NovoButtonModule, NovoPickerModule, NovoTooltipModule, NovoOverlayModule]] });
    return NovoSearchBoxModule;
}());
export { NovoSearchBoxModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoSearchBoxModule, { declarations: [NovoSearchBoxElement], imports: [CommonModule, NovoButtonModule, NovoPickerModule, NovoTooltipModule, NovoOverlayModule], exports: [NovoSearchBoxElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSearchBoxModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule, NovoPickerModule, NovoTooltipModule, NovoOverlayModule],
                declarations: [NovoSearchBoxElement],
                exports: [NovoSearchBoxElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQm94Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zZWFyY2gvU2VhcmNoQm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7QUFFbkQ7SUFBQTtLQUttQzsyREFBdEIsbUJBQW1CO3lIQUFuQixtQkFBbUIsa0JBSnJCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDOzhCQVhuRztDQWVtQyxBQUxuQyxJQUttQztTQUF0QixtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkFIZixvQkFBb0IsYUFEekIsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixhQUV0RixvQkFBb0I7a0RBRW5CLG1CQUFtQjtjQUwvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO2dCQUNqRyxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4vLi4vYnV0dG9uL0J1dHRvbi5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1BpY2tlck1vZHVsZSB9IGZyb20gJy4vLi4vcGlja2VyL1BpY2tlci5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1Rvb2x0aXBNb2R1bGUgfSBmcm9tICcuLy4uL3Rvb2x0aXAvVG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlYXJjaEJveEVsZW1lbnQgfSBmcm9tICcuL1NlYXJjaEJveCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGUsIE5vdm9QaWNrZXJNb2R1bGUsIE5vdm9Ub29sdGlwTW9kdWxlLCBOb3ZvT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9TZWFyY2hCb3hFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9TZWFyY2hCb3hFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NlYXJjaEJveE1vZHVsZSB7fVxuIl19