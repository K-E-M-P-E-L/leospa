import { BrowserRouter as Router, Route } from "react-router-dom"
import AdminPage from "./pages/Admin/Admin";
import Features from "./pages/Features/Features";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Services" component={Services}></Route>
          <Route exact path="/Features" component={Features}></Route>
          <Route exact path="/Admin" component={AdminPage}></Route>
      </div>
    </Router>
  );
}

export default App;
