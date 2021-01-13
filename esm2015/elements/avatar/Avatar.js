// NG2
import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class NovoAvatarElement {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        let src;
        if ((this.source && this.source !== '') || this.label) {
            if (this.source.profileImage) {
                src = this.source.profileImage;
            }
            else if (this.source.logo) {
                src = this.source.logo;
            }
            else {
                const first = this.label || this.source.firstName
                    ? this.source.firstName.charAt(0)
                    : this.source.name
                        ? this.source.name.charAt(0)
                        : this.source.username
                            ? this.source.username.charAt(0)
                            : '';
                const last = this.source.lastName ? this.source.lastName.charAt(0) : '';
                // Defining Colors
                const colors = [
                    '#1abc9c',
                    '#16a085',
                    '#f1c40f',
                    '#f39c12',
                    '#2ecc71',
                    '#27ae60',
                    '#e67e22',
                    '#d35400',
                    '#3498db',
                    '#2980b9',
                    '#e74c3c',
                    '#c0392b',
                    '#9b59b6',
                    '#8e44ad',
                    '#bdc3c7',
                    '#34495e',
                    '#2c3e50',
                    '#95a5a6',
                    '#7f8c8d',
                    '#ec87bf',
                    '#d870ad',
                    '#f69785',
                    '#9ba37e',
                    '#b49255',
                    '#b49255',
                    '#a94136',
                ];
                const lighterColors = [
                    '#15D6B0',
                    '#16A069',
                    '#F1D60F',
                    '#F3AC12',
                    '#2ED85B',
                    '#28BC7F',
                    '#E66322',
                    '#D3002B',
                    '#6534DB',
                    '#29B2B9',
                    '#E73C63',
                    '#DB6D31',
                    '#CB48B5',
                    '#6944AD',
                    '#38536D',
                    '#3D6473',
                    '#394A6C',
                    '#92BCB7',
                    '#7D99A2',
                    '#F14F76',
                    '#CB5CDA',
                    '#FFB475',
                    '#B9CE6E',
                    '#DDAA4F',
                    '#CD6F45',
                    '#B9354A',
                ];
                const settings = {
                    // Default settings
                    textColor: '#ffffff',
                    height: 100,
                    width: 100,
                    fontSize: 50,
                    fontWeight: 400,
                    fontFamily: 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
                };
                // making the text object
                const colorIndex = Math.floor((first.charCodeAt(0) - 65) % colors.length);
                const cobj = document.createElement('text');
                cobj.setAttribute('text-anchor', 'middle');
                cobj.setAttribute('x', '50%');
                cobj.setAttribute('y', '50%');
                cobj.setAttribute('dy', '0.35em');
                cobj.setAttribute('pointer-events', 'auto');
                cobj.setAttribute('fill', settings.textColor);
                cobj.setAttribute('font-family', settings.fontFamily);
                cobj.style.fontWeight = settings.fontWeight;
                cobj.style.fontSize = `${settings.fontSize}px`;
                const ltrs = document.createTextNode(this.label || first + last);
                cobj.appendChild(ltrs);
                const svg = document.createElement('svg');
                svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
                svg.setAttribute('pointer-events', 'none');
                svg.setAttribute('width', settings.width);
                svg.setAttribute('height', settings.height);
                // this.setPrefixedValue(svg, 'background', colors[colorIndex]);
                this.setPrefixedValue(svg, 'background', `linear-gradient(-45deg, ${colors[colorIndex]} 0%, ${lighterColors[colorIndex]} 100%)`);
                svg.style.width = `${settings.width}px`;
                svg.style.height = `${settings.height}px`;
                svg.appendChild(cobj);
                const top = document.createElement('div');
                top.appendChild(svg);
                const svgHtml = window.btoa(unescape(encodeURIComponent(top.innerHTML)));
                src = `data:image/svg+xml;base64, ${svgHtml}`;
            }
            this.src = this.sanitizer.bypassSecurityTrustUrl(src);
        }
    }
    setPrefixedValue(elm, prop, value) {
        const prefixes = ['-moz-', '-webkit-', '-o-', '-ms-', '-khtml-'];
        // Clear
        elm.style[prop] = '';
        const starting = elm.style[prop];
        // Try raw first
        try {
            elm.style[prop] = value;
            if (elm.style[prop] !== starting) {
                return;
            }
        }
        catch (e) {
            // no op
        }
        // Try prefixes
        for (let i = 0; i < prefixes.length; ++i) {
            const v = prefixes[i] + value;
            try {
                elm.style[prop] = v;
                if (elm.style[prop] !== starting) {
                    return;
                }
            }
            catch (e2) {
                // no op
            }
        }
    }
}
NovoAvatarElement.ɵfac = function NovoAvatarElement_Factory(t) { return new (t || NovoAvatarElement)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); };
NovoAvatarElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoAvatarElement, selectors: [["novo-avatar"]], hostVars: 1, hostBindings: function NovoAvatarElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("size", ctx.size);
    } }, inputs: { source: "source", label: "label", color: "color", theme: "theme", size: "size" }, decls: 1, vars: 1, consts: [[3, "src"]], template: function NovoAvatarElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "img", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("src", ctx.src, i0.ɵɵsanitizeUrl);
    } }, styles: ["[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:2em;height:30px;width:30px}[size=small][_nghost-%COMP%]   img[_ngcontent-%COMP%]{height:20px;width:20px}[size=large][_nghost-%COMP%]   img[_ngcontent-%COMP%]{height:40px;width:40px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAvatarElement, [{
        type: Component,
        args: [{
                selector: 'novo-avatar',
                styleUrls: ['./Avatar.scss'],
                template: '<img [src]="src"/>',
            }]
    }], function () { return [{ type: i1.DomSanitizer }]; }, { source: [{
            type: Input
        }], label: [{
            type: Input
        }], color: [{
            type: Input
        }], theme: [{
            type: Input
        }], size: [{
            type: HostBinding,
            args: ['attr.size']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvYXZhdGFyL0F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxpQkFBaUI7SUFZNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFHLENBQUM7SUFFL0MsUUFBUTtRQUNOLElBQUksR0FBUSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQzVCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQzthQUNoQztpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsTUFBTSxLQUFLLEdBQ1QsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7b0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJO3dCQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJ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Q0Y7WUFBQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxRQUFRO2FBQ1Q7U0FDRjtJQUNILENBQUM7O2tGQXhLVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjs7O1FBRmpCLHlCQUFrQjs7UUFBYiwrQ0FBVzs7a0RBRWhCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDNUIsUUFBUSxFQUFFLG9CQUFvQjthQUMvQjsrREFFVSxNQUFNO2tCQUFkLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFJTixJQUFJO2tCQUZILFdBQVc7bUJBQUMsV0FBVzs7a0JBQ3ZCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWF2YXRhcicsXG4gIHN0eWxlVXJsczogWycuL0F2YXRhci5zY3NzJ10sXG4gIHRlbXBsYXRlOiAnPGltZyBbc3JjXT1cInNyY1wiLz4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQXZhdGFyRWxlbWVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNvdXJjZTogYW55O1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSB0aGVtZTogc3RyaW5nO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5zaXplJylcbiAgQElucHV0KClcbiAgc2l6ZTogc3RyaW5nO1xuXG4gIHNyYzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHt9XG5cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICBsZXQgc3JjOiBhbnk7XG4gICAgaWYgKCh0aGlzLnNvdXJjZSAmJiB0aGlzLnNvdXJjZSAhPT0gJycpIHx8IHRoaXMubGFiZWwpIHtcbiAgICAgIGlmICh0aGlzLnNvdXJjZS5wcm9maWxlSW1hZ2UpIHtcbiAgICAgICAgc3JjID0gdGhpcy5zb3VyY2UucHJvZmlsZUltYWdlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZS5sb2dvKSB7XG4gICAgICAgIHNyYyA9IHRoaXMuc291cmNlLmxvZ287XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaXJzdDogYW55ID1cbiAgICAgICAgICB0aGlzLmxhYmVsIHx8IHRoaXMuc291cmNlLmZpcnN0TmFtZVxuICAgICAgICAgICAgPyB0aGlzLnNvdXJjZS5maXJzdE5hbWUuY2hhckF0KDApXG4gICAgICAgICAgICA6IHRoaXMuc291cmNlLm5hbWVcbiAgICAgICAgICAgID8gdGhpcy5zb3VyY2UubmFtZS5jaGFyQXQoMClcbiAgICAgICAgICAgIDogdGhpcy5zb3VyY2UudXNlcm5hbWVcbiAgICAgICAgICAgID8gdGhpcy5zb3VyY2UudXNlcm5hbWUuY2hhckF0KDApXG4gICAgICAgICAgICA6ICcnO1xuICAgICAgICBjb25zdCBsYXN0OiBhbnkgPSB0aGlzLnNvdXJjZS5sYXN0TmFtZSA/IHRoaXMuc291cmNlLmxhc3ROYW1lLmNoYXJBdCgwKSA6ICcnO1xuXG4gICAgICAgIC8vIERlZmluaW5nIENvbG9yc1xuICAgICAgICBjb25zdCBjb2xvcnM6IGFueSA9IFtcbiAgICAgICAgICAnIzFhYmM5YycsXG4gICAgICAgICAgJyMxNmEwODUnLFxuICAgICAgICAgICcjZjFjNDBmJyxcbiAgICAgICAgICAnI2YzOWMxMicsXG4gICAgICAgICAgJyMyZWNjNzEnLFxuICAgICAgICAgICcjMjdhZTYwJyxcbiAgICAgICAgICAnI2U2N2UyMicsXG4gICAgICAgICAgJyNkMzU0MDAnLFxuICAgICAgICAgICcjMzQ5OGRiJyxcbiAgICAgICAgICAnIzI5ODBiOScsXG4gICAgICAgICAgJyNlNzRjM2MnLFxuICAgICAgICAgICcjYzAzOTJiJyxcbiAgICAgICAgICAnIzliNTliNicsXG4gICAgICAgICAgJyM4ZTQ0YWQnLFxuICAgICAgICAgICcjYmRjM2M3JyxcbiAgICAgICAgICAnIzM0NDk1ZScsXG4gICAgICAgICAgJyMyYzNlNTAnLFxuICAgICAgICAgICcjOTVhNWE2JyxcbiAgICAgICAgICAnIzdmOGM4ZCcsXG4gICAgICAgICAgJyNlYzg3YmYnLFxuICAgICAgICAgICcjZDg3MGFkJyxcbiAgICAgICAgICAnI2Y2OTc4NScsXG4gICAgICAgICAgJyM5YmEzN2UnLFxuICAgICAgICAgICcjYjQ5MjU1JyxcbiAgICAgICAgICAnI2I0OTI1NScsXG4gICAgICAgICAgJyNhOTQxMzYnLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBsaWdodGVyQ29sb3JzOiBhbnkgPSBbXG4gICAgICAgICAgJyMxNUQ2QjAnLFxuICAgICAgICAgICcjMTZBMDY5JyxcbiAgICAgICAgICAnI0YxRDYwRicsXG4gICAgICAgICAgJyNGM0FDMTInLFxuICAgICAgICAgICcjMkVEODVCJyxcbiAgICAgICAgICAnIzI4QkM3RicsXG4gICAgICAgICAgJyNFNjYzMjInLFxuICAgICAgICAgICcjRDMwMDJCJyxcbiAgICAgICAgICAnIzY1MzREQicsXG4gICAgICAgICAgJyMyOUIyQjknLFxuICAgICAgICAgICcjRTczQzYzJyxcbiAgICAgICAgICAnI0RCNkQzMScsXG4gICAgICAgICAgJyNDQjQ4QjUnLFxuICAgICAgICAgICcjNjk0NEFEJyxcbiAgICAgICAgICAnIzM4NTM2RCcsXG4gICAgICAgICAgJyMzRDY0NzMnLFxuICAgICAgICAgICcjMzk0QTZDJyxcbiAgICAgICAgICAnIzkyQkNCNycsXG4gICAgICAgICAgJyM3RDk5QTInLFxuICAgICAgICAgICcjRjE0Rjc2JyxcbiAgICAgICAgICAnI0NCNUNEQScsXG4gICAgICAgICAgJyNGRkI0NzUnLFxuICAgICAgICAgICcjQjlDRTZFJyxcbiAgICAgICAgICAnI0REQUE0RicsXG4gICAgICAgICAgJyNDRDZGNDUnLFxuICAgICAgICAgICcjQjkzNTRBJyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgc2V0dGluZ3M6IGFueSA9IHtcbiAgICAgICAgICAvLyBEZWZhdWx0IHNldHRpbmdzXG4gICAgICAgICAgdGV4dENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICBmb250U2l6ZTogNTAsXG4gICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgIGZvbnRGYW1pbHk6ICdIZWx2ZXRpY2FOZXVlLUxpZ2h0LEhlbHZldGljYSBOZXVlIExpZ2h0LEhlbHZldGljYSBOZXVlLEhlbHZldGljYSwgQXJpYWwsTHVjaWRhIEdyYW5kZSwgc2Fucy1zZXJpZicsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gbWFraW5nIHRoZSB0ZXh0IG9iamVjdFxuICAgICAgICBjb25zdCBjb2xvckluZGV4OiBhbnkgPSBNYXRoLmZsb29yKChmaXJzdC5jaGFyQ29kZUF0KDApIC0gNjUpICUgY29sb3JzLmxlbmd0aCk7XG5cbiAgICAgICAgY29uc3QgY29iajogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dCcpO1xuICAgICAgICBjb2JqLnNldEF0dHJpYnV0ZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG4gICAgICAgIGNvYmouc2V0QXR0cmlidXRlKCd4JywgJzUwJScpO1xuICAgICAgICBjb2JqLnNldEF0dHJpYnV0ZSgneScsICc1MCUnKTtcbiAgICAgICAgY29iai5zZXRBdHRyaWJ1dGUoJ2R5JywgJzAuMzVlbScpO1xuICAgICAgICBjb2JqLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAnYXV0bycpO1xuICAgICAgICBjb2JqLnNldEF0dHJpYnV0ZSgnZmlsbCcsIHNldHRpbmdzLnRleHRDb2xvcik7XG4gICAgICAgIGNvYmouc2V0QXR0cmlidXRlKCdmb250LWZhbWlseScsIHNldHRpbmdzLmZvbnRGYW1pbHkpO1xuICAgICAgICBjb2JqLnN0eWxlLmZvbnRXZWlnaHQgPSBzZXR0aW5ncy5mb250V2VpZ2h0O1xuICAgICAgICBjb2JqLnN0eWxlLmZvbnRTaXplID0gYCR7c2V0dGluZ3MuZm9udFNpemV9cHhgO1xuXG4gICAgICAgIGNvbnN0IGx0cnM6IGFueSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMubGFiZWwgfHwgZmlyc3QgKyBsYXN0KTtcbiAgICAgICAgY29iai5hcHBlbmRDaGlsZChsdHJzKTtcblxuICAgICAgICBjb25zdCBzdmc6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N2ZycpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdwb2ludGVyLWV2ZW50cycsICdub25lJyk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgc2V0dGluZ3Mud2lkdGgpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzZXR0aW5ncy5oZWlnaHQpO1xuXG4gICAgICAgIC8vIHRoaXMuc2V0UHJlZml4ZWRWYWx1ZShzdmcsICdiYWNrZ3JvdW5kJywgY29sb3JzW2NvbG9ySW5kZXhdKTtcbiAgICAgICAgdGhpcy5zZXRQcmVmaXhlZFZhbHVlKHN2ZywgJ2JhY2tncm91bmQnLCBgbGluZWFyLWdyYWRpZW50KC00NWRlZywgJHtjb2xvcnNbY29sb3JJbmRleF19IDAlLCAke2xpZ2h0ZXJDb2xvcnNbY29sb3JJbmRleF19IDEwMCUpYCk7XG5cbiAgICAgICAgc3ZnLnN0eWxlLndpZHRoID0gYCR7c2V0dGluZ3Mud2lkdGh9cHhgO1xuICAgICAgICBzdmcuc3R5bGUuaGVpZ2h0ID0gYCR7c2V0dGluZ3MuaGVpZ2h0fXB4YDtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKGNvYmopO1xuXG4gICAgICAgIGNvbnN0IHRvcDogYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvcC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gICAgICAgIGNvbnN0IHN2Z0h0bWw6IGFueSA9IHdpbmRvdy5idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudCh0b3AuaW5uZXJIVE1MKSkpO1xuICAgICAgICBzcmMgPSBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwgJHtzdmdIdG1sfWA7XG4gICAgICB9XG4gICAgICB0aGlzLnNyYyA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoc3JjKTtcbiAgICB9XG4gIH1cblxuICBzZXRQcmVmaXhlZFZhbHVlKGVsbTogYW55LCBwcm9wOiBhbnksIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGNvbnN0IHByZWZpeGVzOiBhbnkgPSBbJy1tb3otJywgJy13ZWJraXQtJywgJy1vLScsICctbXMtJywgJy1raHRtbC0nXTtcblxuICAgIC8vIENsZWFyXG4gICAgZWxtLnN0eWxlW3Byb3BdID0gJyc7XG4gICAgY29uc3Qgc3RhcnRpbmc6IGFueSA9IGVsbS5zdHlsZVtwcm9wXTtcblxuICAgIC8vIFRyeSByYXcgZmlyc3RcbiAgICB0cnkge1xuICAgICAgZWxtLnN0eWxlW3Byb3BdID0gdmFsdWU7XG4gICAgICBpZiAoZWxtLnN0eWxlW3Byb3BdICE9PSBzdGFydGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gbm8gb3BcbiAgICB9XG5cbiAgICAvLyBUcnkgcHJlZml4ZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCB2ID0gcHJlZml4ZXNbaV0gKyB2YWx1ZTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGVsbS5zdHlsZVtwcm9wXSA9IHY7XG4gICAgICAgIGlmIChlbG0uc3R5bGVbcHJvcF0gIT09IHN0YXJ0aW5nKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlMikge1xuICAgICAgICAvLyBubyBvcFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19