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
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return !control.value || EMAIL_REGEXP.test(control.value) ? null : { invalidEmail: true };
    }
    // Makes sure the control value is a valid address
    /**
     * @param {?} control
     * @return {?}
     */
    static isValidAddress(control) {
        /** @type {?} */
        let fieldList = ['address1', 'address2', 'city', 'state', 'zip', 'countryID'];
        /** @type {?} */
        let invalidAddressFields = [];
        /** @type {?} */
        let maxlengthFields = [];
        /** @type {?} */
        let returnVal = null;
        /** @type {?} */
        let maxlengthError = false;
        /** @type {?} */
        let showCountryRequiredFlag = (/**
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
        let showStateRequiredFlag = (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7TUFFMUMsV0FBVyxHQUFHLFVBQVU7O01BQ3hCLFFBQVEsR0FBRyxJQUFJO0FBRXJCLE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBQ2pCLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxPQUFPO1FBQzdDLE9BQU8sQ0FDTCxRQUFRLEtBQUssT0FBTztZQUNwQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDdEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUM3QixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU87WUFDNUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDakMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWM7WUFDaEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUM1RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPO1FBQ3ZCLE9BQU8sT0FBTyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFF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LElBQUksQ0FBQzthQUN4QztZQUNELElBQUksY0FBYyxFQUFFO2dCQUNsQixTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDM0IsU0FBUyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7YUFDN0M7WUFDRCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVscGVycyB9IGZyb20gJy4vLi4vLi4vdXRpbHMvSGVscGVycyc7XG5cbmNvbnN0IE1BWF9JTlRFR0VSID0gMjE0NzQ4MzY0NztcbmNvbnN0IE1JTl9ZRUFSID0gMTc1MztcblxuZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3JzIHtcbiAgcHJpdmF0ZSBzaG93U3RhdGVSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuc3RhdGUpICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCAmJlxuICAgICAgSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuc3RhdGUpICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS51cGRhdGVkICYmXG4gICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDBcbiAgICApO1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBkb2VzIG5vdCBleGNlZWQgdGhlIG1heCBpbnRlZ2VyIHZhbHVlXG4gIHN0YXRpYyBtYXhJbnRlZ2VyKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSA8IE1BWF9JTlRFR0VSID8gbnVsbCA6IHsgaW50ZWdlclRvb0xhcmdlOiB0cnVlIH07XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGlzIGFib3ZlIHRoZSBtaW5pbXVtIHllYXJcbiAgc3RhdGljIG1pblllYXIoY29udHJvbCkge1xuICAgIGlmICghY29udHJvbC52YWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb250cm9sLnZhbHVlID49IE1JTl9ZRUFSID8gbnVsbCA6IHsgbWluWWVhcjogdHJ1ZSB9O1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBkb2VzIG5vdCBleGNlZWQgdGhlIG1heCBudW1iZXIgdmFsdWVcbiAgc3RhdGljIG1heERvdWJsZShjb250cm9sKSB7XG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiA/IG51bGwgOiB7IGRvdWJsZVRvb0xhcmdlOiB0cnVlIH07XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgaXMgYW4gZW1haWxcbiAgc3RhdGljIGlzRW1haWwoY29udHJvbCkge1xuICAgIGxldCBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKiQvaTtcbiAgICByZXR1cm4gIWNvbnRyb2wudmFsdWUgfHwgRU1BSUxfUkVHRVhQLnRlc3QoY29udHJvbC52YWx1ZSkgPyBudWxsIDogeyBpbnZhbGlkRW1haWw6IHRydWUgfTtcbiAgfVxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGlzIGEgdmFsaWQgYWRkcmVzc1xuICBzdGF0aWMgaXNWYWxpZEFkZHJlc3MoY29udHJvbCkge1xuICAgIGxldCBmaWVsZExpc3Q6IHN0cmluZ1tdID0gWydhZGRyZXNzMScsICdhZGRyZXNzMicsICdjaXR5JywgJ3N0YXRlJywgJ3ppcCcsICdjb3VudHJ5SUQnXTtcbiAgICBsZXQgaW52YWxpZEFkZHJlc3NGaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IG1heGxlbmd0aEZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgcmV0dXJuVmFsOiB7XG4gICAgICBpbnZhbGlkQWRkcmVzcz86IGJvb2xlYW47XG4gICAgICBpbnZhbGlkQWRkcmVzc0ZpZWxkcz86IHN0cmluZ1tdO1xuICAgICAgaW52YWxpZEFkZHJlc3NGb3JGb3JtPzogYm9vbGVhbjtcbiAgICAgIG1heGxlbmd0aD86IGJvb2xlYW47XG4gICAgICBtYXhsZW5ndGhGaWVsZHM/OiBzdHJpbmdbXTtcbiAgICB9ID0gbnVsbDtcbiAgICBsZXQgbWF4bGVuZ3RoRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBsZXQgc2hvd0NvdW50cnlSZXF1aXJlZEZsYWcgPSAoc3ViZmllbGQsIGN0cmwpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAhSGVscGVycy5pc0VtcHR5KGN0cmwuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgY3RybC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgIEhlbHBlcnMuaXNCbGFuayhjdHJsLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5jb3VudHJ5SUQudXBkYXRlZFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgbGV0IHNob3dTdGF0ZVJlcXVpcmVkRmxhZyA9IChzdWJmaWVsZCwgY3RybCk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjdHJsLmNvbmZpZy5zdGF0ZSkgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucmVxdWlyZWQgJiZcbiAgICAgICAgSGVscGVycy5pc0JsYW5rKGN0cmwudmFsdWUuc3RhdGUpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnVwZGF0ZWQgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjdHJsLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwXG4gICAgICApO1xuICAgIH07XG5cbiAgICBpZiAoY29udHJvbC52YWx1ZSAmJiBjb250cm9sLmNvbmZpZykge1xuICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgIGxldCBmb3JtVmFsaWRpdHkgPSB0cnVlO1xuICAgICAgZmllbGRMaXN0LmZvckVhY2goKHN1YmZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChbJ2NvdW50cnlJRCcsICdzdGF0ZSddLmluZGV4T2Yoc3ViZmllbGQpID09PSAtMSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkgJiZcbiAgICAgICAgICAgICAgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkgfHxcbiAgICAgICAgICAgIHNob3dDb3VudHJ5UmVxdWlyZWRGbGFnKHN1YmZpZWxkLCBjb250cm9sKSB8fFxuICAgICAgICAgICAgc2hvd1N0YXRlUmVxdWlyZWRGbGFnKHN1YmZpZWxkLCBjb250cm9sKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGludmFsaWRBZGRyZXNzRmllbGRzLnB1c2goY29udHJvbC5jb25maWdbc3ViZmllbGRdLmxhYmVsKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKChzdWJmaWVsZCAhPT0gJ2NvdW50cnlJRCcgJiYgY29udHJvbC5jb25maWdbc3ViZmllbGRdLnJlcXVpcmVkICYmIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkpIHx8XG4gICAgICAgICAgICAgIChzdWJmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRCkgJiZcbiAgICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWQgJiZcbiAgICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkpKSAmJlxuICAgICAgICAgICAgIShcbiAgICAgICAgICAgICAgc3ViZmllbGQgPT09ICdzdGF0ZScgJiZcbiAgICAgICAgICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPT09IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGZvcm1WYWxpZGl0eSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5tYXhsZW5ndGgpICYmXG4gICAgICAgICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgY29udHJvbC52YWx1ZVtzdWJmaWVsZF0ubGVuZ3RoID4gY29udHJvbC5jb25maWdbc3ViZmllbGRdLm1heGxlbmd0aFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgbWF4bGVuZ3RoRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgbWF4bGVuZ3RoRmllbGRzLnB1c2goc3ViZmllbGQpO1xuICAgICAgICAgICAgZm9ybVZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICghdmFsaWQgfHwgIWZvcm1WYWxpZGl0eSB8fCBtYXhsZW5ndGhFcnJvcikge1xuICAgICAgICByZXR1cm5WYWwgPSB7fTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuVmFsLmludmFsaWRBZGRyZXNzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuVmFsLmludmFsaWRBZGRyZXNzRmllbGRzID0gaW52YWxpZEFkZHJlc3NGaWVsZHM7XG4gICAgICB9XG4gICAgICBpZiAoIWZvcm1WYWxpZGl0eSkge1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3NGb3JGb3JtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhsZW5ndGhFcnJvcikge1xuICAgICAgICByZXR1cm5WYWwubWF4bGVuZ3RoID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuVmFsLm1heGxlbmd0aEZpZWxkcyA9IG1heGxlbmd0aEZpZWxkcztcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5WYWw7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=