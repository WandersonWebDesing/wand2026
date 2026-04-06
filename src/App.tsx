// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import Header from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ marginTop: '65px', minHeight: '80vh' }}>
        <Routes>
          {/* Rota principal */}
          <Route path="/" element={<div style={{ padding: '20px' }}>Página inicial</div>} />

          {/* ✅ Rota 404 (Página não encontrada) */}
          <Route 
            path="*" 
            element={
              <div style={{ padding: '20px', textAlign: 'center' }}>
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