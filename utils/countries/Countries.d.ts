/**
 * AUTOGENERATED FILE - DO NOT EDIT
 * Generated by: https://bhsource.bullhorn.com/DEV_WORKSPACE/country-state-parser
 * Last generated on: Wed Aug 15 2018 14:45:32 GMT-0500 (CDT)
 */
export declare const COUNTRIES: {
    code: string;
    id: number;
    name: string;
    states: {
        code: string;
        name: string;
    }[];
}[];
/**
 * Gets all countries
 * @returns {string[]}
 */
export declare function getCountries(): string[];
/**
 * Gets a country by country ID
 * @param {number} id - ID of country to find
 * @returns {object|undefined}
 */
export declare function findByCountryId(id: any): {
    code: string;
    id: number;
    name: string;
    states: {
        code: string;
        name: string;
    }[];
};
/**
 * Gets a country by country name
 * @param {string} name - Name of country to find
 * @returns {object|undefined}
 */
export declare function findByCountryName(name: any): {
    code: string;
    id: number;
    name: string;
    states: {
        code: string;
        name: string;
    }[];
};
/**
 * Gets a country by country code
 * @param {string} code - Code of country to find
 * @returns {object|undefined}
 */
export declare function findByCountryCode(code: any): {
    code: string;
    id: number;
    name: string;
    states: {
        code: string;
        name: string;
    }[];
};
/**
 * Gets states by country name
 * @param {string} name - Name of the country to search by
 * @returns {string[]}
 */
export declare function getStateObjects(name: any): {
    code: string;
    name: string;
}[];
/**
 * Gets state names by country name
 * @param {string} name - Name of the country to search by
 * @returns {string[]}
 */
export declare function getStates(name: any): string[];
