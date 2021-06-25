// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { TooltipDirective } from './Tooltip.directive';
import { NovoTooltip } from './Tooltip.component';
export class NovoTooltipModule {
}
NovoTooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, NovoTooltip],
                exports: [TooltipDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdG9vbHRpcC9Ub29sdGlwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU9sRCxNQUFNLE9BQU8saUJBQWlCOzs7WUFMN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDO2dCQUM3QyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IFRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuL1Rvb2x0aXAuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5vdm9Ub29sdGlwIH0gZnJvbSAnLi9Ub29sdGlwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtUb29sdGlwRGlyZWN0aXZlLCBOb3ZvVG9vbHRpcF0sXG4gIGV4cG9ydHM6IFtUb29sdGlwRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1Rvb2x0aXBNb2R1bGUgeyB9XG4iXX0=