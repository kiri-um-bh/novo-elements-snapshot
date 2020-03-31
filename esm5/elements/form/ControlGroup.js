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
            if (control.at(index)) {
                return this.canRemove(control.at(index).value, index);
            }
            return true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEdyb3VwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vQ29udHJvbEdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBR04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixZQUFZLEdBSWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7Ozs7QUFFckUsK0NBRUM7OztJQURDLDBDQUFjOzs7OztBQUdoQiwrQ0FHQzs7O0lBRkMseUNBQWM7O0lBQ2QsMkNBQWdCOztBQUdsQjtJQXFGRSwwQkFBb0IsU0FBb0IsRUFBVSxFQUFlLEVBQVUsR0FBc0IsRUFBVSxNQUF3QjtRQUEvRyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUF2RTNILGNBQVMsR0FBWSxLQUFLLENBQUM7UUFXM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztRQVN6QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBU3ZCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBK0I1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Z0NBQTZCOztJQUU3QixvQ0FBaUM7O0lBRWpDLCtCQUFxQjs7SUFFckIsaUNBQXVCOztJQUV2Qix1Q0FBNkI7O0lBRTdCLHdDQUE4Qjs7Ozs7SUFTOUIsaUNBQXNCOztJQUV0Qix3Q0FBNEI7O0lBRTVCLG1DQUEyQjs7SUFFM0IscUNBQTZCOztJQUU3Qix1Q0FBdUM7O0lBRXZDLG9DQUFnRTs7SUFDaEUsa0NBQThEOztJQUM5RCxpQ0FBNkQ7O0lBQzdELGtDQUE4RDs7SUFFOUQseUNBQThGOztJQUM5RixtQ0FBZ0M7O0lBQ2hDLHlDQUFnRTs7SUFFaEUsd0NBQWlCOzs7OztJQUVMLHFDQUE0Qjs7Ozs7SUFBRSw4QkFBdUI7Ozs7O0lBQUUsK0JBQThCOzs7OztJQUFFLGtDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUFycmF5IH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0Zvcm1Hcm91cCB9IGZyb20gJy4vTm92b0Zvcm1Hcm91cCc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJy4vY29udHJvbHMvQmFzZUNvbnRyb2wnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9mb3JtLXV0aWxzL0Zvcm1VdGlscyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwQWRkQ29uZmlnIHtcbiAgbGFiZWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3ZvQ29udHJvbEdyb3VwUm93Q29uZmlnIHtcbiAgZWRpdDogYm9vbGVhbjtcbiAgcmVtb3ZlOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNvbnRyb2wtZ3JvdXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vQ29udHJvbEdyb3VwLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbnRyb2xHcm91cCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vIFNldHMgdGhlIGRpc3BsYXkgb2YgdGhlIGdyb3VwIHRvIGVpdGhlciBiZSByb3cgKGRlZmF1bHQpIG9yIHZlcnRpY2FsIHZpYSBmbGV4LWJveFxuICBASW5wdXQoKVxuICBzZXQgdmVydGljYWwodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG4gIGdldCB2ZXJ0aWNhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLy8gSGlkZXMvc2hvd3MgdGhlIGFkZCBidXR0b24gZm9yIGFkZGluZyBhIG5ldyBjb250cm9sXG4gIEBJbnB1dCgpIGFkZDogTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZztcbiAgLy8gSGlkZS9zaG93cyB0aGUgcmVtb3ZlIGJ1dHRvbiBmb3IgcmVtb3ZpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCByZW1vdmUodjogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlbW92ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgcmVtb3ZlKCkge1xuICAgIHJldHVybiB0aGlzLl9yZW1vdmU7XG4gIH1cbiAgcHJpdmF0ZSBfcmVtb3ZlOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEhpZGUvc2hvd3MgdGhlIGVkaXQgYnV0dG9uIGZvciBlZGl0aW5nIGEgY29udHJvbFxuICBASW5wdXQoKVxuICBzZXQgZWRpdCh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWRpdCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgZWRpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWRpdDtcbiAgfVxuICBwcml2YXRlIF9lZGl0OiBib29sZWFuID0gZmFsc2U7XG4gIC8vIEFsbG93cyB0aGUgY29udHJvbCB0byBjb2xsYXBzZSBvciBub3RcbiAgQElucHV0KClcbiAgc2V0IGNvbGxhcHNpYmxlKHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jb2xsYXBzaWJsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2KTtcbiAgfVxuICBnZXQgY29sbGFwc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbGxhcHNpYmxlO1xuICB9XG4gIHByaXZhdGUgX2NvbGxhcHNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIE1haW4gZm9ybSBncm91cFxuICBASW5wdXQoKSBmb3JtOiBOb3ZvRm9ybUdyb3VwO1xuICAvLyBDb250cm9scyBmb3IgZWFjaCBpdGVtIGluIHRoZSBjb250cm9sIGdyb3VwXG4gIEBJbnB1dCgpIGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdO1xuICAvLyBLZXkgb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKG9uIHRoZSBtYWluIGZvcm0pXG4gIEBJbnB1dCgpIGtleTogc3RyaW5nO1xuICAvLyBMYWJlbCBvZiB0aGUgY29udHJvbCBncm91cFxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICAvLyBEZXNjcmlwdGlvbiBvZiB0aGUgY29udHJvbCBncm91cCAob25seSB1c2Ugd2l0aCBwb3NpdGlvbjpib3R0b20gQWRkIGJ1dHRvbiEpXG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIC8vIE1lc3NhZ2UgdG8gZGlzcGxheSBpZiB0aGVyZSBhcmUgbm8gY29udHJvbHNcbiAgQElucHV0KCkgZW1wdHlNZXNzYWdlOiBzdHJpbmc7XG4gIC8vIEljb24gb2YgdGhlIGNvbnRyb2wgZ3JvdXAgKGNhbiBoYXZlIGJoaSBwcmVmaXggb3Igbm90KVxuICBASW5wdXQoKVxuICBzZXQgaWNvbih2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pY29uID0gdiAmJiB2LmluZGV4T2YoJ2JoaScpICE9PSAtMSA/IHYgOiBgYmhpLSR7dn1gO1xuICB9XG4gIGdldCBpY29uKCkge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG4gIHByaXZhdGUgX2ljb246IHN0cmluZztcbiAgLy8gVGhlIGluaXRpYWwgdmFsdWUgb2JqZWN0LCB3aWxsIGNyZWF0ZSB0aGUgZm9ybSByb3dzIG9mZiBvZlxuICBASW5wdXQoKSBpbml0aWFsVmFsdWU6IHt9W107XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZWRpdFxuICBASW5wdXQoKSBjYW5FZGl0OiBGdW5jdGlvbjtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBkZWxldGVcbiAgQElucHV0KCkgY2FuUmVtb3ZlOiBGdW5jdGlvbjtcbiAgLy8gVGVtcGxhdGUgZm9yIGN1c3RvbSByb3cgcmVuZGVyaW5nXG4gIEBJbnB1dCgpIHJvd1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKSBvblJlbW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uQWRkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBjb250cm9sTGFiZWxzOiB7IHZhbHVlOiBzdHJpbmc7IHdpZHRoOiBudW1iZXI7IHJlcXVpcmVkOiBib29sZWFuOyBrZXk6IHN0cmluZyB9W10gPSBbXTtcbiAgcHVibGljIHRvZ2dsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVkQXJyYXk6IHsgZWRpdDogYm9vbGVhbjsgcmVtb3ZlOiBib29sZWFuIH1bXSA9IFtdO1xuXG4gIGN1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtVXRpbHM6IEZvcm1VdGlscywgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdm8tY29udHJvbC1ncm91cCBtdXN0IGhhdmUgdGhlIFtrZXldIGF0dHJpYnV0ZSBwcm92aWRlZCEnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IGluaXRpYWxWYWx1ZUNoYW5nZTogU2ltcGxlQ2hhbmdlID0gY2hhbmdlc1snaW5pdGlhbFZhbHVlJ107XG5cbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGNoYW5nZXMsIGNsZWFyIHRoZSBjb250cm9sc1xuICAgIGlmIChpbml0aWFsVmFsdWVDaGFuZ2UgJiYgaW5pdGlhbFZhbHVlQ2hhbmdlLmN1cnJlbnRWYWx1ZSAhPT0gaW5pdGlhbFZhbHVlQ2hhbmdlLnByZXZpb3VzVmFsdWUgJiYgIWluaXRpYWxWYWx1ZUNoYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5jbGVhckNvbnRyb2xzKCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGFycmF5LCBhZGQgYSBjb250cm9sIGZvciBlYWNoIHZhbHVlXG4gICAgaWYgKHRoaXMuaW5pdGlhbFZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5pbml0aWFsVmFsdWUpKSB7XG4gICAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUuZm9yRWFjaCgodmFsdWUpID0+IHRoaXMuYWRkTmV3Q29udHJvbCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIC8vIElmIHZhbHVlIGlzIGFuIG9iamVjdCwganVzdCBhZGQgb25lIGNvbnRyb2xcbiAgICAgIHRoaXMuYWRkTmV3Q29udHJvbCh0aGlzLmluaXRpYWxWYWx1ZSk7XG4gICAgfVxuICAgIC8vIElmIHdlIGFyZSBob3Jpem9udGFsLCBncmFiIHRoZSBsYWJlbHMgdG8gaGVscCB3aXRoIGxheW91dFxuICAgIGlmICghdGhpcy52ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5jb250cm9sTGFiZWxzID0gKHRoaXMuY29udHJvbHMgfHwgW10pLm1hcCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogY29udHJvbC5sYWJlbCxcbiAgICAgICAgICB3aWR0aDogY29udHJvbC53aWR0aCxcbiAgICAgICAgICByZXF1aXJlZDogY29udHJvbC5yZXF1aXJlZCxcbiAgICAgICAgICBrZXk6IGNvbnRyb2wua2V5LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2U6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRBZGRSZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LmZvckVhY2goKGl0ZW06IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiB7XG4gICAgICBpdGVtLmVkaXQgPSB0aGlzLmNoZWNrQ2FuRWRpdChpZHgpO1xuICAgICAgaXRlbS5yZW1vdmUgPSB0aGlzLmNoZWNrQ2FuUmVtb3ZlKGlkeCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgYWRkTmV3Q29udHJvbCh2YWx1ZT86IHt9KTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbDogRm9ybUFycmF5ID0gPEZvcm1BcnJheT50aGlzLmZvcm0uY29udHJvbHNbdGhpcy5rZXldO1xuICAgIGNvbnN0IG5ld0N0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmJ1aWxkQ29udHJvbCh2YWx1ZSk7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgIGNvbnRyb2wucHVzaChuZXdDdHJsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2wodGhpcy5rZXksIHRoaXMuZmIuYXJyYXkoW25ld0N0cmxdKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzYWJsZWRBcnJheS5wdXNoKHtcbiAgICAgIGVkaXQ6IHRydWUsXG4gICAgICByZW1vdmU6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5yZXNldEFkZFJlbW92ZSgpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMub25BZGQuZW1pdCgpO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRJbmRleCsrO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkQ29udHJvbCh2YWx1ZT86IHt9KTogTm92b0Zvcm1Hcm91cCB7XG4gICAgY29uc3QgbmV3Q29udHJvbHMgPSB0aGlzLmdldE5ld0NvbnRyb2xzKHRoaXMuY29udHJvbHMpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb3JtVXRpbHMuc2V0SW5pdGlhbFZhbHVlcyhuZXdDb250cm9scywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25zdCBjdHJsOiBOb3ZvRm9ybUdyb3VwID0gdGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAobmV3Q29udHJvbHMpO1xuICAgIHJldHVybiBjdHJsO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZUNvbnRyb2woaW5kZXg6IG51bWJlciwgZW1pdEV2ZW50OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoZW1pdEV2ZW50KSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlLmVtaXQoeyB2YWx1ZTogY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4IH0pO1xuICAgIH1cbiAgICBjb250cm9sLnJlbW92ZUF0KGluZGV4KTtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkgPSB0aGlzLmRpc2FibGVkQXJyYXkuZmlsdGVyKCh2YWx1ZTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IGlkeCAhPT0gaW5kZXgpO1xuICAgIHRoaXMucmVzZXRBZGRSZW1vdmUoKTtcbiAgICB0aGlzLmN1cnJlbnRJbmRleC0tO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHVibGljIGVkaXRDb250cm9sKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgdGhpcy5vbkVkaXQuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXggfSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICh0aGlzLmNvbGxhcHNpYmxlKSB7XG4gICAgICB0aGlzLnRvZ2dsZWQgPSAhdGhpcy50b2dnbGVkO1xuICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckNvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gY29udHJvbC5jb250cm9scy5sZW5ndGg7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29udHJvbChpLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhbkVkaXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmNhbkVkaXQpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIHJldHVybiB0aGlzLmNhbkVkaXQoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQ2FuUmVtb3ZlKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5SZW1vdmUpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2w6IEZvcm1BcnJheSA9IDxGb3JtQXJyYXk+dGhpcy5mb3JtLmNvbnRyb2xzW3RoaXMua2V5XTtcbiAgICAgIGlmIChjb250cm9sLmF0KGluZGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW5SZW1vdmUoY29udHJvbC5hdChpbmRleCkudmFsdWUsIGluZGV4KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmV3Q29udHJvbHMoY29udHJvbHM6IEJhc2VDb250cm9sW10pIHtcbiAgICBjb25zdCByZXQ6IEJhc2VDb250cm9sW10gPSBbXTtcbiAgICAodGhpcy5jb250cm9scyB8fCBbXSkuZm9yRWFjaCgoY29udHJvbDogQmFzZUNvbnRyb2wpID0+IHtcbiAgICAgIHJldC5wdXNoKG5ldyBCYXNlQ29udHJvbChjb250cm9sLl9fdHlwZSwgY29udHJvbCkpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXQ7XG4gIH1cbn1cbiJdfQ==