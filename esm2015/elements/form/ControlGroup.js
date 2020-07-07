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
                template: "<h6 class=\"novo-section-header\" *ngIf=\"label\">\n  <span (click)=\"toggle($event)\" [class.clickable]=\"collapsible\">\n    <i *ngIf=\"icon && !collapsible\" [ngClass]=\"icon\" [attr.data-automation-id]=\"'novo-control-group-icon-' + key\"></i>\n    <i *ngIf=\"collapsible\" class=\"bhi-next\" [class.toggled]=\"toggled\" [attr.data-automation-id]=\"'novo-control-group-collapse-' + key\"></i>\n    <span [attr.data-automation-id]=\"'novo-control-group-label-' + key\">{{ label }}</span>\n  </span>\n  <label class=\"novo-control-group-description\" *ngIf=\"description\" [attr.data-automation-id]=\"'novo-control-group-description-' + key\">{{ description }}</label>\n</h6>\n<div class=\"novo-control-group-controls\" [class.vertical]=\"vertical\" [class.horizontal]=\"!vertical\" [class.hidden]=\"collapsible && !toggled\">\n  <ng-template #defaultTemplate let-index=\"index\" let-form=\"form\" let-key=\"key\">\n    <div class=\"novo-control-group-control\">\n      <div *ngFor=\"let c of controls\" class=\"novo-control-container {{c.key}}\" [class.is-label]=\"c.controlType === 'read-only'\" [style.max-width.px]=\"c.width\">\n        <novo-control (change)=\"onChange($event)\" [form]=\"(form?.controls)[key]['controls'][index]\" [control]=\"c\" [condensed]=\"!vertical || c.controlType === 'read-only'\"></novo-control>\n      </div>\n      <div class=\"novo-control-container last\" *ngIf=\"edit && !vertical\">\n        <button [disabled]=\"!disabledArray[index].edit\" type=\"button\" *ngIf=\"edit && !vertical\" theme=\"icon\" icon=\"edit\" (click)=\"editControl(index)\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\" index=\"-1\"></button>\n      </div>\n      <div class=\"novo-control-container last\" *ngIf=\"remove && !vertical\">\n        <button [disabled]=\"!disabledArray[index].remove\" type=\"button\" *ngIf=\"remove && !vertical\" theme=\"icon\" icon=\"delete-o\" (click)=\"removeControl(index)\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\" index=\"-1\"></button>\n      </div>\n    </div>\n    <button [disabled]=\"!disabledArray[index].edit\" type=\"button\" *ngIf=\"edit && vertical\" theme=\"icon\" icon=\"edit\" (click)=\"editControl(index)\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\" index=\"-1\"></button>\n    <button [disabled]=\"!disabledArray[index].remove\" type=\"button\" *ngIf=\"remove && vertical\" theme=\"icon\" icon=\"delete-o\" (click)=\"removeControl(index)\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\" index=\"-1\"></button>\n  </ng-template>\n  <div class=\"novo-control-group-labels\" *ngIf=\"!vertical && (form?.controls)[key] && (form?.controls)[key]['controls'].length !== 0\">\n    <div class=\"novo-control-group-control-label {{ label.key }}\" *ngFor=\"let label of controlLabels\" [style.max-width.px]=\"label.width\" [class.column-required]=\"label.required\">\n      <span [attr.data-automation-id]=\"'novo-control-group-label-' + label.value\">{{ label.value }}</span>\n    </div>\n    <div class=\"novo-control-group-control-label last\" *ngIf=\"edit\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\"></div>\n    <div class=\"novo-control-group-control-label last\" *ngIf=\"remove\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\"></div>\n  </div>\n  <ng-container *ngIf=\"(form?.controls)[key]\">\n    <div class=\"novo-control-group-row\" *ngFor=\"let control of (form?.controls)[key]['controls']; let index = index\">\n      <ng-template [ngTemplateOutlet]=\"rowTemplate || defaultTemplate\" [ngTemplateOutletContext]=\"{ form: form, index: index, key: key, controls: controls }\">\n      </ng-template>\n    </div>\n  </ng-container>\n  <div class=\"novo-control-group-empty\" *ngIf=\"(form?.controls)[key] && (form?.controls)[key]['controls'].length === 0\" [attr.data-automation-id]=\"'novo-control-group-empty-' + key\">\n    {{ emptyMessage }}\n  </div>\n  <p *ngIf=\"add\">\n    <button type=\"button\" theme=\"dialogue\" icon=\"add-thin\" (click)=\"addNewControl()\" [attr.data-automation-id]=\"'novo-control-group-bottom-add-' + key\" index=\"-1\">\n      {{ add?.label }}\n    </button>\n  </p>\n</div>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBRU4sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixZQUFZLEdBSWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFFckUsK0NBRUM7OztJQURDLDBDQUFjOzs7OztBQUdoQiwrQ0FHQzs7O0lBRkMseUNBQWM7O0lBQ2QsMkNBQWdCOztBQVFsQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBZ0YzQixZQUFvQixTQUFvQixFQUFVLEVBQWUsRUFBVSxHQUFzQixFQUFVLE1BQXdCO1FBQS9HLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQXZFM0gsY0FBUyxHQUFHLEtBQUssQ0FBQztRQVdsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBU2hCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFTZCxpQkFB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Q0FBeUQ7O0lBRXpELHdDQUFpQjs7Ozs7SUFFTCxxQ0FBNEI7Ozs7O0lBQUUsOEJBQXVCOzs7OztJQUFFLCtCQUE4Qjs7Ozs7SUFBRSxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Ob3ZvRm9ybUdyb3VwJztcbmltcG9ydCB7IEJhc2VDb250cm9sIH0gZnJvbSAnLi9jb250cm9scy9CYXNlQ29udHJvbCc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBBZGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcge1xuICBlZGl0OiBib29sZWFuO1xuICByZW1vdmU6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29udHJvbC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9Db250cm9sR3JvdXAuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29udHJvbEdyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gU2V0cyB0aGUgZGlzcGxheSBvZiB0aGUgZ3JvdXAgdG8gZWl0aGVyIGJlIHJvdyAoZGVmYXVsdCkgb3IgdmVydGljYWwgdmlhIGZsZXgtYm94XG4gIEBJbnB1dCgpXG4gIHNldCB2ZXJ0aWNhbCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICAvLyBIaWRlcy9zaG93cyB0aGUgYWRkIGJ1dHRvbiBmb3IgYWRkaW5nIGEgbmV3IGNvbnRyb2xcbiAgQElucHV0KCkgYWRkOiBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnO1xuICAvLyBIaWRlL3Nob3dzIHRoZSByZW1vdmUgYnV0dG9uIGZvciByZW1vdmluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IHJlbW92ZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVtb3ZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZTtcbiAgfVxuICBwcml2YXRlIF9yZW1vdmUgPSBmYWxzZTtcbiAgLy8gSGlkZS9zaG93cyB0aGUgZWRpdCBidXR0b24gZm9yIGVkaXRpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBlZGl0KCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0O1xuICB9XG4gIHByaXZhdGUgX2VkaXQgPSBmYWxzZTtcbiAgLy8gQWxsb3dzIHRoZSBjb250cm9sIHRvIGNvbGxhcHNlIG9yIG5vdFxuICBASW5wdXQoKVxuICBzZXQgY29sbGFwc2libGUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjb2xsYXBzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2libGU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sbGFwc2libGUgPSBmYWxzZTtcbiAgLy8gTWFpbiBmb3JtIGdyb3VwXG4gIEBJbnB1dCgpIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIC8vIENvbnRyb2xzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGNvbnRyb2wgZ3JvdXBcbiAgQElucHV0KCkgY29udHJvbHM6IEJhc2VDb250cm9sW107XG4gIC8vIEtleSBvZiB0aGUgY29udHJvbCBncm91cCAob24gdGhlIG1haW4gZm9ybSlcbiAgQElucHV0KCkga2V5OiBzdHJpbmc7XG4gIC8vIExhYmVsIG9mIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIC8vIERlc2NyaXB0aW9uIG9mIHRoZSBjb250cm9sIGdyb3VwIChvbmx5IHVzZSB3aXRoIHBvc2l0aW9uOmJvdHRvbSBBZGQgYnV0dG9uISlcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLy8gTWVzc2FnZSB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyBjb250cm9sc1xuICBASW5wdXQoKSBlbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgLy8gSWNvbiBvZiB0aGUgY29udHJvbCBncm91cCAoY2FuIGhhdmUgYmhpIHByZWZpeCBvciBub3QpXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2ICYmIHYuaW5kZXhPZignYmhpJykgIT09IC0xID8gdiA6IGBiaGktJHt2fWA7XG4gIH1cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICAvLyBUaGUgaW5pdGlhbCB2YWx1ZSBvYmplY3QsIHdpbGwgY3JlYXRlIHRoZSBmb3JtIHJvd3Mgb2ZmIG9mXG4gIEBJbnB1dCgpIGluaXRpYWxWYWx1ZToge31bXTtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBlZGl0XG4gIEBJbnB1dCgpIGNhbkVkaXQ6IEZ1bmN0aW9uO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGRlbGV0ZVxuICBASW5wdXQoKSBjYW5SZW1vdmU6IEZ1bmN0aW9uO1xuICAvLyBUZW1wbGF0ZSBmb3IgY3VzdG9tIHJvdyByZW5kZXJpbmdcbiAgQElucHV0KCkgcm93VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIG9uUmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlLCBpbmRleCB9PigpO1xuICBAT3V0cHV0KCkgb25FZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IHZhbHVlLCBpbmRleCB9PigpO1xuICBAT3V0cHV0KCkgb25BZGQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnRyb2xMYWJlbHM6IHsgdmFsdWU6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgcmVxdWlyZWQ6IGJvb2xlYW47IGtleTogc3RyaW5nIH1bXSA9IFtdO1xuICB0b2dnbGVkID0gZmFsc2U7XG4gIGRpc2FibGVkQXJyYXk6IHsgZWRpdDogYm9vbGVhbjsgcmVtb3ZlOiBib29sZWFuIH1bXSA9IFtdO1xuXG4gIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscywgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHsgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdm8tY29udHJvbC1ncm91cCBtdXN0IGhhdmUgdGhlIFtrZXldIGF0dHJpYnV0ZSBwcm92aWRlZCEnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgaW5pdGlhbFZhbHVlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWydpbml0aWFsVmFsdWUnXTtcblxuICAgIC8vIElmIGluaXRpYWwgdmFsdWUgY2hhbmdlcywgY2xlYXIgdGhlIGNvbnRyb2xzXG4gICAgaWYgKGluaXRpYWxWYWx1ZUNoYW5nZSAmJiBpbml0aWFsVmFsdWVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSBpbml0aWFsVmFsdWVDaGFuZ2UucHJldmlvdXNWYWx1ZSAmJiAhaW5pdGlhbFZhbHVlQ2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNsZWFyQ29udHJvbHMoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYXJyYXksIGFkZCBhIGNvbnRyb2wgZm9yIGVhY2ggdmFsdWVcbiAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmluaXRpYWxWYWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4gdGhpcy5hZGROZXdDb250cm9sKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSkge1xuICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gb2JqZWN0LCBqdXN0IGFkZCBvbmUgY29udHJvbFxuICAgICAgdGhpcy5hZGROZXdDb250cm9sKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGhvcml6b250YWwsIGdyYWIgdGhlIGxhYmVscyB0byBoZWxwIHdpdGggbGF5b3V0XG4gICAgaWYgKCF0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xMYWJlbHMgPSAodGhpcy5jb250cm9scyB8fCBbXSkubWFwKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBjb250cm9sLmxhYmVsLFxuICAgICAgICAgIHdpZHRoOiBjb250cm9sLndpZHRoLFxuICAgICAgICAgIHJlcXVpcmVkOiBjb250cm9sLnJlcXVpcmVkLFxuICAgICAgICAgIGtleTogY29udHJvbC5rZXksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZSkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcyk7XG4gIH1cblxuICByZXNldEFkZFJlbW92ZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkuZm9yRWFjaCgoaXRlbTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0uZWRpdCA9IHRoaXMuY2hlY2tDYW5FZGl0KGlkeCk7XG4gICAgICBpdGVtLnJlbW92ZSA9IHRoaXMuY2hlY2tDYW5SZW1vdmUoaWR4KTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGFkZE5ld0NvbnRyb2wodmFsdWU/OiB7fSkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBjb25zdCBuZXdDdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5idWlsZENvbnRyb2wodmFsdWUpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBjb250cm9sLnB1c2gobmV3Q3RybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKHRoaXMua2V5LCB0aGlzLmZiLmFycmF5KFtuZXdDdHJsXSkpO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVkQXJyYXkucHVzaCh7XG4gICAgICBlZGl0OiB0cnVlLFxuICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9uQWRkLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGJ1aWxkQ29udHJvbCh2YWx1ZT86IHt9KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgY29uc3QgbmV3Q29udHJvbHMgPSB0aGlzLmdldE5ld0NvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhuZXdDb250cm9scywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAobmV3Q29udHJvbHMpO1xuICAgIHJldHVybiBjdHJsO1xuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChpbmRleDogbnVtYmVyLCBlbWl0RXZlbnQgPSB0cnVlKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXggfSk7XG4gICAgfVxuICAgIGNvbnRyb2wucmVtb3ZlQXQoaW5kZXgpO1xuICAgIHRoaXMuZGlzYWJsZWRBcnJheSA9IHRoaXMuZGlzYWJsZWRBcnJheS5maWx0ZXIoKHZhbHVlOiBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnLCBpZHg6IG51bWJlcikgPT4gaWR4ICE9PSBpbmRleCk7XG4gICAgdGhpcy5yZXNldEFkZFJlbW92ZSgpO1xuICAgIHRoaXMuY3VycmVudEluZGV4LS07XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBlZGl0Q29udHJvbChpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIHRoaXMub25FZGl0LmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4IH0pO1xuICB9XG5cbiAgdG9nZ2xlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmNvbGxhcHNpYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZWQgPSAhdGhpcy50b2dnbGVkO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY29udHJvbC5jb250cm9scy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udHJvbChpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhbkVkaXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbkVkaXQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIHJldHVybiB0aGlzLmNhbkVkaXQoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2FuUmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5SZW1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIGlmIChjb250cm9sLmF0KGluZGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5SZW1vdmUoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29udHJvbHMoY29udHJvbHM6IEJhc2VDb250cm9sW10pIHtcbiAgICBjb25zdCByZXQ6IEJhc2VDb250cm9sW10gPSBbXTtcbiAgICAodGhpcy5jb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldC5wdXNoKG5ldyBCYXNlQ29udHJvbChjb250cm9sLl9fdHlwZSwgY29udHJvbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==