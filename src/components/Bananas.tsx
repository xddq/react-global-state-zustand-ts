import React from "react";
/**
 * @description This component will be used to display all available bananas
 * (from our global state).
 */

// can also write React.FC which maps to this.
const Bananas: React.FunctionComponent = () => {
  return (
    <div className="text-2xl text-yellow-600 font-medium">
      This will display bananas!
    </div>
  );
};

export default Bananas;
