/**
 * Classe que representa a bagagem de um passageiro.
 * Ela guarda as informações da bagagem.
 */
class Bagagem {
    
    /**
     * O método construtor é chamado quando uma nova Bagagem chega ao aeroporto.
     * @param {string} peso - O peso da mala.
     * @param {string} ID - O documento de identificação único.
     * @param {string} dono - O dono da mala.
     */
    constructor(peso, ID, dono) {
        // Atributos de identificação
        this.peso = peso;
        this.ID = ID;
        this.dono = dono;
        
        // Atributo de estado: Toda bagagem começa sem uma verificação
        this.verificada = false; 
    }

    /**
     * Método responsável por simular a verificação de uma bagagem.
     * Ação: Muda o status da bagagem para verificada.
     */
    realizarCheckInSeguranca() {
        this.verificada = true;
        console.log(`Bagagem ${this.ID} passou pela pesagem e foi verificada.`);
    }

    /**
     * Método para atualizar os dados da bagagem caso haja erro de digitação.
     * @param {string} novoID - O ID corrigido.
     */
    corrigirpeso(novoID) {
        this.ID = novoID;
        console.log(`ID atualizado para: ${this.ID}`);
    }
}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default Bagagem;