# react-hyukie-bottom-sheet

A simple Bottom Sheet that can be used in React

## Installation

### npm

```
npm install react-hyukie-bottom-sheet --save
```

### yarn

```
yarn add react-hyukie-bottom-sheet
```

## Example

```typescript
import { useState } from "react";
import { BottomSheet } from "react-hyukie-bottom-sheet";

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
        handleBottomSheet={handleBottomSheet}
        isShow={isShow}
        contents={<p>Hello world</p>}
      />
    </>
  );
}

export default App;
```

## props

| Prop name         | essential |      type       | Description                                                                                        | Example                                |
| ----------------- | :-------: | :-------------: | -------------------------------------------------------------------------------------------------- | -------------------------------------- |
| isShow            |     X     |     boolean     | A value that determines whether the bottom sheet comes out or not.                                 | `true`                                 |
| handleBottomSheet |     X     |    function     | A function that manages isShow, a value that determines whether the bottom sheet comes out or not. | `setIsShow((prev) => !prev)`           |
| contents          |     X     | React.ReactNode | Content to be placed inside the bottom sheet                                                       | `<p>Hello World</p>`                   |
| height            |     X     |     number      | Height that the bottom sheet will occupy on the screen (vertical size)                             | `350`                                  |
| backGroundColor   |     X     |     string      | Existing screen color when Bottom Sheet is raised                                                  | `gray` `rgba(0, 0, 0, 0.2)` `#fff` ... |
| shadow            |     X     |     string      | Bottom Sheet's Top Shadow Style                                                                    | `0px 0px 5px 0px rgba(0, 0, 0, 0.45)`  |
| duration          |     X     |     number      | The speed at which the bottom sheet rises                                                          | `500`                                  |
