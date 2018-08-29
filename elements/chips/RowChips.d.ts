import { ElementRef } from '@angular/core';
import { NovoLabelService } from '../../services/novo-label-service';
import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
import { NovoChipElement, NovoChipsElement } from './Chips';
import { ChipsStateService } from './ChipsStateService';
export declare class NovoRowChipElement extends NovoChipElement {
    onSelect(e: any): boolean;
}
export declare class NovoRowChipsElement extends NovoChipsElement {
    constructor(element: ElementRef, componentUtils: ComponentUtils, labels: NovoLabelService, chipsStateService: ChipsStateService);
    onKeyDown(event: any): void;
}
