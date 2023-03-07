const pic = document.getElementById('cookie')
let large = false
const clCnt = document.getElementById('clicker__counter')
pic.onclick = () => {
    clCnt.textContent = Number(clCnt.textContent) + 1
    if (large) {
        pic.height -= 20
        pic.width -= 20
        large = false
        
    } else {
        pic.height += 20
        pic.width += 20
        large = true
    }
}