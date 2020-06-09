// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from '../button/Button.module';
import { NovoRadioElement, NovoRadioGroup } from './Radio';
import * as i0 from "@angular/core";
export class NovoRadioModule {
}
NovoRadioModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoRadioModule });
NovoRadioModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoRadioModule_Factory(t) { return new (t || NovoRadioModule)(); }, imports: [[CommonModule, NovoButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoRadioModule, { declarations: [NovoRadioElement, NovoRadioGroup], imports: [CommonModule, NovoButtonModule], exports: [NovoRadioElement, NovoRadioGroup] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRadioModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoRadioElement, NovoRadioGroup],
                exports: [NovoRadioElement, NovoRadioGroup],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3JhZGlvL1JhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7O0FBTzNELE1BQU0sT0FBTyxlQUFlOzttREFBZixlQUFlOzZHQUFmLGVBQWUsa0JBSmpCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO3dGQUk5QixlQUFlLG1CQUhYLGdCQUFnQixFQUFFLGNBQWMsYUFEckMsWUFBWSxFQUFFLGdCQUFnQixhQUU5QixnQkFBZ0IsRUFBRSxjQUFjO2tEQUUvQixlQUFlO2NBTDNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9SYWRpb0VsZW1lbnQsIE5vdm9SYWRpb0dyb3VwIH0gZnJvbSAnLi9SYWRpbyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE5vdm9CdXR0b25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvUmFkaW9FbGVtZW50LCBOb3ZvUmFkaW9Hcm91cF0sXG4gIGV4cG9ydHM6IFtOb3ZvUmFkaW9FbGVtZW50LCBOb3ZvUmFkaW9Hcm91cF0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9SYWRpb01vZHVsZSB7fVxuIl19