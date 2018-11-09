/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// NG2
import { Component, Input, ElementRef, forwardRef, ViewChild, ViewContainerRef, TemplateRef, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { NovoDragulaService } from '../../../../elements/dragula/DragulaService';
import { NovoFile } from './extras/file/File';
// Value accessor for the component (supports ngModel)
/** @type {?} */
var FILE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoFileInputElement; }),
    multi: true,
};
/** @type {?} */
var LAYOUT_DEFAULTS = { order: 'default', download: true, removable: true, labelStyle: 'default', draggable: false };
var NovoFileInputElement = /** @class */ (function () {
    function NovoFileInputElement(element, labels, dragula) {
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
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
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
    NovoFileInputElement.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(function (type) {
            _this.element.nativeElement.addEventListener(type, _this.commands[type]);
        });
        this.updateLayout();
        this.initializeDragula();
        this.setInitialFileList();
    };
    /**
     * @return {?}
     */
    NovoFileInputElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(function (type) {
            _this.element.nativeElement.removeEventListener(type, _this.commands[type]);
        });
        /** @type {?} */
        var dragulaHasFileOutputBag = this.dragula.bags.length > 0 && this.dragula.bags.filter(function (x) { return x.name === _this.fileOutputBag; }).length > 0;
        if (dragulaHasFileOutputBag) {
            this.dragula.destroy(this.fileOutputBag);
        }
    };
    /**
     * @param {?=} changes
     * @return {?}
     */
    NovoFileInputElement.prototype.ngOnChanges = /**
     * @param {?=} changes
     * @return {?}
     */
    function (changes) {
        this.onModelChange(this.model);
    };
    /**
     * @return {?}
     */
    NovoFileInputElement.prototype.updateLayout = /**
     * @return {?}
     */
    function () {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.insertTemplatesBasedOnLayout();
    };
    /**
     * @return {?}
     */
    NovoFileInputElement.prototype.insertTemplatesBasedOnLayout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var order;
        switch (this.layoutOptions['order']) {
            case 'displayFilesBelow':
                order = ['fileInput', 'fileOutput'];
                break;
            default:
                order = ['fileOutput', 'fileInput'];
        }
        order.forEach(function (template) {
            _this.container.createEmbeddedView(_this[template], 0);
        });
        return order;
    };
    /**
     * @return {?}
     */
    NovoFileInputElement.prototype.initializeDragula = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.fileOutputBag = "file-output-" + this.dragula.bags.length;
        this.dragula.setOptions(this.fileOutputBag, {
            moves: function (el, container, handle) {
                return _this.layoutOptions.draggable;
            },
        });
    };
    /**
     * @return {?}
     */
    NovoFileInputElement.prototype.setInitialFileList = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.files = this.value;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoFileInputElement.prototype.dragEnterHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        this.target = event.target;
        this.active = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoFileInputElement.prototype.dragLeaveHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (this.target === event.target) {
            this.active = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoFileInputElement.prototype.dragOverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        // no-op
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoFileInputElement.prototype.dropHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        this.visible = false;
        if (event.dataTransfer.types[0] !== 'Files') {
            return;
        }
        /** @type {?} */
        var options = this.layoutOptions;
        /** @type {?} */
        var filelist = Array.from(event.dataTransfer.files);
        if (options.customActions) {
            this.upload.emit(this.multiple ? filelist : [filelist[0]]);
        }
        else {
            this.process(this.multiple ? filelist : [filelist[0]]);
        }
        this.active = false;
    };
    /**
     * @param {?} model
     * @return {?}
     */
    NovoFileInputElement.prototype.writeValue = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        this.model = model;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoFileInputElement.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NovoFileInputElement.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoFileInputElement.prototype.check = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.process(Array.from(event.target.files));
    };
    /**
     * @param {?} filelist
     * @return {?}
     */
    NovoFileInputElement.prototype.process = /**
     * @param {?} filelist
     * @return {?}
     */
    function (filelist) {
        var _this = this;
        Promise.all(filelist.map(function (file) { return _this.readFile(file); })).then(function (files) {
            var _a;
            if (_this.multiple) {
                (_a = _this.files).push.apply(_a, tslib_1.__spread(files));
            }
            else {
                _this.files = files;
            }
            _this.model = _this.files;
            _this.onModelChange(_this.model);
        });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NovoFileInputElement.prototype.download = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        window.open(file.dataURL, '_blank');
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NovoFileInputElement.prototype.remove = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.files.splice(this.files.findIndex(function (f) { return f.name === file.name && f.size === file.size; }), 1);
        this.model = this.files;
        this.onModelChange(this.model);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NovoFileInputElement.prototype.readFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return new NovoFile(file).read();
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NovoFileInputElement.prototype.customEdit = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.edit.emit(file);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NovoFileInputElement.prototype.customSave = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.save.emit(file);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NovoFileInputElement.prototype.customDelete = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.delete.emit(file);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NovoFileInputElement.prototype.customCheck = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.upload.emit(event);
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NovoFileInputElement.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.disabled = disabled;
    };
    NovoFileInputElement.decorators = [
        { type: Component, args: [{
                    selector: 'novo-file-input',
                    providers: [FILE_VALUE_ACCESSOR],
                    template: "\n        <div #container></div>\n        <ng-template #fileInput>\n            <div class=\"file-input-group\" [class.disabled]=\"disabled\" [class.active]=\"active\">\n                <input *ngIf=\"!layoutOptions.customActions\" type=\"file\" [name]=\"name\" [attr.id]=\"name\" (change)=\"check($event)\" [attr.multiple]=\"multiple\" tabindex=\"-1\"/>\n                <input *ngIf=\"layoutOptions.customActions\" type=\"file\" [name]=\"name\" [attr.id]=\"name\" (change)=\"customCheck($event)\" [attr.multiple]=\"multiple\" tabindex=\"-1\"/>\n                <section [ngSwitch]=\"layoutOptions.labelStyle\">\n                    <label *ngSwitchCase=\"'no-box'\" [attr.for]=\"name\" class=\"no-box\">\n                        <div><i class=\"bhi-dropzone\"></i>{{ placeholder || labels.chooseAFile }} {{ labels.or }} <strong class=\"link\">{{ labels.clickToBrowse }}</strong></div>\n                    </label>\n                    <label *ngSwitchDefault [attr.for]=\"name\" class=\"boxed\">\n                        <span>{{ placeholder || labels.chooseAFile }}</span>\n                        <small>{{ labels.or }} <strong class=\"link\">{{ labels.clickToBrowse }}</strong></small>\n                    </label>\n                </section>\n            </div>\n        </ng-template>\n        <ng-template #fileOutput>\n            <div class=\"file-output-group\" [dragula]=\"fileOutputBag\" [dragulaModel]=\"files\">\n                <div class=\"file-item\" *ngFor=\"let file of files\" [class.disabled]=\"disabled\">\n                  <i *ngIf=\"layoutOptions.draggable\" class=\"bhi-move\"></i>\n                  <label *ngIf=\"file.link\"><span><a href=\"{{ file.link }}\" target=\"_blank\">{{ file.name | decodeURI }}</a></span><span  *ngIf=\"file.description\">||</span><span>{{ file.description }}</span></label>\n                  <label *ngIf=\"!file.link\">{{ file.name | decodeURI }}</label>\n                  <div class=\"actions\" [attr.data-automation-id]=\"'file-actions'\" *ngIf=\"file.loaded\">\n                    <div *ngIf=\"!layoutOptions.customActions\">\n                      <button *ngIf=\"layoutOptions.download\" type=\"button\" theme=\"icon\" icon=\"save\" (click)=\"download(file)\" [attr.data-automation-id]=\"'file-download'\" tabindex=\"-1\"></button>\n                      <button *ngIf=\"!disabled && layoutOptions.removable\" type=\"button\" theme=\"icon\" icon=\"close\" (click)=\"remove(file)\" [attr.data-automation-id]=\"'file-remove'\" tabindex=\"-1\"></button>\n                    </div>\n                    <div *ngIf=\"layoutOptions.customActions\">\n                      <button *ngIf=\"layoutOptions.edit && !disabled\" type=\"button\" theme=\"icon\" icon=\"edit\" (click)=\"customEdit(file)\" [attr.data-automation-id]=\"'file-edit'\" tabindex=\"-1\"></button>\n                      <button *ngIf=\"layoutOptions.download\" type=\"button\" theme=\"icon\" icon=\"save\" (click)=\"customSave(file)\" [attr.data-automation-id]=\"'file-download'\" tabindex=\"-1\"></button>\n                      <button *ngIf=\"!disabled\" type=\"button\" theme=\"icon\" icon=\"close\" (click)=\"customDelete(file)\" [attr.data-automation-id]=\"'file-remove'\" tabindex=\"-1\"></button>\n                    </div>\n                  </div>\n                    <novo-loading *ngIf=\"!file.loaded\"></novo-loading>\n                </div>\n            </div>\n        </ng-template>"
                }] }
    ];
    /** @nocollapse */
    NovoFileInputElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: NovoDragulaService }
    ]; };
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
    return NovoFileInputElement;
}());
export { NovoFileInputElement };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBSVYsU0FBUyxFQUNULGdCQUFnQixFQUNoQixXQUFXLEVBRVgsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0lBR3hDLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7SUFFSyxlQUFlLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFFdEg7SUE0RkUsOEJBQW9CLE9BQW1CLEVBQVMsTUFBd0IsRUFBVSxPQUEyQjtRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQXZDN0csYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBYzFCLFVBQUssR0FBZSxF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QUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ2hDLFFBQVEsRUFBRSx5MkdBcUNXO2lCQUN0Qjs7OztnQkFwRUMsVUFBVTtnQkFjSCxnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjs7OzRCQXVEeEIsU0FBUyxTQUFDLFdBQVc7NkJBRXJCLFNBQVMsU0FBQyxZQUFZOzRCQUV0QixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFO3VCQUdqRCxLQUFLOzJCQUVMLEtBQUs7MkJBRUwsS0FBSzs4QkFFTCxLQUFLO2dDQUVMLEtBQUs7d0JBVUwsS0FBSzt1QkFHTCxNQUFNO3VCQUVOLE1BQU07eUJBRU4sTUFBTTt5QkFFTixNQUFNOztJQWtMVCwyQkFBQztDQUFBLEFBL1BELElBK1BDO1NBck5ZLG9CQUFvQjs7O0lBQy9CLHlDQUM0Qjs7SUFDNUIsMENBQzZCOztJQUM3Qix5Q0FDNEI7O0lBRTVCLG9DQUNhOztJQUNiLHdDQUMwQjs7SUFDMUIsd0NBQzBCOztJQUMxQiwyQ0FDb0I7O0lBQ3BCLDZDQVNFOztJQUNGLHFDQUN1Qjs7SUFFdkIsb0NBQzZDOztJQUM3QyxvQ0FDNkM7O0lBQzdDLHNDQUMrQzs7SUFDL0Msc0NBQytDOztJQUUvQyx3Q0FBMEI7O0lBQzFCLHFDQUF1Qjs7SUFDdkIscUNBQVc7O0lBQ1gsc0NBQXdCOztJQUN4Qix3Q0FBYzs7SUFDZCx1Q0FBaUI7O0lBQ2pCLHNDQUFZOztJQUNaLDZDQUFzQjs7SUFFdEIsNkNBQW1DOztJQUNuQyw4Q0FBb0M7O0lBRXhCLHVDQUEyQjs7SUFBRSxzQ0FBK0I7O0lBQUUsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRmlsZSB9IGZyb20gJy4vZXh0cmFzL2ZpbGUvRmlsZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgRklMRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9GaWxlSW5wdXRFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5jb25zdCBMQVlPVVRfREVGQVVMVFMgPSB7IG9yZGVyOiAnZGVmYXVsdCcsIGRvd25sb2FkOiB0cnVlLCByZW1vdmFibGU6IHRydWUsIGxhYmVsU3R5bGU6ICdkZWZhdWx0JywgZHJhZ2dhYmxlOiBmYWxzZSB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpbGUtaW5wdXQnLFxuICBwcm92aWRlcnM6IFtGSUxFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICAgICAgICA8bmctdGVtcGxhdGUgI2ZpbGVJbnB1dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWlucHV0LWdyb3VwXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCIgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCIhbGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCIgdHlwZT1cImZpbGVcIiBbbmFtZV09XCJuYW1lXCIgW2F0dHIuaWRdPVwibmFtZVwiIChjaGFuZ2UpPVwiY2hlY2soJGV2ZW50KVwiIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlXCIgdGFiaW5kZXg9XCItMVwiLz5cbiAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIiB0eXBlPVwiZmlsZVwiIFtuYW1lXT1cIm5hbWVcIiBbYXR0ci5pZF09XCJuYW1lXCIgKGNoYW5nZSk9XCJjdXN0b21DaGVjaygkZXZlbnQpXCIgW2F0dHIubXVsdGlwbGVdPVwibXVsdGlwbGVcIiB0YWJpbmRleD1cIi0xXCIvPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIFtuZ1N3aXRjaF09XCJsYXlvdXRPcHRpb25zLmxhYmVsU3R5bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ1N3aXRjaENhc2U9XCInbm8tYm94J1wiIFthdHRyLmZvcl09XCJuYW1lXCIgY2xhc3M9XCJuby1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGkgY2xhc3M9XCJiaGktZHJvcHpvbmVcIj48L2k+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19IHt7IGxhYmVscy5vciB9fSA8c3Ryb25nIGNsYXNzPVwibGlua1wiPnt7IGxhYmVscy5jbGlja1RvQnJvd3NlIH19PC9zdHJvbmc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdTd2l0Y2hEZWZhdWx0IFthdHRyLmZvcl09XCJuYW1lXCIgY2xhc3M9XCJib3hlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPnt7IGxhYmVscy5vciB9fSA8c3Ryb25nIGNsYXNzPVwibGlua1wiPnt7IGxhYmVscy5jbGlja1RvQnJvd3NlIH19PC9zdHJvbmc+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNmaWxlT3V0cHV0PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtb3V0cHV0LWdyb3VwXCIgW2RyYWd1bGFdPVwiZmlsZU91dHB1dEJhZ1wiIFtkcmFndWxhTW9kZWxdPVwiZmlsZXNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1pdGVtXCIgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXNcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxpICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kcmFnZ2FibGVcIiBjbGFzcz1cImJoaS1tb3ZlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiZmlsZS5saW5rXCI+PHNwYW4+PGEgaHJlZj1cInt7IGZpbGUubGluayB9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7IGZpbGUubmFtZSB8IGRlY29kZVVSSSB9fTwvYT48L3NwYW4+PHNwYW4gICpuZ0lmPVwiZmlsZS5kZXNjcmlwdGlvblwiPnx8PC9zcGFuPjxzcGFuPnt7IGZpbGUuZGVzY3JpcHRpb24gfX08L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIiFmaWxlLmxpbmtcIj57eyBmaWxlLm5hbWUgfCBkZWNvZGVVUkkgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtYWN0aW9ucydcIiAqbmdJZj1cImZpbGUubG9hZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImxheW91dE9wdGlvbnMuZG93bmxvYWRcIiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cInNhdmVcIiAoY2xpY2spPVwiZG93bmxvYWQoZmlsZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZG93bmxvYWQnXCIgdGFiaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhZGlzYWJsZWQgJiYgbGF5b3V0T3B0aW9ucy5yZW1vdmFibGVcIiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cImNsb3NlXCIgKGNsaWNrKT1cInJlbW92ZShmaWxlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1yZW1vdmUnXCIgdGFiaW5kZXg9XCItMVwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJsYXlvdXRPcHRpb25zLmVkaXQgJiYgIWRpc2FibGVkXCIgdHlwZT1cImJ1dHRvblwiIHRoZW1lPVwiaWNvblwiIGljb249XCJlZGl0XCIgKGNsaWNrKT1cImN1c3RvbUVkaXQoZmlsZSlcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZWRpdCdcIiB0YWJpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImxheW91dE9wdGlvbnMuZG93bmxvYWRcIiB0eXBlPVwiYnV0dG9uXCIgdGhlbWU9XCJpY29uXCIgaWNvbj1cInNhdmVcIiAoY2xpY2spPVwiY3VzdG9tU2F2ZShmaWxlKVwiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1kb3dubG9hZCdcIiB0YWJpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFkaXNhYmxlZFwiIHR5cGU9XCJidXR0b25cIiB0aGVtZT1cImljb25cIiBpY29uPVwiY2xvc2VcIiAoY2xpY2spPVwiY3VzdG9tRGVsZXRlKGZpbGUpXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLXJlbW92ZSdcIiB0YWJpbmRleD1cIi0xXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxub3ZvLWxvYWRpbmcgKm5nSWY9XCIhZmlsZS5sb2FkZWRcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLXRlbXBsYXRlPmAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWxlSW5wdXRFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKVxuICBmaWxlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVPdXRwdXQnKVxuICBmaWxlT3V0cHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczoge1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgY3VzdG9tQWN0aW9uczogYm9vbGVhbjtcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICB9O1xuICBASW5wdXQoKVxuICB2YWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZWxlbWVudHM6IEFycmF5PGFueT4gPSBbXTtcbiAgZmlsZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgbW9kZWw6IGFueTtcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbW1hbmRzOiBhbnk7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIHRhcmdldDogYW55O1xuICBmaWxlT3V0cHV0QmFnOiBzdHJpbmc7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGRyYWd1bGE6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29tbWFuZHMgPSB7XG4gICAgICBkcmFnZW50ZXI6IHRoaXMuZHJhZ0VudGVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJhZ2xlYXZlOiB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyYWdvdmVyOiB0aGlzLmRyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJvcDogdGhpcy5kcm9wSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgdGhpcy5jb21tYW5kc1t0eXBlXSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVEcmFndWxhKCk7XG4gICAgdGhpcy5zZXRJbml0aWFsRmlsZUxpc3QoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcm9wJ10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCB0aGlzLmNvbW1hbmRzW3R5cGVdKTtcbiAgICB9KTtcbiAgICBsZXQgZHJhZ3VsYUhhc0ZpbGVPdXRwdXRCYWcgPSB0aGlzLmRyYWd1bGEuYmFncy5sZW5ndGggPiAwICYmIHRoaXMuZHJhZ3VsYS5iYWdzLmZpbHRlcigoeCkgPT4geC5uYW1lID09PSB0aGlzLmZpbGVPdXRwdXRCYWcpLmxlbmd0aCA+IDA7XG4gICAgaWYgKGRyYWd1bGFIYXNGaWxlT3V0cHV0QmFnKSB7XG4gICAgICB0aGlzLmRyYWd1bGEuZGVzdHJveSh0aGlzLmZpbGVPdXRwdXRCYWcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICB9XG5cbiAgdXBkYXRlTGF5b3V0KCkge1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIExBWU9VVF9ERUZBVUxUUywgdGhpcy5sYXlvdXRPcHRpb25zKTtcbiAgICB0aGlzLmluc2VydFRlbXBsYXRlc0Jhc2VkT25MYXlvdXQoKTtcbiAgfVxuXG4gIGluc2VydFRlbXBsYXRlc0Jhc2VkT25MYXlvdXQoKSB7XG4gICAgbGV0IG9yZGVyO1xuICAgIHN3aXRjaCAodGhpcy5sYXlvdXRPcHRpb25zWydvcmRlciddKSB7XG4gICAgICBjYXNlICdkaXNwbGF5RmlsZXNCZWxvdyc6XG4gICAgICAgIG9yZGVyID0gWydmaWxlSW5wdXQnLCAnZmlsZU91dHB1dCddO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9yZGVyID0gWydmaWxlT3V0cHV0JywgJ2ZpbGVJbnB1dCddO1xuICAgIH1cbiAgICBvcmRlci5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXNbdGVtcGxhdGVdLCAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cblxuICBpbml0aWFsaXplRHJhZ3VsYSgpIHtcbiAgICB0aGlzLmZpbGVPdXRwdXRCYWcgPSBgZmlsZS1vdXRwdXQtJHt0aGlzLmRyYWd1bGEuYmFncy5sZW5ndGh9YDtcbiAgICB0aGlzLmRyYWd1bGEuc2V0T3B0aW9ucyh0aGlzLmZpbGVPdXRwdXRCYWcsIHtcbiAgICAgIG1vdmVzOiAoZWwsIGNvbnRhaW5lciwgaGFuZGxlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dE9wdGlvbnMuZHJhZ2dhYmxlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxGaWxlTGlzdCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5maWxlcyA9IHRoaXMudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZHJhZ0VudGVySGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZHJhZ0xlYXZlSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMudGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBuby1vcFxuICB9XG5cbiAgZHJvcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gIT09ICdGaWxlcycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHRoaXMubGF5b3V0T3B0aW9ucztcbiAgICBsZXQgZmlsZWxpc3QgPSBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgaWYgKG9wdGlvbnMuY3VzdG9tQWN0aW9ucykge1xuICAgICAgdGhpcy51cGxvYWQuZW1pdCh0aGlzLm11bHRpcGxlID8gZmlsZWxpc3QgOiBbZmlsZWxpc3RbMF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzKHRoaXMubXVsdGlwbGUgPyBmaWxlbGlzdCA6IFtmaWxlbGlzdFswXV0pO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGNoZWNrKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9jZXNzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKSk7XG4gIH1cblxuICBwcm9jZXNzKGZpbGVsaXN0KSB7XG4gICAgUHJvbWlzZS5hbGwoZmlsZWxpc3QubWFwKChmaWxlKSA9PiB0aGlzLnJlYWRGaWxlKGZpbGUpKSkudGhlbigoZmlsZXMpID0+IHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuZmlsZXMucHVzaCguLi5maWxlcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgICB9XG4gICAgICB0aGlzLm1vZGVsID0gdGhpcy5maWxlcztcbiAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRvd25sb2FkKGZpbGUpIHtcbiAgICB3aW5kb3cub3BlbihmaWxlLmRhdGFVUkwsICdfYmxhbmsnKTtcbiAgfVxuXG4gIHJlbW92ZShmaWxlKSB7XG4gICAgdGhpcy5maWxlcy5zcGxpY2UodGhpcy5maWxlcy5maW5kSW5kZXgoKGYpID0+IGYubmFtZSA9PT0gZmlsZS5uYW1lICYmIGYuc2l6ZSA9PT0gZmlsZS5zaXplKSwgMSk7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuZmlsZXM7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICB9XG5cbiAgcmVhZEZpbGUoZmlsZSkge1xuICAgIHJldHVybiBuZXcgTm92b0ZpbGUoZmlsZSkucmVhZCgpO1xuICB9XG5cbiAgY3VzdG9tRWRpdChmaWxlKSB7XG4gICAgdGhpcy5lZGl0LmVtaXQoZmlsZSk7XG4gIH1cblxuICBjdXN0b21TYXZlKGZpbGUpIHtcbiAgICB0aGlzLnNhdmUuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbURlbGV0ZShmaWxlKSB7XG4gICAgdGhpcy5kZWxldGUuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbUNoZWNrKGV2ZW50KSB7XG4gICAgdGhpcy51cGxvYWQuZW1pdChldmVudCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=