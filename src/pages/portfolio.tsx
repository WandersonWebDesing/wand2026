import React, { useEffect, useState } from "react";
import "../css/portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  // 🔥 Simulação de backend (depois você troca por API real)
  useEffect(() => {
    const fakeData = [
      {
        id: 1,
        title: "Sistema de Captação de Leads",
        description:
          "Landing page otimizada com integração WhatsApp e automação.",
        result: "+42% de conversão",
        tech: "React, Node.js, SEO",
      },
      {
        id: 2,
        title: "Plataforma Educacional",
        description:
          "Ambiente virtual com suporte a professores e alunos.",
        result: "+65% engajamento",
        tech: "Moodle, UX/UI",
      },
      {
        id: 3,
        title: "E-commerce Personalizado",
        description:
          "Loja virtual com funil de vendas e remarketing.",
        result: "+38% vendas",
        tech: "React, Stripe, SEO",
      },
    ];

    setTimeout(() => {
      setProjects(fakeData);
    }, 1000);
  }, []);

  return (
    <div className="portfolio-container">
      
      {/* 🔥 HERO */}
      <section className="portfolio-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projetos que geram <span>RESULTADO REAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Não são apenas sites. São soluções que aumentam vendas, atraem clientes
          e posicionam empresas no digital.
        </motion.p>
      </section>

      {/* 🔥 CASES */}
      <section className="portfolio-cases">
        {projects.length === 0 ? (
          <p className="loading">Carregando projetos...</p>
        ) : (
          projects.map((project, index) => (
            <motion.div
              className="portfolio-card"
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="result">
                🚀 {project.result}
              </div>

              <span className="tech">{project.tech}</span>

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5561999788904",
                    "_blank"
                  )
                }
              >
                Quero um projeto assim
              </button>
            </motion.div>
          ))
        )}
      </section>

      {/* 🔥 PROVA SOCIAL */}
      <section className="portfolio-proof">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2>Resultados que falam por si</h2>

          <div className="numbers">
            <div>
              <h3>+40%</h3>
              <p>Conversão média</p>
            </div>

            <div>
              <h3>+60%</h3>
              <p>Engajamento</p>
            </div>

            <div>
              <h3>+3x</h3>
              <p>Mais leads</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 🔥 CTA FINAL */}
      <section className="portfolio-cta">
        <h2>
          Seu negócio pode ser o próximo case de sucesso
        </h2>

        <p>
          Se você quer mais clientes, mais vendas e mais autoridade online,
          o próximo projeto pode ser o seu.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/5561999788904",
              "_blank"
            )
          }
        >
          Falar no WhatsApp agora
        </button>
      </section>
    </div>
  );
};

export default Portfolio;