import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <NavBar /> <Home /> <About /> <Footer />{" "}
              </div>
            }
          ></Route>
          <Route path="/Resume" element={<Resume/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
          <Route path="/ContactMe" element={<Contact/>}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
