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
            if (_this.readPromise) {
                _this.readPromise(_this);
            }
        };
    }
    NovoFile.prototype.read = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.readPromise = resolve;
            // when the file is read it triggers the onload event above.
            _this.reader.readAsDataURL(_this.file);
        });
    };
    NovoFile.prototype.toJSON = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25vdm8tZWxlbWVudHMvIiwic291cmNlcyI6WyJlbGVtZW50cy9mb3JtL2V4dHJhcy9maWxlL2V4dHJhcy9maWxlL0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFhRSxrQkFBWSxJQUFJO1FBQWhCLGlCQWNDO1FBMUJELFNBQUksR0FBVyxFQUFFLENBQUM7UUFHbEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLFdBQU0sR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBSXBDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBRyxDQUFDO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQUMsS0FBVTtZQUM5QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksS0FBSSxDQUFDLFdBQVcsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQUEsaUJBTUM7UUFMQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztZQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUMzQiw0REFBNEQ7WUFDNUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDRSxPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQztJQUNKLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb3ZvRmlsZSB7XG4gIG5hbWU6IHN0cmluZyA9ICcnO1xuICBmaWxlOiBhbnk7XG4gIHR5cGU6IGFueTtcbiAgY29udGVudFR5cGU6IHN0cmluZyA9ICcnO1xuICBsYXN0TW9kaWZpZWQ6IG51bWJlciA9IDA7XG4gIHNpemU6IG51bWJlciA9IDA7XG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBmaWxlQ29udGVudHM6IHN0cmluZztcbiAgZGF0YVVSTDogc3RyaW5nO1xuICByZWFkZXI6IEZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICByZWFkUHJvbWlzZTogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoZmlsZSkge1xuICAgIHRoaXMubmFtZSA9IGAke2VuY29kZVVSSUNvbXBvbmVudChmaWxlLm5hbWUgfHwgJycpfWA7XG4gICAgdGhpcy5jb250ZW50VHlwZSA9IGZpbGUudHlwZTtcbiAgICB0aGlzLmxhc3RNb2RpZmllZCA9IGZpbGUubGFzdE1vZGlmaWVkO1xuICAgIHRoaXMuc2l6ZSA9IGZpbGUuc2l6ZTtcbiAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgIHRoaXMucmVhZGVyLm9ubG9hZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICB0aGlzLmZpbGVDb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQuc3BsaXQoJywnKVsxXTtcbiAgICAgIHRoaXMuZGF0YVVSTCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5yZWFkUHJvbWlzZSkge1xuICAgICAgICB0aGlzLnJlYWRQcm9taXNlKHRoaXMpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZWFkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5yZWFkUHJvbWlzZSA9IHJlc29sdmU7XG4gICAgICAvLyB3aGVuIHRoZSBmaWxlIGlzIHJlYWQgaXQgdHJpZ2dlcnMgdGhlIG9ubG9hZCBldmVudCBhYm92ZS5cbiAgICAgIHRoaXMucmVhZGVyLnJlYWRBc0RhdGFVUkwodGhpcy5maWxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29udGVudFR5cGU6IHRoaXMudHlwZSxcbiAgICAgIGxhc3RNb2RpZmllZDogdGhpcy5sYXN0TW9kaWZpZWQsXG4gICAgICBzaXplOiB0aGlzLnNpemUsXG4gICAgICBmaWxlQ29udGVudHM6IHRoaXMuZmlsZUNvbnRlbnRzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==