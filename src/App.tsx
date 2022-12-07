import React, { useState } from "react";
import "./App.css";

interface ClickedProps {
  clientX: number;
  clientY: number;
}
function App() {
  const [clickedPoints, setClickedPoints] = useState<ClickedProps[]>([]);
  const [undoPoints, setUndoPoints] = useState<ClickedProps[]>([]);

  //* Função para pegar as cordenadas onde foi clicado com o mouse
  function getCordenatesClick(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e;
    // Vai armazenar as cordenadas com useState em um array
    setClickedPoints([...clickedPoints, { clientX, clientY }]);
  }

  //* Função para remover o ponto adicionado pelo click
  function handleUndoClick() {
    // cria uma cópia do array clickedPoints
    const newClickedPoints = [...clickedPoints];
    // Com método pop remove o último point do array
    const undoPoint = newClickedPoints.pop();
    //Adiciona novamente ao state o novo array modificado
    setClickedPoints(newClickedPoints);
    //verifica se undoPoint esta vazio
    if (!undoPoint) return;
    // Adiciona o ponto que foi removido a um novo state
    setUndoPoints([...undoPoints, undoPoint]);
  }

  //* Função para refazer o ponto adicionado pelo click
  function handleRedoClick() {
    // cria uma cópia do array undoPoints
    const newUndoPoints = [...undoPoints];
    // Com método pop remove o último point do array e armazena em redoPoint
    const redoPoint = newUndoPoints.pop();

    setUndoPoints(newUndoPoints);
    //verifica se redoPoint esta vazio
    if (!redoPoint) return;
    // Adiciona novamente o ponto que foi removido ao array
    setClickedPoints([...clickedPoints, redoPoint]);
  }

  return (
    <>
      <button disabled={clickedPoints.length === 0} onClick={handleUndoClick}>
        Undo
      </button>
      <button disabled={undoPoints.length === 0} onClick={handleRedoClick}>
        Redo
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
