import { useState, ChangeEvent, FormEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../css/contato.css';

// Imagens (substitua pelos seus caminhos reais)
import BannerImg from '../assets/images/comentalogo.png'; 
import LogoDev from '../assets/images/contato.png';

interface FormData {
  nome: string;
  email: string;
  whatsapp: string;
  mensagem: string;
}

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Contato = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '', email: '', whatsapp: '', mensagem: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData })
      });
      alert('🚀 Sucesso! Em breve entrarei em contato.');
      setFormData({ nome: '', email: '', whatsapp: '', mensagem: '' });
    } catch (error) {
      alert('❌ Erro ao enviar. Tente o WhatsApp!');
    }
  };

  const techs = ['Twilio', 'Meta', 'Render', 'Netlify', 'Bootstrap', 'React', 'NodeJS'];

  return (
    <div className="page-wrapper">
      {/* HEADER VISUAL (Inspirado na imagem 1) */}
      <section className="hero-contact" style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="hero-overlay">
          <h1>Conecte seu negócio ao <span>Sucesso Digital</span></h1>
        </div>
      </section>

      {/* TECH SLIDER */}
      <div className="tech-slider-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{ 768: { slidesPerView: 5 } }}
        >
          {techs.map((tech) => (
            <SwiperSlide key={tech} className="tech-item">{tech}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="contato-container">
        <div className="contato-content">
          
          {/* LADO ESQUERDO: INFOS E BRANDING */}
          <div className="contato-info">
            <img src={LogoDev} alt="Wanderson Web Logo" className="brand-avatar" />
            <span className="subtitle">EXPERTISE TÉCNICA</span>
            <h2>Construindo Rapport & Desenvolvendo Soluções</h2>
            <p>Especialista em transformar ideias complexas em interfaces intuitivas e escaláveis.</p>
            
            <div className="contact-details">
              <div className="detail-item">
                <strong>📍 Endereço:</strong>
                <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
              </div>
              <div className="detail-item">
                <strong>📧 E-mail:</strong>
                <p>contato@wandersonweb.com.br</p>
              </div>
            </div>
          </div>

          {/* FORMULÁRIO ARQUITETÔNICO */}
          <div className="contato-form-wrapper">
            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="contato-form">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="input-group">
                <label>Nome Completo</label>
                <input type="text" name="nome" placeholder="Como devo te chamar?" required value={formData.nome} onChange={handleChange} />
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>E-mail Corporativo</label>
                  <input type="email" name="email" placeholder="exemplo@empresa.com" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>WhatsApp</label>
                  <input type="tel" name="whatsapp" placeholder="(11) 99999-9999" value={formData.whatsapp} onChange={handleChange} />
                </div>
              </div>

              <div className="input-group">
                <label>Sua Mensagem</label>
                <textarea name="mensagem" rows={4} placeholder="Descreva seu projeto ou desafio..." required value={formData.mensagem} onChange={handleChange} />
              </div>

              <button type="submit" className="btn-submit">DEIXAR FEEDBACK & INICIAR PROJETO</button>
            </form>
          </div>
        </div>
      </section>

      {/* MAPA GOOGLE */}
      <section className="map-section">
        <iframe 
          title="Localização"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197475304652!2d-46.6588243!3d-23.5613497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da13658d%3A0x669046f488669c3a!2sAv.%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1700000000000" 
          width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contato;