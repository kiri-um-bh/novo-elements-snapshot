// NG2
import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, TemplateRef, ViewChild, ViewContainerRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NovoDragulaService } from '../../../../elements/dragula/DragulaService';
// APP
import { NovoLabelService } from '../../../../services/novo-label-service';
import { NovoFile } from './extras/file/File';
import * as i0 from "@angular/core";
import * as i1 from "../../../../services/novo-label-service";
import * as i2 from "../../../../elements/dragula/DragulaService";
import * as i3 from "@angular/common";
import * as i4 from "../../../dragula/Dragula";
import * as i5 from "../../../button/Button";
import * as i6 from "../../../loading/Loading";
import * as i7 from "../../../../pipes/decode-uri/DecodeURI";
const _c0 = ["fileInput"];
const _c1 = ["fileOutput"];
const _c2 = ["container"];
function NovoFileInputElement_ng_template_2_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 8);
    i0.ɵɵlistener("change", function NovoFileInputElement_ng_template_2_input_1_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.check($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("name", ctx_r5.name);
    i0.ɵɵattribute("id", ctx_r5.name)("multiple", ctx_r5.multiple)("data-feature-id", ctx_r5.dataFeatureId);
} }
function NovoFileInputElement_ng_template_2_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 8);
    i0.ɵɵlistener("change", function NovoFileInputElement_ng_template_2_input_2_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.customCheck($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
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
    const ctx_r7 = i0.ɵɵnextContext(2);
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
    const ctx_r8 = i0.ɵɵnextContext(2);
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
    const ctx_r2 = i0.ɵɵnextContext();
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
    const file_r14 = i0.ɵɵnextContext().$implicit;
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
    const file_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, file_r14.name));
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const file_r14 = i0.ɵɵnextContext(3).$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.download(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-download");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_1_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r32); const file_r14 = i0.ɵɵnextContext(3).$implicit; const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.remove(file_r14); });
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
    const file_r14 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.layoutOptions.download);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r23.disabled && (ctx_r23.layoutOptions.removable || !ctx_r23.layoutOptions.removable && ctx_r23.layoutOptions.removableWhenNew && !file_r14.link));
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const file_r14 = i0.ɵɵnextContext(3).$implicit; const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.customEdit(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-edit");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r42); const file_r14 = i0.ɵɵnextContext(3).$implicit; const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.customSave(file_r14); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵattribute("data-automation-id", "file-download");
} }
function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function NovoFileInputElement_ng_template_4_div_1_div_4_div_2_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const file_r14 = i0.ɵɵnextContext(3).$implicit; const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.customDelete(file_r14); });
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
    const ctx_r24 = i0.ɵɵnextContext(4);
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
    const ctx_r18 = i0.ɵɵnextContext(3);
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
    const file_r14 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
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
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("dragula", ctx_r4.fileOutputBag)("dragulaModel", ctx_r4.files);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.files);
} }
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
        switch (this.layoutOptions.order) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoFileInputElement, [{
        type: Component,
        args: [{
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
  `,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3RyYXZpcy9idWlsZC9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3Byb2plY3RzL25vdm8tZWxlbWVudHMvc3JjLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9leHRyYXMvZmlsZS9GaWxlSW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtBQUNOLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDakYsTUFBTTtBQUNOLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFrQnRDLGdDQVVBO0lBTEUsa05BQXdCO0lBTDFCLGlCQVVBOzs7SUFQRSxrQ0FBYTtJQUNiLGlDQUFnQiw2QkFBQSx5Q0FBQTs7OztJQU1sQixnQ0FVQTtJQUxFLDBOQUE4QjtJQUxoQyxpQkFVQTs7O0lBUEUsa0NBQWE7SUFDYixpQ0FBZ0IsNkJBQUEseUNBQUE7OztJQU9oQixnQ0FDRTtJQUFBLDJCQUNFO0lBQUEsd0JBQTRCO0lBQUEsWUFDNUI7SUFBQSxrQ0FBcUI7SUFBQSxZQUEwQjtJQUFBLGlCQUFTO0lBQzFELGlCQUFNO0lBQ1IsaUJBQVE7OztJQUx3QixrQ0FBaUI7SUFFakIsZUFDNUI7SUFENEIsc0dBQzVCO0lBQXFCLGVBQTBCO0lBQTFCLGlEQUEwQjs7O0lBR25ELGlDQUNFO0lBQUEsNEJBQU07SUFBQSxZQUF1QztJQUFBLGlCQUFPO0lB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Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUdUO2FBQ0Y7NkhBR0MsU0FBUztrQkFEUixTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHeEMsVUFBVTtrQkFEVCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFHekMsU0FBUztrQkFEUixTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBSWhFLElBQUk7a0JBREgsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLFFBQVE7a0JBRFAsS0FBSztZQUdOLFdBQVc7a0JBRFYsS0FBSztZQUdOLGFBQWE7a0JBRFosS0FBSztZQWFOLEtBQUs7a0JBREosS0FBSztZQUdOLGFBQWE7a0JBRFosS0FBSztZQUlOLElBQUk7a0JBREgsTUFBTTtZQUdQLElBQUk7a0JBREgsTUFBTTtZQUdQLE1BQU07a0JBREwsTUFBTTtZQUdQLE1BQU07a0JBREwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTm92b0RyYWd1bGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZWxlbWVudHMvZHJhZ3VsYS9EcmFndWxhU2VydmljZSc7XG4vLyBBUFBcbmltcG9ydCB7IE5vdm9MYWJlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy9ub3ZvLWxhYmVsLXNlcnZpY2UnO1xuaW1wb3J0IHsgTm92b0ZpbGUgfSBmcm9tICcuL2V4dHJhcy9maWxlL0ZpbGUnO1xuXG4vLyBWYWx1ZSBhY2Nlc3NvciBmb3IgdGhlIGNvbXBvbmVudCAoc3VwcG9ydHMgbmdNb2RlbClcbmNvbnN0IEZJTEVfVkFMVUVfQUNDRVNTT1IgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOb3ZvRmlsZUlucHV0RWxlbWVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuY29uc3QgTEFZT1VUX0RFRkFVTFRTID0geyBvcmRlcjogJ2RlZmF1bHQnLCBkb3dubG9hZDogdHJ1ZSwgcmVtb3ZhYmxlOiB0cnVlLCBsYWJlbFN0eWxlOiAnZGVmYXVsdCcsIGRyYWdnYWJsZTogZmFsc2UgfTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1maWxlLWlucHV0JyxcbiAgcHJvdmlkZXJzOiBbRklMRV9WQUxVRV9BQ0NFU1NPUl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAjY29udGFpbmVyPjwvZGl2PlxuICAgIDxuZy10ZW1wbGF0ZSAjZmlsZUlucHV0PlxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaW5wdXQtZ3JvdXBcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAqbmdJZj1cIiFsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICBbYXR0ci5pZF09XCJuYW1lXCJcbiAgICAgICAgICAoY2hhbmdlKT1cImNoZWNrKCRldmVudClcIlxuICAgICAgICAgIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlXCJcbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICBbYXR0ci5kYXRhLWZlYXR1cmUtaWRdPVwiZGF0YUZlYXR1cmVJZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwibmFtZVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJjdXN0b21DaGVjaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cImRhdGFGZWF0dXJlSWRcIlxuICAgICAgICAvPlxuICAgICAgICA8c2VjdGlvbiBbbmdTd2l0Y2hdPVwibGF5b3V0T3B0aW9ucy5sYWJlbFN0eWxlXCI+XG4gICAgICAgICAgPGxhYmVsICpuZ1N3aXRjaENhc2U9XCInbm8tYm94J1wiIFthdHRyLmZvcl09XCJuYW1lXCIgY2xhc3M9XCJuby1ib3hcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmhpLWRyb3B6b25lXCI+PC9pPnt7IHBsYWNlaG9sZGVyIHx8IGxhYmVscy5jaG9vc2VBRmlsZSB9fSB7eyBsYWJlbHMub3IgfX1cbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImxpbmtcIj57eyBsYWJlbHMuY2xpY2tUb0Jyb3dzZSB9fTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWwgKm5nU3dpdGNoRGVmYXVsdCBbYXR0ci5mb3JdPVwibmFtZVwiIGNsYXNzPVwiYm94ZWRcIj5cbiAgICAgICAgICAgIDxzcGFuPnt7IHBsYWNlaG9sZGVyIHx8IGxhYmVscy5jaG9vc2VBRmlsZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxzbWFsbFxuICAgICAgICAgICAgICA+e3sgbGFiZWxzLm9yIH19IDxzdHJvbmcgY2xhc3M9XCJsaW5rXCI+e3sgbGFiZWxzLmNsaWNrVG9Ccm93c2UgfX08L3N0cm9uZz48L3NtYWxsXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGUgI2ZpbGVPdXRwdXQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1vdXRwdXQtZ3JvdXBcIiBbZHJhZ3VsYV09XCJmaWxlT3V0cHV0QmFnXCIgW2RyYWd1bGFNb2RlbF09XCJmaWxlc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1pdGVtXCIgKm5nRm9yPVwibGV0IGZpbGUgb2YgZmlsZXNcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8aSAqbmdJZj1cImxheW91dE9wdGlvbnMuZHJhZ2dhYmxlXCIgY2xhc3M9XCJiaGktbW92ZVwiPjwvaT5cbiAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJmaWxlLmxpbmtcIlxuICAgICAgICAgICAgPjxzcGFuXG4gICAgICAgICAgICAgID48YSBocmVmPVwie3sgZmlsZS5saW5rIH19XCIgdGFyZ2V0PVwiX2JsYW5rXCI+e3sgZmlsZS5uYW1lIHwgZGVjb2RlVVJJIH19PC9hPjwvc3BhblxuICAgICAgICAgICAgPjxzcGFuICpuZ0lmPVwiZmlsZS5kZXNjcmlwdGlvblwiPnx8PC9zcGFuPjxzcGFuPnt7IGZpbGUuZGVzY3JpcHRpb24gfX08L3NwYW4+PC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8bGFiZWwgKm5nSWY9XCIhZmlsZS5saW5rXCI+e3sgZmlsZS5uYW1lIHwgZGVjb2RlVVJJIH19PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1hY3Rpb25zJ1wiICpuZ0lmPVwiZmlsZS5sb2FkZWRcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuZG93bmxvYWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cInNhdmVcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkb3dubG9hZChmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWRvd25sb2FkJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWRpc2FibGVkICYmIChsYXlvdXRPcHRpb25zLnJlbW92YWJsZSB8fCAoIWxheW91dE9wdGlvbnMucmVtb3ZhYmxlICYmIGxheW91dE9wdGlvbnMucmVtb3ZhYmxlV2hlbk5ldyAmJiAhZmlsZS5saW5rKSlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgaWNvbj1cImNsb3NlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlKGZpbGUpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtcmVtb3ZlJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmVkaXQgJiYgIWRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3VzdG9tRWRpdChmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWVkaXQnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJzYXZlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiY3VzdG9tU2F2ZShmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLWRvd25sb2FkJ1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1c3RvbURlbGV0ZShmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLXJlbW92ZSdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bm92by1sb2FkaW5nICpuZ0lmPVwiIWZpbGUubG9hZGVkXCI+PC9ub3ZvLWxvYWRpbmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgTm92b0ZpbGVJbnB1dEVsZW1lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGZpbGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnZmlsZU91dHB1dCcsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGZpbGVPdXRwdXQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiwgc3RhdGljOiB0cnVlIH0pXG4gIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZjtcblxuICBASW5wdXQoKVxuICBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIG11bHRpcGxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGxheW91dE9wdGlvbnM6IHtcbiAgICBvcmRlcj86IHN0cmluZztcbiAgICBkb3dubG9hZD86IGJvb2xlYW47XG4gICAgZWRpdD86IGJvb2xlYW47XG4gICAgbGFiZWxTdHlsZT86IHN0cmluZztcbiAgICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICAgIGN1c3RvbUFjdGlvbnM6IGJvb2xlYW47XG4gICAgcmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgICBjdXN0b21WYWxpZGF0aW9uPzogeyBhY3Rpb246IHN0cmluZzsgZm46IEZ1bmN0aW9uIH1bXTtcbiAgICByZW1vdmFibGVXaGVuTmV3PzogYm9vbGVhbjtcbiAgfTtcbiAgQElucHV0KClcbiAgdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KClcbiAgZGF0YUZlYXR1cmVJZDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBlZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHNhdmU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZGVsZXRlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIHVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZWxlbWVudHM6IEFycmF5PGFueT4gPSBbXTtcbiAgZmlsZXM6IEFycmF5PGFueT4gPSBbXTtcbiAgbW9kZWw6IGFueTtcbiAgYWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGNvbW1hbmRzOiBhbnk7XG4gIHZpc2libGU6IGJvb2xlYW47XG4gIHRhcmdldDogYW55O1xuICBmaWxlT3V0cHV0QmFnOiBzdHJpbmc7XG5cbiAgb25Nb2RlbENoYW5nZTogRnVuY3Rpb24gPSAoKSA9PiB7fTtcbiAgb25Nb2RlbFRvdWNoZWQ6IEZ1bmN0aW9uID0gKCkgPT4ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGRyYWd1bGE6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29tbWFuZHMgPSB7XG4gICAgICBkcmFnZW50ZXI6IHRoaXMuZHJhZ0VudGVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJhZ2xlYXZlOiB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyYWdvdmVyOiB0aGlzLmRyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJvcDogdGhpcy5kcm9wSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgdGhpcy5jb21tYW5kc1t0eXBlXSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVEcmFndWxhKCk7XG4gICAgdGhpcy5zZXRJbml0aWFsRmlsZUxpc3QoKTtcbiAgICB0aGlzLmRhdGFGZWF0dXJlSWQgPSB0aGlzLmRhdGFGZWF0dXJlSWQgPyB0aGlzLmRhdGFGZWF0dXJlSWQgOiB0aGlzLm5hbWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgdGhpcy5jb21tYW5kc1t0eXBlXSk7XG4gICAgfSk7XG4gICAgY29uc3QgZHJhZ3VsYUhhc0ZpbGVPdXRwdXRCYWcgPVxuICAgICAgdGhpcy5kcmFndWxhLmJhZ3MubGVuZ3RoID4gMCAmJiB0aGlzLmRyYWd1bGEuYmFncy5maWx0ZXIoKHgpID0+IHgubmFtZSA9PT0gdGhpcy5maWxlT3V0cHV0QmFnKS5sZW5ndGggPiAwO1xuICAgIGlmIChkcmFndWxhSGFzRmlsZU91dHB1dEJhZykge1xuICAgICAgdGhpcy5kcmFndWxhLmRlc3Ryb3kodGhpcy5maWxlT3V0cHV0QmFnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZUxheW91dCgpIHtcbiAgICB0aGlzLmxheW91dE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBMQVlPVVRfREVGQVVMVFMsIHRoaXMubGF5b3V0T3B0aW9ucyk7XG4gICAgdGhpcy5pbnNlcnRUZW1wbGF0ZXNCYXNlZE9uTGF5b3V0KCk7XG4gIH1cblxuICBpbnNlcnRUZW1wbGF0ZXNCYXNlZE9uTGF5b3V0KCkge1xuICAgIGxldCBvcmRlcjtcbiAgICBzd2l0Y2ggKHRoaXMubGF5b3V0T3B0aW9ucy5vcmRlcikge1xuICAgICAgY2FzZSAnZGlzcGxheUZpbGVzQmVsb3cnOlxuICAgICAgICBvcmRlciA9IFsnZmlsZUlucHV0JywgJ2ZpbGVPdXRwdXQnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBvcmRlciA9IFsnZmlsZU91dHB1dCcsICdmaWxlSW5wdXQnXTtcbiAgICB9XG4gICAgb3JkZXIuZm9yRWFjaCgodGVtcGxhdGUpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzW3RlbXBsYXRlXSwgMCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9XG5cbiAgaW5pdGlhbGl6ZURyYWd1bGEoKSB7XG4gICAgdGhpcy5maWxlT3V0cHV0QmFnID0gYGZpbGUtb3V0cHV0LSR7dGhpcy5kcmFndWxhLmJhZ3MubGVuZ3RofWA7XG4gICAgdGhpcy5kcmFndWxhLnNldE9wdGlvbnModGhpcy5maWxlT3V0cHV0QmFnLCB7XG4gICAgICBtb3ZlczogKGVsLCBjb250YWluZXIsIGhhbmRsZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRPcHRpb25zLmRyYWdnYWJsZTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzZXRJbml0aWFsRmlsZUxpc3QoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdFbnRlckhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ2NvcHknO1xuICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGRyYWdMZWF2ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRyYWdPdmVySGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gbm8tb3BcbiAgfVxuXG4gIGRyb3BIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzWzBdICE9PSAnRmlsZXMnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHRoaXMubGF5b3V0T3B0aW9ucztcbiAgICBjb25zdCBmaWxlbGlzdCA9IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICBpZiAob3B0aW9ucy5jdXN0b21BY3Rpb25zKSB7XG4gICAgICB0aGlzLnVwbG9hZC5lbWl0KHRoaXMubXVsdGlwbGUgPyBmaWxlbGlzdCA6IFtmaWxlbGlzdFswXV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3ModGhpcy5tdWx0aXBsZSA/IGZpbGVsaXN0IDogW2ZpbGVsaXN0WzBdXSk7XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB3cml0ZVZhbHVlKG1vZGVsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIHRoaXMub25Nb2RlbENoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgY2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb2Nlc3MoQXJyYXkuZnJvbShldmVudC50YXJnZXQuZmlsZXMpKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGZpbGVzKTogYm9vbGVhbiB7XG4gICAgbGV0IHBhc3NlZFZhbGlkYXRpb24gPSB0cnVlO1xuICAgIGlmICh0aGlzLmxheW91dE9wdGlvbnMuY3VzdG9tVmFsaWRhdGlvbikge1xuICAgICAgdGhpcy5sYXlvdXRPcHRpb25zLmN1c3RvbVZhbGlkYXRpb25cbiAgICAgICAgLmZpbHRlcigodmFsaWRhdGlvbikgPT4gdmFsaWRhdGlvbi5hY3Rpb24gPT09ICd1cGxvYWQnKVxuICAgICAgICAuZm9yRWFjaCgodXBsb2FkVmFsaWRhdGlvbikgPT4ge1xuICAgICAgICAgIHBhc3NlZFZhbGlkYXRpb24gPSB1cGxvYWRWYWxpZGF0aW9uLmZuKGZpbGVzKSAmJiBwYXNzZWRWYWxpZGF0aW9uO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NlZFZhbGlkYXRpb247XG4gIH1cblxuICBwcm9jZXNzKGZpbGVsaXN0KSB7XG4gICAgaWYgKHRoaXMudmFsaWRhdGUoZmlsZWxpc3QpKSB7XG4gICAgICBQcm9taXNlLmFsbChmaWxlbGlzdC5tYXAoKGZpbGUpID0+IHRoaXMucmVhZEZpbGUoZmlsZSkpKS50aGVuKChmaWxlcykgPT4ge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgIHRoaXMuZmlsZXMucHVzaCguLi5maWxlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IGZpbGVzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kZWwgPSB0aGlzLmZpbGVzO1xuICAgICAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkb3dubG9hZChmaWxlKSB7XG4gICAgd2luZG93Lm9wZW4oZmlsZS5kYXRhVVJMLCAnX2JsYW5rJyk7XG4gIH1cblxuICByZW1vdmUoZmlsZSkge1xuICAgIHRoaXMuZmlsZXMuc3BsaWNlKFxuICAgICAgdGhpcy5maWxlcy5maW5kSW5kZXgoKGYpID0+IGYubmFtZSA9PT0gZmlsZS5uYW1lICYmIGYuc2l6ZSA9PT0gZmlsZS5zaXplKSxcbiAgICAgIDEsXG4gICAgKTtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5maWxlcztcbiAgICB0aGlzLm9uTW9kZWxDaGFuZ2UodGhpcy5tb2RlbCk7XG4gIH1cblxuICByZWFkRmlsZShmaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBOb3ZvRmlsZShmaWxlKS5yZWFkKCk7XG4gIH1cblxuICBjdXN0b21FZGl0KGZpbGUpIHtcbiAgICB0aGlzLmVkaXQuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbVNhdmUoZmlsZSkge1xuICAgIHRoaXMuc2F2ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tRGVsZXRlKGZpbGUpIHtcbiAgICB0aGlzLmRlbGV0ZS5lbWl0KGZpbGUpO1xuICB9XG5cbiAgY3VzdG9tQ2hlY2soZXZlbnQpIHtcbiAgICB0aGlzLnVwbG9hZC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cbiJdfQ==