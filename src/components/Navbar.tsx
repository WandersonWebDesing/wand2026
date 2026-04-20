import React, { useState, useEffect, useRef, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import type { CSSProperties } from "react";

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

// --- Componente do Botão WhatsApp (Fixo na direita) ---
const WhatsAppFloatingButton: React.FC = () => {
  const phoneNumber = "5561999788904";
  const message = encodeURIComponent("join growth-fully");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.whatsappFixed}
      aria-label="Fale conosco no WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  );
};

// --- Componente Principal ---
export default function Header() {
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);
  const [busca, setBusca] = useState("");
  const [sugestoes, setSugestoes] = useState<Produto[]>([]);
  const [historico, setHistorico] = useState<Produto[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const alternarMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  useEffect(() => {
    const checarTamanho = () => setIsMobile(window.innerWidth <= 768);
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
    setHistorico((prev) => [item, ...prev.filter((i) => i !== item)].slice(0, 5));
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
        <Link to="/" style={styles.logo}>WandersonWeb 🚀</Link>

        {/* Menu Desktop */}
        {!isMobile && (
          <div style={styles.navDesktop}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/solucoes" style={styles.link}>Soluções</Link>
            <Link to="/portfolio" style={styles.link}>Portfólio</Link>
            <Link to="/depoimentos" style={styles.link}>Depoimentos</Link>
            <Link to="/contato" style={styles.link}>Contato</Link>
            <Link to="/registro" style={styles.btnPrimary}>Cadastre-se</Link>
            <Link to="/login" style={styles.btnOutline}>Login</Link>
          </div>
        )}

        <div style={styles.searchBox}>
          <Search size={18} color="#075E54" />
          <input
            style={styles.input}
            placeholder="Buscar..."
            value={busca}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setBusca(e.target.value)}
          />
          {sugestoes.length > 0 && (
            <div style={styles.dropdown}>
              {sugestoes.map((item, i) => (
                <div key={i} onClick={() => clicarProduto(item)} style={{ cursor: 'pointer', padding: '5px 0' }}>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Botão Hambúrguer */}
        {isMobile && (
          <button onClick={alternarMenu} style={styles.hamburger}>
            {menuAberto ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* Overlay e Menu Mobile */}
      {menuAberto && <div onClick={fecharMenu} style={styles.overlay} />}
      
      <div
        ref={menuRef}
        style={{
          ...styles.menuMobile,
          transform: menuAberto ? "translateY(0)" : "translateY(100%)",
          visibility: menuAberto ? "visible" : "hidden"
        }}
      >
        <div style={styles.pullBar}></div>
        <Link to="/" onClick={fecharMenu} style={styles.linkMobile}>Home</Link>
        <Link to="/solucoes" onClick={fecharMenu} style={styles.linkMobile}>Soluções</Link>
        <Link to="/portfolio" onClick={fecharMenu} style={styles.linkMobile}>Portfólio</Link>
        <Link to="/depoimentos" onClick={fecharMenu} style={styles.linkMobile}>Depoimentos</Link>
        <Link to="/contato" onClick={fecharMenu} style={styles.linkMobile}>Contato</Link>
        <hr />
        <Link to="/registro" onClick={fecharMenu} style={styles.linkMobileStrong}>Cadastre-se</Link>
        <Link to="/login" onClick={fecharMenu} style={styles.linkMobileStrongDark}>Login</Link>
      </div>

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppFloatingButton />
    </>
  );
}

// Estilos Corrigidos
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
    padding: "0 20px", // Espaço nas laterais para os itens não sumirem
    boxSizing: "border-box", // Garante que o padding não aumente a largura total
    zIndex: 1000
  },
  logo: { color: "#fff", textDecoration: "none", fontWeight: "bold" },
  navDesktop: { display: "flex", gap: "15px", alignItems: "center" },
  link: { color: "#fff", textDecoration: "none" },
  btnPrimary: { background: "#25D366", padding: "6px 12px", borderRadius: "20px", color: "#fff", textDecoration: "none" },
  btnOutline: { border: "1px solid #fff", padding: "6px 12px", borderRadius: "20px", color: "#fff", textDecoration: "none" },
  hamburger: {
    fontSize: "28px", // Aumentei um pouco para facilitar o toque
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px", // Margem interna para não colar na borda
    zIndex: 1100, // Garante que fique acima de tudo
    outline: "none"
  },
  searchBox: { position: "relative", display: "flex", alignItems: "center", background: "#fff", padding: "5px 10px", borderRadius: "20px", maxWidth: "150px", width: "100%" },
  input: { border: "none", outline: "none", marginLeft: 5, width: "100%" },
  dropdown: { position: "absolute", top: "40px", left: 0, background: "#fff", width: "100%", borderRadius: "10px", padding: "10px", boxShadow: "0 5px 15px rgba(0,0,0,0.2)", color: "#333" },
  overlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", background: "rgba(0,0,0,0.5)", zIndex: 1001 },
  menuMobile: { position: "fixed", bottom: 0, left: 0, width: "100%", background: "#fff", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", display: "flex", flexDirection: "column", padding: "20px", gap: "10px", transition: "0.3s ease-in-out", zIndex: 1002 },
  pullBar: { width: "40px", height: "5px", background: "#ccc", margin: "0 auto 10px", borderRadius: "10px" },
  linkMobile: { textDecoration: "none", color: "#333", padding: "10px" },
  linkMobileStrong: { color: "#25D366", fontWeight: "bold", textDecoration: "none", padding: "10px" },
  linkMobileStrongDark: { color: "#075E54", fontWeight: "bold", textDecoration: "none", padding: "10px" },
  whatsappFixed: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 2000,
    cursor: "pointer"
  }
};