/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class CollectionEvent {
    /**
     * @param {?=} type
     * @param {?=} data
     */
    constructor(type = 'Collection.REFRESH', data = []) {
        this.type = '';
        this.data = [];
        this.type = type;
        this.data = data;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbkV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQ29sbGVjdGlvbkV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNOzs7OztJQWlCSixZQUFZLElBQUksR0FBRyxvQkFBb0IsRUFBRSxJQUFJLEdBQUcsRUFBRTtRQUhsRCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBZSxFQUFFLENBQUM7UUFHcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7QUFuQk0sdUJBQU8sR0FBVyxvQkFBb0IsQ0FBQztBQUN2QyxtQkFBRyxHQUFXLGdCQUFnQixDQUFDO0FBQy9CLHNCQUFNLEdBQVcsbUJBQW1CLENBQUM7QUFDckMsMEJBQVUsR0FBVyx1QkFBdUIsQ0FBQztBQUM3Qyx1QkFBTyxHQUFXLG9CQUFvQixDQUFDO0FBQ3ZDLDhCQUFjLEdBQVcsMkJBQTJCLENBQUM7QUFDckQsb0JBQUksR0FBVyxpQkFBaUIsQ0FBQztBQUNqQyxzQkFBTSxHQUFXLG1CQUFtQixDQUFDO0FBQ3JDLHNCQUFNLEdBQVcsbUJBQW1CLENBQUM7QUFDckMsa0NBQWtCLEdBQVcsK0JBQStCLENBQUM7QUFDN0QsK0JBQWUsR0FBVyw0QkFBNEIsQ0FBQztBQUN2RCxvQ0FBb0IsR0FBVyxpQ0FBaUMsQ0FBQzs7O0lBWHhFLHdCQUE4Qzs7SUFDOUMsb0JBQXNDOztJQUN0Qyx1QkFBNEM7O0lBQzVDLDJCQUFvRDs7SUFDcEQsd0JBQThDOztJQUM5QywrQkFBNEQ7O0lBQzVELHFCQUF3Qzs7SUFDeEMsdUJBQTRDOztJQUM1Qyx1QkFBNEM7O0lBQzVDLG1DQUFvRTs7SUFDcEUsZ0NBQThEOztJQUM5RCxxQ0FBd0U7O0lBRXhFLCtCQUFrQjs7SUFDbEIsK0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25FdmVudCB7XG4gIHN0YXRpYyBSRUZSRVNIOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5SRUZSRVNIJztcbiAgc3RhdGljIEFERDogc3RyaW5nID0gJ0NvbGxlY3Rpb24uQUREJztcbiAgc3RhdGljIFJFTU9WRTogc3RyaW5nID0gJ0NvbGxlY3Rpb24uUkVNT1ZFJztcbiAgc3RhdGljIFJFTU9WRV9BTEw6IHN0cmluZyA9ICdDb2xsZWN0aW9uLlJFTU9WRV9BTEwnO1xuICBzdGF0aWMgUkVQTEFDRTogc3RyaW5nID0gJ0NvbGxlY3Rpb24uUkVQTEFDRSc7XG4gIHN0YXRpYyBJTlZBTElEQVRFX0FMTDogc3RyaW5nID0gJ0NvbGxlY3Rpb24uSU5WQUxJREFURV9BTEwnO1xuICBzdGF0aWMgU09SVDogc3RyaW5nID0gJ0NvbGxlY3Rpb24uU09SVCc7XG4gIHN0YXRpYyBGSUxURVI6IHN0cmluZyA9ICdDb2xsZWN0aW9uLkZJTFRFUic7XG4gIHN0YXRpYyBDSEFOR0U6IHN0cmluZyA9ICdDb2xsZWN0aW9uLkNIQU5HRSc7XG4gIHN0YXRpYyBDVVJSRU5UUEFHRV9DSEFOR0U6IHN0cmluZyA9ICdDb2xsZWN0aW9uLkNVUlJFTlRQQUdFX0NIQU5HRSc7XG4gIHN0YXRpYyBQQUdFU0laRV9DSEFOR0U6IHN0cmluZyA9ICdDb2xsZWN0aW9uLlBBR0VTSVpFX0NIQU5HRSc7XG4gIHN0YXRpYyBOVU1CRVJPRlBBR0VTX0NIQU5HRTogc3RyaW5nID0gJ0NvbGxlY3Rpb24uTlVNQkVST0ZQQUdFU19DSEFOR0UnO1xuXG4gIHR5cGU6IHN0cmluZyA9ICcnO1xuICBkYXRhOiBBcnJheTxhbnk+ID0gW107XG5cbiAgY29uc3RydWN0b3IodHlwZSA9ICdDb2xsZWN0aW9uLlJFRlJFU0gnLCBkYXRhID0gW10pIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cbn1cbiJdfQ==