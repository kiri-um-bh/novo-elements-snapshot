import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { NovoFormGroup } from './FormInterfaces';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
export declare class NovoFormElement implements AfterContentInit, OnInit {
    private templates;
    form: NovoFormGroup;
    layout: string;
    hideHeader: boolean;
    customTemplates: QueryList<NovoTemplate>;
    showingAllFields: boolean;
    showingRequiredFields: boolean;
    constructor(templates: NovoTemplateService);
    readonly value: any;
    readonly isValid: boolean;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    showAllFields(): void;
    showOnlyRequired(hideRequiredWithValue: any): void;
    forceValidation(): void;
}
