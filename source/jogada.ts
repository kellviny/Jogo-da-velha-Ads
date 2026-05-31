export function fazerJogada(estado: string[][], linha: number, coluna: number, jogador: string): boolean {
    if (estado[linha][coluna].trim() !== '') {
        return false;
    }
    estado[linha][coluna] = jogador;
    return true;
}
