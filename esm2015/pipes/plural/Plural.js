/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// NG2
import { Injectable, Pipe } from '@angular/core';
// Rule storage - pluralize and singularize need to be run sequentially,
// while other rules can be optimized using an object for instant lookups.
/** @type {?} */
let pluralRules = [];
/** @type {?} */
let singularRules = [];
/** @type {?} */
let uncountables = {};
/** @type {?} */
let irregularPlurals = {};
/** @type {?} */
let irregularSingles = {};
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
    (match, index) => {
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
    let len = collection.length;
    // Iterate over the sanitization rules and use the first one to match.
    while (len--) {
        /** @type {?} */
        let rule = collection[len];
        // If the rule passes, return the replacement.
        if (rule[0].test(word)) {
            return word.replace(rule[0], (/**
             * @param {?} match
             * @param {?} index
             * @param {?} words
             * @return {?}
             */
            (match, index, words) => {
                /** @type {?} */
                let result = interpolate(rule[1], [match, index, words]);
                if (match === '') {
                    return restoreCase(words[index - 1], result);
                }
                return restoreCase(match, result);
            }));
        }
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
    (word) => {
        // Get the correct token and case restoration functions.
        /** @type {?} */
        let token = word.toLowerCase();
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
class Pluralize {
    /**
     * @param {?} word
     * @param {?=} count
     * @param {?=} inclusive
     * @return {?}
     */
    static pluralize(word, count = 1, inclusive) {
        /** @type {?} */
        let pluralized = count === 1 ? Pluralize.singular(word) : Pluralize.plural(word);
        return (inclusive ? `${count} ` : '') + pluralized;
    }
    /**
     * @param {?} word
     * @return {?}
     */
    static singular(word) {
        return replaceWord(irregularSingles, irregularPlurals, pluralRules)(word);
    }
    /**
     * @param {?} word
     * @return {?}
     */
    static plural(word) {
        return replaceWord(irregularPlurals, irregularSingles, singularRules)(word);
    }
    /**
     * @param {?} rule
     * @param {?} replacement
     * @return {?}
     */
    static addPluralRule(rule, replacement) {
        pluralRules.push([sanitizeRule(rule), replacement]);
    }
    /**
     * @param {?} rule
     * @param {?} replacement
     * @return {?}
     */
    static addSingularRule(rule, replacement) {
        singularRules.push([sanitizeRule(rule), replacement]);
    }
    /**
     * @param {?} word
     * @return {?}
     */
    static addUncountableRule(word) {
        if (typeof word === 'string') {
            uncountables[word.toLowerCase()] = true;
            return;
        }
        // Set singular and plural references for the word.
        Pluralize.addPluralRule(word, '$0');
        Pluralize.addSingularRule(word, '$0');
    }
    /**
     * @param {?} single
     * @param {?} plural
     * @return {?}
     */
    static addIrregularRule(single, plural) {
        /** @type {?} */
        let one = plural.toLowerCase();
        /** @type {?} */
        let many = single.toLowerCase();
        irregularSingles[one] = many;
        irregularPlurals[many] = one;
    }
}
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
(rule) => {
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
(rule) => {
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
(rule) => {
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
export class PluralPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Pluralize.pluralize(value);
    }
}
PluralPipe.decorators = [
    { type: Pipe, args: [{ name: 'plural' },] },
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1cmFsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInBpcGVzL3BsdXJhbC9QbHVyYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7Ozs7SUFJNUQsV0FBVyxHQUFHLEVBQUU7O0lBQ2hCLGFBQWEsR0FBRyxFQUFFOztJQUNsQixZQUFZLEdBQUcsRUFBRTs7SUFDakIsZ0JBQWdCLEdBQUcsRUFBRTs7SUFDckIsZ0JBQWdCLEdBQUcsRUFBRTs7Ozs7O0FBTXpCLFNBQVMsV0FBVyxDQUFDLEdBQVc7SUFDOUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbkUsQ0FBQzs7Ozs7O0FBS0QsU0FBUyxZQUFZLENBQUMsSUFBcUI7SUFDekMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDNUIsT0FBTyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxQztJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7Ozs7QUFNRCxTQUFTLFdBQVcsQ0FBQyxJQUFZLEVBQUUsS0FBYTtJQUM5QyxtQ0FBbUM7SUFDbkMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1FBQy9CLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQzVCO0lBRUQsbUNBQW1DO0lBQ25DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtRQUNyQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMzQjtJ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QUFDLGtCQUFrQixDQUFDLENBQUM7QUFJeEMsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBQ3JCLFNBQVMsQ0FBQyxLQUFLO1FBQ2IsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7OztZQUxGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDdkIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5HMlxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vLyBSdWxlIHN0b3JhZ2UgLSBwbHVyYWxpemUgYW5kIHNpbmd1bGFyaXplIG5lZWQgdG8gYmUgcnVuIHNlcXVlbnRpYWxseSxcbi8vIHdoaWxlIG90aGVyIHJ1bGVzIGNhbiBiZSBvcHRpbWl6ZWQgdXNpbmcgYW4gb2JqZWN0IGZvciBpbnN0YW50IGxvb2t1cHMuXG5sZXQgcGx1cmFsUnVsZXMgPSBbXTtcbmxldCBzaW5ndWxhclJ1bGVzID0gW107XG5sZXQgdW5jb3VudGFibGVzID0ge307XG5sZXQgaXJyZWd1bGFyUGx1cmFscyA9IHt9O1xubGV0IGlycmVndWxhclNpbmdsZXMgPSB7fTtcblxuLyoqXG4gKiBUaXRsZSBjYXNlIGEgc3RyaW5nLlxuICogQHBhcmFtIHN0clxuICovXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogU2FuaXRpemUgYSBwbHVyYWxpemF0aW9uIHJ1bGUgdG8gYSB1c2FibGUgcmVndWxhciBleHByZXNzaW9uLlxuICovXG5mdW5jdGlvbiBzYW5pdGl6ZVJ1bGUocnVsZTogUmVnRXhwIHwgc3RyaW5nKTogUmVnRXhwIHtcbiAgaWYgKHR5cGVvZiBydWxlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKCdeJyArIHJ1bGUgKyAnJCcsICdpJyk7XG4gIH1cbiAgcmV0dXJuIHJ1bGU7XG59XG5cbi8qKlxuICogUGFzcyBpbiBhIHdvcmQgdG9rZW4gdG8gcHJvZHVjZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIHJlcGxpY2F0ZSB0aGUgY2FzZSBvblxuICogYW5vdGhlciB3b3JkLlxuICovXG5mdW5jdGlvbiByZXN0b3JlQ2FzZSh3b3JkOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBVcHBlciBjYXNlZCB3b3Jkcy4gRS5nLiBcIkhFTExPXCIuXG4gIGlmICh3b3JkID09PSB3b3JkLnRvVXBwZXJDYXNlKCkpIHtcbiAgICByZXR1cm4gdG9rZW4udG9VcHBlckNhc2UoKTtcbiAgfVxuXG4gIC8vIFRpdGxlIGNhc2VkIHdvcmRzLiBFLmcuIFwiVGl0bGVcIi5cbiAgaWYgKHdvcmRbMF0gPT09IHdvcmRbMF0udG9VcHBlckNhc2UoKSkge1xuICAgIHJldHVybiB0b1RpdGxlQ2FzZSh0b2tlbik7XG4gIH1cblxuICAvLyBMb3dlciBjYXNlZCB3b3Jkcy4gRS5nLiBcInRlc3RcIi5cbiAgcmV0dXJuIHRva2VuLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8qKlxuICogSW50ZXJwb2xhdGUgYSByZWdleHAgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShzdHI6IHN0cmluZywgYXJnczogYW55W10pOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcJChcXGR7MSwyfSkvZywgKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiBhcmdzW2luZGV4XSB8fCAnJztcbiAgfSk7XG59XG5cbi8qKlxuICogU2FuaXRpemUgYSB3b3JkIGJ5IHBhc3NpbmcgaW4gdGhlIHdvcmQgYW5kIHNhbml0aXphdGlvbiBydWxlcy5cbiAqL1xuZnVuY3Rpb24gc2FuaXRpemVXb3JkKHRva2VuOiBzdHJpbmcsIHdvcmQ6IHN0cmluZywgY29sbGVjdGlvbjogUmVnRXhwW10pOiBzdHJpbmcge1xuICAvLyBFbXB0eSBzdHJpbmcgb3IgZG9lc24ndCBuZWVkIGZpeGluZy5cbiAgaWYgKCF0b2tlbi5sZW5ndGggfHwgdW5jb3VudGFibGVzLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgIHJldHVybiB3b3JkO1xuICB9XG5cbiAgbGV0IGxlbiA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuICAvLyBJdGVyYXRlIG92ZXIgdGhlIHNhbml0aXphdGlvbiBydWxlcyBhbmQgdXNlIHRoZSBmaXJzdCBvbmUgdG8gbWF0Y2guXG4gIHdoaWxlIChsZW4tLSkge1xuICAgIGxldCBydWxlID0gY29sbGVjdGlvbltsZW5dO1xuICAgIC8vIElmIHRoZSBydWxlIHBhc3NlcywgcmV0dXJuIHRoZSByZXBsYWNlbWVudC5cbiAgICBpZiAocnVsZVswXS50ZXN0KHdvcmQpKSB7XG4gICAgICByZXR1cm4gd29yZC5yZXBsYWNlKHJ1bGVbMF0sIChtYXRjaCwgaW5kZXgsIHdvcmRzKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSBpbnRlcnBvbGF0ZShydWxlWzFdLCBbbWF0Y2gsIGluZGV4LCB3b3Jkc10pO1xuICAgICAgICBpZiAobWF0Y2ggPT09ICcnKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKHdvcmRzW2luZGV4IC0gMV0sIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3RvcmVDYXNlKG1hdGNoLCByZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3b3JkO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgYSB3b3JkIHdpdGggdGhlIHVwZGF0ZWQgd29yZC5cbiAqL1xuZnVuY3Rpb24gcmVwbGFjZVdvcmQocmVwbGFjZU1hcDogYW55LCBrZWVwTWFwOiBhbnksIHJ1bGVzOiBhbnlbXSk6IEZ1bmN0aW9uIHtcbiAgcmV0dXJuICh3b3JkKSA9PiB7XG4gICAgLy8gR2V0IHRoZSBjb3JyZWN0IHRva2VuIGFuZCBjYXNlIHJlc3RvcmF0aW9uIGZ1bmN0aW9ucy5cbiAgICBsZXQgdG9rZW4gPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBDaGVjayBhZ2FpbnN0IHRoZSBrZWVwIG9iamVjdCBtYXAuXG4gICAgaWYgKGtlZXBNYXAuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG4gICAgICByZXR1cm4gcmVzdG9yZUNhc2Uod29yZCwgdG9rZW4pO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGFnYWluc3QgdGhlIHJlcGxhY2VtZW50IG1hcCBmb3IgYSBkaXJlY3Qgd29yZCByZXBsYWNlbWVudC5cbiAgICBpZiAocmVwbGFjZU1hcC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcbiAgICAgIHJldHVybiByZXN0b3JlQ2FzZSh3b3JkLCByZXBsYWNlTWFwW3Rva2VuXSk7XG4gICAgfVxuXG4gICAgLy8gUnVuIGFsbCB0aGUgcnVsZXMgYWdhaW5zdCB0aGUgd29yZC5cbiAgICByZXR1cm4gc2FuaXRpemVXb3JkKHRva2VuLCB3b3JkLCBydWxlcyk7XG4gIH07XG59XG5cbmNsYXNzIFBsdXJhbGl6ZSB7XG4gIHN0YXRpYyBwbHVyYWxpemUod29yZCwgY291bnQgPSAxLCBpbmNsdXNpdmU/KSB7XG4gICAgbGV0IHBsdXJhbGl6ZWQgPSBjb3VudCA9PT0gMSA/IFBsdXJhbGl6ZS5zaW5ndWxhcih3b3JkKSA6IFBsdXJhbGl6ZS5wbHVyYWwod29yZCk7XG4gICAgcmV0dXJuIChpbmNsdXNpdmUgPyBgJHtjb3VudH0gYCA6ICcnKSArIHBsdXJhbGl6ZWQ7XG4gIH1cblxuICBzdGF0aWMgc2luZ3VsYXIod29yZCkge1xuICAgIHJldHVybiByZXBsYWNlV29yZChpcnJlZ3VsYXJTaW5nbGVzLCBpcnJlZ3VsYXJQbHVyYWxzLCBwbHVyYWxSdWxlcykod29yZCk7XG4gIH1cblxuICBzdGF0aWMgcGx1cmFsKHdvcmQpIHtcbiAgICByZXR1cm4gcmVwbGFjZVdvcmQoaXJyZWd1bGFyUGx1cmFscywgaXJyZWd1bGFyU2luZ2xlcywgc2luZ3VsYXJSdWxlcykod29yZCk7XG4gIH1cblxuICBzdGF0aWMgYWRkUGx1cmFsUnVsZShydWxlLCByZXBsYWNlbWVudCkge1xuICAgIHBsdXJhbFJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRTaW5ndWxhclJ1bGUocnVsZSwgcmVwbGFjZW1lbnQpIHtcbiAgICBzaW5ndWxhclJ1bGVzLnB1c2goW3Nhbml0aXplUnVsZShydWxlKSwgcmVwbGFjZW1lbnRdKTtcbiAgfVxuXG4gIHN0YXRpYyBhZGRVbmNvdW50YWJsZVJ1bGUod29yZCkge1xuICAgIGlmICh0eXBlb2Ygd29yZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuY291bnRhYmxlc1t3b3JkLnRvTG93ZXJDYXNlKCldID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgc2luZ3VsYXIgYW5kIHBsdXJhbCByZWZlcmVuY2VzIGZvciB0aGUgd29yZC5cbiAgICBQbHVyYWxpemUuYWRkUGx1cmFsUnVsZSh3b3JkLCAnJDAnKTtcbiAgICBQbHVyYWxpemUuYWRkU2luZ3VsYXJSdWxlKHdvcmQsICckMCcpO1xuICB9XG5cbiAgc3RhdGljIGFkZElycmVndWxhclJ1bGUoc2luZ2xlLCBwbHVyYWwpIHtcbiAgICBsZXQgb25lID0gcGx1cmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IG1hbnkgPSBzaW5nbGUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlycmVndWxhclNpbmdsZXNbb25lXSA9IG1hbnk7XG4gICAgaXJyZWd1bGFyUGx1cmFsc1ttYW55XSA9IG9uZTtcbiAgfVxufVxuXG4vKipcbiAqIElycmVndWxhciBydWxlcy5cbiAqL1xuW1xuICAvLyBQcm9ub3Vucy5cbiAgWydJJywgJ3dlJ10sXG4gIFsnbWUnLCAndXMnXSxcbiAgWydoZScsICd0aGV5J10sXG4gIFsnc2hlJywgJ3RoZXknXSxcbiAgWyd0aGVtJywgJ3RoZW0nXSxcbiAgWydteXNlbGYnLCAnb3Vyc2VsdmVzJ10sXG4gIFsneW91cnNlbGYnLCAneW91cnNlbHZlcyddLFxuICBbJ2l0c2VsZicsICd0aGVtc2VsdmVzJ10sXG4gIFsnaGVyc2VsZicsICd0aGVtc2VsdmVzJ10sXG4gIFsnaGltc2VsZicsICd0aGVtc2VsdmVzJ10sXG4gIFsndGhlbXNlbGYnLCAndGhlbXNlbHZlcyddLFxuICBbJ2lzJywgJ2FyZSddLFxuICBbJ3RoaXMnLCAndGhlc2UnXSxcbiAgWyd0aGF0JywgJ3Rob3NlJ10sXG4gIC8vIFdvcmRzIGVuZGluZyBpbiB3aXRoIGEgY29uc29uYW50IGFuZCBgb2AuXG4gIFsnZWNobycsICdlY2hvZXMnXSxcbiAgWydkaW5nbycsICdkaW5nb2VzJ10sXG4gIFsndm9sY2FubycsICd2b2xjYW5vZXMnXSxcbiAgWyd0b3JuYWRvJywgJ3Rvcm5hZG9lcyddLFxuICBbJ3RvcnBlZG8nLCAndG9ycGVkb2VzJ10sXG4gIC8vIEVuZHMgd2l0aCBgdXNgLlxuICBbJ2dlbnVzJywgJ2dlbmVyYSddLFxuICBbJ3Zpc2N1cycsICd2aXNjZXJhJ10sXG4gIC8vIEVuZHMgd2l0aCBgbWFgLlxuICBbJ3N0aWdtYScsICdzdGlnbWF0YSddLFxuICBbJ3N0b21hJywgJ3N0b21hdGEnXSxcbiAgWydkb2dtYScsICdkb2dtYXRhJ10sXG4gIFsnbGVtbWEnLCAnbGVtbWF0YSddLFxuICBbJ3NjaGVtYScsICdzY2hlbWF0YSddLFxuICBbJ2FuYXRoZW1hJywgJ2FuYXRoZW1hdGEnXSxcbiAgLy8gT3RoZXIgaXJyZWd1bGFyIHJ1bGVzLlxuICBbJ294JywgJ294ZW4nXSxcbiAgWydheGUnLCAnYXhlcyddLFxuICBbJ2RpZScsICdkaWNlJ10sXG4gIFsneWVzJywgJ3llc2VzJ10sXG4gIFsnZm9vdCcsICdmZWV0J10sXG4gIFsnZWF2ZScsICdlYXZlcyddLFxuICBbJ2dvb3NlJywgJ2dlZXNlJ10sXG4gIFsndG9vdGgnLCAndGVldGgnXSxcbiAgWydxdWl6JywgJ3F1aXp6ZXMnXSxcbiAgWydodW1hbicsICdodW1hbnMnXSxcbiAgWydwcm9vZicsICdwcm9vZnMnXSxcbiAgWydjYXJ2ZScsICdjYXJ2ZXMnXSxcbiAgWyd2YWx2ZScsICd2YWx2ZXMnXSxcbiAgWyd0aGllZicsICd0aGlldmVzJ10sXG4gIFsnZ2VuaWUnLCAnZ2VuaWVzJ10sXG4gIFsnZ3Jvb3ZlJywgJ2dyb292ZXMnXSxcbiAgWydwaWNrYXhlJywgJ3BpY2theGVzJ10sXG4gIFsnd2hpc2tleScsICd3aGlza2llcyddLFxuXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gIHJldHVybiBQbHVyYWxpemUuYWRkSXJyZWd1bGFyUnVsZShydWxlWzBdLCBydWxlWzFdKTtcbn0pO1xuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gcnVsZXMuXG4gKi9cbltcbiAgWy9zPyQvaSwgJ3MnXSxcbiAgWy8oW15hZWlvdV1lc2UpJC9pLCAnJDEnXSxcbiAgWy8oYXh8dGVzdClpcyQvaSwgJyQxZXMnXSxcbiAgWy8oYWxpYXN8W15hb3VddXN8dGxhc3xnYXN8cmlzKSQvaSwgJyQxZXMnXSxcbiAgWy8oZVttbl11KXM/JC9pLCAnJDFzJ10sXG4gIFsvKFtebF1pYXN8W2FlaW91XWxhc3xbZW1qenJdYXN8W2l1XWFtKSQvaSwgJyQxJ10sXG4gIFsvKGFsdW1ufHN5bGxhYnxvY3RvcHx2aXJ8cmFkaXxudWNsZXxmdW5nfGNhY3R8c3RpbXVsfHRlcm1pbnxiYWNpbGx8Zm9jfHV0ZXJ8bG9jfHN0cmF0KSg/OnVzfGkpJC9pLCAnJDFpJ10sXG4gIFsvKGFsdW1ufGFsZ3x2ZXJ0ZWJyKSg/OmF8YWUpJC9pLCAnJDFhZSddLFxuICBbLyhzZXJhcGh8Y2hlcnViKSg/OmltKT8kL2ksICckMWltJ10sXG4gIFsvKGhlcnxhdHxncilvJC9pLCAnJDFvZXMnXSxcbiAgWy8oYWdlbmR8YWRkZW5kfG1pbGxlbm5pfGRhdHxleHRyZW18YmFjdGVyaXxkZXNpZGVyYXR8c3RyYXR8Y2FuZGVsYWJyfGVycmF0fG92fHN5bXBvc2l8Y3VycmljdWx8YXV0b21hdHxxdW9yKSg/OmF8dW0pJC9pLCAnJDFhJ10sXG4gIFsvKGFwaGVsaXxoeXBlcmJhdHxwZXJpaGVsaXxhc3luZGV0fG5vdW1lbnxwaGVub21lbnxjcml0ZXJpfG9yZ2FufHByb2xlZ29tZW58aGVkcnxhdXRvbWF0KSg/OmF8b24pJC9pLCAnJDFhJ10sXG4gIFsvc2lzJC9pLCAnc2VzJ10sXG4gIFsvKD86KGtuaXx3aXxsaSlmZXwoYXJ8bHxlYXxlb3xvYXxob28pZikkL2ksICckMSQydmVzJ10sXG4gIFsvKFteYWVpb3V5XXxxdSl5JC9pLCAnJDFpZXMnXSxcbiAgWy8oW15jaF1baWVvXVtsbl0pZXkkL2ksICckMWllcyddLFxuICBbLyh4fGNofHNzfHNofHp6KSQvaSwgJyQxZXMnXSxcbiAgWy8obWF0cnxjb2R8bXVyfHNpbHx2ZXJ0fGluZHxhcHBlbmQpKD86aXh8ZXgpJC9pLCAnJDFpY2VzJ10sXG4gIFsvKG18bCkoPzppY2V8b3VzZSkkL2ksICckMWljZSddLFxuICBbLyhwZSkoPzpyc29ufG9wbGUpJC9pLCAnJDFvcGxlJ10sXG4gIFsvKGNoaWxkKSg/OnJlbik/JC9pLCAnJDFyZW4nXSxcbiAgWy9lYXV4JC9pLCAnJDAnXSxcbiAgWy9tW2FlXW4kL2ksICdtZW4nXSxcbiAgWyd0aG91JywgJ3lvdSddLFxuXS5mb3JFYWNoKChydWxlKSA9PiB7XG4gIHJldHVybiBQbHVyYWxpemUuYWRkUGx1cmFsUnVsZShydWxlWzBdLCBydWxlWzFdKTtcbn0pO1xuXG4vKipcbiAqIFNpbmd1bGFyaXphdGlvbiBydWxlcy5cbiAqL1xuW1xuICBbL3MkL2ksICcnXSxcbiAgWy8oc3MpJC9pLCAnJDEnXSxcbiAgWy8oKGEpbmFseXwoYilhfChkKWlhZ25vfChwKWFyZW50aGV8KHApcm9nbm98KHMpeW5vcHwodCloZSkoPzpzaXN8c2VzKSQvaSwgJyQxc2lzJ10sXG4gIFsvKF5hbmFseSkoPzpzaXN8c2VzKSQvaSwgJyQxc2lzJ10sXG4gIFsvKHdpfGtuaXwoPzphZnRlcnxoYWxmfGhpZ2h8bG93fG1pZHxub258bmlnaHR8W15cXHddfF4pbGkpdmVzJC9pLCAnJDFmZSddLFxuICBbLyhhcnwoPzp3b3xbYWVdKWx8W2VvXVthb10pdmVzJC9pLCAnJDFmJ10sXG4gIFsvKFteYWVpb3V5XXxxdSlpZXMkL2ksICckMXknXSxcbiAgWy8oXltwbF18em9tYnxeKD86bmVjayk/dHxbYWVvXVtsdF18Y3V0KWllcyQvaSwgJyQxaWUnXSxcbiAgWy8oXFxiKD86bW9ufHNtaWwpKWllcyQvaSwgJyQxZXknXSxcbiAgWy8obXxsKWljZSQvaSwgJyQxb3VzZSddLFxuICBbLyhzZXJhcGh8Y2hlcnViKWltJC9pLCAnJDEnXSxcbiAgWy8oeHxjaHxzc3xzaHx6enx0dG98Z298Y2hvfGFsaWFzfFteYW91XXVzfHRsYXN8Z2FzfCg/OmhlcnxhdHxncilvfHJpcykoPzplcyk/JC9pLCAnJDEnXSxcbiAgWy8oZVttbl11KXM/JC9pLCAnJDEnXSxcbiAgWy8obW92aWV8dHdlbHZlKXMkL2ksICckMSddLFxuICBbLyhjcmlzfHRlc3R8ZGlhZ25vcykoPzppc3xlcykkL2ksICckMWlzJ10sXG4gIFsvKGFsdW1ufHN5bGxhYnxvY3RvcHx2aXJ8cmFkaXxudWNsZXxmdW5nfGNhY3R8c3RpbXVsfHRlcm1pbnxiYWNpbGx8Zm9jfHV0ZXJ8bG9jfHN0cmF0KSg/OnVzfGkpJC9pLCAnJDF1cyddLFxuICBbLyhhZ2VuZHxhZGRlbmR8bWlsbGVubml8ZGF0fGV4dHJlbXxiYWN0ZXJpfGRlc2lkZXJhdHxzdHJhdHxjYW5kZWxhYnJ8ZXJyYXR8b3Z8c3ltcG9zaXxjdXJyaWN1bHxxdW9yKWEkL2ksICckMXVtJ10sXG4gIFsvKGFwaGVsaXxoeXBlcmJhdHxwZXJpaGVsaXxhc3luZGV0fG5vdW1lbnxwaGVub21lbnxjcml0ZXJpfG9yZ2FufHByb2xlZ29tZW58aGVkcnxhdXRvbWF0KWEkL2ksICckMW9uJ10sXG4gIFsvKGFsdW1ufGFsZ3x2ZXJ0ZWJyKWFlJC9pLCAnJDFhJ10sXG4gIFsvKGNvZHxtdXJ8c2lsfHZlcnR8aW5kKWljZXMkL2ksICckMWV4J10sXG4gIFsvKG1hdHJ8YXBwZW5kKWljZXMkL2ksICckMWl4J10sXG4gIFsvKHBlKShyc29ufG9wbGUpJC9pLCAnJDFyc29uJ10sXG4gIFsvKGNoaWxkKXJlbiQvaSwgJyQxJ10sXG4gIFsvKGVhdSl4PyQvaSwgJyQxJ10sXG4gIFsvbWVuJC9pLCAnbWFuJ10sXG5dLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgcmV0dXJuIFBsdXJhbGl6ZS5hZGRTaW5ndWxhclJ1bGUocnVsZVswXSwgcnVsZVsxXSk7XG59KTtcblxuLyoqXG4gKiBVbmNvdW50YWJsZSBydWxlcy5cbiAqL1xuW1xuICAvLyBTaW5ndWxhciB3b3JkcyB3aXRoIG5vIHBsdXJhbHMuXG4gICdhZHZpY2UnLFxuICAnYWR1bHRob29kJyxcbiAgJ2FnZW5kYScsXG4gICdhaWQnLFxuICAnYWxjb2hvbCcsXG4gICdhbW1vJyxcbiAgJ2F0aGxldGljcycsXG4gICdiaXNvbicsXG4gICdibG9vZCcsXG4gICdicmVhbScsXG4gICdidWZmYWxvJyxcbiAgJ2J1dHRlcicsXG4gICdjYXJwJyxcbiAgJ2Nhc2gnLFxuICAnY2hhc3NpcycsXG4gICdjaGVzcycsXG4gICdjbG90aGluZycsXG4gICdjb21tZXJjZScsXG4gICdjb2QnLFxuICAnY29vcGVyYXRpb24nLFxuICAnY29ycHMnLFxuICAnZGlnZXN0aW9uJyxcbiAgJ2RlYnJpcycsXG4gICdkaWFiZXRlcycsXG4gICdlbmVyZ3knLFxuICAnZXF1aXBtZW50JyxcbiAgJ2VsaycsXG4gICdleGNyZXRpb24nLFxuICAnZXhwZXJ0aXNlJyxcbiAgJ2Zsb3VuZGVyJyxcbiAgJ2Z1bicsXG4gICdnYWxsb3dzJyxcbiAgJ2dhcmJhZ2UnLFxuICAnZ3JhZmZpdGknLFxuICAnaGVhZHF1YXJ0ZXJzJyxcbiAgJ2hlYWx0aCcsXG4gICdoZXJwZXMnLFxuICAnaGlnaGppbmtzJyxcbiAgJ2hvbWV3b3JrJyxcbiAgJ2hvdXNld29yaycsXG4gICdpbmZvcm1hdGlvbicsXG4gICdqZWFucycsXG4gICdqdXN0aWNlJyxcbiAgJ2t1ZG9zJyxcbiAgJ2xhYm91cicsXG4gICdsaXRlcmF0dXJlJyxcbiAgJ21hY2hpbmVyeScsXG4gICdtYWNrZXJlbCcsXG4gICdtZWRpYScsXG4gICdtZXdzJyxcbiAgJ21vb3NlJyxcbiAgJ211c2ljJyxcbiAgJ25ld3MnLFxuICAncGlrZScsXG4gICdwbGFua3RvbicsXG4gICdwbGllcnMnLFxuICAncG9sbHV0aW9uJyxcbiAgJ3ByZW1pc2VzJyxcbiAgJ3JhaW4nLFxuICAncmVzZWFyY2gnLFxuICAncmljZScsXG4gICdzYWxtb24nLFxuICAnc2Npc3NvcnMnLFxuICAnc2VyaWVzJyxcbiAgJ3Nld2FnZScsXG4gICdzaGFtYmxlcycsXG4gICdzaHJpbXAnLFxuICAnc3BlY2llcycsXG4gICdzdGFmZicsXG4gICdzd2luZScsXG4gICd0cm91dCcsXG4gICd0cmFmZmljJyxcbiAgJ3RyYW5zcG9yYXRpb24nLFxuICAndHVuYScsXG4gICd3ZWFsdGgnLFxuICAnd2VsZmFyZScsXG4gICd3aGl0aW5nJyxcbiAgJ3dpbGRlYmVlc3QnLFxuICAnd2lsZGxpZmUnLFxuICAneW91JyxcbiAgLy8gUmVnZXhlcy5cbiAgL3BveCQvaSwgLy8gXCJjaGlja3BveFwiLCBcInNtYWxscG94XCJcbiAgL29pcyQvaSxcbiAgL2RlZXIkL2ksIC8vIFwiZGVlclwiLCBcInJlaW5kZWVyXCJcbiAgL2Zpc2gkL2ksIC8vIFwiZmlzaFwiLCBcImJsb3dmaXNoXCIsIFwiYW5nZWxmaXNoXCJcbiAgL3NoZWVwJC9pLFxuICAvbWVhc2xlcyQvaSxcbiAgL1teYWVpb3VdZXNlJC9pLCAvLyBcImNoaW5lc2VcIiwgXCJqYXBhbmVzZVwiXG5dLmZvckVhY2goUGx1cmFsaXplLmFkZFVuY291bnRhYmxlUnVsZSk7XG5cbkBQaXBlKHsgbmFtZTogJ3BsdXJhbCcgfSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQbHVyYWxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZSkge1xuICAgIHJldHVybiBQbHVyYWxpemUucGx1cmFsaXplKHZhbHVlKTtcbiAgfVxufVxuIl19