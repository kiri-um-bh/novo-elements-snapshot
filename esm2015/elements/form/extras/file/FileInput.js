/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// NG2
import { Component, Input, ElementRef, forwardRef, ViewChild, ViewContainerRef, TemplateRef, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { NovoDragulaService } from '../../../../elements/dragula/DragulaService';
import { NovoFile } from './extras/file/File';
// Value accessor for the component (supports ngModel)
/** @type {?} */
const FILE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoFileInputElement),
    multi: true,
};
/** @type {?} */
const LAYOUT_DEFAULTS = { order: 'default', download: true, removable: true, labelStyle: 'default', draggable: false };
export class NovoFileInputElement {
    /**
     * @param {?} element
     * @param {?} labels
     * @param {?} dragula
     */
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
    /**
     * @return {?}
     */
    ngOnInit() {
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((type) => {
            this.element.nativeElement.addEventListener(type, this.commands[type]);
        });
        this.updateLayout();
        this.initializeDragula();
        this.setInitialFileList();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((type) => {
            this.element.nativeElement.removeEventListener(type, this.commands[type]);
        });
        /** @type {?} */
        let dragulaHasFileOutputBag = this.dragula.bags.length > 0 && this.dragula.bags.filter((x) => x.name === this.fileOutputBag).length > 0;
        if (dragulaHasFileOutputBag) {
            this.dragula.destroy(this.fileOutputBag);
        }
    }
    /**
     * @param {?=} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.onModelChange(this.model);
    }
    /**
     * @return {?}
     */
    updateLayout() {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.insertTemplatesBasedOnLayout();
    }
    /**
     * @return {?}
     */
    insertTemplatesBasedOnLayout() {
        /** @type {?} */
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
    /**
     * @return {?}
     */
    initializeDragula() {
        this.fileOutputBag = `file-output-${this.dragula.bags.length}`;
        this.dragula.setOptions(this.fileOutputBag, {
            moves: (el, container, handle) => {
                return this.layoutOptions.draggable;
            },
        });
    }
    /**
     * @return {?}
     */
    setInitialFileList() {
        if (this.value) {
            this.files = this.value;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnterHandler(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        this.target = event.target;
        this.active = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragLeaveHandler(event) {
        event.preventDefault();
        if (this.target === event.target) {
            this.active = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragOverHandler(event) {
        event.preventDefault();
        // no-op
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dropHandler(event) {
        event.preventDefault();
        this.visible = false;
        if (event.dataTransfer.types[0] !== 'Files') {
            return;
        }
        /** @type {?} */
        let options = this.layoutOptions;
        /** @type {?} */
        let filelist = Array.from(event.dataTransfer.files);
        if (options.customActions) {
            this.upload.emit(this.multiple ? filelist : [filelist[0]]);
        }
        else {
            this.process(this.multiple ? filelist : [filelist[0]]);
        }
        this.active = false;
    }
    /**
     * @param {?} model
     * @return {?}
     */
    writeValue(model) {
        this.model = model;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    check(event) {
        this.process(Array.from(event.target.files));
    }
    /**
     * @param {?} filelist
     * @return {?}
     */
    process(filelist) {
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
    /**
     * @param {?} file
     * @return {?}
     */
    download(file) {
        window.open(file.dataURL, '_blank');
    }
    /**
     * @param {?} file
     * @return {?}
     */
    remove(file) {
        this.files.splice(this.files.findIndex((f) => f.name === file.name && f.size === file.size), 1);
        this.model = this.files;
        this.onModelChange(this.model);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    readFile(file) {
        return new NovoFile(file).read();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    customEdit(file) {
        this.edit.emit(file);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    customSave(file) {
        this.save.emit(file);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    customDelete(file) {
        this.delete.emit(file);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    customCheck(event) {
        this.upload.emit(event);
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
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
                <input *ngIf="!layoutOptions.customActions" type="file" [name]="name" [attr.id]="name" (change)="check($event)" [attr.multiple]="multiple" tabindex="-1"/>
                <input *ngIf="layoutOptions.customActions" type="file" [name]="name" [attr.id]="name" (change)="customCheck($event)" [attr.multiple]="multiple" tabindex="-1"/>
                <section [ngSwitch]="layoutOptions.labelStyle">
                    <label *ngSwitchCase="'no-box'" [attr.for]="name" class="no-box">
                        <div><i class="bhi-dropzone"></i>{{ placeholder || labels.chooseAFile }} {{ labels.or }} <strong class="link">{{ labels.clickToBrowse }}</strong></div>
                    </label>
                    <label *ngSwitchDefault [attr.for]="name" class="boxed">
                        <span>{{ placeholder || labels.chooseAFile }}</span>
                        <small>{{ labels.or }} <strong class="link">{{ labels.clickToBrowse }}</strong></small>
                    </label>
                </section>
            </div>
        </ng-template>
        <ng-template #fileOutput>
            <div class="file-output-group" [dragula]="fileOutputBag" [dragulaModel]="files">
                <div class="file-item" *ngFor="let file of files" [class.disabled]="disabled">
                  <i *ngIf="layoutOptions.draggable" class="bhi-move"></i>
                  <label *ngIf="file.link"><span><a href="{{ file.link }}" target="_blank">{{ file.name | decodeURI }}</a></span><span  *ngIf="file.description">||</span><span>{{ file.description }}</span></label>
                  <label *ngIf="!file.link">{{ file.name | decodeURI }}</label>
                  <div class="actions" [attr.data-automation-id]="'file-actions'" *ngIf="file.loaded">
                    <div *ngIf="!layoutOptions.customActions">
                      <button *ngIf="layoutOptions.download" type="button" theme="icon" icon="save" (click)="download(file)" [attr.data-automation-id]="'file-download'" tabindex="-1"></button>
                      <button *ngIf="!disabled && layoutOptions.removable" type="button" theme="icon" icon="close" (click)="remove(file)" [attr.data-automation-id]="'file-remove'" tabindex="-1"></button>
                    </div>
                    <div *ngIf="layoutOptions.customActions">
                      <button *ngIf="layoutOptions.edit && !disabled" type="button" theme="icon" icon="edit" (click)="customEdit(file)" [attr.data-automation-id]="'file-edit'" tabindex="-1"></button>
                      <button *ngIf="layoutOptions.download" type="button" theme="icon" icon="save" (click)="customSave(file)" [attr.data-automation-id]="'file-download'" tabindex="-1"></button>
                      <button *ngIf="!disabled" type="button" theme="icon" icon="close" (click)="customDelete(file)" [attr.data-automation-id]="'file-remove'" tabindex="-1"></button>
                    </div>
                  </div>
                    <novo-loading *ngIf="!file.loaded"></novo-loading>
                </div>
            </div>
        </ng-template>`
            }] }
];
/** @nocollapse */
NovoFileInputElement.ctorParameters = () => [
    { type: ElementRef },
    { type: NovoLabelService },
    { type: NovoDragulaService }
];
NovoFileInputElement.propDecorators = {
    fileInput: [{ type: ViewChild, args: ['fileInput',] }],
    fileOutput: [{ type: ViewChild, args: ['fileOutput',] }],
    container: [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] }],
    name: [{ type: Input }],
    multiple: [{ type: Input }],
    disabled: [{ type: Input }],
    placeholder: [{ type: Input }],
    layoutOptions: [{ type: Input }],
    value: [{ type: Input }],
    edit: [{ type: Output }],
    save: [{ type: Output }],
    delete: [{ type: Output }],
    upload: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NovoFileInputElement.prototype.fileInput;
    /** @type {?} */
    NovoFileInputElement.prototype.fileOutput;
    /** @type {?} */
    NovoFileInputElement.prototype.container;
    /** @type {?} */
    NovoFileInputElement.prototype.name;
    /** @type {?} */
    NovoFileInputElement.prototype.multiple;
    /** @type {?} */
    NovoFileInputElement.prototype.disabled;
    /** @type {?} */
    NovoFileInputElement.prototype.placeholder;
    /** @type {?} */
    NovoFileInputElement.prototype.layoutOptions;
    /** @type {?} */
    NovoFileInputElement.prototype.value;
    /** @type {?} */
    NovoFileInputElement.prototype.edit;
    /** @type {?} */
    NovoFileInputElement.prototype.save;
    /** @type {?} */
    NovoFileInputElement.prototype.delete;
    /** @type {?} */
    NovoFileInputElement.prototype.upload;
    /** @type {?} */
    NovoFileInputElement.prototype.elements;
    /** @type {?} */
    NovoFileInputElement.prototype.files;
    /** @type {?} */
    NovoFileInputElement.prototype.model;
    /** @type {?} */
    NovoFileInputElement.prototype.active;
    /** @type {?} */
    NovoFileInputElement.prototype.commands;
    /** @type {?} */
    NovoFileInputElement.prototype.visible;
    /** @type {?} */
    NovoFileInputElement.prototype.target;
    /** @type {?} */
    NovoFileInputElement.prototype.fileOutputBag;
    /** @type {?} */
    NovoFileInputElement.prototype.onModelChange;
    /** @type {?} */
    NovoFileInputElement.prototype.onModelTouched;
    /** @type {?} */
    NovoFileInputElement.prototype.element;
    /** @type {?} */
    NovoFileInputElement.prototype.labels;
    /** @type {?} */
    NovoFileInputElement.prototype.dragula;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFJVixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFFWCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7TUFHeEMsbUJBQW1CLEdBQUc7SUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1o7O01BRUssZUFBZSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0FBNEN0SCxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7SUFrRC9CLFlBQW9CLE9BQW1CLEVBQVMsTUFBd0IsRUFBVSxPQUEyQjtRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQXZDN0csYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FB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QVk7d0JBRXRCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7bUJBR2pELEtBQUs7dUJBRUwsS0FBSzt1QkFFTCxLQUFLOzBCQUVMLEtBQUs7NEJBRUwsS0FBSztvQkFVTCxLQUFLO21CQUdMLE1BQU07bUJBRU4sTUFBTTtxQkFFTixNQUFNO3FCQUVOLE1BQU07Ozs7SUFsQ1AseUNBQzRCOztJQUM1QiwwQ0FDNkI7O0lBQzdCLHlDQUM0Qjs7SUFFNUIsb0NBQ2E7O0lBQ2Isd0NBQzBCOztJQUMxQix3Q0FDMEI7O0lBQzFCLDJDQUNvQjs7SUFDcEIsNkNBU0U7O0lBQ0YscUNBQ3VCOztJQUV2QixvQ0FDNkM7O0lBQzdDLG9DQUM2Qzs7SUFDN0Msc0NBQytDOztJQUMvQyxzQ0FDK0M7O0lBRS9DLHdDQUEwQjs7SUFDMUIscUNBQXVCOztJQUN2QixxQ0FBVzs7SUFDWCxzQ0FBd0I7O0lBQ3hCLHdDQUFjOztJQUNkLHVDQUFpQjs7SUFDakIsc0NBQVk7O0lBQ1osNkNBQXNCOztJQUV0Qiw2Q0FBbUM7O0lBQ25DLDhDQUFvQzs7SUFFeEIsdUNBQTJCOztJQUFFLHNDQUErQjs7SUFBRSx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGFTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9GaWxlIH0gZnJvbSAnLi9leHRyYXMvZmlsZS9GaWxlJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBGSUxFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0ZpbGVJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmNvbnN0IExBWU9VVF9ERUZBVUxUUyA9IHsgb3JkZXI6ICdkZWZhdWx0JywgZG93bmxvYWQ6IHRydWUsIHJlbW92YWJsZTogdHJ1ZSwgbGFiZWxTdHlsZTogJ2RlZmF1bHQnLCBkcmFnZ2FibGU6IGZhbHNlIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmlsZS1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0ZJTEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZmlsZUlucHV0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaW5wdXQtZ3JvdXBcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIiB0eXBlPVwiZmlsZVwiIFtuYW1lXT1cIm5hbWVcIiBbYXR0ci5pZF09XCJuYW1lXCIgKGNoYW5nZSk9XCJjaGVjaygkZXZlbnQpXCIgW2F0dHIubXVsdGlwbGVdPVwibXVsdGlwbGVcIiB0YWJpbmRleD1cIi0xXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiIHR5cGU9XCJmaWxlXCIgW25hbWVdPVwibmFtZVwiIFthdHRyLmlkXT1cIm5hbWVcIiAoY2hhbmdlKT1cImN1c3RvbUNoZWNrKCRldmVudClcIiBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZVwiIHRhYmluZGV4PVwiLTFcIi8+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gW25nU3dpdGNoXT1cImxheW91dE9wdGlvbnMubGFiZWxTdHlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nU3dpdGNoQ2FzZT1cIiduby1ib3gnXCIgW2F0dHIuZm9yXT1cIm5hbWVcIiBjbGFzcz1cIm5vLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48aSBjbGFzcz1cImJoaS1kcm9wem9uZVwiPjwvaT57eyBwbGFjZWhvbGRlciB8fCBsYWJlbHMuY2hvb3NlQUZpbGUgfX0ge3sgbGFiZWxzLm9yIH19IDxzdHJvbmcgY2xhc3M9XCJsaW5rXCI+e3sgbGFiZWxzLmNsaWNrVG9Ccm93c2UgfX08L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ1N3aXRjaERlZmF1bHQgW2F0dHIuZm9yXT1cIm5hbWVcIiBjbGFzcz1cImJveGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBwbGFjZWhvbGRlciB8fCBsYWJlbHMuY2hvb3NlQUZpbGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3sgbGFiZWxzLm9yIH19IDxzdHJvbmcgY2xhc3M9XCJsaW5rXCI+e3sgbGFiZWxzLmNsaWNrVG9Ccm93c2UgfX08L3N0cm9uZz48L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2ZpbGVPdXRwdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1vdXRwdXQtZ3JvdXBcIiBbZHJhZ3VsYV09XCJmaWxlT3V0cHV0QmFnXCIgW2RyYWd1bGFNb2RlbF09XCJmaWxlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWl0ZW1cIiAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1wiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgPGkgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmRyYWdnYWJsZVwiIGNsYXNzPVwiYmhpLW1vdmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJmaWxlLmxpbmtcIj48c3Bhbj48YSBocmVmPVwie3sgZmlsZS5saW5rIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgZmlsZS5uYW1lIHwgZGVjb2RlVVJJIH19PC9hPjwvc3Bhbj48c3BhbiAgKm5nSWY9XCJmaWxlLmRlc2NyaXB0aW9uXCI+fHw8L3NwYW4+PHNwYW4+e3sgZmlsZS5kZXNjcmlwdGlvbiB9fTwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiIWZpbGUubGlua1wiPnt7IGZpbGUubmFtZSB8IGRlY29kZVVSSSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1hY3Rpb25zJ1wiICpuZ0lmPVwiZmlsZS5sb2FkZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kb3dubG9hZFwiIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImljb25cIiBpY29uPVwic2F2ZVwiIChjbGljayk9XCJkb3dubG9hZChmaWxlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1kb3dubG9hZCdcIiB0YWJpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNhYmxlZCAmJiBsYXlvdXRPcHRpb25zLnJlbW92YWJsZVwiIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImljb25cIiBpY29uPVwiY2xvc2VcIiAoY2xpY2spPVwicmVtb3ZlKGZpbGUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLXJlbW92ZSdcIiB0YWJpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImxheW91dE9wdGlvbnMuZWRpdCAmJiAhZGlzYWJsZWRcIiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImVkaXRcIiAoY2xpY2spPVwiY3VzdG9tRWRpdChmaWxlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1lZGl0J1wiIHRhYmluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kb3dubG9hZFwiIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImljb25cIiBpY29uPVwic2F2ZVwiIChjbGljayk9XCJjdXN0b21TYXZlKGZpbGUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWRvd25sb2FkJ1wiIHRhYmluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWRpc2FibGVkXCIgdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiaWNvblwiIGljb249XCJjbG9zZVwiIChjbGljayk9XCJjdXN0b21EZWxldGUoZmlsZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtcmVtb3ZlJ1wiIHRhYmluZGV4PVwiLTFcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG5vdm8tbG9hZGluZyAqbmdJZj1cIiFmaWxlLmxvYWRlZFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+YCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpbGVJbnB1dEVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcpXG4gIGZpbGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnZmlsZU91dHB1dCcpXG4gIGZpbGVPdXRwdXQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXlvdXRPcHRpb25zOiB7XG4gICAgb3JkZXI/OiBzdHJpbmc7XG4gICAgZG93bmxvYWQ/OiBib29sZWFuO1xuICAgIGVkaXQ/OiBib29sZWFuO1xuICAgIGxhYmVsU3R5bGU/OiBzdHJpbmc7XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBjdXN0b21BY3Rpb25zOiBib29sZWFuO1xuICAgIHJlbW92YWJsZT86IGJvb2xlYW47XG4gIH07XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBBcnJheTxhbnk+ID0gW107XG5cbiAgQE91dHB1dCgpXG4gIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50czogQXJyYXk8YW55PiA9IFtdO1xuICBmaWxlczogQXJyYXk8YW55PiA9IFtdO1xuICBtb2RlbDogYW55O1xuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tbWFuZHM6IGFueTtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgdGFyZ2V0OiBhbnk7XG4gIGZpbGVPdXRwdXRCYWc6IHN0cmluZztcblxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZHJhZ3VsYTogTm92b0RyYWd1bGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb21tYW5kcyA9IHtcbiAgICAgIGRyYWdlbnRlcjogdGhpcy5kcmFnRW50ZXJIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkcmFnbGVhdmU6IHRoaXMuZHJhZ0xlYXZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJhZ292ZXI6IHRoaXMuZHJhZ092ZXJIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkcm9wOiB0aGlzLmRyb3BIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcm9wJ10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB0aGlzLmNvbW1hbmRzW3R5cGVdKTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUxheW91dCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZURyYWd1bGEoKTtcbiAgICB0aGlzLnNldEluaXRpYWxGaWxlTGlzdCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2Ryb3AnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHRoaXMuY29tbWFuZHNbdHlwZV0pO1xuICAgIH0pO1xuICAgIGxldCBkcmFndWxhSGFzRmlsZU91dHB1dEJhZyA9IHRoaXMuZHJhZ3VsYS5iYWdzLmxlbmd0aCA+IDAgJiYgdGhpcy5kcmFndWxhLmJhZ3MuZmlsdGVyKCh4KSA9PiB4Lm5hbWUgPT09IHRoaXMuZmlsZU91dHB1dEJhZykubGVuZ3RoID4gMDtcbiAgICBpZiAoZHJhZ3VsYUhhc0ZpbGVPdXRwdXRCYWcpIHtcbiAgICAgIHRoaXMuZHJhZ3VsYS5kZXN0cm95KHRoaXMuZmlsZU91dHB1dEJhZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICB1cGRhdGVMYXlvdXQoKSB7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgTEFZT1VUX0RFRkFVTFRTLCB0aGlzLmxheW91dE9wdGlvbnMpO1xuICAgIHRoaXMuaW5zZXJ0VGVtcGxhdGVzQmFzZWRPbkxheW91dCgpO1xuICB9XG5cbiAgaW5zZXJ0VGVtcGxhdGVzQmFzZWRPbkxheW91dCgpIHtcbiAgICBsZXQgb3JkZXI7XG4gICAgc3dpdGNoICh0aGlzLmxheW91dE9wdGlvbnNbJ29yZGVyJ10pIHtcbiAgICAgIGNhc2UgJ2Rpc3BsYXlGaWxlc0JlbG93JzpcbiAgICAgICAgb3JkZXIgPSBbJ2ZpbGVJbnB1dCcsICdmaWxlT3V0cHV0J107XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgb3JkZXIgPSBbJ2ZpbGVPdXRwdXQnLCAnZmlsZUlucHV0J107XG4gICAgfVxuICAgIG9yZGVyLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpc1t0ZW1wbGF0ZV0sIDApO1xuICAgIH0pO1xuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVEcmFndWxhKCkge1xuICAgIHRoaXMuZmlsZU91dHB1dEJhZyA9IGBmaWxlLW91dHB1dC0ke3RoaXMuZHJhZ3VsYS5iYWdzLmxlbmd0aH1gO1xuICAgIHRoaXMuZHJhZ3VsYS5zZXRPcHRpb25zKHRoaXMuZmlsZU91dHB1dEJhZywge1xuICAgICAgbW92ZXM6IChlbCwgY29udGFpbmVyLCBoYW5kbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0T3B0aW9ucy5kcmFnZ2FibGU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbEZpbGVMaXN0KCkge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmZpbGVzID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBkcmFnRW50ZXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBkcmFnTGVhdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy50YXJnZXQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIG5vLW9wXG4gIH1cblxuICBkcm9wSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSAhPT0gJ0ZpbGVzJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb3B0aW9uczogYW55ID0gdGhpcy5sYXlvdXRPcHRpb25zO1xuICAgIGxldCBmaWxlbGlzdCA9IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICBpZiAob3B0aW9ucy5jdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwbG9hZC5lbWl0KHRoaXMubXVsdGlwbGUgPyBmaWxlbGlzdCA6IFtmaWxlbGlzdFswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3ModGhpcy5tdWx0aXBsZSA/IGZpbGVsaXN0IDogW2ZpbGVsaXN0WzBdXSk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgY2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb2Nlc3MoQXJyYXkuZnJvbShldmVudC50YXJnZXQuZmlsZXMpKTtcbiAgfVxuXG4gIHByb2Nlc3MoZmlsZWxpc3QpIHtcbiAgICBQcm9taXNlLmFsbChmaWxlbGlzdC5tYXAoKGZpbGUpID0+IHRoaXMucmVhZEZpbGUoZmlsZSkpKS50aGVuKChmaWxlcykgPT4ge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKC4uLmZpbGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kZWwgPSB0aGlzLmZpbGVzO1xuICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgZG93bmxvYWQoZmlsZSkge1xuICAgIHdpbmRvdy5vcGVuKGZpbGUuZGF0YVVSTCwgJ19ibGFuaycpO1xuICB9XG5cbiAgcmVtb3ZlKGZpbGUpIHtcbiAgICB0aGlzLmZpbGVzLnNwbGljZSh0aGlzLmZpbGVzLmZpbmRJbmRleCgoZikgPT4gZi5uYW1lID09PSBmaWxlLm5hbWUgJiYgZi5zaXplID09PSBmaWxlLnNpemUpLCAxKTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5maWxlcztcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICByZWFkRmlsZShmaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRmlsZShmaWxlKS5yZWFkKCk7XG4gIH1cblxuICBjdXN0b21FZGl0KGZpbGUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbVNhdmUoZmlsZSkge1xuICAgIHRoaXMuc2F2ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tRGVsZXRlKGZpbGUpIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tQ2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==