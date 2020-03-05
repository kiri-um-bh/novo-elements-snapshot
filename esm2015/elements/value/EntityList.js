/**
 * @fileoverview added by tsickle
 * Generated from: elements/value/EntityList.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE2Qix1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtQjlDLE1BQU0sT0FBTyxVQUFVO0lBdUNyQjtRQWxDQSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLHVCQUFrQixHQUFRO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLFNBQVM7WUFDeEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsYUFBYSxFQUFFLFlBQVk7WUFDM0Isa0JBQWtCLEVBQUUsWUFBWTtZQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7WUFDcEMsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQztJQUVhLENBQUM7Ozs7SUFFaEIsUUFBUTtRQUNOLDRFQUE0RTtRQUM1RSxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBVztRQUNwQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZUDthQUNKOzs7OzttQkFFRSxLQUFLO21CQUVMLEtBQUs7Ozs7SUFGTiwwQkFDVTs7SUFDViwwQkFDVTs7SUFDVixnQ0FBd0I7O0lBQ3hCLGlDQUFpQjs7SUFDakIsd0NBOEJFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVudGl0eS1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVudGl0eSBvZiBkYXRhLmRhdGFcIiBjbGFzcz1cImVudGl0eVwiPlxuICAgICAgICAgICAgPGEgKm5nSWY9XCJlbnRpdHkuaXNMaW5rYWJsZVwiIChjbGljayk9XCJvcGVuTGluayhlbnRpdHkpXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2lyY2xlIHt7IGVudGl0eS5jbGFzcyB9fVwiPjwvaT57eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZW50aXR5LmlzTGlua2FibGUgJiYgZW50aXR5LnBlcnNvblN1YnR5cGVcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaXJjbGUge3sgZW50aXR5LmNsYXNzIH19XCI+PC9pPnt7IGVudGl0eSB8IHJlbmRlciA6IG1ldGFEaXNwbGF5IH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlbnRpdHkuaXNMaW5rYWJsZSAmJiAhZW50aXR5LnBlcnNvblN1YnR5cGVcIj5cbiAgICAgICAgICAgICAgICB7eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZGF0YTogYW55O1xuICBASW5wdXQoKVxuICBtZXRhOiBhbnk7XG4gIGJhc2VFbnRpdHk6IHN0cmluZyA9ICcnO1xuICBtZXRhRGlzcGxheTogYW55O1xuICBFTlRJVFlfU0hPUlRfTkFNRVM6IGFueSA9IHtcbiAgICBMZWFkOiAnbGVhZCcsXG4gICAgQ2xpZW50Q29udGFjdDogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QxOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDI6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MzogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3Q0OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDU6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMTogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMjogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMzogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uNDogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uNTogJ2NvbXBhbnknLFxuICAgIE9wcG9ydHVuaXR5OiAnb3Bwb3J0dW5pdHknLFxuICAgIFRhc2s6ICd0YXNrJyxcbiAgICBOb3RlOiAnbm90ZScsXG4gICAgQ29ycG9yYXRlVXNlcjogJ3VzZXInLFxuICAgIENhbmRpZGF0ZTogJ2NhbmRpZGF0ZScsXG4gICAgSm9iT3JkZXI6ICdqb2InLFxuICAgIEpvYk9yZGVyMTogJ2pvYicsXG4gICAgSm9iT3JkZXIyOiAnam9iJyxcbiAgICBKb2JPcmRlcjM6ICdqb2InLFxuICAgIEpvYk9yZGVyNDogJ2pvYicsXG4gICAgSm9iT3JkZXI1OiAnam9iJyxcbiAgICBQbGFjZW1lbnQ6ICdwbGFjZW1lbnQnLFxuICAgIEpvYlN1Ym1pc3Npb246ICdzdWJtaXNzaW9uJyxcbiAgICBDYW5kaWRhdGVSZWZlcmVuY2U6ICdyZWZlcmVuY2VzJyxcbiAgICBEaXN0cmlidXRpb25MaXN0OiAnZGlzdHJpYnV0aW9uTGlzdCcsXG4gICAgQXBwb2ludG1lbnQ6ICdhcHBvaW50bWVudCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgLy8gdXNlIGEgbG9jYWwgY29weSBvZiB0aGUgbWV0YSB0byBzZXQgdGhlIHR5cGUgdG8gVE9fT05FIGZvciBwcm9wZXIgZGlzcGxheVxuICAgIC8vIHdpdGhvdXQgY2hhbmdpbmcgdGhlIGlucHV0IG9iamVjdFxuICAgIHRoaXMubWV0YURpc3BsYXkgPSBIZWxwZXJzLmRlZXBDbG9uZSh0aGlzLm1ldGEpO1xuICAgIHRoaXMubWV0YURpc3BsYXkudHlwZSA9ICdUT19PTkUnO1xuICAgIHRoaXMuYmFzZUVudGl0eSA9IHRoaXMubWV0YS5hc3NvY2lhdGVkRW50aXR5LmVudGl0eTtcbiAgICBmb3IgKGNvbnN0IGVudGl0eSBvZiB0aGlzLmRhdGEuZGF0YSkge1xuICAgICAgZW50aXR5LmlzTGlua2FibGUgPSB0aGlzLmlzTGlua2FibGUoZW50aXR5KTtcbiAgICAgIGVudGl0eS5jbGFzcyA9IHRoaXMuZ2V0Q2xhc3MoZW50aXR5KTtcbiAgICB9XG4gIH1cblxuICBnZXRDbGFzcyhlbnRpdHk6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuRU5USVRZX1NIT1JUX05BTUVTW2VudGl0eS5wZXJzb25TdWJ0eXBlXTtcbiAgfVxuXG4gIG9wZW5MaW5rKGVudGl0eTogYW55KTogdm9pZCB7XG4gICAgZW50aXR5Lm9wZW5MaW5rKGVudGl0eSk7XG4gIH1cblxuICBpc0xpbmthYmxlKGVudGl0eTogYW55KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVudGl0eS5vcGVuTGluaztcbiAgfVxufVxuIl19