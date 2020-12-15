/**
 * @fileoverview added by tsickle
 * Generated from: elements/header/Header.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
export class NovoHeaderSpacer {
}
NovoHeaderSpacer.decorators = [
    { type: Component, args: [{
                selector: 'header-spacer',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
export class NovoUtilsComponent {
}
NovoUtilsComponent.decorators = [
    { type: Component, args: [{
                selector: 'utils',
                template: `
    <ng-content></ng-content>
  `
            }] }
];
export class NovoUtilActionComponent {
}
NovoUtilActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'util-action, novo-action',
                template: `
    <button theme="icon" [icon]="icon" [attr.inverse]="inverse" [disabled]="disabled">
      <ng-content></ng-content>
    </button>
  `
            }] }
];
NovoUtilActionComponent.propDecorators = {
    icon: [{ type: Input }],
    inverse: [{ type: Input }],
    disabled: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoUtilActionComponent.prototype.icon;
    /** @type {?} */
    NovoUtilActionComponent.prototype.inverse;
    /** @type {?} */
    NovoUtilActionComponent.prototype.disabled;
}
export class NovoHeaderComponent {
    constructor() {
        this.headerClass = 'novo-header';
        this.condensed = false;
        this.movable = true;
        this.resizable = true;
        this.inverse = 'inverse';
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    set theme(theme) {
        this._theme = theme;
        this.inverse = theme === 'white' || theme === 'off-white' || theme === 'light' ? undefined : 'inverse';
    }
    /**
     * @return {?}
     */
    get theme() {
        return this._theme;
    }
    /**
     * @param {?} icon
     * @return {?}
     */
    set icon(icon) {
        this._icon = `bhi-${icon}`;
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let elmnt = (/** @type {?} */ (document.getElementsByTagName('novo-modal')[0]));
        if (elmnt) {
            if (this.resizable) {
                elmnt.classList.add('resizable');
            }
        }
        else {
            this.movable = false;
        }
    }
    /**
     * @return {?}
     */
    dragModal() {
        /** @type {?} */
        let elmnt = (/** @type {?} */ (document.getElementsByTagName('novo-modal')[0]));
        if (elmnt) {
            /** @type {?} */
            let pos1 = 0;
            /** @type {?} */
            let pos2 = 0;
            /** @type {?} */
            let pos3 = 0;
            /** @type {?} */
            let pos4 = 0;
            document.getElementById('dragger').onmousedown = dragMouseDown;
            /**
             * @param {?} e
             * @return {?}
             */
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // get the mouse cursor position at startup
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }
            /**
             * @param {?} e
             * @return {?}
             */
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position
                elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
                elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
                elmnt.style.resize = 'both';
            }
            /**
             * @return {?}
             */
            function closeDragElement() {
                // stop moving when mouse button is released
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
    }
}
NovoHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'header[theme]',
                template: `
    <section>
      <div class="header-title">
        <ng-container *ngIf="title">
          <i *ngIf="movable" class="header-icon" class="bhi-move" id="dragger" (mouseenter)="dragModal()"></i>
          <i *ngIf="icon" class="header-icon" [ngClass]="icon"></i>
          <div class="header-titles">
            <h1>{{ title }}</h1>
            <small *ngIf="subTitle">{{ subTitle }}</small>
          </div>
        </ng-container>
        <ng-container *ngIf="!title">
          <ng-content select="novo-icon, [novo-icon]"></ng-content>
          <div class="header-titles">
            <ng-content select="h1, h2, h3, h4, h5, h6, small, [novo-title], [novo-subtitle]"></ng-content>
          </div>
        </ng-container>
      </div>
      <ng-content select="section"></ng-content>
      <span flex></span>
      <ng-content select="utils"></ng-content>
      <ng-content select="novo-action"></ng-content>
    </section>
    <ng-content></ng-content>
  `
            }] }
];
NovoHeaderComponent.propDecorators = {
    headerClass: [{ type: HostBinding, args: ['class',] }],
    condensed: [{ type: HostBinding, args: ['class.condensed',] }, { type: Input }],
    title: [{ type: Input }],
    subTitle: [{ type: Input }],
    movable: [{ type: Input }],
    resizable: [{ type: Input }],
    theme: [{ type: HostBinding, args: ['attr.theme',] }, { type: Input }],
    icon: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NovoHeaderComponent.prototype.headerClass;
    /** @type {?} */
    NovoHeaderComponent.prototype.condensed;
    /** @type {?} */
    NovoHeaderComponent.prototype.title;
    /** @type {?} */
    NovoHeaderComponent.prototype.subTitle;
    /** @type {?} */
    NovoHeaderComponent.prototype.movable;
    /** @type {?} */
    NovoHeaderComponent.prototype.resizable;
    /** @type {?} */
    NovoHeaderComponent.prototype.inverse;
    /**
     * @type {?}
     * @private
     */
    NovoHeaderComponent.prototype._theme;
    /**
     * @type {?}
     * @private
     */
    NovoHeaderComponent.prototype._icon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlYWRlci9IZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRdEUsTUFBTSxPQUFPLGdCQUFnQjs7O1lBTjVCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7O0FBU0QsTUFBTSxPQUFPLGtCQUFrQjs7O1lBTjlCLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7O0FBV0QsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBUm5DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7R0FJVDthQUNGOzs7bUJBRUUsS0FBSztzQkFFTCxLQUFLO3VCQUVMLEtBQUs7Ozs7SUFKTix1Q0FDb0I7O0lBQ3BCLDBDQUN3Qjs7SUFDeEIsMkNBQ3lCOztBQStCM0IsTUFBTSxPQUFPLG1CQUFtQjtJQTVCaEM7UUE4QlMsZ0JBQVcsR0FBVyxhQUFhLENBQUM7UUFHcEMsY0FBUyxHQUFZLEtBQUssQ0FBQztRQU0zQixZQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTyxHQUFXLFNBQVMsQ0FBQztJQTJFckMsQ0FBQzs7Ozs7SUF6RUMsSUFFSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLFdBQVcsSUFBSSxLQUFLLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxD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QVcsU0FBQyxpQkFBaUIsY0FDN0IsS0FBSztvQkFFTCxLQUFLO3VCQUVMLEtBQUs7c0JBRUwsS0FBSzt3QkFFTCxLQUFLO29CQUlMLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLEtBQUs7bUJBVUwsS0FBSzs7OztJQTFCTiwwQ0FDMkM7O0lBQzNDLHdDQUVrQzs7SUFDbEMsb0NBQ3FCOztJQUNyQix1Q0FDd0I7O0lBQ3hCLHNDQUMrQjs7SUFDL0Isd0NBQ2lDOztJQUNqQyxzQ0FBbUM7Ozs7O0lBc0JuQyxxQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhZGVyLXNwYWNlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGVhZGVyU3BhY2VyIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3V0aWxzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9VdGlsc0NvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1dGlsLWFjdGlvbiwgbm92by1hY3Rpb24nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gdGhlbWU9XCJpY29uXCIgW2ljb25dPVwiaWNvblwiIFthdHRyLmludmVyc2VdPVwiaW52ZXJzZVwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvYnV0dG9uPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvVXRpbEFjdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoKVxuICBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYWRlclt0aGVtZV0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzcz1cImhlYWRlci10aXRsZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGl0bGVcIj5cbiAgICAgICAgICA8aSAqbmdJZj1cIm1vdmFibGVcIiBjbGFzcz1cImhlYWRlci1pY29uXCIgY2xhc3M9XCJiaGktbW92ZVwiIGlkPVwiZHJhZ2dlclwiIChtb3VzZWVudGVyKT1cImRyYWdNb2RhbCgpXCI+PC9pPlxuICAgICAgICAgIDxpICpuZ0lmPVwiaWNvblwiIGNsYXNzPVwiaGVhZGVyLWljb25cIiBbbmdDbGFzc109XCJpY29uXCI+PC9pPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItdGl0bGVzXCI+XG4gICAgICAgICAgICA8aDE+e3sgdGl0bGUgfX08L2gxPlxuICAgICAgICAgICAgPHNtYWxsICpuZ0lmPVwic3ViVGl0bGVcIj57eyBzdWJUaXRsZSB9fTwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXRpdGxlXCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibm92by1pY29uLCBbbm92by1pY29uXVwiPjwvbmctY29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLXRpdGxlc1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgc21hbGwsIFtub3ZvLXRpdGxlXSwgW25vdm8tc3VidGl0bGVdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwic2VjdGlvblwiPjwvbmctY29udGVudD5cbiAgICAgIDxzcGFuIGZsZXg+PC9zcGFuPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidXRpbHNcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJub3ZvLWFjdGlvblwiPjwvbmctY29udGVudD5cbiAgICA8L3NlY3Rpb24+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gIHB1YmxpYyBoZWFkZXJDbGFzczogc3RyaW5nID0gJ25vdm8taGVhZGVyJztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb25kZW5zZWQnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgY29uZGVuc2VkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc3ViVGl0bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgcHVibGljIG1vdmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgcmVzaXphYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGludmVyc2U6IHN0cmluZyA9ICdpbnZlcnNlJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGhlbWUnKVxuICBASW5wdXQoKVxuICBzZXQgdGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIHRoaXMuX3RoZW1lID0gdGhlbWU7XG4gICAgdGhpcy5pbnZlcnNlID0gdGhlbWUgPT09ICd3aGl0ZScgfHwgdGhlbWUgPT09ICdvZmYtd2hpdGUnIHx8IHRoZW1lID09PSAnbGlnaHQnID8gdW5kZWZpbmVkIDogJ2ludmVyc2UnO1xuICB9XG5cbiAgZ2V0IHRoZW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3RoZW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGljb24oaWNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5faWNvbiA9IGBiaGktJHtpY29ufWA7XG4gIH1cblxuICBnZXQgaWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9pY29uO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGhlbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBfaWNvbjogc3RyaW5nO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBlbG1udDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbm92by1tb2RhbCcpWzBdIGFzIEhUTUxFbGVtZW50O1xuICAgIGlmIChlbG1udCkge1xuICAgICAgaWYgKHRoaXMucmVzaXphYmxlKSB7XG4gICAgICAgIGVsbW50LmNsYXNzTGlzdC5hZGQoJ3Jlc2l6YWJsZScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1vdmFibGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkcmFnTW9kYWwoKSB7XG4gICAgbGV0IGVsbW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdub3ZvLW1vZGFsJylbMF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGVsbW50KSB7XG4gICAgICBsZXQgcG9zMSA9IDAsXG4gICAgICAgIHBvczIgPSAwLFxuICAgICAgICBwb3MzID0gMCxcbiAgICAgICAgcG9zNCA9IDA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhZ2dlcicpLm9ubW91c2Vkb3duID0gZHJhZ01vdXNlRG93bjtcbiAgICAgIGZ1bmN0aW9uIGRyYWdNb3VzZURvd24oZSkge1xuICAgICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBtb3VzZSBjdXJzb3IgcG9zaXRpb24gYXQgc3RhcnR1cFxuICAgICAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgICAgICBwb3M0ID0gZS5jbGllbnRZO1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBjbG9zZURyYWdFbGVtZW50O1xuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGVsZW1lbnREcmFnO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBlbGVtZW50RHJhZyhlKSB7XG4gICAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5ldyBjdXJzb3IgcG9zaXRpb25cbiAgICAgICAgcG9zMSA9IHBvczMgLSBlLmNsaWVudFg7XG4gICAgICAgIHBvczIgPSBwb3M0IC0gZS5jbGllbnRZO1xuICAgICAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgICAgICBwb3M0ID0gZS5jbGllbnRZO1xuICAgICAgICAvLyBzZXQgdGhlIGVsZW1lbnQncyBuZXcgcG9zaXRpb25cbiAgICAgICAgZWxtbnQuc3R5bGUudG9wID0gZWxtbnQub2Zmc2V0VG9wIC0gcG9zMiArICdweCc7XG4gICAgICAgIGVsbW50LnN0eWxlLmxlZnQgPSBlbG1udC5vZmZzZXRMZWZ0IC0gcG9zMSArICdweCc7XG4gICAgICAgIGVsbW50LnN0eWxlLnJlc2l6ZSA9ICdib3RoJztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY2xvc2VEcmFnRWxlbWVudCgpIHtcbiAgICAgICAgLy8gc3RvcCBtb3Zpbmcgd2hlbiBtb3VzZSBidXR0b24gaXMgcmVsZWFzZWRcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19