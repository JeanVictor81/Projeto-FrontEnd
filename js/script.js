
document.addEventListener('DOMContentLoaded', function() {

  const imgCarrossel = document.querySelector('.imagensCarrossel');
  const btnCarrossel = document.querySelectorAll('.carrosselCheckBox input');
  const btnCarrosselLabel = document.querySelectorAll('.manual-btn');
  const formulario = document.querySelector('.container form');
  const btnNovoFeedback = document.getElementById('btnNovoFeedback');
  const btnFecharFormulario = document.getElementById('closeForm');
  
  let buttonIndex = 0;
  let buttonLastIndex = 0;
 
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
  
  manipularFormulario();
  navegarCarrossel();
  



});



