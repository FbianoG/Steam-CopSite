let games = [
    {
        name: "overwatch 2", //nome do jogo
        price: 60, //preço real do jogo
        main: true, //diz se o jogo está em destaque
        promo: {
            type: false, //diz se o jogo está em promoção
            value: 10, //porcentagem do desconto da promoção
        },
        images: {
            src1: "https://s2-techtudo.glbimg.com/sCGxN12LSMP9G3jXrdscsxoaQt4=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/S/e/cEKYJgSsKInPi4bg6LqA/intro.jpg", //imagem principal do jogo
            src2: "https://assets1.ignimgs.com/2019/09/06/nintendoswitch-overwatchlegendaryedition-screenshot05-1567796447891.png", //imagem secundária do jogo
            src3: "https://www.gamersegames.com.br/wp-content/uploads/2023/05/Overwatch-2-Mes-do-Orgulho-2023-1.jpg", //imagem secundária do jogo
            src4: "https://i.ytimg.com/vi/O161-WNZBP4/maxresdefault.jpg", //imagem secundária do jogo
            src5: "https://acmi-website-media-prod.s3.ap-southeast-2.amazonaws.com/media/images/overwatch-characters-short-stories-ACMI.original.jpg", //imagem secundária do jogo
        }
    },
    {
        name: "forza motorsport",
        price: 199,
        main: true,
        promo: {
            type: true,
            value: 25,
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
        name: "minicraft",
        price: 59,
        main: true,
        promo: {
            type: true,
            value: 50,
        },
        images: {
            src1: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70070000016597/4dc8ab1f09ced6fb2953b2caedd978c1f23df33b62305bcf3140308962073d57",
            src2: "https://img.olhardigital.com.br/wp-content/uploads/2022/12/minecraft-3.jpg",
            src3: "https://t2.tudocdn.net/567964?w=1920",
            src4: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/12/16/1331835109442_2/sua-imagina%C3%A7%C3%A3o-%C3%A9-o-limite.png",
            src5: "https://img-4.linternaute.com/cw-e0GCWnfHXM0GzcpPvQa2Uv3U=/1500x/smart/7416fed8d73a4d80858542654cda9573/ccmcms-linternaute/43511227.png",
        }
    },
    {
        name: "new world",
        price: 79,
        main: true,
        promo: {
            type: false,
            value: 65,
        },
        images: {
            src1: "https://images.ctfassets.net/j95d1p8hsuun/29peK2k7Ic6FsPAVjHWs8W/06d3add40b23b20bbff215f6979267e8/NW_OPENGRAPH_1200x630.jpg",
            src2: "https://recreio.uol.com.br/media/_versions/legacy/2021/09/29/new-word-jogo-reune-mais-de-700-mil-jogadores-simultaneos-em-seu-primeiro-dia-1232097_widexl.jpg",
            src3: "https://files.tecnoblog.net/wp-content/uploads/2021/07/new-world-2.jpg",
            src4: "https://cdn.akamai.steamstatic.com/steam/apps/1063730/ss_fa5a3ac4b5fea25db4b50adbdbcb2ae4e838b3ff.1920x1080.jpg?t=1695753023",
            src5: "https://s2-techtudo.glbimg.com/ToDKegZNN7XWffCG7l2raI1fO8k=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/o/Z/SNQLe0RFKmlCyz63b7fA/ss12.jpg",
        }
    },
]



//Variáveis
let videoUrl = "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/b9470f369c925f8d28e3baeb/webm_page_bg_portuguese.webm?t=1696637517"
let videoApresentation = document.querySelectorAll('.apresentation video')[0]
let mainImg = document.querySelectorAll('.recommended img')
let highList = document.querySelectorAll('.highlights-list')[0]
let nextBtn = document.querySelectorAll('.next')[0]
let backBtn = document.querySelectorAll('.back')[0]
let slideCount = 0 //variável para manipular rolagem das imagens em destaque e os "spans"



//Eventos 
nextBtn.addEventListener('click', slideNext) //evento para passar o jogo em destaque
backBtn.addEventListener('click', slideBack) //evento para voltar o jogo em destaque



//Functions
function slideNext() { //function para alterar o jogo em destaque
    let highCard = document.querySelectorAll('.highlights-card')
    let spanCount = document.querySelectorAll('.highlights-slide-count span')
    slideCount += 1
    if (slideCount == highCard.length) {
        slideCount = 0
    }
    for (let i = 0; i < highCard.length; i++) {
        if (i == slideCount) {
            highCard[i].style.display = 'flex'
            spanCount[i].style.background = "#999"
        } else {
            highCard[i].style.display = 'none'
            spanCount[i].style.background = ""
        }
    }

}

function slideBack() { //function para alterar o jogo em destaque
    let highCard = document.querySelectorAll('.highlights-card')
    let spanCount = document.querySelectorAll('.highlights-slide-count span')
    slideCount -= 1
    if (slideCount < 0) {
        slideCount = highCard.length - 1
    }
    for (let i = 0; i < highCard.length; i++) {
        if (i == slideCount) {
            highCard[i].style.display = 'flex'
            spanCount[i].style.background = "#999"
        } else {
            highCard[i].style.display = 'none'
            spanCount[i].style.background = ""
        }
    }
}

function createData() {
    videoApresentation.src = videoUrl //manipular vídeo de apresentação
    let gamesMain = games.filter(element => { //filtra [{games}] e retorna todos os jogos que {"main:" "true"}
        return element.main == true
    })
    gamesMain.forEach(element => { //cria dinamicamente os elementos do [{gamesMain}]
        let newSpanCount = document.createElement('span')
        document.querySelectorAll('.highlights-slide-count')[0].appendChild(newSpanCount)
        let newCard = document.createElement('div')
        newCard.classList = "highlights-card"
        newCard.innerHTML = `
            <div class="highlights-card-image">
                <img src="${element.images.src1}" alt="">
            </div>
            <div class="highlights-card-data">
                <h2>${element.name}</h2>
                <div class="highlights-card-data-images">
                    <img src="${element.images.src2}" alt="">
                    <img src="${element.images.src3}" alt="">
                    <img src="${element.images.src4}" alt="">
                    <img src="${element.images.src5}" alt="">
                </div>
                <div class="highlights-card-data-labels">
                    <p>Já disponível</p>
                    <label>Popular</label>
                </div>
                <div class="highlights-card-data-price">
                    ${element.promo.type == true && element.promo.value > 0 ? //operador ternário para verificar se o jogo está ou não em promoção // faz o cálculo (preçoReal - (preçoReal * (desconto / 100)))
                `
                        <div class="highlights-card-data-price-promo">
                            <p id="promoPerc">${element.promo.value}%</p>
                            <div class="highlights-card-data-price-promo-price">
                                <p class="price-old">R$ ${element.price.toFixed(2)}</p>
                                <p id="price-end">R$ ${(element.price -(element.price * (element.promo.value / 100))).toFixed(2)}</p> 
                            </div>
                        </div>` : `<p>R$ ${element.price.toFixed(2)}</p>
                        `
            }              
                    <span>
                        <i class="fa-brands fa-windows"></i>
                        <i class="fa-brands fa-apple"></i>
                        <i class="fa-brands fa-steam"></i>
                    </span>
                </div>
            </div>
        `
        highList.appendChild(newCard)
    });
    let highCard = document.querySelectorAll('.highlights-card')
    let spanCount = document.querySelectorAll('.highlights-slide-count span')
    highCard[slideCount].style.display = 'flex' //display=none nos jogos subsequente ao index "slideCount"
    spanCount[slideCount].style.background = "#999" //muda a cor do "span[0]"

    showImgHoverMain()
}


function showImgHoverMain() {
    let miniImg = document.querySelectorAll('.highlights-card-data-images img')
    miniImg.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let imgFather = element.parentElement.parentElement.parentElement
            let imgMain = imgFather.querySelector('.highlights-card-image img')
            let imgMainTemp = imgMain.src
            imgMain.src = element.src
            element.addEventListener('mouseleave', ()=>{
                imgMain.src = imgMainTemp
            })
        })
    });

}



// Chamadas
createData() //chama a função para filtrar e criar dinamicamente os elementos