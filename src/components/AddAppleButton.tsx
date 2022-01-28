import React from "react";
import useStore from "../components/GlobalState";
/**
 * @description This component will be used to add an apple to our global state.
 */

// can also write React.FC which maps to this.
const AddAppleButton: React.FunctionComponent = () => {
  const addApple = useStore((state) => state.addApple);
  const handleClick = (_: React.MouseEvent<HTMLButtonElement>): void => {
    // increases the amount of apples by one. See the definition of addApple in
    // our state for more info.
    addApple();
    console.log("add apple button was clicked.");
  };

  return (
    <button
      className="text-2xl text-green-600 font-medium bg-gray-300 rounded-xl p-4 hover:bg-gray-400"
      onClick={handleClick}
    >
      Add an apple!
    </button>
  );
};

export default AddAppleButton;
