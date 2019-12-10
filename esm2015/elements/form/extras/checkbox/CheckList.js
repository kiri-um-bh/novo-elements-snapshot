/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/extras/checkbox/CheckList.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { Helpers } from '../../../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const CHECKLIST_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoCheckListElement)),
    multi: true,
};
export class NovoCheckListElement {
    constructor() {
        this.onSelect = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setModel();
        this.setupOptions();
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    select(event, item) {
        Helpers.swallowEvent(event);
        if (!this.disabled) {
            item.checked = !item.checked;
            this.model = this._options.filter((/**
             * @param {?} checkBox
             * @return {?}
             */
            (checkBox) => checkBox.checked)).map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => x.value));
            this.onModelChange(this.model.length > 0 ? this.model : '');
            this.onSelect.emit({ selected: this.model });
        }
    }
    /**
     * @return {?}
     */
    setupOptions() {
        this.options = this.options || [];
        this._options = [];
        if (this.options.length && !this.options[0].value) {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                /** @type {?} */
                let formattedOption = {
                    value: option,
                    label: option,
                    checked: this.model && this.model.length && this.model.indexOf(option.value) !== -1,
                };
                this._options.push(formattedOption);
            }));
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                /** @type {?} */
                let formattedOption = option;
                formattedOption.checked = this.model && this.model.length && this.model.indexOf(option.value) !== -1;
                this._options.push(formattedOption);
            }));
        }
    }
    /**
     * @return {?}
     */
    setModel() {
        /** @type {?} */
        let checkedOptions = this.options.filter((/**
         * @param {?} checkBox
         * @return {?}
         */
        (checkBox) => checkBox.checked)).map((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.value));
        this.writeValue(checkedOptions);
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model || [];
        if (model) {
            this.setupOptions();
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
NovoCheckListElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-check-list',
                providers: [CHECKLIST_VALUE_ACCESSOR],
                template: `
        <div class="check-box-group" *ngFor="let option of _options; let i = index" [ngClass]="{checked: option.checked}" [class.disabled]="disabled">
            <input [name]="name" type="checkbox" [ngModel]="option.checked" [attr.id]="name+i" [value]="option.checked" (change)="select($event, option)" [disabled]="disabled">
            <label [attr.for]="name+i" (click)="select($event, option)">
              <i [ngClass]="{'bhi-checkbox-empty': !option.checked, 'bhi-checkbox-filled': option.checked }"></i>
              <span>{{option.label}}</span>
            </label>
        </div>
    `
            }] }
];
NovoCheckListElement.propDecorators = {
    name: [{ type: Input }],
    options: [{ type: Input }],
    disabled: [{ type: Input }],
    onSelect: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tMaXN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2NoZWNrYm94L0NoZWNrTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O01BRzlDLHdCQUF3QixHQUFHO0lBQy9CLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFlRCxNQUFNLE9BQU8sb0JBQW9CO0lBYmpDO1FBcUJFLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlqRCxrQkFBYTs7O1FBQWEsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQ25DLG1CQUFjOzs7UUFBYSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7SUE2RHRDLENBQUM7Ozs7SUEzREMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMs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QztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsUUFBUSxFQUFFOzs7Ozs7OztLQVFQO2FBQ0o7OzttQkFFRSxLQUFLO3NCQUVMLEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxNQUFNOzs7O0lBTlAsb0NBQ2E7O0lBQ2IsdUNBQ29COztJQUNwQix3Q0FDa0I7O0lBQ2xCLHdDQUNpRDs7SUFFakQsd0NBQXFCOztJQUNyQixxQ0FBVzs7SUFDWCw2Q0FBbUM7O0lBQ25DLDhDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0hFQ0tMSVNUX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0NoZWNrTGlzdEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2hlY2stbGlzdCcsXG4gIHByb3ZpZGVyczogW0NIRUNLTElTVF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaGVjay1ib3gtZ3JvdXBcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9vcHRpb25zOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwie2NoZWNrZWQ6IG9wdGlvbi5jaGVja2VkfVwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgPGlucHV0IFtuYW1lXT1cIm5hbWVcIiB0eXBlPVwiY2hlY2tib3hcIiBbbmdNb2RlbF09XCJvcHRpb24uY2hlY2tlZFwiIFthdHRyLmlkXT1cIm5hbWUraVwiIFt2YWx1ZV09XCJvcHRpb24uY2hlY2tlZFwiIChjaGFuZ2UpPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgPGxhYmVsIFthdHRyLmZvcl09XCJuYW1lK2lcIiAoY2xpY2spPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiPlxuICAgICAgICAgICAgICA8aSBbbmdDbGFzc109XCJ7J2JoaS1jaGVja2JveC1lbXB0eSc6ICFvcHRpb24uY2hlY2tlZCwgJ2JoaS1jaGVja2JveC1maWxsZWQnOiBvcHRpb24uY2hlY2tlZCB9XCI+PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj57e29wdGlvbi5sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NoZWNrTGlzdEVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBvcHRpb25zOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfb3B0aW9uczogQXJyYXk8YW55PjtcbiAgbW9kZWw6IGFueTtcbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRNb2RlbCgpO1xuICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuX29wdGlvbnMuZmlsdGVyKChjaGVja0JveCkgPT4gY2hlY2tCb3guY2hlY2tlZCkubWFwKCh4KSA9PiB4LnZhbHVlKTtcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsLmxlbmd0aCA+IDAgPyB0aGlzLm1vZGVsIDogJycpO1xuICAgICAgdGhpcy5vblNlbGVjdC5lbWl0KHsgc2VsZWN0ZWQ6IHRoaXMubW9kZWwgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBPcHRpb25zKCkge1xuICAgIHRoaXMub3B0aW9ucyA9IHRoaXMub3B0aW9ucyB8fCBbXTtcbiAgICB0aGlzLl9vcHRpb25zID0gW107XG4gICAgaWYgKHRoaXMub3B0aW9ucy5sZW5ndGggJiYgIXRoaXMub3B0aW9uc1swXS52YWx1ZSkge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBsZXQgZm9ybWF0dGVkT3B0aW9uID0ge1xuICAgICAgICAgIHZhbHVlOiBvcHRpb24sXG4gICAgICAgICAgbGFiZWw6IG9wdGlvbixcbiAgICAgICAgICBjaGVja2VkOiB0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoICYmIHRoaXMubW9kZWwuaW5kZXhPZihvcHRpb24udmFsdWUpICE9PSAtMSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucy5wdXNoKGZvcm1hdHRlZE9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBsZXQgZm9ybWF0dGVkT3B0aW9uID0gb3B0aW9uO1xuICAgICAgICBmb3JtYXR0ZWRPcHRpb24uY2hlY2tlZCA9IHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggJiYgdGhpcy5tb2RlbC5pbmRleE9mKG9wdGlvbi52YWx1ZSkgIT09IC0xO1xuICAgICAgICB0aGlzLl9vcHRpb25zLnB1c2goZm9ybWF0dGVkT3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNldE1vZGVsKCk6IHZvaWQge1xuICAgIGxldCBjaGVja2VkT3B0aW9ucyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoKGNoZWNrQm94KSA9PiBjaGVja0JveC5jaGVja2VkKS5tYXAoKHgpID0+IHgudmFsdWUpO1xuICAgIHRoaXMud3JpdGVWYWx1ZShjaGVja2VkT3B0aW9ucyk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWwgfHwgW107XG4gICAgaWYgKG1vZGVsKSB7XG4gICAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=