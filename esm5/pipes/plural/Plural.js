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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1cmFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInBpcGVzL3BsdXJhbC9QbHVyYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOzs7O0lBSTFELFdBQVcsR0FBRyxFQUFFOztJQUNoQixhQUFhLEdBQUcsRUFBRTs7SUFDbEIsWUFBWSxHQUFHLEVBQUU7O0lBQ2pCLGdCQUFnQixHQUFHLEVBQUU7O0lBQ3JCLGdCQUFnQixHQUFHLEVBQUU7Ozs7OztBQU0zQixTQUFTLFdBQVcsQ0FBQyxHQUFXO0lBQzlCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25FLENBQUM7Ozs7OztBQUtELFNBQVMsWUFBWSxDQUFDLElBQXFCO0lBQ3pDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQzVCLE9BQU8sSUFBSSxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7Ozs7O0FBTUQsU0FBUyxXQUFXLENBQUMsSUFBWSxFQUFFLEtBQWE7SUFDOUMsbUNBQW1DO0lBQ25DLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUM1QjtJQUVELG1DQUFtQztJQUNuQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDckMsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDM0I7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QUFFeEM7SUFBQTtJQU1BLENBQUM7Ozs7O0lBSEMsOEJBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7UUFDYixPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBTEYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtnQkFDdkIsVUFBVTs7SUFLWCxpQkFBQztDQUFBLEFBTkQsSUFNQztTQUpZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBORzJcbmltcG9ydCB7IEluamVjdGFibGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gUnVsZSBzdG9yYWdlIC0gcGx1cmFsaXplIGFuZCBzaW5ndWxhcml6ZSBuZWVkIHRvIGJlIHJ1biBzZXF1ZW50aWFsbHksXG4vLyB3aGlsZSBvdGhlciBydWxlcyBjYW4gYmUgb3B0aW1pemVkIHVzaW5nIGFuIG9iamVjdCBmb3IgaW5zdGFudCBsb29rdXBzLlxuY29uc3QgcGx1cmFsUnVsZXMgPSBbXTtcbmNvbnN0IHNpbmd1bGFyUnVsZXMgPSBbXTtcbmNvbnN0IHVuY291bnRhYmxlcyA9IHt9O1xuY29uc3QgaXJyZWd1bGFyUGx1cmFscyA9IHt9O1xuY29uc3QgaXJyZWd1bGFyU2luZ2xlcyA9IHt9O1xuXG4vKipcbiAqIFRpdGxlIGNhc2UgYSBzdHJpbmcuXG4gKiBAcGFyYW0gc3RyXG4gKi9cbmZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZSBhIHBsdXJhbGl6YXRpb24gcnVsZSB0byBhIHVzYWJsZSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKi9cbmZ1bmN0aW9uIHNhbml0aXplUnVsZShydWxlOiBSZWdFeHAgfCBzdHJpbmcpOiBSZWdFeHAge1xuICBpZiAodHlwZW9mIHJ1bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJ14nICsgcnVsZSArICckJywgJ2knKTtcbiAgfVxuICByZXR1cm4gcnVsZTtcbn1cblxuLyoqXG4gKiBQYXNzIGluIGEgd29yZCB0b2tlbiB0byBwcm9kdWNlIGEgZnVuY3Rpb24gdGhhdCBjYW4gcmVwbGljYXRlIHRoZSBjYXNlIG9uXG4gKiBhbm90aGVyIHdvcmQuXG4gKi9cbmZ1bmN0aW9uIHJlc3RvcmVDYXNlKHdvcmQ6IHN0cmluZywgdG9rZW46IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIFVwcGVyIGNhc2VkIHdvcmRzLiBFLmcuIFwiSEVMTE9cIi5cbiAgaWYgKHdvcmQgPT09IHdvcmQudG9VcHBlckNhc2UoKSkge1xuICAgIHJldHVybiB0b2tlbi50b1VwcGVyQ2FzZSgpO1xuICB9XG5cbiAgLy8gVGl0bGUgY2FzZWQgd29yZHMuIEUuZy4gXCJUaXRsZVwiLlxuICBpZiAod29yZFswXSA9PT0gd29yZFswXS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgcmV0dXJuIHRvVGl0bGVDYXNlKHRva2VuKTtcbiAgfVxuXG4gIC8vIExvd2VyIGNhc2VkIHdvcmRzLiBFLmcuIFwidGVzdFwiLlxuICByZXR1cm4gdG9rZW4udG9Mb3dlckNhc2UoKTtcbn1cblxuLyoqXG4gKiBJbnRlcnBvbGF0ZSBhIHJlZ2V4cCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGludGVycG9sYXRlKHN0cjogc3RyaW5nLCBhcmdzOiBhbnlbXSk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXFwkKFxcZHsxLDJ9KS9nLCAobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGFyZ3NbaW5kZXhdIHx8ICcnO1xuICB9KTtcbn1cblxuLyoqXG4gKiBTYW5pdGl6ZSBhIHdvcmQgYnkgcGFzc2luZyBpbiB0aGUgd29yZCBhbmQgc2FuaXRpemF0aW9uIHJ1bGVzLlxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZVdvcmQodG9rZW46IHN0cmluZywgd29yZDogc3RyaW5nLCBjb2xsZWN0aW9uOiBSZWdFeHBbXSk6IHN0cmluZyB7XG4gIC8vIEVtcHR5IHN0cmluZyBvciBkb2Vzbid0IG5lZWQgZml4aW5nLlxuICBpZiAoIXRva2VuLmxlbmd0aCB8fCB1bmNvdW50YWJsZXMuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgcmV0dXJuIHdvcmQ7XG4gIH1cblxuICBsZXQgbGVuID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gIC8vIEl0ZXJhdGUgb3ZlciB0aGUgc2FuaXRpemF0aW9uIHJ1bGVzIGFuZCB1c2UgdGhlIGZpcnN0IG9uZSB0byBtYXRjaC5cbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgY29uc3QgcnVsZSA9IGNvbGxlY3Rpb25bbGVuXTtcbiAgICAvLyBJZiB0aGUgcnVsZSBwYXNzZXMsIHJldHVybiB0aGUgcmVwbGFjZW1lbnQuXG4gICAgaWYgKHJ1bGVbMF0udGVzdCh3b3JkKSkge1xuICAgICAgcmV0dXJuIHdvcmQucmVwbGFjZShydWxlWzBdLCAobWF0Y2gsIGluZGV4LCB3b3JkcykgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBpbnRlcnBvbGF0ZShydWxlWzFdLCBbbWF0Y2gsIGluZGV4LCB3b3Jkc10pO1xuICAgICAgICBpZiAobWF0Y2ggPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmRzW2luZGV4IC0gMV0sIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKG1hdGNoLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3b3JkO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgYSB3b3JkIHdpdGggdGhlIHVwZGF0ZWQgd29yZC5cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZVdvcmQocmVwbGFjZU1hcDogYW55LCBrZWVwTWFwOiBhbnksIHJ1bGVzOiBhbnlbXSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuICh3b3JkKSA9PiB7XG4gICAgLy8gR2V0IHRoZSBjb3JyZWN0IHRva2VuIGFuZCBjYXNlIHJlc3RvcmF0aW9uIGZ1bmN0aW9ucy5cbiAgICBjb25zdCB0b2tlbiA9IHdvcmQudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIGtlZXAgb2JqZWN0IG1hcC5cbiAgICBpZiAoa2VlcE1hcC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICAgIHJldHVybiByZXN0b3JlQ2FzZSh3b3JkLCB0b2tlbik7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYWdhaW5zdCB0aGUgcmVwbGFjZW1lbnQgbWFwIGZvciBhIGRpcmVjdCB3b3JkIHJlcGxhY2VtZW50LlxuICAgIGlmIChyZXBsYWNlTWFwLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmQsIHJlcGxhY2VNYXBbdG9rZW5dKTtcbiAgICB9XG5cbiAgICAvLyBSdW4gYWxsIHRoZSBydWxlcyBhZ2FpbnN0IHRoZSB3b3JkLlxuICAgIHJldHVybiBzYW5pdGl6ZVdvcmQodG9rZW4sIHdvcmQsIHJ1bGVzKTtcbiAgfTtcbn1cblxuY2xhc3MgUGx1cmFsaXplIHtcbiAgc3RhdGljIHBsdXJhbGl6ZSh3b3JkLCBjb3VudCA9IDEsIGluY2x1c2l2ZT8pIHtcbiAgICBjb25zdCBwbHVyYWxpemVkID0gY291bnQgPT09IDEgPyBQbHVyYWxpemUuc2luZ3VsYXIod29yZCkgOiBQbHVyYWxpemUucGx1cmFsKHdvcmQpO1xuICAgIHJldHVybiAoaW5jbHVzaXZlID8gYCR7Y291bnR9IGAgOiAnJykgKyBwbHVyYWxpemVkO1xuICB9XG5cbiAgc3RhdGljIHNpbmd1bGFyKHdvcmQpIHtcbiAgICByZXR1cm4gcmVwbGFjZVdvcmQoaXJyZWd1bGFyU2luZ2xlcywgaXJyZWd1bGFyUGx1cmFscywgcGx1cmFsUnVsZXMpKHdvcmQpO1xuICB9XG5cbiAgc3RhdGljIHBsdXJhbCh3b3JkKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VXb3JkKGlycmVndWxhclBsdXJhbHMsIGlycmVndWxhclNpbmdsZXMsIHNpbmd1bGFyUnVsZXMpKHdvcmQpO1xuICB9XG5cbiAgc3RhdGljIGFkZFBsdXJhbFJ1bGUocnVsZSwgcmVwbGFjZW1lbnQpIHtcbiAgICBwbHVyYWxSdWxlcy5wdXNoKFtzYW5pdGl6ZVJ1bGUocnVsZSksIHJlcGxhY2VtZW50XSk7XG4gIH1cblxuICBzdGF0aWMgYWRkU2luZ3VsYXJSdWxlKHJ1bGUsIHJlcGxhY2VtZW50KSB7XG4gICAgc2luZ3VsYXJSdWxlcy5wdXNoKFtzYW5pdGl6ZVJ1bGUocnVsZSksIHJlcGxhY2VtZW50XSk7XG4gIH1cblxuICBzdGF0aWMgYWRkVW5jb3VudGFibGVSdWxlKHdvcmQpIHtcbiAgICBpZiAodHlwZW9mIHdvcmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1bmNvdW50YWJsZXNbd29yZC50b0xvd2VyQ2FzZSgpXSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2V0IHNpbmd1bGFyIGFuZCBwbHVyYWwgcmVmZXJlbmNlcyBmb3IgdGhlIHdvcmQuXG4gICAgUGx1cmFsaXplLmFkZFBsdXJhbFJ1bGUod29yZCwgJyQwJyk7XG4gICAgUGx1cmFsaXplLmFkZFNpbmd1bGFyUnVsZSh3b3JkLCAnJDAnKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRJcnJlZ3VsYXJSdWxlKHNpbmdsZSwgcGx1cmFsKSB7XG4gICAgY29uc3Qgb25lID0gcGx1cmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgbWFueSA9IHNpbmdsZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaXJyZWd1bGFyU2luZ2xlc1tvbmVdID0gbWFueTtcbiAgICBpcnJlZ3VsYXJQbHVyYWxzW21hbnldID0gb25lO1xuICB9XG59XG5cbi8qKlxuICogSXJyZWd1bGFyIHJ1bGVzLlxuICovXG5bXG4gIC8vIFByb25vdW5zLlxuICBbJ0knLCAnd2UnXSxcbiAgWydtZScsICd1cyddLFxuICBbJ2hlJywgJ3RoZXknXSxcbiAgWydzaGUnLCAndGhleSddLFxuICBbJ3RoZW0nLCAndGhlbSddLFxuICBbJ215c2VsZicsICdvdXJzZWx2ZXMnXSxcbiAgWyd5b3Vyc2VsZicsICd5b3Vyc2VsdmVzJ10sXG4gIFsnaXRzZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgWydoZXJzZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgWydoaW1zZWxmJywgJ3RoZW1zZWx2ZXMnXSxcbiAgWyd0aGVtc2VsZicsICd0aGVtc2VsdmVzJ10sXG4gIFsnaXMnLCAnYXJlJ10sXG4gIFsndGhpcycsICd0aGVzZSddLFxuICBbJ3RoYXQnLCAndGhvc2UnXSxcbiAgLy8gV29yZHMgZW5kaW5nIGluIHdpdGggYSBjb25zb25hbnQgYW5kIGBvYC5cbiAgWydlY2hvJywgJ2VjaG9lcyddLFxuICBbJ2RpbmdvJywgJ2RpbmdvZXMnXSxcbiAgWyd2b2xjYW5vJywgJ3ZvbGNhbm9lcyddLFxuICBbJ3Rvcm5hZG8nLCAndG9ybmFkb2VzJ10sXG4gIFsndG9ycGVkbycsICd0b3JwZWRvZXMnXSxcbiAgLy8gRW5kcyB3aXRoIGB1c2AuXG4gIFsnZ2VudXMnLCAnZ2VuZXJhJ10sXG4gIFsndmlzY3VzJywgJ3Zpc2NlcmEnXSxcbiAgLy8gRW5kcyB3aXRoIGBtYWAuXG4gIFsnc3RpZ21hJywgJ3N0aWdtYXRhJ10sXG4gIFsnc3RvbWEnLCAnc3RvbWF0YSddLFxuICBbJ2RvZ21hJywgJ2RvZ21hdGEnXSxcbiAgWydsZW1tYScsICdsZW1tYXRhJ10sXG4gIFsnc2NoZW1hJywgJ3NjaGVtYXRhJ10sXG4gIFsnYW5hdGhlbWEnLCAnYW5hdGhlbWF0YSddLFxuICAvLyBPdGhlciBpcnJlZ3VsYXIgcnVsZXMuXG4gIFsnb3gnLCAnb3hlbiddLFxuICBbJ2F4ZScsICdheGVzJ10sXG4gIFsnZGllJywgJ2RpY2UnXSxcbiAgWyd5ZXMnLCAneWVzZXMnXSxcbiAgWydmb290JywgJ2ZlZXQnXSxcbiAgWydlYXZlJywgJ2VhdmVzJ10sXG4gIFsnZ29vc2UnLCAnZ2Vlc2UnXSxcbiAgWyd0b290aCcsICd0ZWV0aCddLFxuICBbJ3F1aXonLCAncXVpenplcyddLFxuICBbJ2h1bWFuJywgJ2h1bWFucyddLFxuICBbJ3Byb29mJywgJ3Byb29mcyddLFxuICBbJ2NhcnZlJywgJ2NhcnZlcyddLFxuICBbJ3ZhbHZlJywgJ3ZhbHZlcyddLFxuICBbJ3RoaWVmJywgJ3RoaWV2ZXMnXSxcbiAgWydnZW5pZScsICdnZW5pZXMnXSxcbiAgWydncm9vdmUnLCAnZ3Jvb3ZlcyddLFxuICBbJ3BpY2theGUnLCAncGlja2F4ZXMnXSxcbiAgWyd3aGlza2V5JywgJ3doaXNraWVzJ10sXG5dLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgcmV0dXJuIFBsdXJhbGl6ZS5hZGRJcnJlZ3VsYXJSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xufSk7XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBydWxlcy5cbiAqL1xuW1xuICBbL3M/JC9pLCAncyddLFxuICBbLyhbXmFlaW91XWVzZSkkL2ksICckMSddLFxuICBbLyhheHx0ZXN0KWlzJC9pLCAnJDFlcyddLFxuICBbLyhhbGlhc3xbXmFvdV11c3x0bGFzfGdhc3xyaXMpJC9pLCAnJDFlcyddLFxuICBbLyhlW21uXXUpcz8kL2ksICckMXMnXSxcbiAgWy8oW15sXWlhc3xbYWVpb3VdbGFzfFtlbWp6cl1hc3xbaXVdYW0pJC9pLCAnJDEnXSxcbiAgWy8oYWx1bW58c3lsbGFifG9jdG9wfHZpcnxyYWRpfG51Y2xlfGZ1bmd8Y2FjdHxzdGltdWx8dGVybWlufGJhY2lsbHxmb2N8dXRlcnxsb2N8c3RyYXQpKD86dXN8aSkkL2ksICckMWknXSxcbiAgWy8oYWx1bW58YWxnfHZlcnRlYnIpKD86YXxhZSkkL2ksICckMWFlJ10sXG4gIFsvKHNlcmFwaHxjaGVydWIpKD86aW0pPyQvaSwgJyQxaW0nXSxcbiAgWy8oaGVyfGF0fGdyKW8kL2ksICckMW9lcyddLFxuICBbLyhhZ2VuZHxhZGRlbmR8bWlsbGVubml8ZGF0fGV4dHJlbXxiYWN0ZXJpfGRlc2lkZXJhdHxzdHJhdHxjYW5kZWxhYnJ8ZXJyYXR8b3Z8c3ltcG9zaXxjdXJyaWN1bHxhdXRvbWF0fHF1b3IpKD86YXx1bSkkL2ksICckMWEnXSxcbiAgWy8oYXBoZWxpfGh5cGVyYmF0fHBlcmloZWxpfGFzeW5kZXR8bm91bWVufHBoZW5vbWVufGNyaXRlcml8b3JnYW58cHJvbGVnb21lbnxoZWRyfGF1dG9tYXQpKD86YXxvbikkL2ksICckMWEnXSxcbiAgWy9zaXMkL2ksICdzZXMnXSxcbiAgWy8oPzooa25pfHdpfGxpKWZlfChhcnxsfGVhfGVvfG9hfGhvbylmKSQvaSwgJyQxJDJ2ZXMnXSxcbiAgWy8oW15hZWlvdXldfHF1KXkkL2ksICckMWllcyddLFxuICBbLyhbXmNoXVtpZW9dW2xuXSlleSQvaSwgJyQxaWVzJ10sXG4gIFsvKHh8Y2h8c3N8c2h8enopJC9pLCAnJDFlcyddLFxuICBbLyhtYXRyfGNvZHxtdXJ8c2lsfHZlcnR8aW5kfGFwcGVuZCkoPzppeHxleCkkL2ksICckMWljZXMnXSxcbiAgWy8obXxsKSg/OmljZXxvdXNlKSQvaSwgJyQxaWNlJ10sXG4gIFsvKHBlKSg/OnJzb258b3BsZSkkL2ksICckMW9wbGUnXSxcbiAgWy8oY2hpbGQpKD86cmVuKT8kL2ksICckMXJlbiddLFxuICBbL2VhdXgkL2ksICckMCddLFxuICBbL21bYWVdbiQvaSwgJ21lbiddLFxuICBbJ3Rob3UnLCAneW91J10sXG5dLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgcmV0dXJuIFBsdXJhbGl6ZS5hZGRQbHVyYWxSdWxlKHJ1bGVbMF0sIHJ1bGVbMV0pO1xufSk7XG5cbi8qKlxuICogU2luZ3VsYXJpemF0aW9uIHJ1bGVzLlxuICovXG5bXG4gIFsvcyQvaSwgJyddLFxuICBbLyhzcykkL2ksICckMSddLFxuICBbLygoYSluYWx5fChiKWF8KGQpaWFnbm98KHApYXJlbnRoZXwocClyb2dub3wocyl5bm9wfCh0KWhlKSg/OnNpc3xzZXMpJC9pLCAnJDFzaXMnXSxcbiAgWy8oXmFuYWx5KSg/OnNpc3xzZXMpJC9pLCAnJDFzaXMnXSxcbiAgWy8od2l8a25pfCg/OmFmdGVyfGhhbGZ8aGlnaHxsb3d8bWlkfG5vbnxuaWdodHxbXlxcd118XilsaSl2ZXMkL2ksICckMWZlJ10sXG4gIFsvKGFyfCg/OndvfFthZV0pbHxbZW9dW2FvXSl2ZXMkL2ksICckMWYnXSxcbiAgWy8oW15hZWlvdXldfHF1KWllcyQvaSwgJyQxeSddLFxuICBbLyheW3BsXXx6b21ifF4oPzpuZWNrKT90fFthZW9dW2x0XXxjdXQpaWVzJC9pLCAnJDFpZSddLFxuICBbLyhcXGIoPzptb258c21pbCkpaWVzJC9pLCAnJDFleSddLFxuICBbLyhtfGwpaWNlJC9pLCAnJDFvdXNlJ10sXG4gIFsvKHNlcmFwaHxjaGVydWIpaW0kL2ksICckMSddLFxuICBbLyh4fGNofHNzfHNofHp6fHR0b3xnb3xjaG98YWxpYXN8W15hb3VddXN8dGxhc3xnYXN8KD86aGVyfGF0fGdyKW98cmlzKSg/OmVzKT8kL2ksICckMSddLFxuICBbLyhlW21uXXUpcz8kL2ksICckMSddLFxuICBbLyhtb3ZpZXx0d2VsdmUpcyQvaSwgJyQxJ10sXG4gIFsvKGNyaXN8dGVzdHxkaWFnbm9zKSg/OmlzfGVzKSQvaSwgJyQxaXMnXSxcbiAgWy8oYWx1bW58c3lsbGFifG9jdG9wfHZpcnxyYWRpfG51Y2xlfGZ1bmd8Y2FjdHxzdGltdWx8dGVybWlufGJhY2lsbHxmb2N8dXRlcnxsb2N8c3RyYXQpKD86dXN8aSkkL2ksICckMXVzJ10sXG4gIFsvKGFnZW5kfGFkZGVuZHxtaWxsZW5uaXxkYXR8ZXh0cmVtfGJhY3Rlcml8ZGVzaWRlcmF0fHN0cmF0fGNhbmRlbGFicnxlcnJhdHxvdnxzeW1wb3NpfGN1cnJpY3VsfHF1b3IpYSQvaSwgJyQxdW0nXSxcbiAgWy8oYXBoZWxpfGh5cGVyYmF0fHBlcmloZWxpfGFzeW5kZXR8bm91bWVufHBoZW5vbWVufGNyaXRlcml8b3JnYW58cHJvbGVnb21lbnxoZWRyfGF1dG9tYXQpYSQvaSwgJyQxb24nXSxcbiAgWy8oYWx1bW58YWxnfHZlcnRlYnIpYWUkL2ksICckMWEnXSxcbiAgWy8oY29kfG11cnxzaWx8dmVydHxpbmQpaWNlcyQvaSwgJyQxZXgnXSxcbiAgWy8obWF0cnxhcHBlbmQpaWNlcyQvaSwgJyQxaXgnXSxcbiAgWy8ocGUpKHJzb258b3BsZSkkL2ksICckMXJzb24nXSxcbiAgWy8oY2hpbGQpcmVuJC9pLCAnJDEnXSxcbiAgWy8oZWF1KXg/JC9pLCAnJDEnXSxcbiAgWy9tZW4kL2ksICdtYW4nXSxcbl0uZm9yRWFjaCgocnVsZSkgPT4ge1xuICByZXR1cm4gUGx1cmFsaXplLmFkZFNpbmd1bGFyUnVsZShydWxlWzBdLCBydWxlWzFdKTtcbn0pO1xuXG4vKipcbiAqIFVuY291bnRhYmxlIHJ1bGVzLlxuICovXG5bXG4gIC8vIFNpbmd1bGFyIHdvcmRzIHdpdGggbm8gcGx1cmFscy5cbiAgJ2FkdmljZScsXG4gICdhZHVsdGhvb2QnLFxuICAnYWdlbmRhJyxcbiAgJ2FpZCcsXG4gICdhbGNvaG9sJyxcbiAgJ2FtbW8nLFxuICAnYXRobGV0aWNzJyxcbiAgJ2Jpc29uJyxcbiAgJ2Jsb29kJyxcbiAgJ2JyZWFtJyxcbiAgJ2J1ZmZhbG8nLFxuICAnYnV0dGVyJyxcbiAgJ2NhcnAnLFxuICAnY2FzaCcsXG4gICdjaGFzc2lzJyxcbiAgJ2NoZXNzJyxcbiAgJ2Nsb3RoaW5nJyxcbiAgJ2NvbW1lcmNlJyxcbiAgJ2NvZCcsXG4gICdjb29wZXJhdGlvbicsXG4gICdjb3JwcycsXG4gICdkaWdlc3Rpb24nLFxuICAnZGVicmlzJyxcbiAgJ2RpYWJldGVzJyxcbiAgJ2VuZXJneScsXG4gICdlcXVpcG1lbnQnLFxuICAnZWxrJyxcbiAgJ2V4Y3JldGlvbicsXG4gICdleHBlcnRpc2UnLFxuICAnZmxvdW5kZXInLFxuICAnZnVuJyxcbiAgJ2dhbGxvd3MnLFxuICAnZ2FyYmFnZScsXG4gICdncmFmZml0aScsXG4gICdoZWFkcXVhcnRlcnMnLFxuICAnaGVhbHRoJyxcbiAgJ2hlcnBlcycsXG4gICdoaWdoamlua3MnLFxuICAnaG9tZXdvcmsnLFxuICAnaG91c2V3b3JrJyxcbiAgJ2luZm9ybWF0aW9uJyxcbiAgJ2plYW5zJyxcbiAgJ2p1c3RpY2UnLFxuICAna3Vkb3MnLFxuICAnbGFib3VyJyxcbiAgJ2xpdGVyYXR1cmUnLFxuICAnbWFjaGluZXJ5JyxcbiAgJ21hY2tlcmVsJyxcbiAgJ21lZGlhJyxcbiAgJ21ld3MnLFxuICAnbW9vc2UnLFxuICAnbXVzaWMnLFxuICAnbmV3cycsXG4gICdwaWtlJyxcbiAgJ3BsYW5rdG9uJyxcbiAgJ3BsaWVycycsXG4gICdwb2xsdXRpb24nLFxuICAncHJlbWlzZXMnLFxuICAncmFpbicsXG4gICdyZXNlYXJjaCcsXG4gICdyaWNlJyxcbiAgJ3NhbG1vbicsXG4gICdzY2lzc29ycycsXG4gICdzZXJpZXMnLFxuICAnc2V3YWdlJyxcbiAgJ3NoYW1ibGVzJyxcbiAgJ3NocmltcCcsXG4gICdzcGVjaWVzJyxcbiAgJ3N0YWZmJyxcbiAgJ3N3aW5lJyxcbiAgJ3Ryb3V0JyxcbiAgJ3RyYWZmaWMnLFxuICAndHJhbnNwb3JhdGlvbicsXG4gICd0dW5hJyxcbiAgJ3dlYWx0aCcsXG4gICd3ZWxmYXJlJyxcbiAgJ3doaXRpbmcnLFxuICAnd2lsZGViZWVzdCcsXG4gICd3aWxkbGlmZScsXG4gICd5b3UnLFxuICAvLyBSZWdleGVzLlxuICAvcG94JC9pLCAvLyBcImNoaWNrcG94XCIsIFwic21hbGxwb3hcIlxuICAvb2lzJC9pLFxuICAvZGVlciQvaSwgLy8gXCJkZWVyXCIsIFwicmVpbmRlZXJcIlxuICAvZmlzaCQvaSwgLy8gXCJmaXNoXCIsIFwiYmxvd2Zpc2hcIiwgXCJhbmdlbGZpc2hcIlxuICAvc2hlZXAkL2ksXG4gIC9tZWFzbGVzJC9pLFxuICAvW15hZWlvdV1lc2UkL2ksIC8vIFwiY2hpbmVzZVwiLCBcImphcGFuZXNlXCJcbl0uZm9yRWFjaChQbHVyYWxpemUuYWRkVW5jb3VudGFibGVSdWxlKTtcblxuQFBpcGUoeyBuYW1lOiAncGx1cmFsJyB9KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBsdXJhbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgcmV0dXJuIFBsdXJhbGl6ZS5wbHVyYWxpemUodmFsdWUpO1xuICB9XG59XG4iXX0=