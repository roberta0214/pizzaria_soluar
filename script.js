// Cardápio baseado no que você enviou
const menu = [
    { nome: "Pizza Gigante", preco: 70 },
    { nome: "Pizza Família", preco: 57 },
    { nome: "Pizza Grande", preco: 47 },
    { nome: "Pizza Média", preco: 35 },
    { nome: "Pizza Brotinho", preco: 25 },
    { nome: "Pizza Mini", preco: 13 },
    { nome: "Frango Caipira na Chapa", preco: 18 },
    { nome: "Calabresa c/ Bacon na Chapa", preco: 18 },
    { nome: "Omelete Misto", preco: 15 },
    { nome: "Filé à Parmegiana Frango", preco: 24 },
    { nome: "X-Burguer", preco: 12 },
    { nome: "X-Salada", preco: 14 },
    { nome: "X-Bacon", preco: 14 },
    { nome: "Suco de Goiaba", preco: 8 }
];

let pedido = [];
let total = 0;

function atualizarPedido() {
    const lista = document.getElementById("lista-pedido");
    lista.innerHTML = "";
    pedido.forEach(item => {
        let li = document.createElement("li");
        li.textContent = ${item.nome} - R$ ${item.preco.toFixed(2)};
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
        div.innerHTML = <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
                         <button onclick='adicionarItem(${JSON.stringify(item)})'>+</button>;
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
        mensagem += - ${item.nome} - R$ ${item.preco.toFixed(2)}\n;
    });
    mensagem += \n💰 Total: R$ ${total.toFixed(2)};
    let numero = "5533999342180";
    let link = https://wa.me/${numero}?text=${encodeURIComponent(mensagem)};
    window.open(link, "_blank");
});

montarMenu();
