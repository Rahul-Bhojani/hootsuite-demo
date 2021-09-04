// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import HootsuitSummary from "./components/HootsuiteSummary/HootsuiteSummary";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";
// import Services from "./components/Services/plateforms.jsx";
// import SignIn from "./components/SignIn/signin.jsx";
// import SignUp from "./components/SignUp/signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <HootsuitSummary />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
