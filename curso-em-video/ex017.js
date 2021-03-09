
var num = [3,4,5,7,1]
num.push(5)

num.sort()

for(let pos in num){
    console.log(`${pos},${num[pos]}`)
}


console.log(num.indexOf(5))
console.log(num.indexOf(100))

