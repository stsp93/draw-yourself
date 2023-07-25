const [rightForearm, leftForearm] = document.getElementsByClassName('forearm');
const [rightArm, leftArm] = document.getElementsByClassName('arm');
const [rightPupil, leftPupil] = document.getElementsByClassName('pupil')
const button = document.querySelector('button');
const mouthEl = document.getElementsByClassName('mouth')[0];
const popupEl = document.querySelector('.popup');

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

let intervalId;

button.addEventListener('click', function () {
    mouthEl.classList.add('talk');

    intervalId = setInterval(() => {
        popupEl.textContent += `${generateWord()}  `;
    }, 500)
    popupEl.style.display = 'block';
})

function generateWord() {
    const words = [
        'apple',
        'banana',
        'car',
        'dog',
        'elephant',
        'flower',
        'guitar',
        'house',
        'island',
        'jungle',
        'kite',
        'lemon',
        'mountain',
        'notebook',
        'orange',
        'of',
        'to',
        'from',
        'go',
        'is'
    ];
    
    return words[(Math.floor(Math.random() * words.length))];

}

// Animationend listeners

leftArm.addEventListener('animationend', function () {
    this.classList.remove('wave-left');
})

rightArm.addEventListener('animationend', function () {
    this.classList.remove('wave-right');
})

mouthEl.addEventListener('animationend', function () {
    this.classList.remove('talk');
    popupEl.style.display = 'none';
    popupEl.textContent = '';
    clearInterval(intervalId);
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

