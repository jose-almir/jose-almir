import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portifolio" component={Portifolio} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
