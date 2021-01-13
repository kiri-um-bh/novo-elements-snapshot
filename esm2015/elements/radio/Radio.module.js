// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// APP
import { NovoButtonModule } from '../button/Button.module';
import { NovoRadioElement } from './Radio';
import { NovoRadioGroup } from './RadioGroup';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcmFkaW8vUmFkaW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBTzlDLE1BQU0sT0FBTyxlQUFlOzttREFBZixlQUFlOzZHQUFmLGVBQWUsa0JBSmpCLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO3dGQUk5QixlQUFlLG1CQUhYLGdCQUFnQixFQUFFLGNBQWMsYUFEckMsWUFBWSxFQUFFLGdCQUFnQixhQUU5QixnQkFBZ0IsRUFBRSxjQUFjO2tEQUUvQixlQUFlO2NBTDNCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQztnQkFDaEQsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0J1dHRvbk1vZHVsZSB9IGZyb20gJy4uL2J1dHRvbi9CdXR0b24ubW9kdWxlJztcbmltcG9ydCB7IE5vdm9SYWRpb0VsZW1lbnQgfSBmcm9tICcuL1JhZGlvJztcbmltcG9ydCB7IE5vdm9SYWRpb0dyb3VwIH0gZnJvbSAnLi9SYWRpb0dyb3VwJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTm92b0J1dHRvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05vdm9SYWRpb0VsZW1lbnQsIE5vdm9SYWRpb0dyb3VwXSxcbiAgZXhwb3J0czogW05vdm9SYWRpb0VsZW1lbnQsIE5vdm9SYWRpb0dyb3VwXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1JhZGlvTW9kdWxlIHt9XG4iXX0=