/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = "Yulisa Alexandra Tepo Cubas";
console.log("fullName"); //Esto no cambia nada

/* Step 2 - Variables */
const currentYear = new Date();
const profilePicture = "images/photo.jpeg";

/* Step 3 - Element Variables */
nameElement = document.getElementById("name");
foodElement = document.getElementById("food");
yearElement = document.querySelector("#year");
imageElement = document.querySelector("#photo");



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong>`;
yearElement.textContent = currentYear.getFullYear();
imageElement.setAttribute("images/photo.jpeg", profilePicture);
imageElement.setAttribute("alt", 'Profile image of [fullName]')


/* Step 5 - Array */
let favoriteFoods = ["Duck stew", "Green noodles with bistec", "Shredded hen", "Grilled chicken"];
foodElement.innerHTML = `${favoriteFoods}`;
const favFood = "Chicken stew";
favoriteFoods.push(favFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;