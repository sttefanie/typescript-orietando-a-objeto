var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome,
            this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e minha idade \u00E9 ").concat(this.idade));
    };
    return Pessoa;
}());
var aluno = new Pessoa('Sttefanie', 30);
aluno.saudacao();
