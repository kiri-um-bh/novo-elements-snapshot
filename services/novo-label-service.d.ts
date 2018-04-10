export declare class NovoLabelService {
    userLocale: string;
    filters: string;
    clear: string;
    sort: string;
    emptyTableMessage: string;
    noMatchingRecordsMessage: string;
    erroredTableMessage: string;
    pickerError: string;
    pickerEmpty: string;
    quickNoteError: string;
    quickNoteEmpty: string;
    required: string;
    numberTooLarge: string;
    save: string;
    cancel: string;
    next: string;
    itemsPerPage: string;
    select: string;
    selected: string;
    selectAllOnPage: string;
    deselectAll: string;
    refresh: string;
    close: string;
    move: string;
    startDate: string;
    endDate: string;
    more: string;
    clearAll: string;
    today: string;
    now: string;
    isRequired: string;
    notValidYear: string;
    isTooLarge: string;
    invalidAddress: string;
    invalidEmail: string;
    invalidMaxLength: string;
    maxLengthMet: string;
    minLength: string;
    past1Day: string;
    past7Days: string;
    past30Days: string;
    past90Days: string;
    past1Year: string;
    next1Day: string;
    next7Days: string;
    next30Days: string;
    next90Days: string;
    next1Year: string;
    customDateRange: string;
    backToPresetFilters: string;
    okGotIt: string;
    address: string;
    address1: string;
    apt: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
    zipCode: string;
    country: string;
    or: string;
    clickToBrowse: string;
    chooseAFile: string;
    no: string;
    yes: string;
    search: string;
    noItems: string;
    dateFormat: string;
    dateFormatPlaceholder: string;
    timeFormatPlaceholderAM: string;
    timeFormatPlaceholder24Hour: string;
    timeFormatAM: string;
    timeFormatPM: string;
    confirmChangesModalMessage: string;
    promptModalMessage: string;
    asyncFailure: string;
    previous: string;
    actions: string;
    all: string;
    groupedMultiPickerEmpty: string;
    groupedMultiPickerSelectCategory: string;
    add: string;
    encryptedFieldTooltip: string;
    constructor(userLocale?: string);
    getToManyPlusMore(toMany: {
        quantity: number;
    }): string;
    selectedRecords(selected: number): string;
    showingXofXResults(shown: number, total: number): string;
    totalRecords(total: number, select: boolean): string;
    formatDateWithFormat(value: any, format: Intl.DateTimeFormatOptions): any;
    getWeekdays(): string[];
    getMonths(): string[];
    getProperty(value: string): any;
    getRangeText(page: number, pageSize: number, length: number, short: boolean): string;
    formatCurrency(value: number): string;
    formatNumber(value: any, options?: Intl.NumberFormatOptions): string;
    formatDateShort(value: any): string;
    formatTime(value: any): string;
    formatDate(value: any): string;
}
export declare const NOVO_ELEMENTS_LABELS_PROVIDERS: {
    provide: typeof NovoLabelService;
    useClass: typeof NovoLabelService;
}[];
