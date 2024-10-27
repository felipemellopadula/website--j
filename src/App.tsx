import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Agencia } from "./components/Agencia";
import { Portfolio } from "./components/Portfolio";
import { PortfolioItemPage } from "./components/PortfolioItemPage";
import { Contato } from "./components/Contato";

import "./styles/index.css";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/agencia" element={<Agencia />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<PortfolioItemPage />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
