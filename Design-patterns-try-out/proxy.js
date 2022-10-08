// Proxy Design Patter
// Structural Pattern
// credit: FireBase

const original = { name: 'jeff'};

const reactive = new Proxy(original, {
    get(target, key='name') {
        console.log('Tracking: ', key);
        return target[key];
    },
    set(target, key, value) {
        console.log('updating UI...');
        return Reflect.set(target, key, value);
    },
})

reactive.name;
reactive.name = 'bob';
console.log(reactive.name);