/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { Component, TemplateRef, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef, EventEmitter, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
// App
import { NovoFormGroup } from './NovoFormGroup';
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
        this.currentIndex--;
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
     * @private
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
     * @private
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
     * @private
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
     * @private
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
        <i
          *ngIf="collapsible"
          class="bhi-next"
          [class.toggled]="toggled"
          [attr.data-automation-id]="'novo-control-group-collapse-' + key"
        ></i>
        <span [attr.data-automation-id]="'novo-control-group-label-' + key">{{ label }}</span>
      </span>
      <label
        class="novo-control-group-description"
        *ngIf="description"
        [attr.data-automation-id]="'novo-control-group-description-' + key"
        >{{ description }}</label
      >
    </h6>
    <div
      class="novo-control-group-controls"
      [class.vertical]="vertical"
      [class.horizontal]="!vertical"
      [class.hidden]="collapsible && !toggled"
    >
      <ng-template #defaultTemplate let-index="index" let-form="form" let-key="key">
        <div class="novo-control-group-control">
          <div
            *ngFor="let c of controls"
            class="novo-control-container"
            [class.is-label]="c.controlType === 'read-only'"
            [style.max-width.px]="c.width"
          >
            <novo-control
              [form]="(form?.controls)[key]['controls'][index]"
              [control]="c"
              [condensed]="!vertical || c.controlType === 'read-only'"
            ></novo-control>
          </div>
          <div class="novo-control-container last" *ngIf="edit && !vertical">
            <button
              [disabled]="!disabledArray[index].edit"
              type="button"
              *ngIf="edit && !vertical"
              theme="icon"
              icon="edit"
              (click)="editControl(index)"
              [attr.data-automation-id]="'novo-control-group-edit-' + key"
              index="-1"
            ></button>
          </div>
          <div class="novo-control-container last" *ngIf="remove && !vertical">
            <button
              [disabled]="!disabledArray[index].remove"
              type="button"
              *ngIf="remove && !vertical"
              theme="icon"
              icon="delete-o"
              (click)="removeControl(index)"
              [attr.data-automation-id]="'novo-control-group-delete-' + key"
              index="-1"
            ></button>
          </div>
        </div>
        <button
          [disabled]="!disabledArray[index].edit"
          type="button"
          *ngIf="edit && vertical"
          theme="icon"
          icon="edit"
          (click)="editControl(index)"
          [attr.data-automation-id]="'novo-control-group-edit-' + key"
          index="-1"
        ></button>
        <button
          [disabled]="!disabledArray[index].remove"
          type="button"
          *ngIf="remove && vertical"
          theme="icon"
          icon="delete-o"
          (click)="removeControl(index)"
          [attr.data-automation-id]="'novo-control-group-delete-' + key"
          index="-1"
        ></button>
      </ng-template>
      <div class="novo-control-group-labels" *ngIf="!vertical && (form?.controls)[key] && (form?.controls)[key]['controls'].length !== 0">
        <div class="novo-control-group-control-label" *ngFor="let label of controlLabels" [style.max-width.px]="label.width">
          <span [attr.data-automation-id]="'novo-control-group-label-' + label.value">{{ label.value }}</span>
        </div>
        <div class="novo-control-group-control-label last" *ngIf="edit" [attr.data-automation-id]="'novo-control-group-edit-' + key"></div>
        <div
          class="novo-control-group-control-label last"
          *ngIf="remove"
          [attr.data-automation-id]="'novo-control-group-delete-' + key"
        ></div>
      </div>
      <ng-container *ngIf="(form?.controls)[key]">
        <div class="novo-control-group-row" *ngFor="let control of (form?.controls)[key]['controls']; let index = index">
          <ng-template
            [ngTemplateOutlet]="rowTemplate || defaultTemplate"
            [ngTemplateOutletContext]="{ form: form, index: index, key: key, controls: controls }"
          >
          </ng-template>
        </div>
      </ng-container>
      <div
        class="novo-control-group-empty"
        *ngIf="(form?.controls)[key] && (form?.controls)[key]['controls'].length === 0"
        [attr.data-automation-id]="'novo-control-group-empty-' + key"
      >
        {{ emptyMessage }}
      </div>
      <p *ngIf="add">
        <button
          type="button"
          theme="dialogue"
          icon="add-thin"
          (click)="addNewControl()"
          [attr.data-automation-id]="'novo-control-group-bottom-add-' + key"
          index="-1"
        >
          {{ add?.label }}
        </button>
      </p>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
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
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype._vertical;
    /** @type {?} */
    NovoControlGroup.prototype.add;
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype._remove;
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype._edit;
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype.currentIndex;
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype.formUtils;
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    NovoControlGroup.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFHTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVyRSwrQ0FFQzs7O0lBREMsMENBQWM7O0FBcUloQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBNkYzQixZQUFvQixTQUFvQixFQUFVLEVBQWUsRUFBVSxHQUFzQixFQUFVLE1BQXdCO1FBQS9HLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXBGM0gsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVkzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBU3pCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFTdkIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUEwQy9CLGFBQVEsR0FBc0IsSUFBSSxZ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QkFFTixNQUFNOzs7Ozs7O0lBM0VQLHFDQUFtQzs7SUFFbkMsK0JBQytCOzs7OztJQVMvQixtQ0FBaUM7Ozs7O0lBU2pDLGlDQUErQjs7Ozs7SUFTL0Isd0NBQXNDOztJQUV0QyxnQ0FDb0I7O0lBRXBCLG9DQUN3Qjs7SUFFeEIsK0JBQ1k7O0lBRVosaUNBQ2M7O0lBRWQsdUNBQ29COztJQUVwQix3Q0FDcUI7Ozs7O0lBU3JCLGlDQUFzQjs7SUFFdEIsd0NBQ21COztJQUVuQixtQ0FDa0I7O0lBRWxCLHFDQUNvQjs7SUFFcEIsdUNBQzhCOztJQUU5QixvQ0FDNkQ7O0lBQzdELGtDQUMyRDs7SUFDM0QsaUNBQzBEOztJQUUxRCx5Q0FBOEQ7O0lBQzlELG1DQUFnQzs7SUFDaEMseUNBQWdFOzs7OztJQUVoRSx3Q0FBaUM7Ozs7O0lBRXJCLHFDQUE0Qjs7Ozs7SUFBRSw4QkFBdUI7Ozs7O0lBQUUsK0JBQThCOzs7OztJQUFFLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJy4vY29udHJvbHMvQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIHtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jb250cm9sLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDYgY2xhc3M9XCJub3ZvLXNlY3Rpb24taGVhZGVyXCIgKm5nSWY9XCJsYWJlbFwiPlxuICAgICAgPHNwYW4gKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCIgW2NsYXNzLmNsaWNrYWJsZV09XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICA8aSAqbmdJZj1cImljb24gJiYgIWNvbGxhcHNpYmxlXCIgW25nQ2xhc3NdPVwiaWNvblwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWljb24tJyArIGtleVwiPjwvaT5cbiAgICAgICAgPGlcbiAgICAgICAgICAqbmdJZj1cImNvbGxhcHNpYmxlXCJcbiAgICAgICAgICBjbGFzcz1cImJoaS1uZXh0XCJcbiAgICAgICAgICBbY2xhc3MudG9nZ2xlZF09XCJ0b2dnbGVkXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1jb2xsYXBzZS0nICsga2V5XCJcbiAgICAgICAgPjwvaT5cbiAgICAgICAgPHNwYW4gW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtbGFiZWwtJyArIGtleVwiPnt7IGxhYmVsIH19PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgKm5nSWY9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlc2NyaXB0aW9uLScgKyBrZXlcIlxuICAgICAgICA+e3sgZGVzY3JpcHRpb24gfX08L2xhYmVsXG4gICAgICA+XG4gICAgPC9oNj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sc1wiXG4gICAgICBbY2xhc3MudmVydGljYWxdPVwidmVydGljYWxcIlxuICAgICAgW2NsYXNzLmhvcml6b250YWxdPVwiIXZlcnRpY2FsXCJcbiAgICAgIFtjbGFzcy5oaWRkZW5dPVwiY29sbGFwc2libGUgJiYgIXRvZ2dsZWRcIlxuICAgID5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjZGVmYXVsdFRlbXBsYXRlIGxldC1pbmRleD1cImluZGV4XCIgbGV0LWZvcm09XCJmb3JtXCIgbGV0LWtleT1cImtleVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2xcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgYyBvZiBjb250cm9sc1wiXG4gICAgICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXJcIlxuICAgICAgICAgICAgW2NsYXNzLmlzLWxhYmVsXT1cImMuY29udHJvbFR5cGUgPT09ICdyZWFkLW9ubHknXCJcbiAgICAgICAgICAgIFtzdHlsZS5tYXgtd2lkdGgucHhdPVwiYy53aWR0aFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG5vdm8tY29udHJvbFxuICAgICAgICAgICAgICBbZm9ybV09XCIoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ11baW5kZXhdXCJcbiAgICAgICAgICAgICAgW2NvbnRyb2xdPVwiY1wiXG4gICAgICAgICAgICAgIFtjb25kZW5zZWRdPVwiIXZlcnRpY2FsIHx8IGMuY29udHJvbFR5cGUgPT09ICdyZWFkLW9ubHknXCJcbiAgICAgICAgICAgID48L25vdm8tY29udHJvbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciBsYXN0XCIgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLmVkaXRcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJlZGl0ICYmICF2ZXJ0aWNhbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImVkaXRDb250cm9sKGluZGV4KVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVkaXQtJyArIGtleVwiXG4gICAgICAgICAgICAgIGluZGV4PVwiLTFcIlxuICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIGxhc3RcIiAqbmdJZj1cInJlbW92ZSAmJiAhdmVydGljYWxcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJyZW1vdmUgJiYgIXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgaWNvbj1cImRlbGV0ZS1vXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woaW5kZXgpXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZGVsZXRlLScgKyBrZXlcIlxuICAgICAgICAgICAgICBpbmRleD1cIi0xXCJcbiAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaW5kZXhdLmVkaXRcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICpuZ0lmPVwiZWRpdCAmJiB2ZXJ0aWNhbFwiXG4gICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICBpY29uPVwiZWRpdFwiXG4gICAgICAgICAgKGNsaWNrKT1cImVkaXRDb250cm9sKGluZGV4KVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZWRpdC0nICsga2V5XCJcbiAgICAgICAgICBpbmRleD1cIi0xXCJcbiAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgW2Rpc2FibGVkXT1cIiFkaXNhYmxlZEFycmF5W2luZGV4XS5yZW1vdmVcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICpuZ0lmPVwicmVtb3ZlICYmIHZlcnRpY2FsXCJcbiAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgIGljb249XCJkZWxldGUtb1wiXG4gICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woaW5kZXgpXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZWxldGUtJyArIGtleVwiXG4gICAgICAgICAgaW5kZXg9XCItMVwiXG4gICAgICAgID48L2J1dHRvbj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWxhYmVsc1wiICpuZ0lmPVwiIXZlcnRpY2FsICYmIChmb3JtPy5jb250cm9scylba2V5XSAmJiAoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ10ubGVuZ3RoICE9PSAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbC1sYWJlbFwiICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBjb250cm9sTGFiZWxzXCIgW3N0eWxlLm1heC13aWR0aC5weF09XCJsYWJlbC53aWR0aFwiPlxuICAgICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWxhYmVsLScgKyBsYWJlbC52YWx1ZVwiPnt7IGxhYmVsLnZhbHVlIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIiAqbmdJZj1cImVkaXRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIj48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwgbGFzdFwiXG4gICAgICAgICAgKm5nSWY9XCJyZW1vdmVcIlxuICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKGZvcm0/LmNvbnRyb2xzKVtrZXldXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtcm93XCIgKm5nRm9yPVwibGV0IGNvbnRyb2wgb2YgKGZvcm0/LmNvbnRyb2xzKVtrZXldWydjb250cm9scyddOyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwicm93VGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGZvcm06IGZvcm0sIGluZGV4OiBpbmRleCwga2V5OiBrZXksIGNvbnRyb2xzOiBjb250cm9scyB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtZW1wdHlcIlxuICAgICAgICAqbmdJZj1cIihmb3JtPy5jb250cm9scylba2V5XSAmJiAoZm9ybT8uY29udHJvbHMpW2tleV1bJ2NvbnRyb2xzJ10ubGVuZ3RoID09PSAwXCJcbiAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZW1wdHktJyArIGtleVwiXG4gICAgICA+XG4gICAgICAgIHt7IGVtcHR5TWVzc2FnZSB9fVxuICAgICAgPC9kaXY+XG4gICAgICA8cCAqbmdJZj1cImFkZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGhlbWU9XCJkaWFsb2d1ZVwiXG4gICAgICAgICAgaWNvbj1cImFkZC10aGluXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkTmV3Q29udHJvbCgpXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1ib3R0b20tYWRkLScgKyBrZXlcIlxuICAgICAgICAgIGluZGV4PVwiLTFcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgYWRkPy5sYWJlbCB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Db250cm9sR3JvdXAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICAvLyBTZXRzIHRoZSBkaXNwbGF5IG9mIHRoZSBncm91cCB0byBlaXRoZXIgYmUgcm93IChkZWZhdWx0KSBvciB2ZXJ0aWNhbCB2aWEgZmxleC1ib3hcbiAgQElucHV0KClcbiAgc2V0IHZlcnRpY2FsKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHByaXZhdGUgX3ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEhpZGVzL3Nob3dzIHRoZSBhZGQgYnV0dG9uIGZvciBhZGRpbmcgYSBuZXcgY29udHJvbFxuICBASW5wdXQoKVxuICBhZGQ6IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWc7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIHJlbW92ZSBidXR0b24gZm9yIHJlbW92aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgcmVtb3ZlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW1vdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlO1xuICB9XG4gIHByaXZhdGUgX3JlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBIaWRlL3Nob3dzIHRoZSBlZGl0IGJ1dHRvbiBmb3IgZWRpdGluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IGVkaXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2VkaXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGVkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXQ7XG4gIH1cbiAgcHJpdmF0ZSBfZWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBBbGxvd3MgdGhlIGNvbnRyb2wgdG8gY29sbGFwc2Ugb3Igbm90XG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzaWJsZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29sbGFwc2libGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGNvbGxhcHNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzaWJsZTtcbiAgfVxuICBwcml2YXRlIF9jb2xsYXBzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBNYWluIGZvcm0gZ3JvdXBcbiAgQElucHV0KClcbiAgZm9ybTogTm92b0Zvcm1Hcm91cDtcbiAgLy8gQ29udHJvbHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKVxuICBjb250cm9sczogQmFzZUNvbnRyb2xbXTtcbiAgLy8gS2V5IG9mIHRoZSBjb250cm9sIGdyb3VwIChvbiB0aGUgbWFpbiBmb3JtKVxuICBASW5wdXQoKVxuICBrZXk6IHN0cmluZztcbiAgLy8gTGFiZWwgb2YgdGhlIGNvbnRyb2wgZ3JvdXBcbiAgQElucHV0KClcbiAgbGFiZWw6IHN0cmluZztcbiAgLy8gRGVzY3JpcHRpb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9ubHkgdXNlIHdpdGggcG9zaXRpb246Ym90dG9tIEFkZCBidXR0b24hKVxuICBASW5wdXQoKVxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyBNZXNzYWdlIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIGNvbnRyb2xzXG4gIEBJbnB1dCgpXG4gIGVtcHR5TWVzc2FnZTogc3RyaW5nO1xuICAvLyBJY29uIG9mIHRoZSBjb250cm9sIGdyb3VwIChjYW4gaGF2ZSBiaGkgcHJlZml4IG9yIG5vdClcbiAgQElucHV0KClcbiAgc2V0IGljb24odjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHYgJiYgdi5pbmRleE9mKCdiaGknKSAhPT0gLTEgPyB2IDogYGJoaS0ke3Z9YDtcbiAgfVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIC8vIFRoZSBpbml0aWFsIHZhbHVlIG9iamVjdCwgd2lsbCBjcmVhdGUgdGhlIGZvcm0gcm93cyBvZmYgb2ZcbiAgQElucHV0KClcbiAgaW5pdGlhbFZhbHVlOiB7fVtdO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGVkaXRcbiAgQElucHV0KClcbiAgY2FuRWRpdDogRnVuY3Rpb247XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZGVsZXRlXG4gIEBJbnB1dCgpXG4gIGNhblJlbW92ZTogRnVuY3Rpb247XG4gIC8vIFRlbXBsYXRlIGZvciBjdXN0b20gcm93IHJlbmRlcmluZ1xuICBASW5wdXQoKVxuICByb3dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KClcbiAgcHVibGljIG9uRWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBvbkFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgY29udHJvbExhYmVsczogeyB2YWx1ZTogc3RyaW5nOyB3aWR0aDogbnVtYmVyIH1bXSA9IFtdO1xuICBwdWJsaWMgdG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGlzYWJsZWRBcnJheTogeyBlZGl0OiBib29sZWFuOyByZW1vdmU6IGJvb2xlYW4gfVtdID0gW107XG5cbiAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscywgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdm8tY29udHJvbC1ncm91cCBtdXN0IGhhdmUgdGhlIFtrZXldIGF0dHJpYnV0ZSBwcm92aWRlZCEnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGxldCBpbml0aWFsVmFsdWVDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ2luaXRpYWxWYWx1ZSddO1xuXG4gICAgLy8gSWYgaW5pdGlhbCB2YWx1ZSBjaGFuZ2VzLCBjbGVhciB0aGUgY29udHJvbHNcbiAgICBpZiAoaW5pdGlhbFZhbHVlQ2hhbmdlICYmIGluaXRpYWxWYWx1ZUNoYW5nZS5jdXJyZW50VmFsdWUgIT09IGluaXRpYWxWYWx1ZUNoYW5nZS5wcmV2aW91c1ZhbHVlICYmICFpbml0aWFsVmFsdWVDaGFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2xlYXJDb250cm9scygpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBhcnJheSwgYWRkIGEgY29udHJvbCBmb3IgZWFjaCB2YWx1ZVxuICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAmJiBBcnJheS5pc0FycmF5KHRoaXMuaW5pdGlhbFZhbHVlKSkge1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB0aGlzLmFkZE5ld0NvbnRyb2wodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbFZhbHVlKSB7XG4gICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBvYmplY3QsIGp1c3QgYWRkIG9uZSBjb250cm9sXG4gICAgICB0aGlzLmFkZE5ld0NvbnRyb2wodGhpcy5pbml0aWFsVmFsdWUpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSBhcmUgaG9yaXpvbnRhbCwgZ3JhYiB0aGUgbGFiZWxzIHRvIGhlbHAgd2l0aCBsYXlvdXRcbiAgICBpZiAoIXRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMuY29udHJvbExhYmVscyA9ICh0aGlzLmNvbnRyb2xzIHx8IFtdKS5tYXAoKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGNvbnRyb2wubGFiZWwsXG4gICAgICAgICAgd2lkdGg6IGNvbnRyb2wud2lkdGgsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdDb250cm9sKHZhbHVlPzoge30pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgY29uc3QgbmV3Q3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuYnVpbGRDb250cm9sKHZhbHVlKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29udHJvbC5wdXNoKG5ld0N0cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCh0aGlzLmtleSwgdGhpcy5mYi5hcnJheShbbmV3Q3RybF0pKTtcbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LnB1c2goe1xuICAgICAgZWRpdDogdGhpcy5jaGVja0NhbkVkaXQodGhpcy5jdXJyZW50SW5kZXgpLFxuICAgICAgcmVtb3ZlOiB0aGlzLmNoZWNrQ2FuUmVtb3ZlKHRoaXMuY3VycmVudEluZGV4KSxcbiAgICB9KTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9uQWRkLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZENvbnRyb2wodmFsdWU/OiB7fSk6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gdGhpcy5nZXROZXdDb250cm9scyh0aGlzLmNvbnRyb2xzKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMobmV3Q29udHJvbHMsIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKG5ld0NvbnRyb2xzKTtcbiAgICByZXR1cm4gY3RybDtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVDb250cm9sKGluZGV4OiBudW1iZXIsIGVtaXRFdmVudDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleDogaW5kZXggfSk7XG4gICAgfVxuICAgIGNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgZWRpdENvbnRyb2woaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleDogaW5kZXggfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmNvbGxhcHNpYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZWQgPSAhdGhpcy50b2dnbGVkO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY29udHJvbC5jb250cm9scy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udHJvbChpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhbkVkaXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbkVkaXQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIHJldHVybiB0aGlzLmNhbkVkaXQoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2FuUmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5SZW1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIHJldHVybiB0aGlzLmNhblJlbW92ZShjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29udHJvbHMoY29udHJvbHM6IEJhc2VDb250cm9sW10pIHtcbiAgICBsZXQgcmV0OiBCYXNlQ29udHJvbFtdID0gW107XG4gICAgKHRoaXMuY29udHJvbHMgfHwgW10pLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXQucHVzaChuZXcgQmFzZUNvbnRyb2woY29udHJvbC5fX3R5cGUsIGNvbnRyb2wpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=