// src/pages/Menu.jsx
import { useNavigate, Link } from "react-router-dom";

import { ShoppingCart, Menu as MenuIcon, Search } from "lucide-react";
import "../css/navbar.css";
import WhatsAppIcon from '../assets/images/botao-whatsapp.gif';

const produtos = [
  "Criação de Sites",
  "Landing Page Profissional",
  "Sistema com Node.js",
  "Loja Virtual Completa",
  "Consultoria em Tecnologia",
  "Notebook Gamer",
  "Smartphone Android",
  "Fone Bluetooth",
  "Monitor 4K"
];

export default function HeaderInteligente() {
  const navigate = useNavigate();

  const [logado, setLogado] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [busca, setBusca] = useState("");
  const [sugestoes, setSugestoes] = useState([]);
  const [historico, setHistorico] = useState([]);

  const menuRef = useRef(null);

  const irParaLogin = () => { navigate("/login"); setMenuOpen(false); };
  const irParaCadastro = () => { navigate("/registrer"); setMenuOpen(false); };

  useEffect(() => {
    if (busca.length > 0) {
      const filtrados = produtos.filter((item) =>
        item.toLowerCase().includes(busca.toLowerCase())
      );
      setSugestoes(filtrados);
    } else {
      setSugestoes([]);
    }
  }, [busca]);

  const clicarProduto = (item) => {
    setHistorico((prev) => {
      const novo = [item, ...prev.filter((i) => i !== item)].slice(0, 5);
      return novo;
    });
    setBusca("");
    setSugestoes([]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {menuOpen && <div className="overlay active" onClick={() => setMenuOpen(false)} />}

      <header className={`header ${logado ? "header-logado" : ""}`}>
        <div className="header-container">
          <h1 className="logo">WandersonWeb 🚀</h1>

          {/* Busca */}
          <div className="search-box">
            <Search size={24} />
            <input
              type="text"
              placeholder="Buscar soluções..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            {sugestoes.length > 0 && (
              <div className="dropdown">
                {sugestoes.map((item, index) => (
                  <div key={index} onClick={() => clicarProduto(item)}>
                    {item}
                  </div>
                ))}
              </div>
            )}
            {historico.length > 0 && busca.length === 0 && (
              <div className="dropdown dark">
                <p>Você pode gostar:</p>
                {historico.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            )}
          </div>

          {/* Menu Desktop */}
          <nav className="menu">
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/Portifolio">Portfólio</Link>
            <Link to="/comentarios">Comentários</Link>
            <Link to="/Servico">Serviços</Link>
            <Link to="/Eletronico">Eletrônicos</Link>
          </nav>

          {/* Ações */}
          <div className="actions">
            <ShoppingCart className="icon" size={32} /> {/* Agora com tamanho definido */}
            {!logado ? (
              <>
                <button className="btn-login" onClick={irParaLogin}>Login</button>
                <button className="btn-register" onClick={irParaCadastro}>Registre-se</button>
              </>
            ) : (
              <button className="btn-logout" onClick={() => setLogado(false)}>Logout</button>
            )}
            <MenuIcon
              className="menu-mobile-icon"
              size={36}   // Ícone do menu mobile grande e fácil de clicar
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>

        {/* Menu Mobile */}
        <div ref={menuRef} className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link to="/clientes" onClick={() => setMenuOpen(false)}>Portfólio</Link>
          <Link to="/comentarios" onClick={() => setMenuOpen(false)}>Comentários</Link>
          <Link to="/Servico" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link to="/eletronico" onClick={() => setMenuOpen(false)}>Eletrônicos</Link>

          <div className="mobile-actions">
            {!logado ? (
              <>
                <button className="btn-login" onClick={irParaLogin}>Login</button>
                <button className="btn-register" onClick={irParaCadastro}>Registre-se</button>
              </>
            ) : (
              <button className="btn-logout">Logout</button>
            )}
          </div>
        </div>
      </header>
      
      {/* Botão flutuante do WhatsApp */}
<a
  href="https://wa.me/5561999788904"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <img src={WhatsAppIcon} alt="WhatsApp" />
</a>

    </>
  );
}