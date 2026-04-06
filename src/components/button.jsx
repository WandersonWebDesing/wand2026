// ===============================
// 📦 IMPORTAÇÕES
// ===============================

// React
import { useState } from "react";

// CSS do botão
import "../css/button.css";

// Framer Motion para animações
import { motion } from "framer-motion";

// ===============================
// 🧾 TIPAGEM DAS PROPS (evita erro TS)
// ===============================
interface ButtonProps {
  text?: string;
  apiUrl?: string;
  payload?: Record<string, unknown>;
  onClick?: () => void;
}

// ===============================
// 🎯 COMPONENTE BUTTON
// ===============================
const Button: React.FC<ButtonProps> = ({
  text = "Quero Crescer Agora",
  apiUrl = "",
  payload = {},
  onClick = () => {},
}) => {
  // ===============================
  // 🔄 STATE DE LOADING
  // ===============================
  const [loading, setLoading] = useState(false);

  // ===============================
  // 🚀 FUNÇÃO DE CLICK
  // ===============================
  const handleClick = async () => {
    setLoading(true);

    try {
      console.log("Clique rastreado:", {
        botao: text,
        data: new Date().toISOString(),
      });

      if (apiUrl) {
        await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      onClick();
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };

  // ===============================
  // 🎨 RENDER
  // ===============================
  return (
    <motion.button
      className="btn-wanderson"
      onClick={handleClick}
      disabled={loading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {loading ? <span className="loader"></span> : text}
    </motion.button>
  );
};

// ===============================
// 📤 EXPORTAÇÃO
// ===============================
export default Button;