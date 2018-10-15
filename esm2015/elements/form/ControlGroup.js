/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, TemplateRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { NovoFormGroup } from './NovoFormControl';
import { BaseControl } from './controls/BaseControl';
import { FormUtils } from './../../utils/form-utils/FormUtils';
import { Helpers } from '../../utils/Helpers';
import { NovoLabelService } from '../../services/novo-label-service';
/**
 * @record
 */
export function NovoControlGroupAddConfig() { }
if (false) {
    /** @type {?} */
    NovoControlGroupAddConfig.prototype.label;
}
export class NovoControlGroup {
    /**
     * @param {?} formUtils
     * @param {?} fb
     * @param {?} ref
     * @param {?} labels
     */
    constructor(formUtils, fb, ref, labels) {
        this.formUtils = formUtils;
        this.fb = fb;
        this.ref = ref;
        this.labels = labels;
        this._vertical = false;
        this._remove = false;
        this._edit = false;
        this._collapsible = false;
        this.onRemove = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.controlLabels = [];
        this.toggled = false;
        this.disabledArray = [];
        this.currentIndex = 0;
    }
    // Sets the display of the group to either be row (default) or vertical via flex-box
    /**
     * @param {?} v
     * @return {?}
     */
    set vertical(v) {
        this._vertical = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    // Hide/shows the remove button for removing a control
    /**
     * @param {?} v
     * @return {?}
     */
    set remove(v) {
        this._remove = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get remove() {
        return this._remove;
    }
    // Hide/shows the edit button for editing a control
    /**
     * @param {?} v
     * @return {?}
     */
    set edit(v) {
        this._edit = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get edit() {
        return this._edit;
    }
    // Allows the control to collapse or not
    /**
     * @param {?} v
     * @return {?}
     */
    set collapsible(v) {
        this._collapsible = coerceBooleanProperty(v);
    }
    /**
     * @return {?}
     */
    get collapsible() {
        return this._collapsible;
    }
    // Icon of the control group (can have bhi prefix or not)
    /**
     * @param {?} v
     * @return {?}
     */
    set icon(v) {
        this._icon = v && v.indexOf('bhi') !== -1 ? v : `bhi-${v}`;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (!this.key) {
            throw new Error('novo-control-group must have the [key] attribute provided!');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        let initialValueChange = changes['initialValue'];
        // If initial value changes, clear the controls
        if (initialValueChange && initialValueChange.currentValue !== initialValueChange.previousValue && !initialValueChange.firstChange) {
            this.clearControls();
        }
        // Check for array, add a control for each value
        if (this.initialValue && Array.isArray(this.initialValue)) {
            if (this.initialValue.length !== 0) {
                this.currentIndex = 0;
                this.initialValue.forEach((value) => this.addNewControl(value));
            }
        }
        else if (this.initialValue) {
            // If value is an object, just add one control
            this.addNewControl(this.initialValue);
        }
        // If we are horizontal, grab the labels to help with layout
        if (!this.vertical) {
            this.controlLabels = (this.controls || []).map((control) => {
                return {
                    value: control.label,
                    width: control.width,
                };
            });
            this.ref.markForCheck();
        }
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    addNewControl(value) {
        /** @type {?} */
        const control = (/** @type {?} */ (this.form.controls[this.key]));
        /** @type {?} */
        const newCtrl = this.buildControl(value);
        if (control) {
            control.push(newCtrl);
        }
        else {
            this.form.addControl(this.key, this.fb.array([newCtrl]));
        }
        this.disabledArray.push({
            edit: this.checkCanEdit(this.currentIndex),
            remove: this.checkCanRemove(this.currentIndex),
        });
        if (!value) {
            this.onAdd.emit();
        }
        this.currentIndex++;
        this.ref.markForCheck();
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    buildControl(value) {
        /** @type {?} */
        const newControls = this.getNewControls(this.controls);
        if (value) {
            this.formUtils.setInitialValues(newControls, value);
        }
        /** @type {?} */
        const ctrl = this.formUtils.toFormGroup(newControls);
        return ctrl;
    }
    /**
     * @param {?} index
     * @param {?=} emitEvent
     * @return {?}
     */
    removeControl(index, emitEvent = true) {
        /** @type {?} */
        const control = (/** @type {?} */ (this.form.controls[this.key]));
        if (emitEvent) {
            this.onRemove.emit({ value: control.at(index).value, index: index });
        }
        control.removeAt(index);
        this.ref.markForCheck();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    editControl(index) {
        /** @type {?} */
        const control = (/** @type {?} */ (this.form.controls[this.key]));
        this.onEdit.emit({ value: control.at(index).value, index: index });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        Helpers.swallowEvent(event);
        if (this.collapsible) {
            this.toggled = !this.toggled;
            this.ref.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    clearControls() {
        /** @type {?} */
        const control = (/** @type {?} */ (this.form.controls[this.key]));
        if (control) {
            for (let i = control.controls.length; i >= 0; i--) {
                this.removeControl(i, false);
            }
            this.currentIndex = 0;
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    checkCanEdit(index) {
        if (this.canEdit) {
            /** @type {?} */
            const control = (/** @type {?} */ (this.form.controls[this.key]));
            return this.canEdit(control.at(index).value, index);
        }
        return true;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    checkCanRemove(index) {
        if (this.canRemove) {
            /** @type {?} */
            const control = (/** @type {?} */ (this.form.controls[this.key]));
            return this.canRemove(control.at(index).value, index);
        }
        return true;
    }
    /**
     * @param {?} controls
     * @return {?}
     */
    getNewControls(controls) {
        /** @type {?} */
        let ret = [];
        (this.controls || []).forEach((control) => {
            ret.push(new BaseControl(control.__type, control));
        });
        return ret;
    }
}
NovoControlGroup.decorators = [
    { type: Component, args: [{
                selector: 'novo-control-group',
                template: `
        <h6 class="novo-section-header" *ngIf="label">
            <span (click)="toggle($event)" [class.clickable]="collapsible">
                <i *ngIf="icon && !collapsible" [ngClass]="icon" [attr.data-automation-id]="'novo-control-group-icon-' + key"></i>
                <i *ngIf="collapsible" class="bhi-next" [class.toggled]="toggled" [attr.data-automation-id]="'novo-control-group-collapse-' + key"></i>
                <span [attr.data-automation-id]="'novo-control-group-label-' + key">{{ label }}</span>
            </span>
            <label class="novo-control-group-description" *ngIf="description" [attr.data-automation-id]="'novo-control-group-description-' + key">{{ description }}</label>
        </h6>
        <div class="novo-control-group-controls" [class.vertical]="vertical" [class.horizontal]="!vertical" [class.hidden]="collapsible && !toggled">
            <ng-template #defaultTemplate let-index="index" let-form="form" let-key="key">
                <div class="novo-control-group-control">
                    <div *ngFor="let c of controls" class="novo-control-container" [class.is-label]="c.controlType === 'read-only'" [style.max-width.px]="c.width">
                        <novo-control [form]="form?.controls[key]['controls'][index]" [control]="c" [condensed]="!vertical || c.controlType === 'read-only'"></novo-control>
                    </div>
                    <div class="novo-control-container last" *ngIf="edit && !vertical">
                        <button [disabled]="!disabledArray[index].edit" type="button" *ngIf="edit && !vertical" theme="icon" icon="edit" (click)="editControl(index)" [attr.data-automation-id]="'novo-control-group-edit-' + key" index="-1"></button>
                    </div>
                    <div class="novo-control-container last" *ngIf="remove && !vertical">
                        <button [disabled]="!disabledArray[index].remove" type="button" *ngIf="remove && !vertical" theme="icon" icon="delete-o" (click)="removeControl(index)" [attr.data-automation-id]="'novo-control-group-delete-' + key" index="-1"></button>
                    </div>
                </div>
                <button [disabled]="!disabledArray[index].edit" type="button" *ngIf="edit && vertical" theme="icon" icon="edit" (click)="editControl(index)" [attr.data-automation-id]="'novo-control-group-edit-' + key" index="-1"></button>
                <button [disabled]="!disabledArray[index].remove" type="button" *ngIf="remove && vertical" theme="icon" icon="delete-o" (click)="removeControl(index)" [attr.data-automation-id]="'novo-control-group-delete-' + key" index="-1"></button>
            </ng-template>
            <div class="novo-control-group-labels" *ngIf="!vertical && form?.controls[key] && form?.controls[key]['controls'].length !== 0">
                <div class="novo-control-group-control-label" *ngFor="let label of controlLabels" [style.max-width.px]="label.width">
                    <span [attr.data-automation-id]="'novo-control-group-label-' + label.value">{{ label.value }}</span>
                </div>
                <div class="novo-control-group-control-label last" *ngIf="edit" [attr.data-automation-id]="'novo-control-group-edit-' + key"></div>
                <div class="novo-control-group-control-label last" *ngIf="remove" [attr.data-automation-id]="'novo-control-group-delete-' + key"></div>
            </div>
            <ng-container *ngIf="form?.controls[key]">
                <div class="novo-control-group-row" *ngFor="let control of form?.controls[key]['controls']; let index = index;">
                    <ng-template
                        [ngTemplateOutlet]="rowTemplate || defaultTemplate"
                        [ngTemplateOutletContext]="{form: form, index: index, key: key, controls: controls}">
                    </ng-template>
                </div>
            </ng-container>
            <div class="novo-control-group-empty" *ngIf="form?.controls[key] && form?.controls[key]['controls'].length === 0" [attr.data-automation-id]="'novo-control-group-empty-' + key">
                {{ emptyMessage }}
            </div>
            <p *ngIf="add">
                <button type="button" theme="dialogue" icon="add-thin" (click)="addNewControl()" [attr.data-automation-id]="'novo-control-group-bottom-add-' + key" index="-1">{{ add?.label }}</button>
            </p>
        </div>
   `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
NovoControlGroup.ctorParameters = () => [
    { type: FormUtils },
    { type: FormBuilder },
    { type: ChangeDetectorRef },
    { type: NovoLabelService }
];
NovoControlGroup.propDecorators = {
    vertical: [{ type: Input }],
    add: [{ type: Input }],
    remove: [{ type: Input }],
    edit: [{ type: Input }],
    collapsible: [{ type: Input }],
    form: [{ type: Input }],
    controls: [{ type: Input }],
    key: [{ type: Input }],
    label: [{ type: Input }],
    description: [{ type: Input }],
    emptyMessage: [{ type: Input }],
    icon: [{ type: Input }],
    initialValue: [{ type: Input }],
    canEdit: [{ type: Input }],
    canRemove: [{ type: Input }],
    rowTemplate: [{ type: Input }],
    onRemove: [{ type: Output }],
    onEdit: [{ type: Output }],
    onAdd: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoControlGroup.prototype._vertical;
    /** @type {?} */
    NovoControlGroup.prototype.add;
    /** @type {?} */
    NovoControlGroup.prototype._remove;
    /** @type {?} */
    NovoControlGroup.prototype._edit;
    /** @type {?} */
    NovoControlGroup.prototype._collapsible;
    /** @type {?} */
    NovoControlGroup.prototype.form;
    /** @type {?} */
    NovoControlGroup.prototype.controls;
    /** @type {?} */
    NovoControlGroup.prototype.key;
    /** @type {?} */
    NovoControlGroup.prototype.label;
    /** @type {?} */
    NovoControlGroup.prototype.description;
    /** @type {?} */
    NovoControlGroup.prototype.emptyMessage;
    /** @type {?} */
    NovoControlGroup.prototype._icon;
    /** @type {?} */
    NovoControlGroup.prototype.initialValue;
    /** @type {?} */
    NovoControlGroup.prototype.canEdit;
    /** @type {?} */
    NovoControlGroup.prototype.canRemove;
    /** @type {?} */
    NovoControlGroup.prototype.rowTemplate;
    /** @type {?} */
    NovoControlGroup.prototype.onRemove;
    /** @type {?} */
    NovoControlGroup.prototype.onEdit;
    /** @type {?} */
    NovoControlGroup.prototype.onAdd;
    /** @type {?} */
    NovoControlGroup.prototype.controlLabels;
    /** @type {?} */
    NovoControlGroup.prototype.toggled;
    /** @type {?} */
    NovoControlGroup.prototype.disabledArray;
    /** @type {?} */
    NovoControlGroup.prototype.currentIndex;
    /** @type {?} */
    NovoControlGroup.prototype.formUtils;
    /** @type {?} */
    NovoControlGroup.prototype.fb;
    /** @type {?} */
    NovoControlGroup.prototype.ref;
    /** @type {?} */
    NovoControlGroup.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUdOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsWUFBWSxHQUliLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFtQixNQUFNLG1CQUFtQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDL0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7O0FBRXJFLCtDQUVDOzs7SUFEQywwQ0FBYzs7QUF1RGhCLE1BQU07Ozs7Ozs7SUE2RkosWUFBb0IsU0FBb0IsRUFBVSxFQUFlLEVBQVUsR0FBc0IsRUFBVSxNQUF3QjtRQUEvRyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFwRjNILGNBQVMsR0FBWSxLQUFLLENBQUM7UUFZM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVN6QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBU3ZCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBMEMvQixhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7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LGlDQUNjOztJQUVkLHVDQUNvQjs7SUFFcEIsd0NBQ3FCOztJQVNyQixpQ0FBc0I7O0lBRXRCLHdDQUNtQjs7SUFFbkIsbUNBQ2tCOztJQUVsQixxQ0FDb0I7O0lBRXBCLHVDQUM4Qjs7SUFFOUIsb0NBQzZEOztJQUM3RCxrQ0FDMkQ7O0lBQzNELGlDQUMwRDs7SUFFMUQseUNBQThEOztJQUM5RCxtQ0FBZ0M7O0lBQ2hDLHlDQUFnRTs7SUFFaEUsd0NBQWlDOztJQUVyQixxQ0FBNEI7O0lBQUUsOEJBQXVCOztJQUFFLCtCQUE4Qjs7SUFBRSxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcblxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCwgTm92b0Zvcm1Db250cm9sIH0gZnJvbSAnLi9Ob3ZvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2xzL0Jhc2VDb250cm9sJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZyB7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29udHJvbC1ncm91cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNiBjbGFzcz1cIm5vdm8tc2VjdGlvbi1oZWFkZXJcIiAqbmdJZj1cImxhYmVsXCI+XG4gICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwidG9nZ2xlKCRldmVudClcIiBbY2xhc3MuY2xpY2thYmxlXT1cImNvbGxhcHNpYmxlXCI+XG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJpY29uICYmICFjb2xsYXBzaWJsZVwiIFtuZ0NsYXNzXT1cImljb25cIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1pY29uLScgKyBrZXlcIj48L2k+XG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJjb2xsYXBzaWJsZVwiIGNsYXNzPVwiYmhpLW5leHRcIiBbY2xhc3MudG9nZ2xlZF09XCJ0b2dnbGVkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtY29sbGFwc2UtJyArIGtleVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1sYWJlbC0nICsga2V5XCI+e3sgbGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtZGVzY3JpcHRpb25cIiAqbmdJZj1cImRlc2NyaXB0aW9uXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZGVzY3JpcHRpb24tJyArIGtleVwiPnt7IGRlc2NyaXB0aW9uIH19PC9sYWJlbD5cbiAgICAgICAgPC9oNj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sc1wiIFtjbGFzcy52ZXJ0aWNhbF09XCJ2ZXJ0aWNhbFwiIFtjbGFzcy5ob3Jpem9udGFsXT1cIiF2ZXJ0aWNhbFwiIFtjbGFzcy5oaWRkZW5dPVwiY29sbGFwc2libGUgJiYgIXRvZ2dsZWRcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWtleT1cImtleVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjIG9mIGNvbnRyb2xzXCIgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyXCIgW2NsYXNzLmlzLWxhYmVsXT1cImMuY29udHJvbFR5cGUgPT09ICdyZWFkLW9ubHknXCIgW3N0eWxlLm1heC13aWR0aC5weF09XCJjLndpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bm92by1jb250cm9sIFtmb3JtXT1cImZvcm0/LmNvbnRyb2xzW2tleV1bJ2NvbnRyb2xzJ11baW5kZXhdXCIgW2NvbnRyb2xdPVwiY1wiIFtjb25kZW5zZWRdPVwiIXZlcnRpY2FsIHx8IGMuY29udHJvbFR5cGUgPT09ICdyZWFkLW9ubHknXCI+PC9ub3ZvLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciBsYXN0XCIgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLmVkaXRcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiIHRoZW1lPVwiaWNvblwiIGljb249XCJlZGl0XCIgKGNsaWNrKT1cImVkaXRDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVkaXQtJyArIGtleVwiIGluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIGxhc3RcIiAqbmdJZj1cInJlbW92ZSAmJiAhdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIiB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJyZW1vdmUgJiYgIXZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImRlbGV0ZS1vXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woaW5kZXgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZGVsZXRlLScgKyBrZXlcIiBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5lZGl0XCIgdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwiZWRpdCAmJiB2ZXJ0aWNhbFwiIHRoZW1lPVwiaWNvblwiIGljb249XCJlZGl0XCIgKGNsaWNrKT1cImVkaXRDb250cm9sKGluZGV4KVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVkaXQtJyArIGtleVwiIGluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpbmRleF0ucmVtb3ZlXCIgdHlwZT1cImJ1dHRvblwiICpuZ0lmPVwicmVtb3ZlICYmIHZlcnRpY2FsXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImRlbGV0ZS1vXCIgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woaW5kZXgpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZGVsZXRlLScgKyBrZXlcIiBpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1sYWJlbHNcIiAqbmdJZj1cIiF2ZXJ0aWNhbCAmJiBmb3JtPy5jb250cm9sc1trZXldICYmIGZvcm0/LmNvbnRyb2xzW2tleV1bJ2NvbnRyb2xzJ10ubGVuZ3RoICE9PSAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsXCIgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGNvbnRyb2xMYWJlbHNcIiBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImxhYmVsLndpZHRoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWxhYmVsLScgKyBsYWJlbC52YWx1ZVwiPnt7IGxhYmVsLnZhbHVlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbC1sYWJlbCBsYXN0XCIgKm5nSWY9XCJlZGl0XCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZWRpdC0nICsga2V5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIiAqbmdJZj1cInJlbW92ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtPy5jb250cm9sc1trZXldXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1yb3dcIiAqbmdGb3I9XCJsZXQgY29udHJvbCBvZiBmb3JtPy5jb250cm9sc1trZXldWydjb250cm9scyddOyBsZXQgaW5kZXggPSBpbmRleDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJyb3dUZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntmb3JtOiBmb3JtLCBpbmRleDogaW5kZXgsIGtleToga2V5LCBjb250cm9sczogY29udHJvbHN9XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtZW1wdHlcIiAqbmdJZj1cImZvcm0/LmNvbnRyb2xzW2tleV0gJiYgZm9ybT8uY29udHJvbHNba2V5XVsnY29udHJvbHMnXS5sZW5ndGggPT09IDBcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lbXB0eS0nICsga2V5XCI+XG4gICAgICAgICAgICAgICAge3sgZW1wdHlNZXNzYWdlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwICpuZ0lmPVwiYWRkXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJkaWFsb2d1ZVwiIGljb249XCJhZGQtdGhpblwiIChjbGljayk9XCJhZGROZXdDb250cm9sKClcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1ib3R0b20tYWRkLScgKyBrZXlcIiBpbmRleD1cIi0xXCI+e3sgYWRkPy5sYWJlbCB9fTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29udHJvbEdyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gU2V0cyB0aGUgZGlzcGxheSBvZiB0aGUgZ3JvdXAgdG8gZWl0aGVyIGJlIHJvdyAoZGVmYXVsdCkgb3IgdmVydGljYWwgdmlhIGZsZXgtYm94XG4gIEBJbnB1dCgpXG4gIHNldCB2ZXJ0aWNhbCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBwcml2YXRlIF92ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBIaWRlcy9zaG93cyB0aGUgYWRkIGJ1dHRvbiBmb3IgYWRkaW5nIGEgbmV3IGNvbnRyb2xcbiAgQElucHV0KClcbiAgYWRkOiBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnO1xuICAvLyBIaWRlL3Nob3dzIHRoZSByZW1vdmUgYnV0dG9uIGZvciByZW1vdmluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IHJlbW92ZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVtb3ZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZTtcbiAgfVxuICBwcml2YXRlIF9yZW1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gSGlkZS9zaG93cyB0aGUgZWRpdCBidXR0b24gZm9yIGVkaXRpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBlZGl0KCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0O1xuICB9XG4gIHByaXZhdGUgX2VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gQWxsb3dzIHRoZSBjb250cm9sIHRvIGNvbGxhcHNlIG9yIG5vdFxuICBASW5wdXQoKVxuICBzZXQgY29sbGFwc2libGUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjb2xsYXBzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2libGU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sbGFwc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gTWFpbiBmb3JtIGdyb3VwXG4gIEBJbnB1dCgpXG4gIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIC8vIENvbnRyb2xzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGNvbnRyb2wgZ3JvdXBcbiAgQElucHV0KClcbiAgY29udHJvbHM6IEJhc2VDb250cm9sW107XG4gIC8vIEtleSBvZiB0aGUgY29udHJvbCBncm91cCAob24gdGhlIG1haW4gZm9ybSlcbiAgQElucHV0KClcbiAga2V5OiBzdHJpbmc7XG4gIC8vIExhYmVsIG9mIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8vIERlc2NyaXB0aW9uIG9mIHRoZSBjb250cm9sIGdyb3VwIChvbmx5IHVzZSB3aXRoIHBvc2l0aW9uOmJvdHRvbSBBZGQgYnV0dG9uISlcbiAgQElucHV0KClcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLy8gTWVzc2FnZSB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyBjb250cm9sc1xuICBASW5wdXQoKVxuICBlbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgLy8gSWNvbiBvZiB0aGUgY29udHJvbCBncm91cCAoY2FuIGhhdmUgYmhpIHByZWZpeCBvciBub3QpXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2ICYmIHYuaW5kZXhPZignYmhpJykgIT09IC0xID8gdiA6IGBiaGktJHt2fWA7XG4gIH1cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICAvLyBUaGUgaW5pdGlhbCB2YWx1ZSBvYmplY3QsIHdpbGwgY3JlYXRlIHRoZSBmb3JtIHJvd3Mgb2ZmIG9mXG4gIEBJbnB1dCgpXG4gIGluaXRpYWxWYWx1ZToge31bXTtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBlZGl0XG4gIEBJbnB1dCgpXG4gIGNhbkVkaXQ6IEZ1bmN0aW9uO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGRlbGV0ZVxuICBASW5wdXQoKVxuICBjYW5SZW1vdmU6IEZ1bmN0aW9uO1xuICAvLyBUZW1wbGF0ZSBmb3IgY3VzdG9tIHJvdyByZW5kZXJpbmdcbiAgQElucHV0KClcbiAgcm93VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvblJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIGNvbnRyb2xMYWJlbHM6IHsgdmFsdWU6IHN0cmluZzsgd2lkdGg6IG51bWJlciB9W10gPSBbXTtcbiAgcHVibGljIHRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVkQXJyYXk6IHsgZWRpdDogYm9vbGVhbjsgcmVtb3ZlOiBib29sZWFuIH1bXSA9IFtdO1xuXG4gIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3ZvLWNvbnRyb2wtZ3JvdXAgbXVzdCBoYXZlIHRoZSBba2V5XSBhdHRyaWJ1dGUgcHJvdmlkZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgaW5pdGlhbFZhbHVlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWydpbml0aWFsVmFsdWUnXTtcblxuICAgIC8vIElmIGluaXRpYWwgdmFsdWUgY2hhbmdlcywgY2xlYXIgdGhlIGNvbnRyb2xzXG4gICAgaWYgKGluaXRpYWxWYWx1ZUNoYW5nZSAmJiBpbml0aWFsVmFsdWVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSBpbml0aWFsVmFsdWVDaGFuZ2UucHJldmlvdXNWYWx1ZSAmJiAhaW5pdGlhbFZhbHVlQ2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNsZWFyQ29udHJvbHMoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYXJyYXksIGFkZCBhIGNvbnRyb2wgZm9yIGVhY2ggdmFsdWVcbiAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmluaXRpYWxWYWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4gdGhpcy5hZGROZXdDb250cm9sKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSkge1xuICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gb2JqZWN0LCBqdXN0IGFkZCBvbmUgY29udHJvbFxuICAgICAgdGhpcy5hZGROZXdDb250cm9sKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGhvcml6b250YWwsIGdyYWIgdGhlIGxhYmVscyB0byBoZWxwIHdpdGggbGF5b3V0XG4gICAgaWYgKCF0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xMYWJlbHMgPSAodGhpcy5jb250cm9scyB8fCBbXSkubWFwKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBjb250cm9sLmxhYmVsLFxuICAgICAgICAgIHdpZHRoOiBjb250cm9sLndpZHRoLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkTmV3Q29udHJvbCh2YWx1ZT86IHt9KTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGNvbnN0IG5ld0N0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmJ1aWxkQ29udHJvbCh2YWx1ZSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGNvbnRyb2wucHVzaChuZXdDdHJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wodGhpcy5rZXksIHRoaXMuZmIuYXJyYXkoW25ld0N0cmxdKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5wdXNoKHtcbiAgICAgIGVkaXQ6IHRoaXMuY2hlY2tDYW5FZGl0KHRoaXMuY3VycmVudEluZGV4KSxcbiAgICAgIHJlbW92ZTogdGhpcy5jaGVja0NhblJlbW92ZSh0aGlzLmN1cnJlbnRJbmRleCksXG4gICAgfSk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vbkFkZC5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGRDb250cm9sKHZhbHVlPzoge30pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBjb25zdCBuZXdDb250cm9scyA9IHRoaXMuZ2V0TmV3Q29udHJvbHModGhpcy5jb250cm9scyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKG5ld0NvbnRyb2xzLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGN0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cChuZXdDb250cm9scyk7XG4gICAgcmV0dXJuIGN0cmw7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ29udHJvbChpbmRleDogbnVtYmVyLCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXg6IGluZGV4IH0pO1xuICAgIH1cbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBlZGl0Q29udHJvbChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIHRoaXMub25FZGl0LmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMuY29sbGFwc2libGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlZCA9ICF0aGlzLnRvZ2dsZWQ7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyQ29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjb250cm9sLmNvbnRyb2xzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb250cm9sKGksIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2FuRWRpdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FuRWRpdCkge1xuICAgICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgICAgcmV0dXJuIHRoaXMuY2FuRWRpdChjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5SZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhblJlbW92ZSkge1xuICAgICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgICAgcmV0dXJuIHRoaXMuY2FuUmVtb3ZlKGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdDb250cm9scyhjb250cm9sczogQmFzZUNvbnRyb2xbXSkge1xuICAgIGxldCByZXQ6IEJhc2VDb250cm9sW10gPSBbXTtcbiAgICAodGhpcy5jb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldC5wdXNoKG5ldyBCYXNlQ29udHJvbChjb250cm9sLl9fdHlwZSwgY29udHJvbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==