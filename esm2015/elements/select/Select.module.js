// NG
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
// App
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoSelectElement } from './Select';
import * as i0 from "@angular/core";
export class NovoSelectModule {
}
NovoSelectModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoSelectModule });
NovoSelectModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoSelectModule_Factory(t) { return new (t || NovoSelectModule)(); }, imports: [[CommonModule, FormsModule, A11yModule, NovoOverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoSelectModule, { declarations: [NovoSelectElement], imports: [CommonModule, FormsModule, A11yModule, NovoOverlayModule], exports: [NovoSelectElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSelectModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, A11yModule, NovoOverlayModule],
                declarations: [NovoSelectElement],
                exports: [NovoSelectElement],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9zZWxlY3QvU2VsZWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLO0FBQ0wsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxNQUFNO0FBQ04sT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sVUFBVSxDQUFDOztBQU83QyxNQUFNLE9BQU8sZ0JBQWdCOztvREFBaEIsZ0JBQWdCOytHQUFoQixnQkFBZ0Isa0JBSmxCLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQUM7d0ZBSXhELGdCQUFnQixtQkFIWixpQkFBaUIsYUFEdEIsWUFBWSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsaUJBQWlCLGFBRXhELGlCQUFpQjtrREFFaEIsZ0JBQWdCO2NBTDVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQztnQkFDbkUsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBMTF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvT3ZlcmxheU1vZHVsZSB9IGZyb20gJy4uL292ZXJsYXkvT3ZlcmxheS5tb2R1bGUnO1xuaW1wb3J0IHsgTm92b1NlbGVjdEVsZW1lbnQgfSBmcm9tICcuL1NlbGVjdCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBBMTF5TW9kdWxlLCBOb3ZvT3ZlcmxheU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9TZWxlY3RFbGVtZW50XSxcbiAgZXhwb3J0czogW05vdm9TZWxlY3RFbGVtZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1NlbGVjdE1vZHVsZSB7fVxuIl19