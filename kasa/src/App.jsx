import "./style/css/App.css";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes as Navigation,
} from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Navigation>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        </Navigation>
      </Router>
    </div>
  );
}

export default App;
