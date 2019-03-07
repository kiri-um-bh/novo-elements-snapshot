/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component } from '@angular/core';
// APP
import { NovoModalRef, NovoModalParams } from '../modal/Modal';
import { NovoLabelService } from '../../services/novo-label-service';
export class ControlConfirmModal {
    /**
     * @param {?} modalRef
     * @param {?} params
     * @param {?} labels
     */
    constructor(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    close(result) {
        this.modalRef.close(result);
    }
}
ControlConfirmModal.decorators = [
    { type: Component, args: [{
                selector: 'control-confirm-modal',
                template: `
        <novo-notification type="warning" [attr.data-automation-id]="'field-interaction-modal-' + params['key']">
            <h1>{{ labels.confirmChangesModalMessage }}</h1>
            <h2 *ngIf="!params['message']"><label>{{ params['label'] }}:</label> {{ params['oldValue'] }} <i class="bhi-arrow-right"></i> {{ params['newValue'] }}</h2>
            <h2 *ngIf="params['message']">{{ params['message'] }}</h2>
            <button theme="standard" (click)="close(false)" [attr.data-automation-id]="'field-interaction-modal-cancel' + params['key']">{{ labels.cancel }}</button>
            <button theme="primary" icon="check" (click)="close(true)" autofocus [attr.data-automation-id]="'field-interaction-modal-save-' + params['key']">{{ labels.save }}</button>
        </novo-notification>
    `
            }] }
];
ControlConfirmModal.ctorParameters = () => [
    { type: NovoModalRef },
    { type: NovoModalParams },
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    ControlConfirmModal.prototype.modalRef;
    /** @type {?} */
    ControlConfirmModal.prototype.params;
    /** @type {?} */
    ControlConfirmModal.prototype.labels;
}
export class ControlPromptModal {
    /**
     * @param {?} modalRef
     * @param {?} params
     * @param {?} labels
     */
    constructor(modalRef, params, labels) {
        this.modalRef = modalRef;
        this.params = params;
        this.labels = labels;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    close(result) {
        this.modalRef.close(result);
    }
}
ControlPromptModal.decorators = [
    { type: Component, args: [{
                selector: 'control-prompt-modal',
                template: `
        <novo-notification type="warning" [attr.data-automation-id]="'field-interaction-modal-' + params['key']">
            <h1>{{ labels.promptModalMessage }}</h1>
            <p *ngFor="let change of params['changes']">{{ change }}</p>
            <button theme="standard" (click)="close(false)" [attr.data-automation-id]="'field-interaction-modal-cancel' + params['key']">{{ labels.cancel }}</button>
            <button theme="primary" icon="check" (click)="close(true)" autofocus [attr.data-automation-id]="'field-interaction-modal-yes-' + params['key']">{{ labels.yes }}</button>
        </novo-notification>
    `
            }] }
];
ControlPromptModal.ctorParameters = () => [
    { type: NovoModalRef },
    { type: NovoModalParams },
    { type: NovoLabelService }
];
if (false) {
    /** @type {?} */
    ControlPromptModal.prototype.modalRef;
    /** @type {?} */
    ControlPromptModal.prototype.params;
    /** @type {?} */
    ControlPromptModal.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmllbGRJbnRlcmFjdGlvbk1vZGFscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL0ZpZWxkSW50ZXJhY3Rpb25Nb2RhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUxQyxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBY3JFLE1BQU07Ozs7OztJQUNKLFlBQW9CLFFBQXNCLEVBQVMsTUFBdUIsRUFBUyxNQUF3QjtRQUF2RixhQUFRLEdBQVIsUUFBUSxDQUFjO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUFHLENBQUM7Ozs7O0lBRXhHLEtBQUssQ0FBQyxNQUFlO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7OztZQWpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFOzs7Ozs7OztLQVFQO2FBQ0o7OztZQWRRLFlBQVk7WUFBRSxlQUFlO1lBQzdCLGdCQUFnQjs7OztJQWVYLHVDQUE4Qjs7SUFBRSxxQ0FBOEI7O0lBQUUscUNBQStCOztBQWtCN0csTUFBTTs7Ozs7O0lBQ0osWUFBb0IsUUFBc0IsRUFBUyxNQUF1QixFQUFTLE1BQXdCO1FBQXZGLGFBQVEsR0FBUixRQUFRLENBQWM7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQUcsQ0FBQzs7Ozs7SUFFeEcsS0FBSyxDQUFDLE1BQWU7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7S0FPUDthQUNKOzs7WUFqQ1EsWUFBWTtZQUFFLGVBQWU7WUFDN0IsZ0JBQWdCOzs7O0lBa0NYLHNDQUE4Qjs7SUFBRSxvQ0FBOEI7O0lBQUUsb0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b01vZGFsUmVmLCBOb3ZvTW9kYWxQYXJhbXMgfSBmcm9tICcuLi9tb2RhbC9Nb2RhbCc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29udHJvbC1jb25maXJtLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbm90aWZpY2F0aW9uIHR5cGU9XCJ3YXJuaW5nXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC0nICsgcGFyYW1zWydrZXknXVwiPlxuICAgICAgICAgICAgPGgxPnt7IGxhYmVscy5jb25maXJtQ2hhbmdlc01vZGFsTWVzc2FnZSB9fTwvaDE+XG4gICAgICAgICAgICA8aDIgKm5nSWY9XCIhcGFyYW1zWydtZXNzYWdlJ11cIj48bGFiZWw+e3sgcGFyYW1zWydsYWJlbCddIH19OjwvbGFiZWw+IHt7IHBhcmFtc1snb2xkVmFsdWUnXSB9fSA8aSBjbGFzcz1cImJoaS1hcnJvdy1yaWdodFwiPjwvaT4ge3sgcGFyYW1zWyduZXdWYWx1ZSddIH19PC9oMj5cbiAgICAgICAgICAgIDxoMiAqbmdJZj1cInBhcmFtc1snbWVzc2FnZSddXCI+e3sgcGFyYW1zWydtZXNzYWdlJ10gfX08L2gyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cInN0YW5kYXJkXCIgKGNsaWNrKT1cImNsb3NlKGZhbHNlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmllbGQtaW50ZXJhY3Rpb24tbW9kYWwtY2FuY2VsJyArIHBhcmFtc1sna2V5J11cIj57eyBsYWJlbHMuY2FuY2VsIH19PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwicHJpbWFyeVwiIGljb249XCJjaGVja1wiIChjbGljayk9XCJjbG9zZSh0cnVlKVwiIGF1dG9mb2N1cyBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLXNhdmUtJyArIHBhcmFtc1sna2V5J11cIj57eyBsYWJlbHMuc2F2ZSB9fTwvYnV0dG9uPlxuICAgICAgICA8L25vdm8tbm90aWZpY2F0aW9uPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb25maXJtTW9kYWwge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsUmVmOiBOb3ZvTW9kYWxSZWYsIHB1YmxpYyBwYXJhbXM6IE5vdm9Nb2RhbFBhcmFtcywgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBwdWJsaWMgY2xvc2UocmVzdWx0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFJlZi5jbG9zZShyZXN1bHQpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbnRyb2wtcHJvbXB0LW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5vdm8tbm90aWZpY2F0aW9uIHR5cGU9XCJ3YXJuaW5nXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC0nICsgcGFyYW1zWydrZXknXVwiPlxuICAgICAgICAgICAgPGgxPnt7IGxhYmVscy5wcm9tcHRNb2RhbE1lc3NhZ2UgfX08L2gxPlxuICAgICAgICAgICAgPHAgKm5nRm9yPVwibGV0IGNoYW5nZSBvZiBwYXJhbXNbJ2NoYW5nZXMnXVwiPnt7IGNoYW5nZSB9fTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJzdGFuZGFyZFwiIChjbGljayk9XCJjbG9zZShmYWxzZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpZWxkLWludGVyYWN0aW9uLW1vZGFsLWNhbmNlbCcgKyBwYXJhbXNbJ2tleSddXCI+e3sgbGFiZWxzLmNhbmNlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBpY29uPVwiY2hlY2tcIiAoY2xpY2spPVwiY2xvc2UodHJ1ZSlcIiBhdXRvZm9jdXMgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWVsZC1pbnRlcmFjdGlvbi1tb2RhbC15ZXMtJyArIHBhcmFtc1sna2V5J11cIj57eyBsYWJlbHMueWVzIH19PC9idXR0b24+XG4gICAgICAgIDwvbm92by1ub3RpZmljYXRpb24+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbFByb21wdE1vZGFsIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFJlZjogTm92b01vZGFsUmVmLCBwdWJsaWMgcGFyYW1zOiBOb3ZvTW9kYWxQYXJhbXMsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGNsb3NlKHJlc3VsdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubW9kYWxSZWYuY2xvc2UocmVzdWx0KTtcbiAgfVxufVxuIl19