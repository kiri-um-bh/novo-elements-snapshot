/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, Input } from '@angular/core';
var NovoListElement = /** @class */ (function () {
    function NovoListElement(element) {
        this.element = element;
    }
    NovoListElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-list',
                    host: {
                        '[class.vertical-list]': 'direction === "vertical"',
                        '[class.horizontal-list]': 'direction === "horizontal"',
                        '[attr.theme]': 'theme',
                    },
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    NovoListElement.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NovoListElement.propDecorators = {
        theme: [{ type: Input }],
        direction: [{ type: Input }]
    };
    return NovoListElement;
}());
export { NovoListElement };
if (false) {
    /** @type {?} */
    NovoListElement.prototype.theme;
    /** @type {?} */
    NovoListElement.prototype.direction;
    /** @type {?} */
    NovoListElement.prototype.element;
}
var NovoListItemElement = /** @class */ (function () {
    function NovoListItemElement(element) {
        this.element = element;
        this.avatar = false;
    }
    /**
     * @return {?}
     */
    NovoListItemElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.avatar = !!this.element.nativeElement.querySelector('item-avatar');
    };
    NovoListItemElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-list-item',
                    template: "\n        <div class=\"list-item\" [ngClass]=\"{'avatar': avatar}\">\n            <ng-content select=\"item-header\"></ng-content>\n            <ng-content select=\"item-content\"></ng-content>\n        </div>\n        <ng-content></ng-content>\n        <ng-content select=\"item-end\"></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    NovoListItemElement.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return NovoListItemElement;
}());
export { NovoListItemElement };
if (false) {
    /** @type {?} */
    NovoListItemElement.prototype.avatar;
    /** @type {?} */
    NovoListItemElement.prototype.element;
}
var NovoItemAvatarElement = /** @class */ (function () {
    function NovoItemAvatarElement() {
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    NovoItemAvatarElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        this.iconClass = this.icon ? "bhi-" + this.icon : null;
        this.classMap = [this.iconClass, this.icon];
    };
    /**
     * @return {?}
     */
    NovoItemAvatarElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.ngOnChanges();
    };
    NovoItemAvatarElement.decorators = [
        { type: Component, args: [{
                    selector: 'item-avatar',
                    template: "\n        <i *ngIf=\"iconClass\" [ngClass]=\"classMap\" theme=\"contained\"></i>\n    "
                }] }
    ];
    NovoItemAvatarElement.propDecorators = {
        icon: [{ type: Input }]
    };
    return NovoItemAvatarElement;
}());
export { NovoItemAvatarElement };
if (false) {
    /** @type {?} */
    NovoItemAvatarElement.prototype.icon;
    /** @type {?} */
    NovoItemAvatarElement.prototype.iconClass;
    /** @type {?} */
    NovoItemAvatarElement.prototype.classMap;
}
var NovoItemTitleElement = /** @class */ (function () {
    function NovoItemTitleElement() {
    }
    NovoItemTitleElement.decorators = [
        { type: Component, args: [{
                    selector: 'item-title',
                    template: "\n        <h6><ng-content></ng-content></h6>\n    "
                }] }
    ];
    return NovoItemTitleElement;
}());
export { NovoItemTitleElement };
var NovoItemHeaderElement = /** @class */ (function () {
    function NovoItemHeaderElement() {
    }
    NovoItemHeaderElement.decorators = [
        { type: Component, args: [{
                    selector: 'item-header',
                    template: "\n        <ng-content select=\"item-avatar\"></ng-content>\n        <ng-content select=\"item-title\"></ng-content>\n        <ng-content select=\"item-header-end\"></ng-content>\n    "
                }] }
    ];
    return NovoItemHeaderElement;
}());
export { NovoItemHeaderElement };
var NovoItemDateElement = /** @class */ (function () {
    function NovoItemDateElement() {
    }
    NovoItemDateElement.decorators = [
        { type: Component, args: [{
                    selector: 'item-header-end',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    return NovoItemDateElement;
}());
export { NovoItemDateElement };
var NovoItemContentElement = /** @class */ (function () {
    function NovoItemContentElement() {
    }
    NovoItemContentElement.decorators = [
        { type: Component, args: [{
                    selector: 'item-content',
                    host: {
                        '[class.vertical-list]': 'direction === "vertical"',
                        '[class.horizontal-list]': 'direction === "horizontal"',
                    },
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    NovoItemContentElement.propDecorators = {
        direction: [{ type: Input }]
    };
    return NovoItemContentElement;
}());
export { NovoItemContentElement };
if (false) {
    /** @type {?} */
    NovoItemContentElement.prototype.direction;
}
var NovoItemEndElement = /** @class */ (function () {
    function NovoItemEndElement() {
    }
    NovoItemEndElement.decorators = [
        { type: Component, args: [{
                    selector: 'item-end',
                    template: "\n        <ng-content></ng-content>\n    "
                }] }
    ];
    return NovoItemEndElement;
}());
export { NovoItemEndElement };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9saXN0L0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBRS9GO0lBaUJFLHlCQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7Z0JBakIzQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLElBQUksRUFBRTt3QkFDSix1QkFBdUIsRUFBRSwwQkFBMEI7d0JBQ25ELHlCQUF5QixFQUFFLDRCQUE0Qjt3QkFDdkQsY0FBYyxFQUFFLE9BQU87cUJBQ3hCO29CQUNELFFBQVEsRUFBRSwyQ0FFUDtpQkFDSjs7OztnQkFabUIsVUFBVTs7O3dCQWMzQixLQUFLOzRCQUVMLEtBQUs7O0lBSVIsc0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQVBZLGVBQWU7OztJQUMxQixnQ0FDYzs7SUFDZCxvQ0FDa0I7O0lBRU4sa0NBQTBCOztBQUd4QztJQWNFLDZCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnZDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFFa0IsQ0FBQzs7OztJQUUzQyxzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsbVRBT1A7aUJBQ0o7Ozs7Z0JBaENtQixVQUFVOztJQXlDOUIsMEJBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQVJZLG1CQUFtQjs7O0lBQzlCLHFDQUF3Qjs7SUFFWixzQ0FBMkI7O0FBT3pDO0lBQUE7SUFxQkEsQ0FBQzs7Ozs7SUFSQywyQ0FBVzs7OztJQUFYLFVBQVksT0FBdUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFPLElBQUksQ0FBQyxJQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELHdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsd0ZBRVA7aUJBQ0o7Ozt1QkFFRSxLQUFLOztJQWNSLDRCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FmWSxxQkFBcUI7OztJQUNoQyxxQ0FDYTs7SUFFYiwwQ0FBa0I7O0lBQ2xCLHlDQUFjOztBQVloQjtJQUFBO0lBTW1DLENBQUM7O2dCQU5uQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxvREFFUDtpQkFDSjs7SUFDa0MsMkJBQUM7Q0FBQSxBQU5wQyxJQU1vQztTQUF2QixvQkFBb0I7QUFFakM7SUFBQTtJQVFvQyxDQUFDOztnQkFScEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUseUxBSVA7aUJBQ0o7O0lBQ21DLDRCQUFDO0NBQUEsQUFSckMsSUFRcUM7U0FBeEIscUJBQXFCO0FBRWxDO0lBQUE7SUFNa0MsQ0FBQzs7Z0JBTmxDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsMkNBRVA7aUJBQ0o7O0lBQ2lDLDBCQUFDO0NBQUEsQUFObkMsSUFNbUM7U0FBdEIsbUJBQW1CO0FBRWhDO0lBQUE7SUFhQSxDQUFDOztnQkFiQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLElBQUksRUFBRTt3QkFDSix1QkFBdUIsRUFBRSwwQkFBMEI7d0JBQ25ELHlCQUF5QixFQUFFLDRCQUE0QjtxQkFDeEQ7b0JBQ0QsUUFBUSxFQUFFLDJDQUVQO2lCQUNKOzs7NEJBRUUsS0FBSzs7SUFFUiw2QkFBQztDQUFBLEFBYkQsSUFhQztTQUhZLHNCQUFzQjs7O0lBQ2pDLDJDQUNrQjs7QUFHcEI7SUFBQTtJQU1pQyxDQUFDOztnQkFOakMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsMkNBRVA7aUJBQ0o7O0lBQ2dDLHlCQUFDO0NBQUEsQUFObEMsSUFNa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxpc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy52ZXJ0aWNhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIicsXG4gICAgJ1tjbGFzcy5ob3Jpem9udGFsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCInLFxuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpc3RFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbVwiIFtuZ0NsYXNzXT1cInsnYXZhdGFyJzogYXZhdGFyfVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tZW5kXCI+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0SXRlbUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhdmF0YXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hdmF0YXIgPSAhIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2l0ZW0tYXZhdGFyJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1hdmF0YXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSAqbmdJZj1cImljb25DbGFzc1wiIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCIgdGhlbWU9XCJjb250YWluZWRcIj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1BdmF0YXJFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIGNsYXNzTWFwOiBhbnk7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmljb25DbGFzcyA9IHRoaXMuaWNvbiA/IGBiaGktJHt0aGlzLmljb259YCA6IG51bGw7XG4gICAgdGhpcy5jbGFzc01hcCA9IFt0aGlzLmljb25DbGFzcywgdGhpcy5pY29uXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLXRpdGxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2g2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtVGl0bGVFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0taGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1hdmF0YXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0taGVhZGVyLWVuZFwiPjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUhlYWRlckVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1oZWFkZXItZW5kJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtRGF0ZUVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1jb250ZW50JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCInLFxuICAgICdbY2xhc3MuaG9yaXpvbnRhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtQ29udGVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1lbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1FbmRFbGVtZW50IHt9XG4iXX0=