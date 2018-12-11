/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animateChild, group, state, style, transition, trigger, query } from '@angular/animations';
/**
 * Time and timing curve for expansion panel animations.
 * @type {?}
 */
export var EXPANSION_PANEL_ANIMATION_TIMING = '225ms cubic-bezier(0.4,0.0,0.2,1)';
/**
 * Animations used by the Material expansion panel.
 * @type {?}
 */
export var novoExpansionAnimations = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZXhwYW5zaW9uL2V4cGFuc2lvbi1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBNEIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUFHdkksTUFBTSxLQUFPLGdDQUFnQyxHQUFHLG1DQUFtQzs7Ozs7QUFHbkYsTUFBTSxLQUFPLHVCQUF1QixHQUloQzs7OztJQUVGLGVBQWUsRUFBRSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7UUFDMUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUN4RCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFDekQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0tBQ2hGLENBQUM7Ozs7SUFHRixxQkFBcUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7UUFDaEQsS0FBSyxDQUNILFdBQVcsRUFDWCxLQUFLLENBQUM7WUFDSixNQUFNLEVBQUUscUJBQXFCO1NBQzlCLENBQUMsRUFDRjtZQUNFLE1BQU0sRUFBRSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUU7U0FDcEMsQ0FDRjtRQUNELEtBQUssQ0FDSCxVQUFVLEVBQ1YsS0FBSyxDQUFDO1lBQ0osTUFBTSxFQUFFLG9CQUFvQjtTQUM3QixDQUFDLEVBQ0Y7WUFDRSxNQUFNLEVBQUUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFO1NBQ25DLENBQ0Y7UUFDRCxVQUFVLENBQ1Isd0JBQXdCLEVBQ3hCLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUMsQ0FDbEg7S0FDRixDQUFDOzs7O0lBR0YsYUFBYSxFQUFFLE9BQU8sQ0FBQyxlQUFlLEVBQUU7UUFDdEMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7S0FDaEYsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgYW5pbWF0ZUNoaWxkLCBncm91cCwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyLCBxdWVyeSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKiBUaW1lIGFuZCB0aW1pbmcgY3VydmUgZm9yIGV4cGFuc2lvbiBwYW5lbCBhbmltYXRpb25zLiAqL1xuZXhwb3J0IGNvbnN0IEVYUEFOU0lPTl9QQU5FTF9BTklNQVRJT05fVElNSU5HID0gJzIyNW1zIGN1YmljLWJlemllcigwLjQsMC4wLDAuMiwxKSc7XG5cbi8qKiBBbmltYXRpb25zIHVzZWQgYnkgdGhlIE1hdGVyaWFsIGV4cGFuc2lvbiBwYW5lbC4gKi9cbmV4cG9ydCBjb25zdCBub3ZvRXhwYW5zaW9uQW5pbWF0aW9uczoge1xuICByZWFkb25seSBpbmRpY2F0b3JSb3RhdGU6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YTtcbiAgcmVhZG9ubHkgZXhwYW5zaW9uSGVhZGVySGVpZ2h0OiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGE7XG4gIHJlYWRvbmx5IGJvZHlFeHBhbnNpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YTtcbn0gPSB7XG4gIC8qKiBBbmltYXRpb24gdGhhdCByb3RhdGVzIHRoZSBpbmRpY2F0b3IgYXJyb3cuICovXG4gIGluZGljYXRvclJvdGF0ZTogdHJpZ2dlcignaW5kaWNhdG9yUm90YXRlJywgW1xuICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScgfSkpLFxuICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknIH0pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZShFWFBBTlNJT05fUEFORUxfQU5JTUFUSU9OX1RJTUlORykpLFxuICBdKSxcblxuICAvKiogQW5pbWF0aW9uIHRoYXQgZXhwYW5kcyBhbmQgY29sbGFwc2VzIHRoZSBwYW5lbCBoZWFkZXIgaGVpZ2h0LiAqL1xuICBleHBhbnNpb25IZWFkZXJIZWlnaHQ6IHRyaWdnZXIoJ2V4cGFuc2lvbkhlaWdodCcsIFtcbiAgICBzdGF0ZShcbiAgICAgICdjb2xsYXBzZWQnLFxuICAgICAgc3R5bGUoe1xuICAgICAgICBoZWlnaHQ6ICd7e2NvbGxhcHNlZEhlaWdodH19JyxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHsgY29sbGFwc2VkSGVpZ2h0OiAnNDhweCcgfSxcbiAgICAgIH0sXG4gICAgKSxcbiAgICBzdGF0ZShcbiAgICAgICdleHBhbmRlZCcsXG4gICAgICBzdHlsZSh7XG4gICAgICAgIGhlaWdodDogJ3t7ZXhwYW5kZWRIZWlnaHR9fScsXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7IGV4cGFuZGVkSGVpZ2h0OiAnNTZweCcgfSxcbiAgICAgIH0sXG4gICAgKSxcbiAgICB0cmFuc2l0aW9uKFxuICAgICAgJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLFxuICAgICAgZ3JvdXAoW3F1ZXJ5KCdAaW5kaWNhdG9yUm90YXRlJywgYW5pbWF0ZUNoaWxkKCksIHsgb3B0aW9uYWw6IHRydWUgfSksIGFuaW1hdGUoRVhQQU5TSU9OX1BBTkVMX0FOSU1BVElPTl9USU1JTkcpXSksXG4gICAgKSxcbiAgXSksXG5cbiAgLyoqIEFuaW1hdGlvbiB0aGF0IGV4cGFuZHMgYW5kIGNvbGxhcHNlcyB0aGUgcGFuZWwgY29udGVudC4gKi9cbiAgYm9keUV4cGFuc2lvbjogdHJpZ2dlcignYm9keUV4cGFuc2lvbicsIFtcbiAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXG4gICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoeyBoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pKSxcbiAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZShFWFBBTlNJT05fUEFORUxfQU5JTUFUSU9OX1RJTUlORykpLFxuICBdKSxcbn07XG4iXX0=