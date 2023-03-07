const timer = document.getElementById('timer')
        
let cnd = setInterval(() => {
    if (timer.textContent > 0){
        timer.textContent = timer.textContent - 1
    } else {
        alert('You win!')
        clearInterval(cnd)
    }
},1000)