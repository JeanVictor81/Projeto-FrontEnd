
document.addEventListener('DOMContentLoaded', function() {

  
  
  const imgCarrossel = document.querySelector('.imagensCarrossel');
  const btnCarrossel = document.querySelectorAll('.carrosselCheckBox input');
  const btnCarrosselLabel = document.querySelectorAll('.manual-btn');
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
  
  acionarChatbot();
  desativarChatbot(btnChabotAtive);
  desativarChatbot(closeChatbotIcon);
  manipularFormulario();
  



});



