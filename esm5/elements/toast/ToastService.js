/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return new Promise(function (resolve) {
            if (!_this._parentViewContainer) {
                console.error('No parent view container specified for the ToastService. Set it inside your main application. \nthis.toastService.parentViewContainer = view (ViewContainerRef)');
                return;
            }
            /** @type {?} */
            var toast = _this.componentUtils.appendNextToLocation(toastElement, _this._parentViewContainer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFNNUUsa0NBU0M7OztJQVJDLDZCQUFlOztJQUNmLCtCQUFpQjs7SUFDakIsNEJBQWtCOztJQUNsQiw2QkFBb0I7O0lBQ3BCLGlDQUFtQjs7SUFDbkIsZ0NBQTBCOztJQUMxQixtQ0FBc0I7O0lBQ3RCLG1DQUFxQjs7QUFHdkI7SUFPRSwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSmxELGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7UUFDbEcsYUFBUSxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRXRELHNCQUFJLGlEQUFtQjs7Ozs7UUFBdkIsVUFBd0IsSUFBSTtZQUMxQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7Ozs7SUFFRCxnQ0FBSzs7Ozs7SUFBTCxVQUFNLE9BQXFCLEVBQUUsWUFBb0M7UUFBakUsaUJBYUM7UUFiNEIsNkJBQUEsRUFBQSwrQkFBb0M7UUFDL0QsT0FBTyxJQUFJLE9BQU8s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LFFBQVE7O1lBQzNELFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztRQUVyRCxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQU8sVUFBWSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxVQUFVLEdBQU0sV0FBVyxTQUFJLGNBQWMsU0FBSSxZQUFZLDhCQUEyQixDQUFDO0lBQ2pHLENBQUM7Ozs7O0lBRUQsK0JBQUk7Ozs7SUFBSixVQUFLLEtBQUs7UUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7UUFJekIsU0FBUyxRQUFRO1lBQ2YsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQscUNBQVU7Ozs7SUFBVixVQUFXLEtBQUs7UUFBaEIsaUJBT0M7UUFOQyxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QixDQUFDOztnQkE1RkYsVUFBVTs7OztnQkFqQkYsY0FBYzs7SUE4R3ZCLHVCQUFDO0NBQUEsQUE3RkQsSUE2RkM7U0E1RlksZ0JBQWdCOzs7SUFDM0IsZ0RBQTBCOztJQUMxQixzQ0FBNEI7O0lBQzVCLGlDQUFrRzs7SUFDbEcsb0NBQTRFOzs7OztJQUVoRSwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1RvYXN0RWxlbWVudCB9IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5leHBvcnQgdHlwZSBUb2FzdFRoZW1lcyA9ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInIHwgJ3Bvc2l0aXZlJyB8IHN0cmluZztcbmV4cG9ydCB0eXBlIFRvYXN0SWNvbnMgPSAnYmVsbCcgfCAnY2hlY2snIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ3JlbW92ZScgfCAnY2F1dGlvbicgfCAndGltZXMnIHwgJ2NvZmZlZScgfCAnZGFuZ2VyJyB8IHN0cmluZztcbmV4cG9ydCB0eXBlIFRvYXN0UG9zaXRpb25zID0gJ2ZpeGVkVG9wJyB8ICdmaXhlZEJvdHRvbScgfCAnZ3Jvd2xUb3BSaWdodCcgfCAnZ3Jvd2xUb3BMZWZ0JyB8ICdncm93bEJvdHRvbVJpZ2h0JyB8ICdncm93bEJvdHRvbUxlZnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0T3B0aW9ucyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBpY29uPzogVG9hc3RJY29ucztcbiAgdGhlbWU/OiBUb2FzdFRoZW1lcztcbiAgaGlkZURlbGF5PzogbnVtYmVyO1xuICBwb3NpdGlvbj86IFRvYXN0UG9zaXRpb25zO1xuICBpc0Nsb3NlYWJsZT86IGJvb2xlYW47XG4gIGN1c3RvbUNsYXNzPzogc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b1RvYXN0U2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBhbnk7XG4gIHJlZmVyZW5jZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgaWNvbnMgPSB7IGRlZmF1bHQ6ICdiZWxsJywgc3VjY2VzczogJ2NoZWNrJywgaW5mbzogJ2luZm8nLCB3YXJuaW5nOiAnd2FybmluZycsIGRhbmdlcjogJ3JlbW92ZScgfTtcbiAgZGVmYXVsdHMgPSB7IGhpZGVEZWxheTogMzUwMCwgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0JywgdGhlbWU6ICdkZWZhdWx0JyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXcpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIGFsZXJ0KG9wdGlvbnM6IFRvYXN0T3B0aW9ucywgdG9hc3RFbGVtZW50OiBhbnkgPSBOb3ZvVG9hc3RFbGVtZW50KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgVG9hc3RTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy50b2FzdFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHRvYXN0ID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmROZXh0VG9Mb2NhdGlvbih0b2FzdEVsZW1lbnQsIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpO1xuICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2godG9hc3QpO1xuICAgICAgdGhpcy5oYW5kbGVBbGVydCh0b2FzdC5pbnN0YW5jZSwgb3B0aW9ucyk7XG4gICAgICByZXNvbHZlKHRvYXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzVmlzaWJsZSh0b2FzdCkge1xuICAgIHJldHVybiB0b2FzdC5zaG93O1xuICB9XG5cbiAgaGlkZSh0b2FzdCkge1xuICAgIHRvYXN0LmFuaW1hdGUgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvYXN0LnNob3cgPSBmYWxzZTtcbiAgICAgIGNvbnN0IFJFRiA9IHRoaXMucmVmZXJlbmNlcy5maWx0ZXIoKHgpID0+IHguaW5zdGFuY2UgPT09IHRvYXN0KVswXTtcbiAgICAgIGlmIChSRUYpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnNwbGljZSh0aGlzLnJlZmVyZW5jZXMuaW5kZXhPZihSRUYpLCAxKTtcbiAgICAgICAgUkVGLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuICB9XG5cbiAgaGFuZGxlQWxlcnQodG9hc3QsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRpb25zKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvdyh0b2FzdCk7XG4gICAgfSwgMjApO1xuICAgIGlmICghdG9hc3QuaXNDbG9zZWFibGUpIHtcbiAgICAgIHRoaXMudG9hc3RUaW1lcih0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdHMpIHtcbiAgICBjb25zdCBPUFRJT05TID0gdHlwZW9mIG9wdHMgPT09ICdvYmplY3QnID8gb3B0cyA6IHt9O1xuXG4gICAgdG9hc3QucGFyZW50ID0gdGhpcztcbiAgICB0b2FzdC50aXRsZSA9IE9QVElPTlMudGl0bGUgfHwgJyc7XG4gICAgdG9hc3QubWVzc2FnZSA9IE9QVElPTlMubWVzc2FnZSB8fCAnJztcbiAgICB0b2FzdC5oaWRlRGVsYXkgPSBPUFRJT05TLmhpZGVEZWxheSB8fCB0aGlzLmRlZmF1bHRzLmhpZGVEZWxheTtcbiAgICB0b2FzdC5saW5rID0gT1BUSU9OUy5saW5rIHx8ICcnO1xuICAgIHRvYXN0LmlzQ2xvc2VhYmxlID0gT1BUSU9OUy5pc0Nsb3NlYWJsZSB8fCBmYWxzZTtcblxuICAgIGNvbnN0IENVU1RPTV9DTEFTUyA9IE9QVElPTlMuY3VzdG9tQ2xhc3MgfHwgJyc7XG4gICAgY29uc3QgQUxFUlRfU1RZTEUgPSBPUFRJT05TLnRoZW1lIHx8IHRoaXMuZGVmYXVsdHMudGhlbWU7XG4gICAgY29uc3QgQUxFUlRfUE9TSVRJT04gPSBPUFRJT05TLnBvc2l0aW9uIHx8IHRoaXMuZGVmYXVsdHMucG9zaXRpb247XG4gICAgY29uc3QgQUxFUlRfSUNPTiA9IE9QVElPTlMuaWNvbiB8fCB0aGlzLmljb25zLmRlZmF1bHQ7XG5cbiAgICB0b2FzdC5pY29uQ2xhc3MgPSBgYmhpLSR7QUxFUlRfSUNPTn1gO1xuICAgIHRvYXN0LmxhdW5jaGVkID0gdHJ1ZTtcbiAgICB0b2FzdC5hbGVydFRoZW1lID0gYCR7QUxFUlRfU1RZTEV9ICR7QUxFUlRfUE9TSVRJT059ICR7Q1VTVE9NX0NMQVNTfSB0b2FzdC1jb250YWluZXIgbGF1bmNoZWRgO1xuICB9XG5cbiAgc2hvdyh0b2FzdCkge1xuICAgIHRvYXN0LnNob3cgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoYWRkQ2xhc3MsIDI1KTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGFuaW1hdGUgY2xhc3MgdG8gYmUgY2FsbGVkIGFmdGVyIGEgdGltZW91dFxuICAgICAqKi9cbiAgICBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIHRvYXN0LmFuaW1hdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRvYXN0VGltZXIodG9hc3QpIHtcbiAgICBpZiAodG9hc3QuaGlkZURlbGF5IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSh0b2FzdCk7XG4gICAgfSwgdG9hc3QuaGlkZURlbGF5KTtcbiAgfVxufVxuIl19