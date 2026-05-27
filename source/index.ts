let jogo: Array<Array<string>> = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// removi as duas variaveis do inicio e adicionei de forma literal, "linha" e "coluna", na função fazerJogada, para evitar confusões futuras
let jogadorAtual: string = 'X';

function jogoToString(estado: Array<Array<string>>): string {
    let representacaoGrafica: string = '';
    representacaoGrafica = estado[0][0] + '|' + estado[0][1] + '|' + estado[0][2] + '\n';
    representacaoGrafica = representacaoGrafica + '-----\n' + estado[1][0] + '|' + estado[1][1] + '|' + estado[1][2] + '\n';
    representacaoGrafica = representacaoGrafica + '-----\n' + estado[2][0] + '|' + estado[2][1] + '|' + estado[2][2];
    return representacaoGrafica;
}

function estaTudoPreenchido(estado: Array<Array<string>>): boolean {
    for (let linha of estado) {
        for (let elemento of linha) {
            if (elemento.trim() == '') return false;
        }
    }
    return true;
}

//verifica se o jogo terminou, e se sim, quem venceu ou se foi empate
function oQueAconteceu(estado: Array<Array<string>>): 'x' | 'o' | 'empate' | 'continua' {

    for (let i: number = 0; i < 3; i++) {
        if (estado[i][0] !== ' ' && estado[i][0] === estado[i][1] && estado[i][1] === estado[i][2]) {
            return estado[i][0].toLowerCase() as 'x' | 'o';
        }
    }

    for (let i: number = 0; i < 3; i++) {
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

    if (estaTudoPreenchido(estado)) return 'empate';

    return 'continua';
}

//alterna o jogador atual entre 'X' e 'O'
function alternarJogador(atual: string): string {
    if (atual === 'X') {
        return 'O';
    } else {
        return 'X';
    }
}

//realiza a jogada do jogador, verificando se a posição escolhida está vazia e atualizando o estado do jogo
function fazerJogada(estado: Array<Array<string>>, linha: number, coluna: number, jogador: string): boolean {
    if (estado[linha][coluna].trim() !== '') {
        return false;
    }
    estado[linha][coluna] = jogador;
    return true;
}

//reinicia o jogo, limpando o tabuleiro para a próxima partida
function reiniciarJogo(estado: Array<Array<string>>): void {
    for (let i: number = 0; i < 3; i++) {
        for (let j: number = 0; j < 3; j++) {
            estado[i][j] = ' ';
        }
    }
}

let jogarNovamente: boolean = true;

while (jogarNovamente) {

    reiniciarJogo(jogo);
    jogadorAtual = 'X';

    let resultado: 'x' | 'o' | 'empate' | 'continua' = 'continua';

    alert('Bem-vindo ao Jogo da Velha!\nPosições do tabuleiro:\n1|2|3\n-----\n4|5|6\n-----\n7|8|9');

    while (resultado === 'continua') {

        let entrada: string | null = prompt(
            'Tabuleiro atual:\n' + jogoToString(jogo) +
            '\n\nJogador ' + jogadorAtual + ', escolha uma posição (1-9):'
        );

        if (entrada === null || entrada.trim() === '') {
            alert('Entrada inválida. Tente novamente.');
            continue;
        }

        let posicao: number = parseInt(entrada);

        if (isNaN(posicao) || posicao < 1 || posicao > 9) {
            alert('Posição inválida. Digite um número de 1 a 9.');
            continue;
        }

        let linha: number = Math.floor((posicao - 1) / 3);
        let coluna: number = (posicao - 1) % 3;

        let jogadaValida: boolean = fazerJogada(jogo, linha, coluna, jogadorAtual);

        if (!jogadaValida) {
            alert('Posição já ocupada! Escolha outra.');
            continue;
        }

        resultado = oQueAconteceu(jogo);

        if (resultado === 'continua') {
            jogadorAtual = alternarJogador(jogadorAtual);
        }
    }

    let mensagemFinal: string = 'Tabuleiro final:\n' + jogoToString(jogo) + '\n\n';

    if (resultado === 'x') {
        mensagemFinal = mensagemFinal + 'Jogador X venceu!';
    } else if (resultado === 'o') {
        mensagemFinal = mensagemFinal + 'Jogador O venceu!';
    } else {
        mensagemFinal = mensagemFinal + 'Empate!';
    }

    alert(mensagemFinal);

    let resposta: string | null = prompt('Deseja jogar novamente? (s/n)');

    if (resposta === null || resposta.toLowerCase() !== 's') {
        jogarNovamente = false;
    }
}

alert('Obrigado por jogar!');