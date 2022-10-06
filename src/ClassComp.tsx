import React, { Component } from 'react'

interface State{
  count: number;
}
interface Props{
  label: string;
}


export default class ClassComp extends Component<Props,State> {
readonly state: State ={
  count: 0,
}

handleIncrement = () => {
  this.setState({count: this.state["count"] + 1})};


  render() {

  const {handleIncrement} = this;
const {label} = this.props;
const {count} = this.state;

    return (
      <div>
      <span>
        {label}: {count}
      </span>
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
    )
  }
}
