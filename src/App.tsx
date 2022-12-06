import React, { useState } from "react";
import "./App.css";

interface ClickedProps {
  clientX: number;
  clientY: number;
}
function App() {
  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([]);

  //* Função para pegar as cordenadas onde foi clicado com o mouse
  function getCordenatesClick(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e;
    //** Vai armazenar as cordenadas com useState em um array
    setClickedPoints([...clickedPoints, { clientX, clientY }]);
  }
  return (
    <div className="App" onClick={getCordenatesClick}>
      {clickedPoints.map((clickedPoint, index) => {
        return (
          <div
            key={index}
            style={{
              position: "absolute",
              left: clickedPoint.clientX,
              top: clickedPoint.clientY,
            }}
          >
            0
          </div>
        );
      })}
    </div>
  );
}

export default App;
