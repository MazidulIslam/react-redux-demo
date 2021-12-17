import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h1>Num Of IceCream - {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>Buy Now</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("this is state", state);
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
