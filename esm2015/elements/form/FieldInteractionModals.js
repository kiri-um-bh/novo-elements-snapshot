// NG2
import { Component } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
// APP
import { NovoModalParams, NovoModalRef } from '../modal/modal-ref';
import * as i0 from "@angular/core";
import * as i1 from "../modal/modal-ref";
import * as i2 from "../../services/novo-label-service";
import * as i3 from "../modal/modal.component";
import * as i4 from "@angular/common";
import * as i5 from "../button/Button";
function ControlConfirmModal_h2_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelement(4, "i", 4);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.params["label"], ":");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.params["oldValue"], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.params["newValue"], " ");
} }
function ControlConfirmModal_h2_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.params["message"]);
} }
function ControlPromptModal_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const change_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(change_r1);
} }
export class ControlConfirmModal {
    constructor(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    close(result) {
        this.modalRef.close(result);
    }
}
ControlConfirmModal.ɵfac = function ControlConfirmModal_Factory(t) { return new (t || ControlConfirmModal)(i0.ɵɵdirectiveInject(i1.NovoModalRef), i0.ɵɵdirectiveInject(i1.NovoModalParams), i0.ɵɵdirectiveInject(i2.NovoLabelService)); };
ControlConfirmModal.ɵcmp = i0.ɵɵdefineComponent({ type: ControlConfirmModal, selectors: [["control-confirm-modal"]], decls: 9, vars: 8, consts: [["type", "warning"], [4, "ngIf"], ["theme", "standard", 3, "click"], ["theme", "primary", "icon", "check", "autofocus", "", 3, "click"], [1, "bhi-arrow-right"]], template: function ControlConfirmModal_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "novo-notification", 0);
        i0.ɵɵelementStart(1, "h1");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, ControlConfirmModal_h2_3_Template, 6, 3, "h2", 1);
        i0.ɵɵtemplate(4, ControlConfirmModal_h2_4_Template, 2, 1, "h2", 1);
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function ControlConfirmModal_Template_button_click_5_listener() { return ctx.close(false); });
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 3);
        i0.ɵɵlistener("click", function ControlConfirmModal_Template_button_click_7_listener() { return ctx.close(true); });
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-" + ctx.params["key"]);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.labels.confirmChangesModalMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.params["message"]);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.params["message"]);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-cancel" + ctx.params["key"]);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.labels.cancel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-save-" + ctx.params["key"]);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.labels.save, " ");
    } }, directives: [i3.NovoModalNotificationElement, i4.NgIf, i5.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlConfirmModal, [{
        type: Component,
        args: [{
                selector: 'control-confirm-modal',
                template: `
    <novo-notification type="warning" [attr.data-automation-id]="'field-interaction-modal-' + params['key']">
      <h1>{{ labels.confirmChangesModalMessage }}</h1>
      <h2 *ngIf="!params['message']">
        <label>{{ params['label'] }}:</label> {{ params['oldValue'] }} <i class="bhi-arrow-right"></i> {{ params['newValue'] }}
      </h2>
      <h2 *ngIf="params['message']">{{ params['message'] }}</h2>
      <button theme="standard" (click)="close(false)" [attr.data-automation-id]="'field-interaction-modal-cancel' + params['key']">
        {{ labels.cancel }}
      </button>
      <button
        theme="primary"
        icon="check"
        (click)="close(true)"
        autofocus
        [attr.data-automation-id]="'field-interaction-modal-save-' + params['key']"
      >
        {{ labels.save }}
      </button>
    </novo-notification>
  `,
            }]
    }], function () { return [{ type: i1.NovoModalRef }, { type: i1.NovoModalParams }, { type: i2.NovoLabelService }]; }, null); })();
export class ControlPromptModal {
    constructor(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    close(result) {
        this.modalRef.close(result);
    }
}
ControlPromptModal.ɵfac = function ControlPromptModal_Factory(t) { return new (t || ControlPromptModal)(i0.ɵɵdirectiveInject(i1.NovoModalRef), i0.ɵɵdirectiveInject(i1.NovoModalParams), i0.ɵɵdirectiveInject(i2.NovoLabelService)); };
ControlPromptModal.ɵcmp = i0.ɵɵdefineComponent({ type: ControlPromptModal, selectors: [["control-prompt-modal"]], decls: 8, vars: 7, consts: [["type", "warning"], [4, "ngFor", "ngForOf"], ["theme", "standard", 3, "click"], ["theme", "primary", "icon", "check", "autofocus", "", 3, "click"]], template: function ControlPromptModal_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "novo-notification", 0);
        i0.ɵɵelementStart(1, "h1");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, ControlPromptModal_p_3_Template, 2, 1, "p", 1);
        i0.ɵɵelementStart(4, "button", 2);
        i0.ɵɵlistener("click", function ControlPromptModal_Template_button_click_4_listener() { return ctx.close(false); });
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function ControlPromptModal_Template_button_click_6_listener() { return ctx.close(true); });
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-" + ctx.params["key"]);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.labels.promptModalMessage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.params["changes"]);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-cancel" + ctx.params["key"]);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.labels.cancel, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-yes-" + ctx.params["key"]);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.labels.yes, " ");
    } }, directives: [i3.NovoModalNotificationElement, i4.NgForOf, i5.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlPromptModal, [{
        type: Component,
        args: [{
                selector: 'control-prompt-modal',
                template: `
    <novo-notification type="warning" [attr.data-automation-id]="'field-interaction-modal-' + params['key']">
      <h1>{{ labels.promptModalMessage }}</h1>
      <p *ngFor="let change of params['changes']">{{ change }}</p>
      <button theme="standard" (click)="close(false)" [attr.data-automation-id]="'field-interaction-modal-cancel' + params['key']">
        {{ labels.cancel }}
      </button>
      <button
        theme="primary"
        icon="check"
        (click)="close(true)"
        autofocus
        [attr.data-automation-id]="'field-interaction-modal-yes-' + params['key']"
      >
        {{ labels.yes }}
      </button>
    </novo-notification>
  `,
            }]
    }], function () { return [{ type: i1.NovoModalRef }, { type: i1.NovoModalParams }, { type: i2.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbk1vZGFscy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vRmllbGRJbnRlcmFjdGlvbk1vZGFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNyRSxNQUFNO0FBQ04sT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7SUFPN0QsMEJBQ0U7SUFBQSw2QkFBTztJQUFBLFlBQXNCO0lBQUEsaUJBQVE7SUFBQyxZQUF5QjtJQUFBLHVCQUErQjtJQUFDLFlBQ2pHO0lBQUEsaUJBQUs7OztJQURJLGVBQXNCO0lBQXRCLHNEQUFzQjtJQUFTLGVBQXlCO0lBQXpCLDBEQUF5QjtJQUFnQyxlQUNqRztJQURpRywwREFDakc7OztJQUNBLDBCQUE4QjtJQUFBLFlBQXVCO0lBQUEsaUJBQUs7OztJQUE1QixlQUF1QjtJQUF2Qiw4Q0FBdUI7OztJQTZCckQseUJBQTRDO0lBQUEsWUFBWTtJQUFBLGlCQUFJOzs7SUFBaEIsZUFBWTtJQUFaLCtCQUFZOztBQWI5RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQW9CLFFBQXNCLEVBQVMsTUFBdUIsRUFBUyxNQUF3QjtRQUF2RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFFeEcsS0FBSyxDQUFDLE1BQWU7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7c0ZBTFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUFyQjVCLDRDQUNFO1FBQUEsMEJBQUk7UUFBQSxZQUF1QztRQUFBLGlCQUFLO1FBQ2hELGtFQUNFO1FBRUYsa0VBQThCO1FBQzlCLGlDQUNFO1FBRHVCLGdHQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7UUFDN0MsWUFDRjtRQUFBLGlCQUFTO1FBQ1QsaUNBT0U7UUFKQSxnR0FBUyxVQUFNLElBQUksQ0FBQyxJQUFDO1FBSXJCLFlBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFvQjs7UUFsQmMsb0ZBQXNFO1FBQ2xHLGVBQXVDO1FBQXZDLDJEQUF1QztRQUN2QyxlQUEwQjtRQUExQiw2Q0FBMEI7UUFHMUIsZUFBeUI7UUFBekIsNENBQXlCO1FBQ21CLGVBQTRFO1FBQTVFLDBGQUE0RTtRQUMxSCxlQUNGO1FBREUsa0RBQ0Y7UUFNRSxlQUEyRTtRQUEzRSx5RkFBMkU7UUFFM0UsZUFDRjtRQURFLGdEQUNGOztrREFJTyxtQkFBbUI7Y0F4Qi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JUO2FBQ0Y7O0FBOEJELE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsUUFBc0IsRUFBUyxNQUF1QixFQUFTLE1BQXdCO1FBQXZGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUV4RyxLQUFLLENBQUMsTUFBZTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOztvRkFMVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQWxCM0IsNENBQ0U7UUFBQSwwQkFBSTtRQUFBLFlBQStCO1FBQUEsaUJBQUs7UUFDeEMsK0RBQTRDO1FBQzVDLGlDQUNFO1FBRHVCLCtGQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7UUFDN0MsWUFDRjtRQUFBLGlCQUFTO1FBQ1QsaUNBT0U7UUFKQSwrRkFBUyxVQUFNLElBQUksQ0FBQyxJQUFDO1FBSXJCLFlBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFvQjs7UUFmYyxvRkFBc0U7UUFDbEcsZUFBK0I7UUFBL0IsbURBQStCO1FBQ2hDLGVBQXdDO1FBQXhDLCtDQUF3QztRQUNLLGVBQTRFO1FBQTVFLDBGQUE0RTtRQUMxSCxlQUNGO1FBREUsa0RBQ0Y7UUFNRSxlQUEwRTtRQUExRSx3RkFBMEU7UUFFMUUsZUFDRjtRQURFLCtDQUNGOztrREFJTyxrQkFBa0I7Y0FyQjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Nb2RhbFBhcmFtcywgTm92b01vZGFsUmVmIH0gZnJvbSAnLi4vbW9kYWwvbW9kYWwtcmVmJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29udHJvbC1jb25maXJtLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1ub3RpZmljYXRpb24gdHlwZT1cIndhcm5pbmdcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLScgKyBwYXJhbXNbJ2tleSddXCI+XG4gICAgICA8aDE+e3sgbGFiZWxzLmNvbmZpcm1DaGFuZ2VzTW9kYWxNZXNzYWdlIH19PC9oMT5cbiAgICAgIDxoMiAqbmdJZj1cIiFwYXJhbXNbJ21lc3NhZ2UnXVwiPlxuICAgICAgICA8bGFiZWw+e3sgcGFyYW1zWydsYWJlbCddIH19OjwvbGFiZWw+IHt7IHBhcmFtc1snb2xkVmFsdWUnXSB9fSA8aSBjbGFzcz1cImJoaS1hcnJvdy1yaWdodFwiPjwvaT4ge3sgcGFyYW1zWyduZXdWYWx1ZSddIH19XG4gICAgICA8L2gyPlxuICAgICAgPGgyICpuZ0lmPVwicGFyYW1zWydtZXNzYWdlJ11cIj57eyBwYXJhbXNbJ21lc3NhZ2UnXSB9fTwvaDI+XG4gICAgICA8YnV0dG9uIHRoZW1lPVwic3RhbmRhcmRcIiAoY2xpY2spPVwiY2xvc2UoZmFsc2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1jYW5jZWwnICsgcGFyYW1zWydrZXknXVwiPlxuICAgICAgICB7eyBsYWJlbHMuY2FuY2VsIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdGhlbWU9XCJwcmltYXJ5XCJcbiAgICAgICAgaWNvbj1cImNoZWNrXCJcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlKHRydWUpXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtc2F2ZS0nICsgcGFyYW1zWydrZXknXVwiXG4gICAgICA+XG4gICAgICAgIHt7IGxhYmVscy5zYXZlIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25vdm8tbm90aWZpY2F0aW9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29uZmlybU1vZGFsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwdWJsaWMgcGFyYW1zOiBOb3ZvTW9kYWxQYXJhbXMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGNsb3NlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UocmVzdWx0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb250cm9sLXByb21wdC1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5vdm8tbm90aWZpY2F0aW9uIHR5cGU9XCJ3YXJuaW5nXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC0nICsgcGFyYW1zWydrZXknXVwiPlxuICAgICAgPGgxPnt7IGxhYmVscy5wcm9tcHRNb2RhbE1lc3NhZ2UgfX08L2gxPlxuICAgICAgPHAgKm5nRm9yPVwibGV0IGNoYW5nZSBvZiBwYXJhbXNbJ2NoYW5nZXMnXVwiPnt7IGNoYW5nZSB9fTwvcD5cbiAgICAgIDxidXR0b24gdGhlbWU9XCJzdGFuZGFyZFwiIChjbGljayk9XCJjbG9zZShmYWxzZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLWNhbmNlbCcgKyBwYXJhbXNbJ2tleSddXCI+XG4gICAgICAgIHt7IGxhYmVscy5jYW5jZWwgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0aGVtZT1cInByaW1hcnlcIlxuICAgICAgICBpY29uPVwiY2hlY2tcIlxuICAgICAgICAoY2xpY2spPVwiY2xvc2UodHJ1ZSlcIlxuICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC15ZXMtJyArIHBhcmFtc1sna2V5J11cIlxuICAgICAgPlxuICAgICAgICB7eyBsYWJlbHMueWVzIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L25vdm8tbm90aWZpY2F0aW9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sUHJvbXB0TW9kYWwge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYsIHB1YmxpYyBwYXJhbXM6IE5vdm9Nb2RhbFBhcmFtcywgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBwdWJsaWMgY2xvc2UocmVzdWx0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZShyZXN1bHQpO1xuICB9XG59XG4iXX0=