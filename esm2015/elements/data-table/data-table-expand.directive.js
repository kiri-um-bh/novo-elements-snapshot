import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { DataTableState } from './state/data-table-state.service';
import { Helpers } from '../../utils/Helpers';
import { NovoDataTable } from './data-table.component';
import * as i0 from "@angular/core";
import * as i1 from "./state/data-table-state.service";
import * as i2 from "./data-table.component";
export class NovoDataTableExpandDirective {
    constructor(vcRef, state, dataTable) {
        this.vcRef = vcRef;
        this.state = state;
        this.dataTable = dataTable;
        this.shouldExpandAllRows = (targetId) => targetId === undefined;
        this.shouldExpandOneRow = (targetId) => targetId === this.row.id;
        this.subscription = this.state.expandSource.subscribe((targetId) => {
            if (this.shouldExpandAllRows(targetId) || this.shouldExpandOneRow(targetId)) {
                if (dataTable.isExpanded(this.row)) {
                    this.render();
                }
                else {
                    this.clear();
                }
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onClick(event) {
        if (event.target.hasAttribute('novo-data-table-expander')) {
            Helpers.swallowEvent(event);
            this.dataTable.expandRow(this.row);
        }
    }
    clear() {
        this.vcRef.clear();
    }
    render() {
        this.vcRef.clear();
        if (this.template && this.row) {
            this.vcRef.createEmbeddedView(this.template, { $implicit: this.row });
        }
    }
}
NovoDataTableExpandDirective.ɵfac = function NovoDataTableExpandDirective_Factory(t) { return new (t || NovoDataTableExpandDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.DataTableState), i0.ɵɵdirectiveInject(i2.NovoDataTable)); };
NovoDataTableExpandDirective.ɵdir = i0.ɵɵdefineDirective({ type: NovoDataTableExpandDirective, selectors: [["", "novoDataTableExpand", ""]], hostBindings: function NovoDataTableExpandDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function NovoDataTableExpandDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { row: "row", template: ["novoDataTableExpand", "template"] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoDataTableExpandDirective, [{
        type: Directive,
        args: [{
                selector: '[novoDataTableExpand]',
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.DataTableState }, { type: i2.NovoDataTable }]; }, { row: [{
            type: Input
        }], template: [{
            type: Input,
            args: ['novoDataTableExpand']
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RhdGEtdGFibGUvZGF0YS10YWJsZS1leHBhbmQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFHekcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLdkQsTUFBTSxPQUFPLDRCQUE0QjtJQVF2QyxZQUFtQixLQUF1QixFQUFVLEtBQXdCLEVBQVUsU0FBMkI7UUFBOUYsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBWWpILHdCQUFtQixHQUFHLENBQUMsUUFBZ0IsRUFBVyxFQUFFLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQztRQUU1RSx1QkFBa0IsR0FBRyxDQUFDLFFBQWdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsS0FBTyxJQUFJLENBQUMsR0FBa0MsQ0FBQyxFQUFFLENBQUM7UUFibkcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFpQixFQUFFLEVBQUU7WUFDMUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMzRSxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUNkO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFNRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBR0QsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUssS0FBSyxDQUFDLE1BQWtCLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7WUFDdEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRU8sS0FBSztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7O3dHQTdDVSw0QkFBNEI7aUVBQTVCLDRCQUE0QjsrR0FBNUIsbUJBQWU7O2tEQUFmLDRCQUE0QjtjQUh4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjthQUNsQzs7a0JBRUUsS0FBSzs7a0JBRUwsS0FBSzttQkFBQyxxQkFBcUI7O2tCQXlCM0IsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRhVGFibGVTdGF0ZSB9IGZyb20gJy4vc3RhdGUvZGF0YS10YWJsZS1zdGF0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IE5vdm9EYXRhVGFibGUgfSBmcm9tICcuL2RhdGEtdGFibGUuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9EYXRhVGFibGVFeHBhbmRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0RhdGFUYWJsZUV4cGFuZERpcmVjdGl2ZTxUPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpXG4gIHJvdzogVDtcbiAgQElucHV0KCdub3ZvRGF0YVRhYmxlRXhwYW5kJylcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgc3RhdGU6IERhdGFUYWJsZVN0YXRlPFQ+LCBwcml2YXRlIGRhdGFUYWJsZTogTm92b0RhdGFUYWJsZTxUPikge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5zdGF0ZS5leHBhbmRTb3VyY2Uuc3Vic2NyaWJlKCh0YXJnZXRJZD86IG51bWJlcikgPT4ge1xuICAgICAgaWYgKHRoaXMuc2hvdWxkRXhwYW5kQWxsUm93cyh0YXJnZXRJZCkgfHwgdGhpcy5zaG91bGRFeHBhbmRPbmVSb3codGFyZ2V0SWQpKSB7XG4gICAgICAgIGlmIChkYXRhVGFibGUuaXNFeHBhbmRlZCh0aGlzLnJvdykpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdWxkRXhwYW5kQWxsUm93cyA9ICh0YXJnZXRJZDogbnVtYmVyKTogYm9vbGVhbiA9PiB0YXJnZXRJZCA9PT0gdW5kZWZpbmVkO1xuXG4gIHNob3VsZEV4cGFuZE9uZVJvdyA9ICh0YXJnZXRJZDogbnVtYmVyKSA9PiB0YXJnZXRJZCA9PT0gKCh0aGlzLnJvdyBhcyB1bmtub3duKSBhcyB7IGlkOiBudW1iZXIgfSkuaWQ7XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLmhhc0F0dHJpYnV0ZSgnbm92by1kYXRhLXRhYmxlLWV4cGFuZGVyJykpIHtcbiAgICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgICAgIHRoaXMuZGF0YVRhYmxlLmV4cGFuZFJvdyh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnZjUmVmLmNsZWFyKCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICB0aGlzLnZjUmVmLmNsZWFyKCk7XG4gICAgaWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5yb3cpIHtcbiAgICAgIHRoaXMudmNSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUsIHsgJGltcGxpY2l0OiB0aGlzLnJvdyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==