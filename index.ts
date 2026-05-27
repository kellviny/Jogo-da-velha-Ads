// Desenvolva uma função chamada `formatarUsuarios` que recebe um array de nomes de usuários e retorna um array de strings onde cada nome está precedido por "@".
const formatarUsuarios = (nomes:Array<string>):Array<string> => {
    let usrsFormatado : Array<string> = [];
    for (let nome of nomes){
        usrsFormatado.push(`@${nome}`)
    }
    return usrsFormatado
}
alert(formatarUsuarios(['joa', 'kelly', 'tonhos', 'tonha', 'aqueles', 'lá']));
// Crie uma função chamada `removerDuplicados` que recebe um array de números e retorna um novo array apenas com valores únicos (sem repetições).
const removerDuplicados = (numeros:Array<number>):Array<number> => {
    let arrayUnicos : Array<number> = [];
    for (let el of numeros){
        if (el == numeros.length){

        }
    }
    return []
}