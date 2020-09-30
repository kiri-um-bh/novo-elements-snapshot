/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams } from '../modal/Modal';
import { NovoLabelService } from '../../services/novo-label-service';
var ControlConfirmModal = /** @class */ (function () {
    function ControlConfirmModal(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    ControlConfirmModal.prototype.close = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.modalRef.close(result);
    };
    ControlConfirmModal.decorators = [
        { type: Component, args: [{
                    selector: 'control-confirm-modal',
                    template: "\n        <novo-notification type=\"warning\" [attr.data-automation-id]=\"'field-interaction-modal-' + params['key']\">\n            <h1>{{ labels.confirmChangesModalMessage }}</h1>\n            <h2 *ngIf=\"!params['message']\"><label>{{ params['label'] }}:</label> {{ params['oldValue'] }} <i class=\"bhi-arrow-right\"></i> {{ params['newValue'] }}</h2>\n            <h2 *ngIf=\"params['message']\">{{ params['message'] }}</h2>\n            <button theme=\"standard\" (click)=\"close(false)\" [attr.data-automation-id]=\"'field-interaction-modal-cancel' + params['key']\">{{ labels.cancel }}</button>\n            <button theme=\"primary\" icon=\"check\" (click)=\"close(true)\" autofocus [attr.data-automation-id]=\"'field-interaction-modal-save-' + params['key']\">{{ labels.save }}</button>\n        </novo-notification>\n    "
                }] }
    ];
    /** @nocollapse */
    ControlConfirmModal.ctorParameters = function () { return [
        { type: NovoModalRef },
        { type: NovoModalParams },
        { type: NovoLabelService }
    ]; };
    return ControlConfirmModal;
}());
export { ControlConfirmModal };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ControlConfirmModal.prototype.modalRef;
    /** @type {?} */
    ControlConfirmModal.prototype.params;
    /** @type {?} */
    ControlConfirmModal.prototype.labels;
}
var ControlPromptModal = /** @class */ (function () {
    function ControlPromptModal(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    ControlPromptModal.prototype.close = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.modalRef.close(result);
    };
    ControlPromptModal.decorators = [
        { type: Component, args: [{
                    selector: 'control-prompt-modal',
                    template: "\n        <novo-notification type=\"warning\" [attr.data-automation-id]=\"'field-interaction-modal-' + params['key']\">\n            <h1>{{ labels.promptModalMessage }}</h1>\n            <p *ngFor=\"let change of params['changes']\">{{ change }}</p>\n            <button theme=\"standard\" (click)=\"close(false)\" [attr.data-automation-id]=\"'field-interaction-modal-cancel' + params['key']\">{{ labels.cancel }}</button>\n            <button theme=\"primary\" icon=\"check\" (click)=\"close(true)\" autofocus [attr.data-automation-id]=\"'field-interaction-modal-yes-' + params['key']\">{{ labels.yes }}</button>\n        </novo-notification>\n    "
                }] }
    ];
    /** @nocollapse */
    ControlPromptModal.ctorParameters = function () { return [
        { type: NovoModalRef },
        { type: NovoModalParams },
        { type: NovoLabelService }
    ]; };
    return ControlPromptModal;
}());
export { ControlPromptModal };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ControlPromptModal.prototype.modalRef;
    /** @type {?} */
    ControlPromptModal.prototype.params;
    /** @type {?} */
    ControlPromptModal.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbk1vZGFscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFO0lBYUUsNkJBQW9CLFFBQXNCLEVBQVMsTUFBdUIsRUFBUyxNQUF3QjtRQUF2RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRXhHLG1DQUFLOzs7O0lBQVosVUFBYSxNQUFlO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsUUFBUSxFQUFFLGcwQkFRUDtpQkFDSjs7OztnQkFkUSxZQUFZO2dCQUFFLGVBQWU7Z0JBQzdCLGdCQUFnQjs7SUFvQnpCLDBCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FOWSxtQkFBbUI7Ozs7OztJQUNsQix1Q0FBOEI7O0lBQUUscUNBQThCOztJQUFFLHFDQUErQjs7QUFPN0c7SUFZRSw0QkFBb0IsUUFBc0IsRUFBUyxNQUF1QixFQUFTLE1BQXdCO1FBQXZGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7SUFFeEcsa0NBQUs7Ozs7SUFBWixVQUFhLE1BQWU7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMm9CQU9QO2lCQUNKOzs7O2dCQWpDUSxZQUFZO2dCQUFFLGVBQWU7Z0JBQzdCLGdCQUFnQjs7SUF1Q3pCLHlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FOWSxrQkFBa0I7Ozs7OztJQUNqQixzQ0FBOEI7O0lBQUUsb0NBQThCOztJQUFFLG9DQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Nb2RhbFJlZiwgTm92b01vZGFsUGFyYW1zIH0gZnJvbSAnLi4vbW9kYWwvTW9kYWwnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRyb2wtY29uZmlybS1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLW5vdGlmaWNhdGlvbiB0eXBlPVwid2FybmluZ1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtJyArIHBhcmFtc1sna2V5J11cIj5cbiAgICAgICAgICAgIDxoMT57eyBsYWJlbHMuY29uZmlybUNoYW5nZXNNb2RhbE1lc3NhZ2UgfX08L2gxPlxuICAgICAgICAgICAgPGgyICpuZ0lmPVwiIXBhcmFtc1snbWVzc2FnZSddXCI+PGxhYmVsPnt7IHBhcmFtc1snbGFiZWwnXSB9fTo8L2xhYmVsPiB7eyBwYXJhbXNbJ29sZFZhbHVlJ10gfX0gPGkgY2xhc3M9XCJiaGktYXJyb3ctcmlnaHRcIj48L2k+IHt7IHBhcmFtc1snbmV3VmFsdWUnXSB9fTwvaDI+XG4gICAgICAgICAgICA8aDIgKm5nSWY9XCJwYXJhbXNbJ21lc3NhZ2UnXVwiPnt7IHBhcmFtc1snbWVzc2FnZSddIH19PC9oMj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJzdGFuZGFyZFwiIChjbGljayk9XCJjbG9zZShmYWxzZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLWNhbmNlbCcgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLmNhbmNlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBpY29uPVwiY2hlY2tcIiAoY2xpY2spPVwiY2xvc2UodHJ1ZSlcIiBhdXRvZm9jdXMgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1zYXZlLScgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLnNhdmUgfX08L2J1dHRvbj5cbiAgICAgICAgPC9ub3ZvLW5vdGlmaWNhdGlvbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29uZmlybU1vZGFsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwdWJsaWMgcGFyYW1zOiBOb3ZvTW9kYWxQYXJhbXMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGNsb3NlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UocmVzdWx0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb250cm9sLXByb21wdC1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxub3ZvLW5vdGlmaWNhdGlvbiB0eXBlPVwid2FybmluZ1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtJyArIHBhcmFtc1sna2V5J11cIj5cbiAgICAgICAgICAgIDxoMT57eyBsYWJlbHMucHJvbXB0TW9kYWxNZXNzYWdlIH19PC9oMT5cbiAgICAgICAgICAgIDxwICpuZ0Zvcj1cImxldCBjaGFuZ2Ugb2YgcGFyYW1zWydjaGFuZ2VzJ11cIj57eyBjaGFuZ2UgfX08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic3RhbmRhcmRcIiAoY2xpY2spPVwiY2xvc2UoZmFsc2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1jYW5jZWwnICsgcGFyYW1zWydrZXknXVwiPnt7IGxhYmVscy5jYW5jZWwgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJwcmltYXJ5XCIgaWNvbj1cImNoZWNrXCIgKGNsaWNrKT1cImNsb3NlKHRydWUpXCIgYXV0b2ZvY3VzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwteWVzLScgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLnllcyB9fTwvYnV0dG9uPlxuICAgICAgICA8L25vdm8tbm90aWZpY2F0aW9uPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xQcm9tcHRNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZiwgcHVibGljIHBhcmFtczogTm92b01vZGFsUGFyYW1zLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBjbG9zZShyZXN1bHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKHJlc3VsdCk7XG4gIH1cbn1cbiJdfQ==