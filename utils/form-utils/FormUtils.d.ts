import { NovoControlConfig } from '../../elements/form/FormControls';
import { NovoFieldset, FormField } from '../../elements/form/FormInterfaces';
import { NovoFormGroup } from '../../elements/form/NovoFormGroup';
import { NovoLabelService } from '../../services/novo-label-service';
import { OptionsService } from './../../services/options/OptionsService';
export declare class FormUtils {
    labels: NovoLabelService;
    optionsService: OptionsService;
    ASSOCIATED_ENTITY_LIST: string[];
    ENTITY_PICKER_LIST: string[];
    constructor(labels: NovoLabelService, optionsService: OptionsService);
    toFormGroup(controls: Array<any>): NovoFormGroup;
    emptyFormGroup(): NovoFormGroup;
    addControls(formGroup: NovoFormGroup, controls: Array<NovoControlConfig>): void;
    removeControls(formGroup: NovoFormGroup, controls: Array<NovoControlConfig>): void;
    /**
     * @name toFormGroupFromFieldset
     * @param fieldsets
     */
    toFormGroupFromFieldset(fieldsets: Array<NovoFieldset>): NovoFormGroup;
    /**
     * @name hasAssociatedEntity
     * @param field
     */
    hasAssociatedEntity(field: FormField): boolean;
    /**
     * @name determineInputType
     * @param field
     */
    determineInputType(field: FormField): string;
    isFieldEncrypted(key: string): boolean;
    getControlForField(field: any, http: any, config: {
        token?: string;
        restUrl?: string;
        military?: boolean;
    }, overrides?: any, forTable?: boolean, fieldData?: any): any;
    private shouldCreateControl;
    toControls(meta: any, currencyFormat: any, http: any, config: {
        token?: string;
        restUrl?: string;
        military?: boolean;
    }, overrides?: any, forTable?: boolean): any[];
    toTableControls(meta: any, currencyFormat: any, http: any, config: {
        token?: string;
        restUrl?: string;
        military?: boolean;
    }, overrides?: any): {};
    toFieldSets(meta: any, currencyFormat: any, http: any, config: {
        token?: string;
        restUrl?: string;
        military?: boolean;
    }, overrides?: any, data?: {
        [key: string]: any;
    }): NovoFieldset[];
    getControlOptions(field: any, http: any, config: {
        token?: string;
        restUrl?: string;
        military?: boolean;
    }, fieldData?: any): any;
    private getWorkflowOptions;
    setInitialValues(controls: Array<NovoControlConfig>, values: any, keepClean?: boolean, keyOverride?: string): void;
    setInitialValuesFieldsets(fieldsets: Array<NovoFieldset>, values: any, keepClean?: boolean): void;
    forceShowAllControls(controls: Array<NovoControlConfig>): void;
    forceShowAllControlsInFieldsets(fieldsets: Array<NovoFieldset>): void;
    forceValidation(form: NovoFormGroup): void;
    isAddressEmpty(control: any): boolean;
    private getStartDateFromRange;
    /**
     * Get the min start date of a Date base on field data.
     */
    private getStartDate;
    private inferStartDate;
}
