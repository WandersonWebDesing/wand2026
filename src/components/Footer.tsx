import { useState, useEffect } from "react";
import type { FormEvent } from "react";

import { motion } from "framer-motion";
import "../css/footer.css";

import imagem1 from "../assets/images/footer.png";
import imagem2 from "../assets/images/comentalogo.png";
import heroImage from "../assets/images/fotowand.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [clicado, setClicado] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      alert("🚀 Lead captado com sucesso!");
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <footer className={darkMode ? "footer dark" : "footer"}>
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-left">
          <img src={heroImage} alt="WandersonWeb" className="footer-hero" />
          <h2>🚀 WandersonWeb</h2>
          <p>
            Transformando ideias em experiências inesquecíveis.
          </p>

          <div
            className="imagem-container"
            onClick={() => setClicado((prev) => !prev)}
          >
            <img
              src={clicado ? imagem2 : imagem1}
              alt="Imagem giratória"
              className={`imagem-gira ${clicado ? "rotate" : ""}`}
            />
          </div>
        </div>

        <div className="footer-center">
          <h3>📊 Resultados Reais</h3>
          <motion.div className="counter">
            +{count} projetos entregues
          </motion.div>
        </div>

        <div className="footer-right">
          <h3>💡 Receba Estratégias</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Quero crescer 🚀</button>
          </form>
        </div>
      </motion.div>

      <motion.div className="footer-bottom">
        <p>© 2026 WandersonWeb</p>
      </motion.div>
    </footer>
  );
};

export default Footer;