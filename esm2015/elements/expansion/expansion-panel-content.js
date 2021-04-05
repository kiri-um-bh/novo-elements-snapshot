import { Directive, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Expansion panel content that will be rendered lazily
 * after the panel is opened for the first time.
 */
export class NovoExpansionPanelContent {
    constructor(_template) {
        this._template = _template;
    }
}
NovoExpansionPanelContent.ɵfac = function NovoExpansionPanelContent_Factory(t) { return new (t || NovoExpansionPanelContent)(i0.ɵɵdirectiveInject(i0.TemplateRef)); };
NovoExpansionPanelContent.ɵdir = i0.ɵɵdefineDirective({ type: NovoExpansionPanelContent, selectors: [["ng-template", "matExpansionPanelContent", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoExpansionPanelContent, [{
        type: Directive,
        args: [{
                selector: 'ng-template[matExpansionPanelContent]',
            }]
    }], function () { return [{ type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9leHBhbnNpb24vZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRXZEOzs7R0FHRztBQUlILE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsWUFBbUIsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDOztrR0FEdkMseUJBQXlCOzhEQUF6Qix5QkFBeUI7a0RBQXpCLHlCQUF5QjtjQUhyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBFeHBhbnNpb24gcGFuZWwgY29udGVudCB0aGF0IHdpbGwgYmUgcmVuZGVyZWQgbGF6aWx5XG4gKiBhZnRlciB0aGUgcGFuZWwgaXMgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbbWF0RXhwYW5zaW9uUGFuZWxDb250ZW50XScsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9FeHBhbnNpb25QYW5lbENvbnRlbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuIl19