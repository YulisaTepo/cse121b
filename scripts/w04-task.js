/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Yulisa Tepo",
    photo: "images/photo.jpeg",
    favoriteFoods: ["Rice with duck's stew", "Green noddles", "Chicken's Estofado"],
    hobbies: ["Learn English", "Learn Korean", "Play volleyboll", "Play saxophone"],
    placeLived: [],
};
myProfile.placeLived.push({ place: "Cajamarca", length: "4 years" });
myProfile.placeLived.push({ place: "Guadalupe", length: "15 years" })

/* Populate Profile Object with placesLive objects */

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    //Create li element:
    let li = document.createElement("li");
    //Print the hobby in the li element
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placeLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");

    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});


