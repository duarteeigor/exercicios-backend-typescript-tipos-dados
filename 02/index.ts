const usuarios2: {nome: string, idade: number, status: boolean}[]= [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

//utilizando filter e startswith

/*const filtrarUsuarios = (arr: {nome: string, idade: number, status: boolean}[], user: string) : {nome: string, idade: number, status: boolean}[] =>{
    const resultado = arr.filter(usuario =>
        usuario.nome.toLowerCase().startsWith(user.toLowerCase())
    );
    return resultado;
}*/

// utilizando includes e dando push dentro de uma variavels (forma 1)

/*const filtrarUsuarios = (arr: {nome: string, idade: number, status: boolean}[], user: string): {nome: string, idade: number, status: boolean }[] =>{
    let resultado: {nome: string, idade: number, status: boolean}[] = []
    for(const usuario of arr){
        if(usuario.nome.toLowerCase().includes(user.toLowerCase())){
            resultado.push(usuario);
        } 
      }
      return resultado;
}*/

// utilizando filter e includes sem usar o push (forma 2);

const filtrarUsuarios = (arr: {nome: string, idade: number, status: boolean}[], user: string) : {nome: string, idade: number, status: boolean}[] =>{
    const resultado = arr.filter((usuario) =>{
        return usuario.nome.toLowerCase().includes(user.toLowerCase());
    })
    return resultado
}

console.log(filtrarUsuarios(usuarios2,"gui"));