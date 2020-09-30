/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => NovoFileInputElement)),
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
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
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
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.element.nativeElement.addEventListener(type, this.commands[type]);
        }));
        this.updateLayout();
        this.initializeDragula();
        this.setInitialFileList();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.element.nativeElement.removeEventListener(type, this.commands[type]);
        }));
        /** @type {?} */
        let dragulaHasFileOutputBag = this.dragula.bags.length > 0 && this.dragula.bags.filter((/**
         * @param {?} x
         * @return {?}
         */
        (x) => x.name === this.fileOutputBag)).length > 0;
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
        order.forEach((/**
         * @param {?} template
         * @return {?}
         */
        (template) => {
            this.container.createEmbeddedView(this[template], 0);
        }));
        return order;
    }
    /**
     * @return {?}
     */
    initializeDragula() {
        this.fileOutputBag = `file-output-${this.dragula.bags.length}`;
        this.dragula.setOptions(this.fileOutputBag, {
            moves: (/**
             * @param {?} el
             * @param {?} container
             * @param {?} handle
             * @return {?}
             */
            (el, container, handle) => {
                return this.layoutOptions.draggable;
            }),
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
     * @param {?} files
     * @return {?}
     */
    validate(files) {
        /** @type {?} */
        let passedValidation = true;
        if (this.layoutOptions.customValidation) {
            this.layoutOptions.customValidation
                .filter((/**
             * @param {?} validation
             * @return {?}
             */
            (validation) => validation.action === 'upload'))
                .forEach((/**
             * @param {?} uploadValidation
             * @return {?}
             */
            (uploadValidation) => {
                passedValidation = uploadValidation.fn(files) && passedValidation;
            }));
        }
        return passedValidation;
    }
    /**
     * @param {?} filelist
     * @return {?}
     */
    process(filelist) {
        if (this.validate(filelist)) {
            Promise.all(filelist.map((/**
             * @param {?} file
             * @return {?}
             */
            (file) => this.readFile(file)))).then((/**
             * @param {?} files
             * @return {?}
             */
            (files) => {
                if (this.multiple) {
                    this.files.push(...files);
                }
                else {
                    this.files = files;
                }
                this.model = this.files;
                this.onModelChange(this.model);
            }));
        }
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
        this.files.splice(this.files.findIndex((/**
         * @param {?} f
         * @return {?}
         */
        (f) => f.name === file.name && f.size === file.size)), 1);
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
        <input
          *ngIf="!layoutOptions.customActions"
          type="file"
          [name]="name"
          [attr.id]="name"
          (change)="check($event)"
          [attr.multiple]="multiple"
          tabindex="-1"
        />
        <input
          *ngIf="layoutOptions.customActions"
          type="file"
          [name]="name"
          [attr.id]="name"
          (change)="customCheck($event)"
          [attr.multiple]="multiple"
          tabindex="-1"
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
    /**
     * @type {?}
     * @private
     */
    NovoFileInputElement.prototype.element;
    /** @type {?} */
    NovoFileInputElement.prototype.labels;
    /**
     * @type {?}
     * @private
     */
    NovoFileInputElement.prototype.dragula;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFJVixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFFWCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7TUFHeEMsbUJBQW1CLEdBQUc7SUFDMUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLEVBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7TUFFSyxlQUFlLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUE4R3RILE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQW9EL0IsWUFBb0IsT0FBbUIsRUFBUyxNQUF3QixFQUFVLE9BQTJCO1FBQXpGLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBekM3RyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGFBQVEsR0FBWSxLQUFLLENBQUM7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OztJQUN2QixxQ0FBVzs7SUFDWCxzQ0FBd0I7O0lBQ3hCLHdDQUFjOztJQUNkLHVDQUFpQjs7SUFDakIsc0NBQVk7O0lBQ1osNkNBQXNCOztJQUV0Qiw2Q0FBbUM7O0lBQ25DLDhDQUFvQzs7Ozs7SUFFeEIsdUNBQTJCOztJQUFFLHNDQUErQjs7Ozs7SUFBRSx1Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGFTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9GaWxlIH0gZnJvbSAnLi9leHRyYXMvZmlsZS9GaWxlJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBGSUxFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0ZpbGVJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmNvbnN0IExBWU9VVF9ERUZBVUxUUyA9IHsgb3JkZXI6ICdkZWZhdWx0JywgZG93bmxvYWQ6IHRydWUsIHJlbW92YWJsZTogdHJ1ZSwgbGFiZWxTdHlsZTogJ2RlZmF1bHQnLCBkcmFnZ2FibGU6IGZhbHNlIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmlsZS1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0ZJTEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI2ZpbGVJbnB1dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWlucHV0LWdyb3VwXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCIgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCIhbGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwibmFtZVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJjaGVjaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwibmFtZVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJjdXN0b21DaGVjaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzZWN0aW9uIFtuZ1N3aXRjaF09XCJsYXlvdXRPcHRpb25zLmxhYmVsU3R5bGVcIj5cbiAgICAgICAgICA8bGFiZWwgKm5nU3dpdGNoQ2FzZT1cIiduby1ib3gnXCIgW2F0dHIuZm9yXT1cIm5hbWVcIiBjbGFzcz1cIm5vLWJveFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktZHJvcHpvbmVcIj48L2k+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19IHt7IGxhYmVscy5vciB9fVxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwibGlua1wiPnt7IGxhYmVscy5jbGlja1RvQnJvd3NlIH19PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCAqbmdTd2l0Y2hEZWZhdWx0IFthdHRyLmZvcl09XCJuYW1lXCIgY2xhc3M9XCJib3hlZFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgID57eyBsYWJlbHMub3IgfX0gPHN0cm9uZyBjbGFzcz1cImxpbmtcIj57eyBsYWJlbHMuY2xpY2tUb0Jyb3dzZSB9fTwvc3Ryb25nPjwvc21hbGxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZmlsZU91dHB1dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW91dHB1dC1ncm91cFwiIFtkcmFndWxhXT1cImZpbGVPdXRwdXRCYWdcIiBbZHJhZ3VsYU1vZGVsXT1cImZpbGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWl0ZW1cIiAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1wiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgIDxpICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kcmFnZ2FibGVcIiBjbGFzcz1cImJoaS1tb3ZlXCI+PC9pPlxuICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImZpbGUubGlua1wiXG4gICAgICAgICAgICA+PHNwYW5cbiAgICAgICAgICAgICAgPjxhIGhyZWY9XCJ7eyBmaWxlLmxpbmsgfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBmaWxlLm5hbWUgfCBkZWNvZGVVUkkgfX08L2E+PC9zcGFuXG4gICAgICAgICAgICA+PHNwYW4gKm5nSWY9XCJmaWxlLmRlc2NyaXB0aW9uXCI+fHw8L3NwYW4+PHNwYW4+e3sgZmlsZS5kZXNjcmlwdGlvbiB9fTwvc3Bhbj48L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIiFmaWxlLmxpbmtcIj57eyBmaWxlLm5hbWUgfCBkZWNvZGVVUkkgfX08L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWFjdGlvbnMnXCIgKm5nSWY9XCJmaWxlLmxvYWRlZFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRvd25sb2FkKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZG93bmxvYWQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgKGxheW91dE9wdGlvbnMucmVtb3ZhYmxlIHx8ICghbGF5b3V0T3B0aW9ucy5yZW1vdmFibGUgJiYgbGF5b3V0T3B0aW9ucy5yZW1vdmFibGVXaGVuTmV3ICYmICFmaWxlLmxpbmspKVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmUoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1yZW1vdmUnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZWRpdCAmJiAhZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21FZGl0KGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZWRpdCdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZG93bmxvYWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInNhdmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21TYXZlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZG93bmxvYWQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3VzdG9tRGVsZXRlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtcmVtb3ZlJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxub3ZvLWxvYWRpbmcgKm5nSWY9XCIhZmlsZS5sb2FkZWRcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmlsZUlucHV0RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JylcbiAgZmlsZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdmaWxlT3V0cHV0JylcbiAgZmlsZU91dHB1dDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheW91dE9wdGlvbnM6IHtcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZWRpdD86IGJvb2xlYW47XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbUFjdGlvbnM6IGJvb2xlYW47XG4gICAgcmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgICBjdXN0b21WYWxpZGF0aW9uPzogeyBhY3Rpb246IHN0cmluZzsgZm46IEZ1bmN0aW9uIH1bXTtcbiAgICByZW1vdmFibGVXaGVuTmV3PzogYm9vbGVhbjtcbiAgfTtcbiAgQElucHV0KClcbiAgdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcblxuICBAT3V0cHV0KClcbiAgZWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB1cGxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGVsZW1lbnRzOiBBcnJheTxhbnk+ID0gW107XG4gIGZpbGVzOiBBcnJheTxhbnk+ID0gW107XG4gIG1vZGVsOiBhbnk7XG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb21tYW5kczogYW55O1xuICB2aXNpYmxlOiBib29sZWFuO1xuICB0YXJnZXQ6IGFueTtcbiAgZmlsZU91dHB1dEJhZzogc3RyaW5nO1xuXG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4ge307XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBkcmFndWxhOiBOb3ZvRHJhZ3VsYVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvbW1hbmRzID0ge1xuICAgICAgZHJhZ2VudGVyOiB0aGlzLmRyYWdFbnRlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyYWdsZWF2ZTogdGhpcy5kcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkcmFnb3ZlcjogdGhpcy5kcmFnT3ZlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyb3A6IHRoaXMuZHJvcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2Ryb3AnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHRoaXMuY29tbWFuZHNbdHlwZV0pO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplRHJhZ3VsYSgpO1xuICAgIHRoaXMuc2V0SW5pdGlhbEZpbGVMaXN0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgdGhpcy5jb21tYW5kc1t0eXBlXSk7XG4gICAgfSk7XG4gICAgbGV0IGRyYWd1bGFIYXNGaWxlT3V0cHV0QmFnID0gdGhpcy5kcmFndWxhLmJhZ3MubGVuZ3RoID4gMCAmJiB0aGlzLmRyYWd1bGEuYmFncy5maWx0ZXIoKHgpID0+IHgubmFtZSA9PT0gdGhpcy5maWxlT3V0cHV0QmFnKS5sZW5ndGggPiAwO1xuICAgIGlmIChkcmFndWxhSGFzRmlsZU91dHB1dEJhZykge1xuICAgICAgdGhpcy5kcmFndWxhLmRlc3Ryb3kodGhpcy5maWxlT3V0cHV0QmFnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZUxheW91dCgpIHtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBMQVlPVVRfREVGQVVMVFMsIHRoaXMubGF5b3V0T3B0aW9ucyk7XG4gICAgdGhpcy5pbnNlcnRUZW1wbGF0ZXNCYXNlZE9uTGF5b3V0KCk7XG4gIH1cblxuICBpbnNlcnRUZW1wbGF0ZXNCYXNlZE9uTGF5b3V0KCkge1xuICAgIGxldCBvcmRlcjtcbiAgICBzd2l0Y2ggKHRoaXMubGF5b3V0T3B0aW9uc1snb3JkZXInXSkge1xuICAgICAgY2FzZSAnZGlzcGxheUZpbGVzQmVsb3cnOlxuICAgICAgICBvcmRlciA9IFsnZmlsZUlucHV0JywgJ2ZpbGVPdXRwdXQnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvcmRlciA9IFsnZmlsZU91dHB1dCcsICdmaWxlSW5wdXQnXTtcbiAgICB9XG4gICAgb3JkZXIuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzW3RlbXBsYXRlXSwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURyYWd1bGEoKSB7XG4gICAgdGhpcy5maWxlT3V0cHV0QmFnID0gYGZpbGUtb3V0cHV0LSR7dGhpcy5kcmFndWxhLmJhZ3MubGVuZ3RofWA7XG4gICAgdGhpcy5kcmFndWxhLnNldE9wdGlvbnModGhpcy5maWxlT3V0cHV0QmFnLCB7XG4gICAgICBtb3ZlczogKGVsLCBjb250YWluZXIsIGhhbmRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRPcHRpb25zLmRyYWdnYWJsZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsRmlsZUxpc3QoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdFbnRlckhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYWdMZWF2ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gbm8tb3BcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdICE9PSAnRmlsZXMnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBvcHRpb25zOiBhbnkgPSB0aGlzLmxheW91dE9wdGlvbnM7XG4gICAgbGV0IGZpbGVsaXN0ID0gQXJyYXkuZnJvbShldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIGlmIChvcHRpb25zLmN1c3RvbUFjdGlvbnMpIHtcbiAgICAgIHRoaXMudXBsb2FkLmVtaXQodGhpcy5tdWx0aXBsZSA/IGZpbGVsaXN0IDogW2ZpbGVsaXN0WzBdXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvY2Vzcyh0aGlzLm11bHRpcGxlID8gZmlsZWxpc3QgOiBbZmlsZWxpc3RbMF1dKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBjaGVjayhldmVudCkge1xuICAgIHRoaXMucHJvY2VzcyhBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5maWxlcykpO1xuICB9XG5cbiAgdmFsaWRhdGUoZmlsZXMpOiBib29sZWFuIHtcbiAgICBsZXQgcGFzc2VkVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgaWYgKHRoaXMubGF5b3V0T3B0aW9ucy5jdXN0b21WYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLmxheW91dE9wdGlvbnMuY3VzdG9tVmFsaWRhdGlvblxuICAgICAgICAuZmlsdGVyKCh2YWxpZGF0aW9uKSA9PiB2YWxpZGF0aW9uLmFjdGlvbiA9PT0gJ3VwbG9hZCcpXG4gICAgICAgIC5mb3JFYWNoKCh1cGxvYWRWYWxpZGF0aW9uKSA9PiB7XG4gICAgICAgICAgcGFzc2VkVmFsaWRhdGlvbiA9IHVwbG9hZFZhbGlkYXRpb24uZm4oZmlsZXMpICYmIHBhc3NlZFZhbGlkYXRpb247XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFzc2VkVmFsaWRhdGlvbjtcbiAgfVxuXG4gIHByb2Nlc3MoZmlsZWxpc3QpIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZShmaWxlbGlzdCkpIHtcbiAgICAgIFByb21pc2UuYWxsKGZpbGVsaXN0Lm1hcCgoZmlsZSkgPT4gdGhpcy5yZWFkRmlsZShmaWxlKSkpLnRoZW4oKGZpbGVzKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgdGhpcy5maWxlcy5wdXNoKC4uLmZpbGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZmlsZXM7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkKGZpbGUpIHtcbiAgICB3aW5kb3cub3BlbihmaWxlLmRhdGFVUkwsICdfYmxhbmsnKTtcbiAgfVxuXG4gIHJlbW92ZShmaWxlKSB7XG4gICAgdGhpcy5maWxlcy5zcGxpY2UodGhpcy5maWxlcy5maW5kSW5kZXgoKGYpID0+IGYubmFtZSA9PT0gZmlsZS5uYW1lICYmIGYuc2l6ZSA9PT0gZmlsZS5zaXplKSwgMSk7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuZmlsZXM7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICB9XG5cbiAgcmVhZEZpbGUoZmlsZSkge1xuICAgIHJldHVybiBuZXcgTm92b0ZpbGUoZmlsZSkucmVhZCgpO1xuICB9XG5cbiAgY3VzdG9tRWRpdChmaWxlKSB7XG4gICAgdGhpcy5lZGl0LmVtaXQoZmlsZSk7XG4gIH1cblxuICBjdXN0b21TYXZlKGZpbGUpIHtcbiAgICB0aGlzLnNhdmUuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbURlbGV0ZShmaWxlKSB7XG4gICAgdGhpcy5kZWxldGUuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbUNoZWNrKGV2ZW50KSB7XG4gICAgdGhpcy51cGxvYWQuZW1pdChldmVudCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=