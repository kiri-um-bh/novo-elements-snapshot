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
                    required: control.required,
                    key: control.key,
                };
            });
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
        this.disabledArray.forEach((item, idx) => {
            item.edit = this.checkCanEdit(idx);
            item.remove = this.checkCanRemove(idx);
        });
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
            this.onRemove.emit({ value: control.at(index).value, index: index });
        }
        control.removeAt(index);
        this.disabledArray = this.disabledArray.filter((value, idx) => idx !== index);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFHTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVyRSwrQ0FFQzs7O0lBREMsMENBQWM7Ozs7O0FBR2hCLCtDQUdDOzs7SUFGQyx5Q0FBYzs7SUFDZCwyQ0FBZ0I7O0FBUWxCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFnRjNCLFlBQW9CLFNBQW9CLEVBQVUsRUFBZSxFQUFVLEdBQXNCLEVBQVUsTUFBd0I7UUFBL0csY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBdkUzSCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBVzNCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFTekIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQVN2QixpQkFB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bmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuLy8gQXBwXG5pbXBvcnQgeyBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Ob3ZvRm9ybUdyb3VwJztcbmltcG9ydCB7IEJhc2VDb250cm9sIH0gZnJvbSAnLi9jb250cm9scy9CYXNlQ29udHJvbCc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBBZGRDb25maWcge1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcge1xuICBlZGl0OiBib29sZWFuO1xuICByZW1vdmU6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29udHJvbC1ncm91cCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9Db250cm9sR3JvdXAuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ29udHJvbEdyb3VwIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8gU2V0cyB0aGUgZGlzcGxheSBvZiB0aGUgZ3JvdXAgdG8gZWl0aGVyIGJlIHJvdyAoZGVmYXVsdCkgb3IgdmVydGljYWwgdmlhIGZsZXgtYm94XG4gIEBJbnB1dCgpXG4gIHNldCB2ZXJ0aWNhbCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fdmVydGljYWwgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHZlcnRpY2FsKCkge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuICBwcml2YXRlIF92ZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBIaWRlcy9zaG93cyB0aGUgYWRkIGJ1dHRvbiBmb3IgYWRkaW5nIGEgbmV3IGNvbnRyb2xcbiAgQElucHV0KCkgYWRkOiBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnO1xuICAvLyBIaWRlL3Nob3dzIHRoZSByZW1vdmUgYnV0dG9uIGZvciByZW1vdmluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IHJlbW92ZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVtb3ZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCByZW1vdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZTtcbiAgfVxuICBwcml2YXRlIF9yZW1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gSGlkZS9zaG93cyB0aGUgZWRpdCBidXR0b24gZm9yIGVkaXRpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBlZGl0KCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0O1xuICB9XG4gIHByaXZhdGUgX2VkaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gQWxsb3dzIHRoZSBjb250cm9sIHRvIGNvbGxhcHNlIG9yIG5vdFxuICBASW5wdXQoKVxuICBzZXQgY29sbGFwc2libGUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2NvbGxhcHNpYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCBjb2xsYXBzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29sbGFwc2libGU7XG4gIH1cbiAgcHJpdmF0ZSBfY29sbGFwc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gTWFpbiBmb3JtIGdyb3VwXG4gIEBJbnB1dCgpIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIC8vIENvbnRyb2xzIGZvciBlYWNoIGl0ZW0gaW4gdGhlIGNvbnRyb2wgZ3JvdXBcbiAgQElucHV0KCkgY29udHJvbHM6IEJhc2VDb250cm9sW107XG4gIC8vIEtleSBvZiB0aGUgY29udHJvbCBncm91cCAob24gdGhlIG1haW4gZm9ybSlcbiAgQElucHV0KCkga2V5OiBzdHJpbmc7XG4gIC8vIExhYmVsIG9mIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIC8vIERlc2NyaXB0aW9uIG9mIHRoZSBjb250cm9sIGdyb3VwIChvbmx5IHVzZSB3aXRoIHBvc2l0aW9uOmJvdHRvbSBBZGQgYnV0dG9uISlcbiAgQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLy8gTWVzc2FnZSB0byBkaXNwbGF5IGlmIHRoZXJlIGFyZSBubyBjb250cm9sc1xuICBASW5wdXQoKSBlbXB0eU1lc3NhZ2U6IHN0cmluZztcbiAgLy8gSWNvbiBvZiB0aGUgY29udHJvbCBncm91cCAoY2FuIGhhdmUgYmhpIHByZWZpeCBvciBub3QpXG4gIEBJbnB1dCgpXG4gIHNldCBpY29uKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2ljb24gPSB2ICYmIHYuaW5kZXhPZignYmhpJykgIT09IC0xID8gdiA6IGBiaGktJHt2fWA7XG4gIH1cbiAgZ2V0IGljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ljb247XG4gIH1cbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuICAvLyBUaGUgaW5pdGlhbCB2YWx1ZSBvYmplY3QsIHdpbGwgY3JlYXRlIHRoZSBmb3JtIHJvd3Mgb2ZmIG9mXG4gIEBJbnB1dCgpIGluaXRpYWxWYWx1ZToge31bXTtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBlZGl0XG4gIEBJbnB1dCgpIGNhbkVkaXQ6IEZ1bmN0aW9uO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGRlbGV0ZVxuICBASW5wdXQoKSBjYW5SZW1vdmU6IEZ1bmN0aW9uO1xuICAvLyBUZW1wbGF0ZSBmb3IgY3VzdG9tIHJvdyByZW5kZXJpbmdcbiAgQElucHV0KCkgcm93VGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIG9uUmVtb3ZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25FZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25BZGQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHVibGljIGNvbnRyb2xMYWJlbHM6IHsgdmFsdWU6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgcmVxdWlyZWQ6IGJvb2xlYW47IGtleTogc3RyaW5nIH1bXSA9IFtdO1xuICBwdWJsaWMgdG9nZ2xlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGlzYWJsZWRBcnJheTogeyBlZGl0OiBib29sZWFuOyByZW1vdmU6IGJvb2xlYW4gfVtdID0gW107XG5cbiAgY3VycmVudEluZGV4ID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1VdGlsczogRm9ybVV0aWxzLCBwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge31cblxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5rZXkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm92by1jb250cm9sLWdyb3VwIG11c3QgaGF2ZSB0aGUgW2tleV0gYXR0cmlidXRlIHByb3ZpZGVkIScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgbGV0IGluaXRpYWxWYWx1ZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snaW5pdGlhbFZhbHVlJ107XG5cbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGNoYW5nZXMsIGNsZWFyIHRoZSBjb250cm9sc1xuICAgIGlmIChpbml0aWFsVmFsdWVDaGFuZ2UgJiYgaW5pdGlhbFZhbHVlQ2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gaW5pdGlhbFZhbHVlQ2hhbmdlLnByZXZpb3VzVmFsdWUgJiYgIWluaXRpYWxWYWx1ZUNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jbGVhckNvbnRyb2xzKCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGFycmF5LCBhZGQgYSBjb250cm9sIGZvciBlYWNoIHZhbHVlXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbml0aWFsVmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHRoaXMuYWRkTmV3Q29udHJvbCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIC8vIElmIHZhbHVlIGlzIGFuIG9iamVjdCwganVzdCBhZGQgb25lIGNvbnRyb2xcbiAgICAgIHRoaXMuYWRkTmV3Q29udHJvbCh0aGlzLmluaXRpYWxWYWx1ZSk7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBob3Jpem9udGFsLCBncmFiIHRoZSBsYWJlbHMgdG8gaGVscCB3aXRoIGxheW91dFxuICAgIGlmICghdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5jb250cm9sTGFiZWxzID0gKHRoaXMuY29udHJvbHMgfHwgW10pLm1hcCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY29udHJvbC5sYWJlbCxcbiAgICAgICAgICB3aWR0aDogY29udHJvbC53aWR0aCxcbiAgICAgICAgICByZXF1aXJlZDogY29udHJvbC5yZXF1aXJlZCxcbiAgICAgICAgICBrZXk6IGNvbnRyb2wua2V5LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2U6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRBZGRSZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LmZvckVhY2goKGl0ZW06IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpdGVtLmVkaXQgPSB0aGlzLmNoZWNrQ2FuRWRpdChpZHgpO1xuICAgICAgaXRlbS5yZW1vdmUgPSB0aGlzLmNoZWNrQ2FuUmVtb3ZlKGlkeCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYWRkTmV3Q29udHJvbCh2YWx1ZT86IHt9KTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGNvbnN0IG5ld0N0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmJ1aWxkQ29udHJvbCh2YWx1ZSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGNvbnRyb2wucHVzaChuZXdDdHJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wodGhpcy5rZXksIHRoaXMuZmIuYXJyYXkoW25ld0N0cmxdKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5wdXNoKHtcbiAgICAgIGVkaXQ6IHRydWUsXG4gICAgICByZW1vdmU6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5yZXNldEFkZFJlbW92ZSgpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMub25BZGQuZW1pdCgpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkQ29udHJvbCh2YWx1ZT86IHt9KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgY29uc3QgbmV3Q29udHJvbHMgPSB0aGlzLmdldE5ld0NvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhuZXdDb250cm9scywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAobmV3Q29udHJvbHMpO1xuICAgIHJldHVybiBjdHJsO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUNvbnRyb2woaW5kZXg6IG51bWJlciwgZW1pdEV2ZW50OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4OiBpbmRleCB9KTtcbiAgICB9XG4gICAgY29udHJvbC5yZW1vdmVBdChpbmRleCk7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5ID0gdGhpcy5kaXNhYmxlZEFycmF5LmZpbHRlcigodmFsdWU6IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IGluZGV4KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBlZGl0Q29udHJvbChpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIHRoaXMub25FZGl0LmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4OiBpbmRleCB9KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMuY29sbGFwc2libGUpIHtcbiAgICAgIHRoaXMudG9nZ2xlZCA9ICF0aGlzLnRvZ2dsZWQ7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyQ29udHJvbHMoKSB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSBjb250cm9sLmNvbnRyb2xzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdGhpcy5yZW1vdmVDb250cm9sKGksIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2FuRWRpdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FuRWRpdCkge1xuICAgICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgICAgcmV0dXJuIHRoaXMuY2FuRWRpdChjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5SZW1vdmUoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhblJlbW92ZSkge1xuICAgICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgICAgcmV0dXJuIHRoaXMuY2FuUmVtb3ZlKGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXdDb250cm9scyhjb250cm9sczogQmFzZUNvbnRyb2xbXSkge1xuICAgIGxldCByZXQ6IEJhc2VDb250cm9sW10gPSBbXTtcbiAgICAodGhpcy5jb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldC5wdXNoKG5ldyBCYXNlQ29udHJvbChjb250cm9sLl9fdHlwZSwgY29udHJvbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==