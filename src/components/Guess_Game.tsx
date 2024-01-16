import React, { useState } from "react";
import "./style.css";

const GuessGame: React.FC = () => {
  //Genrate Random Number
  const number = Math.floor(Math.random() * 100) + 1;
  //States
  const [guessNumber, setGuessNumber] = useState<string>("");
  const [randomNumber, setRandomNumber] = useState<number>(number);
  const [userCount, setUserCount] = useState<number>(0);
  const [userAllValueGuess, setUserAllValueGuess] = useState<number[]>([]);
  const [disable, setDisable] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const [lowHighMsg, setLowHighMsg] = useState<string>("");

  const handleInputValue = (event: any) => {
    setGuessNumber(event.target.value);
  };

  const SubmitNumber = () => {
    if (Number(randomNumber) === Number(guessNumber)) {
      setMsg("You Win The Game......");
      setDisable(true);
      setLowHighMsg("");
    } else if (userCount === 4) {
      setMsg("Game Over!!!");
      setDisable(true);
      setLowHighMsg("");
    } else {
      setMsg("Wrong Guess");
      if (randomNumber < Number(guessNumber)) {
        setLowHighMsg("Your Guess is Higher then random number");
      }
      if (randomNumber > Number(guessNumber)) {
        setLowHighMsg("Your Guess is Lower then random number");
      }
    }
    setUserCount((prevCount) => prevCount + 1);
    setUserAllValueGuess((prevGuesses) => [
      ...prevGuesses,
      Number(guessNumber),
    ]);
  };

  const restartAgain = () => {
    setDisable(false);
    setMsg("");
    setUserAllValueGuess([]);
    setUserCount(0);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuessNumber("");
    setLowHighMsg("");
  };

  return (
    <>
      <div className="main">
        <div className="uperdiv">
          <h2 className="h2">GUESS A NUMBER</h2>
          <input
            className="input"
            disabled={disable}
            type="number"
            value={guessNumber}
            onChange={handleInputValue}
          />
        </div>
        <div className="btn">
          <button disabled={disable} className="btn1" onClick={SubmitNumber}>
            Submit
          </button>
          {disable && (
            <button className="btn2" onClick={restartAgain}>
              Play Again
            </button>
          )}
        </div>
        <div className="lowerdiv">
          <p className="p1">Msg: {msg}</p>
          <p className="p2">Lower or Higher: {lowHighMsg}</p>
          <p className="p3">Total rounds played by user: {userCount}</p>
          <p className="p4">Random Number: {randomNumber}</p>
          <p className="p5">
            Your Guesses:
            {userAllValueGuess.map((item, index) => {
              return (
                <span className="items" key={index}>
                  {item},
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default GuessGame;
