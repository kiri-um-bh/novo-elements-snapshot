/**
 * @fileoverview added by tsickle
 * Generated from: elements/value/EntityList.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
export class EntityList {
    constructor() {
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
    ngOnInit() {
        // use a local copy of the meta to set the type to TO_ONE for proper display
        // without changing the input object
        this.metaDisplay = Helpers.deepClone(this.meta);
        this.metaDisplay.type = 'TO_ONE';
        this.baseEntity = this.meta.associatedEntity.entity;
        for (const entity of this.data.data) {
            entity.isLinkable = this.isLinkable(entity);
            entity.class = this.getClass(entity);
        }
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getClass(entity) {
        return this.ENTITY_SHORT_NAMES[entity.personSubtype];
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    openLink(entity) {
        entity.openLink(entity);
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    isLinkable(entity) {
        return entity.openLink;
    }
}
EntityList.decorators = [
    { type: Component, args: [{
                selector: 'novo-entity-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
        <div *ngFor="let entity of data.data" class="entity">
            <a *ngIf="entity.isLinkable" (click)="openLink(entity)">
                <i class="bhi-circle {{ entity.class }}"></i>{{ entity | render : metaDisplay }}
            </a>
            <span *ngIf="!entity.isLinkable && entity.personSubtype">
                <i class="bhi-circle {{ entity.class }}"></i>{{ entity | render : metaDisplay }}
            </span>
            <span *ngIf="!entity.isLinkable && !entity.personSubtype">
                {{ entity | render : metaDisplay }}
            </span>
        </div>
    `
            }] }
];
/** @nocollapse */
EntityList.ctorParameters = () => [];
EntityList.propDecorators = {
    data: [{ type: Input }],
    meta: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQW1COUMsTUFBTSxPQUFPLFVBQVU7SUF1Q3JCO1FBbENBLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsdUJBQWtCLEdBQVE7WUFDeEIsSUFBSSxFQUFFLE1BQU07WUFDWixhQUFhLEVBQUUsU0FBUztZQUN4QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixXQUFXLEVBQUUsYUFBYTtZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLE1BQU07WUFDckIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsV0FBVztZQUN0QixhQUFhLEVBQUUsWUFBWTtZQUMzQixrQkFBa0IsRUFBRSxZQUFZO1lBQ2hDLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO0lBRWMsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sNEVBQTRFO1FBQzVFLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ3BELEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlQO2FBQ0o7Ozs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDBCQUNVOztJQUNWLDBCQUNVOztJQUNWLGdDQUF3Qjs7SUFDeEIsaUNBQWlCOztJQUNqQix3Q0E4QkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1lbnRpdHktbGlzdCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlbnRpdHkgb2YgZGF0YS5kYXRhXCIgY2xhc3M9XCJlbnRpdHlcIj5cbiAgICAgICAgICAgIDxhICpuZ0lmPVwiZW50aXR5LmlzTGlua2FibGVcIiAoY2xpY2spPVwib3BlbkxpbmsoZW50aXR5KVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNpcmNsZSB7eyBlbnRpdHkuY2xhc3MgfX1cIj48L2k+e3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVudGl0eS5pc0xpbmthYmxlICYmIGVudGl0eS5wZXJzb25TdWJ0eXBlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2lyY2xlIHt7IGVudGl0eS5jbGFzcyB9fVwiPjwvaT57eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZW50aXR5LmlzTGlua2FibGUgJiYgIWVudGl0eS5wZXJzb25TdWJ0eXBlXCI+XG4gICAgICAgICAgICAgICAge3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5TGlzdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTtcbiAgQElucHV0KClcbiAgbWV0YTogYW55O1xuICBiYXNlRW50aXR5OiBzdHJpbmcgPSAnJztcbiAgbWV0YURpc3BsYXk6IGFueTtcbiAgRU5USVRZX1NIT1JUX05BTUVTOiBhbnkgPSB7XG4gICAgTGVhZDogJ2xlYWQnLFxuICAgIENsaWVudENvbnRhY3Q6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MTogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QyOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDM6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0NDogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3Q1OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29ycG9yYXRpb246ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjE6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjI6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjM6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjQ6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjU6ICdjb21wYW55JyxcbiAgICBPcHBvcnR1bml0eTogJ29wcG9ydHVuaXR5JyxcbiAgICBUYXNrOiAndGFzaycsXG4gICAgTm90ZTogJ25vdGUnLFxuICAgIENvcnBvcmF0ZVVzZXI6ICd1c2VyJyxcbiAgICBDYW5kaWRhdGU6ICdjYW5kaWRhdGUnLFxuICAgIEpvYk9yZGVyOiAnam9iJyxcbiAgICBKb2JPcmRlcjE6ICdqb2InLFxuICAgIEpvYk9yZGVyMjogJ2pvYicsXG4gICAgSm9iT3JkZXIzOiAnam9iJyxcbiAgICBKb2JPcmRlcjQ6ICdqb2InLFxuICAgIEpvYk9yZGVyNTogJ2pvYicsXG4gICAgUGxhY2VtZW50OiAncGxhY2VtZW50JyxcbiAgICBKb2JTdWJtaXNzaW9uOiAnc3VibWlzc2lvbicsXG4gICAgQ2FuZGlkYXRlUmVmZXJlbmNlOiAncmVmZXJlbmNlcycsXG4gICAgRGlzdHJpYnV0aW9uTGlzdDogJ2Rpc3RyaWJ1dGlvbkxpc3QnLFxuICAgIEFwcG9pbnRtZW50OiAnYXBwb2ludG1lbnQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICAvLyB1c2UgYSBsb2NhbCBjb3B5IG9mIHRoZSBtZXRhIHRvIHNldCB0aGUgdHlwZSB0byBUT19PTkUgZm9yIHByb3BlciBkaXNwbGF5XG4gICAgLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgdGhpcy5tZXRhRGlzcGxheSA9IEhlbHBlcnMuZGVlcENsb25lKHRoaXMubWV0YSk7XG4gICAgdGhpcy5tZXRhRGlzcGxheS50eXBlID0gJ1RPX09ORSc7XG4gICAgdGhpcy5iYXNlRW50aXR5ID0gdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHRoaXMuZGF0YS5kYXRhKSB7XG4gICAgICBlbnRpdHkuaXNMaW5rYWJsZSA9IHRoaXMuaXNMaW5rYWJsZShlbnRpdHkpO1xuICAgICAgZW50aXR5LmNsYXNzID0gdGhpcy5nZXRDbGFzcyhlbnRpdHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldENsYXNzKGVudGl0eTogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5FTlRJVFlfU0hPUlRfTkFNRVNbZW50aXR5LnBlcnNvblN1YnR5cGVdO1xuICB9XG5cbiAgb3BlbkxpbmsoZW50aXR5OiBhbnkpOiB2b2lkIHtcbiAgICBlbnRpdHkub3BlbkxpbmsoZW50aXR5KTtcbiAgfVxuXG4gIGlzTGlua2FibGUoZW50aXR5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZW50aXR5Lm9wZW5MaW5rO1xuICB9XG59XG4iXX0=