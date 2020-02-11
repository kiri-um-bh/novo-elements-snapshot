/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
        for (let entity of this.data.data) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTZCLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQW1COUMsTUFBTSxPQUFPLFVBQVU7SUF1Q3JCO1FBbENBLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsdUJBQWtCLEdBQVE7WUFDeEIsSUFBSSxFQUFFLE1BQU07WUFDWixhQUFhLEVBQUUsU0FBUztZQUN4QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixXQUFXLEVBQUUsYUFBYTtZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLE1BQU07WUFDckIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsV0FBVztZQUN0QixhQUFhLEVBQUUsWUFBWTtZQUMzQixrQkFBa0IsRUFBRSxZQUFZO1lBQ2hDLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO0lBRWEsQ0FBQzs7OztJQUVoQixRQUFRO1FBQ04sNEVBQTRFO1FBQzVFLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ3BELEtBQUssSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztLQVlQO2FBQ0o7Ozs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSzs7OztJQUZOLDBCQUNVOztJQUNWLDBCQUNVOztJQUNWLGdDQUF3Qjs7SUFDeEIsaUNBQWlCOztJQUNqQix3Q0E4QkUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZW50aXR5LWxpc3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIGRhdGEuZGF0YVwiIGNsYXNzPVwiZW50aXR5XCI+XG4gICAgICAgICAgICA8YSAqbmdJZj1cImVudGl0eS5pc0xpbmthYmxlXCIgKGNsaWNrKT1cIm9wZW5MaW5rKGVudGl0eSlcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaXJjbGUge3sgZW50aXR5LmNsYXNzIH19XCI+PC9pPnt7IGVudGl0eSB8IHJlbmRlciA6IG1ldGFEaXNwbGF5IH19XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlbnRpdHkuaXNMaW5rYWJsZSAmJiBlbnRpdHkucGVyc29uU3VidHlwZVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNpcmNsZSB7eyBlbnRpdHkuY2xhc3MgfX1cIj48L2k+e3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVudGl0eS5pc0xpbmthYmxlICYmICFlbnRpdHkucGVyc29uU3VidHlwZVwiPlxuICAgICAgICAgICAgICAgIHt7IGVudGl0eSB8IHJlbmRlciA6IG1ldGFEaXNwbGF5IH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUxpc3QgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueTtcbiAgYmFzZUVudGl0eTogc3RyaW5nID0gJyc7XG4gIG1ldGFEaXNwbGF5OiBhbnk7XG4gIEVOVElUWV9TSE9SVF9OQU1FUzogYW55ID0ge1xuICAgIExlYWQ6ICdsZWFkJyxcbiAgICBDbGllbnRDb250YWN0OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDE6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MjogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QzOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDQ6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0NTogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvcnBvcmF0aW9uOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24xOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24yOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24zOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb240OiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb241OiAnY29tcGFueScsXG4gICAgT3Bwb3J0dW5pdHk6ICdvcHBvcnR1bml0eScsXG4gICAgVGFzazogJ3Rhc2snLFxuICAgIE5vdGU6ICdub3RlJyxcbiAgICBDb3Jwb3JhdGVVc2VyOiAndXNlcicsXG4gICAgQ2FuZGlkYXRlOiAnY2FuZGlkYXRlJyxcbiAgICBKb2JPcmRlcjogJ2pvYicsXG4gICAgSm9iT3JkZXIxOiAnam9iJyxcbiAgICBKb2JPcmRlcjI6ICdqb2InLFxuICAgIEpvYk9yZGVyMzogJ2pvYicsXG4gICAgSm9iT3JkZXI0OiAnam9iJyxcbiAgICBKb2JPcmRlcjU6ICdqb2InLFxuICAgIFBsYWNlbWVudDogJ3BsYWNlbWVudCcsXG4gICAgSm9iU3VibWlzc2lvbjogJ3N1Ym1pc3Npb24nLFxuICAgIENhbmRpZGF0ZVJlZmVyZW5jZTogJ3JlZmVyZW5jZXMnLFxuICAgIERpc3RyaWJ1dGlvbkxpc3Q6ICdkaXN0cmlidXRpb25MaXN0JyxcbiAgICBBcHBvaW50bWVudDogJ2FwcG9pbnRtZW50JyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICAvLyB1c2UgYSBsb2NhbCBjb3B5IG9mIHRoZSBtZXRhIHRvIHNldCB0aGUgdHlwZSB0byBUT19PTkUgZm9yIHByb3BlciBkaXNwbGF5XG4gICAgLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgdGhpcy5tZXRhRGlzcGxheSA9IEhlbHBlcnMuZGVlcENsb25lKHRoaXMubWV0YSk7XG4gICAgdGhpcy5tZXRhRGlzcGxheS50eXBlID0gJ1RPX09ORSc7XG4gICAgdGhpcy5iYXNlRW50aXR5ID0gdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIGZvciAobGV0IGVudGl0eSBvZiB0aGlzLmRhdGEuZGF0YSkge1xuICAgICAgZW50aXR5LmlzTGlua2FibGUgPSB0aGlzLmlzTGlua2FibGUoZW50aXR5KTtcbiAgICAgIGVudGl0eS5jbGFzcyA9IHRoaXMuZ2V0Q2xhc3MoZW50aXR5KTtcbiAgICB9XG4gIH1cblxuICBnZXRDbGFzcyhlbnRpdHk6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuRU5USVRZX1NIT1JUX05BTUVTW2VudGl0eS5wZXJzb25TdWJ0eXBlXTtcbiAgfVxuXG4gIG9wZW5MaW5rKGVudGl0eTogYW55KTogdm9pZCB7XG4gICAgZW50aXR5Lm9wZW5MaW5rKGVudGl0eSk7XG4gIH1cblxuICBpc0xpbmthYmxlKGVudGl0eTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVudGl0eS5vcGVuTGluaztcbiAgfVxufVxuIl19