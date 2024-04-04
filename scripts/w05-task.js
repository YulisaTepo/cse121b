/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", temple.imageUrl);
        imageElement.setAttribute("alt", `${temple.location}`);
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok) {
        let data = await response.json()
        templeList = data;
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = " ";
};

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah": displayTemples(temples.filter(temple => temple.location.includes("Utah")))
            break;
        case "notutah": displayTemples(temples.filter(temple => !temple.location.includes("Utah")))
            break;
        case "older": displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1))) 
            break;
        case "all": displayTemples(temples)
            break;
    }
}
/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
getTemples();

console.log(templeList);