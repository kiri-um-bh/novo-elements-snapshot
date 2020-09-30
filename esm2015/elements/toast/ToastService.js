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
export class NovoToastService {
    /**
     * @param {?} componentUtils
     */
    constructor(componentUtils) {
        this.componentUtils = componentUtils;
        this.references = [];
        this.icons = { default: 'bell', success: 'check', info: 'info', warning: 'warning', danger: 'remove' };
        this.defaults = { hideDelay: 3500, position: 'growlTopRight', theme: 'default' };
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
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (!this._parentViewContainer) {
                console.error('No parent view container specified for the ToastService. Set it inside your main application. \nthis.toastService.parentViewContainer = view (ViewContainerRef)');
                return;
            }
            /** @type {?} */
            const toast = this.componentUtils.append(toastElement, this._parentViewContainer);
            this.references.push(toast);
            this.handleAlert(toast.instance, options);
            resolve(toast);
        }));
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            toast.show = false;
            /** @type {?} */
            const REF = this.references.filter((/**
             * @param {?} x
             * @return {?}
             */
            (x) => x.instance === toast))[0];
            if (REF) {
                this.references.splice(this.references.indexOf(REF), 1);
                REF.destroy();
            }
        }), 300);
    }
    /**
     * @param {?} toast
     * @param {?} options
     * @return {?}
     */
    handleAlert(toast, options) {
        this.setToastOnSession(toast, options);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.show(toast);
        }), 20);
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.hide(toast);
        }), toast.hideDelay);
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
    NovoToastService.prototype.icons;
    /** @type {?} */
    NovoToastService.prototype.defaults;
    /**
     * @type {?}
     * @private
     */
    NovoToastService.prototype.componentUtils;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RvYXN0L1RvYXN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNENBQTRDLENBQUM7Ozs7QUFNNUUsa0NBU0M7OztJQVJDLDZCQUFlOztJQUNmLCtCQUFpQjs7SUFDakIsNEJBQWtCOztJQUNsQiw2QkFBb0I7O0lBQ3BCLGlDQUFtQjs7SUFDbkIsZ0NBQTBCOztJQUMxQixtQ0FBc0I7O0lBQ3RCLG1DQUFxQjs7QUFJdkIsTUFBTSxPQUFPLGdCQUFnQjs7OztJQU0zQixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKbEQsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUM1QixVQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUNsRyxhQUFRLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBRXZCLENBQUM7Ozs7O0lBRXRELElBQUksbUJBQW1CLENBQUMsSUFBSTtRQUMxQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO0lBQ25DLENBQUM7Ozs7OztJQUVELEtBQUssQ0FBQyxPQUFxQixFQUFFLGVBQW9CLGdCQUFnQjtRQUMvRCxPQUFPLElBQUksT0FBTzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0Is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QUFPO1FBRXJELEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxVQUFVLEVBQUUsQ0FBQztRQUN0QyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QixLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsV0FBVyxJQUFJLGNBQWMsSUFBSSxZQUFZLDJCQUEyQixDQUFDO0lBQ2pHLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEtBQUs7UUFDUixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixVQUFVLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7UUFJekIsU0FBUyxRQUFRO1lBQ2YsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQUs7UUFDZCxJQUFJLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU87U0FDUjtRQUNELFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxHQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7WUE1RkYsVUFBVTs7OztZQWpCRixjQUFjOzs7O0lBbUJyQixnREFBMEI7O0lBQzFCLHNDQUE0Qjs7SUFDNUIsaUNBQWtHOztJQUNsRyxvQ0FBNEU7Ozs7O0lBRWhFLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvVG9hc3RFbGVtZW50IH0gZnJvbSAnLi9Ub2FzdCc7XG5pbXBvcnQgeyBDb21wb25lbnRVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbXBvbmVudC11dGlscy9Db21wb25lbnRVdGlscyc7XG5cbmV4cG9ydCB0eXBlIFRvYXN0VGhlbWVzID0gJ2RlZmF1bHQnIHwgJ3N1Y2Nlc3MnIHwgJ2luZm8nIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAncG9zaXRpdmUnIHwgc3RyaW5nO1xuZXhwb3J0IHR5cGUgVG9hc3RJY29ucyA9ICdiZWxsJyB8ICdjaGVjaycgfCAnaW5mbycgfCAnd2FybmluZycgfCAncmVtb3ZlJyB8ICdjYXV0aW9uJyB8ICd0aW1lcycgfCAnY29mZmVlJyB8ICdkYW5nZXInIHwgc3RyaW5nO1xuZXhwb3J0IHR5cGUgVG9hc3RQb3NpdGlvbnMgPSAnZml4ZWRUb3AnIHwgJ2ZpeGVkQm90dG9tJyB8ICdncm93bFRvcFJpZ2h0JyB8ICdncm93bFRvcExlZnQnIHwgJ2dyb3dsQm90dG9tUmlnaHQnIHwgJ2dyb3dsQm90dG9tTGVmdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RPcHRpb25zIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIGljb24/OiBUb2FzdEljb25zO1xuICB0aGVtZT86IFRvYXN0VGhlbWVzO1xuICBoaWRlRGVsYXk/OiBudW1iZXI7XG4gIHBvc2l0aW9uPzogVG9hc3RQb3NpdGlvbnM7XG4gIGlzQ2xvc2VhYmxlPzogYm9vbGVhbjtcbiAgY3VzdG9tQ2xhc3M/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3ZvVG9hc3RTZXJ2aWNlIHtcbiAgX3BhcmVudFZpZXdDb250YWluZXI6IGFueTtcbiAgcmVmZXJlbmNlczogQXJyYXk8YW55PiA9IFtdO1xuICBpY29ucyA9IHsgZGVmYXVsdDogJ2JlbGwnLCBzdWNjZXNzOiAnY2hlY2snLCBpbmZvOiAnaW5mbycsIHdhcm5pbmc6ICd3YXJuaW5nJywgZGFuZ2VyOiAncmVtb3ZlJyB9O1xuICBkZWZhdWx0cyA9IHsgaGlkZURlbGF5OiAzNTAwLCBwb3NpdGlvbjogJ2dyb3dsVG9wUmlnaHQnLCB0aGVtZTogJ2RlZmF1bHQnIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wb25lbnRVdGlsczogQ29tcG9uZW50VXRpbHMpIHt9XG5cbiAgc2V0IHBhcmVudFZpZXdDb250YWluZXIodmlldykge1xuICAgIHRoaXMuX3BhcmVudFZpZXdDb250YWluZXIgPSB2aWV3O1xuICB9XG5cbiAgYWxlcnQob3B0aW9uczogVG9hc3RPcHRpb25zLCB0b2FzdEVsZW1lbnQ6IGFueSA9IE5vdm9Ub2FzdEVsZW1lbnQpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9wYXJlbnRWaWV3Q29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgJ05vIHBhcmVudCB2aWV3IGNvbnRhaW5lciBzcGVjaWZpZWQgZm9yIHRoZSBUb2FzdFNlcnZpY2UuIFNldCBpdCBpbnNpZGUgeW91ciBtYWluIGFwcGxpY2F0aW9uLiBcXG50aGlzLnRvYXN0U2VydmljZS5wYXJlbnRWaWV3Q29udGFpbmVyID0gdmlldyAoVmlld0NvbnRhaW5lclJlZiknLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0b2FzdCA9IHRoaXMuY29tcG9uZW50VXRpbHMuYXBwZW5kKHRvYXN0RWxlbWVudCwgdGhpcy5fcGFyZW50Vmlld0NvbnRhaW5lcik7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaCh0b2FzdCk7XG4gICAgICB0aGlzLmhhbmRsZUFsZXJ0KHRvYXN0Lmluc3RhbmNlLCBvcHRpb25zKTtcbiAgICAgIHJlc29sdmUodG9hc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgaXNWaXNpYmxlKHRvYXN0KSB7XG4gICAgcmV0dXJuIHRvYXN0LnNob3c7XG4gIH1cblxuICBoaWRlKHRvYXN0KSB7XG4gICAgdG9hc3QuYW5pbWF0ZSA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdG9hc3Quc2hvdyA9IGZhbHNlO1xuICAgICAgY29uc3QgUkVGID0gdGhpcy5yZWZlcmVuY2VzLmZpbHRlcigoeCkgPT4geC5pbnN0YW5jZSA9PT0gdG9hc3QpWzBdO1xuICAgICAgaWYgKFJFRikge1xuICAgICAgICB0aGlzLnJlZmVyZW5jZXMuc3BsaWNlKHRoaXMucmVmZXJlbmNlcy5pbmRleE9mKFJFRiksIDEpO1xuICAgICAgICBSRUYuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0sIDMwMCk7XG4gIH1cblxuICBoYW5kbGVBbGVydCh0b2FzdCwgb3B0aW9ucykge1xuICAgIHRoaXMuc2V0VG9hc3RPblNlc3Npb24odG9hc3QsIG9wdGlvbnMpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93KHRvYXN0KTtcbiAgICB9LCAyMCk7XG4gICAgaWYgKCF0b2FzdC5pc0Nsb3NlYWJsZSkge1xuICAgICAgdGhpcy50b2FzdFRpbWVyKHRvYXN0KTtcbiAgICB9XG4gIH1cblxuICBzZXRUb2FzdE9uU2Vzc2lvbih0b2FzdCwgb3B0cykge1xuICAgIGNvbnN0IE9QVElPTlMgPSB0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcgPyBvcHRzIDoge307XG5cbiAgICB0b2FzdC5wYXJlbnQgPSB0aGlzO1xuICAgIHRvYXN0LnRpdGxlID0gT1BUSU9OUy50aXRsZSB8fCAnJztcbiAgICB0b2FzdC5tZXNzYWdlID0gT1BUSU9OUy5tZXNzYWdlIHx8ICcnO1xuICAgIHRvYXN0LmhpZGVEZWxheSA9IE9QVElPTlMuaGlkZURlbGF5IHx8IHRoaXMuZGVmYXVsdHMuaGlkZURlbGF5O1xuICAgIHRvYXN0LmxpbmsgPSBPUFRJT05TLmxpbmsgfHwgJyc7XG4gICAgdG9hc3QuaXNDbG9zZWFibGUgPSBPUFRJT05TLmlzQ2xvc2VhYmxlIHx8IGZhbHNlO1xuXG4gICAgY29uc3QgQ1VTVE9NX0NMQVNTID0gT1BUSU9OUy5jdXN0b21DbGFzcyB8fCAnJztcbiAgICBjb25zdCBBTEVSVF9TVFlMRSA9IE9QVElPTlMudGhlbWUgfHwgdGhpcy5kZWZhdWx0cy50aGVtZTtcbiAgICBjb25zdCBBTEVSVF9QT1NJVElPTiA9IE9QVElPTlMucG9zaXRpb24gfHwgdGhpcy5kZWZhdWx0cy5wb3NpdGlvbjtcbiAgICBjb25zdCBBTEVSVF9JQ09OID0gT1BUSU9OUy5pY29uIHx8IHRoaXMuaWNvbnMuZGVmYXVsdDtcblxuICAgIHRvYXN0Lmljb25DbGFzcyA9IGBiaGktJHtBTEVSVF9JQ09OfWA7XG4gICAgdG9hc3QubGF1bmNoZWQgPSB0cnVlO1xuICAgIHRvYXN0LmFsZXJ0VGhlbWUgPSBgJHtBTEVSVF9TVFlMRX0gJHtBTEVSVF9QT1NJVElPTn0gJHtDVVNUT01fQ0xBU1N9IHRvYXN0LWNvbnRhaW5lciBsYXVuY2hlZGA7XG4gIH1cblxuICBzaG93KHRvYXN0KSB7XG4gICAgdG9hc3Quc2hvdyA9IHRydWU7XG4gICAgc2V0VGltZW91dChhZGRDbGFzcywgMjUpO1xuICAgIC8qKlxuICAgICAqIEFkZHMgYW5pbWF0ZSBjbGFzcyB0byBiZSBjYWxsZWQgYWZ0ZXIgYSB0aW1lb3V0XG4gICAgICoqL1xuICAgIGZ1bmN0aW9uIGFkZENsYXNzKCkge1xuICAgICAgdG9hc3QuYW5pbWF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdG9hc3RUaW1lcih0b2FzdCkge1xuICAgIGlmICh0b2FzdC5oaWRlRGVsYXkgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oaWRlKHRvYXN0KTtcbiAgICB9LCB0b2FzdC5oaWRlRGVsYXkpO1xuICB9XG59XG4iXX0=