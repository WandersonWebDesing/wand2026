// ===============================
// 📦 IMPORTAÇÕES PRINCIPAIS
// ===============================
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ===============================
// 📄 PÁGINAS
// ===============================
import Home from "./pages/home";
import Solucoes from "./pages/solucoes";
import Portfolio from "./pages/portfolio";
import Depoimentos from "./pages/depoimentos";
import Contato from "./pages/contato";
import Registro from "./pages/registro";

// ===============================
// 🧩 COMPONENTES (PADRÃO CORRETO)
// ===============================
import Header from "./components/Navbar";
import Footer from "./components/Footer";

// ===============================
// 🚀 COMPONENTE PRINCIPAL
// ===============================
function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ marginTop: "65px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/registro" element={<Registro />} />

          <Route
            path="*"
            element={
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1>404</h1>
                <p>Página não encontrada</p>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;