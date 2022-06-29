
import { addCustomOrder } from "./database.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"

//listening for click of button; will add orders to screen.
document.addEventListener(
    "click",
    (event) => { 
        const buttonClicked = event.target

        if (buttonClicked.id === "orderButton") { //checking if the id of buttonClicked matched the id on the button
         addCustomOrder() //if true, it invokes the custom order function, now allowing the click to add custom orders to screen
        }
    }
)

         

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

