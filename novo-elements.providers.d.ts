import { GooglePlacesService } from './elements/places/places.service';
import { NovoDragulaService } from './elements/dragula/DragulaService';
import { NovoModalService } from './elements/modal/ModalService';
import { NovoModalRef } from './elements/modal/Modal';
import { NovoToastService } from './elements/toast/ToastService';
import { ComponentUtils } from './utils/component-utils/ComponentUtils';
import { FieldInteractionApi } from './elements/form/FieldInteractionApi';
import { DateFormatService } from './services/date-format/DateFormat';
import { GlobalRef, BrowserGlobalRef } from './services/global/global.service';
import { LocalStorageService } from './services/storage/storage.service';
import { Security } from './services/security/Security';
import { OptionsService } from './services/options/OptionsService';
export declare class NovoElementProviders {
    static forRoot(): {
        ngModule: typeof NovoElementProviders;
        providers: (typeof DateFormatService | typeof FieldInteractionApi | typeof Security | {
            provide: typeof NovoDragulaService;
            useClass: typeof NovoDragulaService;
        } | {
            provide: typeof NovoModalRef;
            useClass: typeof NovoModalRef;
        } | {
            provide: typeof NovoModalService;
            useClass: typeof NovoModalService;
        } | {
            provide: typeof GooglePlacesService;
            useClass: typeof GooglePlacesService;
        } | {
            provide: typeof NovoToastService;
            useClass: typeof NovoToastService;
        } | {
            provide: typeof ComponentUtils;
            useClass: typeof ComponentUtils;
        } | {
            provide: typeof GlobalRef;
            useClass: typeof BrowserGlobalRef;
        } | {
            provide: typeof LocalStorageService;
            useClass: typeof LocalStorageService;
        } | {
            provide: typeof OptionsService;
            useClass: typeof OptionsService;
        })[];
    };
    static forChild(): {
        ngModule: typeof NovoElementProviders;
    };
}
