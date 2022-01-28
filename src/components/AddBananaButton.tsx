import React from "react";
/**
 * @description This component will be used to add a banana to our global state.
 */

// can also write React.FC which maps to this.
const AddBananaButton: React.FunctionComponent = () => {
  const handleClick = (_: React.MouseEvent<HTMLButtonElement>): void => {
    console.log("button was clicked.");
  };

  return (
    <button
      className="text-2xl text-yellow-600 font-medium bg-gray-300 rounded-xl p-4 hover:bg-gray-400"
      onClick={handleClick}
    >
      Add a banana!
    </button>
  );
};

export default AddBananaButton;
