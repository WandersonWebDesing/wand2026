// Importação do React e hooks necessários
import React, { useState } from "react";

// Importação do CSS
import "../css/button.css";

// Framer Motion para animações modernas
import { motion } from "framer-motion";

// Componente principal do botão
const Button = ({
  text = "Quero Crescer Agora", // Texto padrão persuasivo
  apiUrl = "", // URL da API para envio de dados
  payload = {}, // Dados enviados para API (lead, contato etc)
  onClick, // Função extra opcional
}) => {
  // Estado para controlar o loading (UX inteligente)
  const [loading, setLoading] = useState(false);

  // Função principal ao clicar
  const handleClick = async () => {
    // Ativa loading
    setLoading(true);

    try {
      // 🔥 RASTREAMENTO DE CLIQUE (Analytics)
      console.log("Clique rastreado:", {
        botao: text,
        data: new Date(),
      });

      // 🔥 INTEGRAÇÃO COM API (ex: Supabase, backend próprio)
      if (apiUrl) {
        await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      // Executa ação extra se existir
      if (onClick) onClick();

    } catch (error) {
      console.error("Erro ao enviar:", error);
    }

    // Simula tempo de processamento estilo Stripe
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <motion.button
      className="btn-wanderson"
      onClick={handleClick}
      
      // 🔥 Animação ao passar mouse
      whileHover={{ scale: 1.05 }}
      
      // 🔥 Animação ao clicar
      whileTap={{ scale: 0.95 }}
    >
      {/* Se estiver carregando, mostra loader */}
      {loading ? (
        <span className="loader"></span>
      ) : (
        text
      )}
    </motion.button>
  );
};

export default Button;