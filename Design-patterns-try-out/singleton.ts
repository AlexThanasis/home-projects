// Singleton Design Pattern
// npm install -g ts-node typescript '@types/node'

class Singleton {
    private static instance: Singleton;

    private constructor() {
        
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance
    }
}
const client = () => {
    const singelton1 = Singleton.getInstance();
    const singelton2 = Singleton.getInstance();
    singelton1 === singelton2 ? console.log('Same') : console.log('Not the same');
}

client();
