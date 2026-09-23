const user = {
    nome: "João Pedro",
    email: "jotape@gmail.com",
    senha: "12345678"
}

const email = "jotape@gmail.com"
const senha = "1234567"


if (email !== user.email || senha!== user.senha){
    console.log("Senha ou e-mail incorreto")
    return
}

console.log(`Bem vindo ${user.nome}!`)