/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "\n    <section class=\"picker-loading\" *ngIf=\"isLoading && !matches?.length\"><novo-loading theme=\"line\"></novo-loading></section>\n    <novo-list *ngIf=\"matches.length > 0\" direction=\"vertical\">\n      <novo-list-item\n        *ngFor=\"let match of matches\"\n        (click)=\"selectMatch($event)\"\n        [class.active]=\"match === activeMatch\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.disabled]=\"preselected(match)\"\n      >\n        <item-content>\n          <h6><span [innerHtml]=\"highlight(match.label, term)\"></span></h6>\n          <div class=\"category\">\n            <i class=\"bhi-category-tags\"></i\n            ><span [innerHtml]=\"highlight(match.data.categories || match.data.parentCategory.name, term)\"></span>\n          </div>\n        </item-content>\n      </novo-list-item>\n      <novo-list-item *ngIf=\"limitedTo\"\n        ><div>{{ labels.showingXofXResults(limit, total) }}</div></novo-list-item\n      >\n      <novo-loading theme=\"line\" *ngIf=\"isLoading && matches.length > 0\"></novo-loading>\n    </novo-list>\n    <p class=\"picker-error\" *ngIf=\"hasError\">{{ labels.pickerError }}</p>\n    <p class=\"picker-null\" *ngIf=\"!isLoading && !matches.length && !hasError\">{{ labels.pickerEmpty }}</p>\n  "
                }] }
    ];
    /** @nocollapse */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3NraWxscy1waWNrZXItcmVzdWx0cy9Ta2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFM0U7SUE2QmtELHdEQUFpQjtJQU9qRSxzQ0FBbUIsT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQS9GLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUNwQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFMdkUsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQUssR0FBVyxHQUFHLENBQUM7O0lBS3BCLENBQUM7Ozs7SUFFRCxxREFBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxxREFBYzs7Ozs7Ozs7SUFBZCxVQUFlLFVBQWU7O1lBQ3hCLElBQUksR0FBRyxVQUFVO1FBQ3JCLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkEvREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSw4dkNBeUJUO2lCQUNGOzs7O2dCQWpDbUIsVUFBVTtnQkFHckIsZ0JBQWdCO2dCQUhPLGlCQUFpQjs7O3lCQW1DOUMsV0FBVyxTQUFDLGNBQWM7O0lBa0M3QixtQ0FBQztDQUFBLEFBaEVELENBNkJrRCxpQkFBaUIsR0FtQ2xFO1NBbkNZLDRCQUE0Qjs7O0lBQ3ZDLDhDQUN1Qjs7SUFDdkIsaURBQTJCOztJQUMzQiw2Q0FBb0I7O0lBQ3BCLDZDQUFjOztJQUVGLCtDQUEwQjs7SUFBRSw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2tpbGwtc3BlY2lhbHR5LXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VjdGlvbiBjbGFzcz1cInBpY2tlci1sb2FkaW5nXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgIW1hdGNoZXM/Lmxlbmd0aFwiPjxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+PC9zZWN0aW9uPlxuICAgIDxub3ZvLWxpc3QgKm5nSWY9XCJtYXRjaGVzLmxlbmd0aCA+IDBcIiBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiPlxuICAgICAgPG5vdm8tbGlzdC1pdGVtXG4gICAgICAgICpuZ0Zvcj1cImxldCBtYXRjaCBvZiBtYXRjaGVzXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm1hdGNoID09PSBhY3RpdmVNYXRjaFwiXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNlbGVjdEFjdGl2ZShtYXRjaClcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCJcbiAgICAgID5cbiAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICA8aDY+PHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2gubGFiZWwsIHRlcm0pXCI+PC9zcGFuPjwvaDY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jYXRlZ29yeS10YWdzXCI+PC9pXG4gICAgICAgICAgICA+PHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jYXRlZ29yaWVzIHx8IG1hdGNoLmRhdGEucGFyZW50Q2F0ZWdvcnkubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cImxpbWl0ZWRUb1wiXG4gICAgICAgID48ZGl2Pnt7IGxhYmVscy5zaG93aW5nWG9mWFJlc3VsdHMobGltaXQsIHRvdGFsKSB9fTwvZGl2Pjwvbm92by1saXN0LWl0ZW1cbiAgICAgID5cbiAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgKm5nSWY9XCJpc0xvYWRpbmcgJiYgbWF0Y2hlcy5sZW5ndGggPiAwXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgPC9ub3ZvLWxpc3Q+XG4gICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgIDxwIGNsYXNzPVwicGlja2VyLW51bGxcIiAqbmdJZj1cIiFpc0xvYWRpbmcgJiYgIW1hdGNoZXMubGVuZ3RoICYmICFoYXNFcnJvclwiPnt7IGxhYmVscy5waWNrZXJFbXB0eSB9fTwvcD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBsaW1pdGVkVG86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGltaXQ6IG51bWJlciA9IDIwMDtcbiAgdG90YWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBhbnkpOiBhbnkge1xuICAgIGxldCBkYXRhID0gY29sbGVjdGlvbjtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XG4gICAgICB0aGlzLmxpbWl0ZWRUbyA9IGNvbGxlY3Rpb24ubGltaXRlZFRvMjAwO1xuICAgICAgdGhpcy50b3RhbCA9IGNvbGxlY3Rpb24udG90YWw7XG4gICAgICBkYXRhID0gY29sbGVjdGlvbi5kYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPiB0aGlzLmxpbWl0KSB7XG4gICAgICB0aGlzLmxpbWl0ZWRUbyA9IHRydWU7XG4gICAgICB0aGlzLnRvdGFsID0gZGF0YS5sZW5ndGg7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZSgwLCB0aGlzLmxpbWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnN0cnVjdHVyZUFycmF5KGRhdGEpO1xuICB9XG59XG4iXX0=