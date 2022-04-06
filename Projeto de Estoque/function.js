
let btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[3];
let btnEditar = document.querySelectorAll('#botoes button')[2];
let btnVender = document.querySelectorAll('#botoes button')[1];
let btnPesquisar = document.querySelectorAll('#botoes button')[4];

let nome = document.querySelectorAll('#wrap input')[0];
let quantidade = document.querySelectorAll('#wrap input')[1];
let preco = document.querySelectorAll('#wrap input')[2];


let tabela = document.querySelector('#saida table');
let BD = [];

//métodos
//envia para o BD
function Enviar() {
    let produto = new Object();
    produto.nome = nome.value;
    produto.quantidade = quantidade.value;
    produto.preco = preco.value;
    produto.id = BD.length;
    tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>${preco.value}</td></tr>`;
    BD.push(produto);
    console.log(BD)
    limpar();

}
//montar a tabela
function montar() {
    for (i = 0; i < BD.length; i++) {
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar(id)"></td><td>${BD[i].nome}</td><td>${BD[i].quantidade}</td><td>${BD[i].preco}</td></tr>`;
    }
    console.log(i)
}
function excluir() {
    for (i = 0; i < BD.length; i++) {
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked) {
            BD.splice(elemento.id, 1);
            tabela.innerHTML = "<tr><td></td ><td>Nome</td><td>Quantidade</td><td>Valor </td></tr > ";
            montar();
            console.log(BD);
            limpar();

        }
    }
}

function verificar(id) {

    const checkbox = document.querySelectorAll('#saida table tr td input')
    let cont = 0

    checkbox.forEach((e, indice) => {
        if (e.checked) {
            cont++
        }
    })

    if (cont == 1) {
        preco.value = BD[id].preco;
        quantidade.value = BD[id].quantidade;
        nome.value = BD[id].nome;
        cont = 0;
    } else if (cont > 1) {
        alert(`Selecione apenas um campo!`)

        checkbox[id].checked = false
        checkbox.forEach((e, indice) => {
            if (e.checked) {
                checkbox[indice].checked = false
                limpar()
            }
        })

    }
}

//vender os produtos cadastrados
function vender() {
    for (let i = 0; i < BD.length; i++) {
        if (BD[i].nome = nome.value) {
            if (BD[i].quantidade > quantidade.value || BD[i].quantidade == quantidade.value) {
                BD[i].quantidade = (BD[i].quantidade - quantidade.value)
                tabela.innerHTML = "<tr><td></td ><td>Nome</td><td>Quantidade</td><td>Valor </td></tr > ";
                montar();
                if (BD[i].quantidade == 0) {
                    alert("Estoque vazio")
                }
            } else {//caso a quantidade seja inferior a pedida
                alert("Quantidade insuficiente")
                break
            }
        } else {//caso o produto não seja cadastrado
            alert("Produto não cadastrado")
            break

        }
        limpar();

    }
}//alterar um produto
function alterar() {
    for (let i = 0; i < BD.length; i++) {
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked) {
            BD[i].nome = nome.value;
            BD[i].quantidade = quantidade.value;
            BD[i].preco = preco.value;
            tabela.innerHTML = "<tr><td></td ><td>Nome</td><td>Quantidade</td><td>Valor </td></tr > ";
            montar();
            limpar();
        }
    }

}//pesquisar um produto
function pesquisar() {
    for (let i = 0; i < BD.length; i++) {
        if (BD[i].nome = nome.value) {
            alert("Produto encontrado!")
            preco.value = BD[i].preco;
            quantidade.value = BD[i].quantidade;
            break
        } else {
            alert("Produto não cadastrado")
            break

        }
    }
}//limpar os inputs
function limpar() {
    preco.value = "";
    quantidade.value = "";
    nome.value = ""
}
// dar função aos botões 
btnEnviar.onclick = function () { Enviar(); }
btnExcluir.onclick = function () { excluir(); }
btnVender.onclick = function () { vender(); }
btnEditar.onclick = function () { alterar(); }
btnPesquisar.onclick = function () { pesquisar(); }
