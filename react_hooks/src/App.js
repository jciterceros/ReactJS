//import React, { useState } from "react";
import UseState from "./components/UseState";

import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>React Hooks</p>
            </header>
            <main className="App-main">
                <div className="SideBar">
                    <ul>
                        <li>UseState</li>
                        <li>UseEffect</li>
                        <li>UseRef</li>
                        <li>UseReducer</li>
                        <li>UseContext</li>
                        <li>UseMemo</li>
                        <li>UseCallback</li>
                        <li>UseLayoutEffect</li>
                    </ul>
                </div>
                <div className="Content-APIs">
                    <UseState text="UseState" />
                </div>
            </main>
            <footer className="App-footer">
                <p>Practicando React Hooks</p>
            </footer>
        </div>
    );
}

export default App;
