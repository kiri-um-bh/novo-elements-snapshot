import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList } from '@angular/core';
import { NovoOverlayTemplateComponent } from '../overlay/Overlay';
export declare class NovoDropdownElement implements OnInit, OnDestroy {
    element: ElementRef;
    private ref;
    parentScrollSelector: string;
    parentScrollAction: string;
    containerClass: string;
    side: 'right' | 'default' | 'bottom';
    scrollStrategy: 'reposition' | 'block' | 'close';
    height: number;
    width: number;
    appendToBody: boolean;
    toggled: EventEmitter<boolean>;
    overlay: NovoOverlayTemplateComponent;
    button: any;
    clickHandler: any;
    closeHandler: any;
    parentScrollElement: Element;
    private _items;
    private _textItems;
    private activeIndex;
    private filterTerm;
    private filterTermTimeout;
    constructor(element: ElementRef, ref: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    items: QueryList<NovoItemElement>;
    /** BEGIN: Convenient Panel Methods. */
    readonly panelOpen: boolean;
    openPanel(): void;
    closePanel(): void;
    togglePanel(): void;
    /** END: Convenient Panel Methods. */
    onKeyDown(event: KeyboardEvent): void;
    private scrollToActive();
}
export declare class NovoItemElement {
    private dropdown;
    element: ElementRef;
    disabled: boolean;
    keepOpen: boolean;
    action: EventEmitter<any>;
    active: boolean;
    constructor(dropdown: NovoDropdownElement, element: ElementRef);
    onClick(event: Event): void;
}
export declare class NovoListElement implements AfterContentInit {
    private dropdown;
    items: QueryList<NovoItemElement>;
    constructor(dropdown: NovoDropdownElement);
    ngAfterContentInit(): void;
}
export declare class NovoItemHeaderElement {
}
