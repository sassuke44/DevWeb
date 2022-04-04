
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
function montar() {
    for (i = 0; i < BD.length; i++) {
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].nome}</td><td>${BD[i].quantidade}</td><td>${BD[i].preco}</td></tr>`;
    }
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
    let cont = 0;
    for (let i = 0; i < BD.length; i++) {
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked) {
            BD[i].nome = nome.value;
            BD[i].quantidade = quantidade.value;
            BD[i].preco = preco.value;

            cont++;
            if (cont > 1) {
                alert("Não selecionar mais que um produto!!")
                elemento.checked = false;
                break
            }
        }

    }
}
function vender() {
    for (let i = 0; i < BD.length; i++) {
        if (BD[i].nome = nome.value) {
            if (BD[i].quantidade >= quantidade.value) {
                BD[i].quantidade = (BD[i].quantidade - quantidade.value)
                tabela.innerHTML = "<tr><td></td ><td>Nome</td><td>Quantidade</td><td>Valor </td></tr > ";
                montar();
                if (BD[i].quantidade == 0) {
                    alert("Estoque vazio")
                }
            } else {
                alert("Quantidade insuficiente")
                break
            }
        } else {
            alert("Produto não cadastrado")
            break
            
        }
        limpar();

    }
}
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
}
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
}
function limpar(){
    preco.value = "";
    quantidade.value ="";
    nome.value = ""
}
btnEnviar.onclick = function () { Enviar(); }
btnExcluir.onclick = function () { excluir(); }
btnVender.onclick = function () { vender(); }
btnEditar.onclick = function () { alterar(); }
btnPesquisar.onclick = function () { pesquisar(); }
