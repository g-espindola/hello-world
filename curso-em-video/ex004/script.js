function tabuada(){

    let num = document.getElementById('number_box')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO] Cheque as informaçoes novamente')
    } else{
        let n = Number(num.value)
        tab.innerHTML = ''

        for(i = 1;i <= 10; i++){
            let results = i * n
            console.log(results)
            let iten = document.createElement('option')
            iten.text = `${n} x ${i} = ${results}`
            tab.appendChild(iten)
        }
    }
    
    

}