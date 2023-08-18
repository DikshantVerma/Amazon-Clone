import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

function CheckoutPage() {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
}

function LoginPage() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export default App;
