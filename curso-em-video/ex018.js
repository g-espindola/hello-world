function isPar(n){
    var isPar = ''
    var remainder = n % 2
    if (remainder == 1){
        isPar = false
    } else if (remainder == 0){
        isPar = true
    }
    return isPar
}

var test = isPar(9)
console.log(test)
