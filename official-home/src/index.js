import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Square = ({value, handleClick}) => {
  console.log(value);
  console.log(handleClick);
  return (
    <button className="square" onClick={() => handleClick('X')}>
      {value}
    </button>
  );
};


const Board = () => {
  const initialState = {
    squares: Array(9).fill(null),
    xIsNext: true,
  }

  const [state, setState] = useState(initialState);
  // const changeState =  (squares, )=> {
  //   return {squares: squares}
  // };

  const handleClick = (i) => {
    const squares = state.squares.slice();
    squares[i] = state.xIsNext ? 'X' : 'O';
    setState(
      {squares, xIsNext: !state.xIsNext}
      );
  }

  const renderSquare = (index) => {
    return <Square value={state.squares[index]} handleClick={()=>handleClick(index)}/>
  }

  const status = `Next player: ${state.xIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}


const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
};


// ========================================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);

