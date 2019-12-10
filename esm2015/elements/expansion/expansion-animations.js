/**
 * @fileoverview added by tsickle
 * Generated from: elements/expansion/expansion-animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animateChild, group, state, style, transition, trigger, query } from '@angular/animations';
/**
 * Time and timing curve for expansion panel animations.
 * @type {?}
 */
export const EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 * @type {?}
 */
export const novoExpansionAnimations = {
    /**
     * Animation that rotates the indicator arrow.
     */
    indicatorRotate: trigger('indicatorRotate', [
        state('collapsed', style({ transform: 'rotate(0deg)' })),
        state('expanded', style({ transform: 'rotate(180deg)' })),
        transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
    /**
     * Animation that expands and collapses the panel header height.
     */
    expansionHeaderHeight: trigger('expansionHeight', [
        state('collapsed', style({
            height: '{{collapsedHeight}}',
        }), {
            params: { collapsedHeight: '48px' },
        }),
        state('expanded', style({
            height: '{{expandedHeight}}',
        }), {
            params: { expandedHeight: '56px' },
        }),
        transition('expanded <=> collapsed', group([query('@indicatorRotate', animateChild(), { optional: true }), animate(EXPANSION_PANEL_ANIMATION_TIMING)])),
    ]),
    /**
     * Animation that expands and collapses the panel content.
     */
    bodyExpansion: trigger('bodyExpansion', [
        state('collapsed', style({ height: '0px', visibility: 'hidden' })),
        state('expanded', style({ height: '*', visibility: 'visible' })),
        transition('expanded <=> collapsed', animate(EXPANSION_PANEL_ANIMATION_TIMING)),
    ]),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZXhwYW5zaW9uL2V4cGFuc2lvbi1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQTRCLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBR3ZJLE1BQU0sT0FBTyxnQ0FBZ0MsR0FBRyxtQ0FBbUM7Ozs7O0FBR25GLE1BQU0sT0FBTyx1QkFBdUIsR0FJaEM7Ozs7SUFFRixlQUFlLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixFQUFFO1FBQzFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDeEQsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztLQUNoRixDQUFDOzs7O0lBR0YscUJBQXFCLEVBQUUsT0FBTyxDQUFDLGlCQUFpQixFQUFFO1FBQ2hELEtBQUssQ0FDSCxXQUFXLEVBQ1gsS0FBSyxDQUFDO1lBQ0osTUFBTSxFQUFFLHFCQUFxQjtTQUM5QixDQUFDLEVBQ0Y7WUFDRSxNQUFNLEVBQUUsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFO1NBQ3BDLENBQ0Y7UUFDRCxLQUFLLENBQ0gsVUFBVSxFQUNWLEtBQUssQ0FBQztZQUNKLE1BQU0sRUFBRSxvQkFBb0I7U0FDN0IsQ0FBQyxFQUNGO1lBQ0UsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRTtTQUNuQyxDQUNGO1FBQ0QsVUFBVSxDQUNSLHdCQUF3QixFQUN4QixLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLENBQ2xIO0tBQ0YsQ0FBQzs7OztJQUdGLGFBQWEsRUFBRSxPQUFPLENBQUMsZUFBZSxFQUFFO1FBQ3RDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNsRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDaEUsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0tBQ2hGLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIGFuaW1hdGVDaGlsZCwgZ3JvdXAsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgcXVlcnksIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG4vKiogVGltZSBhbmQgdGltaW5nIGN1cnZlIGZvciBleHBhbnNpb24gcGFuZWwgYW5pbWF0aW9ucy4gKi9cbmV4cG9ydCBjb25zdCBFWFBBTlNJT05fUEFORUxfQU5JTUFUSU9OX1RJTUlORyA9ICcyMjVtcyBjdWJpYy1iZXppZXIoMC40LDAuMCwwLjIsMSknO1xuXG4vKiogQW5pbWF0aW9ucyB1c2VkIGJ5IHRoZSBNYXRlcmlhbCBleHBhbnNpb24gcGFuZWwuICovXG5leHBvcnQgY29uc3Qgbm92b0V4cGFuc2lvbkFuaW1hdGlvbnM6IHtcbiAgcmVhZG9ubHkgaW5kaWNhdG9yUm90YXRlOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGE7XG4gIHJlYWRvbmx5IGV4cGFuc2lvbkhlYWRlckhlaWdodDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xuICByZWFkb25seSBib2R5RXhwYW5zaW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGE7XG59ID0ge1xuICAvKiogQW5pbWF0aW9uIHRoYXQgcm90YXRlcyB0aGUgaW5kaWNhdG9yIGFycm93LiAqL1xuICBpbmRpY2F0b3JSb3RhdGU6IHRyaWdnZXIoJ2luZGljYXRvclJvdGF0ZScsIFtcbiAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknIH0pKSxcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyB9KSksXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoRVhQQU5TSU9OX1BBTkVMX0FOSU1BVElPTl9USU1JTkcpKSxcbiAgXSksXG5cbiAgLyoqIEFuaW1hdGlvbiB0aGF0IGV4cGFuZHMgYW5kIGNvbGxhcHNlcyB0aGUgcGFuZWwgaGVhZGVyIGhlaWdodC4gKi9cbiAgZXhwYW5zaW9uSGVhZGVySGVpZ2h0OiB0cmlnZ2VyKCdleHBhbnNpb25IZWlnaHQnLCBbXG4gICAgc3RhdGUoXG4gICAgICAnY29sbGFwc2VkJyxcbiAgICAgIHN0eWxlKHtcbiAgICAgICAgaGVpZ2h0OiAne3tjb2xsYXBzZWRIZWlnaHR9fScsXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7IGNvbGxhcHNlZEhlaWdodDogJzQ4cHgnIH0sXG4gICAgICB9LFxuICAgICksXG4gICAgc3RhdGUoXG4gICAgICAnZXhwYW5kZWQnLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICd7e2V4cGFuZGVkSGVpZ2h0fX0nLFxuICAgICAgfSksXG4gICAgICB7XG4gICAgICAgIHBhcmFtczogeyBleHBhbmRlZEhlaWdodDogJzU2cHgnIH0sXG4gICAgICB9LFxuICAgICksXG4gICAgdHJhbnNpdGlvbihcbiAgICAgICdleHBhbmRlZCA8PT4gY29sbGFwc2VkJyxcbiAgICAgIGdyb3VwKFtxdWVyeSgnQGluZGljYXRvclJvdGF0ZScsIGFuaW1hdGVDaGlsZCgpLCB7IG9wdGlvbmFsOiB0cnVlIH0pLCBhbmltYXRlKEVYUEFOU0lPTl9QQU5FTF9BTklNQVRJT05fVElNSU5HKV0pLFxuICAgICksXG4gIF0pLFxuXG4gIC8qKiBBbmltYXRpb24gdGhhdCBleHBhbmRzIGFuZCBjb2xsYXBzZXMgdGhlIHBhbmVsIGNvbnRlbnQuICovXG4gIGJvZHlFeHBhbnNpb246IHRyaWdnZXIoJ2JvZHlFeHBhbnNpb24nLCBbXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSkpLFxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoRVhQQU5TSU9OX1BBTkVMX0FOSU1BVElPTl9USU1JTkcpKSxcbiAgXSksXG59O1xuIl19