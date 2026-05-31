export function reiniciarJogo(estado: string[][]): void {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            estado[i][j] = ' ';
        }
    }
}