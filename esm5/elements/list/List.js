// NG2
import { Component, ElementRef, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["*"];
var _c1 = [[["item-header"]], [["item-content"]], "*", [["item-end"]]];
var _c2 = function (a0) { return { "avatar": a0 }; };
var _c3 = ["item-header", "item-content", "*", "item-end"];
function NovoItemAvatarElement_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 1);
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.classMap);
} }
var _c4 = [[["item-avatar"]], [["item-title"]], [["item-header-end"]]];
var _c5 = ["item-avatar", "item-title", "item-header-end"];
var NovoListElement = /** @class */ (function () {
    function NovoListElement(element) {
        this.element = element;
    }
    NovoListElement.ɵfac = function NovoListElement_Factory(t) { return new (t || NovoListElement)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NovoListElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoListElement, selectors: [["novo-list"]], hostVars: 5, hostBindings: function NovoListElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("theme", ctx.theme);
            i0.ɵɵclassProp("vertical-list", ctx.direction === "vertical")("horizontal-list", ctx.direction === "horizontal");
        } }, inputs: { theme: "theme", direction: "direction" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoListElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoListElement;
}());
export { NovoListElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoListElement, [{
        type: Component,
        args: [{
                selector: 'novo-list',
                host: {
                    '[class.vertical-list]': 'direction === "vertical"',
                    '[class.horizontal-list]': 'direction === "horizontal"',
                    '[attr.theme]': 'theme',
                },
                template: "\n        <ng-content></ng-content>\n    ",
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { theme: [{
            type: Input
        }], direction: [{
            type: Input
        }] }); })();
var NovoListItemElement = /** @class */ (function () {
    function NovoListItemElement(element) {
        this.element = element;
        this.avatar = false;
    }
    NovoListItemElement.prototype.ngOnInit = function () {
        this.avatar = !!this.element.nativeElement.querySelector('item-avatar');
    };
    NovoListItemElement.ɵfac = function NovoListItemElement_Factory(t) { return new (t || NovoListItemElement)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    NovoListItemElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoListItemElement, selectors: [["novo-list-item"]], ngContentSelectors: _c3, decls: 5, vars: 3, consts: [[1, "list-item", 3, "ngClass"]], template: function NovoListItemElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵprojection(2, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵprojection(3, 2);
            i0.ɵɵprojection(4, 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx.avatar));
        } }, directives: [i1.NgClass], encapsulation: 2 });
    return NovoListItemElement;
}());
export { NovoListItemElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoListItemElement, [{
        type: Component,
        args: [{
                selector: 'novo-list-item',
                template: "\n        <div class=\"list-item\" [ngClass]=\"{'avatar': avatar}\">\n            <ng-content select=\"item-header\"></ng-content>\n            <ng-content select=\"item-content\"></ng-content>\n        </div>\n        <ng-content></ng-content>\n        <ng-content select=\"item-end\"></ng-content>\n    ",
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();
var NovoItemAvatarElement = /** @class */ (function () {
    function NovoItemAvatarElement() {
    }
    NovoItemAvatarElement.prototype.ngOnChanges = function (changes) {
        this.iconClass = this.icon ? "bhi-" + this.icon : null;
        this.classMap = [this.iconClass, this.icon];
    };
    NovoItemAvatarElement.prototype.ngOnInit = function () {
        this.ngOnChanges();
    };
    NovoItemAvatarElement.ɵfac = function NovoItemAvatarElement_Factory(t) { return new (t || NovoItemAvatarElement)(); };
    NovoItemAvatarElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemAvatarElement, selectors: [["item-avatar"]], inputs: { icon: "icon" }, features: [i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["theme", "contained", 3, "ngClass", 4, "ngIf"], ["theme", "contained", 3, "ngClass"]], template: function NovoItemAvatarElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NovoItemAvatarElement_i_0_Template, 1, 1, "i", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.iconClass);
        } }, directives: [i1.NgIf, i1.NgClass], encapsulation: 2 });
    return NovoItemAvatarElement;
}());
export { NovoItemAvatarElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemAvatarElement, [{
        type: Component,
        args: [{
                selector: 'item-avatar',
                template: "\n        <i *ngIf=\"iconClass\" [ngClass]=\"classMap\" theme=\"contained\"></i>\n    ",
            }]
    }], null, { icon: [{
            type: Input
        }] }); })();
var NovoItemTitleElement = /** @class */ (function () {
    function NovoItemTitleElement() {
    }
    NovoItemTitleElement.ɵfac = function NovoItemTitleElement_Factory(t) { return new (t || NovoItemTitleElement)(); };
    NovoItemTitleElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemTitleElement, selectors: [["item-title"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function NovoItemTitleElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "h6");
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } }, encapsulation: 2 });
    return NovoItemTitleElement;
}());
export { NovoItemTitleElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemTitleElement, [{
        type: Component,
        args: [{
                selector: 'item-title',
                template: "\n        <h6><ng-content></ng-content></h6>\n    ",
            }]
    }], null, null); })();
var NovoItemHeaderElement = /** @class */ (function () {
    function NovoItemHeaderElement() {
    }
    NovoItemHeaderElement.ɵfac = function NovoItemHeaderElement_Factory(t) { return new (t || NovoItemHeaderElement)(); };
    NovoItemHeaderElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemHeaderElement, selectors: [["item-header"]], ngContentSelectors: _c5, decls: 3, vars: 0, template: function NovoItemHeaderElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c4);
            i0.ɵɵprojection(0);
            i0.ɵɵprojection(1, 1);
            i0.ɵɵprojection(2, 2);
        } }, encapsulation: 2 });
    return NovoItemHeaderElement;
}());
export { NovoItemHeaderElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemHeaderElement, [{
        type: Component,
        args: [{
                selector: 'item-header',
                template: "\n        <ng-content select=\"item-avatar\"></ng-content>\n        <ng-content select=\"item-title\"></ng-content>\n        <ng-content select=\"item-header-end\"></ng-content>\n    ",
            }]
    }], null, null); })();
var NovoItemDateElement = /** @class */ (function () {
    function NovoItemDateElement() {
    }
    NovoItemDateElement.ɵfac = function NovoItemDateElement_Factory(t) { return new (t || NovoItemDateElement)(); };
    NovoItemDateElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemDateElement, selectors: [["item-header-end"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoItemDateElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoItemDateElement;
}());
export { NovoItemDateElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemDateElement, [{
        type: Component,
        args: [{
                selector: 'item-header-end',
                template: "\n        <ng-content></ng-content>\n    ",
            }]
    }], null, null); })();
var NovoItemContentElement = /** @class */ (function () {
    function NovoItemContentElement() {
    }
    NovoItemContentElement.ɵfac = function NovoItemContentElement_Factory(t) { return new (t || NovoItemContentElement)(); };
    NovoItemContentElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemContentElement, selectors: [["item-content"]], hostVars: 4, hostBindings: function NovoItemContentElement_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("vertical-list", ctx.direction === "vertical")("horizontal-list", ctx.direction === "horizontal");
        } }, inputs: { direction: "direction" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoItemContentElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoItemContentElement;
}());
export { NovoItemContentElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemContentElement, [{
        type: Component,
        args: [{
                selector: 'item-content',
                host: {
                    '[class.vertical-list]': 'direction === "vertical"',
                    '[class.horizontal-list]': 'direction === "horizontal"',
                },
                template: "\n        <ng-content></ng-content>\n    ",
            }]
    }], null, { direction: [{
            type: Input
        }] }); })();
var NovoItemEndElement = /** @class */ (function () {
    function NovoItemEndElement() {
    }
    NovoItemEndElement.ɵfac = function NovoItemEndElement_Factory(t) { return new (t || NovoItemEndElement)(); };
    NovoItemEndElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoItemEndElement, selectors: [["item-end"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NovoItemEndElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2 });
    return NovoItemEndElement;
}());
export { NovoItemEndElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoItemEndElement, [{
        type: Component,
        args: [{
                selector: 'item-end',
                template: "\n        <ng-content></ng-content>\n    ",
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9saXN0L0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBOEN2Rix1QkFBZ0U7OztJQUEzQyx5Q0FBb0I7Ozs7QUE1Q2pEO0lBaUJFLHlCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQztrRkFOL0IsZUFBZTt3REFBZixlQUFlOzs7OztZQUhwQixrQkFBWTs7MEJBWHBCO0NBcUJDLEFBbEJELElBa0JDO1NBUFksZUFBZTtrREFBZixlQUFlO2NBWDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFO29CQUNKLHVCQUF1QixFQUFFLDBCQUEwQjtvQkFDbkQseUJBQXlCLEVBQUUsNEJBQTRCO29CQUN2RCxjQUFjLEVBQUUsT0FBTztpQkFDeEI7Z0JBQ0QsUUFBUSxFQUFFLDJDQUVQO2FBQ0o7O2tCQUVFLEtBQUs7O2tCQUVMLEtBQUs7O0FBTVI7SUFjRSw2QkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUZ2QyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBRWtCLENBQUM7SUFFM0Msc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxRSxDQUFDOzBGQVBVLG1CQUFtQjs0REFBbkIsbUJBQW1COztZQVJ4Qiw4QkFDSTtZQUFBLGtCQUFpQztZQUNqQyxxQkFBa0M7WUFDdEMsaUJBQU07WUFDTixxQkFBWTtZQUNaLHFCQUE4Qjs7WUFMUCxnRUFBOEI7OzhCQTFCN0Q7Q0EwQ0MsQUFuQkQsSUFtQkM7U0FSWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQVgvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFLG1UQU9QO2FBQ0o7O0FBV0Q7SUFBQTtLQXFCQztJQVJDLDJDQUFXLEdBQVgsVUFBWSxPQUF1QjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQU8sSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzhGQWRVLHFCQUFxQjs4REFBckIscUJBQXFCO1lBSDFCLGtFQUE0RDs7WUFBekQsb0NBQWlCOztnQ0EvQzVCO0NBaUVDLEFBckJELElBcUJDO1NBZlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsd0ZBRVA7YUFDSjs7a0JBRUUsS0FBSzs7QUFnQlI7SUFBQTtLQU1vQzs0RkFBdkIsb0JBQW9COzZEQUFwQixvQkFBb0I7O1lBSHpCLDBCQUFJO1lBQUEsa0JBQVk7WUFBYSxpQkFBSzs7K0JBdEUxQztDQXlFb0MsQUFOcEMsSUFNb0M7U0FBdkIsb0JBQW9CO2tEQUFwQixvQkFBb0I7Y0FOaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsb0RBRVA7YUFDSjs7QUFHRDtJQUFBO0tBUXFDOzhGQUF4QixxQkFBcUI7OERBQXJCLHFCQUFxQjs7WUFMMUIsa0JBQWlDO1lBQ2pDLHFCQUFnQztZQUNoQyxxQkFBcUM7O2dDQWhGN0M7Q0FtRnFDLEFBUnJDLElBUXFDO1NBQXhCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBUmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHlMQUlQO2FBQ0o7O0FBR0Q7SUFBQTtLQU1tQzswRkFBdEIsbUJBQW1COzREQUFuQixtQkFBbUI7O1lBSHhCLGtCQUFZOzs4QkF4RnBCO0NBMkZtQyxBQU5uQyxJQU1tQztTQUF0QixtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQU4vQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDJDQUVQO2FBQ0o7O0FBR0Q7SUFBQTtLQWFDO2dHQUhZLHNCQUFzQjsrREFBdEIsc0JBQXNCOzs7O1lBSDNCLGtCQUFZOztpQ0FwR3BCO0NBMEdDLEFBYkQsSUFhQztTQUhZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBVmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsSUFBSSxFQUFFO29CQUNKLHVCQUF1QixFQUFFLDBCQUEwQjtvQkFDbkQseUJBQXlCLEVBQUUsNEJBQTRCO2lCQUN4RDtnQkFDRCxRQUFRLEVBQUUsMkNBRVA7YUFDSjs7a0JBRUUsS0FBSzs7QUFJUjtJQUFBO0tBTWtDO3dGQUFyQixrQkFBa0I7MkRBQWxCLGtCQUFrQjs7WUFIdkIsa0JBQVk7OzZCQS9HcEI7Q0FrSGtDLEFBTmxDLElBTWtDO1NBQXJCLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBTjlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFLDJDQUVQO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnZlcnRpY2FsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiJyxcbiAgICAnW2NsYXNzLmhvcml6b250YWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIicsXG4gICAgJ1thdHRyLnRoZW1lXSc6ICd0aGVtZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTGlzdEVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1saXN0LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgW25nQ2xhc3NdPVwieydhdmF0YXInOiBhdmF0YXJ9XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tY29udGVudFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1lbmRcIj48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpc3RJdGVtRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF2YXRhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF2YXRhciA9ICEhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaXRlbS1hdmF0YXInKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWF2YXRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpICpuZ0lmPVwiaWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIiB0aGVtZT1cImNvbnRhaW5lZFwiPjwvaT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUF2YXRhckVsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBpY29uQ2xhc3M6IHN0cmluZztcbiAgY2xhc3NNYXA6IGFueTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuaWNvbkNsYXNzID0gdGhpcy5pY29uID8gYGJoaS0ke3RoaXMuaWNvbn1gIDogbnVsbDtcbiAgICB0aGlzLmNsYXNzTWFwID0gW3RoaXMuaWNvbkNsYXNzLCB0aGlzLmljb25dO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tdGl0bGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvaDY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1UaXRsZUVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWF2YXRhclwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1oZWFkZXItZW5kXCI+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtSGVhZGVyRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWhlYWRlci1lbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1EYXRlRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWNvbnRlbnQnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy52ZXJ0aWNhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIicsXG4gICAgJ1tjbGFzcy5ob3Jpem9udGFsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCInLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1Db250ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUVuZEVsZW1lbnQge31cbiJdfQ==