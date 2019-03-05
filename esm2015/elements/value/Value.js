/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, HostBinding } from '@angular/core';
// APP
import { Helpers } from '../../utils/Helpers';
/** @enum {number} */
const NOVO_VALUE_TYPE = {
    DEFAULT: 0,
    ENTITY_LIST: 1,
    LINK: 2,
    INTERNAL_LINK: 3,
};
export { NOVO_VALUE_TYPE };
NOVO_VALUE_TYPE[NOVO_VALUE_TYPE.DEFAULT] = 'DEFAULT';
NOVO_VALUE_TYPE[NOVO_VALUE_TYPE.ENTITY_LIST] = 'ENTITY_LIST';
NOVO_VALUE_TYPE[NOVO_VALUE_TYPE.LINK] = 'LINK';
NOVO_VALUE_TYPE[NOVO_VALUE_TYPE.INTERNAL_LINK] = 'INTERNAL_LINK';
/** @enum {number} */
const NOVO_VALUE_THEME = {
    DEFAULT: 0,
    MOBILE: 1,
};
export { NOVO_VALUE_THEME };
NOVO_VALUE_THEME[NOVO_VALUE_THEME.DEFAULT] = 'DEFAULT';
NOVO_VALUE_THEME[NOVO_VALUE_THEME.MOBILE] = 'MOBILE';
export class NovoValueElement {
    constructor() {
        this.meta = { type: 'SCALAR', label: '' }; // TODO use interface
        this.theme = NOVO_VALUE_THEME.DEFAULT;
        this.NOVO_VALUE_TYPE = NOVO_VALUE_TYPE;
        this.NOVO_VALUE_THEME = NOVO_VALUE_THEME;
        this.customClass = '';
    }
    /**
     * @param {?} lbl
     * @return {?}
     */
    set label(lbl) {
        this.meta.label = lbl;
    }
    /**
     * @return {?}
     */
    get label() {
        return this.meta.label;
    }
    /**
     * @param {?} typ
     * @return {?}
     */
    set type(typ) {
        this.meta.type = typ;
    }
    /**
     * @return {?}
     */
    get type() {
        return this.meta.type;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (Helpers.isEmpty(this.meta)) {
            this.meta = {
                label: '',
            };
        }
    }
    /**
     * @return {?}
     */
    get isMobile() {
        return this.theme === NOVO_VALUE_THEME.MOBILE;
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    iconClass(icon) {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    get isDefault() {
        return true;
    }
    /**
     * @return {?}
     */
    get showLabel() {
        return (this._type === NOVO_VALUE_TYPE.INTERNAL_LINK || this._type === NOVO_VALUE_TYPE.LINK || this._type === NOVO_VALUE_TYPE.ENTITY_LIST);
    }
    /**
     * @return {?}
     */
    get showIcon() {
        return this.meta && this.meta.icons && this.meta.icons.length && !Helpers.isEmpty(this.data);
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    onValueClick(icon) {
        if (icon.onIconClick && typeof icon.onIconClick === 'function') {
            icon.onIconClick(this.data, this.meta);
        }
    }
    /**
     * @return {?}
     */
    openLink() {
        if (this.meta && this.meta.openLink && typeof this.meta.openLink === 'function') {
            this.meta.openLink(this.data, this.meta);
        }
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.meta && this.isLinkField(this.meta, this.data)) {
            this._type = NOVO_VALUE_TYPE.LINK;
            // Make sure the value has a protocol, otherwise the URL will be relative
            /** @type {?} */
            let hasProtocol = new RegExp('^(http|https)://', 'i');
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
                    this._type = NOVO_VALUE_TYPE.INTERNAL_LINK;
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    isLinkField(field, data) {
        /** @type {?} */
        let linkFields = ['companyURL', 'clientCorporationCompanyURL'];
        /** @type {?} */
        let regex = new RegExp('^(https?://(?:www.|(?!www))[^s.]+.[^s]{2,}|www.[^s]+.[^s]{2,})$', 'gi');
        /** @type {?} */
        let isURL = Helpers.isString(data) && regex.exec(data.trim());
        return linkFields.indexOf(field.name) > -1 || !!isURL || field.type === NOVO_VALUE_TYPE.LINK;
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isEntityList(type) {
        return type === 'TO_MANY';
    }
    /**
     * @param {?} meta
     * @return {?}
     */
    isHTMLField(meta) {
        return meta.dataSpecialization === 'HTML' || meta.inputType === 'TEXTAREA';
    }
}
NovoValueElement.decorators = [
    { type: Component, args: [{
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
    `
            }] }
];
NovoValueElement.propDecorators = {
    data: [{ type: Input }],
    meta: [{ type: Input }],
    theme: [{ type: Input }],
    label: [{ type: Input }],
    type: [{ type: Input }],
    isMobile: [{ type: HostBinding, args: ['class.mobile',] }]
};
if (false) {
    /** @type {?} */
    NovoValueElement.prototype.data;
    /** @type {?} */
    NovoValueElement.prototype.meta;
    /** @type {?} */
    NovoValueElement.prototype.theme;
    /** @type {?} */
    NovoValueElement.prototype._type;
    /** @type {?} */
    NovoValueElement.prototype.NOVO_VALUE_TYPE;
    /** @type {?} */
    NovoValueElement.prototype.NOVO_VALUE_THEME;
    /** @type {?} */
    NovoValueElement.prototype.url;
    /** @type {?} */
    NovoValueElement.prototype.customClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQUVoRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUU1QyxVQUFPO0lBQ1AsY0FBVztJQUNYLE9BQUk7SUFDSixnQkFBYTs7Ozs7Ozs7O0lBR2IsVUFBTztJQUNQLFNBQU07Ozs7O0FBMEJSLE1BQU07SUF2Qk47UUEyQkUsU0FBSSxHQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7UUFFaEUsVUFBSyxHQUFxQixnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7UUFHbkQsb0JBQWUsR0FBRyxlQUFlLENBQUM7UUFDbEMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFFcEMsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFtSDNCLENBQUM7Ozs7O0lBakhDLElBQ0ksS0FBSyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFDRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsSUFDSSxJQUFJLENBQUMsR0FBVztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDdkIsQ0FBQzs7OztJQUNELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFB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Q2xFLE9BQU8sVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLGVBQWUsQ0FBQyxJQUFJLENBQUM7SUFDL0YsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBWTtRQUN2QixPQUFPLElBQUksS0FBSyxTQUFTLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBUztRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLENBQUM7SUFDN0UsQ0FBQzs7O1lBckpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUJQO2FBQ0o7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7b0JBRUwsS0FBSztvQkFTTCxLQUFLO21CQVFMLEtBQUs7dUJBZ0JMLFdBQVcsU0FBQyxjQUFjOzs7O0lBckMzQixnQ0FDVTs7SUFDVixnQ0FDMEM7O0lBQzFDLGlDQUNtRDs7SUFFbkQsaUNBQXVCOztJQUN2QiwyQ0FBa0M7O0lBQ2xDLDRDQUFvQzs7SUFDcEMsK0JBQVk7O0lBQ1osdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEhvc3RCaW5kaW5nLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuZXhwb3J0IGVudW0gTk9WT19WQUxVRV9UWVBFIHtcbiAgREVGQVVMVCxcbiAgRU5USVRZX0xJU1QsXG4gIExJTkssXG4gIElOVEVSTkFMX0xJTkssXG59XG5leHBvcnQgZW51bSBOT1ZPX1ZBTFVFX1RIRU1FIHtcbiAgREVGQVVMVCxcbiAgTU9CSUxFLFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLXZhbHVlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cIl90eXBlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlLW91dGVyXCIgKm5nSWY9XCJzaG93TGFiZWxcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPnt7IG1ldGEubGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJtZXRhLnNob3dFbnRpdHlJY29uXCIgY2xhc3M9XCJiaGktY2lyY2xlIHt7bWV0YS5lbnRpdHlJY29uQ2xhc3N9fVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTktcIiAoY2xpY2spPVwib3BlbkxpbmsoKVwiIFtpbm5lckhUTUxdPVwiZGF0YSB8IHJlbmRlciA6IG1ldGFcIj48L2E+XG4gICAgICAgICAgICAgICAgPGEgKm5nU3dpdGNoQ2FzZT1cIk5PVk9fVkFMVUVfVFlQRS5MSU5LXCIgY2xhc3M9XCJ2YWx1ZVwiIFtocmVmXT1cInVybFwiIHRhcmdldD1cIl9ibGFua1wiIFtpbm5lckhUTUxdPVwiZGF0YSB8IHJlbmRlciA6IG1ldGFcIj48L2E+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPG5vdm8tZW50aXR5LWxpc3QgKm5nU3dpdGNoQ2FzZT1cIk5PVk9fVkFMVUVfVFlQRS5FTlRJVFlfTElTVFwiIFtkYXRhXT0nZGF0YScgW21ldGFdPVwibWV0YVwiPjwvbm92by1lbnRpdHktbGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiIFtuZ0NsYXNzXT1cImN1c3RvbUNsYXNzXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD57eyBtZXRhLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzRGVmYXVsdFwiIGNsYXNzPVwidmFsdWVcIiBbaW5uZXJIVE1MXT1cImRhdGEgfCByZW5kZXIgOiBtZXRhXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiAqbmdJZj1cInNob3dJY29uXCI+XG4gICAgICAgICAgICAgIDxpICpuZ0Zvcj1cImxldCBpY29uIG9mIG1ldGEuaWNvbnNcIiBbY2xhc3NdPVwiaWNvbkNsYXNzKGljb24pXCIgKGNsaWNrKT1cIm9uVmFsdWVDbGljayhpY29uKVwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9WYWx1ZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTsgLy8gVE9ETyB1c2UgaW50ZXJmYWNlXG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueSA9IHsgdHlwZTogJ1NDQUxBUicsIGxhYmVsOiAnJyB9OyAvLyBUT0RPIHVzZSBpbnRlcmZhY2VcbiAgQElucHV0KClcbiAgdGhlbWU6IE5PVk9fVkFMVUVfVEhFTUUgPSBOT1ZPX1ZBTFVFX1RIRU1FLkRFRkFVTFQ7XG5cbiAgX3R5cGU6IE5PVk9fVkFMVUVfVFlQRTtcbiAgTk9WT19WQUxVRV9UWVBFID0gTk9WT19WQUxVRV9UWVBFO1xuICBOT1ZPX1ZBTFVFX1RIRU1FID0gTk9WT19WQUxVRV9USEVNRTtcbiAgdXJsOiBzdHJpbmc7XG4gIGN1c3RvbUNsYXNzOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgbGFiZWwobGJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEubGFiZWwgPSBsYmw7XG4gIH1cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWV0YS5sYWJlbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHR5cDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhLnR5cGUgPSB0eXA7XG4gIH1cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLnR5cGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KHRoaXMubWV0YSkpIHtcbiAgICAgIHRoaXMubWV0YSA9IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vYmlsZScpXG4gIHB1YmxpYyBnZXQgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUgPT09IE5PVk9fVkFMVUVfVEhFTUUuTU9CSUxFO1xuICB9XG5cbiAgaWNvbkNsYXNzKGljb24pOiBzdHJpbmcge1xuICAgIGxldCBpY29uQ2xhc3MgPSAnJztcbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb25DbHMpIHtcbiAgICAgIGljb25DbGFzcyA9IGBiaGktJHtpY29uLmljb25DbHN9IGFjdGlvbnNgO1xuICAgICAgaWYgKGljb24ub25JY29uQ2xpY2spIHtcbiAgICAgICAgaWNvbkNsYXNzID0gYCR7aWNvbkNsYXNzfSBjbGlja2FibGVgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGljb25DbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGljb25DbGFzcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93TGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5JTlRFUk5BTF9MSU5LIHx8IHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LIHx8IHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5FTlRJVFlfTElTVFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLmljb25zICYmIHRoaXMubWV0YS5pY29ucy5sZW5ndGggJiYgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmRhdGEpO1xuICB9XG5cbiAgb25WYWx1ZUNsaWNrKGljb24pOiB2b2lkIHtcbiAgICBpZiAoaWNvbi5vbkljb25DbGljayAmJiB0eXBlb2YgaWNvbi5vbkljb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWNvbi5vbkljb25DbGljayh0aGlzLmRhdGEsIHRoaXMubWV0YSk7XG4gICAgfVxuICB9XG4gIG9wZW5MaW5rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLm9wZW5MaW5rICYmIHR5cGVvZiB0aGlzLm1ldGEub3BlbkxpbmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMubWV0YS5vcGVuTGluayh0aGlzLmRhdGEsIHRoaXMubWV0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiBhbnkge1xuICAgIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5pc0xpbmtGaWVsZCh0aGlzLm1ldGEsIHRoaXMuZGF0YSkpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuTElOSztcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdmFsdWUgaGFzIGEgcHJvdG9jb2wsIG90aGVyd2lzZSB0aGUgVVJMIHdpbGwgYmUgcmVsYXRpdmVcbiAgICAgIGxldCBoYXNQcm90b2NvbDogYW55ID0gbmV3IFJlZ0V4cCgnXihodHRwfGh0dHBzKTovLycsICdpJyk7XG4gICAgICBpZiAoIWhhc1Byb3RvY29sLnRlc3QodGhpcy5kYXRhKSkge1xuICAgICAgICB0aGlzLnVybCA9IGBodHRwOi8vJHt0aGlzLmRhdGF9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5kYXRhO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0VudGl0eUxpc3QodGhpcy5tZXRhLnR5cGUpKSB7XG4gICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0hUTUxGaWVsZCh0aGlzLm1ldGEpKSB7XG4gICAgICB0aGlzLmN1c3RvbUNsYXNzID0gdGhpcy5tZXRhLmN1c3RvbUNsYXNzID8gdGhpcy5tZXRhLmN1c3RvbUNsYXNzIDogJyc7XG4gICAgICBpZiAodGhpcy5tZXRhLnN0cmlwSFRNTCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnJlcGxhY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLzwoPyFzdHlsZXxcXC9zdHlsZSkuKz8+L2dpLCAnJykudHJpbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5tZXRhICYmIHRoaXMubWV0YS5hc3NvY2lhdGVkRW50aXR5KSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubWV0YS5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSkge1xuICAgICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTks7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMaW5rRmllbGQoZmllbGQ6IHsgbmFtZT86IHN0cmluZzsgdHlwZT86IE5PVk9fVkFMVUVfVFlQRSB9LCBkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgbGlua0ZpZWxkczogYW55ID0gWydjb21wYW55VVJMJywgJ2NsaWVudENvcnBvcmF0aW9uQ29tcGFueVVSTCddO1xuICAgIGxldCByZWdleDogYW55ID0gbmV3IFJlZ0V4cCgnXihodHRwcz86Ly8oPzp3d3cufCg/IXd3dykpW15zLl0rLltec117Mix9fHd3dy5bXnNdKy5bXnNdezIsfSkkJywgJ2dpJyk7XG4gICAgbGV0IGlzVVJMOiBhbnkgPSBIZWxwZXJzLmlzU3RyaW5nKGRhdGEpICYmIHJlZ2V4LmV4ZWMoZGF0YS50cmltKCkpO1xuICAgIHJldHVybiBsaW5rRmllbGRzLmluZGV4T2YoZmllbGQubmFtZSkgPiAtMSB8fCAhIWlzVVJMIHx8IGZpZWxkLnR5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICB9XG5cbiAgaXNFbnRpdHlMaXN0KHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlID09PSAnVE9fTUFOWSc7XG4gIH1cblxuICBpc0hUTUxGaWVsZChtZXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWV0YS5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdIVE1MJyB8fCBtZXRhLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJztcbiAgfVxufVxuIl19