var mainArray = []
var resdiv = document.getElementById('res')
var selectbox = document.getElementById('slcbox')

function selectLoader(){
    //adds default option
    var iten2 = document.createElement('option')
    iten2.setAttribute('id', 'itenid')
    iten2.innerHTML = 'Insira os numeros a cima!'
    selectbox.appendChild(iten2)
}

function whenClicked(){
    
    //extracts number from html elements
    var numberbox = document.getElementById('number_input')
    var number = Number(numberbox.value)

    if (number <= 100 && number >= 1){

        if(mainArray.indexOf(number) == -1){

            //pushes number to array
            mainArray.push(number)
        
            //creates new option element for numbers added
            var iten = document.createElement('option')
        
            //clears default option
            var toDelete = document.getElementById('itenid')
            toDelete.innerHTML = ''

            //displays number added to array on select list
            iten.innerHTML = `Voce adicionou o numero ${number}`
            selectbox.appendChild(iten)
        
            //clears res div
            resdiv.innerHTML = ''


        } else {
            window.alert(`[ERRO] O numero ${number} ja foi adicionado`)
        }
        
        

    }else{
        //error alert
        alert(`[ERRO] Numero invalido`)
    }

    //clears input box and sets focus
    numberbox.value = ''
    numberbox.focus()

    
    
}

function finale(){

    if(mainArray.length > 1){
         //finds the sum of all the numbers in the array
        var sum = 0
        for(var i = 0;i < mainArray.length;i++){
            sum = mainArray[i] + sum
        }


        //displays info about the array
        resdiv.innerHTML = `<br>Ao todo foram cadastrados ${mainArray.length} numeros`
        resdiv.innerHTML += `<br><br>Somando todos os valores, temos ${sum}`
        resdiv.innerHTML += `<br><br> A média dos numeros é ${sum / mainArray.length}`
        resdiv.innerHTML += `<br><br>O maior numero inserido é ${Math.max(...mainArray)}`
        resdiv.innerHTML += `<br><br>O menor numero inserido é ${Math.min(...mainArray)}`
    } else {
        //error alert
        window.alert('[ERRO] Adicione numeros antes de finalizar')
    }
   
}

