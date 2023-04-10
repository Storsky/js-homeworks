const adObjects = document.querySelectorAll('.rotator__case');
let index = 0;
adObjects[index].classList.add('rotator__case_active')
function showAd() {
    adObjects[index].classList.remove('rotator__case_active')
    index++
    if (index < adObjects.length) {
    } else {
        index = 0
    }
    adObjects[index].classList.add('rotator__case_active')
}

setInterval(function() {showAd()}, 1000)