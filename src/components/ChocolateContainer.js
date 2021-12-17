import React from "react";
import { connect } from "react-redux";
import { buyChocolate } from "../redux";

const ChocolateContainer = (props) => {
  return (
    <div>
      <h1>My Own Practice with connect function</h1>
      <h2>Number of Chocolate - {props.numOfChocolate}</h2>
      <button onClick={() => props.dispatch(buyChocolate())}>
        Buy Chocolate
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfChocolate: state.chocolate.numOfChocolate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: () => dispatch(buyChocolate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer);
