import { About } from "./pages/about";
import { Contribute } from "./pages/contribute";
import { Explore } from "./pages/explore";
import Flashcards from "./pages/flashcards";
import { Homepage } from "./pages/homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Eczema } from "./pages/eczema";
import NotFound from "./pages/notFound";
import Header from "./components/header";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />

          <Switch>
            <Route component={Homepage} exact path="/" />
            <Route component={Homepage} path="/home" />
            <Route component={Homepage} path="/homepage" />
            <Route component={About} exact path="/about" />
            <Route component={Contribute} path="/contribute" />
            <Route component={Explore} path="/explore" />
            <Route component={Flashcards} path="/flashcards" />
            <Route component={Eczema} path="/eczema" />
            <Route component={NotFound} path="*" />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
