// 1. CRIANDO A "FÔRMA" (CLASSE)
class Voo {
    // O constructor é chamado na hora que o avião "nasce" (é criado)
    constructor(codigo, origem, destino) {
        this.codigo = codigo;       // 'this' significa 'deste avião'
        this.origem = origem;
        this.destino = destino;
        this.status = "No solo";    // Todo voo começa no chão
        this.altitude = 0;          // Novo atributo: começa em 0 metros
    }

    // 2. MÉTODO PARA ATUALIZAR A TELA (DOM)
    // Esse método pega os dados do avião (this) e joga no HTML
    atualizarTela() {
        document.getElementById("txt-codigo").innerText = this.codigo;
        document.getElementById("txt-origem").innerText = this.origem;
        document.getElementById("txt-destino").innerText = this.destino;
        document.getElementById("txt-altitude").innerText = this.altitude;
        
        // Atualizando o texto e a cor do status (Desafio Extra)
        let spanStatus = document.getElementById("txt-status");
        spanStatus.innerText = this.status;

        let imagemAviao = document.getElementById("img-aviao");

        if (this.status === "Em Voo") {
            spanStatus.className = "em-voo"; // Fica verde
            imagemAviao.classList.add("animacao-voando"); // Avião sobe!
        } else {
            spanStatus.className = "no-solo"; // Fica vermelho
            imagemAviao.classList.remove("animacao-voando"); // Avião desce!
        }
    }

    // 3. MÉTODOS DE AÇÃO DO AVIÃO
    decolar() {
        this.status = "Em Voo";
        this.altitude = 500;
        console.log(`Voo ${this.codigo} decolou com sucesso!`); // Exibe no F12
        this.atualizarTela(); // Sempre manda atualizar a tela depois de mudar algo
    }

    pousar() {
        this.status = "No solo";
        this.altitude = 0;
        console.log(`Voo ${this.codigo} pousou com segurança.`);
        this.atualizarTela();
    }

    // Método novo solicitado na atividade
    atualizarStatus(novaAltitude) {
        if (this.status === "Em Voo") {
            this.altitude += novaAltitude; // Soma a altitude atual com a nova
            console.log(`O voo subiu para ${this.altitude} metros.`);
            this.atualizarTela();
        } else {
            alert("O avião precisa decolar primeiro para ganhar altitude!");
        }
    }
}

// 4. CRIANDO O OBJETO REAL E LIGANDO OS BOTÕES
// Criamos nosso avião usando a classe Voo
const meuVoo = new Voo("JS-2024", "São Paulo", "Tóquio");

// Logo de cara, mandamos mostrar as informações dele na tela
meuVoo.atualizarTela();

// Capturando os botões do HTML
const btnDecolar = document.getElementById("btn-decolar");
const btnPousar = document.getElementById("btn-pousar");
const btnSubir = document.getElementById("btn-subir");

// Dando vida aos botões: quando clicar, chama os métodos do nosso objeto 'meuVoo'
btnDecolar.addEventListener("click", function() {
    meuVoo.decolar();
});

btnPousar.addEventListener("click", function() {
    meuVoo.pousar();
});

btnSubir.addEventListener("click", function() {
    // Aumenta a altitude em 1000 metros cada vez que clica
    meuVoo.atualizarStatus(1000); 
});