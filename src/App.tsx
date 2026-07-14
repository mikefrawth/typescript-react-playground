import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Array from "./pages/Array";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/array">Array</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/array" element={<Array />} />
      </Routes>
    </>
  );
}
