/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/controls/ControlFactory.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AddressControl, CheckboxControl, CheckListControl, DateTimeControl, EditorControl, FileControl, NativeSelectControl, PickerControl, QuickNoteControl, RadioControl, ReadOnlyControl, SelectControl, TablePickerControl, TextAreaControl, TextBoxControl, TilesControl, TimeControl, } from './index';
var ControlFactory = /** @class */ (function () {
    function ControlFactory() {
    }
    /**
     * @param {?} type
     * @param {?} config
     * @return {?}
     */
    ControlFactory.create = /**
     * @param {?} type
     * @param {?} config
     * @return {?}
     */
    function (type, config) {
        switch (type) {
            case 'AddressControl':
                return new AddressControl(config);
            case 'CheckboxControl':
                return new CheckboxControl(config);
            case 'CheckListControl':
                return new CheckListControl(config);
            case 'CheckListControl':
                return new CheckListControl(config);
            case 'DateTimeControl':
                return new DateTimeControl(config);
            case 'EditorControl':
                return new EditorControl(config);
            case 'FileControl':
                return new FileControl(config);
            case 'NativeSelectControl':
                return new NativeSelectControl(config);
            case 'PickerControl':
                return new PickerControl(config);
            case 'TablePickerControl':
                return new TablePickerControl(config);
            case 'QuickNoteControl':
                return new QuickNoteControl(config);
            case 'RadioControl':
                return new RadioControl(config);
            case 'ReadOnlyControl':
                return new ReadOnlyControl(config);
            case 'TextAreaControl':
                return new TextAreaControl(config);
            case 'TextBoxControl':
                return new TextBoxControl(config);
            case 'SelectControl':
                return new SelectControl(config);
            case 'TilesControl':
                return new TilesControl(config);
            case 'TimeControl':
                return new TimeControl(config);
            default:
                console.warn('[ControlFactory] - unable to find control for type. Make sure to set "editorType" and "editorConfig" on your column', type);
                return null;
        }
    };
    return ControlFactory;
}());
export { ControlFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9Db250cm9sRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsYUFBYSxFQUNiLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osZUFBZSxFQUNmLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sU0FBUyxDQUFDO0FBR2pCO0lBQUE7SUErQ0EsQ0FBQzs7Ozs7O0lBOUNRLHFCQUFNOzs7OztJQUFiLFVBQWMsSUFBWSxFQUFFLE1BQW1CO1FBQzdDLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsS0FBSyxxQkFBcUI7Z0JBQ3hCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSyxvQkFBb0I7Z0JBQ3ZCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLEtBQUssY0FBYztnQkFDakIsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQztnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUNWLHFIQUFxSCxFQUNySCxJQUFJLENBQ0wsQ0FBQztnQkFDRixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFkZHJlc3NDb250cm9sLFxuICBDaGVja2JveENvbnRyb2wsXG4gIENoZWNrTGlzdENvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5hdGl2ZVNlbGVjdENvbnRyb2wsXG4gIFBpY2tlckNvbnRyb2wsXG4gIFF1aWNrTm90ZUNvbnRyb2wsXG4gIFJhZGlvQ29udHJvbCxcbiAgUmVhZE9ubHlDb250cm9sLFxuICBTZWxlY3RDb250cm9sLFxuICBUYWJsZVBpY2tlckNvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICcuL0Jhc2VDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xGYWN0b3J5IHtcbiAgc3RhdGljIGNyZWF0ZSh0eXBlOiBzdHJpbmcsIGNvbmZpZzogQmFzZUNvbnRyb2wpOiBCYXNlQ29udHJvbCB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdBZGRyZXNzQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQWRkcmVzc0NvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0NoZWNrYm94Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQ2hlY2tib3hDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdDaGVja0xpc3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDaGVja0xpc3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdDaGVja0xpc3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDaGVja0xpc3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdEYXRlVGltZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnRWRpdG9yQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgRWRpdG9yQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnRmlsZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IEZpbGVDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdOYXRpdmVTZWxlY3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVTZWxlY3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdQaWNrZXJDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBQaWNrZXJDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUYWJsZVBpY2tlckNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlUGlja2VyQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUXVpY2tOb3RlQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUXVpY2tOb3RlQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUmFkaW9Db250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBSYWRpb0NvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1JlYWRPbmx5Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUmVhZE9ubHlDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUZXh0QXJlYUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRleHRBcmVhQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGV4dEJveENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRleHRCb3hDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdTZWxlY3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUaWxlc0NvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRpbGVzQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGltZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRpbWVDb250cm9sKGNvbmZpZyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1tDb250cm9sRmFjdG9yeV0gLSB1bmFibGUgdG8gZmluZCBjb250cm9sIGZvciB0eXBlLiBNYWtlIHN1cmUgdG8gc2V0IFwiZWRpdG9yVHlwZVwiIGFuZCBcImVkaXRvckNvbmZpZ1wiIG9uIHlvdXIgY29sdW1uJyxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==