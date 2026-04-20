import React, { useEffect } from "react";
import "../css/home.css";

// Certifique-se de que esses componentes existem e estão exportados corretamente
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import minhaFoto from "../assets/images/wandersonhome.png";
import Logowanderson from "../assets/images/logowanderson.png";

export default function Home() {
  // 1. Configuração do WhatsApp
  const phoneNumber = "5561999788904";
  const message = encodeURIComponent("Olá, venho do site e quero agendar uma visita. join growth-fully");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // 2. Lógica de Animação (Scroll Reveal)
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
          observer.unobserve(target); // Anima apenas uma vez
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".photo-card");
    cards.forEach((card) => {
      const el = card as HTMLElement;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "all 0.8s cubic-bezier(0.2, 1, 0.3, 1)";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-container">
      <Navbar />

      {/* --- SEÇÃO HERO --- */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-wrapper">
          <div className="hero-content">
            <span className="hero-badge">Desenvolvimento Full Stack & Estratégia Digital</span>

            <h1>
              Sua empresa não precisa de apenas um site…
              <span> ela precisa de um ecossistema que gere lucro.</span>
            </h1>

            <p className="hero-description">
              Olá, sou <strong>Wanderson Santos</strong>. Especialista em transformar visão técnica em resultados de negócio.
              Enquanto o mercado entrega "layouts", eu projeto infraestruturas escaláveis.
            </p>

            <div className="hero-video-container">
              <iframe
                src="https://www.youtube.com/embed/SEU_ID_DO_VIDEO"
                title="Wanderson Santos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="hero-highlight">
              "O código é o meio, a autoridade é o fim." — Conectando tecnologia e persuasão. 🚀
            </p>

            {/* BOTÕES DE AÇÃO */}
            <div className="hero-buttons">
              <a
                href="#portfolio"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver Projetos de Valor
              </a>

              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Agendar Consultoria
              </a>
            </div>
          </div>
        </div>

        {/* MARQUEE */}
        <div className="brand-ticker">
          <div className="ticker-wrapper">
            <span>Moodle</span> <span>Firebase</span> <span>Supabase</span> <span>React</span>
            <span>Node.js</span> <span>HubSpot</span> <span>TypeScript</span>
            {/* Repetição para loop */}
            <span>Moodle</span> <span>Firebase</span> <span>Supabase</span> <span>React</span>
          </div>
        </div>

        {minhaFoto && (
          <div className="parallax-container">
            <div className="parallax-image" style={{ backgroundImage: `url(${minhaFoto})` }}></div>
          </div>
        )}
      </section>

     {/* --- SEÇÃO: O CUSTO DA INVISIBILIDADE --- */}
<section className="pain-points-section">
  <div className="container">
    <div className="pain-header">
      <span className="subtitle">O Mercado não perdoa o amadorismo</span>
      <h2>A sua imagem está atraindo lucro ou afastando oportunidades?</h2>
    </div>

    <div className="pain-grid">
      <div className="pain-item">
        <h3>A "Morte" no Primeiro Clique</h3>
        <p>
          Hoje, você tem menos de 3 segundos para provar que é a escolha certa. Se o seu ecossistema digital 
          é lento, confuso ou visualmente pobre, o recrutador — ou o seu cliente — já fechou a aba e foi para o concorrente.
        </p>
      </div>

      <div className="pain-item">
        <h3>O Abismo da Autoridade</h3>
        <p>
          Você é um expert no que faz, mas a sua presença digital diz o contrário? A falta de um 
          design estratégico cria uma barreira de desconfiança que nenhum currículo ou pitch de vendas consegue quebrar.
        </p>
      </div>

      <div className="pain-item">
        <h3>Tecnologia sem Estratégia</h3>
        <p>
          Sistemas que travam, fotos sem ângulo profissional e sites que não convertem são "ralos" de dinheiro. 
          O que você está perdendo hoje por não ter uma interface que fala a língua do seu investidor?
        </p>
      </div>
    </div>

    <div className="highlight-quote">
      <p>
        "Não é apenas sobre código ou fotografia. É sobre <strong>parar de ser ignorado</strong> 
        e passar a ditar as regras do seu mercado."
      </p>
    </div>
  </div>
</section>

{/* --- SEÇÃO: ENGENHARIA DA PERCEPÇÃO --- */}
<section className="photo-strategy">
  <div className="strategy-header">
    <span className="badge">Lógica & Arte</span>
    <h2>Engenharia da Percepção</h2>
    <p>Onde a precisão do código encontra a sensibilidade da lente para criar autoridade visual.</p>
  </div>

  <div className="photo-grid">
    <div className="photo-card">
      <div className="card-icon">01</div>
      <h3>Planos Estratégicos</h3>
      <p>Do Grande Angular ao Close-up: enquadramentos calculados para demonstrar solidez, visão sistêmica e processos claros.</p>
    </div>

    <div className="photo-card">
      <div className="card-icon">02</div>
      <h3>Conexão & Rapport</h3>
      <p>O ponto exato entre profissionalismo e acessibilidade. Criamos a ponte de confiança necessária para fechar negócios.</p>
    </div>

    <div className="photo-card">
      <div className="card-icon">03</div>
      <h3>Ângulos de Poder</h3>
      <p>Perspectivas que transmitem liderança e segurança imediata, garantindo que sua imagem seja seu primeiro grande resultado.</p>
    </div>
  </div>
</section>

      {/* --- CTA FINAL --- */}
      <section className="cta">
        <h2>Se sua presença digital não te posiciona como líder, ela está custando dinheiro.</h2>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Elevar meu Posicionamento
        </a>
      </section>

      
    </div>
  );
}