function estrutura1()
{
 var packs = [];
 
 for(var x=1;x<=5;x++)
 {
     packs.push(parseFloat(prompt("Informe a quantidades de packs do "+x+"° dia.")))
 }
 packs.forEach(calculoBebidas);
 document.write(calculo_total(packs.reduce((total, currentElement) => total + currentElement)))
 document.write("<a href='atividade.html'>Return</a>")
}
function calculoBebidas(value,indice)
{
 
    var ml = ((value*12)*350)/1000;
    var valor = (value *38);
    var f =valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
document.write("A quantidade de cervejas tomadas no " + (indice +1)+" foi de "+ml+" litros, e o valor gasto foi "+ f +". <br>")

}
function calculo_total(value)
{
   
    var ml = ((value*12)*350)/1000;
    var valor = (value *38);
    var f =valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    return("A quantidade de cervejas tomadas no total foi de "+ml+" litros, e o valor gasto foi "+ f +". <br>")

}
//exercicio 2
function retornaIndiceMaiorValor(nota_final) {
    let maior = nota_final[0];
    let indice = 0;
    for (let i = 1; i < nota_final.length; i++) {
        if (nota_final[i] > maior) {
            maior = nota_final[i];
            indice = i;
        }
    }
    return indice;
}

function estrutura2()
{   
    var nota =0;
    var notas = [];
    var nota_final=[];
    var nome ="";
    var nomes = []
        
    for(var x =0;x<=6;x++)
    {   if(x < 5)
        {
        nota= parseFloat(prompt("Informe as notas do aluno."));
        if(nota >= 5 && nota <= 10)//validação das notas
        {
        notas.push(nota);//adição da nota caso seja valida
        }
        else
        {
            alert("informe um valor valido!!");//caso seja invalida avisa o usuario
            x--;
        }
    }
        if(x == 6)
        {
            notas.sort((a,b) => a -b);//ordena em ordem crescente 
            notas.pop();//remove o maior
            notas.shift();//remove o menor
            var reducer_notas= (accumulator, currentValue) => accumulator + currentValue; 
            var final =notas.reduce(reducer_notas);//soma das notas
            nota_final.push(final);//array de todas as notas finais
            
            nome =prompt("Informe o nome do aluno.");//nome do aluno
            document.write("a nota final é "+ final +" do aluno " + nome + "<br>");//resultado
            notas.splice(0, notas.length)//limpando o array de notas
            nomes.push(nome);
            var continuar = prompt("deseja adicionar um novo aluno?(sim ou não)" )// confirmar a adição de outro aluno
            if(continuar =="sim")
            {
                x=-1;
            
                nome ="";
            }
        }
    }
    document.write("A maior nota foi "+nota_final[retornaIndiceMaiorValor(nota_final)] + " do aluno "+nomes[retornaIndiceMaiorValor(nota_final)])
    document.write("<br><a href='atividade.html'>Return</a>");
}




