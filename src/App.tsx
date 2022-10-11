import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component1 } from "./Component1";
import { SpreadShit } from "./SpreadShit";
import ClassComp from "./ClassComp";
import { GenericListt } from "./GenericList";
import { NameProvider } from "./NameProvider";
import NPChild from "./NPChild";
import MouseMove from "./MouseMove";
import GenericHOC from "./GenericHOC";
import GenereicHocTester from "./GenereicHocTester";
import { Counter } from "./features/counter/Counter";
import { Counter2 } from "./features/counter2/Counter2";

function App() {
  type cnt = number;
  const [countt, setCountt] = React.useState<cnt>(0);

  const shiftCount = React.useCallback(() => setCountt(countt + 1), [countt]);

  const Generical = GenericHOC(GenereicHocTester);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Component1 label="BodyCount: " count={countt} onIncrement={shiftCount} />
        <SpreadShit className={"classy"} style={{ backgroundColor: "lightcyan" }}>
          {`I'll spread every property you give me!`}
          <h1>hello i am another child</h1>
        </SpreadShit>
        <ClassComp label="ClassBodyCount: " />
        <GenericListt />

        {/* passing props to props.children */}
        <NameProvider>{({ name }) => <NPChild name={name} />}</NameProvider>
        <NameProvider>{({ name }) => <div>{name}</div>}</NameProvider>
        <MouseMove
          render={(mouse) => (
            <p>
              The mouse position is {mouse.x}, {mouse.y}
            </p>
          )}
        />
      <Generical name={"fjkun06"} age={21} city={"buea".toUpperCase()} initialCount={10}/>
      <br/>
      <Counter/>
      <Counter2/>
      </header>
    </div>
  );
}

export default App;
