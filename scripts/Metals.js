import { getMetals } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItems = metals.map(metal => {
        return `<li>
            <input type="radio" name="metal" value="${metals.id}" /> ${metals.metal}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}

