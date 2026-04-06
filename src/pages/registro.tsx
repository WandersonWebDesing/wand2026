import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "../css/registro.css";

// ✅ URL da API (produção + desenvolvimento)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

// ✅ TIPAGEM DO FORMULÁRIO
type FormData = {
  nome: string;
  telefone: string;
  email: string;
  tipo: string;
  codigo: string;
};

export default function Register() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
    tipo: "cliente",
    codigo: "",
  });

  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Atualização de campos segura
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔥 Enviar código WhatsApp
  const enviarCodigo = async () => {
    if (!form.telefone) {
      setMensagem("Digite um telefone válido");
      return;
    }

    setLoading(true);
    setMensagem("");

    try {
      const res = await fetch(`${API_URL}/enviar-codigo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          telefone: form.telefone,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setCodigoEnviado(true);
      setMensagem("Código enviado no WhatsApp 📲");
    } catch (error: any) {
      setMensagem(error.message || "Erro ao enviar código");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Registrar usuário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMensagem("");

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setMensagem("Cadastro realizado com sucesso ✅");

      // 🔥 Reset do formulário
      setForm({
        nome: "",
        telefone: "",
        email: "",
        tipo: "cliente",
        codigo: "",
      });

      setCodigoEnviado(false);
    } catch (error: any) {
      setMensagem(error.message || "Erro ao cadastrar");
    } finally {
      setLoading(false);
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
          value={form.nome}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefone"
          placeholder="WhatsApp (61 99999-9999)"
          value={form.telefone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
          required
        />

        <select name="tipo" value={form.tipo} onChange={handleChange}>
          <option value="cliente">Cliente</option>
          <option value="parceiro">Parceiro</option>
        </select>

        {/* 🔥 Botão enviar código */}
        <button
          type="button"
          className="btn-codigo"
          onClick={enviarCodigo}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar código no WhatsApp"}
        </button>

        {/* 🔥 Campo de código */}
        {codigoEnviado && (
          <input
            type="text"
            name="codigo"
            placeholder="Digite o código recebido"
            value={form.codigo}
            onChange={handleChange}
            required
          />
        )}

        <button type="submit" className="btn-submit" disabled={loading}>
          {loading ? "Processando..." : "Finalizar Cadastro"}
        </button>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </form>
    </div>
  );
}