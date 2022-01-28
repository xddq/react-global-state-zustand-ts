import React from "react";
import useStore from "./GlobalState";
/**
 * @description This component will be used to add an apple to our global state.
 */

// can also write React.FC which maps to this.
const ResetFruitsButton: React.FunctionComponent = () => {
  const clearFruits = useStore((state) => state.clearFruits);
  const handleClick = (_: React.MouseEvent<HTMLButtonElement>): void => {
    // increases the amount of apples by one. See the definition of addApple in
    // our state for more info.
    clearFruits();
    console.log("deleting fruits from global state.");
  };

  return (
    <button
      className="text-2xl text-pink-600 font-medium bg-gray-300 rounded-xl p-4 hover:bg-gray-400"
      onClick={handleClick}
    >
      Get rid of fruits!
    </button>
  );
};

export default ResetFruitsButton;
