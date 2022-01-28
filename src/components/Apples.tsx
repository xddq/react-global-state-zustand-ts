import React from "react";
import useStore from "./GlobalState";
/**
 * @description This component will be used to display all available apples
 * (from our global state).
 */

// can also write React.FC which maps to this.
const Apples: React.FunctionComponent = () => {
  // this uses the apples from the global state. Everytime apples will be
  // updated, this component will re-render.
  const apples = useStore((state) => state.apples);

  if (apples === 0) {
    return (
      <div className="text-2xl text-green-600 font-medium">
        We have no apples yet :[
      </div>
    );
  }

  console.log("Detected that an apple was added!");
  return (
    <div className="text-2xl text-green-600 font-medium">
      Yaaay, we have {apples} apples!
    </div>
  );
};

export default Apples;
