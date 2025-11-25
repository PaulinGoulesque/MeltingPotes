// Permet de faire fonctionner les checkboxes icones
const wrapperParticipants = document.querySelector(".wrapperParticipants");

wrapperParticipants.addEventListener("click", (e) => {
    const label = e.target.closest(".checkboxes label")
    if (!label) return; // si on n'a pas cliqué dans un label, on s’en fiche
    const checkbox = label.querySelector("input[type='checkbox']")
    if (!checkbox) return

    e.preventDefault()

    checkbox.checked = !checkbox.checked
    const unselectedImg = label.querySelector(".Unselected");
    const selectedImg = label.querySelector(".Selected");

    if (checkbox.checked) {
    unselectedImg.style.display = "none";
    selectedImg.style.display = "inline";
    } else {
    unselectedImg.style.display = "inline";
    selectedImg.style.display = "none";
    }
})

// ------------------------------------------------------------------------------------
// Suppresion de l'adresse via le bouton reset
const entrerAdresse = document.querySelectorAll(".entrerAdresse")
const actionResetAdresse = document.querySelector(".wrapperParticipants") || document

actionResetAdresse.addEventListener("click", (e) => {
    if (!e.target.matches(".reset"))
        return; // si ce n'est pas un .reset, on sort

    const container = e.target.closest(".entrerAdresse");
    if (!container) return; // sécurité : si la structure change, on évite les erreurs

    const textInput = container.querySelector("input[type='text']");
    if (textInput) textInput.value = "";
})

// ------------------------------------------------------------------------------------
// Ajout d'une personne
const boutonAjouter = document.querySelector(".boutonAjouter")
let compteur = 3

boutonAjouter.addEventListener("click", () => {

// Création du wrapper Principal 
    let wrapperPrincipal = document.createElement("div")
    wrapperPrincipal.classList.add("wrapperPrincipal")
    wrapperParticipants.appendChild(wrapperPrincipal)
    
// Création de l'image pour l'avatar
    let imgAvatar = document.createElement("img")
    // appelle une image aléatoire
    imgAvatar.src = arrayImgAvatar[Math.floor(Math.random()*arrayImgAvatar.length)]
    imgAvatar.alt=`Avatar de la personne ${compteur}`
    imgAvatar.classList.add("imgAvatar")
    wrapperPrincipal.appendChild(imgAvatar)

// Création du wrapper Secondary
    let wrapperSecondary = document.createElement("div")
    wrapperSecondary.classList.add("wrapperSecondary")
    wrapperPrincipal.appendChild(wrapperSecondary)
    
// Création de la div entrerAdresse
    let entrerAdresse = document.createElement("div")
    entrerAdresse.classList.add("entrerAdresse")
    wrapperSecondary.appendChild(entrerAdresse)

// Ajout des inputs 
    let adresse = document.createElement("input")
    adresse.type="text"
    adresse.classList.add("adresse")
    entrerAdresse.appendChild(adresse)
    let resetBtn = document.createElement("input")
    resetBtn.type="reset"
    resetBtn.classList.add("reset")
    resetBtn.value= "\u00D7"
    entrerAdresse.appendChild(resetBtn)

// Création de la div checkboxes
    let checkboxes = document.createElement("div")
    checkboxes.classList.add("checkboxes")
    wrapperSecondary.appendChild(checkboxes)

// Création des labels
    // Marche
    let labelMarche = document.createElement("label")
    labelMarche.setAttribute("for", `marche${compteur}`)
    checkboxes.appendChild(labelMarche)
    // Vélo
    let labelVelo = document.createElement("label")
    labelVelo.setAttribute("for", `velo${compteur}`)
    checkboxes.appendChild(labelVelo)
    // Voiture
    let labelVoiture = document.createElement("label")
    labelVoiture.setAttribute("for", `voiture${compteur}`)
    checkboxes.appendChild(labelVoiture)
    // Transport en commun
    let labelTransportCommun = document.createElement("label")
    labelTransportCommun.setAttribute("for", `transportCommun${compteur}`)
    checkboxes.appendChild(labelTransportCommun)

// Création des checkboxes
    // Marche
    let inputMarche = document.createElement("input")
    inputMarche.type="checkbox"
    inputMarche.setAttribute("name", `marche${compteur}`)
    inputMarche.id=`marche${compteur}`
    labelMarche.appendChild(inputMarche)
        // Ajouts images
        let imgMarcheUnselected = document.createElement("img")
        imgMarcheUnselected.src="/Deplacement/Unselected/marche.svg"
        imgMarcheUnselected.alt="Icon d'une personne qui marche"
        imgMarcheUnselected.classList.add("Unselected")
        labelMarche.appendChild(imgMarcheUnselected)
        let imgMarcheSelected = document.createElement("img")
        imgMarcheSelected.src="/Deplacement/Selected/marche.svg"
        imgMarcheSelected.alt="Icon d'une personne qui marche"
        imgMarcheSelected.classList.add("Selected")
        labelMarche.appendChild(imgMarcheSelected)

    // Vélo
    let inputVelo = document.createElement("input")
    inputVelo.type="checkbox"
    inputVelo.setAttribute("name", `velo${compteur}`)
    inputVelo.id=`velo${compteur}`
    labelVelo.appendChild(inputVelo)
        // Ajouts images
        let imgVeloUnselected = document.createElement("img")
        imgVeloUnselected.src="/Deplacement/Unselected/velo.svg"
        imgVeloUnselected.alt="Icon de velo"
        imgVeloUnselected.classList.add("Unselected")
        labelVelo.appendChild(imgVeloUnselected)
        let imgVeloSelected = document.createElement("img")
        imgVeloSelected.src="/Deplacement/Selected/velo.svg"
        imgVeloSelected.alt="Icon de velo"
        imgVeloSelected.classList.add("Selected")
        labelVelo.appendChild(imgVeloSelected)

    // Voiture
    let inputVoiture = document.createElement("input")
    inputVoiture.type="checkbox"
    inputVoiture.setAttribute("name", `voiture${compteur}`)
    inputVoiture.id=`voiture${compteur}`
    labelVoiture.appendChild(inputVoiture)
        // Ajouts images
        let imgVoitureUnselected = document.createElement("img")
        imgVoitureUnselected.src="/Deplacement/Unselected/voiture.svg"
        imgVoitureUnselected.alt="Icon d'une voiture'"
        imgVoitureUnselected.classList.add("Unselected")
        labelVoiture.appendChild(imgVoitureUnselected)
        let imgVoitureSelected = document.createElement("img")
        imgVoitureSelected.src="/Deplacement/Selected/voiture.svg"
        imgVoitureSelected.alt="Icon d'une voiture'"
        imgVoitureSelected.classList.add("Selected")
        labelVoiture.appendChild(imgVoitureSelected)

    // Transport en commun
    let inputTransportCommun = document.createElement("input")
    inputTransportCommun.type="checkbox"
    inputTransportCommun.setAttribute("name", `transportCommun${compteur}`)
    inputTransportCommun.id=`transportCommun${compteur}`
    labelTransportCommun.appendChild(inputTransportCommun)
        // Ajouts images
        let imgTransportCommunUnselected = document.createElement("img")
        imgTransportCommunUnselected.src="/Deplacement/Unselected/metro.svg"
        imgTransportCommunUnselected.alt="Icon d'un metro"
        imgTransportCommunUnselected.classList.add("Unselected")
        labelTransportCommun.appendChild(imgTransportCommunUnselected)
        let imgTransportCommunSelected = document.createElement("img")
        imgTransportCommunSelected.src="/Deplacement/Selected/metro.svg"
        imgTransportCommunSelected.alt="Icon d'un metro"
        imgTransportCommunSelected.classList.add("Selected")
        labelTransportCommun.appendChild(imgTransportCommunSelected)


compteur = compteur + 1

})

// ------------------------------------------------------------------------------------

// Appeler la modal
let callOverlay = document.getElementById("callOverlay")
let modal = document.querySelector(".modal")

wrapperParticipants.addEventListener("click", (e) => {
    const changeAvatar = e.target.matches(".imgAvatar")
    if (!changeAvatar) {
        return
    } else {
        callOverlay.classList.add("backgroundModal")
        modal.style.display="flex"
    }
})

// Fermer la modal
callOverlay.addEventListener("click", () => {
    callOverlay.classList.remove("backgroundModal")
    modal.style.display="none"
})

// ------------------------------------------------------------------------------------
