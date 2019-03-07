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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybVZhbGlkYXRvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvZm9ybS9Gb3JtVmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDOztNQUUxQyxXQUFXLEdBQUcsVUFBVTs7TUFDeEIsUUFBUSxHQUFHLElBQUk7QUFFckIsTUFBTTs7Ozs7O0lBQ0kscUJBQXFCLENBQUMsUUFBUSxFQUFFLE9BQU87UUFDN0MsT0FBTyxDQUNMLFFBQVEsS0FBSyxPQUFPO1lBQ3BCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUN0QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRO1lBQzdCLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDcEMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTztZQUM1QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNqQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYztZQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQzVELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87UUFDdkIsT0FBTyxPQUFPLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN4RSxD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QUU7Z0JBQ2xCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixTQUFTLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQzthQUM3QztZQUNELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWxwZXJzIH0gZnJvbSAnLi8uLi8uLi91dGlscy9IZWxwZXJzJztcblxuY29uc3QgTUFYX0lOVEVHRVIgPSAyMTQ3NDgzNjQ3O1xuY29uc3QgTUlOX1lFQVIgPSAxNzUzO1xuXG5leHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvcnMge1xuICBwcml2YXRlIHNob3dTdGF0ZVJlcXVpcmVkRmxhZyhzdWJmaWVsZCwgY29udHJvbCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZy5zdGF0ZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnJlcXVpcmVkICYmXG4gICAgICBIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5zdGF0ZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnVwZGF0ZWQgJiZcbiAgICAgICFIZWxwZXJzLmlzQmxhbmsoY29udHJvbC52YWx1ZS5jb3VudHJ5TmFtZSkgJiZcbiAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zICYmXG4gICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMubGVuZ3RoID4gMFxuICAgICk7XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGRvZXMgbm90IGV4Y2VlZCB0aGUgbWF4IGludGVnZXIgdmFsdWVcbiAgc3RhdGljIG1heEludGVnZXIoY29udHJvbCkge1xuICAgIHJldHVybiBjb250cm9sLnZhbHVlIDwgTUFYX0lOVEVHRVIgPyBudWxsIDogeyBpbnRlZ2VyVG9vTGFyZ2U6IHRydWUgfTtcbiAgfVxuXG4gIC8vIE1ha2VzIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgaXMgYWJvdmUgdGhlIG1pbmltdW0geWVhclxuICBzdGF0aWMgbWluWWVhcihjb250cm9sKSB7XG4gICAgaWYgKCFjb250cm9sLnZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRyb2wudmFsdWUgPj0gTUlOX1lFQVIgPyBudWxsIDogeyBtaW5ZZWFyOiB0cnVlIH07XG4gIH1cblxuICAvLyBNYWtlcyBzdXJlIHRoZSBjb250cm9sIHZhbHVlIGRvZXMgbm90IGV4Y2VlZCB0aGUgbWF4IG51bWJlciB2YWx1ZVxuICBzdGF0aWMgbWF4RG91YmxlKGNvbnRyb2wpIHtcbiAgICByZXR1cm4gY29udHJvbC52YWx1ZSA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSID8gbnVsbCA6IHsgZG91YmxlVG9vTGFyZ2U6IHRydWUgfTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB0aGUgY29udHJvbCB2YWx1ZSBpcyBhbiBlbWFpbFxuICBzdGF0aWMgaXNFbWFpbChjb250cm9sKSB7XG4gICAgbGV0IEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykqJC9pO1xuICAgIHJldHVybiAhY29udHJvbC52YWx1ZSB8fCBFTUFJTF9SRUdFWFAudGVzdChjb250cm9sLnZhbHVlKSA/IG51bGwgOiB7IGludmFsaWRFbWFpbDogdHJ1ZSB9O1xuICB9XG4gIC8vIE1ha2VzIHN1cmUgdGhlIGNvbnRyb2wgdmFsdWUgaXMgYSB2YWxpZCBhZGRyZXNzXG4gIHN0YXRpYyBpc1ZhbGlkQWRkcmVzcyhjb250cm9sKSB7XG4gICAgbGV0IGZpZWxkTGlzdDogc3RyaW5nW10gPSBbJ2FkZHJlc3MxJywgJ2FkZHJlc3MyJywgJ2NpdHknLCAnc3RhdGUnLCAnemlwJywgJ2NvdW50cnlJRCddO1xuICAgIGxldCBpbnZhbGlkQWRkcmVzc0ZpZWxkczogc3RyaW5nW10gPSBbXTtcbiAgICBsZXQgbWF4bGVuZ3RoRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCByZXR1cm5WYWw6IHtcbiAgICAgIGludmFsaWRBZGRyZXNzPzogYm9vbGVhbjtcbiAgICAgIGludmFsaWRBZGRyZXNzRmllbGRzPzogc3RyaW5nW107XG4gICAgICBpbnZhbGlkQWRkcmVzc0ZvckZvcm0/OiBib29sZWFuO1xuICAgICAgbWF4bGVuZ3RoPzogYm9vbGVhbjtcbiAgICAgIG1heGxlbmd0aEZpZWxkcz86IHN0cmluZ1tdO1xuICAgIH0gPSBudWxsO1xuICAgIGxldCBtYXhsZW5ndGhFcnJvcjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBzaG93Q291bnRyeVJlcXVpcmVkRmxhZyA9IChzdWJmaWVsZCwgY3RybCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgc3ViZmllbGQgPT09ICdjb3VudHJ5SUQnICYmXG4gICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY3RybC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5jb3VudHJ5SUQucmVxdWlyZWQgJiZcbiAgICAgICAgSGVscGVycy5pc0JsYW5rKGN0cmwudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLmNvdW50cnlJRC51cGRhdGVkXG4gICAgICApO1xuICAgIH07XG5cbiAgICBsZXQgc2hvd1N0YXRlUmVxdWlyZWRGbGFnID0gKHN1YmZpZWxkLCBjdHJsKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAhSGVscGVycy5pc0VtcHR5KGN0cmwuY29uZmlnLnN0YXRlKSAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5yZXF1aXJlZCAmJlxuICAgICAgICBIZWxwZXJzLmlzQmxhbmsoY3RybC52YWx1ZS5zdGF0ZSkgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUudXBkYXRlZCAmJlxuICAgICAgICAhSGVscGVycy5pc0JsYW5rKGN0cmwudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgIGN0cmwuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICBjdHJsLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgY3RybC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA+IDBcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGlmIChjb250cm9sLnZhbHVlICYmIGNvbnRyb2wuY29uZmlnKSB7XG4gICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgbGV0IGZvcm1WYWxpZGl0eSA9IHRydWU7XG4gICAgICBmaWVsZExpc3QuZm9yRWFjaCgoc3ViZmllbGQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoIUhlbHBlcnMuaXNFbXB0eShjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0pKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgKFsnY291bnRyeUlEJywgJ3N0YXRlJ10uaW5kZXhPZihzdWJmaWVsZCkgPT09IC0xICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnW3N1YmZpZWxkXS5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSAmJlxuICAgICAgICAgICAgICBIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pKSB8fFxuICAgICAgICAgICAgc2hvd0NvdW50cnlSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpIHx8XG4gICAgICAgICAgICBzaG93U3RhdGVSZXF1aXJlZEZsYWcoc3ViZmllbGQsIGNvbnRyb2wpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgaW52YWxpZEFkZHJlc3NGaWVsZHMucHVzaChjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ubGFiZWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAoKHN1YmZpZWxkICE9PSAnY291bnRyeUlEJyAmJiBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ucmVxdWlyZWQgJiYgSGVscGVycy5pc0VtcHR5KGNvbnRyb2wudmFsdWVbc3ViZmllbGRdKSkgfHxcbiAgICAgICAgICAgICAgKHN1YmZpZWxkID09PSAnY291bnRyeUlEJyAmJlxuICAgICAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWcuY291bnRyeUlEKSAmJlxuICAgICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLmNvdW50cnlJRC5yZXF1aXJlZCAmJlxuICAgICAgICAgICAgICAgIEhlbHBlcnMuaXNFbXB0eShjb250cm9sLnZhbHVlLmNvdW50cnlOYW1lKSkpICYmXG4gICAgICAgICAgICAhKFxuICAgICAgICAgICAgICBzdWJmaWVsZCA9PT0gJ3N0YXRlJyAmJlxuICAgICAgICAgICAgICAhSGVscGVycy5pc0JsYW5rKGNvbnRyb2wudmFsdWUuY291bnRyeU5hbWUpICYmXG4gICAgICAgICAgICAgIGNvbnRyb2wuY29uZmlnLnN0YXRlLnBpY2tlckNvbmZpZyAmJlxuICAgICAgICAgICAgICBjb250cm9sLmNvbmZpZy5zdGF0ZS5waWNrZXJDb25maWcuZGVmYXVsdE9wdGlvbnMgJiZcbiAgICAgICAgICAgICAgY29udHJvbC5jb25maWcuc3RhdGUucGlja2VyQ29uZmlnLmRlZmF1bHRPcHRpb25zLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZm9ybVZhbGlkaXR5ID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC5jb25maWdbc3ViZmllbGRdLm1heGxlbmd0aCkgJiZcbiAgICAgICAgICAgICFIZWxwZXJzLmlzRW1wdHkoY29udHJvbC52YWx1ZVtzdWJmaWVsZF0pICYmXG4gICAgICAgICAgICBjb250cm9sLnZhbHVlW3N1YmZpZWxkXS5sZW5ndGggPiBjb250cm9sLmNvbmZpZ1tzdWJmaWVsZF0ubWF4bGVuZ3RoXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBtYXhsZW5ndGhFcnJvciA9IHRydWU7XG4gICAgICAgICAgICBtYXhsZW5ndGhGaWVsZHMucHVzaChzdWJmaWVsZCk7XG4gICAgICAgICAgICBmb3JtVmFsaWRpdHkgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCF2YWxpZCB8fCAhZm9ybVZhbGlkaXR5IHx8IG1heGxlbmd0aEVycm9yKSB7XG4gICAgICAgIHJldHVyblZhbCA9IHt9O1xuICAgICAgfVxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3MgPSB0cnVlO1xuICAgICAgICByZXR1cm5WYWwuaW52YWxpZEFkZHJlc3NGaWVsZHMgPSBpbnZhbGlkQWRkcmVzc0ZpZWxkcztcbiAgICAgIH1cbiAgICAgIGlmICghZm9ybVZhbGlkaXR5KSB7XG4gICAgICAgIHJldHVyblZhbC5pbnZhbGlkQWRkcmVzc0ZvckZvcm0gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKG1heGxlbmd0aEVycm9yKSB7XG4gICAgICAgIHJldHVyblZhbC5tYXhsZW5ndGggPSB0cnVlO1xuICAgICAgICByZXR1cm5WYWwubWF4bGVuZ3RoRmllbGRzID0gbWF4bGVuZ3RoRmllbGRzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVyblZhbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==