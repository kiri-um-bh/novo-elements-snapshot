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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9waWNrZXIvZXh0cmFzL3NraWxscy1waWNrZXItcmVzdWx0cy9Ta2lsbHNTcGVjaWFsdHlQaWNrZXJSZXN1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFdEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFM0U7SUEyQmtELHdEQUFpQjtJQU9qRSxzQ0FBbUIsT0FBbUIsRUFBUyxNQUF3QixFQUFFLEdBQXNCO1FBQS9GLFlBQ0Usa0JBQU0sT0FBTyxFQUFFLEdBQUcsQ0FBQyxTQUNwQjtRQUZrQixhQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFMdkUsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQUssR0FBVyxHQUFHLENBQUM7O0lBS3BCLENBQUM7Ozs7SUFFRCxxREFBYzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxxREFBYzs7Ozs7Ozs7SUFBZCxVQUFlLFVBQWU7O1lBQ3hCLElBQUksR0FBRyxVQUFVO1FBQ3JCLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFZLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ3hCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEM7UUFDRCxPQUFPLGlCQUFNLGNBQWMsWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkE3REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFFBQVEsRUFBRSw0M0NBdUJQO2lCQUNKOzs7O2dCQS9CbUIsVUFBVTtnQkFHckIsZ0JBQWdCO2dCQUhPLGlCQUFpQjs7O3lCQWlDOUMsV0FBVyxTQUFDLGNBQWM7O0lBa0M3QixtQ0FBQztDQUFBLEFBOURELENBMkJrRCxpQkFBaUIsR0FtQ2xFO1NBbkNZLDRCQUE0Qjs7O0lBQ3ZDLDhDQUN1Qjs7SUFDdkIsaURBQTJCOztJQUMzQiw2Q0FBb0I7O0lBQ3BCLDZDQUFjOztJQUVGLCtDQUEwQjs7SUFBRSw4Q0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IEJhc2VQaWNrZXJSZXN1bHRzIH0gZnJvbSAnLi4vYmFzZS1waWNrZXItcmVzdWx0cy9CYXNlUGlja2VyUmVzdWx0cyc7XG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2tpbGwtc3BlY2lhbHR5LXBpY2tlci1yZXN1bHRzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJwaWNrZXItbG9hZGluZ1wiICpuZ0lmPVwiaXNMb2FkaW5nICYmICFtYXRjaGVzPy5sZW5ndGhcIj5cbiAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPG5vdm8tbGlzdCAqbmdJZj1cIm1hdGNoZXMubGVuZ3RoID4gMFwiIGRpcmVjdGlvbj1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICA8bm92by1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWF0Y2ggb2YgbWF0Y2hlc1wiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdE1hdGNoKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwibWF0Y2ggPT09IGFjdGl2ZU1hdGNoXCJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJzZWxlY3RBY3RpdmUobWF0Y2gpXCJcbiAgICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwicHJlc2VsZWN0ZWQobWF0Y2gpXCI+XG4gICAgICAgICAgICAgICAgPGl0ZW0tY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGg2PjxzcGFuIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0KG1hdGNoLmxhYmVsLCB0ZXJtKVwiPjwvc3Bhbj48L2g2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNhdGVnb3J5LXRhZ3NcIj48L2k+PHNwYW4gW2lubmVySHRtbF09XCJoaWdobGlnaHQobWF0Y2guZGF0YS5jYXRlZ29yaWVzIHx8IG1hdGNoLmRhdGEucGFyZW50Q2F0ZWdvcnkubmFtZSwgdGVybSlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvaXRlbS1jb250ZW50PlxuICAgICAgICAgICAgPC9ub3ZvLWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDxub3ZvLWxpc3QtaXRlbSAqbmdJZj1cImxpbWl0ZWRUb1wiPjxkaXY+e3tsYWJlbHMuc2hvd2luZ1hvZlhSZXN1bHRzKGxpbWl0LCB0b3RhbCl9fTwvZGl2Pjwvbm92by1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiICpuZ0lmPVwiaXNMb2FkaW5nICYmIG1hdGNoZXMubGVuZ3RoID4gMFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L25vdm8tbGlzdD5cbiAgICAgICAgPHAgY2xhc3M9XCJwaWNrZXItZXJyb3JcIiAqbmdJZj1cImhhc0Vycm9yXCI+e3sgbGFiZWxzLnBpY2tlckVycm9yIH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInBpY2tlci1udWxsXCIgKm5nSWY9XCIhaXNMb2FkaW5nICYmICFtYXRjaGVzLmxlbmd0aCAmJiAhaGFzRXJyb3JcIj57eyBsYWJlbHMucGlja2VyRW1wdHkgfX08L3A+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxzU3BlY2lhbHR5UGlja2VyUmVzdWx0cyBleHRlbmRzIEJhc2VQaWNrZXJSZXN1bHRzIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSB0cnVlO1xuICBsaW1pdGVkVG86IGJvb2xlYW4gPSBmYWxzZTtcbiAgbGltaXQ6IG51bWJlciA9IDIwMDtcbiAgdG90YWw6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnQsIHJlZik7XG4gIH1cblxuICBnZXRMaXN0RWxlbWVudCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdub3ZvLWxpc3QnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbmFtZSBzdHJ1Y3R1cmVBcnJheVxuICAgKiBAcGFyYW0gY29sbGVjdGlvbiAtIHRoZSBkYXRhIG9uY2UgZ2V0RGF0YSByZXNvbHZlcyBpdFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVGhpcyBmdW5jdGlvbiBzdHJ1Y3R1cmVzIGFuIGFycmF5IG9mIG5vZGVzIGludG8gYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aXRoIGFcbiAgICogJ25hbWUnIGZpZWxkIGJ5IGRlZmF1bHQuXG4gICAqL1xuICBzdHJ1Y3R1cmVBcnJheShjb2xsZWN0aW9uOiBhbnkpOiBhbnkge1xuICAgIGxldCBkYXRhID0gY29sbGVjdGlvbjtcbiAgICBpZiAoY29sbGVjdGlvbi5oYXNPd25Qcm9wZXJ0eSgnZGF0YScpKSB7XG4gICAgICB0aGlzLmxpbWl0ZWRUbyA9IGNvbGxlY3Rpb24ubGltaXRlZFRvMjAwO1xuICAgICAgdGhpcy50b3RhbCA9IGNvbGxlY3Rpb24udG90YWw7XG4gICAgICBkYXRhID0gY29sbGVjdGlvbi5kYXRhO1xuICAgIH0gZWxzZSBpZiAoZGF0YS5sZW5ndGggPiB0aGlzLmxpbWl0KSB7XG4gICAgICB0aGlzLmxpbWl0ZWRUbyA9IHRydWU7XG4gICAgICB0aGlzLnRvdGFsID0gZGF0YS5sZW5ndGg7XG4gICAgICBkYXRhID0gZGF0YS5zbGljZSgwLCB0aGlzLmxpbWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cGVyLnN0cnVjdHVyZUFycmF5KGRhdGEpO1xuICB9XG59XG4iXX0=