// CLASSE COM ENCAPSULAMENTO
class VooSeguro {
    #codigo;
    #combustivel;

    constructor(codigoPassado) {
        this.#codigo = codigoPassado;
        this.#combustivel = 100;
    }

    // GETTER: Janelinha segura para ler o valor formatado
    get lerCombustivel() {
        return `Combustível: ${this.#combustivel}%`;
    }

    // SETTER: Porta segura para alterar o combustível (Regras de abastecimento)
    set abastecer(quantidade) {
        if (this.#combustivel + quantidade > 100) {
            alert("Limite atingido! O tanque não pode passar de 100%.");
        } else {
            this.#combustivel += quantidade;
        }
    }

    // DESAFIO: Método seguro para gastar combustível
    gastarCombustivel(quantidade) {
        if (this.#combustivel - quantidade < 0) {
            alert("ALERTA: Combustível insuficiente para esta manobra!");
        } else {
            this.#combustivel -= quantidade;
        }
    }

    get codigo() {
        return this.#codigo;
    }
}

// INICIALIZANDO O VOO
const meuVoo = new VooSeguro("VIP-001");

// CAPTURANDO ELEMENTOS DO DOM
const displayCombustivel = document.getElementById("painelCombustivel");
const displayCodigo = document.getElementById("codigoVooDisplay");
const btnAbastecer = document.getElementById("btnAbastecerSeguro");
const btnGastar = document.getElementById("btnGastar");

// Exibindo dados iniciais
displayCodigo.innerText = `Voo: ${meuVoo.codigo}`;
displayCombustivel.innerText = meuVoo.lerCombustivel;

// LÓGICA DO BOTÃO ABASTECER
btnAbastecer.onclick = function() {
    meuVoo.abastecer = 10; // Usando o Setter
    displayCombustivel.innerText = meuVoo.lerCombustivel; // Atualizando a tela via Getter
};

// LÓGICA DO BOTÃO GASTAR (DESAFIO)
btnGastar.onclick = function() {
    meuVoo.gastarCombustivel(15); // Método seguro
    displayCombustivel.innerText = meuVoo.lerCombustivel; // Atualizando a tela via Getter
};