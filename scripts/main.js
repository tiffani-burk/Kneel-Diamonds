import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

//listeing for the event of the state being changed (in the main.js)
document.addEventListener(
    "stateChanged", event => {
        console.log("State of data has changed. Rengenerating HTML...")
        renderAllHTML()
    }
)