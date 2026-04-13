import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/portfolio.css";

type Project = {
  id: number;
  category: string;
  title: string;
  description: string;
  framework: string; // PMI, ITIL, SMART
  result: string;
  tech: string;
};

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const factoryData: Project[] = [
      {
        id: 1,
        category: "Growth & Machine",
        title: "Máquina de Vendas High-Ticket",
        description: "Engenharia de funil com MBI (Master Business Intelligence) para escala previsível.",
        framework: "PMI / SMART Results",
        result: "ROI 12:1 em 90 dias",
        tech: "Automations, Leads Recovery, CRM",
      },
      {
        id: 2,
        category: "Branding & UX",
        title: "Identidade Visual 'Magnetic'",
        description: "Logo e UX/UI arquitetônico baseado em psicologia das cores e Service Design.",
        framework: "ITILv4 Service Design",
        result: "+88% de Percepção de Valor",
        tech: "Figma, Adobe Suite, UI Psych",
      },
      {
        id: 3,
        category: "Web Engineering",
        title: "Ecossistema Digital Escalável",
        description: "Site com infraestrutura ITIL para máxima disponibilidade e conversão fluida.",
        framework: "Agile / ITIL Best Practices",
        result: "Loading < 1.2s / +45% Retenção",
        tech: "React, Node, Cloud Edge",
      },
    ];

    setTimeout(() => setProjects(factoryData), 800);
  }, []);

  return (
    <div className="portfolio-factory">
      {/* ⚡ Scanline Effect para Nostalgia Digital */}
      <div className="scanline"></div>

      <header className="hero-section">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <span className="badge">ESTATISTICAMENTE PROVADO. ARQUITETONICAMENTE DESENHADO.</span>
          <h1>A Fábrica de <span className="glitch">Conquistas</span></h1>
          <p>
            Fundindo a nostalgia do design clássico com a precisão do <strong>PMI</strong> e <strong>ITILv4</strong>. 
            Não entregamos apenas artes; entregamos máquinas de lucro com resultados <strong>SMART</strong>.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => window.open("https://wa.me/5561999788904")}>
              Iniciar Consultoria MBI
            </button>
          </div>
        </motion.div>
      </header>

      <section className="project-grid">
        <AnimatePresence>
          {projects.map((p, i) => (
            <motion.div 
              className="project-card"
              key={p.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-header">
                <span className="cat-tag">{p.category}</span>
                <span className="framework-tag">{p.framework}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="card-result">
                <strong>METRICA SMART:</strong> <span>{p.result}</span>
              </div>
              <div className="card-footer">
                <code>{p.tech}</code>
                <button className="btn-mini" onClick={() => window.open("https://wa.me/5561999788904")}>
                  Quero este resultado
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <section className="methodology-bar">
        <div className="method-item"><strong>MBI</strong> Inteligência de Negócio</div>
        <div className="method-item"><strong>PMI</strong> Rigor na Entrega</div>
        <div className="method-item"><strong>ITIL</strong> Excelência em Serviço</div>
        <div className="method-item"><strong>UX/UI</strong> Encantamento Visual</div>
      </section>
    </div>
  );
};

export default Portfolio;