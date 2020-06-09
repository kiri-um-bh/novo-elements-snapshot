var ActivityTableRenderers = /** @class */ (function () {
    function ActivityTableRenderers() {
    }
    ActivityTableRenderers.propertyRenderer = function (prop) {
        var ret = function (data) {
            // TODO - allow for dots and sub props
            return data[prop];
        };
        return ret;
    };
    ActivityTableRenderers.dateRenderer = function (prop) {
        var ret = function (data) {
            return data[prop] ? new Date(data[prop]).toLocaleDateString() : '';
        };
        return ret;
    };
    return ActivityTableRenderers;
}());
export { ActivityTableRenderers };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdGFibGUtcmVuZGVyZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbm92by1lbGVtZW50cy8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL3NpbXBsZS10YWJsZS9hY3Rpdml0eS10YWJsZS1yZW5kZXJlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQWVBLENBQUM7SUFkUSx1Q0FBZ0IsR0FBdkIsVUFBMkIsSUFBWTtRQUNyQyxJQUFNLEdBQUcsR0FBRyxVQUFDLElBQU87WUFDbEIsc0NBQXNDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQztRQUNGLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQXVCLElBQVk7UUFDakMsSUFBTSxHQUFHLEdBQUcsVUFBQyxJQUFPO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDckUsQ0FBQyxDQUFDO1FBQ0YsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpdml0eVRhYmxlUmVuZGVyZXJzIHtcbiAgc3RhdGljIHByb3BlcnR5UmVuZGVyZXI8VD4ocHJvcDogc3RyaW5nKTogRnVuY3Rpb24ge1xuICAgIGNvbnN0IHJldCA9IChkYXRhOiBUKTogc3RyaW5nID0+IHtcbiAgICAgIC8vIFRPRE8gLSBhbGxvdyBmb3IgZG90cyBhbmQgc3ViIHByb3BzXG4gICAgICByZXR1cm4gZGF0YVtwcm9wXTtcbiAgICB9O1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgZGF0ZVJlbmRlcmVyPFQ+KHByb3A6IHN0cmluZyk6IEZ1bmN0aW9uIHtcbiAgICBjb25zdCByZXQgPSAoZGF0YTogVCk6IHN0cmluZyA9PiB7XG4gICAgICByZXR1cm4gZGF0YVtwcm9wXSA/IG5ldyBEYXRlKGRhdGFbcHJvcF0pLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogJyc7XG4gICAgfTtcbiAgICByZXR1cm4gcmV0O1xuICB9XG59XG4iXX0=