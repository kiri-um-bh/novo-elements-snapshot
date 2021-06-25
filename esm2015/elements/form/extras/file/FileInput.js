// NG2
import { Component, Input, ElementRef, forwardRef, ViewChild, ViewContainerRef, TemplateRef, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { NovoDragulaService } from '../../../../elements/dragula/DragulaService';
import { NovoFile } from './extras/file/File';
// Value accessor for the component (supports ngModel)
const FILE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoFileInputElement),
    multi: true,
};
const LAYOUT_DEFAULTS = { order: 'default', download: true, removable: true, labelStyle: 'default', draggable: false };
export class NovoFileInputElement {
    constructor(element, labels, dragula) {
        this.element = element;
        this.labels = labels;
        this.dragula = dragula;
        this.multiple = false;
        this.disabled = false;
        this.value = [];
        this.edit = new EventEmitter();
        this.save = new EventEmitter();
        this.delete = new EventEmitter();
        this.upload = new EventEmitter();
        this.elements = [];
        this.files = [];
        this.active = false;
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
        this.commands = {
            dragenter: this.dragEnterHandler.bind(this),
            dragleave: this.dragLeaveHandler.bind(this),
            dragover: this.dragOverHandler.bind(this),
            drop: this.dropHandler.bind(this),
        };
    }
    ngOnInit() {
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((type) => {
            this.element.nativeElement.addEventListener(type, this.commands[type]);
        });
        this.updateLayout();
        this.initializeDragula();
        this.setInitialFileList();
        this.dataFeatureId = this.dataFeatureId ? this.dataFeatureId : this.name;
    }
    ngOnDestroy() {
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((type) => {
            this.element.nativeElement.removeEventListener(type, this.commands[type]);
        });
        const dragulaHasFileOutputBag = this.dragula.bags.length > 0 && this.dragula.bags.filter((x) => x.name === this.fileOutputBag).length > 0;
        if (dragulaHasFileOutputBag) {
            this.dragula.destroy(this.fileOutputBag);
        }
    }
    ngOnChanges(changes) {
        this.onModelChange(this.model);
    }
    updateLayout() {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.insertTemplatesBasedOnLayout();
    }
    insertTemplatesBasedOnLayout() {
        let order;
        switch (this.layoutOptions['order']) {
            case 'displayFilesBelow':
                order = ['fileInput', 'fileOutput'];
                break;
            default:
                order = ['fileOutput', 'fileInput'];
        }
        order.forEach((template) => {
            this.container.createEmbeddedView(this[template], 0);
        });
        return order;
    }
    initializeDragula() {
        this.fileOutputBag = `file-output-${this.dragula.bags.length}`;
        this.dragula.setOptions(this.fileOutputBag, {
            moves: (el, container, handle) => {
                return this.layoutOptions.draggable;
            },
        });
    }
    setInitialFileList() {
        if (this.value) {
            this.files = this.value;
        }
    }
    dragEnterHandler(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        this.target = event.target;
        this.active = true;
    }
    dragLeaveHandler(event) {
        event.preventDefault();
        if (this.target === event.target) {
            this.active = false;
        }
    }
    dragOverHandler(event) {
        event.preventDefault();
        // no-op
    }
    dropHandler(event) {
        event.preventDefault();
        this.visible = false;
        if (event.dataTransfer.types[0] !== 'Files') {
            return;
        }
        const options = this.layoutOptions;
        const filelist = Array.from(event.dataTransfer.files);
        if (options.customActions) {
            this.upload.emit(this.multiple ? filelist : [filelist[0]]);
        }
        else {
            this.process(this.multiple ? filelist : [filelist[0]]);
        }
        this.active = false;
    }
    writeValue(model) {
        this.model = model;
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    check(event) {
        this.process(Array.from(event.target.files));
    }
    validate(files) {
        let passedValidation = true;
        if (this.layoutOptions.customValidation) {
            this.layoutOptions.customValidation
                .filter((validation) => validation.action === 'upload')
                .forEach((uploadValidation) => {
                passedValidation = uploadValidation.fn(files) && passedValidation;
            });
        }
        return passedValidation;
    }
    process(filelist) {
        if (this.validate(filelist)) {
            Promise.all(filelist.map((file) => this.readFile(file))).then((files) => {
                if (this.multiple) {
                    this.files.push(...files);
                }
                else {
                    this.files = files;
                }
                this.model = this.files;
                this.onModelChange(this.model);
            });
        }
    }
    download(file) {
        window.open(file.dataURL, '_blank');
    }
    remove(file) {
        this.files.splice(this.files.findIndex((f) => f.name === file.name && f.size === file.size), 1);
        this.model = this.files;
        this.onModelChange(this.model);
    }
    readFile(file) {
        return new NovoFile(file).read();
    }
    customEdit(file) {
        this.edit.emit(file);
    }
    customSave(file) {
        this.save.emit(file);
    }
    customDelete(file) {
        this.delete.emit(file);
    }
    customCheck(event) {
        this.upload.emit(event);
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
    }
}
NovoFileInputElement.decorators = [
    { type: Component, args: [{
                selector: 'novo-file-input',
                providers: [FILE_VALUE_ACCESSOR],
                template: `
    <div #container></div>
    <ng-template #fileInput>
      <div class="file-input-group" [class.disabled]="disabled" [class.active]="active">
        <input
          *ngIf="!layoutOptions.customActions"
          type="file"
          [name]="name"
          [attr.id]="name"
          (change)="check($event)"
          [attr.multiple]="multiple"
          tabindex="-1"
          [attr.data-feature-id]="dataFeatureId"
        />
        <input
          *ngIf="layoutOptions.customActions"
          type="file"
          [name]="name"
          [attr.id]="name"
          (change)="customCheck($event)"
          [attr.multiple]="multiple"
          tabindex="-1"
          [attr.data-feature-id]="dataFeatureId"
        />
        <section [ngSwitch]="layoutOptions.labelStyle">
          <label *ngSwitchCase="'no-box'" [attr.for]="name" class="no-box">
            <div>
              <i class="bhi-dropzone"></i>{{ placeholder || labels.chooseAFile }} {{ labels.or }}
              <strong class="link">{{ labels.clickToBrowse }}</strong>
            </div>
          </label>
          <label *ngSwitchDefault [attr.for]="name" class="boxed">
            <span>{{ placeholder || labels.chooseAFile }}</span>
            <small
              >{{ labels.or }} <strong class="link">{{ labels.clickToBrowse }}</strong></small
            >
          </label>
        </section>
      </div>
    </ng-template>
    <ng-template #fileOutput>
      <div class="file-output-group" [dragula]="fileOutputBag" [dragulaModel]="files">
        <div class="file-item" *ngFor="let file of files" [class.disabled]="disabled">
          <i *ngIf="layoutOptions.draggable" class="bhi-move"></i>
          <label *ngIf="file.link"
            ><span
              ><a href="{{ file.link }}" target="_blank">{{ file.name | decodeURI }}</a></span
            ><span *ngIf="file.description">||</span><span>{{ file.description }}</span></label
          >
          <label *ngIf="!file.link">{{ file.name | decodeURI }}</label>
          <div class="actions" [attr.data-automation-id]="'file-actions'" *ngIf="file.loaded">
            <div *ngIf="!layoutOptions.customActions">
              <button
                *ngIf="layoutOptions.download"
                type="button"
                theme="icon"
                icon="save"
                (click)="download(file)"
                [attr.data-automation-id]="'file-download'"
                tabindex="-1"
              ></button>
              <button
                *ngIf="!disabled && (layoutOptions.removable || (!layoutOptions.removable && layoutOptions.removableWhenNew && !file.link))"
                type="button"
                theme="icon"
                icon="close"
                (click)="remove(file)"
                [attr.data-automation-id]="'file-remove'"
                tabindex="-1"
              ></button>
            </div>
            <div *ngIf="layoutOptions.customActions">
              <button
                *ngIf="layoutOptions.edit && !disabled"
                type="button"
                theme="icon"
                icon="edit"
                (click)="customEdit(file)"
                [attr.data-automation-id]="'file-edit'"
                tabindex="-1"
              ></button>
              <button
                *ngIf="layoutOptions.download"
                type="button"
                theme="icon"
                icon="save"
                (click)="customSave(file)"
                [attr.data-automation-id]="'file-download'"
                tabindex="-1"
              ></button>
              <button
                *ngIf="!disabled"
                type="button"
                theme="icon"
                icon="close"
                (click)="customDelete(file)"
                [attr.data-automation-id]="'file-remove'"
                tabindex="-1"
              ></button>
            </div>
          </div>
          <novo-loading *ngIf="!file.loaded"></novo-loading>
        </div>
      </div>
    </ng-template>
  `
            },] }
];
NovoFileInputElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: NovoDragulaService }
];
NovoFileInputElement.propDecorators = {
    fileInput: [{ type: ViewChild, args: ['fileInput', { static: true },] }],
    fileOutput: [{ type: ViewChild, args: ['fileOutput', { static: true },] }],
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef, static: true },] }],
    name: [{ type: Input }],
    multiple: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    layoutOptions: [{ type: Input }],
    value: [{ type: Input }],
    dataFeatureId: [{ type: Input }],
    edit: [{ type: Output }],
    save: [{ type: Output }],
    delete: [{ type: Output }],
    upload: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3J1bm5lci93b3JrL25vdm8tZWxlbWVudHMvbm92by1lbGVtZW50cy9wcm9qZWN0cy9ub3ZvLWVsZW1lbnRzL3NyYy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsVUFBVSxFQUlWLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUVYLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsc0RBQXNEO0FBQ3RELE1BQU0sbUJBQW1CLEdBQUc7SUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFnSHZILE1BQU0sT0FBTyxvQkFBb0I7SUFzRC9CLFlBQW9CLE9BQW1CLEVBQVMsTUFBd0IsRUFBVSxPQUEyQjtRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFO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c0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRmlsZSB9IGZyb20gJy4vZXh0cmFzL2ZpbGUvRmlsZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgRklMRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9GaWxlSW5wdXRFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5jb25zdCBMQVlPVVRfREVGQVVMVFMgPSB7IG9yZGVyOiAnZGVmYXVsdCcsIGRvd25sb2FkOiB0cnVlLCByZW1vdmFibGU6IHRydWUsIGxhYmVsU3R5bGU6ICdkZWZhdWx0JywgZHJhZ2dhYmxlOiBmYWxzZSB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpbGUtaW5wdXQnLFxuICBwcm92aWRlcnM6IFtGSUxFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNmaWxlSW5wdXQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1pbnB1dC1ncm91cFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiIWxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICAgIFthdHRyLmlkXT1cIm5hbWVcIlxuICAgICAgICAgIChjaGFuZ2UpPVwiY2hlY2soJGV2ZW50KVwiXG4gICAgICAgICAgW2F0dHIubXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJkYXRhRmVhdHVyZUlkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAoY2hhbmdlKT1cImN1c3RvbUNoZWNrKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiZGF0YUZlYXR1cmVJZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzZWN0aW9uIFtuZ1N3aXRjaF09XCJsYXlvdXRPcHRpb25zLmxhYmVsU3R5bGVcIj5cbiAgICAgICAgICA8bGFiZWwgKm5nU3dpdGNoQ2FzZT1cIiduby1ib3gnXCIgW2F0dHIuZm9yXT1cIm5hbWVcIiBjbGFzcz1cIm5vLWJveFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktZHJvcHpvbmVcIj48L2k+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19IHt7IGxhYmVscy5vciB9fVxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwibGlua1wiPnt7IGxhYmVscy5jbGlja1RvQnJvd3NlIH19PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCAqbmdTd2l0Y2hEZWZhdWx0IFthdHRyLmZvcl09XCJuYW1lXCIgY2xhc3M9XCJib3hlZFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgID57eyBsYWJlbHMub3IgfX0gPHN0cm9uZyBjbGFzcz1cImxpbmtcIj57eyBsYWJlbHMuY2xpY2tUb0Jyb3dzZSB9fTwvc3Ryb25nPjwvc21hbGxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZmlsZU91dHB1dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW91dHB1dC1ncm91cFwiIFtkcmFndWxhXT1cImZpbGVPdXRwdXRCYWdcIiBbZHJhZ3VsYU1vZGVsXT1cImZpbGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWl0ZW1cIiAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1wiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgIDxpICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kcmFnZ2FibGVcIiBjbGFzcz1cImJoaS1tb3ZlXCI+PC9pPlxuICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImZpbGUubGlua1wiXG4gICAgICAgICAgICA+PHNwYW5cbiAgICAgICAgICAgICAgPjxhIGhyZWY9XCJ7eyBmaWxlLmxpbmsgfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBmaWxlLm5hbWUgfCBkZWNvZGVVUkkgfX08L2E+PC9zcGFuXG4gICAgICAgICAgICA+PHNwYW4gKm5nSWY9XCJmaWxlLmRlc2NyaXB0aW9uXCI+fHw8L3NwYW4+PHNwYW4+e3sgZmlsZS5kZXNjcmlwdGlvbiB9fTwvc3Bhbj48L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIiFmaWxlLmxpbmtcIj57eyBmaWxlLm5hbWUgfCBkZWNvZGVVUkkgfX08L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWFjdGlvbnMnXCIgKm5nSWY9XCJmaWxlLmxvYWRlZFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRvd25sb2FkKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZG93bmxvYWQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgKGxheW91dE9wdGlvbnMucmVtb3ZhYmxlIHx8ICghbGF5b3V0T3B0aW9ucy5yZW1vdmFibGUgJiYgbGF5b3V0T3B0aW9ucy5yZW1vdmFibGVXaGVuTmV3ICYmICFmaWxlLmxpbmspKVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmUoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1yZW1vdmUnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZWRpdCAmJiAhZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21FZGl0KGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZWRpdCdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZG93bmxvYWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInNhdmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21TYXZlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZG93bmxvYWQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3VzdG9tRGVsZXRlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtcmVtb3ZlJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxub3ZvLWxvYWRpbmcgKm5nSWY9XCIhZmlsZS5sb2FkZWRcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmlsZUlucHV0RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgZmlsZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdmaWxlT3V0cHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgZmlsZU91dHB1dDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczoge1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgY3VzdG9tQWN0aW9uczogYm9vbGVhbjtcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbVZhbGlkYXRpb24/OiB7IGFjdGlvbjogc3RyaW5nOyBmbjogRnVuY3Rpb24gfVtdO1xuICAgIHJlbW92YWJsZVdoZW5OZXc/OiBib29sZWFuO1xuICB9O1xuICBASW5wdXQoKVxuICB2YWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBkYXRhRmVhdHVyZUlkOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50czogQXJyYXk8YW55PiA9IFtdO1xuICBmaWxlczogQXJyYXk8YW55PiA9IFtdO1xuICBtb2RlbDogYW55O1xuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tbWFuZHM6IGFueTtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgdGFyZ2V0OiBhbnk7XG4gIGZpbGVPdXRwdXRCYWc6IHN0cmluZztcblxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBkcmFndWxhOiBOb3ZvRHJhZ3VsYVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvbW1hbmRzID0ge1xuICAgICAgZHJhZ2VudGVyOiB0aGlzLmRyYWdFbnRlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyYWdsZWF2ZTogdGhpcy5kcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkcmFnb3ZlcjogdGhpcy5kcmFnT3ZlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyb3A6IHRoaXMuZHJvcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2Ryb3AnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHRoaXMuY29tbWFuZHNbdHlwZV0pO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplRHJhZ3VsYSgpO1xuICAgIHRoaXMuc2V0SW5pdGlhbEZpbGVMaXN0KCk7XG4gICAgdGhpcy5kYXRhRmVhdHVyZUlkID0gdGhpcy5kYXRhRmVhdHVyZUlkID8gdGhpcy5kYXRhRmVhdHVyZUlkIDogdGhpcy5uYW1lO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2Ryb3AnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHRoaXMuY29tbWFuZHNbdHlwZV0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGRyYWd1bGFIYXNGaWxlT3V0cHV0QmFnID0gdGhpcy5kcmFndWxhLmJhZ3MubGVuZ3RoID4gMCAmJiB0aGlzLmRyYWd1bGEuYmFncy5maWx0ZXIoKHgpID0+IHgubmFtZSA9PT0gdGhpcy5maWxlT3V0cHV0QmFnKS5sZW5ndGggPiAwO1xuICAgIGlmIChkcmFndWxhSGFzRmlsZU91dHB1dEJhZykge1xuICAgICAgdGhpcy5kcmFndWxhLmRlc3Ryb3kodGhpcy5maWxlT3V0cHV0QmFnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZUxheW91dCgpIHtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBMQVlPVVRfREVGQVVMVFMsIHRoaXMubGF5b3V0T3B0aW9ucyk7XG4gICAgdGhpcy5pbnNlcnRUZW1wbGF0ZXNCYXNlZE9uTGF5b3V0KCk7XG4gIH1cblxuICBpbnNlcnRUZW1wbGF0ZXNCYXNlZE9uTGF5b3V0KCkge1xuICAgIGxldCBvcmRlcjtcbiAgICBzd2l0Y2ggKHRoaXMubGF5b3V0T3B0aW9uc1snb3JkZXInXSkge1xuICAgICAgY2FzZSAnZGlzcGxheUZpbGVzQmVsb3cnOlxuICAgICAgICBvcmRlciA9IFsnZmlsZUlucHV0JywgJ2ZpbGVPdXRwdXQnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvcmRlciA9IFsnZmlsZU91dHB1dCcsICdmaWxlSW5wdXQnXTtcbiAgICB9XG4gICAgb3JkZXIuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzW3RlbXBsYXRlXSwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURyYWd1bGEoKSB7XG4gICAgdGhpcy5maWxlT3V0cHV0QmFnID0gYGZpbGUtb3V0cHV0LSR7dGhpcy5kcmFndWxhLmJhZ3MubGVuZ3RofWA7XG4gICAgdGhpcy5kcmFndWxhLnNldE9wdGlvbnModGhpcy5maWxlT3V0cHV0QmFnLCB7XG4gICAgICBtb3ZlczogKGVsLCBjb250YWluZXIsIGhhbmRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRPcHRpb25zLmRyYWdnYWJsZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsRmlsZUxpc3QoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdFbnRlckhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYWdMZWF2ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gbm8tb3BcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdICE9PSAnRmlsZXMnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHRoaXMubGF5b3V0T3B0aW9ucztcbiAgICBjb25zdCBmaWxlbGlzdCA9IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICBpZiAob3B0aW9ucy5jdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwbG9hZC5lbWl0KHRoaXMubXVsdGlwbGUgPyBmaWxlbGlzdCA6IFtmaWxlbGlzdFswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3ModGhpcy5tdWx0aXBsZSA/IGZpbGVsaXN0IDogW2ZpbGVsaXN0WzBdXSk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgY2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb2Nlc3MoQXJyYXkuZnJvbShldmVudC50YXJnZXQuZmlsZXMpKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGZpbGVzKTogYm9vbGVhbiB7XG4gICAgbGV0IHBhc3NlZFZhbGlkYXRpb24gPSB0cnVlO1xuICAgIGlmICh0aGlzLmxheW91dE9wdGlvbnMuY3VzdG9tVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5sYXlvdXRPcHRpb25zLmN1c3RvbVZhbGlkYXRpb25cbiAgICAgICAgLmZpbHRlcigodmFsaWRhdGlvbikgPT4gdmFsaWRhdGlvbi5hY3Rpb24gPT09ICd1cGxvYWQnKVxuICAgICAgICAuZm9yRWFjaCgodXBsb2FkVmFsaWRhdGlvbikgPT4ge1xuICAgICAgICAgIHBhc3NlZFZhbGlkYXRpb24gPSB1cGxvYWRWYWxpZGF0aW9uLmZuKGZpbGVzKSAmJiBwYXNzZWRWYWxpZGF0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NlZFZhbGlkYXRpb247XG4gIH1cblxuICBwcm9jZXNzKGZpbGVsaXN0KSB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUoZmlsZWxpc3QpKSB7XG4gICAgICBQcm9taXNlLmFsbChmaWxlbGlzdC5tYXAoKGZpbGUpID0+IHRoaXMucmVhZEZpbGUoZmlsZSkpKS50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIHRoaXMuZmlsZXMucHVzaCguLi5maWxlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLmZpbGVzO1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb3dubG9hZChmaWxlKSB7XG4gICAgd2luZG93Lm9wZW4oZmlsZS5kYXRhVVJMLCAnX2JsYW5rJyk7XG4gIH1cblxuICByZW1vdmUoZmlsZSkge1xuICAgIHRoaXMuZmlsZXMuc3BsaWNlKHRoaXMuZmlsZXMuZmluZEluZGV4KChmKSA9PiBmLm5hbWUgPT09IGZpbGUubmFtZSAmJiBmLnNpemUgPT09IGZpbGUuc2l6ZSksIDEpO1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmZpbGVzO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIHJlYWRGaWxlKGZpbGUpIHtcbiAgICByZXR1cm4gbmV3IE5vdm9GaWxlKGZpbGUpLnJlYWQoKTtcbiAgfVxuXG4gIGN1c3RvbUVkaXQoZmlsZSkge1xuICAgIHRoaXMuZWRpdC5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tU2F2ZShmaWxlKSB7XG4gICAgdGhpcy5zYXZlLmVtaXQoZmlsZSk7XG4gIH1cblxuICBjdXN0b21EZWxldGUoZmlsZSkge1xuICAgIHRoaXMuZGVsZXRlLmVtaXQoZmlsZSk7XG4gIH1cblxuICBjdXN0b21DaGVjayhldmVudCkge1xuICAgIHRoaXMudXBsb2FkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19