import { useState, useEffect, useRef, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import type { CSSProperties } from "react"; // ✅ ADICIONADO

// Tipagem
type Produto = string;

const produtos: Produto[] = [
  "Criação de Sites",
  "Landing Page Profissional",
  "Sistema com Node.js",
  "Loja Virtual Completa",
  "Consultoria em Tecnologia",
  "SEO e Google",
  "Marketing Digital",
  "Automação de Sistemas"
];

export default function Header() {
  const navigate = useNavigate();

  const [menuAberto, setMenuAberto] = useState(false);
  const [busca, setBusca] = useState("");
  const [sugestoes, setSugestoes] = useState<Produto[]>([]);
  const [historico, setHistorico] = useState<Produto[]>([]);
  const [isMobile, setIsMobile] = useState(false); // ✅ Adicionado para detectar mobile

  const menuRef = useRef<HTMLDivElement | null>(null);

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  // ✅ Monitora o tamanho da tela para exibir o menu hambúrguer
  useEffect(() => {
    const checarTamanho = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checarTamanho();
    window.addEventListener("resize", checarTamanho);
    return () => window.removeEventListener("resize", checarTamanho);
  }, []);

  useEffect(() => {
    if (busca.trim()) {
      const filtrados = produtos.filter((item) =>
        item.toLowerCase().includes(busca.toLowerCase())
      );
      setSugestoes(filtrados);
    } else {
      setSugestoes([]);
    }
  }, [busca]);

  const clicarProduto = (item: Produto) => {
    setHistorico((prev) =>
      [item, ...prev.filter((i) => i !== item)].slice(0, 5)
    );

    setBusca("");
    setSugestoes([]);
    navigate("/solucoes");
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuAberto(false);
      }
    };

    if (menuAberto) document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuAberto]);

  return (
    <>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo}>
          WandersonWeb 🚀
        </Link>

        {/* ✅ Oculta o menu desktop no mobile */}
        <div style={{ ...styles.navDesktop, display: isMobile ? "none" : "flex" }} className="desktop">
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/solucoes" style={styles.link}>Soluções</Link>
          <Link to="/portfolio" style={styles.link}>Portfólio</Link>
          <Link to="/depoimentos" style={styles.link}>Depoimentos</Link>
          <Link to="/contato" style={styles.link}>Contato</Link>

          <Link to="/registro" style={styles.btnPrimary}>Cadastre-se</Link>
          <Link to="/login" style={styles.btnOutline}>Login</Link>
        </div>

        <div style={styles.searchBox}>
          <Search size={18} color="#075E54" />
          <input
            style={styles.input}
            placeholder="Buscar soluções..."
            value={busca}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBusca(e.target.value)
            }
          />

          {sugestoes.length > 0 && (
            <div style={styles.dropdown}>
              {sugestoes.map((item, i) => (
                <div key={i} onClick={() => clicarProduto(item)}>
                  {item}
                </div>
              ))}
            </div>
          )}

          {historico.length > 0 && !busca && (
            <div style={styles.dropdown}>
              <p style={{ fontSize: 12 }}>Recentes:</p>
              {historico.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          )}
        </div>

        {/* ✅ Botão hambúrguer visível apenas no mobile */}
        <button 
          onClick={alternarMenu} 
          style={{ ...styles.hamburger, display: isMobile ? "block" : "none" }}
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </nav>

      <div
        onClick={fecharMenu}
        style={{
          ...styles.overlay,
          opacity: menuAberto ? 1 : 0,
          visibility: menuAberto ? "visible" : "hidden"
        }}
      />

      <div
        ref={menuRef}
        style={{
          ...styles.menuMobile,
          transform: menuAberto ? "translateY(0)" : "translateY(100%)"
        }}
      >
        <div style={styles.pullBar}></div>

        <Link to="/" onClick={fecharMenu} style={styles.linkMobile}>Home</Link>
        <Link to="/solucoes" onClick={fecharMenu} style={styles.linkMobile}>Soluções</Link>
        <Link to="/portfolio" onClick={fecharMenu} style={styles.linkMobile}>Portfólio</Link>
        <Link to="/depoimentos" onClick={fecharMenu} style={styles.linkMobile}>Depoimentos</Link>
        <Link to="/contato" onClick={fecharMenu} style={styles.linkMobile}>Contato</Link>

        <hr />

        <Link to="/registro" onClick={fecharMenu} style={styles.linkMobileStrong}>
          Cadastre-se
        </Link>

        <Link to="/login" onClick={fecharMenu} style={styles.linkMobileStrongDark}>
          Login
        </Link>
      </div>
    </>
  );
}

// ✅ TIPAGEM CORRIGIDA
const styles: Record<string, CSSProperties> = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "65px",
    background: "#075E54",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    zIndex: 1000
  },
  logo: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold"
  },
  navDesktop: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  },
  link: {
    color: "#fff",
    textDecoration: "none"
  },
  btnPrimary: {
    background: "#25D366",
    padding: "6px 12px",
    borderRadius: "20px",
    color: "#fff",
    textDecoration: "none"
  },
  btnOutline: {
    border: "1px solid #fff",
    padding: "6px 12px",
    borderRadius: "20px",
    color: "#fff",
    textDecoration: "none"
  },
 hamburger: {
    fontSize: "22px",
    marginRight: "25px",
    background: "none",
    border: "none",
    color: "#fff",
    display: "none",
    cursor: "pointer" // Adicionado para indicar clique
  },
  searchBox: {
  position: "relative",
  display: "flex",
  alignItems: "center",
  background: "#fff",
  padding: "5px 10px",
  borderRadius: "20px",
  maxWidth: "200px", // ✅ limita tamanho no desktop
  width: "100%" // ✅ permite ajuste responsivo
},
  input: {
    border: "none",
    outline: "none",
    marginLeft: 5
  },
  dropdown: {
    position: "absolute",
    top: "40px",
    left: 0,
    background: "#fff",
    width: "100%",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },
  overlay: {
    position: "fixed",
    top: 0, // ✅ Adicionado para cobrir a tela toda
    left: 0, // ✅ Adicionado para cobrir a tela toda
    width: "100%",
    height: "100vh",
    background: "rgba(7,94,84,0.6)",
    transition: "0.3s",
    zIndex: 1001 // ✅ Adicionado para ficar acima da navbar
  },
  menuMobile: {
    position: "fixed",
    bottom: 0,
    left: 0, // ✅ Adicionado para alinhar corretamente
    width: "100%",
    background: "#fff",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    gap: "10px",
    transition: "0.3s ease-in-out", // ✅ Suavizou a transição
    zIndex: 1002 // ✅ Adicionado para ficar acima do overlay
  },
  pullBar: {
    width: "40px",
    height: "5px",
    background: "#ccc",
    margin: "0 auto 10px",
    borderRadius: "10px" // Adicionado detalhe visual
  },
  linkMobile: {
    textDecoration: "none",
    color: "#333",
    padding: "10px"
  },
  linkMobileStrong: {
    color: "#25D366",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "10px"
  },
  linkMobileStrongDark: {
    color: "#075E54",
    fontWeight: "bold",
    textDecoration: "none",
    padding: "10px"
  }
};