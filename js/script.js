  
const menuCTA = document.querySelector('.navCTA');
const menuPesquisa = document.querySelector('.menuPesquisa');
const menuPrincipal = document.querySelector('.menuPrincipal');
const imgCarrossel = document.querySelector('.imagensCarrossel');
const btnCarrossel = document.querySelectorAll('.carrosselCheckBox input');
const productsButtonsList = document.querySelectorAll(".btnProduto");
const listProdutcs = document.querySelectorAll(".produto")
const buttons = menuPrincipal.querySelectorAll('button');
const btnChabot = document.querySelector('.chatbotBtn');
const btnChabotAtive = document.querySelector('.chatBtn');
const chatbot = document.querySelector('.chatbot');
const closeChatbotIcon = document.getElementById('closeChatMessage');
let buttonIndex = 0;


function acionarChatbot() {
  btnChabot.addEventListener('click', () => {
    btnChabot.style.visibility = 'hidden';
    chatbot.style.visibility = 'visible';


  })
}
function desativarChatbot(element) 
{
    element.addEventListener('click', () => {
      btnChabot.style.visibility = 'visible';
      chatbot.style.visibility = 'hidden';
    })
}
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





function navegarCarrossel() {


  btnCarrossel.forEach((buttonCarrossel, index) => {
      buttonCarrossel.addEventListener('click',() => {
        buttonIndex = index;
        imgCarrossel.style.transform = `translateX(${-100 * index}%)`;
        
      })
  })
  setInterval(() => {
    if (buttonIndex == btnCarrossel.length) {
      buttonIndex = 0;
    }
    imgCarrossel.style.transform = `translateX(${-100 * buttonIndex}%)`;
    buttonIndex++;
  }, 3000);
}
navegarCarrossel();

animarBtnMenu()
animarProduto();
acionarChatbot();
desativarChatbot(btnChabotAtive);
desativarChatbot(closeChatbotIcon);
window.addEventListener('scroll', manipularRolagem)






