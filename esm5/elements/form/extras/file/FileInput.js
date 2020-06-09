import { __read, __spread } from "tslib";
// NG2
import { Component, Input, ElementRef, forwardRef, ViewChild, ViewContainerRef, TemplateRef, Output, EventEmitter, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { NovoDragulaService } from '../../../../elements/dragula/DragulaService';
import { NovoFile } from './extras/file/File';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "../../../../elements/dragula/DragulaService";
import * as i3 from "@angular/common";
import * as i4 from "../../../dragula/Dragula";
import * as i5 from "../../../button/Button";
import * as i6 from "../../../loading/Loading";
import * as i7 from "../../../../pipes/decode-uri/DecodeURI";
var _c0 = ["fileInput"];
var _c1 = ["fileOutput"];
var _c2 = ["container"];
function NovoFileInputElement_ng_template_2_input_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 8);
    i0.ɵɵlistener("change", function NovoFileInputElement_ng_template_2_input_1_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.check($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("name", ctx_r5.name);
    i0.ɵɵattribute("id", ctx_r5.name)("multiple", ctx_r5.multiple)("data-feature-id", ctx_r5.dataFeatureId);
} }
function NovoFileInputElement_ng_template_2_input_2_Template(rf, ctx) { if (rf & 1) {
    var _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 8);
    i0.ɵɵlistener("change", function NovoFileInputElement_ng_template_2_input_2_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r12); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.customCheck($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("name", ctx_r6.name);
    i0.ɵɵattribute("id", ctx_r6.name)("multiple", ctx_r6.multiple)("data-feature-id", ctx_r6.dataFeatureId);
} }
function NovoFileInputElement_ng_template_2_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 9);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "i", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "strong", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("for", ctx_r7.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r7.placeholder || ctx_r7.labels.chooseAFile, " ", ctx_r7.labels.or, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r7.labels.clickToBrowse);
} }
function NovoFileInputElement_ng_template_2_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementStart(5, "strong", 11);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("for", ctx_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.placeholder || ctx_r8.labels.chooseAFile);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r8.labels.or, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r8.labels.clickToBrowse);
} }
function NovoFileInputElement_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, NovoFileInputElement_ng_template_2_input_1_Template, 1, 4, "input", 4);
    i0.ɵɵtemplate(2, NovoFileInputElement_ng_template_2_input_2_Template, 1, 4, "input", 4);
    i0.ɵɵelementStart(3, "section", 5);
    i0.ɵɵtemplate(4, NovoFileInputElement_ng_template_2_label_4_Template, 6, 4, "label", 6);
    i0.ɵɵtemplate(5, NovoFileInputElement_ng_template_2_label_5_Template, 7, 4, "label", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r2.disabled)("active", ctx_r2.active);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.layoutOptions.customActions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.layoutOptions.customActions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", ctx_r2.layoutOptions.labelStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "no-box");
} }
function NovoFileInputElement_ng_template_4_div_1_i_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 19);
} }
function NovoFileInputElement_ng_template_4_div_1_label_2_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "||");
    i0.ɵɵelementEnd();
} }
function NovoFileInputElement_ng_template_4_div_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵelementStart(2, "a", 20);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "decodeURI");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, NovoFileInputElement_ng_template_4_div_1_label_2_span_5_Template, 2, 0, "span", 17);
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("href", file_r14.link, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 4, file_r14.name));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", file_r14.description);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(file_r14.description);
} }
function NovoFileInputElement_ng_template_4_div_1_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "decodeURI");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, file_r14.name));
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); var file_r14 = i0.ɵɵnextContext(3).$implicit; var ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.download(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-download");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32); var file_r14 = i0.ɵɵnextContext(3).$implicit; var ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.remove(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-remove");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_1_Template, 1, 1, "button", 22);
    i0.ɵɵtemplate(2, NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_2_Template, 1, 1, "button", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r14 = i0.ɵɵnextContext(2).$implicit;
    var ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.layoutOptions.download);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r23.disabled && (ctx_r23.layoutOptions.removable || !ctx_r23.layoutOptions.removable && ctx_r23.layoutOptions.removableWhenNew && !file_r14.link));
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); var file_r14 = i0.ɵɵnextContext(3).$implicit; var ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.customEdit(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-edit");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); var file_r14 = i0.ɵɵnextContext(3).$implicit; var ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.customSave(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-download");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); var file_r14 = i0.ɵɵnextContext(3).$implicit; var ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.customDelete(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-remove");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_1_Template, 1, 1, "button", 26);
    i0.ɵɵtemplate(2, NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_2_Template, 1, 1, "button", 22);
    i0.ɵɵtemplate(3, NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_3_Template, 1, 1, "button", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r24 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.layoutOptions.edit && !ctx_r24.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.layoutOptions.download);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r24.disabled);
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, NovoFileInputElement_ng_template_4_div_1_div_4_div_1_Template, 3, 2, "div", 17);
    i0.ɵɵtemplate(2, NovoFileInputElement_ng_template_4_div_1_div_4_div_2_Template, 4, 3, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("data-automation-id", "file-actions");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r18.layoutOptions.customActions);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.layoutOptions.customActions);
} }
function NovoFileInputElement_ng_template_4_div_1_novo_loading_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "novo-loading");
} }
function NovoFileInputElement_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, NovoFileInputElement_ng_template_4_div_1_i_1_Template, 1, 0, "i", 16);
    i0.ɵɵtemplate(2, NovoFileInputElement_ng_template_4_div_1_label_2_Template, 8, 6, "label", 17);
    i0.ɵɵtemplate(3, NovoFileInputElement_ng_template_4_div_1_label_3_Template, 3, 3, "label", 17);
    i0.ɵɵtemplate(4, NovoFileInputElement_ng_template_4_div_1_div_4_Template, 3, 3, "div", 18);
    i0.ɵɵtemplate(5, NovoFileInputElement_ng_template_4_div_1_novo_loading_5_Template, 1, 0, "novo-loading", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var file_r14 = ctx.$implicit;
    var ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("disabled", ctx_r13.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r13.layoutOptions.draggable);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", file_r14.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !file_r14.link);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", file_r14.loaded);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !file_r14.loaded);
} }
function NovoFileInputElement_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, NovoFileInputElement_ng_template_4_div_1_Template, 6, 7, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dragula", ctx_r4.fileOutputBag)("dragulaModel", ctx_r4.files);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.files);
} }
// Value accessor for the component (supports ngModel)
var FILE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NovoFileInputElement; }),
    multi: true,
};
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
    NovoFileInputElement.prototype.ngOnInit = function () {
        var _this = this;
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(function (type) {
            _this.element.nativeElement.addEventListener(type, _this.commands[type]);
        });
        this.updateLayout();
        this.initializeDragula();
        this.setInitialFileList();
        this.dataFeatureId = this.dataFeatureId ? this.dataFeatureId : this.name;
    };
    NovoFileInputElement.prototype.ngOnDestroy = function () {
        var _this = this;
        ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(function (type) {
            _this.element.nativeElement.removeEventListener(type, _this.commands[type]);
        });
        var dragulaHasFileOutputBag = this.dragula.bags.length > 0 && this.dragula.bags.filter(function (x) { return x.name === _this.fileOutputBag; }).length > 0;
        if (dragulaHasFileOutputBag) {
            this.dragula.destroy(this.fileOutputBag);
        }
    };
    NovoFileInputElement.prototype.ngOnChanges = function (changes) {
        this.onModelChange(this.model);
    };
    NovoFileInputElement.prototype.updateLayout = function () {
        this.layoutOptions = Object.assign({}, LAYOUT_DEFAULTS, this.layoutOptions);
        this.insertTemplatesBasedOnLayout();
    };
    NovoFileInputElement.prototype.insertTemplatesBasedOnLayout = function () {
        var _this = this;
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
    NovoFileInputElement.prototype.initializeDragula = function () {
        var _this = this;
        this.fileOutputBag = "file-output-" + this.dragula.bags.length;
        this.dragula.setOptions(this.fileOutputBag, {
            moves: function (el, container, handle) {
                return _this.layoutOptions.draggable;
            },
        });
    };
    NovoFileInputElement.prototype.setInitialFileList = function () {
        if (this.value) {
            this.files = this.value;
        }
    };
    NovoFileInputElement.prototype.dragEnterHandler = function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
        this.target = event.target;
        this.active = true;
    };
    NovoFileInputElement.prototype.dragLeaveHandler = function (event) {
        event.preventDefault();
        if (this.target === event.target) {
            this.active = false;
        }
    };
    NovoFileInputElement.prototype.dragOverHandler = function (event) {
        event.preventDefault();
        // no-op
    };
    NovoFileInputElement.prototype.dropHandler = function (event) {
        event.preventDefault();
        this.visible = false;
        if (event.dataTransfer.types[0] !== 'Files') {
            return;
        }
        var options = this.layoutOptions;
        var filelist = Array.from(event.dataTransfer.files);
        if (options.customActions) {
            this.upload.emit(this.multiple ? filelist : [filelist[0]]);
        }
        else {
            this.process(this.multiple ? filelist : [filelist[0]]);
        }
        this.active = false;
    };
    NovoFileInputElement.prototype.writeValue = function (model) {
        this.model = model;
    };
    NovoFileInputElement.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    NovoFileInputElement.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    NovoFileInputElement.prototype.check = function (event) {
        this.process(Array.from(event.target.files));
    };
    NovoFileInputElement.prototype.validate = function (files) {
        var passedValidation = true;
        if (this.layoutOptions.customValidation) {
            this.layoutOptions.customValidation
                .filter(function (validation) { return validation.action === 'upload'; })
                .forEach(function (uploadValidation) {
                passedValidation = uploadValidation.fn(files) && passedValidation;
            });
        }
        return passedValidation;
    };
    NovoFileInputElement.prototype.process = function (filelist) {
        var _this = this;
        if (this.validate(filelist)) {
            Promise.all(filelist.map(function (file) { return _this.readFile(file); })).then(function (files) {
                var _a;
                if (_this.multiple) {
                    (_a = _this.files).push.apply(_a, __spread(files));
                }
                else {
                    _this.files = files;
                }
                _this.model = _this.files;
                _this.onModelChange(_this.model);
            });
        }
    };
    NovoFileInputElement.prototype.download = function (file) {
        window.open(file.dataURL, '_blank');
    };
    NovoFileInputElement.prototype.remove = function (file) {
        this.files.splice(this.files.findIndex(function (f) { return f.name === file.name && f.size === file.size; }), 1);
        this.model = this.files;
        this.onModelChange(this.model);
    };
    NovoFileInputElement.prototype.readFile = function (file) {
        return new NovoFile(file).read();
    };
    NovoFileInputElement.prototype.customEdit = function (file) {
        this.edit.emit(file);
    };
    NovoFileInputElement.prototype.customSave = function (file) {
        this.save.emit(file);
    };
    NovoFileInputElement.prototype.customDelete = function (file) {
        this.delete.emit(file);
    };
    NovoFileInputElement.prototype.customCheck = function (event) {
        this.upload.emit(event);
    };
    NovoFileInputElement.prototype.setDisabledState = function (disabled) {
        this.disabled = disabled;
    };
    NovoFileInputElement.ɵfac = function NovoFileInputElement_Factory(t) { return new (t || NovoFileInputElement)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.NovoLabelService), i0.ɵɵdirectiveInject(i2.NovoDragulaService)); };
    NovoFileInputElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoFileInputElement, selectors: [["novo-file-input"]], viewQuery: function NovoFileInputElement_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
            i0.ɵɵstaticViewQuery(_c1, true);
            i0.ɵɵstaticViewQuery(_c2, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileOutput = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
        } }, inputs: { name: "name", multiple: "multiple", disabled: "disabled", placeholder: "placeholder", layoutOptions: "layoutOptions", value: "value", dataFeatureId: "dataFeatureId" }, outputs: { edit: "edit", save: "save", delete: "delete", upload: "upload" }, features: [i0.ɵɵProvidersFeature([FILE_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature], decls: 6, vars: 0, consts: [["container", ""], ["fileInput", ""], ["fileOutput", ""], [1, "file-input-group"], ["type", "file", "tabindex", "-1", 3, "name", "change", 4, "ngIf"], [3, "ngSwitch"], ["class", "no-box", 4, "ngSwitchCase"], ["class", "boxed", 4, "ngSwitchDefault"], ["type", "file", "tabindex", "-1", 3, "name", "change"], [1, "no-box"], [1, "bhi-dropzone"], [1, "link"], [1, "boxed"], [1, "file-output-group", 3, "dragula", "dragulaModel"], ["class", "file-item", 3, "disabled", 4, "ngFor", "ngForOf"], [1, "file-item"], ["class", "bhi-move", 4, "ngIf"], [4, "ngIf"], ["class", "actions", 4, "ngIf"], [1, "bhi-move"], ["target", "_blank", 3, "href"], [1, "actions"], ["type", "button", "theme", "icon", "icon", "save", "tabindex", "-1", 3, "click", 4, "ngIf"], ["type", "button", "theme", "icon", "icon", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["type", "button", "theme", "icon", "icon", "save", "tabindex", "-1", 3, "click"], ["type", "button", "theme", "icon", "icon", "close", "tabindex", "-1", 3, "click"], ["type", "button", "theme", "icon", "icon", "edit", "tabindex", "-1", 3, "click", 4, "ngIf"], ["type", "button", "theme", "icon", "icon", "edit", "tabindex", "-1", 3, "click"]], template: function NovoFileInputElement_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", null, 0);
            i0.ɵɵtemplate(2, NovoFileInputElement_ng_template_2_Template, 6, 8, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(4, NovoFileInputElement_ng_template_4_Template, 2, 3, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } }, directives: [i3.NgIf, i3.NgSwitch, i3.NgSwitchCase, i3.NgSwitchDefault, i4.NovoDragulaElement, i3.NgForOf, i5.NovoButtonElement, i6.NovoLoadingElement], pipes: [i7.DecodeURIPipe], encapsulation: 2 });
    return NovoFileInputElement;
}());
export { NovoFileInputElement };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFileInputElement, [{
        type: Component,
        args: [{
                selector: 'novo-file-input',
                providers: [FILE_VALUE_ACCESSOR],
                template: "\n    <div #container></div>\n    <ng-template #fileInput>\n      <div class=\"file-input-group\" [class.disabled]=\"disabled\" [class.active]=\"active\">\n        <input\n          *ngIf=\"!layoutOptions.customActions\"\n          type=\"file\"\n          [name]=\"name\"\n          [attr.id]=\"name\"\n          (change)=\"check($event)\"\n          [attr.multiple]=\"multiple\"\n          tabindex=\"-1\"\n          [attr.data-feature-id]=\"dataFeatureId\"\n        />\n        <input\n          *ngIf=\"layoutOptions.customActions\"\n          type=\"file\"\n          [name]=\"name\"\n          [attr.id]=\"name\"\n          (change)=\"customCheck($event)\"\n          [attr.multiple]=\"multiple\"\n          tabindex=\"-1\"\n          [attr.data-feature-id]=\"dataFeatureId\"\n        />\n        <section [ngSwitch]=\"layoutOptions.labelStyle\">\n          <label *ngSwitchCase=\"'no-box'\" [attr.for]=\"name\" class=\"no-box\">\n            <div>\n              <i class=\"bhi-dropzone\"></i>{{ placeholder || labels.chooseAFile }} {{ labels.or }}\n              <strong class=\"link\">{{ labels.clickToBrowse }}</strong>\n            </div>\n          </label>\n          <label *ngSwitchDefault [attr.for]=\"name\" class=\"boxed\">\n            <span>{{ placeholder || labels.chooseAFile }}</span>\n            <small\n              >{{ labels.or }} <strong class=\"link\">{{ labels.clickToBrowse }}</strong></small\n            >\n          </label>\n        </section>\n      </div>\n    </ng-template>\n    <ng-template #fileOutput>\n      <div class=\"file-output-group\" [dragula]=\"fileOutputBag\" [dragulaModel]=\"files\">\n        <div class=\"file-item\" *ngFor=\"let file of files\" [class.disabled]=\"disabled\">\n          <i *ngIf=\"layoutOptions.draggable\" class=\"bhi-move\"></i>\n          <label *ngIf=\"file.link\"\n            ><span\n              ><a href=\"{{ file.link }}\" target=\"_blank\">{{ file.name | decodeURI }}</a></span\n            ><span *ngIf=\"file.description\">||</span><span>{{ file.description }}</span></label\n          >\n          <label *ngIf=\"!file.link\">{{ file.name | decodeURI }}</label>\n          <div class=\"actions\" [attr.data-automation-id]=\"'file-actions'\" *ngIf=\"file.loaded\">\n            <div *ngIf=\"!layoutOptions.customActions\">\n              <button\n                *ngIf=\"layoutOptions.download\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"save\"\n                (click)=\"download(file)\"\n                [attr.data-automation-id]=\"'file-download'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"!disabled && (layoutOptions.removable || (!layoutOptions.removable && layoutOptions.removableWhenNew && !file.link))\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"close\"\n                (click)=\"remove(file)\"\n                [attr.data-automation-id]=\"'file-remove'\"\n                tabindex=\"-1\"\n              ></button>\n            </div>\n            <div *ngIf=\"layoutOptions.customActions\">\n              <button\n                *ngIf=\"layoutOptions.edit && !disabled\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"edit\"\n                (click)=\"customEdit(file)\"\n                [attr.data-automation-id]=\"'file-edit'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"layoutOptions.download\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"save\"\n                (click)=\"customSave(file)\"\n                [attr.data-automation-id]=\"'file-download'\"\n                tabindex=\"-1\"\n              ></button>\n              <button\n                *ngIf=\"!disabled\"\n                type=\"button\"\n                theme=\"icon\"\n                icon=\"close\"\n                (click)=\"customDelete(file)\"\n                [attr.data-automation-id]=\"'file-remove'\"\n                tabindex=\"-1\"\n              ></button>\n            </div>\n          </div>\n          <novo-loading *ngIf=\"!file.loaded\"></novo-loading>\n        </div>\n      </div>\n    </ng-template>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.NovoLabelService }, { type: i2.NovoDragulaService }]; }, { fileInput: [{
            type: ViewChild,
            args: ['fileInput', { static: true }]
        }], fileOutput: [{
            type: ViewChild,
            args: ['fileOutput', { static: true }]
        }], container: [{
            type: ViewChild,
            args: ['container', { read: ViewContainerRef, static: true }]
        }], name: [{
            type: Input
        }], multiple: [{
            type: Input
        }], disabled: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], layoutOptions: [{
            type: Input
        }], value: [{
            type: Input
        }], dataFeatureId: [{
            type: Input
        }], edit: [{
            type: Output
        }], save: [{
            type: Output
        }], delete: [{
            type: Output
        }], upload: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNO0FBQ04sT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFVBQVUsRUFJVixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFFWCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxNQUFNO0FBQ04sT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQWtCdEMsZ0NBVUE7SUFMRSxnTkFBd0I7SUFMMUIsaUJBVUE7OztJQVBFLGtDQUFhO0lBQ2IsaUNBQWdCLDZCQUFBLHlDQUFBOzs7O0lBTWxCLGdDQVVBO0lBTEUsd05BQThCO0lBTGhDLGlCQVVBOzs7SUFQRSxrQ0FBYTtJQUNiLGlDQUFnQiw2QkFBQSx5Q0FBQTs7O0lBT2hCLGdDQUNFO0lBQUEsMkJBQ0U7SUFBQSx3QkFBNEI7SUFBQSxZQUM1QjtJQUFBLGtDQUFxQjtJQUFBLFlBQTBCO0lBQUEsaUJBQVM7SUFDMUQsaUJBQU07SUFDUixpQkFBUTs7O0lBTHdCLGtDQUFpQjtJQUVqQixlQUM1QjtJQUQ0QixzR0FDNUI7SUFBcUIsZUFBMEI7SUFBMUIsaURBQTBCOzs7SUFHbkQsaUNBQ0U7SUFBQSw0QkFBTTtJQUFBLFlBQXVDO0lBQUEsaUJBQU87SUFDcEQsNkJBQ0c7SUFBQSxZQUFnQjtJQUFBLGtDQUFxQjtJQUFBLFlBQTBCO0lBQUEs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aUI7Z0JBQzNCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNoQyxRQUFRLEVBQUUsc3RJQXlHVDthQUNGOztrQkFFRSxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUV2QyxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUV4QyxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFHL0QsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBWUwsS0FBSzs7a0JBRUwsS0FBSzs7a0JBR0wsTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTTs7a0JBRU4sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUZW1wbGF0ZVJlZixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuLy8gQVBQXG5pbXBvcnQgeyBOb3ZvTGFiZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvbm92by1sYWJlbC1zZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9EcmFndWxhU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2VsZW1lbnRzL2RyYWd1bGEvRHJhZ3VsYVNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0ZpbGUgfSBmcm9tICcuL2V4dHJhcy9maWxlL0ZpbGUnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IEZJTEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRmlsZUlucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuY29uc3QgTEFZT1VUX0RFRkFVTFRTID0geyBvcmRlcjogJ2RlZmF1bHQnLCBkb3dubG9hZDogdHJ1ZSwgcmVtb3ZhYmxlOiB0cnVlLCBsYWJlbFN0eWxlOiAnZGVmYXVsdCcsIGRyYWdnYWJsZTogZmFsc2UgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWxlLWlucHV0JyxcbiAgcHJvdmlkZXJzOiBbRklMRV9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjZmlsZUlucHV0PlxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaW5wdXQtZ3JvdXBcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAoY2hhbmdlKT1cImNoZWNrKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiZGF0YUZlYXR1cmVJZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwibmFtZVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJjdXN0b21DaGVjaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cImRhdGFGZWF0dXJlSWRcIlxuICAgICAgICAvPlxuICAgICAgICA8c2VjdGlvbiBbbmdTd2l0Y2hdPVwibGF5b3V0T3B0aW9ucy5sYWJlbFN0eWxlXCI+XG4gICAgICAgICAgPGxhYmVsICpuZ1N3aXRjaENhc2U9XCInbm8tYm94J1wiIFthdHRyLmZvcl09XCJuYW1lXCIgY2xhc3M9XCJuby1ib3hcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWRyb3B6b25lXCI+PC9pPnt7IHBsYWNlaG9sZGVyIHx8IGxhYmVscy5jaG9vc2VBRmlsZSB9fSB7eyBsYWJlbHMub3IgfX1cbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImxpbmtcIj57eyBsYWJlbHMuY2xpY2tUb0Jyb3dzZSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgKm5nU3dpdGNoRGVmYXVsdCBbYXR0ci5mb3JdPVwibmFtZVwiIGNsYXNzPVwiYm94ZWRcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IHBsYWNlaG9sZGVyIHx8IGxhYmVscy5jaG9vc2VBRmlsZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzbWFsbFxuICAgICAgICAgICAgICA+e3sgbGFiZWxzLm9yIH19IDxzdHJvbmcgY2xhc3M9XCJsaW5rXCI+e3sgbGFiZWxzLmNsaWNrVG9Ccm93c2UgfX08L3N0cm9uZz48L3NtYWxsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2ZpbGVPdXRwdXQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1vdXRwdXQtZ3JvdXBcIiBbZHJhZ3VsYV09XCJmaWxlT3V0cHV0QmFnXCIgW2RyYWd1bGFNb2RlbF09XCJmaWxlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1pdGVtXCIgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXNcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8aSAqbmdJZj1cImxheW91dE9wdGlvbnMuZHJhZ2dhYmxlXCIgY2xhc3M9XCJiaGktbW92ZVwiPjwvaT5cbiAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJmaWxlLmxpbmtcIlxuICAgICAgICAgICAgPjxzcGFuXG4gICAgICAgICAgICAgID48YSBocmVmPVwie3sgZmlsZS5saW5rIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgZmlsZS5uYW1lIHwgZGVjb2RlVVJJIH19PC9hPjwvc3BhblxuICAgICAgICAgICAgPjxzcGFuICpuZ0lmPVwiZmlsZS5kZXNjcmlwdGlvblwiPnx8PC9zcGFuPjxzcGFuPnt7IGZpbGUuZGVzY3JpcHRpb24gfX08L3NwYW4+PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8bGFiZWwgKm5nSWY9XCIhZmlsZS5saW5rXCI+e3sgZmlsZS5uYW1lIHwgZGVjb2RlVVJJIH19PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1hY3Rpb25zJ1wiICpuZ0lmPVwiZmlsZS5sb2FkZWRcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZG93bmxvYWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInNhdmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkb3dubG9hZChmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWRvd25sb2FkJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWRpc2FibGVkICYmIChsYXlvdXRPcHRpb25zLnJlbW92YWJsZSB8fCAoIWxheW91dE9wdGlvbnMucmVtb3ZhYmxlICYmIGxheW91dE9wdGlvbnMucmVtb3ZhYmxlV2hlbk5ldyAmJiAhZmlsZS5saW5rKSlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtcmVtb3ZlJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmVkaXQgJiYgIWRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3VzdG9tRWRpdChmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWVkaXQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJzYXZlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3VzdG9tU2F2ZShmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWRvd25sb2FkJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1c3RvbURlbGV0ZShmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLXJlbW92ZSdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bm92by1sb2FkaW5nICpuZ0lmPVwiIWZpbGUubG9hZGVkXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpbGVJbnB1dEVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGZpbGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnZmlsZU91dHB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGZpbGVPdXRwdXQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheW91dE9wdGlvbnM6IHtcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZWRpdD86IGJvb2xlYW47XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbUFjdGlvbnM6IGJvb2xlYW47XG4gICAgcmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgICBjdXN0b21WYWxpZGF0aW9uPzogeyBhY3Rpb246IHN0cmluZzsgZm46IEZ1bmN0aW9uIH1bXTtcbiAgICByZW1vdmFibGVXaGVuTmV3PzogYm9vbGVhbjtcbiAgfTtcbiAgQElucHV0KClcbiAgdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZGF0YUZlYXR1cmVJZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZWxlbWVudHM6IEFycmF5PGFueT4gPSBbXTtcbiAgZmlsZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgbW9kZWw6IGFueTtcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbW1hbmRzOiBhbnk7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIHRhcmdldDogYW55O1xuICBmaWxlT3V0cHV0QmFnOiBzdHJpbmc7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG4gIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHsgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyBsYWJlbHM6IE5vdm9MYWJlbFNlcnZpY2UsIHByaXZhdGUgZHJhZ3VsYTogTm92b0RyYWd1bGFTZXJ2aWNlKSB7XG4gICAgdGhpcy5jb21tYW5kcyA9IHtcbiAgICAgIGRyYWdlbnRlcjogdGhpcy5kcmFnRW50ZXJIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkcmFnbGVhdmU6IHRoaXMuZHJhZ0xlYXZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJhZ292ZXI6IHRoaXMuZHJhZ092ZXJIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICBkcm9wOiB0aGlzLmRyb3BIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcm9wJ10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCB0aGlzLmNvbW1hbmRzW3R5cGVdKTtcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZUxheW91dCgpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZURyYWd1bGEoKTtcbiAgICB0aGlzLnNldEluaXRpYWxGaWxlTGlzdCgpO1xuICAgIHRoaXMuZGF0YUZlYXR1cmVJZCA9IHRoaXMuZGF0YUZlYXR1cmVJZCA/IHRoaXMuZGF0YUZlYXR1cmVJZCA6IHRoaXMubmFtZTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIFsnZHJhZ2VudGVyJywgJ2RyYWdsZWF2ZScsICdkcmFnb3ZlcicsICdkcm9wJ10uZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCB0aGlzLmNvbW1hbmRzW3R5cGVdKTtcbiAgICB9KTtcbiAgICBjb25zdCBkcmFndWxhSGFzRmlsZU91dHB1dEJhZyA9IHRoaXMuZHJhZ3VsYS5iYWdzLmxlbmd0aCA+IDAgJiYgdGhpcy5kcmFndWxhLmJhZ3MuZmlsdGVyKCh4KSA9PiB4Lm5hbWUgPT09IHRoaXMuZmlsZU91dHB1dEJhZykubGVuZ3RoID4gMDtcbiAgICBpZiAoZHJhZ3VsYUhhc0ZpbGVPdXRwdXRCYWcpIHtcbiAgICAgIHRoaXMuZHJhZ3VsYS5kZXN0cm95KHRoaXMuZmlsZU91dHB1dEJhZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICB1cGRhdGVMYXlvdXQoKSB7XG4gICAgdGhpcy5sYXlvdXRPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgTEFZT1VUX0RFRkFVTFRTLCB0aGlzLmxheW91dE9wdGlvbnMpO1xuICAgIHRoaXMuaW5zZXJ0VGVtcGxhdGVzQmFzZWRPbkxheW91dCgpO1xuICB9XG5cbiAgaW5zZXJ0VGVtcGxhdGVzQmFzZWRPbkxheW91dCgpIHtcbiAgICBsZXQgb3JkZXI7XG4gICAgc3dpdGNoICh0aGlzLmxheW91dE9wdGlvbnNbJ29yZGVyJ10pIHtcbiAgICAgIGNhc2UgJ2Rpc3BsYXlGaWxlc0JlbG93JzpcbiAgICAgICAgb3JkZXIgPSBbJ2ZpbGVJbnB1dCcsICdmaWxlT3V0cHV0J107XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgb3JkZXIgPSBbJ2ZpbGVPdXRwdXQnLCAnZmlsZUlucHV0J107XG4gICAgfVxuICAgIG9yZGVyLmZvckVhY2goKHRlbXBsYXRlKSA9PiB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpc1t0ZW1wbGF0ZV0sIDApO1xuICAgIH0pO1xuICAgIHJldHVybiBvcmRlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVEcmFndWxhKCkge1xuICAgIHRoaXMuZmlsZU91dHB1dEJhZyA9IGBmaWxlLW91dHB1dC0ke3RoaXMuZHJhZ3VsYS5iYWdzLmxlbmd0aH1gO1xuICAgIHRoaXMuZHJhZ3VsYS5zZXRPcHRpb25zKHRoaXMuZmlsZU91dHB1dEJhZywge1xuICAgICAgbW92ZXM6IChlbCwgY29udGFpbmVyLCBoYW5kbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0T3B0aW9ucy5kcmFnZ2FibGU7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc2V0SW5pdGlhbEZpbGVMaXN0KCkge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmZpbGVzID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBkcmFnRW50ZXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9ICdjb3B5JztcbiAgICB0aGlzLnRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIH1cblxuICBkcmFnTGVhdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy50YXJnZXQgPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBkcmFnT3ZlckhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIG5vLW9wXG4gIH1cblxuICBkcm9wSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSAhPT0gJ0ZpbGVzJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB0aGlzLmxheW91dE9wdGlvbnM7XG4gICAgY29uc3QgZmlsZWxpc3QgPSBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgaWYgKG9wdGlvbnMuY3VzdG9tQWN0aW9ucykge1xuICAgICAgdGhpcy51cGxvYWQuZW1pdCh0aGlzLm11bHRpcGxlID8gZmlsZWxpc3QgOiBbZmlsZWxpc3RbMF1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzKHRoaXMubXVsdGlwbGUgPyBmaWxlbGlzdCA6IFtmaWxlbGlzdFswXV0pO1xuICAgIH1cbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgd3JpdGVWYWx1ZShtb2RlbDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGNoZWNrKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9jZXNzKEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LmZpbGVzKSk7XG4gIH1cblxuICB2YWxpZGF0ZShmaWxlcyk6IGJvb2xlYW4ge1xuICAgIGxldCBwYXNzZWRWYWxpZGF0aW9uID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5sYXlvdXRPcHRpb25zLmN1c3RvbVZhbGlkYXRpb24pIHtcbiAgICAgIHRoaXMubGF5b3V0T3B0aW9ucy5jdXN0b21WYWxpZGF0aW9uXG4gICAgICAgIC5maWx0ZXIoKHZhbGlkYXRpb24pID0+IHZhbGlkYXRpb24uYWN0aW9uID09PSAndXBsb2FkJylcbiAgICAgICAgLmZvckVhY2goKHVwbG9hZFZhbGlkYXRpb24pID0+IHtcbiAgICAgICAgICBwYXNzZWRWYWxpZGF0aW9uID0gdXBsb2FkVmFsaWRhdGlvbi5mbihmaWxlcykgJiYgcGFzc2VkVmFsaWRhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwYXNzZWRWYWxpZGF0aW9uO1xuICB9XG5cbiAgcHJvY2VzcyhmaWxlbGlzdCkge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlKGZpbGVsaXN0KSkge1xuICAgICAgUHJvbWlzZS5hbGwoZmlsZWxpc3QubWFwKChmaWxlKSA9PiB0aGlzLnJlYWRGaWxlKGZpbGUpKSkudGhlbigoZmlsZXMpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICB0aGlzLmZpbGVzLnB1c2goLi4uZmlsZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZmlsZXMgPSBmaWxlcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5maWxlcztcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWQoZmlsZSkge1xuICAgIHdpbmRvdy5vcGVuKGZpbGUuZGF0YVVSTCwgJ19ibGFuaycpO1xuICB9XG5cbiAgcmVtb3ZlKGZpbGUpIHtcbiAgICB0aGlzLmZpbGVzLnNwbGljZSh0aGlzLmZpbGVzLmZpbmRJbmRleCgoZikgPT4gZi5uYW1lID09PSBmaWxlLm5hbWUgJiYgZi5zaXplID09PSBmaWxlLnNpemUpLCAxKTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5maWxlcztcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICByZWFkRmlsZShmaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRmlsZShmaWxlKS5yZWFkKCk7XG4gIH1cblxuICBjdXN0b21FZGl0KGZpbGUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbVNhdmUoZmlsZSkge1xuICAgIHRoaXMuc2F2ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tRGVsZXRlKGZpbGUpIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tQ2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==