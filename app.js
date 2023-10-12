let apresentation = "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/b9470f369c925f8d28e3baeb/webm_page_bg_portuguese.webm?t=1696637517"

let games = [
    {
        name: "overwatch 2",
        price: 60,
        main: true,
        promo: {
            type: true,
            value: 10,
        },
        images: {
            src1: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2022/10/OW2-be9287b234afbe7898ac.jpg",
            src2: "https://assets1.ignimgs.com/2019/09/06/nintendoswitch-overwatchlegendaryedition-screenshot05-1567796447891.png",
            src3: "https://www.gamersegames.com.br/wp-content/uploads/2023/05/Overwatch-2-Mes-do-Orgulho-2023-1.jpg",
            src4: "https://i.ytimg.com/vi/O161-WNZBP4/maxresdefault.jpg",
            src5: "https://acmi-website-media-prod.s3.ap-southeast-2.amazonaws.com/media/images/overwatch-characters-short-stories-ACMI.original.jpg",
        }
    },
    {
        name: "forza motorsport",
        price: 199,
        main: true,
        promo: {
            type: true,
            value: 20,
        },
        images: {
            src1: "https://t2.tudocdn.net/671739?w=1920",
            src2: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_aca0e1a161467bcf91d3c320430509b3a85f9e09.600x338.jpg?t=1696978409",
            src3: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_dbcbbb8f3bea80667224c95fc70a69f9894e86fb.600x338.jpg?t=1696978409",
            src4: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_fd78b7798a8bc66f554da67f756d26e13727d3a8.600x338.jpg?t=1696978409",
            src5: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_794544aa55532dbb6b34ae2e67b487009622fb2d.600x338.jpg?t=1696978409",
        }
    },
    {
        name: "new world",
        price: 79,
        main: true,
        promo: {
            type: true,
            value: 65,
        },
        images: {
            src1: "https://images.ctfassets.net/j95d1p8hsuun/29peK2k7Ic6FsPAVjHWs8W/06d3add40b23b20bbff215f6979267e8/NW_OPENGRAPH_1200x630.jpg",
            src2: "https://recreio.uol.com.br/media/_versions/legacy/2021/09/29/new-word-jogo-reune-mais-de-700-mil-jogadores-simultaneos-em-seu-primeiro-dia-1232097_widexl.jpg",
            src3: "https://files.tecnoblog.net/wp-content/uploads/2021/07/new-world-2.jpg",
            src4: "https://cdn.dfg.com.br/itemimages/921555906-conta-new-word-lvl60-devaloka-1H5P.webp",
            src5: "https://cdn.akamai.steamstatic.com/steam/apps/1063730/ss_75c46de3e645b812b2750cf8f619fd9dfae2ba69.1920x1080.jpg?t=1695753023",
        }
    },
]

//Variáveis dos elementos
let videoApresentation = document.querySelectorAll('.apresentation video')[0]
// console.log(apresentation);

let mainImg = document.querySelectorAll('.recommended img')
let recommended = document.querySelectorAll('.recommended')[0]
let nextBtn = document.querySelectorAll('.next')[0]
let backBtn = document.querySelectorAll('.back')[0]


let slideCount = 0

//Eventos 

nextBtn.addEventListener('click', slideNext)
backBtn.addEventListener('click', slideBack)




//Functions
function slideNext() {
    let cardsMain = document.querySelectorAll('.card-recommended')
    let spanCount = document.querySelectorAll('.count-main span')
    slideCount += 1
    if (slideCount == cardsMain.length) {
        slideCount = 0
    }
    for (let i = 0; i < cardsMain.length; i++) {
        if (i == slideCount) {
            cardsMain[i].style.display = 'flex'
            spanCount[i].style.background = "#999"
        } else {
            cardsMain[i].style.display = 'none'
            spanCount[i].style.background = ""
        }
    }
}

function slideBack() {
    let cardsMain = document.querySelectorAll('.card-recommended')
    let spanCount = document.querySelectorAll('.count-main span')
    slideCount -= 1
    if (slideCount < 0) {
        slideCount = cardsMain.length - 1
    }
    for (let i = 0; i < cardsMain.length; i++) {
        if (i == slideCount) {
            cardsMain[i].style.display = 'flex'
            spanCount[i].style.background = "#999"
        } else {
            cardsMain[i].style.display = 'none'
            spanCount[i].style.background = ""
        }
    }
}

function createData() {
    videoApresentation.src = `${apresentation}`

    let gamesMain = games.filter(element =>{
        return element.main == true
    })
    gamesMain.forEach(element => {
        let newSpanCount = document.createElement('span')
        document.querySelectorAll('.count-main')[0].appendChild(newSpanCount)
        let newCard = document.createElement('div')
        newCard.classList = "card-recommended"
        newCard.innerHTML = `
            <div class="recommended-image">
                <img src="${element.images.src1}" alt="">
            </div>
            <div class="recommended-data">
                <h2>${element.name}</h2>
                <div class="mini-image">
                    <img src="${element.images.src2}" alt="">
                    <img src="${element.images.src3}" alt="">
                    <img src="${element.images.src4}" alt="">
                    <img src="${element.images.src5}" alt="">
                </div>
                <div class="labels">
                    <p>Já disponível</p>
                    <label>Popular</label>
                </div>
                <div class="recommended-price">
                ${element.promo.type == true && element.promo.value > 0 ? 
                    `
                    <div class="promo">
                        <p id="promoPerc">${element.promo.value}%</p>
                        <div class="price">
                            <p class="price-old">R$ ${element.price.toFixed(2)}</p>
                            <p id="price-end">R$ ${(element.price - element.promo.value).toFixed(2)}</p>
                        </div>
                    </div>` : `<p>R$ ${element.price.toFixed(2)}</p>`
                }
                
                    <span>
                        <i class="fa-brands fa-windows"></i>
                        <i class="fa-brands fa-apple"></i>
                        <i class="fa-brands fa-steam"></i>
                    </span>
                </div>
            </div>
        `
        recommended.appendChild(newCard)
    });

    let cardsMain = document.querySelectorAll('.card-recommended')
    let spanCount = document.querySelectorAll('.count-main span')
    cardsMain[slideCount].style.display = 'flex'
    spanCount[slideCount].style.background = "#999"

}

createData()