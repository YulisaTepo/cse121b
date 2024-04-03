/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;
        const imageElement = document.createElement("img");
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok) {
        const fetchConverted = await response.json()
        templeList.push(fetchConverted);
        displayTemples(templeList)
    }

    //ANOTHER WAY
    /* .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error))
    displayTemples(templeList); */
}

/* reset Function */
/* const reset = function (templesElement) {
    const articles = templesElement.querySelectorAll('article');
    articles.forEach(article => {
        article.remove();
    }); */
// ANOTHER WAY TO RESET
const reset = () => {
    templesElement.innerHTML = " ";
}; 
// ESTO DEBERÍA FUNCIONAR

/* filterTemples Function */
function filterTemples(templeList) {
    reset();
    const filter = document.querySelector("#filtered");
    switch (filter) {
        case "utah": displayTemples(templeList.filter(temple => temple.location.includes("Utah")))
            break;
        case "notUtah": displayTemples(templeList.filter(temple => !temple.location.includes("Utah")))
            break;
        case "older": displayTemples(templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)))
            break;
        case "all": displayTemples(templeList)
            break;
    }
}



/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();
console.log(templeList);