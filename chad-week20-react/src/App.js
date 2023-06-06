import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import { useState } from "react";


function App() {
  // const currentPage = "About";
  // react states
  const [currentPage, setCurrentPage] = useState("About")

  function renderPage() {
    if(currentPage == "About") {
      return <AboutMe/>
    }

    if(currentPage == "Portfolio") {
      return <Portfolio />
    }
  }

  return (
    <>
      <Header setCurrentPage={setCurrentPage}/>
      <main>

        {renderPage()}
        
      </main>

      {/* Footer.js */}
      <footer>
        <div class="card-footer text-body-secondary">This is the footer</div>
      </footer>
    </>
  );
}

export default App;
