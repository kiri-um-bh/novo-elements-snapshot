// NG2
import { Directive, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NovoTableKeepFilterFocus {
    constructor(element) {
        this.element = element;
    }
    ngAfterViewInit() {
        this.element.nativeElement.focus();
    }
}
NovoTableKeepFilterFocus.ɵfac = function NovoTableKeepFilterFocus_Factory(t) { return new (t || NovoTableKeepFilterFocus)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
NovoTableKeepFilterFocus.ɵdir = i0.ɵɵdefineDirective({ type: NovoTableKeepFilterFocus, selectors: [["", "keepFilterFocused", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoTableKeepFilterFocus, [{
        type: Directive,
        args: [{
                selector: '[keepFilterFocused]',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2VlcEZpbHRlckZvY3VzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvdGFibGUvZXh0cmFzL2tlZXAtZmlsdGVyLWZvY3VzL0tlZXBGaWx0ZXJGb2N1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUtyRSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDO0lBRTNDLGVBQWU7UUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDOztnR0FMVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBSHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2tlZXBGaWx0ZXJGb2N1c2VkXScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9UYWJsZUtlZXBGaWx0ZXJGb2N1cyBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cbn1cbiJdfQ==