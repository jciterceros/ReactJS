//import React, { useState } from "react";
import UseState from "./components/UseState";
import UseEffect from "./components/UseEffect";

import { Steps } from "rsuite";

import "rsuite/dist/rsuite.min.css";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>React Hooks</p>
            </header>
            <main className="App-main">
                <div className="SideBar">
                    <Steps current={1} vertical>
                        <Steps.Item title="UseState" />
                        <Steps.Item title="UseEffect" />
                        <Steps.Item title="UseRef" />
                        <Steps.Item title="UseReducer" />
                        <Steps.Item title="UseContext" />
                        <Steps.Item title="UseMemo" />
                        <Steps.Item title="UseCallback" />
                        <Steps.Item title="UseLayoutEffect" />
                    </Steps>
                </div>
                <div className="Content-APIs">
                    <UseState text="UseState" />
                    <UseEffect text="UseEffect" />
                </div>
            </main>
            <footer className="App-footer">
                <p>Practicando React Hooks</p>
            </footer>
        </div>
    );
}

export default App;
