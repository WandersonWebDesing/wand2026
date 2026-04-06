// =========================
// src/pages/Solucoes.tsx
// =========================

import { useState } from "react";
import { motion } from "framer-motion";

// ESTILOS E ASSETS
import "../css/solucoes.css";
import logo from "../assets/images/logowanderson.png";

// Interface para organizar os dados do FAQ (Boa prática em TS)
interface FAQItem {
  pergunta: string;
  resposta: string;
}

export default function Solucoes() {
  // Estado tipado: pode ser número (index) ou null (fechado)
  const [ativo, setAtivo] = useState<number | null>(null);

  // Função toggle corrigida
  const toggle = (index: number) => {
    // Se clicar no que já está aberto, ele fecha (null). Se não, abre o novo.
    setAtivo(ativo === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      pergunta: "Seu negócio aparece no Google?",
      resposta: "Se o cliente não te encontra, ele compra do concorrente. Posicionamos sua empresa para ser encontrada todos os dias.",
    },
    {
      pergunta: "Você recebe clientes todos os dias?",
      resposta: "Criamos estratégias digitais que geram fluxo constante de clientes qualificados.",
    },
    {
      pergunta: "Sua marca transmite profissionalismo?",
      resposta: "Design, presença digital e autoridade fazem toda a diferença na decisão de compra.",
    },
    {
      pergunta: "Você domina seu mercado local?",
      resposta: "Trabalhamos posicionamento estratégico para você se tornar referência na sua região.",
    },
  ];

  return (
    <div className="solucoes-container">
      {/* HERO */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforme sua presença digital em uma máquina de vendas
        </motion.h1>

        <p>
          Sites, sistemas e automações que atraem clientes, geram autoridade
          e aumentam seu faturamento todos os dias.
        </p>

        <a
          href="https://wa.me/5561999788904"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          Falar no WhatsApp agora
        </a>
      </section>

      {/* CONTADOR */}
      <section className="contador">
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>+100</h2>
          <p>Clientes atendidos</p>
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>+300%</h2>
          <p>Aumento médio em conversão</p>
        </motion.div>

        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>24h</h2>
          <p>Suporte e automação ativa</p>
        </motion.div>
      </section>

      {/* SOLUÇÕES */}
      <section className="solucoes-grid">
        <motion.div whileHover={{ scale: 1.05 }} className="card">
          <h3>Criação de Sites Profissionais</h3>
          <p>
            Sites rápidos, modernos e persuasivos que convertem visitantes em clientes.
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="faq-container">
        <div className="faq-brand">
          <img src={logo} alt="WandersonWeb Logo" />
          <h2>WandersonWeb</h2>
          <p>
            Soluções digitais estratégicas para empresas que desejam crescer,
            se destacar e dominar seu mercado.
          </p>
        </div>

        <div className="faq-header">
          <h1>Perguntas estratégicas antes de escalar seu negócio</h1>
          <p>Empresas que crescem fazem as perguntas certas.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${ativo === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{item.pergunta}</span>
                <span className="icon">{ativo === index ? "−" : "+"}</span>
              </button>

              {/* Sugestão: adicione uma animação simples aqui se desejar */}
              {ativo === index && (
                <div className="faq-answer">
                  <p>{item.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Pronto para crescer no digital?</h3>
          <p>Fale agora e descubra como podemos impulsionar seu negócio.</p>
          <button
            onClick={() =>
              window.open("https://wa.me/5561999788904", "_blank")
            }
          >
            Falar no WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}