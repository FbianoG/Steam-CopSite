let apresentation = "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/b9470f369c925f8d28e3baeb/webm_page_bg_portuguese.webm?t=1696637517"

let games = [
    {
        name: "overwatch",
        price: 205,
        main: true,
        promo: {
            type: false,
            value: "",
        },
        images: {
            src1: "https://t.ctcdn.com.br/QEMQB0SRj1GIivNRlAbl5nln3r8=/1920x1080/smart/i601661.png",
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
            type: false,
            value: "",
        },
        images: {
            src1: "https://t2.tudocdn.net/671739?w=1920",
            src2: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_aca0e1a161467bcf91d3c320430509b3a85f9e09.600x338.jpg?t=1696978409",
            src3: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_dbcbbb8f3bea80667224c95fc70a69f9894e86fb.600x338.jpg?t=1696978409",
            src4: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_fd78b7798a8bc66f554da67f756d26e13727d3a8.600x338.jpg?t=1696978409",
            src5: "https://cdn.akamai.steamstatic.com/steam/apps/2440510/ss_794544aa55532dbb6b34ae2e67b487009622fb2d.600x338.jpg?t=1696978409",
        }
    }
]

//Variáveis dos elementos
let videoApresentation = document.querySelectorAll('.apresentation video')[0]
console.log(apresentation);

let mainImg = document.querySelectorAll('.recomendados img')


function createData() {
    if (apresentation) {
        videoApresentation.src = `${apresentation}`
    }
    mainImg[0].src = games[1].images.src1 
    mainImg[1].src = games[1].images.src2 
    mainImg[2].src = games[1].images.src3 
    mainImg[3].src = games[1].images.src4 
    mainImg[4].src = games[1].images.src5 

}

createData()