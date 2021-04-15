// burger-menu
{
    const but = document.querySelector('.button');
    const burger = document.querySelector('.burger');
    const menuIcon = document.querySelector('.menu-icon');
    const signMenuBut = document.querySelector('.but-font3');
    const signMenu = document.querySelector('.sign-menu');
    const escSignMenu = document.querySelector('.esc');
    
    let flag = 0;
    let flagMenu = 0;
    burger.style.marginLeft = 1155 + 'px';
    but.style.display = 'none';
    
    function toggleMenuIcon() {
        menuIcon.classList.toggle('active');
        if (flag == 0) {
            but.style.display = 'flex';
            burger.style.marginLeft = 135 + 'px';
            flag = 1;
        } else {
            but.style.display = 'none';
            burger.style.marginLeft = 1155 + 'px';
            flag = 0;
        }
    }

    function openSignMenu() {
        if (flagMenu === 0) {
            signMenu.style.display = 'flex';
            flagMenu = 1;
        }
        else {
            signMenu.style.display = 'none';
            flagMenu = 0;
        }
    }

    menuIcon.addEventListener('click', toggleMenuIcon);
    signMenuBut.addEventListener('click', openSignMenu);
    escSignMenu.addEventListener('click', openSignMenu);
}

