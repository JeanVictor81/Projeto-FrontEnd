const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
  
function irParaHome() {
  window.location.href = "index.html";
}
var btnHome = document.getElementById("homePage");
btnHome.addEventListener("click",irParaHome);

function irParaLogin() {
  window.location.href = "html/Login.html";
}
var btnLogin = document.getElementById("Entrar");
btnLogin.addEventListener('click',irParaLogin);

function irParaCadastro() 
{ 
  window.location.href = "html/cadastro.html";
}
btnCadastrar = document.getElementById("btnCadastro");
btnCadastrar.addEventListener('click', irParaCadastro);