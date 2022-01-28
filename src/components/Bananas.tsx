import React from "react";
import useStore from "./GlobalState";
/**
 * @description This component will be used to display all available bananas
 * (from our global state).
 */

// can also write React.FC which maps to this.
const Bananas: React.FunctionComponent = () => {
  // this uses the apples from the global state. Everytime apples will be
  // updated, this component will re-render.
  const bananas = useStore((state) => state.bananas);

  if (bananas === 0) {
    return (
      <div className="text-2xl text-green-600 font-medium">
        We have no bananas yet :[
      </div>
    );
  }

  console.log("Detected that a banana was added!");
  return (
    <div className="text-2xl text-green-600 font-medium">
      Yaaay, we have {bananas} bananas!
    </div>
  );
};

export default Bananas;
