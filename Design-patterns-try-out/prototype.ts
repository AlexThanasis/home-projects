// Prototype
// alternative way for inheritance

const cat = {
    eatMice() {
        return 'no,🐁 gimme alutasakos, oreg neni';
    }
}

const tom = Object.create(cat, {name: {value: 'Tom'}, meow: {value: function() {return "meowww! 🐱"}}});

console.log(tom.name);
console.log(tom.meow());
console.log(tom.eatMice());
console.log(tom.__proto__); // obsoleted!
console.log(Object.getPrototypeOf(tom)); // newer and preferable way to get the properties of the prototype
tom.eatMice();