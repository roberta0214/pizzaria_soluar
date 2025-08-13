const menu = [
    // Pizzas
    { nome: "Pizza Gigante", preco: 70 },
    { nome: "Pizza Família", preco: 57 },
    { nome: "Pizza Grande", preco: 47 },
    { nome: "Pizza Média", preco: 35 },
    { nome: "Pizza Brotinho", preco: 25 },
    { nome: "Pizza Mini", preco: 13 },

    // Tira Gosto
    { nome: "Fritas", preco: 25 },
    { nome: "Macaxeira", preco: 40 },
    { nome: "Peixe Empanado", preco: 35 },
    { nome: "Fígado Acebolado", preco: 25 },
    { nome: "Carne com Batata", preco: 40 },
    { nome: "Filé de Frango com Fritas", preco: 35 },
    { nome: "Calabresa com Fritas", preco: 25 },
    { nome: "Caldos", preco: 10 },

    // Estrogonofes
    { nome: "Estrogonofe de Frango", preco: 24 },
    { nome: "Estrogonofe de Carne", preco: 24 },

    // Arroz na Chapa
    { nome: "Arroz na Chapa Frango Caipira", preco: 18 },
    { nome: "Arroz na Chapa Calabresa c/ Bacon", preco: 18 },
    { nome: "Arroz na Chapa Misto", preco: 18 },
    { nome: "Arroz na Chapa Bacon", preco: 18 },

    // Omeletes
    { nome: "Omelete Misto", preco: 15 },
    { nome: "Omelete Frango", preco: 15 },
    { nome: "Omelete Bolonhesa", preco: 15 },
    { nome: "Omelete Vegetariano", preco: 15 },
    { nome: "Omelete Mixta", preco: 15 },

    // Filé à Parmegiana
    { nome: "Filé à Parmegiana Carne", preco: 26 },
    { nome: "Filé à Parmegiana Frango", preco: 24 },

    // Lanches
    { nome: "Misto Quente", preco: 8 },
    { nome: "Misto com Ovo", preco: 9 },
    { nome: "Frango com Ovo", preco: 10 },
    { nome: "X-Bauru", preco: 12 },
    { nome: "X-Burguer", preco: 12 },
    { nome: "X-Salada", preco: 14 },
    { nome: "X-Bacon", preco: 14 },
    { nome: "X-Calabresa", preco: 14 },
    { nome: "X-Frango", preco: 12 },
    { nome: "X-Picanha", preco: 14 },
    { nome: "X-Tudo", preco: 22 },
    { nome: "X-Filé", preco: 22 },
    { nome: "Hamburguer", preco: 9 },
    { nome: "Hamburguer Artesanal", preco: 22 },

    // Massas
    { nome: "Espaguete Bolonhesa", preco: 18 },
    { nome: "Espaguete Frango", preco: 18 },
    { nome: "Espaguete Bacon", preco: 18 },
    { nome: "Espaguete Misto", preco: 18 },

    // Panquecas
    { nome: "Panqueca Mista", preco: 24 },
    { nome: "Panqueca Frango", preco: 24 },
    { nome: "Panqueca Bolonhesa", preco: 24 },
    { nome: "Panqueca Carne", preco: 24 },

    // Bebidas
    { nome: "Suco de Goiaba", preco: 8 },
    { nome: "Suco de Acerola", preco: 8 },
    { nome: "Suco de Laranja", preco: 8 },
    { nome: "Bebida Bacardi", preco: 3 },
    { nome: "Bebida Dreher", preco: 3 }
];

let pedido = [];
let total = 0;

function atualizarPedido() {
    const lista = document.getElementById("lista-pedido");
    lista.innerHTML = "";
    pedido.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        lista.appendChild(li);
    });
    document.getElementById("total").textContent = total.toFixed(2);
}

function adicionarItem(item) {
    pedido.push(item);
    total += item.preco;
    atualizarPedido();
}

function montarMenu() {
    const menuDiv = document.getElementById("menu");
    menu.forEach(item => {
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `<span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
                         <button onclick='adicionarItem(${JSON.stringify(item)})'>+</button>`;
        menuDiv.appendChild(div);
    });
}

document.getElementById("btn-whatsapp").addEventListener("click", () => {
    if (pedido.length === 0) {
        alert("Adicione itens ao pedido antes de enviar.");
        return;
    }
    let mensagem = "🍕 *Pedido Pizzaria Soluar* 🍕\n";
    pedido.forEach(item => {
        mensagem += `- ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });
    mensagem += `\n💰 Total: R$ ${total.toFixed(2)}`;
    
    let numero = "5533999342180"; // Número no formato internacional sem espaços
    let link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
});

montarMenu();
