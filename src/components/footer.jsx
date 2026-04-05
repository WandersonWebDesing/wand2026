// src/components/footer.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../css/footer.css";

// Imagens da imagem giratória
import imagem1 from "../assets/images/footer.png";
import imagem2 from "../assets/images/comentalogo.png";

// Hero principal do footer
import heroImage from "../assets/images/fotowand.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [clicado, setClicado] = useState(false);

  // Detectar tema automático
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  // Contador animado
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

  // Envio de email
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      alert("🚀 Lead captado com sucesso!");
      setEmail("");
    } catch (err) {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  const handleClickImagem = () => {
    setClicado(!clicado);
  };

  return (
    <footer className={darkMode ? "footer dark" : "footer"}>
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* LADO ESQUERDO */}
        <div className="footer-left">
          <img src={heroImage} alt="WandersonWeb" className="footer-hero" />
          <h2>🚀 WandersonWeb</h2>
          <p>
            Transformando ideias em experiências inesquecíveis. Se você é
            recrutador ou empresário, este é o ponto de virada do seu projeto.
          </p>

          {/* IMAGEM GIRATÓRIA */}
          <div className="imagem-container" onClick={handleClickImagem}>
            <img
              src={clicado ? imagem2 : imagem1}
              alt="Imagem giratória"
              className={`imagem-gira ${clicado ? "rotate" : ""}`}
            />
          </div>
        </div>

        {/* LADO CENTRAL */}
        <div className="footer-center">
          <h3>📊 Resultados Reais</h3>
          <motion.div
            key={count}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="counter"
          >
            +{count} projetos entregues
          </motion.div>
        </div>

        {/* LADO DIREITO */}
        <div className="footer-right">
          <h3>💡 Receba Estratégias Personalizadas</h3>
          <p>Cadastre seu e-mail e receba insights que elevam seu projeto.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="cta-button">
              Quero crescer 🚀
            </button>
          </form>
        </div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>© 2026 WandersonWeb — Todos os direitos reservados</p>
      </motion.div>
    </footer>
  );
}