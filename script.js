const nomeDoPersonagemA= document.getElementById("paragrafo-A");
const nomeDoPersonagemB= document.getElementById("paragrafo-B");
const nomeDoPersonagemC= document.getElementById("paragrafo-C");
const nomeDoPersonagemD= document.getElementById("paragrafo-D");

const imagemDoPersonagemA = document.querySelector('.foto-personagem-A');
const imagemDoPersonagemB = document.querySelector('.foto-personagem-B');
const imagemDoPersonagemC = document.querySelector('.foto-personagem-C');
const imagemDoPersonagemD = document.querySelector('.foto-personagem-D');


gerarValorAleatorio = () => {
 return Math.floor(Math.random () * (672 - 1)+1);

}

pegarPersonagem1 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemDoPersonagemA.src = data.image;
        imagemDoPersonagemA.alt = data.name;
        nomeDoPersonagemA.textContent = data.name;


    });
    

 }
 pegarPersonagem2 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemDoPersonagemB.src = data.image;
        imagemDoPersonagemB.alt = data.name;
        nomeDoPersonagemB.textContent = data.name;


    });
}
pegarPersonagem3 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemDoPersonagemC.src = data.image;
        imagemDoPersonagemC.alt = data.name;
        nomeDoPersonagemC.textContent = data.name;


    });
}

pegarPersonagem4 = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemDoPersonagemD.src = data.image;
        imagemDoPersonagemD.alt = data.name;
        nomeDoPersonagemD.textContent = data.name;


    });
}

atualizarPersonagens = () =>{
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
    pegarPersonagem4();
}
atualizarPersonagens();