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
                this.initialValue.forEach(function (value) { return _this.addNewControl(value); });
            }
        }
        else if (this.initialValue) {
            // If value is an object, just add one control
            this.addNewControl(this.initialValue);
        }
        // If we are horizontal, grab the labels to help with layout
        if (!this.vertical) {
            this.controlLabels = (this.controls || []).map(function (control) {
                return {
                    value: control.label,
                    width: control.width,
                    required: control.required,
                    key: control.key,
                };
            });
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
        this.disabledArray.forEach(function (item, idx) {
            item.edit = _this.checkCanEdit(idx);
            item.remove = _this.checkCanRemove(idx);
        });
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
        if (this.associatedKeyName && this.associatedKeyValue) {
            ctrl.associatedKey = { name: this.associatedKeyName, value: this.associatedKeyValue };
        }
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
        this.disabledArray = this.disabledArray.filter(function (value, idx) { return idx !== index; });
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
        (this.controls || []).forEach(function (control) {
            ret.push(new BaseControl(control.__type, control));
        });
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
        associatedKeyName: [{ type: Input }],
        associatedKeyValue: [{ type: Input }],
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
    NovoControlGroup.prototype.associatedKeyName;
    /** @type {?} */
    NovoControlGroup.prototype.associatedKeyValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFHTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFlBQVksR0FJYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBRTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7OztBQUVyRSwrQ0FFQzs7O0lBREMsMENBQWM7Ozs7O0FBR2hCLCtDQUdDOzs7SUFGQyx5Q0FBYzs7SUFDZCwyQ0FBZ0I7O0FBR2xCO0lBd0ZFLDBCQUFvQixTQUFvQixFQUFVLEVBQWUsRUFBVSxHQUFzQixFQUFVLE1BQXdCO1FBQS9HLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQTFFM0gsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVczQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBU3pCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFTdkIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFrQzVC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aE9ZLGdCQUFnQjs7Ozs7O0lBUzNCLHFDQUFtQzs7SUFFbkMsK0JBQXdDOzs7OztJQVN4QyxtQ0FBaUM7Ozs7O0lBU2pDLGlDQUErQjs7Ozs7SUFTL0Isd0NBQXNDOztJQUV0QyxnQ0FBNkI7O0lBRTdCLG9DQUFpQzs7SUFFakMsK0JBQXFCOztJQUVyQixpQ0FBdUI7O0lBRXZCLHVDQUE2Qjs7SUFFN0Isd0NBQThCOzs7OztJQVM5QixpQ0FBc0I7O0lBRXRCLHdDQUE0Qjs7SUFFNUIsbUNBQTJCOztJQUUzQixxQ0FBNkI7O0lBRTdCLHVDQUF1Qzs7SUFFdkMsNkNBQW1DOztJQUNuQyw4Q0FBdUQ7O0lBRXZELG9DQUFnRTs7SUFDaEUsa0NBQThEOztJQUM5RCxpQ0FBNkQ7O0lBQzdELGtDQUE4RDs7SUFFOUQseUNBQThGOztJQUM5RixtQ0FBZ0M7O0lBQ2hDLHlDQUFnRTs7SUFFaEUsd0NBQWlCOzs7OztJQUVMLHFDQUE0Qjs7Ozs7SUFBRSw4QkFBdUI7Ozs7O0lBQUUsK0JBQThCOzs7OztJQUFFLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJy4vY29udHJvbHMvQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIHtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnIHtcbiAgZWRpdDogYm9vbGVhbjtcbiAgcmVtb3ZlOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vQ29udHJvbEdyb3VwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xHcm91cCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vIFNldHMgdGhlIGRpc3BsYXkgb2YgdGhlIGdyb3VwIHRvIGVpdGhlciBiZSByb3cgKGRlZmF1bHQpIG9yIHZlcnRpY2FsIHZpYSBmbGV4LWJveFxuICBASW5wdXQoKVxuICBzZXQgdmVydGljYWwodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gSGlkZXMvc2hvd3MgdGhlIGFkZCBidXR0b24gZm9yIGFkZGluZyBhIG5ldyBjb250cm9sXG4gIEBJbnB1dCgpIGFkZDogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgLy8gSGlkZS9zaG93cyB0aGUgcmVtb3ZlIGJ1dHRvbiBmb3IgcmVtb3ZpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCByZW1vdmUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbW92ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmU7XG4gIH1cbiAgcHJpdmF0ZSBfcmVtb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIGVkaXQgYnV0dG9uIGZvciBlZGl0aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgZWRpdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdDtcbiAgfVxuICBwcml2YXRlIF9lZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEFsbG93cyB0aGUgY29udHJvbCB0byBjb2xsYXBzZSBvciBub3RcbiAgQElucHV0KClcbiAgc2V0IGNvbGxhcHNpYmxlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY29sbGFwc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlO1xuICB9XG4gIHByaXZhdGUgX2NvbGxhcHNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIE1haW4gZm9ybSBncm91cFxuICBASW5wdXQoKSBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICAvLyBDb250cm9scyBmb3IgZWFjaCBpdGVtIGluIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdO1xuICAvLyBLZXkgb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9uIHRoZSBtYWluIGZvcm0pXG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xuICAvLyBMYWJlbCBvZiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAvLyBEZXNjcmlwdGlvbiBvZiB0aGUgY29udHJvbCBncm91cCAob25seSB1c2Ugd2l0aCBwb3NpdGlvbjpib3R0b20gQWRkIGJ1dHRvbiEpXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8vIE1lc3NhZ2UgdG8gZGlzcGxheSBpZiB0aGVyZSBhcmUgbm8gY29udHJvbHNcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIC8vIEljb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKGNhbiBoYXZlIGJoaSBwcmVmaXggb3Igbm90KVxuICBASW5wdXQoKVxuICBzZXQgaWNvbih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdiAmJiB2LmluZGV4T2YoJ2JoaScpICE9PSAtMSA/IHYgOiBgYmhpLSR7dn1gO1xuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgLy8gVGhlIGluaXRpYWwgdmFsdWUgb2JqZWN0LCB3aWxsIGNyZWF0ZSB0aGUgZm9ybSByb3dzIG9mZiBvZlxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHt9W107XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZWRpdFxuICBASW5wdXQoKSBjYW5FZGl0OiBGdW5jdGlvbjtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBkZWxldGVcbiAgQElucHV0KCkgY2FuUmVtb3ZlOiBGdW5jdGlvbjtcbiAgLy8gVGVtcGxhdGUgZm9yIGN1c3RvbSByb3cgcmVuZGVyaW5nXG4gIEBJbnB1dCgpIHJvd1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvLyBLZXlzIHRvIGFzc29jaWF0ZSB0aGlzIGdyb3VwIHRvIGFub3RoZXIgZ3JvdXBcbiAgQElucHV0KCkgYXNzb2NpYXRlZEtleU5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgYXNzb2NpYXRlZEtleVZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBjb250cm9sTGFiZWxzOiB7IHZhbHVlOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IHJlcXVpcmVkOiBib29sZWFuOyBrZXk6IHN0cmluZyB9W10gPSBbXTtcbiAgcHVibGljIHRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVkQXJyYXk6IHsgZWRpdDogYm9vbGVhbjsgcmVtb3ZlOiBib29sZWFuIH1bXSA9IFtdO1xuXG4gIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscywgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdm8tY29udHJvbC1ncm91cCBtdXN0IGhhdmUgdGhlIFtrZXldIGF0dHJpYnV0ZSBwcm92aWRlZCEnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGxldCBpbml0aWFsVmFsdWVDaGFuZ2U6IFNpbXBsZUNoYW5nZSA9IGNoYW5nZXNbJ2luaXRpYWxWYWx1ZSddO1xuXG4gICAgLy8gSWYgaW5pdGlhbCB2YWx1ZSBjaGFuZ2VzLCBjbGVhciB0aGUgY29udHJvbHNcbiAgICBpZiAoaW5pdGlhbFZhbHVlQ2hhbmdlICYmIGluaXRpYWxWYWx1ZUNoYW5nZS5jdXJyZW50VmFsdWUgIT09IGluaXRpYWxWYWx1ZUNoYW5nZS5wcmV2aW91c1ZhbHVlICYmICFpbml0aWFsVmFsdWVDaGFuZ2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2xlYXJDb250cm9scygpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBhcnJheSwgYWRkIGEgY29udHJvbCBmb3IgZWFjaCB2YWx1ZVxuICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSAmJiBBcnJheS5pc0FycmF5KHRoaXMuaW5pdGlhbFZhbHVlKSkge1xuICAgICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHRoaXMuaW5pdGlhbFZhbHVlLmZvckVhY2goKHZhbHVlKSA9PiB0aGlzLmFkZE5ld0NvbnRyb2wodmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaW5pdGlhbFZhbHVlKSB7XG4gICAgICAvLyBJZiB2YWx1ZSBpcyBhbiBvYmplY3QsIGp1c3QgYWRkIG9uZSBjb250cm9sXG4gICAgICB0aGlzLmFkZE5ld0NvbnRyb2wodGhpcy5pbml0aWFsVmFsdWUpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSBhcmUgaG9yaXpvbnRhbCwgZ3JhYiB0aGUgbGFiZWxzIHRvIGhlbHAgd2l0aCBsYXlvdXRcbiAgICBpZiAoIXRoaXMudmVydGljYWwpIHtcbiAgICAgIHRoaXMuY29udHJvbExhYmVscyA9ICh0aGlzLmNvbnRyb2xzIHx8IFtdKS5tYXAoKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6IGNvbnRyb2wubGFiZWwsXG4gICAgICAgICAgd2lkdGg6IGNvbnRyb2wud2lkdGgsXG4gICAgICAgICAgcmVxdWlyZWQ6IGNvbnRyb2wucmVxdWlyZWQsXG4gICAgICAgICAga2V5OiBjb250cm9sLmtleSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0QWRkUmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5mb3JFYWNoKChpdGVtOiBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnLCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgaXRlbS5lZGl0ID0gdGhpcy5jaGVja0NhbkVkaXQoaWR4KTtcbiAgICAgIGl0ZW0ucmVtb3ZlID0gdGhpcy5jaGVja0NhblJlbW92ZShpZHgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFkZE5ld0NvbnRyb2wodmFsdWU/OiB7fSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBjb25zdCBuZXdDdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5idWlsZENvbnRyb2wodmFsdWUpO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICBjb250cm9sLnB1c2gobmV3Q3RybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZm9ybS5hZGRDb250cm9sKHRoaXMua2V5LCB0aGlzLmZiLmFycmF5KFtuZXdDdHJsXSkpO1xuICAgIH1cbiAgICB0aGlzLmRpc2FibGVkQXJyYXkucHVzaCh7XG4gICAgICBlZGl0OiB0cnVlLFxuICAgICAgcmVtb3ZlOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLm9uQWRkLmVtaXQoKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50SW5kZXgrKztcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZENvbnRyb2wodmFsdWU/OiB7fSk6IE5vdm9Gb3JtR3JvdXAge1xuICAgIGNvbnN0IG5ld0NvbnRyb2xzID0gdGhpcy5nZXROZXdDb250cm9scyh0aGlzLmNvbnRyb2xzKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZm9ybVV0aWxzLnNldEluaXRpYWxWYWx1ZXMobmV3Q29udHJvbHMsIHZhbHVlKTtcbiAgICB9XG4gICAgY29uc3QgY3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuZm9ybVV0aWxzLnRvRm9ybUdyb3VwKG5ld0NvbnRyb2xzKTtcbiAgICBpZiAodGhpcy5hc3NvY2lhdGVkS2V5TmFtZSAmJiB0aGlzLmFzc29jaWF0ZWRLZXlWYWx1ZSkge1xuICAgICAgY3RybC5hc3NvY2lhdGVkS2V5ID0geyBuYW1lOiB0aGlzLmFzc29jaWF0ZWRLZXlOYW1lLCB2YWx1ZTogdGhpcy5hc3NvY2lhdGVkS2V5VmFsdWUgfTtcbiAgICB9XG4gICAgcmV0dXJuIGN0cmw7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQ29udHJvbChpbmRleDogbnVtYmVyLCBlbWl0RXZlbnQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGlmIChlbWl0RXZlbnQpIHtcbiAgICAgIHRoaXMub25SZW1vdmUuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXg6IGluZGV4IH0pO1xuICAgIH1cbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkgPSB0aGlzLmRpc2FibGVkQXJyYXkuZmlsdGVyKCh2YWx1ZTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gaW5kZXgpO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGVkaXRDb250cm9sKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgdGhpcy5vbkVkaXQuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXg6IGluZGV4IH0pO1xuICB9XG5cbiAgcHVibGljIHRvZ2dsZShldmVudDogTW91c2VFdmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICBpZiAodGhpcy5jb2xsYXBzaWJsZSkge1xuICAgICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJDb250cm9scygpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IGNvbnRyb2wuY29udHJvbHMubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgICAgICB0aGlzLnJlbW92ZUNvbnRyb2woaSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSAwO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5FZGl0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5FZGl0KSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICByZXR1cm4gdGhpcy5jYW5FZGl0KGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhblJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FuUmVtb3ZlKSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICByZXR1cm4gdGhpcy5jYW5SZW1vdmUoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbnRyb2xzKGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdKSB7XG4gICAgbGV0IHJldDogQmFzZUNvbnRyb2xbXSA9IFtdO1xuICAgICh0aGlzLmNvbnRyb2xzIHx8IFtdKS5mb3JFYWNoKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgcmV0LnB1c2gobmV3IEJhc2VDb250cm9sKGNvbnRyb2wuX190eXBlLCBjb250cm9sKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuIl19