import { Observable } from 'rxjs';
import { IDataTableService } from '../interfaces';
export declare class StaticDataTableService<T> implements IDataTableService<T> {
    private currentData;
    originalData: T[];
    constructor(currentData?: T[]);
    getTableResults(sort: {
        id: string;
        value: string;
        transform?: Function;
    }, filter: {
        id: string;
        value: string;
        transform?: Function;
    }, page: number, pageSize: number, globalSearch?: string, outsideFilter?: any): Observable<{
        results: T[];
        total: number;
    }>;
}
