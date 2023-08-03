import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from "./components/MainNavBar.jsx";
import GradioApp from "./components/GradioApp.jsx";
import Footer from "./components/Footer.jsx";
import LoginForm from "./components/LoginForm.jsx";
import SignupForm from "./components/SignupForm.jsx";

function App() {
    return (
        <>
            <Router>
                <MainNavBar></MainNavBar>
                <Routes>
                    <Route path="/" element={<GradioApp/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                    <Route path="/Signup" element={<SignupForm/>}/>
                </Routes>
                <Footer></Footer>
            </Router>
        </>
    );
}

export default App;