const numeros: number[] = [1, 5, 2];

//UTILIZANDO DOIS FORS (i e j)

/*const tabuada = (arr : number[]): string =>{
    let resultado: string = ""

    for(let i = 0; i<arr.length; i++){ //percorre o arrray
      for(let j = 1; j<=10; j++){ //faz a tabuada ate 10
        const multiplicacao = arr[i] * j;
         resultado = resultado.concat( `${arr[i]} x ${j} = ${multiplicacao}\n`); //acumula o resultado na string: OBS: o concat tbm pode ser escrito resultado += e o texto
      }
      resultado+= "-------------------------\n" //espaço entre a tabuada de cada numero
    }
    return resultado //retorna todos os resultados no final
}
    */

//UTILIZANDO UM FOR of E UM FOR(i)

const tabuada = (arr: number[]): string =>{
    let resultado: string = ""
    for (const num of arr) { //note que esse num recebera o valor de cada valor do array
        for(let j = 0; j<=10; j++){
            const multiplicacao = num * j;
            resultado += `${num} x ${j} = ${multiplicacao}\n`
        }
        resultado+= `---------------------- \n`
    }
    return resultado
}


console.log(tabuada(numeros));