import { promises as fs } from "fs";
import write from "./CreateJson.js";
import q from "./ReadJson.js"

async function Separar(cidades, estados, regioes) {

    //declaração de arrays
    var uf = [];
    var nomeCidades = []
    var quest2 = [];
    var quest3 = [];
    var cidadesEstados = [];
    var cidadesEstados2 = [];
    var cidadesEstados3 = [];

    estados.forEach(coutry => {

        const { ID, Sigla } = coutry;
        //filtra todas as cidades por cada ID de estado
        var newcidades = cidades.filter(item => item.Estado == ID);
        regioes.forEach(coutry => {

            const { Regiao, sigla } = coutry;
            write.CreateDiretorio(Regiao)
            if (sigla == Sigla) {
                write.WriteJson(newcidades, Sigla, Regiao);
            }
        })
        //inseri dentro da string UF as siglas dos Estados
        uf.push(Sigla);

    });

    for (let i = 0; i < estados.length; i++) {
        regioes.forEach(async(coutry) => {

            const { Regiao, sigla,Capital } = coutry;
            if (sigla == uf[i]) {
            const data = JSON.parse( await fs.readFile(`./States/${Regiao}/${uf[i]}.json`));
            let infoEstados = new Object();
            infoEstados.SiglaEstado = uf[i];
            infoEstados.Qcidades = data.length;
            infoEstados.Capital =Capital;
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
    }
        )}
    



   
    // for (var i = 0; i < 5; i++) {
    //     quest3.push(quest2)
    // }


    q.quest(cidadesEstados2, cidadesEstados3, quest2, quest3)
}
export default { Separar }