let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    saudacao: function() {
        if(!this.profissao) {
            console.log("Olá, meu nome é " + this.nome);
        } else {
            console.log("Olá, meu nome é " + this.nome + " e minha profissão é " + this.profissao);
        }
    },

    constructor: function(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

pessoa.saudacao(); // Olá, meu nome é João e minha profissão é Desenvolvedor

let novaPessoa = Object.create(pessoa);
novaPessoa.constructor("Maria", 25, "Designer");
novaPessoa.saudacao(); // Olá, meu nome é Maria e minha profissão é Designer    