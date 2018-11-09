/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Helpers } from './../../utils/Helpers';
/** @type {?} */
const MAX_INTEGER = 2147483647;
/** @type {?} */
const MIN_YEAR = 1753;
export class FormValidators {
    /**
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
        let showCountryRequiredFlag = (subfield, ctrl) => {
            return (subfield === 'countryID' &&
                !Helpers.isEmpty(ctrl.config.countryID) &&
                ctrl.config.countryID.required &&
                Helpers.isBlank(ctrl.value.countryName) &&
                ctrl.config.countryID.updated);
        };
        /** @type {?} */
        let showStateRequiredFlag = (subfield, ctrl) => {
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
            let valid = true;
            /** @type {?} */
            let formValidity = true;
            fieldList.forEach((subfield) => {
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
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztNQUUxQyxXQUFXLEdBQUcsVUFBVTs7TUFDeEIsUUFBUSxHQUFHLElBQUk7QUFFckIsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUNqQixxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTztRQUM3QyxPQUFPLENBQ0wsUUFBUSxLQUFLLE9BQU87WUFDcEIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVE7WUFDN0IsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNwQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPO1lBQzVCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztZQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQ2pDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjO1lBQ2hELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUdELE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTztRQUN2QixPQUFPLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxD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QUFJLGNBQWMsRUFBRTtnQkFDbEIsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLFNBQVMsQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO2FBQzdDO1lBQ0QsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlbHBlcnMgfSBmcm9tICcuLy4uLy4uL3V0aWxzL0hlbHBlcnMnO1xuXG5jb25zdCBNQVhfSU5URUdFUiA9IDIxNDc0ODM2NDc7XG5jb25zdCBNSU5fWUVBUiA9IDE3NTM7XG5cbmV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9ycyB7XG4gIHByaXZhdGUgc2hvd1N0YXRlUmVxdWlyZWRGbGFnKHN1YmZpZWxkLCBjb250cm9sKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN1YmZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAhSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnLnN0YXRlKSAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucmVxdWlyZWQgJiZcbiAgICAgIEhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlLnN0YXRlKSAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUudXBkYXRlZCAmJlxuICAgICAgIUhlbHBlcnMuaXNCbGFuayhjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucy5sZW5ndGggPiAwXG4gICAgKTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgZG9lcyBub3QgZXhjZWVkIHRoZSBtYXggaW50ZWdlciB2YWx1ZVxuICBzdGF0aWMgbWF4SW50ZWdlcihjb250cm9sKSB7XG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPCBNQVhfSU5URUdFUiA/IG51bGwgOiB7IGludGVnZXJUb29MYXJnZTogdHJ1ZSB9O1xuICB9XG5cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBpcyBhYm92ZSB0aGUgbWluaW11bSB5ZWFyXG4gIHN0YXRpYyBtaW5ZZWFyKGNvbnRyb2wpIHtcbiAgICBpZiAoIWNvbnRyb2wudmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSA+PSBNSU5fWUVBUiA/IG51bGwgOiB7IG1pblllYXI6IHRydWUgfTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgZG9lcyBub3QgZXhjZWVkIHRoZSBtYXggbnVtYmVyIHZhbHVlXG4gIHN0YXRpYyBtYXhEb3VibGUoY29udHJvbCkge1xuICAgIHJldHVybiBjb250cm9sLnZhbHVlIDwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgPyBudWxsIDogeyBkb3VibGVUb29MYXJnZTogdHJ1ZSB9O1xuICB9XG5cbiAgLy8gTWFrZSBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGlzIGFuIGVtYWlsXG4gIHN0YXRpYyBpc0VtYWlsKGNvbnRyb2wpIHtcbiAgICBsZXQgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSokL2k7XG4gICAgcmV0dXJuICFjb250cm9sLnZhbHVlIHx8IEVNQUlMX1JFR0VYUC50ZXN0KGNvbnRyb2wudmFsdWUpID8gbnVsbCA6IHsgaW52YWxpZEVtYWlsOiB0cnVlIH07XG4gIH1cbiAgLy8gTWFrZXMgc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBpcyBhIHZhbGlkIGFkZHJlc3NcbiAgc3RhdGljIGlzVmFsaWRBZGRyZXNzKGNvbnRyb2wpIHtcbiAgICBsZXQgZmllbGRMaXN0OiBzdHJpbmdbXSA9IFsnYWRkcmVzczEnLCAnYWRkcmVzczInLCAnY2l0eScsICdzdGF0ZScsICd6aXAnLCAnY291bnRyeUlEJ107XG4gICAgbGV0IGludmFsaWRBZGRyZXNzRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBtYXhsZW5ndGhGaWVsZHM6IHN0cmluZ1tdID0gW107XG4gICAgbGV0IHJldHVyblZhbDoge1xuICAgICAgaW52YWxpZEFkZHJlc3M/OiBib29sZWFuO1xuICAgICAgaW52YWxpZEFkZHJlc3NGaWVsZHM/OiBzdHJpbmdbXTtcbiAgICAgIGludmFsaWRBZGRyZXNzRm9yRm9ybT86IGJvb2xlYW47XG4gICAgICBtYXhsZW5ndGg/OiBib29sZWFuO1xuICAgICAgbWF4bGVuZ3RoRmllbGRzPzogc3RyaW5nW107XG4gICAgfSA9IG51bGw7XG4gICAgbGV0IG1heGxlbmd0aEVycm9yOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHNob3dDb3VudHJ5UmVxdWlyZWRGbGFnID0gKHN1YmZpZWxkLCBjdHJsKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBzdWJmaWVsZCA9PT0gJ2NvdW50cnlJRCcgJiZcbiAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjdHJsLmNvbmZpZy5jb3VudHJ5SUQpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzQmxhbmsoY3RybC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgY3RybC5jb25maWcuY291bnRyeUlELnVwZGF0ZWRcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGxldCBzaG93U3RhdGVSZXF1aXJlZEZsYWcgPSAoc3ViZmllbGQsIGN0cmwpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIHN1YmZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY3RybC5jb25maWcuc3RhdGUpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnJlcXVpcmVkICYmXG4gICAgICAgIEhlbHBlcnMuaXNCbGFuayhjdHJsLnZhbHVlLnN0YXRlKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS51cGRhdGVkICYmXG4gICAgICAgICFIZWxwZXJzLmlzQmxhbmsoY3RybC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgaWYgKGNvbnRyb2wudmFsdWUgJiYgY29udHJvbC5jb25maWcpIHtcbiAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICBsZXQgZm9ybVZhbGlkaXR5ID0gdHJ1ZTtcbiAgICAgIGZpZWxkTGlzdC5mb3JFYWNoKChzdWJmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmICghSGVscGVycy5pc0VtcHR5KGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXSkpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoWydjb3VudHJ5SUQnLCAnc3RhdGUnXS5pbmRleE9mKHN1YmZpZWxkKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWdbc3ViZmllbGRdLnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkpIHx8XG4gICAgICAgICAgICBzaG93Q291bnRyeVJlcXVpcmVkRmxhZyhzdWJmaWVsZCwgY29udHJvbCkgfHxcbiAgICAgICAgICAgIHNob3dTdGF0ZVJlcXVpcmVkRmxhZyhzdWJmaWVsZCwgY29udHJvbClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBpbnZhbGlkQWRkcmVzc0ZpZWxkcy5wdXNoKGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5sYWJlbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICgoc3ViZmllbGQgIT09ICdjb3VudHJ5SUQnICYmIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJiBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pKSB8fFxuICAgICAgICAgICAgICAoc3ViZmllbGQgPT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZy5jb3VudHJ5SUQpICYmXG4gICAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuY291bnRyeUlELnJlcXVpcmVkICYmXG4gICAgICAgICAgICAgICAgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpKSkgJiZcbiAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgIHN1YmZpZWxkID09PSAnc3RhdGUnICYmXG4gICAgICAgICAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZy5kZWZhdWx0T3B0aW9ucyAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmb3JtVmFsaWRpdHkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ubWF4bGVuZ3RoKSAmJlxuICAgICAgICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlW3N1YmZpZWxkXSkgJiZcbiAgICAgICAgICAgIGNvbnRyb2wudmFsdWVbc3ViZmllbGRdLmxlbmd0aCA+IGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5tYXhsZW5ndGhcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIG1heGxlbmd0aEVycm9yID0gdHJ1ZTtcbiAgICAgICAgICAgIG1heGxlbmd0aEZpZWxkcy5wdXNoKHN1YmZpZWxkKTtcbiAgICAgICAgICAgIGZvcm1WYWxpZGl0eSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAoIXZhbGlkIHx8ICFmb3JtVmFsaWRpdHkgfHwgbWF4bGVuZ3RoRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuVmFsID0ge307XG4gICAgICB9XG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIHJldHVyblZhbC5pbnZhbGlkQWRkcmVzcyA9IHRydWU7XG4gICAgICAgIHJldHVyblZhbC5pbnZhbGlkQWRkcmVzc0ZpZWxkcyA9IGludmFsaWRBZGRyZXNzRmllbGRzO1xuICAgICAgfVxuICAgICAgaWYgKCFmb3JtVmFsaWRpdHkpIHtcbiAgICAgICAgcmV0dXJuVmFsLmludmFsaWRBZGRyZXNzRm9yRm9ybSA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAobWF4bGVuZ3RoRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuVmFsLm1heGxlbmd0aCA9IHRydWU7XG4gICAgICAgIHJldHVyblZhbC5tYXhsZW5ndGhGaWVsZHMgPSBtYXhsZW5ndGhGaWVsZHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0dXJuVmFsO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19