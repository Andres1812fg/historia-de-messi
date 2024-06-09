
let clicks = 0;
const egg = document.getElementById('egg');

document.addEventListener('DOMContentLoaded', (event) => {
    clicks = parseInt(localStorage.getItem('clicks')) || 0;
    updateEgg();
});

egg.addEventListener('click', () => {
    clicks++;
    localStorage.setItem('clicks', clicks);
    updateEgg();
});

function updateEgg() {
    if (clicks >= 1000000) {
        egg.style.backgroundImage = "url('egg_broken.png')";
    } else if (clicks >= 750000) {
        egg.style.backgroundImage = "url('egg_cracked3.png')";
    } else if (clicks >= 500000) {
        egg.style.backgroundImage = "url('egg_cracked2.png')";
    } else if (clicks >= 250000) {
        egg.style.backgroundImage = "url('egg_cracked1.png')";
    }
}
