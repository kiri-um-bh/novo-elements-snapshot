/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/picker/PickerControl.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// APP
import { BaseControl } from './../BaseControl';
export class PickerControl extends BaseControl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super('PickerControl', config);
        this.controlType = 'picker';
        this.options = [];
        this.options = config.options || [];
    }
}
if (false) {
    /** @type {?} */
    PickerControl.prototype.controlType;
    /** @type {?} */
    PickerControl.prototype.options;
}
export class TablePickerControl extends PickerControl {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(Object.assign(config, { parentScrollSelector: '.table-container' }));
        this.__type = 'TablePickerControl';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGlja2VyQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL3BpY2tlci9QaWNrZXJDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQXFCLE1BQU0sa0JBQWtCLENBQUM7QUFFbEUsTUFBTSxPQUFPLGFBQWMsU0FBUSxXQUFXOzs7O0lBSTVDLFlBQVksTUFBeUI7UUFDbkMsS0FBSyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUpqQyxnQkFBVyxHQUFHLFFBQVEsQ0FBQztRQUN2QixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBSVgsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7OztJQVBDLG9DQUF1Qjs7SUFDdkIsZ0NBQWE7O0FBUWYsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7Ozs7SUFDbkQsWUFBWSxNQUF5QjtRQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDO0lBQ3JDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFQUFxuaW1wb3J0IHsgQmFzZUNvbnRyb2wsIE5vdm9Db250cm9sQ29uZmlnIH0gZnJvbSAnLi8uLi9CYXNlQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBQaWNrZXJDb250cm9sIGV4dGVuZHMgQmFzZUNvbnRyb2wge1xuICBjb250cm9sVHlwZSA9ICdwaWNrZXInO1xuICBvcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBOb3ZvQ29udHJvbENvbmZpZykge1xuICAgIHN1cGVyKCdQaWNrZXJDb250cm9sJywgY29uZmlnKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBjb25maWcub3B0aW9ucyB8fCBbXTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVQaWNrZXJDb250cm9sIGV4dGVuZHMgUGlja2VyQ29udHJvbCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTm92b0NvbnRyb2xDb25maWcpIHtcbiAgICBzdXBlcihPYmplY3QuYXNzaWduKGNvbmZpZywgeyBwYXJlbnRTY3JvbGxTZWxlY3RvcjogJy50YWJsZS1jb250YWluZXInIH0pKTtcbiAgICB0aGlzLl9fdHlwZSA9ICdUYWJsZVBpY2tlckNvbnRyb2wnO1xuICB9XG59XG4iXX0=