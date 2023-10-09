import './App.css';
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CategoryDetail from "./pages/CategoryDetail";

function App() {
    return (

        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories/:id" element={<CategoryDetail/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
