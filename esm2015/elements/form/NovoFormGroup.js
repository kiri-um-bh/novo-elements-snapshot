// NG
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
export class NovoFormGroup extends FormGroup {
    constructor() {
        super(...arguments);
        this.fieldInteractionEvents = new EventEmitter();
    }
    enableAllControls() {
        for (const key in this.controls) {
            if (this.controls[key].readOnly) {
                this.controls[key].readOnly = false;
                this.controls[key].enable();
            }
        }
    }
    disableAllControls() {
        for (const key in this.controls) {
            if (!this.controls[key].readOnly) {
                this.controls[key].readOnly = true;
                this.controls[key].disable();
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm92b0Zvcm1Hcm91cC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL05vdm9Gb3JtR3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSztBQUNMLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDLE1BQU0sT0FBTyxhQUFjLFNBQVEsU0FBUztJQUE1Qzs7UUFDUywyQkFBc0IsR0FBeUMsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQTRCM0YsQ0FBQztJQWpCUSxpQkFBaUI7UUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLENBQUMsUUFBUSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBcUIsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzdCO1NBQ0Y7SUFDSCxDQUFDO0lBRU0sa0JBQWtCO1FBQ3ZCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQXFCLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBcUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlCO1NBQ0Y7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOR1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBcHBcbmltcG9ydCB7IElGaWVsZEludGVyYWN0aW9uRXZlbnQgfSBmcm9tICcuL0Zvcm1JbnRlcmZhY2VzJztcbmltcG9ydCB7IE5vdm9Gb3JtQ29udHJvbCB9IGZyb20gJy4vTm92b0Zvcm1Db250cm9sJztcblxuZXhwb3J0IGNsYXNzIE5vdm9Gb3JtR3JvdXAgZXh0ZW5kcyBGb3JtR3JvdXAge1xuICBwdWJsaWMgZmllbGRJbnRlcmFjdGlvbkV2ZW50czogRXZlbnRFbWl0dGVyPElGaWVsZEludGVyYWN0aW9uRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgbGF5b3V0OiBzdHJpbmc7XG4gIHB1YmxpYyBlZGl0OiBib29sZWFuO1xuICBwdWJsaWMgY3VycmVudEVudGl0eTogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudEVudGl0eUlkOiBzdHJpbmc7XG4gIHB1YmxpYyBhc3NvY2lhdGlvbnM6IG9iamVjdDtcbiAgcHVibGljIF92YWx1ZTogYW55O1xuICBwdWJsaWMgY29udHJvbHM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gIHB1YmxpYyBub3ZvQ29udHJvbHM6IGFueVtdO1xuICBwdWJsaWMgZmllbGRzZXRzOiBhbnlbXTtcblxuICBwdWJsaWMgZW5hYmxlQWxsQ29udHJvbHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCh0aGlzLmNvbnRyb2xzW2tleV0gYXMgTm92b0Zvcm1Db250cm9sKS5yZWFkT25seSkge1xuICAgICAgICAodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBkaXNhYmxlQWxsQ29udHJvbHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb250cm9scykge1xuICAgICAgaWYgKCEodGhpcy5jb250cm9sc1trZXldIGFzIE5vdm9Gb3JtQ29udHJvbCkucmVhZE9ubHkpIHtcbiAgICAgICAgKHRoaXMuY29udHJvbHNba2V5XSBhcyBOb3ZvRm9ybUNvbnRyb2wpLnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb250cm9sc1trZXldLmRpc2FibGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==