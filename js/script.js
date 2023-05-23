const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    items[currentItem].classList.add("current-item");
  });
});
  
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

const listProdutcs = document.querySelectorAll(".produto")
listProdutcs.forEach((element) => {
  element.addEventListener("mouseover",()=>{

    element.childNodes[7].style.display = 'flex';
    element.childNodes[7].classList.add("active");
  })
  element.addEventListener("mouseout",()=>{
        
       
    element.childNodes[7].classList.remove("active");
 
    
  })
})
const productsButtonsList = document.querySelectorAll(".btnProduto");
productsButtonsList.forEach(element => {
      element.setAttribute("data-btnTrasition","btnBonito");
});


