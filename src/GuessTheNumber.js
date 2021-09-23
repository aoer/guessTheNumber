/* "Import React from 'react'" no longer needed, unless using class based react component implementation */
//import React, { useState } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import GuessTheNumberGame from './GuessTheNumberGame';

function GuessTheNumber({min, max}) {
    const [gtnGame, setGtnGame] = useState(new GuessTheNumberGame(min, max));
    const [userInput, setUserInput] = useState('');
    const [wrongGuesses, setWrongGuesses] = useState('');
    const [messageOutput, setMessageOutput] = useState('');
    const onChange = (event) => {
        setUserInput(event.target.value);
        if(gtnGame.gameEnded === true) {
            setGtnGame(new GuessTheNumberGame(min, max));
            setWrongGuesses('');
            setMessageOutput('');
        }

        console.log('input field changed:' + event.target.value);
    };
    const MakeGuess = () => {
        gtnGame.CheckIfCorrect(userInput);
        setWrongGuesses(gtnGame.guessedNumbersOutput());
        setMessageOutput(gtnGame.messageOutput);

        console.log('secretNumber:' + gtnGame.secretNumber);
        console.table(gtnGame.guessedNumbers);
    }

    return (
        <div className='GuessTheNumber'>
            <h1>Arvaa luku väliltä {min}-{max}</h1>
            <p>Arvaus</p>
            <input /*value={userInput}*/ onChange={onChange}></input>
            <button onClick={MakeGuess}>arvaa</button>
            <p>{messageOutput}</p>
            <p>{wrongGuesses}</p>
        </div>
    );
}

GuessTheNumber.defaultProps = {
    min: 1,
    max: 100,
}

GuessTheNumber.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default GuessTheNumber;