import About from "./pages/about";
import Contribute from "./pages/contribute";
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
import EnglishGeneralData from "./data/generalData-english.json";
import FrenchGeneralData from "./data/generalData-french.json";
import KiswahiliGeneralData from "./data/generalData-kiswahili.json";

function App() {
  const [language, setLanguage] = useState(EnglishData);
  const [genLanguage, setGenLanguage] = useState(EnglishGeneralData);

  function languageSelected(language) {
    switch (language) {
      case "English":
        setLanguage(EnglishData);
        setGenLanguage(EnglishGeneralData);
        break;
      case "French":
        setLanguage(FrenchData);
        setGenLanguage(FrenchGeneralData);
        break;
      case "Kiswahili":
        setLanguage(KiswahiliData);
        setGenLanguage(KiswahiliGeneralData);
        break;
      default:
        setLanguage(EnglishData);
        setGenLanguage(EnglishGeneralData);
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
              <Homepage language={language} genLanguage={genLanguage} />
            </Route>
            <Route path="/home">
              <Homepage language={language} genLanguage={genLanguage} />
            </Route>
            <Route path="/homepage">
              <Homepage language={language} genLanguage={genLanguage} />
            </Route>
            <Route path="/about">
              <About language={language} genLanguage={genLanguage} />
            </Route>
            <Route path="/contribute">
              <Contribute language={language} genLanguage={genLanguage} />
            </Route>
            <Route path="/explore">
              <Explore language={language} genLanguage={genLanguage} />
            </Route>
            <Route path="/flashcards">
              <Flashcards language={language} genLanguage={genLanguage} />
            </Route>
            <Route path="/skinfo">
              <Skinfo />
            </Route>
            <Route path="*">
              <NotFound language={language} genLanguage={genLanguage} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
