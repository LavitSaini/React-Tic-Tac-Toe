import { useEffect, useState } from "react";
import useGameStore from "../stores/useGameStore";
import { useNavigate } from "react-router-dom";
import { playButtonSound2 } from "../utilities/sounds.js";
import { getBestMove, checkWinner } from "../utilities/gameFunctions.js";

const GamePage = () => {
  const [boardMoves, setBoardMoves] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const { winner, setWinner } = useGameStore();
  const [isComputerTurn, setIsComputerTurn] = useState(true);

  const { playerSymbol, playWithComputer } = useGameStore();

  const navigate = useNavigate();

  useEffect(() => {
    checkWinner(boardMoves, setWinner, navigate);
  }, [boardMoves]);

  useEffect(() => {
    if (isComputerTurn && playWithComputer) {
      setTimeout(() => {
        playComputerMove();
        checkWinner(boardMoves, setWinner, navigate);
      }, 500);
    }
  }, [isComputerTurn]);

  const playComputerMove = () => {
    const computerSymbol = playerSymbol === "X" ? "0" : "X";
    const bestMoveIndex = getBestMove(boardMoves, computerSymbol, playerSymbol);

    if (bestMoveIndex === undefined) return;

    const newBoard = boardMoves.map((move, index) =>
      bestMoveIndex === index ? computerSymbol : move
    );

    setBoardMoves(newBoard);
    setIsComputerTurn(!isComputerTurn);
    playButtonSound2();
  };

  const handleClick = (index) => {
    if (boardMoves[index]) {
      return;
    } // Prevent Invalid Move

    if (playWithComputer && isComputerTurn) {
      return;
    } // Player Cannot Play before computer move

    if (winner) {
      setTimeout(() => {
        navigate("/end");
      }, 500);
      return;
    }

    playButtonSound2();

    const newBoard = boardMoves.map((move, idx) =>
      index === idx ? (playWithComputer ? playerSymbol : turn) : move
    );
    setBoardMoves(newBoard);

    if (!playWithComputer) {
      setTurn((prev) => (prev === "X" ? "O" : "X"));
      return;
    }
    setIsComputerTurn((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {playWithComputer && (
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Computer Symbol - {playerSymbol === "X" ? "0" : "X"} | Your Symbol -{" "}
          {playerSymbol}
        </h2>
      )}
      <h1 className="text-3xl font-bold mb-4 text-blue-600">
        {playWithComputer
          ? isComputerTurn
            ? "Computer Turn"
            : "Your Turn"
          : `Turn ${turn}`}
      </h1>
      <div className="grid grid-cols-3 gap-2">
        {boardMoves.map((value, index) => (
          <div
            key={index}
            className="w-[100px] h-[100px] border-[1px] border-blue-600 text-6xl flex justify-center items-center text-blue-600 cursor-pointer font-light"
            onClick={() => handleClick(index)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;
