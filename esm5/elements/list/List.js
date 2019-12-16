/**
 * @fileoverview added by tsickle
 * Generated from: elements/list/List.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9saXN0L0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUUvRjtJQWlCRSx5QkFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7O2dCQWpCM0MsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsMEJBQTBCO3dCQUNuRCx5QkFBeUIsRUFBRSw0QkFBNEI7d0JBQ3ZELGNBQWMsRUFBRSxPQUFPO3FCQUN4QjtvQkFDRCxRQUFRLEVBQUUsMkNBRVA7aUJBQ0o7Ozs7Z0JBWm1CLFVBQVU7Ozt3QkFjM0IsS0FBSzs0QkFFTCxLQUFLOztJQUlSLHNCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FQWSxlQUFlOzs7SUFDMUIsZ0NBQ2M7O0lBQ2Qsb0NBQ2tCOztJQUVOLGtDQUEwQjs7QUFHeEM7SUFjRSw2QkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUZ2QyxXQUFNLEdBQVksS0FBSyxDQUFDO0lBRWtCLENBQUM7Ozs7SUFFM0Msc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLG1UQU9QO2lCQUNKOzs7O2dCQWhDbUIsVUFBVTs7SUF5QzlCLDBCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FSWSxtQkFBbUI7OztJQUM5QixxQ0FBd0I7Ozs7O0lBRVosc0NBQTJCOztBQU96QztJQUFBO0lBcUJBLENBQUM7Ozs7O0lBUkMsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXVCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBTyxJQUFJLENBQUMsSUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCx3Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Z0JBcEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHdGQUVQO2lCQUNKOzs7dUJBRUUsS0FBSzs7SUFjUiw0QkFBQztDQUFBLEFBckJELElBcUJDO1NBZlkscUJBQXFCOzs7SUFDaEMscUNBQ2E7O0lBRWIsMENBQWtCOztJQUNsQix5Q0FBYzs7QUFZaEI7SUFBQTtJQU1tQyxDQUFDOztnQkFObkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsb0RBRVA7aUJBQ0o7O0lBQ2tDLDJCQUFDO0NBQUEsQUFOcEMsSUFNb0M7U0FBdkIsb0JBQW9CO0FBRWpDO0lBQUE7SUFRb0MsQ0FBQzs7Z0JBUnBDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHlMQUlQO2lCQUNKOztJQUNtQyw0QkFBQztDQUFBLEFBUnJDLElBUXFDO1NBQXhCLHFCQUFxQjtBQUVsQztJQUFBO0lBTWtDLENBQUM7O2dCQU5sQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLDJDQUVQO2lCQUNKOztJQUNpQywwQkFBQztDQUFBLEFBTm5DLElBTW1DO1NBQXRCLG1CQUFtQjtBQUVoQztJQUFBO0lBYUEsQ0FBQzs7Z0JBYkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixJQUFJLEVBQUU7d0JBQ0osdUJBQXVCLEVBQUUsMEJBQTBCO3dCQUNuRCx5QkFBeUIsRUFBRSw0QkFBNEI7cUJBQ3hEO29CQUNELFFBQVEsRUFBRSwyQ0FFUDtpQkFDSjs7OzRCQUVFLEtBQUs7O0lBRVIsNkJBQUM7Q0FBQSxBQWJELElBYUM7U0FIWSxzQkFBc0I7OztJQUNqQywyQ0FDa0I7O0FBR3BCO0lBQUE7SUFNaUMsQ0FBQzs7Z0JBTmpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLDJDQUVQO2lCQUNKOztJQUNnQyx5QkFBQztDQUFBLEFBTmxDLElBTWtDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1saXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCInLFxuICAgICdbY2xhc3MuaG9yaXpvbnRhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcbiAgICAnW2F0dHIudGhlbWVdJzogJ3RoZW1lJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiBbbmdDbGFzc109XCJ7J2F2YXRhcic6IGF2YXRhcn1cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0taGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWVuZFwiPjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTGlzdEl0ZW1FbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXZhdGFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXZhdGFyID0gISF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpdGVtLWF2YXRhcicpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tYXZhdGFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgKm5nSWY9XCJpY29uQ2xhc3NcIiBbbmdDbGFzc109XCJjbGFzc01hcFwiIHRoZW1lPVwiY29udGFpbmVkXCI+PC9pPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtQXZhdGFyRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuXG4gIGljb25DbGFzczogc3RyaW5nO1xuICBjbGFzc01hcDogYW55O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5pY29uQ2xhc3MgPSB0aGlzLmljb24gPyBgYmhpLSR7dGhpcy5pY29ufWAgOiBudWxsO1xuICAgIHRoaXMuY2xhc3NNYXAgPSBbdGhpcy5pY29uQ2xhc3MsIHRoaXMuaWNvbl07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS10aXRsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9oNj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbVRpdGxlRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tYXZhdGFyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWhlYWRlci1lbmRcIj48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1IZWFkZXJFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0taGVhZGVyLWVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbURhdGVFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tY29udGVudCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnZlcnRpY2FsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiJyxcbiAgICAnW2NsYXNzLmhvcml6b250YWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIicsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tZW5kJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtRW5kRWxlbWVudCB7fVxuIl19