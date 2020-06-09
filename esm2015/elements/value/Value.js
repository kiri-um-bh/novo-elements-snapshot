// NG2
import { Component, Input, HostBinding } from '@angular/core';
// APP
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./EntityList";
import * as i3 from "./Render";
function NovoValueElement_div_1_i_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i");
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("bhi-circle ", ctx_r3.meta.entityIconClass, "");
} }
function NovoValueElement_div_1_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function NovoValueElement_div_1_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.openLink(); });
    i0.ɵɵpipe(1, "render");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 1, ctx_r4.data, ctx_r4.meta), i0.ɵɵsanitizeHtml);
} }
function NovoValueElement_div_1_a_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "a", 11);
    i0.ɵɵpipe(1, "render");
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", ctx_r5.url, i0.ɵɵsanitizeUrl)("innerHTML", i0.ɵɵpipeBind2(1, 2, ctx_r5.data, ctx_r5.meta), i0.ɵɵsanitizeHtml);
} }
function NovoValueElement_div_1_novo_entity_list_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-entity-list", 12);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("data", ctx_r6.data)("meta", ctx_r6.meta);
} }
function NovoValueElement_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 5);
    i0.ɵɵtemplate(4, NovoValueElement_div_1_i_4_Template, 1, 3, "i", 6);
    i0.ɵɵtemplate(5, NovoValueElement_div_1_a_5_Template, 2, 4, "a", 7);
    i0.ɵɵtemplate(6, NovoValueElement_div_1_a_6_Template, 2, 5, "a", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, NovoValueElement_div_1_novo_entity_list_7_Template, 1, 2, "novo-entity-list", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.meta.label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.meta.showEntityIcon);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.NOVO_VALUE_TYPE.INTERNAL_LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.NOVO_VALUE_TYPE.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", ctx_r0.NOVO_VALUE_TYPE.ENTITY_LIST);
} }
function NovoValueElement_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
    i0.ɵɵpipe(1, "render");
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 1, ctx_r9.data, ctx_r9.meta), i0.ɵɵsanitizeHtml);
} }
function NovoValueElement_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, NovoValueElement_div_2_div_3_Template, 2, 4, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.customClass);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.meta.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.isDefault);
} }
function NovoValueElement_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 18);
    i0.ɵɵlistener("click", function NovoValueElement_div_3_i_1_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r13); const icon_r11 = ctx.$implicit; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.onValueClick(icon_r11); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r10.iconClass(icon_r11));
} }
function NovoValueElement_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, NovoValueElement_div_3_i_1_Template, 1, 2, "i", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.meta.icons);
} }
export var NOVO_VALUE_TYPE;
(function (NOVO_VALUE_TYPE) {
    NOVO_VALUE_TYPE[NOVO_VALUE_TYPE["DEFAULT"] = 0] = "DEFAULT";
    NOVO_VALUE_TYPE[NOVO_VALUE_TYPE["ENTITY_LIST"] = 1] = "ENTITY_LIST";
    NOVO_VALUE_TYPE[NOVO_VALUE_TYPE["LINK"] = 2] = "LINK";
    NOVO_VALUE_TYPE[NOVO_VALUE_TYPE["INTERNAL_LINK"] = 3] = "INTERNAL_LINK";
})(NOVO_VALUE_TYPE || (NOVO_VALUE_TYPE = {}));
export var NOVO_VALUE_THEME;
(function (NOVO_VALUE_THEME) {
    NOVO_VALUE_THEME[NOVO_VALUE_THEME["DEFAULT"] = 0] = "DEFAULT";
    NOVO_VALUE_THEME[NOVO_VALUE_THEME["MOBILE"] = 1] = "MOBILE";
})(NOVO_VALUE_THEME || (NOVO_VALUE_THEME = {}));
export class NovoValueElement {
    constructor() {
        this.meta = { type: 'SCALAR', label: '' }; // TODO use interface
        this.theme = NOVO_VALUE_THEME.DEFAULT;
        this.NOVO_VALUE_TYPE = NOVO_VALUE_TYPE;
        this.NOVO_VALUE_THEME = NOVO_VALUE_THEME;
        this.customClass = '';
    }
    set label(lbl) {
        this.meta.label = lbl;
    }
    get label() {
        return this.meta.label;
    }
    set type(typ) {
        this.meta.type = typ;
    }
    get type() {
        return this.meta.type;
    }
    ngOnInit() {
        if (Helpers.isEmpty(this.meta)) {
            this.meta = {
                label: '',
            };
        }
    }
    get isMobile() {
        return this.theme === NOVO_VALUE_THEME.MOBILE;
    }
    iconClass(icon) {
        let iconClass = '';
        if (icon && icon.iconCls) {
            iconClass = `bhi-${icon.iconCls} actions`;
            if (icon.onIconClick) {
                iconClass = `${iconClass} clickable`;
            }
            return iconClass;
        }
        return iconClass;
    }
    get isDefault() {
        return true;
    }
    get showLabel() {
        return (this._type === NOVO_VALUE_TYPE.INTERNAL_LINK || this._type === NOVO_VALUE_TYPE.LINK || this._type === NOVO_VALUE_TYPE.ENTITY_LIST);
    }
    get showIcon() {
        return this.meta && this.meta.icons && this.meta.icons.length && !Helpers.isEmpty(this.data);
    }
    onValueClick(icon) {
        if (icon.onIconClick && typeof icon.onIconClick === 'function') {
            icon.onIconClick(this.data, this.meta);
        }
    }
    openLink() {
        if (this.meta && this.meta.openLink && typeof this.meta.openLink === 'function') {
            this.meta.openLink(this.data, this.meta);
        }
    }
    ngOnChanges(changes) {
        if (this.meta && this.isLinkField(this.meta, this.data)) {
            this._type = NOVO_VALUE_TYPE.LINK;
            // Make sure the value has a protocol, otherwise the URL will be relative
            const hasProtocol = new RegExp('^(http|https)://', 'i');
            if (!hasProtocol.test(this.data)) {
                this.url = `http://${this.data}`;
            }
            else {
                this.url = this.data;
            }
        }
        else if (this.isEntityList(this.meta.type)) {
            this._type = NOVO_VALUE_TYPE.ENTITY_LIST;
        }
        else if (this.isHTMLField(this.meta)) {
            this.customClass = this.meta.customClass ? this.meta.customClass : '';
            if (this.meta.stripHTML && this.data && this.data.replace) {
                this.data = this.data.replace(/<(?!style|\/style).+?>/gi, '').trim();
            }
        }
        else if (this.meta && this.meta.associatedEntity) {
            switch (this.meta.associatedEntity.entity) {
                case 'ClientCorporation':
                case 'ClientContact':
                case 'Candidate':
                case 'Opportunity':
                case 'JobOrder':
                case 'Placement':
                case 'Lead':
                    this._type = NOVO_VALUE_TYPE.INTERNAL_LINK;
                    break;
                default:
                    break;
            }
        }
    }
    isLinkField(field, data) {
        const linkFields = ['companyURL', 'clientCorporationCompanyURL'];
        const regex = new RegExp('^(https?://(?:www.|(?!www))[^s.]+.[^s]{2,}|www.[^s]+.[^s]{2,})$', 'gi');
        const isURL = Helpers.isString(data) && regex.exec(data.trim());
        return linkFields.indexOf(field.name) > -1 || !!isURL || field.type === NOVO_VALUE_TYPE.LINK;
    }
    isEntityList(type) {
        return type === 'TO_MANY';
    }
    isHTMLField(meta) {
        return meta.dataSpecialization === 'HTML' || meta.inputType === 'TEXTAREA';
    }
}
NovoValueElement.ɵfac = function NovoValueElement_Factory(t) { return new (t || NovoValueElement)(); };
NovoValueElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoValueElement, selectors: [["novo-value"]], hostVars: 2, hostBindings: function NovoValueElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("mobile", ctx.isMobile);
    } }, inputs: { data: "data", meta: "meta", theme: "theme", label: "label", type: "type" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 3, consts: [[3, "ngSwitch"], ["class", "value-outer", 4, "ngIf"], ["class", "value-outer", 3, "ngClass", 4, "ngSwitchDefault"], ["class", "actions", 4, "ngIf"], [1, "value-outer"], [1, "value"], [3, "class", 4, "ngIf"], [3, "innerHTML", "click", 4, "ngSwitchCase"], ["class", "value", "target", "_blank", 3, "href", "innerHTML", 4, "ngSwitchCase"], [3, "data", "meta", 4, "ngSwitchCase"], [3, "innerHTML", "click"], ["target", "_blank", 1, "value", 3, "href", "innerHTML"], [3, "data", "meta"], [1, "value-outer", 3, "ngClass"], ["class", "value", 3, "innerHTML", 4, "ngIf"], [1, "value", 3, "innerHTML"], [1, "actions"], [3, "class", "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function NovoValueElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵtemplate(1, NovoValueElement_div_1_Template, 8, 5, "div", 1);
        i0.ɵɵtemplate(2, NovoValueElement_div_2_Template, 4, 3, "div", 2);
        i0.ɵɵtemplate(3, NovoValueElement_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx._type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showLabel);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showIcon);
    } }, directives: [i1.NgSwitch, i1.NgIf, i1.NgSwitchDefault, i1.NgSwitchCase, i2.EntityList, i1.NgClass, i1.NgForOf], pipes: [i3.RenderPipe], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoValueElement, [{
        type: Component,
        args: [{
                selector: 'novo-value',
                template: `
      <ng-container [ngSwitch]="_type">
          <div class="value-outer" *ngIf="showLabel">
              <label>{{ meta.label }}</label>
              <span class="value">
                <i *ngIf="meta.showEntityIcon" class="bhi-circle {{meta.entityIconClass}}"></i>
                <a *ngSwitchCase="NOVO_VALUE_TYPE.INTERNAL_LINK" (click)="openLink()" [innerHTML]="data | render : meta"></a>
                <a *ngSwitchCase="NOVO_VALUE_TYPE.LINK" class="value" [href]="url" target="_blank" [innerHTML]="data | render : meta"></a>
              </span>
              <novo-entity-list *ngSwitchCase="NOVO_VALUE_TYPE.ENTITY_LIST" [data]='data' [meta]="meta"></novo-entity-list>
          </div>
          <div *ngSwitchDefault class="value-outer" [ngClass]="customClass">
              <label>{{ meta.label }}</label>
              <div *ngIf="isDefault" class="value" [innerHTML]="data | render : meta"></div>
          </div>
          <div class="actions" *ngIf="showIcon">
              <i *ngFor="let icon of meta.icons" [class]="iconClass(icon)" (click)="onValueClick(icon)"></i>
          </div>
      </ng-container>
    `,
            }]
    }], null, { data: [{
            type: Input
        }], meta: [{
            type: Input
        }], theme: [{
            type: Input
        }], label: [{
            type: Input
        }], type: [{
            type: Input
        }], isMobile: [{
            type: HostBinding,
            args: ['class.mobile']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEcsTUFBTTtBQUNOLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lBbUI5QixvQkFBK0U7OztJQUFoRCx5RUFBMkM7Ozs7SUFDMUUsNkJBQTZHO0lBQTVELGtMQUFvQjs7SUFBb0MsaUJBQUk7OztJQUF2Qyw2RkFBa0M7OztJQUN4Ryx3QkFBMEg7Ozs7SUFBcEUsbURBQVksZ0ZBQUE7OztJQUVwRSx1Q0FBNkc7OztJQUEvQyxrQ0FBYSxxQkFBQTs7O0lBUC9FLDhCQUNJO0lBQUEsNkJBQU87SUFBQSxZQUFnQjtJQUFBLGlCQUFRO0lBQy9CLCtCQUNFO0lBQUEsbUVBQTJFO0lBQzNFLG1FQUF5RztJQUN6RyxtRUFBc0g7SUFDeEgsaUJBQU87SUFDUCxpR0FBMEY7SUFDOUYsaUJBQU07OztJQVBLLGVBQWdCO0lBQWhCLHVDQUFnQjtJQUVsQixlQUEyQjtJQUEzQixpREFBMkI7SUFDM0IsZUFBNkM7SUFBN0MsbUVBQTZDO0lBQzdDLGVBQW9DO0lBQXBDLDBEQUFvQztJQUV2QixlQUEyQztJQUEzQyxpRUFBMkM7OztJQUk3RCwwQkFBOEU7Ozs7SUFBekMsNkZBQWtDOzs7SUFGM0UsK0JBQ0k7SUFBQSw2QkFBTztJQUFBLFlBQWdCO0lBQUEsaUJBQVE7SUFDL0Isd0VBQXdFO0lBQzVFLGlCQUFNOzs7SUFIb0MsNENBQXVCO0lBQ3RELGVBQWdCO0lBQWhCLHVDQUFnQjtJQUNsQixlQUFpQjtJQUFqQix1Q0FBaUI7Ozs7SUFHdEIsNkJBQThGO0lBQWpDLGlPQUE0QjtJQUFDLGlCQUFJOzs7O0lBQTNELDBDQUF5Qjs7O0lB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QUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUFDL0YsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0lBQzdFLENBQUM7O2dGQS9IVSxnQkFBZ0I7cURBQWhCLGdCQUFnQjs7O1FBcEJ2QixnQ0FDSTtRQUFBLGlFQUNJO1FBUUosaUVBQ0k7UUFHSixpRUFDSTtRQUVSLDBCQUFlOztRQWpCRCxvQ0FBa0I7UUFDSCxlQUFpQjtRQUFqQixvQ0FBaUI7UUFhckIsZUFBZ0I7UUFBaEIsbUNBQWdCOztrREFNbEMsZ0JBQWdCO2NBdkI1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQW1CUDthQUNKOztrQkFFRSxLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLOztrQkFTTCxLQUFLOztrQkFRTCxLQUFLOztrQkFnQkwsV0FBVzttQkFBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuZXhwb3J0IGVudW0gTk9WT19WQUxVRV9UWVBFIHtcbiAgREVGQVVMVCxcbiAgRU5USVRZX0xJU1QsXG4gIExJTkssXG4gIElOVEVSTkFMX0xJTkssXG59XG5leHBvcnQgZW51bSBOT1ZPX1ZBTFVFX1RIRU1FIHtcbiAgREVGQVVMVCxcbiAgTU9CSUxFLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIl90eXBlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlLW91dGVyXCIgKm5nSWY9XCJzaG93TGFiZWxcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPnt7IG1ldGEubGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJtZXRhLnNob3dFbnRpdHlJY29uXCIgY2xhc3M9XCJiaGktY2lyY2xlIHt7bWV0YS5lbnRpdHlJY29uQ2xhc3N9fVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTktcIiAoY2xpY2spPVwib3BlbkxpbmsoKVwiIFtpbm5lckhUTUxdPVwiZGF0YSB8IHJlbmRlciA6IG1ldGFcIj48L2E+XG4gICAgICAgICAgICAgICAgPGEgKm5nU3dpdGNoQ2FzZT1cIk5PVk9fVkFMVUVfVFlQRS5MSU5LXCIgY2xhc3M9XCJ2YWx1ZVwiIFtocmVmXT1cInVybFwiIHRhcmdldD1cIl9ibGFua1wiIFtpbm5lckhUTUxdPVwiZGF0YSB8IHJlbmRlciA6IG1ldGFcIj48L2E+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPG5vdm8tZW50aXR5LWxpc3QgKm5nU3dpdGNoQ2FzZT1cIk5PVk9fVkFMVUVfVFlQRS5FTlRJVFlfTElTVFwiIFtkYXRhXT0nZGF0YScgW21ldGFdPVwibWV0YVwiPjwvbm92by1lbnRpdHktbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiIFtuZ0NsYXNzXT1cImN1c3RvbUNsYXNzXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD57eyBtZXRhLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzRGVmYXVsdFwiIGNsYXNzPVwidmFsdWVcIiBbaW5uZXJIVE1MXT1cImRhdGEgfCByZW5kZXIgOiBtZXRhXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiAqbmdJZj1cInNob3dJY29uXCI+XG4gICAgICAgICAgICAgIDxpICpuZ0Zvcj1cImxldCBpY29uIG9mIG1ldGEuaWNvbnNcIiBbY2xhc3NdPVwiaWNvbkNsYXNzKGljb24pXCIgKGNsaWNrKT1cIm9uVmFsdWVDbGljayhpY29uKVwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9WYWx1ZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTsgLy8gVE9ETyB1c2UgaW50ZXJmYWNlXG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueSA9IHsgdHlwZTogJ1NDQUxBUicsIGxhYmVsOiAnJyB9OyAvLyBUT0RPIHVzZSBpbnRlcmZhY2VcbiAgQElucHV0KClcbiAgdGhlbWU6IE5PVk9fVkFMVUVfVEhFTUUgPSBOT1ZPX1ZBTFVFX1RIRU1FLkRFRkFVTFQ7XG5cbiAgX3R5cGU6IE5PVk9fVkFMVUVfVFlQRTtcbiAgTk9WT19WQUxVRV9UWVBFID0gTk9WT19WQUxVRV9UWVBFO1xuICBOT1ZPX1ZBTFVFX1RIRU1FID0gTk9WT19WQUxVRV9USEVNRTtcbiAgdXJsOiBzdHJpbmc7XG4gIGN1c3RvbUNsYXNzOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgbGFiZWwobGJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEubGFiZWwgPSBsYmw7XG4gIH1cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWV0YS5sYWJlbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHR5cDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhLnR5cGUgPSB0eXA7XG4gIH1cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLnR5cGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KHRoaXMubWV0YSkpIHtcbiAgICAgIHRoaXMubWV0YSA9IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vYmlsZScpXG4gIHB1YmxpYyBnZXQgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUgPT09IE5PVk9fVkFMVUVfVEhFTUUuTU9CSUxFO1xuICB9XG5cbiAgaWNvbkNsYXNzKGljb24pOiBzdHJpbmcge1xuICAgIGxldCBpY29uQ2xhc3MgPSAnJztcbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb25DbHMpIHtcbiAgICAgIGljb25DbGFzcyA9IGBiaGktJHtpY29uLmljb25DbHN9IGFjdGlvbnNgO1xuICAgICAgaWYgKGljb24ub25JY29uQ2xpY2spIHtcbiAgICAgICAgaWNvbkNsYXNzID0gYCR7aWNvbkNsYXNzfSBjbGlja2FibGVgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGljb25DbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGljb25DbGFzcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93TGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5JTlRFUk5BTF9MSU5LIHx8IHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LIHx8IHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5FTlRJVFlfTElTVFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLmljb25zICYmIHRoaXMubWV0YS5pY29ucy5sZW5ndGggJiYgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmRhdGEpO1xuICB9XG5cbiAgb25WYWx1ZUNsaWNrKGljb24pOiB2b2lkIHtcbiAgICBpZiAoaWNvbi5vbkljb25DbGljayAmJiB0eXBlb2YgaWNvbi5vbkljb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWNvbi5vbkljb25DbGljayh0aGlzLmRhdGEsIHRoaXMubWV0YSk7XG4gICAgfVxuICB9XG4gIG9wZW5MaW5rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLm9wZW5MaW5rICYmIHR5cGVvZiB0aGlzLm1ldGEub3BlbkxpbmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMubWV0YS5vcGVuTGluayh0aGlzLmRhdGEsIHRoaXMubWV0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiBhbnkge1xuICAgIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5pc0xpbmtGaWVsZCh0aGlzLm1ldGEsIHRoaXMuZGF0YSkpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuTElOSztcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdmFsdWUgaGFzIGEgcHJvdG9jb2wsIG90aGVyd2lzZSB0aGUgVVJMIHdpbGwgYmUgcmVsYXRpdmVcbiAgICAgIGNvbnN0IGhhc1Byb3RvY29sOiBhbnkgPSBuZXcgUmVnRXhwKCdeKGh0dHB8aHR0cHMpOi8vJywgJ2knKTtcbiAgICAgIGlmICghaGFzUHJvdG9jb2wudGVzdCh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHRoaXMudXJsID0gYGh0dHA6Ly8ke3RoaXMuZGF0YX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRW50aXR5TGlzdCh0aGlzLm1ldGEudHlwZSkpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzSFRNTEZpZWxkKHRoaXMubWV0YSkpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3MgPSB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgPyB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgOiAnJztcbiAgICAgIGlmICh0aGlzLm1ldGEuc3RyaXBIVE1MICYmIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucmVwbGFjZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCg/IXN0eWxlfFxcL3N0eWxlKS4rPz4vZ2ksICcnKS50cmltKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTks7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMaW5rRmllbGQoZmllbGQ6IHsgbmFtZT86IHN0cmluZzsgdHlwZT86IE5PVk9fVkFMVUVfVFlQRSB9LCBkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBsaW5rRmllbGRzOiBhbnkgPSBbJ2NvbXBhbnlVUkwnLCAnY2xpZW50Q29ycG9yYXRpb25Db21wYW55VVJMJ107XG4gICAgY29uc3QgcmVnZXg6IGFueSA9IG5ldyBSZWdFeHAoJ14oaHR0cHM/Oi8vKD86d3d3LnwoPyF3d3cpKVtecy5dKy5bXnNdezIsfXx3d3cuW15zXSsuW15zXXsyLH0pJCcsICdnaScpO1xuICAgIGNvbnN0IGlzVVJMOiBhbnkgPSBIZWxwZXJzLmlzU3RyaW5nKGRhdGEpICYmIHJlZ2V4LmV4ZWMoZGF0YS50cmltKCkpO1xuICAgIHJldHVybiBsaW5rRmllbGRzLmluZGV4T2YoZmllbGQubmFtZSkgPiAtMSB8fCAhIWlzVVJMIHx8IGZpZWxkLnR5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICB9XG5cbiAgaXNFbnRpdHlMaXN0KHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlID09PSAnVE9fTUFOWSc7XG4gIH1cblxuICBpc0hUTUxGaWVsZChtZXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWV0YS5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdIVE1MJyB8fCBtZXRhLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJztcbiAgfVxufVxuIl19