const btnFiltro = document.querySelector('.mobileFilter')
const sidebarMobileMP = document.querySelector('.maisProcuradasSideBar')
const sidebarMobileAr = document.querySelector('.arranjosSideBar')
let sidebarIsActive = false;
function chamarfiltros(element)
{
    btnFiltro.addEventListener('click',() =>
    {
        if (!sidebarIsActive) {
            element.style.display = 'block';
            sidebarIsActive = !sidebarIsActive
        }
        else
        {
            element.style.display = 'none';
            sidebarIsActive = !sidebarIsActive;
        }


    })
    


}





