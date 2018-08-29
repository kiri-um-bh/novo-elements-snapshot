import { Subject } from 'rxjs/Subject';
export declare type CHIPS_STATE = 'STABLE' | 'LOADING';
export declare class ChipsStateService {
    state: CHIPS_STATE;
    chipsStateChange: Subject<CHIPS_STATE>;
    updateState(state: CHIPS_STATE): void;
}
