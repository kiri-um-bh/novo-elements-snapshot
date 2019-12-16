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
var NovoControlGroup = /** @class */ (function () {
    function NovoControlGroup(formUtils, fb, ref, labels) {
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
    Object.defineProperty(NovoControlGroup.prototype, "vertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        // Sets the display of the group to either be row (default) or vertical via flex-box
        set: 
        // Sets the display of the group to either be row (default) or vertical via flex-box
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._vertical = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "remove", {
        get: /**
         * @return {?}
         */
        function () {
            return this._remove;
        },
        // Hide/shows the remove button for removing a control
        set: 
        // Hide/shows the remove button for removing a control
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._remove = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "edit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._edit;
        },
        // Hide/shows the edit button for editing a control
        set: 
        // Hide/shows the edit button for editing a control
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._edit = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "collapsible", {
        get: /**
         * @return {?}
         */
        function () {
            return this._collapsible;
        },
        // Allows the control to collapse or not
        set: 
        // Allows the control to collapse or not
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._collapsible = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoControlGroup.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        // Icon of the control group (can have bhi prefix or not)
        set: 
        // Icon of the control group (can have bhi prefix or not)
        /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._icon = v && v.indexOf('bhi') !== -1 ? v : "bhi-" + v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoControlGroup.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (!this.key) {
            throw new Error('novo-control-group must have the [key] attribute provided!');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NovoControlGroup.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var initialValueChange = changes['initialValue'];
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
                function (value) { return _this.addNewControl(value); }));
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
            function (control) {
                return {
                    value: control.label,
                    width: control.width,
                    required: control.required,
                    key: control.key,
                };
            }));
            this.ref.markForCheck();
        }
    };
    /**
     * @param {?} change
     * @return {?}
     */
    NovoControlGroup.prototype.onChange = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.change.emit(this);
    };
    /**
     * @return {?}
     */
    NovoControlGroup.prototype.resetAddRemove = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.disabledArray.forEach((/**
         * @param {?} item
         * @param {?} idx
         * @return {?}
         */
        function (item, idx) {
            item.edit = _this.checkCanEdit(idx);
            item.remove = _this.checkCanRemove(idx);
        }));
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NovoControlGroup.prototype.addNewControl = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var control = (/** @type {?} */ (this.form.controls[this.key]));
        /** @type {?} */
        var newCtrl = this.buildControl(value);
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
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NovoControlGroup.prototype.buildControl = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var newControls = this.getNewControls(this.controls);
        if (value) {
            this.formUtils.setInitialValues(newControls, value);
        }
        /** @type {?} */
        var ctrl = this.formUtils.toFormGroup(newControls);
        return ctrl;
    };
    /**
     * @param {?} index
     * @param {?=} emitEvent
     * @return {?}
     */
    NovoControlGroup.prototype.removeControl = /**
     * @param {?} index
     * @param {?=} emitEvent
     * @return {?}
     */
    function (index, emitEvent) {
        if (emitEvent === void 0) { emitEvent = true; }
        /** @type {?} */
        var control = (/** @type {?} */ (this.form.controls[this.key]));
        if (emitEvent) {
            this.onRemove.emit({ value: control.at(index).value, index: index });
        }
        control.removeAt(index);
        this.disabledArray = this.disabledArray.filter((/**
         * @param {?} value
         * @param {?} idx
         * @return {?}
         */
        function (value, idx) { return idx !== index; }));
        this.resetAddRemove();
        this.currentIndex--;
        this.ref.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NovoControlGroup.prototype.editControl = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var control = (/** @type {?} */ (this.form.controls[this.key]));
        this.onEdit.emit({ value: control.at(index).value, index: index });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoControlGroup.prototype.toggle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        Helpers.swallowEvent(event);
        if (this.collapsible) {
            this.toggled = !this.toggled;
            this.ref.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NovoControlGroup.prototype.clearControls = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var control = (/** @type {?} */ (this.form.controls[this.key]));
        if (control) {
            for (var i = control.controls.length; i >= 0; i--) {
                this.removeControl(i, false);
            }
            this.currentIndex = 0;
        }
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NovoControlGroup.prototype.checkCanEdit = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.canEdit) {
            /** @type {?} */
            var control = (/** @type {?} */ (this.form.controls[this.key]));
            return this.canEdit(control.at(index).value, index);
        }
        return true;
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NovoControlGroup.prototype.checkCanRemove = /**
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.canRemove) {
            /** @type {?} */
            var control = (/** @type {?} */ (this.form.controls[this.key]));
            return this.canRemove(control.at(index).value, index);
        }
        return true;
    };
    /**
     * @private
     * @param {?} controls
     * @return {?}
     */
    NovoControlGroup.prototype.getNewControls = /**
     * @private
     * @param {?} controls
     * @return {?}
     */
    function (controls) {
        /** @type {?} */
        var ret = [];
        (this.controls || []).forEach((/**
         * @param {?} control
         * @return {?}
         */
        function (control) {
            ret.push(new BaseControl(control.__type, control));
        }));
        return ret;
    };
    NovoControlGroup.decorators = [
        { type: Component, args: [{
                    selector: 'novo-control-group',
                    template: "<h6 class=\"novo-section-header\" *ngIf=\"label\">\n  <span (click)=\"toggle($event)\" [class.clickable]=\"collapsible\">\n    <i *ngIf=\"icon && !collapsible\" [ngClass]=\"icon\" [attr.data-automation-id]=\"'novo-control-group-icon-' + key\"></i>\n    <i *ngIf=\"collapsible\" class=\"bhi-next\" [class.toggled]=\"toggled\" [attr.data-automation-id]=\"'novo-control-group-collapse-' + key\"></i>\n    <span [attr.data-automation-id]=\"'novo-control-group-label-' + key\">{{ label }}</span>\n  </span>\n  <label class=\"novo-control-group-description\" *ngIf=\"description\" [attr.data-automation-id]=\"'novo-control-group-description-' + key\">{{ description }}</label>\n</h6>\n<div class=\"novo-control-group-controls\" [class.vertical]=\"vertical\" [class.horizontal]=\"!vertical\" [class.hidden]=\"collapsible && !toggled\">\n  <ng-template #defaultTemplate let-index=\"index\" let-form=\"form\" let-key=\"key\">\n    <div class=\"novo-control-group-control\">\n      <div *ngFor=\"let c of controls\" class=\"novo-control-container {{c.key}}\" [class.is-label]=\"c.controlType === 'read-only'\" [style.max-width.px]=\"c.width\">\n        <novo-control (change)=\"onChange($event)\" [form]=\"(form?.controls)[key]['controls'][index]\" [control]=\"c\" [condensed]=\"!vertical || c.controlType === 'read-only'\"></novo-control>\n      </div>\n      <div class=\"novo-control-container last\" *ngIf=\"edit && !vertical\">\n        <button [disabled]=\"!disabledArray[index].edit\" type=\"button\" *ngIf=\"edit && !vertical\" theme=\"icon\" icon=\"edit\" (click)=\"editControl(index)\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\" index=\"-1\"></button>\n      </div>\n      <div class=\"novo-control-container last\" *ngIf=\"remove && !vertical\">\n        <button [disabled]=\"!disabledArray[index].remove\" type=\"button\" *ngIf=\"remove && !vertical\" theme=\"icon\" icon=\"delete-o\" (click)=\"removeControl(index)\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\" index=\"-1\"></button>\n      </div>\n    </div>\n    <button [disabled]=\"!disabledArray[index].edit\" type=\"button\" *ngIf=\"edit && vertical\" theme=\"icon\" icon=\"edit\" (click)=\"editControl(index)\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\" index=\"-1\"></button>\n    <button [disabled]=\"!disabledArray[index].remove\" type=\"button\" *ngIf=\"remove && vertical\" theme=\"icon\" icon=\"delete-o\" (click)=\"removeControl(index)\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\" index=\"-1\"></button>\n  </ng-template>\n  <div class=\"novo-control-group-labels\" *ngIf=\"!vertical && (form?.controls)[key] && (form?.controls)[key]['controls'].length !== 0\">\n    <div class=\"novo-control-group-control-label {{ label.key }}\" *ngFor=\"let label of controlLabels\" [style.max-width.px]=\"label.width\" [class.column-required]=\"label.required\">\n      <span [attr.data-automation-id]=\"'novo-control-group-label-' + label.value\">{{ label.value }}</span>\n    </div>\n    <div class=\"novo-control-group-control-label last\" *ngIf=\"edit\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\"></div>\n    <div class=\"novo-control-group-control-label last\" *ngIf=\"remove\" [attr.data-automation-id]=\"'novo-control-group-delete-' + key\"></div>\n  </div>\n  <ng-container *ngIf=\"(form?.controls)[key]\">\n    <div class=\"novo-control-group-row\" *ngFor=\"let control of (form?.controls)[key]['controls']; let index = index\">\n      <ng-template [ngTemplateOutlet]=\"rowTemplate || defaultTemplate\" [ngTemplateOutletContext]=\"{ form: form, index: index, key: key, controls: controls }\">\n      </ng-template>\n    </div>\n  </ng-container>\n  <div class=\"novo-control-group-empty\" *ngIf=\"(form?.controls)[key] && (form?.controls)[key]['controls'].length === 0\" [attr.data-automation-id]=\"'novo-control-group-empty-' + key\">\n    {{ emptyMessage }}\n  </div>\n  <p *ngIf=\"add\">\n    <button type=\"button\" theme=\"dialogue\" icon=\"add-thin\" (click)=\"addNewControl()\" [attr.data-automation-id]=\"'novo-control-group-bottom-add-' + key\" index=\"-1\">\n      {{ add?.label }}\n    </button>\n  </p>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NovoControlGroup.ctorParameters = function () { return [
        { type: FormUtils },
        { type: FormBuilder },
        { type: ChangeDetectorRef },
        { type: NovoLabelService }
    ]; };
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
    return NovoControlGroup;
}());
export { NovoControlGroup };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBR04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixZQUFZLEdBSWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFFckUsK0NBRUM7OztJQURDLDBDQUFjOzs7OztBQUdoQiwrQ0FHQzs7O0lBRkMseUNBQWM7O0lBQ2QsMkNBQWdCOztBQUdsQjtJQXFGRSwwQkFBb0IsU0FBb0IsRUFBVSxFQUFlLEVBQVUsR0FBc0IsRUFBVSxNQUF3QjtRQUEvRyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUF2RTNILGNBQVMsR0FBWSxLQUFLLENBQUM7UUFXM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVN6QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBU3ZCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBK0I1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OztJQUU3Qix3Q0FBOEI7Ozs7O0lBUzlCLGlDQUFzQjs7SUFFdEIsd0NBQTRCOztJQUU1QixtQ0FBMkI7O0lBRTNCLHFDQUE2Qjs7SUFFN0IsdUNBQXVDOztJQUV2QyxvQ0FBZ0U7O0lBQ2hFLGtDQUE4RDs7SUFDOUQsaUNBQTZEOztJQUM3RCxrQ0FBOEQ7O0lBRTlELHlDQUE4Rjs7SUFDOUYsbUNBQWdDOztJQUNoQyx5Q0FBZ0U7O0lBRWhFLHdDQUFpQjs7Ozs7SUFFTCxxQ0FBNEI7Ozs7O0lBQUUsOEJBQXVCOzs7OztJQUFFLCtCQUE4Qjs7Ozs7SUFBRSxrQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG4vLyBBcHBcbmltcG9ydCB7IE5vdm9Gb3JtR3JvdXAgfSBmcm9tICcuL05vdm9Gb3JtR3JvdXAnO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICcuL2NvbnRyb2xzL0Jhc2VDb250cm9sJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvZm9ybS11dGlscy9Gb3JtVXRpbHMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZyB7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZyB7XG4gIGVkaXQ6IGJvb2xlYW47XG4gIHJlbW92ZTogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jb250cm9sLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL0NvbnRyb2xHcm91cC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9Db250cm9sR3JvdXAgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICAvLyBTZXRzIHRoZSBkaXNwbGF5IG9mIHRoZSBncm91cCB0byBlaXRoZXIgYmUgcm93IChkZWZhdWx0KSBvciB2ZXJ0aWNhbCB2aWEgZmxleC1ib3hcbiAgQElucHV0KClcbiAgc2V0IHZlcnRpY2FsKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgdmVydGljYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG4gIHByaXZhdGUgX3ZlcnRpY2FsOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEhpZGVzL3Nob3dzIHRoZSBhZGQgYnV0dG9uIGZvciBhZGRpbmcgYSBuZXcgY29udHJvbFxuICBASW5wdXQoKSBhZGQ6IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWc7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIHJlbW92ZSBidXR0b24gZm9yIHJlbW92aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgcmVtb3ZlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZW1vdmUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlO1xuICB9XG4gIHByaXZhdGUgX3JlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBIaWRlL3Nob3dzIHRoZSBlZGl0IGJ1dHRvbiBmb3IgZWRpdGluZyBhIGNvbnRyb2xcbiAgQElucHV0KClcbiAgc2V0IGVkaXQodjogYm9vbGVhbikge1xuICAgIHRoaXMuX2VkaXQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGVkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXQ7XG4gIH1cbiAgcHJpdmF0ZSBfZWRpdDogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBBbGxvd3MgdGhlIGNvbnRyb2wgdG8gY29sbGFwc2Ugb3Igbm90XG4gIEBJbnB1dCgpXG4gIHNldCBjb2xsYXBzaWJsZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fY29sbGFwc2libGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodik7XG4gIH1cbiAgZ2V0IGNvbGxhcHNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2xsYXBzaWJsZTtcbiAgfVxuICBwcml2YXRlIF9jb2xsYXBzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBNYWluIGZvcm0gZ3JvdXBcbiAgQElucHV0KCkgZm9ybTogTm92b0Zvcm1Hcm91cDtcbiAgLy8gQ29udHJvbHMgZm9yIGVhY2ggaXRlbSBpbiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKSBjb250cm9sczogQmFzZUNvbnRyb2xbXTtcbiAgLy8gS2V5IG9mIHRoZSBjb250cm9sIGdyb3VwIChvbiB0aGUgbWFpbiBmb3JtKVxuICBASW5wdXQoKSBrZXk6IHN0cmluZztcbiAgLy8gTGFiZWwgb2YgdGhlIGNvbnRyb2wgZ3JvdXBcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgLy8gRGVzY3JpcHRpb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9ubHkgdXNlIHdpdGggcG9zaXRpb246Ym90dG9tIEFkZCBidXR0b24hKVxuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyBNZXNzYWdlIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIGNvbnRyb2xzXG4gIEBJbnB1dCgpIGVtcHR5TWVzc2FnZTogc3RyaW5nO1xuICAvLyBJY29uIG9mIHRoZSBjb250cm9sIGdyb3VwIChjYW4gaGF2ZSBiaGkgcHJlZml4IG9yIG5vdClcbiAgQElucHV0KClcbiAgc2V0IGljb24odjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IHYgJiYgdi5pbmRleE9mKCdiaGknKSAhPT0gLTEgPyB2IDogYGJoaS0ke3Z9YDtcbiAgfVxuICBnZXQgaWNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5faWNvbjtcbiAgfVxuICBwcml2YXRlIF9pY29uOiBzdHJpbmc7XG4gIC8vIFRoZSBpbml0aWFsIHZhbHVlIG9iamVjdCwgd2lsbCBjcmVhdGUgdGhlIGZvcm0gcm93cyBvZmYgb2ZcbiAgQElucHV0KCkgaW5pdGlhbFZhbHVlOiB7fVtdO1xuICAvLyBDYWxsYmFjayB0byBkZXRlcm1pbmUgaWYgdGhlIHVzZXIgY2FuIGVkaXRcbiAgQElucHV0KCkgY2FuRWRpdDogRnVuY3Rpb247XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZGVsZXRlXG4gIEBJbnB1dCgpIGNhblJlbW92ZTogRnVuY3Rpb247XG4gIC8vIFRlbXBsYXRlIGZvciBjdXN0b20gcm93IHJlbmRlcmluZ1xuICBASW5wdXQoKSByb3dUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgb25SZW1vdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkFkZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwdWJsaWMgY29udHJvbExhYmVsczogeyB2YWx1ZTogc3RyaW5nOyB3aWR0aDogbnVtYmVyOyByZXF1aXJlZDogYm9vbGVhbjsga2V5OiBzdHJpbmcgfVtdID0gW107XG4gIHB1YmxpYyB0b2dnbGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkaXNhYmxlZEFycmF5OiB7IGVkaXQ6IGJvb2xlYW47IHJlbW92ZTogYm9vbGVhbiB9W10gPSBbXTtcblxuICBjdXJyZW50SW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7fVxuXG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3ZvLWNvbnRyb2wtZ3JvdXAgbXVzdCBoYXZlIHRoZSBba2V5XSBhdHRyaWJ1dGUgcHJvdmlkZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgaW5pdGlhbFZhbHVlQ2hhbmdlOiBTaW1wbGVDaGFuZ2UgPSBjaGFuZ2VzWydpbml0aWFsVmFsdWUnXTtcblxuICAgIC8vIElmIGluaXRpYWwgdmFsdWUgY2hhbmdlcywgY2xlYXIgdGhlIGNvbnRyb2xzXG4gICAgaWYgKGluaXRpYWxWYWx1ZUNoYW5nZSAmJiBpbml0aWFsVmFsdWVDaGFuZ2UuY3VycmVudFZhbHVlICE9PSBpbml0aWFsVmFsdWVDaGFuZ2UucHJldmlvdXNWYWx1ZSAmJiAhaW5pdGlhbFZhbHVlQ2hhbmdlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNsZWFyQ29udHJvbHMoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYXJyYXksIGFkZCBhIGNvbnRyb2wgZm9yIGVhY2ggdmFsdWVcbiAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLmluaXRpYWxWYWx1ZSkpIHtcbiAgICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB0aGlzLmluaXRpYWxWYWx1ZS5mb3JFYWNoKCh2YWx1ZSkgPT4gdGhpcy5hZGROZXdDb250cm9sKHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxWYWx1ZSkge1xuICAgICAgLy8gSWYgdmFsdWUgaXMgYW4gb2JqZWN0LCBqdXN0IGFkZCBvbmUgY29udHJvbFxuICAgICAgdGhpcy5hZGROZXdDb250cm9sKHRoaXMuaW5pdGlhbFZhbHVlKTtcbiAgICB9XG4gICAgLy8gSWYgd2UgYXJlIGhvcml6b250YWwsIGdyYWIgdGhlIGxhYmVscyB0byBoZWxwIHdpdGggbGF5b3V0XG4gICAgaWYgKCF0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xMYWJlbHMgPSAodGhpcy5jb250cm9scyB8fCBbXSkubWFwKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOiBjb250cm9sLmxhYmVsLFxuICAgICAgICAgIHdpZHRoOiBjb250cm9sLndpZHRoLFxuICAgICAgICAgIHJlcXVpcmVkOiBjb250cm9sLnJlcXVpcmVkLFxuICAgICAgICAgIGtleTogY29udHJvbC5rZXksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNoYW5nZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldEFkZFJlbW92ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkuZm9yRWFjaCgoaXRlbTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0uZWRpdCA9IHRoaXMuY2hlY2tDYW5FZGl0KGlkeCk7XG4gICAgICBpdGVtLnJlbW92ZSA9IHRoaXMuY2hlY2tDYW5SZW1vdmUoaWR4KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGROZXdDb250cm9sKHZhbHVlPzoge30pOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgY29uc3QgbmV3Q3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuYnVpbGRDb250cm9sKHZhbHVlKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29udHJvbC5wdXNoKG5ld0N0cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCh0aGlzLmtleSwgdGhpcy5mYi5hcnJheShbbmV3Q3RybF0pKTtcbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LnB1c2goe1xuICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vbkFkZC5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGRDb250cm9sKHZhbHVlPzoge30pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBjb25zdCBuZXdDb250cm9scyA9IHRoaXMuZ2V0TmV3Q29udHJvbHModGhpcy5jb250cm9scyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKG5ld0NvbnRyb2xzLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGN0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cChuZXdDb250cm9scyk7XG4gICAgcmV0dXJuIGN0cmw7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ29udHJvbChpbmRleDogbnVtYmVyLCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXg6IGluZGV4IH0pO1xuICAgIH1cbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkgPSB0aGlzLmRpc2FibGVkQXJyYXkuZmlsdGVyKCh2YWx1ZTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gaW5kZXgpO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGVkaXRDb250cm9sKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgdGhpcy5vbkVkaXQuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2xsYXBzaWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNvbnRyb2wuY29udHJvbHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbnRyb2woaSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5FZGl0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5FZGl0KSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICByZXR1cm4gdGhpcy5jYW5FZGl0KGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhblJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FuUmVtb3ZlKSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICByZXR1cm4gdGhpcy5jYW5SZW1vdmUoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbnRyb2xzKGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdKSB7XG4gICAgbGV0IHJldDogQmFzZUNvbnRyb2xbXSA9IFtdO1xuICAgICh0aGlzLmNvbnRyb2xzIHx8IFtdKS5mb3JFYWNoKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgcmV0LnB1c2gobmV3IEJhc2VDb250cm9sKGNvbnRyb2wuX190eXBlLCBjb250cm9sKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19