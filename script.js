const [rightForearm, leftForearm] = document.getElementsByClassName('forearm');
const [rightArm, leftArm] = document.getElementsByClassName('arm');

Array.from([leftForearm, leftArm]).forEach(el => {
    el.addEventListener('mouseover', function () {
        leftArm.classList.add('wave-left');
    })
})


Array.from([rightForearm, rightArm]).forEach(el => {
    el.addEventListener('mouseover', function () {
        rightArm.classList.add('wave-right')
    })
})

// Animationend listeners

leftArm.addEventListener('animationend', function () {
    this.classList.remove('wave-left');
})

rightArm.addEventListener('animationend', function () {
    this.classList.remove('wave-right');
})
