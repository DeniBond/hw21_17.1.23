class Products {
    _id;
    _title;
    _manufacture;
    _price;

    constructor(id, title, manufacture, price) {
        this._id = id;
        this._title = title;
        this._manufacture = manufacture;
        this._price = price;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get manufacture() {
        return this._manufacture;
    }

    set manufacture(value) {
        this._manufacture = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

class Milk extends Products {
    _fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this._fat = fat;
    }

    get fat() {
        return this._fat;
    }

    set fat(value) {
        this._fat = value;
    }
}

class Chocolate extends Products {
    _kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this._kind = kind;
    }
}

class Wine extends Products {
    _alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this._alcohol = alcohol;
    }

    get alcohol() {
        return this._alcohol;
    }

    set alcohol(value) {
        this._alcohol = value;
    }
}

class Store {
    constructor(products) {
        this._products = [];
    }

    // TODO addProducts to store
    addProduct(product) {
        if (this._products.find(value => value.id === product.id)) {
            return false;
        } else {
            this._products.push(product)
            return true;
        }
    }

    //TODO Looking on all products in the store
    getAllProducts() {
        return [...this._products]
    }

//     TODO Getting by type objects in products
    getByType(type) {
        return this._products.filter(value => {
            if (value.constructor.name === type) {
                return value;
            }
        })
    }
}

// Creating store
const myStore = new Store();
// Creating new wine
const niceWine = new Wine(1, 'Nice wine', 'Israel', 200, 0.12);
const whiteDream = new Milk(23, 'White dream', 'Germany', 5.90, 0.03)
const darkDream = new Milk(4, 'Dark dream', 'Germany', 5.90, 0.05);
const Milka = new Chocolate(12314, 'Milka', 'USA', 2.4, 'so kind :)')

myStore.addProduct(niceWine);
myStore.addProduct(whiteDream);
myStore.addProduct(darkDream);
myStore.addProduct(Milka)

console.log(myStore.getAllProducts());

console.log(myStore.getByType('Wine'))


