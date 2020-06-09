// NG2
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
// App
import { Security } from './../../services/security/Security';
import * as i0 from "@angular/core";
import * as i1 from "./../../services/security/Security";
export class Unless {
    constructor(templateRef, viewContainer, security) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.security = security;
        this.permissions = '';
        this.isDisplayed = false;
        this.security.subscribe(this.check.bind(this));
    }
    set bhUnless(value) {
        this.permissions = value || '';
        this.check();
    }
    check() {
        let display = false;
        if (~this.permissions.indexOf('||')) {
            const ps = this.permissions.split('||');
            for (const p of ps) {
                if (this.security.has(p.trim())) {
                    display = true;
                }
            }
        }
        else {
            display = this.permissions.split('&&').every((p) => this.security.has(p.trim()));
        }
        if (display) {
            if (!this.isDisplayed) {
                this.isDisplayed = true;
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        }
        else {
            this.isDisplayed = false;
            this.viewContainer.clear();
        }
    }
}
Unless.ɵfac = function Unless_Factory(t) { return new (t || Unless)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.Security)); };
Unless.ɵdir = i0.ɵɵdefineDirective({ type: Unless, selectors: [["", "bhUnless", ""]], inputs: { bhUnless: "bhUnless" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Unless, [{
        type: Directive,
        args: [{
                selector: '[bhUnless]',
            }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i0.ViewContainerRef }, { type: i1.Security }]; }, { bhUnless: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5sZXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3VubGVzcy9Vbmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRixNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7QUFLOUQsTUFBTSxPQUFPLE1BQU07SUFJakIsWUFBb0IsV0FBNkIsRUFBVSxhQUErQixFQUFVLFFBQWtCO1FBQWxHLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFIdEgsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsSUFDSSxRQUFRLENBQUMsS0FBYTtRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLE9BQU8sR0FBWSxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLE1BQU0sRUFBRSxHQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLEtBQUssTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFO29CQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDO2lCQUNoQjthQUNGO1NBQ0Y7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEY7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDekQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7OzREQXBDVSxNQUFNOzJDQUFOLE1BQU07a0RBQU4sTUFBTTtjQUhsQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7O2tCQVNFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBBcHBcbmltcG9ydCB7IFNlY3VyaXR5IH0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9zZWN1cml0eS9TZWN1cml0eSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiaFVubGVzc10nLFxufSlcbmV4cG9ydCBjbGFzcyBVbmxlc3Mge1xuICBwZXJtaXNzaW9uczogc3RyaW5nID0gJyc7XG4gIGlzRGlzcGxheWVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIHNlY3VyaXR5OiBTZWN1cml0eSkge1xuICAgIHRoaXMuc2VjdXJpdHkuc3Vic2NyaWJlKHRoaXMuY2hlY2suYmluZCh0aGlzKSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgYmhVbmxlc3ModmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMucGVybWlzc2lvbnMgPSB2YWx1ZSB8fCAnJztcbiAgICB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjaGVjaygpOiB2b2lkIHtcbiAgICBsZXQgZGlzcGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlmICh+dGhpcy5wZXJtaXNzaW9ucy5pbmRleE9mKCd8fCcpKSB7XG4gICAgICBjb25zdCBwczogYW55ID0gdGhpcy5wZXJtaXNzaW9ucy5zcGxpdCgnfHwnKTtcbiAgICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgICBpZiAodGhpcy5zZWN1cml0eS5oYXMocC50cmltKCkpKSB7XG4gICAgICAgICAgZGlzcGxheSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheSA9IHRoaXMucGVybWlzc2lvbnMuc3BsaXQoJyYmJykuZXZlcnkoKHApID0+IHRoaXMuc2VjdXJpdHkuaGFzKHAudHJpbSgpKSk7XG4gICAgfVxuXG4gICAgaWYgKGRpc3BsYXkpIHtcbiAgICAgIGlmICghdGhpcy5pc0Rpc3BsYXllZCkge1xuICAgICAgICB0aGlzLmlzRGlzcGxheWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlUmVmKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc0Rpc3BsYXllZCA9IGZhbHNlO1xuICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=