const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")

canvas.width = 300
canvas.height = 300

context.beginPath()
context.moveTo(50,50)
context.lineTo(125,50)
context.moveTo(175,50)
context.arc(150,50,25,0,2*Math.PI)
context.lineTo(250,50)
context.lineTo(250,250)
context.lineTo(175,250)
context.rect(125,225,50,50)
context.moveTo(125,250)
context.lineTo(50,250)
context.lineTo(50,50)
context.stroke()
