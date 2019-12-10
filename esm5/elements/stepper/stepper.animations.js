/**
 * @fileoverview added by tsickle
 * Generated from: elements/stepper/stepper.animations.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
/**
 * Animations used by the Novo steppers.
 * @type {?}
 */
export var novoStepperAnimations = {
    /**
     * Animation that transitions the step along the X axis in a horizontal stepper.
     */
    horizontalStepTransition: trigger('stepTransition', [
        state('previous', style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'hidden' })),
        state('current', style({ transform: 'none', visibility: 'visible' })),
        state('next', style({ transform: 'translate3d(100%, 0, 0)', visibility: 'hidden' })),
        transition('* => *', animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
    ]),
    /**
     * Animation that transitions the step along the Y axis in a vertical stepper.
     */
    verticalStepTransition: trigger('stepTransition', [
        state('previous', style({ height: '0px', visibility: 'hidden' })),
        state('next', style({ height: '0px', visibility: 'hidden' })),
        state('current', style({ height: '*', visibility: 'visible' })),
        transition('* <=> current', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3N0ZXBwZXIvc3RlcHBlci5hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQTRCLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBRzNHLE1BQU0sS0FBTyxxQkFBcUIsR0FHOUI7Ozs7SUFFRix3QkFBd0IsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7UUFDbEQsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsMEJBQTBCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDekYsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3BGLFVBQVUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDdEUsQ0FBQzs7OztJQUdGLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtRQUNoRCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzdELEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUMvRCxVQUFVLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0tBQzdFLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbi8qKiBBbmltYXRpb25zIHVzZWQgYnkgdGhlIE5vdm8gc3RlcHBlcnMuICovXG5leHBvcnQgY29uc3Qgbm92b1N0ZXBwZXJBbmltYXRpb25zOiB7XG4gIHJlYWRvbmx5IGhvcml6b250YWxTdGVwVHJhbnNpdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhO1xuICByZWFkb25seSB2ZXJ0aWNhbFN0ZXBUcmFuc2l0aW9uOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGE7XG59ID0ge1xuICAvKiogQW5pbWF0aW9uIHRoYXQgdHJhbnNpdGlvbnMgdGhlIHN0ZXAgYWxvbmcgdGhlIFggYXhpcyBpbiBhIGhvcml6b250YWwgc3RlcHBlci4gKi9cbiAgaG9yaXpvbnRhbFN0ZXBUcmFuc2l0aW9uOiB0cmlnZ2VyKCdzdGVwVHJhbnNpdGlvbicsIFtcbiAgICBzdGF0ZSgncHJldmlvdXMnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKScsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICBzdGF0ZSgnY3VycmVudCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAnbm9uZScsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgc3RhdGUoJ25leHQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDEwMCUsIDAsIDApJywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSkpLFxuICAgIHRyYW5zaXRpb24oJyogPT4gKicsIGFuaW1hdGUoJzUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKScpKSxcbiAgXSksXG5cbiAgLyoqIEFuaW1hdGlvbiB0aGF0IHRyYW5zaXRpb25zIHRoZSBzdGVwIGFsb25nIHRoZSBZIGF4aXMgaW4gYSB2ZXJ0aWNhbCBzdGVwcGVyLiAqL1xuICB2ZXJ0aWNhbFN0ZXBUcmFuc2l0aW9uOiB0cmlnZ2VyKCdzdGVwVHJhbnNpdGlvbicsIFtcbiAgICBzdGF0ZSgncHJldmlvdXMnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICBzdGF0ZSgnbmV4dCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSkpLFxuICAgIHN0YXRlKCdjdXJyZW50Jywgc3R5bGUoeyBoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pKSxcbiAgICB0cmFuc2l0aW9uKCcqIDw9PiBjdXJyZW50JywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICBdKSxcbn07XG4iXX0=