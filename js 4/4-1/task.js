const ddValue = document.getElementsByClassName('dropdown__value')[0]
const ddListStatus = document.getElementsByClassName('dropdown__list')[0]
const ddList = document.querySelectorAll('.dropdown__link')

ddValue.addEventListener('click', function() {
    if (ddListStatus.classList.contains('dropdown__list_active')) {
        ddListStatus.classList.remove('dropdown__list_active')
    } else {
        ddListStatus.classList.add('dropdown__list_active')
    }
})

ddList.forEach(item => {
    item.onclick = () => {
        item.closest('div').firstElementChild.textContent = item.textContent
        ddListStatus.classList.remove('dropdown__list_active')
        return false
    }
})