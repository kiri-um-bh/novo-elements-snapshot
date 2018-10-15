/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
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
        this.reader.onload = function (event) {
            _this.fileContents = event.target.result.split(',')[1];
            _this.dataURL = event.target.result;
            _this.loaded = true;
        };
    }
    /**
     * @return {?}
     */
    NovoFile.prototype.read = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            resolve(_this);
            // when the file is read it triggers the onload event above.
            _this.reader.readAsDataURL(_this.file);
        });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9maWxlL2V4dHJhcy9maWxlL0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBWUUsa0JBQVksSUFBSTtRQUFoQixpQkFXQztRQXRCRCxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBR2xCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUd4QixXQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUdwQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUcsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxVQUFDLEtBQVU7WUFDOUIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdUJBQUk7OztJQUFKO1FBQUEsaUJBTUM7UUFMQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN6QixPQUFPLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDZCw0REFBNEQ7WUFDNUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHlCQUFNOzs7SUFBTjtRQUNFLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBMUNELElBMENDOzs7O0lBekNDLHdCQUFrQjs7SUFDbEIsd0JBQVU7O0lBQ1Ysd0JBQVU7O0lBQ1YsK0JBQXlCOztJQUN6QixnQ0FBeUI7O0lBQ3pCLHdCQUFpQjs7SUFDakIsMEJBQXdCOztJQUN4QixnQ0FBcUI7O0lBQ3JCLDJCQUFnQjs7SUFDaEIsMEJBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5vdm9GaWxlIHtcbiAgbmFtZTogc3RyaW5nID0gJyc7XG4gIGZpbGU6IGFueTtcbiAgdHlwZTogYW55O1xuICBjb250ZW50VHlwZTogc3RyaW5nID0gJyc7XG4gIGxhc3RNb2RpZmllZDogbnVtYmVyID0gMDtcbiAgc2l6ZTogbnVtYmVyID0gMDtcbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGZpbGVDb250ZW50czogc3RyaW5nO1xuICBkYXRhVVJMOiBzdHJpbmc7XG4gIHJlYWRlcjogRmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cbiAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgIHRoaXMubmFtZSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChmaWxlLm5hbWUgfHwgJycpfWA7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGZpbGUudHlwZTtcbiAgICB0aGlzLmxhc3RNb2RpZmllZCA9IGZpbGUubGFzdE1vZGlmaWVkO1xuICAgIHRoaXMuc2l6ZSA9IGZpbGUuc2l6ZTtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIHRoaXMucmVhZGVyLm9ubG9hZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmZpbGVDb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQuc3BsaXQoJywnKVsxXTtcbiAgICAgIHRoaXMuZGF0YVVSTCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgfTtcbiAgfVxuXG4gIHJlYWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgLy8gd2hlbiB0aGUgZmlsZSBpcyByZWFkIGl0IHRyaWdnZXJzIHRoZSBvbmxvYWQgZXZlbnQgYWJvdmUuXG4gICAgICB0aGlzLnJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZSk7XG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNvbnRlbnRUeXBlOiB0aGlzLnR5cGUsXG4gICAgICBsYXN0TW9kaWZpZWQ6IHRoaXMubGFzdE1vZGlmaWVkLFxuICAgICAgc2l6ZTogdGhpcy5zaXplLFxuICAgICAgZmlsZUNvbnRlbnRzOiB0aGlzLmZpbGVDb250ZW50cyxcbiAgICB9O1xuICB9XG59XG4iXX0=