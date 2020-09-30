/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbkV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RhdGEtcHJvdmlkZXIvQ29sbGVjdGlvbkV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFpQjFCLFlBQVksSUFBSSxHQUFHLG9CQUFvQixFQUFFLElBQUksR0FBRyxFQUFFO1FBSGxELFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsU0FBSSxHQUFlLEVBQUUsQ0FBQztRQUdwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDOztBQW5CTSx1QkFBTyxHQUFXLG9CQUFvQixDQUFDO0FBQ3ZDLG1CQUFHLEdBQVcsZ0JBQWdCLENBQUM7QUFDL0Isc0JBQU0sR0FBVyxtQkFBbUIsQ0FBQztBQUNyQywwQkFBVSxHQUFXLHVCQUF1QixDQUFDO0FBQzdDLHVCQUFPLEdBQVcsb0JBQW9CLENBQUM7QUFDdkMsOEJBQWMsR0FBVywyQkFBMkIsQ0FBQztBQUNyRCxvQkFBSSxHQUFXLGlCQUFpQixDQUFDO0FBQ2pDLHNCQUFNLEdBQVcsbUJBQW1CLENBQUM7QUFDckMsc0JBQU0sR0FBVyxtQkFBbUIsQ0FBQztBQUNyQyxrQ0FBa0IsR0FBVywrQkFBK0IsQ0FBQztBQUM3RCwrQkFBZSxHQUFXLDRCQUE0QixDQUFDO0FBQ3ZELG9DQUFvQixHQUFXLGlDQUFpQyxDQUFDOzs7SUFYeEUsd0JBQThDOztJQUM5QyxvQkFBc0M7O0lBQ3RDLHVCQUE0Qzs7SUFDNUMsMkJBQW9EOztJQUNwRCx3QkFBOEM7O0lBQzlDLCtCQUE0RDs7SUFDNUQscUJBQXdDOztJQUN4Qyx1QkFBNEM7O0lBQzVDLHVCQUE0Qzs7SUFDNUMsbUNBQW9FOztJQUNwRSxnQ0FBOEQ7O0lBQzlELHFDQUF3RTs7SUFFeEUsK0JBQWtCOztJQUNsQiwrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29sbGVjdGlvbkV2ZW50IHtcbiAgc3RhdGljIFJFRlJFU0g6IHN0cmluZyA9ICdDb2xsZWN0aW9uLlJFRlJFU0gnO1xuICBzdGF0aWMgQUREOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5BREQnO1xuICBzdGF0aWMgUkVNT1ZFOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5SRU1PVkUnO1xuICBzdGF0aWMgUkVNT1ZFX0FMTDogc3RyaW5nID0gJ0NvbGxlY3Rpb24uUkVNT1ZFX0FMTCc7XG4gIHN0YXRpYyBSRVBMQUNFOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5SRVBMQUNFJztcbiAgc3RhdGljIElOVkFMSURBVEVfQUxMOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5JTlZBTElEQVRFX0FMTCc7XG4gIHN0YXRpYyBTT1JUOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5TT1JUJztcbiAgc3RhdGljIEZJTFRFUjogc3RyaW5nID0gJ0NvbGxlY3Rpb24uRklMVEVSJztcbiAgc3RhdGljIENIQU5HRTogc3RyaW5nID0gJ0NvbGxlY3Rpb24uQ0hBTkdFJztcbiAgc3RhdGljIENVUlJFTlRQQUdFX0NIQU5HRTogc3RyaW5nID0gJ0NvbGxlY3Rpb24uQ1VSUkVOVFBBR0VfQ0hBTkdFJztcbiAgc3RhdGljIFBBR0VTSVpFX0NIQU5HRTogc3RyaW5nID0gJ0NvbGxlY3Rpb24uUEFHRVNJWkVfQ0hBTkdFJztcbiAgc3RhdGljIE5VTUJFUk9GUEFHRVNfQ0hBTkdFOiBzdHJpbmcgPSAnQ29sbGVjdGlvbi5OVU1CRVJPRlBBR0VTX0NIQU5HRSc7XG5cbiAgdHlwZTogc3RyaW5nID0gJyc7XG4gIGRhdGE6IEFycmF5PGFueT4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlID0gJ0NvbGxlY3Rpb24uUkVGUkVTSCcsIGRhdGEgPSBbXSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgfVxufVxuIl19