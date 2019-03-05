/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jYXJkL0NhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFvQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFckU7SUFBQTtJQUlpQyxDQUFDOztnQkFKakMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOztJQUNnQyx5QkFBQztDQUFBLEFBSmxDLElBSWtDO1NBQXJCLGtCQUFrQjtBQUUvQjtJQXFFRSxxQkFBWSxNQUF3QjtRQWhDcEMsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBcUJqQixZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsY0FBUyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBUWhELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXVCO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGdCQUFnQixHQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFPLENBQUM7O1lBRWhILE9BQU8sR0FBVyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7WUFDL0MsY0FBYyxHQUFXLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1FBQ3hFLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFPLE9BQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLFNBQU8sY0FBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7SUFFRCxtQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7O2dCQXJHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSw2aEZBK0JQO2lCQUNKOzs7Z0JBMUNRLGdCQUFnQjs7OzBCQTRDdEIsS0FBSzt5QkFFTCxLQUFLO3dCQUVMLEtBQUs7MEJBRUwsS0FBSzs4QkFFTCxLQUFLO3VCQUVMLEtBQUs7OEJBRUwsS0FBSzswQkFFTCxLQUFLO3dCQUVMLEtBQUs7dUJBRUwsS0FBSzswQkFFTCxLQUFLOzBCQUdMLE1BQU07NEJBRU4sTUFBTTs7SUF5Q1Qsa0JBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQW5FWSxXQUFXOzs7SUFDdEIsOEJBQ3dCOztJQUN4Qiw2QkFDaUI7O0lBQ2pCLDRCQUNjOztJQUNkLDhCQUNnQjs7SUFDaEIsa0NBQ29COztJQUNwQiwyQkFDYTs7SUFDYixrQ0FDb0I7O0lBQ3BCLDhCQUNpQjs7SUFDakIsNEJBQ2U7O0lBQ2YsMkJBQ2M7O0lBQ2QsOEJBQ2lCOztJQUVqQiw4QkFDZ0Q7O0lBQ2hELGdDQUNrRDs7SUFFbEQsdUNBQXlCOztJQUN6Qiw2QkFBeUI7O0lBQ3pCLGdDQUF5Qjs7SUFDekIsdUNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FyZC1hY3Rpb25zJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEFjdGlvbnNFbGVtZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tY2FyZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJub3ZvLWNhcmRcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZFwiIFtuZ0NsYXNzXT1cInsnbm8tcGFkZGluZyc6ICFwYWRkaW5nfVwiIFtjbGFzcy5sb2FkaW5nXT1cImxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmdcIj5cbiAgICAgICAgICAgIDwhLS1Mb2FkaW5nLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1sb2FkaW5nLWNvbnRhaW5lclwiICpuZ0lmPVwibG9hZGluZyB8fCBjb25maWcubG9hZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgdGhlbWU9XCJsaW5lXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWxvYWRpbmcnXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEhlYWRlci0tPlxuICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUdyYWJiZXIgSWNvbi0tPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0b29sdGlwPVwie3sgbGFiZWxzLm1vdmUgfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tcmlnaHRcIj48aSAqbmdJZj1cIm1vdmUgfHwgY29uZmlnLm1vdmVcIiBjbGFzcz1cImJoaS1tb3ZlXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLW1vdmUnXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLUNhcmQgVGl0bGUtLT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy10aXRsZSdcIj48c3BhbiBbdG9vbHRpcF09XCJpY29uVG9vbHRpcFwiIHRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCI+PGkgKm5nSWY9XCJpY29uXCIgW25nQ2xhc3NdPVwiaWNvbkNsYXNzXCI+PC9pPjwvc3Bhbj4ge3t0aXRsZSB8fCBjb25maWcudGl0bGV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLUNhcmQgQWN0aW9ucy0tPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLWFjdGlvbnMnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5vdm8tY2FyZC1hY3Rpb25zXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJyZWZyZXNoXCIgIChjbGljayk9XCJ0b2dnbGVSZWZyZXNoKClcIiAqbmdJZj1cInJlZnJlc2ggfHwgY29uZmlnLnJlZnJlc2hcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiY2FyZEF1dG9tYXRpb25JZCArICctcmVmcmVzaCdcIiB0b29sdGlwPVwie3sgbGFiZWxzLnJlZnJlc2ggfX1cIiB0b29sdGlwUG9zaXRpb249XCJib3R0b20tbGVmdFwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRoZW1lPVwiaWNvblwiIGljb249XCJjbG9zZS1vXCIgKGNsaWNrKT1cInRvZ2dsZUNsb3NlKClcIiAqbmdJZj1cImNsb3NlIHx8IGNvbmZpZy5jbG9zZVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCJjYXJkQXV0b21hdGlvbklkICsgJy1jbG9zZSdcIiB0b29sdGlwPVwie3sgbGFiZWxzLmNsb3NlIH19XCIgdG9vbHRpcFBvc2l0aW9uPVwiYm90dG9tLWxlZnRcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPCEtLUNhcmQgTWFpbi0tPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPCEtLUNvbnRlbnQgKHRyYW5zY2x1ZGVkKS0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIShsb2FkaW5nIHx8IGNvbmZpZy5sb2FkaW5nKSAmJiAhKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwhLS1FcnJvci9FbXB0eSBNZXNzYWdlLS0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLW1lc3NhZ2VcIiAqbmdJZj1cIiEobG9hZGluZyB8fCBjb25maWcubG9hZGluZykgJiYgKG1lc3NhZ2UgfHwgY29uZmlnLm1lc3NhZ2UpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cImNhcmRBdXRvbWF0aW9uSWQgKyAnLW1lc3NhZ2UnXCI+PGkgKm5nSWY9XCJtZXNzYWdlSWNvbkNsYXNzXCIgW25nQ2xhc3NdPVwibWVzc2FnZUljb25DbGFzc1wiPjwvaT4gPHNwYW4gW2lubmVySHRtbF09XCJtZXNzYWdlIHx8IGNvbmZpZy5tZXNzYWdlXCI+PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICAgIDwhLS1DYXJkIEZvb3Rlci0tPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhKGxvYWRpbmcgfHwgY29uZmlnLmxvYWRpbmcpICYmICEobWVzc2FnZSB8fCBjb25maWcubWVzc2FnZSlcIiBzZWxlY3Q9XCJmb290ZXJcIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIENhcmRFbGVtZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKVxuICBwYWRkaW5nOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtZXNzYWdlSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGljb25Ub29sdGlwOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHJlZnJlc2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpXG4gIGNsb3NlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBtb3ZlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBsb2FkaW5nOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKVxuICBvbkNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIG9uUmVmcmVzaDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY2FyZEF1dG9tYXRpb25JZDogc3RyaW5nO1xuICBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2U7XG4gIGljb25DbGFzczogc3RyaW5nIHwgbnVsbDtcbiAgbWVzc2FnZUljb25DbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGxhYmVsczogTm92b0xhYmVsU2VydmljZSkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmNhcmRBdXRvbWF0aW9uSWQgPSBgJHsodGhpcy50aXRsZSB8fCB0aGlzLmNvbmZpZy50aXRsZSB8fCAnbm8tdGl0bGUnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnLScpfS1jYXJkYDtcblxuICAgIGxldCBuZXdJY29uOiBzdHJpbmcgPSB0aGlzLmljb24gfHwgdGhpcy5jb25maWcuaWNvbjtcbiAgICBsZXQgbmV3TWVzc2FnZUljb246IHN0cmluZyA9IHRoaXMubWVzc2FnZUljb24gfHwgdGhpcy5jb25maWcubWVzc2FnZUljb247XG4gICAgdGhpcy5pY29uQ2xhc3MgPSBuZXdJY29uID8gYGJoaS0ke25ld0ljb259YCA6IG51bGw7XG4gICAgdGhpcy5tZXNzYWdlSWNvbkNsYXNzID0gbmV3TWVzc2FnZUljb24gPyBgYmhpLSR7bmV3TWVzc2FnZUljb259YCA6IG51bGw7XG4gIH1cblxuICB0b2dnbGVDbG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLm9uQ2xvc2UpIHtcbiAgICAgIHRoaXMub25DbG9zZS5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uQ2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVSZWZyZXNoKCkge1xuICAgIGlmICghdGhpcy5jb25maWcub25SZWZyZXNoKSB7XG4gICAgICB0aGlzLm9uUmVmcmVzaC5uZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uZmlnLm9uUmVmcmVzaCgpO1xuICAgIH1cbiAgfVxufVxuIl19