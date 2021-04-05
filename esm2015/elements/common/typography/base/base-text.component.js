import { __decorate, __metadata } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { BooleanInput } from '../../../../utils';
import * as i0 from "@angular/core";
export class NovoBaseTextElement {
    get hb_isSizeSmall() {
        return this.size === 'small';
    }
    get hb_isSizeLarge() {
        return this.size === 'large';
    }
    get hb_isSizeDefault() {
        return !['small', 'large'].includes(this.size);
    }
    get hb_isWeightThin() {
        return this.weight === 'thin';
    }
    get hb_isWeightMedium() {
        return this.weight === 'medium';
    }
    get hb_isWeightBold() {
        return this.weight === 'bold';
    }
    get hb_isWeightDefault() {
        return !['thin', 'medium', 'bold'].includes(this.weight);
    }
    get hb_color() {
        return this.color ? `text-color-${this.color}` : '';
    }
}
NovoBaseTextElement.ɵfac = function NovoBaseTextElement_Factory(t) { return new (t || NovoBaseTextElement)(); };
NovoBaseTextElement.ɵdir = i0.ɵɵdefineDirective({ type: NovoBaseTextElement, hostVars: 26, hostBindings: function NovoBaseTextElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hb_color);
        i0.ɵɵclassProp("text-size-small", ctx.hb_isSizeSmall)("text-size-large", ctx.hb_isSizeLarge)("text-size-default", ctx.hb_isSizeDefault)("text-weight-thin", ctx.hb_isWeightThin)("text-weight-medium", ctx.hb_isWeightMedium)("text-weight-bold", ctx.hb_isWeightBold)("text-weight-default", ctx.hb_isWeightDefault)("text-disabled", ctx.disabled)("text-color-empty", ctx.muted)("text-color-negative", ctx.error)("margin-before", ctx.marginBefore)("margin-after", ctx.marginAfter);
    } }, inputs: { size: "size", weight: "weight", color: "color", disabled: "disabled", muted: "muted", error: "error", marginBefore: "marginBefore", marginAfter: "marginAfter" } });
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoBaseTextElement.prototype, "disabled", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoBaseTextElement.prototype, "muted", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoBaseTextElement.prototype, "error", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoBaseTextElement.prototype, "marginBefore", void 0);
__decorate([
    BooleanInput(),
    __metadata("design:type", Boolean)
], NovoBaseTextElement.prototype, "marginAfter", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoBaseTextElement, [{
        type: Directive
    }], null, { size: [{
            type: Input
        }], weight: [{
            type: Input
        }], color: [{
            type: Input
        }], hb_isSizeSmall: [{
            type: HostBinding,
            args: ['class.text-size-small']
        }], hb_isSizeLarge: [{
            type: HostBinding,
            args: ['class.text-size-large']
        }], hb_isSizeDefault: [{
            type: HostBinding,
            args: ['class.text-size-default']
        }], hb_isWeightThin: [{
            type: HostBinding,
            args: ['class.text-weight-thin']
        }], hb_isWeightMedium: [{
            type: HostBinding,
            args: ['class.text-weight-medium']
        }], hb_isWeightBold: [{
            type: HostBinding,
            args: ['class.text-weight-bold']
        }], hb_isWeightDefault: [{
            type: HostBinding,
            args: ['class.text-weight-default']
        }], hb_color: [{
            type: HostBinding,
            args: ['class']
        }], disabled: [{
            type: HostBinding,
            args: ['class.text-disabled']
        }, {
            type: Input
        }], muted: [{
            type: HostBinding,
            args: ['class.text-color-empty']
        }, {
            type: Input
        }], error: [{
            type: HostBinding,
            args: ['class.text-color-negative']
        }, {
            type: Input
        }], marginBefore: [{
            type: HostBinding,
            args: ['class.margin-before']
        }, {
            type: Input
        }], marginAfter: [{
            type: HostBinding,
            args: ['class.margin-after']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS90cmF2aXMvYnVpbGQvYnVsbGhvcm4vbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NvbW1vbi90eXBvZ3JhcGh5L2Jhc2UvYmFzZS10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFJakQsTUFBTSxPQUFPLG1CQUFtQjtJQVE5QixJQUNJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUQsSUFDSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQ0ksZ0JBQWdCO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxJQUNJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFDSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFDSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQ0ksa0JBQWtCO1FBQ3BCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsSUFDSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RELENBQUM7O3NGQTlDVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7OztBQW1EOUI7SUFEQyxZQUFZLEVBQUU7O3FEQUNHO0FBS2xCO0lBREMsWUFBWSxFQUFFOztrREFDQTtBQUtmO0lBREMsWUFBWSxFQUFFOztrREFDQTtBQUtmO0lBREMsWUFBWSxFQUFFOzt5REFDTztBQUt0QjtJQURDLFlBQVksRUFBRTs7d0RBQ007a0RBdkVWLG1CQUFtQjtjQUQvQixTQUFTO2dCQUdSLElBQUk7a0JBREgsS0FBSztZQUdOLE1BQU07a0JBREwsS0FBSztZQUdOLEtBQUs7a0JBREosS0FBSztZQUlGLGNBQWM7a0JBRGpCLFdBQVc7bUJBQUMsdUJBQXVCO1lBTWhDLGNBQWM7a0JBRGpCLFdBQVc7bUJBQUMsdUJBQXVCO1lBTWhDLGdCQUFnQjtrQkFEbkIsV0FBVzttQkFBQyx5QkFBeUI7WUFNbEMsZUFBZTtrQkFEbEIsV0FBVzttQkFBQyx3QkFBd0I7WUFNakMsaUJBQWlCO2tCQURwQixXQUFXO21CQUFDLDBCQUEwQjtZQU1uQyxlQUFlO2tCQURsQixXQUFXO21CQUFDLHdCQUF3QjtZQU1qQyxrQkFBa0I7a0JBRHJCLFdBQVc7bUJBQUMsMkJBQTJCO1lBTXBDLFFBQVE7a0JBRFgsV0FBVzttQkFBQyxPQUFPO1lBUXBCLFFBQVE7a0JBSFAsV0FBVzttQkFBQyxxQkFBcUI7O2tCQUNqQyxLQUFLO1lBT04sS0FBSztrQkFISixXQUFXO21CQUFDLHdCQUF3Qjs7a0JBQ3BDLEtBQUs7WUFPTixLQUFLO2tCQUhKLFdBQVc7bUJBQUMsMkJBQTJCOztrQkFDdkMsS0FBSztZQU9OLFlBQVk7a0JBSFgsV0FBVzttQkFBQyxxQkFBcUI7O2tCQUNqQyxLQUFLO1lBT04sV0FBVztrQkFIVixXQUFXO21CQUFDLG9CQUFvQjs7a0JBQ2hDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnO1xuaW1wb3J0IHsgVHlwb2dyYXBoeVNpemUsIFR5cG9ncmFwaHlXZWlnaHQgfSBmcm9tICcuLi90ZXh0LnR5cGVzJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgTm92b0Jhc2VUZXh0RWxlbWVudCB7XG4gIEBJbnB1dCgpXG4gIHNpemU6IFR5cG9ncmFwaHlTaXplO1xuICBASW5wdXQoKVxuICB3ZWlnaHQ6IFR5cG9ncmFwaHlXZWlnaHQ7XG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50ZXh0LXNpemUtc21hbGwnKVxuICBnZXQgaGJfaXNTaXplU21hbGwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGV4dC1zaXplLWxhcmdlJylcbiAgZ2V0IGhiX2lzU2l6ZUxhcmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNpemUgPT09ICdsYXJnZSc7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRleHQtc2l6ZS1kZWZhdWx0JylcbiAgZ2V0IGhiX2lzU2l6ZURlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFbJ3NtYWxsJywgJ2xhcmdlJ10uaW5jbHVkZXModGhpcy5zaXplKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGV4dC13ZWlnaHQtdGhpbicpXG4gIGdldCBoYl9pc1dlaWdodFRoaW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0ID09PSAndGhpbic7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRleHQtd2VpZ2h0LW1lZGl1bScpXG4gIGdldCBoYl9pc1dlaWdodE1lZGl1bSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHQgPT09ICdtZWRpdW0nO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50ZXh0LXdlaWdodC1ib2xkJylcbiAgZ2V0IGhiX2lzV2VpZ2h0Qm9sZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHQgPT09ICdib2xkJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGV4dC13ZWlnaHQtZGVmYXVsdCcpXG4gIGdldCBoYl9pc1dlaWdodERlZmF1bHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFbJ3RoaW4nLCAnbWVkaXVtJywgJ2JvbGQnXS5pbmNsdWRlcyh0aGlzLndlaWdodCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgZ2V0IGhiX2NvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29sb3IgPyBgdGV4dC1jb2xvci0ke3RoaXMuY29sb3J9YCA6ICcnO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50ZXh0LWRpc2FibGVkJylcbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGV4dC1jb2xvci1lbXB0eScpXG4gIEBJbnB1dCgpXG4gIEBCb29sZWFuSW5wdXQoKVxuICBtdXRlZDogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRleHQtY29sb3ItbmVnYXRpdmUnKVxuICBASW5wdXQoKVxuICBAQm9vbGVhbklucHV0KClcbiAgZXJyb3I6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXJnaW4tYmVmb3JlJylcbiAgQElucHV0KClcbiAgQEJvb2xlYW5JbnB1dCgpXG4gIG1hcmdpbkJlZm9yZTogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1hcmdpbi1hZnRlcicpXG4gIEBJbnB1dCgpXG4gIEBCb29sZWFuSW5wdXQoKVxuICBtYXJnaW5BZnRlcjogYm9vbGVhbjtcbn1cbiJdfQ==