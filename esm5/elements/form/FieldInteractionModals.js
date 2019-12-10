/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FieldInteractionModals.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbk1vZGFscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRTtJQWFFLDZCQUFvQixRQUFzQixFQUFTLE1BQXVCLEVBQVMsTUFBd0I7UUFBdkYsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBRyxDQUFDOzs7OztJQUV4RyxtQ0FBSzs7OztJQUFaLFVBQWEsTUFBZTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFFBQVEsRUFBRSxnMEJBUVA7aUJBQ0o7Ozs7Z0JBZFEsWUFBWTtnQkFBRSxlQUFlO2dCQUM3QixnQkFBZ0I7O0lBb0J6QiwwQkFBQztDQUFBLEFBbEJELElBa0JDO1NBTlksbUJBQW1COzs7Ozs7SUFDbEIsdUNBQThCOztJQUFFLHFDQUE4Qjs7SUFBRSxxQ0FBK0I7O0FBTzdHO0lBWUUsNEJBQW9CLFFBQXNCLEVBQVMsTUFBdUIsRUFBUyxNQUF3QjtRQUF2RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRXhHLGtDQUFLOzs7O0lBQVosVUFBYSxNQUFlO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLDJvQkFPUDtpQkFDSjs7OztnQkFqQ1EsWUFBWTtnQkFBRSxlQUFlO2dCQUM3QixnQkFBZ0I7O0lBdUN6Qix5QkFBQztDQUFBLEFBakJELElBaUJDO1NBTlksa0JBQWtCOzs7Ozs7SUFDakIsc0NBQThCOztJQUFFLG9DQUE4Qjs7SUFBRSxvQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTW9kYWxSZWYsIE5vdm9Nb2RhbFBhcmFtcyB9IGZyb20gJy4uL21vZGFsL01vZGFsJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb250cm9sLWNvbmZpcm0tbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1ub3RpZmljYXRpb24gdHlwZT1cIndhcm5pbmdcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLScgKyBwYXJhbXNbJ2tleSddXCI+XG4gICAgICAgICAgICA8aDE+e3sgbGFiZWxzLmNvbmZpcm1DaGFuZ2VzTW9kYWxNZXNzYWdlIH19PC9oMT5cbiAgICAgICAgICAgIDxoMiAqbmdJZj1cIiFwYXJhbXNbJ21lc3NhZ2UnXVwiPjxsYWJlbD57eyBwYXJhbXNbJ2xhYmVsJ10gfX06PC9sYWJlbD4ge3sgcGFyYW1zWydvbGRWYWx1ZSddIH19IDxpIGNsYXNzPVwiYmhpLWFycm93LXJpZ2h0XCI+PC9pPiB7eyBwYXJhbXNbJ25ld1ZhbHVlJ10gfX08L2gyPlxuICAgICAgICAgICAgPGgyICpuZ0lmPVwicGFyYW1zWydtZXNzYWdlJ11cIj57eyBwYXJhbXNbJ21lc3NhZ2UnXSB9fTwvaDI+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwic3RhbmRhcmRcIiAoY2xpY2spPVwiY2xvc2UoZmFsc2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC1jYW5jZWwnICsgcGFyYW1zWydrZXknXVwiPnt7IGxhYmVscy5jYW5jZWwgfX08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJwcmltYXJ5XCIgaWNvbj1cImNoZWNrXCIgKGNsaWNrKT1cImNsb3NlKHRydWUpXCIgYXV0b2ZvY3VzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtc2F2ZS0nICsgcGFyYW1zWydrZXknXVwiPnt7IGxhYmVscy5zYXZlIH19PC9idXR0b24+XG4gICAgICAgIDwvbm92by1ub3RpZmljYXRpb24+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbmZpcm1Nb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxSZWY6IE5vdm9Nb2RhbFJlZiwgcHVibGljIHBhcmFtczogTm92b01vZGFsUGFyYW1zLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBjbG9zZShyZXN1bHQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsUmVmLmNsb3NlKHJlc3VsdCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29udHJvbC1wcm9tcHQtbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bm92by1ub3RpZmljYXRpb24gdHlwZT1cIndhcm5pbmdcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLScgKyBwYXJhbXNbJ2tleSddXCI+XG4gICAgICAgICAgICA8aDE+e3sgbGFiZWxzLnByb21wdE1vZGFsTWVzc2FnZSB9fTwvaDE+XG4gICAgICAgICAgICA8cCAqbmdGb3I9XCJsZXQgY2hhbmdlIG9mIHBhcmFtc1snY2hhbmdlcyddXCI+e3sgY2hhbmdlIH19PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cInN0YW5kYXJkXCIgKGNsaWNrKT1cImNsb3NlKGZhbHNlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtY2FuY2VsJyArIHBhcmFtc1sna2V5J11cIj57eyBsYWJlbHMuY2FuY2VsIH19PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwicHJpbWFyeVwiIGljb249XCJjaGVja1wiIChjbGljayk9XCJjbG9zZSh0cnVlKVwiIGF1dG9mb2N1cyBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLXllcy0nICsgcGFyYW1zWydrZXknXVwiPnt7IGxhYmVscy55ZXMgfX08L2J1dHRvbj5cbiAgICAgICAgPC9ub3ZvLW5vdGlmaWNhdGlvbj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb250cm9sUHJvbXB0TW9kYWwge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYsIHB1YmxpYyBwYXJhbXM6IE5vdm9Nb2RhbFBhcmFtcywgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBwdWJsaWMgY2xvc2UocmVzdWx0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZShyZXN1bHQpO1xuICB9XG59XG4iXX0=