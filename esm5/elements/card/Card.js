/**
 * @fileoverview added by tsickle
 * Generated from: elements/card/Card.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Component, EventEmitter, Input, Output } from '@angular/core';
// APP
import { NovoLabelService } from '../../services/novo-label-service';
var CardActionsElement = /** @class */ (function () {
    function CardActionsElement() {
    }
    CardActionsElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-card-actions',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    return CardActionsElement;
}());
export { CardActionsElement };
var CardElement = /** @class */ (function () {
    function CardElement(labels) {
        this.padding = true;
        this.config = {};
        this.onClose = new EventEmitter();
        this.onRefresh = new EventEmitter();
        this.labels = labels;
    }
    /**
     * @return {?}
     */
    CardElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.config = this.config || {};
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    CardElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        this.config = this.config || {};
        this.cardAutomationId = (this.title || this.config.title || 'no-title').toLowerCase().replace(/\s/g, '-') + "-card";
        /** @type {?} */
        var newIcon = this.icon || this.config.icon;
        /** @type {?} */
        var newMessageIcon = this.messageIcon || this.config.messageIcon;
        this.iconClass = newIcon ? "bhi-" + newIcon : null;
        this.messageIconClass = newMessageIcon ? "bhi-" + newMessageIcon : null;
    };
    /**
     * @return {?}
     */
    CardElement.prototype.toggleClose = /**
     * @return {?}
     */
    function () {
        if (!this.config.onClose) {
            this.onClose.next();
        }
        else {
            this.config.onClose();
        }
    };
    /**
     * @return {?}
     */
    CardElement.prototype.toggleRefresh = /**
     * @return {?}
     */
    function () {
        if (!this.config.onRefresh) {
            this.onRefresh.next();
        }
        else {
            this.config.onRefresh();
        }
    };
    CardElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-card',
                    template: "\n        <div class=\"novo-card\" [attr.data-automation-id]=\"cardAutomationId\" [ngClass]=\"{'no-padding': !padding}\" [class.loading]=\"loading || config.loading\">\n            <!--Loading-->\n            <div class=\"card-loading-container\" *ngIf=\"loading || config.loading\">\n                <novo-loading theme=\"line\" [attr.data-automation-id]=\"cardAutomationId + '-loading'\"></novo-loading>\n            </div>\n            <!--Card Header-->\n            <header>\n                <div class=\"title\">\n                    <!--Grabber Icon-->\n                    <span tooltip=\"{{ labels.move }}\" tooltipPosition=\"bottom-right\"><i *ngIf=\"move || config.move\" class=\"bhi-move\" [attr.data-automation-id]=\"cardAutomationId + '-move'\"></i></span>\n                    <!--Card Title-->\n                    <h3 [attr.data-automation-id]=\"cardAutomationId + '-title'\"><span [tooltip]=\"iconTooltip\" tooltipPosition=\"right\"><i *ngIf=\"icon\" [ngClass]=\"iconClass\"></i></span> {{title || config.title}}</h3>\n                </div>\n                <!--Card Actions-->\n                <div class=\"actions\" [attr.data-automation-id]=\"cardAutomationId + '-actions'\">\n                    <ng-content select=\"novo-card-actions\"></ng-content>\n                    <button theme=\"icon\" icon=\"refresh\"  (click)=\"toggleRefresh()\" *ngIf=\"refresh || config.refresh\" [attr.data-automation-id]=\"cardAutomationId + '-refresh'\" tooltip=\"{{ labels.refresh }}\" tooltipPosition=\"bottom-left\"></button>\n                    <button theme=\"icon\" icon=\"close-o\" (click)=\"toggleClose()\" *ngIf=\"close || config.close\" [attr.data-automation-id]=\"cardAutomationId + '-close'\" tooltip=\"{{ labels.close }}\" tooltipPosition=\"bottom-left\"></button>\n                </div>\n            </header>\n            <!--Card Main-->\n            <main>\n                <!--Content (transcluded)-->\n                <ng-content *ngIf=\"!(loading || config.loading) && !(message || config.message)\"></ng-content>\n                <!--Error/Empty Message-->\n                <p class=\"card-message\" *ngIf=\"!(loading || config.loading) && (message || config.message)\" [attr.data-automation-id]=\"cardAutomationId + '-message'\"><i *ngIf=\"messageIconClass\" [ngClass]=\"messageIconClass\"></i> <span [innerHtml]=\"message || config.message\"></span></p>\n            </main>\n            <!--Card Footer-->\n            <ng-content *ngIf=\"!(loading || config.loading) && !(message || config.message)\" select=\"footer\"></ng-content>\n        </div>\n    "
                }] }
    ];
    /** @nocollapse */
    CardElement.ctorParameters = function () { return [
        { type: NovoLabelService }
    ]; };
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
    return CardElement;
}());
export { CardElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBb0MsTUFBTSxlQUFlLENBQUM7O0FBRXpHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFO0lBQUE7SUFJaUMsQ0FBQzs7Z0JBSmpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7SUFDZ0MseUJBQUM7Q0FBQSxBQUpsQyxJQUlrQztTQUFyQixrQkFBa0I7QUFFL0I7SUFxRUUscUJBQVksTUFBd0I7UUFoQ3BDLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQXFCakIsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWhELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVFoRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsOEJBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxPQUF1QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBTSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBTyxDQUFDOztZQUVoSCxPQUFPLEdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7O1lBQy9DLGNBQWMsR0FBVyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVztRQUN4RSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBTyxPQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxTQUFPLGNBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBRUQsbUNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOztnQkFyR0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUsNmhGQStCUDtpQkFDSjs7OztnQkExQ1EsZ0JBQWdCOzs7MEJBNEN0QixLQUFLO3lCQUVMLEtBQUs7d0JBRUwsS0FBSzswQkFFTCxLQUFLOzhCQUVMLEtBQUs7dUJBRUwsS0FBSzs4QkFFTCxLQUFLOzBCQUVMLEtBQUs7d0JBRUwsS0FBSzt1QkFFTCxLQUFLOzBCQUVMLEtBQUs7MEJBR0wsTUFBTTs0QkFFTixNQUFNOztJQXlDVCxrQkFBQztDQUFBLEFBdEdELElBc0dDO1NBbkVZLFdBQVc7OztJQUN0Qiw4QkFDd0I7O0lBQ3hCLDZCQUNpQjs7SUFDakIsNEJBQ2M7O0lBQ2QsOEJBQ2dCOztJQUNoQixrQ0FDb0I7O0lBQ3BCLDJCQUNhOztJQUNiLGtDQUNvQjs7SUFDcEIsOEJBQ2lCOztJQUNqQiw0QkFDZTs7SUFDZiwyQkFDYzs7SUFDZCw4QkFDaUI7O0lBRWpCLDhCQUNnRDs7SUFDaEQsZ0NBQ2tEOztJQUVsRCx1Q0FBeUI7O0lBQ3pCLDZCQUF5Qjs7SUFDekIsZ0NBQXlCOztJQUN6Qix1Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXJkLWFjdGlvbnMnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQWN0aW9uc0VsZW1lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1jYXJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vdm8tY2FyZFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkXCIgW25nQ2xhc3NdPVwieyduby1wYWRkaW5nJzogIXBhZGRpbmd9XCIgW2NsYXNzLmxvYWRpbmddPVwibG9hZGluZyB8fCBjb25maWcubG9hZGluZ1wiPlxuICAgICAgICAgICAgPCEtLUxvYWRpbmctLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWxvYWRpbmctY29udGFpbmVyXCIgKm5nSWY9XCJsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nXCI+XG4gICAgICAgICAgICAgICAgPG5vdm8tbG9hZGluZyB0aGVtZT1cImxpbmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbG9hZGluZydcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLUNhcmQgSGVhZGVyLS0+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tR3JhYmJlciBJY29uLS0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHRvb2x0aXA9XCJ7eyBsYWJlbHMubW92ZSB9fVwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbS1yaWdodFwiPjxpICpuZ0lmPVwibW92ZSB8fCBjb25maWcubW92ZVwiIGNsYXNzPVwiYmhpLW1vdmVcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbW92ZSdcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8IS0tQ2FyZCBUaXRsZS0tPlxuICAgICAgICAgICAgICAgICAgICA8aDMgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLXRpdGxlJ1wiPjxzcGFuIFt0b29sdGlwXT1cImljb25Ub29sdGlwXCIgdG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIj48aSAqbmdJZj1cImljb25cIiBbbmdDbGFzc109XCJpY29uQ2xhc3NcIj48L2k+PC9zcGFuPiB7e3RpdGxlIHx8IGNvbmZpZy50aXRsZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tQ2FyZCBBY3Rpb25zLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctYWN0aW9ucydcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1jYXJkLWFjdGlvbnNcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cInJlZnJlc2hcIiAgKGNsaWNrKT1cInRvZ2dsZVJlZnJlc2goKVwiICpuZ0lmPVwicmVmcmVzaCB8fCBjb25maWcucmVmcmVzaFwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1yZWZyZXNoJ1wiIHRvb2x0aXA9XCJ7eyBsYWJlbHMucmVmcmVzaCB9fVwiIHRvb2x0aXBQb3NpdGlvbj1cImJvdHRvbS1sZWZ0XCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgaWNvbj1cImNsb3NlLW9cIiAoY2xpY2spPVwidG9nZ2xlQ2xvc2UoKVwiICpuZ0lmPVwiY2xvc2UgfHwgY29uZmlnLmNsb3NlXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWNsb3NlJ1wiIHRvb2x0aXA9XCJ7eyBsYWJlbHMuY2xvc2UgfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8IS0tQ2FyZCBNYWluLS0+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8IS0tQ29udGVudCAodHJhbnNjbHVkZWQpLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmICEobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPCEtLUVycm9yL0VtcHR5IE1lc3NhZ2UtLT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtbWVzc2FnZVwiICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctbWVzc2FnZSdcIj48aSAqbmdJZj1cIm1lc3NhZ2VJY29uQ2xhc3NcIiBbbmdDbGFzc109XCJtZXNzYWdlSWNvbkNsYXNzXCI+PC9pPiA8c3BhbiBbaW5uZXJIdG1sXT1cIm1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2VcIj48L3NwYW4+PC9wPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPCEtLUNhcmQgRm9vdGVyLS0+XG4gICAgICAgICAgICA8bmctY29udGVudCAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgIShtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlKVwiIHNlbGVjdD1cImZvb3RlclwiPjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEVsZW1lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHBhZGRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBjb25maWc6IGFueSA9IHt9O1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG1lc3NhZ2VJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb246IHN0cmluZztcbiAgQElucHV0KClcbiAgaWNvblRvb2x0aXA6IHN0cmluZztcbiAgQElucHV0KClcbiAgcmVmcmVzaDogYm9vbGVhbjtcbiAgQElucHV0KClcbiAgY2xvc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIG1vdmU6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGxvYWRpbmc6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgb25SZWZyZXNoOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjYXJkQXV0b21hdGlvbklkOiBzdHJpbmc7XG4gIGxhYmVsczogTm92b0xhYmVsU2VydmljZTtcbiAgaWNvbkNsYXNzOiBzdHJpbmcgfCBudWxsO1xuICBtZXNzYWdlSWNvbkNsYXNzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IobGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlKSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuY29uZmlnIHx8IHt9O1xuICAgIHRoaXMuY2FyZEF1dG9tYXRpb25JZCA9IGAkeyh0aGlzLnRpdGxlIHx8IHRoaXMuY29uZmlnLnRpdGxlIHx8ICduby10aXRsZScpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzL2csICctJyl9LWNhcmRgO1xuXG4gICAgbGV0IG5ld0ljb246IHN0cmluZyA9IHRoaXMuaWNvbiB8fCB0aGlzLmNvbmZpZy5pY29uO1xuICAgIGxldCBuZXdNZXNzYWdlSWNvbjogc3RyaW5nID0gdGhpcy5tZXNzYWdlSWNvbiB8fCB0aGlzLmNvbmZpZy5tZXNzYWdlSWNvbjtcbiAgICB0aGlzLmljb25DbGFzcyA9IG5ld0ljb24gPyBgYmhpLSR7bmV3SWNvbn1gIDogbnVsbDtcbiAgICB0aGlzLm1lc3NhZ2VJY29uQ2xhc3MgPSBuZXdNZXNzYWdlSWNvbiA/IGBiaGktJHtuZXdNZXNzYWdlSWNvbn1gIDogbnVsbDtcbiAgfVxuXG4gIHRvZ2dsZUNsb3NlKCkge1xuICAgIGlmICghdGhpcy5jb25maWcub25DbG9zZSkge1xuICAgICAgdGhpcy5vbkNsb3NlLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcub25DbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVJlZnJlc2goKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5vblJlZnJlc2gpIHtcbiAgICAgIHRoaXMub25SZWZyZXNoLm5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb25maWcub25SZWZyZXNoKCk7XG4gICAgfVxuICB9XG59XG4iXX0=