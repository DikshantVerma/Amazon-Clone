import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/checkout" element={<h1>Checkout</h1>} />

          <Route path="/login" element={<h1>login</h1>} />

          <Route path="/" element={<h1>Home Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
