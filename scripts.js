let contacts = [
    { name: "Ricardo", number: "(16) 9155-7894" },
    { name: "Bento", number: "(16) 9155-7894" },
    { name: "Juliana", number: "(16) 9155-7894" },
    { name: "Regina", number: "(16) 9155-7894" },
    { name: "Rodrigo", number: "(16) 9155-7894" },
    { name: "Pedro", number: "(16) 9155-7894" },
]


let input = document.querySelector("input");
let p = document.querySelector("p");

function search() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado, Nome: ${contacts[i].name}, Tel: ${contacts[i].number}`
        break
        } else {
            p.innerHTML = "Esse nome não existe em nosso banco de dados."
        }
    }
}


