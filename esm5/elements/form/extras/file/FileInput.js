/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/extras/file/FileInput.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return NovoFileInputElement; })),
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
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
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
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.element.nativeElement.addEventListener(type, _this.commands[type]);
        }));
        this.updateLayout();
        this.initializeDragula();
        this.setInitialFileList();
        this.dataFeatureId = this.dataFeatureId ? this.dataFeatureId : this.name;
    };
    /**
     * @return {?}
     */
    NovoFileInputElement.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.element.nativeElement.removeEventListener(type, _this.commands[type]);
        }));
        /** @type {?} */
        var dragulaHasFileOutputBag = this.dragula.bags.length > 0 && this.dragula.bags.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.name === _this.fileOutputBag; })).length > 0;
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
        order.forEach((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.container.createEmbeddedView(_this[template], 0);
        }));
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
            moves: (/**
             * @param {?} el
             * @param {?} container
             * @param {?} handle
             * @return {?}
             */
            function (el, container, handle) {
                return _this.layoutOptions.draggable;
            }),
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
     * @param {?} files
     * @return {?}
     */
    NovoFileInputElement.prototype.validate = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        /** @type {?} */
        var passedValidation = true;
        if (this.layoutOptions.customValidation) {
            this.layoutOptions.customValidation
                .filter((/**
             * @param {?} validation
             * @return {?}
             */
            function (validation) { return validation.action === 'upload'; }))
                .forEach((/**
             * @param {?} uploadValidation
             * @return {?}
             */
            function (uploadValidation) {
                passedValidation = uploadValidation.fn(files) && passedValidation;
            }));
        }
        return passedValidation;
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
        if (this.validate(filelist)) {
            Promise.all(filelist.map((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return _this.readFile(file); }))).then((/**
             * @param {?} files
             * @return {?}
             */
            function (files) {
                var _a;
                if (_this.multiple) {
                    (_a = _this.files).push.apply(_a, tslib_1.__spread(files));
                }
                else {
                    _this.files = files;
                }
                _this.model = _this.files;
                _this.onModelChange(_this.model);
            }));
        }
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
        this.files.splice(this.files.findIndex((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.name === file.name && f.size === file.size; })), 1);
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
                    template: "\n    <div #container></div>\n    <ng-template #fileInput>\n      <div class=\"file-input-group\" [class.disabled]=\"disabled\" [class.active]=\"active\">\n        <input\n          *ngIf=\"!layoutOptions.customActions\"\n          type=\"file\"\n          [name]=\"name\"\n          [attr.id]=\"name\"\n          (change)=\"check($event)\"\n          [attr.multiple]=\"multiple\"\n          tabindex=\"-1\"\n          [attr.data-feature-id]=\"dataFeatureId\"\n        />\n        <input\n          *ngIf=\"layoutOptions.customActions\"\n          type=\"file\"\n          [name]=\"name\"\n          [attr.id]=\"name\"\n          (change)=\"customCheck($event)\"\n          [attr.multiple]=\"multiple\"\n          tabindex=\"-1\"\n          [attr.data-feature-id]=\"dataFeatureId\"\n        />\n        <section [ngSwitch]=\"layoutOptions.labelStyle\">\n          <label *ngSwitchCase=\"'no-box'\" [attr.for]=\"name\" class=\"no-box\">\n            <div>\n              <i class=\"bhi-dropzone\"></i>{{ placeholder || labels.chooseAFile }} {{ labels.or }}\n              <strong class=\"link\">{{ labels.clickToBrowse }}</strong>\n            </div>\n          </label>\n          <label *ngSwitchDefault [attr.for]=\"name\" class=\"boxed\">\n            <span>{{ placeholder || labels.chooseAFile }}</span>\n            <small\n              >{{ labels.or }} <strong class=\"link\">{{ labels.clickToBrowse }}</strong></small\n            >\n          </label>\n        </section>\n      </div>\n    </ng-template>\n    <ng-template #fileOutput>\n      <div class=\"file-output-group\" [dragula]=\"fileOutputBag\" [dragulaModel]=\"files\">\n        <div class=\"file-item\" *ngFor=\"let file of files\" [class.disabled]=\"disabled\">\n          <i *ngIf=\"layoutOptions.draggable\" class=\"bhi-move\"></i>\n          <label *ngIf=\"file.link\"\n            ><span\n              ><a href=\"{{ file.link }}\" target=\"_blank\">{{ file.name | decodeURI }}</a></span\n            ><span *ngIf=\"file.description\">||</span><span>{{ file.description }}</span></label\n          >\n          <label *ngIf=\"!file.link\">{{ file.name | decodeURI }}</label>\n          <div class=\"actions\" [attr.data-automation-id]=\"'file-actions'\" *ngIf=\"file.loaded\">\n            <div *ngIf=\"!layoutOptions.customActions\">\n              <button\n                *ngIf=\"layoutOptions.download\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"save\"\n                (click)=\"download(file)\"\n                [attr.data-automation-id]=\"'file-download'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"!disabled && (layoutOptions.removable || (!layoutOptions.removable && layoutOptions.removableWhenNew && !file.link))\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"close\"\n                (click)=\"remove(file)\"\n                [attr.data-automation-id]=\"'file-remove'\"\n                tabindex=\"-1\"\n              ></button>\n            </div>\n            <div *ngIf=\"layoutOptions.customActions\">\n              <button\n                *ngIf=\"layoutOptions.edit && !disabled\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"edit\"\n                (click)=\"customEdit(file)\"\n                [attr.data-automation-id]=\"'file-edit'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"layoutOptions.download\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"save\"\n                (click)=\"customSave(file)\"\n                [attr.data-automation-id]=\"'file-download'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"!disabled\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"close\"\n                (click)=\"customDelete(file)\"\n                [attr.data-automation-id]=\"'file-remove'\"\n                tabindex=\"-1\"\n              ></button>\n            </div>\n          </div>\n          <novo-loading *ngIf=\"!file.loaded\"></novo-loading>\n        </div>\n      </div>\n    </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    NovoFileInputElement.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NovoLabelService },
        { type: NovoDragulaService }
    ]; };
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
    NovoFileInputElement.prototype.dataFeatureId;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsVUFBVSxFQUlWLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUVYLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztJQUd4QyxtQkFBbUIsR0FBRztJQUMxQixPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsb0JBQW9CLEVBQXBCLENBQW9CLEVBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7SUFFSyxlQUFlLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUU7QUFFdEg7SUFvS0UsOEJBQW9CLE9BQW1CLEVBQVMsTUFBd0IsRUFBVSxPQUEyQjtRQUF6RixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQTNDN0csYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBZ0IxQixVQUFLLEdB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MkJBRUwsS0FBSzsyQkFFTCxLQUFLOzhCQUVMLEtBQUs7Z0NBRUwsS0FBSzt3QkFZTCxLQUFLO2dDQUVMLEtBQUs7dUJBR0wsTUFBTTt1QkFFTixNQUFNO3lCQUVOLE1BQU07eUJBRU4sTUFBTTs7SUFpTVQsMkJBQUM7Q0FBQSxBQXRWRCxJQXNWQztTQXhPWSxvQkFBb0I7OztJQUMvQix5Q0FDNEI7O0lBQzVCLDBDQUM2Qjs7SUFDN0IseUNBQzRCOztJQUU1QixvQ0FDYTs7SUFDYix3Q0FDMEI7O0lBQzFCLHdDQUMwQjs7SUFDMUIsMkNBQ29COztJQUNwQiw2Q0FXRTs7SUFDRixxQ0FDdUI7O0lBQ3ZCLDZDQUNzQjs7SUFFdEIsb0NBQzZDOztJQUM3QyxvQ0FDNkM7O0lBQzdDLHNDQUMrQzs7SUFDL0Msc0NBQytDOztJQUUvQyx3Q0FBMEI7O0lBQzFCLHFDQUF1Qjs7SUFDdkIscUNBQVc7O0lBQ1gsc0NBQXdCOztJQUN4Qix3Q0FBYzs7SUFDZCx1Q0FBaUI7O0lBQ2pCLHNDQUFZOztJQUNaLDZDQUFzQjs7SUFFdEIsNkNBQW9DOztJQUNwQyw4Q0FBcUM7Ozs7O0lBRXpCLHVDQUEyQjs7SUFBRSxzQ0FBK0I7Ozs7O0lBQUUsdUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTkcyXG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25DaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFRlbXBsYXRlUmVmLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRmlsZSB9IGZyb20gJy4vZXh0cmFzL2ZpbGUvRmlsZSc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgRklMRV9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9GaWxlSW5wdXRFbGVtZW50KSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5jb25zdCBMQVlPVVRfREVGQVVMVFMgPSB7IG9yZGVyOiAnZGVmYXVsdCcsIGRvd25sb2FkOiB0cnVlLCByZW1vdmFibGU6IHRydWUsIGxhYmVsU3R5bGU6ICdkZWZhdWx0JywgZHJhZ2dhYmxlOiBmYWxzZSB9O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdub3ZvLWZpbGUtaW5wdXQnLFxuICBwcm92aWRlcnM6IFtGSUxFX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICNjb250YWluZXI+PC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNmaWxlSW5wdXQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1pbnB1dC1ncm91cFwiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwiIWxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICAgIFthdHRyLmlkXT1cIm5hbWVcIlxuICAgICAgICAgIChjaGFuZ2UpPVwiY2hlY2soJGV2ZW50KVwiXG4gICAgICAgICAgW2F0dHIubXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJkYXRhRmVhdHVyZUlkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAoY2hhbmdlKT1cImN1c3RvbUNoZWNrKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiZGF0YUZlYXR1cmVJZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzZWN0aW9uIFtuZ1N3aXRjaF09XCJsYXlvdXRPcHRpb25zLmxhYmVsU3R5bGVcIj5cbiAgICAgICAgICA8bGFiZWwgKm5nU3dpdGNoQ2FzZT1cIiduby1ib3gnXCIgW2F0dHIuZm9yXT1cIm5hbWVcIiBjbGFzcz1cIm5vLWJveFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaGktZHJvcHpvbmVcIj48L2k+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19IHt7IGxhYmVscy5vciB9fVxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwibGlua1wiPnt7IGxhYmVscy5jbGlja1RvQnJvd3NlIH19PC9zdHJvbmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCAqbmdTd2l0Y2hEZWZhdWx0IFthdHRyLmZvcl09XCJuYW1lXCIgY2xhc3M9XCJib3hlZFwiPlxuICAgICAgICAgICAgPHNwYW4+e3sgcGxhY2Vob2xkZXIgfHwgbGFiZWxzLmNob29zZUFGaWxlIH19PC9zcGFuPlxuICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgID57eyBsYWJlbHMub3IgfX0gPHN0cm9uZyBjbGFzcz1cImxpbmtcIj57eyBsYWJlbHMuY2xpY2tUb0Jyb3dzZSB9fTwvc3Ryb25nPjwvc21hbGxcbiAgICAgICAgICAgID5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSAjZmlsZU91dHB1dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW91dHB1dC1ncm91cFwiIFtkcmFndWxhXT1cImZpbGVPdXRwdXRCYWdcIiBbZHJhZ3VsYU1vZGVsXT1cImZpbGVzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWl0ZW1cIiAqbmdGb3I9XCJsZXQgZmlsZSBvZiBmaWxlc1wiIFtjbGFzcy5kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgIDxpICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kcmFnZ2FibGVcIiBjbGFzcz1cImJoaS1tb3ZlXCI+PC9pPlxuICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImZpbGUubGlua1wiXG4gICAgICAgICAgICA+PHNwYW5cbiAgICAgICAgICAgICAgPjxhIGhyZWY9XCJ7eyBmaWxlLmxpbmsgfX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57eyBmaWxlLm5hbWUgfCBkZWNvZGVVUkkgfX08L2E+PC9zcGFuXG4gICAgICAgICAgICA+PHNwYW4gKm5nSWY9XCJmaWxlLmRlc2NyaXB0aW9uXCI+fHw8L3NwYW4+PHNwYW4+e3sgZmlsZS5kZXNjcmlwdGlvbiB9fTwvc3Bhbj48L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIiFmaWxlLmxpbmtcIj57eyBmaWxlLm5hbWUgfCBkZWNvZGVVUkkgfX08L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb25zXCIgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWFjdGlvbnMnXCIgKm5nSWY9XCJmaWxlLmxvYWRlZFwiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRvd25sb2FkKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZG93bmxvYWQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWQgJiYgKGxheW91dE9wdGlvbnMucmVtb3ZhYmxlIHx8ICghbGF5b3V0T3B0aW9ucy5yZW1vdmFibGUgJiYgbGF5b3V0T3B0aW9ucy5yZW1vdmFibGVXaGVuTmV3ICYmICFmaWxlLmxpbmspKVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmUoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1yZW1vdmUnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZWRpdCAmJiAhZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImVkaXRcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21FZGl0KGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZWRpdCdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZG93bmxvYWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInNhdmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21TYXZlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtZG93bmxvYWQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3VzdG9tRGVsZXRlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtcmVtb3ZlJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxub3ZvLWxvYWRpbmcgKm5nSWY9XCIhZmlsZS5sb2FkZWRcIj48L25vdm8tbG9hZGluZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvRmlsZUlucHV0RWxlbWVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgZmlsZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdmaWxlT3V0cHV0JywgeyBzdGF0aWM6IHRydWUgfSlcbiAgZmlsZU91dHB1dDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczoge1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgY3VzdG9tQWN0aW9uczogYm9vbGVhbjtcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbVZhbGlkYXRpb24/OiB7IGFjdGlvbjogc3RyaW5nOyBmbjogRnVuY3Rpb24gfVtdO1xuICAgIHJlbW92YWJsZVdoZW5OZXc/OiBib29sZWFuO1xuICB9O1xuICBASW5wdXQoKVxuICB2YWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuICBASW5wdXQoKVxuICBkYXRhRmVhdHVyZUlkOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGVkaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgc2F2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBkZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgdXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBlbGVtZW50czogQXJyYXk8YW55PiA9IFtdO1xuICBmaWxlczogQXJyYXk8YW55PiA9IFtdO1xuICBtb2RlbDogYW55O1xuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY29tbWFuZHM6IGFueTtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgdGFyZ2V0OiBhbnk7XG4gIGZpbGVPdXRwdXRCYWc6IHN0cmluZztcblxuICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIGxhYmVsczogTm92b0xhYmVsU2VydmljZSwgcHJpdmF0ZSBkcmFndWxhOiBOb3ZvRHJhZ3VsYVNlcnZpY2UpIHtcbiAgICB0aGlzLmNvbW1hbmRzID0ge1xuICAgICAgZHJhZ2VudGVyOiB0aGlzLmRyYWdFbnRlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyYWdsZWF2ZTogdGhpcy5kcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkcmFnb3ZlcjogdGhpcy5kcmFnT3ZlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyb3A6IHRoaXMuZHJvcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2Ryb3AnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIHRoaXMuY29tbWFuZHNbdHlwZV0pO1xuICAgIH0pO1xuICAgIHRoaXMudXBkYXRlTGF5b3V0KCk7XG4gICAgdGhpcy5pbml0aWFsaXplRHJhZ3VsYSgpO1xuICAgIHRoaXMuc2V0SW5pdGlhbEZpbGVMaXN0KCk7XG4gICAgdGhpcy5kYXRhRmVhdHVyZUlkID0gdGhpcy5kYXRhRmVhdHVyZUlkID8gdGhpcy5kYXRhRmVhdHVyZUlkIDogdGhpcy5uYW1lO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgWydkcmFnZW50ZXInLCAnZHJhZ2xlYXZlJywgJ2RyYWdvdmVyJywgJ2Ryb3AnXS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIHRoaXMuY29tbWFuZHNbdHlwZV0pO1xuICAgIH0pO1xuICAgIGxldCBkcmFndWxhSGFzRmlsZU91dHB1dEJhZyA9IHRoaXMuZHJhZ3VsYS5iYWdzLmxlbmd0aCA+IDAgJiYgdGhpcy5kcmFndWxhLmJhZ3MuZmlsdGVyKCh4KSA9PiB4Lm5hbWUgPT09IHRoaXMuZmlsZU91dHB1dEJhZykubGVuZ3RoID4gMDtcbiAgICBpZiAoZHJhZ3VsYUhhc0ZpbGVPdXRwdXRCYWcpIHtcbiAgICAgIHRoaXMuZHJhZ3VsYS5kZXN0cm95KHRoaXMuZmlsZU91dHB1dEJhZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICB1cGRhdGVMYXlvdXQoKSB7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgTEFZT1VUX0RFRkFVTFRTLCB0aGlzLmxheW91dE9wdGlvbnMpO1xuICAgIHRoaXMuaW5zZXJ0VGVtcGxhdGVzQmFzZWRPbkxheW91dCgpO1xuICB9XG5cbiAgaW5zZXJ0VGVtcGxhdGVzQmFzZWRPbkxheW91dCgpIHtcbiAgICBsZXQgb3JkZXI7XG4gICAgc3dpdGNoICh0aGlzLmxheW91dE9wdGlvbnNbJ29yZGVyJ10pIHtcbiAgICAgIGNhc2UgJ2Rpc3BsYXlGaWxlc0JlbG93JzpcbiAgICAgICAgb3JkZXIgPSBbJ2ZpbGVJbnB1dCcsICdmaWxlT3V0cHV0J107XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgb3JkZXIgPSBbJ2ZpbGVPdXRwdXQnLCAnZmlsZUlucHV0J107XG4gICAgfVxuICAgIG9yZGVyLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpc1t0ZW1wbGF0ZV0sIDApO1xuICAgIH0pO1xuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVEcmFndWxhKCkge1xuICAgIHRoaXMuZmlsZU91dHB1dEJhZyA9IGBmaWxlLW91dHB1dC0ke3RoaXMuZHJhZ3VsYS5iYWdzLmxlbmd0aH1gO1xuICAgIHRoaXMuZHJhZ3VsYS5zZXRPcHRpb25zKHRoaXMuZmlsZU91dHB1dEJhZywge1xuICAgICAgbW92ZXM6IChlbCwgY29udGFpbmVyLCBoYW5kbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0T3B0aW9ucy5kcmFnZ2FibGU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbEZpbGVMaXN0KCkge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmZpbGVzID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBkcmFnRW50ZXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBkcmFnTGVhdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy50YXJnZXQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIG5vLW9wXG4gIH1cblxuICBkcm9wSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSAhPT0gJ0ZpbGVzJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgb3B0aW9uczogYW55ID0gdGhpcy5sYXlvdXRPcHRpb25zO1xuICAgIGxldCBmaWxlbGlzdCA9IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICBpZiAob3B0aW9ucy5jdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwbG9hZC5lbWl0KHRoaXMubXVsdGlwbGUgPyBmaWxlbGlzdCA6IFtmaWxlbGlzdFswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3ModGhpcy5tdWx0aXBsZSA/IGZpbGVsaXN0IDogW2ZpbGVsaXN0WzBdXSk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgY2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb2Nlc3MoQXJyYXkuZnJvbShldmVudC50YXJnZXQuZmlsZXMpKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGZpbGVzKTogYm9vbGVhbiB7XG4gICAgbGV0IHBhc3NlZFZhbGlkYXRpb24gPSB0cnVlO1xuICAgIGlmICh0aGlzLmxheW91dE9wdGlvbnMuY3VzdG9tVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5sYXlvdXRPcHRpb25zLmN1c3RvbVZhbGlkYXRpb25cbiAgICAgICAgLmZpbHRlcigodmFsaWRhdGlvbikgPT4gdmFsaWRhdGlvbi5hY3Rpb24gPT09ICd1cGxvYWQnKVxuICAgICAgICAuZm9yRWFjaCgodXBsb2FkVmFsaWRhdGlvbikgPT4ge1xuICAgICAgICAgIHBhc3NlZFZhbGlkYXRpb24gPSB1cGxvYWRWYWxpZGF0aW9uLmZuKGZpbGVzKSAmJiBwYXNzZWRWYWxpZGF0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NlZFZhbGlkYXRpb247XG4gIH1cblxuICBwcm9jZXNzKGZpbGVsaXN0KSB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUoZmlsZWxpc3QpKSB7XG4gICAgICBQcm9taXNlLmFsbChmaWxlbGlzdC5tYXAoKGZpbGUpID0+IHRoaXMucmVhZEZpbGUoZmlsZSkpKS50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIHRoaXMuZmlsZXMucHVzaCguLi5maWxlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLmZpbGVzO1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb3dubG9hZChmaWxlKSB7XG4gICAgd2luZG93Lm9wZW4oZmlsZS5kYXRhVVJMLCAnX2JsYW5rJyk7XG4gIH1cblxuICByZW1vdmUoZmlsZSkge1xuICAgIHRoaXMuZmlsZXMuc3BsaWNlKHRoaXMuZmlsZXMuZmluZEluZGV4KChmKSA9PiBmLm5hbWUgPT09IGZpbGUubmFtZSAmJiBmLnNpemUgPT09IGZpbGUuc2l6ZSksIDEpO1xuICAgIHRoaXMubW9kZWwgPSB0aGlzLmZpbGVzO1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIHJlYWRGaWxlKGZpbGUpIHtcbiAgICByZXR1cm4gbmV3IE5vdm9GaWxlKGZpbGUpLnJlYWQoKTtcbiAgfVxuXG4gIGN1c3RvbUVkaXQoZmlsZSkge1xuICAgIHRoaXMuZWRpdC5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tU2F2ZShmaWxlKSB7XG4gICAgdGhpcy5zYXZlLmVtaXQoZmlsZSk7XG4gIH1cblxuICBjdXN0b21EZWxldGUoZmlsZSkge1xuICAgIHRoaXMuZGVsZXRlLmVtaXQoZmlsZSk7XG4gIH1cblxuICBjdXN0b21DaGVjayhldmVudCkge1xuICAgIHRoaXMudXBsb2FkLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuIl19