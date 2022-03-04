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
function estrutura2()
{   
    var nota =0;
    var notas = [];
    var reducer_notas= (accumulator, currentValue) => accumulator + currentValue;
    for(var x =0;x<5;x++)
    {
        nota= parseFloat(prompt("Informe as notas do aluno."))
        if(nota >= 5 && nota <= 10)
        {
        notas.push(nota)
        }
        else
        {
            alert("informe um valor valido!!")
            x--;
        }
    }
    notas.sort((a,b) => a -b);
    notas.pop();
    notas.shift();

    document.write("a nota final é "+notas.reduce(reducer_notas))
    document.write("<br><a href='atividade.html'>Return</a>")
}
