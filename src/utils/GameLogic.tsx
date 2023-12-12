export enum Choice {
    Rock = 'rock',
    Paper = 'paper',
    Scissors = 'scissors',
    Lizard = 'lizard',
    Spock = 'spock',
}

export const getWinner = (playerChoice: Choice, conputerChoice: Choice): string => {
    if (playerChoice === conputerChoice) return 'It\'s a tie!';

    switch (playerChoice) {
        case Choice.Rock:
            return conputerChoice === Choice.Scissors || conputerChoice === Choice.Lizard
                ? 'Player wins' : 'Conputer wins';
        case Choice.Paper:
            return conputerChoice === Choice.Rock || conputerChoice === Choice.Spock
                ? 'Player wins' : 'Conputer wins';
        case Choice.Scissors:
            return conputerChoice === Choice.Paper || conputerChoice === Choice.Lizard
                ? 'Player wins' : 'Conputer wins';
        case Choice.Lizard:
            return conputerChoice === Choice.Spock || conputerChoice === Choice.Paper
                ? 'Player wins' : 'Conputer wins';
        case Choice.Spock:
            return conputerChoice === Choice.Scissors || conputerChoice === Choice.Rock
                ? 'Player wins' : 'Conputer wins';
        default:
            return 'Invalid choice';
    }
}

export const getRandomChoice = (): Choice => {
    const choices: Choice[] = Object.values(Choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}