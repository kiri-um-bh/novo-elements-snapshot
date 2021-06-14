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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcnVubmVyL3dvcmsvbm92by1lbGVtZW50cy9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9Db250cm9sRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGFBQWEsRUFDYixXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGVBQWUsRUFDZixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLFNBQVMsQ0FBQztBQUdqQixNQUFNLE9BQU8sY0FBYztJQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQVksRUFBRSxNQUFtQjtRQUM3QyxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEtBQUsscUJBQXFCO2dCQUN4QixPQUFPLElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssb0JBQW9CO2dCQUN2QixPQUFPLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssY0FBYztnQkFDakIsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakM7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FDVixxSEFBcUgsRUFDckgsSUFBSSxDQUNMLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFkZHJlc3NDb250cm9sLFxuICBDaGVja2JveENvbnRyb2wsXG4gIENoZWNrTGlzdENvbnRyb2wsXG4gIERhdGVUaW1lQ29udHJvbCxcbiAgRWRpdG9yQ29udHJvbCxcbiAgRmlsZUNvbnRyb2wsXG4gIE5hdGl2ZVNlbGVjdENvbnRyb2wsXG4gIFBpY2tlckNvbnRyb2wsXG4gIFF1aWNrTm90ZUNvbnRyb2wsXG4gIFJhZGlvQ29udHJvbCxcbiAgUmVhZE9ubHlDb250cm9sLFxuICBTZWxlY3RDb250cm9sLFxuICBUYWJsZVBpY2tlckNvbnRyb2wsXG4gIFRleHRBcmVhQ29udHJvbCxcbiAgVGV4dEJveENvbnRyb2wsXG4gIFRpbGVzQ29udHJvbCxcbiAgVGltZUNvbnRyb2wsXG59IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IHsgQmFzZUNvbnRyb2wgfSBmcm9tICcuL0Jhc2VDb250cm9sJztcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xGYWN0b3J5IHtcbiAgc3RhdGljIGNyZWF0ZSh0eXBlOiBzdHJpbmcsIGNvbmZpZzogQmFzZUNvbnRyb2wpOiBCYXNlQ29udHJvbCB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdBZGRyZXNzQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQWRkcmVzc0NvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0NoZWNrYm94Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQ2hlY2tib3hDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdDaGVja0xpc3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDaGVja0xpc3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdDaGVja0xpc3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBDaGVja0xpc3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdEYXRlVGltZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IERhdGVUaW1lQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnRWRpdG9yQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgRWRpdG9yQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnRmlsZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IEZpbGVDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdOYXRpdmVTZWxlY3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVTZWxlY3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdQaWNrZXJDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBQaWNrZXJDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUYWJsZVBpY2tlckNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRhYmxlUGlja2VyQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUXVpY2tOb3RlQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUXVpY2tOb3RlQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUmFkaW9Db250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBSYWRpb0NvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1JlYWRPbmx5Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUmVhZE9ubHlDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUZXh0QXJlYUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRleHRBcmVhQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGV4dEJveENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRleHRCb3hDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdTZWxlY3RDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdUaWxlc0NvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRpbGVzQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGltZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFRpbWVDb250cm9sKGNvbmZpZyk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1tDb250cm9sRmFjdG9yeV0gLSB1bmFibGUgdG8gZmluZCBjb250cm9sIGZvciB0eXBlLiBNYWtlIHN1cmUgdG8gc2V0IFwiZWRpdG9yVHlwZVwiIGFuZCBcImVkaXRvckNvbmZpZ1wiIG9uIHlvdXIgY29sdW1uJyxcbiAgICAgICAgICB0eXBlLFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==