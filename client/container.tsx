import Counter from "./counter";
import { connect, Dispatch } from "react-redux";

const mapStateToProps = (state: any) => {
  return {
    value: state
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
