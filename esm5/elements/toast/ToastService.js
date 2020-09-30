/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFNNUUsa0NBU0M7OztJQVJDLDZCQUFlOztJQUNmLCtCQUFpQjs7SUFDakIsNEJBQWtCOztJQUNsQiw2QkFBb0I7O0lBQ3BCLGlDQUFtQjs7SUFDbkIsZ0NBQTBCOztJQUMxQixtQ0FBc0I7O0lBQ3RCLG1DQUFxQjs7QUFHdkI7SUFPRSwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSmxELGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDbEcsYUFBUSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRXRELHNCQUFJLGlEQUFtQjs7Ozs7UUFBdkIsVUFBd0IsSUFBSTtZQUMxQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7Ozs7SUFFRCxnQ0FBSzs7Ozs7SUFBTCxVQUFNLE9BQXFCLEVBQUUsWUFBb0M7UUFBakUsaUJBYUM7UUFiNEIsNkJBQUEsRUFBQSwrQkFBb0M7UUFDL0QsT0FBTyxJQUFJLE9BQU87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QUFRLENBQUMsUUFBUTs7WUFDM0QsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPO1FBRXJELEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBTyxVQUFZLENBQUM7UUFDdEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxDQUFDLFVBQVUsR0FBTSxXQUFXLFNBQUksY0FBYyxTQUFJLFlBQVksOEJBQTJCLENBQUM7SUFDakcsQ0FBQzs7Ozs7SUFFRCwrQkFBSTs7OztJQUFKLFVBQUssS0FBSztRQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztRQUl6QixTQUFTLFFBQVE7WUFDZixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsS0FBSztRQUFoQixpQkFPQztRQU5DLElBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsR0FBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Z0JBNUZGLFVBQVU7Ozs7Z0JBakJGLGNBQWM7O0lBOEd2Qix1QkFBQztDQUFBLEFBN0ZELElBNkZDO1NBNUZZLGdCQUFnQjs7O0lBQzNCLGdEQUEwQjs7SUFDMUIsc0NBQTRCOztJQUM1QixpQ0FBa0c7O0lBQ2xHLG9DQUE0RTs7Ozs7SUFFaEUsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Ub2FzdEVsZW1lbnQgfSBmcm9tICcuL1RvYXN0JztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuZXhwb3J0IHR5cGUgVG9hc3RUaGVtZXMgPSAnZGVmYXVsdCcgfCAnc3VjY2VzcycgfCAnaW5mbycgfCAnd2FybmluZycgfCAnZGFuZ2VyJyB8ICdwb3NpdGl2ZScgfCBzdHJpbmc7XG5leHBvcnQgdHlwZSBUb2FzdEljb25zID0gJ2JlbGwnIHwgJ2NoZWNrJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdyZW1vdmUnIHwgJ2NhdXRpb24nIHwgJ3RpbWVzJyB8ICdjb2ZmZWUnIHwgJ2RhbmdlcicgfCBzdHJpbmc7XG5leHBvcnQgdHlwZSBUb2FzdFBvc2l0aW9ucyA9ICdmaXhlZFRvcCcgfCAnZml4ZWRCb3R0b20nIHwgJ2dyb3dsVG9wUmlnaHQnIHwgJ2dyb3dsVG9wTGVmdCcgfCAnZ3Jvd2xCb3R0b21SaWdodCcgfCAnZ3Jvd2xCb3R0b21MZWZ0JztcblxuZXhwb3J0IGludGVyZmFjZSBUb2FzdE9wdGlvbnMge1xuICB0aXRsZT86IHN0cmluZztcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgaWNvbj86IFRvYXN0SWNvbnM7XG4gIHRoZW1lPzogVG9hc3RUaGVtZXM7XG4gIGhpZGVEZWxheT86IG51bWJlcjtcbiAgcG9zaXRpb24/OiBUb2FzdFBvc2l0aW9ucztcbiAgaXNDbG9zZWFibGU/OiBib29sZWFuO1xuICBjdXN0b21DbGFzcz86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9Ub2FzdFNlcnZpY2Uge1xuICBfcGFyZW50Vmlld0NvbnRhaW5lcjogYW55O1xuICByZWZlcmVuY2VzOiBBcnJheTxhbnk+ID0gW107XG4gIGljb25zID0geyBkZWZhdWx0OiAnYmVsbCcsIHN1Y2Nlc3M6ICdjaGVjaycsIGluZm86ICdpbmZvJywgd2FybmluZzogJ3dhcm5pbmcnLCBkYW5nZXI6ICdyZW1vdmUnIH07XG4gIGRlZmF1bHRzID0geyBoaWRlRGVsYXk6IDM1MDAsIHBvc2l0aW9uOiAnZ3Jvd2xUb3BSaWdodCcsIHRoZW1lOiAnZGVmYXVsdCcgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBzZXQgcGFyZW50Vmlld0NvbnRhaW5lcih2aWV3KSB7XG4gICAgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXc7XG4gIH1cblxuICBhbGVydChvcHRpb25zOiBUb2FzdE9wdGlvbnMsIHRvYXN0RWxlbWVudDogYW55ID0gTm92b1RvYXN0RWxlbWVudCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAnTm8gcGFyZW50IHZpZXcgY29udGFpbmVyIHNwZWNpZmllZCBmb3IgdGhlIFRvYXN0U2VydmljZS4gU2V0IGl0IGluc2lkZSB5b3VyIG1haW4gYXBwbGljYXRpb24uIFxcbnRoaXMudG9hc3RTZXJ2aWNlLnBhcmVudFZpZXdDb250YWluZXIgPSB2aWV3IChWaWV3Q29udGFpbmVyUmVmKScsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRvYXN0ID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmQodG9hc3RFbGVtZW50LCB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKTtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHRvYXN0KTtcbiAgICAgIHRoaXMuaGFuZGxlQWxlcnQodG9hc3QuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICAgICAgcmVzb2x2ZSh0b2FzdCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Zpc2libGUodG9hc3QpIHtcbiAgICByZXR1cm4gdG9hc3Quc2hvdztcbiAgfVxuXG4gIGhpZGUodG9hc3QpIHtcbiAgICB0b2FzdC5hbmltYXRlID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2FzdC5zaG93ID0gZmFsc2U7XG4gICAgICBjb25zdCBSRUYgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKCh4KSA9PiB4Lmluc3RhbmNlID09PSB0b2FzdClbMF07XG4gICAgICBpZiAoUkVGKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlcy5zcGxpY2UodGhpcy5yZWZlcmVuY2VzLmluZGV4T2YoUkVGKSwgMSk7XG4gICAgICAgIFJFRi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIGhhbmRsZUFsZXJ0KHRvYXN0LCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRUb2FzdE9uU2Vzc2lvbih0b2FzdCwgb3B0aW9ucyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3codG9hc3QpO1xuICAgIH0sIDIwKTtcbiAgICBpZiAoIXRvYXN0LmlzQ2xvc2VhYmxlKSB7XG4gICAgICB0aGlzLnRvYXN0VGltZXIodG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRzKSB7XG4gICAgY29uc3QgT1BUSU9OUyA9IHR5cGVvZiBvcHRzID09PSAnb2JqZWN0JyA/IG9wdHMgOiB7fTtcblxuICAgIHRvYXN0LnBhcmVudCA9IHRoaXM7XG4gICAgdG9hc3QudGl0bGUgPSBPUFRJT05TLnRpdGxlIHx8ICcnO1xuICAgIHRvYXN0Lm1lc3NhZ2UgPSBPUFRJT05TLm1lc3NhZ2UgfHwgJyc7XG4gICAgdG9hc3QuaGlkZURlbGF5ID0gT1BUSU9OUy5oaWRlRGVsYXkgfHwgdGhpcy5kZWZhdWx0cy5oaWRlRGVsYXk7XG4gICAgdG9hc3QubGluayA9IE9QVElPTlMubGluayB8fCAnJztcbiAgICB0b2FzdC5pc0Nsb3NlYWJsZSA9IE9QVElPTlMuaXNDbG9zZWFibGUgfHwgZmFsc2U7XG5cbiAgICBjb25zdCBDVVNUT01fQ0xBU1MgPSBPUFRJT05TLmN1c3RvbUNsYXNzIHx8ICcnO1xuICAgIGNvbnN0IEFMRVJUX1NUWUxFID0gT1BUSU9OUy50aGVtZSB8fCB0aGlzLmRlZmF1bHRzLnRoZW1lO1xuICAgIGNvbnN0IEFMRVJUX1BPU0lUSU9OID0gT1BUSU9OUy5wb3NpdGlvbiB8fCB0aGlzLmRlZmF1bHRzLnBvc2l0aW9uO1xuICAgIGNvbnN0IEFMRVJUX0lDT04gPSBPUFRJT05TLmljb24gfHwgdGhpcy5pY29ucy5kZWZhdWx0O1xuXG4gICAgdG9hc3QuaWNvbkNsYXNzID0gYGJoaS0ke0FMRVJUX0lDT059YDtcbiAgICB0b2FzdC5sYXVuY2hlZCA9IHRydWU7XG4gICAgdG9hc3QuYWxlcnRUaGVtZSA9IGAke0FMRVJUX1NUWUxFfSAke0FMRVJUX1BPU0lUSU9OfSAke0NVU1RPTV9DTEFTU30gdG9hc3QtY29udGFpbmVyIGxhdW5jaGVkYDtcbiAgfVxuXG4gIHNob3codG9hc3QpIHtcbiAgICB0b2FzdC5zaG93ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KGFkZENsYXNzLCAyNSk7XG4gICAgLyoqXG4gICAgICogQWRkcyBhbmltYXRlIGNsYXNzIHRvIGJlIGNhbGxlZCBhZnRlciBhIHRpbWVvdXRcbiAgICAgKiovXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgICB0b2FzdC5hbmltYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB0b2FzdFRpbWVyKHRvYXN0KSB7XG4gICAgaWYgKHRvYXN0LmhpZGVEZWxheSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUodG9hc3QpO1xuICAgIH0sIHRvYXN0LmhpZGVEZWxheSk7XG4gIH1cbn1cbiJdfQ==