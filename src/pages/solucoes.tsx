// =========================
// src/pages/Solucoes.tsx
// =========================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, Video, Star, ShoppingCart, MessageSquare, 
  Globe, Layout, HeartPulse, GraduationCap, Briefcase 
} from "lucide-react";

import "../css/solucoes.css";
import logo from "../assets/images/logowanderson.png";

interface Service {
  title: string;
  desc: string;
  icon: JSX.Element;
  category: string;
}

export default function Solucoes() {
  const [ativo, setAtivo] = useState<number | null>(null);

  const services: Service[] = [
    { category: "Visual", title: "Fotografia Premium", desc: "Cobertura de eventos e ensaios que capturam a essência da marca.", icon: <Camera /> },
    { category: "Visual", title: "Produção de Vídeo", desc: "Cinematografia para festas e conteúdo publicitário de alto impacto.", icon: <Video /> },
    { category: "Digital", title: "Web Design & E-commerce", desc: "Lojas virtuais e sites institucionais com foco em UX/UI Retrô-Moderno.", icon: <Globe /> },
    { category: "Automação", title: "Bots de WhatsApp", desc: "Fluxos inteligentes para clínicas, escolas e vendas automáticas.", icon: <MessageSquare /> },
    { category: "Estratégia", title: "Menu Digital", desc: "Soluções interativas para gastronomia e eventos.", icon: <Layout /> },
    { category: "Estratégia", title: "Produtos Digitais", desc: "Estruturação de infoprodutos e áreas de membros profissionais.", icon: <Star /> },
  ];

  const niches = [
    { name: "Clínicas", icon: <HeartPulse /> },
    { name: "Escolas", icon: <GraduationCap /> },
    { name: "Empresários", icon: <Briefcase /> },
  ];

  return (
    <div className="solucoes-wrapper">
      {/* OVERLAY DE TEXTURA OLD SCHOOL */}
      <div className="grain-overlay"></div>

      <header className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <span className="badge">ESTÉTICA CLÁSSICA • RESULTADO MODERNO</span>
          <h1>Arquitetura Digital que <span>fecha negócios.</span></h1>
          <p>Unimos a autoridade do design clássico com a agilidade da automação moderna para escalar sua empresa.</p>
          <div className="hero-btns">
            <a href="https://wa.me/5561999788904" className="cta-main">Iniciar Projeto</a>
            <a href="#servicos" className="cta-secondary">Ver Soluções</a>
          </div>
        </motion.div>
      </header>

      <section className="niche-bar">
        <p>Especialista em:</p>
        <div className="niche-list">
          {niches.map((n, i) => (
            <div key={i} className="niche-item">{n.icon} {n.name}</div>
          ))}
        </div>
      </section>

      <section id="servicos" className="grid-services">
        <div className="section-header">
          <h2>Soluções Criativas</h2>
          <div className="line"></div>
        </div>
        <div className="cards-container">
          {services.map((s, i) => (
            <motion.div 
              whileHover={{ y: -10 }}
              key={i} 
              className="service-card"
            >
              <div className="card-icon">{s.icon}</div>
              <span className="card-cat">{s.category}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="faq-modern-vintage">
        <div className="faq-sidebar">
          <img src={logo} alt="Logo" className="faq-logo" />
          <h3>Perguntas Estratégicas</h3>
          <p>Se você busca escala, precisa destas respostas.</p>
        </div>

        <div className="faq-accordion">
          {[
            { q: "Seu negócio é achado no Google?", a: "Estar no topo não é sorte, é engenharia. Colocamos você onde o cliente procura." },
            { q: "Sua marca passa confiança?", a: "Design 'Old School' traz autoridade; UX moderna traz facilidade. O equilíbrio perfeito para vender." },
            { q: "Automação substitui o humano?", a: "Não, ela liberta o humano para fechar contratos enquanto o Bot qualifica o lead." }
          ].map((item, i) => (
            <div key={i} className={`faq-box ${ativo === i ? "open" : ""}`}>
              <button onClick={() => setAtivo(ativo === i ? null : i)}>
                {item.q} <span>{ativo === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {ativo === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="faq-content"
                  >
                    <p>{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-cta">
        <h2>Pronto para o próximo nível?</h2>
        <button onClick={() => window.open("https://wa.me/5561999788904")}>
          SOLICITAR BENCHMARKING GRATUITO
        </button>
      </footer>
    </div>
  );
}