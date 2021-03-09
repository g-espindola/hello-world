var carspeed = Math.random()*70

console.log(carspeed)

if(carspeed>55){
    console.log(`You are overspeed! You got a ticket`)
} else if (carspeed>20 && carspeed <= 55){
    console.log(`Always wear a seatbelt!`)
} else if(carspeed<20){
    console.log('You are too slow! Pick up the pace.')
}

