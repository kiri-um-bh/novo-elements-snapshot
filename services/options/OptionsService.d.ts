import { HttpClient } from '@angular/common/http';
export declare class OptionsService {
    getOptionsConfig(http: HttpClient, field: any, config: {
        token?: string;
        restUrl?: string;
        military?: boolean;
    }): any;
}
