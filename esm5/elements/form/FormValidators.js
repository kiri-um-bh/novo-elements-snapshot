/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FormValidators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
     * @param {?} subfield
     * @param {?} control
     * @return {?}
     */
    FormValidators.prototype.showStateRequiredFlag = /**
     * @private
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
        var showCountryRequiredFlag = (/**
         * @param {?} subfield
         * @param {?} ctrl
         * @return {?}
         */
        function (subfield, ctrl) {
            return (subfield === 'countryID' &&
                !Helpers.isEmpty(ctrl.config.countryID) &&
                ctrl.config.countryID.required &&
                Helpers.isBlank(ctrl.value.countryName) &&
                ctrl.config.countryID.updated);
        });
        /** @type {?} */
        var showStateRequiredFlag = (/**
         * @param {?} subfield
         * @param {?} ctrl
         * @return {?}
         */
        function (subfield, ctrl) {
            return (subfield === 'state' &&
                !Helpers.isEmpty(ctrl.config.state) &&
                ctrl.config.state.required &&
                Helpers.isBlank(ctrl.value.state) &&
                ctrl.config.state.updated &&
                !Helpers.isBlank(ctrl.value.countryName) &&
                ctrl.config.state.pickerConfig &&
                ctrl.config.state.pickerConfig.defaultOptions &&
                ctrl.config.state.pickerConfig.defaultOptions.length > 0);
        });
        if (control.value && control.config) {
            /** @type {?} */
            var valid_1 = true;
            /** @type {?} */
            var formValidity_1 = true;
            fieldList.forEach((/**
             * @param {?} subfield
             * @return {?}
             */
            function (subfield) {
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
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7SUFFMUMsV0FBVyxHQUFHLFVBQVU7O0lBQ3hCLFFBQVEsR0FBRyxJQUFJO0FBRXJCO0lBQUE7SUF3SUEsQ0FBQzs7Ozs7OztJQXZJUyw4Q0FBcUI7Ozs7OztJQUE3QixVQUE4QixRQUFRLEVBQUUsT0FBTztRQUM3QyxPQUFPLENBQ0wsUUFBUSxLQUFLLE9BQU87WUFDcEIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQzVCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjO1lBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7SUFFRCxxRUFBcUU7Ozs7OztJQUM5RCx5QkFBVTs7Ozs7O0lBQWpCLFVBQWtCLE9BQU87UUFDdkIsT0FBTyxPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMs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QUN2RDtZQUNELElBQUksQ0FBQyxjQUFZLEVBQUU7Z0JBQ2pCLFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7YUFDeEM7WUFDRCxJQUFJLGNBQWMsRUFBRTtnQkFDbEIsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLFNBQVMsQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO2FBQzdDO1lBQ0QsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF4SUQsSUF3SUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuY29uc3QgTUFYX0lOVEVHRVIgPSAyMTQ3NDgzNjQ3O1xuY29uc3QgTUlOX1lFQVIgPSAxNzUzO1xuXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvcnMge1xuICBwcml2YXRlIHNob3dTdGF0ZVJlcXVpcmVkRmxhZyhzdWJmaWVsZCwgY29udHJvbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZy5zdGF0ZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnJlcXVpcmVkICYmXG4gICAgICBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5zdGF0ZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnVwZGF0ZWQgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMFxuICAgICk7XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGRvZXMgbm90IGV4Y2VlZCB0aGUgbWF4IGludGVnZXIgdmFsdWVcbiAgc3RhdGljIG1heEludGVnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBjb250cm9sLnZhbHVlIDwgTUFYX0lOVEVHRVIgPyBudWxsIDogeyBpbnRlZ2VyVG9vTGFyZ2U6IHRydWUgfTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgaXMgYWJvdmUgdGhlIG1pbmltdW0geWVhclxuICBzdGF0aWMgbWluWWVhcihjb250cm9sKSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPj0gTUlOX1lFQVIgPyBudWxsIDogeyBtaW5ZZWFyOiB0cnVlIH07XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGRvZXMgbm90IGV4Y2VlZCB0aGUgbWF4IG51bWJlciB2YWx1ZVxuICBzdGF0aWMgbWF4RG91YmxlKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSID8gbnVsbCA6IHsgZG91YmxlVG9vTGFyZ2U6IHRydWUgfTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBpcyBhbiBlbWFpbFxuICBzdGF0aWMgaXNFbWFpbChjb250cm9sKSB7XG4gICAgY29uc3QgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG4gICAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IEVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW52YWxpZEVtYWlsOiB0cnVlIH07XG4gIH1cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBpcyBhIHZhbGlkIGFkZHJlc3NcbiAgc3RhdGljIGlzVmFsaWRBZGRyZXNzKGNvbnRyb2wpIHtcbiAgICBjb25zdCBmaWVsZExpc3Q6IHN0cmluZ1tdID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgICBjb25zdCBpbnZhbGlkQWRkcmVzc0ZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtYXhsZW5ndGhGaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IHJldHVyblZhbDoge1xuICAgICAgaW52YWxpZEFkZHJlc3M/OiBib29sZWFuO1xuICAgICAgaW52YWxpZEFkZHJlc3NGaWVsZHM/OiBzdHJpbmdbXTtcbiAgICAgIGludmFsaWRBZGRyZXNzRm9yRm9ybT86IGJvb2xlYW47XG4gICAgICBtYXhsZW5ndGg/OiBib29sZWFuO1xuICAgICAgbWF4bGVuZ3RoRmllbGRzPzogc3RyaW5nW107XG4gICAgfSA9IG51bGw7XG4gICAgbGV0IG1heGxlbmd0aEVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3Qgc2hvd0NvdW50cnlSZXF1aXJlZEZsYWcgPSAoc3ViZmllbGQsIGN0cmwpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAhSGVscGVycy5pc0VtcHR5KGN0cmwuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgY3RybC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgIEhlbHBlcnMuaXNCbGFuayhjdHJsLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5jb3VudHJ5SUQudXBkYXRlZFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd1N0YXRlUmVxdWlyZWRGbGFnID0gKHN1YmZpZWxkLCBjdHJsKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAhSGVscGVycy5pc0VtcHR5KGN0cmwuY29uZmlnLnN0YXRlKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzQmxhbmsoY3RybC52YWx1ZS5zdGF0ZSkgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUudXBkYXRlZCAmJlxuICAgICAgICAhSGVscGVycy5pc0JsYW5rKGN0cmwudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDBcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wuY29uZmlnKSB7XG4gICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgbGV0IGZvcm1WYWxpZGl0eSA9IHRydWU7XG4gICAgICBmaWVsZExpc3QuZm9yRWFjaCgoc3ViZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0pKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKFsnY291bnRyeUlEJywgJ3N0YXRlJ10uaW5kZXhPZihzdWJmaWVsZCkgPT09IC0xICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pKSB8fFxuICAgICAgICAgICAgc2hvd0NvdW50cnlSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpIHx8XG4gICAgICAgICAgICBzaG93U3RhdGVSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgaW52YWxpZEFkZHJlc3NGaWVsZHMucHVzaChjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ubGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoKHN1YmZpZWxkICE9PSAnY291bnRyeUlEJyAmJiBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiYgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkgfHxcbiAgICAgICAgICAgICAgKHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSkpICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZm9ybVZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICBjb250cm9sLnZhbHVlW3N1YmZpZWxkXS5sZW5ndGggPiBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ubWF4bGVuZ3RoXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBtYXhsZW5ndGhFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBtYXhsZW5ndGhGaWVsZHMucHVzaChzdWJmaWVsZCk7XG4gICAgICAgICAgICBmb3JtVmFsaWRpdHkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCF2YWxpZCB8fCAhZm9ybVZhbGlkaXR5IHx8IG1heGxlbmd0aEVycm9yKSB7XG4gICAgICAgIHJldHVyblZhbCA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3MgPSB0cnVlO1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3NGaWVsZHMgPSBpbnZhbGlkQWRkcmVzc0ZpZWxkcztcbiAgICAgIH1cbiAgICAgIGlmICghZm9ybVZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVyblZhbC5pbnZhbGlkQWRkcmVzc0ZvckZvcm0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG1heGxlbmd0aEVycm9yKSB7XG4gICAgICAgIHJldHVyblZhbC5tYXhsZW5ndGggPSB0cnVlO1xuICAgICAgICByZXR1cm5WYWwubWF4bGVuZ3RoRmllbGRzID0gbWF4bGVuZ3RoRmllbGRzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==