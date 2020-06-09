import { __values } from "tslib";
// NG2
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Helpers } from '../../utils/Helpers';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./Render";
function EntityList_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function EntityList_div_0_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); var entity_r1 = i0.ɵɵnextContext().$implicit; var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.openLink(entity_r1); });
    i0.ɵɵelement(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "render");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var entity_r1 = i0.ɵɵnextContext().$implicit;
    var ctx_r2 = i0.ɵɵnextContext();
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
    var entity_r1 = i0.ɵɵnextContext().$implicit;
    var ctx_r3 = i0.ɵɵnextContext();
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
    var entity_r1 = i0.ɵɵnextContext().$implicit;
    var ctx_r4 = i0.ɵɵnextContext();
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
    var entity_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entity_r1.isLinkable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entity_r1.isLinkable && entity_r1.personSubtype);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entity_r1.isLinkable && !entity_r1.personSubtype);
} }
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
    EntityList.prototype.ngOnInit = function () {
        var e_1, _a;
        // use a local copy of the meta to set the type to TO_ONE for proper display
        // without changing the input object
        this.metaDisplay = Helpers.deepClone(this.meta);
        this.metaDisplay.type = 'TO_ONE';
        this.baseEntity = this.meta.associatedEntity.entity;
        try {
            for (var _b = __values(this.data.data), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    EntityList.prototype.getClass = function (entity) {
        return this.ENTITY_SHORT_NAMES[entity.personSubtype];
    };
    EntityList.prototype.openLink = function (entity) {
        entity.openLink(entity);
    };
    EntityList.prototype.isLinkable = function (entity) {
        return entity.openLink;
    };
    EntityList.ɵfac = function EntityList_Factory(t) { return new (t || EntityList)(); };
    EntityList.ɵcmp = i0.ɵɵdefineComponent({ type: EntityList, selectors: [["novo-entity-list"]], inputs: { data: "data", meta: "meta" }, decls: 1, vars: 1, consts: [["class", "entity", 4, "ngFor", "ngForOf"], [1, "entity"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "click"]], template: function EntityList_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, EntityList_div_0_Template, 4, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.data.data);
        } }, directives: [i1.NgForOf, i1.NgIf], pipes: [i2.RenderPipe], encapsulation: 2, changeDetection: 0 });
    return EntityList;
}());
export { EntityList };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EntityList, [{
        type: Component,
        args: [{
                selector: 'novo-entity-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n        <div *ngFor=\"let entity of data.data\" class=\"entity\">\n            <a *ngIf=\"entity.isLinkable\" (click)=\"openLink(entity)\">\n                <i class=\"bhi-circle {{ entity.class }}\"></i>{{ entity | render : metaDisplay }}\n            </a>\n            <span *ngIf=\"!entity.isLinkable && entity.personSubtype\">\n                <i class=\"bhi-circle {{ entity.class }}\"></i>{{ entity | render : metaDisplay }}\n            </span>\n            <span *ngIf=\"!entity.isLinkable && !entity.personSubtype\">\n                {{ entity | render : metaDisplay }}\n            </span>\n        </div>\n    ",
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], meta: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy92YWx1ZS9FbnRpdHlMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7SUFPbEMsNEJBQ0k7SUFEeUIsZ09BQTBCO0lBQ25ELG9CQUE2QztJQUFBLFlBQ2pEOztJQUFBLGlCQUFJOzs7O0lBREcsZUFBcUM7SUFBckMsNkRBQXFDO0lBQUssZUFDakQ7SUFEaUQsbUZBQ2pEOzs7SUFDQSw0QkFDSTtJQUFBLG9CQUE2QztJQUFBLFlBQ2pEOztJQUFBLGlCQUFPOzs7O0lBREEsZUFBcUM7SUFBckMsNkRBQXFDO0lBQUssZUFDakQ7SUFEaUQsbUZBQ2pEOzs7SUFDQSw0QkFDSTtJQUFBLFlBQ0o7O0lBQUEsaUJBQU87Ozs7SUFESCxlQUNKO0lBREksb0ZBQ0o7OztJQVRKLDhCQUNJO0lBQUEsNkRBQ0k7SUFFSixtRUFDSTtJQUVKLG1FQUNJO0lBRVIsaUJBQU07OztJQVRDLGVBQXlCO0lBQXpCLDJDQUF5QjtJQUd0QixlQUFrRDtJQUFsRCx1RUFBa0Q7SUFHbEQsZUFBbUQ7SUFBbkQsd0VBQW1EOztBQVhyRTtJQXdERTtRQWxDQSxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCLHVCQUFrQixHQUFRO1lBQ3hCLElBQUksRUFBRSxNQUFNO1lBQ1osYUFBYSxFQUFFLFNBQVM7WUFDeEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsU0FBUztZQUM1QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0Isa0JBQWtCLEVBQUUsU0FBUztZQUM3QixrQkFBa0IsRUFBRSxTQUFTO1lBQzdCLGtCQUFrQixFQUFFLFNBQVM7WUFDN0IsV0FBVyxFQUFFLGFBQWE7WUFDMUIsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsTUFBTTtZQUNaLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLFNBQVMsRUFBRSxXQUFXO1lBQ3RCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLFdBQVc7WUFDdEIsYUFBYSxFQUFFLFlBQVk7WUFDM0Isa0JBQWtCLEVBQUUsWUFBWTtZQUNoQyxnQkFBZ0IsRUFBRSxrQkFBa0I7WUFDcEMsV0FBVyxFQUFFLGFBQWE7U0FDM0IsQ0FBQztJQUVjLENBQUM7SUFFakIsNkJBQVEsR0FBUjs7UUFDRSw0RUFBNEU7UUFDNUUsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O1lBQ3BELEtBQXFCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFoQyxJQUFNLE1BQU0sV0FBQTtnQkFDZixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0Qzs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQUVELDZCQUFRLEdBQVIsVUFBUyxNQUFXO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsNkJBQVEsR0FBUixVQUFTLE1BQVc7UUFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7d0VBL0RVLFVBQVU7bURBQVYsVUFBVTtZQWJmLDJEQUNJOztZQURDLHVDQUFnQzs7cUJBUjdDO0NBcUZDLEFBakZELElBaUZDO1NBaEVZLFVBQVU7a0RBQVYsVUFBVTtjQWpCdEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsaW5CQVlQO2FBQ0o7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1lbnRpdHktbGlzdCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBlbnRpdHkgb2YgZGF0YS5kYXRhXCIgY2xhc3M9XCJlbnRpdHlcIj5cbiAgICAgICAgICAgIDxhICpuZ0lmPVwiZW50aXR5LmlzTGlua2FibGVcIiAoY2xpY2spPVwib3BlbkxpbmsoZW50aXR5KVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWNpcmNsZSB7eyBlbnRpdHkuY2xhc3MgfX1cIj48L2k+e3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWVudGl0eS5pc0xpbmthYmxlICYmIGVudGl0eS5wZXJzb25TdWJ0eXBlXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktY2lyY2xlIHt7IGVudGl0eS5jbGFzcyB9fVwiPjwvaT57eyBlbnRpdHkgfCByZW5kZXIgOiBtZXRhRGlzcGxheSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZW50aXR5LmlzTGlua2FibGUgJiYgIWVudGl0eS5wZXJzb25TdWJ0eXBlXCI+XG4gICAgICAgICAgICAgICAge3sgZW50aXR5IHwgcmVuZGVyIDogbWV0YURpc3BsYXkgfX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRW50aXR5TGlzdCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGRhdGE6IGFueTtcbiAgQElucHV0KClcbiAgbWV0YTogYW55O1xuICBiYXNlRW50aXR5OiBzdHJpbmcgPSAnJztcbiAgbWV0YURpc3BsYXk6IGFueTtcbiAgRU5USVRZX1NIT1JUX05BTUVTOiBhbnkgPSB7XG4gICAgTGVhZDogJ2xlYWQnLFxuICAgIENsaWVudENvbnRhY3Q6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0MTogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3QyOiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29udGFjdDM6ICdjb250YWN0JyxcbiAgICBDbGllbnRDb250YWN0NDogJ2NvbnRhY3QnLFxuICAgIENsaWVudENvbnRhY3Q1OiAnY29udGFjdCcsXG4gICAgQ2xpZW50Q29ycG9yYXRpb246ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjE6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjI6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjM6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjQ6ICdjb21wYW55JyxcbiAgICBDbGllbnRDb3Jwb3JhdGlvbjU6ICdjb21wYW55JyxcbiAgICBPcHBvcnR1bml0eTogJ29wcG9ydHVuaXR5JyxcbiAgICBUYXNrOiAndGFzaycsXG4gICAgTm90ZTogJ25vdGUnLFxuICAgIENvcnBvcmF0ZVVzZXI6ICd1c2VyJyxcbiAgICBDYW5kaWRhdGU6ICdjYW5kaWRhdGUnLFxuICAgIEpvYk9yZGVyOiAnam9iJyxcbiAgICBKb2JPcmRlcjE6ICdqb2InLFxuICAgIEpvYk9yZGVyMjogJ2pvYicsXG4gICAgSm9iT3JkZXIzOiAnam9iJyxcbiAgICBKb2JPcmRlcjQ6ICdqb2InLFxuICAgIEpvYk9yZGVyNTogJ2pvYicsXG4gICAgUGxhY2VtZW50OiAncGxhY2VtZW50JyxcbiAgICBKb2JTdWJtaXNzaW9uOiAnc3VibWlzc2lvbicsXG4gICAgQ2FuZGlkYXRlUmVmZXJlbmNlOiAncmVmZXJlbmNlcycsXG4gICAgRGlzdHJpYnV0aW9uTGlzdDogJ2Rpc3RyaWJ1dGlvbkxpc3QnLFxuICAgIEFwcG9pbnRtZW50OiAnYXBwb2ludG1lbnQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICAvLyB1c2UgYSBsb2NhbCBjb3B5IG9mIHRoZSBtZXRhIHRvIHNldCB0aGUgdHlwZSB0byBUT19PTkUgZm9yIHByb3BlciBkaXNwbGF5XG4gICAgLy8gd2l0aG91dCBjaGFuZ2luZyB0aGUgaW5wdXQgb2JqZWN0XG4gICAgdGhpcy5tZXRhRGlzcGxheSA9IEhlbHBlcnMuZGVlcENsb25lKHRoaXMubWV0YSk7XG4gICAgdGhpcy5tZXRhRGlzcGxheS50eXBlID0gJ1RPX09ORSc7XG4gICAgdGhpcy5iYXNlRW50aXR5ID0gdGhpcy5tZXRhLmFzc29jaWF0ZWRFbnRpdHkuZW50aXR5O1xuICAgIGZvciAoY29uc3QgZW50aXR5IG9mIHRoaXMuZGF0YS5kYXRhKSB7XG4gICAgICBlbnRpdHkuaXNMaW5rYWJsZSA9IHRoaXMuaXNMaW5rYWJsZShlbnRpdHkpO1xuICAgICAgZW50aXR5LmNsYXNzID0gdGhpcy5nZXRDbGFzcyhlbnRpdHkpO1xuICAgIH1cbiAgfVxuXG4gIGdldENsYXNzKGVudGl0eTogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5FTlRJVFlfU0hPUlRfTkFNRVNbZW50aXR5LnBlcnNvblN1YnR5cGVdO1xuICB9XG5cbiAgb3BlbkxpbmsoZW50aXR5OiBhbnkpOiB2b2lkIHtcbiAgICBlbnRpdHkub3BlbkxpbmsoZW50aXR5KTtcbiAgfVxuXG4gIGlzTGlua2FibGUoZW50aXR5OiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZW50aXR5Lm9wZW5MaW5rO1xuICB9XG59XG4iXX0=