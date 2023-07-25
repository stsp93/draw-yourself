const [rightForearm, leftForearm] = document.getElementsByClassName('forearm');
const [rightArm, leftArm] = document.getElementsByClassName('arm');
const [rightPupil, leftPupil] = document.getElementsByClassName('pupil')

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


// eyes follow cursor

document.body.addEventListener('mousemove', function (ev) {
    const cursorX = (ev.clientX / window.innerWidth);
    const cursorY = (ev.clientY / window.innerHeight);

    Array.from([rightPupil, leftPupil]).forEach(el => {
        el.style.marginLeft = `${-0.7/*start value*/ + cursorX}rem`;
        el.style.marginTop = `${-0.4/*start value*/ + cursorY}rem`;
    })
})

