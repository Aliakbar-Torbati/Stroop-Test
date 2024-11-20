import { useEffect, useState } from "react";

import "./App.css";

function App() {
  type ColorOption = {
    text: string; 
    color: string;
  };

  const [colors, setColors] = useState<ColorOption[]>([]);
  const [incorrectOption, setIncorrectOption] = useState<ColorOption | null>(null);
  const [score, setScore] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(10);

  const initialColors : ColorOption[] = [
    { text: "Red", color: "red" },
    { text: "Blue", color: "blue" },
    { text: "Green", color: "green" },
    { text: "Yellow", color: "yellow" },
  ];

    // Shuffle the colors array
    const shuffleColors = () : ColorOption[] => {
      return [...initialColors].sort(() => Math.random() - 0.5);
    };

  // Generate the options with one incorrect item
  const generateOptions = () : void => {
    const shuffledColors = shuffleColors();
    const incorrectIndex = Math.floor(Math.random() * shuffledColors.length);
    const incorrectItem = { ...shuffledColors[incorrectIndex] };
  

  // Swap the color to create an incorrect pairing
  const otherColors = initialColors.filter((c) => c.color !== incorrectItem.color);
  incorrectItem.color = otherColors[Math.floor(Math.random() * otherColors.length)].color;

  
    const options = [...shuffledColors];
    options[incorrectIndex] = incorrectItem;
  
    setColors(options);
    setIncorrectOption(incorrectItem);
  }

    // Handle user selection
    const handleChoice = (selected : ColorOption) : void => {
      if (selected.text === incorrectOption?.text && selected.color === incorrectOption?.color) {
        setScore((prevScore) => prevScore + 1); // Increase score
        startNewRound(); // Proceed to the next round
      } else {
        alert(`Game Over! Final Score: ${score}`);
        resetGame();
      }
    };

      // Reset the game
  const resetGame = () : void => {
    setGameStarted(false);
    setScore(0);
    setColors([]);
    setIncorrectOption(null);
    setTimer(10);
  };

    // Start a new round
    const startNewRound = () : void => {
      setTimer(10); // Reset the timer
      generateOptions();
    };
  
    // Start the game
    const startGame = () : void => {
      setGameStarted(true);
      setScore(0);
      setTimer(10);
      generateOptions();
    };

      // Timer countdown logic
  useEffect(() => {
    if (gameStarted && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0) {
      alert(`Time's up! Game Over. Final Score: ${score}`);
      resetGame();
    }
  }, [gameStarted, timer]);

  return(
    <div className="App">
    <h1>Stroop Test</h1>
<h2>Find the Wrong One</h2>
<p>Score: {score}</p>
<p>Timer: {timer}</p>
{!gameStarted && (
<button onClick={startGame} className="start-button">
  Start Game
</button>
)}
{gameStarted && (
<div className="options">
  {colors.map((color, index) => (
    <button
      key={index}
      className="option"
      style={{ color: color.color }}
      onClick={() => handleChoice(color)}
    >
      {color.text}
    </button>
  ))}
</div>
)}
</div>
  )
}

export default App;
