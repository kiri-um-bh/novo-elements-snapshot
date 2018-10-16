/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, ElementRef, ChangeDetectorRef, HostBinding } from '@angular/core';
// App
import { BasePickerResults } from '../base-picker-results/BasePickerResults';
import { NovoLabelService } from '../../../../services/novo-label-service';
var SkillsSpecialtyPickerResults = /** @class */ (function (_super) {
    tslib_1.__extends(SkillsSpecialtyPickerResults, _super);
    function SkillsSpecialtyPickerResults(element, labels, ref) {
        var _this = _super.call(this, element, ref) || this;
        _this.element = element;
        _this.labels = labels;
        _this.active = true;
        _this.limitedTo = false;
        _this.limit = 200;
        return _this;
    }
    /**
     * @return {?}
     */
    SkillsSpecialtyPickerResults.prototype.getListElement = /**
     * @return {?}
     */
    function () {
        return this.element.nativeElement.querySelector('novo-list');
    };
    /**
     * @name structureArray
     * @param collection - the data once getData resolves it
     *
     * @description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     */
    /**
     * \@name structureArray
     * \@description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     * @param {?} collection - the data once getData resolves it
     *
     * @return {?}
     */
    SkillsSpecialtyPickerResults.prototype.structureArray = /**
     * \@name structureArray
     * \@description This function structures an array of nodes into an array of objects with a
     * 'name' field by default.
     * @param {?} collection - the data once getData resolves it
     *
     * @return {?}
     */
    function (collection) {
        /** @type {?} */
        var data = collection;
        if (collection.hasOwnProperty('data')) {
            this.limitedTo = collection.limitedTo200;
            this.total = collection.total;
            data = collection.data;
        }
        else if (data.length > this.limit) {
            this.limitedTo = true;
            this.total = data.length;
            data = data.slice(0, this.limit);
        }
        return _super.prototype.structureArray.call(this, data);
    };
    SkillsSpecialtyPickerResults.decorators = [
        { type: Component, args: [{
                    selector: 'skill-specialty-picker-results',
                    template: "\n        <section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\">\n            <novo-loading theme=\"line\"></novo-loading>\n        </section>\n        <novo-list *ngIf=\"matches.length > 0\" direction=\"vertical\">\n            <novo-list-item\n                *ngFor=\"let match of matches\"\n                (click)=\"selectMatch($event)\"\n                [class.active]=\"match === activeMatch\"\n                (mouseenter)=\"selectActive(match)\"\n                [class.disabled]=\"preselected(match)\">\n                <item-content>\n                    <h6><span [innerHtml]=\"highlight(match.label, term)\"></span></h6>\n                    <div class=\"category\">\n                        <i class=\"bhi-category-tags\"></i><span [innerHtml]=\"highlight(match.data.categories || match.data.parentCategory.name, term)\"></span>\n                    </div>\n                </item-content>\n            </novo-list-item>\n            <novo-list-item *ngIf=\"limitedTo\"><div>{{labels.showingXofXResults(limit, total)}}</div></novo-list-item>\n            <novo-loading theme=\"line\" *ngIf=\"isLoading && matches.length > 0\"></novo-loading>\n        </novo-list>\n        <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n        <p class=\"picker-null\" *ngIf=\"!isLoading && !matches.length && !hasError\">{{ labels.pickerEmpty }}</p>\n    "
                }] }
    ];
    SkillsSpecialtyPickerResults.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: ChangeDetectorRef }
    ]; };
    SkillsSpecialtyPickerResults.propDecorators = {
        active: [{ type: HostBinding, args: ['class.active',] }]
    };
    return SkillsSpecialtyPickerResults;
}(BasePickerResults));
export { SkillsSpecialtyPickerResults };
if (false) {
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.active;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.limitedTo;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.limit;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.total;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.element;
    /** @type {?} */
    SkillsSpecialtyPickerResults.prototype.labels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3NraWxscy1waWNrZXItcmVzdWx0cy9Ta2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFM0U7SUEyQmtELHdEQUFpQjtJQU9qRSxzQ0FBbUIsT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQS9GLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUNwQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFMdkUsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQUssR0FBVyxHQUFHLENBQUM7O0lBS3BCLENBQUM7Ozs7SUFFRCxxREFBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxxREFBYzs7Ozs7Ozs7SUFBZCxVQUFlLFVBQWU7O1lBQ3hCLElBQUksR0FBRyxVQUFVO1FBQ3JCLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSw0M0NBdUJQO2lCQUNKOzs7Z0JBL0JtQixVQUFVO2dCQUdyQixnQkFBZ0I7Z0JBSE8saUJBQWlCOzs7eUJBaUM5QyxXQUFXLFNBQUMsY0FBYzs7SUFrQzdCLG1DQUFDO0NBQUEsQUE5REQsQ0EyQmtELGlCQUFpQixHQW1DbEU7U0FuQ1ksNEJBQTRCOzs7SUFDdkMsOENBQ3VCOztJQUN2QixpREFBMkI7O0lBQzNCLDZDQUFvQjs7SUFDcEIsNkNBQWM7O0lBRUYsK0NBQTBCOztJQUFFLDhDQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFwcFxuaW1wb3J0IHsgQmFzZVBpY2tlclJlc3VsdHMgfSBmcm9tICcuLi9iYXNlLXBpY2tlci1yZXN1bHRzL0Jhc2VQaWNrZXJSZXN1bHRzJztcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdza2lsbC1zcGVjaWFsdHktcGlja2VyLXJlc3VsdHMnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXM/Lmxlbmd0aFwiPlxuICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8bm92by1saXN0ICpuZ0lmPVwibWF0Y2hlcy5sZW5ndGggPiAwXCIgZGlyZWN0aW9uPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbVxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0TWF0Y2goJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJtYXRjaCA9PT0gYWN0aXZlTWF0Y2hcIlxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJwcmVzZWxlY3RlZChtYXRjaClcIj5cbiAgICAgICAgICAgICAgICA8aXRlbS1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8aDY+PHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9zcGFuPjwvaDY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2F0ZWdvcnktdGFnc1wiPjwvaT48c3BhbiBbaW5uZXJIdG1sXT1cImhpZ2hsaWdodChtYXRjaC5kYXRhLmNhdGVnb3JpZXMgfHwgbWF0Y2guZGF0YS5wYXJlbnRDYXRlZ29yeS5uYW1lLCB0ZXJtKVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9pdGVtLWNvbnRlbnQ+XG4gICAgICAgICAgICA8L25vdm8tbGlzdC1pdGVtPlxuICAgICAgICAgICAgPG5vdm8tbGlzdC1pdGVtICpuZ0lmPVwibGltaXRlZFRvXCI+PGRpdj57e2xhYmVscy5zaG93aW5nWG9mWFJlc3VsdHMobGltaXQsIHRvdGFsKX19PC9kaXY+PC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvbm92by1saXN0PlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1lcnJvclwiICpuZ0lmPVwiaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRXJyb3IgfX08L3A+XG4gICAgICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGxcIiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoICYmICFoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzIGV4dGVuZHMgQmFzZVBpY2tlclJlc3VsdHMge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIGFjdGl2ZTogYm9vbGVhbiA9IHRydWU7XG4gIGxpbWl0ZWRUbzogYm9vbGVhbiA9IGZhbHNlO1xuICBsaW1pdDogbnVtYmVyID0gMjAwO1xuICB0b3RhbDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCByZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgcmVmKTtcbiAgfVxuXG4gIGdldExpc3RFbGVtZW50KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ25vdm8tbGlzdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBuYW1lIHN0cnVjdHVyZUFycmF5XG4gICAqIEBwYXJhbSBjb2xsZWN0aW9uIC0gdGhlIGRhdGEgb25jZSBnZXREYXRhIHJlc29sdmVzIGl0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBUaGlzIGZ1bmN0aW9uIHN0cnVjdHVyZXMgYW4gYXJyYXkgb2Ygbm9kZXMgaW50byBhbiBhcnJheSBvZiBvYmplY3RzIHdpdGggYVxuICAgKiAnbmFtZScgZmllbGQgYnkgZGVmYXVsdC5cbiAgICovXG4gIHN0cnVjdHVyZUFycmF5KGNvbGxlY3Rpb246IGFueSk6IGFueSB7XG4gICAgbGV0IGRhdGEgPSBjb2xsZWN0aW9uO1xuICAgIGlmIChjb2xsZWN0aW9uLmhhc093blByb3BlcnR5KCdkYXRhJykpIHtcbiAgICAgIHRoaXMubGltaXRlZFRvID0gY29sbGVjdGlvbi5saW1pdGVkVG8yMDA7XG4gICAgICB0aGlzLnRvdGFsID0gY29sbGVjdGlvbi50b3RhbDtcbiAgICAgIGRhdGEgPSBjb2xsZWN0aW9uLmRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhLmxlbmd0aCA+IHRoaXMubGltaXQpIHtcbiAgICAgIHRoaXMubGltaXRlZFRvID0gdHJ1ZTtcbiAgICAgIHRoaXMudG90YWwgPSBkYXRhLmxlbmd0aDtcbiAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKDAsIHRoaXMubGltaXQpO1xuICAgIH1cbiAgICByZXR1cm4gc3VwZXIuc3RydWN0dXJlQXJyYXkoZGF0YSk7XG4gIH1cbn1cbiJdfQ==