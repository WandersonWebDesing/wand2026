// src/App.tsx
import React, { useState, CSSProperties } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Páginas
import Home from './pages/home';
import Solucoes from './pages/solucoes';
import Portfolio from './pages/portfolio';
import Depoimentos from './pages/depoimentos';
import Contato from './pages/contato';
import Registro from './pages/registro';

// Componentes gerais
import Footer from './components/footer';
import Button from './components/button';

// --- COMPONENTE DE NAVEGAÇÃO ---
function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <>
      <nav style={styles.navbar}>
        {/* Logo / Marca */}
        <Link to="/" style={styles.logo} onClick={fecharMenu}>
          ZAP BRAND
        </Link>

        {/* Links Desktop */}
        <div className="nav-desktop" style={styles.navDesktop}>
          <Link to="/" style={styles.linkDesktop}>Home</Link>
          <Link to="/solucoes" style={styles.linkDesktop}>Soluções</Link>
          <Link to="/portfolio" style={styles.linkDesktop}>Portfólio</Link>
          <Link to="/depoimentos" style={styles.linkDesktop}>Depoimentos</Link>
          <Link to="/contato" style={styles.linkDesktop}>Contato</Link>
          <Link to="/registro" style={styles.btnZap}>Cadastre-se</Link>
          <Link to="/login" style={styles.btnZapOutline}>Login</Link>
        </div>

        {/* Botão Hamburger */}
        <button onClick={alternarMenu} style={styles.hamburgerBtn} aria-label="Menu">
          {menuAberto ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>

      {/* Overlay */}
      <div 
        onClick={fecharMenu}
        style={{
          ...styles.overlay,
          opacity: menuAberto ? 1 : 0,
          visibility: menuAberto ? 'visible' : 'hidden',
        }}
      />

      {/* Menu Mobile */}
      <div style={{
        ...styles.menuMobile,
        transform: menuAberto ? 'translateY(0)' : 'translateY(100%)',
      }}>
        <div style={styles.pullBar}></div>
        <Link to="/" style={styles.linkMobile} onClick={fecharMenu}>Home</Link>
        <Link to="/solucoes" style={styles.linkMobile} onClick={fecharMenu}>Soluções</Link>
        <Link to="/portfolio" style={styles.linkMobile} onClick={fecharMenu}>Portfólio</Link>
        <Link to="/depoimentos" style={styles.linkMobile} onClick={fecharMenu}>Depoimentos</Link>
        <Link to="/contato" style={styles.linkMobile} onClick={fecharMenu}>Contato</Link>
        <hr style={{ width: '100%', borderColor: '#f0f0f0', margin: '10px 0' }} />
        <Link to="/registro" style={{...styles.linkMobile, color: '#128C7E', fontWeight: 'bold'}} onClick={fecharMenu}>Cadastre-se</Link>
        <Link to="/login" style={{...styles.linkMobile, color: '#075E54', fontWeight: 'bold'}} onClick={fecharMenu}>Login</Link>
      </div>

      {/* CSS puro */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }

        .nav-link {
          position: relative;
          opacity: 0.85;
        }
        .nav-link:hover, .nav-link:focus {
          opacity: 1;
          color: #25D366 !important;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: #25D366;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after, .nav-link:focus::after {
          width: 100%;
        }

        .btn-zap:hover {
          background-color: #20ba5a !important;
          transform: translateY(-2px);
        }
        .btn-zap-outline:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-2px);
        }

        .mobile-link {
          transition: background 0.2s, padding-left 0.2s;
          border-radius: 8px;
        }
        .mobile-link:active, .mobile-link:focus {
          background-color: #f5f5f5;
          padding-left: 20px !important;
          color: #128C7E !important;
        }
      `}</style>
    </>
  );
}

// --- ESTILOS ---
const styles: { [key: string]: CSSProperties } = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '65px',
    background: '#075E54',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 24px',
    boxSizing: 'border-box',
    zIndex: 1000,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  },
  logo: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.4rem'
  },
  navDesktop: { display: 'flex', alignItems: 'center', gap: '20px' },
  linkDesktop: { color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500, transition: 'all 0.2s ease' },
  btnZap: { backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', transition: 'all 0.3s ease', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' },
  btnZapOutline: { backgroundColor: 'transparent', color: '#fff', textDecoration: 'none', padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', border: '2px solid #fff', transition: 'all 0.3s ease' },
  hamburgerBtn: { background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1001 },
  overlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', zIndex: 900, transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)' },
  menuMobile: { position: 'fixed', bottom: 0, left: 0, width: '100%', background: '#fff', display: 'flex', flexDirection: 'column', padding: '12px 20px 30px 20px', boxSizing: 'border-box', gap: '4px', zIndex: 950, transition: 'transform 0.4s cubic-bezier(0.1,1,0.1,1)', boxShadow: '0 -4px 16px rgba(0,0,0,0.15)', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' },
  pullBar: { width: '40px', height: '5px', background: '#ccc', borderRadius: '10px', margin: '0 auto 15px auto', alignSelf: 'center' },
  linkMobile: { color: '#333', textDecoration: 'none', fontSize: '1.1rem', width: '100%', textAlign: 'left', padding: '12px 16px', boxSizing: 'border-box' }
};

// Componente temporário para páginas em construção
function EmConstrucao({ nome }: { nome: string }) {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{nome}</h1>
      <p>🚧 Página em construção...</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ marginTop: '65px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/registro" element={<Registro nome="Registro" />} />

          <Route path="/carrinho" element={<EmConstrucao nome="Carrinho" />} />
          <Route path="/button" element={<Button nome="Button" />} />
          <Route path="/conta" element={<EmConstrucao nome="Conta" />} />
          <Route path="*" element={<EmConstrucao nome="Página não encontrada" />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;