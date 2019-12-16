/**
 * @fileoverview added by tsickle
 * Generated from: elements/picker/extras/distributionlist-picker-results/DistributionListPickerResults.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uTGlzdFBpY2tlclJlc3VsdHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvcGlja2VyL2V4dHJhcy9kaXN0cmlidXRpb25saXN0LXBpY2tlci1yZXN1bHRzL0Rpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOztBQUV6RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUzRTtJQTBCbUQseURBQWlCO0lBUWxFLHVDQUFZLE9BQW1CLEVBQVUsU0FBdUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQXpILFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUVwQjtRQUh3QyxlQUFTLEdBQVQsU0FBUyxDQUFjO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFOakcsWUFBTSxHQUFZLElBQUksQ0FBQztRQVFyQixLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7SUFDN0IsQ0FBQztJQVJELHNCQUNJLG1EQUFROzs7O1FBRFo7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTs7OztJQU9ELHNEQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBRUQsb0RBQVk7Ozs7SUFBWixVQUFhLElBQVM7UUFDcEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztvQkFDNUMsUUFBUSxFQUFFLGsxQ0FzQlA7aUJBQ0o7Ozs7Z0JBL0JtQixVQUFVO2dCQUNyQixZQUFZO2dCQUdaLGdCQUFnQjtnQkFKTyxpQkFBaUI7Ozt5QkFpQzlDLFdBQVcsU0FBQyxjQUFjOzJCQUUxQixXQUFXLFNBQUMsUUFBUTs7SUFpQnZCLG9DQUFDO0NBQUEsQUE5Q0QsQ0EwQm1ELGlCQUFpQixHQW9CbkU7U0FwQlksNkJBQTZCOzs7SUFDeEMsK0NBQ3VCOzs7OztJQU1VLGtEQUErQjs7SUFBRSwrQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbi8vIFZlbmRvclxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaXN0cmlidXRpb24tbGlzdC1waWNrZXItcmVzdWx0cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicGlja2VyLWxvYWRpbmdcIiAqbmdJZj1cImlzTG9hZGluZyAmJiAhbWF0Y2hlcz8ubGVuZ3RoXCI+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxub3ZvLWxpc3QgZGlyZWN0aW9uPVwidmVydGljYWxcIiAqbmdJZj1cIm1hdGNoZXM/Lmxlbmd0aCA+IDAgJiYgIWhhc0Vycm9yXCI+XG4gICAgICAgICAgICA8bm92by1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IG1hdGNoIG9mIG1hdGNoZXNcIiAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCIgKG1vdXNlZW50ZXIpPVwic2VsZWN0QWN0aXZlKG1hdGNoKVwiIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIj5cbiAgICAgICAgICAgICAgICA8aXRlbS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxpdGVtLXRpdGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySHRtbF09XCJzYW5pdGl6ZUhUTUwobWF0Y2gubGFiZWwpXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2l0ZW0tdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50IGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nbGFiZWwnPnt7IGxhYmVscy5kaXN0cmlidXRpb25MaXN0T3duZXIgfX06IDwvc3Bhbj48c3Bhbj57eyBtYXRjaD8uZGF0YT8ub3duZXI/Lm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nbGFiZWwnPnt7IGxhYmVscy5kYXRlQWRkZWQgfX06IDwvc3Bhbj48c3Bhbj57eyBsYWJlbHMuZm9ybWF0RGF0ZVdpdGhGb3JtYXQobWF0Y2g/LmRhdGE/LmRhdGVBZGRlZCwgeyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnbnVtZXJpYycsIGRheTogJ251bWVyaWMnIH0pIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiAqbmdJZj1cImlzTG9hZGluZyAmJiBtYXRjaGVzPy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIERpc3RyaWJ1dGlvbkxpc3RQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnaGlkZGVuJylcbiAgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm1hdGNoZXMubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gICAgdGhpcy5zYW5pdGl6ZXIgPSBzYW5pdGl6ZXI7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIHNhbml0aXplSFRNTChodG1sOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgfVxufVxuIl19