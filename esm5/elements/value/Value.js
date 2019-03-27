/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "\n    <ng-container [ngSwitch]=\"_type\">\n      <div class=\"value-outer\" *ngIf=\"showLabel\">\n        <label>{{ meta.label }}</label>\n        <span class=\"value\">\n          <i *ngIf=\"meta.showEntityIcon\" class=\"bhi-circle {{ meta.entityIconClass }}\"></i>\n          <a *ngSwitchCase=\"NOVO_VALUE_TYPE.INTERNAL_LINK\" (click)=\"openLink()\" [innerHTML]=\"data | render: meta\"></a>\n          <a *ngSwitchCase=\"NOVO_VALUE_TYPE.LINK\" class=\"value\" [href]=\"url\" target=\"_blank\" [innerHTML]=\"data | render: meta\"></a>\n        </span>\n        <novo-entity-list *ngSwitchCase=\"NOVO_VALUE_TYPE.ENTITY_LIST\" [data]=\"data\" [meta]=\"meta\"></novo-entity-list>\n      </div>\n      <div *ngSwitchDefault class=\"value-outer\" [ngClass]=\"customClass\">\n        <label>{{ meta.label }}</label>\n        <div *ngIf=\"isDefault\" class=\"value\" [innerHTML]=\"data | render: meta\"></div>\n      </div>\n      <div class=\"actions\" *ngIf=\"showIcon\">\n        <i *ngFor=\"let icon of meta.icons\" [class]=\"iconClass(icon)\" (click)=\"onValueClick(icon)\"></i>\n      </div>\n    </ng-container>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdmFsdWUvVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxXQUFXLEVBQTRCLE1BQU0sZUFBZSxDQUFDOztBQUVoRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztJQUU1QyxVQUFPO0lBQ1AsY0FBVztJQUNYLE9BQUk7SUFDSixnQkFBYTs7Ozs7Ozs7O0lBR2IsVUFBTztJQUNQLFNBQU07Ozs7O0FBR1I7SUFBQTs7UUEyQkUsU0FBSSxHQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7O1FBRWhFLFVBQUssR0FBcUIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO1FBR25ELG9CQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ2xDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBRXBDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO0lBb0gzQixDQUFDO0lBbEhDLHNCQUNJLG1DQUFLOzs7O1FBR1Q7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUM7Ozs7O1FBTkQsVUFDVSxHQUFXO1lBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUtELHNCQUNJLGtDQUFJOzs7O1FBR1I7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3hCLENBQUM7Ozs7O1FBTkQsVUFDUyxHQUFXO1lBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQUtELG1DQUFROzs7SUFBUjtRQUNFLElBQUksT0FBTyxDQUFDLE9B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QUMsaUVBQWlFLEVBQUUsSUFBSSxDQUFDOztZQUNoRyxLQUFLLEdBQVEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsRSxPQUFPLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9GLENBQUM7Ozs7O0lBRUQsdUNBQVk7Ozs7SUFBWixVQUFhLElBQVk7UUFDdkIsT0FBTyxJQUFJLEtBQUssU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxDQUFDO0lBQzdFLENBQUM7O2dCQXRKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSw4bENBbUJUO2lCQUNGOzs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBU0wsS0FBSzt1QkFRTCxLQUFLOzJCQWdCTCxXQUFXLFNBQUMsY0FBYzs7SUEwRjdCLHVCQUFDO0NBQUEsQUF2SkQsSUF1SkM7U0FoSVksZ0JBQWdCOzs7SUFDM0IsZ0NBQ1U7O0lBQ1YsZ0NBQzBDOztJQUMxQyxpQ0FDbUQ7O0lBRW5ELGlDQUF1Qjs7SUFDdkIsMkNBQWtDOztJQUNsQyw0Q0FBb0M7O0lBQ3BDLCtCQUFZOztJQUNaLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmV4cG9ydCBlbnVtIE5PVk9fVkFMVUVfVFlQRSB7XG4gIERFRkFVTFQsXG4gIEVOVElUWV9MSVNULFxuICBMSU5LLFxuICBJTlRFUk5BTF9MSU5LLFxufVxuZXhwb3J0IGVudW0gTk9WT19WQUxVRV9USEVNRSB7XG4gIERFRkFVTFQsXG4gIE1PQklMRSxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by12YWx1ZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiX3R5cGVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ2YWx1ZS1vdXRlclwiICpuZ0lmPVwic2hvd0xhYmVsXCI+XG4gICAgICAgIDxsYWJlbD57eyBtZXRhLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICAgIDxpICpuZ0lmPVwibWV0YS5zaG93RW50aXR5SWNvblwiIGNsYXNzPVwiYmhpLWNpcmNsZSB7eyBtZXRhLmVudGl0eUljb25DbGFzcyB9fVwiPjwvaT5cbiAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTktcIiAoY2xpY2spPVwib3BlbkxpbmsoKVwiIFtpbm5lckhUTUxdPVwiZGF0YSB8IHJlbmRlcjogbWV0YVwiPjwvYT5cbiAgICAgICAgICA8YSAqbmdTd2l0Y2hDYXNlPVwiTk9WT19WQUxVRV9UWVBFLkxJTktcIiBjbGFzcz1cInZhbHVlXCIgW2hyZWZdPVwidXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyOiBtZXRhXCI+PC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxub3ZvLWVudGl0eS1saXN0ICpuZ1N3aXRjaENhc2U9XCJOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1RcIiBbZGF0YV09XCJkYXRhXCIgW21ldGFdPVwibWV0YVwiPjwvbm92by1lbnRpdHktbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdTd2l0Y2hEZWZhdWx0IGNsYXNzPVwidmFsdWUtb3V0ZXJcIiBbbmdDbGFzc109XCJjdXN0b21DbGFzc1wiPlxuICAgICAgICA8bGFiZWw+e3sgbWV0YS5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJpc0RlZmF1bHRcIiBjbGFzcz1cInZhbHVlXCIgW2lubmVySFRNTF09XCJkYXRhIHwgcmVuZGVyOiBtZXRhXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgKm5nSWY9XCJzaG93SWNvblwiPlxuICAgICAgICA8aSAqbmdGb3I9XCJsZXQgaWNvbiBvZiBtZXRhLmljb25zXCIgW2NsYXNzXT1cImljb25DbGFzcyhpY29uKVwiIChjbGljayk9XCJvblZhbHVlQ2xpY2soaWNvbilcIj48L2k+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b1ZhbHVlRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KClcbiAgZGF0YTogYW55OyAvLyBUT0RPIHVzZSBpbnRlcmZhY2VcbiAgQElucHV0KClcbiAgbWV0YTogYW55ID0geyB0eXBlOiAnU0NBTEFSJywgbGFiZWw6ICcnIH07IC8vIFRPRE8gdXNlIGludGVyZmFjZVxuICBASW5wdXQoKVxuICB0aGVtZTogTk9WT19WQUxVRV9USEVNRSA9IE5PVk9fVkFMVUVfVEhFTUUuREVGQVVMVDtcblxuICBfdHlwZTogTk9WT19WQUxVRV9UWVBFO1xuICBOT1ZPX1ZBTFVFX1RZUEUgPSBOT1ZPX1ZBTFVFX1RZUEU7XG4gIE5PVk9fVkFMVUVfVEhFTUUgPSBOT1ZPX1ZBTFVFX1RIRU1FO1xuICB1cmw6IHN0cmluZztcbiAgY3VzdG9tQ2xhc3M6IHN0cmluZyA9ICcnO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBsYWJlbChsYmw6IHN0cmluZykge1xuICAgIHRoaXMubWV0YS5sYWJlbCA9IGxibDtcbiAgfVxuICBnZXQgbGFiZWwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhLmxhYmVsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodHlwOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1ldGEudHlwZSA9IHR5cDtcbiAgfVxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm1ldGEudHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmIChIZWxwZXJzLmlzRW1wdHkodGhpcy5tZXRhKSkge1xuICAgICAgdGhpcy5tZXRhID0ge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubW9iaWxlJylcbiAgcHVibGljIGdldCBpc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZSA9PT0gTk9WT19WQUxVRV9USEVNRS5NT0JJTEU7XG4gIH1cblxuICBpY29uQ2xhc3MoaWNvbik6IHN0cmluZyB7XG4gICAgbGV0IGljb25DbGFzcyA9ICcnO1xuICAgIGlmIChpY29uICYmIGljb24uaWNvbkNscykge1xuICAgICAgaWNvbkNsYXNzID0gYGJoaS0ke2ljb24uaWNvbkNsc30gYWN0aW9uc2A7XG4gICAgICBpZiAoaWNvbi5vbkljb25DbGljaykge1xuICAgICAgICBpY29uQ2xhc3MgPSBgJHtpY29uQ2xhc3N9IGNsaWNrYWJsZWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gaWNvbkNsYXNzO1xuICAgIH1cbiAgICByZXR1cm4gaWNvbkNsYXNzO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0RlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNob3dMYWJlbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkxJTksgfHwgdGhpcy5fdHlwZSA9PT0gTk9WT19WQUxVRV9UWVBFLkVOVElUWV9MSVNUXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2hvd0ljb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWV0YSAmJiB0aGlzLm1ldGEuaWNvbnMgJiYgdGhpcy5tZXRhLmljb25zLmxlbmd0aCAmJiAhSGVscGVycy5pc0VtcHR5KHRoaXMuZGF0YSk7XG4gIH1cblxuICBvblZhbHVlQ2xpY2soaWNvbik6IHZvaWQge1xuICAgIGlmIChpY29uLm9uSWNvbkNsaWNrICYmIHR5cGVvZiBpY29uLm9uSWNvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpY29uLm9uSWNvbkNsaWNrKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cbiAgb3BlbkxpbmsoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLm1ldGEub3BlbkxpbmsgJiYgdHlwZW9mIHRoaXMubWV0YS5vcGVuTGluayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5tZXRhLm9wZW5MaW5rKHRoaXMuZGF0YSwgdGhpcy5tZXRhKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IGFueSB7XG4gICAgaWYgKHRoaXMubWV0YSAmJiB0aGlzLmlzTGlua0ZpZWxkKHRoaXMubWV0YSwgdGhpcy5kYXRhKSkge1xuICAgICAgdGhpcy5fdHlwZSA9IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICAgICAgLy8gTWFrZSBzdXJlIHRoZSB2YWx1ZSBoYXMgYSBwcm90b2NvbCwgb3RoZXJ3aXNlIHRoZSBVUkwgd2lsbCBiZSByZWxhdGl2ZVxuICAgICAgbGV0IGhhc1Byb3RvY29sOiBhbnkgPSBuZXcgUmVnRXhwKCdeKGh0dHB8aHR0cHMpOi8vJywgJ2knKTtcbiAgICAgIGlmICghaGFzUHJvdG9jb2wudGVzdCh0aGlzLmRhdGEpKSB7XG4gICAgICAgIHRoaXMudXJsID0gYGh0dHA6Ly8ke3RoaXMuZGF0YX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmRhdGE7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzRW50aXR5TGlzdCh0aGlzLm1ldGEudHlwZSkpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSBOT1ZPX1ZBTFVFX1RZUEUuRU5USVRZX0xJU1Q7XG4gICAgfSBlbHNlIGlmICh0aGlzLmlzSFRNTEZpZWxkKHRoaXMubWV0YSkpIHtcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3MgPSB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgPyB0aGlzLm1ldGEuY3VzdG9tQ2xhc3MgOiAnJztcbiAgICAgIGlmICh0aGlzLm1ldGEuc3RyaXBIVE1MICYmIHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEucmVwbGFjZSkge1xuICAgICAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEucmVwbGFjZSgvPCg/IXN0eWxlfFxcL3N0eWxlKS4rPz4vZ2ksICcnKS50cmltKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm1ldGEgJiYgdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5KSB7XG4gICAgICAgIGNhc2UgJ0NsaWVudENvcnBvcmF0aW9uJzpcbiAgICAgICAgY2FzZSAnQ2xpZW50Q29udGFjdCc6XG4gICAgICAgIGNhc2UgJ0NhbmRpZGF0ZSc6XG4gICAgICAgIGNhc2UgJ09wcG9ydHVuaXR5JzpcbiAgICAgICAgY2FzZSAnSm9iT3JkZXInOlxuICAgICAgICBjYXNlICdQbGFjZW1lbnQnOlxuICAgICAgICBjYXNlICdMZWFkJzpcbiAgICAgICAgICB0aGlzLl90eXBlID0gTk9WT19WQUxVRV9UWVBFLklOVEVSTkFMX0xJTks7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNMaW5rRmllbGQoZmllbGQ6IHsgbmFtZT86IHN0cmluZzsgdHlwZT86IE5PVk9fVkFMVUVfVFlQRSB9LCBkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgbGlua0ZpZWxkczogYW55ID0gWydjb21wYW55VVJMJywgJ2NsaWVudENvcnBvcmF0aW9uQ29tcGFueVVSTCddO1xuICAgIGxldCByZWdleDogYW55ID0gbmV3IFJlZ0V4cCgnXihodHRwcz86Ly8oPzp3d3cufCg/IXd3dykpW15zLl0rLltec117Mix9fHd3dy5bXnNdKy5bXnNdezIsfSkkJywgJ2dpJyk7XG4gICAgbGV0IGlzVVJMOiBhbnkgPSBIZWxwZXJzLmlzU3RyaW5nKGRhdGEpICYmIHJlZ2V4LmV4ZWMoZGF0YS50cmltKCkpO1xuICAgIHJldHVybiBsaW5rRmllbGRzLmluZGV4T2YoZmllbGQubmFtZSkgPiAtMSB8fCAhIWlzVVJMIHx8IGZpZWxkLnR5cGUgPT09IE5PVk9fVkFMVUVfVFlQRS5MSU5LO1xuICB9XG5cbiAgaXNFbnRpdHlMaXN0KHR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlID09PSAnVE9fTUFOWSc7XG4gIH1cblxuICBpc0hUTUxGaWVsZChtZXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gbWV0YS5kYXRhU3BlY2lhbGl6YXRpb24gPT09ICdIVE1MJyB8fCBtZXRhLmlucHV0VHlwZSA9PT0gJ1RFWFRBUkVBJztcbiAgfVxufVxuIl19