// ================================
// 📁 Portfolio.tsx
// ================================

// ✅ Importa hooks do React
import { useState, useEffect } from "react";

// ❌ REMOVIDO: ícones não utilizados (isso causava erro no build)
// import { Mail, Lock, ArrowRight, GitHub, Linkedin, Briefcase } from 'lucide-react';

// ✅ Importa animações do Framer Motion
import { motion } from "framer-motion";

// ✅ Importa o CSS da página
import "../css/portfolio.css";

// ================================
// ✅ Tipagem dos projetos (TypeScript)
// Define o formato de cada projeto
// ================================
type Project = {
  id: number;
  title: string;
  description: string;
  result: string;
  tech: string;
};

// ================================
// 🚀 Componente principal Portfolio
// ================================
const Portfolio = () => {
  // ✅ Estado para armazenar os projetos
  const [projects, setProjects] = useState<Project[]>([]);

  // ================================
  // ⏱ useEffect roda quando o componente carrega
  // Simula uma API carregando dados
  // ================================
  useEffect(() => {
    // 📦 Dados simulados (fake API)
    const fakeData: Project[] = [
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

    // ⏳ Simula delay (como se fosse API real)
    const timer = setTimeout(() => {
      setProjects(fakeData);
    }, 1000);

    // 🧹 Limpeza do efeito (boa prática)
    return () => clearTimeout(timer);
  }, []);

  // ================================
  // 🎨 Renderização do componente
  // ================================
  return (
    <div className="portfolio-container">

      {/* ================================
          🎯 HERO (Topo da página)
      ================================ */}
      <section className="portfolio-hero">
        <motion.h1
          initial={{ opacity: 0, y: -40 }} // começa invisível e acima
          animate={{ opacity: 1, y: 0 }}   // anima para posição normal
          transition={{ duration: 0.8 }}   // duração da animação
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

      {/* ================================
          📊 LISTA DE PROJETOS
      ================================ */}
      <section className="portfolio-cases">

        {/* ⏳ Enquanto carrega */}
        {projects.length === 0 ? (
          <p className="loading">Carregando projetos...</p>
        ) : (
          // 🔁 Renderiza cada projeto
          projects.map((project, index) => (
            <motion.div
              className="portfolio-card"
              key={project.id}

              // animação ao aparecer
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}

              // delay progressivo (efeito cascata)
              transition={{ delay: index * 0.2 }}

              // efeito ao passar mouse
              whileHover={{ scale: 1.05 }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              {/* 🚀 Resultado */}
              <div className="result">
                🚀 {project.result}
              </div>

              {/* 🛠 Tecnologias */}
              <span className="tech">{project.tech}</span>

              {/* 📲 Botão WhatsApp */}
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

      {/* ================================
          📈 PROVAS (RESULTADOS)
      ================================ */}
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

      {/* ================================
          🎯 CALL TO ACTION (CTA)
      ================================ */}
      <section className="portfolio-cta">
        <h2>
          Seu negócio pode ser o próximo case de sucesso
        </h2>

        <p>
          Se você quer mais clientes, mais vendas e mais autoridade online,
          o próximo projeto pode ser o seu.
        </p>

        {/* 📲 Botão final */}
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

// ✅ Exporta o componente para uso nas rotas
export default Portfolio;