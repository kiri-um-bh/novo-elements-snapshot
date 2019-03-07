/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9Db250cm9sRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUNYLG1CQUFtQixFQUNuQixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxTQUFTLENBQUM7QUFHakI7SUFBQTtJQStDQSxDQUFDOzs7Ozs7SUE5Q1EscUJBQU07Ozs7O0lBQWIsVUFBYyxJQUFZLEVBQUUsTUFBbUI7UUFDN0MsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxLQUFLLHFCQUFxQjtnQkFDeEIsT0FBTyxJQUFJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLG9CQUFvQjtnQkFDdkIsT0FBTyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUhBQXFILEVBQ3JILElBQUksQ0FDTCxDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWRkcmVzc0NvbnRyb2wsXG4gIENoZWNrYm94Q29udHJvbCxcbiAgQ2hlY2tMaXN0Q29udHJvbCxcbiAgRGF0ZVRpbWVDb250cm9sLFxuICBFZGl0b3JDb250cm9sLFxuICBGaWxlQ29udHJvbCxcbiAgTmF0aXZlU2VsZWN0Q29udHJvbCxcbiAgUGlja2VyQ29udHJvbCxcbiAgUXVpY2tOb3RlQ29udHJvbCxcbiAgUmFkaW9Db250cm9sLFxuICBSZWFkT25seUNvbnRyb2wsXG4gIFNlbGVjdENvbnRyb2wsXG4gIFRhYmxlUGlja2VyQ29udHJvbCxcbiAgVGV4dEFyZWFDb250cm9sLFxuICBUZXh0Qm94Q29udHJvbCxcbiAgVGlsZXNDb250cm9sLFxuICBUaW1lQ29udHJvbCxcbn0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBCYXNlQ29udHJvbCB9IGZyb20gJy4vQmFzZUNvbnRyb2wnO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbEZhY3Rvcnkge1xuICBzdGF0aWMgY3JlYXRlKHR5cGU6IHN0cmluZywgY29uZmlnOiBCYXNlQ29udHJvbCk6IEJhc2VDb250cm9sIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0FkZHJlc3NDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnQ2hlY2tib3hDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDaGVja2JveENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0NoZWNrTGlzdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IENoZWNrTGlzdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0NoZWNrTGlzdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IENoZWNrTGlzdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0RhdGVUaW1lQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWVDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdFZGl0b3JDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBFZGl0b3JDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdGaWxlQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgRmlsZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ05hdGl2ZVNlbGVjdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZVNlbGVjdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1BpY2tlckNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFBpY2tlckNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RhYmxlUGlja2VyQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGFibGVQaWNrZXJDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdRdWlja05vdGVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBRdWlja05vdGVDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdSYWRpb0NvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFJhZGlvQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUmVhZE9ubHlDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFkT25seUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RleHRBcmVhQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGV4dEFyZWFDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUZXh0Qm94Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGV4dEJveENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1NlbGVjdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RpbGVzQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGlsZXNDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUaW1lQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGltZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnW0NvbnRyb2xGYWN0b3J5XSAtIHVuYWJsZSB0byBmaW5kIGNvbnRyb2wgZm9yIHR5cGUuIE1ha2Ugc3VyZSB0byBzZXQgXCJlZGl0b3JUeXBlXCIgYW5kIFwiZWRpdG9yQ29uZmlnXCIgb24geW91ciBjb2x1bW4nLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19