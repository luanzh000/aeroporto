// Voo.js
class Voo {
    constructor(codigo, origem, destino) {
        // Validação de Dados: Se a origem for igual ao destino, lançamos uma "bomba" (erro)
        if (origem.toLowerCase() === destino.toLowerCase()) {
            throw new Error(`Operação Negada: O voo ${codigo} não pode decolar e pousar no mesmo local (${origem}).`);
        }

        // Validação de código vazio
        if (!codigo || codigo.trim() === "") {
            throw new Error("Erro de Segurança: Todo voo precisa de um código identificador.");
        }

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
    }
}

// "Liberando a saída" da classe para ser usada no painel.js
export default Voo;