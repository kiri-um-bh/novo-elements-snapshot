/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// import * as unifiedProxy from 'unified';
// const unified = (<any>unifiedProxy).default || unifiedProxy; // workaround for a delightfully terrible rollup issue
// const unified = require('unified');
import * as retextProxy from 'retext';
/** @type {?} */
const retext = ((/** @type {?} */ (retextProxy))).default || retextProxy;
// workaround for a delightfully terrible rollup issue
import * as english from 'retext-english';
import * as equality from 'retext-equality';
import * as stringify from 'retext-stringify';
import { debounceTime, throttleTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
/**
 * @param {?} editor
 * @return {?}
 */
export function init(editor) {
    /** @type {?} */
    const processor = retext()
        .use(english)
        .use(equality)
        .use(stringify);
    /** @type {?} */
    const changeSubject = new Subject();
    changeSubject
        .pipe(throttleTime(700), debounceTime(300))
        .subscribe((event) => {
        console.log('change event', event);
        /** @type {?} */
        const body = editor.document.$.body;
        walk(body, editor, processor);
    });
    editor.on('change', (event) => {
        // fromEvent on editor or document doesn't work /shrug emoji
        changeSubject.next(event);
    });
}
/**
 * @param {?} element
 * @param {?} editor
 * @param {?} processor
 * @return {?}
 */
function walk(element, editor, processor) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield verifyExistingWarnings(element.ownerDocument, processor);
        flattenChildNodes(element, 'inclusion-helper-warning')
            .filter((node) => node.nodeType === Node.TEXT_NODE)
            .forEach((item) => parseAndAddSuggestions(item, editor, processor));
    });
}
/**
 * @param {?} document
 * @param {?} processor
 * @return {?}
 */
function verifyExistingWarnings(document, processor) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield Promise.all(Array.from(document.getElementsByClassName('inclusion-helper-warning')).map((element) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const text = element.textContent;
            /** @type {?} */
            const vfile = yield processor.process(text);
            if (vfile.messages.length !== 1 || vfile.messages[0].location.end.offset !== text.length) {
                removeWarning(element, document);
            }
            return;
        })));
    });
}
/**
 * @param {?} element
 * @param {?} document
 * @return {?}
 */
function removeWarning(element, document) {
    /** @type {?} */
    const parent = element.parentNode;
    parent.replaceChild(document.createTextNode(element.textContent), element);
}
/**
 * @param {?} parent
 * @param {?=} filter
 * @return {?}
 */
function flattenChildNodes(parent, filter) {
    /** @type {?} */
    const children = Array.from(parent.childNodes).filter((child) => {
        if ({}.hasOwnProperty.call(child, 'className') && filter) {
            return !((/** @type {?} */ (child))).className.includes(filter);
        }
        else {
            return true;
        }
    });
    if (children.length === 0) {
        return [parent];
    }
    else {
        return [parent, ...flatten(children.map((n) => flattenChildNodes(n, 'inclusion-helper-warning')))];
    }
}
/**
 * @template T
 * @param {?} a
 * @return {?}
 */
function flatten(a) {
    return a.reduce((prev, next) => [...(Array.isArray(prev) ? prev : [prev]), ...(Array.isArray(next) ? next : [next])]);
}
/**
 * @param {?} vfile
 * @param {?} text
 * @return {?}
 */
function getSuggestions(vfile, text) {
    if (!vfile.messages && vfile.messages.length) {
        return [];
    }
    return vfile.messages
        .map((vmessage) => {
        /** @type {?} */
        const suggestedReplacements = vmessage.message.match(/`([^`]*)`/g).map((s) => s.replace(/`/g, ''));
        /** @type {?} */
        const problematicTerm = suggestedReplacements.shift();
        return {
            start: vmessage.location.start.offset,
            stop: vmessage.location.end.offset,
            id: vmessage.name + problematicTerm,
            problematicTerm,
            suggestedReplacements,
            explanation: makeExplanation(suggestedReplacements, problematicTerm),
        };
    })
        .concat(getCustomSuggestions(text));
}
/**
 * @param {?} suggestedReplacements
 * @param {?} problematicTerm
 * @return {?}
 */
function makeExplanation(suggestedReplacements, problematicTerm) {
    /** @type {?} */
    let replacements;
    if (suggestedReplacements.length === 1) {
        replacements = suggestedReplacements.map((t) => `"${t}"`).pop();
    }
    else if (suggestedReplacements.length === 2) {
        replacements = suggestedReplacements.map((t) => `"${t}"`).join(' or ');
    }
    else if (suggestedReplacements.length > 2) {
        replacements = `${suggestedReplacements
            .slice(0, -1)
            .map((t) => `"${t}"`)
            .join(', ')}, or ${suggestedReplacements.slice(-1).map((t) => `"${t}"`)}`;
    }
    return `"${problematicTerm}" is potentially a less inclusive term than ${replacements}`;
}
/**
 * @param {?} text
 * @return {?}
 */
function getCustomSuggestions(text) {
    /** @type {?} */
    const customList = [
        { term: 'superior', replacement: 'excellent' },
        { term: 'boasts', replacement: 'has' },
        { term: ' courageously', replacement: ', with pluck and grit,' },
        { term: 'dominate', replacement: 'thrive' },
        { term: 'hostile', replacement: 'difficult' },
    ];
    return customList
        .filter(({ term }) => text.includes(term))
        .map(({ term, replacement }) => {
        return {
            start: text.indexOf(term),
            stop: text.indexOf(term) + term.length,
            id: term,
            problematicTerm: term,
            suggestedReplacements: [replacement],
            explanation: makeExplanation([replacement], term),
        };
    });
}
/**
 * @param {?} element
 * @param {?} editor
 * @param {?} processor
 * @return {?}
 */
function parseAndAddSuggestions(element, editor, processor) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        /** @type {?} */
        const doc = element.ownerDocument;
        /** @type {?} */
        const text = element.textContent;
        /** @type {?} */
        const parent = element.parentNode;
        /** @type {?} */
        const vfile = yield processor.process(text);
        // console.log(vfile);
        /** @type {?} */
        const suggestions = getSuggestions(vfile, text).filter((suggestion) => {
            if (!Array.isArray(editor.dismissedTerms) || editor.dismissedTerms.length === 0) {
                return true;
            }
            return !editor.dismissedTerms.find((term) => {
                return term === suggestion.problematicTerm;
            });
        });
        if (suggestions.length && !((/** @type {?} */ (parent))).className.includes('inclusion-helper-warning')) {
            // for reach suggestion, splice it into the thing
            /** @type {?} */
            const offset = getSelection(doc, element);
            splitIntoNodes(suggestions, text, doc, editor).forEach((node) => parent.insertBefore(node, (/** @type {?} */ (element))));
            if (Number.isInteger(offset)) {
                setSelection(doc, offset, parent);
            }
            parent.removeChild(element);
        }
    });
}
/**
 * @param {?} doc
 * @param {?} element
 * @return {?}
 */
function getSelection(doc, element) {
    /** @type {?} */
    const selection = doc.getSelection();
    if (selection.focusNode === element || selection.anchorNode === element) {
        return selection.focusOffset;
    }
}
/**
 * @param {?} doc
 * @param {?} location
 * @param {?} parent
 * @return {?}
 */
function setSelection(doc, location, parent) {
    /** @type {?} */
    const selection = doc.getSelection();
    selection.removeAllRanges();
    /** @type {?} */
    const range = document.createRange();
    range.selectNode(parent);
    selection.addRange(range);
    selection.collapseToEnd();
}
/**
 * @param {?} suggestions
 * @param {?} text
 * @param {?} doc
 * @param {?} editor
 * @return {?}
 */
function splitIntoNodes(suggestions, text, doc, editor) {
    /** @type {?} */
    const nodes = [];
    /** @type {?} */
    let index = 0;
    suggestions.sort(suggestionSorter).forEach((suggestion) => {
        if (index < suggestion.start) {
            nodes.push(doc.createTextNode(text.slice(index, suggestion.start)));
        }
        nodes.push(makeWarningElement(doc, suggestion, editor));
        index = suggestion.stop;
    });
    if (index < text.length) {
        nodes.push(doc.createTextNode(text.slice(index)));
    }
    return nodes;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function suggestionSorter(a, b) {
    if (a.start < b.start) {
        return -1;
    }
    if (a.start > b.start) {
        return 1;
    }
    return 0;
}
/**
 * @param {?} document
 * @param {?} suggestion
 * @param {?} editor
 * @return {?}
 */
function makeWarningElement(document, suggestion, editor) {
    /** @type {?} */
    const warning = document.createElement('span');
    /** @type {?} */
    const textNodeForMatchedWord = document.createTextNode(suggestion.problematicTerm);
    warning.appendChild(textNodeForMatchedWord);
    /** @type {?} */
    const inclusionArgs = {
        offset: 50,
        suggestion,
    };
    warning.onclick = () => {
        editor.fire('inclusion', inclusionArgs, editor);
    };
    /** @type {?} */
    const spanStyles = {
        display: 'inline-block',
        cursor: 'pointer',
        'border-bottom': '2px dashed gold',
        'border-right': '2px dashed gold',
        'font-style': 'normal',
        background: '#ffef94',
        padding: '0px 4px',
    };
    /** @type {?} */
    const style = Object.entries(spanStyles)
        .map((property) => property.join(' : '))
        .join(';');
    /** @type {?} */
    const spanAttributes = {
        style,
        id: suggestion.id,
        class: 'inclusion-helper-warning',
    };
    Object.entries(spanAttributes).forEach(([key, value]) => {
        warning.setAttribute(key, value);
    });
    return warning;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVzaW9uLWhlbHBlci1wbHVnaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvcGx1Z2lucy9pbmNsdXNpb24taGVscGVyL2luY2x1c2lvbi1oZWxwZXItcGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxLQUFLLFdBQVcsTUFBTSxRQUFRLENBQUM7O01BQ2hDLE1BQU0sR0FBRyxDQUFDLG1CQUFLLFdBQVcsRUFBQSxDQUFDLENBQUMsT0FBTyxJQUFJLFdBQVc7O0FBQ3hELE9BQU8sS0FBSyxPQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxLQUFLLFFBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFL0IsTUFBTSxVQUFVLElBQUksQ0FBQyxNQUFjOztVQUMzQixTQUFTLEdBQUcsTUFBTSxFQUFFO1NBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDWixHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ2IsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7VUFFWCxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUU7SUFDbkMsYUFBYTtTQUNWLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7U0FDQSxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7Y0FDN0IsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDbkMsSUFB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QUFFLFNBQVM7S0FDbkI7O1VBQ0ssS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3JDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QyxJQUFJLENBQUMsR0FBRyxDQUFDOztVQUVOLGNBQWMsR0FBRztRQUNyQixLQUFLO1FBQ0wsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQ2pCLEtBQUssRUFBRSwwQkFBMEI7S0FDbEM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7UUFDdEQsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yLCBJbmNsdXNpb25TdWdnZXN0aW9uQXJncywgU3VnZ2VzdGlvbiB9IGZyb20gJy4uLy4uL2VkaXRvci10eXBlcyc7XG4vLyBpbXBvcnQgKiBhcyB1bmlmaWVkUHJveHkgZnJvbSAndW5pZmllZCc7XG4vLyBjb25zdCB1bmlmaWVkID0gKDxhbnk+dW5pZmllZFByb3h5KS5kZWZhdWx0IHx8IHVuaWZpZWRQcm94eTsgLy8gd29ya2Fyb3VuZCBmb3IgYSBkZWxpZ2h0ZnVsbHkgdGVycmlibGUgcm9sbHVwIGlzc3VlXG4vLyBjb25zdCB1bmlmaWVkID0gcmVxdWlyZSgndW5pZmllZCcpO1xuaW1wb3J0ICogYXMgcmV0ZXh0UHJveHkgZnJvbSAncmV0ZXh0JztcbmNvbnN0IHJldGV4dCA9ICg8YW55PnJldGV4dFByb3h5KS5kZWZhdWx0IHx8IHJldGV4dFByb3h5OyAvLyB3b3JrYXJvdW5kIGZvciBhIGRlbGlnaHRmdWxseSB0ZXJyaWJsZSByb2xsdXAgaXNzdWVcbmltcG9ydCAqIGFzIGVuZ2xpc2ggZnJvbSAncmV0ZXh0LWVuZ2xpc2gnO1xuaW1wb3J0ICogYXMgZXF1YWxpdHkgZnJvbSAncmV0ZXh0LWVxdWFsaXR5JztcbmltcG9ydCAqIGFzIHN0cmluZ2lmeSBmcm9tICdyZXRleHQtc3RyaW5naWZ5JztcbmltcG9ydCB7IFZGaWxlIH0gZnJvbSAndmZpbGUnO1xuaW1wb3J0IHsgUHJvY2Vzc29yIH0gZnJvbSAndW5pZmllZCc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoZWRpdG9yOiBFZGl0b3IpOiB2b2lkIHtcbiAgY29uc3QgcHJvY2Vzc29yID0gcmV0ZXh0KClcbiAgICAudXNlKGVuZ2xpc2gpXG4gICAgLnVzZShlcXVhbGl0eSlcbiAgICAudXNlKHN0cmluZ2lmeSk7XG5cbiAgY29uc3QgY2hhbmdlU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gIGNoYW5nZVN1YmplY3RcbiAgICAucGlwZShcbiAgICAgIHRocm90dGxlVGltZSg3MDApLFxuICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnY2hhbmdlIGV2ZW50JywgZXZlbnQpO1xuICAgICAgY29uc3QgYm9keSA9IGVkaXRvci5kb2N1bWVudC4kLmJvZHk7XG4gICAgICB3YWxrKGJvZHksIGVkaXRvciwgcHJvY2Vzc29yKTtcbiAgICB9KTtcblxuICBlZGl0b3Iub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgIC8vIGZyb21FdmVudCBvbiBlZGl0b3Igb3IgZG9jdW1lbnQgZG9lc24ndCB3b3JrIC9zaHJ1ZyBlbW9qaVxuICAgIGNoYW5nZVN1YmplY3QubmV4dChldmVudCk7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiB3YWxrKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBlZGl0b3I6IEVkaXRvciwgcHJvY2Vzc29yOiBQcm9jZXNzb3IpIHtcbiAgYXdhaXQgdmVyaWZ5RXhpc3RpbmdXYXJuaW5ncyhlbGVtZW50Lm93bmVyRG9jdW1lbnQsIHByb2Nlc3Nvcik7XG5cbiAgZmxhdHRlbkNoaWxkTm9kZXMoZWxlbWVudCwgJ2luY2x1c2lvbi1oZWxwZXItd2FybmluZycpXG4gICAgLmZpbHRlcigobm9kZTogTm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpXG4gICAgLmZvckVhY2goKGl0ZW0pID0+IHBhcnNlQW5kQWRkU3VnZ2VzdGlvbnMoaXRlbSwgZWRpdG9yLCBwcm9jZXNzb3IpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RXhpc3RpbmdXYXJuaW5ncyhkb2N1bWVudDogRG9jdW1lbnQsIHByb2Nlc3NvcjogUHJvY2Vzc29yKSB7XG4gIGF3YWl0IFByb21pc2UuYWxsKFxuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW5jbHVzaW9uLWhlbHBlci13YXJuaW5nJykpLm1hcChhc3luYyAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCB2ZmlsZTogVkZpbGUgPSBhd2FpdCBwcm9jZXNzb3IucHJvY2Vzcyh0ZXh0KTtcbiAgICAgIGlmICh2ZmlsZS5tZXNzYWdlcy5sZW5ndGggIT09IDEgfHwgdmZpbGUubWVzc2FnZXNbMF0ubG9jYXRpb24uZW5kLm9mZnNldCAhPT0gdGV4dC5sZW5ndGgpIHtcbiAgICAgICAgcmVtb3ZlV2FybmluZyhlbGVtZW50LCBkb2N1bWVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfSksXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVdhcm5pbmcoZWxlbWVudDogRWxlbWVudCwgZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgcGFyZW50LnJlcGxhY2VDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50LnRleHRDb250ZW50KSwgZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5DaGlsZE5vZGVzKHBhcmVudDogTm9kZSB8IEhUTUxFbGVtZW50LCBmaWx0ZXI/OiBzdHJpbmcpOiBOb2RlW10ge1xuICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpLmZpbHRlcigoY2hpbGQ6IE5vZGUgfCBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICh7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNoaWxkLCAnY2xhc3NOYW1lJykgJiYgZmlsdGVyKSB7XG4gICAgICByZXR1cm4gIShjaGlsZCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIGlmIChjaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gW3BhcmVudF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtwYXJlbnQsIC4uLmZsYXR0ZW4oY2hpbGRyZW4ubWFwKChuKSA9PiBmbGF0dGVuQ2hpbGROb2RlcyhuLCAnaW5jbHVzaW9uLWhlbHBlci13YXJuaW5nJykpKV07XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdHRlbjxUPihhOiBUW11bXSk6IFRbXSB7XG4gIHJldHVybiBhLnJlZHVjZSgocHJldiwgbmV4dCkgPT4gWy4uLihBcnJheS5pc0FycmF5KHByZXYpID8gcHJldiA6IFtwcmV2XSksIC4uLihBcnJheS5pc0FycmF5KG5leHQpID8gbmV4dCA6IFtuZXh0XSldKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3VnZ2VzdGlvbnModmZpbGU6IFZGaWxlLCB0ZXh0KTogU3VnZ2VzdGlvbltdIHtcbiAgaWYgKCF2ZmlsZS5tZXNzYWdlcyAmJiB2ZmlsZS5tZXNzYWdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgcmV0dXJuIHZmaWxlLm1lc3NhZ2VzXG4gICAgLm1hcCgodm1lc3NhZ2UpID0+IHtcbiAgICAgIGNvbnN0IHN1Z2dlc3RlZFJlcGxhY2VtZW50cyA9IHZtZXNzYWdlLm1lc3NhZ2UubWF0Y2goL2AoW15gXSopYC9nKS5tYXAoKHMpID0+IHMucmVwbGFjZSgvYC9nLCAnJykpO1xuICAgICAgY29uc3QgcHJvYmxlbWF0aWNUZXJtID0gc3VnZ2VzdGVkUmVwbGFjZW1lbnRzLnNoaWZ0KCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogdm1lc3NhZ2UubG9jYXRpb24uc3RhcnQub2Zmc2V0LFxuICAgICAgICBzdG9wOiB2bWVzc2FnZS5sb2NhdGlvbi5lbmQub2Zmc2V0LFxuICAgICAgICBpZDogdm1lc3NhZ2UubmFtZSArIHByb2JsZW1hdGljVGVybSxcbiAgICAgICAgcHJvYmxlbWF0aWNUZXJtLFxuICAgICAgICBzdWdnZXN0ZWRSZXBsYWNlbWVudHMsXG4gICAgICAgIGV4cGxhbmF0aW9uOiBtYWtlRXhwbGFuYXRpb24oc3VnZ2VzdGVkUmVwbGFjZW1lbnRzLCBwcm9ibGVtYXRpY1Rlcm0pLFxuICAgICAgfTtcbiAgICB9KVxuICAgIC5jb25jYXQoZ2V0Q3VzdG9tU3VnZ2VzdGlvbnModGV4dCkpO1xufVxuXG5mdW5jdGlvbiBtYWtlRXhwbGFuYXRpb24oc3VnZ2VzdGVkUmVwbGFjZW1lbnRzOiBzdHJpbmdbXSwgcHJvYmxlbWF0aWNUZXJtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgcmVwbGFjZW1lbnRzO1xuICBpZiAoc3VnZ2VzdGVkUmVwbGFjZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJlcGxhY2VtZW50cyA9IHN1Z2dlc3RlZFJlcGxhY2VtZW50cy5tYXAoKHQpID0+IGBcIiR7dH1cImApLnBvcCgpO1xuICB9IGVsc2UgaWYgKHN1Z2dlc3RlZFJlcGxhY2VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICByZXBsYWNlbWVudHMgPSBzdWdnZXN0ZWRSZXBsYWNlbWVudHMubWFwKCh0KSA9PiBgXCIke3R9XCJgKS5qb2luKCcgb3IgJyk7XG4gIH0gZWxzZSBpZiAoc3VnZ2VzdGVkUmVwbGFjZW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICByZXBsYWNlbWVudHMgPSBgJHtzdWdnZXN0ZWRSZXBsYWNlbWVudHNcbiAgICAgIC5zbGljZSgwLCAtMSlcbiAgICAgIC5tYXAoKHQpID0+IGBcIiR7dH1cImApXG4gICAgICAuam9pbignLCAnKX0sIG9yICR7c3VnZ2VzdGVkUmVwbGFjZW1lbnRzLnNsaWNlKC0xKS5tYXAoKHQpID0+IGBcIiR7dH1cImApfWA7XG4gIH1cbiAgcmV0dXJuIGBcIiR7cHJvYmxlbWF0aWNUZXJtfVwiIGlzIHBvdGVudGlhbGx5IGEgbGVzcyBpbmNsdXNpdmUgdGVybSB0aGFuICR7cmVwbGFjZW1lbnRzfWA7XG59XG5cbmZ1bmN0aW9uIGdldEN1c3RvbVN1Z2dlc3Rpb25zKHRleHQ6IHN0cmluZyk6IFN1Z2dlc3Rpb25bXSB7XG4gIGNvbnN0IGN1c3RvbUxpc3QgPSBbXG4gICAgeyB0ZXJtOiAnc3VwZXJpb3InLCByZXBsYWNlbWVudDogJ2V4Y2VsbGVudCcgfSxcbiAgICB7IHRlcm06ICdib2FzdHMnLCByZXBsYWNlbWVudDogJ2hhcycgfSxcbiAgICB7IHRlcm06ICcgY291cmFnZW91c2x5JywgcmVwbGFjZW1lbnQ6ICcsIHdpdGggcGx1Y2sgYW5kIGdyaXQsJyB9LFxuICAgIHsgdGVybTogJ2RvbWluYXRlJywgcmVwbGFjZW1lbnQ6ICd0aHJpdmUnfSxcbiAgICB7IHRlcm06ICdob3N0aWxlJywgcmVwbGFjZW1lbnQ6ICdkaWZmaWN1bHQnfSxcbiAgXTtcbiAgcmV0dXJuIGN1c3RvbUxpc3RcbiAgICAuZmlsdGVyKCh7IHRlcm0gfSkgPT4gdGV4dC5pbmNsdWRlcyh0ZXJtKSlcbiAgICAubWFwKCh7IHRlcm0sIHJlcGxhY2VtZW50IH0pID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiB0ZXh0LmluZGV4T2YodGVybSksXG4gICAgICAgIHN0b3A6IHRleHQuaW5kZXhPZih0ZXJtKSArIHRlcm0ubGVuZ3RoLFxuICAgICAgICBpZDogdGVybSxcbiAgICAgICAgcHJvYmxlbWF0aWNUZXJtOiB0ZXJtLFxuICAgICAgICBzdWdnZXN0ZWRSZXBsYWNlbWVudHM6IFtyZXBsYWNlbWVudF0sXG4gICAgICAgIGV4cGxhbmF0aW9uOiBtYWtlRXhwbGFuYXRpb24oW3JlcGxhY2VtZW50XSwgdGVybSksXG4gICAgICB9O1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwYXJzZUFuZEFkZFN1Z2dlc3Rpb25zKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgTm9kZSwgZWRpdG9yOiBFZGl0b3IsIHByb2Nlc3NvcjogUHJvY2Vzc29yKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGRvYyA9IGVsZW1lbnQub3duZXJEb2N1bWVudDtcbiAgY29uc3QgdGV4dCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuICBjb25zdCB2ZmlsZTogVkZpbGUgPSBhd2FpdCBwcm9jZXNzb3IucHJvY2Vzcyh0ZXh0KTtcbiAgLy8gY29uc29sZS5sb2codmZpbGUpO1xuICBjb25zdCBzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdID0gZ2V0U3VnZ2VzdGlvbnModmZpbGUsIHRleHQpLmZpbHRlcigoc3VnZ2VzdGlvbikgPT4ge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlZGl0b3IuZGlzbWlzc2VkVGVybXMpIHx8IGVkaXRvci5kaXNtaXNzZWRUZXJtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gIWVkaXRvci5kaXNtaXNzZWRUZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICByZXR1cm4gdGVybSA9PT0gc3VnZ2VzdGlvbi5wcm9ibGVtYXRpY1Rlcm07XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChzdWdnZXN0aW9ucy5sZW5ndGggJiYgIShwYXJlbnQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZS5pbmNsdWRlcygnaW5jbHVzaW9uLWhlbHBlci13YXJuaW5nJykpIHtcbiAgICAvLyBmb3IgcmVhY2ggc3VnZ2VzdGlvbiwgc3BsaWNlIGl0IGludG8gdGhlIHRoaW5nXG4gICAgY29uc3Qgb2Zmc2V0OiBudW1iZXIgfCB1bmRlZmluZWQgPSBnZXRTZWxlY3Rpb24oZG9jLCBlbGVtZW50KTtcblxuICAgIHNwbGl0SW50b05vZGVzKHN1Z2dlc3Rpb25zLCB0ZXh0LCBkb2MsIGVkaXRvcikuZm9yRWFjaCgobm9kZSkgPT4gcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCBlbGVtZW50IGFzIENoaWxkTm9kZSkpO1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKG9mZnNldCkpIHtcbiAgICAgIHNldFNlbGVjdGlvbihkb2MsIG9mZnNldCwgcGFyZW50KTtcbiAgICB9XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGlvbihkb2M6IERvY3VtZW50LCBlbGVtZW50KTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgY29uc3Qgc2VsZWN0aW9uOiBTZWxlY3Rpb24gPSBkb2MuZ2V0U2VsZWN0aW9uKCk7XG4gIGlmIChzZWxlY3Rpb24uZm9jdXNOb2RlID09PSBlbGVtZW50IHx8IHNlbGVjdGlvbi5hbmNob3JOb2RlID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvbi5mb2N1c09mZnNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRTZWxlY3Rpb24oZG9jOiBEb2N1bWVudCwgbG9jYXRpb246IG51bWJlciwgcGFyZW50OiBOb2RlICYgUGFyZW50Tm9kZSkge1xuICBjb25zdCBzZWxlY3Rpb24gPSBkb2MuZ2V0U2VsZWN0aW9uKCk7XG4gIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcblxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNlbGVjdE5vZGUocGFyZW50KTtcblxuICBzZWxlY3Rpb24uYWRkUmFuZ2UocmFuZ2UpO1xuICBzZWxlY3Rpb24uY29sbGFwc2VUb0VuZCgpO1xufVxuXG5mdW5jdGlvbiBzcGxpdEludG9Ob2RlcyhzdWdnZXN0aW9uczogU3VnZ2VzdGlvbltdLCB0ZXh0OiBzdHJpbmcsIGRvYywgZWRpdG9yKTogKE5vZGUgfCBIVE1MRWxlbWVudClbXSB7XG4gIGNvbnN0IG5vZGVzID0gW107XG4gIGxldCBpbmRleCA9IDA7XG4gIHN1Z2dlc3Rpb25zLnNvcnQoc3VnZ2VzdGlvblNvcnRlcikuZm9yRWFjaCgoc3VnZ2VzdGlvbikgPT4ge1xuICAgIGlmIChpbmRleCA8IHN1Z2dlc3Rpb24uc3RhcnQpIHtcbiAgICAgIG5vZGVzLnB1c2goZG9jLmNyZWF0ZVRleHROb2RlKHRleHQuc2xpY2UoaW5kZXgsIHN1Z2dlc3Rpb24uc3RhcnQpKSk7XG4gICAgfVxuICAgIG5vZGVzLnB1c2gobWFrZVdhcm5pbmdFbGVtZW50KGRvYywgc3VnZ2VzdGlvbiwgZWRpdG9yKSk7XG4gICAgaW5kZXggPSBzdWdnZXN0aW9uLnN0b3A7XG4gIH0pO1xuXG4gIGlmIChpbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgbm9kZXMucHVzaChkb2MuY3JlYXRlVGV4dE5vZGUodGV4dC5zbGljZShpbmRleCkpKTtcbiAgfVxuXG4gIHJldHVybiBub2Rlcztcbn1cblxuZnVuY3Rpb24gc3VnZ2VzdGlvblNvcnRlcihhOiBTdWdnZXN0aW9uLCBiOiBTdWdnZXN0aW9uKTogbnVtYmVyIHtcbiAgaWYgKGEuc3RhcnQgPCBiLnN0YXJ0KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIGlmIChhLnN0YXJ0ID4gYi5zdGFydCkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIHJldHVybiAwO1xufVxuXG5mdW5jdGlvbiBtYWtlV2FybmluZ0VsZW1lbnQoZG9jdW1lbnQ6IERvY3VtZW50LCBzdWdnZXN0aW9uOiBTdWdnZXN0aW9uLCBlZGl0b3I6IEVkaXRvcik6IEhUTUxFbGVtZW50IHtcbiAgY29uc3Qgd2FybmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgdGV4dE5vZGVGb3JNYXRjaGVkV29yZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN1Z2dlc3Rpb24ucHJvYmxlbWF0aWNUZXJtKTtcblxuICB3YXJuaW5nLmFwcGVuZENoaWxkKHRleHROb2RlRm9yTWF0Y2hlZFdvcmQpO1xuXG4gIGNvbnN0IGluY2x1c2lvbkFyZ3M6IEluY2x1c2lvblN1Z2dlc3Rpb25BcmdzID0ge1xuICAgIG9mZnNldDogNTAsXG4gICAgc3VnZ2VzdGlvbixcbiAgfTtcblxuICB3YXJuaW5nLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgZWRpdG9yLmZpcmUoJ2luY2x1c2lvbicsIGluY2x1c2lvbkFyZ3MsIGVkaXRvcik7XG4gIH07XG4gIGNvbnN0IHNwYW5TdHlsZXMgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgJ2JvcmRlci1ib3R0b20nOiAnMnB4IGRhc2hlZCBnb2xkJyxcbiAgICAnYm9yZGVyLXJpZ2h0JzogJzJweCBkYXNoZWQgZ29sZCcsXG4gICAgJ2ZvbnQtc3R5bGUnOiAnbm9ybWFsJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZWY5NCcsXG4gICAgcGFkZGluZzogJzBweCA0cHgnLFxuICB9O1xuICBjb25zdCBzdHlsZSA9IE9iamVjdC5lbnRyaWVzKHNwYW5TdHlsZXMpXG4gICAgLm1hcCgocHJvcGVydHkpID0+IHByb3BlcnR5LmpvaW4oJyA6ICcpKVxuICAgIC5qb2luKCc7Jyk7XG5cbiAgY29uc3Qgc3BhbkF0dHJpYnV0ZXMgPSB7XG4gICAgc3R5bGUsXG4gICAgaWQ6IHN1Z2dlc3Rpb24uaWQsXG4gICAgY2xhc3M6ICdpbmNsdXNpb24taGVscGVyLXdhcm5pbmcnLFxuICB9O1xuICBPYmplY3QuZW50cmllcyhzcGFuQXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgd2FybmluZy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH0pO1xuXG4gIHJldHVybiB3YXJuaW5nO1xufVxuIl19