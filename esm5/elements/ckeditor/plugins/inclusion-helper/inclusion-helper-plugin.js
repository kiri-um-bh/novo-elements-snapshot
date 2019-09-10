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
var retext = ((/** @type {?} */ (retextProxy))).default || retextProxy;
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
    var processor = retext()
        .use(english)
        .use(equality)
        .use(stringify);
    /** @type {?} */
    var changeSubject = new Subject();
    changeSubject
        .pipe(throttleTime(700), debounceTime(300))
        .subscribe(function (event) {
        console.log('change event', event);
        /** @type {?} */
        var body = editor.document.$.body;
        walk(body, editor, processor);
    });
    editor.on('change', function (event) {
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, verifyExistingWarnings(element.ownerDocument, processor)];
                case 1:
                    _a.sent();
                    flattenChildNodes(element, 'inclusion-helper-warning')
                        .filter(function (node) { return node.nodeType === Node.TEXT_NODE; })
                        .forEach(function (item) { return parseAndAddSuggestions(item, editor, processor); });
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * @param {?} document
 * @param {?} processor
 * @return {?}
 */
function verifyExistingWarnings(document, processor) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(Array.from(document.getElementsByClassName('inclusion-helper-warning')).map(function (element) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var text, vfile;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    text = element.textContent;
                                    return [4 /*yield*/, processor.process(text)];
                                case 1:
                                    vfile = _a.sent();
                                    if (vfile.messages.length !== 1 || vfile.messages[0].location.end.offset !== text.length) {
                                        removeWarning(element, document);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * @param {?} element
 * @param {?} document
 * @return {?}
 */
function removeWarning(element, document) {
    /** @type {?} */
    var parent = element.parentNode;
    parent.replaceChild(document.createTextNode(element.textContent), element);
}
/**
 * @param {?} parent
 * @param {?=} filter
 * @return {?}
 */
function flattenChildNodes(parent, filter) {
    /** @type {?} */
    var children = Array.from(parent.childNodes).filter(function (child) {
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
        return tslib_1.__spread([parent], flatten(children.map(function (n) { return flattenChildNodes(n, 'inclusion-helper-warning'); })));
    }
}
/**
 * @template T
 * @param {?} a
 * @return {?}
 */
function flatten(a) {
    return a.reduce(function (prev, next) { return tslib_1.__spread((Array.isArray(prev) ? prev : [prev]), (Array.isArray(next) ? next : [next])); });
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
        .map(function (vmessage) {
        /** @type {?} */
        var suggestedReplacements = vmessage.message.match(/`([^`]*)`/g).map(function (s) { return s.replace(/`/g, ''); });
        /** @type {?} */
        var problematicTerm = suggestedReplacements.shift();
        return {
            start: vmessage.location.start.offset,
            stop: vmessage.location.end.offset,
            id: vmessage.name + problematicTerm,
            problematicTerm: problematicTerm,
            suggestedReplacements: suggestedReplacements,
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
    var replacements;
    if (suggestedReplacements.length === 1) {
        replacements = suggestedReplacements.map(function (t) { return "\"" + t + "\""; }).pop();
    }
    else if (suggestedReplacements.length === 2) {
        replacements = suggestedReplacements.map(function (t) { return "\"" + t + "\""; }).join(' or ');
    }
    else if (suggestedReplacements.length > 2) {
        replacements = suggestedReplacements
            .slice(0, -1)
            .map(function (t) { return "\"" + t + "\""; })
            .join(', ') + ", or " + suggestedReplacements.slice(-1).map(function (t) { return "\"" + t + "\""; });
    }
    return "\"" + problematicTerm + "\" is potentially a less inclusive term than " + replacements;
}
/**
 * @param {?} text
 * @return {?}
 */
function getCustomSuggestions(text) {
    /** @type {?} */
    var customList = [
        { term: 'superior', replacement: 'excellent' },
        { term: 'boasts', replacement: 'has' },
        { term: ' courageously', replacement: ', with pluck and grit,' },
        { term: 'dominate', replacement: 'thrive' },
        { term: 'hostile', replacement: 'difficult' },
    ];
    return customList
        .filter(function (_a) {
        var term = _a.term;
        return text.includes(term);
    })
        .map(function (_a) {
        var term = _a.term, replacement = _a.replacement;
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var doc, text, parent, vfile, suggestions, offset;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    doc = element.ownerDocument;
                    text = element.textContent;
                    parent = element.parentNode;
                    return [4 /*yield*/, processor.process(text)];
                case 1:
                    vfile = _a.sent();
                    // console.log(vfile);
                    suggestions = getSuggestions(vfile, text).filter(function (suggestion) {
                        if (!Array.isArray(editor.dismissedTerms) || editor.dismissedTerms.length === 0) {
                            return true;
                        }
                        return !editor.dismissedTerms.find(function (term) {
                            return term === suggestion.problematicTerm;
                        });
                    });
                    if (suggestions.length && !((/** @type {?} */ (parent))).className.includes('inclusion-helper-warning')) {
                        // for reach suggestion, splice it into the thing
                        offset = getSelection(doc, element);
                        splitIntoNodes(suggestions, text, doc, editor).forEach(function (node) { return parent.insertBefore(node, (/** @type {?} */ (element))); });
                        if (Number.isInteger(offset)) {
                            setSelection(doc, offset, parent);
                        }
                        parent.removeChild(element);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * @param {?} doc
 * @param {?} element
 * @return {?}
 */
function getSelection(doc, element) {
    /** @type {?} */
    var selection = doc.getSelection();
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
    var selection = doc.getSelection();
    selection.removeAllRanges();
    /** @type {?} */
    var range = document.createRange();
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
    var nodes = [];
    /** @type {?} */
    var index = 0;
    suggestions.sort(suggestionSorter).forEach(function (suggestion) {
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
    var warning = document.createElement('span');
    /** @type {?} */
    var textNodeForMatchedWord = document.createTextNode(suggestion.problematicTerm);
    warning.appendChild(textNodeForMatchedWord);
    /** @type {?} */
    var inclusionArgs = {
        offset: 50,
        suggestion: suggestion,
    };
    warning.onclick = function () {
        editor.fire('inclusion', inclusionArgs, editor);
    };
    /** @type {?} */
    var spanStyles = {
        display: 'inline-block',
        cursor: 'pointer',
        'border-bottom': '2px dashed gold',
        'border-right': '2px dashed gold',
        'font-style': 'normal',
        background: '#ffef94',
        padding: '0px 4px',
    };
    /** @type {?} */
    var style = Object.entries(spanStyles)
        .map(function (property) { return property.join(' : '); })
        .join(';');
    /** @type {?} */
    var spanAttributes = {
        style: style,
        id: suggestion.id,
        class: 'inclusion-helper-warning',
    };
    Object.entries(spanAttributes).forEach(function (_a) {
        var _b = tslib_1.__read(_a, 2), key = _b[0], value = _b[1];
        warning.setAttribute(key, value);
    });
    return warning;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVzaW9uLWhlbHBlci1wbHVnaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ub3ZvLWVsZW1lbnRzLyIsInNvdXJjZXMiOlsiZWxlbWVudHMvY2tlZGl0b3IvcGx1Z2lucy9pbmNsdXNpb24taGVscGVyL2luY2x1c2lvbi1oZWxwZXItcGx1Z2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxLQUFLLFdBQVcsTUFBTSxRQUFRLENBQUM7O0lBQ2hDLE1BQU0sR0FBRyxDQUFDLG1CQUFLLFdBQVcsRUFBQSxDQUFDLENBQUMsT0FBTyxJQUFJLFdBQVc7O0FBQ3hELE9BQU8sS0FBSyxPQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxLQUFLLFFBQVEsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssU0FBUyxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFL0IsTUFBTSxVQUFVLElBQUksQ0FBQyxNQUFjOztRQUMzQixTQUFTLEdBQUcsTUFBTSxFQUFFO1NBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDWixHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ2IsR0FBRyxDQUFDLFNBQVMsQ0FBQzs7UUFFWCxhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUU7SUFDbkMsYUFBYTtTQUNWLElBQUksQ0FDSCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEI7U0FDQSxTQUFTLENBQUMsVUFBQyxLQUFLO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7O1lBQzdCLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ25DLElBQUksQ0FBQyxJQUFJ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QUFFLFNBQVM7UUFDckIsT0FBTyxFQUFFLFNBQVM7S0FDbkI7O1FBQ0ssS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3JDLEdBQUcsQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUM7U0FDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7UUFFTixjQUFjLEdBQUc7UUFDckIsS0FBSyxPQUFBO1FBQ0wsRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFO1FBQ2pCLEtBQUssRUFBRSwwQkFBMEI7S0FDbEM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVk7WUFBWiwwQkFBWSxFQUFYLFdBQUcsRUFBRSxhQUFLO1FBQ2pELE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRvciwgSW5jbHVzaW9uU3VnZ2VzdGlvbkFyZ3MsIFN1Z2dlc3Rpb24gfSBmcm9tICcuLi8uLi9lZGl0b3ItdHlwZXMnO1xuLy8gaW1wb3J0ICogYXMgdW5pZmllZFByb3h5IGZyb20gJ3VuaWZpZWQnO1xuLy8gY29uc3QgdW5pZmllZCA9ICg8YW55PnVuaWZpZWRQcm94eSkuZGVmYXVsdCB8fCB1bmlmaWVkUHJveHk7IC8vIHdvcmthcm91bmQgZm9yIGEgZGVsaWdodGZ1bGx5IHRlcnJpYmxlIHJvbGx1cCBpc3N1ZVxuLy8gY29uc3QgdW5pZmllZCA9IHJlcXVpcmUoJ3VuaWZpZWQnKTtcbmltcG9ydCAqIGFzIHJldGV4dFByb3h5IGZyb20gJ3JldGV4dCc7XG5jb25zdCByZXRleHQgPSAoPGFueT5yZXRleHRQcm94eSkuZGVmYXVsdCB8fCByZXRleHRQcm94eTsgLy8gd29ya2Fyb3VuZCBmb3IgYSBkZWxpZ2h0ZnVsbHkgdGVycmlibGUgcm9sbHVwIGlzc3VlXG5pbXBvcnQgKiBhcyBlbmdsaXNoIGZyb20gJ3JldGV4dC1lbmdsaXNoJztcbmltcG9ydCAqIGFzIGVxdWFsaXR5IGZyb20gJ3JldGV4dC1lcXVhbGl0eSc7XG5pbXBvcnQgKiBhcyBzdHJpbmdpZnkgZnJvbSAncmV0ZXh0LXN0cmluZ2lmeSc7XG5pbXBvcnQgeyBWRmlsZSB9IGZyb20gJ3ZmaWxlJztcbmltcG9ydCB7IFByb2Nlc3NvciB9IGZyb20gJ3VuaWZpZWQnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KGVkaXRvcjogRWRpdG9yKTogdm9pZCB7XG4gIGNvbnN0IHByb2Nlc3NvciA9IHJldGV4dCgpXG4gICAgLnVzZShlbmdsaXNoKVxuICAgIC51c2UoZXF1YWxpdHkpXG4gICAgLnVzZShzdHJpbmdpZnkpO1xuXG4gIGNvbnN0IGNoYW5nZVN1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICBjaGFuZ2VTdWJqZWN0XG4gICAgLnBpcGUoXG4gICAgICB0aHJvdHRsZVRpbWUoNzAwKSxcbiAgICAgIGRlYm91bmNlVGltZSgzMDApLFxuICAgIClcbiAgICAuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBldmVudCcsIGV2ZW50KTtcbiAgICAgIGNvbnN0IGJvZHkgPSBlZGl0b3IuZG9jdW1lbnQuJC5ib2R5O1xuICAgICAgd2Fsayhib2R5LCBlZGl0b3IsIHByb2Nlc3Nvcik7XG4gICAgfSk7XG5cbiAgZWRpdG9yLm9uKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAvLyBmcm9tRXZlbnQgb24gZWRpdG9yIG9yIGRvY3VtZW50IGRvZXNuJ3Qgd29yayAvc2hydWcgZW1vamlcbiAgICBjaGFuZ2VTdWJqZWN0Lm5leHQoZXZlbnQpO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gd2FsayhlbGVtZW50OiBIVE1MRWxlbWVudCwgZWRpdG9yOiBFZGl0b3IsIHByb2Nlc3NvcjogUHJvY2Vzc29yKSB7XG4gIGF3YWl0IHZlcmlmeUV4aXN0aW5nV2FybmluZ3MoZWxlbWVudC5vd25lckRvY3VtZW50LCBwcm9jZXNzb3IpO1xuXG4gIGZsYXR0ZW5DaGlsZE5vZGVzKGVsZW1lbnQsICdpbmNsdXNpb24taGVscGVyLXdhcm5pbmcnKVxuICAgIC5maWx0ZXIoKG5vZGU6IE5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKVxuICAgIC5mb3JFYWNoKChpdGVtKSA9PiBwYXJzZUFuZEFkZFN1Z2dlc3Rpb25zKGl0ZW0sIGVkaXRvciwgcHJvY2Vzc29yKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeUV4aXN0aW5nV2FybmluZ3MoZG9jdW1lbnQ6IERvY3VtZW50LCBwcm9jZXNzb3I6IFByb2Nlc3Nvcikge1xuICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2luY2x1c2lvbi1oZWxwZXItd2FybmluZycpKS5tYXAoYXN5bmMgKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgdmZpbGU6IFZGaWxlID0gYXdhaXQgcHJvY2Vzc29yLnByb2Nlc3ModGV4dCk7XG4gICAgICBpZiAodmZpbGUubWVzc2FnZXMubGVuZ3RoICE9PSAxIHx8IHZmaWxlLm1lc3NhZ2VzWzBdLmxvY2F0aW9uLmVuZC5vZmZzZXQgIT09IHRleHQubGVuZ3RoKSB7XG4gICAgICAgIHJlbW92ZVdhcm5pbmcoZWxlbWVudCwgZG9jdW1lbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0pLFxuICApO1xufVxuXG5mdW5jdGlvbiByZW1vdmVXYXJuaW5nKGVsZW1lbnQ6IEVsZW1lbnQsIGRvY3VtZW50OiBEb2N1bWVudCkge1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIHBhcmVudC5yZXBsYWNlQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudC50ZXh0Q29udGVudCksIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQ2hpbGROb2RlcyhwYXJlbnQ6IE5vZGUgfCBIVE1MRWxlbWVudCwgZmlsdGVyPzogc3RyaW5nKTogTm9kZVtdIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKS5maWx0ZXIoKGNoaWxkOiBOb2RlIHwgSFRNTEVsZW1lbnQpID0+IHtcbiAgICBpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChjaGlsZCwgJ2NsYXNzTmFtZScpICYmIGZpbHRlcikge1xuICAgICAgcmV0dXJuICEoY2hpbGQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZS5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICBpZiAoY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFtwYXJlbnRdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbcGFyZW50LCAuLi5mbGF0dGVuKGNoaWxkcmVuLm1hcCgobikgPT4gZmxhdHRlbkNoaWxkTm9kZXMobiwgJ2luY2x1c2lvbi1oZWxwZXItd2FybmluZycpKSldO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW48VD4oYTogVFtdW10pOiBUW10ge1xuICByZXR1cm4gYS5yZWR1Y2UoKHByZXYsIG5leHQpID0+IFsuLi4oQXJyYXkuaXNBcnJheShwcmV2KSA/IHByZXYgOiBbcHJldl0pLCAuLi4oQXJyYXkuaXNBcnJheShuZXh0KSA/IG5leHQgOiBbbmV4dF0pXSk7XG59XG5cbmZ1bmN0aW9uIGdldFN1Z2dlc3Rpb25zKHZmaWxlOiBWRmlsZSwgdGV4dCk6IFN1Z2dlc3Rpb25bXSB7XG4gIGlmICghdmZpbGUubWVzc2FnZXMgJiYgdmZpbGUubWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiB2ZmlsZS5tZXNzYWdlc1xuICAgIC5tYXAoKHZtZXNzYWdlKSA9PiB7XG4gICAgICBjb25zdCBzdWdnZXN0ZWRSZXBsYWNlbWVudHMgPSB2bWVzc2FnZS5tZXNzYWdlLm1hdGNoKC9gKFteYF0qKWAvZykubWFwKChzKSA9PiBzLnJlcGxhY2UoL2AvZywgJycpKTtcbiAgICAgIGNvbnN0IHByb2JsZW1hdGljVGVybSA9IHN1Z2dlc3RlZFJlcGxhY2VtZW50cy5zaGlmdCgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQ6IHZtZXNzYWdlLmxvY2F0aW9uLnN0YXJ0Lm9mZnNldCxcbiAgICAgICAgc3RvcDogdm1lc3NhZ2UubG9jYXRpb24uZW5kLm9mZnNldCxcbiAgICAgICAgaWQ6IHZtZXNzYWdlLm5hbWUgKyBwcm9ibGVtYXRpY1Rlcm0sXG4gICAgICAgIHByb2JsZW1hdGljVGVybSxcbiAgICAgICAgc3VnZ2VzdGVkUmVwbGFjZW1lbnRzLFxuICAgICAgICBleHBsYW5hdGlvbjogbWFrZUV4cGxhbmF0aW9uKHN1Z2dlc3RlZFJlcGxhY2VtZW50cywgcHJvYmxlbWF0aWNUZXJtKSxcbiAgICAgIH07XG4gICAgfSlcbiAgICAuY29uY2F0KGdldEN1c3RvbVN1Z2dlc3Rpb25zKHRleHQpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUV4cGxhbmF0aW9uKHN1Z2dlc3RlZFJlcGxhY2VtZW50czogc3RyaW5nW10sIHByb2JsZW1hdGljVGVybTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlcGxhY2VtZW50cztcbiAgaWYgKHN1Z2dlc3RlZFJlcGxhY2VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICByZXBsYWNlbWVudHMgPSBzdWdnZXN0ZWRSZXBsYWNlbWVudHMubWFwKCh0KSA9PiBgXCIke3R9XCJgKS5wb3AoKTtcbiAgfSBlbHNlIGlmIChzdWdnZXN0ZWRSZXBsYWNlbWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgcmVwbGFjZW1lbnRzID0gc3VnZ2VzdGVkUmVwbGFjZW1lbnRzLm1hcCgodCkgPT4gYFwiJHt0fVwiYCkuam9pbignIG9yICcpO1xuICB9IGVsc2UgaWYgKHN1Z2dlc3RlZFJlcGxhY2VtZW50cy5sZW5ndGggPiAyKSB7XG4gICAgcmVwbGFjZW1lbnRzID0gYCR7c3VnZ2VzdGVkUmVwbGFjZW1lbnRzXG4gICAgICAuc2xpY2UoMCwgLTEpXG4gICAgICAubWFwKCh0KSA9PiBgXCIke3R9XCJgKVxuICAgICAgLmpvaW4oJywgJyl9LCBvciAke3N1Z2dlc3RlZFJlcGxhY2VtZW50cy5zbGljZSgtMSkubWFwKCh0KSA9PiBgXCIke3R9XCJgKX1gO1xuICB9XG4gIHJldHVybiBgXCIke3Byb2JsZW1hdGljVGVybX1cIiBpcyBwb3RlbnRpYWxseSBhIGxlc3MgaW5jbHVzaXZlIHRlcm0gdGhhbiAke3JlcGxhY2VtZW50c31gO1xufVxuXG5mdW5jdGlvbiBnZXRDdXN0b21TdWdnZXN0aW9ucyh0ZXh0OiBzdHJpbmcpOiBTdWdnZXN0aW9uW10ge1xuICBjb25zdCBjdXN0b21MaXN0ID0gW1xuICAgIHsgdGVybTogJ3N1cGVyaW9yJywgcmVwbGFjZW1lbnQ6ICdleGNlbGxlbnQnIH0sXG4gICAgeyB0ZXJtOiAnYm9hc3RzJywgcmVwbGFjZW1lbnQ6ICdoYXMnIH0sXG4gICAgeyB0ZXJtOiAnIGNvdXJhZ2VvdXNseScsIHJlcGxhY2VtZW50OiAnLCB3aXRoIHBsdWNrIGFuZCBncml0LCcgfSxcbiAgICB7IHRlcm06ICdkb21pbmF0ZScsIHJlcGxhY2VtZW50OiAndGhyaXZlJ30sXG4gICAgeyB0ZXJtOiAnaG9zdGlsZScsIHJlcGxhY2VtZW50OiAnZGlmZmljdWx0J30sXG4gIF07XG4gIHJldHVybiBjdXN0b21MaXN0XG4gICAgLmZpbHRlcigoeyB0ZXJtIH0pID0+IHRleHQuaW5jbHVkZXModGVybSkpXG4gICAgLm1hcCgoeyB0ZXJtLCByZXBsYWNlbWVudCB9KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGFydDogdGV4dC5pbmRleE9mKHRlcm0pLFxuICAgICAgICBzdG9wOiB0ZXh0LmluZGV4T2YodGVybSkgKyB0ZXJtLmxlbmd0aCxcbiAgICAgICAgaWQ6IHRlcm0sXG4gICAgICAgIHByb2JsZW1hdGljVGVybTogdGVybSxcbiAgICAgICAgc3VnZ2VzdGVkUmVwbGFjZW1lbnRzOiBbcmVwbGFjZW1lbnRdLFxuICAgICAgICBleHBsYW5hdGlvbjogbWFrZUV4cGxhbmF0aW9uKFtyZXBsYWNlbWVudF0sIHRlcm0pLFxuICAgICAgfTtcbiAgICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGFyc2VBbmRBZGRTdWdnZXN0aW9ucyhlbGVtZW50OiBIVE1MRWxlbWVudCB8IE5vZGUsIGVkaXRvcjogRWRpdG9yLCBwcm9jZXNzb3I6IFByb2Nlc3Nvcik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBkb2MgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQ7XG4gIGNvbnN0IHRleHQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cbiAgY29uc3QgdmZpbGU6IFZGaWxlID0gYXdhaXQgcHJvY2Vzc29yLnByb2Nlc3ModGV4dCk7XG4gIC8vIGNvbnNvbGUubG9nKHZmaWxlKTtcbiAgY29uc3Qgc3VnZ2VzdGlvbnM6IFN1Z2dlc3Rpb25bXSA9IGdldFN1Z2dlc3Rpb25zKHZmaWxlLCB0ZXh0KS5maWx0ZXIoKHN1Z2dlc3Rpb24pID0+IHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWRpdG9yLmRpc21pc3NlZFRlcm1zKSB8fCBlZGl0b3IuZGlzbWlzc2VkVGVybXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuICFlZGl0b3IuZGlzbWlzc2VkVGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgcmV0dXJuIHRlcm0gPT09IHN1Z2dlc3Rpb24ucHJvYmxlbWF0aWNUZXJtO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoc3VnZ2VzdGlvbnMubGVuZ3RoICYmICEocGFyZW50IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWUuaW5jbHVkZXMoJ2luY2x1c2lvbi1oZWxwZXItd2FybmluZycpKSB7XG4gICAgLy8gZm9yIHJlYWNoIHN1Z2dlc3Rpb24sIHNwbGljZSBpdCBpbnRvIHRoZSB0aGluZ1xuICAgIGNvbnN0IG9mZnNldDogbnVtYmVyIHwgdW5kZWZpbmVkID0gZ2V0U2VsZWN0aW9uKGRvYywgZWxlbWVudCk7XG5cbiAgICBzcGxpdEludG9Ob2RlcyhzdWdnZXN0aW9ucywgdGV4dCwgZG9jLCBlZGl0b3IpLmZvckVhY2goKG5vZGUpID0+IHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgZWxlbWVudCBhcyBDaGlsZE5vZGUpKTtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihvZmZzZXQpKSB7XG4gICAgICBzZXRTZWxlY3Rpb24oZG9jLCBvZmZzZXQsIHBhcmVudCk7XG4gICAgfVxuICAgIHBhcmVudC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTZWxlY3Rpb24oZG9jOiBEb2N1bWVudCwgZWxlbWVudCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHNlbGVjdGlvbjogU2VsZWN0aW9uID0gZG9jLmdldFNlbGVjdGlvbigpO1xuICBpZiAoc2VsZWN0aW9uLmZvY3VzTm9kZSA9PT0gZWxlbWVudCB8fCBzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gZWxlbWVudCkge1xuICAgIHJldHVybiBzZWxlY3Rpb24uZm9jdXNPZmZzZXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0U2VsZWN0aW9uKGRvYzogRG9jdW1lbnQsIGxvY2F0aW9uOiBudW1iZXIsIHBhcmVudDogTm9kZSAmIFBhcmVudE5vZGUpIHtcbiAgY29uc3Qgc2VsZWN0aW9uID0gZG9jLmdldFNlbGVjdGlvbigpO1xuICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG5cbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICByYW5nZS5zZWxlY3ROb2RlKHBhcmVudCk7XG5cbiAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcbiAgc2VsZWN0aW9uLmNvbGxhcHNlVG9FbmQoKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRJbnRvTm9kZXMoc3VnZ2VzdGlvbnM6IFN1Z2dlc3Rpb25bXSwgdGV4dDogc3RyaW5nLCBkb2MsIGVkaXRvcik6IChOb2RlIHwgSFRNTEVsZW1lbnQpW10ge1xuICBjb25zdCBub2RlcyA9IFtdO1xuICBsZXQgaW5kZXggPSAwO1xuICBzdWdnZXN0aW9ucy5zb3J0KHN1Z2dlc3Rpb25Tb3J0ZXIpLmZvckVhY2goKHN1Z2dlc3Rpb24pID0+IHtcbiAgICBpZiAoaW5kZXggPCBzdWdnZXN0aW9uLnN0YXJ0KSB7XG4gICAgICBub2Rlcy5wdXNoKGRvYy5jcmVhdGVUZXh0Tm9kZSh0ZXh0LnNsaWNlKGluZGV4LCBzdWdnZXN0aW9uLnN0YXJ0KSkpO1xuICAgIH1cbiAgICBub2Rlcy5wdXNoKG1ha2VXYXJuaW5nRWxlbWVudChkb2MsIHN1Z2dlc3Rpb24sIGVkaXRvcikpO1xuICAgIGluZGV4ID0gc3VnZ2VzdGlvbi5zdG9wO1xuICB9KTtcblxuICBpZiAoaW5kZXggPCB0ZXh0Lmxlbmd0aCkge1xuICAgIG5vZGVzLnB1c2goZG9jLmNyZWF0ZVRleHROb2RlKHRleHQuc2xpY2UoaW5kZXgpKSk7XG4gIH1cblxuICByZXR1cm4gbm9kZXM7XG59XG5cbmZ1bmN0aW9uIHN1Z2dlc3Rpb25Tb3J0ZXIoYTogU3VnZ2VzdGlvbiwgYjogU3VnZ2VzdGlvbik6IG51bWJlciB7XG4gIGlmIChhLnN0YXJ0IDwgYi5zdGFydCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYS5zdGFydCA+IGIuc3RhcnQpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cblxuZnVuY3Rpb24gbWFrZVdhcm5pbmdFbGVtZW50KGRvY3VtZW50OiBEb2N1bWVudCwgc3VnZ2VzdGlvbjogU3VnZ2VzdGlvbiwgZWRpdG9yOiBFZGl0b3IpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IHdhcm5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHRleHROb2RlRm9yTWF0Y2hlZFdvcmQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdWdnZXN0aW9uLnByb2JsZW1hdGljVGVybSk7XG5cbiAgd2FybmluZy5hcHBlbmRDaGlsZCh0ZXh0Tm9kZUZvck1hdGNoZWRXb3JkKTtcblxuICBjb25zdCBpbmNsdXNpb25BcmdzOiBJbmNsdXNpb25TdWdnZXN0aW9uQXJncyA9IHtcbiAgICBvZmZzZXQ6IDUwLFxuICAgIHN1Z2dlc3Rpb24sXG4gIH07XG5cbiAgd2FybmluZy5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGVkaXRvci5maXJlKCdpbmNsdXNpb24nLCBpbmNsdXNpb25BcmdzLCBlZGl0b3IpO1xuICB9O1xuICBjb25zdCBzcGFuU3R5bGVzID0ge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICdib3JkZXItYm90dG9tJzogJzJweCBkYXNoZWQgZ29sZCcsXG4gICAgJ2JvcmRlci1yaWdodCc6ICcycHggZGFzaGVkIGdvbGQnLFxuICAgICdmb250LXN0eWxlJzogJ25vcm1hbCcsXG4gICAgYmFja2dyb3VuZDogJyNmZmVmOTQnLFxuICAgIHBhZGRpbmc6ICcwcHggNHB4JyxcbiAgfTtcbiAgY29uc3Qgc3R5bGUgPSBPYmplY3QuZW50cmllcyhzcGFuU3R5bGVzKVxuICAgIC5tYXAoKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5qb2luKCcgOiAnKSlcbiAgICAuam9pbignOycpO1xuXG4gIGNvbnN0IHNwYW5BdHRyaWJ1dGVzID0ge1xuICAgIHN0eWxlLFxuICAgIGlkOiBzdWdnZXN0aW9uLmlkLFxuICAgIGNsYXNzOiAnaW5jbHVzaW9uLWhlbHBlci13YXJuaW5nJyxcbiAgfTtcbiAgT2JqZWN0LmVudHJpZXMoc3BhbkF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIHdhcm5pbmcuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gd2FybmluZztcbn1cbiJdfQ==