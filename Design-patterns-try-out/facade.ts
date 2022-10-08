// Facade Design Patter
// Structural Pattern
// credit: FireBase

class PlumbingSystem {
    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem {
    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
}

class House {
    // this is the facade class
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems() {
        this.electrical.setVoltage(220);
        this.electrical.turnOn();
        this.plumbing.setPressure(500);
        this.plumbing.turnOn();
    }

    public shutDown() {
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}

const house = new House();
house.turnOnSystems();
house.shutDown();
