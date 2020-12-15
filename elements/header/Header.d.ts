import { OnInit } from '@angular/core';
export declare class NovoHeaderSpacer {
}
export declare class NovoUtilsComponent {
}
export declare class NovoUtilActionComponent {
    icon: string;
    inverse: boolean;
    disabled: boolean;
}
export declare class NovoHeaderComponent implements OnInit {
    headerClass: string;
    condensed: boolean;
    title: string;
    subTitle: string;
    movable: boolean;
    resizable: boolean;
    inverse: string;
    theme: string;
    icon: string;
    private _theme;
    private _icon;
    ngOnInit(): void;
    dragModal(): void;
}
