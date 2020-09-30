/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "\n    <div #container></div>\n    <ng-template #fileInput>\n      <div class=\"file-input-group\" [class.disabled]=\"disabled\" [class.active]=\"active\">\n        <input\n          *ngIf=\"!layoutOptions.customActions\"\n          type=\"file\"\n          [name]=\"name\"\n          [attr.id]=\"name\"\n          (change)=\"check($event)\"\n          [attr.multiple]=\"multiple\"\n          tabindex=\"-1\"\n        />\n        <input\n          *ngIf=\"layoutOptions.customActions\"\n          type=\"file\"\n          [name]=\"name\"\n          [attr.id]=\"name\"\n          (change)=\"customCheck($event)\"\n          [attr.multiple]=\"multiple\"\n          tabindex=\"-1\"\n        />\n        <section [ngSwitch]=\"layoutOptions.labelStyle\">\n          <label *ngSwitchCase=\"'no-box'\" [attr.for]=\"name\" class=\"no-box\">\n            <div>\n              <i class=\"bhi-dropzone\"></i>{{ placeholder || labels.chooseAFile }} {{ labels.or }}\n              <strong class=\"link\">{{ labels.clickToBrowse }}</strong>\n            </div>\n          </label>\n          <label *ngSwitchDefault [attr.for]=\"name\" class=\"boxed\">\n            <span>{{ placeholder || labels.chooseAFile }}</span>\n            <small\n              >{{ labels.or }} <strong class=\"link\">{{ labels.clickToBrowse }}</strong></small\n            >\n          </label>\n        </section>\n      </div>\n    </ng-template>\n    <ng-template #fileOutput>\n      <div class=\"file-output-group\" [dragula]=\"fileOutputBag\" [dragulaModel]=\"files\">\n        <div class=\"file-item\" *ngFor=\"let file of files\" [class.disabled]=\"disabled\">\n          <i *ngIf=\"layoutOptions.draggable\" class=\"bhi-move\"></i>\n          <label *ngIf=\"file.link\"\n            ><span\n              ><a href=\"{{ file.link }}\" target=\"_blank\">{{ file.name | decodeURI }}</a></span\n            ><span *ngIf=\"file.description\">||</span><span>{{ file.description }}</span></label\n          >\n          <label *ngIf=\"!file.link\">{{ file.name | decodeURI }}</label>\n          <div class=\"actions\" [attr.data-automation-id]=\"'file-actions'\" *ngIf=\"file.loaded\">\n            <div *ngIf=\"!layoutOptions.customActions\">\n              <button\n                *ngIf=\"layoutOptions.download\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"save\"\n                (click)=\"download(file)\"\n                [attr.data-automation-id]=\"'file-download'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"!disabled && (layoutOptions.removable || (!layoutOptions.removable && layoutOptions.removableWhenNew && !file.link))\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"close\"\n                (click)=\"remove(file)\"\n                [attr.data-automation-id]=\"'file-remove'\"\n                tabindex=\"-1\"\n              ></button>\n            </div>\n            <div *ngIf=\"layoutOptions.customActions\">\n              <button\n                *ngIf=\"layoutOptions.edit && !disabled\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"edit\"\n                (click)=\"customEdit(file)\"\n                [attr.data-automation-id]=\"'file-edit'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"layoutOptions.download\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"save\"\n                (click)=\"customSave(file)\"\n                [attr.data-automation-id]=\"'file-download'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"!disabled\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"close\"\n                (click)=\"customDelete(file)\"\n                [attr.data-automation-id]=\"'file-remove'\"\n                tabindex=\"-1\"\n              ></button>\n            </div>\n          </div>\n          <novo-loading *ngIf=\"!file.loaded\"></novo-loading>\n        </div>\n      </div>\n    </ng-template>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixVQUFVLEVBSVYsU0FBUyxFQUNULGdCQUFnQixFQUNoQixXQUFXLEVBRVgsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7O0FBRXpFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0lBR3hDLG1CQUFtQixHQUFHO0lBQzFCLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaOztJQUVLLGVBQWUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtBQUV0SDtJQWdLRSw4QkFBb0IsT0FBbUIsRUFBUyxNQUF3QixFQUFVLE9BQTJCO1FBQXpGLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW9CO1FBekM3RyxhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFnQjFCLFVBQUssR0FB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QUU1QixvQ0FDYTs7SUFDYix3Q0FDMEI7O0lBQzFCLHdDQUMwQjs7SUFDMUIsMkNBQ29COztJQUNwQiw2Q0FXRTs7SUFDRixxQ0FDdUI7O0lBRXZCLG9DQUM2Qzs7SUFDN0Msb0NBQzZDOztJQUM3QyxzQ0FDK0M7O0lBQy9DLHNDQUMrQzs7SUFFL0Msd0NBQTBCOztJQUMxQixxQ0FBdUI7O0lBQ3ZCLHFDQUFXOztJQUNYLHNDQUF3Qjs7SUFDeEIsd0NBQWM7O0lBQ2QsdUNBQWlCOztJQUNqQixzQ0FBWTs7SUFDWiw2Q0FBc0I7O0lBRXRCLDZDQUFtQzs7SUFDbkMsOENBQW9DOzs7OztJQUV4Qix1Q0FBMkI7O0lBQUUsc0NBQStCOzs7OztJQUFFLHVDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9EcmFndWxhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0ZpbGUgfSBmcm9tICcuL2V4dHJhcy9maWxlL0ZpbGUnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IEZJTEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRmlsZUlucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuY29uc3QgTEFZT1VUX0RFRkFVTFRTID0geyBvcmRlcjogJ2RlZmF1bHQnLCBkb3dubG9hZDogdHJ1ZSwgcmVtb3ZhYmxlOiB0cnVlLCBsYWJlbFN0eWxlOiAnZGVmYXVsdCcsIGRyYWdnYWJsZTogZmFsc2UgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWxlLWlucHV0JyxcbiAgcHJvdmlkZXJzOiBbRklMRV9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjZmlsZUlucHV0PlxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaW5wdXQtZ3JvdXBcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAoY2hhbmdlKT1cImNoZWNrKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAoY2hhbmdlKT1cImN1c3RvbUNoZWNrKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNlY3Rpb24gW25nU3dpdGNoXT1cImxheW91dE9wdGlvbnMubGFiZWxTdHlsZVwiPlxuICAgICAgICAgIDxsYWJlbCAqbmdTd2l0Y2hDYXNlPVwiJ25vLWJveCdcIiBbYXR0ci5mb3JdPVwibmFtZVwiIGNsYXNzPVwibm8tYm94XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kcm9wem9uZVwiPjwvaT57eyBwbGFjZWhvbGRlciB8fCBsYWJlbHMuY2hvb3NlQUZpbGUgfX0ge3sgbGFiZWxzLm9yIH19XG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJsaW5rXCI+e3sgbGFiZWxzLmNsaWNrVG9Ccm93c2UgfX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsICpuZ1N3aXRjaERlZmF1bHQgW2F0dHIuZm9yXT1cIm5hbWVcIiBjbGFzcz1cImJveGVkXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBwbGFjZWhvbGRlciB8fCBsYWJlbHMuY2hvb3NlQUZpbGUgfX08L3NwYW4+XG4gICAgICAgICAgICA8c21hbGxcbiAgICAgICAgICAgICAgPnt7IGxhYmVscy5vciB9fSA8c3Ryb25nIGNsYXNzPVwibGlua1wiPnt7IGxhYmVscy5jbGlja1RvQnJvd3NlIH19PC9zdHJvbmc+PC9zbWFsbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNmaWxlT3V0cHV0PlxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtb3V0cHV0LWdyb3VwXCIgW2RyYWd1bGFdPVwiZmlsZU91dHB1dEJhZ1wiIFtkcmFndWxhTW9kZWxdPVwiZmlsZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaXRlbVwiICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgPGkgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmRyYWdnYWJsZVwiIGNsYXNzPVwiYmhpLW1vdmVcIj48L2k+XG4gICAgICAgICAgPGxhYmVsICpuZ0lmPVwiZmlsZS5saW5rXCJcbiAgICAgICAgICAgID48c3BhblxuICAgICAgICAgICAgICA+PGEgaHJlZj1cInt7IGZpbGUubGluayB9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7IGZpbGUubmFtZSB8IGRlY29kZVVSSSB9fTwvYT48L3NwYW5cbiAgICAgICAgICAgID48c3BhbiAqbmdJZj1cImZpbGUuZGVzY3JpcHRpb25cIj58fDwvc3Bhbj48c3Bhbj57eyBmaWxlLmRlc2NyaXB0aW9uIH19PC9zcGFuPjwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsICpuZ0lmPVwiIWZpbGUubGlua1wiPnt7IGZpbGUubmFtZSB8IGRlY29kZVVSSSB9fTwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtYWN0aW9ucydcIiAqbmdJZj1cImZpbGUubG9hZGVkXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJzYXZlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZG93bmxvYWQoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1kb3dubG9hZCdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAobGF5b3V0T3B0aW9ucy5yZW1vdmFibGUgfHwgKCFsYXlvdXRPcHRpb25zLnJlbW92YWJsZSAmJiBsYXlvdXRPcHRpb25zLnJlbW92YWJsZVdoZW5OZXcgJiYgIWZpbGUubGluaykpXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZShmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLXJlbW92ZSdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5lZGl0ICYmICFkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1c3RvbUVkaXQoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1lZGl0J1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1c3RvbVNhdmUoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1kb3dubG9hZCdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21EZWxldGUoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1yZW1vdmUnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5vdm8tbG9hZGluZyAqbmdJZj1cIiFmaWxlLmxvYWRlZFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWxlSW5wdXRFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnKVxuICBmaWxlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVPdXRwdXQnKVxuICBmaWxlT3V0cHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSlcbiAgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIEBJbnB1dCgpXG4gIG5hbWU6IHN0cmluZztcbiAgQElucHV0KClcbiAgbXVsdGlwbGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KClcbiAgbGF5b3V0T3B0aW9uczoge1xuICAgIG9yZGVyPzogc3RyaW5nO1xuICAgIGRvd25sb2FkPzogYm9vbGVhbjtcbiAgICBlZGl0PzogYm9vbGVhbjtcbiAgICBsYWJlbFN0eWxlPzogc3RyaW5nO1xuICAgIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gICAgY3VzdG9tQWN0aW9uczogYm9vbGVhbjtcbiAgICByZW1vdmFibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbVZhbGlkYXRpb24/OiB7IGFjdGlvbjogc3RyaW5nOyBmbjogRnVuY3Rpb24gfVtdO1xuICAgIHJlbW92YWJsZVdoZW5OZXc/OiBib29sZWFuO1xuICB9O1xuICBASW5wdXQoKVxuICB2YWx1ZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZWxlbWVudHM6IEFycmF5PGFueT4gPSBbXTtcbiAgZmlsZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgbW9kZWw6IGFueTtcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbW1hbmRzOiBhbnk7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIHRhcmdldDogYW55O1xuICBmaWxlT3V0cHV0QmFnOiBzdHJpbmc7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGRyYWd1bGE6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29tbWFuZHMgPSB7XG4gICAgICBkcmFnZW50ZXI6IHRoaXMuZHJhZ0VudGVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJhZ2xlYXZlOiB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyYWdvdmVyOiB0aGlzLmRyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJvcDogdGhpcy5kcm9wSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgdGhpcy5jb21tYW5kc1t0eXBlXSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVEcmFndWxhKCk7XG4gICAgdGhpcy5zZXRJbml0aWFsRmlsZUxpc3QoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcm9wJ10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCB0aGlzLmNvbW1hbmRzW3R5cGVdKTtcbiAgICB9KTtcbiAgICBsZXQgZHJhZ3VsYUhhc0ZpbGVPdXRwdXRCYWcgPSB0aGlzLmRyYWd1bGEuYmFncy5sZW5ndGggPiAwICYmIHRoaXMuZHJhZ3VsYS5iYWdzLmZpbHRlcigoeCkgPT4geC5uYW1lID09PSB0aGlzLmZpbGVPdXRwdXRCYWcpLmxlbmd0aCA+IDA7XG4gICAgaWYgKGRyYWd1bGFIYXNGaWxlT3V0cHV0QmFnKSB7XG4gICAgICB0aGlzLmRyYWd1bGEuZGVzdHJveSh0aGlzLmZpbGVPdXRwdXRCYWcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICB9XG5cbiAgdXBkYXRlTGF5b3V0KCkge1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIExBWU9VVF9ERUZBVUxUUywgdGhpcy5sYXlvdXRPcHRpb25zKTtcbiAgICB0aGlzLmluc2VydFRlbXBsYXRlc0Jhc2VkT25MYXlvdXQoKTtcbiAgfVxuXG4gIGluc2VydFRlbXBsYXRlc0Jhc2VkT25MYXlvdXQoKSB7XG4gICAgbGV0IG9yZGVyO1xuICAgIHN3aXRjaCAodGhpcy5sYXlvdXRPcHRpb25zWydvcmRlciddKSB7XG4gICAgICBjYXNlICdkaXNwbGF5RmlsZXNCZWxvdyc6XG4gICAgICAgIG9yZGVyID0gWydmaWxlSW5wdXQnLCAnZmlsZU91dHB1dCddO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9yZGVyID0gWydmaWxlT3V0cHV0JywgJ2ZpbGVJbnB1dCddO1xuICAgIH1cbiAgICBvcmRlci5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXNbdGVtcGxhdGVdLCAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cblxuICBpbml0aWFsaXplRHJhZ3VsYSgpIHtcbiAgICB0aGlzLmZpbGVPdXRwdXRCYWcgPSBgZmlsZS1vdXRwdXQtJHt0aGlzLmRyYWd1bGEuYmFncy5sZW5ndGh9YDtcbiAgICB0aGlzLmRyYWd1bGEuc2V0T3B0aW9ucyh0aGlzLmZpbGVPdXRwdXRCYWcsIHtcbiAgICAgIG1vdmVzOiAoZWwsIGNvbnRhaW5lciwgaGFuZGxlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dE9wdGlvbnMuZHJhZ2dhYmxlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxGaWxlTGlzdCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5maWxlcyA9IHRoaXMudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZHJhZ0VudGVySGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZHJhZ0xlYXZlSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMudGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBuby1vcFxuICB9XG5cbiAgZHJvcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gIT09ICdGaWxlcycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHRoaXMubGF5b3V0T3B0aW9ucztcbiAgICBsZXQgZmlsZWxpc3QgPSBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgaWYgKG9wdGlvbnMuY3VzdG9tQWN0aW9ucykge1xuICAgICAgdGhpcy51cGxvYWQuZW1pdCh0aGlzLm11bHRpcGxlID8gZmlsZWxpc3QgOiBbZmlsZWxpc3RbMF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzKHRoaXMubXVsdGlwbGUgPyBmaWxlbGlzdCA6IFtmaWxlbGlzdFswXV0pO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGNoZWNrKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9jZXNzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKSk7XG4gIH1cblxuICB2YWxpZGF0ZShmaWxlcyk6IGJvb2xlYW4ge1xuICAgIGxldCBwYXNzZWRWYWxpZGF0aW9uID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5sYXlvdXRPcHRpb25zLmN1c3RvbVZhbGlkYXRpb24pIHtcbiAgICAgIHRoaXMubGF5b3V0T3B0aW9ucy5jdXN0b21WYWxpZGF0aW9uXG4gICAgICAgIC5maWx0ZXIoKHZhbGlkYXRpb24pID0+IHZhbGlkYXRpb24uYWN0aW9uID09PSAndXBsb2FkJylcbiAgICAgICAgLmZvckVhY2goKHVwbG9hZFZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgICBwYXNzZWRWYWxpZGF0aW9uID0gdXBsb2FkVmFsaWRhdGlvbi5mbihmaWxlcykgJiYgcGFzc2VkVmFsaWRhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYXNzZWRWYWxpZGF0aW9uO1xuICB9XG5cbiAgcHJvY2VzcyhmaWxlbGlzdCkge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlKGZpbGVsaXN0KSkge1xuICAgICAgUHJvbWlzZS5hbGwoZmlsZWxpc3QubWFwKChmaWxlKSA9PiB0aGlzLnJlYWRGaWxlKGZpbGUpKSkudGhlbigoZmlsZXMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICB0aGlzLmZpbGVzLnB1c2goLi4uZmlsZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5maWxlcztcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWQoZmlsZSkge1xuICAgIHdpbmRvdy5vcGVuKGZpbGUuZGF0YVVSTCwgJ19ibGFuaycpO1xuICB9XG5cbiAgcmVtb3ZlKGZpbGUpIHtcbiAgICB0aGlzLmZpbGVzLnNwbGljZSh0aGlzLmZpbGVzLmZpbmRJbmRleCgoZikgPT4gZi5uYW1lID09PSBmaWxlLm5hbWUgJiYgZi5zaXplID09PSBmaWxlLnNpemUpLCAxKTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5maWxlcztcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICByZWFkRmlsZShmaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRmlsZShmaWxlKS5yZWFkKCk7XG4gIH1cblxuICBjdXN0b21FZGl0KGZpbGUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbVNhdmUoZmlsZSkge1xuICAgIHRoaXMuc2F2ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tRGVsZXRlKGZpbGUpIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tQ2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==