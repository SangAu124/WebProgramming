class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    static typeName = 'Rectangle';
    static info() {
        return `Type: ${Rectangle.typeName}`;
    }
    getArea() {
        return this.width * this.height;
    }
}

// const r = new Rectangle(10, 10);
// console.log(r.getArea());
// console.log(Rectangle.typeName);
// console.log(Rectangle.info());

class Position {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

class Position3D extends Position {
    constructor(x, y){
        super(x, y)
        this.z = y
    }
}

// const p3 = new Position3D(0, 0, 0);
// console.log(p3);

function Position(x, y) {
    this.x = x
    this.y = y
}

class Position3D extends Position {
    constructor(x, y, z) {
        super(x, y)
        this.z = z
    }
}

// const p3 = new Position3D(1, 2, 3);
// console.log(p3);
