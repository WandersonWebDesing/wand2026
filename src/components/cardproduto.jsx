
import { ShoppingCart, Layout, Rocket, ArrowRight } from 'lucide-react';
import '../css/cardprodutos.css';

const CardProdutos = () => {
  const servicos = [
    {
      id: 1,
      icone: <Layout size={32} />,
      titulo: "Landing Pages de Alta Conversão",
      descricao: "Transforme visitantes em clientes. Páginas ultra-rápidas, focadas em vendas e totalmente otimizadas para mobile.",
      tag: "Mais Vendido",
      tecnologias: ["React", "Vite", "SEO Pro"]
    },
    {
      id: 2,
      icone: <ShoppingCart size={32} />,
      titulo: "E-commerce Estruturado",
      descricao: "Sua loja virtual pronta para faturar. Experiência de compra fluida que destrói as objeções do seu cliente.",
      tag: "Escalável",
      tecnologias: ["TypeScript", "UI/UX", "APIs"]
    },
    {
      id: 3,
      icone: <Rocket size={32} />,
      titulo: "Gestão de Presença Digital",
      descricao: "Não basta ter um site, é preciso ser visto. Integramos sua marca com estratégias de tráfego e redes sociais.",
      tag: "Completo",
      tecnologias: ["Social Media", "Copywriting", "Growth"]
    }
  ];

  return (
    <section className="secao-produtos">
      <div className="container-header">
        <span className="subtitulo-persuasivo">Soluções que Geram Lucro</span>
        <h2 className="titulo-principal">
          Pare de perder clientes para a concorrência por causa de um site amador.
        </h2>
        <p className="descricao-principal">
          Eu não entrego apenas código. Eu construo a ponte entre o seu produto e o bolso do seu cliente, utilizando as tecnologias mais modernas do mercado.
        </p>
      </div>

      <div className="grid-cards">
        {servicos.map((servico) => (
          <div key={servico.id} className="card-item">
            <div className="card-badge">{servico.tag}</div>
            
            <div className="card-icone">
              {servico.icone}
            </div>
            
            <h3 className="card-titulo">{servico.titulo}</h3>
            
            <p className="card-descricao">{servico.descricao}</p>
            
            <div className="card-tags-tech">
              {servico.tecnologias.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <a 
              href="https://wa.me/seu-numero-aqui" 
              className="card-botao"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero Alavancar Meu Negócio
              <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>

      <div className="rapport-final">
        <p>
          🎯 <strong>Recrutador ou Empresário:</strong> Você busca alguém que apenas digita código ou um parceiro estratégico que entende de negócios, design e conversão? O projeto <strong>wandersonweb.com.br</strong> foi desenhado para quem não aceita o comum.
        </p>
      </div>
    </section>
  );
};

export default CardProdutos;