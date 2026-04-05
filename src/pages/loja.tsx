import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, GitHub, Linkedin, Briefcase } from 'lucide-react';
import '../css/loja.css';

const LojaServicos = () => {
  const handleContact = () => {
    window.open('https://wandersonweb.com.br', '_blank');
  };

  return (
    <div className="loja-container">
      {/* Header Focado em Autoridade */}
      <header className="loja-header">
        <span className="tag-premium">DISPONÍVEL PARA PROJETOS</span>
        <h1>Transforme Visitantes em Clientes Ativos</h1>
        <p>
          Você não precisa de mais um site "bonitinho". Você precisa de uma 
          máquina de conversão que trabalhe pelo seu negócio 24/7.
        </p>
      </header>

      {/* Grid de Soluções (Onde o empresário se enxerga) */}
      <section className="servicos-grid">
        <div className="card-servico">
          <div className="icon">⚡</div>
          <h3>Landing Pages de Alta Conversão</h3>
          <p>
            Desenvolvidas com React e focadas em copywriting visual para prender a 
            atenção e fazer o usuário tomar a ação que você deseja.
          </p>
        </div>

        <div className="card-servico principal">
          <div className="icon">🛍️</div>
          <h3>E-commerce & Estruturas de Vendas</h3>
          <p>
            Lojas virtuais rápidas, com checkout fluido e experiência do usuário (UX) 
            otimizada para reduzir o abandono de carrinho.
          </p>
          <span className="badge-popular">Mais Solicitado</span>
        </div>

        <div className="card-servico">
          <div className="icon">📱</div>
          <h3>Sistemas Web Sob Medida</h3>
          <p>
            Automação de processos e painéis administrativos inteligentes para 
            fazer a sua empresa escalar sem perder o controle.
          </p>
        </div>
      </section>

      {/* Sessão de Rapport e Alinhamento de Expectativas */}
      <section className="rapport-section">
        <div className="rapport-content">
          <h2>Por que grandes empresas escolhem a WandersonWeb?</h2>
          <ul>
            <li>
              <strong>Código Limpo e Escalável:</strong> Uso de React, TypeScript e Vite para garantir que seu site carregue em milissegundos.
            </li>
            <li>
              <strong>Visão de Negócio:</strong> Não sou apenas um executor. Entendo de tráfego, funis de vendas e comportamento do consumidor.
            </li>
            <li>
              <strong>Compromisso com Prazos:</strong> O tempo da sua empresa vale ouro. Entrego o que prometo, quando prometo.
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action (CTA) Forte para Tomada de Decisão */}
      <section className="cta-section">
        <div className="cta-box">
          <h2>Pronto para elevar o nível digital da sua empresa?</h2>
          <p>
            Pare de perder clientes para a concorrência por causa de um site amador. 
            Leve a presença digital da sua marca para o nível profissional hoje mesmo.
          </p>
          <button className="btn-decisao" onClick={handleContact}>
            Quero Alavancar Meus Resultados
          </button>
          <small>Clique e fale diretamente comigo no wandersonweb.com.br</small>
        </div>
      </section>
    </div>
  );
};

export default LojaServicos;