const productsButtonsList = document.querySelectorAll(".btnProduto");
const listProdutcs = document.querySelectorAll(".produto")


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

animarProduto();