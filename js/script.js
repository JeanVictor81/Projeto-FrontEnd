
document.addEventListener('DOMContentLoaded', function() {

  const menuCTA = document.querySelector('.navCTA');
  const menuPesquisa = document.querySelector('.menuPesquisa');
  const menuPrincipal = document.querySelector('.menuPrincipal');
  const imgCarrossel = document.querySelector('.imagensCarrossel');
  const btnCarrossel = document.querySelectorAll('.carrosselCheckBox input');
  const btnCarrosselLabel = document.querySelectorAll('.manual-btn')
  const productsButtonsList = document.querySelectorAll(".btnProduto");
  const listProdutcs = document.querySelectorAll(".produto")
  const buttons = menuPrincipal.querySelectorAll('button');
  const btnChabot = document.querySelector('.chatbotBtn');
  const btnChabotAtive = document.querySelector('.chatBtn');
  const chatbot = document.querySelector('.chatbot');
  const closeChatbotIcon = document.getElementById('closeChatMessage');
  const formulario = document.querySelector('.container form');
  const btnNovoFeedback = document.getElementById('btnNovoFeedback');
  const btnFecharFormulario = document.getElementById('closeForm');
  

  let buttonIndex = 0;
  let buttonLastIndex = 0;
  
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
          btnCarrosselLabel[buttonLastIndex].style.backgroundColor = 'transparent';
          btnCarrosselLabel[buttonIndex].style.backgroundColor = '#fff'
          buttonLastIndex = buttonIndex;
        })
    })
    setInterval(() => {
      
      if (buttonIndex == btnCarrossel.length) {
        buttonIndex = 0;  
      }
      btnCarrosselLabel[buttonLastIndex].style.backgroundColor = 'transparent';
      btnCarrosselLabel[buttonIndex].style.backgroundColor = '#fff'
      imgCarrossel.style.transform = `translateX(${-100 * buttonIndex}%)`;
      buttonLastIndex = buttonIndex;
      buttonIndex++;
      
    }, 3000);

  
    
  }

  function manipularFormulario() {
    
    btnNovoFeedback.addEventListener('click',() =>
    {
      formulario.style.visibility = 'visible';

    })
    btnFecharFormulario.addEventListener('click',() =>
    {
      formulario.style.visibility = 'hidden';

    })
  }
  navegarCarrossel();
  
  animarBtnMenu()
  animarProduto();
  acionarChatbot();
  desativarChatbot(btnChabotAtive);
  desativarChatbot(closeChatbotIcon);
  manipularFormulario();
  window.addEventListener('scroll', manipularRolagem)



});



