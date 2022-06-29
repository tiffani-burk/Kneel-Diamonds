import { getMetals, setMetal } from "./database.js"

const metals = getMetals()


//create an event listener that will show which metel user chose
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value)) //instead of window pop up, we are showing corresponding property in order building object
        }
    }
)


//This function returns the radio button options for the metals
export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}"> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

