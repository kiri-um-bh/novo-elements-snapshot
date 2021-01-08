import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Color } from '../../utils/color-utils/ColorUtils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./color-swatch.component";
function NovoColorPickerComponent_novo_color_swatch_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "novo-color-swatch", 6);
    i0.ɵɵlistener("onClick", function NovoColorPickerComponent_novo_color_swatch_4_Template_novo_color_swatch_onClick_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.handleBlockChange($event); })("onHover", function NovoColorPickerComponent_novo_color_swatch_4_Template_novo_color_swatch_onHover_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.handleSwatchHover($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    i0.ɵɵproperty("color", color_r1);
} }
export class NovoColorPickerComponent {
    constructor() {
        /** Pixel value for picker width */
        this.width = 276;
        /** Color squares to display */
        this.colors = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];
        this.color = {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1,
        };
        this.onChange = new EventEmitter();
        this.onChangeComplete = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
        this.swatchStyle = {
            width: '30px',
            height: '30px',
            borderRadius: '4px',
            fontSize: '0',
        };
        this.input = {
            borderRadius: '4px',
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            border: '1px solid #e6ecf0',
            boxSizing: 'border-box',
            display: 'inline',
            fontSize: '14px',
            height: '30px',
            padding: '0',
            paddingLeft: '6px',
            width: '100%',
            color: '#657786',
        };
    }
    focus(color) {
        return { boxShadow: `0 0 4px ${color}` };
    }
    handleBlockChange({ hex, $event }) {
        if (Color.isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
    ngOnInit() {
        this.changes = this.onChange.pipe(debounceTime(100)).subscribe((x) => this.onChangeComplete.emit(x));
        this.setState(new Color(this.color));
    }
    ngOnChanges() {
        this.setState(new Color(this.color));
    }
    ngOnDestroy() {
        this.changes.unsubscribe();
    }
    setState(data) {
        this.currentColor = data;
        this.hsl = data.hsl;
        this.hsv = data.hsv;
        this.rgb = data.rgb;
        this.hex = data.hex;
        this.afterValidChange();
    }
    handleChange(data, $event) {
        const color = new Color(data.hex);
        if (color.isValid) {
            this.setState(color);
            this.onChange.emit({ color, $event });
            this.afterValidChange();
        }
    }
    /** hook for components after a complete change */
    afterValidChange() { }
    handleSwatchHover($event) {
        const color = new Color($event.hex);
        console.log('hover', $event);
        if (color.isValid) {
            this.setState(color);
            this.onSwatchHover.emit({ color, $event });
        }
    }
}
NovoColorPickerComponent.ɵfac = function NovoColorPickerComponent_Factory(t) { return new (t || NovoColorPickerComponent)(); };
NovoColorPickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NovoColorPickerComponent, selectors: [["novo-color-picker"]], inputs: { width: "width", colors: "colors", color: "color" }, outputs: { onChange: "onChange", onChangeComplete: "onChangeComplete", onSwatchHover: "onSwatchHover" }, features: [i0.ɵɵNgOnChangesFeature], decls: 7, vars: 5, consts: [[1, "novo-color-preview"], [1, "novo-color-preview-text"], [1, "novo-color-swatches"], [3, "color", "onClick", "onHover", 4, "ngFor", "ngForOf"], [1, "novo-color-input"], [3, "value", "onChange"], [3, "color", "onClick", "onHover"]], template: function NovoColorPickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtemplate(4, NovoColorPickerComponent_novo_color_swatch_4_Template, 1, 1, "novo-color-swatch", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4);
        i0.ɵɵelementStart(6, "input", 5);
        i0.ɵɵlistener("onChange", function NovoColorPickerComponent_Template_input_onChange_6_listener($event) { return ctx.handleValueChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("background-color", ctx.currentColor.hex);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.hex);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.colors);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", ctx.hex.replace("#", ""));
    } }, directives: [i1.NgForOf, i2.NovoColorSwatchComponent], styles: ["@-webkit-keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@keyframes rotate{0%{transform:rotate(0deg)}75%{transform:rotate(200deg)}to{transform:rotate(180deg)}}@-webkit-keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@keyframes half-rotate{0%{transform:rotate(45deg)}75%{transform:rotate(100deg)}to{transform:rotate(90deg)}}@-webkit-keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@keyframes rotateBack{0%{transform:rotate(90deg)}to{transform:rotate(0deg)}}@-webkit-keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}@keyframes show{0%{opacity:0;transform:translateX(-100%)}75%{transform:translateX(0)}to{opacity:1;transform:translateX(0)}}[_nghost-%COMP%]{background-color:#fff;border-radius:.4rem;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);cursor:default;display:grid;grid-template-rows:6rem 1fr -webkit-min-content;grid-template-rows:6rem 1fr min-content;overflow:auto;transform:translateY(0);transition:all .15s cubic-bezier(.35,0,.25,1);width:18rem}[_nghost-%COMP%]   .novo-color-preview[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}[_nghost-%COMP%]   .novo-color-swatches[_ngcontent-%COMP%]{display:grid;grid-auto-rows:2.4rem;grid-gap:.4rem;grid-template-columns:repeat(6,2.4rem);justify-content:center;margin:.4rem 0}[_nghost-%COMP%]   .novo-color-input[_ngcontent-%COMP%]{padding:.4rem .8rem}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoColorPickerComponent, [{
        type: Component,
        args: [{
                selector: 'novo-color-picker',
                template: `
    <div class="novo-color-preview" [style.backgroundColor]="currentColor.hex">
      <div class="novo-color-preview-text">{{ hex }}</div>
    </div>
    <div class="novo-color-swatches">
      <novo-color-swatch
        *ngFor="let color of colors"
        [color]="color"
        (onClick)="handleBlockChange($event)"
        (onHover)="handleSwatchHover($event)"
      ></novo-color-swatch>
    </div>
    <div class="novo-color-input">
      <input [value]="hex.replace('#', '')" (onChange)="handleValueChange($event)" />
    </div>
  `,
                styleUrls: ['./color-picker.component.scss'],
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
            }]
    }], null, { width: [{
            type: Input
        }], colors: [{
            type: Input
        }], color: [{
            type: Input
        }], onChange: [{
            type: Output
        }], onChangeComplete: [{
            type: Output
        }], onSwatchHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NvbG9yLXBpY2tlci9jb2xvci1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFtQyxNQUFNLG9DQUFvQyxDQUFDOzs7Ozs7SUFTdEYsNENBS3FCO0lBRm5CLDRPQUFxQywrTkFBQTtJQUV0QyxpQkFBb0I7OztJQUhuQixnQ0FBZTs7QUFhdkIsTUFBTSxPQUFPLHdCQUF3QjtJQXRCckM7UUF1QkUsbUNBQW1DO1FBQzFCLFVBQUssR0FBb0IsR0FBRyxDQUFDO1FBQ3RDLCtCQUErQjtRQUN0QixXQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4SCxVQUFLLEdBQWdDO1lBQzVDLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUNRLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ25DLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDM0Msa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBUWxELGdCQUFXLEdBQThCO1lB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbG9yLCBIU0wsIEhTTEEsIEhTViwgSFNWQSwgUkdCLCBSR0JBIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29sb3ItdXRpbHMvQ29sb3JVdGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY29sb3ItcGlja2VyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb2xvci1wcmV2aWV3XCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjdXJyZW50Q29sb3IuaGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm92by1jb2xvci1wcmV2aWV3LXRleHRcIj57eyBoZXggfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb2xvci1zd2F0Y2hlc1wiPlxuICAgICAgPG5vdm8tY29sb3Itc3dhdGNoXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjb2xvcnNcIlxuICAgICAgICBbY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgKG9uSG92ZXIpPVwiaGFuZGxlU3dhdGNoSG92ZXIoJGV2ZW50KVwiXG4gICAgICA+PC9ub3ZvLWNvbG9yLXN3YXRjaD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibm92by1jb2xvci1pbnB1dFwiPlxuICAgICAgPGlucHV0IFt2YWx1ZV09XCJoZXgucmVwbGFjZSgnIycsICcnKVwiIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCIgLz5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29sb3ItcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0NvbG9yUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyNzY7XG4gIC8qKiBDb2xvciBzcXVhcmVzIHRvIGRpc3BsYXkgKi9cbiAgQElucHV0KCkgY29sb3JzID0gWycjRkY2OTAwJywgJyNGQ0I5MDAnLCAnIzdCRENCNScsICcjMDBEMDg0JywgJyM4RUQxRkMnLCAnIzA2OTNFMycsICcjQUJCOEMzJywgJyNFQjE0NEMnLCAnI0Y3OERBNycsICcjOTkwMEVGJ107XG4gIEBJbnB1dCgpIGNvbG9yOiBIU0xBIHwgSFNWQSB8IFJHQkEgfCBzdHJpbmcgPSB7XG4gICAgaDogMjUwLFxuICAgIHM6IDAuNSxcbiAgICBsOiAwLjIsXG4gICAgYTogMSxcbiAgfTtcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkNoYW5nZUNvbXBsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvblN3YXRjaEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIGhzbCE6IEhTTDtcbiAgaHN2ITogSFNWO1xuICByZ2IhOiBSR0I7XG4gIGhleCE6IHN0cmluZztcbiAgY3VycmVudENvbG9yITogQ29sb3I7XG4gIGNoYW5nZXMhOiBTdWJzY3JpcHRpb247XG5cbiAgc3dhdGNoU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gICAgd2lkdGg6ICczMHB4JyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgIGZvbnRTaXplOiAnMCcsXG4gIH07XG4gIGlucHV0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAgIGJvcmRlclJhZGl1czogJzRweCcsXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogJzAnLFxuICAgIGJvcmRlclRvcExlZnRSYWRpdXM6ICcwJyxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2U2ZWNmMCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgcGFkZGluZ0xlZnQ6ICc2cHgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgY29sb3I6ICcjNjU3Nzg2JyxcbiAgfTtcblxuICBmb2N1cyhjb2xvcjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHsgYm94U2hhZG93OiBgMCAwIDRweCAke2NvbG9yfWAgfTtcbiAgfVxuXG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfTogYW55KSB7XG4gICAgaWYgKENvbG9yLmlzVmFsaWRIZXgoaGV4KSkge1xuICAgICAgLy8gdGhpcy5oZXggPSBoZXg7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZSh7IGhleCwgc291cmNlOiAnaGV4JyB9LCAkZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH06IGFueSkge1xuICAgIHRoaXMuaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXg6IGRhdGEsICRldmVudCB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2hhbmdlcyA9IHRoaXMub25DaGFuZ2UucGlwZShkZWJvdW5jZVRpbWUoMTAwKSkuc3Vic2NyaWJlKCh4KSA9PiB0aGlzLm9uQ2hhbmdlQ29tcGxldGUuZW1pdCh4KSk7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXcgQ29sb3IodGhpcy5jb2xvcikpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShuZXcgQ29sb3IodGhpcy5jb2xvcikpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzZXRTdGF0ZShkYXRhOiBDb2xvcikge1xuICAgIHRoaXMuY3VycmVudENvbG9yID0gZGF0YTtcbiAgICB0aGlzLmhzbCA9IGRhdGEuaHNsO1xuICAgIHRoaXMuaHN2ID0gZGF0YS5oc3Y7XG4gICAgdGhpcy5yZ2IgPSBkYXRhLnJnYjtcbiAgICB0aGlzLmhleCA9IGRhdGEuaGV4O1xuICAgIHRoaXMuYWZ0ZXJWYWxpZENoYW5nZSgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCkge1xuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKGRhdGEuaGV4KTtcbiAgICBpZiAoY29sb3IuaXNWYWxpZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShjb2xvcik7XG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBjb2xvciwgJGV2ZW50IH0pO1xuICAgICAgdGhpcy5hZnRlclZhbGlkQ2hhbmdlKCk7XG4gICAgfVxuICB9XG4gIC8qKiBob29rIGZvciBjb21wb25lbnRzIGFmdGVyIGEgY29tcGxldGUgY2hhbmdlICovXG4gIGFmdGVyVmFsaWRDaGFuZ2UoKSB7fVxuXG4gIGhhbmRsZVN3YXRjaEhvdmVyKCRldmVudCkge1xuICAgIGNvbnN0IGNvbG9yID0gbmV3IENvbG9yKCRldmVudC5oZXgpO1xuICAgIGNvbnNvbGUubG9nKCdob3ZlcicsICRldmVudCk7XG4gICAgaWYgKGNvbG9yLmlzVmFsaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoY29sb3IpO1xuICAgICAgdGhpcy5vblN3YXRjaEhvdmVyLmVtaXQoeyBjb2xvciwgJGV2ZW50IH0pO1xuICAgIH1cbiAgfVxufVxuIl19