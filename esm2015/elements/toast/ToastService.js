/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
     * @return {?}
     */
    alert(options) {
        return new Promise((resolve) => {
            if (!this._parentViewContainer) {
                console.error('No parent view container specified for the ToastService. Set it inside your main application. \nthis.toastService.parentViewContainer = view (ViewContainerRef)');
                return;
            }
            /** @type {?} */
            let toast = this.componentUtils.appendNextToLocation(NovoToastElement, this._parentViewContainer);
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
    /** @type {?} */
    NovoToastService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHNUUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWlCM0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZmxELGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFrQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RSxVQUFLLEdBQVE7WUFDWCxPQUFPLEVBQUUsTUFBTTtZQUNmLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztRQUNGLGFBQVEsR0FBUTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLGVBQWU7WUFDekIsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQztJQUVtRCxDQUFDOzs7OztJQUV0RCxJQUFJLG1CQUFtQixDQUFDLElBQUk7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELEtBQUssQ0FBQyxPQUFPO1FBQ1gsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQ1gsaUtBQWlLLENB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R0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLFdBQVcsSUFBSSxjQUFjLElBQUksWUFBWSwyQkFBMkIsQ0FBQztJQUNqRyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFLO1FBQ1IsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7O1FBSXpCLFNBQVMsUUFBUTtZQUNmLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OztZQXZHRixVQUFVOzs7O1lBRkYsY0FBYzs7OztJQUlyQixnREFBMEI7O0lBQzFCLHNDQUE0Qjs7SUFDNUIsa0NBQTRFOztJQUM1RSxpQ0FNRTs7SUFDRixvQ0FJRTs7SUFFVSwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1RvYXN0RWxlbWVudCB9IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b1RvYXN0U2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBhbnk7XG4gIHJlZmVyZW5jZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgdGhlbWVzOiBBcnJheTxzdHJpbmc+ID0gWydkZWZhdWx0JywgJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddO1xuICBpY29uczogYW55ID0ge1xuICAgIGRlZmF1bHQ6ICdiZWxsJyxcbiAgICBzdWNjZXNzOiAnY2hlY2snLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICB3YXJuaW5nOiAnd2FybmluZycsXG4gICAgZGFuZ2VyOiAncmVtb3ZlJyxcbiAgfTtcbiAgZGVmYXVsdHM6IGFueSA9IHtcbiAgICBoaWRlRGVsYXk6IDM1MDAsXG4gICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0JyxcbiAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXcpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIGFsZXJ0KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICghdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICdObyBwYXJlbnQgdmlldyBjb250YWluZXIgc3BlY2lmaWVkIGZvciB0aGUgVG9hc3RTZXJ2aWNlLiBTZXQgaXQgaW5zaWRlIHlvdXIgbWFpbiBhcHBsaWNhdGlvbi4gXFxudGhpcy50b2FzdFNlcnZpY2UucGFyZW50Vmlld0NvbnRhaW5lciA9IHZpZXcgKFZpZXdDb250YWluZXJSZWYpJyxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgbGV0IHRvYXN0ID0gdGhpcy5jb21wb25lbnRVdGlscy5hcHBlbmROZXh0VG9Mb2NhdGlvbihOb3ZvVG9hc3RFbGVtZW50LCB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKTtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHRvYXN0KTtcbiAgICAgIHRoaXMuaGFuZGxlQWxlcnQodG9hc3QuaW5zdGFuY2UsIG9wdGlvbnMpO1xuICAgICAgcmVzb2x2ZSh0b2FzdCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Zpc2libGUodG9hc3QpIHtcbiAgICByZXR1cm4gdG9hc3Quc2hvdztcbiAgfVxuXG4gIGhpZGUodG9hc3QpIHtcbiAgICB0b2FzdC5hbmltYXRlID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2FzdC5zaG93ID0gZmFsc2U7XG4gICAgICBjb25zdCBSRUYgPSB0aGlzLnJlZmVyZW5jZXMuZmlsdGVyKCh4KSA9PiB4Lmluc3RhbmNlID09PSB0b2FzdClbMF07XG4gICAgICBpZiAoUkVGKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlcy5zcGxpY2UodGhpcy5yZWZlcmVuY2VzLmluZGV4T2YoUkVGKSwgMSk7XG4gICAgICAgIFJFRi5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSwgMzAwKTtcbiAgfVxuXG4gIGhhbmRsZUFsZXJ0KHRvYXN0LCBvcHRpb25zKSB7XG4gICAgdGhpcy5zZXRUb2FzdE9uU2Vzc2lvbih0b2FzdCwgb3B0aW9ucyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3codG9hc3QpO1xuICAgIH0sIDIwKTtcbiAgICBpZiAoIXRvYXN0LmlzQ2xvc2VhYmxlKSB7XG4gICAgICB0aGlzLnRvYXN0VGltZXIodG9hc3QpO1xuICAgIH1cbiAgfVxuXG4gIHNldFRvYXN0T25TZXNzaW9uKHRvYXN0LCBvcHRzKSB7XG4gICAgY29uc3QgT1BUSU9OUyA9IHR5cGVvZiBvcHRzID09PSAnb2JqZWN0JyA/IG9wdHMgOiB7fTtcblxuICAgIHRvYXN0LnBhcmVudCA9IHRoaXM7XG4gICAgdG9hc3QudGl0bGUgPSBPUFRJT05TLnRpdGxlIHx8ICcnO1xuICAgIHRvYXN0Lm1lc3NhZ2UgPSBPUFRJT05TLm1lc3NhZ2UgfHwgJyc7XG4gICAgdG9hc3QuaGlkZURlbGF5ID0gT1BUSU9OUy5oaWRlRGVsYXkgfHwgdGhpcy5kZWZhdWx0cy5oaWRlRGVsYXk7XG4gICAgdG9hc3QubGluayA9IE9QVElPTlMubGluayB8fCAnJztcbiAgICB0b2FzdC5pc0Nsb3NlYWJsZSA9IE9QVElPTlMuaXNDbG9zZWFibGUgfHwgZmFsc2U7XG5cbiAgICBjb25zdCBDVVNUT01fQ0xBU1MgPSBPUFRJT05TLmN1c3RvbUNsYXNzIHx8ICcnO1xuICAgIGNvbnN0IEFMRVJUX1NUWUxFID0gT1BUSU9OUy50aGVtZSB8fCB0aGlzLmRlZmF1bHRzLnRoZW1lO1xuICAgIGNvbnN0IEFMRVJUX1BPU0lUSU9OID0gT1BUSU9OUy5wb3NpdGlvbiB8fCB0aGlzLmRlZmF1bHRzLnBvc2l0aW9uO1xuICAgIGNvbnN0IEFMRVJUX0lDT04gPSBPUFRJT05TLmljb24gfHwgdGhpcy5pY29ucy5kZWZhdWx0O1xuXG4gICAgdG9hc3QuaWNvbkNsYXNzID0gYGJoaS0ke0FMRVJUX0lDT059YDtcbiAgICB0b2FzdC5sYXVuY2hlZCA9IHRydWU7XG4gICAgdG9hc3QuYWxlcnRUaGVtZSA9IGAke0FMRVJUX1NUWUxFfSAke0FMRVJUX1BPU0lUSU9OfSAke0NVU1RPTV9DTEFTU30gdG9hc3QtY29udGFpbmVyIGxhdW5jaGVkYDtcbiAgfVxuXG4gIHNob3codG9hc3QpIHtcbiAgICB0b2FzdC5zaG93ID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KGFkZENsYXNzLCAyNSk7XG4gICAgLyoqXG4gICAgICogQWRkcyBhbmltYXRlIGNsYXNzIHRvIGJlIGNhbGxlZCBhZnRlciBhIHRpbWVvdXRcbiAgICAgKiovXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3MoKSB7XG4gICAgICB0b2FzdC5hbmltYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB0b2FzdFRpbWVyKHRvYXN0KSB7XG4gICAgaWYgKHRvYXN0LmhpZGVEZWxheSA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhpZGUodG9hc3QpO1xuICAgIH0sIHRvYXN0LmhpZGVEZWxheSk7XG4gIH1cbn1cbiJdfQ==