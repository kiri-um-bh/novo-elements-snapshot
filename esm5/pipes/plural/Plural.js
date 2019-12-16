/**
 * @fileoverview added by tsickle
 * Generated from: pipes/plural/Plural.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, Pipe } from '@angular/core';
// Rule storage - pluralize and singularize need to be run sequentially,
// while other rules can be optimized using an object for instant lookups.
/** @type {?} */
var pluralRules = [];
/** @type {?} */
var singularRules = [];
/** @type {?} */
var uncountables = {};
/** @type {?} */
var irregularPlurals = {};
/** @type {?} */
var irregularSingles = {};
/**
 * Title case a string.
 * @param {?} str
 * @return {?}
 */
function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
}
/**
 * Sanitize a pluralization rule to a usable regular expression.
 * @param {?} rule
 * @return {?}
 */
function sanitizeRule(rule) {
    if (typeof rule === 'string') {
        return new RegExp('^' + rule + '$', 'i');
    }
    return rule;
}
/**
 * Pass in a word token to produce a function that can replicate the case on
 * another word.
 * @param {?} word
 * @param {?} token
 * @return {?}
 */
function restoreCase(word, token) {
    // Upper cased words. E.g. "HELLO".
    if (word === word.toUpperCase()) {
        return token.toUpperCase();
    }
    // Title cased words. E.g. "Title".
    if (word[0] === word[0].toUpperCase()) {
        return toTitleCase(token);
    }
    // Lower cased words. E.g. "test".
    return token.toLowerCase();
}
/**
 * Interpolate a regexp string.
 * @param {?} str
 * @param {?} args
 * @return {?}
 */
function interpolate(str, args) {
    return str.replace(/\$(\d{1,2})/g, (/**
     * @param {?} match
     * @param {?} index
     * @return {?}
     */
    function (match, index) {
        return args[index] || '';
    }));
}
/**
 * Sanitize a word by passing in the word and sanitization rules.
 * @param {?} token
 * @param {?} word
 * @param {?} collection
 * @return {?}
 */
function sanitizeWord(token, word, collection) {
    // Empty string or doesn't need fixing.
    if (!token.length || uncountables.hasOwnProperty(token)) {
        return word;
    }
    /** @type {?} */
    var len = collection.length;
    var _loop_1 = function () {
        /** @type {?} */
        var rule = collection[len];
        // If the rule passes, return the replacement.
        if (rule[0].test(word)) {
            return { value: word.replace(rule[0], (/**
                 * @param {?} match
                 * @param {?} index
                 * @param {?} words
                 * @return {?}
                 */
                function (match, index, words) {
                    /** @type {?} */
                    var result = interpolate(rule[1], [match, index, words]);
                    if (match === '') {
                        return restoreCase(words[index - 1], result);
                    }
                    return restoreCase(match, result);
                })) };
        }
    };
    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
        var state_1 = _loop_1();
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return word;
}
/**
 * Replace a word with the updated word.
 * @param {?} replaceMap
 * @param {?} keepMap
 * @param {?} rules
 * @return {?}
 */
function replaceWord(replaceMap, keepMap, rules) {
    return (/**
     * @param {?} word
     * @return {?}
     */
    function (word) {
        // Get the correct token and case restoration functions.
        /** @type {?} */
        var token = word.toLowerCase();
        // Check against the keep object map.
        if (keepMap.hasOwnProperty(token)) {
            return restoreCase(word, token);
        }
        // Check against the replacement map for a direct word replacement.
        if (replaceMap.hasOwnProperty(token)) {
            return restoreCase(word, replaceMap[token]);
        }
        // Run all the rules against the word.
        return sanitizeWord(token, word, rules);
    });
}
var Pluralize = /** @class */ (function () {
    function Pluralize() {
    }
    /**
     * @param {?} word
     * @param {?=} count
     * @param {?=} inclusive
     * @return {?}
     */
    Pluralize.pluralize = /**
     * @param {?} word
     * @param {?=} count
     * @param {?=} inclusive
     * @return {?}
     */
    function (word, count, inclusive) {
        if (count === void 0) { count = 1; }
        /** @type {?} */
        var pluralized = count === 1 ? Pluralize.singular(word) : Pluralize.plural(word);
        return (inclusive ? count + " " : '') + pluralized;
    };
    /**
     * @param {?} word
     * @return {?}
     */
    Pluralize.singular = /**
     * @param {?} word
     * @return {?}
     */
    function (word) {
        return replaceWord(irregularSingles, irregularPlurals, pluralRules)(word);
    };
    /**
     * @param {?} word
     * @return {?}
     */
    Pluralize.plural = /**
     * @param {?} word
     * @return {?}
     */
    function (word) {
        return replaceWord(irregularPlurals, irregularSingles, singularRules)(word);
    };
    /**
     * @param {?} rule
     * @param {?} replacement
     * @return {?}
     */
    Pluralize.addPluralRule = /**
     * @param {?} rule
     * @param {?} replacement
     * @return {?}
     */
    function (rule, replacement) {
        pluralRules.push([sanitizeRule(rule), replacement]);
    };
    /**
     * @param {?} rule
     * @param {?} replacement
     * @return {?}
     */
    Pluralize.addSingularRule = /**
     * @param {?} rule
     * @param {?} replacement
     * @return {?}
     */
    function (rule, replacement) {
        singularRules.push([sanitizeRule(rule), replacement]);
    };
    /**
     * @param {?} word
     * @return {?}
     */
    Pluralize.addUncountableRule = /**
     * @param {?} word
     * @return {?}
     */
    function (word) {
        if (typeof word === 'string') {
            uncountables[word.toLowerCase()] = true;
            return;
        }
        // Set singular and plural references for the word.
        Pluralize.addPluralRule(word, '$0');
        Pluralize.addSingularRule(word, '$0');
    };
    /**
     * @param {?} single
     * @param {?} plural
     * @return {?}
     */
    Pluralize.addIrregularRule = /**
     * @param {?} single
     * @param {?} plural
     * @return {?}
     */
    function (single, plural) {
        /** @type {?} */
        var one = plural.toLowerCase();
        /** @type {?} */
        var many = single.toLowerCase();
        irregularSingles[one] = many;
        irregularPlurals[many] = one;
    };
    return Pluralize;
}());
/**
 * Irregular rules.
 */
[
    // Pronouns.
    ['I', 'we'],
    ['me', 'us'],
    ['he', 'they'],
    ['she', 'they'],
    ['them', 'them'],
    ['myself', 'ourselves'],
    ['yourself', 'yourselves'],
    ['itself', 'themselves'],
    ['herself', 'themselves'],
    ['himself', 'themselves'],
    ['themself', 'themselves'],
    ['is', 'are'],
    ['this', 'these'],
    ['that', 'those'],
    // Words ending in with a consonant and `o`.
    ['echo', 'echoes'],
    ['dingo', 'dingoes'],
    ['volcano', 'volcanoes'],
    ['tornado', 'tornadoes'],
    ['torpedo', 'torpedoes'],
    // Ends with `us`.
    ['genus', 'genera'],
    ['viscus', 'viscera'],
    // Ends with `ma`.
    ['stigma', 'stigmata'],
    ['stoma', 'stomata'],
    ['dogma', 'dogmata'],
    ['lemma', 'lemmata'],
    ['schema', 'schemata'],
    ['anathema', 'anathemata'],
    // Other irregular rules.
    ['ox', 'oxen'],
    ['axe', 'axes'],
    ['die', 'dice'],
    ['yes', 'yeses'],
    ['foot', 'feet'],
    ['eave', 'eaves'],
    ['goose', 'geese'],
    ['tooth', 'teeth'],
    ['quiz', 'quizzes'],
    ['human', 'humans'],
    ['proof', 'proofs'],
    ['carve', 'carves'],
    ['valve', 'valves'],
    ['thief', 'thieves'],
    ['genie', 'genies'],
    ['groove', 'grooves'],
    ['pickaxe', 'pickaxes'],
    ['whiskey', 'whiskies'],
].forEach((/**
 * @param {?} rule
 * @return {?}
 */
function (rule) {
    return Pluralize.addIrregularRule(rule[0], rule[1]);
}));
/**
 * Pluralization rules.
 */
[
    [/s?$/i, 's'],
    [/([^aeiou]ese)$/i, '$1'],
    [/(ax|test)is$/i, '$1es'],
    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],
    [/(e[mn]u)s?$/i, '$1s'],
    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
    [/(seraph|cherub)(?:im)?$/i, '$1im'],
    [/(her|at|gr)o$/i, '$1oes'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],
    [/sis$/i, 'ses'],
    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
    [/([^aeiouy]|qu)y$/i, '$1ies'],
    [/([^ch][ieo][ln])ey$/i, '$1ies'],
    [/(x|ch|ss|sh|zz)$/i, '$1es'],
    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
    [/(m|l)(?:ice|ouse)$/i, '$1ice'],
    [/(pe)(?:rson|ople)$/i, '$1ople'],
    [/(child)(?:ren)?$/i, '$1ren'],
    [/eaux$/i, '$0'],
    [/m[ae]n$/i, 'men'],
    ['thou', 'you'],
].forEach((/**
 * @param {?} rule
 * @return {?}
 */
function (rule) {
    return Pluralize.addPluralRule(rule[0], rule[1]);
}));
/**
 * Singularization rules.
 */
[
    [/s$/i, ''],
    [/(ss)$/i, '$1'],
    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],
    [/(^analy)(?:sis|ses)$/i, '$1sis'],
    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
    [/([^aeiouy]|qu)ies$/i, '$1y'],
    [/(^[pl]|zomb|^(?:neck)?t|[aeo][lt]|cut)ies$/i, '$1ie'],
    [/(\b(?:mon|smil))ies$/i, '$1ey'],
    [/(m|l)ice$/i, '$1ouse'],
    [/(seraph|cherub)im$/i, '$1'],
    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],
    [/(e[mn]u)s?$/i, '$1'],
    [/(movie|twelve)s$/i, '$1'],
    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],
    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],
    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],
    [/(alumn|alg|vertebr)ae$/i, '$1a'],
    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
    [/(matr|append)ices$/i, '$1ix'],
    [/(pe)(rson|ople)$/i, '$1rson'],
    [/(child)ren$/i, '$1'],
    [/(eau)x?$/i, '$1'],
    [/men$/i, 'man'],
].forEach((/**
 * @param {?} rule
 * @return {?}
 */
function (rule) {
    return Pluralize.addSingularRule(rule[0], rule[1]);
}));
/**
 * Uncountable rules.
 */
[
    // Singular words with no plurals.
    'advice',
    'adulthood',
    'agenda',
    'aid',
    'alcohol',
    'ammo',
    'athletics',
    'bison',
    'blood',
    'bream',
    'buffalo',
    'butter',
    'carp',
    'cash',
    'chassis',
    'chess',
    'clothing',
    'commerce',
    'cod',
    'cooperation',
    'corps',
    'digestion',
    'debris',
    'diabetes',
    'energy',
    'equipment',
    'elk',
    'excretion',
    'expertise',
    'flounder',
    'fun',
    'gallows',
    'garbage',
    'graffiti',
    'headquarters',
    'health',
    'herpes',
    'highjinks',
    'homework',
    'housework',
    'information',
    'jeans',
    'justice',
    'kudos',
    'labour',
    'literature',
    'machinery',
    'mackerel',
    'media',
    'mews',
    'moose',
    'music',
    'news',
    'pike',
    'plankton',
    'pliers',
    'pollution',
    'premises',
    'rain',
    'research',
    'rice',
    'salmon',
    'scissors',
    'series',
    'sewage',
    'shambles',
    'shrimp',
    'species',
    'staff',
    'swine',
    'trout',
    'traffic',
    'transporation',
    'tuna',
    'wealth',
    'welfare',
    'whiting',
    'wildebeest',
    'wildlife',
    'you',
    // Regexes.
    /pox$/i,
    /ois$/i,
    /deer$/i,
    /fish$/i,
    /sheep$/i,
    /measles$/i,
    /[^aeiou]ese$/i,
].forEach(Pluralize.addUncountableRule);
var PluralPipe = /** @class */ (function () {
    function PluralPipe() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    PluralPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return Pluralize.pluralize(value);
    };
    PluralPipe.decorators = [
        { type: Pipe, args: [{ name: 'plural' },] },
        { type: Injectable }
    ];
    return PluralPipe;
}());
export { PluralPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1cmFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInBpcGVzL3BsdXJhbC9QbHVyYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7O0lBSTVELFdBQVcsR0FBRyxFQUFFOztJQUNoQixhQUFhLEdBQUcsRUFBRTs7SUFDbEIsWUFBWSxHQUFHLEVBQUU7O0lBQ2pCLGdCQUFnQixHQUFHLEVBQUU7O0lBQ3JCLGdCQUFnQixHQUFHLEVBQUU7Ozs7OztBQU16QixTQUFTLFdBQVcsQ0FBQyxHQUFXO0lBQzlCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25FLENBQUM7Ozs7OztBQUtELFNBQVMsWUFBWSxDQUFDLElBQXFCO0lBQ3pDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVCLE9BQU8sSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7O0FBTUQsU0FBUyxXQUFXLENBQUMsSUFBWSxFQUFFLEtBQWE7SUFDOUMsbUNBQW1DO0lBQ25DLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1QjtJQUVELG1DQUFtQztJQUNuQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDckMsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDM0I7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QUFFeEM7SUFBQTtJQU1BLENBQUM7Ozs7O0lBSEMsOEJBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7UUFDYixPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBTEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDdkIsVUFBVTs7SUFLWCxpQkFBQztDQUFBLEFBTkQsSUFNQztTQUpZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gUnVsZSBzdG9yYWdlIC0gcGx1cmFsaXplIGFuZCBzaW5ndWxhcml6ZSBuZWVkIHRvIGJlIHJ1biBzZXF1ZW50aWFsbHksXG4vLyB3aGlsZSBvdGhlciBydWxlcyBjYW4gYmUgb3B0aW1pemVkIHVzaW5nIGFuIG9iamVjdCBmb3IgaW5zdGFudCBsb29rdXBzLlxubGV0IHBsdXJhbFJ1bGVzID0gW107XG5sZXQgc2luZ3VsYXJSdWxlcyA9IFtdO1xubGV0IHVuY291bnRhYmxlcyA9IHt9O1xubGV0IGlycmVndWxhclBsdXJhbHMgPSB7fTtcbmxldCBpcnJlZ3VsYXJTaW5nbGVzID0ge307XG5cbi8qKlxuICogVGl0bGUgY2FzZSBhIHN0cmluZy5cbiAqIEBwYXJhbSBzdHJcbiAqL1xuZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIFNhbml0aXplIGEgcGx1cmFsaXphdGlvbiBydWxlIHRvIGEgdXNhYmxlIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVSdWxlKHJ1bGU6IFJlZ0V4cCB8IHN0cmluZyk6IFJlZ0V4cCB7XG4gIGlmICh0eXBlb2YgcnVsZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnXicgKyBydWxlICsgJyQnLCAnaScpO1xuICB9XG4gIHJldHVybiBydWxlO1xufVxuXG4vKipcbiAqIFBhc3MgaW4gYSB3b3JkIHRva2VuIHRvIHByb2R1Y2UgYSBmdW5jdGlvbiB0aGF0IGNhbiByZXBsaWNhdGUgdGhlIGNhc2Ugb25cbiAqIGFub3RoZXIgd29yZC5cbiAqL1xuZnVuY3Rpb24gcmVzdG9yZUNhc2Uod29yZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gVXBwZXIgY2FzZWQgd29yZHMuIEUuZy4gXCJIRUxMT1wiLlxuICBpZiAod29yZCA9PT0gd29yZC50b1VwcGVyQ2FzZSgpKSB7XG4gICAgcmV0dXJuIHRva2VuLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICAvLyBUaXRsZSBjYXNlZCB3b3Jkcy4gRS5nLiBcIlRpdGxlXCIuXG4gIGlmICh3b3JkWzBdID09PSB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpIHtcbiAgICByZXR1cm4gdG9UaXRsZUNhc2UodG9rZW4pO1xuICB9XG5cbiAgLy8gTG93ZXIgY2FzZWQgd29yZHMuIEUuZy4gXCJ0ZXN0XCIuXG4gIHJldHVybiB0b2tlbi50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIEludGVycG9sYXRlIGEgcmVnZXhwIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gaW50ZXJwb2xhdGUoc3RyOiBzdHJpbmcsIGFyZ3M6IGFueVtdKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCQoXFxkezEsMn0pL2csIChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gYXJnc1tpbmRleF0gfHwgJyc7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNhbml0aXplIGEgd29yZCBieSBwYXNzaW5nIGluIHRoZSB3b3JkIGFuZCBzYW5pdGl6YXRpb24gcnVsZXMuXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplV29yZCh0b2tlbjogc3RyaW5nLCB3b3JkOiBzdHJpbmcsIGNvbGxlY3Rpb246IFJlZ0V4cFtdKTogc3RyaW5nIHtcbiAgLy8gRW1wdHkgc3RyaW5nIG9yIGRvZXNuJ3QgbmVlZCBmaXhpbmcuXG4gIGlmICghdG9rZW4ubGVuZ3RoIHx8IHVuY291bnRhYmxlcy5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICByZXR1cm4gd29yZDtcbiAgfVxuXG4gIGxldCBsZW4gPSBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBzYW5pdGl6YXRpb24gcnVsZXMgYW5kIHVzZSB0aGUgZmlyc3Qgb25lIHRvIG1hdGNoLlxuICB3aGlsZSAobGVuLS0pIHtcbiAgICBsZXQgcnVsZSA9IGNvbGxlY3Rpb25bbGVuXTtcbiAgICAvLyBJZiB0aGUgcnVsZSBwYXNzZXMsIHJldHVybiB0aGUgcmVwbGFjZW1lbnQuXG4gICAgaWYgKHJ1bGVbMF0udGVzdCh3b3JkKSkge1xuICAgICAgcmV0dXJuIHdvcmQucmVwbGFjZShydWxlWzBdLCAobWF0Y2gsIGluZGV4LCB3b3JkcykgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gaW50ZXJwb2xhdGUocnVsZVsxXSwgW21hdGNoLCBpbmRleCwgd29yZHNdKTtcbiAgICAgICAgaWYgKG1hdGNoID09PSAnJykge1xuICAgICAgICAgIHJldHVybiByZXN0b3JlQ2FzZSh3b3Jkc1tpbmRleCAtIDFdLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN0b3JlQ2FzZShtYXRjaCwgcmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gd29yZDtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGEgd29yZCB3aXRoIHRoZSB1cGRhdGVkIHdvcmQuXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VXb3JkKHJlcGxhY2VNYXA6IGFueSwga2VlcE1hcDogYW55LCBydWxlczogYW55W10pOiBGdW5jdGlvbiB7XG4gIHJldHVybiAod29yZCkgPT4ge1xuICAgIC8vIEdldCB0aGUgY29ycmVjdCB0b2tlbiBhbmQgY2FzZSByZXN0b3JhdGlvbiBmdW5jdGlvbnMuXG4gICAgbGV0IHRva2VuID0gd29yZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gQ2hlY2sgYWdhaW5zdCB0aGUga2VlcCBvYmplY3QgbWFwLlxuICAgIGlmIChrZWVwTWFwLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHRva2VuKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSByZXBsYWNlbWVudCBtYXAgZm9yIGEgZGlyZWN0IHdvcmQgcmVwbGFjZW1lbnQuXG4gICAgaWYgKHJlcGxhY2VNYXAuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZCwgcmVwbGFjZU1hcFt0b2tlbl0pO1xuICAgIH1cblxuICAgIC8vIFJ1biBhbGwgdGhlIHJ1bGVzIGFnYWluc3QgdGhlIHdvcmQuXG4gICAgcmV0dXJuIHNhbml0aXplV29yZCh0b2tlbiwgd29yZCwgcnVsZXMpO1xuICB9O1xufVxuXG5jbGFzcyBQbHVyYWxpemUge1xuICBzdGF0aWMgcGx1cmFsaXplKHdvcmQsIGNvdW50ID0gMSwgaW5jbHVzaXZlPykge1xuICAgIGxldCBwbHVyYWxpemVkID0gY291bnQgPT09IDEgPyBQbHVyYWxpemUuc2luZ3VsYXIod29yZCkgOiBQbHVyYWxpemUucGx1cmFsKHdvcmQpO1xuICAgIHJldHVybiAoaW5jbHVzaXZlID8gYCR7Y291bnR9IGAgOiAnJykgKyBwbHVyYWxpemVkO1xuICB9XG5cbiAgc3RhdGljIHNpbmd1bGFyKHdvcmQpIHtcbiAgICByZXR1cm4gcmVwbGFjZVdvcmQoaXJyZWd1bGFyU2luZ2xlcywgaXJyZWd1bGFyUGx1cmFscywgcGx1cmFsUnVsZXMpKHdvcmQpO1xuICB9XG5cbiAgc3RhdGljIHBsdXJhbCh3b3JkKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VXb3JkKGlycmVndWxhclBsdXJhbHMsIGlycmVndWxhclNpbmdsZXMsIHNpbmd1bGFyUnVsZXMpKHdvcmQpO1xuICB9XG5cbiAgc3RhdGljIGFkZFBsdXJhbFJ1bGUocnVsZSwgcmVwbGFjZW1lbnQpIHtcbiAgICBwbHVyYWxSdWxlcy5wdXNoKFtzYW5pdGl6ZVJ1bGUocnVsZSksIHJlcGxhY2VtZW50XSk7XG4gIH1cblxuICBzdGF0aWMgYWRkU2luZ3VsYXJSdWxlKHJ1bGUsIHJlcGxhY2VtZW50KSB7XG4gICAgc2luZ3VsYXJSdWxlcy5wdXNoKFtzYW5pdGl6ZVJ1bGUocnVsZSksIHJlcGxhY2VtZW50XSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVW5jb3VudGFibGVSdWxlKHdvcmQpIHtcbiAgICBpZiAodHlwZW9mIHdvcmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1bmNvdW50YWJsZXNbd29yZC50b0xvd2VyQ2FzZSgpXSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IHNpbmd1bGFyIGFuZCBwbHVyYWwgcmVmZXJlbmNlcyBmb3IgdGhlIHdvcmQuXG4gICAgUGx1cmFsaXplLmFkZFBsdXJhbFJ1bGUod29yZCwgJyQwJyk7XG4gICAgUGx1cmFsaXplLmFkZFNpbmd1bGFyUnVsZSh3b3JkLCAnJDAnKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRJcnJlZ3VsYXJSdWxlKHNpbmdsZSwgcGx1cmFsKSB7XG4gICAgbGV0IG9uZSA9IHBsdXJhbC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBtYW55ID0gc2luZ2xlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpcnJlZ3VsYXJTaW5nbGVzW29uZV0gPSBtYW55O1xuICAgIGlycmVndWxhclBsdXJhbHNbbWFueV0gPSBvbmU7XG4gIH1cbn1cblxuLyoqXG4gKiBJcnJlZ3VsYXIgcnVsZXMuXG4gKi9cbltcbiAgLy8gUHJvbm91bnMuXG4gIFsnSScsICd3ZSddLFxuICBbJ21lJywgJ3VzJ10sXG4gIFsnaGUnLCAndGhleSddLFxuICBbJ3NoZScsICd0aGV5J10sXG4gIFsndGhlbScsICd0aGVtJ10sXG4gIFsnbXlzZWxmJywgJ291cnNlbHZlcyddLFxuICBbJ3lvdXJzZWxmJywgJ3lvdXJzZWx2ZXMnXSxcbiAgWydpdHNlbGYnLCAndGhlbXNlbHZlcyddLFxuICBbJ2hlcnNlbGYnLCAndGhlbXNlbHZlcyddLFxuICBbJ2hpbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICBbJ3RoZW1zZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgWydpcycsICdhcmUnXSxcbiAgWyd0aGlzJywgJ3RoZXNlJ10sXG4gIFsndGhhdCcsICd0aG9zZSddLFxuICAvLyBXb3JkcyBlbmRpbmcgaW4gd2l0aCBhIGNvbnNvbmFudCBhbmQgYG9gLlxuICBbJ2VjaG8nLCAnZWNob2VzJ10sXG4gIFsnZGluZ28nLCAnZGluZ29lcyddLFxuICBbJ3ZvbGNhbm8nLCAndm9sY2Fub2VzJ10sXG4gIFsndG9ybmFkbycsICd0b3JuYWRvZXMnXSxcbiAgWyd0b3JwZWRvJywgJ3RvcnBlZG9lcyddLFxuICAvLyBFbmRzIHdpdGggYHVzYC5cbiAgWydnZW51cycsICdnZW5lcmEnXSxcbiAgWyd2aXNjdXMnLCAndmlzY2VyYSddLFxuICAvLyBFbmRzIHdpdGggYG1hYC5cbiAgWydzdGlnbWEnLCAnc3RpZ21hdGEnXSxcbiAgWydzdG9tYScsICdzdG9tYXRhJ10sXG4gIFsnZG9nbWEnLCAnZG9nbWF0YSddLFxuICBbJ2xlbW1hJywgJ2xlbW1hdGEnXSxcbiAgWydzY2hlbWEnLCAnc2NoZW1hdGEnXSxcbiAgWydhbmF0aGVtYScsICdhbmF0aGVtYXRhJ10sXG4gIC8vIE90aGVyIGlycmVndWxhciBydWxlcy5cbiAgWydveCcsICdveGVuJ10sXG4gIFsnYXhlJywgJ2F4ZXMnXSxcbiAgWydkaWUnLCAnZGljZSddLFxuICBbJ3llcycsICd5ZXNlcyddLFxuICBbJ2Zvb3QnLCAnZmVldCddLFxuICBbJ2VhdmUnLCAnZWF2ZXMnXSxcbiAgWydnb29zZScsICdnZWVzZSddLFxuICBbJ3Rvb3RoJywgJ3RlZXRoJ10sXG4gIFsncXVpeicsICdxdWl6emVzJ10sXG4gIFsnaHVtYW4nLCAnaHVtYW5zJ10sXG4gIFsncHJvb2YnLCAncHJvb2ZzJ10sXG4gIFsnY2FydmUnLCAnY2FydmVzJ10sXG4gIFsndmFsdmUnLCAndmFsdmVzJ10sXG4gIFsndGhpZWYnLCAndGhpZXZlcyddLFxuICBbJ2dlbmllJywgJ2dlbmllcyddLFxuICBbJ2dyb292ZScsICdncm9vdmVzJ10sXG4gIFsncGlja2F4ZScsICdwaWNrYXhlcyddLFxuICBbJ3doaXNrZXknLCAnd2hpc2tpZXMnXSxcbl0uZm9yRWFjaCgocnVsZSkgPT4ge1xuICByZXR1cm4gUGx1cmFsaXplLmFkZElycmVndWxhclJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG59KTtcblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIHJ1bGVzLlxuICovXG5bXG4gIFsvcz8kL2ksICdzJ10sXG4gIFsvKFteYWVpb3VdZXNlKSQvaSwgJyQxJ10sXG4gIFsvKGF4fHRlc3QpaXMkL2ksICckMWVzJ10sXG4gIFsvKGFsaWFzfFteYW91XXVzfHRsYXN8Z2FzfHJpcykkL2ksICckMWVzJ10sXG4gIFsvKGVbbW5ddSlzPyQvaSwgJyQxcyddLFxuICBbLyhbXmxdaWFzfFthZWlvdV1sYXN8W2VtanpyXWFzfFtpdV1hbSkkL2ksICckMSddLFxuICBbLyhhbHVtbnxzeWxsYWJ8b2N0b3B8dmlyfHJhZGl8bnVjbGV8ZnVuZ3xjYWN0fHN0aW11bHx0ZXJtaW58YmFjaWxsfGZvY3x1dGVyfGxvY3xzdHJhdCkoPzp1c3xpKSQvaSwgJyQxaSddLFxuICBbLyhhbHVtbnxhbGd8dmVydGVicikoPzphfGFlKSQvaSwgJyQxYWUnXSxcbiAgWy8oc2VyYXBofGNoZXJ1YikoPzppbSk/JC9pLCAnJDFpbSddLFxuICBbLyhoZXJ8YXR8Z3IpbyQvaSwgJyQxb2VzJ10sXG4gIFsvKGFnZW5kfGFkZGVuZHxtaWxsZW5uaXxkYXR8ZXh0cmVtfGJhY3Rlcml8ZGVzaWRlcmF0fHN0cmF0fGNhbmRlbGFicnxlcnJhdHxvdnxzeW1wb3NpfGN1cnJpY3VsfGF1dG9tYXR8cXVvcikoPzphfHVtKSQvaSwgJyQxYSddLFxuICBbLyhhcGhlbGl8aHlwZXJiYXR8cGVyaWhlbGl8YXN5bmRldHxub3VtZW58cGhlbm9tZW58Y3JpdGVyaXxvcmdhbnxwcm9sZWdvbWVufGhlZHJ8YXV0b21hdCkoPzphfG9uKSQvaSwgJyQxYSddLFxuICBbL3NpcyQvaSwgJ3NlcyddLFxuICBbLyg/Oihrbml8d2l8bGkpZmV8KGFyfGx8ZWF8ZW98b2F8aG9vKWYpJC9pLCAnJDEkMnZlcyddLFxuICBbLyhbXmFlaW91eV18cXUpeSQvaSwgJyQxaWVzJ10sXG4gIFsvKFteY2hdW2llb11bbG5dKWV5JC9pLCAnJDFpZXMnXSxcbiAgWy8oeHxjaHxzc3xzaHx6eikkL2ksICckMWVzJ10sXG4gIFsvKG1hdHJ8Y29kfG11cnxzaWx8dmVydHxpbmR8YXBwZW5kKSg/Oml4fGV4KSQvaSwgJyQxaWNlcyddLFxuICBbLyhtfGwpKD86aWNlfG91c2UpJC9pLCAnJDFpY2UnXSxcbiAgWy8ocGUpKD86cnNvbnxvcGxlKSQvaSwgJyQxb3BsZSddLFxuICBbLyhjaGlsZCkoPzpyZW4pPyQvaSwgJyQxcmVuJ10sXG4gIFsvZWF1eCQvaSwgJyQwJ10sXG4gIFsvbVthZV1uJC9pLCAnbWVuJ10sXG4gIFsndGhvdScsICd5b3UnXSxcbl0uZm9yRWFjaCgocnVsZSkgPT4ge1xuICByZXR1cm4gUGx1cmFsaXplLmFkZFBsdXJhbFJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG59KTtcblxuLyoqXG4gKiBTaW5ndWxhcml6YXRpb24gcnVsZXMuXG4gKi9cbltcbiAgWy9zJC9pLCAnJ10sXG4gIFsvKHNzKSQvaSwgJyQxJ10sXG4gIFsvKChhKW5hbHl8KGIpYXwoZClpYWdub3wocClhcmVudGhlfChwKXJvZ25vfChzKXlub3B8KHQpaGUpKD86c2lzfHNlcykkL2ksICckMXNpcyddLFxuICBbLyheYW5hbHkpKD86c2lzfHNlcykkL2ksICckMXNpcyddLFxuICBbLyh3aXxrbml8KD86YWZ0ZXJ8aGFsZnxoaWdofGxvd3xtaWR8bm9ufG5pZ2h0fFteXFx3XXxeKWxpKXZlcyQvaSwgJyQxZmUnXSxcbiAgWy8oYXJ8KD86d298W2FlXSlsfFtlb11bYW9dKXZlcyQvaSwgJyQxZiddLFxuICBbLyhbXmFlaW91eV18cXUpaWVzJC9pLCAnJDF5J10sXG4gIFsvKF5bcGxdfHpvbWJ8Xig/Om5lY2spP3R8W2Flb11bbHRdfGN1dClpZXMkL2ksICckMWllJ10sXG4gIFsvKFxcYig/Om1vbnxzbWlsKSlpZXMkL2ksICckMWV5J10sXG4gIFsvKG18bClpY2UkL2ksICckMW91c2UnXSxcbiAgWy8oc2VyYXBofGNoZXJ1YilpbSQvaSwgJyQxJ10sXG4gIFsvKHh8Y2h8c3N8c2h8enp8dHRvfGdvfGNob3xhbGlhc3xbXmFvdV11c3x0bGFzfGdhc3woPzpoZXJ8YXR8Z3Ipb3xyaXMpKD86ZXMpPyQvaSwgJyQxJ10sXG4gIFsvKGVbbW5ddSlzPyQvaSwgJyQxJ10sXG4gIFsvKG1vdmllfHR3ZWx2ZSlzJC9pLCAnJDEnXSxcbiAgWy8oY3Jpc3x0ZXN0fGRpYWdub3MpKD86aXN8ZXMpJC9pLCAnJDFpcyddLFxuICBbLyhhbHVtbnxzeWxsYWJ8b2N0b3B8dmlyfHJhZGl8bnVjbGV8ZnVuZ3xjYWN0fHN0aW11bHx0ZXJtaW58YmFjaWxsfGZvY3x1dGVyfGxvY3xzdHJhdCkoPzp1c3xpKSQvaSwgJyQxdXMnXSxcbiAgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8cXVvcilhJC9pLCAnJDF1bSddLFxuICBbLyhhcGhlbGl8aHlwZXJiYXR8cGVyaWhlbGl8YXN5bmRldHxub3VtZW58cGhlbm9tZW58Y3JpdGVyaXxvcmdhbnxwcm9sZWdvbWVufGhlZHJ8YXV0b21hdClhJC9pLCAnJDFvbiddLFxuICBbLyhhbHVtbnxhbGd8dmVydGVicilhZSQvaSwgJyQxYSddLFxuICBbLyhjb2R8bXVyfHNpbHx2ZXJ0fGluZClpY2VzJC9pLCAnJDFleCddLFxuICBbLyhtYXRyfGFwcGVuZClpY2VzJC9pLCAnJDFpeCddLFxuICBbLyhwZSkocnNvbnxvcGxlKSQvaSwgJyQxcnNvbiddLFxuICBbLyhjaGlsZClyZW4kL2ksICckMSddLFxuICBbLyhlYXUpeD8kL2ksICckMSddLFxuICBbL21lbiQvaSwgJ21hbiddLFxuXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gIHJldHVybiBQbHVyYWxpemUuYWRkU2luZ3VsYXJSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xufSk7XG5cbi8qKlxuICogVW5jb3VudGFibGUgcnVsZXMuXG4gKi9cbltcbiAgLy8gU2luZ3VsYXIgd29yZHMgd2l0aCBubyBwbHVyYWxzLlxuICAnYWR2aWNlJyxcbiAgJ2FkdWx0aG9vZCcsXG4gICdhZ2VuZGEnLFxuICAnYWlkJyxcbiAgJ2FsY29ob2wnLFxuICAnYW1tbycsXG4gICdhdGhsZXRpY3MnLFxuICAnYmlzb24nLFxuICAnYmxvb2QnLFxuICAnYnJlYW0nLFxuICAnYnVmZmFsbycsXG4gICdidXR0ZXInLFxuICAnY2FycCcsXG4gICdjYXNoJyxcbiAgJ2NoYXNzaXMnLFxuICAnY2hlc3MnLFxuICAnY2xvdGhpbmcnLFxuICAnY29tbWVyY2UnLFxuICAnY29kJyxcbiAgJ2Nvb3BlcmF0aW9uJyxcbiAgJ2NvcnBzJyxcbiAgJ2RpZ2VzdGlvbicsXG4gICdkZWJyaXMnLFxuICAnZGlhYmV0ZXMnLFxuICAnZW5lcmd5JyxcbiAgJ2VxdWlwbWVudCcsXG4gICdlbGsnLFxuICAnZXhjcmV0aW9uJyxcbiAgJ2V4cGVydGlzZScsXG4gICdmbG91bmRlcicsXG4gICdmdW4nLFxuICAnZ2FsbG93cycsXG4gICdnYXJiYWdlJyxcbiAgJ2dyYWZmaXRpJyxcbiAgJ2hlYWRxdWFydGVycycsXG4gICdoZWFsdGgnLFxuICAnaGVycGVzJyxcbiAgJ2hpZ2hqaW5rcycsXG4gICdob21ld29yaycsXG4gICdob3VzZXdvcmsnLFxuICAnaW5mb3JtYXRpb24nLFxuICAnamVhbnMnLFxuICAnanVzdGljZScsXG4gICdrdWRvcycsXG4gICdsYWJvdXInLFxuICAnbGl0ZXJhdHVyZScsXG4gICdtYWNoaW5lcnknLFxuICAnbWFja2VyZWwnLFxuICAnbWVkaWEnLFxuICAnbWV3cycsXG4gICdtb29zZScsXG4gICdtdXNpYycsXG4gICduZXdzJyxcbiAgJ3Bpa2UnLFxuICAncGxhbmt0b24nLFxuICAncGxpZXJzJyxcbiAgJ3BvbGx1dGlvbicsXG4gICdwcmVtaXNlcycsXG4gICdyYWluJyxcbiAgJ3Jlc2VhcmNoJyxcbiAgJ3JpY2UnLFxuICAnc2FsbW9uJyxcbiAgJ3NjaXNzb3JzJyxcbiAgJ3NlcmllcycsXG4gICdzZXdhZ2UnLFxuICAnc2hhbWJsZXMnLFxuICAnc2hyaW1wJyxcbiAgJ3NwZWNpZXMnLFxuICAnc3RhZmYnLFxuICAnc3dpbmUnLFxuICAndHJvdXQnLFxuICAndHJhZmZpYycsXG4gICd0cmFuc3BvcmF0aW9uJyxcbiAgJ3R1bmEnLFxuICAnd2VhbHRoJyxcbiAgJ3dlbGZhcmUnLFxuICAnd2hpdGluZycsXG4gICd3aWxkZWJlZXN0JyxcbiAgJ3dpbGRsaWZlJyxcbiAgJ3lvdScsXG4gIC8vIFJlZ2V4ZXMuXG4gIC9wb3gkL2ksIC8vIFwiY2hpY2twb3hcIiwgXCJzbWFsbHBveFwiXG4gIC9vaXMkL2ksXG4gIC9kZWVyJC9pLCAvLyBcImRlZXJcIiwgXCJyZWluZGVlclwiXG4gIC9maXNoJC9pLCAvLyBcImZpc2hcIiwgXCJibG93ZmlzaFwiLCBcImFuZ2VsZmlzaFwiXG4gIC9zaGVlcCQvaSxcbiAgL21lYXNsZXMkL2ksXG4gIC9bXmFlaW91XWVzZSQvaSwgLy8gXCJjaGluZXNlXCIsIFwiamFwYW5lc2VcIlxuXS5mb3JFYWNoKFBsdXJhbGl6ZS5hZGRVbmNvdW50YWJsZVJ1bGUpO1xuXG5AUGlwZSh7IG5hbWU6ICdwbHVyYWwnIH0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGx1cmFsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICByZXR1cm4gUGx1cmFsaXplLnBsdXJhbGl6ZSh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==