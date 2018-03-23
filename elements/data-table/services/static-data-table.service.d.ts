import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IDataTableService } from '../interfaces';
export declare class StaticDataTableService<T> implements IDataTableService<T> {
    private data;
    constructor(data?: T[]);
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
