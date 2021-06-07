// NG2
import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, } from '@angular/core';
import { Helpers } from './../../../../utils/Helpers';
import { KeyCodes } from './../../../../utils/key-codes/KeyCodes';
import * as i0 from "@angular/core";
export class TableFilter {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onFilterChange = new EventEmitter();
        this.element = element;
        this.renderer = renderer;
    }
    ngOnInit() {
        this.ngOnChanges();
    }
    ngOnChanges(changes) {
        let label = '';
        if (this.config.freetextFilter) {
            label = this.config.freetextFilter;
        }
        else if (this.config.filter) {
            label = this.config.filter;
        }
        this.renderer.setProperty(this.element, 'value', label);
    }
    onChangeFilter(event) {
        clearTimeout(this.filterThrottle);
        console.log(`event: `, event);
        if (KeyCodes.ENTER === event.keyCode) {
            this.config.filter = event.target.value;
            this.onFilterChange.emit({ filtering: this.config });
        }
        else {
            this.filterThrottle = setTimeout(() => {
                this.config.filter = event.target.value;
                this.onFilterChange.emit({ filtering: this.config });
            }, 300);
        }
    }
    onClick(event) {
        Helpers.swallowEvent(event);
    }
}
TableFilter.ɵfac = function TableFilter_Factory(t) { return new (t || TableFilter)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
TableFilter.ɵdir = i0.ɵɵdefineDirective({ type: TableFilter, selectors: [["", "novoTableFilter", ""]], hostBindings: function TableFilter_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function TableFilter_keydown_HostBindingHandler($event) { return ctx.onChangeFilter($event); })("click", function TableFilter_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { config: ["novoTableFilter", "config"] }, outputs: { onFilterChange: "onFilterChange" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableFilter, [{
        type: Directive,
        args: [{
                selector: '[novoTableFilter]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { config: [{
            type: Input,
            args: ['novoTableFilter']
        }], onFilterChange: [{
            type: Output
        }], onChangeFilter: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVGaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RhYmxlLWZpbHRlci9UYWJsZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUtsRSxNQUFNLE9BQU8sV0FBVztJQVF0QixZQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnBFLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUF1QjtRQUNqQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUdNLGNBQWMsQ0FBQyxLQUFvQjtRQUN4QyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFJLEtBQUssQ0FBQyxNQUFjLENBQUMsS0FBSyxDQUFDO1lBQ2pELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFJLEtBQUssQ0FBQyxNQUFjLENBQUMsS0FBSyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN2RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFHTSxPQUFPLENBQUMsS0FBSztRQUNsQixPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O3NFQTdDVSxXQUFXO2dEQUFYLFdBQVc7a0dBQVgsMEJBQXNCLDZFQUF0QixtQkFBZTs7a0RBQWYsV0FBVztjQUh2QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5QjtxRkFHQyxNQUFNO2tCQURMLEtBQUs7bUJBQUMsaUJBQWlCO1lBR3hCLGNBQWM7a0JBRGIsTUFBTTtZQXlCQSxjQUFjO2tCQURwQixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQWdCNUIsT0FBTztrQkFEYixZQUFZO21CQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm92b1RhYmxlRmlsdGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRmlsdGVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoJ25vdm9UYWJsZUZpbHRlcicpXG4gIGNvbmZpZzogYW55O1xuICBAT3V0cHV0KClcbiAgb25GaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGZpbHRlclRocm90dGxlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgbGV0IGxhYmVsID0gJyc7XG4gICAgaWYgKHRoaXMuY29uZmlnLmZyZWV0ZXh0RmlsdGVyKSB7XG4gICAgICBsYWJlbCA9IHRoaXMuY29uZmlnLmZyZWV0ZXh0RmlsdGVyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWcuZmlsdGVyKSB7XG4gICAgICBsYWJlbCA9IHRoaXMuY29uZmlnLmZpbHRlcjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICd2YWx1ZScsIGxhYmVsKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DaGFuZ2VGaWx0ZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5maWx0ZXJUaHJvdHRsZSk7XG4gICAgY29uc29sZS5sb2coYGV2ZW50OiBgLCBldmVudCk7XG4gICAgaWYgKEtleUNvZGVzLkVOVEVSID09PSBldmVudC5rZXlDb2RlKSB7XG4gICAgICB0aGlzLmNvbmZpZy5maWx0ZXIgPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XG4gICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQoeyBmaWx0ZXJpbmc6IHRoaXMuY29uZmlnIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlclRocm90dGxlID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnLmZpbHRlciA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcbiAgICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZS5lbWl0KHsgZmlsdGVyaW5nOiB0aGlzLmNvbmZpZyB9KTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25DbGljayhldmVudCkge1xuICAgIEhlbHBlcnMuc3dhbGxvd0V2ZW50KGV2ZW50KTtcbiAgfVxufVxuIl19