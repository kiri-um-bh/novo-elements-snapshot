import { ComponentUtils } from '../../utils/component-utils/ComponentUtils';
export interface ToastOptions {
    title?: string;
    message?: string;
    icon?: 'bell' | 'check' | 'info' | 'warning' | 'remove' | 'caution' | 'times' | 'coffee' | 'danger' | string;
    theme?: 'default' | 'success' | 'info' | 'warning' | 'danger';
    hideDelay?: number;
    position?: 'fixedTop' | 'fixedBottom' | 'growlTopRight' | 'growlTopLeft' | 'growlBottomRight' | 'growlBottomLeft';
    isCloseable?: boolean;
    customClass?: string;
}
export declare class NovoToastService {
    private componentUtils;
    _parentViewContainer: any;
    references: Array<any>;
    icons: {
        default: string;
        success: string;
        info: string;
        warning: string;
        danger: string;
    };
    defaults: {
        hideDelay: number;
        position: string;
        theme: string;
    };
    constructor(componentUtils: ComponentUtils);
    parentViewContainer: any;
    alert(options: ToastOptions, toastElement?: any): Promise<any>;
    isVisible(toast: any): any;
    hide(toast: any): void;
    handleAlert(toast: any, options: any): void;
    setToastOnSession(toast: any, opts: any): void;
    show(toast: any): void;
    toastTimer(toast: any): void;
}
