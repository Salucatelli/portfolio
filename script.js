let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
let m4 = document.getElementById("m4");

navBarMenu = [m1, m2, m3, m4];

function mouseFora() {
    this.style.backgroundColor = "";
}

function mouseEnter() {

    this.style.backgroundColor = "#414141";
}


for (let i in navBarMenu) {
    navBarMenu[i].addEventListener("mouseenter", mouseEnter);
    navBarMenu[i].addEventListener("mouseout", mouseFora);
}






//animação nome

const frase = document.querySelector("#nomeAnimado");

frase.innerHTML = "";

setTimeout(() => {

    function nada() {
    }

    frase.innerHTML = "Samuel Lucatelli."

    function escrever(elemento) {
        const textoArray = elemento.innerHTML.split("");

        elemento.innerHTML = "";

        textoArray.forEach((letra, i) => {
            if (i == 0) {
                setTimeout(nada, 1000)
            }
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 150 * i)
        })
    }

    escrever(frase)
}, 500)




//Mouse em cima dos projetos


let proj1 = document.querySelector(".proj1");
let proj2 = document.querySelector(".proj2");
let proj3 = document.querySelector(".proj3");

let info = document.getElementById("infoProjs");

proj1.addEventListener("mouseenter", () => {

    info.innerHTML = '<strong>JOGO-DA-MEMÓRIA:</strong> Este projeto consiste em um Jogo da Memória criado com HTML, CSS e Javascript, desenvolvido no Curso de desenvolvimento Web do Programador-BR. Este link leva para o projeto em si. Caso tenha interesse no repositório, clique em Repositório, logo abaixo da imagem, para ter acesso a todo o código do projeto.';


})

proj1.addEventListener("mouseout", () => {

    info.innerHTML = "Passe o Mouse em cima dos projetos e veja mais...";

})

proj2.addEventListener("mouseenter", () => {

    info.innerHTML = '<strong>TO-DO-LIST (Lista de tarefas):</strong> Projeto criado utilizando HTML, CSS e JavaScript no FrontEnd, e NodeJs, Express, EJS e banco de dados MongoDB no BackEnd. Projeto com sistema CRUD Completo, com funcionalidades de adicionar, editar, marcar como concluida e detetar tarefas. Este link leva para o projeto em si. Caso tenha interesse no repositório, clique em Repositório, logo abaixo da imagem, para ter acesso a todo o código do projeto.';


})

proj2.addEventListener("mouseout", () => {

    info.innerHTML = "Passe o Mouse em cima dos projetos e veja mais...";

})

proj3.addEventListener("mouseenter", () => {

    info.innerHTML = 'Em Breve...';


})

proj3.addEventListener("mouseout", () => {

    info.innerHTML = "Passe o Mouse em cima dos projetos e veja mais...";

})

















