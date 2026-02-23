
const objs = [
    {
        "nome": "Matheus",
        "idade": 18,
        "esta_trabalhando": true,
        "detalhes_profissao": {
            "profissao": "Programador",
            "empresa": "Empresa X"
        },
        "hobbies": ["Programar", "Jogar"]
    },

    {
        "nome": "Jorge",
        "idade": 17,
        "esta_trabalhando": false,
        "detalhes_profissao": {
            "profissao": null,
            "empresa": null
        },
        "hobbies": ["Programar", "Treinar", "Ver anime"]
    }  
]


// JSON
//Converter objeto para Json

const jsonData = JSON.stringify(objs)
console.log(jsonData)

//Converter Json para objeto

const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})