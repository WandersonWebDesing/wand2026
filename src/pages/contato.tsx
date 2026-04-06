// IMPORTS
import { useState, ChangeEvent, FormEvent } from 'react';
import '../css/contato.css';

// ✅ TIPAGEM PROFISSIONAL
interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  mensagem: string;
}

// ✅ FUNÇÃO NECESSÁRIA PARA NETLIFY (encode)
const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contato = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    whatsapp: '',
    mensagem: ''
  });

  // ✅ CAPTURA DE INPUT
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✅ ENVIO PARA NETLIFY (SEM RECARREGAR A PÁGINA)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...formData
        })
      });

      alert('✅ Mensagem enviada com sucesso!');
      
      // Limpa o formulário
      setFormData({
        nome: '',
        email: '',
        whatsapp: '',
        mensagem: ''
      });

    } catch (error) {
      alert('❌ Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <section className="contato-container">
      <div className="contato-content">

        {/* LADO ESQUERDO */}
        <div className="contato-info">
          <span className="subtitle">VAMOS CRESCER JUNTOS?</span>
          <h2>Transforme sua presença digital em uma máquina de vendas</h2>

          <p>
            Se você é um <strong>empresário</strong> ou <strong>recrutador</strong>, você está no lugar certo.
          </p>

          <div className="beneficios-list">
            <div className="beneficio-item">🚀 Interfaces modernas</div>
            <div className="beneficio-item">📱 100% responsivo</div>
            <div className="beneficio-item">🔄 Integrações completas</div>
          </div>

          <p className="call-to-action-text">
            Preencha o formulário e vamos começar!
          </p>
        </div>

        {/* FORMULÁRIO */}
        <div className="contato-form-wrapper">
          <h3>Inicie uma conversa</h3>

          <form
            className="contato-form"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* NETLIFY CONFIG */}
            <input type="hidden" name="form-name" value="contact" />

            {/* ANTI-SPAM */}
            <p style={{ display: 'none' }}>
              <label>
                Não preencha: <input name="bot-field" />
              </label>
            </p>

            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              value={formData.nome}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
            />

            <textarea
              name="mensagem"
              rows={4}
              placeholder="Sua mensagem"
              required
              value={formData.mensagem}
              onChange={handleChange}
            />

            <button type="submit" className="btn-submit">
              Enviar mensagem
            </button>

            <p className="privacy-text">
              🔒 Seus dados estão seguros.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contato;