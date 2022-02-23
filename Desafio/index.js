function quest1(){
    var numeros=[];
    var x=0;
    do{
        numeros.push(parseFloat(prompt("Indique um numero:(para parar indique -500)")));
        x++;
        }while(numeros[x-1] != -500)
        document.write("<table><tr><td>Indice</td><td>Valor</td><td>Histograma</td>")
        numeros.forEach(histograma);
        document.write("</table>")
}
function histograma(value,key){
    var histograma="";
    for(x=0;x <= value;x++)
    {
        if(value != -500){
        histograma=histograma +"*";
        }
    }
    if(value != -500){
    document.write("<tr><td>"+key+"</td>"+"<td>"+value+"</td>"+"<td>"+histograma+"</td></tr>")
    }
}
function quest2(){
    var notas=[];
    var x=0;
    do
    {  
        notas.push(parseFloat(prompt("Indique a nota: (para parar indique -500)")));
        x++;
    }while(notas[x-1] != -500)
        document.write("<table><tr><td>Aluno</td><td>Nota</td><td>Situação</td>")
        notas.forEach(resultado);
        document.write("</table>")
}
function resultado(value,key){
    var resultado="";
    for(x=0;x <= value;x++)
    {
        if(value != -500 && value  >= 0 && value <= 10) {
            if(value > 7)
            {
                resultado="Aprovado";
            }
            else
            {
                resultado="Reprovado"
            }
        }
    }
    if(value != -500 && value  >= 0 && value <= 10) {
    document.write("<tr><td>"+key+"</td>"+"<td>"+value+"</td>"+"<td>"+resultado+"</td></tr>")
    }
}