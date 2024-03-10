/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Yulisa Alexandra Tepo Cubas";
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
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`)


/* Step 5 - Array */
let favoriteFoods = ["Duck stew", "Green noodles with bistec", "Shredded hen", "Grilled chicken"];
foodElement.innerHTML = `${favoriteFoods}`;
const favFood = "Chicken stew";
favoriteFoods.push(favFood); //Add item at the end of the array
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift(); //Delate first item in the array
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop(); //Delate last item in the array
foodElement.innerHTML += `<br>${favoriteFoods}`;