const lista: {produto: string, lote: number, ano: number, qtd: number} = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
};

const etiqueta = (obj: {produto: string, lote: number, ano: number, qtd: number}) : string[] =>{
        let response: string[] = [];
        for(let i = 1; i<= obj.qtd; i++){
            response.push(`${obj.lote}-${obj.ano}-${i.toString().padStart(3, "0")}`);
        }

        return response;
}

console.log(etiqueta(lista));