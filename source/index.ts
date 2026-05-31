import { reiniciarJogo } from './tabuleiro';
import { alternarJogador } from './jogadores';
import { fazerJogada } from './jogada';
import { oQueAconteceu } from './verificacao';

let jogo: string[][] = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let jogadorAtual: string = 'X';
let jogoAtivo: boolean = true;

const statusTexto = document.getElementById('status') as HTMLElement;
const mensagemTexto = document.getElementById('mensagem') as HTMLElement;
const botaoReiniciar = document.getElementById('reiniciar') as HTMLButtonElement;
const celulas = Array.from(document.querySelectorAll('.celula')) as HTMLButtonElement[];

function atualizarTabuleiro(): void {
    celulas.forEach((celula, index) => {
        const linha = Math.floor(index / 3);
        const coluna = index % 3;
        celula.textContent = jogo[linha][coluna].trim();
        celula.dataset.jogador = jogo[linha][coluna].trim();
    });
}

function desabilitarCelulas(): void {
    for (let celula of celulas) {
        celula.disabled = true;
    }
}

function habilitarCelulas(): void {
    for (let celula of celulas) {
        celula.disabled = false;
    }
}

celulas.forEach((celula, index) => {
    celula.addEventListener('click', () => {
        if (!jogoAtivo) return;

        const linha = Math.floor(index / 3);
        const coluna = index % 3;

        const jogadaValida = fazerJogada(jogo, linha, coluna, jogadorAtual);
        if (!jogadaValida) return;

        atualizarTabuleiro();

        const resultado = oQueAconteceu(jogo);

        switch (resultado) {
            case 'x':
                mensagemTexto.textContent = 'X venceu!';
                statusTexto.textContent = '';
                jogoAtivo = false;
                desabilitarCelulas();
                break;
            case 'o':
                mensagemTexto.textContent = 'O venceu!';
                statusTexto.textContent = '';
                jogoAtivo = false;
                desabilitarCelulas();
                break;
            case 'velha':
                mensagemTexto.textContent = 'Deu Velha';
                statusTexto.textContent = '';
                jogoAtivo = false;
                desabilitarCelulas();
                break;
            case 'continua':
                jogadorAtual = alternarJogador(jogadorAtual);
                statusTexto.textContent = `Vez de ${jogadorAtual}`;
                break;
        }
    });
});

botaoReiniciar.addEventListener('click', () => {
    reiniciarJogo(jogo);
    jogadorAtual = 'X';
    jogoAtivo = true;
    mensagemTexto.textContent = '';
    statusTexto.textContent = `Vez de ${jogadorAtual}`;
    atualizarTabuleiro();
    habilitarCelulas();
});

statusTexto.textContent = `Vez de ${jogadorAtual}`;