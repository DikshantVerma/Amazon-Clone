import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

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
      <h1>Checkout Page</h1>
    </>
  );
}

function LoginPage() {
  return (
    <>
      <Header />
      <h1>Login Page</h1>
    </>
  );
}

export default App;
