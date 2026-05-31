export function alternarJogador(atual: string): string {
    switch (atual) {
        case 'X': return 'O';
        case 'O': return 'X';
        default:  return 'X';
    }
}
