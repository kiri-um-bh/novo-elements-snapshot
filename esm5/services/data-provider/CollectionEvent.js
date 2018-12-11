/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CollectionEvent = /** @class */ (function () {
    function CollectionEvent(type, data) {
        if (type === void 0) { type = 'Collection.REFRESH'; }
        if (data === void 0) { data = []; }
        this.type = '';
        this.data = [];
        this.type = type;
        this.data = data;
    }
    CollectionEvent.REFRESH = 'Collection.REFRESH';
    CollectionEvent.ADD = 'Collection.ADD';
    CollectionEvent.REMOVE = 'Collection.REMOVE';
    CollectionEvent.REMOVE_ALL = 'Collection.REMOVE_ALL';
    CollectionEvent.REPLACE = 'Collection.REPLACE';
    CollectionEvent.INVALIDATE_ALL = 'Collection.INVALIDATE_ALL';
    CollectionEvent.SORT = 'Collection.SORT';
    CollectionEvent.FILTER = 'Collection.FILTER';
    CollectionEvent.CHANGE = 'Collection.CHANGE';
    CollectionEvent.CURRENTPAGE_CHANGE = 'Collection.CURRENTPAGE_CHANGE';
    CollectionEvent.PAGESIZE_CHANGE = 'Collection.PAGESIZE_CHANGE';
    CollectionEvent.NUMBEROFPAGES_CHANGE = 'Collection.NUMBEROFPAGES_CHANGE';
    return CollectionEvent;
}());
export { CollectionEvent };
if (false) {
    /** @type {?} */
    CollectionEvent.REFRESH;
    /** @type {?} */
    CollectionEvent.ADD;
    /** @type {?} */
    CollectionEvent.REMOVE;
    /** @type {?} */
    CollectionEvent.REMOVE_ALL;
    /** @type {?} */
    CollectionEvent.REPLACE;
    /** @type {?} */
    CollectionEvent.INVALIDATE_ALL;
    /** @type {?} */
    CollectionEvent.SORT;
    /** @type {?} */
    CollectionEvent.FILTER;
    /** @type {?} */
    CollectionEvent.CHANGE;
    /** @type {?} */
    CollectionEvent.CURRENTPAGE_CHANGE;
    /** @type {?} */
    CollectionEvent.PAGESIZE_CHANGE;
    /** @type {?} */
    CollectionEvent.NUMBEROFPAGES_CHANGE;
    /** @type {?} */
    CollectionEvent.prototype.type;
    /** @type {?} */
    CollectionEvent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbkV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQ29sbGVjdGlvbkV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtJQWlCRSx5QkFBWSxJQUEyQixFQUFFLElBQVM7UUFBdEMscUJBQUEsRUFBQSwyQkFBMkI7UUFBRSxxQkFBQSxFQUFBLFNBQVM7UUFIbEQsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixTQUFJLEdBQWUsRUFBRSxDQUFDO1FBR3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFuQk0sdUJBQU8sR0FBVyxvQkFBb0IsQ0FBQztJQUN2QyxtQkFBRyxHQUFXLGdCQUFnQixDQUFDO0lBQy9CLHNCQUFNLEdBQVcsbUJBQW1CLENBQUM7SUFDckMsMEJBQVUsR0FBVyx1QkFBdUIsQ0FBQztJQUM3Qyx1QkFBTyxHQUFXLG9CQUFvQixDQUFDO0lBQ3ZDLDhCQUFjLEdBQVcsMkJBQTJCLENBQUM7SUFDckQsb0JBQUksR0FBVyxpQkFBaUIsQ0FBQztJQUNqQyxzQkFBTSxHQUFXLG1CQUFtQixDQUFDO0lBQ3JDLHNCQUFNLEdBQVcsbUJBQW1CLENBQUM7SUFDckMsa0NBQWtCLEdBQVcsK0JBQStCLENBQUM7SUFDN0QsK0JBQWUsR0FBVyw0QkFBNEIsQ0FBQztJQUN2RCxvQ0FBb0IsR0FBVyxpQ0FBaUMsQ0FBQztJQVMxRSxzQkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLGVBQWU7OztJQUMxQix3QkFBOEM7O0lBQzlDLG9CQUFzQzs7SUFDdEMsdUJBQTRDOztJQUM1QywyQkFBb0Q7O0lBQ3BELHdCQUE4Qzs7SUFDOUMsK0JBQTREOztJQUM1RCxxQkFBd0M7O0lBQ3hDLHVCQUE0Qzs7SUFDNUMsdUJBQTRDOztJQUM1QyxtQ0FBb0U7O0lBQ3BFLGdDQUE4RDs7SUFDOUQscUNBQXdFOztJQUV4RSwrQkFBa0I7O0lBQ2xCLCtCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uRXZlbnQge1xuICBzdGF0aWMgUkVGUkVTSDogc3RyaW5nID0gJ0NvbGxlY3Rpb24uUkVGUkVTSCc7XG4gIHN0YXRpYyBBREQ6IHN0cmluZyA9ICdDb2xsZWN0aW9uLkFERCc7XG4gIHN0YXRpYyBSRU1PVkU6IHN0cmluZyA9ICdDb2xsZWN0aW9uLlJFTU9WRSc7XG4gIHN0YXRpYyBSRU1PVkVfQUxMOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5SRU1PVkVfQUxMJztcbiAgc3RhdGljIFJFUExBQ0U6IHN0cmluZyA9ICdDb2xsZWN0aW9uLlJFUExBQ0UnO1xuICBzdGF0aWMgSU5WQUxJREFURV9BTEw6IHN0cmluZyA9ICdDb2xsZWN0aW9uLklOVkFMSURBVEVfQUxMJztcbiAgc3RhdGljIFNPUlQ6IHN0cmluZyA9ICdDb2xsZWN0aW9uLlNPUlQnO1xuICBzdGF0aWMgRklMVEVSOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5GSUxURVInO1xuICBzdGF0aWMgQ0hBTkdFOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5DSEFOR0UnO1xuICBzdGF0aWMgQ1VSUkVOVFBBR0VfQ0hBTkdFOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5DVVJSRU5UUEFHRV9DSEFOR0UnO1xuICBzdGF0aWMgUEFHRVNJWkVfQ0hBTkdFOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5QQUdFU0laRV9DSEFOR0UnO1xuICBzdGF0aWMgTlVNQkVST0ZQQUdFU19DSEFOR0U6IHN0cmluZyA9ICdDb2xsZWN0aW9uLk5VTUJFUk9GUEFHRVNfQ0hBTkdFJztcblxuICB0eXBlOiBzdHJpbmcgPSAnJztcbiAgZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGUgPSAnQ29sbGVjdGlvbi5SRUZSRVNIJywgZGF0YSA9IFtdKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG4iXX0=