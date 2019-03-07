/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// APP
import { NovoToastElement } from './Toast';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
var NovoToastService = /** @class */ (function () {
    function NovoToastService(componentUtils) {
        this.componentUtils = componentUtils;
        this.references = [];
        this.themes = ['default', 'success', 'info', 'warning', 'danger'];
        this.icons = {
            default: 'bell',
            success: 'check',
            info: 'info',
            warning: 'warning',
            danger: 'remove',
        };
        this.defaults = {
            hideDelay: 3500,
            position: 'growlTopRight',
            theme: 'default',
        };
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
     * @return {?}
     */
    NovoToastService.prototype.alert = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            if (!_this._parentViewContainer) {
                console.error('No parent view container specified for the ToastService. Set it inside your main application. \nthis.toastService.parentViewContainer = view (ViewContainerRef)');
                return;
            }
            /** @type {?} */
            var toast = _this.componentUtils.appendNextToLocation(NovoToastElement, _this._parentViewContainer);
            _this.references.push(toast);
            _this.handleAlert(toast.instance, options);
            resolve(toast);
        });
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
        setTimeout(function () {
            toast.show = false;
            /** @type {?} */
            var REF = _this.references.filter(function (x) { return x.instance === toast; })[0];
            if (REF) {
                _this.references.splice(_this.references.indexOf(REF), 1);
                REF.destroy();
            }
        }, 300);
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
        setTimeout(function () {
            _this.show(toast);
        }, 20);
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
        setTimeout(function () {
            _this.hide(toast);
        }, toast.hideDelay);
    };
    NovoToastService.decorators = [
        { type: Injectable }
    ];
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
    NovoToastService.prototype.themes;
    /** @type {?} */
    NovoToastService.prototype.icons;
    /** @type {?} */
    NovoToastService.prototype.defaults;
    /** @type {?} */
    NovoToastService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFNUU7SUFrQkUsMEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWZsRCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBa0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUUsVUFBSyxHQUFRO1lBQ1gsT0FBTyxFQUFFLE1BQU07WUFDZixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFDRixhQUFRLEdBQVE7WUFDZCxTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLEtBQUssRUFBRSxTQUFTO1NBQ2pCLENBQUM7SUFFbUQsQ0FBQztJQUV0RCxzQkFBSSxpREFBbUI7Ozs7O1FBQXZCLFVBQXdCLElBQUk7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCxnQ0FBSzs7OztJQUFMLFVBQU0sT0FBTztRQUFiLGlCQWFDO1FBWkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEtBQUssQ0FDWCxpS0FB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QyxTQUFTLEdBQUcsU0FBTyxVQUFZLENBQUM7UUFDdEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxDQUFDLFVBQVUsR0FBTSxXQUFXLFNBQUksY0FBYyxTQUFJLFlBQVksOEJBQTJCLENBQUM7SUFDakcsQ0FBQzs7Ozs7SUFFRCwrQkFBSTs7OztJQUFKLFVBQUssS0FBSztRQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztRQUl6QjtZQUNFLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELHFDQUFVOzs7O0lBQVYsVUFBVyxLQUFLO1FBQWhCLGlCQU9DO1FBTkMsSUFBSSxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFDRCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Z0JBdkdGLFVBQVU7OztnQkFGRixjQUFjOztJQTBHdkIsdUJBQUM7Q0FBQSxBQXhHRCxJQXdHQztTQXZHWSxnQkFBZ0I7OztJQUMzQixnREFBMEI7O0lBQzFCLHNDQUE0Qjs7SUFDNUIsa0NBQTRFOztJQUM1RSxpQ0FNRTs7SUFDRixvQ0FJRTs7SUFFVSwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1RvYXN0RWxlbWVudCB9IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b1RvYXN0U2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBhbnk7XG4gIHJlZmVyZW5jZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgdGhlbWVzOiBBcnJheTxzdHJpbmc+ID0gWydkZWZhdWx0JywgJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddO1xuICBpY29uczogYW55ID0ge1xuICAgIGRlZmF1bHQ6ICdiZWxsJyxcbiAgICBzdWNjZXNzOiAnY2hlY2snLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICB3YXJuaW5nOiAnd2FybmluZycsXG4gICAgZGFuZ2VyOiAncmVtb3ZlJyxcbiAgfTtcbiAgZGVmYXVsdHM6IGFueSA9IHtcbiAgICBoaWRlRGVsYXk6IDM1MDAsXG4gICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0JyxcbiAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXcpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIGFsZXJ0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgVG9hc3RTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy50b2FzdFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHRvYXN0ID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmROZXh0VG9Mb2NhdGlvbihOb3ZvVG9hc3RFbGVtZW50LCB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKTtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHRvYXN0KTtcbiAgICAgIHRoaXMuaGFuZGxlQWxlcnQodG9hc3QuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICAgICAgcmVzb2x2ZSh0b2FzdCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Zpc2libGUodG9hc3QpIHtcbiAgICByZXR1cm4gdG9hc3Quc2hvdztcbiAgfVxuXG4gIGhpZGUodG9hc3QpIHtcbiAgICB0b2FzdC5hbmltYXRlID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2FzdC5zaG93ID0gZmFsc2U7XG4gICAgICBjb25zdCBSRUYgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKCh4KSA9PiB4Lmluc3RhbmNlID09PSB0b2FzdClbMF07XG4gICAgICBpZiAoUkVGKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlcy5zcGxpY2UodGhpcy5yZWZlcmVuY2VzLmluZGV4T2YoUkVGKSwgMSk7XG4gICAgICAgIFJFRi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIGhhbmRsZUFsZXJ0KHRvYXN0LCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRUb2FzdE9uU2Vzc2lvbih0b2FzdCwgb3B0aW9ucyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3codG9hc3QpO1xuICAgIH0sIDIwKTtcbiAgICBpZiAoIXRvYXN0LmlzQ2xvc2VhYmxlKSB7XG4gICAgICB0aGlzLnRvYXN0VGltZXIodG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRzKSB7XG4gICAgY29uc3QgT1BUSU9OUyA9IHR5cGVvZiBvcHRzID09PSAnb2JqZWN0JyA/IG9wdHMgOiB7fTtcblxuICAgIHRvYXN0LnBhcmVudCA9IHRoaXM7XG4gICAgdG9hc3QudGl0bGUgPSBPUFRJT05TLnRpdGxlIHx8ICcnO1xuICAgIHRvYXN0Lm1lc3NhZ2UgPSBPUFRJT05TLm1lc3NhZ2UgfHwgJyc7XG4gICAgdG9hc3QuaGlkZURlbGF5ID0gT1BUSU9OUy5oaWRlRGVsYXkgfHwgdGhpcy5kZWZhdWx0cy5oaWRlRGVsYXk7XG4gICAgdG9hc3QubGluayA9IE9QVElPTlMubGluayB8fCAnJztcbiAgICB0b2FzdC5pc0Nsb3NlYWJsZSA9IE9QVElPTlMuaXNDbG9zZWFibGUgfHwgZmFsc2U7XG5cbiAgICBjb25zdCBDVVNUT01fQ0xBU1MgPSBPUFRJT05TLmN1c3RvbUNsYXNzIHx8ICcnO1xuICAgIGNvbnN0IEFMRVJUX1NUWUxFID0gT1BUSU9OUy50aGVtZSB8fCB0aGlzLmRlZmF1bHRzLnRoZW1lO1xuICAgIGNvbnN0IEFMRVJUX1BPU0lUSU9OID0gT1BUSU9OUy5wb3NpdGlvbiB8fCB0aGlzLmRlZmF1bHRzLnBvc2l0aW9uO1xuICAgIGNvbnN0IEFMRVJUX0lDT04gPSBPUFRJT05TLmljb24gfHwgdGhpcy5pY29ucy5kZWZhdWx0O1xuXG4gICAgdG9hc3QuaWNvbkNsYXNzID0gYGJoaS0ke0FMRVJUX0lDT059YDtcbiAgICB0b2FzdC5sYXVuY2hlZCA9IHRydWU7XG4gICAgdG9hc3QuYWxlcnRUaGVtZSA9IGAke0FMRVJUX1NUWUxFfSAke0FMRVJUX1BPU0lUSU9OfSAke0NVU1RPTV9DTEFTU30gdG9hc3QtY29udGFpbmVyIGxhdW5jaGVkYDtcbiAgfVxuXG4gIHNob3codG9hc3QpIHtcbiAgICB0b2FzdC5zaG93ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KGFkZENsYXNzLCAyNSk7XG4gICAgLyoqXG4gICAgICogQWRkcyBhbmltYXRlIGNsYXNzIHRvIGJlIGNhbGxlZCBhZnRlciBhIHRpbWVvdXRcbiAgICAgKiovXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgICB0b2FzdC5hbmltYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB0b2FzdFRpbWVyKHRvYXN0KSB7XG4gICAgaWYgKHRvYXN0LmhpZGVEZWxheSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUodG9hc3QpO1xuICAgIH0sIHRvYXN0LmhpZGVEZWxheSk7XG4gIH1cbn1cbiJdfQ==