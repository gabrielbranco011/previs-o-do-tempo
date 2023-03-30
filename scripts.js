

const key = "b743f91feef37e9ec5eb7d5c41dc9fd8"


async function BuscarCidade(cidade) {

const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`).then( resposta => resposta.json())

    console.log(dados)
}

function cliqueiNoBotao() {
   const cidade = document.querySelector(".input-cidade").value

   BuscarCidade(cidade)
}