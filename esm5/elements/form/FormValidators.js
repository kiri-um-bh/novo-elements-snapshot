/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Helpers } from './../../utils/Helpers';
/** @type {?} */
var MAX_INTEGER = 2147483647;
/** @type {?} */
var MIN_YEAR = 1753;
var FormValidators = /** @class */ (function () {
    function FormValidators() {
    }
    /**
     * @param {?} subfield
     * @param {?} control
     * @return {?}
     */
    FormValidators.prototype.showStateRequiredFlag = /**
     * @param {?} subfield
     * @param {?} control
     * @return {?}
     */
    function (subfield, control) {
        return (subfield === 'state' &&
            !Helpers.isEmpty(control.config.state) &&
            control.config.state.required &&
            Helpers.isBlank(control.value.state) &&
            control.config.state.updated &&
            !Helpers.isBlank(control.value.countryName) &&
            control.config.state.pickerConfig &&
            control.config.state.pickerConfig.defaultOptions &&
            control.config.state.pickerConfig.defaultOptions.length > 0);
    };
    // Makes sure the control value does not exceed the max integer value
    // Makes sure the control value does not exceed the max integer value
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.maxInteger = 
    // Makes sure the control value does not exceed the max integer value
    /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return control.value < MAX_INTEGER ? null : { integerTooLarge: true };
    };
    // Makes sure the control value is above the minimum year
    // Makes sure the control value is above the minimum year
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.minYear = 
    // Makes sure the control value is above the minimum year
    /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        if (!control.value) {
            return null;
        }
        return control.value >= MIN_YEAR ? null : { minYear: true };
    };
    // Makes sure the control value does not exceed the max number value
    // Makes sure the control value does not exceed the max number value
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.maxDouble = 
    // Makes sure the control value does not exceed the max number value
    /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        return control.value < Number.MAX_SAFE_INTEGER ? null : { doubleTooLarge: true };
    };
    // Make sure the control value is an email
    // Make sure the control value is an email
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.isEmail = 
    // Make sure the control value is an email
    /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return !control.value || EMAIL_REGEXP.test(control.value) ? null : { invalidEmail: true };
    };
    // Makes sure the control value is a valid address
    // Makes sure the control value is a valid address
    /**
     * @param {?} control
     * @return {?}
     */
    FormValidators.isValidAddress = 
    // Makes sure the control value is a valid address
    /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        /** @type {?} */
        var invalidAddressFields = [];
        /** @type {?} */
        var maxlengthFields = [];
        /** @type {?} */
        var returnVal = null;
        /** @type {?} */
        var maxlengthError = false;
        /** @type {?} */
        var showCountryRequiredFlag = function (subfield, ctrl) {
            return (subfield === 'countryID' &&
                !Helpers.isEmpty(ctrl.config.countryID) &&
                ctrl.config.countryID.required &&
                Helpers.isBlank(ctrl.value.countryName) &&
                ctrl.config.countryID.updated);
        };
        /** @type {?} */
        var showStateRequiredFlag = function (subfield, ctrl) {
            return (subfield === 'state' &&
                !Helpers.isEmpty(ctrl.config.state) &&
                ctrl.config.state.required &&
                Helpers.isBlank(ctrl.value.state) &&
                ctrl.config.state.updated &&
                !Helpers.isBlank(ctrl.value.countryName) &&
                ctrl.config.state.pickerConfig &&
                ctrl.config.state.pickerConfig.defaultOptions &&
                ctrl.config.state.pickerConfig.defaultOptions.length > 0);
        };
        if (control.value && control.config) {
            /** @type {?} */
            var valid_1 = true;
            /** @type {?} */
            var formValidity_1 = true;
            fieldList.forEach(function (subfield) {
                if (!Helpers.isEmpty(control.config[subfield])) {
                    if ((['countryID', 'state'].indexOf(subfield) === -1 &&
                        control.config[subfield].required &&
                        !Helpers.isBlank(control.value[subfield]) &&
                        Helpers.isEmpty(control.value[subfield])) ||
                        showCountryRequiredFlag(subfield, control) ||
                        showStateRequiredFlag(subfield, control)) {
                        valid_1 = false;
                        invalidAddressFields.push(control.config[subfield].label);
                    }
                    if (((subfield !== 'countryID' && control.config[subfield].required && Helpers.isEmpty(control.value[subfield])) ||
                        (subfield === 'countryID' &&
                            !Helpers.isEmpty(control.config.countryID) &&
                            control.config.countryID.required &&
                            Helpers.isEmpty(control.value.countryName))) &&
                        !(subfield === 'state' &&
                            !Helpers.isBlank(control.value.countryName) &&
                            control.config.state.pickerConfig &&
                            control.config.state.pickerConfig.defaultOptions &&
                            control.config.state.pickerConfig.defaultOptions.length === 0)) {
                        formValidity_1 = false;
                    }
                    if (!Helpers.isEmpty(control.config[subfield].maxlength) &&
                        !Helpers.isEmpty(control.value[subfield]) &&
                        control.value[subfield].length > control.config[subfield].maxlength) {
                        maxlengthError = true;
                        maxlengthFields.push(subfield);
                        formValidity_1 = false;
                    }
                }
            });
            if (!valid_1 || !formValidity_1 || maxlengthError) {
                returnVal = {};
            }
            if (!valid_1) {
                returnVal.invalidAddress = true;
                returnVal.invalidAddressFields = invalidAddressFields;
            }
            if (!formValidity_1) {
                returnVal.invalidAddressForForm = true;
            }
            if (maxlengthError) {
                returnVal.maxlength = true;
                returnVal.maxlengthFields = maxlengthFields;
            }
            return returnVal;
        }
        return null;
    };
    return FormValidators;
}());
export { FormValidators };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztJQUUxQyxXQUFXLEdBQUcsVUFBVTs7SUFDeEIsUUFBUSxHQUFHLElBQUk7QUFFckI7SUFBQTtJQXdJQSxDQUFDOzs7Ozs7SUF2SVMsOENBQXFCOzs7OztJQUE3QixVQUE4QixRQUFRLEVBQUUsT0FBTztRQUM3QyxPQUFPLENBQ0wsUUFBUSxLQUFLLE9BQU87WUFDcEIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQzVCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjO1lBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7SUFFRCxxRUFBcUU7Ozs7OztJQUM5RCx5QkFBVTs7Ozs7O0lBQWpCLFVBQWtCLE9BQU87UUFDdkIsT0FBTyxPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FB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WSxFQUFFO2dCQUNqQixTQUFTLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixTQUFTLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQzthQUM3QztZQUNELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBeElELElBd0lDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmNvbnN0IE1BWF9JTlRFR0VSID0gMjE0NzQ4MzY0NztcbmNvbnN0IE1JTl9ZRUFSID0gMTc1MztcblxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3JzIHtcbiAgcHJpdmF0ZSBzaG93U3RhdGVSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuc3RhdGUpICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCAmJlxuICAgICAgSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuc3RhdGUpICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS51cGRhdGVkICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDBcbiAgICApO1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBkb2VzIG5vdCBleGNlZWQgdGhlIG1heCBpbnRlZ2VyIHZhbHVlXG4gIHN0YXRpYyBtYXhJbnRlZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSA8IE1BWF9JTlRFR0VSID8gbnVsbCA6IHsgaW50ZWdlclRvb0xhcmdlOiB0cnVlIH07XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGlzIGFib3ZlIHRoZSBtaW5pbXVtIHllYXJcbiAgc3RhdGljIG1pblllYXIoY29udHJvbCkge1xuICAgIGlmICghY29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sLnZhbHVlID49IE1JTl9ZRUFSID8gbnVsbCA6IHsgbWluWWVhcjogdHJ1ZSB9O1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBkb2VzIG5vdCBleGNlZWQgdGhlIG1heCBudW1iZXIgdmFsdWVcbiAgc3RhdGljIG1heERvdWJsZShjb250cm9sKSB7XG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA/IG51bGwgOiB7IGRvdWJsZVRvb0xhcmdlOiB0cnVlIH07XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgaXMgYW4gZW1haWxcbiAgc3RhdGljIGlzRW1haWwoY29udHJvbCkge1xuICAgIGxldCBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpbnZhbGlkRW1haWw6IHRydWUgfTtcbiAgfVxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGlzIGEgdmFsaWQgYWRkcmVzc1xuICBzdGF0aWMgaXNWYWxpZEFkZHJlc3MoY29udHJvbCkge1xuICAgIGxldCBmaWVsZExpc3Q6IHN0cmluZ1tdID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgICBsZXQgaW52YWxpZEFkZHJlc3NGaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IG1heGxlbmd0aEZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgcmV0dXJuVmFsOiB7XG4gICAgICBpbnZhbGlkQWRkcmVzcz86IGJvb2xlYW47XG4gICAgICBpbnZhbGlkQWRkcmVzc0ZpZWxkcz86IHN0cmluZ1tdO1xuICAgICAgaW52YWxpZEFkZHJlc3NGb3JGb3JtPzogYm9vbGVhbjtcbiAgICAgIG1heGxlbmd0aD86IGJvb2xlYW47XG4gICAgICBtYXhsZW5ndGhGaWVsZHM/OiBzdHJpbmdbXTtcbiAgICB9ID0gbnVsbDtcbiAgICBsZXQgbWF4bGVuZ3RoRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgc2hvd0NvdW50cnlSZXF1aXJlZEZsYWcgPSAoc3ViZmllbGQsIGN0cmwpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAhSGVscGVycy5pc0VtcHR5KGN0cmwuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgY3RybC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgIEhlbHBlcnMuaXNCbGFuayhjdHJsLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5jb3VudHJ5SUQudXBkYXRlZFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgbGV0IHNob3dTdGF0ZVJlcXVpcmVkRmxhZyA9IChzdWJmaWVsZCwgY3RybCk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjdHJsLmNvbmZpZy5zdGF0ZSkgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucmVxdWlyZWQgJiZcbiAgICAgICAgSGVscGVycy5pc0JsYW5rKGN0cmwudmFsdWUuc3RhdGUpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnVwZGF0ZWQgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjdHJsLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwXG4gICAgICApO1xuICAgIH07XG5cbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLmNvbmZpZykge1xuICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgIGxldCBmb3JtVmFsaWRpdHkgPSB0cnVlO1xuICAgICAgZmllbGRMaXN0LmZvckVhY2goKHN1YmZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChbJ2NvdW50cnlJRCcsICdzdGF0ZSddLmluZGV4T2Yoc3ViZmllbGQpID09PSAtMSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkgJiZcbiAgICAgICAgICAgICAgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkgfHxcbiAgICAgICAgICAgIHNob3dDb3VudHJ5UmVxdWlyZWRGbGFnKHN1YmZpZWxkLCBjb250cm9sKSB8fFxuICAgICAgICAgICAgc2hvd1N0YXRlUmVxdWlyZWRGbGFnKHN1YmZpZWxkLCBjb250cm9sKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGludmFsaWRBZGRyZXNzRmllbGRzLnB1c2goY29udHJvbC5jb25maWdbc3ViZmllbGRdLmxhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChzdWJmaWVsZCAhPT0gJ2NvdW50cnlJRCcgJiYgY29udHJvbC5jb25maWdbc3ViZmllbGRdLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkpIHx8XG4gICAgICAgICAgICAgIChzdWJmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkpKSAmJlxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGZvcm1WYWxpZGl0eSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5tYXhsZW5ndGgpICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgY29udHJvbC52YWx1ZVtzdWJmaWVsZF0ubGVuZ3RoID4gY29udHJvbC5jb25maWdbc3ViZmllbGRdLm1heGxlbmd0aFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbWF4bGVuZ3RoRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgbWF4bGVuZ3RoRmllbGRzLnB1c2goc3ViZmllbGQpO1xuICAgICAgICAgICAgZm9ybVZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghdmFsaWQgfHwgIWZvcm1WYWxpZGl0eSB8fCBtYXhsZW5ndGhFcnJvcikge1xuICAgICAgICByZXR1cm5WYWwgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsLmludmFsaWRBZGRyZXNzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuVmFsLmludmFsaWRBZGRyZXNzRmllbGRzID0gaW52YWxpZEFkZHJlc3NGaWVsZHM7XG4gICAgICB9XG4gICAgICBpZiAoIWZvcm1WYWxpZGl0eSkge1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3NGb3JGb3JtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhsZW5ndGhFcnJvcikge1xuICAgICAgICByZXR1cm5WYWwubWF4bGVuZ3RoID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuVmFsLm1heGxlbmd0aEZpZWxkcyA9IG1heGxlbmd0aEZpZWxkcztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=