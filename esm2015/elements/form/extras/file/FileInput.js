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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUlucHV0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Zvcm0vZXh0cmFzL2ZpbGUvRmlsZUlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU07QUFDTixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsVUFBVSxFQUlWLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUVYLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE1BQU07QUFDTixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7O0lBa0J0QyxnQ0FVQTtJQUxFLGtOQUF3QjtJQUwxQixpQkFVQTs7O0lBUEUsa0NBQWE7SUFDYixpQ0FBZ0IsNkJBQUEseUNBQUE7Ozs7SUFNbEIsZ0NBVUE7SUFMRSwwTkFBOEI7SUFMaEMsaUJBVUE7OztJQVBFLGtDQUFhO0lBQ2IsaUNBQWdCLDZCQUFBLHlDQUFBOzs7SUFPaEIsZ0NBQ0U7SUFBQSwyQkFDRTtJQUFBLHdCQUE0QjtJQUFBLFlBQzVCO0lBQUEsa0NBQXFCO0lBQUEsWUFBMEI7SUFBQSxpQkFBUztJQUMxRCxpQkFBTTtJQUNSLGlCQUFROzs7SUFMd0Isa0NBQWlCO0lBRWpCLGVBQzVCO0lBRDRCLHNHQUM1QjtJQUFxQixlQUEwQjtJQUExQixpREFBMEI7OztJQUduRCxpQ0FDRTtJQUFBLDRCQUFNO0lBQUEsWUFBdUM7SUFBQSxpQkFBTztJQUNwRCw2QkFDRztJQUFBLFlBQWdCO0lBQUEsa0NBQXFCO0lBQUEsWUFBMEI7SUFBQSxp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QUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFdkMsU0FBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFeEMsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7a0JBRy9ELEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQVlMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUdMLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU07O2tCQUVOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbi8vIEFQUFxuaW1wb3J0IHsgTm92b0xhYmVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL25vdm8tbGFiZWwtc2VydmljZSc7XG5pbXBvcnQgeyBOb3ZvRHJhZ3VsYVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9lbGVtZW50cy9kcmFndWxhL0RyYWd1bGFTZXJ2aWNlJztcbmltcG9ydCB7IE5vdm9GaWxlIH0gZnJvbSAnLi9leHRyYXMvZmlsZS9GaWxlJztcblxuLy8gVmFsdWUgYWNjZXNzb3IgZm9yIHRoZSBjb21wb25lbnQgKHN1cHBvcnRzIG5nTW9kZWwpXG5jb25zdCBGSUxFX1ZBTFVFX0FDQ0VTU09SID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm92b0ZpbGVJbnB1dEVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmNvbnN0IExBWU9VVF9ERUZBVUxUUyA9IHsgb3JkZXI6ICdkZWZhdWx0JywgZG93bmxvYWQ6IHRydWUsIHJlbW92YWJsZTogdHJ1ZSwgbGFiZWxTdHlsZTogJ2RlZmF1bHQnLCBkcmFnZ2FibGU6IGZhbHNlIH07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25vdm8tZmlsZS1pbnB1dCcsXG4gIHByb3ZpZGVyczogW0ZJTEVfVkFMVUVfQUNDRVNTT1JdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgI2NvbnRhaW5lcj48L2Rpdj5cbiAgICA8bmctdGVtcGxhdGUgI2ZpbGVJbnB1dD5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWlucHV0LWdyb3VwXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCIgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgKm5nSWY9XCIhbGF5b3V0T3B0aW9ucy5jdXN0b21BY3Rpb25zXCJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgW25hbWVdPVwibmFtZVwiXG4gICAgICAgICAgW2F0dHIuaWRdPVwibmFtZVwiXG4gICAgICAgICAgKGNoYW5nZSk9XCJjaGVjaygkZXZlbnQpXCJcbiAgICAgICAgICBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZVwiXG4gICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgW2F0dHIuZGF0YS1mZWF0dXJlLWlkXT1cImRhdGFGZWF0dXJlSWRcIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAqbmdJZj1cImxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICAgIFthdHRyLmlkXT1cIm5hbWVcIlxuICAgICAgICAgIChjaGFuZ2UpPVwiY3VzdG9tQ2hlY2soJGV2ZW50KVwiXG4gICAgICAgICAgW2F0dHIubXVsdGlwbGVdPVwibXVsdGlwbGVcIlxuICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgIFthdHRyLmRhdGEtZmVhdHVyZS1pZF09XCJkYXRhRmVhdHVyZUlkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNlY3Rpb24gW25nU3dpdGNoXT1cImxheW91dE9wdGlvbnMubGFiZWxTdHlsZVwiPlxuICAgICAgICAgIDxsYWJlbCAqbmdTd2l0Y2hDYXNlPVwiJ25vLWJveCdcIiBbYXR0ci5mb3JdPVwibmFtZVwiIGNsYXNzPVwibm8tYm94XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJoaS1kcm9wem9uZVwiPjwvaT57eyBwbGFjZWhvbGRlciB8fCBsYWJlbHMuY2hvb3NlQUZpbGUgfX0ge3sgbGFiZWxzLm9yIH19XG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJsaW5rXCI+e3sgbGFiZWxzLmNsaWNrVG9Ccm93c2UgfX08L3N0cm9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsICpuZ1N3aXRjaERlZmF1bHQgW2F0dHIuZm9yXT1cIm5hbWVcIiBjbGFzcz1cImJveGVkXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBwbGFjZWhvbGRlciB8fCBsYWJlbHMuY2hvb3NlQUZpbGUgfX08L3NwYW4+XG4gICAgICAgICAgICA8c21hbGxcbiAgICAgICAgICAgICAgPnt7IGxhYmVscy5vciB9fSA8c3Ryb25nIGNsYXNzPVwibGlua1wiPnt7IGxhYmVscy5jbGlja1RvQnJvd3NlIH19PC9zdHJvbmc+PC9zbWFsbFxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlICNmaWxlT3V0cHV0PlxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtb3V0cHV0LWdyb3VwXCIgW2RyYWd1bGFdPVwiZmlsZU91dHB1dEJhZ1wiIFtkcmFndWxhTW9kZWxdPVwiZmlsZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtaXRlbVwiICpuZ0Zvcj1cImxldCBmaWxlIG9mIGZpbGVzXCIgW2NsYXNzLmRpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgPGkgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmRyYWdnYWJsZVwiIGNsYXNzPVwiYmhpLW1vdmVcIj48L2k+XG4gICAgICAgICAgPGxhYmVsICpuZ0lmPVwiZmlsZS5saW5rXCJcbiAgICAgICAgICAgID48c3BhblxuICAgICAgICAgICAgICA+PGEgaHJlZj1cInt7IGZpbGUubGluayB9fVwiIHRhcmdldD1cIl9ibGFua1wiPnt7IGZpbGUubmFtZSB8IGRlY29kZVVSSSB9fTwvYT48L3NwYW5cbiAgICAgICAgICAgID48c3BhbiAqbmdJZj1cImZpbGUuZGVzY3JpcHRpb25cIj58fDwvc3Bhbj48c3Bhbj57eyBmaWxlLmRlc2NyaXB0aW9uIH19PC9zcGFuPjwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsICpuZ0lmPVwiIWZpbGUubGlua1wiPnt7IGZpbGUubmFtZSB8IGRlY29kZVVSSSB9fTwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFjdGlvbnNcIiBbYXR0ci5kYXRhLWF1dG9tYXRpb24taWRdPVwiJ2ZpbGUtYWN0aW9ucydcIiAqbmdJZj1cImZpbGUubG9hZGVkXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWxheW91dE9wdGlvbnMuY3VzdG9tQWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmRvd25sb2FkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJzYXZlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZG93bmxvYWQoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1kb3dubG9hZCdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZCAmJiAobGF5b3V0T3B0aW9ucy5yZW1vdmFibGUgfHwgKCFsYXlvdXRPcHRpb25zLnJlbW92YWJsZSAmJiBsYXlvdXRPcHRpb25zLnJlbW92YWJsZVdoZW5OZXcgJiYgIWZpbGUubGluaykpXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImljb25cIlxuICAgICAgICAgICAgICAgIGljb249XCJjbG9zZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZShmaWxlKVwiXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1hdXRvbWF0aW9uLWlkXT1cIidmaWxlLXJlbW92ZSdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJsYXlvdXRPcHRpb25zLmN1c3RvbUFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5lZGl0ICYmICFkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiZWRpdFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1c3RvbUVkaXQoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1lZGl0J1wiXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID48L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICpuZ0lmPVwibGF5b3V0T3B0aW9ucy5kb3dubG9hZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwic2F2ZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImN1c3RvbVNhdmUoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1kb3dubG9hZCdcIlxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJpY29uXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJjdXN0b21EZWxldGUoZmlsZSlcIlxuICAgICAgICAgICAgICAgIFthdHRyLmRhdGEtYXV0b21hdGlvbi1pZF09XCInZmlsZS1yZW1vdmUnXCJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgICAgPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5vdm8tbG9hZGluZyAqbmdJZj1cIiFmaWxlLmxvYWRlZFwiPjwvbm92by1sb2FkaW5nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE5vdm9GaWxlSW5wdXRFbGVtZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBmaWxlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ2ZpbGVPdXRwdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBmaWxlT3V0cHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWY7XG5cbiAgQElucHV0KClcbiAgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBtdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBsYXlvdXRPcHRpb25zOiB7XG4gICAgb3JkZXI/OiBzdHJpbmc7XG4gICAgZG93bmxvYWQ/OiBib29sZWFuO1xuICAgIGVkaXQ/OiBib29sZWFuO1xuICAgIGxhYmVsU3R5bGU/OiBzdHJpbmc7XG4gICAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgICBjdXN0b21BY3Rpb25zOiBib29sZWFuO1xuICAgIHJlbW92YWJsZT86IGJvb2xlYW47XG4gICAgY3VzdG9tVmFsaWRhdGlvbj86IHsgYWN0aW9uOiBzdHJpbmc7IGZuOiBGdW5jdGlvbiB9W107XG4gICAgcmVtb3ZhYmxlV2hlbk5ldz86IGJvb2xlYW47XG4gIH07XG4gIEBJbnB1dCgpXG4gIHZhbHVlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpXG4gIGRhdGFGZWF0dXJlSWQ6IHN0cmluZztcblxuICBAT3V0cHV0KClcbiAgZWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBzYXZlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGRlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICB1cGxvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGVsZW1lbnRzOiBBcnJheTxhbnk+ID0gW107XG4gIGZpbGVzOiBBcnJheTxhbnk+ID0gW107XG4gIG1vZGVsOiBhbnk7XG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBjb21tYW5kczogYW55O1xuICB2aXNpYmxlOiBib29sZWFuO1xuICB0YXJnZXQ6IGFueTtcbiAgZmlsZU91dHB1dEJhZzogc3RyaW5nO1xuXG4gIG9uTW9kZWxDaGFuZ2U6IEZ1bmN0aW9uID0gKCkgPT4geyB9O1xuICBvbk1vZGVsVG91Y2hlZDogRnVuY3Rpb24gPSAoKSA9PiB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgbGFiZWxzOiBOb3ZvTGFiZWxTZXJ2aWNlLCBwcml2YXRlIGRyYWd1bGE6IE5vdm9EcmFndWxhU2VydmljZSkge1xuICAgIHRoaXMuY29tbWFuZHMgPSB7XG4gICAgICBkcmFnZW50ZXI6IHRoaXMuZHJhZ0VudGVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJhZ2xlYXZlOiB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgIGRyYWdvdmVyOiB0aGlzLmRyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgZHJvcDogdGhpcy5kcm9wSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgIH07XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgdGhpcy5jb21tYW5kc1t0eXBlXSk7XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKTtcbiAgICB0aGlzLmluaXRpYWxpemVEcmFndWxhKCk7XG4gICAgdGhpcy5zZXRJbml0aWFsRmlsZUxpc3QoKTtcbiAgICB0aGlzLmRhdGFGZWF0dXJlSWQgPSB0aGlzLmRhdGFGZWF0dXJlSWQgPyB0aGlzLmRhdGFGZWF0dXJlSWQgOiB0aGlzLm5hbWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBbJ2RyYWdlbnRlcicsICdkcmFnbGVhdmUnLCAnZHJhZ292ZXInLCAnZHJvcCddLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgdGhpcy5jb21tYW5kc1t0eXBlXSk7XG4gICAgfSk7XG4gICAgY29uc3QgZHJhZ3VsYUhhc0ZpbGVPdXRwdXRCYWcgPSB0aGlzLmRyYWd1bGEuYmFncy5sZW5ndGggPiAwICYmIHRoaXMuZHJhZ3VsYS5iYWdzLmZpbHRlcigoeCkgPT4geC5uYW1lID09PSB0aGlzLmZpbGVPdXRwdXRCYWcpLmxlbmd0aCA+IDA7XG4gICAgaWYgKGRyYWd1bGFIYXNGaWxlT3V0cHV0QmFnKSB7XG4gICAgICB0aGlzLmRyYWd1bGEuZGVzdHJveSh0aGlzLmZpbGVPdXRwdXRCYWcpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICB9XG5cbiAgdXBkYXRlTGF5b3V0KCkge1xuICAgIHRoaXMubGF5b3V0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIExBWU9VVF9ERUZBVUxUUywgdGhpcy5sYXlvdXRPcHRpb25zKTtcbiAgICB0aGlzLmluc2VydFRlbXBsYXRlc0Jhc2VkT25MYXlvdXQoKTtcbiAgfVxuXG4gIGluc2VydFRlbXBsYXRlc0Jhc2VkT25MYXlvdXQoKSB7XG4gICAgbGV0IG9yZGVyO1xuICAgIHN3aXRjaCAodGhpcy5sYXlvdXRPcHRpb25zWydvcmRlciddKSB7XG4gICAgICBjYXNlICdkaXNwbGF5RmlsZXNCZWxvdyc6XG4gICAgICAgIG9yZGVyID0gWydmaWxlSW5wdXQnLCAnZmlsZU91dHB1dCddO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9yZGVyID0gWydmaWxlT3V0cHV0JywgJ2ZpbGVJbnB1dCddO1xuICAgIH1cbiAgICBvcmRlci5mb3JFYWNoKCh0ZW1wbGF0ZSkgPT4ge1xuICAgICAgdGhpcy5jb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXNbdGVtcGxhdGVdLCAwKTtcbiAgICB9KTtcbiAgICByZXR1cm4gb3JkZXI7XG4gIH1cblxuICBpbml0aWFsaXplRHJhZ3VsYSgpIHtcbiAgICB0aGlzLmZpbGVPdXRwdXRCYWcgPSBgZmlsZS1vdXRwdXQtJHt0aGlzLmRyYWd1bGEuYmFncy5sZW5ndGh9YDtcbiAgICB0aGlzLmRyYWd1bGEuc2V0T3B0aW9ucyh0aGlzLmZpbGVPdXRwdXRCYWcsIHtcbiAgICAgIG1vdmVzOiAoZWwsIGNvbnRhaW5lciwgaGFuZGxlKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheW91dE9wdGlvbnMuZHJhZ2dhYmxlO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluaXRpYWxGaWxlTGlzdCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5maWxlcyA9IHRoaXMudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZHJhZ0VudGVySGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSAnY29weSc7XG4gICAgdGhpcy50YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgZHJhZ0xlYXZlSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMudGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZHJhZ092ZXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBuby1vcFxuICB9XG5cbiAgZHJvcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXNbMF0gIT09ICdGaWxlcycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0gdGhpcy5sYXlvdXRPcHRpb25zO1xuICAgIGNvbnN0IGZpbGVsaXN0ID0gQXJyYXkuZnJvbShldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIGlmIChvcHRpb25zLmN1c3RvbUFjdGlvbnMpIHtcbiAgICAgIHRoaXMudXBsb2FkLmVtaXQodGhpcy5tdWx0aXBsZSA/IGZpbGVsaXN0IDogW2ZpbGVsaXN0WzBdXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvY2Vzcyh0aGlzLm11bHRpcGxlID8gZmlsZWxpc3QgOiBbZmlsZWxpc3RbMF1dKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUobW9kZWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICB0aGlzLm9uTW9kZWxUb3VjaGVkID0gZm47XG4gIH1cblxuICBjaGVjayhldmVudCkge1xuICAgIHRoaXMucHJvY2VzcyhBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5maWxlcykpO1xuICB9XG5cbiAgdmFsaWRhdGUoZmlsZXMpOiBib29sZWFuIHtcbiAgICBsZXQgcGFzc2VkVmFsaWRhdGlvbiA9IHRydWU7XG4gICAgaWYgKHRoaXMubGF5b3V0T3B0aW9ucy5jdXN0b21WYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLmxheW91dE9wdGlvbnMuY3VzdG9tVmFsaWRhdGlvblxuICAgICAgICAuZmlsdGVyKCh2YWxpZGF0aW9uKSA9PiB2YWxpZGF0aW9uLmFjdGlvbiA9PT0gJ3VwbG9hZCcpXG4gICAgICAgIC5mb3JFYWNoKCh1cGxvYWRWYWxpZGF0aW9uKSA9PiB7XG4gICAgICAgICAgcGFzc2VkVmFsaWRhdGlvbiA9IHVwbG9hZFZhbGlkYXRpb24uZm4oZmlsZXMpICYmIHBhc3NlZFZhbGlkYXRpb247XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFzc2VkVmFsaWRhdGlvbjtcbiAgfVxuXG4gIHByb2Nlc3MoZmlsZWxpc3QpIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZShmaWxlbGlzdCkpIHtcbiAgICAgIFByb21pc2UuYWxsKGZpbGVsaXN0Lm1hcCgoZmlsZSkgPT4gdGhpcy5yZWFkRmlsZShmaWxlKSkpLnRoZW4oKGZpbGVzKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgdGhpcy5maWxlcy5wdXNoKC4uLmZpbGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZpbGVzID0gZmlsZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb2RlbCA9IHRoaXMuZmlsZXM7XG4gICAgICAgIHRoaXMub25Nb2RlbENoYW5nZSh0aGlzLm1vZGVsKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkKGZpbGUpIHtcbiAgICB3aW5kb3cub3BlbihmaWxlLmRhdGFVUkwsICdfYmxhbmsnKTtcbiAgfVxuXG4gIHJlbW92ZShmaWxlKSB7XG4gICAgdGhpcy5maWxlcy5zcGxpY2UodGhpcy5maWxlcy5maW5kSW5kZXgoKGYpID0+IGYubmFtZSA9PT0gZmlsZS5uYW1lICYmIGYuc2l6ZSA9PT0gZmlsZS5zaXplKSwgMSk7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuZmlsZXM7XG4gICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMubW9kZWwpO1xuICB9XG5cbiAgcmVhZEZpbGUoZmlsZSkge1xuICAgIHJldHVybiBuZXcgTm92b0ZpbGUoZmlsZSkucmVhZCgpO1xuICB9XG5cbiAgY3VzdG9tRWRpdChmaWxlKSB7XG4gICAgdGhpcy5lZGl0LmVtaXQoZmlsZSk7XG4gIH1cblxuICBjdXN0b21TYXZlKGZpbGUpIHtcbiAgICB0aGlzLnNhdmUuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbURlbGV0ZShmaWxlKSB7XG4gICAgdGhpcy5kZWxldGUuZW1pdChmaWxlKTtcbiAgfVxuXG4gIGN1c3RvbUNoZWNrKGV2ZW50KSB7XG4gICAgdGhpcy51cGxvYWQuZW1pdChldmVudCk7XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG59XG4iXX0=