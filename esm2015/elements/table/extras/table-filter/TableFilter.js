/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGVGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL3RhYmxlLWZpbHRlci9UYWJsZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixTQUFTLEVBR1QsS0FBSyxFQUNMLE1BQU0sRUFFTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLdEQsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBUXRCLFlBQW9CLE9BQW1CLEVBQVUsUUFBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFKcEUsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUtyRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUF1Qjs7WUFDN0IsS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1lBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzVCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFHTSxjQUFjLENBQUMsS0FBb0I7UUFDeEMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsQyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBTyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN2RCxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7Ozs7O0lBR00sT0FBTyxDQUFDLEtBQUs7UUFDbEIsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFmQyxVQUFVO1lBQ1YsU0FBUzs7O3FCQWdCUixLQUFLLFNBQUMsaUJBQWlCOzZCQUV2QixNQUFNOzZCQXdCTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQWNsQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBeENqQyw2QkFDWTs7SUFDWixxQ0FDdUQ7O0lBRXZELHFDQUFvQjs7Ozs7SUFFUiw4QkFBMkI7Ozs7O0lBQUUsK0JBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgS2V5Q29kZXMgfSBmcm9tICcuLy4uLy4uLy4uLy4uL3V0aWxzL2tleS1jb2Rlcy9LZXlDb2Rlcyc7XG5pbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25vdm9UYWJsZUZpbHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCdub3ZvVGFibGVGaWx0ZXInKVxuICBjb25maWc6IGFueTtcbiAgQE91dHB1dCgpXG4gIG9uRmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBmaWx0ZXJUaHJvdHRsZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIGxldCBsYWJlbCA9ICcnO1xuICAgIGlmICh0aGlzLmNvbmZpZy5mcmVldGV4dEZpbHRlcikge1xuICAgICAgbGFiZWwgPSB0aGlzLmNvbmZpZy5mcmVldGV4dEZpbHRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLmZpbHRlcikge1xuICAgICAgbGFiZWwgPSB0aGlzLmNvbmZpZy5maWx0ZXI7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbGVtZW50LCAndmFsdWUnLCBsYWJlbCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2hhbmdlRmlsdGVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuZmlsdGVyVGhyb3R0bGUpO1xuICAgIGlmIChLZXlDb2Rlcy5FTlRFUiA9PT0gZXZlbnQua2V5Q29kZSkge1xuICAgICAgdGhpcy5jb25maWcuZmlsdGVyID0gKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlO1xuICAgICAgdGhpcy5vbkZpbHRlckNoYW5nZS5lbWl0KHsgZmlsdGVyaW5nOiB0aGlzLmNvbmZpZyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWx0ZXJUaHJvdHRsZSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbmZpZy5maWx0ZXIgPSAoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWU7XG4gICAgICAgIHRoaXMub25GaWx0ZXJDaGFuZ2UuZW1pdCh7IGZpbHRlcmluZzogdGhpcy5jb25maWcgfSk7XG4gICAgICB9LCAzMDApO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBIZWxwZXJzLnN3YWxsb3dFdmVudChldmVudCk7XG4gIH1cbn1cbiJdfQ==