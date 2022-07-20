import "./style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Header from "./Components/Header";
import Feed from "./Routes/Feed";
import MyHistory from "./Routes/MyHistory";
import Profile from "./Routes/Profile";
import All from "./Routes/All";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/history" element={<MyHistory />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
