import { useNavigate } from "react-router-dom";
import useGameStore from "../stores/useGameStore";
import { playButtonSound } from "../utilities/sounds.js";

const SelectSymbolPage = () => {
  const navigate = useNavigate();

  const { playerSymbol, setPlayerSymbol } = useGameStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!playerSymbol) {
      alert("Please select one symbol to start the game!");
      return;
    }

    navigate("/game");
    playButtonSound();
  };

  const handleClick = () => {
    playButtonSound();
    navigate("/");
  };
  return (
    <div className="h-screen text-white flex gap-4 flex-col justify-center items-center">
      <h1 className="text-3xl text-blue-600 font-bold">Select Your Symbol</h1>
      <form
        className="grid grid-cols-2 gap-x-8 gap-y-4"
        onSubmit={handleSubmit}
      >
        <fieldset className="flex items-center gap-1.5">
          <label htmlFor="X" className="text-blue-600 font-bold text-lg">
            X
          </label>
          <input
            type="radio"
            id="X"
            name="symbol"
            onChange={() => {
              setPlayerSymbol("X");
              playButtonSound();
            }}
          />
        </fieldset>

        <fieldset className="flex items-center gap-1.5">
          <label htmlFor="0" className="text-blue-600 font-bold text-lg">
            0
          </label>
          <input
            type="radio"
            id="0"
            name="symbol"
            onChange={() => {
              setPlayerSymbol("0");
              playButtonSound();
            }}
          />
        </fieldset>

        <div className="flex flex-col gap-2.5 col-span-2">
          <button
            className="text-blue-600 border-2 border-blue-600 col-span-2 rounded-4xl hover:bg-blue-600 py-1 transition-colors hover:text-white cursor-pointer"
            type="submit"
          >
            Play
          </button>
          <button
            className="text-blue-600 border-2 border-blue-600 col-span-2 rounded-4xl hover:bg-blue-600 py-1 transition-colors hover:text-white cursor-pointer"
            type="button"
            onClick={handleClick}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default SelectSymbolPage;
