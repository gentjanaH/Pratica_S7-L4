// myAPIKey = "yWKGJZ1LSyEsTgFPgOCqGSFACYOShnyvw1oNceC1TbPSQTWcPjAmlyJO"

// URL PER LOAD IMG 
const urlLoadImg = "https://api.pexels.com/v1/search?query=hamsters"

// URL PER SECONDARY IMG 
const urlSecondaryImages = "https://api.pexels.com/v1/search?query=tigers"

//es:1)
const LoadImg = function () {
    fetch(urlLoadImg, {
        headers: {
            Authorization: "yWKGJZ1LSyEsTgFPgOCqGSFACYOShnyvw1oNceC1TbPSQTWcPjAmlyJO"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(res.status)
            }
        })
        .then((foto) => {
            const allCards = document.querySelectorAll(".card")
            // aggiungo classi alla card
            const cardBody = document.querySelectorAll(".card-body")
            cardBody.forEach((body) => {
                body.className = "h-100 d-flex flex-column justify-content-between"
            })

            allCards.forEach((card, i) => {

                const img = card.querySelector("img")
                img.classList.add("img-fluid")
                img.src = foto.photos[i].src.medium

                //es:5) aggiorno il testo "9 mins"
                const IDText = card.querySelector(".text-muted")
                IDText.innerText = foto.photos[i].id
            })
            console.log("IMMAGINI DI CRICETI", foto)
        })
        .catch((err) => {
            console.log("ERRORE NEL CARICARE LE IMMAGINI", err)
        })
}

//es:2)
const LoadSecondaryImg = function () {
    fetch(urlSecondaryImages, {
        headers: {
            Authorization: "yWKGJZ1LSyEsTgFPgOCqGSFACYOShnyvw1oNceC1TbPSQTWcPjAmlyJO"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error(res.status)
            }
        })
        .then((foto) => {
            const allCards = document.querySelectorAll(".card")
            // aggiungo classi alla card
            const cardBody = document.querySelectorAll(".card-body")
            cardBody.forEach((body) => {
                body.className = "h-100 d-flex flex-column justify-content-between"
            })

            allCards.forEach((card, i) => {
                card.classList.add("h-100", "d-flex", "flex-column", "justify-content-between")
                const img = card.querySelector("img")
                img.src = foto.photos[i].src.medium

                //es:5) aggiorno il testo "9 mins"
                const IDText = card.querySelector(".text-muted")
                IDText.innerText = foto.photos[i].id
            })
            console.log("IMMAGINI DI TIGRI", foto)
        })
        .catch((err) => {
            console.log("ERRORE NEL CARICARE LE IMMAGINI", err)
        })
}

//es:3-4)
const changeEdit = function () {
    const buttonHide = document.querySelectorAll(".btn-group .btn-outline-secondary:last-child")
    // cambio il testo al bottone
    buttonHide.forEach((btn) => {
        btn.innerText = "Hide"

        // aggiungo un eventListener per rimuovere la card
        btn.addEventListener("click", () => {
            const card = btn.closest(".card")
            if (card) {
                card.remove()
            }
        })
    })

}
changeEdit()

//es:6)
const searchSection = document.getElementById("search-section")

const newCol = document.createElement("div")
newCol.className = "col col-12 col-md-8 col-lg-8"
newCol.innerHTML = `
 <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>


`
searchSection.appendChild(newCol)
