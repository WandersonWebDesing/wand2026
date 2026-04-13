import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/footer.css";

// Importações conforme sua estrutura
import bannerImg from "../assets/images/footer.png"; // A imagem das marcas/prédios
import logoGira from "../assets/images/comentalogo.png";
import wandersonImg from "../assets/images/fotowand.png"; // Sua foto com terno

const Footer = () => {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Efeito de contador animado para "Projetos Entregues"
  useEffect(() => {
    let start = 0;
    const end = 127;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("🚀 Conexão estabelecida! Em breve entrarei em contato.");
    setEmail("");
  };

  return (
    <footer className="main-footer">
      <div className="footer-glass-overlay">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Seção Perfil/Branding */}
          <div className="footer-section profile-box">
            <div className="avatar-wrapper">
              <img src={wandersonImg} alt="Wanderson" className="profile-img" />
              <div className="status-indicator"></div>
            </div>
            <h2 className="brand-name">Wanderson<span>Web</span></h2>
            <p className="brand-tagline">
              Arquitetura de marcas que <strong>conectam sucesso</strong> e escalam negócios.
            </p>
            <div className="social-mini-icons">
               {/* Espaço para ícones como LinkedIn/GitHub */}
            </div>
          </div>

          {/* Seção de Autoridade/Métricas */}
          <div className="footer-section metrics-box">
            <span className="section-label">Nossa Entrega</span>
            <div className="counter-container">
              <h3 className="counter-number">+{count}</h3>
              <p>Projetos de Alto Impacto</p>
            </div>
            <div className="brand-shimmer-card">
               <img src={bannerImg} alt="Ecossistema WandersonWeb" className="ecosystem-img" />
            </div>
          </div>

          {/* Seção CTA/Newsletter */}
          <div className="footer-section cta-box">
            <span className="section-label">Vamos decolar?</span>
            <h3>Transforme sua ideia em <strong>resultado real</strong>.</h3>
            <form onSubmit={handleSubmit} className="footer-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="btn-glow">
                  Expandir Negócio 🚀
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <div className="footer-bottom-bar">
          <p>© 2026 WandersonWeb — UI/UX Excellence</p>
          <div className="footer-legal">
            <a href="#">Privacidade</a>
            <span className="separator">|</span>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;