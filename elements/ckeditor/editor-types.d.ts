export declare type Editor = any;
export declare type CKEventInfo = any;
export declare type InclusionSuggestionArgs = {
    offset: number;
    suggestion: Suggestion;
};
export declare type Suggestion = {
    start: number;
    stop: number;
    id: string;
    problematicTerm: string;
    suggestedReplacements: string[];
    explanation: string;
};
