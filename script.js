// let pessoa = prompt("Qual é o seu nome?"). toUpperCase()

// let cor = prompt("Qual é sua cor favorita?")

// let citacao = prompt("Qual é a sua citação favorita ?")


// let fraseConcatenacao = "A cor favorita de" + pessoa + " é " + cor + ". \"" + citacao + "\"" 


// let fraseTemplateString = 'A cor favorita de ${pessoa} é ${cor}. "${citacao}"'

// console.log("Concatenação:  ", fraseConcatenacao)
// console.log("Template string:", fraseTemplateString)

// let fraseQuebraLinha = "Nome: " + pessoa + "\nCor favorita: " + cor

// let fraseQuebraLinhaTemplateString = 'Nome: ${pessoa} \nCor favorita: ${cor}' 

// console.log(fraseQuebraLinhaTemplateString)
// console.log("marcos marvila".length)

// console.log(pessoa.length)

// console.log(pessoa.includes("A"));

// let frase = 'Oi eu o "Marcos"'

// let email = prompt("Digite seu email")

// console.log(email.trim().toLowerCase())

let nome = prompt("Qual seu nome ?")
let email =  prompt("Qual seu eMail?") 

const frase = 'O email ${email} foi cadastrado com sucesso. Seja bem vindo ${nome}'.toUpperCase()

const novafrase = frase.replaceAll("R", "X");

console.log(novafrase)

console.log(nome.length)

console.log(email.includes("@"))
