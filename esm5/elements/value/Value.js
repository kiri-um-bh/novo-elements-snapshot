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
                    template: "\n        <ng-container [ngSwitch]=\"type\">\n            <div class=\"value-outer\" *ngIf=\"showLabel\">\n                <label class=\"skeleton\">{{ label }}</label>\n                <a *ngSwitchCase=\"NOVO_VALUE_TYPE.INTERNAL_LINK\" class=\"value\" (click)=\"openLink()\" [innerHTML]=\"data | render : meta\"></a>\n                <a *ngSwitchCase=\"NOVO_VALUE_TYPE.LINK\" class=\"value\" [href]=\"url\" target=\"_blank\" [innerHTML]=\"data | render : meta\"></a>\n                <novo-entity-list *ngSwitchCase=\"NOVO_VALUE_TYPE.ENTITY_LIST\" [data]='data' [meta]=\"meta\"></novo-entity-list>\n            </div>\n            <div *ngSwitchDefault class=\"value-outer\" [ngClass]=\"customClass\">\n                <label class=\"skeleton\">{{ label }}</label>\n                <div *ngIf=\"isDefault\" class=\"value skeleton\" [innerHTML]=\"data | render : meta\"></div>\n            </div>\n            <div class=\"actions\" *ngIf=\"showIcon\">\n                <i *ngFor=\"let icon of meta.icons\" [class]=\"iconClass(icon)\" (click)=\"onValueClick(icon)\"></i>\n            </div>\n        </ng-container>\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQUVoRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUU1QyxVQUFPO0lBQ1AsY0FBVztJQUNYLE9BQUk7SUFDSixnQkFBYTs7Ozs7Ozs7O0lBR2IsVUFBTztJQUNQLFNBQU07Ozs7O0FBR1I7SUFBQTtRQXdCRSxTQUFJLEdBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtRQUVoRSxVQUFLLEdBQXFCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUduRCxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQW1IM0IsQ0FBQztJQWpIQyxzQkFDSSxtQ0FBSzs7OztRQUdUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7OztRQU5ELFVBQ1UsR0FBVztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSxrQ0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixDQUFDOzs7OztRQU5ELFVBQ1MsR0FBVztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7SUFLRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLE9BQU8sQ0FBQyxPQUFP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OztZQUNoRyxLQUFLLEdBQVEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLElBQVk7UUFDdkIsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0lBQzdFLENBQUM7O2dCQWxKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxtbUNBZ0JQO2lCQUNKOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBU0wsS0FBSzt1QkFRTCxLQUFLOzJCQWdCTCxXQUFXLFNBQUMsY0FBYzs7SUF5RjdCLHVCQUFDO0NBQUEsQUFuSkQsSUFtSkM7U0EvSFksZ0JBQWdCOzs7SUFDM0IsZ0NBQ1U7O0lBQ1YsZ0NBQzBDOztJQUMxQyxpQ0FDbUQ7O0lBRW5ELGlDQUErQjs7SUFDL0IsMkNBQWtDOztJQUNsQyw0Q0FBb0M7O0lBQ3BDLCtCQUFZOztJQUNaLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmV4cG9ydCBlbnVtIE5PVk9fVkFMVUVfVFlQRSB7XG4gIERFRkFVTFQsXG4gIEVOVElUWV9MSVNULFxuICBMSU5LLFxuICBJTlRFUk5BTF9MSU5LLFxufVxuZXhwb3J0IGVudW0gTk9WT19WQUxVRV9USEVNRSB7XG4gIERFRkFVTFQsXG4gIE1PQklMRSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by12YWx1ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInR5cGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiICpuZ0lmPVwic2hvd0xhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic2tlbGV0b25cIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGEgKm5nU3dpdGNoQ2FzZT1cIk5PVk9fVkFMVUVfVFlQRS5JTlRFUk5BTF9MSU5LXCIgY2xhc3M9XCJ2YWx1ZVwiIChjbGljayk9XCJvcGVuTGluaygpXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyIDogbWV0YVwiPjwvYT5cbiAgICAgICAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkxJTktcIiBjbGFzcz1cInZhbHVlXCIgW2hyZWZdPVwidXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyIDogbWV0YVwiPjwvYT5cbiAgICAgICAgICAgICAgICA8bm92by1lbnRpdHktbGlzdCAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUXCIgW2RhdGFdPSdkYXRhJyBbbWV0YV09XCJtZXRhXCI+PC9ub3ZvLWVudGl0eS1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiIFtuZ0NsYXNzXT1cImN1c3RvbUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic2tlbGV0b25cIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzRGVmYXVsdFwiIGNsYXNzPVwidmFsdWUgc2tlbGV0b25cIiBbaW5uZXJIVE1MXT1cImRhdGEgfCByZW5kZXIgOiBtZXRhXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgKm5nSWY9XCJzaG93SWNvblwiPlxuICAgICAgICAgICAgICAgIDxpICpuZ0Zvcj1cImxldCBpY29uIG9mIG1ldGEuaWNvbnNcIiBbY2xhc3NdPVwiaWNvbkNsYXNzKGljb24pXCIgKGNsaWNrKT1cIm9uVmFsdWVDbGljayhpY29uKVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVmFsdWVFbGVtZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7IC8vIFRPRE8gdXNlIGludGVyZmFjZVxuICBASW5wdXQoKVxuICBtZXRhOiBhbnkgPSB7IHR5cGU6ICdTQ0FMQVInLCBsYWJlbDogJycgfTsgLy8gVE9ETyB1c2UgaW50ZXJmYWNlXG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBOT1ZPX1ZBTFVFX1RIRU1FID0gTk9WT19WQUxVRV9USEVNRS5ERUZBVUxUO1xuXG4gIHByaXZhdGUgX3R5cGU6IE5PVk9fVkFMVUVfVFlQRTtcbiAgTk9WT19WQUxVRV9UWVBFID0gTk9WT19WQUxVRV9UWVBFO1xuICBOT1ZPX1ZBTFVFX1RIRU1FID0gTk9WT19WQUxVRV9USEVNRTtcbiAgdXJsOiBzdHJpbmc7XG4gIGN1c3RvbUNsYXNzOiBzdHJpbmcgPSAnJztcblxuICBASW5wdXQoKVxuICBzZXQgbGFiZWwobGJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEubGFiZWwgPSBsYmw7XG4gIH1cbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubWV0YS5sYWJlbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHR5cDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXRhLnR5cGUgPSB0eXA7XG4gIH1cbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLnR5cGU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoSGVscGVycy5pc0VtcHR5KHRoaXMubWV0YSkpIHtcbiAgICAgIHRoaXMubWV0YSA9IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1vYmlsZScpXG4gIHB1YmxpYyBnZXQgaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWUgPT09IE5PVk9fVkFMVUVfVEhFTUUuTU9CSUxFO1xuICB9XG5cbiAgaWNvbkNsYXNzKGljb24pOiBzdHJpbmcge1xuICAgIGxldCBpY29uQ2xhc3MgPSAnJztcbiAgICBpZiAoaWNvbiAmJiBpY29uLmljb25DbHMpIHtcbiAgICAgIGljb25DbGFzcyA9IGBiaGktJHtpY29uLmljb25DbHN9IGFjdGlvbnNgO1xuICAgICAgaWYgKGljb24ub25JY29uQ2xpY2spIHtcbiAgICAgICAgaWNvbkNsYXNzID0gYCR7aWNvbkNsYXNzfSBjbGlja2FibGVgO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGljb25DbGFzcztcbiAgICB9XG4gICAgcmV0dXJuIGljb25DbGFzcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNEZWZhdWx0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldCBzaG93TGFiZWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5JTlRFUk5BTF9MSU5LIHx8IHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LIHx8IHRoaXMuX3R5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5FTlRJVFlfTElTVFxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLmljb25zICYmIHRoaXMubWV0YS5pY29ucy5sZW5ndGggJiYgIUhlbHBlcnMuaXNFbXB0eSh0aGlzLmRhdGEpO1xuICB9XG5cbiAgb25WYWx1ZUNsaWNrKGljb24pOiB2b2lkIHtcbiAgICBpZiAoaWNvbi5vbkljb25DbGljayAmJiB0eXBlb2YgaWNvbi5vbkljb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWNvbi5vbkljb25DbGljayh0aGlzLmRhdGEsIHRoaXMubWV0YSk7XG4gICAgfVxuICB9XG4gIG9wZW5MaW5rKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLm9wZW5MaW5rICYmIHR5cGVvZiB0aGlzLm1ldGEub3BlbkxpbmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMubWV0YS5vcGVuTGluayh0aGlzLmRhdGEsIHRoaXMubWV0YSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiBhbnkge1xuICAgIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5pc0xpbmtGaWVsZCh0aGlzLm1ldGEsIHRoaXMuZGF0YSkpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuTElOSztcbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgdmFsdWUgaGFzIGEgcHJvdG9jb2wsIG90aGVyd2lzZSB0aGUgVVJMIHdpbGwgYmUgcmVsYXRpdmVcbiAgICAgIGxldCBoYXNQcm90b2NvbDogYW55ID0gbmV3IFJlZ0V4cCgnXihodHRwfGh0dHBzKTovLycsICdpJyk7XG4gICAgICBpZiAoIWhhc1Byb3RvY29sLnRlc3QodGhpcy5kYXRhKSkge1xuICAgICAgICB0aGlzLnVybCA9IGBodHRwOi8vJHt0aGlzLmRhdGF9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5kYXRhO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5pc0VudGl0eUxpc3QodGhpcy5tZXRhLnR5cGUpKSB7XG4gICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc0hUTUxGaWVsZCh0aGlzLm1ldGEpKSB7XG4gICAgICB0aGlzLmN1c3RvbUNsYXNzID0gdGhpcy5tZXRhLmN1c3RvbUNsYXNzID8gdGhpcy5tZXRhLmN1c3RvbUNsYXNzIDogJyc7XG4gICAgICBpZiAodGhpcy5tZXRhLnN0cmlwSFRNTCAmJiB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLnJlcGxhY2UpIHtcbiAgICAgICAgdGhpcy5kYXRhID0gdGhpcy5kYXRhLnJlcGxhY2UoLzwoPyFzdHlsZXxcXC9zdHlsZSkuKz8+L2dpLCAnJykudHJpbSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5tZXRhICYmIHRoaXMubWV0YS5hc3NvY2lhdGVkRW50aXR5KSB7XG4gICAgICBzd2l0Y2ggKHRoaXMubWV0YS5hc3NvY2lhdGVkRW50aXR5LmVudGl0eSkge1xuICAgICAgICBjYXNlICdDbGllbnRDb3Jwb3JhdGlvbic6XG4gICAgICAgIGNhc2UgJ0NsaWVudENvbnRhY3QnOlxuICAgICAgICBjYXNlICdDYW5kaWRhdGUnOlxuICAgICAgICBjYXNlICdPcHBvcnR1bml0eSc6XG4gICAgICAgIGNhc2UgJ0pvYk9yZGVyJzpcbiAgICAgICAgY2FzZSAnUGxhY2VtZW50JzpcbiAgICAgICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTks7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMaW5rRmllbGQoZmllbGQ6IHsgbmFtZT86IHN0cmluZzsgdHlwZT86IE5PVk9fVkFMVUVfVFlQRSB9LCBkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgbGlua0ZpZWxkczogYW55ID0gWydjb21wYW55VVJMJywgJ2NsaWVudENvcnBvcmF0aW9uQ29tcGFueVVSTCddO1xuICAgIGxldCByZWdleDogYW55ID0gbmV3IFJlZ0V4cCgnXihodHRwcz86Ly8oPzp3d3cufCg/IXd3dykpW15zLl0rLltec117Mix9fHd3dy5bXnNdKy5bXnNdezIsfSkkJywgJ2dpJyk7XG4gICAgbGV0IGlzVVJMOiBhbnkgPSBIZWxwZXJzLmlzU3RyaW5nKGRhdGEpICYmIHJlZ2V4LmV4ZWMoZGF0YS50cmltKCkpO1xuICAgIHJldHVybiBsaW5rRmllbGRzLmluZGV4T2YoZmllbGQubmFtZSkgPiAtMSB8fCAhIWlzVVJMIHx8IGZpZWxkLnR5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICB9XG5cbiAgaXNFbnRpdHlMaXN0KHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlID09PSAnVE9fTUFOWSc7XG4gIH1cblxuICBpc0hUTUxGaWVsZChtZXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWV0YS5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdIVE1MJyB8fCBtZXRhLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJztcbiAgfVxufVxuIl19