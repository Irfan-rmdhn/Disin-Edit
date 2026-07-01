const canvas = document.querySelector('.wadah')
const line = document.querySelector('#besar')
const textSize = document.querySelector('.size')
const lineColor = document.querySelector('#warna')
const reds = document.querySelector('#red')
const green = document.querySelector('#green')
const blue = document.querySelector('#blue')
const opacity = document.querySelector('#opacity')
const kotak = document.querySelector('.yes')
const bulet = document.querySelector('.no')
const hasilCol = document.querySelector('.hasil')
console.log(hasilCol);
hasilCol.style.backgroundColor =     `rgba(${reds.value},${green.value},${blue.value},${opacity.value / 100})`
reds.addEventListener('input', () => {
    hasilCol.style.backgroundColor = `rgba(${reds.value},${green.value},${blue.value},${opacity.value / 100})`
})
opacity.addEventListener('input', () => {
    hasilCol.style.backgroundColor = `rgba(${reds.value},${green.value},${blue.value},${opacity.value / 100})`
})
green.addEventListener('input', () => {
    hasilCol.style.backgroundColor = `rgba(${reds.value},${green.value},${blue.value},${opacity.value / 100})`
})
blue.addEventListener('input', () => {
    hasilCol.style.backgroundColor = `rgba(${reds.value},${green.value},${blue.value},${opacity.value / 100})`
})
bulet.addEventListener('input', () => {
    console.log(bulet.value);
})
kotak.addEventListener('input', () => {
    console.log(kotak.value);
})
canvas.height = 600
canvas.width = 1024
textSize.textContent = line.value
line.addEventListener('input', () => {
    textSize.textContent = line.value
})
const ctx = canvas.getContext("2d")

let gambar = false

canvas.addEventListener('mousedown', () => {
    gambar = true
})
canvas.addEventListener('mouseup', () => {
    gambar = false
})
canvas.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    if (currentTool == 'Brush') {
        Draw(x, y)
    }
    if (currentTool == 'Eraser') {
        Erase(x, y)
    }
})
let currentTool = 'Brush'
function Draw(x, y) {
    if (gambar == false) return;

    console.log(x);
    ctx.fillStyle = `rgba(${reds.value},${green.value},${blue.value},${opacity.value / 100})`
    if (kotak.checked) {
        ctx.fillRect(x, y, line.value, line.value)
    }
    if (bulet.checked) {
        ctx.beginPath()
        ctx.arc(x, y, line.value / 2, 0, Math.PI * 2)
        ctx.fill()
    }

}
function Erase(x, y) {
    if (gambar == false) return;

    console.log(x);
    ctx.fillStyle = `rgba(255,255,255)`
    if (kotak.checked) {
        ctx.fillRect(x, y, line.value, line.value)
    }
    if (bulet.checked) {
        ctx.beginPath()
        ctx.arc(x, y, line.value / 2, 0, Math.PI * 2)
        ctx.fill()
    }
}
const tools = document.querySelectorAll('.tool')
tools.forEach(btn => {
    btn.addEventListener('click', () => {
        tools.forEach(item => {
            item.classList.remove('active')
        })
        btn.classList.add('active')
        currentTool = btn.textContent
        console.log(btn);

    })
});