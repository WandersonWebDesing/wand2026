// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Páginas
import Home from './pages/home';
import Solucoes from './pages/solucoes';
import Portfolio from './pages/portfolio';
import Depoimentos from './pages/depoimentos';
import Contato from './pages/contato';
import Registro from './pages/registro';

//import Login from './pages/Login.jsx';


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

        {/* Links para Desktop */}
        <div className="nav-desktop" style={styles.navDesktop}>
          <Link to="/" className="nav-link" style={styles.linkDesktop}>Home</Link>
          <Link to="/solucoes" className="nav-link" style={styles.linkDesktop}>Soluções</Link>
          <Link to="/portfolio" className="nav-link" style={styles.linkDesktop}>Portfólio</Link>
          <Link to="/depoimentos" className="nav-link" style={styles.linkDesktop}>Depoimentos</Link>
          <Link to="/contato" className="nav-link" style={styles.linkDesktop}>Contato</Link>
          
          {/* Botões estilo WhatsApp Web */}
          <Link to="/registro" className="btn-zap" style={styles.btnZap}>Cadastre-se</Link>
          <Link to="/login" className="btn-zap-outline" style={styles.btnZapOutline}>Login</Link>
        </div>

        {/* Botão Hambúrguer */}
        <button 
          onClick={alternarMenu} 
          className="hamburger-btn"
          style={styles.hamburgerBtn}
          aria-label="Menu"
        >
          {menuAberto ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </nav>

      {/* PELÍCULA DE FUNDO (Overlay) */}
      <div 
        onClick={fecharMenu}
        style={{
          ...styles.overlay,
          opacity: menuAberto ? 1 : 0,
          visibility: menuAberto ? 'visible' : 'hidden',
        }}
      />

      {/* MENU MOBILE (Abrindo de baixo para cima - Bottom Sheet style) */}
      <div style={{
        ...styles.menuMobile,
        transform: menuAberto ? 'translateY(0)' : 'translateY(100%)',
      }}>
        {/* Puxador visual simulando UI do mobile para criar Rapport de UX */}
        <div style={styles.pullBar}></div>
        
        <Link to="/" className="mobile-link" style={styles.linkMobile} onClick={fecharMenu}>Home</Link>
        <Link to="/solucoes" className="mobile-link" style={styles.linkMobile} onClick={fecharMenu}>Soluções</Link>
        <Link to="/portfolio" className="mobile-link" style={styles.linkMobile} onClick={fecharMenu}>Portfólio</Link>
        <Link to="/depoimentos" className="mobile-link" style={styles.linkMobile} onClick={fecharMenu}>Depoimentos</Link>
        <Link to="/contato" className="mobile-link" style={styles.linkMobile} onClick={fecharMenu}>Contato</Link>
        <hr style={{ width: '100%', borderColor: '#f0f0f0', margin: '10px 0' }} />
        <Link to="/registro" className="mobile-link" style={{...styles.linkMobile, color: '#128C7E', fontWeight: 'bold'}} onClick={fecharMenu}>Cadastre-se</Link>
        <Link to="/login" className="mobile-link" style={{...styles.linkMobile, color: '#075E54', fontWeight: 'bold'}} onClick={fecharMenu}>Login</Link>
      </div>

      {/* CSS para efeitos de hover e responsividade */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
        
        /* Efeito de Intenção do Usuário no Desktop */
        .nav-link {
          position: relative;
          opacity: 0.85;
          outline: none;
        }
        .nav-link:hover, .nav-link:focus {
          opacity: 1;
          color: #25D366 !important; /* Verde brilhante do zap */
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

        /* Hover dos botões */
        .btn-zap:hover {
          background-color: #20ba5a !important;
          transform: translateY(-2px);
        }
        .btn-zap-outline:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          transform: translateY(-2px);
        }

        /* Toque no Mobile - Intenção de Feedback Visual */
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

// Estilos padronizados fora do componente para melhor performance
const styles = {
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
  navDesktop: { 
    display: 'flex', 
    alignItems: 'center', 
    gap: '20px' 
  },
  linkDesktop: { 
    color: '#fff', 
    textDecoration: 'none', 
    fontSize: '0.95rem', 
    fontWeight: '500',
    transition: 'all 0.2s ease' 
  },
  btnZap: {
    backgroundColor: '#25D366',
    color: '#fff',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  btnZapOutline: {
    backgroundColor: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    border: '2px solid #fff',
    transition: 'all 0.3s ease'
  },
  hamburgerBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1001
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 900,
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  menuMobile: {
    position: 'fixed',
    bottom: 0, // Posiciona na parte inferior
    left: 0,
    width: '100%',
    background: '#fff',
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 20px 30px 20px', // Padding focado na ergonomia mobile
    boxSizing: 'border-box',
    gap: '4px',
    zIndex: 950,
    transition: 'transform 0.4s cubic-bezier(0.1, 1, 0.1, 1)', // Transição fluida de mola
    boxShadow: '0 -4px 16px rgba(0,0,0,0.15)',
    borderTopLeftRadius: '20px', // Cantos arredondados estilo modal
    borderTopRightRadius: '20px',
  },
  pullBar: {
    width: '40px',
    height: '5px',
    background: '#ccc',
    borderRadius: '10px',
    margin: '0 auto 15px auto',
    alignSelf: 'center'
  },
  linkMobile: { 
    color: '#333', 
    textDecoration: 'none', 
    fontSize: '1.1rem', 
    width: '100%', 
    textAlign: 'left', 
    padding: '12px 16px',
    boxSizing: 'border-box'
  }
};

// Componente temporário para páginas em construção
function EmConstrucao({ nome }) {
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
      {/* MENU FIXO REFATORADO */}
      <Header />

      {/* CONTEÚDO */}
      <main style={{ marginTop: '65px', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/contato" element={<Contato />} />
          
          <Route path="/registro" element={<Registro nome="Registro" />} />
         {/* <Route path="/login" element={<Login nome="Login" />} />  /}


          {/* Páginas em construção */}
          <Route path="/carrinho" element={<EmConstrucao nome="Carrinho" />} />
          <Route path="/button" element={<Button nome="Button" />} />
                    <Route path="/conta" element={<EmConstrucao nome="Conta" />} />

          {/* ROTA 404 */}
          <Route path="*" element={<EmConstrucao nome="Página não encontrada" />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;