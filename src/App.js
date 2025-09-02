import Topbar from "./Topbar/Topbar.js";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper.js";
import Footer from "./Footer/Footer.js";

import "./i18n.js";
import LanguageDetectorComponent from "./LanguageDetectorComponent";

import "nes.css/css/nes.min.css";
import "./App.css";

function App() {
  return (
    <LanguageDetectorComponent>
      <div className="App">
        <header className="App-header">
          {/* <div className="topbar-container"> */}
          <Topbar />
          {/* </div> */}
          <div className="content-container">
            <ContentWrapper />
          </div>
          {/* <div className="footer-container"> */}
          <Footer />
          {/* </div> */}
        </header>
      </div>
    </LanguageDetectorComponent>
  );
}

export default App;