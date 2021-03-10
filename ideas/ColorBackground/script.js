var x = Math.floor(Math.random() * 256)
var y = Math.floor(Math.random() * 256)
var z = Math.floor(Math.random() * 256)
var bgcolor = `rgb(${x},${y},${z})`
var paragraph = document.getElementById('para')

function load(){
    document.body.style.background = bgcolor
    paragraph.innerHTML = bgcolor.toUpperCase()
}

function changebg(){
    paragraph.innerHTML = ''
    var x = Math.floor(Math.random() * 256)
    var y = Math.floor(Math.random() * 256)
    var z = Math.floor(Math.random() * 256)
    var bgcolor = `rgb(${x},${y},${z})`
    document.body.style.background = bgcolor
    paragraph.innerHTML = bgcolor.toUpperCase()
}