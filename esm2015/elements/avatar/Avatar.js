// NG2
import { Component, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common";
function NovoAvatarElement_img_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.src, i0.ɵɵsanitizeUrl);
} }
export class NovoAvatarElement {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    get background() {
        return `url(${this.source.profileImage})`;
    }
    ngOnInit() {
        let src;
        if ((this.source && this.source !== '') || this.label) {
            if (this.source.profileImage) {
                // this.background = this.source.profileImage;
                return;
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
NovoAvatarElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoAvatarElement, selectors: [["novo-avatar"]], hostVars: 3, hostBindings: function NovoAvatarElement_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("size", ctx.size);
        i0.ɵɵstyleProp("background-image", ctx.background);
    } }, inputs: { source: "source", label: "label", color: "color", theme: "theme", size: "size" }, decls: 1, vars: 1, consts: [[3, "src", 4, "ngIf"], [3, "src"]], template: function NovoAvatarElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NovoAvatarElement_img_0_Template, 1, 1, "img", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.src);
    } }, directives: [i2.NgIf], styles: ["[_nghost-%COMP%]{background-position:50%;background-size:cover;border-radius:2em;display:inline-block;height:30px;overflow:hidden;width:30px}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:inherit;height:inherit;width:inherit}[size=small][_nghost-%COMP%]{height:20px;width:20px}[size=large][_nghost-%COMP%]{height:40px;width:40px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoAvatarElement, [{
        type: Component,
        args: [{
                selector: 'novo-avatar',
                styleUrls: ['./Avatar.scss'],
                template: '<img *ngIf="src" [src]="src"/>',
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
        }], background: [{
            type: HostBinding,
            args: ['style.backgroundImage']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXZhdGFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvYXZhdGFyL0F2YXRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7SUFLNUMseUJBQThCOzs7SUFBYixrREFBVzs7QUFFekMsTUFBTSxPQUFPLGlCQUFpQjtJQWlCNUIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFHLENBQUM7SUFQL0MsSUFDSSxVQUFVO1FBQ1osT0FBTyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUM7SUFDNUMsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLEdBQVEsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO2dCQUM1Qiw4Q0FBOEM7Z0JBQzlDLE9BQU87YUFDUjtpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0wsTUFBTSxLQUFLLEdBQ1QsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVM7b0JBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxD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QyxDQUFDO2dCQUNwQixJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUNoQyxPQUFPO2lCQUNSO2FBQ0Y7WUFBQyxPQUFPLEVBQUUsRUFBRTtnQkFDWCxRQUFRO2FBQ1Q7U0FDRjtJQUNILENBQUM7O2tGQTlLVSxpQkFBaUI7c0RBQWpCLGlCQUFpQjs7OztRQUZqQixrRUFBOEI7O1FBQXpCLDhCQUFXOztrREFFaEIsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUM1QixRQUFRLEVBQUUsZ0NBQWdDO2FBQzNDOytEQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUlOLElBQUk7a0JBRkgsV0FBVzttQkFBQyxXQUFXOztrQkFDdkIsS0FBSztZQUlGLFVBQVU7a0JBRGIsV0FBVzttQkFBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWF2YXRhcicsXG4gIHN0eWxlVXJsczogWycuL0F2YXRhci5zY3NzJ10sXG4gIHRlbXBsYXRlOiAnPGltZyAqbmdJZj1cInNyY1wiIFtzcmNdPVwic3JjXCIvPicsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9BdmF0YXJFbGVtZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc291cmNlOiBhbnk7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnNpemUnKVxuICBASW5wdXQoKVxuICBzaXplOiBzdHJpbmc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UnKVxuICBnZXQgYmFja2dyb3VuZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdXJsKCR7dGhpcy5zb3VyY2UucHJvZmlsZUltYWdlfSlgO1xuICB9XG5cbiAgc3JjOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBuZ09uSW5pdCgpOiBhbnkge1xuICAgIGxldCBzcmM6IGFueTtcbiAgICBpZiAoKHRoaXMuc291cmNlICYmIHRoaXMuc291cmNlICE9PSAnJykgfHwgdGhpcy5sYWJlbCkge1xuICAgICAgaWYgKHRoaXMuc291cmNlLnByb2ZpbGVJbWFnZSkge1xuICAgICAgICAvLyB0aGlzLmJhY2tncm91bmQgPSB0aGlzLnNvdXJjZS5wcm9maWxlSW1hZ2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zb3VyY2UubG9nbykge1xuICAgICAgICBzcmMgPSB0aGlzLnNvdXJjZS5sb2dvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3Q6IGFueSA9XG4gICAgICAgICAgdGhpcy5sYWJlbCB8fCB0aGlzLnNvdXJjZS5maXJzdE5hbWVcbiAgICAgICAgICAgID8gdGhpcy5zb3VyY2UuZmlyc3ROYW1lLmNoYXJBdCgwKVxuICAgICAgICAgICAgOiB0aGlzLnNvdXJjZS5uYW1lXG4gICAgICAgICAgICA/IHRoaXMuc291cmNlLm5hbWUuY2hhckF0KDApXG4gICAgICAgICAgICA6IHRoaXMuc291cmNlLnVzZXJuYW1lXG4gICAgICAgICAgICA/IHRoaXMuc291cmNlLnVzZXJuYW1lLmNoYXJBdCgwKVxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgY29uc3QgbGFzdDogYW55ID0gdGhpcy5zb3VyY2UubGFzdE5hbWUgPyB0aGlzLnNvdXJjZS5sYXN0TmFtZS5jaGFyQXQoMCkgOiAnJztcblxuICAgICAgICAvLyBEZWZpbmluZyBDb2xvcnNcbiAgICAgICAgY29uc3QgY29sb3JzOiBhbnkgPSBbXG4gICAgICAgICAgJyMxYWJjOWMnLFxuICAgICAgICAgICcjMTZhMDg1JyxcbiAgICAgICAgICAnI2YxYzQwZicsXG4gICAgICAgICAgJyNmMzljMTInLFxuICAgICAgICAgICcjMmVjYzcxJyxcbiAgICAgICAgICAnIzI3YWU2MCcsXG4gICAgICAgICAgJyNlNjdlMjInLFxuICAgICAgICAgICcjZDM1NDAwJyxcbiAgICAgICAgICAnIzM0OThkYicsXG4gICAgICAgICAgJyMyOTgwYjknLFxuICAgICAgICAgICcjZTc0YzNjJyxcbiAgICAgICAgICAnI2MwMzkyYicsXG4gICAgICAgICAgJyM5YjU5YjYnLFxuICAgICAgICAgICcjOGU0NGFkJyxcbiAgICAgICAgICAnI2JkYzNjNycsXG4gICAgICAgICAgJyMzNDQ5NWUnLFxuICAgICAgICAgICcjMmMzZTUwJyxcbiAgICAgICAgICAnIzk1YTVhNicsXG4gICAgICAgICAgJyM3ZjhjOGQnLFxuICAgICAgICAgICcjZWM4N2JmJyxcbiAgICAgICAgICAnI2Q4NzBhZCcsXG4gICAgICAgICAgJyNmNjk3ODUnLFxuICAgICAgICAgICcjOWJhMzdlJyxcbiAgICAgICAgICAnI2I0OTI1NScsXG4gICAgICAgICAgJyNiNDkyNTUnLFxuICAgICAgICAgICcjYTk0MTM2JyxcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgbGlnaHRlckNvbG9yczogYW55ID0gW1xuICAgICAgICAgICcjMTVENkIwJyxcbiAgICAgICAgICAnIzE2QTA2OScsXG4gICAgICAgICAgJyNGMUQ2MEYnLFxuICAgICAgICAgICcjRjNBQzEyJyxcbiAgICAgICAgICAnIzJFRDg1QicsXG4gICAgICAgICAgJyMyOEJDN0YnLFxuICAgICAgICAgICcjRTY2MzIyJyxcbiAgICAgICAgICAnI0QzMDAyQicsXG4gICAgICAgICAgJyM2NTM0REInLFxuICAgICAgICAgICcjMjlCMkI5JyxcbiAgICAgICAgICAnI0U3M0M2MycsXG4gICAgICAgICAgJyNEQjZEMzEnLFxuICAgICAgICAgICcjQ0I0OEI1JyxcbiAgICAgICAgICAnIzY5NDRBRCcsXG4gICAgICAgICAgJyMzODUzNkQnLFxuICAgICAgICAgICcjM0Q2NDczJyxcbiAgICAgICAgICAnIzM5NEE2QycsXG4gICAgICAgICAgJyM5MkJDQjcnLFxuICAgICAgICAgICcjN0Q5OUEyJyxcbiAgICAgICAgICAnI0YxNEY3NicsXG4gICAgICAgICAgJyNDQjVDREEnLFxuICAgICAgICAgICcjRkZCNDc1JyxcbiAgICAgICAgICAnI0I5Q0U2RScsXG4gICAgICAgICAgJyNEREFBNEYnLFxuICAgICAgICAgICcjQ0Q2RjQ1JyxcbiAgICAgICAgICAnI0I5MzU0QScsXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHNldHRpbmdzOiBhbnkgPSB7XG4gICAgICAgICAgLy8gRGVmYXVsdCBzZXR0aW5nc1xuICAgICAgICAgIHRleHRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgZm9udFNpemU6IDUwLFxuICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICBmb250RmFtaWx5OiAnSGVsdmV0aWNhTmV1ZS1MaWdodCxIZWx2ZXRpY2EgTmV1ZSBMaWdodCxIZWx2ZXRpY2EgTmV1ZSxIZWx2ZXRpY2EsIEFyaWFsLEx1Y2lkYSBHcmFuZGUsIHNhbnMtc2VyaWYnLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIG1ha2luZyB0aGUgdGV4dCBvYmplY3RcbiAgICAgICAgY29uc3QgY29sb3JJbmRleDogYW55ID0gTWF0aC5mbG9vcigoZmlyc3QuY2hhckNvZGVBdCgwKSAtIDY1KSAlIGNvbG9ycy5sZW5ndGgpO1xuXG4gICAgICAgIGNvbnN0IGNvYmo6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHQnKTtcbiAgICAgICAgY29iai5zZXRBdHRyaWJ1dGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpO1xuICAgICAgICBjb2JqLnNldEF0dHJpYnV0ZSgneCcsICc1MCUnKTtcbiAgICAgICAgY29iai5zZXRBdHRyaWJ1dGUoJ3knLCAnNTAlJyk7XG4gICAgICAgIGNvYmouc2V0QXR0cmlidXRlKCdkeScsICcwLjM1ZW0nKTtcbiAgICAgICAgY29iai5zZXRBdHRyaWJ1dGUoJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKTtcbiAgICAgICAgY29iai5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCBzZXR0aW5ncy50ZXh0Q29sb3IpO1xuICAgICAgICBjb2JqLnNldEF0dHJpYnV0ZSgnZm9udC1mYW1pbHknLCBzZXR0aW5ncy5mb250RmFtaWx5KTtcbiAgICAgICAgY29iai5zdHlsZS5mb250V2VpZ2h0ID0gc2V0dGluZ3MuZm9udFdlaWdodDtcbiAgICAgICAgY29iai5zdHlsZS5mb250U2l6ZSA9IGAke3NldHRpbmdzLmZvbnRTaXplfXB4YDtcblxuICAgICAgICBjb25zdCBsdHJzOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmxhYmVsIHx8IGZpcnN0ICsgbGFzdCk7XG4gICAgICAgIGNvYmouYXBwZW5kQ2hpbGQobHRycyk7XG5cbiAgICAgICAgY29uc3Qgc3ZnOiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgncG9pbnRlci1ldmVudHMnLCAnbm9uZScpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHNldHRpbmdzLndpZHRoKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc2V0dGluZ3MuaGVpZ2h0KTtcblxuICAgICAgICAvLyB0aGlzLnNldFByZWZpeGVkVmFsdWUoc3ZnLCAnYmFja2dyb3VuZCcsIGNvbG9yc1tjb2xvckluZGV4XSk7XG4gICAgICAgIHRoaXMuc2V0UHJlZml4ZWRWYWx1ZShzdmcsICdiYWNrZ3JvdW5kJywgYGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICR7Y29sb3JzW2NvbG9ySW5kZXhdfSAwJSwgJHtsaWdodGVyQ29sb3JzW2NvbG9ySW5kZXhdfSAxMDAlKWApO1xuXG4gICAgICAgIHN2Zy5zdHlsZS53aWR0aCA9IGAke3NldHRpbmdzLndpZHRofXB4YDtcbiAgICAgICAgc3ZnLnN0eWxlLmhlaWdodCA9IGAke3NldHRpbmdzLmhlaWdodH1weGA7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChjb2JqKTtcblxuICAgICAgICBjb25zdCB0b3A6IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b3AuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAgICAgICBjb25zdCBzdmdIdG1sOiBhbnkgPSB3aW5kb3cuYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodG9wLmlubmVySFRNTCkpKTtcbiAgICAgICAgc3JjID0gYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsICR7c3ZnSHRtbH1gO1xuICAgICAgfVxuICAgICAgdGhpcy5zcmMgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKHNyYyk7XG4gICAgfVxuICB9XG5cbiAgc2V0UHJlZml4ZWRWYWx1ZShlbG06IGFueSwgcHJvcDogYW55LCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBjb25zdCBwcmVmaXhlczogYW55ID0gWyctbW96LScsICctd2Via2l0LScsICctby0nLCAnLW1zLScsICcta2h0bWwtJ107XG5cbiAgICAvLyBDbGVhclxuICAgIGVsbS5zdHlsZVtwcm9wXSA9ICcnO1xuICAgIGNvbnN0IHN0YXJ0aW5nOiBhbnkgPSBlbG0uc3R5bGVbcHJvcF07XG5cbiAgICAvLyBUcnkgcmF3IGZpcnN0XG4gICAgdHJ5IHtcbiAgICAgIGVsbS5zdHlsZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgaWYgKGVsbS5zdHlsZVtwcm9wXSAhPT0gc3RhcnRpbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIG5vIG9wXG4gICAgfVxuXG4gICAgLy8gVHJ5IHByZWZpeGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVmaXhlcy5sZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgdiA9IHByZWZpeGVzW2ldICsgdmFsdWU7XG4gICAgICB0cnkge1xuICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSB2O1xuICAgICAgICBpZiAoZWxtLnN0eWxlW3Byb3BdICE9PSBzdGFydGluZykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZTIpIHtcbiAgICAgICAgLy8gbm8gb3BcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==