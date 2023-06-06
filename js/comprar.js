const btnDescricaoComentarios = document.querySelectorAll('.menuComentariosDescricao button');
const descricao = document.querySelector('.descricao');
const comentarios = document.querySelector('.comentarios');
animarBtnMenu(btnDescricaoComentarios);

function exibirComentarios() {
    comentarios.style.display = 'flex';
    descricao.style.display = 'none';
}
function exibirDescricao() {
    comentarios.style.display = 'none';
    descricao.style.display = 'flex';
}