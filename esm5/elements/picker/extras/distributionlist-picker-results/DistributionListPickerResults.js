/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
var DistributionListPickerResults = /** @class */ (function (_super) {
    tslib_1.__extends(DistributionListPickerResults, _super);
    function DistributionListPickerResults(element, sanitizer, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.sanitizer = sanitizer;
        _this.labels = labels;
        _this.active = true;
        _this.sanitizer = sanitizer;
        return _this;
    }
    Object.defineProperty(DistributionListPickerResults.prototype, "isHidden", {
        get: /**
         * @return {?}
         */
        function () {
            return this.matches.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DistributionListPickerResults.prototype.getListElement = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    /**
     * @param {?} html
     * @return {?}
     */
    DistributionListPickerResults.prototype.sanitizeHTML = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    DistributionListPickerResults.decorators = [
        { type: Component, args: [{
                    selector: 'distribution-list-picker-results',
                    template: "\n        <section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\">\n            <novo-loading theme=\"line\"></novo-loading>\n        </section>\n        <novo-list direction=\"vertical\" *ngIf=\"matches?.length > 0 && !hasError\">\n            <novo-list-item *ngFor=\"let match of matches\" (click)=\"selectMatch($event)\" [class.active]=\"match === activeMatch\" (mouseenter)=\"selectActive(match)\" [class.disabled]=\"preselected(match)\">\n                <item-header>\n                    <item-title>\n                        <span [innerHtml]=\"sanitizeHTML(match.label)\"></span>\n                    </item-title>\n                </item-header>\n                <item-content direction=\"horizontal\">\n                    <p>\n                        <span class='label'>{{ labels.distributionListOwner }}: </span><span>{{ match?.data?.owner?.name }}</span>\n                    </p>\n                    <p>\n                        <span class='label'>{{ labels.dateAdded }}: </span><span>{{ labels.formatDateWithFormat(match?.data?.dateAdded, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>\n                    </p>\n                </item-content>\n            </novo-list-item>\n            <novo-loading theme=\"line\" *ngIf=\"isLoading && matches?.length > 0\"></novo-loading>\n        </novo-list>\n    "
                }] }
    ];
    /** @nocollapse */
    DistributionListPickerResults.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomSanitizer },
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    DistributionListPickerResults.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }],
        isHidden: [{ type: HostBinding, args: ['hidden',] }]
    };
    return DistributionListPickerResults;
}(BasePickerResults));
export { DistributionListPickerResults };
if (false) {
    /** @type {?} */
    DistributionListPickerResults.prototype.active;
    /**
     * @type {?}
     * @private
     */
    DistributionListPickerResults.prototype.sanitizer;
    /** @type {?} */
    DistributionListPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9kaXN0cmlidXRpb25saXN0LXBpY2tlci1yZXN1bHRzL0Rpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBMEJtRCx5REFBaUI7SUFRbEUsdUNBQVksT0FBbUIsRUFBVSxTQUF1QixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFBekgsWUFDRSxrQkFBTSxPQUFPLEVBQUUsR0FBRyxDQUFDLFNBRXBCO1FBSHdDLGVBQVMsR0FBVCxTQUFTLENBQWM7UUFBUyxZQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU5qRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBUXJCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztJQUM3QixDQUFDO0lBUkQsc0JBQ0ksbURBQVE7Ozs7UUFEWjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7O0lBT0Qsc0RBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFFRCxvREFBWTs7OztJQUFaLFVBQWEsSUFBUztRQUNwQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxRQUFRLEVBQUUsazFDQXNCUDtpQkFDSjs7OztnQkEvQm1CLFVBQVU7Z0JBQ3JCLFlBQVk7Z0JBR1osZ0JBQWdCO2dCQUpPLGlCQUFpQjs7O3lCQWlDOUMsV0FBVyxTQUFDLGNBQWM7MkJBRTFCLFdBQVcsU0FBQyxRQUFROztJQWlCdkIsb0NBQUM7Q0FBQSxBQTlDRCxDQTBCbUQsaUJBQWlCLEdBb0JuRTtTQXBCWSw2QkFBNkI7OztJQUN4QywrQ0FDdUI7Ozs7O0lBTVUsa0RBQStCOztJQUFFLCtDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy8gVmVuZG9yXG5pbXBvcnQgeyBCYXNlUGlja2VyUmVzdWx0cyB9IGZyb20gJy4uL2Jhc2UtcGlja2VyLXJlc3VsdHMvQmFzZVBpY2tlclJlc3VsdHMnO1xuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Rpc3RyaWJ1dGlvbi1saXN0LXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiICpuZ0lmPVwibWF0Y2hlcz8ubGVuZ3RoID4gMCAmJiAhaGFzRXJyb3JcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCIgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIiAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCIgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKVwiPlxuICAgICAgICAgICAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPGl0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIdG1sXT1cInNhbml0aXplSFRNTChtYXRjaC5sYWJlbClcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaXRlbS10aXRsZT5cbiAgICAgICAgICAgICAgICA8L2l0ZW0taGVhZGVyPlxuICAgICAgICAgICAgICAgIDxpdGVtLWNvbnRlbnQgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdsYWJlbCc+e3sgbGFiZWxzLmRpc3RyaWJ1dGlvbkxpc3RPd25lciB9fTogPC9zcGFuPjxzcGFuPnt7IG1hdGNoPy5kYXRhPy5vd25lcj8ubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdsYWJlbCc+e3sgbGFiZWxzLmRhdGVBZGRlZCB9fTogPC9zcGFuPjxzcGFuPnt7IGxhYmVscy5mb3JtYXREYXRlV2l0aEZvcm1hdChtYXRjaD8uZGF0YT8uZGF0ZUFkZGVkLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgICAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXM/Lmxlbmd0aCA+IDBcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9ub3ZvLWxpc3Q+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKVxuICBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgICB0aGlzLnNhbml0aXplciA9IHNhbml0aXplcjtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdCcpO1xuICB9XG5cbiAgc2FuaXRpemVIVE1MKGh0bWw6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICB9XG59XG4iXX0=