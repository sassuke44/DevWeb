
import rl from "readline";
import { promises as fs } from "fs";
import write from "./CreateJson.js";


var quest2 = [];
var quest3 = []
var cidadesEstados = []
var cidadesEstados2 = []
var cidadesEstados3 = []

ReadJson();

async function ReadJson() {

    try {

        const cidades = JSON.parse(await fs.readFile("./Files/Cidades.json"));
        const estados = JSON.parse(await fs.readFile("./Files/Estados.json"));
        Separar(cidades, estados)

    } catch (err) {

        console.log(err)

    }

}


async function Separar(cidades, estados) {

    //declaração de arrays
    var uf = [];
    var nomeCidades = []

    estados.forEach(coutry => {

        const { ID, Sigla } = coutry;

        //filtra todas as cidades por cada ID de estado
        var newcidades = cidades.filter(item => item.Estado == ID);

        write.WriteJson(newcidades, Sigla);
        //inseri dentro da string UF as siglas dos Estados
        uf.push(Sigla);

    });

    for (let i = 0; i < estados.length; i++) {

        const data = JSON.parse(await fs.readFile(`./States/${uf[i]}.json`));
        let infoEstados = new Object();
        infoEstados.sigla = uf[i];
        infoEstados.Qcidades = data.length;
        quest2.push(infoEstados);
        data.forEach(coutry => {

            const { Nome } = coutry;

            let soletrarCidade = new Object();
            soletrarCidade.caracteres = Nome.split('')
            soletrarCidade.Qcaracteres = soletrarCidade.caracteres.length;
            soletrarCidade.Estado = uf[i]
            nomeCidades.push(soletrarCidade)
            nomeCidades.sort(function (a, b) {

                return b.Qcaracteres - a.Qcaracteres;

            });
        })
        cidadesEstados = nomeCidades.filter(function (el) {
            return el.Estado == uf[i]
        }

        );
        cidadesEstados.filter((a, b) => function (a, b) {

            return a.Qcaracteres > b.Qcaracteres

        })
        cidadesEstados2.push(cidadesEstados[0])
        cidadesEstados3.push(cidadesEstados[cidadesEstados.length - 1])
    }



    quest2.sort(function (a, b) {
        return b.Qcidades - a.Qcidades;
    });
    for (var i = 0; i < 5; i++) {
        quest3.push(quest2[i])
    }

 
    quest(cidadesEstados2, cidadesEstados3, quest2, quest3)
}
const face = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function quest(cidadesEstados2, cidadesEstados3, quest2, quest3) {
    face.question("Digite 1 para ver os Estados e quantidade de cidades \nDigite 2 para ver os 5 estados com mais cidades \nDigite 3 para ver a cidade com maior nome de cada estado\nDigite 4 para ver a cidade com menor nome de cada estado\n", numero => {
        var number = parseInt(numero)
        if (number === -1) {
            face.close();

        } else {
            switch (numero) {

                case "1":

                    console.log("  ");
                    console.log("Estados e suas cidades:");
                    console.log("  ");

                    quest2.sort(function (a, b) {
                        return a.Qcidades - b.Qcidades;
                    });
                    //imprime os valores da array quest2
                    quest2.forEach(coutry => {
                        const { sigla, Qcidades } = coutry;
                        console.log(sigla + " quantidade de cidades: " + Qcidades);

                    })
                    console.log("  ");

                    break;

                case "2":

                    console.log("  ");
                    console.log("Os 5 estados com mais cidades em ordem decrecente: ");
                    console.log("  ");
                    //imprime os valores da array quest3 dos 5 estados com mais cidades

                    quest3.forEach(coutry => {
                        const { sigla, Qcidades } = coutry
                        console.log(sigla + " quantidade de cidades: " + Qcidades)
                    });
                    console.log("  ");
                    break;

                case "3":
                    console.log("  ");
                    cidadesEstados2.forEach(coutry => {
                        const { caracteres, Qcaracteres, Estado } = coutry
                        console.log("A cidade com maior nome do Estado " + Estado + " é " + caracteres.join("") + " com " + Qcaracteres + " caracteres.")
                    })
                    console.log("  ");
                    break;

                case "4":
                    console.log("  ");
                
                    cidadesEstados3.forEach(coutry => {
                        const { caracteres, Qcaracteres, Estado } = coutry
                        console.log("A cidade com menor nome do Estado " + Estado + " é " + caracteres.join("") + " com " + Qcaracteres + " caracteres.")
                    })
                    console.log("  ");
                    break;
            }
        }
        console.log;
        quest(cidadesEstados2, cidadesEstados3, quest2, quest3)
    }
    )
}
