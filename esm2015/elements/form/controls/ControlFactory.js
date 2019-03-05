/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { AddressControl, CheckboxControl, CheckListControl, DateTimeControl, EditorControl, FileControl, NativeSelectControl, PickerControl, QuickNoteControl, RadioControl, ReadOnlyControl, SelectControl, TablePickerControl, TextAreaControl, TextBoxControl, TilesControl, TimeControl, } from './index';
export class ControlFactory {
    /**
     * @param {?} type
     * @param {?} config
     * @return {?}
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbEZhY3RvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9jb250cm9scy9Db250cm9sRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFDZCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixhQUFhLEVBQ2IsV0FBVyxFQUNYLG1CQUFtQixFQUNuQixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixlQUFlLEVBQ2YsYUFBYSxFQUNiLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxTQUFTLENBQUM7QUFHakIsTUFBTTs7Ozs7O0lBQ0osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFZLEVBQUUsTUFBbUI7UUFDN0MsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLGdCQUFnQjtnQkFDbkIsT0FBTyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxLQUFLLGlCQUFpQjtnQkFDcEIsT0FBTyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxLQUFLLGtCQUFrQjtnQkFDckIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsS0FBSyxpQkFBaUI7Z0JBQ3BCLE9BQU8sSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDckMsS0FBSyxlQUFlO2dCQUNsQixPQUFPLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxLQUFLLHFCQUFxQjtnQkFDeEIsT0FBTyxJQUFJLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLG9CQUFvQjtnQkFDdkIsT0FBTyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hDLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLElBQUksZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsS0FBSyxjQUFjO2dCQUNqQixPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssaUJBQWlCO2dCQUNwQixPQUFPLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssZ0JBQWdCO2dCQUNuQixPQUFPLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsS0FBSyxhQUFhO2dCQUNoQixPQUFPLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDO2dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUhBQXFILEVBQ3JILElBQUksQ0FDTCxDQUFDO2dCQUNGLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDSCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZGRyZXNzQ29udHJvbCxcbiAgQ2hlY2tib3hDb250cm9sLFxuICBDaGVja0xpc3RDb250cm9sLFxuICBEYXRlVGltZUNvbnRyb2wsXG4gIEVkaXRvckNvbnRyb2wsXG4gIEZpbGVDb250cm9sLFxuICBOYXRpdmVTZWxlY3RDb250cm9sLFxuICBQaWNrZXJDb250cm9sLFxuICBRdWlja05vdGVDb250cm9sLFxuICBSYWRpb0NvbnRyb2wsXG4gIFJlYWRPbmx5Q29udHJvbCxcbiAgU2VsZWN0Q29udHJvbCxcbiAgVGFibGVQaWNrZXJDb250cm9sLFxuICBUZXh0QXJlYUNvbnRyb2wsXG4gIFRleHRCb3hDb250cm9sLFxuICBUaWxlc0NvbnRyb2wsXG4gIFRpbWVDb250cm9sLFxufSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJhc2VDb250cm9sIH0gZnJvbSAnLi9CYXNlQ29udHJvbCc7XG5cbmV4cG9ydCBjbGFzcyBDb250cm9sRmFjdG9yeSB7XG4gIHN0YXRpYyBjcmVhdGUodHlwZTogc3RyaW5nLCBjb25maWc6IEJhc2VDb250cm9sKTogQmFzZUNvbnRyb2wge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnQWRkcmVzc0NvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IEFkZHJlc3NDb250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdDaGVja2JveENvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IENoZWNrYm94Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnQ2hlY2tMaXN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnQ2hlY2tMaXN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgQ2hlY2tMaXN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnRGF0ZVRpbWVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlVGltZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0VkaXRvckNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IEVkaXRvckNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ0ZpbGVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBGaWxlQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnTmF0aXZlU2VsZWN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlU2VsZWN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnUGlja2VyQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUGlja2VyQ29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGFibGVQaWNrZXJDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUYWJsZVBpY2tlckNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1F1aWNrTm90ZUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFF1aWNrTm90ZUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1JhZGlvQ29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgUmFkaW9Db250cm9sKGNvbmZpZyk7XG4gICAgICBjYXNlICdSZWFkT25seUNvbnRyb2wnOlxuICAgICAgICByZXR1cm4gbmV3IFJlYWRPbmx5Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGV4dEFyZWFDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0QXJlYUNvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RleHRCb3hDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0Qm94Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnU2VsZWN0Q29udHJvbCc6XG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0Q29udHJvbChjb25maWcpO1xuICAgICAgY2FzZSAnVGlsZXNDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUaWxlc0NvbnRyb2woY29uZmlnKTtcbiAgICAgIGNhc2UgJ1RpbWVDb250cm9sJzpcbiAgICAgICAgcmV0dXJuIG5ldyBUaW1lQ29udHJvbChjb25maWcpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdbQ29udHJvbEZhY3RvcnldIC0gdW5hYmxlIHRvIGZpbmQgY29udHJvbCBmb3IgdHlwZS4gTWFrZSBzdXJlIHRvIHNldCBcImVkaXRvclR5cGVcIiBhbmQgXCJlZGl0b3JDb25maWdcIiBvbiB5b3VyIGNvbHVtbicsXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=