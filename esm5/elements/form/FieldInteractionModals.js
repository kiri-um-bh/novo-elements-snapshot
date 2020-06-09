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
    var ctx_r0 = i0.ɵɵnextContext();
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
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.params["message"]);
} }
function ControlPromptModal_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var change_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(change_r1);
} }
var ControlConfirmModal = /** @class */ (function () {
    function ControlConfirmModal(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    ControlConfirmModal.prototype.close = function (result) {
        this.modalRef.close(result);
    };
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
    return ControlConfirmModal;
}());
export { ControlConfirmModal };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlConfirmModal, [{
        type: Component,
        args: [{
                selector: 'control-confirm-modal',
                template: "\n        <novo-notification type=\"warning\" [attr.data-automation-id]=\"'field-interaction-modal-' + params['key']\">\n            <h1>{{ labels.confirmChangesModalMessage }}</h1>\n            <h2 *ngIf=\"!params['message']\"><label>{{ params['label'] }}:</label> {{ params['oldValue'] }} <i class=\"bhi-arrow-right\"></i> {{ params['newValue'] }}</h2>\n            <h2 *ngIf=\"params['message']\">{{ params['message'] }}</h2>\n            <button theme=\"standard\" (click)=\"close(false)\" [attr.data-automation-id]=\"'field-interaction-modal-cancel' + params['key']\">{{ labels.cancel }}</button>\n            <button theme=\"primary\" icon=\"check\" (click)=\"close(true)\" autofocus [attr.data-automation-id]=\"'field-interaction-modal-save-' + params['key']\">{{ labels.save }}</button>\n        </novo-notification>\n    ",
            }]
    }], function () { return [{ type: i1.NovoModalRef }, { type: i1.NovoModalParams }, { type: i2.NovoLabelService }]; }, null); })();
var ControlPromptModal = /** @class */ (function () {
    function ControlPromptModal(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    ControlPromptModal.prototype.close = function (result) {
        this.modalRef.close(result);
    };
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
    return ControlPromptModal;
}());
export { ControlPromptModal };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ControlPromptModal, [{
        type: Component,
        args: [{
                selector: 'control-prompt-modal',
                template: "\n        <novo-notification type=\"warning\" [attr.data-automation-id]=\"'field-interaction-modal-' + params['key']\">\n            <h1>{{ labels.promptModalMessage }}</h1>\n            <p *ngFor=\"let change of params['changes']\">{{ change }}</p>\n            <button theme=\"standard\" (click)=\"close(false)\" [attr.data-automation-id]=\"'field-interaction-modal-cancel' + params['key']\">{{ labels.cancel }}</button>\n            <button theme=\"primary\" icon=\"check\" (click)=\"close(true)\" autofocus [attr.data-automation-id]=\"'field-interaction-modal-yes-' + params['key']\">{{ labels.yes }}</button>\n        </novo-notification>\n    ",
            }]
    }], function () { return [{ type: i1.NovoModalRef }, { type: i1.NovoModalParams }, { type: i2.NovoLabelService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbk1vZGFscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsTUFBTTtBQUNOLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7Ozs7SUFPekQsMEJBQStCO0lBQUEsNkJBQU87SUFBQSxZQUFzQjtJQUFBLGlCQUFRO0lBQUMsWUFBeUI7SUFBQSx1QkFBK0I7SUFBQyxZQUF3QjtJQUFBLGlCQUFLOzs7SUFBckgsZUFBc0I7SUFBdEIsc0RBQXNCO0lBQVMsZUFBeUI7SUFBekIsMERBQXlCO0lBQWdDLGVBQXdCO0lBQXhCLHlEQUF3Qjs7O0lBQ3RKLDBCQUE4QjtJQUFBLFlBQXVCO0lBQUEsaUJBQUs7OztJQUE1QixlQUF1QjtJQUF2Qiw4Q0FBdUI7OztJQW1CckQseUJBQTRDO0lBQUEsWUFBWTtJQUFBLGlCQUFJOzs7SUFBaEIsZUFBWTtJQUFaLCtCQUFZOztBQXpCcEU7SUFhRSw2QkFBb0IsUUFBc0IsRUFBUyxNQUF1QixFQUFTLE1BQXdCO1FBQXZGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQztJQUV4RyxtQ0FBSyxHQUFaLFVBQWEsTUFBZTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOzBGQUxVLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lBVHhCLDRDQUNJO1lBQUEsMEJBQUk7WUFBQSxZQUF1QztZQUFBLGlCQUFLO1lBQ2hELGtFQUErQjtZQUMvQixrRUFBOEI7WUFDOUIsaUNBQTZIO1lBQXBHLGdHQUFTLFVBQU0sS0FBSyxDQUFDLElBQUM7WUFBOEUsWUFBbUI7WUFBQSxpQkFBUztZQUN6SixpQ0FBaUo7WUFBNUcsZ0dBQVMsVUFBTSxJQUFJLENBQUMsSUFBQztZQUF1RixZQUFpQjtZQUFBLGlCQUFTO1lBQy9LLGlCQUFvQjs7WUFOYyxvRkFBc0U7WUFDaEcsZUFBdUM7WUFBdkMsMkRBQXVDO1lBQ3ZDLGVBQTBCO1lBQTFCLDZDQUEwQjtZQUMxQixlQUF5QjtZQUF6Qiw0Q0FBeUI7WUFDbUIsZUFBNEU7WUFBNUUsMEZBQTRFO1lBQUMsZUFBbUI7WUFBbkIsdUNBQW1CO1lBQzNFLGVBQTJFO1lBQTNFLHlGQUEyRTtZQUFDLGVBQWlCO1lBQWpCLHFDQUFpQjs7OEJBZDlLO0NBd0JDLEFBbEJELElBa0JDO1NBTlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FaL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRSxnMEJBUVA7YUFDSjs7QUFTRDtJQVlFLDRCQUFvQixRQUFzQixFQUFTLE1BQXVCLEVBQVMsTUFBd0I7UUFBdkYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDO0lBRXhHLGtDQUFLLEdBQVosVUFBYSxNQUFlO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7d0ZBTFUsa0JBQWtCOzJEQUFsQixrQkFBa0I7WUFSdkIsNENBQ0k7WUFBQSwwQkFBSTtZQUFBLFlBQStCO1lBQUEsaUJBQUs7WUFDeEMsK0RBQTRDO1lBQzVDLGlDQUE2SDtZQUFwRywrRkFBUyxVQUFNLEtBQUssQ0FBQyxJQUFDO1lBQThFLFlBQW1CO1lBQUEsaUJBQVM7WUFDekosaUNBQWdKO1lBQTNHLCtGQUFTLFVBQU0sSUFBSSxDQUFDLElBQUM7WUFBc0YsWUFBZ0I7WUFBQSxpQkFBUztZQUM3SyxpQkFBb0I7O1lBTGMsb0ZBQXNFO1lBQ2hHLGVBQStCO1lBQS9CLG1EQUErQjtZQUNoQyxlQUF3QztZQUF4QywrQ0FBd0M7WUFDSyxlQUE0RTtZQUE1RSwwRkFBNEU7WUFBQyxlQUFtQjtZQUFuQix1Q0FBbUI7WUFDM0UsZUFBMEU7WUFBMUUsd0ZBQTBFO1lBQUMsZUFBZ0I7WUFBaEIsb0NBQWdCOzs2QkFqQzVLO0NBMkNDLEFBakJELElBaUJDO1NBTlksa0JBQWtCO2tEQUFsQixrQkFBa0I7Y0FYOUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSwyb0JBT1A7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Nb2RhbFJlZiwgTm92b01vZGFsUGFyYW1zIH0gZnJvbSAnLi4vbW9kYWwvTW9kYWwnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRyb2wtY29uZmlybS1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLW5vdGlmaWNhdGlvbiB0eXBlPVwid2FybmluZ1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtJyArIHBhcmFtc1sna2V5J11cIj5cbiAgICAgICAgICAgIDxoMT57eyBsYWJlbHMuY29uZmlybUNoYW5nZXNNb2RhbE1lc3NhZ2UgfX08L2gxPlxuICAgICAgICAgICAgPGgyICpuZ0lmPVwiIXBhcmFtc1snbWVzc2FnZSddXCI+PGxhYmVsPnt7IHBhcmFtc1snbGFiZWwnXSB9fTo8L2xhYmVsPiB7eyBwYXJhbXNbJ29sZFZhbHVlJ10gfX0gPGkgY2xhc3M9XCJiaGktYXJyb3ctcmlnaHRcIj48L2k+IHt7IHBhcmFtc1snbmV3VmFsdWUnXSB9fTwvaDI+XG4gICAgICAgICAgICA8aDIgKm5nSWY9XCJwYXJhbXNbJ21lc3NhZ2UnXVwiPnt7IHBhcmFtc1snbWVzc2FnZSddIH19PC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJzdGFuZGFyZFwiIChjbGljayk9XCJjbG9zZShmYWxzZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLWNhbmNlbCcgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLmNhbmNlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBpY29uPVwiY2hlY2tcIiAoY2xpY2spPVwiY2xvc2UodHJ1ZSlcIiBhdXRvZm9jdXMgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1zYXZlLScgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLnNhdmUgfX08L2J1dHRvbj5cbiAgICAgICAgPC9ub3ZvLW5vdGlmaWNhdGlvbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29uZmlybU1vZGFsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwdWJsaWMgcGFyYW1zOiBOb3ZvTW9kYWxQYXJhbXMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGNsb3NlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UocmVzdWx0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb250cm9sLXByb21wdC1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLW5vdGlmaWNhdGlvbiB0eXBlPVwid2FybmluZ1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtJyArIHBhcmFtc1sna2V5J11cIj5cbiAgICAgICAgICAgIDxoMT57eyBsYWJlbHMucHJvbXB0TW9kYWxNZXNzYWdlIH19PC9oMT5cbiAgICAgICAgICAgIDxwICpuZ0Zvcj1cImxldCBjaGFuZ2Ugb2YgcGFyYW1zWydjaGFuZ2VzJ11cIj57eyBjaGFuZ2UgfX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic3RhbmRhcmRcIiAoY2xpY2spPVwiY2xvc2UoZmFsc2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1jYW5jZWwnICsgcGFyYW1zWydrZXknXVwiPnt7IGxhYmVscy5jYW5jZWwgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJwcmltYXJ5XCIgaWNvbj1cImNoZWNrXCIgKGNsaWNrKT1cImNsb3NlKHRydWUpXCIgYXV0b2ZvY3VzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwteWVzLScgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLnllcyB9fTwvYnV0dG9uPlxuICAgICAgICA8L25vdm8tbm90aWZpY2F0aW9uPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xQcm9tcHRNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZiwgcHVibGljIHBhcmFtczogTm92b01vZGFsUGFyYW1zLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBjbG9zZShyZXN1bHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKHJlc3VsdCk7XG4gIH1cbn1cbiJdfQ==