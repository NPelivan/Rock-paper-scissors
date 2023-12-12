import React, { useState, useEffect } from 'react';
import { Choice, getWinner, getRandomChoice } from '../utils/GameLogic';

const GameComponent: React.FC = () => {
    const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState<string>('');
    const [score, setScore] = useState<number>(0);

    useEffect(() => {
    // Load score from localStorage when the component mounts
        const savedScore = localStorage.getItem('rpsls_score');
        if (savedScore) {
        setScore(parseInt(savedScore, 10));
        }
    }, []);

    const handlePlayerChoice = (choice: Choice) => {
        const compChoice = getRandomChoice();
        const winner = getWinner(choice, compChoice);

        setPlayerChoice(choice);
        setComputerChoice(compChoice);
        setResult(winner);

        if (winner.includes('Player')) {
            setScore((prevScore) => prevScore + 1);
        } else if (winner.includes('Computer')) {
            setScore((prevScore) => Math.max(0, prevScore - 1));
        }

        localStorage.setItem('rpsls_score', String(score));
    };

    return (
        <div>
            <h1>ROCK<br />PAPER<br />SCISSORS<br />LIZARD<br />SPOCK</h1>
            <div>
                <button onClick={() => handlePlayerChoice(Choice.Rock)}>Rock</button>
                <button onClick={() => handlePlayerChoice(Choice.Paper)}>Paper</button>
                <button onClick={() => handlePlayerChoice(Choice.Scissors)}>Scissors</button>
                <button onClick={() => handlePlayerChoice(Choice.Lizard)}>Rock</button>
                <button onClick={() => handlePlayerChoice(Choice.Spock)}>Spock</button>
            </div>
            <p>Score: {score}</p>
            {playerChoice && computerChoice && (
                <div>
                    <p>Player choice: {playerChoice}</p>
                    <p>Computer choice: {computerChoice}</p>
                    <p>Result: {result}</p>
                </div>
            )}
        </div>
    );
}

export default GameComponent;