import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from "./components/MainNavBar.jsx";

function App() {
    return (
        <>
            <MainNavBar></MainNavBar>
            <div>
                <gradio-app src="https://thunder-007-dr-brain.hf.space"></gradio-app>
            </div>
        </>
    );
}

export default App;