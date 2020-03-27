/**
 * @fileoverview added by tsickle
 * Generated from: elements/form/extras/file/extras/file/File.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NovoFile = /** @class */ (function () {
    function NovoFile(file) {
        var _this = this;
        this.name = '';
        this.contentType = '';
        this.lastModified = 0;
        this.size = 0;
        this.loaded = false;
        this.reader = new FileReader();
        this.name = "" + encodeURIComponent(file.name || '');
        this.contentType = file.type;
        this.lastModified = file.lastModified;
        this.size = file.size;
        this.file = file;
        this.reader.onload = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.fileContents = event.target.result.split(',')[1];
            _this.dataURL = event.target.result;
            _this.loaded = true;
            if (_this.readPromise) {
                _this.readPromise(_this);
            }
        });
    }
    /**
     * @return {?}
     */
    NovoFile.prototype.read = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.readPromise = resolve;
            // when the file is read it triggers the onload event above.
            _this.reader.readAsDataURL(_this.file);
        }));
    };
    /**
     * @return {?}
     */
    NovoFile.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return {
            name: this.name,
            contentType: this.type,
            lastModified: this.lastModified,
            size: this.size,
            fileContents: this.fileContents,
        };
    };
    return NovoFile;
}());
export { NovoFile };
if (false) {
    /** @type {?} */
    NovoFile.prototype.name;
    /** @type {?} */
    NovoFile.prototype.file;
    /** @type {?} */
    NovoFile.prototype.type;
    /** @type {?} */
    NovoFile.prototype.contentType;
    /** @type {?} */
    NovoFile.prototype.lastModified;
    /** @type {?} */
    NovoFile.prototype.size;
    /** @type {?} */
    NovoFile.prototype.loaded;
    /** @type {?} */
    NovoFile.prototype.fileContents;
    /** @type {?} */
    NovoFile.prototype.dataURL;
    /** @type {?} */
    NovoFile.prototype.reader;
    /** @type {?} */
    NovoFile.prototype.readPromise;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9maWxlL2V4dHJhcy9maWxlL0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQWFFLGtCQUFZLElBQUk7UUFBaEIsaUJBY0M7UUExQkQsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdsQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsV0FBTSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7UUFJcEMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFHLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUcsVUFBQyxLQUFVO1lBQzlCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdUJBQUk7OztJQUFKO1FBQUEsaUJBTUM7UUFMQyxPQUFPLElBQUksT0FBTzs7OztRQUFDLFVBQUMsT0FBTztZQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUMzQiw0REFBNEQ7WUFDNUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlCQUFNOzs7SUFBTjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDOzs7O0lBN0NDLHdCQUFrQjs7SUFDbEIsd0JBQVU7O0lBQ1Ysd0JBQVU7O0lBQ1YsK0JBQXlCOztJQUN6QixnQ0FBeUI7O0lBQ3pCLHdCQUFpQjs7SUFDakIsMEJBQXdCOztJQUN4QixnQ0FBcUI7O0lBQ3JCLDJCQUFnQjs7SUFDaEIsMEJBQXNDOztJQUN0QywrQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm92b0ZpbGUge1xuICBuYW1lOiBzdHJpbmcgPSAnJztcbiAgZmlsZTogYW55O1xuICB0eXBlOiBhbnk7XG4gIGNvbnRlbnRUeXBlOiBzdHJpbmcgPSAnJztcbiAgbGFzdE1vZGlmaWVkOiBudW1iZXIgPSAwO1xuICBzaXplOiBudW1iZXIgPSAwO1xuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsZUNvbnRlbnRzOiBzdHJpbmc7XG4gIGRhdGFVUkw6IHN0cmluZztcbiAgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgcmVhZFByb21pc2U6IEZ1bmN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGZpbGUpIHtcbiAgICB0aGlzLm5hbWUgPSBgJHtlbmNvZGVVUklDb21wb25lbnQoZmlsZS5uYW1lIHx8ICcnKX1gO1xuICAgIHRoaXMuY29udGVudFR5cGUgPSBmaWxlLnR5cGU7XG4gICAgdGhpcy5sYXN0TW9kaWZpZWQgPSBmaWxlLmxhc3RNb2RpZmllZDtcbiAgICB0aGlzLnNpemUgPSBmaWxlLnNpemU7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB0aGlzLnJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWxlQ29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICB0aGlzLmRhdGFVUkwgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMucmVhZFByb21pc2UpIHtcbiAgICAgICAgdGhpcy5yZWFkUHJvbWlzZSh0aGlzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVhZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMucmVhZFByb21pc2UgPSByZXNvbHZlO1xuICAgICAgLy8gd2hlbiB0aGUgZmlsZSBpcyByZWFkIGl0IHRyaWdnZXJzIHRoZSBvbmxvYWQgZXZlbnQgYWJvdmUuXG4gICAgICB0aGlzLnJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNvbnRlbnRUeXBlOiB0aGlzLnR5cGUsXG4gICAgICBsYXN0TW9kaWZpZWQ6IHRoaXMubGFzdE1vZGlmaWVkLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgZmlsZUNvbnRlbnRzOiB0aGlzLmZpbGVDb250ZW50cyxcbiAgICB9O1xuICB9XG59XG4iXX0=