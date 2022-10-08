// Iterator Design Pattern
// credit: Firebase

function range(start = 0, end = 10, step = 1) {
 return {
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (start < end) {
            start = start + step;
            return { value: start, done: false }
        }
        return { done: true, value: end }
    }
 }
}

for (const n of range(0, 125, 5)) {
    console.log(n);
}