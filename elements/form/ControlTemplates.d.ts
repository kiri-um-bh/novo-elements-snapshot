import { AfterViewInit, QueryList } from '@angular/core';
import { NovoTemplate } from '../common/novo-template/novo-template.directive';
import { NovoTemplateService } from '../../services/template/NovoTemplateService';
export declare class NovoControlTemplates implements AfterViewInit {
    private templates;
    defaultTemplates: QueryList<NovoTemplate>;
    constructor(templates: NovoTemplateService);
    ngAfterViewInit(): void;
}
