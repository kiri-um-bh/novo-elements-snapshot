// NG2
import { Component, EventEmitter, forwardRef, Input, NgZone, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const _c0 = ["host"];
// Value accessor for the component (supports ngModel)
const CKEDITOR_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NovoCKEditorElement),
    multi: true,
};
/**
 * CKEditor component
 * Usage :
 *  <novo-editor [(ngModel)]="data" [config]="{...}" debounce="500"></novo-editor>
 */
export class NovoCKEditorElement {
    constructor(zone) {
        this.zone = zone;
        this.startupFocus = false;
        this.fileBrowserImageUploadUrl = '';
        this.disabled = false;
        this.change = new EventEmitter();
        this.ready = new EventEmitter();
        this.blur = new EventEmitter();
        this.focus = new EventEmitter();
        this.paste = new EventEmitter();
        this.loaded = new EventEmitter();
        this._value = '';
    }
    get value() {
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            this._value = v;
            this.onChange(v);
        }
    }
    ngOnDestroy() {
        if (this.instance) {
            this.instance.focusManager.blur(true); // Remove focus from editor
            setTimeout(() => {
                this.instance.removeAllListeners();
                const aInstance = CKEDITOR.instances[this.instance.name];
                if (aInstance) {
                    aInstance.destroy();
                }
                this.instance.destroy();
                this.instance = null;
            });
        }
    }
    ngAfterViewInit() {
        const config = Object.assign(this.getBaseConfig(), this.config);
        if (this.startupFocus) {
            config.startupFocus = true;
        }
        if (this.disabled) {
            config.readOnly = true;
        }
        this.ckeditorInit(config);
    }
    updateValue(value) {
        this.zone.run(() => {
            this.value = value;
            this.onChange(value);
            this.onTouched();
            this.change.emit(value);
        });
    }
    ckeditorInit(config) {
        if (!CKEDITOR) {
            console.error('Make sure to include CKEditor sources in your dependencies!');
            return;
        }
        // CKEditor replace textarea
        this.instance = CKEDITOR.replace(this.host.nativeElement, config);
        // Set initial value
        this.instance.setData(this.value);
        // listen for instanceReady event
        this.instance.on('instanceReady', (evt) => {
            // send the evt to the EventEmitter
            this.ready.emit(evt);
        });
        // CKEditor change event
        this.instance.on('change', () => {
            this.onTouched();
            const value = this.instance.getData();
            // Debounce update
            if (this.debounce) {
                if (this.debounceTimeout) {
                    clearTimeout(this.debounceTimeout);
                }
                this.debounceTimeout = setTimeout(() => {
                    this.updateValue(value);
                    this.debounceTimeout = null;
                }, parseInt(this.debounce, 10));
            }
            else {
                this.updateValue(value);
            }
        });
        this.instance.on('blur', (event) => {
            this.blur.emit(event);
        });
        this.instance.on('focus', (event) => {
            this.focus.emit(event);
        });
        this.instance.on('paste', (event) => {
            this.paste.emit(event);
        });
        this.instance.on('loaded', (event) => {
            this.loaded.emit(event);
        });
    }
    getBaseConfig() {
        const baseConfig = {
            enterMode: CKEDITOR.ENTER_BR,
            shiftEnterMode: CKEDITOR.ENTER_P,
            disableNativeSpellChecker: false,
            removePlugins: 'liststyle,tabletools,contextmenu',
            extraAllowedContent: '*(*){*};table tbody tr td th[*];',
            font_names: 'Arial/Arial, Helvetica, sans-serif;' +
                'Calibri/Calibri, Verdana, Geneva, sans-serif;' +
                'Comic Sans MS/Comic Sans MS, cursive;' +
                'Courier New/Courier New, Courier, monospace;' +
                'Georgia/Georgia, serif;' +
                'Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;' +
                'Tahoma/Tahoma, Geneva, sans-serif;' +
                'Times New Roman/Times New Roman, Times, serif;' +
                'Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;' +
                'Verdana/Verdana, Geneva, sans-serif',
        };
        const minimalConfig = {
            toolbar: [
                {
                    name: 'basicstyles',
                    items: [
                        'Styles',
                        'FontSize',
                        'Bold',
                        'Italic',
                        'Underline',
                        'TextColor',
                        '-',
                        'NumberedList',
                        'BulletedList',
                        'Outdent',
                        'Indent',
                        'Link',
                    ],
                },
            ],
        };
        const extendedConfig = {
            toolbar: [
                { name: 'clipboard', items: ['Paste', 'PasteText', 'PasteFromWord', 'Undo', 'Redo'] },
                {
                    name: 'paragraph',
                    items: [
                        'NumberedList',
                        'BulletedList',
                        'Outdent',
                        'Indent',
                        'Blockquote',
                        'JustifyLeft',
                        'JustifyCenter',
                        'JustifyRight',
                        'JustifyBlock',
                        'BidiLtr',
                        'BidiRtl',
                    ],
                },
                { name: 'links', items: ['Link'] },
                { name: 'insert', items: ['Image', 'Table', 'HorizontalRule'] },
                { name: 'tools', items: ['Maximize', 'Source'] },
                '/',
                { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'] },
                { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
                { name: 'colors', items: ['TextColor', 'BGColor'] },
            ],
            filebrowserImageUploadUrl: this.fileBrowserImageUploadUrl,
        };
        return Object.assign(baseConfig, this.minimal ? minimalConfig : extendedConfig);
    }
    writeValue(value) {
        this._value = value;
        if (this.instance) {
            this.instance.setData(value);
        }
    }
    onChange(value) { }
    onTouched(event) { }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
        if (this.instance) {
            CKEDITOR.instances[this.instance.name].setReadOnly(disabled);
        }
    }
    insertText(text) {
        const trimmedText = text.trim();
        this.instance.insertText(trimmedText);
    }
}
NovoCKEditorElement.ɵfac = function NovoCKEditorElement_Factory(t) { return new (t || NovoCKEditorElement)(i0.ɵɵdirectiveInject(i0.NgZone)); };
NovoCKEditorElement.ɵcmp = i0.ɵɵdefineComponent({ type: NovoCKEditorElement, selectors: [["novo-editor"]], viewQuery: function NovoCKEditorElement_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.host = _t.first);
    } }, inputs: { config: "config", debounce: "debounce", name: "name", minimal: "minimal", startupFocus: "startupFocus", fileBrowserImageUploadUrl: "fileBrowserImageUploadUrl", disabled: "disabled", value: "value" }, outputs: { change: "change", ready: "ready", blur: "blur", focus: "focus", paste: "paste", loaded: "loaded" }, features: [i0.ɵɵProvidersFeature([CKEDITOR_CONTROL_VALUE_ACCESSOR])], decls: 2, vars: 2, consts: [[3, "name", "id"], ["host", ""]], template: function NovoCKEditorElement_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "textarea", 0, 1);
    } if (rf & 2) {
        i0.ɵɵproperty("name", ctx.name)("id", ctx.name);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NovoCKEditorElement, [{
        type: Component,
        args: [{
                selector: 'novo-editor',
                providers: [CKEDITOR_CONTROL_VALUE_ACCESSOR],
                template: '<textarea [name]="name" [id]="name" #host></textarea>',
            }]
    }], function () { return [{ type: i0.NgZone }]; }, { config: [{
            type: Input
        }], debounce: [{
            type: Input
        }], name: [{
            type: Input
        }], minimal: [{
            type: Input
        }], startupFocus: [{
            type: Input
        }], fileBrowserImageUploadUrl: [{
            type: Input
        }], disabled: [{
            type: Input
        }], change: [{
            type: Output
        }], ready: [{
            type: Output
        }], blur: [{
            type: Output
        }], focus: [{
            type: Output
        }], paste: [{
            type: Output
        }], loaded: [{
            type: Output
        }], host: [{
            type: ViewChild,
            args: ['host']
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ0tFZGl0b3IuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdHJhdmlzL2J1aWxkL2J1bGxob3JuL25vdm8tZWxlbWVudHMvcHJvamVjdHMvbm92by1lbGVtZW50cy9zcmMvIiwic291cmNlcyI6WyJlbGVtZW50cy9ja2VkaXRvci9DS0VkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0FBQ04sT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFhLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFekUsc0RBQXNEO0FBQ3RELE1BQU0sK0JBQStCLEdBQUc7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVNGOzs7O0dBSUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBbUM5QixZQUFvQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQXpCaEMsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFFOUIsOEJBQXlCLEdBQVcsRUFBRSxDQUFDO1FBRXZDLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHMUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFM0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJNUIsV0FBTSxHQUFXLEVBQUUsQ0FBQztJQUllLENBQUM7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SztrQkFESixNQUFNO1lBR1AsS0FBSztrQkFESixNQUFNO1lBR1AsTUFBTTtrQkFETCxNQUFNO1lBR1AsSUFBSTtrQkFESCxTQUFTO21CQUFDLE1BQU07WUFjYixLQUFLO2tCQURSLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFZhbHVlIGFjY2Vzc29yIGZvciB0aGUgY29tcG9uZW50IChzdXBwb3J0cyBuZ01vZGVsKVxuY29uc3QgQ0tFRElUT1JfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5vdm9DS0VkaXRvckVsZW1lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbmRlY2xhcmUgdmFyIENLRURJVE9SOiBhbnk7XG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIENLRURJVE9SOiBhbnk7XG4gIH1cbn1cblxuLyoqXG4gKiBDS0VkaXRvciBjb21wb25lbnRcbiAqIFVzYWdlIDpcbiAqICA8bm92by1lZGl0b3IgWyhuZ01vZGVsKV09XCJkYXRhXCIgW2NvbmZpZ109XCJ7Li4ufVwiIGRlYm91bmNlPVwiNTAwXCI+PC9ub3ZvLWVkaXRvcj5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm92by1lZGl0b3InLFxuICBwcm92aWRlcnM6IFtDS0VESVRPUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgdGVtcGxhdGU6ICc8dGV4dGFyZWEgW25hbWVdPVwibmFtZVwiIFtpZF09XCJuYW1lXCIgI2hvc3Q+PC90ZXh0YXJlYT4nLFxufSlcbmV4cG9ydCBjbGFzcyBOb3ZvQ0tFZGl0b3JFbGVtZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpXG4gIGNvbmZpZztcbiAgQElucHV0KClcbiAgZGVib3VuY2U7XG4gIEBJbnB1dCgpXG4gIG5hbWU7XG4gIEBJbnB1dCgpXG4gIG1pbmltYWw7XG4gIEBJbnB1dCgpXG4gIHN0YXJ0dXBGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBmaWxlQnJvd3NlckltYWdlVXBsb2FkVXJsOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KClcbiAgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKVxuICBwYXN0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpXG4gIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZCgnaG9zdCcpXG4gIGhvc3Q7XG5cbiAgX3ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgaW5zdGFuY2U7XG4gIGRlYm91bmNlVGltZW91dDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge31cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHYpIHtcbiAgICBpZiAodiAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgIHRoaXMub25DaGFuZ2Uodik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuaW5zdGFuY2UuZm9jdXNNYW5hZ2VyLmJsdXIodHJ1ZSk7IC8vIFJlbW92ZSBmb2N1cyBmcm9tIGVkaXRvclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgICAgIGNvbnN0IGFJbnN0YW5jZSA9IENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdO1xuICAgICAgICBpZiAoYUluc3RhbmNlKSB7XG4gICAgICAgICAgYUluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLmdldEJhc2VDb25maWcoKSwgdGhpcy5jb25maWcpO1xuICAgIGlmICh0aGlzLnN0YXJ0dXBGb2N1cykge1xuICAgICAgY29uZmlnLnN0YXJ0dXBGb2N1cyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICBjb25maWcucmVhZE9ubHkgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmNrZWRpdG9ySW5pdChjb25maWcpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBja2VkaXRvckluaXQoY29uZmlnKSB7XG4gICAgaWYgKCFDS0VESVRPUikge1xuICAgICAgY29uc29sZS5lcnJvcignTWFrZSBzdXJlIHRvIGluY2x1ZGUgQ0tFZGl0b3Igc291cmNlcyBpbiB5b3VyIGRlcGVuZGVuY2llcyEnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBDS0VkaXRvciByZXBsYWNlIHRleHRhcmVhXG4gICAgdGhpcy5pbnN0YW5jZSA9IENLRURJVE9SLnJlcGxhY2UodGhpcy5ob3N0Lm5hdGl2ZUVsZW1lbnQsIGNvbmZpZyk7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZVxuICAgIHRoaXMuaW5zdGFuY2Uuc2V0RGF0YSh0aGlzLnZhbHVlKTtcblxuICAgIC8vIGxpc3RlbiBmb3IgaW5zdGFuY2VSZWFkeSBldmVudFxuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2luc3RhbmNlUmVhZHknLCAoZXZ0KSA9PiB7XG4gICAgICAvLyBzZW5kIHRoZSBldnQgdG8gdGhlIEV2ZW50RW1pdHRlclxuICAgICAgdGhpcy5yZWFkeS5lbWl0KGV2dCk7XG4gICAgfSk7XG5cbiAgICAvLyBDS0VkaXRvciBjaGFuZ2UgZXZlbnRcbiAgICB0aGlzLmluc3RhbmNlLm9uKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmluc3RhbmNlLmdldERhdGEoKTtcblxuICAgICAgLy8gRGVib3VuY2UgdXBkYXRlXG4gICAgICBpZiAodGhpcy5kZWJvdW5jZSkge1xuICAgICAgICBpZiAodGhpcy5kZWJvdW5jZVRpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgdGhpcy5kZWJvdW5jZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB9LCBwYXJzZUludCh0aGlzLmRlYm91bmNlLCAxMCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5pbnN0YW5jZS5vbignYmx1cicsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2ZvY3VzJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmZvY3VzLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ3Bhc3RlJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnBhc3RlLmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuICAgIHRoaXMuaW5zdGFuY2Uub24oJ2xvYWRlZCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5sb2FkZWQuZW1pdChldmVudCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRCYXNlQ29uZmlnKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGNvbnN0IGJhc2VDb25maWcgPSB7XG4gICAgICBlbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX0JSLFxuICAgICAgc2hpZnRFbnRlck1vZGU6IENLRURJVE9SLkVOVEVSX1AsXG4gICAgICBkaXNhYmxlTmF0aXZlU3BlbGxDaGVja2VyOiBmYWxzZSxcbiAgICAgIHJlbW92ZVBsdWdpbnM6ICdsaXN0c3R5bGUsdGFibGV0b29scyxjb250ZXh0bWVudScsIC8vIGFsbG93cyBicm93c2VyIGJhc2VkIHNwZWxsIGNoZWNraW5nXG4gICAgICBleHRyYUFsbG93ZWRDb250ZW50OiAnKigqKXsqfTt0YWJsZSB0Ym9keSB0ciB0ZCB0aFsqXTsnLCAvLyBhbGxvd3MgY2xhc3MgbmFtZXMgKCopIGFuZCBpbmxpbmUgc3R5bGVzIHsqfSBmb3IgYWxsIGFuZCBhdHRyaWJ1dGVzIFsqXSBvbiB0YWJsZXNcbiAgICAgIGZvbnRfbmFtZXM6XG4gICAgICAgICdBcmlhbC9BcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOycgK1xuICAgICAgICAnQ2FsaWJyaS9DYWxpYnJpLCBWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWY7JyArXG4gICAgICAgICdDb21pYyBTYW5zIE1TL0NvbWljIFNhbnMgTVMsIGN1cnNpdmU7JyArXG4gICAgICAgICdDb3VyaWVyIE5ldy9Db3VyaWVyIE5ldywgQ291cmllciwgbW9ub3NwYWNlOycgK1xuICAgICAgICAnR2VvcmdpYS9HZW9yZ2lhLCBzZXJpZjsnICtcbiAgICAgICAgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUvTHVjaWRhIFNhbnMgVW5pY29kZSwgTHVjaWRhIEdyYW5kZSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RhaG9tYS9UYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1RpbWVzIE5ldyBSb21hbi9UaW1lcyBOZXcgUm9tYW4sIFRpbWVzLCBzZXJpZjsnICtcbiAgICAgICAgJ1RyZWJ1Y2hldCBNUy9UcmVidWNoZXQgTVMsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsnICtcbiAgICAgICAgJ1ZlcmRhbmEvVmVyZGFuYSwgR2VuZXZhLCBzYW5zLXNlcmlmJyxcbiAgICB9O1xuXG4gICAgY29uc3QgbWluaW1hbENvbmZpZyA9IHtcbiAgICAgIHRvb2xiYXI6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdiYXNpY3N0eWxlcycsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICdTdHlsZXMnLFxuICAgICAgICAgICAgJ0ZvbnRTaXplJyxcbiAgICAgICAgICAgICdCb2xkJyxcbiAgICAgICAgICAgICdJdGFsaWMnLFxuICAgICAgICAgICAgJ1VuZGVybGluZScsXG4gICAgICAgICAgICAnVGV4dENvbG9yJyxcbiAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICdOdW1iZXJlZExpc3QnLFxuICAgICAgICAgICAgJ0J1bGxldGVkTGlzdCcsXG4gICAgICAgICAgICAnT3V0ZGVudCcsXG4gICAgICAgICAgICAnSW5kZW50JyxcbiAgICAgICAgICAgICdMaW5rJyxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuXG4gICAgY29uc3QgZXh0ZW5kZWRDb25maWcgPSB7XG4gICAgICB0b29sYmFyOiBbXG4gICAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGl0ZW1zOiBbJ1Bhc3RlJywgJ1Bhc3RlVGV4dCcsICdQYXN0ZUZyb21Xb3JkJywgJ1VuZG8nLCAnUmVkbyddIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncGFyYWdyYXBoJyxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgJ051bWJlcmVkTGlzdCcsXG4gICAgICAgICAgICAnQnVsbGV0ZWRMaXN0JyxcbiAgICAgICAgICAgICdPdXRkZW50JyxcbiAgICAgICAgICAgICdJbmRlbnQnLFxuICAgICAgICAgICAgJ0Jsb2NrcXVvdGUnLFxuICAgICAgICAgICAgJ0p1c3RpZnlMZWZ0JyxcbiAgICAgICAgICAgICdKdXN0aWZ5Q2VudGVyJyxcbiAgICAgICAgICAgICdKdXN0aWZ5UmlnaHQnLFxuICAgICAgICAgICAgJ0p1c3RpZnlCbG9jaycsXG4gICAgICAgICAgICAnQmlkaUx0cicsXG4gICAgICAgICAgICAnQmlkaVJ0bCcsXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgeyBuYW1lOiAnbGlua3MnLCBpdGVtczogWydMaW5rJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnaW5zZXJ0JywgaXRlbXM6IFsnSW1hZ2UnLCAnVGFibGUnLCAnSG9yaXpvbnRhbFJ1bGUnXSB9LFxuICAgICAgICB7IG5hbWU6ICd0b29scycsIGl0ZW1zOiBbJ01heGltaXplJywgJ1NvdXJjZSddIH0sXG4gICAgICAgICcvJywgLy8gbGluZSBicmVha1xuICAgICAgICB7IG5hbWU6ICdiYXNpY3N0eWxlcycsIGl0ZW1zOiBbJ0JvbGQnLCAnSXRhbGljJywgJ1VuZGVybGluZScsICdTdHJpa2UnLCAnU3Vic2NyaXB0JywgJ1N1cGVyc2NyaXB0J10gfSxcbiAgICAgICAgeyBuYW1lOiAnc3R5bGVzJywgaXRlbXM6IFsnU3R5bGVzJywgJ0Zvcm1hdCcsICdGb250JywgJ0ZvbnRTaXplJ10gfSxcbiAgICAgICAgeyBuYW1lOiAnY29sb3JzJywgaXRlbXM6IFsnVGV4dENvbG9yJywgJ0JHQ29sb3InXSB9LFxuICAgICAgXSxcbiAgICAgIGZpbGVicm93c2VySW1hZ2VVcGxvYWRVcmw6IHRoaXMuZmlsZUJyb3dzZXJJbWFnZVVwbG9hZFVybCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYmFzZUNvbmZpZywgdGhpcy5taW5pbWFsID8gbWluaW1hbENvbmZpZyA6IGV4dGVuZGVkQ29uZmlnKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmluc3RhbmNlKSB7XG4gICAgICB0aGlzLmluc3RhbmNlLnNldERhdGEodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKHZhbHVlPzogYW55KSB7fVxuXG4gIG9uVG91Y2hlZChldmVudD8pIHt9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgIENLRURJVE9SLmluc3RhbmNlc1t0aGlzLmluc3RhbmNlLm5hbWVdLnNldFJlYWRPbmx5KGRpc2FibGVkKTtcbiAgICB9XG4gIH1cblxuICBpbnNlcnRUZXh0KHRleHQpIHtcbiAgICBjb25zdCB0cmltbWVkVGV4dCA9IHRleHQudHJpbSgpO1xuICAgIHRoaXMuaW5zdGFuY2UuaW5zZXJ0VGV4dCh0cmltbWVkVGV4dCk7XG4gIH1cbn1cbiJdfQ==