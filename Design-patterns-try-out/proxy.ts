// Proxy Design Patter
// Structural Pattern
// credit: FireBase & AlexThanasis (fixed for TS because original version didn't work)

const originalData: {[name: string | symbol]:any} = {name: 'jeff'};

const reactive = new Proxy(originalData, {
    get(target, key) {
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