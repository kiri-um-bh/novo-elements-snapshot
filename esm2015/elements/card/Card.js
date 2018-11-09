/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        let newIcon = this.icon || this.config.icon;
        /** @type {?} */
        let newMessageIcon = this.messageIcon || this.config.messageIcon;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFvQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFNckUsTUFBTSxPQUFPLGtCQUFrQjs7O1lBSjlCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsMkJBQTJCO2FBQ3RDOztBQXNDRCxNQUFNLE9BQU8sV0FBVzs7OztJQWtDdEIsWUFBWSxNQUF3QjtRQWhDcEMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBcUJqQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBUWhELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUF1QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUM7O1lBRWhILE9BQU8sR0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7WUFDL0MsY0FBYyxHQUFXLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsT0FBTyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7O1lBckdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBK0JQO2FBQ0o7Ozs7WUExQ1EsZ0JBQWdCOzs7c0JBNEN0QixLQUFLO3FCQUVMLEtBQUs7b0JBRUwsS0FBSztzQkFFTCxLQUFLOzBCQUVMLEtBQUs7bUJBRUwsS0FBSzswQkFFTCxLQUFLO3NCQUVMLEtBQUs7b0JBRUwsS0FBSzttQkFFTCxLQUFLO3NCQUVMLEtBQUs7c0JBR0wsTUFBTTt3QkFFTixNQUFNOzs7O0lBekJQLDhCQUN3Qjs7SUFDeEIsNkJBQ2lCOztJQUNqQiw0QkFDYzs7SUFDZCw4QkFDZ0I7O0lBQ2hCLGtDQUNvQjs7SUFDcEIsMkJBQ2E7O0lBQ2Isa0NBQ29COztJQUNwQiw4QkFDaUI7O0lBQ2pCLDRCQUNlOztJQUNmLDJCQUNjOztJQUNkLDhCQUNpQjs7SUFFakIsOEJBQ2dEOztJQUNoRCxnQ0FDa0Q7O0lBRWxELHVDQUF5Qjs7SUFDekIsNkJBQXlCOztJQUN6QixnQ0FBeUI7O0lBQ3pCLHVDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhcmQtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRBY3Rpb25zRWxlbWVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwibm92by1jYXJkXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWRcIiBbbmdDbGFzc109XCJ7J25vLXBhZGRpbmcnOiAhcGFkZGluZ31cIiBbY2xhc3MubG9hZGluZ109XCJsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nXCI+XG4gICAgICAgICAgICA8IS0tTG9hZGluZy0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtbG9hZGluZy1jb250YWluZXJcIiAqbmdJZj1cImxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8bm92by1sb2FkaW5nIHRoZW1lPVwibGluZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1sb2FkaW5nJ1wiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tQ2FyZCBIZWFkZXItLT5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1HcmFiYmVyIEljb24tLT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdG9vbHRpcD1cInt7IGxhYmVscy5tb3ZlIH19XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLXJpZ2h0XCI+PGkgKm5nSWY9XCJtb3ZlIHx8IGNvbmZpZy5tb3ZlXCIgY2xhc3M9XCJiaGktbW92ZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1tb3ZlJ1wiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1DYXJkIFRpdGxlLS0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctdGl0bGUnXCI+PHNwYW4gW3Rvb2x0aXBdPVwiaWNvblRvb2x0aXBcIiB0b29sdGlwUG9zaXRpb249XCJyaWdodFwiPjxpICpuZ0lmPVwiaWNvblwiIFtuZ0NsYXNzXT1cImljb25DbGFzc1wiPjwvaT48L3NwYW4+IHt7dGl0bGUgfHwgY29uZmlnLnRpdGxlfX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS1DYXJkIEFjdGlvbnMtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1hY3Rpb25zJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWNhcmQtYWN0aW9uc1wiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwicmVmcmVzaFwiICAoY2xpY2spPVwidG9nZ2xlUmVmcmVzaCgpXCIgKm5nSWY9XCJyZWZyZXNoIHx8IGNvbmZpZy5yZWZyZXNoXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLXJlZnJlc2gnXCIgdG9vbHRpcD1cInt7IGxhYmVscy5yZWZyZXNoIH19XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0aGVtZT1cImljb25cIiBpY29uPVwiY2xvc2Utb1wiIChjbGljayk9XCJ0b2dnbGVDbG9zZSgpXCIgKm5nSWY9XCJjbG9zZSB8fCBjb25maWcuY2xvc2VcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctY2xvc2UnXCIgdG9vbHRpcD1cInt7IGxhYmVscy5jbG9zZSB9fVwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbS1sZWZ0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwhLS1DYXJkIE1haW4tLT5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDwhLS1Db250ZW50ICh0cmFuc2NsdWRlZCktLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgIShtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICAgICAgICA8IS0tRXJyb3IvRW1wdHkgTWVzc2FnZS0tPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1tZXNzYWdlXCIgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmIChtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1tZXNzYWdlJ1wiPjxpICpuZ0lmPVwibWVzc2FnZUljb25DbGFzc1wiIFtuZ0NsYXNzXT1cIm1lc3NhZ2VJY29uQ2xhc3NcIj48L2k+IDxzcGFuIFtpbm5lckh0bWxdPVwibWVzc2FnZSB8fCBjb25maWcubWVzc2FnZVwiPjwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgICA8IS0tQ2FyZCBGb290ZXItLT5cbiAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAhKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCIgc2VsZWN0PVwiZm9vdGVyXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRWxlbWVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KClcbiAgcGFkZGluZzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgpXG4gIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWVzc2FnZUljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uVG9vbHRpcDogc3RyaW5nO1xuICBASW5wdXQoKVxuICByZWZyZXNoOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBjbG9zZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbW92ZTogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgbG9hZGluZzogYm9vbGVhbjtcblxuICBAT3V0cHV0KClcbiAgb25DbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBvblJlZnJlc2g6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNhcmRBdXRvbWF0aW9uSWQ6IHN0cmluZztcbiAgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlO1xuICBpY29uQ2xhc3M6IHN0cmluZyB8IG51bGw7XG4gIG1lc3NhZ2VJY29uQ2xhc3M6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5jb25maWcgfHwge307XG4gICAgdGhpcy5jYXJkQXV0b21hdGlvbklkID0gYCR7KHRoaXMudGl0bGUgfHwgdGhpcy5jb25maWcudGl0bGUgfHwgJ25vLXRpdGxlJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMvZywgJy0nKX0tY2FyZGA7XG5cbiAgICBsZXQgbmV3SWNvbjogc3RyaW5nID0gdGhpcy5pY29uIHx8IHRoaXMuY29uZmlnLmljb247XG4gICAgbGV0IG5ld01lc3NhZ2VJY29uOiBzdHJpbmcgPSB0aGlzLm1lc3NhZ2VJY29uIHx8IHRoaXMuY29uZmlnLm1lc3NhZ2VJY29uO1xuICAgIHRoaXMuaWNvbkNsYXNzID0gbmV3SWNvbiA/IGBiaGktJHtuZXdJY29ufWAgOiBudWxsO1xuICAgIHRoaXMubWVzc2FnZUljb25DbGFzcyA9IG5ld01lc3NhZ2VJY29uID8gYGJoaS0ke25ld01lc3NhZ2VJY29ufWAgOiBudWxsO1xuICB9XG5cbiAgdG9nZ2xlQ2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vbkNsb3NlKSB7XG4gICAgICB0aGlzLm9uQ2xvc2UubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5vbkNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUmVmcmVzaCgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9uUmVmcmVzaCkge1xuICAgICAgdGhpcy5vblJlZnJlc2gubmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbmZpZy5vblJlZnJlc2goKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==