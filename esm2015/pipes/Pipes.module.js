// NG2
import { NgModule } from '@angular/core';
// APP
import { PluralPipe } from './plural/Plural';
import { DecodeURIPipe } from './decode-uri/DecodeURI';
import { GroupByPipe } from './group-by/GroupBy';
export class NovoPipesModule {
}
NovoPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PluralPipe, DecodeURIPipe, GroupByPipe],
                exports: [PluralPipe, DecodeURIPipe, GroupByPipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlwZXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbInBpcGVzL1BpcGVzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxNQUFNO0FBQ04sT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNakQsTUFBTSxPQUFPLGVBQWU7OztZQUozQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsVUFBVSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUM7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gQVBQXG5pbXBvcnQgeyBQbHVyYWxQaXBlIH0gZnJvbSAnLi9wbHVyYWwvUGx1cmFsJztcbmltcG9ydCB7IERlY29kZVVSSVBpcGUgfSBmcm9tICcuL2RlY29kZS11cmkvRGVjb2RlVVJJJztcbmltcG9ydCB7IEdyb3VwQnlQaXBlIH0gZnJvbSAnLi9ncm91cC1ieS9Hcm91cEJ5JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUGx1cmFsUGlwZSwgRGVjb2RlVVJJUGlwZSwgR3JvdXBCeVBpcGVdLFxuICBleHBvcnRzOiBbUGx1cmFsUGlwZSwgRGVjb2RlVVJJUGlwZSwgR3JvdXBCeVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUGlwZXNNb2R1bGUge31cbiJdfQ==