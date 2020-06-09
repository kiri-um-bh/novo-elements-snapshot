import { AddressControl, CheckboxControl, CheckListControl, DateTimeControl, EditorControl, FileControl, NativeSelectControl, PickerControl, QuickNoteControl, RadioControl, ReadOnlyControl, SelectControl, TablePickerControl, TextAreaControl, TextBoxControl, TilesControl, TimeControl, } from './index';
var ControlFactory = /** @class */ (function () {
    function ControlFactory() {
    }
    ControlFactory.create = function (type, config) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9Db250cm9sRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUNkLGVBQWUsRUFDZixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGFBQWEsRUFDYixXQUFXLEVBQ1gsbUJBQW1CLEVBQ25CLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGVBQWUsRUFDZixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLFdBQVcsR0FDWixNQUFNLFNBQVMsQ0FBQztBQUdqQjtJQUFBO0lBK0NBLENBQUM7SUE5Q1EscUJBQU0sR0FBYixVQUFjLElBQVksRUFBRSxNQUFtQjtRQUM3QyxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGVBQWU7Z0JBQ2xCLE9BQU8sSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkMsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLEtBQUsscUJBQXFCO2dCQUN4QixPQUFPLElBQUksbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssb0JBQW9CO2dCQUN2QixPQUFPLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEMsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxnQkFBZ0I7Z0JBQ25CLE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssY0FBYztnQkFDakIsT0FBTyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakM7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FDVixxSEFBcUgsRUFDckgsSUFBSSxDQUNMLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQ2hlY2tib3hDb250cm9sLFxuICBDaGVja0xpc3RDb250cm9sLFxuICBEYXRlVGltZUNvbnRyb2wsXG4gIEVkaXRvckNvbnRyb2wsXG4gIEZpbGVDb250cm9sLFxuICBOYXRpdmVTZWxlY3RDb250cm9sLFxuICBQaWNrZXJDb250cm9sLFxuICBRdWlja05vdGVDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFJlYWRPbmx5Q29udHJvbCxcbiAgU2VsZWN0Q29udHJvbCxcbiAgVGFibGVQaWNrZXJDb250cm9sLFxuICBUZXh0QXJlYUNvbnRyb2wsXG4gIFRleHRCb3hDb250cm9sLFxuICBUaWxlc0NvbnRyb2wsXG4gIFRpbWVDb250cm9sLFxufSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJhc2VDb250cm9sIH0gZnJvbSAnLi9CYXNlQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sRmFjdG9yeSB7XG4gIHN0YXRpYyBjcmVhdGUodHlwZTogc3RyaW5nLCBjb25maWc6IEJhc2VDb250cm9sKTogQmFzZUNvbnRyb2wge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnQWRkcmVzc0NvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3NDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdDaGVja2JveENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IENoZWNrYm94Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnQ2hlY2tMaXN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnQ2hlY2tMaXN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnRGF0ZVRpbWVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0VkaXRvckNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IEVkaXRvckNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0ZpbGVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBGaWxlQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnTmF0aXZlU2VsZWN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlU2VsZWN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUGlja2VyQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUGlja2VyQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGFibGVQaWNrZXJDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZVBpY2tlckNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1F1aWNrTm90ZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFF1aWNrTm90ZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1JhZGlvQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUmFkaW9Db250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdSZWFkT25seUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFJlYWRPbmx5Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGV4dEFyZWFDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0QXJlYUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RleHRCb3hDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Qm94Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnU2VsZWN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGlsZXNDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlc0NvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RpbWVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lQ29udHJvbChjb25maWcpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdbQ29udHJvbEZhY3RvcnldIC0gdW5hYmxlIHRvIGZpbmQgY29udHJvbCBmb3IgdHlwZS4gTWFrZSBzdXJlIHRvIHNldCBcImVkaXRvclR5cGVcIiBhbmQgXCJlZGl0b3JDb25maWdcIiBvbiB5b3VyIGNvbHVtbicsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=