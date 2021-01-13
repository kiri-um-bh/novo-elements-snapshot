// NG2
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./Render";
function EntityList_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function EntityList_div_0_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const entity_r1 = i0.ɵɵnextContext().$implicit; const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.openLink(entity_r1); });
    i0.ɵɵelement(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "render");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entity_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("bhi-circle ", entity_r1.class, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(3, 4, entity_r1, ctx_r2.metaDisplay), " ");
} }
function EntityList_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "render");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entity_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("bhi-circle ", entity_r1.class, "");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(3, 4, entity_r1, ctx_r3.metaDisplay), " ");
} }
function EntityList_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "render");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entity_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, entity_r1, ctx_r4.metaDisplay), " ");
} }
function EntityList_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, EntityList_div_0_a_1_Template, 4, 7, "a", 2);
    i0.ɵɵtemplate(2, EntityList_div_0_span_2_Template, 4, 7, "span", 3);
    i0.ɵɵtemplate(3, EntityList_div_0_span_3_Template, 3, 4, "span", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entity_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entity_r1.isLinkable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entity_r1.isLinkable && entity_r1.personSubtype);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entity_r1.isLinkable && !entity_r1.personSubtype);
} }
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
EntityList.ɵfac = function EntityList_Factory(t) { return new (t || EntityList)(); };
EntityList.ɵcmp = i0.ɵɵdefineComponent({ type: EntityList, selectors: [["novo-entity-list"]], inputs: { data: "data", meta: "meta" }, decls: 1, vars: 1, consts: [["class", "entity", 4, "ngFor", "ngForOf"], [1, "entity"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"]], template: function EntityList_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, EntityList_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.data.data);
    } }, directives: [i1.NgForOf, i1.NgIf], pipes: [i2.RenderPipe], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityList, [{
        type: Component,
        args: [{
                selector: 'novo-entity-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div *ngFor="let entity of data.data" class="entity">
      <a *ngIf="entity.isLinkable" (click)="openLink(entity)">
        <i class="bhi-circle {{ entity.class }}"></i>{{ entity | render: metaDisplay }}
      </a>
      <span *ngIf="!entity.isLinkable && entity.personSubtype">
        <i class="bhi-circle {{ entity.class }}"></i>{{ entity | render: metaDisplay }}
      </span>
      <span *ngIf="!entity.isLinkable && !entity.personSubtype">
        {{ entity | render: metaDisplay }}
      </span>
    </div>
  `,
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], meta: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3ZhbHVlL0VudGl0eUxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7O0lBT3hDLDRCQUNFO0lBRDJCLG9PQUEwQjtJQUNyRCxvQkFBNkM7SUFBQSxZQUMvQzs7SUFBQSxpQkFBSTs7OztJQURDLGVBQXFDO0lBQXJDLDZEQUFxQztJQUFLLGVBQy9DO0lBRCtDLG1GQUMvQzs7O0lBQ0EsNEJBQ0U7SUFBQSxvQkFBNkM7SUFBQSxZQUMvQzs7SUFBQSxpQkFBTzs7OztJQURGLGVBQXFDO0lBQXJDLDZEQUFxQztJQUFLLGVBQy9DO0lBRCtDLG1GQUMvQzs7O0lBQ0EsNEJBQ0U7SUFBQSxZQUNGOztJQUFBLGlCQUFPOzs7O0lBREwsZUFDRjtJQURFLG9GQUNGOzs7SUFURiw4QkFDRTtJQUFBLDZEQUNFO0lBRUYsbUVBQ0U7SUFFRixtRUFDRTtJQUVKLGlCQUFNOzs7SUFURCxlQUF5QjtJQUF6QiwyQ0FBeUI7SUFHdEIsZUFBa0Q7SUFBbEQsdUVBQWtEO0lBR2xELGVBQW1EO0lBQW5ELHdFQUFtRDs7QUFNL0QsTUFBTSxPQUFPLFVBQVU7SUF1Q3JCO1FBbENBLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFeEIsdUJBQWtCLEdBQVE7WUFDeEIsSUFBSSxFQUFFLE1BQU07WUFDWixhQUFhLEVBQUUsU0FBUztZQUN4QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixjQUFjLEVBQUUsU0FBUztZQUN6QixpQkFBaUIsRUFBRSxTQUFTO1lBQzVCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixXQUFXLEVBQUUsYUFBYTtZQUMxQixJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLE1BQU07WUFDckIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsS0FBSztZQUNoQixTQUFTLEVBQUUsV0FBVztZQUN0QixhQUFhLEVBQUUsWUFBWTtZQUMzQixrQkFBa0IsRUFBRSxZQUFZO1lBQ2hDLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxXQUFXLEVBQUUsYUFBYTtTQUMzQixDQUFDO0lBRWEsQ0FBQztJQUVoQixRQUFRO1FBQ04sNEVBQTRFO1FBQzVFLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQ3BELEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbkMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsTUFBVztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFXO1FBQ3BCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDOztvRUEvRFUsVUFBVTsrQ0FBVixVQUFVO1FBYm5CLDJEQUNFOztRQURHLHVDQUFnQzs7a0RBYTVCLFVBQVU7Y0FqQnRCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDthQUNGO3NDQUdDLElBQUk7a0JBREgsS0FBSztZQUdOLElBQUk7a0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWVudGl0eS1saXN0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgZW50aXR5IG9mIGRhdGEuZGF0YVwiIGNsYXNzPVwiZW50aXR5XCI+XG4gICAgICA8YSAqbmdJZj1cImVudGl0eS5pc0xpbmthYmxlXCIgKGNsaWNrKT1cIm9wZW5MaW5rKGVudGl0eSlcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJiaGktY2lyY2xlIHt7IGVudGl0eS5jbGFzcyB9fVwiPjwvaT57eyBlbnRpdHkgfCByZW5kZXI6IG1ldGFEaXNwbGF5IH19XG4gICAgICA8L2E+XG4gICAgICA8c3BhbiAqbmdJZj1cIiFlbnRpdHkuaXNMaW5rYWJsZSAmJiBlbnRpdHkucGVyc29uU3VidHlwZVwiPlxuICAgICAgICA8aSBjbGFzcz1cImJoaS1jaXJjbGUge3sgZW50aXR5LmNsYXNzIH19XCI+PC9pPnt7IGVudGl0eSB8IHJlbmRlcjogbWV0YURpc3BsYXkgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiIWVudGl0eS5pc0xpbmthYmxlICYmICFlbnRpdHkucGVyc29uU3VidHlwZVwiPlxuICAgICAgICB7eyBlbnRpdHkgfCByZW5kZXI6IG1ldGFEaXNwbGF5IH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVudGl0eUxpc3QgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpXG4gIG1ldGE6IGFueTtcbiAgYmFzZUVudGl0eTogc3RyaW5nID0gJyc7XG4gIG1ldGFEaXNwbGF5OiBhbnk7XG4gIEVOVElUWV9TSE9SVF9OQU1FUzogYW55ID0ge1xuICAgIExlYWQ6ICdsZWFkJyxcbiAgICBDbGllbnRDb250YWN0OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDE6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MjogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QzOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDQ6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0NTogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvcnBvcmF0aW9uOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24xOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24yOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb24zOiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb240OiAnY29tcGFueScsXG4gICAgQ2xpZW50Q29ycG9yYXRpb241OiAnY29tcGFueScsXG4gICAgT3Bwb3J0dW5pdHk6ICdvcHBvcnR1bml0eScsXG4gICAgVGFzazogJ3Rhc2snLFxuICAgIE5vdGU6ICdub3RlJyxcbiAgICBDb3Jwb3JhdGVVc2VyOiAndXNlcicsXG4gICAgQ2FuZGlkYXRlOiAnY2FuZGlkYXRlJyxcbiAgICBKb2JPcmRlcjogJ2pvYicsXG4gICAgSm9iT3JkZXIxOiAnam9iJyxcbiAgICBKb2JPcmRlcjI6ICdqb2InLFxuICAgIEpvYk9yZGVyMzogJ2pvYicsXG4gICAgSm9iT3JkZXI0OiAnam9iJyxcbiAgICBKb2JPcmRlcjU6ICdqb2InLFxuICAgIFBsYWNlbWVudDogJ3BsYWNlbWVudCcsXG4gICAgSm9iU3VibWlzc2lvbjogJ3N1Ym1pc3Npb24nLFxuICAgIENhbmRpZGF0ZVJlZmVyZW5jZTogJ3JlZmVyZW5jZXMnLFxuICAgIERpc3RyaWJ1dGlvbkxpc3Q6ICdkaXN0cmlidXRpb25MaXN0JyxcbiAgICBBcHBvaW50bWVudDogJ2FwcG9pbnRtZW50JyxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICAvLyB1c2UgYSBsb2NhbCBjb3B5IG9mIHRoZSBtZXRhIHRvIHNldCB0aGUgdHlwZSB0byBUT19PTkUgZm9yIHByb3BlciBkaXNwbGF5XG4gICAgLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgdGhpcy5tZXRhRGlzcGxheSA9IEhlbHBlcnMuZGVlcENsb25lKHRoaXMubWV0YSk7XG4gICAgdGhpcy5tZXRhRGlzcGxheS50eXBlID0gJ1RPX09ORSc7XG4gICAgdGhpcy5iYXNlRW50aXR5ID0gdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHRoaXMuZGF0YS5kYXRhKSB7XG4gICAgICBlbnRpdHkuaXNMaW5rYWJsZSA9IHRoaXMuaXNMaW5rYWJsZShlbnRpdHkpO1xuICAgICAgZW50aXR5LmNsYXNzID0gdGhpcy5nZXRDbGFzcyhlbnRpdHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldENsYXNzKGVudGl0eTogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5FTlRJVFlfU0hPUlRfTkFNRVNbZW50aXR5LnBlcnNvblN1YnR5cGVdO1xuICB9XG5cbiAgb3BlbkxpbmsoZW50aXR5OiBhbnkpOiB2b2lkIHtcbiAgICBlbnRpdHkub3BlbkxpbmsoZW50aXR5KTtcbiAgfVxuXG4gIGlzTGlua2FibGUoZW50aXR5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZW50aXR5Lm9wZW5MaW5rO1xuICB9XG59XG4iXX0=