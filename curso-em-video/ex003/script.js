function clicar(){
    
    //creates variables from html elements
    var inicio_textbox = document.getElementById('inicio_box')
    var fim_textbox = document.getElementById('fim_box')
    var passo_textbox = document.getElementById('passo_box')
    var results_box = document.getElementById('res')

    //clean the results box for next operation
    results_box.innerHTML = '</br>'

    //get info from element variables
    var inicio = Number(inicio_textbox.value)
    var fim = Number(fim_textbox.value)
    var passo = Number(passo_textbox.value)

    //checks for info missing
    if (inicio_textbox.value.length == 0 || fim_textbox.value.length == 0 || passo_textbox.value.length == 0 || passo == 0){
        alert('[ERRO]Verifique as informaçoes novamente!')
    } else{
        //checks to see if the end is bigger than start
        if (inicio <= fim){
            //loop that prints the output
            while(inicio <= fim){
                results_box.innerHTML += ` ${inicio} \u{1F449}` //emoji code -get emoji in unicode list
                inicio = inicio + passo
            }
        } else if (inicio > fim){
            while(inicio >= fim){
                results_box.innerHTML += ` ${inicio} \u{1F449}` //emoji code -get emoji in unicode list
                inicio = inicio - passo
            }
        }
        
        results_box.innerHTML += ' FIM'


    }


}
