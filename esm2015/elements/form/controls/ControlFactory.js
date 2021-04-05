import { AddressControl, CheckboxControl, CheckListControl, DateTimeControl, EditorControl, FileControl, NativeSelectControl, PickerControl, QuickNoteControl, RadioControl, ReadOnlyControl, SelectControl, TablePickerControl, TextAreaControl, TextBoxControl, TilesControl, TimeControl, } from './index';
export class ControlFactory {
    static create(type, config) {
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2NvbnRyb2xzL0NvbnRyb2xGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxjQUFjLEVBQ2QsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsYUFBYSxFQUNiLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osZUFBZSxFQUNmLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGNBQWMsRUFDZCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sU0FBUyxDQUFDO0FBRWpCLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWSxFQUFFLE1BQW1CO1FBQzdDLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsS0FBSyxxQkFBcUI7Z0JBQ3hCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSyxvQkFBb0I7Z0JBQ3ZCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QyxLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLEtBQUssY0FBYztnQkFDakIsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQztnQkFDRSxPQUFPLENBQUMsSUFBSSxDQUNWLHFIQUFxSCxFQUNySCxJQUFJLENBQ0wsQ0FBQztnQkFDRixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICcuL0Jhc2VDb250cm9sJztcbmltcG9ydCB7XG4gIEFkZHJlc3NDb250cm9sLFxuICBDaGVja2JveENvbnRyb2wsXG4gIENoZWNrTGlzdENvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5hdGl2ZVNlbGVjdENvbnRyb2wsXG4gIFBpY2tlckNvbnRyb2wsXG4gIFF1aWNrTm90ZUNvbnRyb2wsXG4gIFJhZGlvQ29udHJvbCxcbiAgUmVhZE9ubHlDb250cm9sLFxuICBTZWxlY3RDb250cm9sLFxuICBUYWJsZVBpY2tlckNvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgQ29udHJvbEZhY3Rvcnkge1xuICBzdGF0aWMgY3JlYXRlKHR5cGU6IHN0cmluZywgY29uZmlnOiBCYXNlQ29udHJvbCk6IEJhc2VDb250cm9sIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ0FkZHJlc3NDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBBZGRyZXNzQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnQ2hlY2tib3hDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDaGVja2JveENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0NoZWNrTGlzdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IENoZWNrTGlzdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0NoZWNrTGlzdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IENoZWNrTGlzdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0RhdGVUaW1lQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWVDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdFZGl0b3JDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBFZGl0b3JDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdGaWxlQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgRmlsZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ05hdGl2ZVNlbGVjdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZVNlbGVjdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1BpY2tlckNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFBpY2tlckNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RhYmxlUGlja2VyQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGFibGVQaWNrZXJDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdRdWlja05vdGVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBRdWlja05vdGVDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdSYWRpb0NvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFJhZGlvQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUmVhZE9ubHlDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBSZWFkT25seUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RleHRBcmVhQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGV4dEFyZWFDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUZXh0Qm94Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGV4dEJveENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1NlbGVjdENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFNlbGVjdENvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RpbGVzQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGlsZXNDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUaW1lQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgVGltZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnW0NvbnRyb2xGYWN0b3J5XSAtIHVuYWJsZSB0byBmaW5kIGNvbnRyb2wgZm9yIHR5cGUuIE1ha2Ugc3VyZSB0byBzZXQgXCJlZGl0b3JUeXBlXCIgYW5kIFwiZWRpdG9yQ29uZmlnXCIgb24geW91ciBjb2x1bW4nLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19