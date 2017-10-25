import * as React from "react";

interface OwnProps extends React.Props<any> {
  value: any;
  onIncrement: () => any;
  onDecrement: () => any;
}

export default class Counter extends React.Component <OwnProps, any> {

  constructor(props: OwnProps ) {
    super(props);
    console.log(props);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}
