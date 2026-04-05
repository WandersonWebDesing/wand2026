// Conta.jsx
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, GitHub, Linkedin, Briefcase } from 'lucide-react';
import "../css/conta.css";

export default function Conta() {
  return (
    <div className="conta-container">
      <div className="conta-card">
        <h1 className="conta-title">Minha Conta</h1>
        <p className="conta-subtitle">
          Conecte-se com um desenvolvedor focado em resultados reais, UX/UI moderno e soluções escaláveis.
        </p>

        <form className="conta-form">
          <div className="input-group">
            <label>Nome</label>
            <input type="text" placeholder="Seu nome completo" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="seuemail@exemplo.com" />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input type="password" placeholder="********" />
          </div>

          <button className="btn-primary">Entrar / Criar Conta</button>
        </form>

        <div className="conta-benefits">
          <h3>Por que escolher WandersonWeb?</h3>
          <ul>
            <li>✔ Experiência em desenvolvimento Full Stack</li>
            <li>✔ Foco em performance e SEO</li>
            <li>✔ UX/UI moderno e responsivo</li>
            <li>✔ Soluções personalizadas para empresas</li>
          </ul>
        </div>

        <div className="conta-footer">
          <p>
            Precisa de um site profissional ou sistema? <strong>Vamos conversar!</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
