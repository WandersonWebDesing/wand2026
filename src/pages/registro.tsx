import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, GitHub, Linkedin, Briefcase } from 'lucide-react';
import '../css/registro.css';

export default function Register() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipo: "cliente",
    codigo: ""
  });

  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 Enviar código WhatsApp
  const enviarCodigo = async () => {
    try {
      const res = await fetch("http://localhost:3000/enviar-codigo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          telefone: form.telefone
        })
      });

      const data = await res.json();

      if (res.ok) {
        setCodigoEnviado(true);
        setMensagem("Código enviado no WhatsApp 📲");
      } else {
        setMensagem(data.error || "Erro ao enviar código");
      }
    } catch (error) {
      setMensagem("Erro no servidor");
    }
  };

  // 🔥 Registrar usuário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: form.nome,
          telefone: form.telefone,
          email: form.email,
          tipo: form.tipo,
          codigo: form.codigo
        })
      });

      const data = await res.json();

      if (res.ok) {
        setMensagem("Cadastro realizado com sucesso ✅");
      } else {
        setMensagem(data.error || "Erro ao cadastrar");
      }
    } catch (error) {
      setMensagem("Erro no servidor");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>🚀 Criar Conta</h2>

        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="telefone"
          placeholder="WhatsApp (61 99999-9999)"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleChange}
          required
        />

        <select name="tipo" onChange={handleChange}>
          <option value="cliente">Cliente</option>
          <option value="parceiro">Parceiro</option>
        </select>

        {/* 🔥 Botão enviar código */}
        <button
          type="button"
          className="btn-codigo"
          onClick={enviarCodigo}
        >
          Enviar código no WhatsApp
        </button>

        {/* 🔥 Campo de código */}
        {codigoEnviado && (
          <input
            type="text"
            name="codigo"
            placeholder="Digite o código recebido"
            onChange={handleChange}
            required
          />
        )}

        <button type="submit" className="btn-submit">
          Finalizar Cadastro
        </button>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </form>
    </div>
  );
}