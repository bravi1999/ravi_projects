import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";

const App = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<HomePage/>}/>
        </Routes>
    )
} 

export default App;
