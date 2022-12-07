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

  //* Função para remover o o ponto adicionado pelo click
  function handleUndoClick() {
    //* cria uma cópia do array clickedPoints
    const newClickedPoints = [...clickedPoints];
    //* Com método pop remove o último point do array
    newClickedPoints.pop();
    //*Adiciona novamente ao state o novo array modificado
    setClickedPoints(newClickedPoints);
  }
  return (
    <>
      <button disabled={clickedPoints.length === 0} onClick={handleUndoClick}>
        Undo
      </button>
      <div className="App" onClick={getCordenatesClick}>
        {clickedPoints.map((clickedPoint, index) => {
          return (
            <div
              key={index}
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                background: "blue",
                borderRadius: "50%",
                left: clickedPoint.clientX - 8,
                top: clickedPoint.clientY - 9,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default App;
