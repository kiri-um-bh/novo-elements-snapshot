/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
// APP
import { Helpers } from '../../utils/Helpers';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const TILES_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoTilesElement)),
    multi: true,
};
export class NovoTilesElement {
    /**
     * @param {?} element
     * @param {?} ref
     */
    constructor(element, ref) {
        this.element = element;
        this.ref = ref;
        this.name = new Date().getTime().toString();
        this.disabled = false;
        this.onChange = new EventEmitter();
        this.onSelectedOptionClick = new EventEmitter();
        this.onDisabledOptionClick = new EventEmitter();
        this._options = [];
        this.activeTile = null;
        this.state = 'inactive';
        this.focused = false;
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
     * @param {?} focus
     * @return {?}
     */
    setFocus(focus) {
        this.focused = focus;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.name = this.name || '';
        this.setupOptions();
    }
    /**
     * @param {?} change
     * @return {?}
     */
    ngOnChanges(change) {
        if (change['options'] && change['options'].currentValue && !change['options'].firstChange) {
            this.name = this.name || '';
            this._options = [];
            this.setupOptions();
        }
    }
    /**
     * @return {?}
     */
    setupOptions() {
        if (this.options && this.options.length && (this.options[0].value === undefined || this.options[0].value === null)) {
            this._options = this.options.map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => {
                /** @type {?} */
                let item = { value: x, label: x, checked: this.model === x };
                if (item.checked) {
                    this.setTile(item);
                }
                return item;
            }));
        }
        else {
            this._options = this.options.map((/**
             * @param {?} x
             * @return {?}
             */
            (x) => {
                x.checked = this.model === x.value;
                if (x.checked) {
                    this.setTile(x);
                }
                return x;
            }));
        }
        this.ref.markForCheck();
    }
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    select(event, item) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (!item.disabled) {
            if (item.checked) {
                this.onSelectedOptionClick.emit(item);
                return;
            }
            for (let option of this._options) {
                option.checked = false;
            }
            item.checked = !item.checked;
            this.onChange.emit(item.value);
            this.onModelChange(item.value);
            this.setTile(item);
            this.model = item.value;
        }
        else {
            this.onDisabledOptionClick.emit(item);
        }
        this.ref.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setTile(item) {
        if (item) {
            this.activeTile = item.value;
            this.moveTile();
        }
    }
    /**
     * @return {?}
     */
    moveTile() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let ind = this.element.nativeElement.querySelector('.active-indicator');
            /** @type {?} */
            let el = this.element.nativeElement.querySelector('.tile.active');
            if (ind && el) {
                /** @type {?} */
                let w = el.clientWidth;
                /** @type {?} */
                let left = el.offsetLeft - el.offsetTop;
                ind.style.width = `calc(${w}px + 0.32em)`;
                ind.style.left = `${left}px`;
                this.state = 'active';
                this.ref.markForCheck();
            }
        }));
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
        if (!Helpers.isBlank(model)) {
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
NovoTilesElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-tiles',
                providers: [TILES_VALUE_ACCESSOR],
                template: `
        <div class="tile-container" [class.active]="focused" [class.disabled]="disabled">
            <div class="tile" *ngFor="let option of _options; let i = index" [ngClass]="{active: option.checked, disabled: option.disabled}" (click)="select($event, option)" [attr.data-automation-id]="option.label || option">
                <input class="tiles-input" [name]="name" type="radio" [value]="option.checked || option" [attr.id]="name + i" (change)="select($event, option)" (focus)="setFocus(true)" (blur)="setFocus(false)" [disabled]="disabled">
                <label [attr.for]="name + i" [attr.data-automation-id]="option.label || option">
                    {{ option.label || option }}
                </label>
            </div>
            <span class="active-indicator" [@tileState]="state" [hidden]="activeTile === undefined || activeTile === null"></span>
        </div>
    `,
                animations: [
                    trigger('tileState', [
                        state('inactive', style({
                            opacity: '0',
                        })),
                        state('active', style({
                            opacity: '1',
                        })),
                        transition('inactive => active', animate('200ms ease-in')),
                        transition('active => inactive', animate('200ms ease-out')),
                    ]),
                ],
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NovoTilesElement.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
NovoTilesElement.propDecorators = {
    name: [{ type: Input }],
    options: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input, args: ['controlDisabled',] }],
    onChange: [{ type: Output }],
    onSelectedOptionClick: [{ type: Output }],
    onDisabledOptionClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoTilesElement.prototype.name;
    /** @type {?} */
    NovoTilesElement.prototype.options;
    /** @type {?} */
    NovoTilesElement.prototype.required;
    /** @type {?} */
    NovoTilesElement.prototype.disabled;
    /** @type {?} */
    NovoTilesElement.prototype.onChange;
    /** @type {?} */
    NovoTilesElement.prototype.onSelectedOptionClick;
    /** @type {?} */
    NovoTilesElement.prototype.onDisabledOptionClick;
    /** @type {?} */
    NovoTilesElement.prototype._options;
    /** @type {?} */
    NovoTilesElement.prototype.activeTile;
    /** @type {?} */
    NovoTilesElement.prototype.state;
    /** @type {?} */
    NovoTilesElement.prototype.focused;
    /** @type {?} */
    NovoTilesElement.prototype.model;
    /** @type {?} */
    NovoTilesElement.prototype.onModelChange;
    /** @type {?} */
    NovoTilesElement.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    NovoTilesElement.prototype.element;
    /**
     * @type {?}
     * @private
     */
    NovoTilesElement.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGlsZXMvVGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixVQUFVLEVBR1YsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFakYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7TUFHeEMsb0JBQW9CLEdBQUc7SUFDM0IsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLEVBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQW9DRCxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQXlCM0IsWUFBb0IsT0FBbUIsRUFBVSxHQUFzQjtRQUFuRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF2QnZFLFNBQUksR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBTS9DLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELDBCQUFxQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlELDBCQUFxQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlELGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDbkIsZUFBVSxH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QUFDLENBQUM7cUJBQzVELENBQUM7aUJBQ0g7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFuREMsVUFBVTtZQUdWLGlCQUFpQjs7O21CQWtEaEIsS0FBSztzQkFFTCxLQUFLO3VCQUVMLEtBQUs7dUJBRUwsS0FBSyxTQUFDLGlCQUFpQjt1QkFFdkIsTUFBTTtvQ0FFTixNQUFNO29DQUVOLE1BQU07Ozs7SUFaUCxnQ0FDK0M7O0lBQy9DLG1DQUNhOztJQUNiLG9DQUNrQjs7SUFDbEIsb0NBQzBCOztJQUMxQixvQ0FDaUQ7O0lBQ2pELGlEQUM4RDs7SUFDOUQsaURBQzhEOztJQUU5RCxvQ0FBMEI7O0lBQzFCLHNDQUE4Qjs7SUFDOUIsaUNBQWtDOztJQUNsQyxtQ0FBZ0M7O0lBRWhDLGlDQUFXOztJQUNYLHlDQUFtQzs7SUFDbkMsMENBQW9DOzs7OztJQUV4QixtQ0FBMkI7Ozs7O0lBQUUsK0JBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBUSUxFU19WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9UaWxlc0VsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdGlsZXMnLFxuICBwcm92aWRlcnM6IFtUSUxFU19WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlLWNvbnRhaW5lclwiIFtjbGFzcy5hY3RpdmVdPVwiZm9jdXNlZFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbGVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIF9vcHRpb25zOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwie2FjdGl2ZTogb3B0aW9uLmNoZWNrZWQsIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWR9XCIgKGNsaWNrKT1cInNlbGVjdCgkZXZlbnQsIG9wdGlvbilcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInRpbGVzLWlucHV0XCIgW25hbWVdPVwibmFtZVwiIHR5cGU9XCJyYWRpb1wiIFt2YWx1ZV09XCJvcHRpb24uY2hlY2tlZCB8fCBvcHRpb25cIiBbYXR0ci5pZF09XCJuYW1lICsgaVwiIChjaGFuZ2UpPVwic2VsZWN0KCRldmVudCwgb3B0aW9uKVwiIChmb2N1cyk9XCJzZXRGb2N1cyh0cnVlKVwiIChibHVyKT1cInNldEZvY3VzKGZhbHNlKVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBbYXR0ci5mb3JdPVwibmFtZSArIGlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwib3B0aW9uLmxhYmVsIHx8IG9wdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBvcHRpb24ubGFiZWwgfHwgb3B0aW9uIH19XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3RpdmUtaW5kaWNhdG9yXCIgW0B0aWxlU3RhdGVdPVwic3RhdGVcIiBbaGlkZGVuXT1cImFjdGl2ZVRpbGUgPT09IHVuZGVmaW5lZCB8fCBhY3RpdmVUaWxlID09PSBudWxsXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcigndGlsZVN0YXRlJywgW1xuICAgICAgc3RhdGUoXG4gICAgICAgICdpbmFjdGl2ZScsXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICAgIHN0YXRlKFxuICAgICAgICAnYWN0aXZlJyxcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHk6ICcxJyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnMjAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzIwMG1zIGVhc2Utb3V0JykpLFxuICAgIF0pLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1RpbGVzRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmcgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICBASW5wdXQoKVxuICBvcHRpb25zOiBhbnk7XG4gIEBJbnB1dCgpXG4gIHJlcXVpcmVkOiBib29sZWFuO1xuICBASW5wdXQoJ2NvbnRyb2xEaXNhYmxlZCcpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdGVkT3B0aW9uQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25EaXNhYmxlZE9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfb3B0aW9uczogQXJyYXk8YW55PiA9IFtdO1xuICBwdWJsaWMgYWN0aXZlVGlsZTogYW55ID0gbnVsbDtcbiAgcHVibGljIHN0YXRlOiBTdHJpbmcgPSAnaW5hY3RpdmUnO1xuICBwdWJsaWMgZm9jdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG1vZGVsOiBhbnk7XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHB1YmxpYyBzZXRGb2N1cyhmb2N1czogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZvY3VzO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCAnJztcbiAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZVsnb3B0aW9ucyddICYmIGNoYW5nZVsnb3B0aW9ucyddLmN1cnJlbnRWYWx1ZSAmJiAhY2hhbmdlWydvcHRpb25zJ10uZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCAnJztcbiAgICAgIHRoaXMuX29wdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuc2V0dXBPcHRpb25zKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0dXBPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMgJiYgdGhpcy5vcHRpb25zLmxlbmd0aCAmJiAodGhpcy5vcHRpb25zWzBdLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy5vcHRpb25zWzBdLnZhbHVlID09PSBudWxsKSkge1xuICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXAoKHgpID0+IHtcbiAgICAgICAgbGV0IGl0ZW0gPSB7IHZhbHVlOiB4LCBsYWJlbDogeCwgY2hlY2tlZDogdGhpcy5tb2RlbCA9PT0geCB9O1xuICAgICAgICBpZiAoaXRlbS5jaGVja2VkKSB7XG4gICAgICAgICAgdGhpcy5zZXRUaWxlKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMubWFwKCh4KSA9PiB7XG4gICAgICAgIHguY2hlY2tlZCA9IHRoaXMubW9kZWwgPT09IHgudmFsdWU7XG4gICAgICAgIGlmICh4LmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFRpbGUoeCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHg7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQsIGl0ZW0pIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIGlmIChpdGVtLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkT3B0aW9uQ2xpY2suZW1pdChpdGVtKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBvcHRpb24gb2YgdGhpcy5fb3B0aW9ucykge1xuICAgICAgICBvcHRpb24uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KGl0ZW0udmFsdWUpO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKGl0ZW0udmFsdWUpO1xuICAgICAgdGhpcy5zZXRUaWxlKGl0ZW0pO1xuICAgICAgdGhpcy5tb2RlbCA9IGl0ZW0udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25EaXNhYmxlZE9wdGlvbkNsaWNrLmVtaXQoaXRlbSk7XG4gICAgfVxuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgc2V0VGlsZShpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuYWN0aXZlVGlsZSA9IGl0ZW0udmFsdWU7XG4gICAgICB0aGlzLm1vdmVUaWxlKCk7XG4gICAgfVxuICB9XG5cbiAgbW92ZVRpbGUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgaW5kID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1pbmRpY2F0b3InKTtcbiAgICAgIGxldCBlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aWxlLmFjdGl2ZScpO1xuICAgICAgaWYgKGluZCAmJiBlbCkge1xuICAgICAgICBsZXQgdzogbnVtYmVyID0gZWwuY2xpZW50V2lkdGg7XG4gICAgICAgIGxldCBsZWZ0OiBudW1iZXIgPSBlbC5vZmZzZXRMZWZ0IC0gZWwub2Zmc2V0VG9wOyAvLyBSZW1vdmVzIHRoZSBib3JkZXIgd2lkdGggdGhhdCBGaXJlZm94IGFkZHMgd2l0aG91dCBhZmZlY3Rpbmcgb3RoZXIgYnJvd3NlcnNcbiAgICAgICAgaW5kLnN0eWxlLndpZHRoID0gYGNhbGMoJHt3fXB4ICsgMC4zMmVtKWA7XG4gICAgICAgIGluZC5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAnYWN0aXZlJztcbiAgICAgICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgaWYgKCFIZWxwZXJzLmlzQmxhbmsobW9kZWwpKSB7XG4gICAgICB0aGlzLnNldHVwT3B0aW9ucygpO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=