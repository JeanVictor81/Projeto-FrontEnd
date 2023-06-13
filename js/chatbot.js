 const chatbot = document.querySelector('.chatbot');
 const btnChabot = document.querySelector('.chatbotBtn');
 const btnChabotAtive = document.querySelector('.chatBtn');
 const closeChatbotIcon = document.getElementById('closeChatMessage');


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

  acionarChatbot();
  desativarChatbot(btnChabotAtive);
  desativarChatbot(closeChatbotIcon);
 