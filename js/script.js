carte = [
    {
        titre:"sushi",
        quantity:"6",
        plats:[
            {
                name: "Makis thon",
                path: "./image/food/MAKI-THON-SPICY.png",
                prix: 8,
                unite: 6,
            },
            {
                name: "Makis crabe mayonnaise",
                path: "./image/food/MAKI-CRABE-MAYO.png",
                prix: 7,
                unite: 6,
            },
            {
                name: "Makis saumon avocat",
                path: "./image/food/MAKIS-SAUMON-AVOCAT.png",
                prix: 8,
                unite: 6,
            },
            {
                name: "Makis tomate basilic huile d'olive",
                path: "./image/food/TOMATE-BASILIC-HUILE-DOLIVE.png",
                prix: 9,
                unite: 6,
            }
        ]
    },
    {
        titre:"Nigiri",
        quantity:"6",
        plats:[
            {
                name: "Nigiri thon",
                path: "./image/food/NIGIRI-THON.png",
                prix: 6,
                unite: 6,
            },
            {
                name: "Nigiri saumon",
                path: "./image/food/NIGIRI-SAUMON.png",
                prix: 6,
                unite: 6,
            },
            {
                name: "Nigiri daurade citron",
                path: "./image/food/NIGIRI-DAURADE_CITRON_CIBOULETTE.png",
                prix: 8,
                unite: 6,
            },
            {
                name: "Nigiri avocat fromage",
                path: "./image/food/NIGIRI-AVOCAT-FROMAGE_SESAME.png",
                prix: 7,
                unite: 6,
            }
        ]
    },
    {

        titre:"Poke",
        quantity:"1",
        plats:[
            {
                name: "Poke poulet croustillant",
                path: "./image/food/poke_poulet_croustillant.png",
                prix: 14,
                unite: 1,
            },
            {
                name: "Poke-vege",
                path: "./image/food/poke-vege.png",
                prix: 13,
                unite: 1,
            },
            {
                name: "Poke saumon",
                path: "./image/food/poke-saumon.png",
                prix: 15,
                unite: 1,
            },
            {
                name: "Poke daurade",
                path: "./image/food/POKE-DAURADE.png",
                prix: 17,
                unite: 1,
            }
        ]
    }
]

platHtml = document.querySelector(".sectionPlat .platContainer")



carte.forEach(section => {
    platHtml.innerHTML += `<div id="${section.titre}" class="${section.titre} platSection"></div>`
    platType = document.querySelector(`.${section.titre}`)
    platType.innerHTML += `<div class="sectionTitre">
                                <h3>${section.titre}</h3> 
                                <p class="unite"> par ${section.quantity}</p>
                            <div>`

    platType.innerHTML += `<div class="${section.titre}Flex flexSection"></div>`
    flexContainer = document.querySelector(`.${section.titre}Flex`)
    console.log(flexContainer)
    section.plats.forEach(plat => {
        flexContainer.innerHTML += `
        <div class="foodCard">
            <img src="${plat.path}" alt="${plat.name}">
            <div class="name">
                <p>${plat.name}</p>
            </div>
            <span>
                <p class="prix">${plat.prix} €</p>
            </span>
        </div>`
    })
});