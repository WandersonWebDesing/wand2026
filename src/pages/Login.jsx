import React from 'react';
import { Mail, Lock, ArrowRight, Github, Linkedin, Briefcase } from 'lucide-react';
import '../css/login.css';

export default function Login() {
  return (
    <div className="galaxy-container">
      {/* LADO ESQUERDO: Branding */}
      <aside className="branding-section">
        <div className="branding-content">
          <div className="logo-wrapper">
            <span className="logo-dot"></span>
            <h1 className="brand-logo">
              Wanderson<span>Web</span>
            </h1>
          </div>

          <div className="hero-text">
            <h2>Transformando visão em código de alta performance.</h2>
            <p>
              Se você busca soluções escaláveis e interfaces que convertem, você está no lugar certo.
            </p>
          </div>

          <div className="social-proof">
            <div className="proof-item">
              <strong>+100%</strong>
              <span>Foco em UX/UI</span>
            </div>
            <div className="proof-item">
              <strong>Clean Code</strong>
              <span>React & TypeScript</span>
            </div>
          </div>

          <div className="recruiter-badge">
            <Briefcase size={20} className="badge-icon" />
            <div>
              <p className="badge-title">Área do Recrutador</p>
              <p className="badge-desc">Veja métricas e cases exclusivos.</p>
            </div>
          </div>
        </div>
        <div className="bg-glow"></div>
      </aside>

      {/* LADO DIREITO: Formulário Simples */}
      <section className="form-section">
        <div className="form-wrapper">
          <header className="form-header">
            <h3>Seja bem-vindo</h3>
            <p>Monitore o progresso dos seus projetos</p>
          </header>

          <form className="main-form">
            <div className="input-group">
              <label>E-mail corporativo</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input type="email" placeholder="exemplo@empresa.com" />
              </div>
            </div>

            <div className="input-group">
              <label>Senha</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input type="password" placeholder="Sua senha segura" />
              </div>
            </div>

            <button type="button" className="btn-primary">
              Acessar Dashboard <ArrowRight size={18} className="btn-arrow" />
            </button>
          </form>

          <div className="divider">
            <span>Ou continue com suas redes</span>
          </div>

          <div className="social-login">
            <button className="btn-social">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </button>
            <button className="btn-social">
              <Github size={20} />
              <span>GitHub</span>
            </button>
          </div>

          <p className="footer-action">
            Ainda não tem um projeto conosco? <a href="#">Fale com Wanderson</a>
          </p>
        </div>
      </section>
    </div>
  );
}