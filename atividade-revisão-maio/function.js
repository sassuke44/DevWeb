var totalnumeros = []
function estrutura1() {
    var numeros1 = [];
    var numeros2 = [];
    for (x = 0; x < 5; x++) {
        numeros1.push(parseInt(prompt("Informe o numero do Array 1:")))
        numeros2.push(parseInt(prompt("Informe o numero do Array 2:")))
    }

    numeros1.sort(ordenar);
    numeros2.sort(ordenar);
    numeros1.pop();
    numeros2.pop()
    numeros1.shift();
    numeros2.shift();

    totalnumeros = numeros1.concat(numeros2);
    totalnumeros.sort(ordenar);
    document.write("Array1 " + numeros1 + "<br>Array2 " + numeros2 + "<br>array concatenado " + totalnumeros + "<br>array concatenado sem o maior é o menor ");

    totalnumeros.pop();
    totalnumeros.shift();
    document.write(totalnumeros);
    var valor = parseInt(prompt("Informe o valor que deseja procurar:"))
    document.write(estrutura2(valor))

}
function ordenar(a, b) {
    return a - b;
}
function estrutura2(valor) {

    if (totalnumeros.length != 0) {
        if (totalnumeros.filter(totalnumeros => totalnumeros == valor).length = !0) {
            alert("O valor " + valor + "Foi encontrado")
        } else {
            alert("O valor não foi encontrado")
        }
    }
    else {
        alert("Complete a 1 primeriro")
    }
}
function estrutura3() {
    var numeros = [];
    for (x = 0; x <= 10; x++) {
        numeros.push(parseInt(prompt("Informe os valores")))
    }
    var dobro = numeros.map(function (numero) {
        return numero * 2;
    })
    document.write("Valor Dobrado" + dobro + "<br>")
    document.write("Valor original" + numeros)
}
function estrutura4() {
    const produtos = [
        { id: 1, categoria: "limpeza", name: "Amaciante" },
        { id: 2, categoria: "limpeza", name: "Detergente" },
        { id: 3, categoria: "alimento", name: "ovo" },
        { id: 4, categoria: "alimento", name: "alface" },
    ]
    document.write(produtos.map(produtos => produtos.id))
    //estrutura 5
    var alimentos = (produtos.filter(produtos => produtos.categoria == "alimento"))
    alimentos.forEach((value, indice) => {
        document.write("<br> Nome: " + alimentos[indice].name + " Categoria: " + alimentos[indice].categoria + " ID: " + alimentos[indice].id)
    }
    )
    //estrutura 6
    document.write("<br>ID da categoria Alimento " + alimentos.map((alimentos => alimentos.id)));
}
function estrutura7() {
    const produtos = { nome: [], preco: [] }
    for (x = 0; x <= 2; x++) {
        produtos.nome.push(prompt("Informe o nome do Produto:"))
        produtos.preco.push(parseInt(prompt("Informe o valor do Produto")))
    }

    var valor = Object.values(produtos.preco)
    var dobro = valor.map(valor => valor * 2)
    dobro.forEach((value, indice) => {
        document.write("Produto: " + produtos.nome[indice] + "valor anterior: " + produtos.preco[indice] + "Valor Atualizado: " + dobro[indice] + "<br>")
    })

}
function estrutura8(){
    const funcionários = [{
        Nome: "Han Solo",
        Departamento: "Financeiro",
        Salario: 5000
        }, {
        Nome: "Luke",
        Departamento: "Financeiro",
        Salario: 15000
        }, {
        Nome: "Ben",
        Departamento: "Marketing",
        Salario: 2000
        }, {
        Nome: "Leia",
        Departamento: "Marketing",
        Salario: 10000
        }, {
        Nome: "Rey",
        Departamento: "Financeiro",
        Salario: 2500
        }]
        var Financeiro= funcionários.filter(funcionários => funcionários.Departamento =="Financeiro")
        var aumento=Financeiro.map(Financeiro => Financeiro.Salario*1.5)
      
        aumento.forEach((value,i) =>{
            document.write("Funcionario: "+Financeiro[i].Nome +" Departamento: "+Financeiro[i].Departamento+" Salario: "+ Financeiro[i].Salario+ " Salario com Reajsute: " +aumento[i]+"<br>")
        });
        document.write("Valor total dos novos salarios: "   +aumento.reduce(function(soma,i){return  soma+i;}).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))
}
function verifica(arr) {
    var resul = arr.map(function(num) {
    var maior = 0;
    for(var i=0;i< num.length; i++) {
    if (num[i] > maior) {
    maior = num[i];
    }
    }
    return maior;
    });
    return resul;
    }
function estrutura9(){
 
       
        document.write("Resultado Final "+verifica([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
    document.write(
        `<br>1° cria a função verifica<br>`+
        `2°cria a variavel resultado cujo e igual a map que retorna o maior valor da array<br>`+
        `3° cria a variavel maior cujo e igual a 0 <br>`+
        `4° cria um loop  que decorera ate o x ser igual ao tamanho do array<br>`+
        `5° cria uma comparação entre o maior e um elemnto do array<br>`+
        `6° caso seja maior atualiza o valor de maior<br>`+
        `7° Retorna o maior valor do array<br>` 
        )
}
function estrutura10(){
    var numeros=[]
    for(x=0; numeros[x-1] != 600;x++)
    {
        numeros.push(parseInt(prompt("Informe os numeros(600 para parar)")))
    }
    numeros.pop();
    var negativos =numeros.filter(numeros => numeros < 0);
    negativos.forEach(value=>{
        document.write(value+"<br>")
    })
    document.write("Quantidade de numeros negativos: "+negativos.length +"Itens")
}