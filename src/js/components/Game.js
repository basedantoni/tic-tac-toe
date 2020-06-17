/* eslint-disable */
import React, { Component } from 'react';
import Board from './Board';
import calculateWinner from '../utils/calculateWinner';
import colRow from '../utils/colRow';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        locations: Array(9).fill(null)
      }],
      stepNum: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNum + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const locations = current.locations.slice();

    if(calculateWinner(squares) || squares[i] || locations[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    locations[i] = colRow(i);
    this.setState({
      history: history.concat([{
        squares: squares,
        locations: locations
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
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + ' at ':
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
