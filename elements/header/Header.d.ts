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
    title: string;
    subTitle: string;
    headerClass: string;
    theme: string;
    icon: string;
    condensed: boolean;
    inverse: string;
    iconClass: string;
    ngOnInit(): void;
}
