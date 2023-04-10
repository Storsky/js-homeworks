const menuItem = document.querySelectorAll('.menu__item')

menuItem.forEach(item => {
    let isSub = item.querySelector('.menu_sub')
    if (isSub) {
        
        item.onclick = (event) => {
            if (isSub.classList.contains('menu_active')) {
                isSub.classList.remove('menu_active')
                if (!event.target.closest('.menu_sub')) {
                    event.preventDefault();
                }
            } else {
                isSub.classList.add('menu_active')
                event.preventDefault();
            }
        }
    }
    
});
