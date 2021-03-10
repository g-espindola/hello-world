//variables
let canvasWidth = window.innerWidth
let canvasHeight = 600
let canvas
let backgroundColorValue
let backgroundColor


function setup() {
  let canvasElement = document.getElementById('canvas_div')
  
  backgroundColor = color(255)
  
  
  //sets up canvas
  canvas = createCanvas(canvasWidth,canvasHeight)
  canvas.background(color(255))
  canvas.parent(canvasElement)
  strokeWeight(5)
}




function draw() {
  if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
  }
}

function changeSize(){
  let sizeselect = document.getElementById('size_select')
  let brushSize = sizeselect.value
  
  switch(brushSize){
    case 'xsmall':
      strokeWeight(2)
      break
    case 'small':
      strokeWeight(5)
      break
    case 'medium':
      strokeWeight(8)
      break
    case 'large':
      strokeWeight(11)
      break
    case 'xlarge':
      strokeWeight(14)
      break
  }
  
  
}



//BACKGROUND
function changeBackground(){
  //background color set up
  let backgroundSelect = document.getElementById('background_select')
  backgroundColorValue = backgroundSelect.value
  
  
  switch(backgroundColorValue){
    case 'white':
      canvas.background(color(255))
      backgroundColor = color(255)
      break
    case 'black':
      canvas.background(color(0))
      backgroundColor = color(0)
      break
    case 'blue':
      canvas.background(color(60,100,220))
      backgroundColor = color(60,100,220)
      break
    case 'green':
      canvas.background(color(34,139,34))
      backgroundColor = color(34,139,34)
      break
    case 'purple':
      canvas.background(color(148,0,211))
      backgroundColor = color(148,0,211)
      break
    case 'red':
      canvas.background(color(255, 68, 51))
      backgroundColor = color(255, 68, 51)
      break
    case 'yellow':
      canvas.background(color(255, 255, 0))
      backgroundColor = color(255, 255, 0)
      break
    case 'pink':
      canvas.background(color(255, 105, 180))
      backgroundColor = color(255, 105, 180)
      break
      
  }
 
  
}

//BRUSH COLOR
function changeBrush(){
  let brushselect = document.getElementById('brush_select')
  let brushColorValue = brushselect.value
  
  switch(brushColorValue){
    case 'black':
      stroke(0)
      break
    case 'white':
      stroke(255)
      break
    case 'blue':
      stroke(color(60,100,220))
      break
    case 'green':
      stroke(color(34,139,34))
      break
    case 'purple':
      stroke(color(148,0,211))
      break
    case 'red':
      stroke(color(255, 68, 51))
      break
    case 'yellow':
      stroke(color(255, 255, 0))
      break
    case 'pink':
      stroke(color(255, 105, 180))
      break
    case 'eraser':
      stroke(backgroundColor)
      break
    case 'gray':
      stroke(color(120))
      break
  }
  
}

//CLEAR
function whenClick(){
  canvas.background(backgroundColor)
}

//SAVE BUTTON
function saveImg(){
  saveCanvas(canvas, 'sketch', 'jpg')
}