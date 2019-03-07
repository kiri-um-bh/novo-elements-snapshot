/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, HostBinding } from '@angular/core';
// APP
import { Helpers } from '../../utils/Helpers';
/** @enum {number} */
var NOVO_VALUE_TYPE = {
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
var NOVO_VALUE_THEME = {
    DEFAULT: 0,
    MOBILE: 1,
};
export { NOVO_VALUE_THEME };
NOVO_VALUE_THEME[NOVO_VALUE_THEME.DEFAULT] = 'DEFAULT';
NOVO_VALUE_THEME[NOVO_VALUE_THEME.MOBILE] = 'MOBILE';
var NovoValueElement = /** @class */ (function () {
    function NovoValueElement() {
        this.meta = { type: 'SCALAR', label: '' }; // TODO use interface
        this.theme = NOVO_VALUE_THEME.DEFAULT;
        this.NOVO_VALUE_TYPE = NOVO_VALUE_TYPE;
        this.NOVO_VALUE_THEME = NOVO_VALUE_THEME;
        this.customClass = '';
    }
    Object.defineProperty(NovoValueElement.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this.meta.label;
        },
        set: /**
         * @param {?} lbl
         * @return {?}
         */
        function (lbl) {
            this.meta.label = lbl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoValueElement.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this.meta.type;
        },
        set: /**
         * @param {?} typ
         * @return {?}
         */
        function (typ) {
            this.meta.type = typ;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NovoValueElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (Helpers.isEmpty(this.meta)) {
            this.meta = {
                label: '',
            };
        }
    };
    Object.defineProperty(NovoValueElement.prototype, "isMobile", {
        get: /**
         * @return {?}
         */
        function () {
            return this.theme === NOVO_VALUE_THEME.MOBILE;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} icon
     * @return {?}
     */
    NovoValueElement.prototype.iconClass = /**
     * @param {?} icon
     * @return {?}
     */
    function (icon) {
        /** @type {?} */
        var iconClass = '';
        if (icon && icon.iconCls) {
            iconClass = "bhi-" + icon.iconCls + " actions";
            if (icon.onIconClick) {
                iconClass = iconClass + " clickable";
            }
            return iconClass;
        }
        return iconClass;
    };
    Object.defineProperty(NovoValueElement.prototype, "isDefault", {
        get: /**
         * @return {?}
         */
        function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoValueElement.prototype, "showLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._type === NOVO_VALUE_TYPE.INTERNAL_LINK || this._type === NOVO_VALUE_TYPE.LINK || this._type === NOVO_VALUE_TYPE.ENTITY_LIST);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NovoValueElement.prototype, "showIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this.meta && this.meta.icons && this.meta.icons.length && !Helpers.isEmpty(this.data);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} icon
     * @return {?}
     */
    NovoValueElement.prototype.onValueClick = /**
     * @param {?} icon
     * @return {?}
     */
    function (icon) {
        if (icon.onIconClick && typeof icon.onIconClick === 'function') {
            icon.onIconClick(this.data, this.meta);
        }
    };
    /**
     * @return {?}
     */
    NovoValueElement.prototype.openLink = /**
     * @return {?}
     */
    function () {
        if (this.meta && this.meta.openLink && typeof this.meta.openLink === 'function') {
            this.meta.openLink(this.data, this.meta);
        }
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    NovoValueElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        if (this.meta && this.isLinkField(this.meta, this.data)) {
            this._type = NOVO_VALUE_TYPE.LINK;
            // Make sure the value has a protocol, otherwise the URL will be relative
            /** @type {?} */
            var hasProtocol = new RegExp('^(http|https)://', 'i');
            if (!hasProtocol.test(this.data)) {
                this.url = "http://" + this.data;
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
    };
    /**
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    NovoValueElement.prototype.isLinkField = /**
     * @param {?} field
     * @param {?} data
     * @return {?}
     */
    function (field, data) {
        /** @type {?} */
        var linkFields = ['companyURL', 'clientCorporationCompanyURL'];
        /** @type {?} */
        var regex = new RegExp('^(https?://(?:www.|(?!www))[^s.]+.[^s]{2,}|www.[^s]+.[^s]{2,})$', 'gi');
        /** @type {?} */
        var isURL = Helpers.isString(data) && regex.exec(data.trim());
        return linkFields.indexOf(field.name) > -1 || !!isURL || field.type === NOVO_VALUE_TYPE.LINK;
    };
    /**
     * @param {?} type
     * @return {?}
     */
    NovoValueElement.prototype.isEntityList = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type === 'TO_MANY';
    };
    /**
     * @param {?} meta
     * @return {?}
     */
    NovoValueElement.prototype.isHTMLField = /**
     * @param {?} meta
     * @return {?}
     */
    function (meta) {
        return meta.dataSpecialization === 'HTML' || meta.inputType === 'TEXTAREA';
    };
    NovoValueElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-value',
                    template: "\n      <ng-container [ngSwitch]=\"_type\">\n          <div class=\"value-outer\" *ngIf=\"showLabel\">\n              <label>{{ meta.label }}</label>\n              <span class=\"value\">\n                <i *ngIf=\"meta.showEntityIcon\" class=\"bhi-circle {{meta.entityIconClass}}\"></i>\n                <a *ngSwitchCase=\"NOVO_VALUE_TYPE.INTERNAL_LINK\" (click)=\"openLink()\" [innerHTML]=\"data | render : meta\"></a>\n                <a *ngSwitchCase=\"NOVO_VALUE_TYPE.LINK\" class=\"value\" [href]=\"url\" target=\"_blank\" [innerHTML]=\"data | render : meta\"></a>\n              </span>\n              <novo-entity-list *ngSwitchCase=\"NOVO_VALUE_TYPE.ENTITY_LIST\" [data]='data' [meta]=\"meta\"></novo-entity-list>\n          </div>\n          <div *ngSwitchDefault class=\"value-outer\" [ngClass]=\"customClass\">\n              <label>{{ meta.label }}</label>\n              <div *ngIf=\"isDefault\" class=\"value\" [innerHTML]=\"data | render : meta\"></div>\n          </div>\n          <div class=\"actions\" *ngIf=\"showIcon\">\n              <i *ngFor=\"let icon of meta.icons\" [class]=\"iconClass(icon)\" (click)=\"onValueClick(icon)\"></i>\n          </div>\n      </ng-container>\n    "
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
    return NovoValueElement;
}());
export { NovoValueElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQUVoRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUU1QyxVQUFPO0lBQ1AsY0FBVztJQUNYLE9BQUk7SUFDSixnQkFBYTs7Ozs7Ozs7O0lBR2IsVUFBTztJQUNQLFNBQU07Ozs7O0FBR1I7SUFBQTtRQTJCRSxTQUFJLEdBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtRQUVoRSxVQUFLLEdBQXFCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUduRCxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQW1IM0IsQ0FBQztJQWpIQyxzQkFDSSxtQ0FBSzs7OztRQUdUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7OztRQU5ELFVBQ1UsR0FBVztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSxrQ0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixDQUFDOzs7OztRQU5ELFVBQ1MsR0FBVztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7SUFLRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLE9BQU8sQ0FBQyxPQUFP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OztZQUNoRyxLQUFLLEdBQVEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLElBQVk7UUFDdkIsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0lBQzdFLENBQUM7O2dCQXJKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSx1ckNBbUJQO2lCQUNKOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBU0wsS0FBSzt1QkFRTCxLQUFLOzJCQWdCTCxXQUFXLFNBQUMsY0FBYzs7SUF5RjdCLHVCQUFDO0NBQUEsQUF0SkQsSUFzSkM7U0EvSFksZ0JBQWdCOzs7SUFDM0IsZ0NBQ1U7O0lBQ1YsZ0NBQzBDOztJQUMxQyxpQ0FDbUQ7O0lBRW5ELGlDQUF1Qjs7SUFDdkIsMkNBQWtDOztJQUNsQyw0Q0FBb0M7O0lBQ3BDLCtCQUFZOztJQUNaLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmV4cG9ydCBlbnVtIE5PVk9fVkFMVUVfVFlQRSB7XG4gIERFRkFVTFQsXG4gIEVOVElUWV9MSVNULFxuICBMSU5LLFxuICBJTlRFUk5BTF9MSU5LLFxufVxuZXhwb3J0IGVudW0gTk9WT19WQUxVRV9USEVNRSB7XG4gIERFRkFVTFQsXG4gIE1PQklMRSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by12YWx1ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJfdHlwZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiICpuZ0lmPVwic2hvd0xhYmVsXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD57eyBtZXRhLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibWV0YS5zaG93RW50aXR5SWNvblwiIGNsYXNzPVwiYmhpLWNpcmNsZSB7e21ldGEuZW50aXR5SWNvbkNsYXNzfX1cIj48L2k+XG4gICAgICAgICAgICAgICAgPGEgKm5nU3dpdGNoQ2FzZT1cIk5PVk9fVkFMVUVfVFlQRS5JTlRFUk5BTF9MSU5LXCIgKGNsaWNrKT1cIm9wZW5MaW5rKClcIiBbaW5uZXJIVE1MXT1cImRhdGEgfCByZW5kZXIgOiBtZXRhXCI+PC9hPlxuICAgICAgICAgICAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCJOT1ZPX1ZBTFVFX1RZUEUuTElOS1wiIGNsYXNzPVwidmFsdWVcIiBbaHJlZl09XCJ1cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiBbaW5uZXJIVE1MXT1cImRhdGEgfCByZW5kZXIgOiBtZXRhXCI+PC9hPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxub3ZvLWVudGl0eS1saXN0ICpuZ1N3aXRjaENhc2U9XCJOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1RcIiBbZGF0YV09J2RhdGEnIFttZXRhXT1cIm1ldGFcIj48L25vdm8tZW50aXR5LWxpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwidmFsdWUtb3V0ZXJcIiBbbmdDbGFzc109XCJjdXN0b21DbGFzc1wiPlxuICAgICAgICAgICAgICA8bGFiZWw+e3sgbWV0YS5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0RlZmF1bHRcIiBjbGFzcz1cInZhbHVlXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyIDogbWV0YVwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgKm5nSWY9XCJzaG93SWNvblwiPlxuICAgICAgICAgICAgICA8aSAqbmdGb3I9XCJsZXQgaWNvbiBvZiBtZXRhLmljb25zXCIgW2NsYXNzXT1cImljb25DbGFzcyhpY29uKVwiIChjbGljayk9XCJvblZhbHVlQ2xpY2soaWNvbilcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVmFsdWVFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7IC8vIFRPRE8gdXNlIGludGVyZmFjZVxuICBASW5wdXQoKVxuICBtZXRhOiBhbnkgPSB7IHR5cGU6ICdTQ0FMQVInLCBsYWJlbDogJycgfTsgLy8gVE9ETyB1c2UgaW50ZXJmYWNlXG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBOT1ZPX1ZBTFVFX1RIRU1FID0gTk9WT19WQUxVRV9USEVNRS5ERUZBVUxUO1xuXG4gIF90eXBlOiBOT1ZPX1ZBTFVFX1RZUEU7XG4gIE5PVk9fVkFMVUVfVFlQRSA9IE5PVk9fVkFMVUVfVFlQRTtcbiAgTk9WT19WQUxVRV9USEVNRSA9IE5PVk9fVkFMVUVfVEhFTUU7XG4gIHVybDogc3RyaW5nO1xuICBjdXN0b21DbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQElucHV0KClcbiAgc2V0IGxhYmVsKGxibDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhLmxhYmVsID0gbGJsO1xuICB9XG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1ldGEubGFiZWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdHlwZSh0eXA6IHN0cmluZykge1xuICAgIHRoaXMubWV0YS50eXBlID0gdHlwO1xuICB9XG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWV0YS50eXBlO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKEhlbHBlcnMuaXNFbXB0eSh0aGlzLm1ldGEpKSB7XG4gICAgICB0aGlzLm1ldGEgPSB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tb2JpbGUnKVxuICBwdWJsaWMgZ2V0IGlzTW9iaWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRoZW1lID09PSBOT1ZPX1ZBTFVFX1RIRU1FLk1PQklMRTtcbiAgfVxuXG4gIGljb25DbGFzcyhpY29uKTogc3RyaW5nIHtcbiAgICBsZXQgaWNvbkNsYXNzID0gJyc7XG4gICAgaWYgKGljb24gJiYgaWNvbi5pY29uQ2xzKSB7XG4gICAgICBpY29uQ2xhc3MgPSBgYmhpLSR7aWNvbi5pY29uQ2xzfSBhY3Rpb25zYDtcbiAgICAgIGlmIChpY29uLm9uSWNvbkNsaWNrKSB7XG4gICAgICAgIGljb25DbGFzcyA9IGAke2ljb25DbGFzc30gY2xpY2thYmxlYDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpY29uQ2xhc3M7XG4gICAgfVxuICAgIHJldHVybiBpY29uQ2xhc3M7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRGVmYXVsdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hvd0xhYmVsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLl90eXBlID09PSBOT1ZPX1ZBTFVFX1RZUEUuSU5URVJOQUxfTElOSyB8fCB0aGlzLl90eXBlID09PSBOT1ZPX1ZBTFVFX1RZUEUuTElOSyB8fCB0aGlzLl90eXBlID09PSBOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1RcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93SWNvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhICYmIHRoaXMubWV0YS5pY29ucyAmJiB0aGlzLm1ldGEuaWNvbnMubGVuZ3RoICYmICFIZWxwZXJzLmlzRW1wdHkodGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9uVmFsdWVDbGljayhpY29uKTogdm9pZCB7XG4gICAgaWYgKGljb24ub25JY29uQ2xpY2sgJiYgdHlwZW9mIGljb24ub25JY29uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGljb24ub25JY29uQ2xpY2sodGhpcy5kYXRhLCB0aGlzLm1ldGEpO1xuICAgIH1cbiAgfVxuICBvcGVuTGluaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZXRhICYmIHRoaXMubWV0YS5vcGVuTGluayAmJiB0eXBlb2YgdGhpcy5tZXRhLm9wZW5MaW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLm1ldGEub3BlbkxpbmsodGhpcy5kYXRhLCB0aGlzLm1ldGEpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogYW55IHtcbiAgICBpZiAodGhpcy5tZXRhICYmIHRoaXMuaXNMaW5rRmllbGQodGhpcy5tZXRhLCB0aGlzLmRhdGEpKSB7XG4gICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLkxJTks7XG4gICAgICAvLyBNYWtlIHN1cmUgdGhlIHZhbHVlIGhhcyBhIHByb3RvY29sLCBvdGhlcndpc2UgdGhlIFVSTCB3aWxsIGJlIHJlbGF0aXZlXG4gICAgICBsZXQgaGFzUHJvdG9jb2w6IGFueSA9IG5ldyBSZWdFeHAoJ14oaHR0cHxodHRwcyk6Ly8nLCAnaScpO1xuICAgICAgaWYgKCFoYXNQcm90b2NvbC50ZXN0KHRoaXMuZGF0YSkpIHtcbiAgICAgICAgdGhpcy51cmwgPSBgaHR0cDovLyR7dGhpcy5kYXRhfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVybCA9IHRoaXMuZGF0YTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNFbnRpdHlMaXN0KHRoaXMubWV0YS50eXBlKSkge1xuICAgICAgdGhpcy5fdHlwZSA9IE5PVk9fVkFMVUVfVFlQRS5FTlRJVFlfTElTVDtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNIVE1MRmllbGQodGhpcy5tZXRhKSkge1xuICAgICAgdGhpcy5jdXN0b21DbGFzcyA9IHRoaXMubWV0YS5jdXN0b21DbGFzcyA/IHRoaXMubWV0YS5jdXN0b21DbGFzcyA6ICcnO1xuICAgICAgaWYgKHRoaXMubWV0YS5zdHJpcEhUTUwgJiYgdGhpcy5kYXRhICYmIHRoaXMuZGF0YS5yZXBsYWNlKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMuZGF0YS5yZXBsYWNlKC88KD8hc3R5bGV8XFwvc3R5bGUpLis/Pi9naSwgJycpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubWV0YSAmJiB0aGlzLm1ldGEuYXNzb2NpYXRlZEVudGl0eSkge1xuICAgICAgc3dpdGNoICh0aGlzLm1ldGEuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHkpIHtcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29ycG9yYXRpb24nOlxuICAgICAgICBjYXNlICdDbGllbnRDb250YWN0JzpcbiAgICAgICAgY2FzZSAnQ2FuZGlkYXRlJzpcbiAgICAgICAgY2FzZSAnT3Bwb3J0dW5pdHknOlxuICAgICAgICBjYXNlICdKb2JPcmRlcic6XG4gICAgICAgIGNhc2UgJ1BsYWNlbWVudCc6XG4gICAgICAgICAgdGhpcy5fdHlwZSA9IE5PVk9fVkFMVUVfVFlQRS5JTlRFUk5BTF9MSU5LO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlzTGlua0ZpZWxkKGZpZWxkOiB7IG5hbWU/OiBzdHJpbmc7IHR5cGU/OiBOT1ZPX1ZBTFVFX1RZUEUgfSwgZGF0YTogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IGxpbmtGaWVsZHM6IGFueSA9IFsnY29tcGFueVVSTCcsICdjbGllbnRDb3Jwb3JhdGlvbkNvbXBhbnlVUkwnXTtcbiAgICBsZXQgcmVnZXg6IGFueSA9IG5ldyBSZWdFeHAoJ14oaHR0cHM/Oi8vKD86d3d3LnwoPyF3d3cpKVtecy5dKy5bXnNdezIsfXx3d3cuW15zXSsuW15zXXsyLH0pJCcsICdnaScpO1xuICAgIGxldCBpc1VSTDogYW55ID0gSGVscGVycy5pc1N0cmluZyhkYXRhKSAmJiByZWdleC5leGVjKGRhdGEudHJpbSgpKTtcbiAgICByZXR1cm4gbGlua0ZpZWxkcy5pbmRleE9mKGZpZWxkLm5hbWUpID4gLTEgfHwgISFpc1VSTCB8fCBmaWVsZC50eXBlID09PSBOT1ZPX1ZBTFVFX1RZUEUuTElOSztcbiAgfVxuXG4gIGlzRW50aXR5TGlzdCh0eXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZSA9PT0gJ1RPX01BTlknO1xuICB9XG5cbiAgaXNIVE1MRmllbGQobWV0YTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG1ldGEuZGF0YVNwZWNpYWxpemF0aW9uID09PSAnSFRNTCcgfHwgbWV0YS5pbnB1dFR5cGUgPT09ICdURVhUQVJFQSc7XG4gIH1cbn1cbiJdfQ==