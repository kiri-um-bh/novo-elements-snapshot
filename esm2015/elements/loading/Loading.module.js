// NG2
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective } from './Loading';
export class NovoLoadingModule {
}
NovoLoadingModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective],
                exports: [NovoLoadingElement, NovoSpinnerElement, NovoIsLoadingDirective, NovoLoadedDirective, NovoSkeletonDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvbG9hZGluZy9Mb2FkaW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsTUFBTTtBQUNOLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQU92SSxNQUFNLE9BQU8saUJBQWlCOzs7WUFMN0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7Z0JBQzFILE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixDQUFDO2FBQ3RIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xvYWRpbmdFbGVtZW50LCBOb3ZvU3Bpbm5lckVsZW1lbnQsIE5vdm9Jc0xvYWRpbmdEaXJlY3RpdmUsIE5vdm9Mb2FkZWREaXJlY3RpdmUsIE5vdm9Ta2VsZXRvbkRpcmVjdGl2ZSB9IGZyb20gJy4vTG9hZGluZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOb3ZvTG9hZGluZ0VsZW1lbnQsIE5vdm9TcGlubmVyRWxlbWVudCwgTm92b0lzTG9hZGluZ0RpcmVjdGl2ZSwgTm92b0xvYWRlZERpcmVjdGl2ZSwgTm92b1NrZWxldG9uRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05vdm9Mb2FkaW5nRWxlbWVudCwgTm92b1NwaW5uZXJFbGVtZW50LCBOb3ZvSXNMb2FkaW5nRGlyZWN0aXZlLCBOb3ZvTG9hZGVkRGlyZWN0aXZlLCBOb3ZvU2tlbGV0b25EaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvTG9hZGluZ01vZHVsZSB7fVxuIl19