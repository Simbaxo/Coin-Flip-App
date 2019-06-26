import React, { Component } from 'react'
import Coin from './Coin'
import { choice } from "./helpers";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' }
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  flipCoin() {
    // take help function to get a random choice
    const newCoin = choice(this.props.coins)
    this.setState(st => {
      // create an object with the simple state changes
      let newState = {
        ...st, // sets heads and tails as their current values
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
      }
      // if statement for the conditional state changes
      if (newCoin.side === 'heads') {
        // add one to heads
        newState.numHeads += 1
      } else {
        // add one to tails
        newState.numTails += 1
      }
      return newState
    })
  }

  handleClick(e) {
    this.flipCoin()
  }

  render() {
    return (
      <div>
        <h2>Let's Flip a coin!</h2>
        <Coin face={this.props.coins[0]} />
        <button onClick={this.handleClick}>FLIP ME</button>
        <p>Out of {this.state.numFlips} flips, there have been {this.state.numHeads} heads and {this.state.numTails} tails.</p>
      </div>
    )
  }
}

export default CoinContainer