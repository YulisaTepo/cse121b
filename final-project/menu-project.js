const menusElement = document.querySelector("#menus");
let menuList = []

//Display menus
const displayMenu = (menus) => {
    menus.forEach(menu => {
        let article = document.createElement("article");
        let image = document.createElement("img");
        image.setAttribute("src", menu.image);
        image.setAttribute("alt", `${menu.name}`);
        let firstH4 = document.createElement("h4");
        firstH4.innerHTML = menu.name;
        let secondH4 = document.createElement("h4")
        secondH4.innerHTML = menu.price;
        let paragraph = document.createElement("p");
        paragraph.innerHTML = menu.description;


        article.appendChild(image);
        article.appendChild(firstH4);
        article.appendChild(secondH4);
        article.appendChild(paragraph);

        menusElement.appendChild(article);
    })
}

// Get menus
const getMenus = async () => {
    let response = await fetch("https://mocki.io/v1/1843f121-4563-4055-9ba2-5a4fad6da772");
    if (response.ok) {
        let data = await response.json();
        menuList = data;
        displayMenu(menuList);
    }
}

const reset = () => {
    menusElement.innerHTML = " ";
};

// Filter menu
function filterMenu(menus) {
    reset()
    const filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "cheaper": displayMenu(menus.filter(menu => parseInt(menu.price) <= 300))
            break;
        case "expensive": displayMenu(menus.filter(menu => parseInt(menu.price) > 300))
            break;
        case "all": displayMenu(menus)
            break;
    }

}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterMenu(menuList) });

getMenus();
console.log(menuList);