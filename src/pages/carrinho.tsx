
import "../css/carrinho.css";

const Carrinho = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      nome: "Caneca Personalizada",
      preco: 40,
      quantidade: 1,
    },
    {
      id: 2,
      nome: "Camiseta Sublimada",
      preco: 60,
      quantidade: 1,
    },
  ]);

  const removerItem = (id) => {
    const novoCarrinho = cart.filter((item) => item.id !== id);
    setCart(novoCarrinho);
  };

  const alterarQuantidade = (id, quantidade) => {
    const novoCarrinho = cart.map((item) =>
      item.id === id ? { ...item, quantidade } : item
    );
    setCart(novoCarrinho);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <div className="carrinho-container">
      <h1 className="titulo">Seu Carrinho</h1>

      {cart.length === 0 ? (
        <p className="vazio">Seu carrinho está vazio.</p>
      ) : (
        <div className="carrinho-lista">
          {cart.map((item) => (
            <div className="item" key={item.id}>
              <div className="info">
                <h3>{item.nome}</h3>
                <p>R$ {item.preco}</p>
              </div>

              <div className="acoes">
                <input
                  type="number"
                  min="1"
                  value={item.quantidade}
                  onChange={(e) =>
                    alterarQuantidade(item.id, Number(e.target.value))
                  }
                />

                <button
                  className="remover"
                  onClick={() => removerItem(item.id)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="resumo">
        <h2>Total: R$ {total}</h2>

        <button className="btn-checkout">
          Finalizar Compra
        </button>
      </div>

      <div className="cta-recrutador">
        <p>
          💼 Este sistema demonstra habilidades reais em desenvolvimento Full Stack,
          focado em performance, experiência do usuário e conversão.
        </p>
      </div>
    </div>
  );
};

export default Carrinho;