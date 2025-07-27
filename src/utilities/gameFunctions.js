
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const getBestMove = (board, computerSymbol, playerSymbol) => {
  const isWinning = (brd, sym) =>
    winningCombinations.some(
      ([a, b, c]) => brd[a] === sym && brd[b] === sym && brd[c] === sym
    );

  const minimax = (brd, isMaximizing) => {
    if (isWinning(brd, computerSymbol)) return { score: 1 };
    if (isWinning(brd, playerSymbol)) return { score: -1 };
    if (!brd.includes(null)) return { score: 0 };

    const scores = [];

    for (let i = 0; i < 9; i++) {
      if (brd[i] === null) {
        const newBoard = [...brd];
        newBoard[i] = isMaximizing ? computerSymbol : playerSymbol;
        const result = minimax(newBoard, !isMaximizing);
        scores.push({ score: result.score, index: i });
      }
    }

    if (isMaximizing) {
      return scores.reduce((best, move) =>
        move.score > best.score ? move : best
      );
    } else {
      return scores.reduce((best, move) =>
        move.score < best.score ? move : best
      );
    }
  };

  return minimax(board, true).index;
};

export const checkWinner = (boardMoves, setWinner, navigate) => {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      boardMoves[a] &&
      boardMoves[a] === boardMoves[b] &&
      boardMoves[a] === boardMoves[c]
    ) {
      setWinner(boardMoves[a]);
      setTimeout(() => {
        navigate("/end");
      }, 500);
      return;
    }
  }

  if (!boardMoves.includes(null)) {
    setWinner("draw");
    setTimeout(() => {
      navigate("/end");
    }, 500);
  }
};
