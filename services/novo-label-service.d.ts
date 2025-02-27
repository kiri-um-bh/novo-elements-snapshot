export interface BigDecimalFormatOptions extends Intl.NumberFormatOptions {
    useAccountingFormat?: boolean;
}
export declare class NovoLabelService {
    userLocale: string;
    filters: string;
    clear: string;
    sort: string;
    distributionListOwner: string;
    dateAdded: string;
    emptyTableMessage: string;
    noMatchingRecordsMessage: string;
    erroredTableMessage: string;
    pickerError: string;
    pickerTextFieldEmpty: string;
    pickerEmpty: string;
    tabbedGroupPickerEmpty: string;
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
    rate: string;
    more: string;
    clearAll: string;
    clearAllNormalCase: string;
    clearSort: string;
    clearFilter: string;
    clearSelected: string;
    today: string;
    now: string;
    isRequired: string;
    notValidYear: string;
    isTooLarge: string;
    invalidAddress: string;
    invalidEmail: string;
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
    noStatesForCountry: string;
    selectCountryFirst: string;
    invalidIntegerInput: string;
    maxRecordsReached: string;
    selectFilterOptions: string;
    constructor(userLocale?: string);
    maxlengthMetWithField(field: string, maxlength: number): string;
    maxlengthMet(maxlength: number): string;
    invalidMaxlengthWithField(field: string, maxlength: number): string;
    invalidMaxlength(maxlength: number): string;
    getToManyPlusMore(toMany: {
        quantity: number;
    }): string;
    selectedRecords(selected: number): string;
    showingXofXResults(shown: number, total: number): string;
    totalRecords(total: number, select?: boolean): string;
    dateFormatString(): string;
    tabbedGroupClearSuggestion(tabLabelPlural: string): string;
    formatDateWithFormat(value: any, format: Intl.DateTimeFormatOptions): any;
    formatToTimeOnly(param: any): void;
    formatToDateOnly(param: any): void;
    formatTimeWithFormat(value: any, format: Intl.DateTimeFormatOptions): string;
    getWeekdays(): string[];
    getMonths(): string[];
    getProperty(value: string): any;
    getRangeText(page: number, pageSize: number, length: number, short: boolean): string;
    formatCurrency(value: number): string;
    /**
     * Extends the Intl.numberFormat capability with two extra features:
     *  - Does NOT round values, but instead truncates to maximumFractionDigits
     *  - By default uses accounting format for negative numbers: (3.14) instead of -3.14.
     *
     * @param value           The number value to convert to string
     * @param overrideOptions Allows for overriding options used and passed to Intl.NumberFormat()
     */
    formatBigDecimal(value: number, overrideOptions?: BigDecimalFormatOptions): string;
    /**
     * Performs a string-based truncating of a number with no rounding
     */
    truncateToPrecision(value: number, precision: number): number;
    formatNumber(value: any, options?: Intl.NumberFormatOptions): string;
    formatDateShort(value: string | number | Date): string;
    formatTime(value: string | number | Date): string;
    formatDate(value: string | number | Date): string;
}
export declare const NOVO_ELEMENTS_LABELS_PROVIDERS: {
    provide: typeof NovoLabelService;
    useClass: typeof NovoLabelService;
}[];
