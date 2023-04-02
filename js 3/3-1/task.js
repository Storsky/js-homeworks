const objectsToReveal = document.querySelectorAll('.reveal');

    
window.addEventListener('scroll', function() {
    objectsToReveal.forEach(objectToReveal => {
        let revealPoint = objectToReveal.offsetTop - (window.innerHeight / 2)

        // Check if the user has scrolled to the reveal point for this object
        if (window.scrollY >= revealPoint) {
            objectToReveal.classList.add('reveal_active') 
        } else {
            objectToReveal.classList.remove('reveal_active')
        }

    }
)})