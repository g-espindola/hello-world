function load(){
    var msg = document.getElementById('msg')
    var pic = document.getElementById('img')

    var now = new Date()
    var hour = now.getHours()
    var minute = now.getMinutes()

    //var hour = 20
    //var hour = 13

    msg.innerHTML = `Now is ${hour} hours and ${minute} minutes.`
    if (hour < 12){
        msg.innerHTML += ' Good morning, sunshine!'
        pic.src = 'morning.png'
        document.body.style.background = "#e9cbb3"
    } else if (hour < 18){
        msg.innerHTML += ' Good afternoon!'
        pic.src = 'afternoon.png'
        document.body.style.background = "#e96b01"
    } else {
        msg.innerHTML += ' Good evening!'
        pic.src = 'evening.png'
        document.body.style.background = "#3d3355"
    }
}
