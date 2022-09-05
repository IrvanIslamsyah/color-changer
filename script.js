const hexColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", ]
const button = document.getElementById("buttonChanger")
const color = document.getElementById("color")

// // textContent & innerText | innerHTML
// color.textContent = 'Halo selamat datang'
// color.innerHTML = 'Halo selamat datang'
// color.innerText = '<h1>Halo selamat datang</h1>'

function changeColor(){
    // alert('Wadidaw')
    let warna = '#'
    for(let i=1;i<=6;i++){
        warna += hexColor[randomNumber()]
    }

    console.log(warna)
    color.textContent = warna
    document.body.style.backgroundColor = warna

    console.log(randomNumber())

    function randomNumber(){
        return Math.floor(Math.random() * hexColor.length)
    }
}