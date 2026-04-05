
import '../css/contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contato-container">
      <div className="contato-content">
        
        {/* Lado Esquerdo: Copy Persuasivo & Rapport */}
        <div className="contato-info">
          <span className="subtitle">VAMOS CRESCER JUNTOS?</span>
          <h2>Transforme sua presença digital em uma máquina de vendas</h2>
          <p>
            Se você é um <strong>empresário</strong> querendo escalar seu negócio ou um <strong>recrutador</strong> em busca de um desenvolvedor focado em resultados, você está no lugar certo.
          </p>
          <p>
            Não entrego apenas linhas de código. Eu crio experiências digitais de alto desempenho no <strong>wandersonweb.com.br</strong> que conectam sua marca ao público ideal.
          </p>
          
          <div className="beneficios-list">
            <div className="beneficio-item">
              <span className="icon">🚀</span>
              <p>Interfaces rápidas, modernas e focadas em conversão.</p>
            </div>
            <div className="beneficio-item">
              <span className="icon">📱</span>
              <p>Design 100% responsivo para reter usuários no mobile.</p>
            </div>
            <div className="beneficio-item">
              <span className="icon">🔄</span>
              <p>Integração nativa com ecossistemas de marketing (como HubSpot).</p>
            </div>
          </div>

          <p className="call-to-action-text">
            Preencha o formulário e vamos desenhar a melhor estratégia para o seu projeto!
          </p>
        </div>

        {/* Lado Direito: Formulário Conectado ao HubSpot */}
        <div className="contato-form-wrapper">
          <h3>Inicie uma conversa</h3>
          
          {/* OPÇÃO A: Se você usa o formulário nativo do HubSpot via script embed,
            insira a div do hubspot aqui e remova o formulário abaixo.
            
            OPÇÃO B: Formulário customizado enviando dados para a API do HubSpot.
          */}
          <form className="contato-form">
            <div className="form-group">
              <label htmlFor="nome">Como posso te chamar?</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Seu nome completo" 
                required 
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Seu melhor e-mail corporativo</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seu@email.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp (para um contato mais rápido)</label>
              <input 
                type="tel" 
                id="whatsapp" 
                name="whatsapp" 
                placeholder="(00) 90000-0000" 
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Fale um pouco sobre o seu objetivo</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                rows="4" 
                placeholder="Ex: Quero um novo site / Quero integrar um CRM / Quero uma proposta de freela."
                value={formData.mensagem}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">
              Quero Alavancar Meus Resultados
            </button>
            <p className="privacy-text">🔒 Seus dados estão seguros e serão usados apenas para nosso contato.</p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contato;