import { useNavigate } from "react-router-dom";
import useGameStore from "../stores/useGameStore";
import { playButtonSound } from "../utilities/sounds.js";

const StartPage = () => {
  const navigate = useNavigate();
  const { playWithComputer, setPlayWithComputer } = useGameStore();

  const handlePlayWithComputer = () => {
    navigate("/select-symbol");
    setPlayWithComputer(true);
    playButtonSound();
  };

  const handlePlayWithFriend = () => {
    navigate("/game");
    setPlayWithComputer(false);
    playButtonSound();
  };

  return (
    <div className="flex h-screen flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl font-bold text-blue-600">Tic Tac Toe</h1>
      <div className="flex flex-col gap-2">
        <button
          className="text-blue-600 border-2 border-blue-600 col-span-2 rounded-4xl hover:bg-blue-600 px-3 py-1.5 transition-colors hover:text-white cursor-pointer"
          onClick={handlePlayWithComputer}
        >
          Play With Computer
        </button>
        <button
          className="text-blue-600 border-2 border-blue-600 col-span-2 rounded-4xl hover:bg-blue-600 px-3 py-1.5 transition-colors hover:text-white cursor-pointer"
          onClick={handlePlayWithFriend}
        >
          Play With Friend
        </button>
      </div>
    </div>
  );
};

export default StartPage;
