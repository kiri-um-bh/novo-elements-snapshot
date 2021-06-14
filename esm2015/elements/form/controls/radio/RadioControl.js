// APP
import { BaseControl } from './../BaseControl';
export class RadioControl extends BaseControl {
    constructor(config) {
        super('RadioControl', config);
        this.controlType = 'radio';
        this.options = [];
        this.options = config.options || [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW9Db250cm9sLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vY29udHJvbHMvcmFkaW8vUmFkaW9Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQUUsV0FBVyxFQUFxQixNQUFNLGtCQUFrQixDQUFDO0FBRWxFLE1BQU0sT0FBTyxZQUFhLFNBQVEsV0FBVztJQUkzQyxZQUFZLE1BQXlCO1FBQ25DLEtBQUssQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFKaEMsZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDdEIsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUlYLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQVBQXG5pbXBvcnQgeyBCYXNlQ29udHJvbCwgTm92b0NvbnRyb2xDb25maWcgfSBmcm9tICcuLy4uL0Jhc2VDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIFJhZGlvQ29udHJvbCBleHRlbmRzIEJhc2VDb250cm9sIHtcbiAgY29udHJvbFR5cGUgPSAncmFkaW8nO1xuICBvcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKCdSYWRpb0NvbnRyb2wnLCBjb25maWcpO1xuICAgIHRoaXMub3B0aW9ucyA9IGNvbmZpZy5vcHRpb25zIHx8IFtdO1xuICB9XG59XG4iXX0=