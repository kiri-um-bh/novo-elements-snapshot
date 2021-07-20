import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ContentChildren, EventEmitter, forwardRef, HostBinding, Input, Output, QueryList, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ErrorStateMatcher, mixinErrorState } from '../common';
import { NovoFieldControl } from '../field';
import { NovoRadioElement } from './Radio';
import { NOVO_RADIO_GROUP } from './tokens';
import * as i0 from "@angular/core";
const _c0 = ["*"];
// make radio-button-group ids unique
let nextId = 0;
// Value accessor for the component (supports ngModel)
const RADIOGROUP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoRadioGroup),
    multi: true,
};
// Boilerplate for applying mixins
class NovoRadioGroupBase {
    constructor(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const NovoRadioGroupMixins = mixinErrorState(NovoRadioGroupBase);
export class NovoRadioGroup extends NovoRadioGroupMixins {
    constructor() {
        super(...arguments);
        this._uniqueId = `ngx-radio-group-${++nextId}`;
        /** Tab index for the chip list. */
        this._tabIndex = 0;
        /** User defined tab index. */
        this._userTabIndex = null;
        this.controlType = 'radio-group';
        /** @docs-private Implemented as part of NovoFieldControl. */
        this.lastKeyValue = null;
        this.id = this._uniqueId;
        this.tabindex = 0;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this._name = this._uniqueId;
        this._value = false;
        this._required = false;
        this._disabled = false;
        this._appearance = 'horizontal';
        this.onChangeCallback = (_) => {
            // placeholder
        };
        this.onTouchedCallback = () => {
            // placeholder
        };
    }
    get appearance() {
        return this._appearance;
    }
    set appearance(value) {
        if (this._appearance !== value) {
            this._appearance = value;
            this._updateRadioButtonAppearance();
        }
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._value !== value) {
            this._value = value;
            this._updateSelectedRadioFromValue();
            this.onChangeCallback(this._value);
        }
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (this._name !== value) {
            this._updateRadioButtonNames();
        }
    }
    get disabled() {
        return this.ngControl ? !!this.ngControl.disabled : this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._updateRadioButtonDisabled();
    }
    /**
     * Implemented as part of NovoFieldControl.
     * @docs-private
     */
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /** Implemented as part of NovoFieldControl. */
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
    }
    get selected() {
        return this._selected;
    }
    ngAfterContentInit() {
        this._updateRadioButtonAppearance();
        this._updateRadioButtonNames();
        this._updateSelectedRadioFromValue();
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    _updateRadioButtonAppearance() {
        if (this._radios) {
            this._radios.forEach((radio) => {
                radio.vertical = this.appearance === 'vertical';
            });
        }
    }
    _updateRadioButtonNames() {
        if (this._radios) {
            this._radios.forEach((radio) => {
                radio.name = this.name;
            });
        }
    }
    _updateRadioButtonDisabled() {
        if (this._radios) {
            this._radios.forEach((radio) => {
                radio.disabled = this.disabled;
            });
        }
    }
    _updateSelectedRadioFromValue() {
        if (this._radios) {
            this._radios.forEach((radio) => {
                radio.checked = this.value === radio.value;
                if (radio.checked) {
                    this._selected = radio;
                }
            });
        }
    }
    /** Whether any radio buttons has focus. */
    get focused() {
        // todo: implement this.
        return false;
    }
    /** Implemented as part of NovoFieldControl. */
    get empty() {
        return this.value === null;
    }
    /** Implemented as part of NovoFieldControl. */
    get shouldLabelFloat() {
        return !this.empty || this.focused;
    }
    /** Implemented as part of NovoFieldControl. */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    /** Implemented as part of NovoFieldControl. */
    onContainerClick(event) {
        this.focus();
    }
    /**
     * Focuses the first non-disabled chip in this chip list, or the associated input when there
     * are no eligible chips.
     */
    focus(options) {
        if (this.disabled) {
            return;
        }
        // TODO
    }
}
NovoRadioGroup.ɵfac = function NovoRadioGroup_Factory(t) { return ɵNovoRadioGroup_BaseFactory(t || NovoRadioGroup); };
NovoRadioGroup.ɵcmp = i0.ɵɵdefineComponent({ type: NovoRadioGroup, selectors: [["novo-radio-group"]], contentQueries: function NovoRadioGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoRadioElement, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._radios = _t);
    } }, hostAttrs: [1, "novo-radio-group"], hostVars: 6, hostBindings: function NovoRadioGroup_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("novo-radio-group-appearance-horizontal", ctx.appearance == "horizontal")("novo-radio-group-appearance-vertical", ctx.appearance == "vertical")("disabled", ctx.disabled);
    } }, inputs: { id: "id", tabindex: "tabindex", errorStateMatcher: "errorStateMatcher", appearance: "appearance", value: "value", name: "name", disabled: "disabled", required: "required", placeholder: "placeholder" }, outputs: { change: "change", blur: "blur" }, features: [i0.ɵɵProvidersFeature([
            RADIOGROUP_VALUE_ACCESSOR,
            { provide: NOVO_RADIO_GROUP, useExisting: NovoRadioGroup },
            { provide: NovoFieldControl, useExisting: NovoRadioGroup },
        ]), i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoRadioGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
const ɵNovoRadioGroup_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(NovoRadioGroup);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoRadioGroup, [{
        type: Component,
        args: [{
                selector: 'novo-radio-group',
                providers: [
                    RADIOGROUP_VALUE_ACCESSOR,
                    { provide: NOVO_RADIO_GROUP, useExisting: NovoRadioGroup },
                    { provide: NovoFieldControl, useExisting: NovoRadioGroup },
                ],
                template: '<ng-content></ng-content>',
                host: {
                    class: 'novo-radio-group',
                    '[class.novo-radio-group-appearance-horizontal]': 'appearance=="horizontal"',
                    '[class.novo-radio-group-appearance-vertical]': 'appearance=="vertical"',
                },
            }]
    }], null, { id: [{
            type: Input
        }], tabindex: [{
            type: Input
        }], errorStateMatcher: [{
            type: Input
        }], change: [{
            type: Output
        }], blur: [{
            type: Output
        }], _radios: [{
            type: ContentChildren,
            args: [forwardRef(() => NovoRadioElement), { descendants: true }]
        }], appearance: [{
            type: Input
        }], value: [{
            type: Input
        }], name: [{
            type: Input
        }], disabled: [{
            type: HostBinding,
            args: ['class.disabled']
        }, {
            type: Input
        }], required: [{
            type: Input
        }], placeholder: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9yYWRpby9SYWRpb0dyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBK0QsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoSCxPQUFPLEVBQTJCLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDNUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7O0FBRTVDLHFDQUFxQztBQUNyQyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDZixzREFBc0Q7QUFDdEQsTUFBTSx5QkFBeUIsR0FBRztJQUNoQyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQzdDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLGtDQUFrQztBQUNsQyxNQUFNLGtCQUFrQjtJQUN0QixZQUNTLHlCQUE0QyxFQUM1QyxXQUFtQixFQUNuQixnQkFBb0MsRUFDcEMsU0FBb0I7UUFIcEIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFtQjtRQUM1QyxnQkFBVyxHQUFYLFdBQVcs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WU8sS0FBSztrQkFBakIsS0FBSztZQWFGLElBQUk7a0JBRFAsS0FBSztZQWFGLFFBQVE7a0JBRlgsV0FBVzttQkFBQyxnQkFBZ0I7O2tCQUM1QixLQUFLO1lBY0YsUUFBUTtrQkFEWCxLQUFLO1lBV0YsV0FBVztrQkFEZCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBGb2N1c0tleU1hbmFnZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0NvbnRyb2wsIE5nRm9ybSwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDYW5VcGRhdGVFcnJvclN0YXRlQ3RvciwgRXJyb3JTdGF0ZU1hdGNoZXIsIG1peGluRXJyb3JTdGF0ZSB9IGZyb20gJy4uL2NvbW1vbic7XG5pbXBvcnQgeyBOb3ZvRmllbGRDb250cm9sIH0gZnJvbSAnLi4vZmllbGQnO1xuaW1wb3J0IHsgTm92b1JhZGlvRWxlbWVudCB9IGZyb20gJy4vUmFkaW8nO1xuaW1wb3J0IHsgTk9WT19SQURJT19HUk9VUCB9IGZyb20gJy4vdG9rZW5zJztcblxuLy8gbWFrZSByYWRpby1idXR0b24tZ3JvdXAgaWRzIHVuaXF1ZVxubGV0IG5leHRJZCA9IDA7XG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IFJBRElPR1JPVVBfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvUmFkaW9Hcm91cCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuLy8gQm9pbGVycGxhdGUgZm9yIGFwcGx5aW5nIG1peGluc1xuY2xhc3MgTm92b1JhZGlvR3JvdXBCYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9kZWZhdWx0RXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyLFxuICAgIHB1YmxpYyBfcGFyZW50Rm9ybTogTmdGb3JtLFxuICAgIHB1YmxpYyBfcGFyZW50Rm9ybUdyb3VwOiBGb3JtR3JvdXBEaXJlY3RpdmUsXG4gICAgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sLFxuICApIHt9XG59XG5jb25zdCBOb3ZvUmFkaW9Hcm91cE1peGluczogQ2FuVXBkYXRlRXJyb3JTdGF0ZUN0b3IgJiB0eXBlb2YgTm92b1JhZGlvR3JvdXBCYXNlID0gbWl4aW5FcnJvclN0YXRlKE5vdm9SYWRpb0dyb3VwQmFzZSk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tcmFkaW8tZ3JvdXAnLFxuICBwcm92aWRlcnM6IFtcbiAgICBSQURJT0dST1VQX1ZBTFVFX0FDQ0VTU09SLFxuICAgIHsgcHJvdmlkZTogTk9WT19SQURJT19HUk9VUCwgdXNlRXhpc3Rpbmc6IE5vdm9SYWRpb0dyb3VwIH0sXG4gICAgeyBwcm92aWRlOiBOb3ZvRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTm92b1JhZGlvR3JvdXAgfSxcbiAgXSxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnbm92by1yYWRpby1ncm91cCcsXG4gICAgJ1tjbGFzcy5ub3ZvLXJhZGlvLWdyb3VwLWFwcGVhcmFuY2UtaG9yaXpvbnRhbF0nOiAnYXBwZWFyYW5jZT09XCJob3Jpem9udGFsXCInLFxuICAgICdbY2xhc3Mubm92by1yYWRpby1ncm91cC1hcHBlYXJhbmNlLXZlcnRpY2FsXSc6ICdhcHBlYXJhbmNlPT1cInZlcnRpY2FsXCInLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUmFkaW9Hcm91cCBleHRlbmRzIE5vdm9SYWRpb0dyb3VwTWl4aW5zIGltcGxlbWVudHMgTm92b0ZpZWxkQ29udHJvbDxhbnk+LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIHByaXZhdGUgX3VuaXF1ZUlkOiBzdHJpbmcgPSBgbmd4LXJhZGlvLWdyb3VwLSR7KytuZXh0SWR9YDtcbiAgLyoqIFRoZSBhcmlhLWRlc2NyaWJlZGJ5IGF0dHJpYnV0ZSBvbiB0aGUgY2hpcCBsaXN0IGZvciBpbXByb3ZlZCBhMTF5LiAqL1xuICBfYXJpYURlc2NyaWJlZGJ5OiBzdHJpbmc7XG4gIC8qKiBUYWIgaW5kZXggZm9yIHRoZSBjaGlwIGxpc3QuICovXG4gIF90YWJJbmRleCA9IDA7XG4gIC8qKiBVc2VyIGRlZmluZWQgdGFiIGluZGV4LiAqL1xuICBfdXNlclRhYkluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgLyoqIFRoZSBGb2N1c0tleU1hbmFnZXIgd2hpY2ggaGFuZGxlcyBmb2N1cy4gKi9cbiAgX2tleU1hbmFnZXI6IEZvY3VzS2V5TWFuYWdlcjxOb3ZvUmFkaW9FbGVtZW50PjtcblxuICByZWFkb25seSBjb250cm9sVHlwZTogc3RyaW5nID0gJ3JhZGlvLWdyb3VwJztcbiAgLyoqIEBkb2NzLXByaXZhdGUgSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLiAqL1xuICBsYXN0S2V5VmFsdWU6IHN0cmluZyA9IG51bGw7XG4gIC8qKiBAZG9jcy1wcml2YXRlIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC4qL1xuICBsYXN0Q2FyZXRQb3NpdGlvbjogbnVtYmVyIHwgbnVsbDtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gdGhpcy5fdW5pcXVlSWQ7XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuICAvKiogQW4gb2JqZWN0IHVzZWQgdG8gY29udHJvbCB3aGVuIGVycm9yIG1lc3NhZ2VzIGFyZSBzaG93bi4gKi9cbiAgQElucHV0KCkgZXJyb3JTdGF0ZU1hdGNoZXI6IEVycm9yU3RhdGVNYXRjaGVyO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBAT3V0cHV0KCkgZm9jdXNlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gTm92b1JhZGlvRWxlbWVudCksIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgX3JhZGlvczogUXVlcnlMaXN0PE5vdm9SYWRpb0VsZW1lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBhcHBlYXJhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2FwcGVhcmFuY2U7XG4gIH1cblxuICBzZXQgYXBwZWFyYW5jZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLl9hcHBlYXJhbmNlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fYXBwZWFyYW5jZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fdXBkYXRlUmFkaW9CdXR0b25BcHBlYXJhbmNlKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgZ2V0IHZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKTtcbiAgICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuXG4gIHNldCBuYW1lKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5fbmFtZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJhZGlvQnV0dG9uTmFtZXMoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5nQ29udHJvbCA/ICEhdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgOiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fdXBkYXRlUmFkaW9CdXR0b25EaXNhYmxlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC5cbiAgICogQGRvY3MtcHJpdmF0ZVxuICAgKi9cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgLyoqIEltcGxlbWVudGVkIGFzIHBhcnQgb2YgTm92b0ZpZWxkQ29udHJvbC4gKi9cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBzZWxlY3RlZCgpOiBOb3ZvUmFkaW9FbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZyA9IHRoaXMuX3VuaXF1ZUlkO1xuICBwcm90ZWN0ZWQgX3ZhbHVlOiBib29sZWFuID0gZmFsc2U7XG4gIHByb3RlY3RlZCBfc2VsZWN0ZWQ6IE5vdm9SYWRpb0VsZW1lbnQ7XG4gIHByb3RlY3RlZCBfcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJvdGVjdGVkIF9kaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcm90ZWN0ZWQgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfYXBwZWFyYW5jZTogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5fdXBkYXRlUmFkaW9CdXR0b25BcHBlYXJhbmNlKCk7XG4gICAgdGhpcy5fdXBkYXRlUmFkaW9CdXR0b25OYW1lcygpO1xuICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjayA9IChfOiBhbnkpID0+IHtcbiAgICAvLyBwbGFjZWhvbGRlclxuICB9O1xuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgLy8gcGxhY2Vob2xkZXJcbiAgfTtcblxuICBwcml2YXRlIF91cGRhdGVSYWRpb0J1dHRvbkFwcGVhcmFuY2UoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy5fcmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgIHJhZGlvLnZlcnRpY2FsID0gdGhpcy5hcHBlYXJhbmNlID09PSAndmVydGljYWwnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlUmFkaW9CdXR0b25OYW1lcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmFkaW9zKSB7XG4gICAgICB0aGlzLl9yYWRpb3MuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgcmFkaW8ubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVJhZGlvQnV0dG9uRGlzYWJsZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy5fcmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgIHJhZGlvLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVNlbGVjdGVkUmFkaW9Gcm9tVmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3JhZGlvcykge1xuICAgICAgdGhpcy5fcmFkaW9zLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0aGlzLnZhbHVlID09PSByYWRpby52YWx1ZTtcbiAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHJhZGlvO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogV2hldGhlciBhbnkgcmFkaW8gYnV0dG9ucyBoYXMgZm9jdXMuICovXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIC8vIHRvZG86IGltcGxlbWVudCB0aGlzLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuICovXG4gIGdldCBlbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIC8qKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuICovXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5lbXB0eSB8fCB0aGlzLmZvY3VzZWQ7XG4gIH1cblxuICAvKiogSW1wbGVtZW50ZWQgYXMgcGFydCBvZiBOb3ZvRmllbGRDb250cm9sLiAqL1xuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fYXJpYURlc2NyaWJlZGJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8qKiBJbXBsZW1lbnRlZCBhcyBwYXJ0IG9mIE5vdm9GaWVsZENvbnRyb2wuICovXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgZmlyc3Qgbm9uLWRpc2FibGVkIGNoaXAgaW4gdGhpcyBjaGlwIGxpc3QsIG9yIHRoZSBhc3NvY2lhdGVkIGlucHV0IHdoZW4gdGhlcmVcbiAgICogYXJlIG5vIGVsaWdpYmxlIGNoaXBzLlxuICAgKi9cbiAgZm9jdXMob3B0aW9ucz86IEZvY3VzT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFRPRE9cbiAgfVxufVxuIl19