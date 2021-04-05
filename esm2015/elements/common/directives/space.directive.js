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
        return this.margin || this.m;
    }
    get hb_margin_left() {
        return this.marginLeft || this.ml;
    }
    get hb_margin_right() {
        return this.marginRight || this.mr;
    }
    get hb_margin_top() {
        return this.marginTop || this.mt;
    }
    get hb_margin_bottom() {
        return this.marginBottom || this.mb;
    }
}
MarginDirective.ɵfac = function MarginDirective_Factory(t) { return new (t || MarginDirective)(); };
MarginDirective.ɵdir = i0.ɵɵdefineDirective({ type: MarginDirective, selectors: [["", "m", ""], ["", "margin", ""], ["", "marginTop", ""], ["", "marginRight", ""], ["", "marginBottom", ""], ["", "marginLeft", ""], ["", "marginX", ""], ["", "marginY", ""], ["", "mt", ""], ["", "mr", ""], ["", "mb", ""], ["", "ml", ""], ["", "mx", ""], ["", "my", ""]], hostVars: 10, hostBindings: function MarginDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("margin", ctx.hb_margin)("margin-left", ctx.hb_margin_left)("margin-right", ctx.hb_margin_right)("margin-top", ctx.hb_margin_top)("margin-bottom", ctx.hb_margin_bottom);
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
            args: ['style.margin']
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
    get hb_padding() {
        return this.padding || this.p;
    }
    get hb_padding_left() {
        return this.paddingLeft || this.pl || this.px;
    }
    get hb_padding_right() {
        return this.paddingRight || this.pr || this.px;
    }
    get hb_padding_top() {
        return this.paddingTop || this.pt || this.py;
    }
    get hb_padding_bottom() {
        return this.paddingBottom || this.pb || this.py;
    }
}
PaddingDirective.ɵfac = function PaddingDirective_Factory(t) { return new (t || PaddingDirective)(); };
PaddingDirective.ɵdir = i0.ɵɵdefineDirective({ type: PaddingDirective, selectors: [["", "p", ""], ["", "padding", ""], ["", "paddingTop", ""], ["", "paddingRight", ""], ["", "paddingBottom", ""], ["", "paddingLeft", ""], ["", "paddingX", ""], ["", "paddingY", ""], ["", "pt", ""], ["", "pr", ""], ["", "pb", ""], ["", "pl", ""], ["", "px", ""], ["", "py", ""]], hostVars: 10, hostBindings: function PaddingDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("padding", ctx.hb_padding)("padding-left", ctx.hb_padding_left)("padding-right", ctx.hb_padding_right)("padding-top", ctx.hb_padding_top)("padding-bottom", ctx.hb_padding_bottom);
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
            args: ['style.padding']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhY2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY29tbW9uL2RpcmVjdGl2ZXMvc3BhY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFDQUFxQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTlEOzs7Ozs7Ozs7Ozs7Ozs7O0VBZ0JFO0FBRUY7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQU1GLE1BQU0sT0FBTyxlQUFlO0lBaUIxQixJQUFpQyxTQUFTO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDRCxJQUFzQyxjQUFjO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFDRCxJQUF1QyxlQUFlO1FBQ3BELE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxJQUFxQyxhQUFhO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDRCxJQUF3QyxnQkFBZ0I7UUFDdEQsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7OEVBL0JVLGVBQWU7b0RBQWYsZUFBZTs7O2tEQUFmLGVBQWU7Y0FKM0IsU0FBUztlQUFDO2dCQUNULDRDQUE0QztnQkFDNUMsUUFBUSxFQUFFLHNIQUFzSDthQUNqSTtnQkFHVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxDQUFDO2tCQUFULEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBRTJCLFNBQVM7a0JBQXpDLFdBQVc7bUJBQUMsY0FBYztZQUdXLGNBQWM7a0JBQW5ELFdBQVc7bUJBQUMsbUJBQW1CO1lBR08sZUFBZTtrQkFBckQsV0FBVzttQkFBQyxvQkFBb0I7WUFHSSxhQUFhO2tCQUFqRCxXQUFXO21CQUFDLGtCQUFrQjtZQUdTLGdCQUFnQjtrQkFBdkQsV0FBVzttQkFBQyxxQkFBcUI7O0FBU3BDLE1BQU0sT0FBTyxnQkFBZ0I7SUFpQjNCLElBQWtDLFVBQVU7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNELElBQXVDLGVBQWU7UUFDcEQsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsSUFBd0MsZ0JBQWdCO1FBQ3RELE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNELElBQXNDLGNBQWM7UUFDbEQsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBQ0QsSUFBeUMsaUJBQWlCO1FBQ3hELE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQzs7Z0ZBL0JVLGdCQUFnQjtxREFBaEIsZ0JBQWdCOzs7a0RBQWhCLGdCQUFnQjtjQUo1QixTQUFTO2VBQUM7Z0JBQ1QsNENBQTRDO2dCQUM1QyxRQUFRLEVBQUUsNkhBQTZIO2FBQ3hJO2dCQUdVLE9BQU87a0JBQWYsS0FBSztZQUNHLENBQUM7a0JBQVQsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUU0QixVQUFVO2tCQUEzQyxXQUFXO21CQUFDLGVBQWU7WUFHVyxlQUFlO2tCQUFyRCxXQUFXO21CQUFDLG9CQUFvQjtZQUdPLGdCQUFnQjtrQkFBdkQsV0FBVzttQkFBQyxxQkFBcUI7WUFHSSxjQUFjO2tCQUFuRCxXQUFXO21CQUFDLG1CQUFtQjtZQUdTLGlCQUFpQjtrQkFBekQsV0FBVzttQkFBQyxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogZGlyZWN0aXZlLXNlbGVjdG9yXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKlxuUHJvcFx0Q1NTIFByb3BlcnR5XHRUaGVtZSBGaWVsZFxubSwgbWFyZ2luXHRtYXJnaW5cdHNwYWNlXG5tdCwgbWFyZ2luVG9wXHRtYXJnaW4tdG9wXHRzcGFjZVxubXIsIG1hcmdpblJpZ2h0XHRtYXJnaW4tcmlnaHRcdHNwYWNlXG5tYiwgbWFyZ2luQm90dG9tXHRtYXJnaW4tYm90dG9tXHRzcGFjZVxubWwsIG1hcmdpbkxlZnRcdG1hcmdpbi1sZWZ0XHRzcGFjZVxubXhcdG1hcmdpbi1sZWZ0IGFuZCBtYXJnaW4tcmlnaHRcdHNwYWNlXG5teVx0bWFyZ2luLXRvcCBhbmQgbWFyZ2luLWJvdHRvbVx0c3BhY2VcbnAsIHBhZGRpbmdcdHBhZGRpbmdcdHNwYWNlXG5wdCwgcGFkZGluZ1RvcFx0cGFkZGluZy10b3BcdHNwYWNlXG5wciwgcGFkZGluZ1JpZ2h0XHRwYWRkaW5nLXJpZ2h0XHRzcGFjZVxucGIsIHBhZGRpbmdCb3R0b21cdHBhZGRpbmctYm90dG9tXHRzcGFjZVxucGwsIHBhZGRpbmdMZWZ0XHRwYWRkaW5nLWxlZnRcdHNwYWNlXG5weFx0cGFkZGluZy1sZWZ0IGFuZCBwYWRkaW5nLXJpZ2h0XHRzcGFjZVxucHlcdHBhZGRpbmctdG9wIGFuZCBwYWRkaW5nLWJvdHRvbVx0c3BhY2VcbiovXG5cbi8qXG4vLyBTZWxlY3RvcnMgZ2VuZXJhdGVkIHdpdGggdGhlIGZvbGxvd2luZyBjb2RlXG5jb25zdCBkaXJlY3Rpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnLCAnWCcsICdZJ107XG5jb25zdCBhYmJyRGlyZWN0aW9ucyA9IGRpcmVjdGlvbnMubWFwKChkKSA9PiBkLnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkpO1xuY29uc3QgbWFyZ2luQXR0cnMgPSBbXG4gICdbbV0nLFxuICAnW21hcmdpbl0nLFxuICAuLi5kaXJlY3Rpb25zLm1hcCgoZGlyKSA9PiBgW21hcmdpbiR7ZGlyfV1gKSxcbiAgLi4uYWJickRpcmVjdGlvbnMubWFwKChkaXIpID0+IGBbbSR7ZGlyfV1gKSxcbl07XG5jb25zdCBwYWRkaW5nQXR0cnMgPSBbXG4gICdbcF0nLFxuICAnW3BhZGRpbmddJyxcbiAgLi4uZGlyZWN0aW9ucy5tYXAoKGRpcikgPT4gYFtwYWRkaW5nJHtkaXJ9XWApLFxuICAuLi5hYmJyRGlyZWN0aW9ucy5tYXAoKGRpcikgPT4gYFtwJHtkaXJ9XWApLFxuXTtcblxuY29uc3Qgc2VsZWN0b3JzID0gWy4uLm1hcmdpbkF0dHJzLCAuLi5wYWRkaW5nQXR0cnNdO1xuKi9cblxuQERpcmVjdGl2ZSh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXG4gIHNlbGVjdG9yOiAnW21dLFttYXJnaW5dLFttYXJnaW5Ub3BdLFttYXJnaW5SaWdodF0sW21hcmdpbkJvdHRvbV0sW21hcmdpbkxlZnRdLFttYXJnaW5YXSxbbWFyZ2luWV0sW210XSxbbXJdLFttYl0sW21sXSxbbXhdLFtteV0nLFxufSlcbmV4cG9ydCBjbGFzcyBNYXJnaW5EaXJlY3RpdmUge1xuICAvLyBNYXJnaW5cbiAgQElucHV0KCkgbWFyZ2luOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG06IHN0cmluZztcbiAgQElucHV0KCkgbWFyZ2luTGVmdDogc3RyaW5nO1xuICBASW5wdXQoKSBtbDogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJnaW5SaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBtcjogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJnaW5Ub3A6IHN0cmluZztcbiAgQElucHV0KCkgbXQ6IHN0cmluZztcbiAgQElucHV0KCkgbWFyZ2luQm90dG9tOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1iOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcmdpblg6IHN0cmluZztcbiAgQElucHV0KCkgbXg6IHN0cmluZztcbiAgQElucHV0KCkgbWFyZ2luWTogc3RyaW5nO1xuICBASW5wdXQoKSBteTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luJykgZ2V0IGhiX21hcmdpbigpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJnaW4gfHwgdGhpcy5tO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLWxlZnQnKSBnZXQgaGJfbWFyZ2luX2xlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFyZ2luTGVmdCB8fCB0aGlzLm1sO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXJpZ2h0JykgZ2V0IGhiX21hcmdpbl9yaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXJnaW5SaWdodCB8fCB0aGlzLm1yO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLXRvcCcpIGdldCBoYl9tYXJnaW5fdG9wKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmdpblRvcCB8fCB0aGlzLm10O1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWFyZ2luLWJvdHRvbScpIGdldCBoYl9tYXJnaW5fYm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLm1hcmdpbkJvdHRvbSB8fCB0aGlzLm1iO1xuICB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxuICBzZWxlY3RvcjogJ1twXSxbcGFkZGluZ10sW3BhZGRpbmdUb3BdLFtwYWRkaW5nUmlnaHRdLFtwYWRkaW5nQm90dG9tXSxbcGFkZGluZ0xlZnRdLFtwYWRkaW5nWF0sW3BhZGRpbmdZXSxbcHRdLFtwcl0sW3BiXSxbcGxdLFtweF0sW3B5XScsXG59KVxuZXhwb3J0IGNsYXNzIFBhZGRpbmdEaXJlY3RpdmUge1xuICAvLyBQYWRkaW5nXG4gIEBJbnB1dCgpIHBhZGRpbmc6IHN0cmluZztcbiAgQElucHV0KCkgcDogc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nTGVmdDogc3RyaW5nO1xuICBASW5wdXQoKSBwbDogc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nUmlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgcHI6IHN0cmluZztcbiAgQElucHV0KCkgcGFkZGluZ1RvcDogc3RyaW5nO1xuICBASW5wdXQoKSBwdDogc3RyaW5nO1xuICBASW5wdXQoKSBwYWRkaW5nQm90dG9tOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBiOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZGRpbmdYOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB4OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZGRpbmdZOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB5OiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nJykgZ2V0IGhiX3BhZGRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFkZGluZyB8fCB0aGlzLnA7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQnKSBnZXQgaGJfcGFkZGluZ19sZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLnBhZGRpbmdMZWZ0IHx8IHRoaXMucGwgfHwgdGhpcy5weDtcbiAgfVxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQnKSBnZXQgaGJfcGFkZGluZ19yaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nUmlnaHQgfHwgdGhpcy5wciB8fCB0aGlzLnB4O1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy10b3AnKSBnZXQgaGJfcGFkZGluZ190b3AoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFkZGluZ1RvcCB8fCB0aGlzLnB0IHx8IHRoaXMucHk7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWJvdHRvbScpIGdldCBoYl9wYWRkaW5nX2JvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYWRkaW5nQm90dG9tIHx8IHRoaXMucGIgfHwgdGhpcy5weTtcbiAgfVxufVxuIl19