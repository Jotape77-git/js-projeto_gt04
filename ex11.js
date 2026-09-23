const user = {
    nome: "João Pedro",
    idade: 18,
    cores: ["azul", "preto", "branco"],
    carro: {
        marca: "BMW",
        modelo: "X5",
        ano: 2025,
        cor: "preto",
        combustivel: ["Gasolina", "metanol", "eletrico"]
    }
}

console.log(user.nome)
console.log(user.carro.marca)
console.log(user.carro.modelo)
console.log(user.carro.combustivel[2])