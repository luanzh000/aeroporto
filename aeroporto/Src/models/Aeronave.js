/**
 * Classe que representa um avião dentro do aeroporto.
 * O principal método de viagens longas.
 */
class Aeronave {
    
    /**
     * O método construtor é chamado quando um novo avião chega ao aeroporto.
     * @param {string} Companhia - A companhia responsável pelo avião.
     * @param {string} Classe - A qualidade do voo ruim/bom/luxuoso.
     * @param {string} ID - O número de identificação do avião.
     */
    constructor(Companhia, Classe, ID) {
        // Atributos de identificação
        this.Companhia = Companhia;
        this.Classe = Classe;
        this.ID = ID;
        
        // Atributo de estado: Todo avião começa em repouso
        this.estaEmVoo = false; 
    }

    /**
     * Método responsável por simular o preparo de voo.
     * Ação: Muda o status do avião para representar se ele está em voo.
     */
    realizarVerificacaoVoo() {
        this.estaEmVoo = true;
        console.log(`Avião ${this.ID} está em voo.`);
    }

    /**
     * Método para verificar se o ID está correto.
     * @param {string} novoID - ID corrigido.
     */
    corrigirID(novoID) {
        this.ID = novoID;
        console.log(`ID corrigido: ${this.ID}`);
    }
}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default Aeronave;