import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { buyChocolate } from "../redux";

const HooksChocolateContainer = (props) => {
  const numOfChocolate = useSelector((state) => state.chocolate.numOfChocolate);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>My Own Practice with hooks</h1>
      <h2>Number of Chocolate - {numOfChocolate}</h2>
      <button onClick={() => dispatch(buyChocolate())}>Buy Chocolate</button>
    </div>
  );
};

export default HooksChocolateContainer;
