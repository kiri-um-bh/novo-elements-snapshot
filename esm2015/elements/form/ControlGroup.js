/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/ControlGroup.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/**
 * @record
 */
export function NovoControlGroupRowConfig() { }
if (false) {
    /** @type {?} */
    NovoControlGroupRowConfig.prototype.edit;
    /** @type {?} */
    NovoControlGroupRowConfig.prototype.remove;
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
        this.change = new EventEmitter();
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
        const initialValueChange = changes['initialValue'];
        // If initial value changes, clear the controls
        if (initialValueChange && initialValueChange.currentValue !== initialValueChange.previousValue && !initialValueChange.firstChange) {
            this.clearControls();
        }
        // Check for array, add a control for each value
        if (this.initialValue && Array.isArray(this.initialValue)) {
            if (this.initialValue.length !== 0) {
                this.currentIndex = 0;
                this.initialValue.forEach((/**
                 * @param {?} value
                 * @return {?}
                 */
                (value) => this.addNewControl(value)));
            }
        }
        else if (this.initialValue) {
            // If value is an object, just add one control
            this.addNewControl(this.initialValue);
        }
        // If we are horizontal, grab the labels to help with layout
        if (!this.vertical) {
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
            this.ref.markForCheck();
        }
    }
    /**
     * @param {?} change
     * @return {?}
     */
    onChange(change) {
        this.change.emit(this);
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
}
NovoControlGroup.decorators = [
    { type: Component, args: [{
                selector: 'novo-control-group',
                template: "<h6 class=\"novo-section-header\" *ngIf=\"label\">\n  <span (click)=\"toggle($event)\" [class.clickable]=\"collapsible\">\n    <i *ngIf=\"icon && !collapsible\" [ngClass]=\"icon\" [attr.data-automation-id]=\"'novo-control-group-icon-' + key\"></i>\n    <i *ngIf=\"collapsible\" class=\"bhi-next\" [class.toggled]=\"toggled\" [attr.data-automation-id]=\"'novo-control-group-collapse-' + key\"></i>\n    <span [attr.data-automation-id]=\"'novo-control-group-label-' + key\">{{ label }}</span>\n  </span>\n  <label class=\"novo-control-group-description\" *ngIf=\"description\" [attr.data-automation-id]=\"'novo-control-group-description-' + key\">{{ description }}</label>\n</h6>\n<div class=\"novo-control-group-controls\" [class.vertical]=\"vertical\" [class.horizontal]=\"!vertical\" [class.hidden]=\"collapsible && !toggled\">\n  <ng-template #defaultTemplate let-index=\"index\" let-form=\"form\" let-key=\"key\">\n    <div class=\"novo-control-group-control\">\n      <div *ngFor=\"let c of controls\" class=\"novo-control-container {{c.key}}\" [class.is-label]=\"c.controlType === 'read-only'\" [style.max-width.px]=\"c.width\">\n        <novo-control (change)=\"onChange($event)\" [form]=\"(form?.controls)[key]['controls'][index]\" [control]=\"c\" [condensed]=\"!vertical || c.controlType === 'read-only'\"></novo-control>\n      </div>\n      <div class=\"novo-control-container last\" *ngIf=\"edit && !vertical\">\n        <button [disabled]=\"!disabledArray[index].edit\" type=\"button\" *ngIf=\"edit && !vertical\" theme=\"icon\" icon=\"edit\" (click)=\"editControl(index)\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\" index=\"-1\"></button>\n      </div>\n      <div class=\"novo-control-container last\" *ngIf=\"remove && !vertical\">\n        <button [disabled]=\"!disabledArray[index].remove\" type=\"button\" *ngIf=\"remove && !vertical\" theme=\"icon\" icon=\"delete-o\" (click)=\"removeControl(index)\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\" index=\"-1\"></button>\n      </div>\n    </div>\n    <button [disabled]=\"!disabledArray[index].edit\" type=\"button\" *ngIf=\"edit && vertical\" theme=\"icon\" icon=\"edit\" (click)=\"editControl(index)\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\" index=\"-1\"></button>\n    <button [disabled]=\"!disabledArray[index].remove\" type=\"button\" *ngIf=\"remove && vertical\" theme=\"icon\" icon=\"delete-o\" (click)=\"removeControl(index)\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\" index=\"-1\"></button>\n  </ng-template>\n  <ng-template #defaultColumnLabelTemplate let-form=\"form\" let-key=\"key\">\n      <div class=\"novo-control-group-control-label {{ label.key }}\" *ngFor=\"let label of controlLabels\" [style.max-width.px]=\"label.width\" [class.column-required]=\"label.required\">\n        <span [attr.data-automation-id]=\"'novo-control-group-label-' + label.value\">{{ label.value }}</span>\n      </div>\n      <div class=\"novo-control-group-control-label last\" *ngIf=\"edit\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\"></div>\n      <div class=\"novo-control-group-control-label last\" *ngIf=\"remove\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\"></div>\n  </ng-template>\n  <ng-container *ngIf=\"!vertical && (form?.controls)[key] && (form?.controls)[key]['controls'].length !== 0\">\n    <div class=\"novo-control-group-labels\" *ngIf=\"!vertical && (form?.controls)[key] && (form?.controls)[key]['controls'].length !== 0\">\n      <ng-template [ngTemplateOutlet]=\"columnLabelTemplate || defaultColumnLabelTemplate\" [ngTemplateOutletContext]=\"{ form: form, key: key, controlLabels: controlLabels }\">\n      </ng-template>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"(form?.controls)[key]\">\n    <div class=\"novo-control-group-row\" *ngFor=\"let control of (form?.controls)[key]['controls']; let index = index\">\n      <ng-template [ngTemplateOutlet]=\"rowTemplate || defaultTemplate\" [ngTemplateOutletContext]=\"{ form: form, index: index, key: key, controls: controls }\">\n      </ng-template>\n    </div>\n  </ng-container>\n  <div class=\"novo-control-group-empty\" *ngIf=\"(form?.controls)[key] && (form?.controls)[key]['controls'].length === 0\" [attr.data-automation-id]=\"'novo-control-group-empty-' + key\">\n    {{ emptyMessage }}\n  </div>\n  <p *ngIf=\"add\">\n    <button type=\"button\" theme=\"dialogue\" icon=\"add-thin\" (click)=\"addNewControl()\" [attr.data-automation-id]=\"'novo-control-group-bottom-add-' + key\" index=\"-1\">\n      {{ add?.label }}\n    </button>\n  </p>\n</div>\n",
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
    columnLabelTemplate: [{ type: Input }],
    onRemove: [{ type: Output }],
    onEdit: [{ type: Output }],
    onAdd: [{ type: Output }],
    change: [{ type: Output }]
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
    NovoControlGroup.prototype.columnLabelTemplate;
    /** @type {?} */
    NovoControlGroup.prototype.onRemove;
    /** @type {?} */
    NovoControlGroup.prototype.onEdit;
    /** @type {?} */
    NovoControlGroup.prototype.onAdd;
    /** @type {?} */
    NovoControlGroup.prototype.change;
    /** @type {?} */
    NovoControlGroup.prototype.controlLabels;
    /** @type {?} */
    NovoControlGroup.prototype.toggled;
    /** @type {?} */
    NovoControlGroup.prototype.disabledArray;
    /** @type {?} */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixZQUFZLEdBSWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFFckUsK0NBRUM7OztJQURDLDBDQUFjOzs7OztBQUdoQiwrQ0FHQzs7O0lBRkMseUNBQWM7O0lBQ2QsMkNBQWdCOztBQVFsQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBa0YzQixZQUFvQixTQUFvQixFQUFVLEVBQWUsRUFBVSxHQUFzQixFQUFVLE1BQXdCO1FBQS9HLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXpFM0gsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVdsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBU2hCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFTZCxpQkFB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dUY7O0lBQ3ZGLG1DQUFnQjs7SUFDaEIseUNBQXlEOztJQUV6RCx3Q0FBaUI7Ozs7O0lBRUwscUNBQTRCOzs7OztJQUFFLDhCQUF1Qjs7Ozs7SUFBRSwrQkFBOEI7Ozs7O0lBQUUsa0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkdcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJy4vY29udHJvbHMvQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIHtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnIHtcbiAgZWRpdDogYm9vbGVhbjtcbiAgcmVtb3ZlOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vQ29udHJvbEdyb3VwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xHcm91cCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vIFNldHMgdGhlIGRpc3BsYXkgb2YgdGhlIGdyb3VwIHRvIGVpdGhlciBiZSByb3cgKGRlZmF1bHQpIG9yIHZlcnRpY2FsIHZpYSBmbGV4LWJveFxuICBASW5wdXQoKVxuICBzZXQgdmVydGljYWwodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgLy8gSGlkZXMvc2hvd3MgdGhlIGFkZCBidXR0b24gZm9yIGFkZGluZyBhIG5ldyBjb250cm9sXG4gIEBJbnB1dCgpIGFkZDogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgLy8gSGlkZS9zaG93cyB0aGUgcmVtb3ZlIGJ1dHRvbiBmb3IgcmVtb3ZpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCByZW1vdmUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbW92ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmU7XG4gIH1cbiAgcHJpdmF0ZSBfcmVtb3ZlID0gZmFsc2U7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIGVkaXQgYnV0dG9uIGZvciBlZGl0aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgZWRpdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdDtcbiAgfVxuICBwcml2YXRlIF9lZGl0ID0gZmFsc2U7XG4gIC8vIEFsbG93cyB0aGUgY29udHJvbCB0byBjb2xsYXBzZSBvciBub3RcbiAgQElucHV0KClcbiAgc2V0IGNvbGxhcHNpYmxlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY29sbGFwc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlO1xuICB9XG4gIHByaXZhdGUgX2NvbGxhcHNpYmxlID0gZmFsc2U7XG4gIC8vIE1haW4gZm9ybSBncm91cFxuICBASW5wdXQoKSBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICAvLyBDb250cm9scyBmb3IgZWFjaCBpdGVtIGluIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdO1xuICAvLyBLZXkgb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9uIHRoZSBtYWluIGZvcm0pXG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xuICAvLyBMYWJlbCBvZiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAvLyBEZXNjcmlwdGlvbiBvZiB0aGUgY29udHJvbCBncm91cCAob25seSB1c2Ugd2l0aCBwb3NpdGlvbjpib3R0b20gQWRkIGJ1dHRvbiEpXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8vIE1lc3NhZ2UgdG8gZGlzcGxheSBpZiB0aGVyZSBhcmUgbm8gY29udHJvbHNcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIC8vIEljb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKGNhbiBoYXZlIGJoaSBwcmVmaXggb3Igbm90KVxuICBASW5wdXQoKVxuICBzZXQgaWNvbih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdiAmJiB2LmluZGV4T2YoJ2JoaScpICE9PSAtMSA/IHYgOiBgYmhpLSR7dn1gO1xuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgLy8gVGhlIGluaXRpYWwgdmFsdWUgb2JqZWN0LCB3aWxsIGNyZWF0ZSB0aGUgZm9ybSByb3dzIG9mZiBvZlxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHt9W107XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZWRpdFxuICBASW5wdXQoKSBjYW5FZGl0OiBGdW5jdGlvbjtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBkZWxldGVcbiAgQElucHV0KCkgY2FuUmVtb3ZlOiBGdW5jdGlvbjtcbiAgLy8gVGVtcGxhdGUgZm9yIGN1c3RvbSByb3cgcmVuZGVyaW5nXG4gIEBJbnB1dCgpIHJvd1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBUZW1wbGF0ZSBmb3IgY3VzdG9tIGNvbHVtbiBsYWJlbCByZW5kZXJpbmdcbiAgQElucHV0KCkgY29sdW1uTGFiZWxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgb25SZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29udHJvbExhYmVsczogeyB2YWx1ZTogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyByZXF1aXJlZDogYm9vbGVhbjsga2V5OiBzdHJpbmcgfVtdID0gW107XG4gIHRvZ2dsZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWRBcnJheTogeyBlZGl0OiBib29sZWFuOyByZW1vdmU6IGJvb2xlYW4gfVtdID0gW107XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3ZvLWNvbnRyb2wtZ3JvdXAgbXVzdCBoYXZlIHRoZSBba2V5XSBhdHRyaWJ1dGUgcHJvdmlkZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGluaXRpYWxWYWx1ZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snaW5pdGlhbFZhbHVlJ107XG5cbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGNoYW5nZXMsIGNsZWFyIHRoZSBjb250cm9sc1xuICAgIGlmIChpbml0aWFsVmFsdWVDaGFuZ2UgJiYgaW5pdGlhbFZhbHVlQ2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gaW5pdGlhbFZhbHVlQ2hhbmdlLnByZXZpb3VzVmFsdWUgJiYgIWluaXRpYWxWYWx1ZUNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jbGVhckNvbnRyb2xzKCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGFycmF5LCBhZGQgYSBjb250cm9sIGZvciBlYWNoIHZhbHVlXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbml0aWFsVmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHRoaXMuYWRkTmV3Q29udHJvbCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIC8vIElmIHZhbHVlIGlzIGFuIG9iamVjdCwganVzdCBhZGQgb25lIGNvbnRyb2xcbiAgICAgIHRoaXMuYWRkTmV3Q29udHJvbCh0aGlzLmluaXRpYWxWYWx1ZSk7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBob3Jpem9udGFsLCBncmFiIHRoZSBsYWJlbHMgdG8gaGVscCB3aXRoIGxheW91dFxuICAgIGlmICghdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5jb250cm9sTGFiZWxzID0gKHRoaXMuY29udHJvbHMgfHwgW10pLm1hcCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY29udHJvbC5sYWJlbCxcbiAgICAgICAgICB3aWR0aDogY29udHJvbC53aWR0aCxcbiAgICAgICAgICByZXF1aXJlZDogY29udHJvbC5yZXF1aXJlZCxcbiAgICAgICAgICBrZXk6IGNvbnRyb2wua2V5LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2UpIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgcmVzZXRBZGRSZW1vdmUoKSB7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LmZvckVhY2goKGl0ZW06IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpdGVtLmVkaXQgPSB0aGlzLmNoZWNrQ2FuRWRpdChpZHgpO1xuICAgICAgaXRlbS5yZW1vdmUgPSB0aGlzLmNoZWNrQ2FuUmVtb3ZlKGlkeCk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBhZGROZXdDb250cm9sKHZhbHVlPzoge30pIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgY29uc3QgbmV3Q3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuYnVpbGRDb250cm9sKHZhbHVlKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29udHJvbC5wdXNoKG5ld0N0cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCh0aGlzLmtleSwgdGhpcy5mYi5hcnJheShbbmV3Q3RybF0pKTtcbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LnB1c2goe1xuICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vbkFkZC5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBidWlsZENvbnRyb2wodmFsdWU/OiB7fSk6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gdGhpcy5nZXROZXdDb250cm9scyh0aGlzLmNvbnRyb2xzKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMobmV3Q29udHJvbHMsIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKG5ld0NvbnRyb2xzKTtcbiAgICByZXR1cm4gY3RybDtcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2woaW5kZXg6IG51bWJlciwgZW1pdEV2ZW50ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4IH0pO1xuICAgIH1cbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkgPSB0aGlzLmRpc2FibGVkQXJyYXkuZmlsdGVyKCh2YWx1ZTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gaW5kZXgpO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZWRpdENvbnRyb2woaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICB0aGlzLm9uRWRpdC5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgfVxuXG4gIHRvZ2dsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2xsYXBzaWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNvbnRyb2wuY29udHJvbHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbnRyb2woaSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5FZGl0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5FZGl0KSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICByZXR1cm4gdGhpcy5jYW5FZGl0KGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhblJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FuUmVtb3ZlKSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICBpZiAoY29udHJvbC5hdChpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuUmVtb3ZlKGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbnRyb2xzKGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdKSB7XG4gICAgY29uc3QgcmV0OiBCYXNlQ29udHJvbFtdID0gW107XG4gICAgKHRoaXMuY29udHJvbHMgfHwgW10pLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXQucHVzaChuZXcgQmFzZUNvbnRyb2woY29udHJvbC5fX3R5cGUsIGNvbnRyb2wpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=