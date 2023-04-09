const fallItem = document.querySelectorAll('.menu__item')
fallItem.forEach(item => {
    item.onclick = () => {
        let isSub = item.querySelector('.menu_sub') 
        if (isSub) {
            if (isSub.classList.contains('menu_active')) {
                isSub.classList.remove('menu_active')
                return false
            } else {
                isSub.classList.add('menu_active')
                return false
            }

        }
    }
});
