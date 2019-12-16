/**
 * @fileoverview added by tsickle
 * Generated from: elements/value/EntityList.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNkIsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRTlDO0lBd0RFO1FBbENBLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsdUJBQWtCLEdBQVE7WUFDeEIsSUFBSSxFQUFFLE1BQU07WUFDWixhQUFhLEVBQUUsU0FBUztZQUN4QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixXQUFXLEVBQUUsYUFBYTtZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLE1BQU07WUFDckIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsV0FBVztZQUN0QixhQUFhLEVBQUUsWUFBWTtZQUMzQixrQkFBa0IsRUFBRSxZQUFZO1lBQ2hDLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO0lBRWEsQ0FBQzs7OztJQUVoQiw2QkFBUTs7O0lBQVI7O1FBQ0UsNEVBQTRFO1FBQzVFLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOztZQUNwRCxLQUFtQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQTlCLElBQUksTUFBTSxXQUFBO2dCQUNiLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RDOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7OztJQUVELDZCQUFROzs7O0lBQVIsVUFBUyxNQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELDZCQUFROzs7O0lBQVIsVUFBUyxNQUFXO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCwrQkFBVTs7OztJQUFWLFVBQVcsTUFBVztRQUNwQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsUUFBUSxFQUFFLGluQkFZUDtpQkFDSjs7Ozs7dUJBRUUsS0FBSzt1QkFFTCxLQUFLOztJQTZEUixpQkFBQztDQUFBLEFBakZELElBaUZDO1NBaEVZLFVBQVU7OztJQUNyQiwwQkFDVTs7SUFDViwwQkFDVTs7SUFDVixnQ0FBd0I7O0lBQ3hCLGlDQUFpQjs7SUFDakIsd0NBOEJFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVudGl0eS1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVudGl0eSBvZiBkYXRhLmRhdGFcIiBjbGFzcz1cImVudGl0eVwiPlxuICAgICAgICAgICAgPGEgKm5nSWY9XCJlbnRpdHkuaXNMaW5rYWJsZVwiIChjbGljayk9XCJvcGVuTGluayhlbnRpdHkpXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2lyY2xlIHt7IGVudGl0eS5jbGFzcyB9fVwiPjwvaT57eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZW50aXR5LmlzTGlua2FibGUgJiYgZW50aXR5LnBlcnNvblN1YnR5cGVcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaXJjbGUge3sgZW50aXR5LmNsYXNzIH19XCI+PC9pPnt7IGVudGl0eSB8IHJlbmRlciA6IG1ldGFEaXNwbGF5IH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlbnRpdHkuaXNMaW5rYWJsZSAmJiAhZW50aXR5LnBlcnNvblN1YnR5cGVcIj5cbiAgICAgICAgICAgICAgICB7eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZGF0YTogYW55O1xuICBASW5wdXQoKVxuICBtZXRhOiBhbnk7XG4gIGJhc2VFbnRpdHk6IHN0cmluZyA9ICcnO1xuICBtZXRhRGlzcGxheTogYW55O1xuICBFTlRJVFlfU0hPUlRfTkFNRVM6IGFueSA9IHtcbiAgICBMZWFkOiAnbGVhZCcsXG4gICAgQ2xpZW50Q29udGFjdDogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QxOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDI6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MzogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3Q0OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDU6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMTogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMjogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMzogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uNDogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uNTogJ2NvbXBhbnknLFxuICAgIE9wcG9ydHVuaXR5OiAnb3Bwb3J0dW5pdHknLFxuICAgIFRhc2s6ICd0YXNrJyxcbiAgICBOb3RlOiAnbm90ZScsXG4gICAgQ29ycG9yYXRlVXNlcjogJ3VzZXInLFxuICAgIENhbmRpZGF0ZTogJ2NhbmRpZGF0ZScsXG4gICAgSm9iT3JkZXI6ICdqb2InLFxuICAgIEpvYk9yZGVyMTogJ2pvYicsXG4gICAgSm9iT3JkZXIyOiAnam9iJyxcbiAgICBKb2JPcmRlcjM6ICdqb2InLFxuICAgIEpvYk9yZGVyNDogJ2pvYicsXG4gICAgSm9iT3JkZXI1OiAnam9iJyxcbiAgICBQbGFjZW1lbnQ6ICdwbGFjZW1lbnQnLFxuICAgIEpvYlN1Ym1pc3Npb246ICdzdWJtaXNzaW9uJyxcbiAgICBDYW5kaWRhdGVSZWZlcmVuY2U6ICdyZWZlcmVuY2VzJyxcbiAgICBEaXN0cmlidXRpb25MaXN0OiAnZGlzdHJpYnV0aW9uTGlzdCcsXG4gICAgQXBwb2ludG1lbnQ6ICdhcHBvaW50bWVudCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgLy8gdXNlIGEgbG9jYWwgY29weSBvZiB0aGUgbWV0YSB0byBzZXQgdGhlIHR5cGUgdG8gVE9fT05FIGZvciBwcm9wZXIgZGlzcGxheVxuICAgIC8vIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGlucHV0IG9iamVjdFxuICAgIHRoaXMubWV0YURpc3BsYXkgPSBIZWxwZXJzLmRlZXBDbG9uZSh0aGlzLm1ldGEpO1xuICAgIHRoaXMubWV0YURpc3BsYXkudHlwZSA9ICdUT19PTkUnO1xuICAgIHRoaXMuYmFzZUVudGl0eSA9IHRoaXMubWV0YS5hc3NvY2lhdGVkRW50aXR5LmVudGl0eTtcbiAgICBmb3IgKGxldCBlbnRpdHkgb2YgdGhpcy5kYXRhLmRhdGEpIHtcbiAgICAgIGVudGl0eS5pc0xpbmthYmxlID0gdGhpcy5pc0xpbmthYmxlKGVudGl0eSk7XG4gICAgICBlbnRpdHkuY2xhc3MgPSB0aGlzLmdldENsYXNzKGVudGl0eSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2xhc3MoZW50aXR5OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLkVOVElUWV9TSE9SVF9OQU1FU1tlbnRpdHkucGVyc29uU3VidHlwZV07XG4gIH1cblxuICBvcGVuTGluayhlbnRpdHk6IGFueSk6IHZvaWQge1xuICAgIGVudGl0eS5vcGVuTGluayhlbnRpdHkpO1xuICB9XG5cbiAgaXNMaW5rYWJsZShlbnRpdHk6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlbnRpdHkub3Blbkxpbms7XG4gIH1cbn1cbiJdfQ==