/* eslint-disable */
import React, { Component } from 'react';
import Board from './Board';
import calculateWinner from '../utils';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNum: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNum: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNum: step,
      xIsNext: (step % 2) === 0
    })
  }

  render() {
    const { history, xIsNext, stepNum } = this.state;
    const current = history[stepNum];
    const previous = (stepNum > 0) ? history[stepNum - 1] : null;
    let index;

    console.log('Previous', previous)
    console.log('Current', current)

    if(previous) {
      for(let i = 0; i < previous.squares.length; i ++) {
        if(previous.squares[i] !== current.squares[i]) {
          index = i;
        }
      }
    }

    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + ' at ' + index:
        'Go to game start'
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{ desc }</button>
        </li>
      );
    })

    let status;
    if(winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }
    const gameStyle = {
      display: 'flex',
      flexDirection: 'row'
    }
    return (
      <div style={gameStyle} className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{ status }</div>
          <ol>{ moves }</ol>
        </div>
      </div>
    );
  }
}

export default Game;
