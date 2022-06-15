
import rl from "readline";
import s from "./FunctionSeparar.js"
import { promises as fs } from "fs";

ReadJson();

async function ReadJson() {

    try {

        const cidades = JSON.parse(await fs.readFile("./Files/Cidades.json"));
        const estados = JSON.parse(await fs.readFile("./Files/Estados.json"));
        const regioes = JSON.parse(await fs.readFile("./Files/Capitais.json"));
        s.Separar(cidades, estados, regioes)

    } catch (err) {

        console.log(err)

    }

}

const face = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

function quest(cidadesEstados2, cidadesEstados3, quest2, quest3, regioes) {
    face.question(`
    \n Digite 1 para ver os Estados e quantidade de cidades \n Digite 2 para ver os 5 estados com mais cidades \n Digite 3 para ver a cidade com maior nome de cada estado \n Digite 4 para ver a cidade com menor nome de cada estado \n Digite 5 para pesquisar a capital de um estado especifico \n Digite 6 para pesquisar de qual estado é a capital \n Digite -1 para sair\n`, numero => {
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
                        const { SiglaEstado, Qcidades, Capital } = coutry;
                        console.log(SiglaEstado + " quantidade de cidades: " + Qcidades + " Sua capital é " + Capital);

                    })

                    break;

                case "2":
                    quest2.sort(function (a, b) {
                        return b.Qcidades - a.Qcidades;
                    });
                    for (var i = 0; i < 5; i++) {
                        quest3.push(quest2[i])
                    }
                    console.log("  ");
                    console.log("Os 5 estados com mais cidades em ordem decrecente: ");
                    console.log("  ");
                    //imprime os valores da array quest3 dos 5 estados com mais cidades

                    quest3.forEach(coutry => {
                        const { SiglaEstado, Qcidades, Capital } = coutry
                        console.log(SiglaEstado + " quantidade de cidades: " + Qcidades + " Sua capital é " + Capital)
                    });

                    break;

                case "3":
                    console.log("  ");
                    cidadesEstados2.forEach(coutry => {
                        const { caracteres, Qcaracteres, Estado } = coutry
                        console.log("A cidade com maior nome do Estado " + Estado + " é " + caracteres.join("") + " com " + Qcaracteres + " caracteres.")
                    })

                    break;

                case "4":
                    console.log("  ");

                    cidadesEstados3.forEach(coutry => {
                        const { caracteres, Qcaracteres, Estado } = coutry
                        console.log("A cidade com menor nome do Estado " + Estado + " é " + caracteres.join("") + " com " + Qcaracteres + " caracteres.")
                    })

                    break;

                case "5":
                    face.question("Digite o Estado que gostaria de saber a capital ", estadoRequest => {
                        regioes.forEach(coutry => {
                            const { sigla, Estado, Capital } = coutry

                            if (Estado.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase() == estadoRequest.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase() || sigla.toUpperCase() == estadoRequest.toUpperCase()) {
                                console.log("A capital do Estado " + Estado + " é " + Capital);
                            }
                        })
                        console.log("  ");
                        quest(cidadesEstados2, cidadesEstados3, quest2, quest3, regioes)
                    })
                    break;
                    
                case "6":
                    face.question("Digite o Estado que gostaria de saber a capital ", capitalRequest => {
                        regioes.forEach(coutry => {
                            const { sigla, Estado, Capital } = coutry
                            if (Capital.replace(/[\u0300-\u036f]/g, "").toUpperCase() == capitalRequest.replace(/[\u0300-\u036f]/g, "").toUpperCase()) {
                                console.log("A capital " + Capital + " é a capital do Estado " + Estado);
                            }
                        })
                        console.log("  ");
                        quest(cidadesEstados2, cidadesEstados3, quest2, quest3, regioes)
                    })
                    break;
            }
            quest(cidadesEstados2, cidadesEstados3, quest2, quest3, regioes)
        }
        console.log;

    }
    )
}
export default { quest }