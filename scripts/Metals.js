import { getMetals,setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal (parseInt(event.target.value))
            window.alert(`User chose metal ${event.target.value}`)
        }
    }
)

export const MetalType = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    const listItems = metals.map(metals => {
        return `<li>
            <input type="radio" name="metal" value="${metals.id}" /> ${metals.metal}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"
    return html
}

