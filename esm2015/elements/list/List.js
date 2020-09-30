/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, ElementRef, Input } from '@angular/core';
export class NovoListElement {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
    }
}
NovoListElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-list',
                host: {
                    '[class.vertical-list]': 'direction === "vertical"',
                    '[class.horizontal-list]': 'direction === "horizontal"',
                    '[attr.theme]': 'theme',
                },
                template: `
        <ng-content></ng-content>
    `
            }] }
];
/** @nocollapse */
NovoListElement.ctorParameters = () => [
    { type: ElementRef }
];
NovoListElement.propDecorators = {
    theme: [{ type: Input }],
    direction: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoListElement.prototype.theme;
    /** @type {?} */
    NovoListElement.prototype.direction;
    /** @type {?} */
    NovoListElement.prototype.element;
}
export class NovoListItemElement {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.avatar = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.avatar = !!this.element.nativeElement.querySelector('item-avatar');
    }
}
NovoListItemElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-list-item',
                template: `
        <div class="list-item" [ngClass]="{'avatar': avatar}">
            <ng-content select="item-header"></ng-content>
            <ng-content select="item-content"></ng-content>
        </div>
        <ng-content></ng-content>
        <ng-content select="item-end"></ng-content>
    `
            }] }
];
/** @nocollapse */
NovoListItemElement.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /** @type {?} */
    NovoListItemElement.prototype.avatar;
    /**
     * @type {?}
     * @private
     */
    NovoListItemElement.prototype.element;
}
export class NovoItemAvatarElement {
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.iconClass = this.icon ? `bhi-${this.icon}` : null;
        this.classMap = [this.iconClass, this.icon];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngOnChanges();
    }
}
NovoItemAvatarElement.decorators = [
    { type: Component, args: [{
                selector: 'item-avatar',
                template: `
        <i *ngIf="iconClass" [ngClass]="classMap" theme="contained"></i>
    `
            }] }
];
NovoItemAvatarElement.propDecorators = {
    icon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoItemAvatarElement.prototype.icon;
    /** @type {?} */
    NovoItemAvatarElement.prototype.iconClass;
    /** @type {?} */
    NovoItemAvatarElement.prototype.classMap;
}
export class NovoItemTitleElement {
}
NovoItemTitleElement.decorators = [
    { type: Component, args: [{
                selector: 'item-title',
                template: `
        <h6><ng-content></ng-content></h6>
    `
            }] }
];
export class NovoItemHeaderElement {
}
NovoItemHeaderElement.decorators = [
    { type: Component, args: [{
                selector: 'item-header',
                template: `
        <ng-content select="item-avatar"></ng-content>
        <ng-content select="item-title"></ng-content>
        <ng-content select="item-header-end"></ng-content>
    `
            }] }
];
export class NovoItemDateElement {
}
NovoItemDateElement.decorators = [
    { type: Component, args: [{
                selector: 'item-header-end',
                template: `
        <ng-content></ng-content>
    `
            }] }
];
export class NovoItemContentElement {
}
NovoItemContentElement.decorators = [
    { type: Component, args: [{
                selector: 'item-content',
                host: {
                    '[class.vertical-list]': 'direction === "vertical"',
                    '[class.horizontal-list]': 'direction === "horizontal"',
                },
                template: `
        <ng-content></ng-content>
    `
            }] }
];
NovoItemContentElement.propDecorators = {
    direction: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoItemContentElement.prototype.direction;
}
export class NovoItemEndElement {
}
NovoItemEndElement.decorators = [
    { type: Component, args: [{
                selector: 'item-end',
                template: `
        <ng-content></ng-content>
    `
            }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9saXN0L0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBYS9GLE1BQU0sT0FBTyxlQUFlOzs7O0lBTTFCLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFBRyxDQUFDOzs7WUFqQjNDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFO29CQUNKLHVCQUF1QixFQUFFLDBCQUEwQjtvQkFDbkQseUJBQXlCLEVBQUUsNEJBQTRCO29CQUN2RCxjQUFjLEVBQUUsT0FBTztpQkFDeEI7Z0JBQ0QsUUFBUSxFQUFFOztLQUVQO2FBQ0o7Ozs7WUFabUIsVUFBVTs7O29CQWMzQixLQUFLO3dCQUVMLEtBQUs7Ozs7SUFGTixnQ0FDYzs7SUFDZCxvQ0FDa0I7O0lBRU4sa0NBQTBCOztBQWN4QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRzlCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGdkMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUVrQixDQUFDOzs7O0lBRTNDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7S0FPUDthQUNKOzs7O1lBaENtQixVQUFVOzs7O0lBa0M1QixxQ0FBd0I7Ozs7O0lBRVosc0NBQTJCOztBQWF6QyxNQUFNLE9BQU8scUJBQXFCOzs7OztJQU9oQyxXQUFXLENBQUMsT0FBdUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7O0tBRVA7YUFDSjs7O21CQUVFLEtBQUs7Ozs7SUFBTixxQ0FDYTs7SUFFYiwwQ0FBa0I7O0lBQ2xCLHlDQUFjOztBQWtCaEIsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTmhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOztLQUVQO2FBQ0o7O0FBV0QsTUFBTSxPQUFPLHFCQUFxQjs7O1lBUmpDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7O0tBSVA7YUFDSjs7QUFTRCxNQUFNLE9BQU8sbUJBQW1COzs7WUFOL0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7S0FFUDthQUNKOztBQWFELE1BQU0sT0FBTyxzQkFBc0I7OztZQVZsQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSwwQkFBMEI7b0JBQ25ELHlCQUF5QixFQUFFLDRCQUE0QjtpQkFDeEQ7Z0JBQ0QsUUFBUSxFQUFFOztLQUVQO2FBQ0o7Ozt3QkFFRSxLQUFLOzs7O0lBQU4sMkNBQ2tCOztBQVNwQixNQUFNLE9BQU8sa0JBQWtCOzs7WUFOOUIsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7O0tBRVA7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1saXN0JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCInLFxuICAgICdbY2xhc3MuaG9yaXpvbnRhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcbiAgICAnW2F0dHIudGhlbWVdJzogJ3RoZW1lJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHRoZW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIiBbbmdDbGFzc109XCJ7J2F2YXRhcic6IGF2YXRhcn1cIj5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0taGVhZGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWVuZFwiPjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTGlzdEl0ZW1FbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYXZhdGFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXZhdGFyID0gISF0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpdGVtLWF2YXRhcicpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tYXZhdGFyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGkgKm5nSWY9XCJpY29uQ2xhc3NcIiBbbmdDbGFzc109XCJjbGFzc01hcFwiIHRoZW1lPVwiY29udGFpbmVkXCI+PC9pPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtQXZhdGFyRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuXG4gIGljb25DbGFzczogc3RyaW5nO1xuICBjbGFzc01hcDogYW55O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5pY29uQ2xhc3MgPSB0aGlzLmljb24gPyBgYmhpLSR7dGhpcy5pY29ufWAgOiBudWxsO1xuICAgIHRoaXMuY2xhc3NNYXAgPSBbdGhpcy5pY29uQ2xhc3MsIHRoaXMuaWNvbl07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm5nT25DaGFuZ2VzKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS10aXRsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoNj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9oNj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbVRpdGxlRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tYXZhdGFyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLXRpdGxlXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWhlYWRlci1lbmRcIj48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1IZWFkZXJFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0taGVhZGVyLWVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbURhdGVFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tY29udGVudCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnZlcnRpY2FsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiJyxcbiAgICAnW2NsYXNzLmhvcml6b250YWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIicsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUNvbnRlbnRFbGVtZW50IHtcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tZW5kJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtRW5kRWxlbWVudCB7fVxuIl19