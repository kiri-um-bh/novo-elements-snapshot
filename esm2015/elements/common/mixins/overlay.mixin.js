/** Mixin to augment a directive with a `overlay` property. */
export function mixinOverlay(base) {
    // Note: We cast `base` to `unknown` and then `Constructor`. It could be an abstract class,
    // but given we `extend` it from another class, we can assume a constructor being accessible.
    class Mixin extends base {
        constructor(...args) {
            super(...args);
        }
        openPanel() {
            if (!this.disabled) {
                this.overlay.openPanel();
            }
        }
        closePanel() {
            this.overlay.closePanel();
        }
        togglePanel() {
            if (this.panelOpen) {
                this.closePanel();
            }
            else {
                this.openPanel();
            }
        }
        get panelOpen() {
            return this.overlay && this.overlay.panelOpen;
        }
    }
    // Since we don't directly extend from `base` with it's original types, and we instruct
    // TypeScript that `T` actually is instantiatable through `new`, the types don't overlap.
    // This is a limitation in TS as abstract classes cannot be typed properly dynamically.
    return Mixin;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS5taXhpbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9jb21tb24vbWl4aW5zL292ZXJsYXkubWl4aW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBLDhEQUE4RDtBQUM5RCxNQUFNLFVBQVUsWUFBWSxDQUE0QyxJQUFPO0lBQzdFLDJGQUEyRjtJQUMzRiw2RkFBNkY7SUFDN0YsTUFBZSxLQUFNLFNBQVUsSUFBNEM7UUFHekUsWUFBWSxHQUFHLElBQVc7WUFDeEIsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQztRQUVELFNBQVM7WUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUMxQjtRQUNILENBQUM7UUFFRCxVQUFVO1lBQ1IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBRUQsV0FBVztZQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQjtRQUNILENBQUM7UUFFRCxJQUFJLFNBQVM7WUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDaEQsQ0FBQztLQUNGO0lBRUQsdUZBQXVGO0lBQ3ZGLHlGQUF5RjtJQUN6Rix1RkFBdUY7SUFDdkYsT0FBUSxLQUFnRCxDQUFDO0FBQzNELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOb3ZvT3ZlcmxheVRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vb3ZlcmxheSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnN0cnVjdG9yLCBDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29uc3RydWN0b3InO1xuaW1wb3J0IHsgQ2FuRGlzYWJsZSB9IGZyb20gJy4vZGlzYWJsZWQubWl4aW4nO1xuXG4vKiogQGRvY3MtcHJpdmF0ZSAqL1xuZXhwb3J0IGludGVyZmFjZSBIYXNPdmVybGF5IHtcbiAgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcbiAgcmVhZG9ubHkgcGFuZWxPcGVuOiBib29sZWFuO1xuXG4gIG9wZW5QYW5lbCgpOiB2b2lkO1xuICBjbG9zZVBhbmVsKCk6IHZvaWQ7XG4gIHRvZ2dsZVBhbmVsKCk6IHZvaWQ7XG59XG5cbi8qKiBAZG9jcy1wcml2YXRlICovXG5leHBvcnQgdHlwZSBIYXNPdmVybGF5Q3RvciA9IENvbnN0cnVjdG9yPEhhc092ZXJsYXk+O1xuXG4vKiogTWl4aW4gdG8gYXVnbWVudCBhIGRpcmVjdGl2ZSB3aXRoIGEgYG92ZXJsYXlgIHByb3BlcnR5LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1peGluT3ZlcmxheTxUIGV4dGVuZHMgQWJzdHJhY3RDb25zdHJ1Y3RvcjxDYW5EaXNhYmxlPj4oYmFzZTogVCk6IEhhc092ZXJsYXlDdG9yICYgVCB7XG4gIC8vIE5vdGU6IFdlIGNhc3QgYGJhc2VgIHRvIGB1bmtub3duYCBhbmQgdGhlbiBgQ29uc3RydWN0b3JgLiBJdCBjb3VsZCBiZSBhbiBhYnN0cmFjdCBjbGFzcyxcbiAgLy8gYnV0IGdpdmVuIHdlIGBleHRlbmRgIGl0IGZyb20gYW5vdGhlciBjbGFzcywgd2UgY2FuIGFzc3VtZSBhIGNvbnN0cnVjdG9yIGJlaW5nIGFjY2Vzc2libGUuXG4gIGFic3RyYWN0IGNsYXNzIE1peGluIGV4dGVuZHMgKChiYXNlIGFzIHVua25vd24pIGFzIENvbnN0cnVjdG9yPENhbkRpc2FibGU+KSB7XG4gICAgYWJzdHJhY3Qgb3ZlcmxheTogTm92b092ZXJsYXlUZW1wbGF0ZUNvbXBvbmVudDtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICBzdXBlciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5Lm9wZW5QYW5lbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgICB0aGlzLm92ZXJsYXkuY2xvc2VQYW5lbCgpO1xuICAgIH1cblxuICAgIHRvZ2dsZVBhbmVsKCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgcGFuZWxPcGVuKCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheSAmJiB0aGlzLm92ZXJsYXkucGFuZWxPcGVuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNpbmNlIHdlIGRvbid0IGRpcmVjdGx5IGV4dGVuZCBmcm9tIGBiYXNlYCB3aXRoIGl0J3Mgb3JpZ2luYWwgdHlwZXMsIGFuZCB3ZSBpbnN0cnVjdFxuICAvLyBUeXBlU2NyaXB0IHRoYXQgYFRgIGFjdHVhbGx5IGlzIGluc3RhbnRpYXRhYmxlIHRocm91Z2ggYG5ld2AsIHRoZSB0eXBlcyBkb24ndCBvdmVybGFwLlxuICAvLyBUaGlzIGlzIGEgbGltaXRhdGlvbiBpbiBUUyBhcyBhYnN0cmFjdCBjbGFzc2VzIGNhbm5vdCBiZSB0eXBlZCBwcm9wZXJseSBkeW5hbWljYWxseS5cbiAgcmV0dXJuIChNaXhpbiBhcyB1bmtub3duKSBhcyBUICYgQ29uc3RydWN0b3I8SGFzT3ZlcmxheT47XG59XG4iXX0=