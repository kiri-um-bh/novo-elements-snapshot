/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.reader.onload = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.fileContents = event.target.result.split(',')[1];
            this.dataURL = event.target.result;
            this.loaded = true;
        });
    }
    /**
     * @return {?}
     */
    read() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            resolve(this);
            // when the file is read it triggers the onload event above.
            this.reader.readAsDataURL(this.file);
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9maWxlL2V4dHJhcy9maWxlL0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxRQUFROzs7O0lBWW5CLFlBQVksSUFBSTtRQVhoQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBR2xCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUd4QixXQUFNLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUdwQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztRQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJO1FBQ0YsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNkLDREQUE0RDtZQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBQ0osQ0FBQztDQUNGOzs7SUF6Q0Msd0JBQWtCOztJQUNsQix3QkFBVTs7SUFDVix3QkFBVTs7SUFDViwrQkFBeUI7O0lBQ3pCLGdDQUF5Qjs7SUFDekIsd0JBQWlCOztJQUNqQiwwQkFBd0I7O0lBQ3hCLGdDQUFxQjs7SUFDckIsMkJBQWdCOztJQUNoQiwwQkFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTm92b0ZpbGUge1xuICBuYW1lOiBzdHJpbmcgPSAnJztcbiAgZmlsZTogYW55O1xuICB0eXBlOiBhbnk7XG4gIGNvbnRlbnRUeXBlOiBzdHJpbmcgPSAnJztcbiAgbGFzdE1vZGlmaWVkOiBudW1iZXIgPSAwO1xuICBzaXplOiBudW1iZXIgPSAwO1xuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZmlsZUNvbnRlbnRzOiBzdHJpbmc7XG4gIGRhdGFVUkw6IHN0cmluZztcbiAgcmVhZGVyOiBGaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICBjb25zdHJ1Y3RvcihmaWxlKSB7XG4gICAgdGhpcy5uYW1lID0gYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbGUubmFtZSB8fCAnJyl9YDtcbiAgICB0aGlzLmNvbnRlbnRUeXBlID0gZmlsZS50eXBlO1xuICAgIHRoaXMubGFzdE1vZGlmaWVkID0gZmlsZS5sYXN0TW9kaWZpZWQ7XG4gICAgdGhpcy5zaXplID0gZmlsZS5zaXplO1xuICAgIHRoaXMuZmlsZSA9IGZpbGU7XG4gICAgdGhpcy5yZWFkZXIub25sb2FkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZmlsZUNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdC5zcGxpdCgnLCcpWzFdO1xuICAgICAgdGhpcy5kYXRhVVJMID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcbiAgICB9O1xuICB9XG5cbiAgcmVhZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICAvLyB3aGVuIHRoZSBmaWxlIGlzIHJlYWQgaXQgdHJpZ2dlcnMgdGhlIG9ubG9hZCBldmVudCBhYm92ZS5cbiAgICAgIHRoaXMucmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29udGVudFR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGxhc3RNb2RpZmllZDogdGhpcy5sYXN0TW9kaWZpZWQsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBmaWxlQ29udGVudHM6IHRoaXMuZmlsZUNvbnRlbnRzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==