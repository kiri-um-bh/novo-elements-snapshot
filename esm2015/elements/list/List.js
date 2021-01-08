// NG2
import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["*"];
function NovoItemAvatarElement_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.classMap);
} }
const _c1 = [[["item-avatar"]], [["item-title"]], [["item-header-end"]]];
const _c2 = ["item-avatar", "item-title", "item-header-end"];
const _c3 = function (a0) { return { avatar: a0 }; };
function NovoListItemElement_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵprojection(1, 2);
    i0.ɵɵprojection(2, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c3, ctx_r0.avatar));
} }
const _c4 = ["*", [["item-end"]], [["item-header"]], [["item-content"]]];
const _c5 = ["*", "item-end", "item-header", "item-content"];
export class NovoListElement {
    constructor(element) {
        this.element = element;
    }
}
NovoListElement.ɵfac = function NovoListElement_Factory(t) { return new (t || NovoListElement)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
NovoListElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoListElement, selectors: [["novo-list"]], hostVars: 5, hostBindings: function NovoListElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("theme", ctx.theme);
        i0.ɵɵclassProp("vertical-list", ctx.direction === "vertical")("horizontal-list", ctx.direction === "horizontal");
    } }, inputs: { theme: "theme", direction: "direction" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoListElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoListElement, [{
        type: Component,
        args: [{
                selector: 'novo-list',
                host: {
                    '[class.vertical-list]': 'direction === "vertical"',
                    '[class.horizontal-list]': 'direction === "horizontal"',
                    '[attr.theme]': 'theme',
                },
                template: ` <ng-content></ng-content> `,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { theme: [{
            type: Input
        }], direction: [{
            type: Input
        }] }); })();
export class NovoItemAvatarElement {
    ngOnChanges(changes) {
        this.iconClass = this.icon ? `bhi-${this.icon}` : null;
        this.classMap = [this.iconClass, this.icon];
    }
    ngOnInit() {
        this.ngOnChanges();
    }
}
NovoItemAvatarElement.ɵfac = function NovoItemAvatarElement_Factory(t) { return new (t || NovoItemAvatarElement)(); };
NovoItemAvatarElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemAvatarElement, selectors: [["item-avatar"]], inputs: { icon: "icon" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["theme", "contained", 3, "ngClass", 4, "ngIf"], ["theme", "contained", 3, "ngClass"]], template: function NovoItemAvatarElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoItemAvatarElement_i_0_Template, 1, 1, "i", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.iconClass);
    } }, directives: [i1.NgIf, i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemAvatarElement, [{
        type: Component,
        args: [{
                selector: 'item-avatar',
                template: ` <i *ngIf="iconClass" [ngClass]="classMap" theme="contained"></i> `,
            }]
    }], null, { icon: [{
            type: Input
        }] }); })();
export class NovoItemTitleElement {
}
NovoItemTitleElement.ɵfac = function NovoItemTitleElement_Factory(t) { return new (t || NovoItemTitleElement)(); };
NovoItemTitleElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemTitleElement, selectors: [["item-title"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function NovoItemTitleElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "h6");
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemTitleElement, [{
        type: Component,
        args: [{
                selector: 'item-title',
                template: ` <h6><ng-content></ng-content></h6> `,
            }]
    }], null, null); })();
export class NovoItemHeaderElement {
}
NovoItemHeaderElement.ɵfac = function NovoItemHeaderElement_Factory(t) { return new (t || NovoItemHeaderElement)(); };
NovoItemHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemHeaderElement, selectors: [["item-header"]], ngContentSelectors: _c2, decls: 3, vars: 0, template: function NovoItemHeaderElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵprojection(0);
        i0.ɵɵprojection(1, 1);
        i0.ɵɵprojection(2, 2);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemHeaderElement, [{
        type: Component,
        args: [{
                selector: 'item-header',
                template: `
    <ng-content select="item-avatar"></ng-content>
    <ng-content select="item-title"></ng-content>
    <ng-content select="item-header-end"></ng-content>
  `,
            }]
    }], null, null); })();
export class NovoItemDateElement {
}
NovoItemDateElement.ɵfac = function NovoItemDateElement_Factory(t) { return new (t || NovoItemDateElement)(); };
NovoItemDateElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemDateElement, selectors: [["item-header-end"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoItemDateElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemDateElement, [{
        type: Component,
        args: [{
                selector: 'item-header-end',
                template: ` <ng-content></ng-content> `,
            }]
    }], null, null); })();
export class NovoItemContentElement {
}
NovoItemContentElement.ɵfac = function NovoItemContentElement_Factory(t) { return new (t || NovoItemContentElement)(); };
NovoItemContentElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemContentElement, selectors: [["item-content"]], hostVars: 4, hostBindings: function NovoItemContentElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("vertical-list", ctx.direction === "vertical")("horizontal-list", ctx.direction === "horizontal");
    } }, inputs: { direction: "direction" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoItemContentElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemContentElement, [{
        type: Component,
        args: [{
                selector: 'item-content',
                host: {
                    '[class.vertical-list]': 'direction === "vertical"',
                    '[class.horizontal-list]': 'direction === "horizontal"',
                },
                template: ` <ng-content></ng-content> `,
            }]
    }], null, { direction: [{
            type: Input
        }] }); })();
export class NovoItemEndElement {
}
NovoItemEndElement.ɵfac = function NovoItemEndElement_Factory(t) { return new (t || NovoItemEndElement)(); };
NovoItemEndElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemEndElement, selectors: [["item-end"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoItemEndElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemEndElement, [{
        type: Component,
        args: [{
                selector: 'item-end',
                template: ` <ng-content></ng-content> `,
            }]
    }], null, null); })();
export class NovoListItemElement {
    constructor(element) {
        this.element = element;
        this.avatar = false;
    }
    ngOnInit() {
        this.avatar = !!this.element.nativeElement.querySelector('item-avatar');
    }
}
NovoListItemElement.ɵfac = function NovoListItemElement_Factory(t) { return new (t || NovoListItemElement)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
NovoListItemElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoListItemElement, selectors: [["novo-list-item"], ["a", "list-item", ""], ["button", "list-item", ""]], contentQueries: function NovoListItemElement_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NovoItemContentElement, true);
        i0.ɵɵcontentQuery(dirIndex, NovoItemHeaderElement, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._content = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._header = _t.first);
    } }, ngContentSelectors: _c5, decls: 3, vars: 1, consts: [["class", "list-item", 3, "ngClass", 4, "ngIf"], [1, "list-item", 3, "ngClass"]], template: function NovoListItemElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c4);
        i0.ɵɵtemplate(0, NovoListItemElement_div_0_Template, 3, 3, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵprojection(2, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx._content || ctx._header);
    } }, directives: [i1.NgIf, i1.NgClass], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoListItemElement, [{
        type: Component,
        args: [{
                selector: 'novo-list-item, a[list-item], button[list-item]',
                template: `
    <div class="list-item" [ngClass]="{ avatar: avatar }" *ngIf="_content || _header">
      <ng-content select="item-header"></ng-content>
      <ng-content select="item-content"></ng-content>
    </div>
    <ng-content></ng-content>
    <ng-content select="item-end"></ng-content>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { _content: [{
            type: ContentChild,
            args: [NovoItemContentElement]
        }], _header: [{
            type: ContentChild,
            args: [NovoItemHeaderElement]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2xpc3QvTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7Ozs7O0lBc0IvRix1QkFBZ0U7OztJQUEzQyx5Q0FBb0I7Ozs7OztJQStEbkQsOEJBQ0U7SUFBQSxxQkFBaUM7SUFDakMscUJBQWtDO0lBQ3BDLGlCQUFNOzs7SUFIaUIsbUVBQThCOzs7O0FBMUV6RCxNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7OEVBTi9CLGVBQWU7b0RBQWYsZUFBZTs7Ozs7UUFGZCxrQkFBWTs7a0RBRWIsZUFBZTtjQVQzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSwwQkFBMEI7b0JBQ25ELHlCQUF5QixFQUFFLDRCQUE0QjtvQkFDdkQsY0FBYyxFQUFFLE9BQU87aUJBQ3hCO2dCQUNELFFBQVEsRUFBRSw2QkFBNkI7YUFDeEM7NkRBR0MsS0FBSztrQkFESixLQUFLO1lBR04sU0FBUztrQkFEUixLQUFLOztBQVVSLE1BQU0sT0FBTyxxQkFBcUI7SUFPaEMsV0FBVyxDQUFDLE9BQXVCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7MEZBZFUscUJBQXFCOzBEQUFyQixxQkFBcUI7UUFGcEIsa0VBQTREOztRQUF6RCxvQ0FBaUI7O2tEQUVyQixxQkFBcUI7Y0FKakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsb0VBQW9FO2FBQy9FO2dCQUdDLElBQUk7a0JBREgsS0FBSzs7QUFvQlIsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt5REFBcEIsb0JBQW9COztRQUZuQiwwQkFBSTtRQUFBLGtCQUFZO1FBQWEsaUJBQUs7O2tEQUVuQyxvQkFBb0I7Y0FKaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsc0NBQXNDO2FBQ2pEOztBQVdELE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7MERBQXJCLHFCQUFxQjs7UUFMOUIsa0JBQWlDO1FBQ2pDLHFCQUFnQztRQUNoQyxxQkFBcUM7O2tEQUc1QixxQkFBcUI7Y0FSakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOztBQU9ELE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7d0RBQW5CLG1CQUFtQjs7UUFGbEIsa0JBQVk7O2tEQUViLG1CQUFtQjtjQUovQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7QUFXRCxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCOzJEQUF0QixzQkFBc0I7Ozs7UUFGckIsa0JBQVk7O2tEQUViLHNCQUFzQjtjQVJsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSwwQkFBMEI7b0JBQ25ELHlCQUF5QixFQUFFLDRCQUE0QjtpQkFDeEQ7Z0JBQ0QsUUFBUSxFQUFFLDZCQUE2QjthQUN4QztnQkFHQyxTQUFTO2tCQURSLEtBQUs7O0FBUVIsTUFBTSxPQUFPLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjt1REFBbEIsa0JBQWtCOztRQUZqQixrQkFBWTs7a0RBRWIsa0JBQWtCO2NBSjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLDZCQUE2QjthQUN4Qzs7QUFjRCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFKdkMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUlrQixDQUFDO0lBRTNDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7c0ZBVFUsbUJBQW1CO3dEQUFuQixtQkFBbUI7b0NBRWhCLHNCQUFzQjtvQ0FDdEIscUJBQXFCOzs7Ozs7O1FBWGpDLG9FQUNFO1FBR0Ysa0JBQVk7UUFDWixxQkFBOEI7O1FBTHdCLGtEQUEyQjs7a0RBUXhFLG1CQUFtQjtjQVgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlEQUFpRDtnQkFDM0QsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7YUFDRjs2REFHdUMsUUFBUTtrQkFBN0MsWUFBWTttQkFBQyxzQkFBc0I7WUFDQyxPQUFPO2tCQUEzQyxZQUFZO21CQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxpc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy52ZXJ0aWNhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIicsXG4gICAgJ1tjbGFzcy5ob3Jpem9udGFsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCInLFxuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICB9LFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWF2YXRhcicsXG4gIHRlbXBsYXRlOiBgIDxpICpuZ0lmPVwiaWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIiB0aGVtZT1cImNvbnRhaW5lZFwiPjwvaT4gYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1BdmF0YXJFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIGNsYXNzTWFwOiBhbnk7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmljb25DbGFzcyA9IHRoaXMuaWNvbiA/IGBiaGktJHt0aGlzLmljb259YCA6IG51bGw7XG4gICAgdGhpcy5jbGFzc01hcCA9IFt0aGlzLmljb25DbGFzcywgdGhpcy5pY29uXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLXRpdGxlJyxcbiAgdGVtcGxhdGU6IGAgPGg2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2g2PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbVRpdGxlRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1hdmF0YXJcIj48L25nLWNvbnRlbnQ+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWhlYWRlci1lbmRcIj48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtSGVhZGVyRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWhlYWRlci1lbmQnLFxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtRGF0ZUVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1jb250ZW50JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCInLFxuICAgICdbY2xhc3MuaG9yaXpvbnRhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tZW5kJyxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUVuZEVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1saXN0LWl0ZW0sIGFbbGlzdC1pdGVtXSwgYnV0dG9uW2xpc3QtaXRlbV0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiBbbmdDbGFzc109XCJ7IGF2YXRhcjogYXZhdGFyIH1cIiAqbmdJZj1cIl9jb250ZW50IHx8IF9oZWFkZXJcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0taGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWVuZFwiPjwvbmctY29udGVudD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpc3RJdGVtRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF2YXRhcjogYm9vbGVhbiA9IGZhbHNlO1xuICBAQ29udGVudENoaWxkKE5vdm9JdGVtQ29udGVudEVsZW1lbnQpIF9jb250ZW50OiBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50O1xuICBAQ29udGVudENoaWxkKE5vdm9JdGVtSGVhZGVyRWxlbWVudCkgX2hlYWRlcjogTm92b0l0ZW1IZWFkZXJFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF2YXRhciA9ICEhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaXRlbS1hdmF0YXInKTtcbiAgfVxufVxuIl19