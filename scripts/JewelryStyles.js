import { getStyles } from "./database.js"

const styles = getStyles()

//create event listener for the radio buttons on the styles
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
           
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    let listItemsArray = styles.map(style => {
        return `<li> 
        <input type="radio" name=style value="${style.id}">${style.style}</li>`
    })
    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")
    html += "</ul>"
    return html
}

