import About from "./pages/about";
import { Contribute } from "./pages/contribute";
import { Explore } from "./pages/explore";
import Flashcards from "./pages/flashcards";
import Homepage from "./pages/homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Skinfo } from "./components/skinfo";
import NotFound from "./pages/notFound";
import Header from "./components/header";
import "./index.css";
import LanguageSelector from "./components/languageSelector";
import { useState } from "react";
import EnglishData from "./data/skinConditions.json";
import FrenchData from "./data/skinConditions-french.json";
import KiswahiliData from "./data/skinConditions-kiswahili.json";

function App() {
  const [language, setLanguage] = useState(EnglishData);

  function languageSelected(language) {
    switch (language) {
      case "English":
        setLanguage(EnglishData);
        break;
      case "French":
        setLanguage(FrenchData);
        break;
      case "Kiswahili":
        setLanguage(KiswahiliData);
        break;
      default:
        setLanguage(EnglishData);
        break;
    }
  }

  return (
    <>
      <Router>
        <div>
          <Header />
          <LanguageSelector languageSelected={languageSelected} />

          <Switch>
            <Route exact path="/">
              <Homepage language={language} />
            </Route>
            <Route path="/home">
              <Homepage language={language} />
            </Route>
            <Route path="/homepage">
              <Homepage language={language} />
            </Route>
            <Route path="/about">
              <About language={language} />
            </Route>
            <Route path="/contribute">
              <Contribute language={language} />
            </Route>
            <Route path="/explore">
              <Explore language={language} />
            </Route>
            <Route path="/flashcards">
              <Flashcards language={language} />
            </Route>
            <Route path="/skinfo">
              <Skinfo />
            </Route>
            <Route path="*">
              <NotFound language={language} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
