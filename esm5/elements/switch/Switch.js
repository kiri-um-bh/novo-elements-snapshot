// NG2
import { Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { KeyCodes } from '../../utils/key-codes/KeyCodes';
import * as i0 from "@angular/core";
var _c0 = ["*"];
// Value accessor for the component (supports ngModel)
var SWITCH_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoSwitchElement; }),
    multi: true,
};
var NovoSwitchElement = /** @class */ (function () {
    function NovoSwitchElement(ref) {
        this.ref = ref;
        this.onChange = new EventEmitter();
        this._disabled = false;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(NovoSwitchElement.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = !value;
        },
        enumerable: true,
        configurable: true
    });
    NovoSwitchElement.prototype.onKeydown = function (event) {
        if (event.keyCode === KeyCodes.SPACE) {
            event.preventDefault();
            this.toggle(event);
        }
    };
    NovoSwitchElement.prototype.toggle = function (event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        if (this.disabled) {
            return;
        }
        this.model = !this.model;
        this.onChange.next(this.model);
        this.onModelChange(this.model);
        this.ref.markForCheck();
    };
    NovoSwitchElement.prototype.writeValue = function (model) {
        this.model = model;
        this.ref.markForCheck();
    };
    NovoSwitchElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    NovoSwitchElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    NovoSwitchElement.ɵfac = function NovoSwitchElement_Factory(t) { return new (t || NovoSwitchElement)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    NovoSwitchElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoSwitchElement, selectors: [["novo-switch"]], hostAttrs: ["role", "checkbox"], hostVars: 4, hostBindings: function NovoSwitchElement_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function NovoSwitchElement_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
        } if (rf & 2) {
            i0.ɵɵattribute("aria-checked", ctx.model)("aria-disabled", ctx.disabled);
            i0.ɵɵclassMap(ctx.theme);
        } }, inputs: { theme: "theme", disabled: "disabled" }, outputs: { onChange: "onChange" }, features: [i0.ɵɵProvidersFeature([SWITCH_VALUE_ACCESSOR])], ngContentSelectors: _c0, decls: 7, vars: 0, consts: [[3, "click"], [1, "novo-switch-container"], [1, "novo-switch-bar"], [1, "novo-switch-thumb-container"], [1, "novo-switch-thumb"], [1, "novo-switch-label"]], template: function NovoSwitchElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function NovoSwitchElement_Template_div_click_0_listener($event) { return ctx.toggle($event); });
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelement(4, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵprojection(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return NovoSwitchElement;
}());
export { NovoSwitchElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoSwitchElement, [{
        type: Component,
        args: [{
                selector: 'novo-switch',
                providers: [SWITCH_VALUE_ACCESSOR],
                template: "\n        <div (click)=\"toggle($event)\">\n            <div class=\"novo-switch-container\">\n                <div class=\"novo-switch-bar\"></div>\n                <div class=\"novo-switch-thumb-container\">\n                    <div class=\"novo-switch-thumb\"></div>\n                </div>\n            </div>\n            <div class=\"novo-switch-label\"><ng-content></ng-content></div>\n        </div>\n    ",
                host: {
                    role: 'checkbox',
                    '[attr.aria-checked]': 'model',
                    '[attr.aria-disabled]': 'disabled',
                    '(keydown)': 'onKeydown($event)',
                    '[class]': 'theme',
                },
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { theme: [{
            type: Input
        }], onChange: [{
            type: Output
        }], disabled: [{
            type: Input,
            args: ['disabled']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N3aXRjaC9Td2l0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFMUQsc0RBQXNEO0FBQ3RELElBQU0scUJBQXFCLEdBQUc7SUFDNUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQztJQUNoRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRjtJQTBDRSwyQkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFoQjFDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVqRCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTNCLGtCQUFhLEdBQWEsY0FBTyxDQUFDLENBQUM7UUFDbkMsbUJBQWMsR0FBYSxjQUFPLENBQUMsQ0FBQztJQVdTLENBQUM7SUFUOUMsc0JBQUksdUNBQVE7YUFBWjtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFDYSxLQUFLO1lBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BTEE7SUFTRCxxQ0FBUyxHQUFULFVBQVUsS0FBSztRQUNiLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsS0FBSyxFQUFFO1lBQ3BDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELGtDQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBSSxLQUFLLEVBQUU7WUFDVCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQ0FBVSxHQUFWLFVBQVcsS0FBYztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBWTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztzRkF4RFUsaUJBQWlCOzBEQUFqQixpQkFBaUI7NEdBQWpCLHFCQUFpQjs7OzttSUFwQmpCLENBQUMscUJBQXFCLENBQUM7O1lBRTVCLDhCQUNJO1lBREMsaUdBQVMsa0JBQWMsSUFBQztZQUN6Qiw4QkFDSTtZQUFBLHlCQUFtQztZQUNuQyw4QkFDSTtZQUFBLHlCQUFxQztZQUN6QyxpQkFBTTtZQUNWLGlCQUFNO1lBQ04sOEJBQStCO1lBQUEsa0JBQVk7WUFBYSxpQkFBTTtZQUNsRSxpQkFBTTs7NEJBekJkO0NBNEZDLEFBL0VELElBK0VDO1NBekRZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBdEI3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO2dCQUNsQyxRQUFRLEVBQUUsZ2FBVVA7Z0JBQ0gsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxVQUFVO29CQUNoQixxQkFBcUIsRUFBRSxPQUFPO29CQUM5QixzQkFBc0IsRUFBRSxVQUFVO29CQUNsQyxXQUFXLEVBQUUsbUJBQW1CO29CQUNoQyxTQUFTLEVBQUUsT0FBTztpQkFDbkI7YUFDRjs7a0JBRUUsS0FBSzs7a0JBRUwsTUFBTTs7a0JBWU4sS0FBSzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFNXSVRDSF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9Td2l0Y2hFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXN3aXRjaCcsXG4gIHByb3ZpZGVyczogW1NXSVRDSF9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKGNsaWNrKT1cInRvZ2dsZSgkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1zd2l0Y2gtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLWJhclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC10aHVtYi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tc3dpdGNoLXRodW1iXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLXN3aXRjaC1sYWJlbFwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgaG9zdDoge1xuICAgIHJvbGU6ICdjaGVja2JveCcsXG4gICAgJ1thdHRyLmFyaWEtY2hlY2tlZF0nOiAnbW9kZWwnLFxuICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJyhrZXlkb3duKSc6ICdvbktleWRvd24oJGV2ZW50KScsXG4gICAgJ1tjbGFzc10nOiAndGhlbWUnLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvU3dpdGNoRWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQE91dHB1dCgpXG4gIG9uQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbW9kZWw6IGJvb2xlYW47XG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGdldCBkaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBASW5wdXQoJ2Rpc2FibGVkJylcbiAgc2V0IGRpc2FibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSAhdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25LZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGVzLlNQQUNFKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy50b2dnbGUoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZShldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb2RlbCA9ICF0aGlzLm1vZGVsO1xuICAgIHRoaXMub25DaGFuZ2UubmV4dCh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgdGhpcy5yZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMucmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19