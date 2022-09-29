import React, { Component } from 'react'
import LotteryBalls from './LotteryBalls'
import './Lottery.css'

export default class Lottery extends Component {
    static defaultProps={
        title:'Big Lottery',
        numBalls:6,
        maxNum:40
    }
    constructor(props){
        super(props);
        this.state={
            nums:Array.from({length:this.props.numBalls})
        }
    }
    handleClick=()=>{
        this.setState(currentState=>({
            nums:currentState.nums.map(
                h=>Math.floor(Math.random()*this.props.maxNum)+1
                )
        }));
    }

  render() {
    return (
        <div className='Lottery'>
            <h1>{this.props.title}</h1>
            <div>
                {this.state.nums.map(n=><LotteryBalls num={n}/>)}
            </div>
            <button onClick={this.handleClick}> Generate!!!</button>
        </div>
    )
  }
}
