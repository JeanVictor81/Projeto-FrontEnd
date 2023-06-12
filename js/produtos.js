const productsButtonsList = document.querySelectorAll(".btnProduto");
const listProdutcs = document.querySelectorAll(".produto");
const btnComprarProduto = document.querySelectorAll(".btnProdutoComprar");
const btnSacolaProduto = document.querySelectorAll(".btnProdutoSacola");
const listProdutoSemBtn = [];

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
function adcionarSacola(){

  btnSacolaProduto.forEach(element => {
    element.addEventListener('click', () => {
      
      alert('item Adcionado sacola');



    })
  })
  
}
function definirProfutosSemBTN() {
  
  listProdutcs.forEach(function(produto) {
    const filhos = produto.querySelectorAll(":not(:nth-last-child(-n+2))");
    filhos.forEach(function(filho) {
      listProdutoSemBtn.push(filho);
    });
  });
}

definirProfutosSemBTN()
adcionarSacola()
animarProduto();