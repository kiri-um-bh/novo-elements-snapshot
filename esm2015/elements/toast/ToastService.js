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
            let toast = this.componentUtils.appendNextToLocation(toastElement, this._parentViewContainer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHNUUsTUFBTSxPQUFPLGdCQUFnQjs7OztJQWlCM0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBZmxELGVBQVUsR0FBZSxFQUFFLENBQUM7UUFDNUIsV0FBTSxHQUFrQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM1RSxVQUFLLEdBQVE7WUFDWCxPQUFPLEVBQUUsTUFBTTtZQUNmLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLFNBQVM7WUFDbEIsTUFBTSxFQUFFLFFBQVE7U0FDakIsQ0FBQztRQUNGLGFBQVEsR0FBUTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLGVBQWU7WUFDekIsS0FBSyxFQUFFLFNBQVM7U0FDakIsQ0FBQztJQUVtRCxDQUFDOzs7OztJQUV0RCxJQUFJLG1CQUFtQixDQUFDLElBQUk7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7Ozs7SUFFRCxLQUFLLENBQUMsT0FBTyxFQUFFLGVBQW9CLGdCQUFnQjtRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsT0FBTyxDQUFD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dEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdEIsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLFdBQVcsSUFBSSxjQUFjLElBQUksWUFBWSwyQkFBMkIsQ0FBQztJQUNqRyxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxLQUFLO1FBQ1IsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7O1FBSXpCLFNBQVMsUUFBUTtZQUNmLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFLO1FBQ2QsSUFBSSxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFDRCxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7OztZQXZHRixVQUFVOzs7O1lBRkYsY0FBYzs7OztJQUlyQixnREFBMEI7O0lBQzFCLHNDQUE0Qjs7SUFDNUIsa0NBQTRFOztJQUM1RSxpQ0FNRTs7SUFDRixvQ0FJRTs7Ozs7SUFFVSwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b1RvYXN0RWxlbWVudCB9IGZyb20gJy4vVG9hc3QnO1xuaW1wb3J0IHsgQ29tcG9uZW50VXRpbHMgfSBmcm9tICcuLi8uLi91dGlscy9jb21wb25lbnQtdXRpbHMvQ29tcG9uZW50VXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTm92b1RvYXN0U2VydmljZSB7XG4gIF9wYXJlbnRWaWV3Q29udGFpbmVyOiBhbnk7XG4gIHJlZmVyZW5jZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgdGhlbWVzOiBBcnJheTxzdHJpbmc+ID0gWydkZWZhdWx0JywgJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2RhbmdlciddO1xuICBpY29uczogYW55ID0ge1xuICAgIGRlZmF1bHQ6ICdiZWxsJyxcbiAgICBzdWNjZXNzOiAnY2hlY2snLFxuICAgIGluZm86ICdpbmZvJyxcbiAgICB3YXJuaW5nOiAnd2FybmluZycsXG4gICAgZGFuZ2VyOiAncmVtb3ZlJyxcbiAgfTtcbiAgZGVmYXVsdHM6IGFueSA9IHtcbiAgICBoaWRlRGVsYXk6IDM1MDAsXG4gICAgcG9zaXRpb246ICdncm93bFRvcFJpZ2h0JyxcbiAgICB0aGVtZTogJ2RlZmF1bHQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcG9uZW50VXRpbHM6IENvbXBvbmVudFV0aWxzKSB7fVxuXG4gIHNldCBwYXJlbnRWaWV3Q29udGFpbmVyKHZpZXcpIHtcbiAgICB0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldztcbiAgfVxuXG4gIGFsZXJ0KG9wdGlvbnMsIHRvYXN0RWxlbWVudDogYW55ID0gTm92b1RvYXN0RWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ05vIHBhcmVudCB2aWV3IGNvbnRhaW5lciBzcGVjaWZpZWQgZm9yIHRoZSBUb2FzdFNlcnZpY2UuIFNldCBpdCBpbnNpZGUgeW91ciBtYWluIGFwcGxpY2F0aW9uLiBcXG50aGlzLnRvYXN0U2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldyAoVmlld0NvbnRhaW5lclJlZiknLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsZXQgdG9hc3QgPSB0aGlzLmNvbXBvbmVudFV0aWxzLmFwcGVuZE5leHRUb0xvY2F0aW9uKHRvYXN0RWxlbWVudCwgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaCh0b2FzdCk7XG4gICAgICB0aGlzLmhhbmRsZUFsZXJ0KHRvYXN0Lmluc3RhbmNlLCBvcHRpb25zKTtcbiAgICAgIHJlc29sdmUodG9hc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNWaXNpYmxlKHRvYXN0KSB7XG4gICAgcmV0dXJuIHRvYXN0LnNob3c7XG4gIH1cblxuICBoaWRlKHRvYXN0KSB7XG4gICAgdG9hc3QuYW5pbWF0ZSA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9hc3Quc2hvdyA9IGZhbHNlO1xuICAgICAgY29uc3QgUkVGID0gdGhpcy5yZWZlcmVuY2VzLmZpbHRlcigoeCkgPT4geC5pbnN0YW5jZSA9PT0gdG9hc3QpWzBdO1xuICAgICAgaWYgKFJFRikge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXMuc3BsaWNlKHRoaXMucmVmZXJlbmNlcy5pbmRleE9mKFJFRiksIDEpO1xuICAgICAgICBSRUYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sIDMwMCk7XG4gIH1cblxuICBoYW5kbGVBbGVydCh0b2FzdCwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdGlvbnMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93KHRvYXN0KTtcbiAgICB9LCAyMCk7XG4gICAgaWYgKCF0b2FzdC5pc0Nsb3NlYWJsZSkge1xuICAgICAgdGhpcy50b2FzdFRpbWVyKHRvYXN0KTtcbiAgICB9XG4gIH1cblxuICBzZXRUb2FzdE9uU2Vzc2lvbih0b2FzdCwgb3B0cykge1xuICAgIGNvbnN0IE9QVElPTlMgPSB0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcgPyBvcHRzIDoge307XG5cbiAgICB0b2FzdC5wYXJlbnQgPSB0aGlzO1xuICAgIHRvYXN0LnRpdGxlID0gT1BUSU9OUy50aXRsZSB8fCAnJztcbiAgICB0b2FzdC5tZXNzYWdlID0gT1BUSU9OUy5tZXNzYWdlIHx8ICcnO1xuICAgIHRvYXN0LmhpZGVEZWxheSA9IE9QVElPTlMuaGlkZURlbGF5IHx8IHRoaXMuZGVmYXVsdHMuaGlkZURlbGF5O1xuICAgIHRvYXN0LmxpbmsgPSBPUFRJT05TLmxpbmsgfHwgJyc7XG4gICAgdG9hc3QuaXNDbG9zZWFibGUgPSBPUFRJT05TLmlzQ2xvc2VhYmxlIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgQ1VTVE9NX0NMQVNTID0gT1BUSU9OUy5jdXN0b21DbGFzcyB8fCAnJztcbiAgICBjb25zdCBBTEVSVF9TVFlMRSA9IE9QVElPTlMudGhlbWUgfHwgdGhpcy5kZWZhdWx0cy50aGVtZTtcbiAgICBjb25zdCBBTEVSVF9QT1NJVElPTiA9IE9QVElPTlMucG9zaXRpb24gfHwgdGhpcy5kZWZhdWx0cy5wb3NpdGlvbjtcbiAgICBjb25zdCBBTEVSVF9JQ09OID0gT1BUSU9OUy5pY29uIHx8IHRoaXMuaWNvbnMuZGVmYXVsdDtcblxuICAgIHRvYXN0Lmljb25DbGFzcyA9IGBiaGktJHtBTEVSVF9JQ09OfWA7XG4gICAgdG9hc3QubGF1bmNoZWQgPSB0cnVlO1xuICAgIHRvYXN0LmFsZXJ0VGhlbWUgPSBgJHtBTEVSVF9TVFlMRX0gJHtBTEVSVF9QT1NJVElPTn0gJHtDVVNUT01fQ0xBU1N9IHRvYXN0LWNvbnRhaW5lciBsYXVuY2hlZGA7XG4gIH1cblxuICBzaG93KHRvYXN0KSB7XG4gICAgdG9hc3Quc2hvdyA9IHRydWU7XG4gICAgc2V0VGltZW91dChhZGRDbGFzcywgMjUpO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW5pbWF0ZSBjbGFzcyB0byBiZSBjYWxsZWQgYWZ0ZXIgYSB0aW1lb3V0XG4gICAgICoqL1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICAgICAgdG9hc3QuYW5pbWF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9hc3RUaW1lcih0b2FzdCkge1xuICAgIGlmICh0b2FzdC5oaWRlRGVsYXkgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKHRvYXN0KTtcbiAgICB9LCB0b2FzdC5oaWRlRGVsYXkpO1xuICB9XG59XG4iXX0=