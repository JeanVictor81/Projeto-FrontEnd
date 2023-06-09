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
function irParaMaisProcuradas()
{
  if (document.title == 'FLOWERS') {
    window.location.href = "html/maisProcuradas.html";
  }
  else
  {
    window.location.href = "../html/maisProcuradas.html";
  }
}
function irParaArranjos()
{
  if (document.title == 'FLOWERS') {
    window.location.href = "html/arranjos.html";
  }
  else
  {
    window.location.href = "../html/arranjos.html";
  }
}
function navigation(){

  buttons[0].addEventListener('click', irParaHome)
  buttons[1].addEventListener('click', irParaMaisProcuradas)
  buttons[2].addEventListener('click', irParaArranjos)
}
navigation();