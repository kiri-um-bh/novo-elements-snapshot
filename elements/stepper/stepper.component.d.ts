import { CdkStep, CdkStepper } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, ElementRef, QueryList, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { NovoStepLabel } from './step-label.component';
import { NovoIconComponent } from '../icon/Icon';
export declare const _NovoStep: typeof CdkStep;
export declare const _NovoStepper: typeof CdkStepper;
export declare class NovoStep extends CdkStep {
    /** Content for step label given by `<ng-template novoStepLabel>`. */
    stepLabel: NovoStepLabel;
    theme: string;
    color: string;
    icon: string;
    constructor(stepper: NovoStepper);
}
export declare class NovoStepper extends CdkStepper implements AfterContentInit {
    /** The list of step headers of the steps in the stepper. */
    _stepHeader: QueryList<ElementRef>;
    /** Steps that the stepper holds. */
    _steps: QueryList<NovoStep>;
    /** Custom icon overrides passed in by the consumer. */
    _icons: QueryList<NovoIconComponent>;
    /** Consumer-specified template-refs to be used to override the header icons. */
    _iconOverrides: {
        [key: string]: TemplateRef<any>;
    };
    readonly completed: boolean;
    ngAfterContentInit(): void;
    complete(): void;
    getIndicatorType(index: number): 'none' | '' | 'edit' | 'done';
}
export declare class NovoHorizontalStepper extends NovoStepper {
    selectedIndex: number;
}
export declare class NovoVerticalStepper extends NovoStepper {
    selectedIndex: number;
    constructor(dir: Directionality, changeDetectorRef: ChangeDetectorRef);
}
