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
var NovoEmbeddedFormGroupElement = /** @class */ (function () {
    function NovoEmbeddedFormGroupElement(formUtils, ref, fb) {
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
    Object.defineProperty(NovoEmbeddedFormGroupElement.prototype, "remove", {
        get: /**
         * @return {?}
         */
        function () {
            return this._remove;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._remove = coerceBooleanProperty(v);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoEmbeddedFormGroupElement.prototype, "edit", {
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
    /**
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.key = this.control.key;
        this.controls = this.formUtils.toControls(this.control.associatedEntity, null, null, {});
        this.form = this.formUtils.toFormGroup(this.controls);
    };
    /**
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.change.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.onRemoveEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onRemove.emit(event);
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.addNewControl = /**
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
     * @param {?} index
     * @param {?=} emitEvent
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.removeControl = /**
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
    NovoEmbeddedFormGroupElement.prototype.editControl = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var control = (/** @type {?} */ (this.form.controls[this.key]));
        this.onEdit.emit({ value: control.at(index).value, index: index });
    };
    /**
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.resetAddRemove = /**
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
        this.ref.markForCheck();
    };
    /**
     * @private
     * @param {?} index
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.checkCanEdit = /**
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
    NovoEmbeddedFormGroupElement.prototype.checkCanRemove = /**
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
    NovoEmbeddedFormGroupElement.prototype.getNewControls = /**
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
    /**
     * @param {?=} value
     * @return {?}
     */
    NovoEmbeddedFormGroupElement.prototype.buildControl = /**
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
    NovoEmbeddedFormGroupElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-embedded-form-group',
                    template: "\n    <novo-control-templates></novo-control-templates>\n    <div class=\"novo-control-group-controls horizontal\">\n      <div class=\"novo-control-group-control\">\n        <div\n          *ngFor=\"let c of controls; let i = index\"\n          class=\"novo-control-container {{ c.key }}\"\n          [class.is-label]=\"c.controlType === 'read-only'\"\n          [style.max-width.px]=\"c.width\"\n        >\n          <div class=\"novo-form-row\" [class.disabled]=\"control.disabled\" *ngIf=\"c.__type !== 'embedded-form-group'\">\n            <novo-control\n              (change)=\"onChange($event)\"\n              [form]=\"form\"\n              [control]=\"c\"\n              [condensed]=\"c.controlType === 'read-only'\"\n            ></novo-control>\n          </div>\n          <div *ngIf=\"c.__type === 'embedded-form-group'\">\n            <novo-embedded-form-group [control]=\"c\"></novo-embedded-form-group>\n          </div>\n          <div class=\"novo-control-container last\" *ngIf=\"edit\">\n            <button\n              [disabled]=\"!disabledArray[i].edit\"\n              type=\"button\"\n              *ngIf=\"edit\"\n              theme=\"icon\"\n              icon=\"edit\"\n              (click)=\"editControl(i)\"\n              [attr.data-automation-id]=\"'novo-control-group-edit-' + key\"\n              index=\"-1\"\n            ></button>\n          </div>\n          <div class=\"novo-control-container last\" *ngIf=\"remove\">\n            <button\n              [disabled]=\"!disabledArray[i].remove\"\n              type=\"button\"\n              *ngIf=\"remove\"\n              theme=\"icon\"\n              icon=\"delete-o\"\n              (click)=\"removeControl(i)\"\n              [attr.data-automation-id]=\"'novo-control-group-delete-' + key\"\n              index=\"-1\"\n            ></button>\n          </div>\n        </div>\n      </div>\n      <div\n        class=\"novo-control-group-control-label {{ label.key }}\"\n        *ngFor=\"let label of controlLabels\"\n        [style.max-width.px]=\"label.width\"\n        [class.column-required]=\"label.required\"\n      >\n        <span [attr.data-automation-id]=\"'novo-control-group-label-' + label.value\">{{ label.value }}</span>\n      </div>\n      <div class=\"novo-control-group-control-label last\" *ngIf=\"edit\" [attr.data-automation-id]=\"'novo-control-group-edit-' + key\"></div>\n      <div\n        class=\"novo-control-group-control-label last\"\n        *ngIf=\"remove\"\n        [attr.data-automation-id]=\"'novo-control-group-delete-' + key\"\n      ></div>\n      <p *ngIf=\"add\">\n        <button\n          type=\"button\"\n          theme=\"dialogue\"\n          icon=\"add-thin\"\n          (click)=\"addNewControl()\"\n          [attr.data-automation-id]=\"'novo-control-group-bottom-add-' + key\"\n          index=\"-1\"\n        >\n          {{ add?.label }}\n        </button>\n      </p>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoEmbeddedFormGroupElement.ctorParameters = function () { return [
        { type: FormUtils },
        { type: ChangeDetectorRef },
        { type: FormBuilder }
    ]; };
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
    return NovoEmbeddedFormGroupElement;
}());
export { NovoEmbeddedFormGroupElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRkZWRGb3JtR3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9FbWJlZGRlZEZvcm1Hcm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQWEsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU3RDtJQTZIRSxzQ0FBb0IsU0FBb0IsRUFBVSxHQUFzQixFQUFVLEVBQWU7UUFBN0UsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWxDekYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVloQixVQUFLLEdBQUcsS0FBSyxDQUFDO1FBUXRCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFSixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDaEQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQzlDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSzNDLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGtCQUFhLEdBQXlDLEVBQUUsQ0FBQztRQUN6RCxrQkFBYSxHQUF1RSxFQUFFLENBQUM7SUFFYSxDQUFDO0lBM0NyRyxzQkFDSSxnREFBTTs7OztRQUlWO1lBQ0UsT0FBTyxJQUFJLENBQUMs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QTRCOzs7OztJQUFFLDJDQUE4Qjs7Ozs7SUFBRSwwQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUFycmF5LCBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG4vLyBWZW5kb3Jcbi8vIEFwcFxuaW1wb3J0IHsgTm92b0NvbnRyb2xHcm91cEFkZENvbmZpZywgTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZyB9IGZyb20gJy4vQ29udHJvbEdyb3VwJztcbmltcG9ydCB7IEJhc2VDb250cm9sIH0gZnJvbSAnLi9jb250cm9scy9CYXNlQ29udHJvbCc7XG5pbXBvcnQgeyBOb3ZvRm9ybUdyb3VwIH0gZnJvbSAnLi9Ob3ZvRm9ybUdyb3VwJztcbmltcG9ydCB7IEZvcm1VdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm0tdXRpbHMvRm9ybVV0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1lbWJlZGRlZC1mb3JtLWdyb3VwJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bm92by1jb250cm9sLXRlbXBsYXRlcz48L25vdm8tY29udHJvbC10ZW1wbGF0ZXM+XG4gICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9scyBob3Jpem9udGFsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb250cm9sLWdyb3VwLWNvbnRyb2xcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjIG9mIGNvbnRyb2xzOyBsZXQgaSA9IGluZGV4XCJcbiAgICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXIge3sgYy5rZXkgfX1cIlxuICAgICAgICAgIFtjbGFzcy5pcy1sYWJlbF09XCJjLmNvbnRyb2xUeXBlID09PSAncmVhZC1vbmx5J1wiXG4gICAgICAgICAgW3N0eWxlLm1heC13aWR0aC5weF09XCJjLndpZHRoXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWZvcm0tcm93XCIgW2NsYXNzLmRpc2FibGVkXT1cImNvbnRyb2wuZGlzYWJsZWRcIiAqbmdJZj1cImMuX190eXBlICE9PSAnZW1iZWRkZWQtZm9ybS1ncm91cCdcIj5cbiAgICAgICAgICAgIDxub3ZvLWNvbnRyb2xcbiAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgW2Zvcm1dPVwiZm9ybVwiXG4gICAgICAgICAgICAgIFtjb250cm9sXT1cImNcIlxuICAgICAgICAgICAgICBbY29uZGVuc2VkXT1cImMuY29udHJvbFR5cGUgPT09ICdyZWFkLW9ubHknXCJcbiAgICAgICAgICAgID48L25vdm8tY29udHJvbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYy5fX3R5cGUgPT09ICdlbWJlZGRlZC1mb3JtLWdyb3VwJ1wiPlxuICAgICAgICAgICAgPG5vdm8tZW1iZWRkZWQtZm9ybS1ncm91cCBbY29udHJvbF09XCJjXCI+PC9ub3ZvLWVtYmVkZGVkLWZvcm0tZ3JvdXA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1jb250YWluZXIgbGFzdFwiICpuZ0lmPVwiZWRpdFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaV0uZWRpdFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAqbmdJZj1cImVkaXRcIlxuICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJlZGl0Q29udHJvbChpKVwiXG4gICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInbm92by1jb250cm9sLWdyb3VwLWVkaXQtJyArIGtleVwiXG4gICAgICAgICAgICAgIGluZGV4PVwiLTFcIlxuICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNvbnRyb2wtY29udGFpbmVyIGxhc3RcIiAqbmdJZj1cInJlbW92ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWRpc2FibGVkQXJyYXlbaV0ucmVtb3ZlXCJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICpuZ0lmPVwicmVtb3ZlXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgaWNvbj1cImRlbGV0ZS1vXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUNvbnRyb2woaSlcIlxuICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZWxldGUtJyArIGtleVwiXG4gICAgICAgICAgICAgIGluZGV4PVwiLTFcIlxuICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIHt7IGxhYmVsLmtleSB9fVwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBsYWJlbCBvZiBjb250cm9sTGFiZWxzXCJcbiAgICAgICAgW3N0eWxlLm1heC13aWR0aC5weF09XCJsYWJlbC53aWR0aFwiXG4gICAgICAgIFtjbGFzcy5jb2x1bW4tcmVxdWlyZWRdPVwibGFiZWwucmVxdWlyZWRcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1sYWJlbC0nICsgbGFiZWwudmFsdWVcIj57eyBsYWJlbC52YWx1ZSB9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY29udHJvbC1ncm91cC1jb250cm9sLWxhYmVsIGxhc3RcIiAqbmdJZj1cImVkaXRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1lZGl0LScgKyBrZXlcIj48L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJub3ZvLWNvbnRyb2wtZ3JvdXAtY29udHJvbC1sYWJlbCBsYXN0XCJcbiAgICAgICAgKm5nSWY9XCJyZW1vdmVcIlxuICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1kZWxldGUtJyArIGtleVwiXG4gICAgICA+PC9kaXY+XG4gICAgICA8cCAqbmdJZj1cImFkZFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGhlbWU9XCJkaWFsb2d1ZVwiXG4gICAgICAgICAgaWNvbj1cImFkZC10aGluXCJcbiAgICAgICAgICAoY2xpY2spPVwiYWRkTmV3Q29udHJvbCgpXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ25vdm8tY29udHJvbC1ncm91cC1ib3R0b20tYWRkLScgKyBrZXlcIlxuICAgICAgICAgIGluZGV4PVwiLTFcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgYWRkPy5sYWJlbCB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0VtYmVkZGVkRm9ybUdyb3VwRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgb25DYW5SZW1vdmU6IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBhZGQ6IE5vdm9Db250cm9sR3JvdXBBZGRDb25maWc7XG5cbiAgQElucHV0KClcbiAgc2V0IHJlbW92ZSh2OiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVtb3ZlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG5cbiAgZ2V0IHJlbW92ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVtb3ZlO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlID0gZmFsc2U7XG5cbiAgLy8gSGlkZS9zaG93cyB0aGUgZWRpdCBidXR0b24gZm9yIGVkaXRpbmcgYSBjb250cm9sXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0KHY6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9lZGl0ID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHYpO1xuICB9XG5cbiAgZ2V0IGVkaXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VkaXQ7XG4gIH1cblxuICBwcml2YXRlIF9lZGl0ID0gZmFsc2U7XG4gIC8vIENhbGxiYWNrIHRvIGRldGVybWluZSBpZiB0aGUgdXNlciBjYW4gZWRpdFxuICBASW5wdXQoKSBjYW5FZGl0OiBGdW5jdGlvbjtcbiAgLy8gQ2FsbGJhY2sgdG8gZGV0ZXJtaW5lIGlmIHRoZSB1c2VyIGNhbiBkZWxldGVcbiAgQElucHV0KCkgY2FuUmVtb3ZlOiBGdW5jdGlvbjtcblxuICBASW5wdXQoKSBjb250cm9sOiBhbnk7XG4gIEBJbnB1dCgpIHBhcmVudEZvcm06IGFueTtcbiAgY29udHJvbHMgPSBbXTtcblxuICBAT3V0cHV0KCkgb25SZW1vdmUgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgdmFsdWU7IGluZGV4IH0+KCk7XG4gIEBPdXRwdXQoKSBvbkFkZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAga2V5OiBzdHJpbmc7XG4gIGZvcm06IE5vdm9Gb3JtR3JvdXA7XG4gIGluaXRpYWxWYWx1ZTtcbiAgY3VycmVudEluZGV4ID0gMDtcbiAgZGlzYWJsZWRBcnJheTogeyBlZGl0OiBib29sZWFuOyByZW1vdmU6IGJvb2xlYW4gfVtdID0gW107XG4gIGNvbnRyb2xMYWJlbHM6IHsgdmFsdWU6IHN0cmluZzsgd2lkdGg6IG51bWJlcjsgcmVxdWlyZWQ6IGJvb2xlYW47IGtleTogc3RyaW5nIH1bXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybVV0aWxzOiBGb3JtVXRpbHMsIHByaXZhdGUgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5rZXkgPSB0aGlzLmNvbnRyb2wua2V5O1xuICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLmZvcm1VdGlscy50b0NvbnRyb2xzKHRoaXMuY29udHJvbC5hc3NvY2lhdGVkRW50aXR5LCBudWxsLCBudWxsLCB7fSk7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mb3JtVXRpbHMudG9Gb3JtR3JvdXAodGhpcy5jb250cm9scyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNvbnRyb2xMYWJlbHMgPSAodGhpcy5jb250cm9scyB8fCBbXSkubWFwKChjb250cm9sOiBCYXNlQ29udHJvbCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IGNvbnRyb2wubGFiZWwsXG4gICAgICAgIHdpZHRoOiBjb250cm9sLndpZHRoLFxuICAgICAgICByZXF1aXJlZDogY29udHJvbC5yZXF1aXJlZCxcbiAgICAgICAga2V5OiBjb250cm9sLmtleSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudCkge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgb25SZW1vdmVFdmVudChldmVudCkge1xuICAgIHRoaXMub25SZW1vdmUuZW1pdChldmVudCk7XG4gIH1cblxuICBhZGROZXdDb250cm9sKHZhbHVlPzoge30pIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgY29uc3QgbmV3Q3RybDogTm92b0Zvcm1Hcm91cCA9IHRoaXMuYnVpbGRDb250cm9sKHZhbHVlKTtcbiAgICBpZiAoY29udHJvbCkge1xuICAgICAgY29udHJvbC5wdXNoKG5ld0N0cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCh0aGlzLmtleSwgdGhpcy5mYi5hcnJheShbbmV3Q3RybF0pKTtcbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5LnB1c2goe1xuICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgIHJlbW92ZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5vbkFkZC5lbWl0KCk7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEluZGV4Kys7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZW1vdmVDb250cm9sKGluZGV4OiBudW1iZXIsIGVtaXRFdmVudCA9IHRydWUpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgaWYgKGVtaXRFdmVudCkge1xuICAgICAgdGhpcy5vblJlbW92ZS5lbWl0KHsgdmFsdWU6IGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCB9KTtcbiAgICB9XG4gICAgY29udHJvbC5yZW1vdmVBdChpbmRleCk7XG4gICAgdGhpcy5kaXNhYmxlZEFycmF5ID0gdGhpcy5kaXNhYmxlZEFycmF5LmZpbHRlcigodmFsdWU6IE5vdm9Db250cm9sR3JvdXBSb3dDb25maWcsIGlkeDogbnVtYmVyKSA9PiBpZHggIT09IGluZGV4KTtcbiAgICB0aGlzLnJlc2V0QWRkUmVtb3ZlKCk7XG4gICAgdGhpcy5jdXJyZW50SW5kZXgtLTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGVkaXRDb250cm9sKGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgdGhpcy5vbkVkaXQuZW1pdCh7IHZhbHVlOiBjb250cm9sLmF0KGluZGV4KS52YWx1ZSwgaW5kZXggfSk7XG4gIH1cblxuICByZXNldEFkZFJlbW92ZSgpIHtcbiAgICB0aGlzLmRpc2FibGVkQXJyYXkuZm9yRWFjaCgoaXRlbTogTm92b0NvbnRyb2xHcm91cFJvd0NvbmZpZywgaWR4OiBudW1iZXIpID0+IHtcbiAgICAgIGl0ZW0uZWRpdCA9IHRoaXMuY2hlY2tDYW5FZGl0KGlkeCk7XG4gICAgICBpdGVtLnJlbW92ZSA9IHRoaXMuY2hlY2tDYW5SZW1vdmUoaWR4KTtcbiAgICB9KTtcbiAgICB0aGlzLnJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tDYW5FZGl0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jYW5FZGl0KSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICByZXR1cm4gdGhpcy5jYW5FZGl0KGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0NhblJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuY2FuUmVtb3ZlKSB7XG4gICAgICBjb25zdCBjb250cm9sOiBGb3JtQXJyYXkgPSA8Rm9ybUFycmF5PnRoaXMuZm9ybS5jb250cm9sc1t0aGlzLmtleV07XG4gICAgICBpZiAoY29udHJvbC5hdChpbmRleCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuUmVtb3ZlKGNvbnRyb2wuYXQoaW5kZXgpLnZhbHVlLCBpbmRleCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGdldE5ld0NvbnRyb2xzKGNvbnRyb2xzOiBCYXNlQ29udHJvbFtdKSB7XG4gICAgY29uc3QgcmV0OiBCYXNlQ29udHJvbFtdID0gW107XG4gICAgKHRoaXMuY29udHJvbHMgfHwgW10pLmZvckVhY2goKGNvbnRyb2w6IEJhc2VDb250cm9sKSA9PiB7XG4gICAgICByZXQucHVzaChuZXcgQmFzZUNvbnRyb2woY29udHJvbC5fX3R5cGUsIGNvbnRyb2wpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgYnVpbGRDb250cm9sKHZhbHVlPzoge30pOiBOb3ZvRm9ybUdyb3VwIHtcbiAgICBjb25zdCBuZXdDb250cm9scyA9IHRoaXMuZ2V0TmV3Q29udHJvbHModGhpcy5jb250cm9scyk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZvcm1VdGlscy5zZXRJbml0aWFsVmFsdWVzKG5ld0NvbnRyb2xzLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbnN0IGN0cmw6IE5vdm9Gb3JtR3JvdXAgPSB0aGlzLmZvcm1VdGlscy50b0Zvcm1Hcm91cChuZXdDb250cm9scyk7XG4gICAgcmV0dXJuIGN0cmw7XG4gIH1cbn1cbiJdfQ==