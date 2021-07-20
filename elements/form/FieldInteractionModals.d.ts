import { NovoLabelService } from '../../services/novo-label-service';
import { NovoModalParams, NovoModalRef } from '../modal/modal-ref';
import * as i0 from "@angular/core";
export declare class ControlConfirmModal {
    private modalRef;
    params: NovoModalParams;
    labels: NovoLabelService;
    constructor(modalRef: NovoModalRef, params: NovoModalParams, labels: NovoLabelService);
    close(result: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlConfirmModal, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlConfirmModal, "control-confirm-modal", never, {}, {}, never, never>;
}
export declare class ControlPromptModal {
    private modalRef;
    params: NovoModalParams;
    labels: NovoLabelService;
    constructor(modalRef: NovoModalRef, params: NovoModalParams, labels: NovoLabelService);
    close(result: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<ControlPromptModal, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ControlPromptModal, "control-prompt-modal", never, {}, {}, never, never>;
}
