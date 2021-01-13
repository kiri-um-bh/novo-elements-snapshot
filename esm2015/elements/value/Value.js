// NG2
import { Component, HostBinding, Input } from '@angular/core';
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
          <i *ngIf="meta.showEntityIcon" class="bhi-circle {{ meta.entityIconClass }}"></i>
          <a *ngSwitchCase="NOVO_VALUE_TYPE.INTERNAL_LINK" (click)="openLink()" [innerHTML]="data | render: meta"></a>
          <a *ngSwitchCase="NOVO_VALUE_TYPE.LINK" class="value" [href]="url" target="_blank" [innerHTML]="data | render: meta"></a>
        </span>
        <novo-entity-list *ngSwitchCase="NOVO_VALUE_TYPE.ENTITY_LIST" [data]="data" [meta]="meta"></novo-entity-list>
      </div>
      <div *ngSwitchDefault class="value-outer" [ngClass]="customClass">
        <label>{{ meta.label }}</label>
        <div *ngIf="isDefault" class="value" [innerHTML]="data | render: meta"></div>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9WYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxNQUFNO0FBQ04sT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUFtQnBDLG9CQUFpRjs7O0lBQWxELHlFQUE2Qzs7OztJQUM1RSw2QkFBNEc7SUFBM0Qsa0xBQW9COztJQUFtQyxpQkFBSTs7O0lBQXRDLDZGQUFpQzs7O0lBQ3ZHLHdCQUF5SDs7OztJQUFuRSxtREFBWSxnRkFBQTs7O0lBRXBFLHVDQUE2Rzs7O0lBQS9DLGtDQUFhLHFCQUFBOzs7SUFQN0UsOEJBQ0U7SUFBQSw2QkFBTztJQUFBLFlBQWdCO0lBQUEsaUJBQVE7SUFDL0IsK0JBQ0U7SUFBQSxtRUFBNkU7SUFDN0UsbUVBQXdHO0lBQ3hHLG1FQUFxSDtJQUN2SCxpQkFBTztJQUNQLGlHQUEwRjtJQUM1RixpQkFBTTs7O0lBUEcsZUFBZ0I7SUFBaEIsdUNBQWdCO0lBRWxCLGVBQTJCO0lBQTNCLGlEQUEyQjtJQUMzQixlQUE2QztJQUE3QyxtRUFBNkM7SUFDN0MsZUFBb0M7SUFBcEMsMERBQW9DO0lBRXZCLGVBQTJDO0lBQTNDLGlFQUEyQzs7O0lBSTdELDBCQUE2RTs7OztJQUF4Qyw2RkFBaUM7OztJQUZ4RSwrQkFDRTtJQUFBLDZCQUFPO0lBQUEsWUFBZ0I7SUFBQSxpQkFBUTtJQUMvQix3RUFBdUU7SUFDekUsaUJBQU07OztJQUhvQyw0Q0FBdUI7SUFDeEQsZUFBZ0I7SUFBaEIsdUNBQWdCO0lBQ2xCLGVBQWlCO0lBQWpCLHVDQUFpQjs7OztJQUd0Qiw2QkFBOEY7SUFBakMsaU9BQTRCO0lBQUMsaUJBQUk7Ozs7SUFBM0QsMENBQXlCOzs7SUFEOUQsK0JBQ0U7SUFBQSxvRUFBMEY7SUFDNUYsaUJBQU07OztJQURELGVBQStCO0lBQS9CLDJDQUErQjs7QUE3QjFDLE1BQU0sQ0FBTixJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDekIsMkRBQU8sQ0FBQTtJQUNQLG1FQUFXLENBQUE7SUFDWCxxREFBSSxDQUFBO0lBQ0osdUVBQWEsQ0FBQTtBQUNmLENBQUMsRUFMVyxlQUFlLEtBQWYsZUFBZSxRQUsxQjtBQUNELE1BQU0sQ0FBTixJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLDJEQUFNLENBQUE7QUFDUixDQUFDLEVBSFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUczQjtBQXlCRCxNQUFNLE9BQU8sZ0JBQWdCO0lBdkI3QjtRQTJCRSxTQUFJLEdBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtRQUVoRSxVQUFLLEdBQXFCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUduRCxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztLQW9IMUI7SUFsSEMsSUFDSSxLQUFLLENBQUMsR0FBVztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELElBQ0ksSUFBSSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNWLEtBQUssRUFBRSxFQUFFO2FBQ1YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELElBQ1csUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxDQUFDO0lBQ2hELENBQUM7SUFFRCxTQUFTLENBQUMsSUFBSTtRQUNaLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3hCLFNBQVMsR0FBRyxPQUFPLElBQUksQ0FBQyxPQUFPLFVBQVUsQ0FBQztZQUMxQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BCLFNBQVMsR0FBRyxHQUFHLFNBQVMsWUFBWSxDQUFDO2FBQ3RDO1lBQ0QsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLENBQ0wsSUFBSSxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssZUFBZSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FBQyxXQUFXLENBQ2xJLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQUk7UUFDZixJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLFVBQVUsRUFBRTtZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUNELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXVCO1FBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztZQUNsQyx5RUFBeUU7WUFDekUsTUFBTSxXQUFXLEdBQVEsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN0QjtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDO1NBQzFDO2FBQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3RFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0RTtTQUNGO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtnQkFDekMsS0FBSyxtQkFBbUIsQ0FBQztnQkFDekIsS0FBSyxlQUFlLENBQUM7Z0JBQ3JCLEtBQUssV0FBVyxDQUFDO2dCQUNqQixLQUFLLGFBQWEsQ0FBQztnQkFDbkIsS0FBSyxVQUFVLENBQUM7Z0JBQ2hCLEtBQUssV0FBVyxDQUFDO2dCQUNqQixLQUFLLE1BQU07b0JBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDO29CQUMzQyxNQUFNO2dCQUNSO29CQUNFLE1BQU07YUFDVDtTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFnRCxFQUFFLElBQVM7UUFDckUsTUFBTSxVQUFVLEdBQVEsQ0FBQyxZQUFZLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUN0RSxNQUFNLEtBQUssR0FBUSxJQUFJLE1BQU0sQ0FBQyxpRUFBaUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RyxNQUFNLEtBQUssR0FBUSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckUsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLElBQUksQ0FBQztJQUMvRixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDdkIsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBUztRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUM7SUFDN0UsQ0FBQzs7Z0ZBL0hVLGdCQUFnQjtxREFBaEIsZ0JBQWdCOzs7UUFwQnpCLGdDQUNFO1FBQUEsaUVBQ0U7UUFRRixpRUFDRTtRQUdGLGlFQUNFO1FBRUosMEJBQWU7O1FBakJELG9DQUFrQjtRQUNMLGVBQWlCO1FBQWpCLG9DQUFpQjtRQWFyQixlQUFnQjtRQUFoQixtQ0FBZ0I7O2tEQU05QixnQkFBZ0I7Y0F2QjVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUO2FBQ0Y7Z0JBR0MsSUFBSTtrQkFESCxLQUFLO1lBR04sSUFBSTtrQkFESCxLQUFLO1lBR04sS0FBSztrQkFESixLQUFLO1lBVUYsS0FBSztrQkFEUixLQUFLO1lBU0YsSUFBSTtrQkFEUCxLQUFLO1lBaUJLLFFBQVE7a0JBRGxCLFdBQVc7bUJBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmV4cG9ydCBlbnVtIE5PVk9fVkFMVUVfVFlQRSB7XG4gIERFRkFVTFQsXG4gIEVOVElUWV9MSVNULFxuICBMSU5LLFxuICBJTlRFUk5BTF9MSU5LLFxufVxuZXhwb3J0IGVudW0gTk9WT19WQUxVRV9USEVNRSB7XG4gIERFRkFVTFQsXG4gIE1PQklMRSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by12YWx1ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiX3R5cGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiICpuZ0lmPVwic2hvd0xhYmVsXCI+XG4gICAgICAgIDxsYWJlbD57eyBtZXRhLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICAgIDxpICpuZ0lmPVwibWV0YS5zaG93RW50aXR5SWNvblwiIGNsYXNzPVwiYmhpLWNpcmNsZSB7eyBtZXRhLmVudGl0eUljb25DbGFzcyB9fVwiPjwvaT5cbiAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTktcIiAoY2xpY2spPVwib3BlbkxpbmsoKVwiIFtpbm5lckhUTUxdPVwiZGF0YSB8IHJlbmRlcjogbWV0YVwiPjwvYT5cbiAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkxJTktcIiBjbGFzcz1cInZhbHVlXCIgW2hyZWZdPVwidXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyOiBtZXRhXCI+PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxub3ZvLWVudGl0eS1saXN0ICpuZ1N3aXRjaENhc2U9XCJOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1RcIiBbZGF0YV09XCJkYXRhXCIgW21ldGFdPVwibWV0YVwiPjwvbm92by1lbnRpdHktbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwidmFsdWUtb3V0ZXJcIiBbbmdDbGFzc109XCJjdXN0b21DbGFzc1wiPlxuICAgICAgICA8bGFiZWw+e3sgbWV0YS5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc0RlZmF1bHRcIiBjbGFzcz1cInZhbHVlXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyOiBtZXRhXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgKm5nSWY9XCJzaG93SWNvblwiPlxuICAgICAgICA8aSAqbmdGb3I9XCJsZXQgaWNvbiBvZiBtZXRhLmljb25zXCIgW2NsYXNzXT1cImljb25DbGFzcyhpY29uKVwiIChjbGljayk9XCJvblZhbHVlQ2xpY2soaWNvbilcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1ZhbHVlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgZGF0YTogYW55OyAvLyBUT0RPIHVzZSBpbnRlcmZhY2VcbiAgQElucHV0KClcbiAgbWV0YTogYW55ID0geyB0eXBlOiAnU0NBTEFSJywgbGFiZWw6ICcnIH07IC8vIFRPRE8gdXNlIGludGVyZmFjZVxuICBASW5wdXQoKVxuICB0aGVtZTogTk9WT19WQUxVRV9USEVNRSA9IE5PVk9fVkFMVUVfVEhFTUUuREVGQVVMVDtcblxuICBfdHlwZTogTk9WT19WQUxVRV9UWVBFO1xuICBOT1ZPX1ZBTFVFX1RZUEUgPSBOT1ZPX1ZBTFVFX1RZUEU7XG4gIE5PVk9fVkFMVUVfVEhFTUUgPSBOT1ZPX1ZBTFVFX1RIRU1FO1xuICB1cmw6IHN0cmluZztcbiAgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsYWJlbChsYmw6IHN0cmluZykge1xuICAgIHRoaXMubWV0YS5sYWJlbCA9IGxibDtcbiAgfVxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLmxhYmVsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEudHlwZSA9IHR5cDtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1ldGEudHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkodGhpcy5tZXRhKSkge1xuICAgICAgdGhpcy5tZXRhID0ge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW9iaWxlJylcbiAgcHVibGljIGdldCBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZSA9PT0gTk9WT19WQUxVRV9USEVNRS5NT0JJTEU7XG4gIH1cblxuICBpY29uQ2xhc3MoaWNvbik6IHN0cmluZyB7XG4gICAgbGV0IGljb25DbGFzcyA9ICcnO1xuICAgIGlmIChpY29uICYmIGljb24uaWNvbkNscykge1xuICAgICAgaWNvbkNsYXNzID0gYGJoaS0ke2ljb24uaWNvbkNsc30gYWN0aW9uc2A7XG4gICAgICBpZiAoaWNvbi5vbkljb25DbGljaykge1xuICAgICAgICBpY29uQ2xhc3MgPSBgJHtpY29uQ2xhc3N9IGNsaWNrYWJsZWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWNvbkNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbkNsYXNzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0RlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkxJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hvd0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YSAmJiB0aGlzLm1ldGEuaWNvbnMgJiYgdGhpcy5tZXRhLmljb25zLmxlbmd0aCAmJiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZGF0YSk7XG4gIH1cblxuICBvblZhbHVlQ2xpY2soaWNvbik6IHZvaWQge1xuICAgIGlmIChpY29uLm9uSWNvbkNsaWNrICYmIHR5cGVvZiBpY29uLm9uSWNvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpY29uLm9uSWNvbkNsaWNrKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cbiAgb3BlbkxpbmsoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLm1ldGEub3BlbkxpbmsgJiYgdHlwZW9mIHRoaXMubWV0YS5vcGVuTGluayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5tZXRhLm9wZW5MaW5rKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLmlzTGlua0ZpZWxkKHRoaXMubWV0YSwgdGhpcy5kYXRhKSkge1xuICAgICAgdGhpcy5fdHlwZSA9IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB2YWx1ZSBoYXMgYSBwcm90b2NvbCwgb3RoZXJ3aXNlIHRoZSBVUkwgd2lsbCBiZSByZWxhdGl2ZVxuICAgICAgY29uc3QgaGFzUHJvdG9jb2w6IGFueSA9IG5ldyBSZWdFeHAoJ14oaHR0cHxodHRwcyk6Ly8nLCAnaScpO1xuICAgICAgaWYgKCFoYXNQcm90b2NvbC50ZXN0KHRoaXMuZGF0YSkpIHtcbiAgICAgICAgdGhpcy51cmwgPSBgaHR0cDovLyR7dGhpcy5kYXRhfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVybCA9IHRoaXMuZGF0YTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbnRpdHlMaXN0KHRoaXMubWV0YS50eXBlKSkge1xuICAgICAgdGhpcy5fdHlwZSA9IE5PVk9fVkFMVUVfVFlQRS5FTlRJVFlfTElTVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNIVE1MRmllbGQodGhpcy5tZXRhKSkge1xuICAgICAgdGhpcy5jdXN0b21DbGFzcyA9IHRoaXMubWV0YS5jdXN0b21DbGFzcyA/IHRoaXMubWV0YS5jdXN0b21DbGFzcyA6ICcnO1xuICAgICAgaWYgKHRoaXMubWV0YS5zdHJpcEhUTUwgJiYgdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5yZXBsYWNlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC88KD8hc3R5bGV8XFwvc3R5bGUpLis/Pi9naSwgJycpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWV0YSAmJiB0aGlzLm1ldGEuYXNzb2NpYXRlZEVudGl0eSkge1xuICAgICAgc3dpdGNoICh0aGlzLm1ldGEuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgIGNhc2UgJ0xlYWQnOlxuICAgICAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuSU5URVJOQUxfTElOSztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0xpbmtGaWVsZChmaWVsZDogeyBuYW1lPzogc3RyaW5nOyB0eXBlPzogTk9WT19WQUxVRV9UWVBFIH0sIGRhdGE6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGxpbmtGaWVsZHM6IGFueSA9IFsnY29tcGFueVVSTCcsICdjbGllbnRDb3Jwb3JhdGlvbkNvbXBhbnlVUkwnXTtcbiAgICBjb25zdCByZWdleDogYW55ID0gbmV3IFJlZ0V4cCgnXihodHRwcz86Ly8oPzp3d3cufCg/IXd3dykpW15zLl0rLltec117Mix9fHd3dy5bXnNdKy5bXnNdezIsfSkkJywgJ2dpJyk7XG4gICAgY29uc3QgaXNVUkw6IGFueSA9IEhlbHBlcnMuaXNTdHJpbmcoZGF0YSkgJiYgcmVnZXguZXhlYyhkYXRhLnRyaW0oKSk7XG4gICAgcmV0dXJuIGxpbmtGaWVsZHMuaW5kZXhPZihmaWVsZC5uYW1lKSA+IC0xIHx8ICEhaXNVUkwgfHwgZmllbGQudHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkxJTks7XG4gIH1cblxuICBpc0VudGl0eUxpc3QodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdUT19NQU5ZJztcbiAgfVxuXG4gIGlzSFRNTEZpZWxkKG1ldGE6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXRhLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ0hUTUwnIHx8IG1ldGEuaW5wdXRUeXBlID09PSAnVEVYVEFSRUEnO1xuICB9XG59XG4iXX0=