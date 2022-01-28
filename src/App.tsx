import React from "react";
import AddAppleButton from "./components/AddAppleButton";
import AddBananaButton from "./components/AddBananaButton";
import Apples from "./components/Apples";
import Bananas from "./components/Bananas";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-screen">
      <Apples />
      <Bananas />
      <div className="buttons flex justify-center items-center space-x-4">
        <AddAppleButton />
        <AddBananaButton />
      </div>
    </div>
  );
}

export default App;
