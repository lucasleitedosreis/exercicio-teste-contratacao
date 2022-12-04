import React, { useState } from "react";
import "./App.css";

interface ClickedProps {
  clientX: number;
  clientY: number;
}
function App() {
  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([]);

  function getCordenatesClick(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e;
    setClickedPoints([...clickedPoints, { clientX, clientY }]);
  }
  return <div className="App" onClick={getCordenatesClick}></div>;
}

export default App;
