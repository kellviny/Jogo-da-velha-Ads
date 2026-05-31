function estaTudoPreenchido(estado: string[][]): boolean {
    for (let linha of estado) {
        for (let elemento of linha) {
            if (elemento.trim() === '') return false;
        }
    }
    return true;
}

export function oQueAconteceu(estado: string[][]): 'x' | 'o' | 'velha' | 'continua' {
    for (let i = 0; i < 3; i++) {
        if (estado[i][0] !== ' ' && estado[i][0] === estado[i][1] && estado[i][1] === estado[i][2]) {
            return estado[i][0].toLowerCase() as 'x' | 'o';
        }
    }

    for (let i = 0; i < 3; i++) {
        if (estado[0][i] !== ' ' && estado[0][i] === estado[1][i] && estado[1][i] === estado[2][i]) {
            return estado[0][i].toLowerCase() as 'x' | 'o';
        }
    }

    if (estado[0][0] !== ' ' && estado[0][0] === estado[1][1] && estado[1][1] === estado[2][2]) {
        return estado[0][0].toLowerCase() as 'x' | 'o';
    }

    if (estado[0][2] !== ' ' && estado[0][2] === estado[1][1] && estado[1][1] === estado[2][0]) {
        return estado[0][2].toLowerCase() as 'x' | 'o';
    }

    if (estaTudoPreenchido(estado)) return 'velha';

    return 'continua';
}
