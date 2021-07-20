// tslint:disable: directive-selector
import { Directive, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
/*
Prop	CSS Property	Theme Field
m, margin	margin	space
mt, marginTop	margin-top	space
mr, marginRight	margin-right	space
mb, marginBottom	margin-bottom	space
ml, marginLeft	margin-left	space
mx	margin-left and margin-right	space
my	margin-top and margin-bottom	space
p, padding	padding	space
pt, paddingTop	padding-top	space
pr, paddingRight	padding-right	space
pb, paddingBottom	padding-bottom	space
pl, paddingLeft	padding-left	space
px	padding-left and padding-right	space
py	padding-top and padding-bottom	space
*/
/*
// Selectors generated with the following code
const directions = ['Top', 'Right', 'Bottom', 'Left', 'X', 'Y'];
const abbrDirections = directions.map((d) => d.slice(0, 1).toLowerCase());
const marginAttrs = [
  '[m]',
  '[margin]',
  ...directions.map((dir) => `[margin${dir}]`),
  ...abbrDirections.map((dir) => `[m${dir}]`),
];
const paddingAttrs = [
  '[p]',
  '[padding]',
  ...directions.map((dir) => `[padding${dir}]`),
  ...abbrDirections.map((dir) => `[p${dir}]`),
];

const selectors = [...marginAttrs, ...paddingAttrs];
*/
export class MarginDirective {
    get hb_margin() {
        return `margin-${this.margin || this.m}`;
    }
    get hb_margin_left() {
        return this.marginLeft || this.ml || this.mx || this.marginX;
    }
    get hb_margin_right() {
        return this.marginRight || this.mr || this.mx || this.marginX;
    }
    get hb_margin_top() {
        return this.marginTop || this.mt || this.my || this.marginY;
    }
    get hb_margin_bottom() {
        return this.marginBottom || this.mb || this.my || this.marginY;
    }
}
MarginDirective.ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(); };
MarginDirective.ɵdir = i0.ɵɵdefineDirective({ type: MarginDirective, selectors: [["", "m", ""], ["", "margin", ""], ["", "marginTop", ""], ["", "marginRight", ""], ["", "marginBottom", ""], ["", "marginLeft", ""], ["", "marginX", ""], ["", "marginY", ""], ["", "mt", ""], ["", "mr", ""], ["", "mb", ""], ["", "ml", ""], ["", "mx", ""], ["", "my", ""]], hostVars: 10, hostBindings: function MarginDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hb_margin);
        i0.ɵɵstyleProp("margin-left", ctx.hb_margin_left)("margin-right", ctx.hb_margin_right)("margin-top", ctx.hb_margin_top)("margin-bottom", ctx.hb_margin_bottom);
    } }, inputs: { margin: "margin", m: "m", marginLeft: "marginLeft", ml: "ml", marginRight: "marginRight", mr: "mr", marginTop: "marginTop", mt: "mt", marginBottom: "marginBottom", mb: "mb", marginX: "marginX", mx: "mx", marginY: "marginY", my: "my" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MarginDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: max-line-length
                selector: '[m],[margin],[marginTop],[marginRight],[marginBottom],[marginLeft],[marginX],[marginY],[mt],[mr],[mb],[ml],[mx],[my]',
            }]
    }], null, { margin: [{
            type: Input
        }], m: [{
            type: Input
        }], marginLeft: [{
            type: Input
        }], ml: [{
            type: Input
        }], marginRight: [{
            type: Input
        }], mr: [{
            type: Input
        }], marginTop: [{
            type: Input
        }], mt: [{
            type: Input
        }], marginBottom: [{
            type: Input
        }], mb: [{
            type: Input
        }], marginX: [{
            type: Input
        }], mx: [{
            type: Input
        }], marginY: [{
            type: Input
        }], my: [{
            type: Input
        }], hb_margin: [{
            type: HostBinding,
            args: ['class']
        }], hb_margin_left: [{
            type: HostBinding,
            args: ['style.margin-left']
        }], hb_margin_right: [{
            type: HostBinding,
            args: ['style.margin-right']
        }], hb_margin_top: [{
            type: HostBinding,
            args: ['style.margin-top']
        }], hb_margin_bottom: [{
            type: HostBinding,
            args: ['style.margin-bottom']
        }] }); })();
export class PaddingDirective {
    // @HostBinding('style.padding') get hb_padding() {
    //   return this.padding || this.p;
    // }
    get hb_padding() {
        return `padding-${this.padding || this.p}`;
    }
    get hb_padding_left() {
        return this.paddingLeft || this.pl || this.px || this.paddingX;
    }
    get hb_padding_right() {
        return this.paddingRight || this.pr || this.px || this.paddingX;
    }
    get hb_padding_top() {
        return this.paddingTop || this.pt || this.py || this.paddingY;
    }
    get hb_padding_bottom() {
        return this.paddingBottom || this.pb || this.py || this.paddingY;
    }
}
PaddingDirective.ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(); };
PaddingDirective.ɵdir = i0.ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "p", ""], ["", "padding", ""], ["", "paddingTop", ""], ["", "paddingRight", ""], ["", "paddingBottom", ""], ["", "paddingLeft", ""], ["", "paddingX", ""], ["", "paddingY", ""], ["", "pt", ""], ["", "pr", ""], ["", "pb", ""], ["", "pl", ""], ["", "px", ""], ["", "py", ""]], hostVars: 10, hostBindings: function PaddingDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassMap(ctx.hb_padding);
        i0.ɵɵstyleProp("padding-left", ctx.hb_padding_left)("padding-right", ctx.hb_padding_right)("padding-top", ctx.hb_padding_top)("padding-bottom", ctx.hb_padding_bottom);
    } }, inputs: { padding: "padding", p: "p", paddingLeft: "paddingLeft", pl: "pl", paddingRight: "paddingRight", pr: "pr", paddingTop: "paddingTop", pt: "pt", paddingBottom: "paddingBottom", pb: "pb", paddingX: "paddingX", px: "px", paddingY: "paddingY", py: "py" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaddingDirective, [{
        type: Directive,
        args: [{
                // tslint:disable-next-line: max-line-length
                selector: '[p],[padding],[paddingTop],[paddingRight],[paddingBottom],[paddingLeft],[paddingX],[paddingY],[pt],[pr],[pb],[pl],[px],[py]',
            }]
    }], null, { padding: [{
            type: Input
        }], p: [{
            type: Input
        }], paddingLeft: [{
            type: Input
        }], pl: [{
            type: Input
        }], paddingRight: [{
            type: Input
        }], pr: [{
            type: Input
        }], paddingTop: [{
            type: Input
        }], pt: [{
            type: Input
        }], paddingBottom: [{
            type: Input
        }], pb: [{
            type: Input
        }], paddingX: [{
            type: Input
        }], px: [{
            type: Input
        }], paddingY: [{
            type: Input
        }], py: [{
            type: Input
        }], hb_padding: [{
            type: HostBinding,
            args: ['class']
        }], hb_padding_left: [{
            type: HostBinding,
            args: ['style.padding-left']
        }], hb_padding_right: [{
            type: HostBinding,
            args: ['style.padding-right']
        }], hb_padding_top: [{
            type: HostBinding,
            args: ['style.padding-top']
        }], hb_padding_bottom: [{
            type: HostBinding,
            args: ['style.padding-bottom']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2NvbW1vbi9kaXJlY3RpdmVzL3NwYWNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQ0FBcUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUU5RDs7Ozs7Ozs7Ozs7Ozs7OztFQWdCRTtBQUVGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFNRixNQUFNLE9BQU8sZUFBZTtJQWlCMUIsSUFBMEIsU0FBUztRQUNqQyxPQUFPLFVBQVUsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQXNDLGNBQWM7UUFDbEQsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQy9ELENBQUM7SUFDRCxJQUF1QyxlQUFlO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNoRSxDQUFDO0lBQ0QsSUFBcUMsYUFBYTtRQUNoRCxPQUFPLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDOUQsQ0FBQztJQUNELElBQXdDLGdCQUFnQjtRQUN0RCxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUks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QUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IGRpcmVjdGl2ZS1zZWxlY3RvclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLypcblByb3BcdENTUyBQcm9wZXJ0eVx0VGhlbWUgRmllbGRcbm0sIG1hcmdpblx0bWFyZ2luXHRzcGFjZVxubXQsIG1hcmdpblRvcFx0bWFyZ2luLXRvcFx0c3BhY2Vcbm1yLCBtYXJnaW5SaWdodFx0bWFyZ2luLXJpZ2h0XHRzcGFjZVxubWIsIG1hcmdpbkJvdHRvbVx0bWFyZ2luLWJvdHRvbVx0c3BhY2Vcbm1sLCBtYXJnaW5MZWZ0XHRtYXJnaW4tbGVmdFx0c3BhY2Vcbm14XHRtYXJnaW4tbGVmdCBhbmQgbWFyZ2luLXJpZ2h0XHRzcGFjZVxubXlcdG1hcmdpbi10b3AgYW5kIG1hcmdpbi1ib3R0b21cdHNwYWNlXG5wLCBwYWRkaW5nXHRwYWRkaW5nXHRzcGFjZVxucHQsIHBhZGRpbmdUb3BcdHBhZGRpbmctdG9wXHRzcGFjZVxucHIsIHBhZGRpbmdSaWdodFx0cGFkZGluZy1yaWdodFx0c3BhY2VcbnBiLCBwYWRkaW5nQm90dG9tXHRwYWRkaW5nLWJvdHRvbVx0c3BhY2VcbnBsLCBwYWRkaW5nTGVmdFx0cGFkZGluZy1sZWZ0XHRzcGFjZVxucHhcdHBhZGRpbmctbGVmdCBhbmQgcGFkZGluZy1yaWdodFx0c3BhY2VcbnB5XHRwYWRkaW5nLXRvcCBhbmQgcGFkZGluZy1ib3R0b21cdHNwYWNlXG4qL1xuXG4vKlxuLy8gU2VsZWN0b3JzIGdlbmVyYXRlZCB3aXRoIHRoZSBmb2xsb3dpbmcgY29kZVxuY29uc3QgZGlyZWN0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0JywgJ1gnLCAnWSddO1xuY29uc3QgYWJickRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zLm1hcCgoZCkgPT4gZC5zbGljZSgwLCAxKS50b0xvd2VyQ2FzZSgpKTtcbmNvbnN0IG1hcmdpbkF0dHJzID0gW1xuICAnW21dJyxcbiAgJ1ttYXJnaW5dJyxcbiAgLi4uZGlyZWN0aW9ucy5tYXAoKGRpcikgPT4gYFttYXJnaW4ke2Rpcn1dYCksXG4gIC4uLmFiYnJEaXJlY3Rpb25zLm1hcCgoZGlyKSA9PiBgW20ke2Rpcn1dYCksXG5dO1xuY29uc3QgcGFkZGluZ0F0dHJzID0gW1xuICAnW3BdJyxcbiAgJ1twYWRkaW5nXScsXG4gIC4uLmRpcmVjdGlvbnMubWFwKChkaXIpID0+IGBbcGFkZGluZyR7ZGlyfV1gKSxcbiAgLi4uYWJickRpcmVjdGlvbnMubWFwKChkaXIpID0+IGBbcCR7ZGlyfV1gKSxcbl07XG5cbmNvbnN0IHNlbGVjdG9ycyA9IFsuLi5tYXJnaW5BdHRycywgLi4ucGFkZGluZ0F0dHJzXTtcbiovXG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICBzZWxlY3RvcjogJ1ttXSxbbWFyZ2luXSxbbWFyZ2luVG9wXSxbbWFyZ2luUmlnaHRdLFttYXJnaW5Cb3R0b21dLFttYXJnaW5MZWZ0XSxbbWFyZ2luWF0sW21hcmdpblldLFttdF0sW21yXSxbbWJdLFttbF0sW214XSxbbXldJyxcbn0pXG5leHBvcnQgY2xhc3MgTWFyZ2luRGlyZWN0aXZlIHtcbiAgLy8gTWFyZ2luXG4gIEBJbnB1dCgpIG1hcmdpbjogc3RyaW5nO1xuICBASW5wdXQoKSBtOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcmdpbkxlZnQ6IHN0cmluZztcbiAgQElucHV0KCkgbWw6IHN0cmluZztcbiAgQElucHV0KCkgbWFyZ2luUmlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgbXI6IHN0cmluZztcbiAgQElucHV0KCkgbWFyZ2luVG9wOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG10OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcmdpbkJvdHRvbTogc3RyaW5nO1xuICBASW5wdXQoKSBtYjogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJnaW5YOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG14OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcmdpblk6IHN0cmluZztcbiAgQElucHV0KCkgbXk6IHN0cmluZztcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgZ2V0IGhiX21hcmdpbigpIHtcbiAgICByZXR1cm4gYG1hcmdpbi0ke3RoaXMubWFyZ2luIHx8IHRoaXMubX1gO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLWxlZnQnKSBnZXQgaGJfbWFyZ2luX2xlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyZ2luTGVmdCB8fCB0aGlzLm1sIHx8IHRoaXMubXggfHwgdGhpcy5tYXJnaW5YO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXJpZ2h0JykgZ2V0IGhiX21hcmdpbl9yaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJnaW5SaWdodCB8fCB0aGlzLm1yIHx8IHRoaXMubXggfHwgdGhpcy5tYXJnaW5YO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXRvcCcpIGdldCBoYl9tYXJnaW5fdG9wKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmdpblRvcCB8fCB0aGlzLm10IHx8IHRoaXMubXkgfHwgdGhpcy5tYXJnaW5ZO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLWJvdHRvbScpIGdldCBoYl9tYXJnaW5fYm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmdpbkJvdHRvbSB8fCB0aGlzLm1iIHx8IHRoaXMubXkgfHwgdGhpcy5tYXJnaW5ZO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICBzZWxlY3RvcjogJ1twXSxbcGFkZGluZ10sW3BhZGRpbmdUb3BdLFtwYWRkaW5nUmlnaHRdLFtwYWRkaW5nQm90dG9tXSxbcGFkZGluZ0xlZnRdLFtwYWRkaW5nWF0sW3BhZGRpbmdZXSxbcHRdLFtwcl0sW3BiXSxbcGxdLFtweF0sW3B5XScsXG59KVxuZXhwb3J0IGNsYXNzIFBhZGRpbmdEaXJlY3RpdmUge1xuICAvLyBQYWRkaW5nXG4gIEBJbnB1dCgpIHBhZGRpbmc6IHN0cmluZztcbiAgQElucHV0KCkgcDogc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nTGVmdDogc3RyaW5nO1xuICBASW5wdXQoKSBwbDogc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nUmlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgcHI6IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZ1RvcDogc3RyaW5nO1xuICBASW5wdXQoKSBwdDogc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nQm90dG9tOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBiOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZGRpbmdYOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB4OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZGRpbmdZOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB5OiBzdHJpbmc7XG5cbiAgLy8gQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nJykgZ2V0IGhiX3BhZGRpbmcoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMucGFkZGluZyB8fCB0aGlzLnA7XG4gIC8vIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGdldCBoYl9wYWRkaW5nKCkge1xuICAgIHJldHVybiBgcGFkZGluZy0ke3RoaXMucGFkZGluZyB8fCB0aGlzLnB9YDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1sZWZ0JykgZ2V0IGhiX3BhZGRpbmdfbGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nTGVmdCB8fCB0aGlzLnBsIHx8IHRoaXMucHggfHwgdGhpcy5wYWRkaW5nWDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQnKSBnZXQgaGJfcGFkZGluZ19yaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nUmlnaHQgfHwgdGhpcy5wciB8fCB0aGlzLnB4IHx8IHRoaXMucGFkZGluZ1g7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLXRvcCcpIGdldCBoYl9wYWRkaW5nX3RvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nVG9wIHx8IHRoaXMucHQgfHwgdGhpcy5weSB8fCB0aGlzLnBhZGRpbmdZO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1ib3R0b20nKSBnZXQgaGJfcGFkZGluZ19ib3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFkZGluZ0JvdHRvbSB8fCB0aGlzLnBiIHx8IHRoaXMucHkgfHwgdGhpcy5wYWRkaW5nWTtcbiAgfVxufVxuIl19