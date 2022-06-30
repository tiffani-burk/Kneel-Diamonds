import { getMetals, getOrders, getSizes, getStyles } from "./database.js"
const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()


//This function calvculates the total cost of the items matches the id of the nested functions
const buildOrderListItem = (order) => {
//finding the price of the chosen metal
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
//find price of chosen size
const foundSize = sizes.find(
    (size) => {
        return size.id === order.sizeId
    }
)
//find price of chosen style
const foundStyle = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)
//store value of all prices to a variable
const totalCost = foundMetal.price + foundSize.price + foundStyle.price

//converts a number to a string
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
//interpolate the price with an HTML string
    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs ${costString}
    </li>`
}

//This functon is returning a list of the orders the customer places
export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


