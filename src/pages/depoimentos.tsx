import React from 'react';
// Certifique-se de que o caminho e a extensão estão idênticos ao arquivo na pasta
import '../css/depoimento.css'; 

// Importamos apenas o que será usado para evitar avisos de 'unused variables' no build
import { Quote } from 'lucide-react';

// 1. Definição da Interface para os Depoimentos
interface DepoimentoItem {
  id: number;
  tipo: string;
  autor: string;
  cargo: string;
  texto: string;
  tag: string;
}

const Depoimentos: React.FC = () => {
  // 2. Dados estruturados com tipagem explícita
  const depoimentosDados: DepoimentoItem[] = [
    {
      id: 1,
      tipo: 'Empresário',
      autor: 'Roberto Silva',
      cargo: 'CEO - TechVarejo',
      texto: 'O Wanderson não entrega apenas código; ele entrega faturamento. Nossa landing page anterior era bonita, mas não vendia. Com a nova arquitetura que ele desenvolveu, nossa taxa de conversão subiu 37% no primeiro mês.',
      tag: 'Foco em ROI'
    },
    {
      id: 2,
      tipo: 'Recrutador',
      autor: 'Marina Costa',
      cargo: 'Head of Talent - DevScope',
      texto: 'Avaliei o repositório do Wanderson e o nível de maturidade em React e TypeScript é impressionante. Código limpo, componentização inteligente e uma visão de produto que raramente vejo em desenvolvedores front-end.',
      tag: 'Clean Code'
    }
  ];

  return (
    <section className="depoimentos-container">
      {/* 3. Cabeçalho de Autoridade */}
      <div className="depoimentos-header">
        <span className="badge-superior">Resultados Reais</span>
        <h2>Não acredite em mim. <span className="text-gradiente">Acredite nos números.</span></h2>
        <p>
          Seja para liderar a sua squad de tecnologia ou para construir o motor de vendas 
          da sua empresa, a decisão se resume a uma pergunta: você quer apenas mais um site, 
          ou quer uma máquina de escala?
        </p>
      </div>

      {/* 4. Grid de Cards Dinâmico */}
      <div className="depoimentos-grid">
        {depoimentosDados.map((item) => (
          <div key={item.id} className={`card-depoimento card-${item.tipo.toLowerCase()}`}>
            <div className="card-header">
              <span className="tag-tipo">{item.tag}</span>
              <div className="aspas">
                <Quote size={32} fill="currentColor" opacity={0.2} />
              </div>
            </div>
            
            <p className="depoimento-texto">{item.texto}</p>
            
            <hr className="divisor" />
            
            <div className="autor-info">
              <div className="avatar-fake">{item.autor.charAt(0)}</div>
              <div>
                <h4 className="autor-nome">{item.autor}</h4>
                <p className="autor-cargo">{item.cargo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Seção de Fechamento (CTA) */}
      <div className="cta-section">
        <p className="cta-texto">Precisa de velocidade, conversão e código inquebrável?</p>
        <div className="cta-botoes">
          <a href="https://wandersonweb.com.br" className="btn-principal" target="_blank" rel="noopener noreferrer">
            Conheça a WandersonWeb
          </a>
          <a href="#contato" className="btn-secundario">
            Agendar Reunião Decisiva
          </a>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;