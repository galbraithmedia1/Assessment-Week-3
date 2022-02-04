const buttonColor = document.getElementById("color")
const buttonPlace = document.getElementById("place")
const buttonRitual = document.getElementById("ritual")


const alertFunc = (event)=>{

    event.preventDefault()

    alert("Blue")

}
const alertPlace = (event)=>{

    event.preventDefault()

    alert("Beartooth Mts")

}

const alertRitual = (event)=>{

    event.preventDefault()

    alert("eating??")

}







buttonColor.addEventListener("click", alertFunc)

buttonPlace.addEventListener("click", alertPlace)
buttonRitual.addEventListener("click", alertRitual)