// Ouvrir la page pour ajouter un nouvel utilisateur favori

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

// ------------------------------------------------------------------------------------
// Récupérer le nom du nouvel utilisateur

let AddNameFavorite = document.getElementById("AddNameFavorite")
let AddNicknameFavorite = document.getElementById("AddNicknameFavorite")
let AddAdressFavorite = document.getElementById("AddAdressFavorite")
const saveNewFavorite = document.querySelector(".saveNewFavorite")
let FavoritesUsers = document.querySelector(".FavoritesUsers")
const AucunFavori = document.querySelector(".AucunFavori")

    // Écoute du click sur le bouton sauvegarder
saveNewFavorite.addEventListener("click", () => {
    // Notifier l'erreur si un des champs n'est pas rempli
    if (AddNameFavorite.value === "" || AddNicknameFavorite.value === "" || AddAdressFavorite.value === "") {
        alert("Vous n'avez pas renseigné tous les champs")
        return
    }

    if (AucunFavori) {
        AucunFavori.remove()
    }

    // Création de la div Nom Prénom Adresse
    let newFavDiv = document.createElement("div")
    FavoritesUsers.appendChild(newFavDiv)

    // Création + Ajout du Prénom et Nom
    let newFavoriName = document.createElement("p")
    newFavoriName.textContent = AddNicknameFavorite.value + " " + AddNameFavorite.value
    AddNicknameFavorite.value = ""
    AddNameFavorite.value = ""
    newFavDiv.appendChild(newFavoriName)

    // Création + Ajout de l'Adresse
    let newFavoriAdresse = document.createElement("p")
    newFavoriAdresse.textContent = AddAdressFavorite.value
    AddAdressFavorite.value = ""
    newFavDiv.appendChild(newFavoriAdresse)

    // Retour  aux favoris
    addNewFavori.classList.remove("active")
}) 