import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, GitHub, Linkedin, Briefcase } from 'lucide-react';
import "../css/home.css";
import minhaFoto from "../assets/images/wandersonhome.png";

export default function Home() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-wrapper">

          {/* TEXTO */}
          <div className="hero-content">
            <h1>
              Transformando ideias em <span>soluções digitais de alto impacto</span>
            </h1>

            <p>
              Olá, eu sou <strong>Wanderson Santos</strong>.
              Desenvolvedor Full Stack focado em performance, escalabilidade e resultados reais.
            </p>

            <p className="hero-highlight">
              Mais do que código… eu entrego soluções que geram valor 🚀
            </p>

            <div className="hero-buttons">
              <a href="#portfolio" className="btn-primary">Ver Projetos</a>
              <a href="#contato" className="btn-secondary">Falar Comigo</a>
            </div>
          </div>

          {/* IMAGEM */}
          <div className="hero-image">
            <img 
              src={minhaFoto} 
              alt="Wanderson Santos Desenvolvedor" 
              onError={(e) => e.target.style.display = "none"}
            />
          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section className="about">
        <div className="about-content">
          <h2>Eu resolvo problemas, não só escrevo código</h2>

          <p>
            Recrutadores procuram profissionais que entregam resultado…
            não apenas tarefas.
          </p>

          <p>
            Empreendedores precisam de sistemas que crescem junto com o negócio…
            não apenas sites bonitos.
          </p>

          <p className="highlight">
            É exatamente isso que eu construo na WandersonWeb 🚀
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>O que você ganha comigo</h2>

        <div className="features-grid">
          <div className="card">
            <h3>💻 Full Stack Real</h3>
            <p>
              Frontend + Backend + Banco de Dados integrados com arquitetura profissional.
            </p>
          </div>

          <div className="card">
            <h3>⚡ Alta Performance</h3>
            <p>
              Aplicações rápidas, escaláveis e preparadas para crescimento.
            </p>
          </div>

          <div className="card">
            <h3>🎯 Foco em Resultado</h3>
            <p>
              Código com propósito: gerar valor, conversão e experiência.
            </p>
          </div>
        </div>
      </section>

      {/* CONFIANÇA */}
      <section className="trust">
        <h2>Por que confiar no meu trabalho?</h2>

        <p>
          Experiência prática com desenvolvimento web, APIs, automações e integrações.
        </p>

        <p className="highlight">
          Aqui você vê execução — não só teoria.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Pronto para construir algo grande?</h2>

        <p>
          Se você busca um desenvolvedor comprometido com resultado,
          vamos conversar.
        </p>

        <a href="#contato" className="btn-primary">
          Entrar em contato
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 WandersonWeb. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}