function estrutura1(){
    var numeros = [];
    var x = 0;
    do{
    // 1- Criar uma função que receba como parâmetro um array de 10 números e retorne um array
    //contendo somente números positivos.   
    numeros.push(parseFloat(prompt("Indique um numero:")));
    x++
    }while(x < 10)
    numeros.forEach(numero => {
        if (numero >= 0) 
       document.write(numero + "<br>");
    });
    const max = Math.max(...numeros);
        document.writeln("O maior valor é " + max);
}
function estrutura2(){
    var numeros = [];
    var pares = [];
    var impares = [];
    var x = 0;
    do{
        //3- Criar função que receba como parâmetro um array de 10 números e retorne um array
        //contendo somente números pares e outro com os números ímpares..   
        numeros.push(parseFloat(prompt("Indique um numero:")));
        x++
        }while(x < 10)
    numeros.forEach(numero => {
        if(numero % 2 == 0){
            pares.push(numero);
        }else  if(numero % 2 != 0){
            impares.push(numero);
        }
    })
    document.write("Pares = ")
    pares.forEach((valor) => {
      document.write(valor+",");
    })
    document.write("<br> Impares = ")
    impares.forEach((valor) => {
        document.write(valor+",");
      })
      document.write("<br><a href='index.html'>return</a>")
}
function estrutura3(){
    var numeros = [];
    var x = 0;
    do{
        //4- Faça uma função que recebe um array de qualquer tamanho e ordene seus elementos na
        //  ordem crescente.  
        numeros.push(parseFloat(prompt("Indique um numero:(para parar indique -500)")));
        x++;
        }while(numeros[x-1] != -500)
    numeros.sort((a,b) => a -b);
    numeros.shift();
    document.write("Ordem Crescente.");
    numeros.forEach((valor) => {
    
        document.write(valor+",")
      })
      document.write("<br><a href='index.html'>return</a>");
}
function estrutura4(){
    //5- Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por
    //3 e 5 ao mesmo tempo, o script só finaliza quando o usuário digitar 0(zero), não pode
    //receber números negativos como entrada.
    var numeros = [];
    var conferencia = 0;
    var x = 0;
    do{
        conferencia = parseInt(prompt("Indique um numero:(para parar indique 0)"));
        if(conferencia >= 0){
            numeros.push(conferencia);
            x++;
        };
        
        }while(numeros[x -1] != 0);
        numeros.forEach(elemento => {
            if(elemento % 3 == 0 && elemento % 5 == 0){
               document.write(elemento + " e divisivel por 3 é pro 5 <br>");
                
            }else{
                document.write(elemento + " não e divisivel por 3 é pro 5 <br>");
            }
        })
        document.write("<br><a href='index.html'>return</a>");
}