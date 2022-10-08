// Factory Design Pattern

class OKButton {

}

class CancelButton {

}

class InfoButton {

}

class ButtonFactory {
    createButton(type: string): OKButton | CancelButton | InfoButton {
        if (type === 'ok') {
            return new OKButton();
        } else if (type === 'cancel') {
            return new CancelButton();
        } else {
            return new InfoButton();
        }
    }
}

const type1 = 'ok';
const type2 = 'cancel';
const factory = new ButtonFactory();
const btn1 = factory.createButton(type1);
const btn2 = factory.createButton(type2);