const words = ['alma', 'korte', 'micimacko', 'malacka', 'kanga'];
const randomNumber = Math.floor(Math.random() * words.length);
const chosenWord = words[randomNumber];

const input = document.querySelector('input');
const button = document.querySelector('#submit');
const guessedLetters = [];

let counter = 10;
const info = document.querySelector('div.info span');
const guessedLettersParagraph = document.querySelector('div.guessed-letters p');


const game = document.querySelector('.guess');

for (let index = 0; index < chosenWord.length; index++) {
    game.innerHTML += '_ ';
}

button.addEventListener('click', () => {
    let inputValue = input.value;

    if (inputValue.match(/^[a-zA-Z]+$/) && !guessedLetters.includes(inputValue)) {
        info.innerHTML = `You have ${--counter} guesses`;
        guessedLetters.push(inputValue);
        let gameString = game.innerHTML.split('');
        guessedLettersParagraph.innerHTML += `${inputValue} `;

        if (chosenWord.includes(inputValue)) {
            Array.from(chosenWord).forEach((ch, index) => {
                if (ch === inputValue) {
                    gameString[index * 2] = ch;
                }
            })
            game.innerHTML = gameString.join('');
            
            if (!game.innerHTML.includes("_")) {
                info.innerHTML = 'You have won!'
            }
            if (counter === 0  && gameString.includes("_")) {
                info.innerHTML = 'You have lost!'

            }
        }
    }
    input.value = '';
})


