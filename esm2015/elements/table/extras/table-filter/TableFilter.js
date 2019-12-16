/**
 * @fileoverview added by tsickle
 * Generated from: elements/table/extras/table-filter/TableFilter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Directive, EventEmitter, ElementRef, Renderer2, Input, Output, HostListener, } from '@angular/core';
// APP
import { KeyCodes } from './../../../../utils/key-codes/KeyCodes';
import { Helpers } from './../../../../utils/Helpers';
export class TableFilter {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.onFilterChange = new EventEmitter();
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngOnChanges();
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        let label = '';
        if (this.config.freetextFilter) {
            label = this.config.freetextFilter;
        }
        else if (this.config.filter) {
            label = this.config.filter;
        }
        this.renderer.setProperty(this.element, 'value', label);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChangeFilter(event) {
        clearTimeout(this.filterThrottle);
        if (KeyCodes.ENTER === event.keyCode) {
            this.config.filter = ((/** @type {?} */ (event.target))).value;
            this.onFilterChange.emit({ filtering: this.config });
        }
        else {
            this.filterThrottle = setTimeout((/**
             * @return {?}
             */
            () => {
                this.config.filter = ((/** @type {?} */ (event.target))).value;
                this.onFilterChange.emit({ filtering: this.config });
            }), 300);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        Helpers.swallowEvent(event);
    }
}
TableFilter.decorators = [
    { type: Directive, args: [{
                selector: '[novoTableFilter]',
            },] }
];
/** @nocollapse */
TableFilter.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
TableFilter.propDecorators = {
    config: [{ type: Input, args: ['novoTableFilter',] }],
    onFilterChange: [{ type: Output }],
    onChangeFilter: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    TableFilter.prototype.config;
    /** @type {?} */
    TableFilter.prototype.onFilterChange;
    /** @type {?} */
    TableFilter.prototype.filterThrottle;
    /**
     * @type {?}
     * @private
     */
    TableFilter.prototype.element;
    /**
     * @type {?}
     * @private
     */
    TableFilter.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RhYmxlLWZpbHRlci9UYWJsZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDOztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBS3RELE1BQU0sT0FBTyxXQUFXOzs7OztJQVF0QixZQUFvQixPQUFtQixFQUFVLFFBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBSnBFLG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBdUI7O1lBQzdCLEtBQUssR0FBRyxFQUFFO1FBQ2QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtZQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDcEM7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQzdCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztTQUM1QjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBR00sY0FBYyxDQUFDLEtBQW9CO1FBQ3hDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbEMsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDakQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDdkQsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDOzs7OztJQUdNLE9BQU8sQ0FBQyxLQUFLO1FBQ2xCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2FBQzlCOzs7O1lBZkMsVUFBVTtZQUNWLFNBQVM7OztxQkFnQlIsS0FBSyxTQUFDLGlCQUFpQjs2QkFFdkIsTUFBTTs2QkF3Qk4sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFjbEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXhDakMsNkJBQ1k7O0lBQ1oscUNBQ3VEOztJQUV2RCxxQ0FBb0I7Ozs7O0lBRVIsOEJBQTJCOzs7OztJQUFFLCtCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IEtleUNvZGVzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9rZXktY29kZXMvS2V5Q29kZXMnO1xuaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4vLi4vLi4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tub3ZvVGFibGVGaWx0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVGaWx0ZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgnbm92b1RhYmxlRmlsdGVyJylcbiAgY29uZmlnOiBhbnk7XG4gIEBPdXRwdXQoKVxuICBvbkZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZmlsdGVyVGhyb3R0bGU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBsZXQgbGFiZWwgPSAnJztcbiAgICBpZiAodGhpcy5jb25maWcuZnJlZXRleHRGaWx0ZXIpIHtcbiAgICAgIGxhYmVsID0gdGhpcy5jb25maWcuZnJlZXRleHRGaWx0ZXI7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIpIHtcbiAgICAgIGxhYmVsID0gdGhpcy5jb25maWcuZmlsdGVyO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWxlbWVudCwgJ3ZhbHVlJywgbGFiZWwpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNoYW5nZUZpbHRlcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZpbHRlclRocm90dGxlKTtcbiAgICBpZiAoS2V5Q29kZXMuRU5URVIgPT09IGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIHRoaXMuY29uZmlnLmZpbHRlciA9IChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZTtcbiAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UuZW1pdCh7IGZpbHRlcmluZzogdGhpcy5jb25maWcgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsdGVyVGhyb3R0bGUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb25maWcuZmlsdGVyID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xuICAgICAgICB0aGlzLm9uRmlsdGVyQ2hhbmdlLmVtaXQoeyBmaWx0ZXJpbmc6IHRoaXMuY29uZmlnIH0pO1xuICAgICAgfSwgMzAwKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvbkNsaWNrKGV2ZW50KSB7XG4gICAgSGVscGVycy5zd2FsbG93RXZlbnQoZXZlbnQpO1xuICB9XG59XG4iXX0=