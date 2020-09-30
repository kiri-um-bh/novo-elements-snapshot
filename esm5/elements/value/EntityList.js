/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
var EntityList = /** @class */ (function () {
    function EntityList() {
        this.baseEntity = '';
        this.ENTITY_SHORT_NAMES = {
            Lead: 'lead',
            ClientContact: 'contact',
            ClientContact1: 'contact',
            ClientContact2: 'contact',
            ClientContact3: 'contact',
            ClientContact4: 'contact',
            ClientContact5: 'contact',
            ClientCorporation: 'company',
            ClientCorporation1: 'company',
            ClientCorporation2: 'company',
            ClientCorporation3: 'company',
            ClientCorporation4: 'company',
            ClientCorporation5: 'company',
            Opportunity: 'opportunity',
            Task: 'task',
            Note: 'note',
            CorporateUser: 'user',
            Candidate: 'candidate',
            JobOrder: 'job',
            JobOrder1: 'job',
            JobOrder2: 'job',
            JobOrder3: 'job',
            JobOrder4: 'job',
            JobOrder5: 'job',
            Placement: 'placement',
            JobSubmission: 'submission',
            CandidateReference: 'references',
            DistributionList: 'distributionList',
            Appointment: 'appointment',
        };
    }
    /**
     * @return {?}
     */
    EntityList.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        // use a local copy of the meta to set the type to TO_ONE for proper display
        // without changing the input object
        this.metaDisplay = Helpers.deepClone(this.meta);
        this.metaDisplay.type = 'TO_ONE';
        this.baseEntity = this.meta.associatedEntity.entity;
        try {
            for (var _b = tslib_1.__values(this.data.data), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entity = _c.value;
                entity.isLinkable = this.isLinkable(entity);
                entity.class = this.getClass(entity);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    EntityList.prototype.getClass = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return this.ENTITY_SHORT_NAMES[entity.personSubtype];
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    EntityList.prototype.openLink = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        entity.openLink(entity);
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    EntityList.prototype.isLinkable = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return entity.openLink;
    };
    EntityList.decorators = [
        { type: Component, args: [{
                    selector: 'novo-entity-list',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n        <div *ngFor=\"let entity of data.data\" class=\"entity\">\n            <a *ngIf=\"entity.isLinkable\" (click)=\"openLink(entity)\">\n                <i class=\"bhi-circle {{ entity.class }}\"></i>{{ entity | render : metaDisplay }}\n            </a>\n            <span *ngIf=\"!entity.isLinkable && entity.personSubtype\">\n                <i class=\"bhi-circle {{ entity.class }}\"></i>{{ entity | render : metaDisplay }}\n            </span>\n            <span *ngIf=\"!entity.isLinkable && !entity.personSubtype\">\n                {{ entity | render : metaDisplay }}\n            </span>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    EntityList.ctorParameters = function () { return []; };
    EntityList.propDecorators = {
        data: [{ type: Input }],
        meta: [{ type: Input }]
    };
    return EntityList;
}());
export { EntityList };
if (false) {
    /** @type {?} */
    EntityList.prototype.data;
    /** @type {?} */
    EntityList.prototype.meta;
    /** @type {?} */
    EntityList.prototype.baseEntity;
    /** @type {?} */
    EntityList.prototype.metaDisplay;
    /** @type {?} */
    EntityList.prototype.ENTITY_SHORT_NAMES;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE2Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUM7SUF3REU7UUFsQ0EsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4Qix1QkFBa0IsR0FBUTtZQUN4QixJQUFJLEVBQUUsTUFBTTtZQUNaLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixhQUFhLEVBQUUsTUFBTTtZQUNyQixTQUFTLEVBQUUsV0FBVztZQUN0QixRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLGFBQWEsRUFBRSxZQUFZO1lBQzNCLGtCQUFrQixFQUFFLFlBQVk7WUFDaEMsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUM7SUFFYSxDQUFDOzs7O0lBRWhCLDZCQUFROzs7SUFBUjs7UUFDRSw0RUFBNEU7UUFDNUUsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O1lBQ3BELEtBQW1CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBSSxNQUFNLFdBQUE7Z0JBQ2IsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEM7Ozs7Ozs7OztJQUNILENBQUM7Ozs7O0lBRUQsNkJBQVE7Ozs7SUFBUixVQUFTLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsNkJBQVE7Ozs7SUFBUixVQUFTLE1BQVc7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtCQUFVOzs7O0lBQVYsVUFBVyxNQUFXO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOztnQkFoRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsaW5CQVlQO2lCQUNKOzs7Ozt1QkFFRSxLQUFLO3VCQUVMLEtBQUs7O0lBNkRSLGlCQUFDO0NBQUEsQUFqRkQsSUFpRkM7U0FoRVksVUFBVTs7O0lBQ3JCLDBCQUNVOztJQUNWLDBCQUNVOztJQUNWLGdDQUF3Qjs7SUFDeEIsaUNBQWlCOztJQUNqQix3Q0E4QkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZW50aXR5LWxpc3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIGRhdGEuZGF0YVwiIGNsYXNzPVwiZW50aXR5XCI+XG4gICAgICAgICAgICA8YSAqbmdJZj1cImVudGl0eS5pc0xpbmthYmxlXCIgKGNsaWNrKT1cIm9wZW5MaW5rKGVudGl0eSlcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaXJjbGUge3sgZW50aXR5LmNsYXNzIH19XCI+PC9pPnt7IGVudGl0eSB8IHJlbmRlciA6IG1ldGFEaXNwbGF5IH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlbnRpdHkuaXNMaW5rYWJsZSAmJiBlbnRpdHkucGVyc29uU3VidHlwZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNpcmNsZSB7eyBlbnRpdHkuY2xhc3MgfX1cIj48L2k+e3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVudGl0eS5pc0xpbmthYmxlICYmICFlbnRpdHkucGVyc29uU3VidHlwZVwiPlxuICAgICAgICAgICAgICAgIHt7IGVudGl0eSB8IHJlbmRlciA6IG1ldGFEaXNwbGF5IH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUxpc3QgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueTtcbiAgYmFzZUVudGl0eTogc3RyaW5nID0gJyc7XG4gIG1ldGFEaXNwbGF5OiBhbnk7XG4gIEVOVElUWV9TSE9SVF9OQU1FUzogYW55ID0ge1xuICAgIExlYWQ6ICdsZWFkJyxcbiAgICBDbGllbnRDb250YWN0OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDE6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MjogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QzOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDQ6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0NTogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvcnBvcmF0aW9uOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24xOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24yOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24zOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb240OiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb241OiAnY29tcGFueScsXG4gICAgT3Bwb3J0dW5pdHk6ICdvcHBvcnR1bml0eScsXG4gICAgVGFzazogJ3Rhc2snLFxuICAgIE5vdGU6ICdub3RlJyxcbiAgICBDb3Jwb3JhdGVVc2VyOiAndXNlcicsXG4gICAgQ2FuZGlkYXRlOiAnY2FuZGlkYXRlJyxcbiAgICBKb2JPcmRlcjogJ2pvYicsXG4gICAgSm9iT3JkZXIxOiAnam9iJyxcbiAgICBKb2JPcmRlcjI6ICdqb2InLFxuICAgIEpvYk9yZGVyMzogJ2pvYicsXG4gICAgSm9iT3JkZXI0OiAnam9iJyxcbiAgICBKb2JPcmRlcjU6ICdqb2InLFxuICAgIFBsYWNlbWVudDogJ3BsYWNlbWVudCcsXG4gICAgSm9iU3VibWlzc2lvbjogJ3N1Ym1pc3Npb24nLFxuICAgIENhbmRpZGF0ZVJlZmVyZW5jZTogJ3JlZmVyZW5jZXMnLFxuICAgIERpc3RyaWJ1dGlvbkxpc3Q6ICdkaXN0cmlidXRpb25MaXN0JyxcbiAgICBBcHBvaW50bWVudDogJ2FwcG9pbnRtZW50JyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICAvLyB1c2UgYSBsb2NhbCBjb3B5IG9mIHRoZSBtZXRhIHRvIHNldCB0aGUgdHlwZSB0byBUT19PTkUgZm9yIHByb3BlciBkaXNwbGF5XG4gICAgLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgdGhpcy5tZXRhRGlzcGxheSA9IEhlbHBlcnMuZGVlcENsb25lKHRoaXMubWV0YSk7XG4gICAgdGhpcy5tZXRhRGlzcGxheS50eXBlID0gJ1RPX09ORSc7XG4gICAgdGhpcy5iYXNlRW50aXR5ID0gdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIGZvciAobGV0IGVudGl0eSBvZiB0aGlzLmRhdGEuZGF0YSkge1xuICAgICAgZW50aXR5LmlzTGlua2FibGUgPSB0aGlzLmlzTGlua2FibGUoZW50aXR5KTtcbiAgICAgIGVudGl0eS5jbGFzcyA9IHRoaXMuZ2V0Q2xhc3MoZW50aXR5KTtcbiAgICB9XG4gIH1cblxuICBnZXRDbGFzcyhlbnRpdHk6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuRU5USVRZX1NIT1JUX05BTUVTW2VudGl0eS5wZXJzb25TdWJ0eXBlXTtcbiAgfVxuXG4gIG9wZW5MaW5rKGVudGl0eTogYW55KTogdm9pZCB7XG4gICAgZW50aXR5Lm9wZW5MaW5rKGVudGl0eSk7XG4gIH1cblxuICBpc0xpbmthYmxlKGVudGl0eTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVudGl0eS5vcGVuTGluaztcbiAgfVxufVxuIl19