
import fs from "fs";

function CreateDiretorio(region) {
    try {
        //criar um arquivo json com o nome enviado a função e com o conteudo enviado a mesma;
        if (!fs.existsSync(`./States/${region}`)){
            //Efetua a criação do diretório
            fs.mkdirSync(`./States/${region}`)
        }
       
    } catch (err) {
        console.log(err);
    }
}
async function WriteJson(conteudo, nome, region) {
    try {
        //criar um arquivo json com o nome enviado a função e com o conteudo enviado a mesma;

        await fs.promises.writeFile(`./States/${region}/${nome}.json`, JSON.stringify(conteudo));
    } catch (err) {
        console.log(err);
    }
}

export default { WriteJson,CreateDiretorio }