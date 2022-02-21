function atividade1(opinioes,idade){
//a média das idades das pessoas que responderam ótimo;
//a quantidade de pessoas que responderam regular;
//a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
var soma_otimo= 0;
var soma_regular= 0;
var soma_bom= 0;
var quantidade_otimo = 0;
var soma_invalida =0;

        for(var i = 0; i < idade.length; i++)
        {
            
            if(opinioes[i] == "3"){
                soma_otimo = soma_otimo + idade[i];
                quantidade_otimo++;
        
            }
            else if(opinioes[i] == "2")
            {
                soma_regular++;
            }
            else if (opinioes[i] == "1")
            {
                soma_bom ++;
            }
            else
            {
                soma_invalida++;
            }
        }
        var media=soma_otimo/quantidade_otimo;
        
        var msg="<div class='menu'>"+
        "a média das idades das pessoas que responderam ótimo= "+media+"<br>"+
        "a quantidade de pessoas que responderam regular= "+ soma_regular +"<br>"+
        "a porcentagem de pessoas que responderam bom entre todos os espectadores analisados= "+ soma_bom+"<br>"+
        "<br><a href='atividade.html'>Return</a>"+"</div>";
        return(msg)
    }
    function estrutura1(){
        const opinioes =[];
        const idade =[];
        var x=0;
        do{
        opinioes.push(prompt("Qual sua opinião sobre o filme(ótimo - 3, bom - 2, regular -1."));
        idade.push(parseFloat(prompt("Qual a sua idade:")));
        x++
        }while(x<10);
        let y =atividade1(opinioes,idade);
        document.write(y);
    }
function atividade2(valores){
//2- Faça um programa que receba 10 números, calcule e imprima a soma dos números pares e a
//multiplicação dos números ímpares.
const  impares =[];
const  pares= [];
var i = 0;
do
{
    
    if(valores[i]%2 != 0){
        
        impares[i] = valores[i];
        
    }
    else if(valores[i]%2 == 0)
    {
        
        pares[i]=valores[i];
        
    }
    
    i++;
}while(i < valores.length)
const reducer_pares = (accumulator, currentValue) => accumulator + currentValue;
const reducer_impares = (accumulator, currentValue) => accumulator * currentValue;
let msg ="<div class='menu'>"+"A soma dos valores pares é "+ pares.reduce(reducer_pares)  +
"<br> O produto dos valores impares é " +impares.reduce(reducer_impares,1)+
"<br><a href='atividade.html'>Return</a>"+"</div>";
console.log(impares)
return(msg)
}
    function estrutura2(){
        var valores=[];
        var x = 0;
        do{
           
            valores.push(parseFloat(prompt("Informe os numeros:")));
            x++
            }while(x<10);
            let y =atividade2(valores);
            document.write(y);
    }
function atividade3(nota1,nota2,nota3,nota4,recuperacao){
    var soma_notas = nota1+nota2+nota3+nota4+recuperacao;
    
    var msg="<div class='menu'>"+"A sua nota final foi: "+soma_notas+
    "<br><a href='atividade.html'>Return</a>"+"</div>";
    return(msg)
}
    function estrutura3(){
        var nota1 = parseFloat(prompt("Nota do 1° Bimestre:"))
        var nota2 = parseFloat(prompt("Nota do 2° Bimestre:"))
        var nota3 = parseFloat(prompt("Nota do 3° Bimestre:"))
        var nota4 = parseFloat(prompt("Nota do 4° Bimestre:"))
        var recuperacao = parseFloat(prompt("Nota da Recuperação:(caso não tenha enviar 0)"))
        let y =atividade3(nota1,nota2,nota3,nota4,recuperacao);
        document.write(y);
    }
function atividade4(salario_antes){
    var porcentagem = 0;
    if(salario_antes <= 1080){
        porcentagem = 0.20;
    }
    else if(salario_antes>1080 && salario_antes<1700){
        porcentagem = 0.15;
    }
    else if(salario_antes>1700 && salario_antes<2500){
        porcentagem = 0.10;
    }
    else{
        porcentagem =0.05;
    }
    var valor_aumento = porcentagem*salario_antes;
    var novo_salario = valor_aumento+salario_antes;
    var msg="<div class='menu'>"+"o salário antes do reajuste: "+ salario_antes+
    "<br>o percentual de aumento aplicado: "+ porcentagem +
    "<br>o valor do aumento: " +valor_aumento +
    "<br>o novo salário, após o aumento: "+novo_salario+
    "<br><a href='atividade.html'>Return</a>"+"</div>";
    return (msg);
}  
    function estrutura4(){
        var salario = parseFloat(prompt("Informe seu salario atual: "))
        let y =atividade4(salario);
        document.write(y);
    }
   
