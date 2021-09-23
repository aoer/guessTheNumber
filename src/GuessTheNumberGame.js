class GuessTheNumberGame {
    constructor(min, max) {
        if (min === undefined || max === undefined) {
            this.min = 1;
            this.max = 100;
        } else {
            this.min = min;
            this.max = max;
        }
        
        this.secretNumber = undefined;
        this.guessedNumbers = [];
        this.guessedNumbersOutput = () => {
            let output = '';
            for (let i=0; i < this.guessedNumbers.length; i++) {
                output += this.guessedNumbers[i] + ' ';
            }
            return output;
        };
        this.messageOutput = '';
        this.gameEnded = false;
        this.StartGame();
    }

    StartGame() {
        this.secretNumber = this.RandomInt(this.min,this.max);
    }

    RandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    IsValidGuess(number) {
        if (Number.isNaN(number))
            return false;
        if (number < this.min || number > this.max)
            return false;
        if (this.NumberAlreadyGuessed(number))
            return false;

        this.guessedNumbers.push(number);
        return true;
    }

    NumberAlreadyGuessed(number) {
        for (let i = 0; i < this.guessedNumbers.length; i++) {
            if (this.guessedNumbers[i] === number)
                return true;
        }
        return false;
    }

    CheckIfCorrect(number) {
        number = Number(number);
        if(!this.IsValidGuess(number)){
            return;
        }

        if (this.secretNumber === number) {
            this.messageOutput = 'Arvausten määrä: ' + this.guessedNumbers.length;
            this.gameEnded = true;
        } else {
            if(this.secretNumber > number){
                this.messageOutput = 'Arvaus meni ali';
            } else {
                this.messageOutput = 'Arvaus meni yli';
            }
        }
    }
}

export default GuessTheNumberGame;