import { Subscription } from 'rxjs';
declare type OptionsFunctionConfig = {
    format?: string;
} & ({
    where: string;
    emptyPickerMessage?: string;
} | {
    optionsPromise: (query: string, http: CustomHttp, page: number) => Promise<unknown[]>;
} | {
    optionsUrl: string;
} | {
    optionsUrlBuilder: (query: string) => string;
});
export declare type ModifyPickerConfigArgs = {
    options: unknown[];
} | OptionsFunctionConfig;
export declare type OptionsFunction = (query: string) => Promise<unknown[]>;
export interface CustomHttp<T = any> {
    url: string;
    options: any;
    mapFn: (o: unknown) => T;
    get(url: string, options?: any): CustomHttp;
    map(mapFn: (o: unknown) => T): CustomHttp;
    subscribe(resolve: any, reject?: any): Subscription;
}
export {};
