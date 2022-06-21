document.body.style.textAlign = 'center';
function randomColorCode() {
    return Math.floor(Math.random() * 255);
}
const button = document.querySelector('#button');
const code = document.querySelector('.code');
const h1 = document.querySelector('h1');
button.addEventListener('click', () => {
    const r = randomColorCode();
    const g = randomColorCode();
    const b = randomColorCode();
    const newColor = `rgb(${r},${g},${b})`;
    if (r <= 40 || g <= 40 || b <= 40) {
        h1.style.color = 'white';
        code.style.color = 'white';
    }
    else {
        h1.style.color = 'black';
        code.style.color = 'black';
    }
    document.body.style.backgroundColor = newColor;
    code.innerText = `Current Color: RGB(${r},${g},${b})`;
})
