import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CountryInfo from "./Pages/CountryInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/items/:name' element={<CountryInfo />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
