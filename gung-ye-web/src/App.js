import "./style/App.css";
import Header from "./Header";
import { useState } from "react";

function App() {
    const [curMenu, setCurMenu] = useState("home");

    return (
        <div className="App">
            <Header curMenu={curMenu} setCurMenu={setCurMenu} ></Header>
        </div>
    );
}

export default App;
