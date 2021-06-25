// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoButtonModule } from '../button/Button.module';
import { NovoRadioElement, NovoRadioGroup } from './Radio';
export class NovoRadioModule {
}
NovoRadioModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NovoButtonModule],
                declarations: [NovoRadioElement, NovoRadioGroup],
                exports: [NovoRadioElement, NovoRadioGroup],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3JhZGlvL1JhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFPM0QsTUFBTSxPQUFPLGVBQWU7OztZQUwzQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUM7Z0JBQ2hELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9CdXR0b25Nb2R1bGUgfSBmcm9tICcuLi9idXR0b24vQnV0dG9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3ZvUmFkaW9FbGVtZW50LCBOb3ZvUmFkaW9Hcm91cCB9IGZyb20gJy4vUmFkaW8nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOb3ZvQnV0dG9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTm92b1JhZGlvRWxlbWVudCwgTm92b1JhZGlvR3JvdXBdLFxuICBleHBvcnRzOiBbTm92b1JhZGlvRWxlbWVudCwgTm92b1JhZGlvR3JvdXBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvUmFkaW9Nb2R1bGUge31cbiJdfQ==