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
        height={350}
        backGroundColor={"rgba(0, 0, 0, 0.2)"}
        shadow={"0px 0px 5px 0px rgba(0, 0, 0, 0.45)"}
        handleBottomSheet={handleBottomSheet}
        duration={800}
        borderRadius={15}
        isShow={isShow}
        contents={<p>Hello world</p>}
      />
    </>
  );
}

export default App;
