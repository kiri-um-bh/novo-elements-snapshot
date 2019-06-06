/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable } from '@angular/core';
// APP
import { NovoToastElement } from './Toast';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
export class NovoToastService {
    /**
     * @param {?} componentUtils
     */
    constructor(componentUtils) {
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
    /**
     * @param {?} view
     * @return {?}
     */
    set parentViewContainer(view) {
        this._parentViewContainer = view;
    }
    /**
     * @param {?} options
     * @param {?=} toastElement
     * @return {?}
     */
    alert(options, toastElement = NovoToastElement) {
        return new Promise((resolve) => {
            if (!this._parentViewContainer) {
                console.error('No parent view container specified for the ToastService. Set it inside your main application. \nthis.toastService.parentViewContainer = view (ViewContainerRef)');
                return;
            }
            /** @type {?} */
            const toast = this.componentUtils.append(toastElement, this._parentViewContainer);
            this.references.push(toast);
            this.handleAlert(toast.instance, options);
            resolve(toast);
        });
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    isVisible(toast) {
        return toast.show;
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    hide(toast) {
        toast.animate = false;
        setTimeout(() => {
            toast.show = false;
            /** @type {?} */
            const REF = this.references.filter((x) => x.instance === toast)[0];
            if (REF) {
                this.references.splice(this.references.indexOf(REF), 1);
                REF.destroy();
            }
        }, 300);
    }
    /**
     * @param {?} toast
     * @param {?} options
     * @return {?}
     */
    handleAlert(toast, options) {
        this.setToastOnSession(toast, options);
        setTimeout(() => {
            this.show(toast);
        }, 20);
        if (!toast.isCloseable) {
            this.toastTimer(toast);
        }
    }
    /**
     * @param {?} toast
     * @param {?} opts
     * @return {?}
     */
    setToastOnSession(toast, opts) {
        /** @type {?} */
        const OPTIONS = typeof opts === 'object' ? opts : {};
        toast.parent = this;
        toast.title = OPTIONS.title || '';
        toast.message = OPTIONS.message || '';
        toast.hideDelay = OPTIONS.hideDelay || this.defaults.hideDelay;
        toast.link = OPTIONS.link || '';
        toast.isCloseable = OPTIONS.isCloseable || false;
        /** @type {?} */
        const CUSTOM_CLASS = OPTIONS.customClass || '';
        /** @type {?} */
        const ALERT_STYLE = OPTIONS.theme || this.defaults.theme;
        /** @type {?} */
        const ALERT_POSITION = OPTIONS.position || this.defaults.position;
        /** @type {?} */
        const ALERT_ICON = OPTIONS.icon || this.icons.default;
        toast.iconClass = `bhi-${ALERT_ICON}`;
        toast.launched = true;
        toast.alertTheme = `${ALERT_STYLE} ${ALERT_POSITION} ${CUSTOM_CLASS} toast-container launched`;
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    show(toast) {
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
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    toastTimer(toast) {
        if (toast.hideDelay < 0) {
            return;
        }
        setTimeout(() => {
            this.hide(toast);
        }, toast.hideDelay);
    }
}
NovoToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NovoToastService.ctorParameters = () => [
    { type: ComponentUtils }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHNUUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWlCM0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZmxELGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFrQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RSxVQUFLLEdBQVE7WUFDWCxPQUFPLEVBQUUsTUFBTTtZQUNmLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztRQUNGLGFBQVEsR0FBUTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLGVBQWU7WUFDekIsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQztJQUVtRCxDQUFDOzs7OztJQUV0RCxJQUFJLG1CQUFtQixDQUFDLElBQUk7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBTyxFQUFFLGVBQW9CLGdCQUFnQjtRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsT0FBTyxDQUFD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LEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxXQUFXLElBQUksY0FBYyxJQUFJLFlBQVksMkJBQTJCLENBQUM7SUFDakcsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsS0FBSztRQUNSLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztRQUl6QixTQUFTLFFBQVE7WUFDZixLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBSztRQUNkLElBQUksS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7WUF2R0YsVUFBVTs7OztZQUZGLGNBQWM7Ozs7SUFJckIsZ0RBQTBCOztJQUMxQixzQ0FBNEI7O0lBQzVCLGtDQUE0RTs7SUFDNUUsaUNBTUU7O0lBQ0Ysb0NBSUU7Ozs7O0lBRVUsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9Ub2FzdEVsZW1lbnQgfSBmcm9tICcuL1RvYXN0JztcbmltcG9ydCB7IENvbXBvbmVudFV0aWxzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tcG9uZW50LXV0aWxzL0NvbXBvbmVudFV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdm9Ub2FzdFNlcnZpY2Uge1xuICBfcGFyZW50Vmlld0NvbnRhaW5lcjogYW55O1xuICByZWZlcmVuY2VzOiBBcnJheTxhbnk+ID0gW107XG4gIHRoZW1lczogQXJyYXk8c3RyaW5nPiA9IFsnZGVmYXVsdCcsICdzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInXTtcbiAgaWNvbnM6IGFueSA9IHtcbiAgICBkZWZhdWx0OiAnYmVsbCcsXG4gICAgc3VjY2VzczogJ2NoZWNrJyxcbiAgICBpbmZvOiAnaW5mbycsXG4gICAgd2FybmluZzogJ3dhcm5pbmcnLFxuICAgIGRhbmdlcjogJ3JlbW92ZScsXG4gIH07XG4gIGRlZmF1bHRzOiBhbnkgPSB7XG4gICAgaGlkZURlbGF5OiAzNTAwLFxuICAgIHBvc2l0aW9uOiAnZ3Jvd2xUb3BSaWdodCcsXG4gICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvbmVudFV0aWxzOiBDb21wb25lbnRVdGlscykge31cblxuICBzZXQgcGFyZW50Vmlld0NvbnRhaW5lcih2aWV3KSB7XG4gICAgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXc7XG4gIH1cblxuICBhbGVydChvcHRpb25zLCB0b2FzdEVsZW1lbnQ6IGFueSA9IE5vdm9Ub2FzdEVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgVG9hc3RTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy50b2FzdFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdG9hc3QgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZCh0b2FzdEVsZW1lbnQsIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIpO1xuICAgICAgdGhpcy5yZWZlcmVuY2VzLnB1c2godG9hc3QpO1xuICAgICAgdGhpcy5oYW5kbGVBbGVydCh0b2FzdC5pbnN0YW5jZSwgb3B0aW9ucyk7XG4gICAgICByZXNvbHZlKHRvYXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzVmlzaWJsZSh0b2FzdCkge1xuICAgIHJldHVybiB0b2FzdC5zaG93O1xuICB9XG5cbiAgaGlkZSh0b2FzdCkge1xuICAgIHRvYXN0LmFuaW1hdGUgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRvYXN0LnNob3cgPSBmYWxzZTtcbiAgICAgIGNvbnN0IFJFRiA9IHRoaXMucmVmZXJlbmNlcy5maWx0ZXIoKHgpID0+IHguaW5zdGFuY2UgPT09IHRvYXN0KVswXTtcbiAgICAgIGlmIChSRUYpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzLnNwbGljZSh0aGlzLnJlZmVyZW5jZXMuaW5kZXhPZihSRUYpLCAxKTtcbiAgICAgICAgUkVGLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuICB9XG5cbiAgaGFuZGxlQWxlcnQodG9hc3QsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRpb25zKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvdyh0b2FzdCk7XG4gICAgfSwgMjApO1xuICAgIGlmICghdG9hc3QuaXNDbG9zZWFibGUpIHtcbiAgICAgIHRoaXMudG9hc3RUaW1lcih0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdHMpIHtcbiAgICBjb25zdCBPUFRJT05TID0gdHlwZW9mIG9wdHMgPT09ICdvYmplY3QnID8gb3B0cyA6IHt9O1xuXG4gICAgdG9hc3QucGFyZW50ID0gdGhpcztcbiAgICB0b2FzdC50aXRsZSA9IE9QVElPTlMudGl0bGUgfHwgJyc7XG4gICAgdG9hc3QubWVzc2FnZSA9IE9QVElPTlMubWVzc2FnZSB8fCAnJztcbiAgICB0b2FzdC5oaWRlRGVsYXkgPSBPUFRJT05TLmhpZGVEZWxheSB8fCB0aGlzLmRlZmF1bHRzLmhpZGVEZWxheTtcbiAgICB0b2FzdC5saW5rID0gT1BUSU9OUy5saW5rIHx8ICcnO1xuICAgIHRvYXN0LmlzQ2xvc2VhYmxlID0gT1BUSU9OUy5pc0Nsb3NlYWJsZSB8fCBmYWxzZTtcblxuICAgIGNvbnN0IENVU1RPTV9DTEFTUyA9IE9QVElPTlMuY3VzdG9tQ2xhc3MgfHwgJyc7XG4gICAgY29uc3QgQUxFUlRfU1RZTEUgPSBPUFRJT05TLnRoZW1lIHx8IHRoaXMuZGVmYXVsdHMudGhlbWU7XG4gICAgY29uc3QgQUxFUlRfUE9TSVRJT04gPSBPUFRJT05TLnBvc2l0aW9uIHx8IHRoaXMuZGVmYXVsdHMucG9zaXRpb247XG4gICAgY29uc3QgQUxFUlRfSUNPTiA9IE9QVElPTlMuaWNvbiB8fCB0aGlzLmljb25zLmRlZmF1bHQ7XG5cbiAgICB0b2FzdC5pY29uQ2xhc3MgPSBgYmhpLSR7QUxFUlRfSUNPTn1gO1xuICAgIHRvYXN0LmxhdW5jaGVkID0gdHJ1ZTtcbiAgICB0b2FzdC5hbGVydFRoZW1lID0gYCR7QUxFUlRfU1RZTEV9ICR7QUxFUlRfUE9TSVRJT059ICR7Q1VTVE9NX0NMQVNTfSB0b2FzdC1jb250YWluZXIgbGF1bmNoZWRgO1xuICB9XG5cbiAgc2hvdyh0b2FzdCkge1xuICAgIHRvYXN0LnNob3cgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoYWRkQ2xhc3MsIDI1KTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGFuaW1hdGUgY2xhc3MgdG8gYmUgY2FsbGVkIGFmdGVyIGEgdGltZW91dFxuICAgICAqKi9cbiAgICBmdW5jdGlvbiBhZGRDbGFzcygpIHtcbiAgICAgIHRvYXN0LmFuaW1hdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRvYXN0VGltZXIodG9hc3QpIHtcbiAgICBpZiAodG9hc3QuaGlkZURlbGF5IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaGlkZSh0b2FzdCk7XG4gICAgfSwgdG9hc3QuaGlkZURlbGF5KTtcbiAgfVxufVxuIl19