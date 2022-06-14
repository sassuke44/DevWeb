
import rl from "readline";
import s from "./FunctionSeparar.js"
import { promises as fs } from "fs";

ReadJson();

async function ReadJson() {

    try {

        const cidades = JSON.parse(await fs.readFile("./Files/Cidades.json"));
        const estados = JSON.parse(await fs.readFile("./Files/Estados.json"));
        const regioes = JSON.parse(await fs.readFile("./Files/Capitais.json"));
        s.Separar(cidades, estados,regioes)

    } catch (err) {

        console.log(err)

    }

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
                        const { SiglaEstado, Qcidades,Capital } = coutry;
                        console.log(SiglaEstado + " quantidade de cidades: " + Qcidades+" Sua capital é "+Capital);

                    })
                    console.log("  ");

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
                        const { SiglaEstado, Qcidades,Capital} = coutry
                        console.log(SiglaEstado + " quantidade de cidades: " + Qcidades + " Sua capital é "+Capital)
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
            quest(cidadesEstados2, cidadesEstados3, quest2, quest3)
        }
        console.log;

    }
    )
}
export default { quest }