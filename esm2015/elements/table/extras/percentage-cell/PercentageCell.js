// NG2
import { Component } from '@angular/core';
// APP
import { BaseRenderer } from '../base-renderer/BaseRenderer';
export class PercentageCell extends BaseRenderer {
}
PercentageCell.decorators = [
    { type: Component, args: [{
                selector: 'percentage-cell',
                template: `
        <div class="percentage" *ngIf="value || value === 0">{{ value | percent:'1.0-2' }}</div>
    `
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyY2VudGFnZUNlbGwuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3BlcmNlbnRhZ2UtY2VsbC9QZXJjZW50YWdlQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxNQUFNO0FBQ04sT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBUTdELE1BQU0sT0FBTyxjQUFlLFNBQVEsWUFBWTs7O1lBTi9DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7O0tBRVA7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEJhc2VSZW5kZXJlciB9IGZyb20gJy4uL2Jhc2UtcmVuZGVyZXIvQmFzZVJlbmRlcmVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGVyY2VudGFnZS1jZWxsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBlcmNlbnRhZ2VcIiAqbmdJZj1cInZhbHVlIHx8IHZhbHVlID09PSAwXCI+e3sgdmFsdWUgfCBwZXJjZW50OicxLjAtMicgfX08L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJjZW50YWdlQ2VsbCBleHRlbmRzIEJhc2VSZW5kZXJlciB7fVxuIl19