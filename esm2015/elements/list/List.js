// NG2
import { Component, ElementRef, Input } from '@angular/core';
export class NovoListElement {
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
            },] }
];
NovoListElement.ctorParameters = () => [
    { type: ElementRef }
];
NovoListElement.propDecorators = {
    theme: [{ type: Input }],
    direction: [{ type: Input }]
};
export class NovoListItemElement {
    constructor(element) {
        this.element = element;
        this.avatar = false;
    }
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
            },] }
];
NovoListItemElement.ctorParameters = () => [
    { type: ElementRef }
];
export class NovoItemAvatarElement {
    ngOnChanges(changes) {
        this.iconClass = this.icon ? `bhi-${this.icon}` : null;
        this.classMap = [this.iconClass, this.icon];
    }
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
            },] }
];
NovoItemAvatarElement.propDecorators = {
    icon: [{ type: Input }]
};
export class NovoItemTitleElement {
}
NovoItemTitleElement.decorators = [
    { type: Component, args: [{
                selector: 'item-title',
                template: `
        <h6><ng-content></ng-content></h6>
    `
            },] }
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
            },] }
];
export class NovoItemDateElement {
}
NovoItemDateElement.decorators = [
    { type: Component, args: [{
                selector: 'item-header-end',
                template: `
        <ng-content></ng-content>
    `
            },] }
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
            },] }
];
NovoItemContentElement.propDecorators = {
    direction: [{ type: Input }]
};
export class NovoItemEndElement {
}
NovoItemEndElement.decorators = [
    { type: Component, args: [{
                selector: 'item-end',
                template: `
        <ng-content></ng-content>
    `
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9saXN0L0xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFhL0YsTUFBTSxPQUFPLGVBQWU7SUFNMUIsWUFBbUIsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7OztZQWpCM0MsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixJQUFJLEVBQUU7b0JBQ0osdUJBQXVCLEVBQUUsMEJBQTBCO29CQUNuRCx5QkFBeUIsRUFBRSw0QkFBNEI7b0JBQ3ZELGNBQWMsRUFBRSxPQUFPO2lCQUN4QjtnQkFDRCxRQUFRLEVBQUU7O0tBRVA7YUFDSjs7O1lBWm1CLFVBQVU7OztvQkFjM0IsS0FBSzt3QkFFTCxLQUFLOztBQWlCUixNQUFNLE9BQU8sbUJBQW1CO0lBRzlCLFlBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFGdkMsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUVrQixDQUFDO0lBRTNDLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7S0FPUDthQUNKOzs7WUFoQ21CLFVBQVU7O0FBaUQ5QixNQUFNLE9BQU8scUJBQXFCO0lBT2hDLFdBQVcsQ0FBQyxPQUF1QjtRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQXBCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7S0FFUDthQUNKOzs7bUJBRUUsS0FBSzs7QUFzQlIsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTmhDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOztLQUVQO2FBQ0o7O0FBV0QsTUFBTSxPQUFPLHFCQUFxQjs7O1lBUmpDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7O0tBSVA7YUFDSjs7QUFTRCxNQUFNLE9BQU8sbUJBQW1COzs7WUFOL0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7S0FFUDthQUNKOztBQWFELE1BQU0sT0FBTyxzQkFBc0I7OztZQVZsQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLElBQUksRUFBRTtvQkFDSix1QkFBdUIsRUFBRSwwQkFBMEI7b0JBQ25ELHlCQUF5QixFQUFFLDRCQUE0QjtpQkFDeEQ7Z0JBQ0QsUUFBUSxFQUFFOztLQUVQO2FBQ0o7Ozt3QkFFRSxLQUFLOztBQVVSLE1BQU0sT0FBTyxrQkFBa0I7OztZQU45QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7S0FFUDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWxpc3QnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy52ZXJ0aWNhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIicsXG4gICAgJ1tjbGFzcy5ob3Jpem9udGFsLWxpc3RdJzogJ2RpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCInLFxuICAgICdbYXR0ci50aGVtZV0nOiAndGhlbWUnLFxuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0xpc3RFbGVtZW50IHtcbiAgQElucHV0KClcbiAgdGhlbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtaXRlbVwiIFtuZ0NsYXNzXT1cInsnYXZhdGFyJzogYXZhdGFyfVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpdGVtLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tZW5kXCI+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9MaXN0SXRlbUVsZW1lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBhdmF0YXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hdmF0YXIgPSAhIXRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2l0ZW0tYXZhdGFyJyk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1hdmF0YXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aSAqbmdJZj1cImljb25DbGFzc1wiIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCIgdGhlbWU9XCJjb250YWluZWRcIj48L2k+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1BdmF0YXJFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG5cbiAgaWNvbkNsYXNzOiBzdHJpbmc7XG4gIGNsYXNzTWFwOiBhbnk7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmljb25DbGFzcyA9IHRoaXMuaWNvbiA/IGBiaGktJHt0aGlzLmljb259YCA6IG51bGw7XG4gICAgdGhpcy5jbGFzc01hcCA9IFt0aGlzLmljb25DbGFzcywgdGhpcy5pY29uXTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubmdPbkNoYW5nZXMoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdGVtLXRpdGxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGg2PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2g2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtVGl0bGVFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2l0ZW0taGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaXRlbS1hdmF0YXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0tdGl0bGVcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIml0ZW0taGVhZGVyLWVuZFwiPjwvbmctY29udGVudD5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSXRlbUhlYWRlckVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1oZWFkZXItZW5kJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtRGF0ZUVsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1jb250ZW50JyxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MudmVydGljYWwtbGlzdF0nOiAnZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCInLFxuICAgICdbY2xhc3MuaG9yaXpvbnRhbC1saXN0XSc6ICdkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiJyxcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9JdGVtQ29udGVudEVsZW1lbnQge1xuICBASW5wdXQoKVxuICBkaXJlY3Rpb246IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXRlbS1lbmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0l0ZW1FbmRFbGVtZW50IHt9XG4iXX0=