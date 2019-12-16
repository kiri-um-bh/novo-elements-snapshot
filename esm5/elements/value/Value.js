/**
 * @fileoverview added by tsickle
 * Generated from: elements/value/Value.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        // TODO use interface
        this.meta = { type: 'SCALAR', label: '' }; // TODO use interface
        // TODO use interface
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
                case 'Lead':
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7QUFFaEcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUM5QyxJQUFZLGVBQWU7SUFDekIsT0FBTyxHQUFBO0lBQ1AsV0FBVyxHQUFBO0lBQ1gsSUFBSSxHQUFBO0lBQ0osYUFBYSxHQUFBO0VBQ2Q7Ozs7Ozs7QUFDRCxJQUFZLGdCQUFnQjtJQUMxQixPQUFPLEdBQUE7SUFDUCxNQUFNLEdBQUE7RUFDUDs7OztBQUVEO0lBQUE7O1FBMkJFLFNBQUksR0FBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMscUJBQXFCOztRQUVoRSxVQUFLLEdBQXFCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUduRCxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQW9IM0IsQ0FBQztJQWxIQyxzQkFDSSxtQ0FBSzs7OztRQUdUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7OztRQU5ELFVBQ1UsR0FBVztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSxrQ0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixDQUFDOzs7OztRQU5ELFVBQ1MsR0FBVztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxH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Q2pFLFVBQVUsR0FBUSxDQUFDLFlBQVksRUFBRSw2QkFBNkIsQ0FBQzs7WUFDL0QsS0FBSyxHQUFRLElBQUksTUFBTSxDQUFDLGlFQUFpRSxFQUFFLElBQUksQ0FBQzs7WUFDaEcsS0FBSyxHQUFRLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEUsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLElBQUksQ0FBQztJQUMvRixDQUFDOzs7OztJQUVELHVDQUFZOzs7O0lBQVosVUFBYSxJQUFZO1FBQ3ZCLE9BQU8sSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxJQUFTO1FBQ25CLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsQ0FBQztJQUM3RSxDQUFDOztnQkF0SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsdXJDQW1CUDtpQkFDSjs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQVNMLEtBQUs7dUJBUUwsS0FBSzsyQkFnQkwsV0FBVyxTQUFDLGNBQWM7O0lBMEY3Qix1QkFBQztDQUFBLEFBdkpELElBdUpDO1NBaElZLGdCQUFnQjs7O0lBQzNCLGdDQUNVOztJQUNWLGdDQUMwQzs7SUFDMUMsaUNBQ21EOztJQUVuRCxpQ0FBdUI7O0lBQ3ZCLDJDQUFrQzs7SUFDbEMsNENBQW9DOztJQUNwQywrQkFBWTs7SUFDWix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgSG9zdEJpbmRpbmcsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5leHBvcnQgZW51bSBOT1ZPX1ZBTFVFX1RZUEUge1xuICBERUZBVUxULFxuICBFTlRJVFlfTElTVCxcbiAgTElOSyxcbiAgSU5URVJOQUxfTElOSyxcbn1cbmV4cG9ydCBlbnVtIE5PVk9fVkFMVUVfVEhFTUUge1xuICBERUZBVUxULFxuICBNT0JJTEUsXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tdmFsdWUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiX3R5cGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWUtb3V0ZXJcIiAqbmdJZj1cInNob3dMYWJlbFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+e3sgbWV0YS5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8aSAqbmdJZj1cIm1ldGEuc2hvd0VudGl0eUljb25cIiBjbGFzcz1cImJoaS1jaXJjbGUge3ttZXRhLmVudGl0eUljb25DbGFzc319XCI+PC9pPlxuICAgICAgICAgICAgICAgIDxhICpuZ1N3aXRjaENhc2U9XCJOT1ZPX1ZBTFVFX1RZUEUuSU5URVJOQUxfTElOS1wiIChjbGljayk9XCJvcGVuTGluaygpXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyIDogbWV0YVwiPjwvYT5cbiAgICAgICAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkxJTktcIiBjbGFzcz1cInZhbHVlXCIgW2hyZWZdPVwidXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyIDogbWV0YVwiPjwvYT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8bm92by1lbnRpdHktbGlzdCAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUXCIgW2RhdGFdPSdkYXRhJyBbbWV0YV09XCJtZXRhXCI+PC9ub3ZvLWVudGl0eS1saXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdCBjbGFzcz1cInZhbHVlLW91dGVyXCIgW25nQ2xhc3NdPVwiY3VzdG9tQ2xhc3NcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPnt7IG1ldGEubGFiZWwgfX08L2xhYmVsPlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNEZWZhdWx0XCIgY2xhc3M9XCJ2YWx1ZVwiIFtpbm5lckhUTUxdPVwiZGF0YSB8IHJlbmRlciA6IG1ldGFcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiICpuZ0lmPVwic2hvd0ljb25cIj5cbiAgICAgICAgICAgICAgPGkgKm5nRm9yPVwibGV0IGljb24gb2YgbWV0YS5pY29uc1wiIFtjbGFzc109XCJpY29uQ2xhc3MoaWNvbilcIiAoY2xpY2spPVwib25WYWx1ZUNsaWNrKGljb24pXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1ZhbHVlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgZGF0YTogYW55OyAvLyBUT0RPIHVzZSBpbnRlcmZhY2VcbiAgQElucHV0KClcbiAgbWV0YTogYW55ID0geyB0eXBlOiAnU0NBTEFSJywgbGFiZWw6ICcnIH07IC8vIFRPRE8gdXNlIGludGVyZmFjZVxuICBASW5wdXQoKVxuICB0aGVtZTogTk9WT19WQUxVRV9USEVNRSA9IE5PVk9fVkFMVUVfVEhFTUUuREVGQVVMVDtcblxuICBfdHlwZTogTk9WT19WQUxVRV9UWVBFO1xuICBOT1ZPX1ZBTFVFX1RZUEUgPSBOT1ZPX1ZBTFVFX1RZUEU7XG4gIE5PVk9fVkFMVUVfVEhFTUUgPSBOT1ZPX1ZBTFVFX1RIRU1FO1xuICB1cmw6IHN0cmluZztcbiAgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsYWJlbChsYmw6IHN0cmluZykge1xuICAgIHRoaXMubWV0YS5sYWJlbCA9IGxibDtcbiAgfVxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLmxhYmVsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEudHlwZSA9IHR5cDtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1ldGEudHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkodGhpcy5tZXRhKSkge1xuICAgICAgdGhpcy5tZXRhID0ge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW9iaWxlJylcbiAgcHVibGljIGdldCBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZSA9PT0gTk9WT19WQUxVRV9USEVNRS5NT0JJTEU7XG4gIH1cblxuICBpY29uQ2xhc3MoaWNvbik6IHN0cmluZyB7XG4gICAgbGV0IGljb25DbGFzcyA9ICcnO1xuICAgIGlmIChpY29uICYmIGljb24uaWNvbkNscykge1xuICAgICAgaWNvbkNsYXNzID0gYGJoaS0ke2ljb24uaWNvbkNsc30gYWN0aW9uc2A7XG4gICAgICBpZiAoaWNvbi5vbkljb25DbGljaykge1xuICAgICAgICBpY29uQ2xhc3MgPSBgJHtpY29uQ2xhc3N9IGNsaWNrYWJsZWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWNvbkNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbkNsYXNzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0RlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkxJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hvd0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YSAmJiB0aGlzLm1ldGEuaWNvbnMgJiYgdGhpcy5tZXRhLmljb25zLmxlbmd0aCAmJiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZGF0YSk7XG4gIH1cblxuICBvblZhbHVlQ2xpY2soaWNvbik6IHZvaWQge1xuICAgIGlmIChpY29uLm9uSWNvbkNsaWNrICYmIHR5cGVvZiBpY29uLm9uSWNvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpY29uLm9uSWNvbkNsaWNrKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cbiAgb3BlbkxpbmsoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLm1ldGEub3BlbkxpbmsgJiYgdHlwZW9mIHRoaXMubWV0YS5vcGVuTGluayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5tZXRhLm9wZW5MaW5rKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLmlzTGlua0ZpZWxkKHRoaXMubWV0YSwgdGhpcy5kYXRhKSkge1xuICAgICAgdGhpcy5fdHlwZSA9IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB2YWx1ZSBoYXMgYSBwcm90b2NvbCwgb3RoZXJ3aXNlIHRoZSBVUkwgd2lsbCBiZSByZWxhdGl2ZVxuICAgICAgbGV0IGhhc1Byb3RvY29sOiBhbnkgPSBuZXcgUmVnRXhwKCdeKGh0dHB8aHR0cHMpOi8vJywgJ2knKTtcbiAgICAgIGlmICghaGFzUHJvdG9jb2wudGVzdCh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHRoaXMudXJsID0gYGh0dHA6Ly8ke3RoaXMuZGF0YX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRW50aXR5TGlzdCh0aGlzLm1ldGEudHlwZSkpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzSFRNTEZpZWxkKHRoaXMubWV0YSkpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3MgPSB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgPyB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgOiAnJztcbiAgICAgIGlmICh0aGlzLm1ldGEuc3RyaXBIVE1MICYmIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucmVwbGFjZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCg/IXN0eWxlfFxcL3N0eWxlKS4rPz4vZ2ksICcnKS50cmltKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTks7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMaW5rRmllbGQoZmllbGQ6IHsgbmFtZT86IHN0cmluZzsgdHlwZT86IE5PVk9fVkFMVUVfVFlQRSB9LCBkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgbGlua0ZpZWxkczogYW55ID0gWydjb21wYW55VVJMJywgJ2NsaWVudENvcnBvcmF0aW9uQ29tcGFueVVSTCddO1xuICAgIGxldCByZWdleDogYW55ID0gbmV3IFJlZ0V4cCgnXihodHRwcz86Ly8oPzp3d3cufCg/IXd3dykpW15zLl0rLltec117Mix9fHd3dy5bXnNdKy5bXnNdezIsfSkkJywgJ2dpJyk7XG4gICAgbGV0IGlzVVJMOiBhbnkgPSBIZWxwZXJzLmlzU3RyaW5nKGRhdGEpICYmIHJlZ2V4LmV4ZWMoZGF0YS50cmltKCkpO1xuICAgIHJldHVybiBsaW5rRmllbGRzLmluZGV4T2YoZmllbGQubmFtZSkgPiAtMSB8fCAhIWlzVVJMIHx8IGZpZWxkLnR5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICB9XG5cbiAgaXNFbnRpdHlMaXN0KHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlID09PSAnVE9fTUFOWSc7XG4gIH1cblxuICBpc0hUTUxGaWVsZChtZXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWV0YS5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdIVE1MJyB8fCBtZXRhLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJztcbiAgfVxufVxuIl19