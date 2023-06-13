const menuCTA = document.querySelector('.navCTA');
const menuPesquisa = document.querySelector('.menuPesquisa');
const menuPrincipal = document.querySelector('.menuPrincipal');
const buttons = menuPrincipal.querySelectorAll('button');
const header = document.querySelector('header');
const btnMenuMobile = document.querySelector('.btnMenuMobile')
let isActive = false;




 function removerCTAMenu() {
    
    
    menuCTA.style.display = 'none';
    menuPesquisa.style.top = '0';
    header.style.height = '25vh';
    menuPrincipal.classList.add('menuPrincipalPag')
    
  
    
  
  }
  function adicionarCTAMenu(){
    
    
    menuCTA.style.display = 'flex';
    menuPesquisa.style.top = '5vh';
    header.style.height = '26vh';
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
  function animarBtnMenu(buttons){
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
  function chamarMenuMobile(){
    
    btnMenuMobile.addEventListener('click',()=>
    {
      if (!isActive) {
        
        menuPrincipal.style.display = 'flex';
        isActive = !isActive;
      }
      else
      {
        menuPrincipal.style.display = 'none';
        isActive = !isActive;
      }


    })

  }

  if (window.innerWidth >= 1024) {
    window.addEventListener('scroll', manipularRolagem);
  }
  if (window.innerWidth <= 600) {
    chamarMenuMobile();
  }



  animarBtnMenu(buttons);
