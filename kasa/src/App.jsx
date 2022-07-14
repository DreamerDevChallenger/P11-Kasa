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
import ScrollToTop from "./utils/ScrollToTop";
import CheckingId from "./utils/CheckingIfIdExists";

function App() {
  return (
    <div className="App">
      <Router basename="/P11-Kasa/">
        <ScrollToTop>
          <Header></Header>
          <Navigation>
            <Route exact path="/" element={<Home></Home>}></Route>
            <Route exact path="/about" element={<About></About>}></Route>
            <Route
              exact
              path={"apartment/:id/:name"}
              element={<CheckingId></CheckingId>}
            ></Route>
            <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          </Navigation>
          <Footer></Footer>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
