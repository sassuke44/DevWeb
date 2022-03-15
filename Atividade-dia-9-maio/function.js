

function estrutura1() {
    var arco_iris = ["Vermelho", "Laranja", "Marrom", "Azul"];
    arco_iris.splice(2, 1, "Amarelo", "Verde");
    arco_iris.splice(5, 0, "roxo");
    document.write(arco_iris)
}
function estrutura2() {
    var endereco =
    {
        rua: "",
        numero: "",
        bairro: "",
        cidade: "",
        uf: "",
    }
    endereco.rua = (prompt("Informe a sua rua:"));
    endereco.numero = (prompt("Informe o seu numero:"));
    endereco.bairro = (prompt("Informe  o seu bairro:"));
    endereco.cidade = (prompt("Informe a sua cidade:"));
    endereco.uf = (prompt("Informe seu uf:"));

    document.write("O usuario mora " + endereco.cidade + "/" + endereco.uf + ", no bairro " + endereco.bairro + ", na rua " + endereco.rua + " n° " + endereco.numero)

}

function estrutura3() {
    var habilidades = [];
    for (var x = 0; habilidades[x - 1] != 100; x++) {

        habilidades.push(prompt("Informe as suas habilidades:(informe 100 para parar)"))
        if (habilidades[x - 1] == 100) {
            habilidades.pop();
        }
    }
    document.write(habilidadesTem(habilidades));
}
function habilidadesTem(habilidades) {
    if (habilidades.indexOf("JavaScript", 0) == "0") {
        return (true)
    }
    else {
        return (false)
    }

}
function estrutura4() {
    var nomes = [];
    var anosEstudos = [];
    for (var x = 0; anosEstudos[x - 1] != 100; x++) {
        nomes.push(prompt("Informe seu nome:"))
        anosEstudos.push(parseInt(prompt("Informe a quantidade de anos estudados:(para parar informe 100)")))

    }
    anosEstudos.pop();
    nomes.pop();
    anosEstudos.forEach((valor, indice) => experiencia(valor, indice, nomes));
}
function experiencia(valor, indice, nomes) {
    if (valor >= 0 && valor <= 1) {
        document.write("O programador " + nomes[indice] + " é um Programador Junior <br>")
    }
    else if (valor >= 1 && valor < 3) {
        document.write("O programador " + nomes[indice] + " é um Programador Pleno  <br>")
    }
    else if (valor >= 3 && valor <= 6) {
        document.write("O programador " + nomes[indice] + " é um Programador Senior  <br>")
    }
    else if (valor >= 7) {
        document.write("O programador " + nomes[indice] + " é um Programador Mestre Jedi <br>")
    }

}
function estrutura5() {

    var usuarios =
    {
        nomes: [],
        habilidades: [],

    }
    var y = 0;


    for (x = 0; x <= 3; x++) {
        if (x == 0) {
            usuarios.nomes.push(prompt("Informe seu nome"));
        }
        if (x < 3) {
            usuarios.habilidades.push(prompt("Informe suas 3 habilidades"));
        }
        else {
            var confirma = prompt("gostaria de adicionar outro usuario?");
            if (confirma == "sim") {
                x = -1;
                y++;
            }
        }
    }

    habilidade = Object.values(usuarios.habilidades)
    for (x = 0; x < usuarios.nomes.length; x++) {
        document.write(usuarios.nomes[x])
        document.write("<br>Habilidades:<br>")
        //for(i=0;i<usuarios.habilidades.length;i++)
        //{
        habilidade.forEach((values, indice) => {
            if (indice < 3) {
                console.log(values);
                document.write(values + "<br>");

            } else if (indice == 3) {
                habilidade.splice(0, 3);
            }
        }
        )



        //}
        // for(let value of habilidade )
        // {
        //     console.log(value.habilidade.join(","))
        // //document.write(value+"<br>")
        // //}
    }



}
function estrutura6() {
    var usuarios =
    {
        nomes: [],
        idade: [],
        Rg: []

    }
    for (x = 0; x <= 1; x++) {
        usuarios.nomes.push(prompt("Informe seu nome"));
        usuarios.idade.push(parseInt(prompt("Informe sua idade")))
        usuarios.Rg.push(prompt("Informe seu Rg"))
    }
    usuarios.idade.forEach((values,indice)=>
    {
    if(values > 18)
    {
        let maiores = usuarios.idade.filter(idade => idade > 18)
        console.log(maiores)
        document.write("nome "+usuarios.nomes[indice]+"  idade "+usuarios.idade[indice]+" rg  "+ usuarios.Rg[indice]+"<br>")
    }
    }
    )
    
}