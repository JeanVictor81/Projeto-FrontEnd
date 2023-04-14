const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItens = itens.length;

controls.forEach((control)=>{
    control.addEventListener('click',() => {
        const isLeft = control.classList.contains("arrow-left");

        if(isLeft){
            currentItem -=1;
        }
        else{
            currentItem +=1; 
        }

        if(currentItem>= maxItens){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItens - 1;
        }
        console.log(isLeft);

        items.forEach(item => item.classList.remove("currentItem"));

        items[currentItem].scrollIntoView({
            inline:"center",
            behavior: "smooth"
        })
    })
})