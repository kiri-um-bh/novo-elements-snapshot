// NG2
import { Component } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams } from '../modal/Modal';
import { NovoLabelService } from '../../services/novo-label-service';
import * as i0 from "@angular/core";
import * as i1 from "../modal/Modal";
import * as i2 from "../../services/novo-label-service";
import * as i3 from "@angular/common";
import * as i4 from "../button/Button";
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
    i0.ɵɵtextInterpolate1(" ", ctx_r0.params["newValue"], "");
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
        i0.ɵɵtextInterpolate(ctx.labels.cancel);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-save-" + ctx.params["key"]);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.labels.save);
    } }, directives: [i1.NovoModalNotificationElement, i3.NgIf, i4.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlConfirmModal, [{
        type: Component,
        args: [{
                selector: 'control-confirm-modal',
                template: `
        <novo-notification type="warning" [attr.data-automation-id]="'field-interaction-modal-' + params['key']">
            <h1>{{ labels.confirmChangesModalMessage }}</h1>
            <h2 *ngIf="!params['message']"><label>{{ params['label'] }}:</label> {{ params['oldValue'] }} <i class="bhi-arrow-right"></i> {{ params['newValue'] }}</h2>
            <h2 *ngIf="params['message']">{{ params['message'] }}</h2>
            <button theme="standard" (click)="close(false)" [attr.data-automation-id]="'field-interaction-modal-cancel' + params['key']">{{ labels.cancel }}</button>
            <button theme="primary" icon="check" (click)="close(true)" autofocus [attr.data-automation-id]="'field-interaction-modal-save-' + params['key']">{{ labels.save }}</button>
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
        i0.ɵɵtextInterpolate(ctx.labels.cancel);
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("data-automation-id", "field-interaction-modal-yes-" + ctx.params["key"]);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.labels.yes);
    } }, directives: [i1.NovoModalNotificationElement, i3.NgForOf, i4.NovoButtonElement], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlPromptModal, [{
        type: Component,
        args: [{
                selector: 'control-prompt-modal',
                template: `
        <novo-notification type="warning" [attr.data-automation-id]="'field-interaction-modal-' + params['key']">
            <h1>{{ labels.promptModalMessage }}</h1>
            <p *ngFor="let change of params['changes']">{{ change }}</p>
            <button theme="standard" (click)="close(false)" [attr.data-automation-id]="'field-interaction-modal-cancel' + params['key']">{{ labels.cancel }}</button>
            <button theme="primary" icon="check" (click)="close(true)" autofocus [attr.data-automation-id]="'field-interaction-modal-yes-' + params['key']">{{ labels.yes }}</button>
        </novo-notification>
    `,
            }]
    }], function () { return [{ type: i1.NovoModalRef }, { type: i1.NovoModalParams }, { type: i2.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbk1vZGFscy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7SUFPekQsMEJBQStCO0lBQUEsNkJBQU87SUFBQSxZQUFzQjtJQUFBLGlCQUFRO0lBQUMsWUFBeUI7SUFBQSx1QkFBK0I7SUFBQyxZQUF3QjtJQUFBLGlCQUFLOzs7SUFBckgsZUFBc0I7SUFBdEIsc0RBQXNCO0lBQVMsZUFBeUI7SUFBekIsMERBQXlCO0lBQWdDLGVBQXdCO0lBQXhCLHlEQUF3Qjs7O0lBQ3RKLDBCQUE4QjtJQUFBLFlBQXVCO0lBQUEsaUJBQUs7OztJQUE1QixlQUF1QjtJQUF2Qiw4Q0FBdUI7OztJQW1CckQseUJBQTRDO0lBQUEsWUFBWTtJQUFBLGlCQUFJOzs7SUFBaEIsZUFBWTtJQUFaLCtCQUFZOztBQWJwRSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQW9CLFFBQXNCLEVBQVMsTUFBdUIsRUFBUyxNQUF3QjtRQUF2RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7SUFFeEcsS0FBSyxDQUFDLE1BQWU7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7c0ZBTFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUFUeEIsNENBQ0k7UUFBQSwwQkFBSTtRQUFBLFlBQXVDO1FBQUEsaUJBQUs7UUFDaEQsa0VBQStCO1FBQy9CLGtFQUE4QjtRQUM5QixpQ0FBNkg7UUFBcEcsZ0dBQVMsVUFBTSxLQUFLLENBQUMsSUFBQztRQUE4RSxZQUFtQjtRQUFBLGlCQUFTO1FBQ3pKLGlDQUFpSjtRQUE1RyxnR0FBUyxVQUFNLElBQUksQ0FBQyxJQUFDO1FBQXVGLFlBQWlCO1FBQUEsaUJBQVM7UUFDL0ssaUJBQW9COztRQU5jLG9GQUFzRTtRQUNoRyxlQUF1QztRQUF2QywyREFBdUM7UUFDdkMsZUFBMEI7UUFBMUIsNkNBQTBCO1FBQzFCLGVBQXlCO1FBQXpCLDRDQUF5QjtRQUNtQixlQUE0RTtRQUE1RSwwRkFBNEU7UUFBQyxlQUFtQjtRQUFuQix1Q0FBbUI7UUFDM0UsZUFBMkU7UUFBM0UseUZBQTJFO1FBQUMsZUFBaUI7UUFBakIscUNBQWlCOztrREFJakssbUJBQW1CO2NBWi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUU7Ozs7Ozs7O0tBUVA7YUFDSjs7QUFvQkQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFvQixRQUFzQixFQUFTLE1BQXVCLEVBQVMsTUFBd0I7UUFBdkYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBRXhHLEtBQUssQ0FBQyxNQUFlO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O29GQUxVLGtCQUFrQjt1REFBbEIsa0JBQWtCO1FBUnZCLDRDQUNJO1FBQUEsMEJBQUk7UUFBQSxZQUErQjtRQUFBLGlCQUFLO1FBQ3hDLCtEQUE0QztRQUM1QyxpQ0FBNkg7UUFBcEcsK0ZBQVMsVUFBTSxLQUFLLENBQUMsSUFBQztRQUE4RSxZQUFtQjtRQUFBLGlCQUFTO1FBQ3pKLGlDQUFnSjtRQUEzRywrRkFBUyxVQUFNLElBQUksQ0FBQyxJQUFDO1FBQXNGLFlBQWdCO1FBQUEsaUJBQVM7UUFDN0ssaUJBQW9COztRQUxjLG9GQUFzRTtRQUNoRyxlQUErQjtRQUEvQixtREFBK0I7UUFDaEMsZUFBd0M7UUFBeEMsK0NBQXdDO1FBQ0ssZUFBNEU7UUFBNUUsMEZBQTRFO1FBQUMsZUFBbUI7UUFBbkIsdUNBQW1CO1FBQzNFLGVBQTBFO1FBQTFFLHdGQUEwRTtRQUFDLGVBQWdCO1FBQWhCLG9DQUFnQjs7a0RBSS9KLGtCQUFrQjtjQVg5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7O0tBT1A7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Nb2RhbFJlZiwgTm92b01vZGFsUGFyYW1zIH0gZnJvbSAnLi4vbW9kYWwvTW9kYWwnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRyb2wtY29uZmlybS1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLW5vdGlmaWNhdGlvbiB0eXBlPVwid2FybmluZ1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtJyArIHBhcmFtc1sna2V5J11cIj5cbiAgICAgICAgICAgIDxoMT57eyBsYWJlbHMuY29uZmlybUNoYW5nZXNNb2RhbE1lc3NhZ2UgfX08L2gxPlxuICAgICAgICAgICAgPGgyICpuZ0lmPVwiIXBhcmFtc1snbWVzc2FnZSddXCI+PGxhYmVsPnt7IHBhcmFtc1snbGFiZWwnXSB9fTo8L2xhYmVsPiB7eyBwYXJhbXNbJ29sZFZhbHVlJ10gfX0gPGkgY2xhc3M9XCJiaGktYXJyb3ctcmlnaHRcIj48L2k+IHt7IHBhcmFtc1snbmV3VmFsdWUnXSB9fTwvaDI+XG4gICAgICAgICAgICA8aDIgKm5nSWY9XCJwYXJhbXNbJ21lc3NhZ2UnXVwiPnt7IHBhcmFtc1snbWVzc2FnZSddIH19PC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJzdGFuZGFyZFwiIChjbGljayk9XCJjbG9zZShmYWxzZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLWNhbmNlbCcgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLmNhbmNlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBpY29uPVwiY2hlY2tcIiAoY2xpY2spPVwiY2xvc2UodHJ1ZSlcIiBhdXRvZm9jdXMgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1zYXZlLScgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLnNhdmUgfX08L2J1dHRvbj5cbiAgICAgICAgPC9ub3ZvLW5vdGlmaWNhdGlvbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29uZmlybU1vZGFsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwdWJsaWMgcGFyYW1zOiBOb3ZvTW9kYWxQYXJhbXMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGNsb3NlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UocmVzdWx0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb250cm9sLXByb21wdC1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLW5vdGlmaWNhdGlvbiB0eXBlPVwid2FybmluZ1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtJyArIHBhcmFtc1sna2V5J11cIj5cbiAgICAgICAgICAgIDxoMT57eyBsYWJlbHMucHJvbXB0TW9kYWxNZXNzYWdlIH19PC9oMT5cbiAgICAgICAgICAgIDxwICpuZ0Zvcj1cImxldCBjaGFuZ2Ugb2YgcGFyYW1zWydjaGFuZ2VzJ11cIj57eyBjaGFuZ2UgfX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic3RhbmRhcmRcIiAoY2xpY2spPVwiY2xvc2UoZmFsc2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1jYW5jZWwnICsgcGFyYW1zWydrZXknXVwiPnt7IGxhYmVscy5jYW5jZWwgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJwcmltYXJ5XCIgaWNvbj1cImNoZWNrXCIgKGNsaWNrKT1cImNsb3NlKHRydWUpXCIgYXV0b2ZvY3VzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwteWVzLScgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLnllcyB9fTwvYnV0dG9uPlxuICAgICAgICA8L25vdm8tbm90aWZpY2F0aW9uPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xQcm9tcHRNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZiwgcHVibGljIHBhcmFtczogTm92b01vZGFsUGFyYW1zLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBjbG9zZShyZXN1bHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKHJlc3VsdCk7XG4gIH1cbn1cbiJdfQ==