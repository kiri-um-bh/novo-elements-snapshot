import { animate, state, style, transition, trigger } from '@angular/animations';
import { SortDirection } from './sort-direction';
const activeStyle = { opacity: 1, pointerEvents: 'all', top: 0 };
const inactiveStyle = { opacity: 0, pointerEvents: 'none' };
/** Animation that moves the sort indicator. */
export const sortAscAnim = trigger('sortAsc', [
    // ...
    state(SortDirection.ASC, style(activeStyle)),
    state(SortDirection.DESC, style(inactiveStyle)),
    state(SortDirection.NONE, style(inactiveStyle)),
    transition('* => ascending', [animate('1s')]),
    transition('ascending => *', [animate('0.5s')]),
]);
export const sortDescAnim = trigger('sortDesc', [
    // ...
    state(SortDirection.ASC, style(inactiveStyle)),
    state(SortDirection.DESC, style(activeStyle)),
    state(SortDirection.NONE, style(inactiveStyle)),
    transition('* => descending', [animate('1s')]),
    transition('descending => *', [animate('0.5s')]),
]);
export const sortNoneAnim = trigger('sortNone', [
    // ...
    state(SortDirection.ASC, style(inactiveStyle)),
    state(SortDirection.DESC, style(inactiveStyle)),
    state(SortDirection.NONE, style(activeStyle)),
    transition('* => none', [animate('1s')]),
    transition('none => *', [animate('0.5s')]),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uYW5pbWF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ydW5uZXIvd29yay9ub3ZvLWVsZW1lbnRzL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9kYXRhLXRhYmxlL3NvcnQtZmlsdGVyL3NvcnQtYnV0dG9uLmFuaW1hdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBNEIsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDM0csT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE1BQU0sV0FBVyxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNqRSxNQUFNLGFBQWEsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBRTVELCtDQUErQztBQUMvQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQTZCLE9BQU8sQ0FBQyxTQUFTLEVBQUU7SUFDdEUsTUFBTTtJQUNOLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0MsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzdDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ2hELENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBNkIsT0FBTyxDQUFDLFVBQVUsRUFBRTtJQUN4RSxNQUFNO0lBQ04sS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDL0MsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDakQsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUE2QixPQUFPLENBQUMsVUFBVSxFQUFFO0lBQ3hFLE1BQU07SUFDTixLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQy9DLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQzNDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBTb3J0RGlyZWN0aW9uIH0gZnJvbSAnLi9zb3J0LWRpcmVjdGlvbic7XG5cbmNvbnN0IGFjdGl2ZVN0eWxlID0geyBvcGFjaXR5OiAxLCBwb2ludGVyRXZlbnRzOiAnYWxsJywgdG9wOiAwIH07XG5jb25zdCBpbmFjdGl2ZVN0eWxlID0geyBvcGFjaXR5OiAwLCBwb2ludGVyRXZlbnRzOiAnbm9uZScgfTtcblxuLyoqIEFuaW1hdGlvbiB0aGF0IG1vdmVzIHRoZSBzb3J0IGluZGljYXRvci4gKi9cbmV4cG9ydCBjb25zdCBzb3J0QXNjQW5pbTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc29ydEFzYycsIFtcbiAgLy8gLi4uXG4gIHN0YXRlKFNvcnREaXJlY3Rpb24uQVNDLCBzdHlsZShhY3RpdmVTdHlsZSkpLFxuICBzdGF0ZShTb3J0RGlyZWN0aW9uLkRFU0MsIHN0eWxlKGluYWN0aXZlU3R5bGUpKSxcbiAgc3RhdGUoU29ydERpcmVjdGlvbi5OT05FLCBzdHlsZShpbmFjdGl2ZVN0eWxlKSksXG4gIHRyYW5zaXRpb24oJyogPT4gYXNjZW5kaW5nJywgW2FuaW1hdGUoJzFzJyldKSxcbiAgdHJhbnNpdGlvbignYXNjZW5kaW5nID0+IConLCBbYW5pbWF0ZSgnMC41cycpXSksXG5dKTtcblxuZXhwb3J0IGNvbnN0IHNvcnREZXNjQW5pbTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc29ydERlc2MnLCBbXG4gIC8vIC4uLlxuICBzdGF0ZShTb3J0RGlyZWN0aW9uLkFTQywgc3R5bGUoaW5hY3RpdmVTdHlsZSkpLFxuICBzdGF0ZShTb3J0RGlyZWN0aW9uLkRFU0MsIHN0eWxlKGFjdGl2ZVN0eWxlKSksXG4gIHN0YXRlKFNvcnREaXJlY3Rpb24uTk9ORSwgc3R5bGUoaW5hY3RpdmVTdHlsZSkpLFxuICB0cmFuc2l0aW9uKCcqID0+IGRlc2NlbmRpbmcnLCBbYW5pbWF0ZSgnMXMnKV0pLFxuICB0cmFuc2l0aW9uKCdkZXNjZW5kaW5nID0+IConLCBbYW5pbWF0ZSgnMC41cycpXSksXG5dKTtcblxuZXhwb3J0IGNvbnN0IHNvcnROb25lQW5pbTogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc29ydE5vbmUnLCBbXG4gIC8vIC4uLlxuICBzdGF0ZShTb3J0RGlyZWN0aW9uLkFTQywgc3R5bGUoaW5hY3RpdmVTdHlsZSkpLFxuICBzdGF0ZShTb3J0RGlyZWN0aW9uLkRFU0MsIHN0eWxlKGluYWN0aXZlU3R5bGUpKSxcbiAgc3RhdGUoU29ydERpcmVjdGlvbi5OT05FLCBzdHlsZShhY3RpdmVTdHlsZSkpLFxuICB0cmFuc2l0aW9uKCcqID0+IG5vbmUnLCBbYW5pbWF0ZSgnMXMnKV0pLFxuICB0cmFuc2l0aW9uKCdub25lID0+IConLCBbYW5pbWF0ZSgnMC41cycpXSksXG5dKTtcbiJdfQ==