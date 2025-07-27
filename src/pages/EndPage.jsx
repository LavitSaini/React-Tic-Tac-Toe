import React, { useEffect } from "react";
import useGameStore from "../stores/useGameStore";
import { useNavigate } from "react-router-dom";
import { playWinningSound, playButtonSound } from "../utilities/sounds.js";

const EndPage = () => {
  const navigate = useNavigate();
  const {
    winner,
    playWithComputer,
    playerSymbol,
    setPlayWithComputer,
    setPlayerSymbol,
    setWinner,
  } = useGameStore();

  useEffect(() => {
    playWinningSound();
  }, []);

  return (
    <div className="h-screen flex flex-col gap-3 justify-center items-center bg-blue-600">
      {winner === "draw" ? (
        <h1 className="text-3xl text-white font-bold">Ooh, Game is Draw!</h1>
      ) : (
        <h1 className="text-3xl text-white font-bold">
          {playWithComputer
            ? `${
                winner === playerSymbol
                  ? "Congratulations, You won the game!"
                  : "Ooh, Computer won the game!"
              }`
            : `Congratulations, ${winner} Player Win`}
        </h1>
      )}
      <button
        className="text-white border-2 border-white col-span-2 rounded-4xl hover:bg-white px-3 py-1.5 transition-colors hover:text-blue-600 cursor-pointer"
        onClick={() => {
          navigate("/");
          setPlayWithComputer(null);
          setPlayerSymbol(null);
          setWinner(null);
          playButtonSound();
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default EndPage;
