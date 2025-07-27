import { Navigate, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import SelectSymbolPage from "./pages/SelectSymbolPage";
import EndPage from "./pages/EndPage";
import GamePage from "./pages/GamePage";
import useGameStore from "./stores/useGameStore";

function App() {
  const { winner, playWithComputer } = useGameStore();
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/select-symbol" element={<SelectSymbolPage />}></Route>
      <Route
        path="/game"
        element={playWithComputer !== null ? <GamePage /> : <Navigate to="/" />}
      ></Route>
      <Route
        path="/end"
        element={winner ? <EndPage /> : <Navigate to="/" />}
      ></Route>
    </Routes>
  );
}

export default App;
