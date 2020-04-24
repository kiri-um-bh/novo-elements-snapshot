/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/workers-comp-codes-picker-results/WorkersCompCodesPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// Vendor
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
var WorkersCompCodesPickerResults = /** @class */ (function (_super) {
    tslib_1.__extends(WorkersCompCodesPickerResults, _super);
    function WorkersCompCodesPickerResults(element, sanitizer, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.sanitizer = sanitizer;
        _this.labels = labels;
        _this.active = true;
        _this.sanitizer = sanitizer;
        return _this;
    }
    Object.defineProperty(WorkersCompCodesPickerResults.prototype, "isHidden", {
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
    WorkersCompCodesPickerResults.prototype.getListElement = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    /**
     * @param {?} compCode
     * @param {?} name
     * @return {?}
     */
    WorkersCompCodesPickerResults.prototype.sanitizeHTML = /**
     * @param {?} compCode
     * @param {?} name
     * @return {?}
     */
    function (compCode, name) {
        return this.sanitizer.bypassSecurityTrustHtml(compCode + " | " + name);
    };
    WorkersCompCodesPickerResults.decorators = [
        { type: Component, args: [{
                    selector: 'workers-comp-codes-picker-results',
                    template: "\n    <section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\">\n      <novo-loading theme=\"line\"></novo-loading>\n    </section>\n    <novo-list direction=\"vertical\" *ngIf=\"matches?.length > 0 && !hasError\">\n      <novo-list-item\n        *ngFor=\"let match of matches\"\n        (click)=\"selectMatch($event)\"\n        [class.active]=\"match === activeMatch\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.disabled]=\"preselected(match)\"\n      >\n        <item-header>\n          <item-title>\n            <span [innerHtml]=\"sanitizeHTML(match?.data?.compensation?.code, match?.data?.compensation?.name)\"></span>\n          </item-title>\n        </item-header>\n        <item-content direction=\"horizontal\">\n          <p>\n            <span class=\"label\">{{ labels.state }}: </span><span>{{ match?.data?.compensation?.state }}</span>\n          </p>\n          <p>\n            <span class=\"label\">{{ labels.rate }}: </span><span>{{ labels.formatCurrency(match?.data?.rate) }}</span>\n          </p>\n        </item-content>\n        <item-content direction=\"horizontal\">\n          <p>\n            <span class=\"label\">{{ labels.startDate }}: </span\n            ><span>{{ labels.formatDateWithFormat(match?.data?.startDate, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>\n          </p>\n          <p>\n            <span class=\"label\">{{ labels.endDate }}: </span\n            ><span>{{ labels.formatDateWithFormat(match?.data?.endDate, { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</span>\n          </p>\n        </item-content>\n      </novo-list-item>\n      <novo-loading theme=\"line\" *ngIf=\"isLoading && matches?.length > 0\"></novo-loading>\n    </novo-list>\n  "
                }] }
    ];
    /** @nocollapse */
    WorkersCompCodesPickerResults.ctorParameters = function () { return [
        { type: ElementRef },
        { type: DomSanitizer },
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    WorkersCompCodesPickerResults.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }],
        isHidden: [{ type: HostBinding, args: ['hidden',] }]
    };
    return WorkersCompCodesPickerResults;
}(BasePickerResults));
export { WorkersCompCodesPickerResults };
if (false) {
    /** @type {?} */
    WorkersCompCodesPickerResults.prototype.active;
    /**
     * @type {?}
     * @private
     */
    WorkersCompCodesPickerResults.prototype.sanitizer;
    /** @type {?} */
    WorkersCompCodesPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy93b3JrZXJzLWNvbXAtY29kZXMtcGlja2VyLXJlc3VsdHMvV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBMENtRCx5REFBaUI7SUFRbEUsdUNBQVksT0FBbUIsRUFBVSxTQUF1QixFQUFTLE1BQXdCLEVBQUUsR0FBc0I7UUFBekgsWUFDRSxrQkFBTSxPQUFPLEVBQUUsR0FBRyxDQUFDLFNBRXBCO1FBSHdDLGVBQVMsR0FBVCxTQUFTLENBQWM7UUFBUyxZQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU5qRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBUXJCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDOztJQUM3QixDQUFDO0lBUkQsc0JBQ0ksbURBQVE7Ozs7UUFEWjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBOzs7O0lBT0Qsc0RBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQsb0RBQVk7Ozs7O0lBQVosVUFBYSxRQUFnQixFQUFFLElBQVk7UUFDekMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFJLFFBQVEsV0FBTSxJQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQ0FBbUM7b0JBQzdDLFFBQVEsRUFBRSx1dURBc0NUO2lCQUNGOzs7O2dCQS9DbUIsVUFBVTtnQkFDckIsWUFBWTtnQkFHWixnQkFBZ0I7Z0JBSk8saUJBQWlCOzs7eUJBaUQ5QyxXQUFXLFNBQUMsY0FBYzsyQkFFMUIsV0FBVyxTQUFDLFFBQVE7O0lBaUJ2QixvQ0FBQztDQUFBLEFBOURELENBMENtRCxpQkFBaUIsR0FvQm5FO1NBcEJZLDZCQUE2Qjs7O0lBQ3hDLCtDQUN1Qjs7Ozs7SUFNVSxrREFBK0I7O0lBQUUsK0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG4vLyBWZW5kb3JcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd29ya2Vycy1jb21wLWNvZGVzLXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXM/Lmxlbmd0aFwiPlxuICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIj48L25vdm8tbG9hZGluZz5cbiAgICA8L3NlY3Rpb24+XG4gICAgPG5vdm8tbGlzdCBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiICpuZ0lmPVwibWF0Y2hlcz8ubGVuZ3RoID4gMCAmJiAhaGFzRXJyb3JcIj5cbiAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgIChjbGljayk9XCJzZWxlY3RNYXRjaCgkZXZlbnQpXCJcbiAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cInByZXNlbGVjdGVkKG1hdGNoKVwiXG4gICAgICA+XG4gICAgICAgIDxpdGVtLWhlYWRlcj5cbiAgICAgICAgICA8aXRlbS10aXRsZT5cbiAgICAgICAgICAgIDxzcGFuIFtpbm5lckh0bWxdPVwic2FuaXRpemVIVE1MKG1hdGNoPy5kYXRhPy5jb21wZW5zYXRpb24/LmNvZGUsIG1hdGNoPy5kYXRhPy5jb21wZW5zYXRpb24/Lm5hbWUpXCI+PC9zcGFuPlxuICAgICAgICAgIDwvaXRlbS10aXRsZT5cbiAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgPGl0ZW0tY29udGVudCBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+e3sgbGFiZWxzLnN0YXRlIH19OiA8L3NwYW4+PHNwYW4+e3sgbWF0Y2g/LmRhdGE/LmNvbXBlbnNhdGlvbj8uc3RhdGUgfX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPnt7IGxhYmVscy5yYXRlIH19OiA8L3NwYW4+PHNwYW4+e3sgbGFiZWxzLmZvcm1hdEN1cnJlbmN5KG1hdGNoPy5kYXRhPy5yYXRlKSB9fTwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBsYWJlbHMuc3RhcnREYXRlIH19OiA8L3NwYW5cbiAgICAgICAgICAgID48c3Bhbj57eyBsYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQobWF0Y2g/LmRhdGE/LnN0YXJ0RGF0ZSwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pIH19PC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBsYWJlbHMuZW5kRGF0ZSB9fTogPC9zcGFuXG4gICAgICAgICAgICA+PHNwYW4+e3sgbGFiZWxzLmZvcm1hdERhdGVXaXRoRm9ybWF0KG1hdGNoPy5kYXRhPy5lbmREYXRlLCB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICdudW1lcmljJywgZGF5OiAnbnVtZXJpYycgfSkgfX08L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2l0ZW0tY29udGVudD5cbiAgICAgIDwvbm92by1saXN0LWl0ZW0+XG4gICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXM/Lmxlbmd0aCA+IDBcIj48L25vdm8tbG9hZGluZz5cbiAgICA8L25vdm8tbGlzdD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgV29ya2Vyc0NvbXBDb2Rlc1BpY2tlclJlc3VsdHMgZXh0ZW5kcyBCYXNlUGlja2VyUmVzdWx0cyB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgYWN0aXZlOiBib29sZWFuID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdoaWRkZW4nKVxuICBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcy5sZW5ndGggPT09IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgICB0aGlzLnNhbml0aXplciA9IHNhbml0aXplcjtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIHNhbml0aXplSFRNTChjb21wQ29kZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoYCR7Y29tcENvZGV9IHwgJHtuYW1lfWApO1xuICB9XG59XG4iXX0=