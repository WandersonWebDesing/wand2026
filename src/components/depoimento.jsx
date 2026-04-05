import React, { useEffect, useState } from "react";
import "../css/depoimento.css";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://SEU_PROJETO.supabase.co",
  "SUA_ANON_KEY"
);

export default function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    fetchDepoimentos();
    simularProvaSocial();
  }, []);

  const fetchDepoimentos = async () => {
    const { data, error } = await supabase
      .from("depoimentos")
      .select("*")
      .order("id", { ascending: false });

    if (!error) setDepoimentos(data);
  };

  // 🔥 Prova social dinâmica (simulação)
  const simularProvaSocial = () => {
    setInterval(() => {
      setContador(Math.floor(Math.random() * 5) + 1);
    }, 5000);
  };

  // 🤖 IA simulada baseada em dados reais
  const gerarDepoimentoIA = (nome, resultado) => {
    return `${nome} transformou seu negócio com a WandersonWeb e alcançou ${resultado}. Isso mostra o poder de uma estratégia digital bem aplicada.`;
  };

  return (
    <section className="depoimentos-container">
      
      {/* 🔥 PROVA SOCIAL */}
      <motion.div 
        className="prova-social"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🚀 {contador} pessoas contrataram hoje
      </motion.div>

      <h2 className="titulo">
        Resultados Reais. Histórias que Conectam.
      </h2>

      <div className="depoimentos-grid">
        {depoimentos.map((dep, index) => (
          <motion.div
            key={dep.id}
            className="card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="topo">
              <img src={dep.foto} alt="cliente" />
              <div>
                <h3>{dep.nome}</h3>
                <p>{dep.empresa}</p>
              </div>
            </div>

            {/* ⭐ Estrelas */}
            <div className="estrelas">
              {"⭐".repeat(dep.avaliacao)}
            </div>

            {/* 💬 Depoimento */}
            <p className="texto">{dep.texto}</p>

            {/* 🤖 IA complemento */}
            <p className="ia">
              {gerarDepoimentoIA(dep.nome, dep.resultado)}
            </p>

            {/* 🎥 Vídeo */}
            {dep.video && (
              <div className="video">
                <iframe
                  src={dep.video}
                  title="video"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}