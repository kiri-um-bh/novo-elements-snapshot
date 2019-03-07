/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export class NovoFile {
    /**
     * @param {?} file
     */
    constructor(file) {
        this.name = '';
        this.contentType = '';
        this.lastModified = 0;
        this.size = 0;
        this.loaded = false;
        this.reader = new FileReader();
        this.name = `${encodeURIComponent(file.name || '')}`;
        this.contentType = file.type;
        this.lastModified = file.lastModified;
        this.size = file.size;
        this.file = file;
        this.reader.onload = (event) => {
            this.fileContents = event.target.result.split(',')[1];
            this.dataURL = event.target.result;
            this.loaded = true;
        };
    }
    /**
     * @return {?}
     */
    read() {
        return new Promise((resolve) => {
            resolve(this);
            // when the file is read it triggers the onload event above.
            this.reader.readAsDataURL(this.file);
        });
    }
    /**
     * @return {?}
     */
    toJSON() {
        return {
            name: this.name,
            contentType: this.type,
            lastModified: this.lastModified,
            size: this.size,
            fileContents: this.fileContents,
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9maWxlL2V4dHJhcy9maWxlL0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU07Ozs7SUFZSixZQUFZLElBQUk7UUFYaEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdsQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsV0FBTSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7UUFHcEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDckIsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUk7UUFDRixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2QsNERBQTREO1lBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSTtZQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUM7SUFDSixDQUFDO0NBQ0Y7OztJQXpDQyx3QkFBa0I7O0lBQ2xCLHdCQUFVOztJQUNWLHdCQUFVOztJQUNWLCtCQUF5Qjs7SUFDekIsZ0NBQXlCOztJQUN6Qix3QkFBaUI7O0lBQ2pCLDBCQUF3Qjs7SUFDeEIsZ0NBQXFCOztJQUNyQiwyQkFBZ0I7O0lBQ2hCLDBCQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb3ZvRmlsZSB7XG4gIG5hbWU6IHN0cmluZyA9ICcnO1xuICBmaWxlOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgY29udGVudFR5cGU6IHN0cmluZyA9ICcnO1xuICBsYXN0TW9kaWZpZWQ6IG51bWJlciA9IDA7XG4gIHNpemU6IG51bWJlciA9IDA7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBmaWxlQ29udGVudHM6IHN0cmluZztcbiAgZGF0YVVSTDogc3RyaW5nO1xuICByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKGZpbGUpIHtcbiAgICB0aGlzLm5hbWUgPSBgJHtlbmNvZGVVUklDb21wb25lbnQoZmlsZS5uYW1lIHx8ICcnKX1gO1xuICAgIHRoaXMuY29udGVudFR5cGUgPSBmaWxlLnR5cGU7XG4gICAgdGhpcy5sYXN0TW9kaWZpZWQgPSBmaWxlLmxhc3RNb2RpZmllZDtcbiAgICB0aGlzLnNpemUgPSBmaWxlLnNpemU7XG4gICAgdGhpcy5maWxlID0gZmlsZTtcbiAgICB0aGlzLnJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5maWxlQ29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICB0aGlzLmRhdGFVUkwgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgdGhpcy5sb2FkZWQgPSB0cnVlO1xuICAgIH07XG4gIH1cblxuICByZWFkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgcmVzb2x2ZSh0aGlzKTtcbiAgICAgIC8vIHdoZW4gdGhlIGZpbGUgaXMgcmVhZCBpdCB0cmlnZ2VycyB0aGUgb25sb2FkIGV2ZW50IGFib3ZlLlxuICAgICAgdGhpcy5yZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGUpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjb250ZW50VHlwZTogdGhpcy50eXBlLFxuICAgICAgbGFzdE1vZGlmaWVkOiB0aGlzLmxhc3RNb2RpZmllZCxcbiAgICAgIHNpemU6IHRoaXMuc2l6ZSxcbiAgICAgIGZpbGVDb250ZW50czogdGhpcy5maWxlQ29udGVudHMsXG4gICAgfTtcbiAgfVxufVxuIl19