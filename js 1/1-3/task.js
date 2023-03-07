let strikes = document.getElementById('dead')

let misses = document.getElementById('lost')

    let holes = document.querySelectorAll('.hole')
    getHole = index => document.getElementById(index)
    holes.forEach(hole => {
        hole.onclick = () => {
            if (hole.className == 'hole hole_has-mole'){
                strikes.textContent = Number(strikes.textContent) + 1
                if (strikes.textContent >= 10){
                    alert('You win')
                    startAgain()
                }
            } else if (hole.className == 'hole'){
                misses.textContent = Number(misses.textContent) + 1
                if (misses.textContent >= 5) {
                    alert('You lose')
                    startAgain()
                }
            }
        }
    })

function startAgain(){
    misses.textContent = 0
    strikes.textContent = 0
    return
}
console.log(holes)
