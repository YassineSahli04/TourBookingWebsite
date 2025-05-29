import Navbar from "./component/Navbar"
import Home from "./routes/Home";
import About from "./routes/About";
import Book from "./routes/Book";
import Tours from "./routes/Tours";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/book" element={<Book/>}/>
      </Routes>
    </div>
  );
}

export default App
