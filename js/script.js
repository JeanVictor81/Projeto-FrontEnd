  
const menuCTA = document.querySelector('.navCTA');
const menuPesquisa = document.querySelector('.menuPesquisa');
const menuPrincipal = document.querySelector('.menuPrincipal');
const imgCarrossel = document.querySelector('.imagensCarrossel');
const btnCarrossel = document.querySelectorAll('.carrosselCheckBox input');
const productsButtonsList = document.querySelectorAll(".btnProduto");
const listProdutcs = document.querySelectorAll(".produto")
const buttons = menuPrincipal.querySelectorAll('button');
let rodadasCarrossel;


function irParaHome() {
  if(document.title == 'FLOWERS')
  {
    window.location.href = "index.html";
  }
  else
  {
    window.location.href = "../index.html"
  }
  
}
function irParaLogin() {
    if (document.title == 'FLOWERS') {
      window.location.href = "html/Login.html";
    }
    else
    {
      window.location.href = "../html/Login.html"
    }
    
}
function irParaCadastro() 
{
  if (document.title == 'FLOWERS') {
    window.location.href = "html/cadastro.html";
  }
  else
  {
    window.location.href = "../html/cadastro.html";
  }
  
}
function removerCTAMenu() {
  
  
  menuCTA.style.display = 'none';
  menuPesquisa.style.top = '0';

  menuPrincipal.classList.add('menuPrincipalPag')
  

  

}
function adicionarCTAMenu(){
  
  
  menuCTA.style.display = 'flex';
  menuPesquisa.style.top = '5vh';
  menuPrincipal.classList.remove('menuPrincipalPag') 
 

     

}
function manipularRolagem() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var limite = 500; 

  
    if (scrollTop > limite) {
      removerCTAMenu();
    } 
    else {
      adicionarCTAMenu();
    }
  

}
function animarProduto() {
  listProdutcs.forEach((element) => {
    element.addEventListener("mouseover",()=>{
  
      element.childNodes[7].style.display = 'flex';
      element.childNodes[7].classList.add("active");
    })
    element.addEventListener("mouseout",()=>{
          
         
      element.childNodes[7].classList.remove("active");
   
      
    })
  })
  
  productsButtonsList.forEach(element => {
        element.setAttribute("data-btnTrasition","btnBonito");
  });
  
}
function animarBtnMenu(){
  buttons.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
     buttons.forEach(otherButton => {
        if (otherButton.classList.contains('botoesMenuAtual')) 
        {
            otherButton.classList.remove('botoesMenuAtual');
            otherButton.classList.add('botoesMenu');
        }
        currentButton.classList.add('botoesMenuAtual');
        

     })
  })

})
}

function automatizarCarrossel(i) {
  rodadasCarrossel = setInterval(() => {
    if (i == btnCarrossel.length) {
      i = 0;
    }
    imgCarrossel.style.transform = `translateX(${-100 * i}%)`;
    i++;
  }, 3000);
}

function reiniciarAutomatizacao(i) {
  clearInterval(rodadasCarrossel);
  setTimeout(() => {
    automatizarCarrossel(i);
  }, 3000);
}

function navegarCarrossel() {
  for (let i = 0; i < btnCarrossel.length; i++) {
    btnCarrossel[i].addEventListener('click', () => {
      imgCarrossel.style.transform = `translateX(${-100 * i}%)`;
      clearInterval(rodadasCarrossel);
      setTimeout(reiniciarAutomatizacao(i),3000) 
    });
  }
}
navegarCarrossel();
automatizarCarrossel(0);
animarBtnMenu()
animarProduto();

window.addEventListener('scroll', manipularRolagem)






