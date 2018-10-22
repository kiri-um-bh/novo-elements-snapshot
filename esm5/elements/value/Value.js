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
                    template: "\n        <ng-container [ngSwitch]=\"type\">\n            <div class=\"value-outer\" *ngIf=\"showLabel\">\n                <label class=\"skeleton\">{{ label }}</label>\n                <a *ngSwitchCase=\"NOVO_VALUE_TYPE.INTERNAL_LINK\" class=\"value\" (click)=\"openLink()\" [innerHTML]=\"data | render : meta\"></a>\n                <a *ngSwitchCase=\"NOVO_VALUE_TYPE.LINK\" class=\"value\" [href]=\"url\" target=\"_blank\" [innerHTML]=\"data | render : meta\"></a>\n                <novo-entity-list *ngSwitchCase=\"NOVO_VALUE_TYPE.ENTITY_LIST\" [data]='data' [meta]=\"meta\"></novo-entity-list>\n            </div>\n            <div *ngSwitchDefault class=\"value-outer\" [ngClass]=\"customClass\">\n                <label class=\"skeleton\">{{ label }}</label>\n                <div *ngIf=\"isDefault\" class=\"value skeleton\">\n                  <i *ngIf=\"meta.showEntityIcon\" class=\"bhi-circle {{meta.entityIconClass}}\"></i>\n                  <span>{{ data | render : meta }}</span>\n                </div>\n            </div>\n            <div class=\"actions\" *ngIf=\"showIcon\">\n                <i *ngFor=\"let icon of meta.icons\" [class]=\"iconClass(icon)\" (click)=\"onValueClick(icon)\"></i>\n            </div>\n        </ng-container>\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQUVoRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUU1QyxVQUFPO0lBQ1AsY0FBVztJQUNYLE9BQUk7SUFDSixnQkFBYTs7Ozs7Ozs7O0lBR2IsVUFBTztJQUNQLFNBQU07Ozs7O0FBR1I7SUFBQTtRQTJCRSxTQUFJLEdBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLHFCQUFxQjtRQUVoRSxVQUFLLEdBQXFCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUduRCxvQkFBZSxHQUFHLGVBQWUsQ0FBQztRQUNsQyxxQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUVwQyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQW1IM0IsQ0FBQztJQWpIQyxzQkFDSSxtQ0FBSzs7OztRQUdUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7OztRQU5ELFVBQ1UsR0FBVztZQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSxrQ0FBSTs7OztRQUdSO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixDQUFDOzs7OztRQU5ELFVBQ1MsR0FBVztZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7Ozs7SUFLRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLE9BQU8sQ0FBQyxPQUFP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OztZQUNoRyxLQUFLLEdBQVEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLElBQVk7UUFDdkIsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0lBQzdFLENBQUM7O2dCQXJKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxrdkNBbUJQO2lCQUNKOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBU0wsS0FBSzt1QkFRTCxLQUFLOzJCQWdCTCxXQUFXLFNBQUMsY0FBYzs7SUF5RjdCLHVCQUFDO0NBQUEsQUF0SkQsSUFzSkM7U0EvSFksZ0JBQWdCOzs7SUFDM0IsZ0NBQ1U7O0lBQ1YsZ0NBQzBDOztJQUMxQyxpQ0FDbUQ7O0lBRW5ELGlDQUErQjs7SUFDL0IsMkNBQWtDOztJQUNsQyw0Q0FBb0M7O0lBQ3BDLCtCQUFZOztJQUNaLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmV4cG9ydCBlbnVtIE5PVk9fVkFMVUVfVFlQRSB7XG4gIERFRkFVTFQsXG4gIEVOVElUWV9MSVNULFxuICBMSU5LLFxuICBJTlRFUk5BTF9MSU5LLFxufVxuZXhwb3J0IGVudW0gTk9WT19WQUxVRV9USEVNRSB7XG4gIERFRkFVTFQsXG4gIE1PQklMRSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by12YWx1ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInR5cGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiICpuZ0lmPVwic2hvd0xhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic2tlbGV0b25cIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGEgKm5nU3dpdGNoQ2FzZT1cIk5PVk9fVkFMVUVfVFlQRS5JTlRFUk5BTF9MSU5LXCIgY2xhc3M9XCJ2YWx1ZVwiIChjbGljayk9XCJvcGVuTGluaygpXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyIDogbWV0YVwiPjwvYT5cbiAgICAgICAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkxJTktcIiBjbGFzcz1cInZhbHVlXCIgW2hyZWZdPVwidXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyIDogbWV0YVwiPjwvYT5cbiAgICAgICAgICAgICAgICA8bm92by1lbnRpdHktbGlzdCAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUXCIgW2RhdGFdPSdkYXRhJyBbbWV0YV09XCJtZXRhXCI+PC9ub3ZvLWVudGl0eS1saXN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiIFtuZ0NsYXNzXT1cImN1c3RvbUNsYXNzXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic2tlbGV0b25cIj57eyBsYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzRGVmYXVsdFwiIGNsYXNzPVwidmFsdWUgc2tlbGV0b25cIj5cbiAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibWV0YS5zaG93RW50aXR5SWNvblwiIGNsYXNzPVwiYmhpLWNpcmNsZSB7e21ldGEuZW50aXR5SWNvbkNsYXNzfX1cIj48L2k+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57eyBkYXRhIHwgcmVuZGVyIDogbWV0YSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiAqbmdJZj1cInNob3dJY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgKm5nRm9yPVwibGV0IGljb24gb2YgbWV0YS5pY29uc1wiIFtjbGFzc109XCJpY29uQ2xhc3MoaWNvbilcIiAoY2xpY2spPVwib25WYWx1ZUNsaWNrKGljb24pXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9WYWx1ZUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTsgLy8gVE9ETyB1c2UgaW50ZXJmYWNlXG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueSA9IHsgdHlwZTogJ1NDQUxBUicsIGxhYmVsOiAnJyB9OyAvLyBUT0RPIHVzZSBpbnRlcmZhY2VcbiAgQElucHV0KClcbiAgdGhlbWU6IE5PVk9fVkFMVUVfVEhFTUUgPSBOT1ZPX1ZBTFVFX1RIRU1FLkRFRkFVTFQ7XG5cbiAgcHJpdmF0ZSBfdHlwZTogTk9WT19WQUxVRV9UWVBFO1xuICBOT1ZPX1ZBTFVFX1RZUEUgPSBOT1ZPX1ZBTFVFX1RZUEU7XG4gIE5PVk9fVkFMVUVfVEhFTUUgPSBOT1ZPX1ZBTFVFX1RIRU1FO1xuICB1cmw6IHN0cmluZztcbiAgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsYWJlbChsYmw6IHN0cmluZykge1xuICAgIHRoaXMubWV0YS5sYWJlbCA9IGxibDtcbiAgfVxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLmxhYmVsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEudHlwZSA9IHR5cDtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1ldGEudHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkodGhpcy5tZXRhKSkge1xuICAgICAgdGhpcy5tZXRhID0ge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW9iaWxlJylcbiAgcHVibGljIGdldCBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZSA9PT0gTk9WT19WQUxVRV9USEVNRS5NT0JJTEU7XG4gIH1cblxuICBpY29uQ2xhc3MoaWNvbik6IHN0cmluZyB7XG4gICAgbGV0IGljb25DbGFzcyA9ICcnO1xuICAgIGlmIChpY29uICYmIGljb24uaWNvbkNscykge1xuICAgICAgaWNvbkNsYXNzID0gYGJoaS0ke2ljb24uaWNvbkNsc30gYWN0aW9uc2A7XG4gICAgICBpZiAoaWNvbi5vbkljb25DbGljaykge1xuICAgICAgICBpY29uQ2xhc3MgPSBgJHtpY29uQ2xhc3N9IGNsaWNrYWJsZWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWNvbkNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbkNsYXNzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0RlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkxJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hvd0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YSAmJiB0aGlzLm1ldGEuaWNvbnMgJiYgdGhpcy5tZXRhLmljb25zLmxlbmd0aCAmJiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZGF0YSk7XG4gIH1cblxuICBvblZhbHVlQ2xpY2soaWNvbik6IHZvaWQge1xuICAgIGlmIChpY29uLm9uSWNvbkNsaWNrICYmIHR5cGVvZiBpY29uLm9uSWNvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpY29uLm9uSWNvbkNsaWNrKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cbiAgb3BlbkxpbmsoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLm1ldGEub3BlbkxpbmsgJiYgdHlwZW9mIHRoaXMubWV0YS5vcGVuTGluayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5tZXRhLm9wZW5MaW5rKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLmlzTGlua0ZpZWxkKHRoaXMubWV0YSwgdGhpcy5kYXRhKSkge1xuICAgICAgdGhpcy5fdHlwZSA9IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB2YWx1ZSBoYXMgYSBwcm90b2NvbCwgb3RoZXJ3aXNlIHRoZSBVUkwgd2lsbCBiZSByZWxhdGl2ZVxuICAgICAgbGV0IGhhc1Byb3RvY29sOiBhbnkgPSBuZXcgUmVnRXhwKCdeKGh0dHB8aHR0cHMpOi8vJywgJ2knKTtcbiAgICAgIGlmICghaGFzUHJvdG9jb2wudGVzdCh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHRoaXMudXJsID0gYGh0dHA6Ly8ke3RoaXMuZGF0YX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRW50aXR5TGlzdCh0aGlzLm1ldGEudHlwZSkpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzSFRNTEZpZWxkKHRoaXMubWV0YSkpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3MgPSB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgPyB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgOiAnJztcbiAgICAgIGlmICh0aGlzLm1ldGEuc3RyaXBIVE1MICYmIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucmVwbGFjZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCg/IXN0eWxlfFxcL3N0eWxlKS4rPz4vZ2ksICcnKS50cmltKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuSU5URVJOQUxfTElOSztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0xpbmtGaWVsZChmaWVsZDogeyBuYW1lPzogc3RyaW5nOyB0eXBlPzogTk9WT19WQUxVRV9UWVBFIH0sIGRhdGE6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBsaW5rRmllbGRzOiBhbnkgPSBbJ2NvbXBhbnlVUkwnLCAnY2xpZW50Q29ycG9yYXRpb25Db21wYW55VVJMJ107XG4gICAgbGV0IHJlZ2V4OiBhbnkgPSBuZXcgUmVnRXhwKCdeKGh0dHBzPzovLyg/Ond3dy58KD8hd3d3KSlbXnMuXSsuW15zXXsyLH18d3d3Lltec10rLltec117Mix9KSQnLCAnZ2knKTtcbiAgICBsZXQgaXNVUkw6IGFueSA9IEhlbHBlcnMuaXNTdHJpbmcoZGF0YSkgJiYgcmVnZXguZXhlYyhkYXRhLnRyaW0oKSk7XG4gICAgcmV0dXJuIGxpbmtGaWVsZHMuaW5kZXhPZihmaWVsZC5uYW1lKSA+IC0xIHx8ICEhaXNVUkwgfHwgZmllbGQudHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkxJTks7XG4gIH1cblxuICBpc0VudGl0eUxpc3QodHlwZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdUT19NQU5ZJztcbiAgfVxuXG4gIGlzSFRNTEZpZWxkKG1ldGE6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBtZXRhLmRhdGFTcGVjaWFsaXphdGlvbiA9PT0gJ0hUTUwnIHx8IG1ldGEuaW5wdXRUeXBlID09PSAnVEVYVEFSRUEnO1xuICB9XG59XG4iXX0=