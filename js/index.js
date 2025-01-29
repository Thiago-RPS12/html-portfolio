/*  
    O que precisamos fazer? - quando clicar no botão do personagem na lista, temos que , marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado

        passo 1 - pegar os botões no js pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele

    OBJETIVO 2 - quando clicar no botão do personagem mostrar a informação do personagem

        passo 1 - pegar os personagens no js pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exixta um personagem selecionado, se sim, devemos remover a seleção dele
*/

// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botão como selecionado

//passo 1 - pegar os botões no js pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');

//OBJETIVO 2 - quando clicar no botão do personagem mostrar a informação do personagem

//passo 1 - pegar os personagens no js pra poder mostrar ou esconder ele

const personagens = document.querySelectorAll (".personagem");


botoes.forEach((botao,indice) => {
    botao.addEventListener ("click", () => {

//passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        desselecionarBotao();
        desselecionarPersonagem();


//passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        botao.classList.add("selecionado");

//passo 3 - verificar se já exixta um personagem selecionado, se sim, devemos remover a seleção dele

//passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
    
        personagens [indice].classList.add ("selecinado");
    });
});
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem .selecionado");
    const personagemSelecionado, classlist, remove; ("selecionado");
}

function desselecionarBotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

