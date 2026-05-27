let jogo: string[][] = [['  ', '  ', '  '], ['  ', '  ', '  '], ['  ', '  ', '  ']];
jogo[1][2] = '0';
jogo[0][1] = 'X';

function jogoToString(estado: string[][]): string {
    let representacaoGrafica: string = '';

    representacaoGrafica = estado[0][0] + '|' + estado[0][1] + '|' + estado[0][2] + '\n';
    representacaoGrafica += estado[1][0] + '|' + estado[1][1] + '|' + estado[1][2] + '\n';
    representacaoGrafica += estado[2][0] + '|' + estado[2][1] + '|' + estado[2][2] + '\n';

    return representacaoGrafica

}

function estaTudoPreenchido(estado: string[][]): boolean {
    for (let linha of estado) {
        for (let elemento of linha) {
            if (elemento.trim() == '') return false
        }
    }
    return true;
}

alert(estaTudoPreenchido(jogo));