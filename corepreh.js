class BaseClass {
    initialize(el, width, height, origin, scaleFactor) {
        this.el = el;
        this.width = width;
        this.height = height;
        this.origin = origin;
        this.scaleFactor = scaleFactor;
        
        console.log("BaseClass initialized");
        return true; // or some meaningful return value
    }
}

class SubClass extends BaseClass {
    initialize(el, width, height, origin, scaleFactor) {
        // Call the initialize method of BaseClass
        return super.initialize(el, width, height, origin, scaleFactor);
    }
}

// Usage example:
const element = document.getElementById('example');
const subInstance = new SubClass();
subInstance.initialize(element, 100, 200, { x: 0, y: 0 }, 2);
