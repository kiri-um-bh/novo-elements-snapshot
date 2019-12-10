/**
 * @fileoverview added by tsickle
 * Generated from: elements/toast/ToastService.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// APP
import { NovoToastElement } from './Toast';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
/**
 * @record
 */
export function ToastOptions() { }
if (false) {
    /** @type {?|undefined} */
    ToastOptions.prototype.title;
    /** @type {?|undefined} */
    ToastOptions.prototype.message;
    /** @type {?|undefined} */
    ToastOptions.prototype.icon;
    /** @type {?|undefined} */
    ToastOptions.prototype.theme;
    /** @type {?|undefined} */
    ToastOptions.prototype.hideDelay;
    /** @type {?|undefined} */
    ToastOptions.prototype.position;
    /** @type {?|undefined} */
    ToastOptions.prototype.isCloseable;
    /** @type {?|undefined} */
    ToastOptions.prototype.customClass;
}
var NovoToastService = /** @class */ (function () {
    function NovoToastService(componentUtils) {
        this.componentUtils = componentUtils;
        this.references = [];
        this.icons = { default: 'bell', success: 'check', info: 'info', warning: 'warning', danger: 'remove' };
        this.defaults = { hideDelay: 3500, position: 'growlTopRight', theme: 'default' };
    }
    Object.defineProperty(NovoToastService.prototype, "parentViewContainer", {
        set: /**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            this._parentViewContainer = view;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} options
     * @param {?=} toastElement
     * @return {?}
     */
    NovoToastService.prototype.alert = /**
     * @param {?} options
     * @param {?=} toastElement
     * @return {?}
     */
    function (options, toastElement) {
        var _this = this;
        if (toastElement === void 0) { toastElement = NovoToastElement; }
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (!_this._parentViewContainer) {
                console.error('No parent view container specified for the ToastService. Set it inside your main application. \nthis.toastService.parentViewContainer = view (ViewContainerRef)');
                return;
            }
            /** @type {?} */
            var toast = _this.componentUtils.append(toastElement, _this._parentViewContainer);
            _this.references.push(toast);
            _this.handleAlert(toast.instance, options);
            resolve(toast);
        }));
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    NovoToastService.prototype.isVisible = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        return toast.show;
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    NovoToastService.prototype.hide = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        var _this = this;
        toast.animate = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            toast.show = false;
            /** @type {?} */
            var REF = _this.references.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.instance === toast; }))[0];
            if (REF) {
                _this.references.splice(_this.references.indexOf(REF), 1);
                REF.destroy();
            }
        }), 300);
    };
    /**
     * @param {?} toast
     * @param {?} options
     * @return {?}
     */
    NovoToastService.prototype.handleAlert = /**
     * @param {?} toast
     * @param {?} options
     * @return {?}
     */
    function (toast, options) {
        var _this = this;
        this.setToastOnSession(toast, options);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.show(toast);
        }), 20);
        if (!toast.isCloseable) {
            this.toastTimer(toast);
        }
    };
    /**
     * @param {?} toast
     * @param {?} opts
     * @return {?}
     */
    NovoToastService.prototype.setToastOnSession = /**
     * @param {?} toast
     * @param {?} opts
     * @return {?}
     */
    function (toast, opts) {
        /** @type {?} */
        var OPTIONS = typeof opts === 'object' ? opts : {};
        toast.parent = this;
        toast.title = OPTIONS.title || '';
        toast.message = OPTIONS.message || '';
        toast.hideDelay = OPTIONS.hideDelay || this.defaults.hideDelay;
        toast.link = OPTIONS.link || '';
        toast.isCloseable = OPTIONS.isCloseable || false;
        /** @type {?} */
        var CUSTOM_CLASS = OPTIONS.customClass || '';
        /** @type {?} */
        var ALERT_STYLE = OPTIONS.theme || this.defaults.theme;
        /** @type {?} */
        var ALERT_POSITION = OPTIONS.position || this.defaults.position;
        /** @type {?} */
        var ALERT_ICON = OPTIONS.icon || this.icons.default;
        toast.iconClass = "bhi-" + ALERT_ICON;
        toast.launched = true;
        toast.alertTheme = ALERT_STYLE + " " + ALERT_POSITION + " " + CUSTOM_CLASS + " toast-container launched";
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    NovoToastService.prototype.show = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        toast.show = true;
        setTimeout(addClass, 25);
        /**
         * Adds animate class to be called after a timeout
         *
         * @return {?}
         */
        function addClass() {
            toast.animate = true;
        }
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    NovoToastService.prototype.toastTimer = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        var _this = this;
        if (toast.hideDelay < 0) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.hide(toast);
        }), toast.hideDelay);
    };
    NovoToastService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NovoToastService.ctorParameters = function () { return [
        { type: ComponentUtils }
    ]; };
    return NovoToastService;
}());
export { NovoToastService };
if (false) {
    /** @type {?} */
    NovoToastService.prototype._parentViewContainer;
    /** @type {?} */
    NovoToastService.prototype.references;
    /** @type {?} */
    NovoToastService.prototype.icons;
    /** @type {?} */
    NovoToastService.prototype.defaults;
    /**
     * @type {?}
     * @private
     */
    NovoToastService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBTTVFLGtDQVNDOzs7SUFSQyw2QkFBZTs7SUFDZiwrQkFBaUI7O0lBQ2pCLDRCQUFrQjs7SUFDbEIsNkJBQW9COztJQUNwQixpQ0FBbUI7O0lBQ25CLGdDQUEwQjs7SUFDMUIsbUNBQXNCOztJQUN0QixtQ0FBcUI7O0FBR3ZCO0lBT0UsMEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUpsRCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBRyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ2xHLGFBQVEsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQUV0RCxzQkFBSSxpREFBbUI7Ozs7O1FBQXZCLFVBQXdCLElBQUk7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTs7Ozs7O0lBRUQsZ0NBQUs7Ozs7O0lBQUwsVUFBTSxPQUFxQixFQUFFLFlBQW9DO1FBQWpFLGlCQWFDO1FBYjRCLDZCQUFBLEVBQUEsK0JBQW9DO1FBQy9ELE9BQU8sSUFBSSxPQUFP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UUFBUSxDQUFDLFFBQVE7O1lBQzNELFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztRQUVyRCxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQU8sVUFBWSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxVQUFVLEdBQU0sV0FBVyxTQUFJLGNBQWMsU0FBSSxZQUFZLDhCQUEyQixDQUFDO0lBQ2pHLENBQUM7Ozs7O0lBRUQsK0JBQUk7Ozs7SUFBSixVQUFLLEtBQUs7UUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7UUFJekIsU0FBUyxRQUFRO1lBQ2YsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLEtBQUs7UUFBaEIsaUJBT0M7UUFOQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELFVBQVU7OztRQUFDO1lBQ1QsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEdBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7O2dCQTVGRixVQUFVOzs7O2dCQWpCRixjQUFjOztJQThHdkIsdUJBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQTVGWSxnQkFBZ0I7OztJQUMzQixnREFBMEI7O0lBQzFCLHNDQUE0Qjs7SUFDNUIsaUNBQWtHOztJQUNsRyxvQ0FBNEU7Ozs7O0lBRWhFLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvVG9hc3RFbGVtZW50IH0gZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbmV4cG9ydCB0eXBlIFRvYXN0VGhlbWVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAncG9zaXRpdmUnIHwgc3RyaW5nO1xuZXhwb3J0IHR5cGUgVG9hc3RJY29ucyA9ICdiZWxsJyB8ICdjaGVjaycgfCAnaW5mbycgfCAnd2FybmluZycgfCAncmVtb3ZlJyB8ICdjYXV0aW9uJyB8ICd0aW1lcycgfCAnY29mZmVlJyB8ICdkYW5nZXInIHwgc3RyaW5nO1xuZXhwb3J0IHR5cGUgVG9hc3RQb3NpdGlvbnMgPSAnZml4ZWRUb3AnIHwgJ2ZpeGVkQm90dG9tJyB8ICdncm93bFRvcFJpZ2h0JyB8ICdncm93bFRvcExlZnQnIHwgJ2dyb3dsQm90dG9tUmlnaHQnIHwgJ2dyb3dsQm90dG9tTGVmdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RPcHRpb25zIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGljb24/OiBUb2FzdEljb25zO1xuICB0aGVtZT86IFRvYXN0VGhlbWVzO1xuICBoaWRlRGVsYXk/OiBudW1iZXI7XG4gIHBvc2l0aW9uPzogVG9hc3RQb3NpdGlvbnM7XG4gIGlzQ2xvc2VhYmxlPzogYm9vbGVhbjtcbiAgY3VzdG9tQ2xhc3M/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvVG9hc3RTZXJ2aWNlIHtcbiAgX3BhcmVudFZpZXdDb250YWluZXI6IGFueTtcbiAgcmVmZXJlbmNlczogQXJyYXk8YW55PiA9IFtdO1xuICBpY29ucyA9IHsgZGVmYXVsdDogJ2JlbGwnLCBzdWNjZXNzOiAnY2hlY2snLCBpbmZvOiAnaW5mbycsIHdhcm5pbmc6ICd3YXJuaW5nJywgZGFuZ2VyOiAncmVtb3ZlJyB9O1xuICBkZWZhdWx0cyA9IHsgaGlkZURlbGF5OiAzNTAwLCBwb3NpdGlvbjogJ2dyb3dsVG9wUmlnaHQnLCB0aGVtZTogJ2RlZmF1bHQnIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgc2V0IHBhcmVudFZpZXdDb250YWluZXIodmlldykge1xuICAgIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICB9XG5cbiAgYWxlcnQob3B0aW9uczogVG9hc3RPcHRpb25zLCB0b2FzdEVsZW1lbnQ6IGFueSA9IE5vdm9Ub2FzdEVsZW1lbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ05vIHBhcmVudCB2aWV3IGNvbnRhaW5lciBzcGVjaWZpZWQgZm9yIHRoZSBUb2FzdFNlcnZpY2UuIFNldCBpdCBpbnNpZGUgeW91ciBtYWluIGFwcGxpY2F0aW9uLiBcXG50aGlzLnRvYXN0U2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldyAoVmlld0NvbnRhaW5lclJlZiknLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b2FzdCA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRvYXN0RWxlbWVudCwgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaCh0b2FzdCk7XG4gICAgICB0aGlzLmhhbmRsZUFsZXJ0KHRvYXN0Lmluc3RhbmNlLCBvcHRpb25zKTtcbiAgICAgIHJlc29sdmUodG9hc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNWaXNpYmxlKHRvYXN0KSB7XG4gICAgcmV0dXJuIHRvYXN0LnNob3c7XG4gIH1cblxuICBoaWRlKHRvYXN0KSB7XG4gICAgdG9hc3QuYW5pbWF0ZSA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9hc3Quc2hvdyA9IGZhbHNlO1xuICAgICAgY29uc3QgUkVGID0gdGhpcy5yZWZlcmVuY2VzLmZpbHRlcigoeCkgPT4geC5pbnN0YW5jZSA9PT0gdG9hc3QpWzBdO1xuICAgICAgaWYgKFJFRikge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXMuc3BsaWNlKHRoaXMucmVmZXJlbmNlcy5pbmRleE9mKFJFRiksIDEpO1xuICAgICAgICBSRUYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sIDMwMCk7XG4gIH1cblxuICBoYW5kbGVBbGVydCh0b2FzdCwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdGlvbnMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93KHRvYXN0KTtcbiAgICB9LCAyMCk7XG4gICAgaWYgKCF0b2FzdC5pc0Nsb3NlYWJsZSkge1xuICAgICAgdGhpcy50b2FzdFRpbWVyKHRvYXN0KTtcbiAgICB9XG4gIH1cblxuICBzZXRUb2FzdE9uU2Vzc2lvbih0b2FzdCwgb3B0cykge1xuICAgIGNvbnN0IE9QVElPTlMgPSB0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcgPyBvcHRzIDoge307XG5cbiAgICB0b2FzdC5wYXJlbnQgPSB0aGlzO1xuICAgIHRvYXN0LnRpdGxlID0gT1BUSU9OUy50aXRsZSB8fCAnJztcbiAgICB0b2FzdC5tZXNzYWdlID0gT1BUSU9OUy5tZXNzYWdlIHx8ICcnO1xuICAgIHRvYXN0LmhpZGVEZWxheSA9IE9QVElPTlMuaGlkZURlbGF5IHx8IHRoaXMuZGVmYXVsdHMuaGlkZURlbGF5O1xuICAgIHRvYXN0LmxpbmsgPSBPUFRJT05TLmxpbmsgfHwgJyc7XG4gICAgdG9hc3QuaXNDbG9zZWFibGUgPSBPUFRJT05TLmlzQ2xvc2VhYmxlIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgQ1VTVE9NX0NMQVNTID0gT1BUSU9OUy5jdXN0b21DbGFzcyB8fCAnJztcbiAgICBjb25zdCBBTEVSVF9TVFlMRSA9IE9QVElPTlMudGhlbWUgfHwgdGhpcy5kZWZhdWx0cy50aGVtZTtcbiAgICBjb25zdCBBTEVSVF9QT1NJVElPTiA9IE9QVElPTlMucG9zaXRpb24gfHwgdGhpcy5kZWZhdWx0cy5wb3NpdGlvbjtcbiAgICBjb25zdCBBTEVSVF9JQ09OID0gT1BUSU9OUy5pY29uIHx8IHRoaXMuaWNvbnMuZGVmYXVsdDtcblxuICAgIHRvYXN0Lmljb25DbGFzcyA9IGBiaGktJHtBTEVSVF9JQ09OfWA7XG4gICAgdG9hc3QubGF1bmNoZWQgPSB0cnVlO1xuICAgIHRvYXN0LmFsZXJ0VGhlbWUgPSBgJHtBTEVSVF9TVFlMRX0gJHtBTEVSVF9QT1NJVElPTn0gJHtDVVNUT01fQ0xBU1N9IHRvYXN0LWNvbnRhaW5lciBsYXVuY2hlZGA7XG4gIH1cblxuICBzaG93KHRvYXN0KSB7XG4gICAgdG9hc3Quc2hvdyA9IHRydWU7XG4gICAgc2V0VGltZW91dChhZGRDbGFzcywgMjUpO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW5pbWF0ZSBjbGFzcyB0byBiZSBjYWxsZWQgYWZ0ZXIgYSB0aW1lb3V0XG4gICAgICoqL1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICAgICAgdG9hc3QuYW5pbWF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9hc3RUaW1lcih0b2FzdCkge1xuICAgIGlmICh0b2FzdC5oaWRlRGVsYXkgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKHRvYXN0KTtcbiAgICB9LCB0b2FzdC5oaWRlRGVsYXkpO1xuICB9XG59XG4iXX0=