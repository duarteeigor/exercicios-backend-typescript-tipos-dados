const palavra: string = "Programador";

//primeira forma de fazer utilizando for of
// const soletrar = (palavra: string) :string =>{
//     let resultado: string = "" // essa variavel resultado vai armazenar cada elemento percorrido pelo for
//     for (const char of palavra) {
//             resultado += char //resultado vai armazenar cada letrinha, começando desde a primeira(NAO E NECESSARIO POIS O FOR OF JA PERCORRE CADA INDEX DE FORMA AUTOMATICA)
//             resultado += "-" //apos armazenar uma letra, vai concatenar com o hifen
//     }
    
//     return resultado.slice(0, -1) //APOS PERCORRER TODA PALAVRA, VAI COMEÇAR DA PRIMEIRA LETRA ATE A ULTTIMA QUE FOI DIGITADA E IRA EXLUIR ELA;
// }

const soletrar =(text: string):string=>{
    return text.split("").join("-") //Utiliza o split para "quebrar" a string e faz com que vire um array de cada letra. Apos isso, usa o join, transformando em string novamente porem adicionando o hifen apos cada letra
    
}

console.log(soletrar(palavra));