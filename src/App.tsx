import { useState } from "react";

import { BottomSheet } from "./lib";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleBottomSheet = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <>
      <button onClick={handleBottomSheet}>
        <h1>Bottom-Sheet Show</h1>
      </button>
      <BottomSheet
        height={250}
        handleBottomSheet={handleBottomSheet}
        isShow={isShow}
        contents={<p>Hello world</p>}
      />
    </>
  );
}

export default App;
