window.onload = () => {
    main();
}
function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('btn');

    btn.addEventListener('click',function () {
        const bgColor = generateRgbColor();
        root.style.backgroundColor = bgColor;
    })
}

function generateRgbColor() {
    const r = Math.floor(Math.random() * 250);
    const g = Math.floor(Math.random() * 250);
    const b = Math.floor(Math.random() * 250);

    return `rgb(${r},${g},${b})`
}