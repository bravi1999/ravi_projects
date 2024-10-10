import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./components/HomePage";
import Jobs from "./components/Jobs";

const App = () => {
    return (
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/" element={<ProtectedRoute element={() => <HomePage/>}/>}/>
            <Route exact path="/jobs" element={<ProtectedRoute element={() => <Jobs/>}/>}/>
        </Routes>
    )
} 

export default App;
