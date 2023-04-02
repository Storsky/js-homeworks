const fallItem = document.querySelectorAll('.menu__link')

fallItem.forEach(item => {
    item.onclick = () => {
        if (item.nextElementSibling) {
            child_menu = item.nextElementSibling
            child_menu.className = 'menu menu_sub menu_active'
            return false
        }
    
        
    }
});
