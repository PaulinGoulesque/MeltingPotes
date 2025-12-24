// Ajouter un nouvel utilisateur favori

const addNewFavoriteUser = document.querySelector(".addNewFavoriteUser")
const closeAddFavorite = document.getElementById("closeAddFavorite")
let addNewFavori = document.querySelector(".addNewFavori")

addNewFavoriteUser.addEventListener("click", () => {
    addNewFavori.classList.add("active")
})

closeAddFavorite.addEventListener("click", () => {
    addNewFavori.classList.remove("active")
})

// ------------------------------------------------------------------------------------
// Choisir l'Avatar du nouvel utilisateur favori

let NoneAvatar = document.getElementById("NoneAvatar")

NoneAvatar.addEventListener("click", () => {
    callOverlay.classList.add("backgroundModal")
    modal.style.display="flex"
})
