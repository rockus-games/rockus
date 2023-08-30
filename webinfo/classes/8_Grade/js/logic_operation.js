const canvas_no = document.getElementById("logic_no")
const logic_no_pen = canvas_no.getContext("2d")

canvas_no.width = 300
canvas_no.height = 300

logic_no_pen.beginPath()
logic_no_pen.moveTo(50,50)
logic_no_pen.lineTo(125,50)
logic_no_pen.moveTo(175,50)
logic_no_pen.arc(150,50,25,0,2*Math.PI)
logic_no_pen.lineTo(250,50)
logic_no_pen.lineTo(250,250)
logic_no_pen.lineTo(175,250)
logic_no_pen.rect(125,225,50,50)
logic_no_pen.moveTo(125,250)
logic_no_pen.lineTo(50,250)
logic_no_pen.lineTo(50,50)
logic_no_pen.stroke()


const canvas_and = document.getElementById("logic_and")
const logic_and_pen = canvas_and.getContext("2d")

canvas_and.width = 300
canvas_and.height = 300
logic_and_pen.beginPath()
logic_and_pen.moveTo(50,50)
logic_and_pen.lineTo(125,50)
logic_and_pen.moveTo(175,50)
logic_and_pen.arc(150,50,25,0,2*Math.PI)
logic_and_pen.lineTo(250,50)
logic_and_pen.lineTo(250,250)
logic_and_pen.lineTo(225,250)

logic_and_pen.rect(175,225,50,50)

logic_and_pen.moveTo(175,250)
logic_and_pen.lineTo(125,250)
logic_and_pen.rect(75,225,50,50)

logic_and_pen.moveTo(75,250)
logic_and_pen.lineTo(50,250)
logic_and_pen.lineTo(50,50)
logic_and_pen.stroke()