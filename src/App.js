import Topbar from "./Topbar/Topbar.js";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper.js";
import Footer from "./Footer/Footer.js";

import "./App.css";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          {/* <div className="topbar-container"> */}
            <Topbar/>
          {/* </div> */}
          <div className="content-container">
            <ContentWrapper />
          </div>
          {/* <div className="footer-container"> */}
            <Footer />
          {/* </div> */}
        </header>
      </div>
  );
}

export default App;
