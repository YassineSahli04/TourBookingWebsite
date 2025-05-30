import Navbar from "./component/Navbar"
import Home from "./routes/HomePage";
import About from "./routes/AboutPage";
import Book from "./routes/BookPage";
import Tours from "./routes/ToursPage";
import TourDetails from "./routes/TourDetailPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/tour/:id" element={<TourDetails />} />
      </Routes>
    </div>
  );
}

export default App
