/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/FormValidators.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Helpers } from './../../utils/Helpers';
/** @type {?} */
const MAX_INTEGER = 2147483647;
/** @type {?} */
const MIN_YEAR = 1753;
export class FormValidators {
    /**
     * @private
     * @param {?} subfield
     * @param {?} control
     * @return {?}
     */
    showStateRequiredFlag(subfield, control) {
        return (subfield === 'state' &&
            !Helpers.isEmpty(control.config.state) &&
            control.config.state.required &&
            Helpers.isBlank(control.value.state) &&
            control.config.state.updated &&
            !Helpers.isBlank(control.value.countryName) &&
            control.config.state.pickerConfig &&
            control.config.state.pickerConfig.defaultOptions &&
            control.config.state.pickerConfig.defaultOptions.length > 0);
    }
    // Makes sure the control value does not exceed the max integer value
    /**
     * @param {?} control
     * @return {?}
     */
    static maxInteger(control) {
        return control.value < MAX_INTEGER ? null : { integerTooLarge: true };
    }
    // Makes sure the control value is above the minimum year
    /**
     * @param {?} control
     * @return {?}
     */
    static minYear(control) {
        if (!control.value) {
            return null;
        }
        return control.value >= MIN_YEAR ? null : { minYear: true };
    }
    // Makes sure the control value does not exceed the max number value
    /**
     * @param {?} control
     * @return {?}
     */
    static maxDouble(control) {
        return control.value < Number.MAX_SAFE_INTEGER ? null : { doubleTooLarge: true };
    }
    // Make sure the control value is an email
    /**
     * @param {?} control
     * @return {?}
     */
    static isEmail(control) {
        /** @type {?} */
        const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return !control.value || EMAIL_REGEXP.test(control.value) ? null : { invalidEmail: true };
    }
    // Makes sure the control value is a valid address
    /**
     * @param {?} control
     * @return {?}
     */
    static isValidAddress(control) {
        /** @type {?} */
        const fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        /** @type {?} */
        const invalidAddressFields = [];
        /** @type {?} */
        const maxlengthFields = [];
        /** @type {?} */
        let returnVal = null;
        /** @type {?} */
        let maxlengthError = false;
        /** @type {?} */
        const showCountryRequiredFlag = (/**
         * @param {?} subfield
         * @param {?} ctrl
         * @return {?}
         */
        (subfield, ctrl) => {
            return (subfield === 'countryID' &&
                !Helpers.isEmpty(ctrl.config.countryID) &&
                ctrl.config.countryID.required &&
                Helpers.isBlank(ctrl.value.countryName) &&
                ctrl.config.countryID.updated);
        });
        /** @type {?} */
        const showStateRequiredFlag = (/**
         * @param {?} subfield
         * @param {?} ctrl
         * @return {?}
         */
        (subfield, ctrl) => {
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
            let valid = true;
            /** @type {?} */
            let formValidity = true;
            fieldList.forEach((/**
             * @param {?} subfield
             * @return {?}
             */
            (subfield) => {
                if (!Helpers.isEmpty(control.config[subfield])) {
                    if ((['countryID', 'state'].indexOf(subfield) === -1 &&
                        control.config[subfield].required &&
                        !Helpers.isBlank(control.value[subfield]) &&
                        Helpers.isEmpty(control.value[subfield])) ||
                        showCountryRequiredFlag(subfield, control) ||
                        showStateRequiredFlag(subfield, control)) {
                        valid = false;
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
                        formValidity = false;
                    }
                    if (!Helpers.isEmpty(control.config[subfield].maxlength) &&
                        !Helpers.isEmpty(control.value[subfield]) &&
                        control.value[subfield].length > control.config[subfield].maxlength) {
                        maxlengthError = true;
                        maxlengthFields.push(subfield);
                        formValidity = false;
                    }
                }
            }));
            if (!valid || !formValidity || maxlengthError) {
                returnVal = {};
            }
            if (!valid) {
                returnVal.invalidAddress = true;
                returnVal.invalidAddressFields = invalidAddressFields;
            }
            if (!formValidity) {
                returnVal.invalidAddressForForm = true;
            }
            if (maxlengthError) {
                returnVal.maxlength = true;
                returnVal.maxlengthFields = maxlengthFields;
            }
            return returnVal;
        }
        return null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFMUMsV0FBVyxHQUFHLFVBQVU7O01BQ3hCLFFBQVEsR0FBRyxJQUFJO0FBRXJCLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBQ2pCLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPO1FBQzdDLE9BQU8sQ0FDTCxRQUFRLEtBQUssT0FBTztZQUNwQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDNUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWM7WUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUM1RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3ZCLE9BQU8sT0FBTyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFF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SUFBSSxDQUFDO2FBQ3hDO1lBQ0QsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixTQUFTLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQzthQUM3QztZQUNELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuY29uc3QgTUFYX0lOVEVHRVIgPSAyMTQ3NDgzNjQ3O1xuY29uc3QgTUlOX1lFQVIgPSAxNzUzO1xuXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvcnMge1xuICBwcml2YXRlIHNob3dTdGF0ZVJlcXVpcmVkRmxhZyhzdWJmaWVsZCwgY29udHJvbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZy5zdGF0ZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnJlcXVpcmVkICYmXG4gICAgICBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5zdGF0ZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnVwZGF0ZWQgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMFxuICAgICk7XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGRvZXMgbm90IGV4Y2VlZCB0aGUgbWF4IGludGVnZXIgdmFsdWVcbiAgc3RhdGljIG1heEludGVnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBjb250cm9sLnZhbHVlIDwgTUFYX0lOVEVHRVIgPyBudWxsIDogeyBpbnRlZ2VyVG9vTGFyZ2U6IHRydWUgfTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgaXMgYWJvdmUgdGhlIG1pbmltdW0geWVhclxuICBzdGF0aWMgbWluWWVhcihjb250cm9sKSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPj0gTUlOX1lFQVIgPyBudWxsIDogeyBtaW5ZZWFyOiB0cnVlIH07XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGRvZXMgbm90IGV4Y2VlZCB0aGUgbWF4IG51bWJlciB2YWx1ZVxuICBzdGF0aWMgbWF4RG91YmxlKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSID8gbnVsbCA6IHsgZG91YmxlVG9vTGFyZ2U6IHRydWUgfTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBpcyBhbiBlbWFpbFxuICBzdGF0aWMgaXNFbWFpbChjb250cm9sKSB7XG4gICAgY29uc3QgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG4gICAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IEVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW52YWxpZEVtYWlsOiB0cnVlIH07XG4gIH1cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBpcyBhIHZhbGlkIGFkZHJlc3NcbiAgc3RhdGljIGlzVmFsaWRBZGRyZXNzKGNvbnRyb2wpIHtcbiAgICBjb25zdCBmaWVsZExpc3Q6IHN0cmluZ1tdID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgICBjb25zdCBpbnZhbGlkQWRkcmVzc0ZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtYXhsZW5ndGhGaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IHJldHVyblZhbDoge1xuICAgICAgaW52YWxpZEFkZHJlc3M/OiBib29sZWFuO1xuICAgICAgaW52YWxpZEFkZHJlc3NGaWVsZHM/OiBzdHJpbmdbXTtcbiAgICAgIGludmFsaWRBZGRyZXNzRm9yRm9ybT86IGJvb2xlYW47XG4gICAgICBtYXhsZW5ndGg/OiBib29sZWFuO1xuICAgICAgbWF4bGVuZ3RoRmllbGRzPzogc3RyaW5nW107XG4gICAgfSA9IG51bGw7XG4gICAgbGV0IG1heGxlbmd0aEVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgY29uc3Qgc2hvd0NvdW50cnlSZXF1aXJlZEZsYWcgPSAoc3ViZmllbGQsIGN0cmwpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAhSGVscGVycy5pc0VtcHR5KGN0cmwuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgY3RybC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgIEhlbHBlcnMuaXNCbGFuayhjdHJsLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5jb3VudHJ5SUQudXBkYXRlZFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2hvd1N0YXRlUmVxdWlyZWRGbGFnID0gKHN1YmZpZWxkLCBjdHJsKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAhSGVscGVycy5pc0VtcHR5KGN0cmwuY29uZmlnLnN0YXRlKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzQmxhbmsoY3RybC52YWx1ZS5zdGF0ZSkgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUudXBkYXRlZCAmJlxuICAgICAgICAhSGVscGVycy5pc0JsYW5rKGN0cmwudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDBcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wuY29uZmlnKSB7XG4gICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgbGV0IGZvcm1WYWxpZGl0eSA9IHRydWU7XG4gICAgICBmaWVsZExpc3QuZm9yRWFjaCgoc3ViZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0pKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKFsnY291bnRyeUlEJywgJ3N0YXRlJ10uaW5kZXhPZihzdWJmaWVsZCkgPT09IC0xICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pKSB8fFxuICAgICAgICAgICAgc2hvd0NvdW50cnlSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpIHx8XG4gICAgICAgICAgICBzaG93U3RhdGVSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgaW52YWxpZEFkZHJlc3NGaWVsZHMucHVzaChjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ubGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoKHN1YmZpZWxkICE9PSAnY291bnRyeUlEJyAmJiBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiYgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkgfHxcbiAgICAgICAgICAgICAgKHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSkpICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZm9ybVZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICBjb250cm9sLnZhbHVlW3N1YmZpZWxkXS5sZW5ndGggPiBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ubWF4bGVuZ3RoXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBtYXhsZW5ndGhFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBtYXhsZW5ndGhGaWVsZHMucHVzaChzdWJmaWVsZCk7XG4gICAgICAgICAgICBmb3JtVmFsaWRpdHkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCF2YWxpZCB8fCAhZm9ybVZhbGlkaXR5IHx8IG1heGxlbmd0aEVycm9yKSB7XG4gICAgICAgIHJldHVyblZhbCA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3MgPSB0cnVlO1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3NGaWVsZHMgPSBpbnZhbGlkQWRkcmVzc0ZpZWxkcztcbiAgICAgIH1cbiAgICAgIGlmICghZm9ybVZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVyblZhbC5pbnZhbGlkQWRkcmVzc0ZvckZvcm0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG1heGxlbmd0aEVycm9yKSB7XG4gICAgICAgIHJldHVyblZhbC5tYXhsZW5ndGggPSB0cnVlO1xuICAgICAgICByZXR1cm5WYWwubWF4bGVuZ3RoRmllbGRzID0gbWF4bGVuZ3RoRmllbGRzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==