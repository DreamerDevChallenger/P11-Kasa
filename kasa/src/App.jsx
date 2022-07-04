import "./style/css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Navigation>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/about" element={<About></About>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Navigation>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
