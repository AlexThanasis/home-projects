// State Design Pattern

class StudentBadDesign {

    // switch hell: should be avoided! 👇
    doing(mood: string) {
        switch (mood) {
            case 'lazy':
                return 'Columbot nezek 📺';
            case 'hungry':
                return 'Eszek egy kremest 🍰';
            case 'energetic':
                return 'Tanulok 👓';
            default:
                return 'Olvasok 📖';
        }
    }


}

interface State {
    doing(): string;
}

class LazyState implements State {
    doing() {
        return 'Columbot nezek 📺';
    }
}

class HungryState implements State {
    doing() {
        return 'Eszek egy kremest 🍰';
    }
}

class EnergeticState implements State {
    doing() {
        return 'Tanulok 👓';
    }
}

class DefaultState implements State {
    doing() {
        return 'Olvasok 📖';
    }
}

class Student {
    state: State;
    constructor() {
        this.state = new EnergeticState();
    }

    doing () {
        return this.state.doing();
    }
}

const student = new Student();
console.log(student.doing());