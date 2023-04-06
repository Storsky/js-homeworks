const popup = document.getElementById('modal_main')
const popupSuccess = document.getElementById('modal_success')
const closeButton = document.querySelectorAll('.modal__close_times')
const makeGoodBtn = document.getElementsByClassName('btn')
function closePopup() {
  popup.classList.remove('modal_active')
  popupSuccess.classList.remove('modal_active')
}

function makeGood() {
    closePopup()
    popupSuccess.classList.add('modal_active')

}
makeGoodBtn[0].addEventListener('click', makeGood)
popup.classList.add('modal_active')
console.log(closeButton)
closeButton.forEach(function(elememt) {
    elememt.addEventListener('click', closePopup)
})
