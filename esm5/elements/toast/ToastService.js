/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    NovoToastService.prototype.themes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFNUU7SUFrQkUsMEJBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWZsRCxlQUFVLEdBQWUsRUFBRSxDQUFDO1FBQzVCLFdBQU0sR0FBa0IsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUUsVUFBSyxHQUFRO1lBQ1gsT0FBTyxFQUFFLE1BQU07WUFDZixPQUFPLEVBQUUsT0FBTztZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7UUFDRixhQUFRLEdBQVE7WUFDZCxTQUFTLEVBQUUsSUFBSTtZQUNmLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLEtBQUssRUFBRSxTQUFTO1NBQ2pCLENBQUM7SUFFbUQsQ0FBQztJQUV0RCxzQkFBSSxpREFBbUI7Ozs7O1FBQXZCLFVBQXdCLElBQUk7WUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCxnQ0FBSzs7OztJQUFMLFVBQU0sT0FBTztRQUFiLGlCQWFDO1FBWkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDekIsSUFBSSxDQUFDLEtBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsT0FBTyxDQUFDLEtBQUssQ0FDWCxpS0FB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QyxTQUFTLEdBQUcsU0FBTyxVQUFZLENBQUM7UUFDdEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxDQUFDLFVBQVUsR0FBTSxXQUFXLFNBQUksY0FBYyxTQUFJLFlBQVksOEJBQTJCLENBQUM7SUFDakcsQ0FBQzs7Ozs7SUFFRCwrQkFBSTs7OztJQUFKLFVBQUssS0FBSztRQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztRQUl6QixTQUFTLFFBQVE7WUFDZixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBVTs7OztJQUFWLFVBQVcsS0FBSztRQUFoQixpQkFPQztRQU5DLElBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7O2dCQXZHRixVQUFVOzs7O2dCQUZGLGNBQWM7O0lBMEd2Qix1QkFBQztDQUFBLEFBeEdELElBd0dDO1NBdkdZLGdCQUFnQjs7O0lBQzNCLGdEQUEwQjs7SUFDMUIsc0NBQTRCOztJQUM1QixrQ0FBNEU7O0lBQzVFLGlDQU1FOztJQUNGLG9DQUlFOzs7OztJQUVVLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvVG9hc3RFbGVtZW50IH0gZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvVG9hc3RTZXJ2aWNlIHtcbiAgX3BhcmVudFZpZXdDb250YWluZXI6IGFueTtcbiAgcmVmZXJlbmNlczogQXJyYXk8YW55PiA9IFtdO1xuICB0aGVtZXM6IEFycmF5PHN0cmluZz4gPSBbJ2RlZmF1bHQnLCAnc3VjY2VzcycsICdpbmZvJywgJ3dhcm5pbmcnLCAnZGFuZ2VyJ107XG4gIGljb25zOiBhbnkgPSB7XG4gICAgZGVmYXVsdDogJ2JlbGwnLFxuICAgIHN1Y2Nlc3M6ICdjaGVjaycsXG4gICAgaW5mbzogJ2luZm8nLFxuICAgIHdhcm5pbmc6ICd3YXJuaW5nJyxcbiAgICBkYW5nZXI6ICdyZW1vdmUnLFxuICB9O1xuICBkZWZhdWx0czogYW55ID0ge1xuICAgIGhpZGVEZWxheTogMzUwMCxcbiAgICBwb3NpdGlvbjogJ2dyb3dsVG9wUmlnaHQnLFxuICAgIHRoZW1lOiAnZGVmYXVsdCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgc2V0IHBhcmVudFZpZXdDb250YWluZXIodmlldykge1xuICAgIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICB9XG5cbiAgYWxlcnQob3B0aW9ucykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ05vIHBhcmVudCB2aWV3IGNvbnRhaW5lciBzcGVjaWZpZWQgZm9yIHRoZSBUb2FzdFNlcnZpY2UuIFNldCBpdCBpbnNpZGUgeW91ciBtYWluIGFwcGxpY2F0aW9uLiBcXG50aGlzLnRvYXN0U2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldyAoVmlld0NvbnRhaW5lclJlZiknLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgdG9hc3QgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKE5vdm9Ub2FzdEVsZW1lbnQsIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpO1xuICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2godG9hc3QpO1xuICAgICAgdGhpcy5oYW5kbGVBbGVydCh0b2FzdC5pbnN0YW5jZSwgb3B0aW9ucyk7XG4gICAgICByZXNvbHZlKHRvYXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzVmlzaWJsZSh0b2FzdCkge1xuICAgIHJldHVybiB0b2FzdC5zaG93O1xuICB9XG5cbiAgaGlkZSh0b2FzdCkge1xuICAgIHRvYXN0LmFuaW1hdGUgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvYXN0LnNob3cgPSBmYWxzZTtcbiAgICAgIGNvbnN0IFJFRiA9IHRoaXMucmVmZXJlbmNlcy5maWx0ZXIoKHgpID0+IHguaW5zdGFuY2UgPT09IHRvYXN0KVswXTtcbiAgICAgIGlmIChSRUYpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnNwbGljZSh0aGlzLnJlZmVyZW5jZXMuaW5kZXhPZihSRUYpLCAxKTtcbiAgICAgICAgUkVGLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuICB9XG5cbiAgaGFuZGxlQWxlcnQodG9hc3QsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRpb25zKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvdyh0b2FzdCk7XG4gICAgfSwgMjApO1xuICAgIGlmICghdG9hc3QuaXNDbG9zZWFibGUpIHtcbiAgICAgIHRoaXMudG9hc3RUaW1lcih0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdHMpIHtcbiAgICBjb25zdCBPUFRJT05TID0gdHlwZW9mIG9wdHMgPT09ICdvYmplY3QnID8gb3B0cyA6IHt9O1xuXG4gICAgdG9hc3QucGFyZW50ID0gdGhpcztcbiAgICB0b2FzdC50aXRsZSA9IE9QVElPTlMudGl0bGUgfHwgJyc7XG4gICAgdG9hc3QubWVzc2FnZSA9IE9QVElPTlMubWVzc2FnZSB8fCAnJztcbiAgICB0b2FzdC5oaWRlRGVsYXkgPSBPUFRJT05TLmhpZGVEZWxheSB8fCB0aGlzLmRlZmF1bHRzLmhpZGVEZWxheTtcbiAgICB0b2FzdC5saW5rID0gT1BUSU9OUy5saW5rIHx8ICcnO1xuICAgIHRvYXN0LmlzQ2xvc2VhYmxlID0gT1BUSU9OUy5pc0Nsb3NlYWJsZSB8fCBmYWxzZTtcblxuICAgIGNvbnN0IENVU1RPTV9DTEFTUyA9IE9QVElPTlMuY3VzdG9tQ2xhc3MgfHwgJyc7XG4gICAgY29uc3QgQUxFUlRfU1RZTEUgPSBPUFRJT05TLnRoZW1lIHx8IHRoaXMuZGVmYXVsdHMudGhlbWU7XG4gICAgY29uc3QgQUxFUlRfUE9TSVRJT04gPSBPUFRJT05TLnBvc2l0aW9uIHx8IHRoaXMuZGVmYXVsdHMucG9zaXRpb247XG4gICAgY29uc3QgQUxFUlRfSUNPTiA9IE9QVElPTlMuaWNvbiB8fCB0aGlzLmljb25zLmRlZmF1bHQ7XG5cbiAgICB0b2FzdC5pY29uQ2xhc3MgPSBgYmhpLSR7QUxFUlRfSUNPTn1gO1xuICAgIHRvYXN0LmxhdW5jaGVkID0gdHJ1ZTtcbiAgICB0b2FzdC5hbGVydFRoZW1lID0gYCR7QUxFUlRfU1RZTEV9ICR7QUxFUlRfUE9TSVRJT059ICR7Q1VTVE9NX0NMQVNTfSB0b2FzdC1jb250YWluZXIgbGF1bmNoZWRgO1xuICB9XG5cbiAgc2hvdyh0b2FzdCkge1xuICAgIHRvYXN0LnNob3cgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoYWRkQ2xhc3MsIDI1KTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGFuaW1hdGUgY2xhc3MgdG8gYmUgY2FsbGVkIGFmdGVyIGEgdGltZW91dFxuICAgICAqKi9cbiAgICBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIHRvYXN0LmFuaW1hdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRvYXN0VGltZXIodG9hc3QpIHtcbiAgICBpZiAodG9hc3QuaGlkZURlbGF5IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSh0b2FzdCk7XG4gICAgfSwgdG9hc3QuaGlkZURlbGF5KTtcbiAgfVxufVxuIl19