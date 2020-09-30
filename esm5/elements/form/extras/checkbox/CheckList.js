/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var CHECKLIST_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoCheckListElement; })),
    multi: true,
};
var NovoCheckListElement = /** @class */ (function () {
    function NovoCheckListElement() {
        this.onSelect = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    NovoCheckListElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setModel();
        this.setupOptions();
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    NovoCheckListElement.prototype.select = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            item.checked = !item.checked;
            this.model = this._options.filter((/**
             * @param {?} checkBox
             * @return {?}
             */
            function (checkBox) { return checkBox.checked; })).map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.value; }));
            this.onModelChange(this.model.length > 0 ? this.model : '');
            this.onSelect.emit({ selected: this.model });
        }
    };
    /**
     * @return {?}
     */
    NovoCheckListElement.prototype.setupOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.options = this.options || [];
        this._options = [];
        if (this.options.length && !this.options[0].value) {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var formattedOption = {
                    value: option,
                    label: option,
                    checked: _this.model && _this.model.length && _this.model.indexOf(option.value) !== -1,
                };
                _this._options.push(formattedOption);
            }));
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var formattedOption = option;
                formattedOption.checked = _this.model && _this.model.length && _this.model.indexOf(option.value) !== -1;
                _this._options.push(formattedOption);
            }));
        }
    };
    /**
     * @return {?}
     */
    NovoCheckListElement.prototype.setModel = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedOptions = this.options.filter((/**
         * @param {?} checkBox
         * @return {?}
         */
        function (checkBox) { return checkBox.checked; })).map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.value; }));
        this.writeValue(checkedOptions);
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoCheckListElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model || [];
        if (model) {
            this.setupOptions();
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoCheckListElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoCheckListElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoCheckListElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    NovoCheckListElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-check-list',
                    providers: [CHECKLIST_VALUE_ACCESSOR],
                    template: "\n        <div class=\"check-box-group\" *ngFor=\"let option of _options; let i = index\" [ngClass]=\"{checked: option.checked}\" [class.disabled]=\"disabled\">\n            <input [name]=\"name\" type=\"checkbox\" [ngModel]=\"option.checked\" [attr.id]=\"name+i\" [value]=\"option.checked\" (change)=\"select($event, option)\" [disabled]=\"disabled\">\n            <label [attr.for]=\"name+i\" (click)=\"select($event, option)\">\n              <i [ngClass]=\"{'bhi-checkbox-empty': !option.checked, 'bhi-checkbox-filled': option.checked }\"></i>\n              <span>{{option.label}}</span>\n            </label>\n        </div>\n    "
                }] }
    ];
    NovoCheckListElement.propDecorators = {
        name: [{ type: Input }],
        options: [{ type: Input }],
        disabled: [{ type: Input }],
        onSelect: [{ type: Output }]
    };
    return NovoCheckListElement;
}());
export { NovoCheckListElement };
if (false) {
    /** @type {?} */
    NovoCheckListElement.prototype.name;
    /** @type {?} */
    NovoCheckListElement.prototype.options;
    /** @type {?} */
    NovoCheckListElement.prototype.disabled;
    /** @type {?} */
    NovoCheckListElement.prototype.onSelect;
    /** @type {?} */
    NovoCheckListElement.prototype._options;
    /** @type {?} */
    NovoCheckListElement.prototype.model;
    /** @type {?} */
    NovoCheckListElement.prototype.onModelChange;
    /** @type {?} */
    NovoCheckListElement.prototype.onModelTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tMaXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2NoZWNrYm94L0NoZWNrTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7SUFHOUMsd0JBQXdCLEdBQUc7SUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQUFBO1FBcUJFLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlqRCxrQkFBYTs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7UUFDbkMsbUJBQWM7OztRQUFhLGNBQU8sQ0FBQyxFQUFDO0lBNkR0QyxDQUFDOzs7O0lBM0RDLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRUQscUNBQU07Ozs7O0lBQU4sVUFBTyxLQUFLLEVBQUUsSUFBSTtRQUNoQixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFN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LElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7O2dCQXRGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7b0JBQ3JDLFFBQVEsRUFBRSw4bkJBUVA7aUJBQ0o7Ozt1QkFFRSxLQUFLOzBCQUVMLEtBQUs7MkJBRUwsS0FBSzsyQkFFTCxNQUFNOztJQW1FVCwyQkFBQztDQUFBLEFBdkZELElBdUZDO1NBMUVZLG9CQUFvQjs7O0lBQy9CLG9DQUNhOztJQUNiLHVDQUNvQjs7SUFDcEIsd0NBQ2tCOztJQUNsQix3Q0FDaUQ7O0lBRWpELHdDQUFxQjs7SUFDckIscUNBQVc7O0lBQ1gsNkNBQW1DOztJQUNuQyw4Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IENIRUNLTElTVF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9DaGVja0xpc3RFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNoZWNrLWxpc3QnLFxuICBwcm92aWRlcnM6IFtDSEVDS0xJU1RfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2stYm94LWdyb3VwXCIgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBfb3B0aW9uczsgbGV0IGkgPSBpbmRleFwiIFtuZ0NsYXNzXT1cIntjaGVja2VkOiBvcHRpb24uY2hlY2tlZH1cIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBbbmFtZV09XCJuYW1lXCIgdHlwZT1cImNoZWNrYm94XCIgW25nTW9kZWxdPVwib3B0aW9uLmNoZWNrZWRcIiBbYXR0ci5pZF09XCJuYW1lK2lcIiBbdmFsdWVdPVwib3B0aW9uLmNoZWNrZWRcIiAoY2hhbmdlKT1cInNlbGVjdCgkZXZlbnQsIG9wdGlvbilcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZStpXCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIG9wdGlvbilcIj5cbiAgICAgICAgICAgICAgPGkgW25nQ2xhc3NdPVwieydiaGktY2hlY2tib3gtZW1wdHknOiAhb3B0aW9uLmNoZWNrZWQsICdiaGktY2hlY2tib3gtZmlsbGVkJzogb3B0aW9uLmNoZWNrZWQgfVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+e3tvcHRpb24ubGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9DaGVja0xpc3RFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgb3B0aW9uczogQXJyYXk8YW55PjtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgX29wdGlvbnM6IEFycmF5PGFueT47XG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0TW9kZWwoKTtcbiAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50LCBpdGVtKSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICAgIHRoaXMubW9kZWwgPSB0aGlzLl9vcHRpb25zLmZpbHRlcigoY2hlY2tCb3gpID0+IGNoZWNrQm94LmNoZWNrZWQpLm1hcCgoeCkgPT4geC52YWx1ZSk7XG4gICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbC5sZW5ndGggPiAwID8gdGhpcy5tb2RlbCA6ICcnKTtcbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh7IHNlbGVjdGVkOiB0aGlzLm1vZGVsIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldHVwT3B0aW9ucygpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwgW107XG4gICAgdGhpcy5fb3B0aW9ucyA9IFtdO1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGVuZ3RoICYmICF0aGlzLm9wdGlvbnNbMF0udmFsdWUpIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZE9wdGlvbiA9IHtcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgY2hlY2tlZDogdGhpcy5tb2RlbCAmJiB0aGlzLm1vZGVsLmxlbmd0aCAmJiB0aGlzLm1vZGVsLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPT0gLTEsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX29wdGlvbnMucHVzaChmb3JtYXR0ZWRPcHRpb24pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgbGV0IGZvcm1hdHRlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICAgICAgZm9ybWF0dGVkT3B0aW9uLmNoZWNrZWQgPSB0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoICYmIHRoaXMubW9kZWwuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGZvcm1hdHRlZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXRNb2RlbCgpOiB2b2lkIHtcbiAgICBsZXQgY2hlY2tlZE9wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKChjaGVja0JveCkgPT4gY2hlY2tCb3guY2hlY2tlZCkubWFwKCh4KSA9PiB4LnZhbHVlKTtcbiAgICB0aGlzLndyaXRlVmFsdWUoY2hlY2tlZE9wdGlvbnMpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsIHx8IFtdO1xuICAgIGlmIChtb2RlbCkge1xuICAgICAgdGhpcy5zZXR1cE9wdGlvbnMoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19