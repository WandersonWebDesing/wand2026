// ===============================
// 📦 IMPORTAÇÕES PRINCIPAIS
// ===============================
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ===============================
// 📄 PÁGINAS (NOME DOS ARQUIVOS DEVEM SER IGUAIS)
// ===============================
import Home from "./pages/home";
import Solucoes from "./pages/solucoes";
import Portfolio from "./pages/portfolio";
import Depoimentos from "./pages/depoimentos";
import Contato from "./pages/contato";
import Registro from "./pages/registro";

// ===============================
// 🧩 COMPONENTES
// ===============================
import Header from "./components/navbar";
//import Button from "./components/Button";
import Footer from "./components/footer";

// ===============================
// 🚀 COMPONENTE PRINCIPAL
// ===============================
function App() {
  return (
    <BrowserRouter>
      {/* 🔝 Cabeçalho fixo */}
      <Header />

      {/* 📄 Conteúdo principal */}
      <main style={{ marginTop: "65px", minHeight: "80vh" }}>
        <Routes>
          {/* 🌐 Rotas principais */}
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/registro" element={<Registro />} />

          {/* 🔘 Página de teste do botão 
          <Route path="/button" element={<Button />} />
            */}
          {/* ❌ Rota 404 */}
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

      {/* 🔻 Rodapé */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;