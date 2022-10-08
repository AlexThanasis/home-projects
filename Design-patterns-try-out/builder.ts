// Builder Design Pattern

class Gyros {
    constructor(
        public flatbread: string = 'wheat',
        public tomato?: boolean,
        public tzatziki?: boolean,
        public cucumber?: boolean,
        public salad?: boolean,
        public marinatedChicken?: boolean,
        public lemon?: boolean
    ) { };
    
    // makes possible to chain up instead of using the constructor like this -> new Gyros('wheat', true, false, true, false...)

    addTomato() {
        this.tomato = true;
        return this;
    };
    addTzatziki() {
        this.tzatziki = true;
        return this;
    };
    addCucumber() {
        this.cucumber = true;
        return this;
    };
    addSalad() {
        this.salad = true;
        return this;
    };
    addMarinatedChiken() {
        this.marinatedChicken = true;
        return this;
    };
    addLemon() {
        this.lemon = true;
        return this;
    };
}

const myGyros = new Gyros();

myGyros
    .addTomato()
    .addTzatziki()
    .addCucumber()
    .addMarinatedChiken();
