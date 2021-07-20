// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorStateMatcher } from '../common';
import { NovoFieldModule } from '../field';
import { NovoIconModule } from '../icon';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipAvatar, NovoChipElement, NovoChipRemove } from './Chip';
import { NOVO_CHIPS_DEFAULT_OPTIONS } from './ChipDefaults';
import { NovoChipInput } from './ChipInput';
import { NovoChipList } from './ChipList';
import { NovoChipsElement } from './Chips';
import { NovoRowChipElement, NovoRowChipsElement } from './RowChips';
import * as i0 from "@angular/core";
export class NovoChipsModule {
}
NovoChipsModule.ɵmod = i0.ɵɵdefineNgModule({ type: NovoChipsModule });
NovoChipsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NovoChipsModule_Factory(t) { return new (t || NovoChipsModule)(); }, providers: [
        ErrorStateMatcher,
        {
            provide: NOVO_CHIPS_DEFAULT_OPTIONS,
            useValue: {
                separatorKeyCodes: ["Enter" /* Enter */],
            },
        },
    ], imports: [[CommonModule, FormsModule, NovoPickerModule, NovoIconModule, NovoFieldModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NovoChipsModule, { declarations: [NovoChipElement,
        NovoChipAvatar,
        NovoChipRemove,
        NovoChipInput,
        NovoChipList,
        NovoChipsElement,
        NovoRowChipElement,
        NovoRowChipsElement], imports: [CommonModule, FormsModule, NovoPickerModule, NovoIconModule, NovoFieldModule], exports: [NovoChipElement,
        NovoChipAvatar,
        NovoChipRemove,
        NovoChipInput,
        NovoChipList,
        NovoChipsElement,
        NovoRowChipElement,
        NovoRowChipsElement] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoChipsModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NovoPickerModule, NovoIconModule, NovoFieldModule],
                declarations: [
                    NovoChipElement,
                    NovoChipAvatar,
                    NovoChipRemove,
                    NovoChipInput,
                    NovoChipList,
                    NovoChipsElement,
                    NovoRowChipElement,
                    NovoRowChipsElement,
                ],
                exports: [
                    NovoChipElement,
                    NovoChipAvatar,
                    NovoChipRemove,
                    NovoChipInput,
                    NovoChipList,
                    NovoChipsElement,
                    NovoRowChipElement,
                    NovoRowChipsElement,
                ],
                providers: [
                    ErrorStateMatcher,
                    {
                        provide: NOVO_CHIPS_DEFAULT_OPTIONS,
                        useValue: {
                            separatorKeyCodes: ["Enter" /* Enter */],
                        },
                    },
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hpcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NoaXBzL0NoaXBzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekMsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUN6RSxPQUFPLEVBQTJCLDBCQUEwQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBaUNyRSxNQUFNLE9BQU8sZUFBZTs7bURBQWYsZUFBZTs2R0FBZixlQUFlLG1CQVZmO1FBQ1QsaUJBQWlCO1FBQ2pCO1lBQ0UsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxRQUFRLEVBQUU7Z0JBQ1IsaUJBQWlCLEVBQUUscUJBQVc7YUFDSjtTQUM3QjtLQUNGLFlBN0JRLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO3dGQStCNUUsZUFBZSxtQkE3QnhCLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUIsYUFUWCxZQUFZLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLGFBWXBGLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixtQkFBbUI7a0RBWVYsZUFBZTtjQWhDM0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztnQkFDdkYsWUFBWSxFQUFFO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQixtQkFBbUI7aUJBQ3BCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxpQkFBaUI7b0JBQ2pCO3dCQUNFLE9BQU8sRUFBRSwwQkFBMEI7d0JBQ25DLFFBQVEsRUFBRTs0QkFDUixpQkFBaUIsRUFBRSxxQkFBVzt5QkFDSjtxQkFDN0I7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEtleSB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IEVycm9yU3RhdGVNYXRjaGVyIH0gZnJvbSAnLi4vY29tbW9uJztcbmltcG9ydCB7IE5vdm9GaWVsZE1vZHVsZSB9IGZyb20gJy4uL2ZpZWxkJztcbmltcG9ydCB7IE5vdm9JY29uTW9kdWxlIH0gZnJvbSAnLi4vaWNvbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9QaWNrZXJNb2R1bGUgfSBmcm9tICcuLy4uL3BpY2tlci9QaWNrZXIubW9kdWxlJztcbmltcG9ydCB7IE5vdm9DaGlwQXZhdGFyLCBOb3ZvQ2hpcEVsZW1lbnQsIE5vdm9DaGlwUmVtb3ZlIH0gZnJvbSAnLi9DaGlwJztcbmltcG9ydCB7IE5vdm9DaGlwc0RlZmF1bHRPcHRpb25zLCBOT1ZPX0NISVBTX0RFRkFVTFRfT1BUSU9OUyB9IGZyb20gJy4vQ2hpcERlZmF1bHRzJztcbmltcG9ydCB7IE5vdm9DaGlwSW5wdXQgfSBmcm9tICcuL0NoaXBJbnB1dCc7XG5pbXBvcnQgeyBOb3ZvQ2hpcExpc3QgfSBmcm9tICcuL0NoaXBMaXN0JztcbmltcG9ydCB7IE5vdm9DaGlwc0VsZW1lbnQgfSBmcm9tICcuL0NoaXBzJztcbmltcG9ydCB7IE5vdm9Sb3dDaGlwRWxlbWVudCwgTm92b1Jvd0NoaXBzRWxlbWVudCB9IGZyb20gJy4vUm93Q2hpcHMnO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE5vdm9QaWNrZXJNb2R1bGUsIE5vdm9JY29uTW9kdWxlLCBOb3ZvRmllbGRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOb3ZvQ2hpcEVsZW1lbnQsXG4gICAgTm92b0NoaXBBdmF0YXIsXG4gICAgTm92b0NoaXBSZW1vdmUsXG4gICAgTm92b0NoaXBJbnB1dCxcbiAgICBOb3ZvQ2hpcExpc3QsXG4gICAgTm92b0NoaXBzRWxlbWVudCxcbiAgICBOb3ZvUm93Q2hpcEVsZW1lbnQsXG4gICAgTm92b1Jvd0NoaXBzRWxlbWVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5vdm9DaGlwRWxlbWVudCxcbiAgICBOb3ZvQ2hpcEF2YXRhcixcbiAgICBOb3ZvQ2hpcFJlbW92ZSxcbiAgICBOb3ZvQ2hpcElucHV0LFxuICAgIE5vdm9DaGlwTGlzdCxcbiAgICBOb3ZvQ2hpcHNFbGVtZW50LFxuICAgIE5vdm9Sb3dDaGlwRWxlbWVudCxcbiAgICBOb3ZvUm93Q2hpcHNFbGVtZW50LFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBFcnJvclN0YXRlTWF0Y2hlcixcbiAgICB7XG4gICAgICBwcm92aWRlOiBOT1ZPX0NISVBTX0RFRkFVTFRfT1BUSU9OUyxcbiAgICAgIHVzZVZhbHVlOiB7XG4gICAgICAgIHNlcGFyYXRvcktleUNvZGVzOiBbS2V5LkVudGVyXSxcbiAgICAgIH0gYXMgTm92b0NoaXBzRGVmYXVsdE9wdGlvbnMsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoaXBzTW9kdWxlIHt9XG4iXX0=