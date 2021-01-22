/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/EmbeddedFormGroup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { BaseControl } from './controls/BaseControl';
import { FormUtils } from '../../utils/form-utils/FormUtils';
export class NovoEmbeddedFormGroupElement {
    /**
     * @param {?} formUtils
     * @param {?} ref
     * @param {?} fb
     */
    constructor(formUtils, ref, fb) {
        this.formUtils = formUtils;
        this.ref = ref;
        this.fb = fb;
        this._remove = false;
        this._edit = false;
        this.controls = [];
        this.onRemove = new EventEmitter();
        this.onEdit = new EventEmitter();
        this.onAdd = new EventEmitter();
        this.change = new EventEmitter();
        this.currentIndex = 0;
        this.disabledArray = [];
        this.controlLabels = [];
    }
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.key = this.control.key;
        this.controls = this.formUtils.toControls(this.control.associatedEntity, null, null, {});
        this.form = this.formUtils.toFormGroup(this.controls);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.controlLabels = (this.controls || []).map((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            return {
                value: control.label,
                width: control.width,
                required: control.required,
                key: control.key,
            };
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.change.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRemoveEvent(event) {
        this.onRemove.emit(event);
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
            edit: true,
            remove: true,
        });
        this.resetAddRemove();
        if (!value) {
            this.onAdd.emit();
        }
        this.currentIndex++;
        this.ref.markForCheck();
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
            this.onRemove.emit({ value: control.at(index).value, index });
        }
        control.removeAt(index);
        this.disabledArray = this.disabledArray.filter((/**
         * @param {?} value
         * @param {?} idx
         * @return {?}
         */
        (value, idx) => idx !== index));
        this.resetAddRemove();
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
        this.onEdit.emit({ value: control.at(index).value, index });
    }
    /**
     * @return {?}
     */
    resetAddRemove() {
        this.disabledArray.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        (item, idx) => {
            item.edit = this.checkCanEdit(idx);
            item.remove = this.checkCanRemove(idx);
        }));
        this.ref.markForCheck();
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
            if (control.at(index)) {
                return this.canRemove(control.at(index).value, index);
            }
            return true;
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
        const ret = [];
        (this.controls || []).forEach((/**
         * @param {?} control
         * @return {?}
         */
        (control) => {
            ret.push(new BaseControl(control.__type, control));
        }));
        return ret;
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
}
NovoEmbeddedFormGroupElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-embedded-form-group',
                template: `
    <novo-control-templates></novo-control-templates>
    <div class="novo-control-group-controls horizontal">
      <div class="novo-control-group-control">
        <div
          *ngFor="let c of controls; let i = index"
          class="novo-control-container {{ c.key }}"
          [class.is-label]="c.controlType === 'read-only'"
          [style.max-width.px]="c.width"
        >
          <div class="novo-form-row" [class.disabled]="control.disabled" *ngIf="c.__type !== 'embedded-form-group'">
            <novo-control
              (change)="onChange($event)"
              [form]="form"
              [control]="c"
              [condensed]="c.controlType === 'read-only'"
            ></novo-control>
          </div>
          <div *ngIf="c.__type === 'embedded-form-group'">
            <novo-embedded-form-group [control]="c"></novo-embedded-form-group>
          </div>
          <div class="novo-control-container last" *ngIf="edit">
            <button
              [disabled]="!disabledArray[i].edit"
              type="button"
              *ngIf="edit"
              theme="icon"
              icon="edit"
              (click)="editControl(i)"
              [attr.data-automation-id]="'novo-control-group-edit-' + key"
              index="-1"
            ></button>
          </div>
          <div class="novo-control-container last" *ngIf="remove">
            <button
              [disabled]="!disabledArray[i].remove"
              type="button"
              *ngIf="remove"
              theme="icon"
              icon="delete-o"
              (click)="removeControl(i)"
              [attr.data-automation-id]="'novo-control-group-delete-' + key"
              index="-1"
            ></button>
          </div>
        </div>
      </div>
      <div
        class="novo-control-group-control-label {{ label.key }}"
        *ngFor="let label of controlLabels"
        [style.max-width.px]="label.width"
        [class.column-required]="label.required"
      >
        <span [attr.data-automation-id]="'novo-control-group-label-' + label.value">{{ label.value }}</span>
      </div>
      <div class="novo-control-group-control-label last" *ngIf="edit" [attr.data-automation-id]="'novo-control-group-edit-' + key"></div>
      <div
        class="novo-control-group-control-label last"
        *ngIf="remove"
        [attr.data-automation-id]="'novo-control-group-delete-' + key"
      ></div>
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
  `
            }] }
];
/** @nocollapse */
NovoEmbeddedFormGroupElement.ctorParameters = () => [
    { type: FormUtils },
    { type: ChangeDetectorRef },
    { type: FormBuilder }
];
NovoEmbeddedFormGroupElement.propDecorators = {
    onCanRemove: [{ type: Input }],
    add: [{ type: Input }],
    remove: [{ type: Input }],
    edit: [{ type: Input }],
    canEdit: [{ type: Input }],
    canRemove: [{ type: Input }],
    control: [{ type: Input }],
    parentForm: [{ type: Input }],
    onRemove: [{ type: Output }],
    onEdit: [{ type: Output }],
    onAdd: [{ type: Output }],
    change: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.onCanRemove;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.add;
    /**
     * @type {?}
     * @private
     */
    NovoEmbeddedFormGroupElement.prototype._remove;
    /**
     * @type {?}
     * @private
     */
    NovoEmbeddedFormGroupElement.prototype._edit;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.canEdit;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.canRemove;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.control;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.parentForm;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.controls;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.onRemove;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.onEdit;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.onAdd;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.change;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.key;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.form;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.initialValue;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.currentIndex;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.disabledArray;
    /** @type {?} */
    NovoEmbeddedFormGroupElement.prototype.controlLabels;
    /**
     * @type {?}
     * @private
     */
    NovoEmbeddedFormGroupElement.prototype.formUtils;
    /**
     * @type {?}
     * @private
     */
    NovoEmbeddedFormGroupElement.prototype.ref;
    /**
     * @type {?}
     * @private
     */
    NovoEmbeddedFormGroupElement.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRkZWRGb3JtR3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9FbWJlZGRlZEZvcm1Hcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQWdGN0QsTUFBTSxPQUFPLDRCQUE0Qjs7Ozs7O0lBK0N2QyxZQUFvQixTQUFvQixFQUFVLEdBQXNCLEVBQVUsRUFBZTtRQUE3RSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBbEN6RixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBWWhCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFRdEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVKLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNoRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDOUMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDaEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFLM0MsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQWEsR0FBeUMsRUFBRSxDQUFDO1FBQ3pELGtCQUFhLEdBQXVFLEVBQUUsQ0FBQztJQUVhLENBQUM7Ozs7O0lBM0NyRyxJQUNJLE1BQU0sQ0FBQyxDQUFVO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFLRCxJQUNJLElBQUksQ0FBQyxDQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBMEJELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRzs7OztRQUFDLENBQUMsT0FBb0IsRUFBRSxFQUFFO1lBQ3RFLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7Z0JBQ3BCLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDMUIsR0FBRyxFQUFFLE9BQU8sQ0FBQyxHQUFHO2FBQ2pCLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVU7O2NBQ2hCLE9BQU8sR0FBYyxtQkFBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUE7O2NBQzVELE9BQU8sR0FBa0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxLQUFhLEVBQUUsU0FBUyxHQUFHLElBQUk7O2NBQ3JDLE9BQU8sR0FBYyxtQkFBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUE7UUFDbEUsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO1FBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEtBQWdDLEVBQUUsR0FBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFDLENBQUM7UUFDakgsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQWE7O2NBQ2pCLE9BQU8sR0FBYyxtQkFBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUE7UUFDbEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7O0lBRUQsY0FBYztRQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLElBQStCLEVBQUUsR0FBVyxFQUFFLEVBQUU7WUFDMUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFOztrQkFDVixPQUFPLEdBQWMsbUJBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFBO1lBQ2xFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQWE7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixPQUFPLEdBQWMsbUJBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFBO1lBQ2xFLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3ZEO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLFFBQXVCOztjQUN0QyxHQUFHLEdBQWtCLEVBQUU7UUFDN0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE9BQW9CLEVBQUUsRUFBRTtZQUNyRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsS0FBVTs7Y0FDZixXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDckQ7O2NBQ0ssSUFBSSxHQUFrQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDbkUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUF2T0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwRVQ7YUFDRjs7OztZQS9FUSxTQUFTO1lBUlQsaUJBQWlCO1lBQ04sV0FBVzs7OzBCQXdGNUIsS0FBSztrQkFDTCxLQUFLO3FCQUVMLEtBQUs7bUJBWUwsS0FBSztzQkFXTCxLQUFLO3dCQUVMLEtBQUs7c0JBRUwsS0FBSzt5QkFDTCxLQUFLO3VCQUdMLE1BQU07cUJBQ04sTUFBTTtvQkFDTixNQUFNO3FCQUNOLE1BQU07Ozs7SUFyQ1AsbURBQStCOztJQUMvQiwyQ0FBd0M7Ozs7O0lBV3hDLCtDQUF3Qjs7Ozs7SUFZeEIsNkNBQXNCOztJQUV0QiwrQ0FBMkI7O0lBRTNCLGlEQUE2Qjs7SUFFN0IsK0NBQXNCOztJQUN0QixrREFBeUI7O0lBQ3pCLGdEQUFjOztJQUVkLGdEQUEwRDs7SUFDMUQsOENBQXdEOztJQUN4RCw2Q0FBMEM7O0lBQzFDLDhDQUEyQzs7SUFFM0MsMkNBQVk7O0lBQ1osNENBQW9COztJQUNwQixvREFBYTs7SUFDYixvREFBaUI7O0lBQ2pCLHFEQUF5RDs7SUFDekQscURBQXVGOzs7OztJQUUzRSxpREFBNEI7Ozs7O0lBQUUsMkNBQThCOzs7OztJQUFFLDBDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQXJyYXksIEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIFZlbmRvclxuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnLCBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnIH0gZnJvbSAnLi9Db250cm9sR3JvdXAnO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2xzL0Jhc2VDb250cm9sJztcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL05vdm9Gb3JtR3JvdXAnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVtYmVkZGVkLWZvcm0tZ3JvdXAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxub3ZvLWNvbnRyb2wtdGVtcGxhdGVzPjwvbm92by1jb250cm9sLXRlbXBsYXRlcz5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2xzIGhvcml6b250YWxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nRm9yPVwibGV0IGMgb2YgY29udHJvbHM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciB7eyBjLmtleSB9fVwiXG4gICAgICAgICAgW2NsYXNzLmlzLWxhYmVsXT1cImMuY29udHJvbFR5cGUgPT09ICdyZWFkLW9ubHknXCJcbiAgICAgICAgICBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImMud2lkdGhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tZm9ybS1yb3dcIiBbY2xhc3MuZGlzYWJsZWRdPVwiY29udHJvbC5kaXNhYmxlZFwiICpuZ0lmPVwiYy5fX3R5cGUgIT09ICdlbWJlZGRlZC1mb3JtLWdyb3VwJ1wiPlxuICAgICAgICAgICAgPG5vdm8tY29udHJvbFxuICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICAgICAgICBbZm9ybV09XCJmb3JtXCJcbiAgICAgICAgICAgICAgW2NvbnRyb2xdPVwiY1wiXG4gICAgICAgICAgICAgIFtjb25kZW5zZWRdPVwiYy5jb250cm9sVHlwZSA9PT0gJ3JlYWQtb25seSdcIlxuICAgICAgICAgICAgPjwvbm92by1jb250cm9sPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJjLl9fdHlwZSA9PT0gJ2VtYmVkZGVkLWZvcm0tZ3JvdXAnXCI+XG4gICAgICAgICAgICA8bm92by1lbWJlZGRlZC1mb3JtLWdyb3VwIFtjb250cm9sXT1cImNcIj48L25vdm8tZW1iZWRkZWQtZm9ybS1ncm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWNvbnRhaW5lciBsYXN0XCIgKm5nSWY9XCJlZGl0XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpXS5lZGl0XCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiZWRpdFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImVkaXRDb250cm9sKGkpXCJcbiAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidub3ZvLWNvbnRyb2wtZ3JvdXAtZWRpdC0nICsga2V5XCJcbiAgICAgICAgICAgICAgaW5kZXg9XCItMVwiXG4gICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXIgbGFzdFwiICpuZ0lmPVwicmVtb3ZlXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZGlzYWJsZWRBcnJheVtpXS5yZW1vdmVcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgKm5nSWY9XCJyZW1vdmVcIlxuICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICBpY29uPVwiZGVsZXRlLW9cIlxuICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlQ29udHJvbChpKVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCJcbiAgICAgICAgICAgICAgaW5kZXg9XCItMVwiXG4gICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwge3sgbGFiZWwua2V5IH19XCJcbiAgICAgICAgKm5nRm9yPVwibGV0IGxhYmVsIG9mIGNvbnRyb2xMYWJlbHNcIlxuICAgICAgICBbc3R5bGUubWF4LXdpZHRoLnB4XT1cImxhYmVsLndpZHRoXCJcbiAgICAgICAgW2NsYXNzLmNvbHVtbi1yZXF1aXJlZF09XCJsYWJlbC5yZXF1aXJlZFwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWxhYmVsLScgKyBsYWJlbC52YWx1ZVwiPnt7IGxhYmVsLnZhbHVlIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2wtbGFiZWwgbGFzdFwiICpuZ0lmPVwiZWRpdFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVkaXQtJyArIGtleVwiPjwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIlxuICAgICAgICAqbmdJZj1cInJlbW92ZVwiXG4gICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWRlbGV0ZS0nICsga2V5XCJcbiAgICAgID48L2Rpdj5cbiAgICAgIDxwICpuZ0lmPVwiYWRkXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aGVtZT1cImRpYWxvZ3VlXCJcbiAgICAgICAgICBpY29uPVwiYWRkLXRoaW5cIlxuICAgICAgICAgIChjbGljayk9XCJhZGROZXdDb250cm9sKClcIlxuICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWJvdHRvbS1hZGQtJyArIGtleVwiXG4gICAgICAgICAgaW5kZXg9XCItMVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBhZGQ/LmxhYmVsIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRW1iZWRkZWRGb3JtR3JvdXBFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBvbkNhblJlbW92ZTogRnVuY3Rpb247XG4gIEBJbnB1dCgpIGFkZDogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcblxuICBASW5wdXQoKVxuICBzZXQgcmVtb3ZlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW1vdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cblxuICBnZXQgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmU7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmUgPSBmYWxzZTtcblxuICAvLyBIaWRlL3Nob3dzIHRoZSBlZGl0IGJ1dHRvbiBmb3IgZWRpdGluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IGVkaXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2VkaXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cblxuICBnZXQgZWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdDtcbiAgfVxuXG4gIHByaXZhdGUgX2VkaXQgPSBmYWxzZTtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBlZGl0XG4gIEBJbnB1dCgpIGNhbkVkaXQ6IEZ1bmN0aW9uO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGRlbGV0ZVxuICBASW5wdXQoKSBjYW5SZW1vdmU6IEZ1bmN0aW9uO1xuXG4gIEBJbnB1dCgpIGNvbnRyb2w6IGFueTtcbiAgQElucHV0KCkgcGFyZW50Rm9ybTogYW55O1xuICBjb250cm9scyA9IFtdO1xuXG4gIEBPdXRwdXQoKSBvblJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTsgaW5kZXggfT4oKTtcbiAgQE91dHB1dCgpIG9uRWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8eyB2YWx1ZTsgaW5kZXggfT4oKTtcbiAgQE91dHB1dCgpIG9uQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBrZXk6IHN0cmluZztcbiAgZm9ybTogTm92b0Zvcm1Hcm91cDtcbiAgaW5pdGlhbFZhbHVlO1xuICBjdXJyZW50SW5kZXggPSAwO1xuICBkaXNhYmxlZEFycmF5OiB7IGVkaXQ6IGJvb2xlYW47IHJlbW92ZTogYm9vbGVhbiB9W10gPSBbXTtcbiAgY29udHJvbExhYmVsczogeyB2YWx1ZTogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyByZXF1aXJlZDogYm9vbGVhbjsga2V5OiBzdHJpbmcgfVtdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscywgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmtleSA9IHRoaXMuY29udHJvbC5rZXk7XG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuZm9ybVV0aWxzLnRvQ29udHJvbHModGhpcy5jb250cm9sLmFzc29jaWF0ZWRFbnRpdHksIG51bGwsIG51bGwsIHt9KTtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuY29udHJvbExhYmVscyA9ICh0aGlzLmNvbnRyb2xzIHx8IFtdKS5tYXAoKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogY29udHJvbC5sYWJlbCxcbiAgICAgICAgd2lkdGg6IGNvbnRyb2wud2lkdGgsXG4gICAgICAgIHJlcXVpcmVkOiBjb250cm9sLnJlcXVpcmVkLFxuICAgICAgICBrZXk6IGNvbnRyb2wua2V5LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG4gIH1cblxuICBvblJlbW92ZUV2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5vblJlbW92ZS5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGFkZE5ld0NvbnRyb2wodmFsdWU/OiB7fSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBjb25zdCBuZXdDdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5idWlsZENvbnRyb2wodmFsdWUpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBjb250cm9sLnB1c2gobmV3Q3RybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKHRoaXMua2V5LCB0aGlzLmZiLmFycmF5KFtuZXdDdHJsXSkpO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVkQXJyYXkucHVzaCh7XG4gICAgICBlZGl0OiB0cnVlLFxuICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9uQWRkLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2woaW5kZXg6IG51bWJlciwgZW1pdEV2ZW50ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4IH0pO1xuICAgIH1cbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkgPSB0aGlzLmRpc2FibGVkQXJyYXkuZmlsdGVyKCh2YWx1ZTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gaW5kZXgpO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZWRpdENvbnRyb2woaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgfVxuXG4gIHJlc2V0QWRkUmVtb3ZlKCkge1xuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5mb3JFYWNoKChpdGVtOiBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5lZGl0ID0gdGhpcy5jaGVja0NhbkVkaXQoaWR4KTtcbiAgICAgIGl0ZW0ucmVtb3ZlID0gdGhpcy5jaGVja0NhblJlbW92ZShpZHgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhbkVkaXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbkVkaXQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIHJldHVybiB0aGlzLmNhbkVkaXQoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2FuUmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5SZW1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIGlmIChjb250cm9sLmF0KGluZGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5SZW1vdmUoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29udHJvbHMoY29udHJvbHM6IEJhc2VDb250cm9sW10pIHtcbiAgICBjb25zdCByZXQ6IEJhc2VDb250cm9sW10gPSBbXTtcbiAgICAodGhpcy5jb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldC5wdXNoKG5ldyBCYXNlQ29udHJvbChjb250cm9sLl9fdHlwZSwgY29udHJvbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBidWlsZENvbnRyb2wodmFsdWU/OiB7fSk6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gdGhpcy5nZXROZXdDb250cm9scyh0aGlzLmNvbnRyb2xzKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMobmV3Q29udHJvbHMsIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKG5ld0NvbnRyb2xzKTtcbiAgICByZXR1cm4gY3RybDtcbiAgfVxufVxuIl19