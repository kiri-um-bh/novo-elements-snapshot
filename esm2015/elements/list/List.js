/**
 * @fileoverview added by tsickle
 * Generated from: elements/list/List.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9saXN0L0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQWEvRixNQUFNLE9BQU8sZUFBZTs7OztJQU0xQixZQUFtQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQUcsQ0FBQzs7O1lBakIzQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSwwQkFBMEI7b0JBQ25ELHlCQUF5QixFQUFFLDRCQUE0QjtvQkFDdkQsY0FBYyxFQUFFLE9BQU87aUJBQ3hCO2dCQUNELFFBQVEsRUFBRTs7S0FFUDthQUNKOzs7O1lBWm1CLFVBQVU7OztvQkFjM0IsS0FBSzt3QkFFTCxLQUFLOzs7O0lBRk4sZ0NBQ2M7O0lBQ2Qsb0NBQ2tCOztJQUVOLGtDQUEwQjs7QUFjeEMsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUc5QixZQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBRnZDLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFFa0IsQ0FBQzs7OztJQUUzQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzFFLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFFOzs7Ozs7O0tBT1A7YUFDSjs7OztZQWhDbUIsVUFBVTs7OztJQWtDNUIscUNBQXdCOzs7OztJQUVaLHNDQUEyQjs7QUFhekMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFPaEMsV0FBVyxDQUFDLE9BQXVCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7O1lBcEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOztLQUVQO2FBQ0o7OzttQkFFRSxLQUFLOzs7O0lBQU4scUNBQ2E7O0lBRWIsMENBQWtCOztJQUNsQix5Q0FBYzs7QUFrQmhCLE1BQU0sT0FBTyxvQkFBb0I7OztZQU5oQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7S0FFUDthQUNKOztBQVdELE1BQU0sT0FBTyxxQkFBcUI7OztZQVJqQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7OztLQUlQO2FBQ0o7O0FBU0QsTUFBTSxPQUFPLG1CQUFtQjs7O1lBTi9CLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7O0tBRVA7YUFDSjs7QUFhRCxNQUFNLE9BQU8sc0JBQXNCOzs7WUFWbEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixJQUFJLEVBQUU7b0JBQ0osdUJBQXVCLEVBQUUsMEJBQTBCO29CQUNuRCx5QkFBeUIsRUFBRSw0QkFBNEI7aUJBQ3hEO2dCQUNELFFBQVEsRUFBRTs7S0FFUDthQUNKOzs7d0JBRUUsS0FBSzs7OztJQUFOLDJDQUNrQjs7QUFTcEIsTUFBTSxPQUFPLGtCQUFrQjs7O1lBTjlCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsUUFBUSxFQUFFOztLQUVQO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbGlzdCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLnZlcnRpY2FsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiJyxcbiAgICAnW2NsYXNzLmhvcml6b250YWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIicsXG4gICAgJ1thdHRyLnRoZW1lXSc6ICd0aGVtZScsXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTGlzdEVsZW1lbnQge1xuICBASW5wdXQoKVxuICB0aGVtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZikge31cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1saXN0LWl0ZW0nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgW25nQ2xhc3NdPVwieydhdmF0YXInOiBhdmF0YXJ9XCI+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWhlYWRlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tY29udGVudFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1lbmRcIj48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpc3RJdGVtRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGF2YXRhcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmF2YXRhciA9ICEhdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaXRlbS1hdmF0YXInKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWF2YXRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxpICpuZ0lmPVwiaWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwiY2xhc3NNYXBcIiB0aGVtZT1cImNvbnRhaW5lZFwiPjwvaT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUF2YXRhckVsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcblxuICBpY29uQ2xhc3M6IHN0cmluZztcbiAgY2xhc3NNYXA6IGFueTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuaWNvbkNsYXNzID0gdGhpcy5pY29uID8gYGJoaS0ke3RoaXMuaWNvbn1gIDogbnVsbDtcbiAgICB0aGlzLmNsYXNzTWFwID0gW3RoaXMuaWNvbkNsYXNzLCB0aGlzLmljb25dO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5uZ09uQ2hhbmdlcygpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0tdGl0bGUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDY+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvaDY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1UaXRsZUVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWF2YXRhclwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS10aXRsZVwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1oZWFkZXItZW5kXCI+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtSGVhZGVyRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWhlYWRlci1lbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1EYXRlRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWNvbnRlbnQnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy52ZXJ0aWNhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIicsXG4gICAgJ1tjbGFzcy5ob3Jpem9udGFsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCInLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1Db250ZW50RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIGRpcmVjdGlvbjogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLWVuZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUVuZEVsZW1lbnQge31cbiJdfQ==