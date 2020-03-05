/**
 * @fileoverview added by tsickle
 * Generated from: elements/card/Card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
export class CardActionsElement {
}
CardActionsElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-card-actions',
                template: '<ng-content></ng-content>'
            }] }
];
export class CardElement {
    /**
     * @param {?} labels
     */
    constructor(labels) {
        this.padding = true;
        this.config = {};
        this.onClose = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.labels = labels;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.config = this.config || {};
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.config = this.config || {};
        this.cardAutomationId = `${(this.title || this.config.title || 'no-title').toLowerCase().replace(/\s/g, '-')}-card`;
        /** @type {?} */
        const newIcon = this.icon || this.config.icon;
        /** @type {?} */
        const newMessageIcon = this.messageIcon || this.config.messageIcon;
        this.iconClass = newIcon ? `bhi-${newIcon}` : null;
        this.messageIconClass = newMessageIcon ? `bhi-${newMessageIcon}` : null;
    }
    /**
     * @return {?}
     */
    toggleClose() {
        if (!this.config.onClose) {
            this.onClose.next();
        }
        else {
            this.config.onClose();
        }
    }
    /**
     * @return {?}
     */
    toggleRefresh() {
        if (!this.config.onRefresh) {
            this.onRefresh.next();
        }
        else {
            this.config.onRefresh();
        }
    }
}
CardElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-card',
                template: `
        <div class="novo-card" [attr.data-automation-id]="cardAutomationId" [ngClass]="{'no-padding': !padding}" [class.loading]="loading || config.loading">
            <!--Loading-->
            <div class="card-loading-container" *ngIf="loading || config.loading">
                <novo-loading theme="line" [attr.data-automation-id]="cardAutomationId + '-loading'"></novo-loading>
            </div>
            <!--Card Header-->
            <header>
                <div class="title">
                    <!--Grabber Icon-->
                    <span tooltip="{{ labels.move }}" tooltipPosition="bottom-right"><i *ngIf="move || config.move" class="bhi-move" [attr.data-automation-id]="cardAutomationId + '-move'"></i></span>
                    <!--Card Title-->
                    <h3 [attr.data-automation-id]="cardAutomationId + '-title'"><span [tooltip]="iconTooltip" tooltipPosition="right"><i *ngIf="icon" [ngClass]="iconClass"></i></span> {{title || config.title}}</h3>
                </div>
                <!--Card Actions-->
                <div class="actions" [attr.data-automation-id]="cardAutomationId + '-actions'">
                    <ng-content select="novo-card-actions"></ng-content>
                    <button theme="icon" icon="refresh"  (click)="toggleRefresh()" *ngIf="refresh || config.refresh" [attr.data-automation-id]="cardAutomationId + '-refresh'" tooltip="{{ labels.refresh }}" tooltipPosition="bottom-left"></button>
                    <button theme="icon" icon="close-o" (click)="toggleClose()" *ngIf="close || config.close" [attr.data-automation-id]="cardAutomationId + '-close'" tooltip="{{ labels.close }}" tooltipPosition="bottom-left"></button>
                </div>
            </header>
            <!--Card Main-->
            <main>
                <!--Content (transcluded)-->
                <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)"></ng-content>
                <!--Error/Empty Message-->
                <p class="card-message" *ngIf="!(loading || config.loading) && (message || config.message)" [attr.data-automation-id]="cardAutomationId + '-message'"><i *ngIf="messageIconClass" [ngClass]="messageIconClass"></i> <span [innerHtml]="message || config.message"></span></p>
            </main>
            <!--Card Footer-->
            <ng-content *ngIf="!(loading || config.loading) && !(message || config.message)" select="footer"></ng-content>
        </div>
    `
            }] }
];
/** @nocollapse */
CardElement.ctorParameters = () => [
    { type: NovoLabelService }
];
CardElement.propDecorators = {
    padding: [{ type: Input }],
    config: [{ type: Input }],
    title: [{ type: Input }],
    message: [{ type: Input }],
    messageIcon: [{ type: Input }],
    icon: [{ type: Input }],
    iconTooltip: [{ type: Input }],
    refresh: [{ type: Input }],
    close: [{ type: Input }],
    move: [{ type: Input }],
    loading: [{ type: Input }],
    onClose: [{ type: Output }],
    onRefresh: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CardElement.prototype.padding;
    /** @type {?} */
    CardElement.prototype.config;
    /** @type {?} */
    CardElement.prototype.title;
    /** @type {?} */
    CardElement.prototype.message;
    /** @type {?} */
    CardElement.prototype.messageIcon;
    /** @type {?} */
    CardElement.prototype.icon;
    /** @type {?} */
    CardElement.prototype.iconTooltip;
    /** @type {?} */
    CardElement.prototype.refresh;
    /** @type {?} */
    CardElement.prototype.close;
    /** @type {?} */
    CardElement.prototype.move;
    /** @type {?} */
    CardElement.prototype.loading;
    /** @type {?} */
    CardElement.prototype.onClose;
    /** @type {?} */
    CardElement.prototype.onRefresh;
    /** @type {?} */
    CardElement.prototype.cardAutomationId;
    /** @type {?} */
    CardElement.prototype.labels;
    /** @type {?} */
    CardElement.prototype.iconClass;
    /** @type {?} */
    CardElement.prototype.messageIconClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBb0MsTUFBTSxlQUFlLENBQUM7O0FBRXpHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTXJFLE1BQU0sT0FBTyxrQkFBa0I7OztZQUo5QixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7QUFzQ0QsTUFBTSxPQUFPLFdBQVc7Ozs7SUFrQ3RCLFlBQVksTUFBd0I7UUFoQ3BDLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQXFCakIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVFoRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBdUI7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDOztjQUU5RyxPQUFPLEdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7O2NBQy9DLGNBQWMsR0FBVyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztRQUMxRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7OztZQXJHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQStCUDthQUNKOzs7O1lBMUNRLGdCQUFnQjs7O3NCQTRDdEIsS0FBSztxQkFFTCxLQUFLO29CQUVMLEtBQUs7c0JBRUwsS0FBSzswQkFFTCxLQUFLO21CQUVMLEtBQUs7MEJBRUwsS0FBSztzQkFFTCxLQUFLO29CQUVMLEtBQUs7bUJBRUwsS0FBSztzQkFFTCxLQUFLO3NCQUdMLE1BQU07d0JBRU4sTUFBTTs7OztJQXpCUCw4QkFDd0I7O0lBQ3hCLDZCQUNpQjs7SUFDakIsNEJBQ2M7O0lBQ2QsOEJBQ2dCOztJQUNoQixrQ0FDb0I7O0lBQ3BCLDJCQUNhOztJQUNiLGtDQUNvQjs7SUFDcEIsOEJBQ2lCOztJQUNqQiw0QkFDZTs7SUFDZiwyQkFDYzs7SUFDZCw4QkFDaUI7O0lBRWpCLDhCQUNnRDs7SUFDaEQsZ0NBQ2tEOztJQUVsRCx1Q0FBeUI7O0lBQ3pCLDZCQUF5Qjs7SUFDekIsZ0NBQXlCOztJQUN6Qix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXJkLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQWN0aW9uc0VsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY2FyZFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkXCIgW25nQ2xhc3NdPVwieyduby1wYWRkaW5nJzogIXBhZGRpbmd9XCIgW2NsYXNzLmxvYWRpbmddPVwibG9hZGluZyB8fCBjb25maWcubG9hZGluZ1wiPlxuICAgICAgICAgICAgPCEtLUxvYWRpbmctLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxvYWRpbmctY29udGFpbmVyXCIgKm5nSWY9XCJsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbG9hZGluZydcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLUNhcmQgSGVhZGVyLS0+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tR3JhYmJlciBJY29uLS0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHRvb2x0aXA9XCJ7eyBsYWJlbHMubW92ZSB9fVwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiPjxpICpuZ0lmPVwibW92ZSB8fCBjb25maWcubW92ZVwiIGNsYXNzPVwiYmhpLW1vdmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbW92ZSdcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8IS0tQ2FyZCBUaXRsZS0tPlxuICAgICAgICAgICAgICAgICAgICA8aDMgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLXRpdGxlJ1wiPjxzcGFuIFt0b29sdGlwXT1cImljb25Ub29sdGlwXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj48aSAqbmdJZj1cImljb25cIiBbbmdDbGFzc109XCJpY29uQ2xhc3NcIj48L2k+PC9zcGFuPiB7e3RpdGxlIHx8IGNvbmZpZy50aXRsZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tQ2FyZCBBY3Rpb25zLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctYWN0aW9ucydcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1jYXJkLWFjdGlvbnNcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInJlZnJlc2hcIiAgKGNsaWNrKT1cInRvZ2dsZVJlZnJlc2goKVwiICpuZ0lmPVwicmVmcmVzaCB8fCBjb25maWcucmVmcmVzaFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1yZWZyZXNoJ1wiIHRvb2x0aXA9XCJ7eyBsYWJlbHMucmVmcmVzaCB9fVwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbS1sZWZ0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cImNsb3NlLW9cIiAoY2xpY2spPVwidG9nZ2xlQ2xvc2UoKVwiICpuZ0lmPVwiY2xvc2UgfHwgY29uZmlnLmNsb3NlXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWNsb3NlJ1wiIHRvb2x0aXA9XCJ7eyBsYWJlbHMuY2xvc2UgfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8IS0tQ2FyZCBNYWluLS0+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8IS0tQ29udGVudCAodHJhbnNjbHVkZWQpLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmICEobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPCEtLUVycm9yL0VtcHR5IE1lc3NhZ2UtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtbWVzc2FnZVwiICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbWVzc2FnZSdcIj48aSAqbmdJZj1cIm1lc3NhZ2VJY29uQ2xhc3NcIiBbbmdDbGFzc109XCJtZXNzYWdlSWNvbkNsYXNzXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cIm1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2VcIj48L3NwYW4+PC9wPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPCEtLUNhcmQgRm9vdGVyLS0+XG4gICAgICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgIShtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiIHNlbGVjdD1cImZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEVsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBjb25maWc6IGFueSA9IHt9O1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2VJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvblRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KClcbiAgcmVmcmVzaDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY2xvc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG1vdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjYXJkQXV0b21hdGlvbklkOiBzdHJpbmc7XG4gIGxhYmVsczogTm92b0xhYmVsU2VydmljZTtcbiAgaWNvbkNsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBtZXNzYWdlSWNvbkNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICAgIHRoaXMuY2FyZEF1dG9tYXRpb25JZCA9IGAkeyh0aGlzLnRpdGxlIHx8IHRoaXMuY29uZmlnLnRpdGxlIHx8ICduby10aXRsZScpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICctJyl9LWNhcmRgO1xuXG4gICAgY29uc3QgbmV3SWNvbjogc3RyaW5nID0gdGhpcy5pY29uIHx8IHRoaXMuY29uZmlnLmljb247XG4gICAgY29uc3QgbmV3TWVzc2FnZUljb246IHN0cmluZyA9IHRoaXMubWVzc2FnZUljb24gfHwgdGhpcy5jb25maWcubWVzc2FnZUljb247XG4gICAgdGhpcy5pY29uQ2xhc3MgPSBuZXdJY29uID8gYGJoaS0ke25ld0ljb259YCA6IG51bGw7XG4gICAgdGhpcy5tZXNzYWdlSWNvbkNsYXNzID0gbmV3TWVzc2FnZUljb24gPyBgYmhpLSR7bmV3TWVzc2FnZUljb259YCA6IG51bGw7XG4gIH1cblxuICB0b2dnbGVDbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9uQ2xvc2UpIHtcbiAgICAgIHRoaXMub25DbG9zZS5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVSZWZyZXNoKCkge1xuICAgIGlmICghdGhpcy5jb25maWcub25SZWZyZXNoKSB7XG4gICAgICB0aGlzLm9uUmVmcmVzaC5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uUmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIl19