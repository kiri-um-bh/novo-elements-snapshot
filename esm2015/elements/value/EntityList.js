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
    getClass(entity) {
        return this.ENTITY_SHORT_NAMES[entity.personSubtype];
    }
    openLink(entity) {
        entity.openLink(entity);
    }
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
            },] }
];
EntityList.ctorParameters = () => [];
EntityList.propDecorators = {
    data: [{ type: Input }],
    meta: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFtQjlDLE1BQU0sT0FBTyxVQUFVO0lBdUNyQjtRQWxDQSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLHVCQUFrQixHQUFRO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLFNBQVM7WUFDeEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsYUFBYSxFQUFFLFlBQVk7WUFDM0Isa0JBQWtCLEVBQUUsWUFBWTtZQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7WUFDcEMsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQztJQUVjLENBQUM7SUFFakIsUUFBUTtRQUNOLDRFQUE0RTtRQUM1RSxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNwRCxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLE1BQVc7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBVztRQUNwQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7O1lBaEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7S0FZUDthQUNKOzs7O21CQUVFLEtBQUs7bUJBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVudGl0eS1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGVudGl0eSBvZiBkYXRhLmRhdGFcIiBjbGFzcz1cImVudGl0eVwiPlxuICAgICAgICAgICAgPGEgKm5nSWY9XCJlbnRpdHkuaXNMaW5rYWJsZVwiIChjbGljayk9XCJvcGVuTGluayhlbnRpdHkpXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2lyY2xlIHt7IGVudGl0eS5jbGFzcyB9fVwiPjwvaT57eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZW50aXR5LmlzTGlua2FibGUgJiYgZW50aXR5LnBlcnNvblN1YnR5cGVcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1jaXJjbGUge3sgZW50aXR5LmNsYXNzIH19XCI+PC9pPnt7IGVudGl0eSB8IHJlbmRlciA6IG1ldGFEaXNwbGF5IH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFlbnRpdHkuaXNMaW5rYWJsZSAmJiAhZW50aXR5LnBlcnNvblN1YnR5cGVcIj5cbiAgICAgICAgICAgICAgICB7eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBFbnRpdHlMaXN0IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgZGF0YTogYW55O1xuICBASW5wdXQoKVxuICBtZXRhOiBhbnk7XG4gIGJhc2VFbnRpdHk6IHN0cmluZyA9ICcnO1xuICBtZXRhRGlzcGxheTogYW55O1xuICBFTlRJVFlfU0hPUlRfTkFNRVM6IGFueSA9IHtcbiAgICBMZWFkOiAnbGVhZCcsXG4gICAgQ2xpZW50Q29udGFjdDogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QxOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDI6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MzogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3Q0OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDU6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMTogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMjogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uMzogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uNDogJ2NvbXBhbnknLFxuICAgIENsaWVudENvcnBvcmF0aW9uNTogJ2NvbXBhbnknLFxuICAgIE9wcG9ydHVuaXR5OiAnb3Bwb3J0dW5pdHknLFxuICAgIFRhc2s6ICd0YXNrJyxcbiAgICBOb3RlOiAnbm90ZScsXG4gICAgQ29ycG9yYXRlVXNlcjogJ3VzZXInLFxuICAgIENhbmRpZGF0ZTogJ2NhbmRpZGF0ZScsXG4gICAgSm9iT3JkZXI6ICdqb2InLFxuICAgIEpvYk9yZGVyMTogJ2pvYicsXG4gICAgSm9iT3JkZXIyOiAnam9iJyxcbiAgICBKb2JPcmRlcjM6ICdqb2InLFxuICAgIEpvYk9yZGVyNDogJ2pvYicsXG4gICAgSm9iT3JkZXI1OiAnam9iJyxcbiAgICBQbGFjZW1lbnQ6ICdwbGFjZW1lbnQnLFxuICAgIEpvYlN1Ym1pc3Npb246ICdzdWJtaXNzaW9uJyxcbiAgICBDYW5kaWRhdGVSZWZlcmVuY2U6ICdyZWZlcmVuY2VzJyxcbiAgICBEaXN0cmlidXRpb25MaXN0OiAnZGlzdHJpYnV0aW9uTGlzdCcsXG4gICAgQXBwb2ludG1lbnQ6ICdhcHBvaW50bWVudCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIC8vIHVzZSBhIGxvY2FsIGNvcHkgb2YgdGhlIG1ldGEgdG8gc2V0IHRoZSB0eXBlIHRvIFRPX09ORSBmb3IgcHJvcGVyIGRpc3BsYXlcbiAgICAvLyB3aXRob3V0IGNoYW5naW5nIHRoZSBpbnB1dCBvYmplY3RcbiAgICB0aGlzLm1ldGFEaXNwbGF5ID0gSGVscGVycy5kZWVwQ2xvbmUodGhpcy5tZXRhKTtcbiAgICB0aGlzLm1ldGFEaXNwbGF5LnR5cGUgPSAnVE9fT05FJztcbiAgICB0aGlzLmJhc2VFbnRpdHkgPSB0aGlzLm1ldGEuYXNzb2NpYXRlZEVudGl0eS5lbnRpdHk7XG4gICAgZm9yIChjb25zdCBlbnRpdHkgb2YgdGhpcy5kYXRhLmRhdGEpIHtcbiAgICAgIGVudGl0eS5pc0xpbmthYmxlID0gdGhpcy5pc0xpbmthYmxlKGVudGl0eSk7XG4gICAgICBlbnRpdHkuY2xhc3MgPSB0aGlzLmdldENsYXNzKGVudGl0eSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2xhc3MoZW50aXR5OiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLkVOVElUWV9TSE9SVF9OQU1FU1tlbnRpdHkucGVyc29uU3VidHlwZV07XG4gIH1cblxuICBvcGVuTGluayhlbnRpdHk6IGFueSk6IHZvaWQge1xuICAgIGVudGl0eS5vcGVuTGluayhlbnRpdHkpO1xuICB9XG5cbiAgaXNMaW5rYWJsZShlbnRpdHk6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlbnRpdHkub3Blbkxpbms7XG4gIH1cbn1cbiJdfQ==