const darklight = document.getElementById('darkLigthMode');
const rootStyles = getComputedStyle(document.documentElement);
const corRoot = rootStyles.getPropertyValue('--verde-escuro');
const body = document.body;

let temaSalvo = localStorage.getItem('tema');

window.onload = function () 
{
    mudarTema();
}



function mudarTema()
{      
       
        if (temaSalvo == 'dark') {
           
            menuPesquisa.classList.add('menuPesquisaDark');
            menuPesquisa.childNodes[1].classList.add('logoDark')
            menuPesquisa.childNodes[5].classList.add('loginSacolaDark')
            menuPesquisa.childNodes[5].childNodes[3].classList.add('entrarCasatrarDark')
            menuPrincipal.classList.add('menuPrincipalDark')
            body.style.backgroundColor = ' var(--darkColor1)'
            document.documentElement.style.setProperty('--verde-escuro','#ffff')
            if (document.title == 'FLOWERS')
            {
              
              darklight.setAttribute("src",'img/lua.png')
              btnMenuMobile.setAttribute("src",'img/3traçosBranco.png') 
              btnFiltro.setAttribute("src",'img/filtroBranco.png') 
            }
            else
            {   
                darklight.setAttribute("src",'../img/lua.png')
                btnMenuMobile.setAttribute("src",'../img/3traçosBranco.png')  
                btnFiltro.setAttribute("src",'../img/filtroBranco.png') 
            }
            
            localStorage.setItem('tema', 'dark')
        }
        else
        {   
            
            menuPesquisa.classList.remove('menuPesquisaDark');
            menuPesquisa.childNodes[1].classList.remove('logoDark')
            menuPesquisa.childNodes[5].classList.remove('loginSacolaDark')
            menuPesquisa.childNodes[5].childNodes[3].classList.remove('entrarCasatrarDark')
            menuPrincipal.classList.remove('menuPrincipalDark')
            body.style.backgroundColor = ' var(--cor-fundo)'
            document.documentElement.style.setProperty('--verde-escuro','#003c1f')
            if (document.title == 'FLOWERS')
            {
               
              darklight.setAttribute("src",'img/sol.png')
              btnMenuMobile.setAttribute("src",'img/3traços.png')  
              btnFiltro.setAttribute("src",'img/filtro.png')  
            }
            else
            {    
                darklight.setAttribute("src",'../img/sol.png') 
                btnMenuMobile.setAttribute("src",'../img/3traços.png') 
                btnFiltro.setAttribute("src",'../img/filtro.png')  
            }
            
        }
        
        

}
function verificarTema()
 {
    if (corRoot == '#003c1f') {
        
        return true;
    }
    else
    {  
        
        return  false;
        
    }
    
    
 }
verificarTema()
darklight.addEventListener('click', () => {
   

    if (temaSalvo == 'light')
    {
        localStorage.setItem('tema', !verificarTema() ? 'light' : 'dark');
        temaSalvo = localStorage.getItem('tema');
        mudarTema();
        
    }
    else
    {
        localStorage.setItem('tema', verificarTema() ? 'light' : 'dark');
        temaSalvo = localStorage.getItem('tema');
        mudarTema();
    }
    
   
    });

