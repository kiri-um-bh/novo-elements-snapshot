import { Observable } from 'rxjs';
import { IDataTableFilter, IDataTableService } from '../interfaces';
export declare class StaticDataTableService<T> implements IDataTableService<T> {
    private currentData;
    originalData: T[];
    constructor(currentData?: T[]);
    getTableResults(sort: {
        id: string;
        value: string;
        transform?: Function;
    }, filter: IDataTableFilter | IDataTableFilter[], page: number, pageSize: number, globalSearch?: string, outsideFilter?: any): Observable<{
        results: T[];
        total: number;
    }>;
    filterData(currentData: T[], filter: IDataTableFilter | IDataTableFilter[]): T[];
}
