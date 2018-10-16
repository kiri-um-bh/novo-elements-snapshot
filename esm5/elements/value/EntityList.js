/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE2Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFOUM7SUF3REU7UUFsQ0EsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4Qix1QkFBa0IsR0FBUTtZQUN4QixJQUFJLEVBQUUsTUFBTTtZQUNaLGFBQWEsRUFBRSxTQUFTO1lBQ3hCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGlCQUFpQixFQUFFLFNBQVM7WUFDNUIsa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLFdBQVcsRUFBRSxhQUFhO1lBQzFCLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixhQUFhLEVBQUUsTUFBTTtZQUNyQixTQUFTLEVBQUUsV0FBVztZQUN0QixRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLGFBQWEsRUFBRSxZQUFZO1lBQzNCLGtCQUFrQixFQUFFLFlBQVk7WUFDaEMsZ0JBQWdCLEVBQUUsa0JBQWtCO1lBQ3BDLFdBQVcsRUFBRSxhQUFhO1NBQzNCLENBQUM7SUFFYSxDQUFDOzs7O0lBRWhCLDZCQUFROzs7SUFBUjs7UUFDRSw0RUFBNEU7UUFDNUUsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O1lBQ3BELEtBQW1CLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBSSxNQUFNLFdBQUE7Z0JBQ2IsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEM7Ozs7Ozs7OztJQUNILENBQUM7Ozs7O0lBRUQsNkJBQVE7Ozs7SUFBUixVQUFTLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsNkJBQVE7Ozs7SUFBUixVQUFTLE1BQVc7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELCtCQUFVOzs7O0lBQVYsVUFBVyxNQUFXO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOztnQkFoRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsaW5CQVlQO2lCQUNKOzs7O3VCQUVFLEtBQUs7dUJBRUwsS0FBSzs7SUE2RFIsaUJBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQWhFWSxVQUFVOzs7SUFDckIsMEJBQ1U7O0lBQ1YsMEJBQ1U7O0lBQ1YsZ0NBQXdCOztJQUN4QixpQ0FBaUI7O0lBQ2pCLHdDQThCRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1lbnRpdHktbGlzdCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlbnRpdHkgb2YgZGF0YS5kYXRhXCIgY2xhc3M9XCJlbnRpdHlcIj5cbiAgICAgICAgICAgIDxhICpuZ0lmPVwiZW50aXR5LmlzTGlua2FibGVcIiAoY2xpY2spPVwib3BlbkxpbmsoZW50aXR5KVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNpcmNsZSB7eyBlbnRpdHkuY2xhc3MgfX1cIj48L2k+e3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVudGl0eS5pc0xpbmthYmxlICYmIGVudGl0eS5wZXJzb25TdWJ0eXBlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2lyY2xlIHt7IGVudGl0eS5jbGFzcyB9fVwiPjwvaT57eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZW50aXR5LmlzTGlua2FibGUgJiYgIWVudGl0eS5wZXJzb25TdWJ0eXBlXCI+XG4gICAgICAgICAgICAgICAge3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5TGlzdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTtcbiAgQElucHV0KClcbiAgbWV0YTogYW55O1xuICBiYXNlRW50aXR5OiBzdHJpbmcgPSAnJztcbiAgbWV0YURpc3BsYXk6IGFueTtcbiAgRU5USVRZX1NIT1JUX05BTUVTOiBhbnkgPSB7XG4gICAgTGVhZDogJ2xlYWQnLFxuICAgIENsaWVudENvbnRhY3Q6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MTogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QyOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDM6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0NDogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3Q1OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29ycG9yYXRpb246ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjE6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjI6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjM6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjQ6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjU6ICdjb21wYW55JyxcbiAgICBPcHBvcnR1bml0eTogJ29wcG9ydHVuaXR5JyxcbiAgICBUYXNrOiAndGFzaycsXG4gICAgTm90ZTogJ25vdGUnLFxuICAgIENvcnBvcmF0ZVVzZXI6ICd1c2VyJyxcbiAgICBDYW5kaWRhdGU6ICdjYW5kaWRhdGUnLFxuICAgIEpvYk9yZGVyOiAnam9iJyxcbiAgICBKb2JPcmRlcjE6ICdqb2InLFxuICAgIEpvYk9yZGVyMjogJ2pvYicsXG4gICAgSm9iT3JkZXIzOiAnam9iJyxcbiAgICBKb2JPcmRlcjQ6ICdqb2InLFxuICAgIEpvYk9yZGVyNTogJ2pvYicsXG4gICAgUGxhY2VtZW50OiAncGxhY2VtZW50JyxcbiAgICBKb2JTdWJtaXNzaW9uOiAnc3VibWlzc2lvbicsXG4gICAgQ2FuZGlkYXRlUmVmZXJlbmNlOiAncmVmZXJlbmNlcycsXG4gICAgRGlzdHJpYnV0aW9uTGlzdDogJ2Rpc3RyaWJ1dGlvbkxpc3QnLFxuICAgIEFwcG9pbnRtZW50OiAnYXBwb2ludG1lbnQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIC8vIHVzZSBhIGxvY2FsIGNvcHkgb2YgdGhlIG1ldGEgdG8gc2V0IHRoZSB0eXBlIHRvIFRPX09ORSBmb3IgcHJvcGVyIGRpc3BsYXlcbiAgICAvLyB3aXRob3V0IGNoYW5naW5nIHRoZSBpbnB1dCBvYmplY3RcbiAgICB0aGlzLm1ldGFEaXNwbGF5ID0gSGVscGVycy5kZWVwQ2xvbmUodGhpcy5tZXRhKTtcbiAgICB0aGlzLm1ldGFEaXNwbGF5LnR5cGUgPSAnVE9fT05FJztcbiAgICB0aGlzLmJhc2VFbnRpdHkgPSB0aGlzLm1ldGEuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHk7XG4gICAgZm9yIChsZXQgZW50aXR5IG9mIHRoaXMuZGF0YS5kYXRhKSB7XG4gICAgICBlbnRpdHkuaXNMaW5rYWJsZSA9IHRoaXMuaXNMaW5rYWJsZShlbnRpdHkpO1xuICAgICAgZW50aXR5LmNsYXNzID0gdGhpcy5nZXRDbGFzcyhlbnRpdHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldENsYXNzKGVudGl0eTogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5FTlRJVFlfU0hPUlRfTkFNRVNbZW50aXR5LnBlcnNvblN1YnR5cGVdO1xuICB9XG5cbiAgb3BlbkxpbmsoZW50aXR5OiBhbnkpOiB2b2lkIHtcbiAgICBlbnRpdHkub3BlbkxpbmsoZW50aXR5KTtcbiAgfVxuXG4gIGlzTGlua2FibGUoZW50aXR5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZW50aXR5Lm9wZW5MaW5rO1xuICB9XG59XG4iXX0=