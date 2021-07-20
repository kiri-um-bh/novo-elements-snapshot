import { NovoOverlayTemplateComponent } from '../overlay';
import { AbstractConstructor, Constructor } from './constructor';
import { CanDisable } from './disabled.mixin';
/** @docs-private */
export interface HasOverlay {
    overlay: NovoOverlayTemplateComponent;
    readonly panelOpen: boolean;
    openPanel(): void;
    closePanel(): void;
    togglePanel(): void;
}
/** @docs-private */
export declare type HasOverlayCtor = Constructor<HasOverlay>;
/** Mixin to augment a directive with a `overlay` property. */
export declare function mixinOverlay<T extends AbstractConstructor<CanDisable>>(base: T): HasOverlayCtor & T;
