
import { promises as fs } from "fs";
async function WriteJson(conteudo, nome) {
    try {
        //criar um arquivo json com o nome enviado a função e com o conteudo enviado a mesma;
        await fs.writeFile(`./States/${nome}.json`, JSON.stringify(conteudo));
    } catch (err) {
        console.log(err);
    }
}

export default { WriteJson }