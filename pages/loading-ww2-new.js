const mapNames = {
    "lmx_ardennes": "Trifigniac-les-choux, Ardennes, France",
    "lmx_sud": "Maratea, Potenza, Italie",
    "lmx_sudfrforma": "Centre de formation, Moissac, France",
    "lmx_falaise_v2g": "Falaise, Normandie, France",
}

const mapImages = {
    "lmx_ardennes": [
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086380203602878494/20221005191702_1.jpg?ex=66c84328&is=66c6f1a8&hm=da8b23fb1f51a3d5de8491a85ab4c40140fca30c7a7dca6b6ec3fb92ea8aba57&",
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086380205771329716/20221005191550_1.jpg?ex=66c84329&is=66c6f1a9&hm=3e3e41e1e3d86a42b1d92d9afac494fa847ae857802eff093fa0451e566447df&",
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086380205444177920/20221005191508_1.jpg?ex=66c84328&is=66c6f1a8&hm=3f422c858549aa33a93573bfee195a562557eee1cf1c30d5a2681eb9991342dc&",
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086379763360333914/20220718163719_1.jpg?ex=66c842bf&is=66c6f13f&hm=3cb9cf99b17659eb1d50d1bbcd13c207d06c713544c61fcdd30a41ac130af617&",
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086379646041473094/20220718163240_1.jpg?ex=66c842a3&is=66c6f123&hm=7fdfa69fe3d4b2b147b9db015f25a310860b54b3a4b4125cfb5e9a6c7f72ac07&",
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086379646356049970/20220718163322_1.jpg?ex=66c842a3&is=66c6f123&hm=491ebed1b3cb49cce1e329e3be64573154b0849861c09db6b02cffa6038b957d&",
        "https://cdn.discordapp.com/attachments/986972239205392435/998615830143172688/20220718163340_1.jpg?ex=66c80537&is=66c6b3b7&hm=a1c2f7ccb8a0ac30724d08c7b2538809ee9b5cb91838d790269430ddd1658c7f&",
    ],
    "lmx_sud": [
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086380369198186616/20230211230457_1.jpg?ex=66c8434f&is=66c6f1cf&hm=a55422e3bc80b439e882d69fe400db7cef762e9ca63db9a732dc205048191a30&",
        "https://cdn.discordapp.com/attachments/1086377446942712008/1226567076559192095/image.png?ex=66c80ddb&is=66c6bc5b&hm=b278bb93804d7dd505860ed5010fd42930a6852b29beecae3c5650fd7bcdea88&",
    ],
    "lmx_sudfrforma": [
        "https://cdn.discordapp.com/attachments/1086377446942712008/1086380369198186616/20230211230457_1.jpg?ex=66c8434f&is=66c6f1cf&hm=a55422e3bc80b439e882d69fe400db7cef762e9ca63db9a732dc205048191a30&",
        "https://cdn.discordapp.com/attachments/1086377446942712008/1226567076559192095/image.png?ex=66c80ddb&is=66c6bc5b&hm=b278bb93804d7dd505860ed5010fd42930a6852b29beecae3c5650fd7bcdea88&",
    ],
    "lmx_falaise_v2g": [
        "https://cdn.discordapp.com/attachments/693932585360949331/817766727927726090/1.png?ex=66c7f4dd&is=66c6a35d&hm=e8db0acab92e41de2a8c8051086cc3f330ab4cf89db520ba10468d683970cd1a&",
        "https://cdn.discordapp.com/attachments/988825338073214976/1144321519615492168/image.png?ex=66c8c5f6&is=66c77476&hm=42ac358ddeac54da726b42cc3bd5577fae3ad539d0e2fbe20cd5753727d9651d&",
    ]
}

const advices = [
    "N'oubliez pas de faire le plein de carburant !",
    "Conduire nécessite une formation !",
    "Faites attention au tireurs d'élite soviétiques, ils sont sans pitié et ne vous laisseront pas les repérer!",
    "Les blindés constituent un soutien à l'infanterie, protégez les et ils vous protégeront !",
    "Un char demande un équipage complet pour fonctionner de manière efficace.",
    "Restez à couvert lors d'un échange de tirs, le génie laisse des sacs de sables, ceux-ci ne servent pas de décorations !",
    "Il ne faut pas un tank pour détruire un tank, les canons anti-char et les fusils sans-recul peuvent faire l'affaire.",
    "Tirer debout ne présente que des défauts, manque de stabilité, de précision et de couverture !",
    "Votre vie dépend dépend de vos actions, de votre discipline et de votre couverture!",
    "Pensez à tirer le bon obus selon votre cible, Hautement Explosif pour l'infanterie, Perce-Armure pour les blindés.",
    "La ruse est importante au combat, elle peut vous sauver la mise !",
    "Vous n'êtes pas né ranger, jager ou troupe de choc... Votre fusil ne vous permet pas la capture d'un avant-poste à vous tout seul.",
    "Les promotions se méritent, elles ne se comptent pas à la montre, certains mènent une 'carrière' de caporal.",
    "Attaqué par une de ces saloperies de Stuka ? Utilisez le matériel antiaérien ou demandez à votre supérieur de faire son boulot.",
    "Vous rêvez de survoler les champs de bataille et de faire des massacres ? Engagez-vous dans l'armée de l'air !",
    "La patience est importante ! Elle joue beaucoup sur le moral des troupes !",
    "La composante principale d'une armée est la discipline!",
    "Votre arme est tout pour vous, ne la perdez jamais et entretenez-là !",
    "Si vous êtes officier, savoir tirer et connaître son arme par cœur ne sera plus si important, le plus important est la stratégie utilisée sur le front !",
    "Si vous voyez Ernest, fuyez !",
    "Une guerre ne doit jamais être équilibrée et c'est a vous de la déséquilibrer à votre avantage.",
    "Ernest Mann est un sous-officier assez spécial, vous êtes prévenu !",
    "Être tireur d'élite n'est pas une simple tâche, cela dépend de pour qui vous vous battez.",
    "Si vous êtes seul armé d’une pelle face à un char, courez, courez vite et très loin.",
    "La haine peut vous emmener très loin dans les rangs d'une armée fanatisée !",
    "L'armée compte sur vous, et pas l'inverse."
]

function getRandomInt( max ) {
    return Math.floor( Math.random() * max );
}

function getMapName( mapname ) {
    if ( !mapNames[mapname] ) return mapname;

    return mapNames[mapname];
}

function getMapImage( mapname ) {
    const images = mapImages[mapname]
    if ( !images ) return "https://cdn.discordapp.com/attachments/988825338073214976/988825493690269736/logo_military_rp_02.png?ex=66c8a881&is=66c75701&hm=d434aa424acc3b989113038db3b28b357bcb346257a8797d6caf6530cec06258&";

    return images[getRandomInt(images.length)];
}

function getAdvice() {
    return advices[getRandomInt(advices.length - 1)];
}

function CreatePicture( imageUrl, adviceText ) {
    const picture = document.createElement( "div" )
    picture.className = "picture";
    picture.style.backgroundImage = 'url("' + imageUrl + '")';

    picture.style.top = "" + (40 + getRandomInt(15)).toString() + "%";
    picture.style.left = "" + (30 + getRandomInt(15)).toString() + "%";
    picture.style.transform = "translate(-50%, -50%) rotate(" + (-8 + getRandomInt(16)).toString() + "deg)";

    const advice = document.createElement( "span" )
    advice.className = "advice";
    advice.innerHTML = adviceText;

    picture.appendChild( advice );

    document.body.appendChild( picture );
}

function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode, volume, language ) {
    const textMapName = document.getElementById( "text-map-name" );
    textMapName.innerHTML = getMapName( mapname );

    var lastImage = getMapImage( mapname );
    var lastAdvice = getAdvice()

    CreatePicture( lastImage, lastAdvice );

    setInterval( () => {
        var image = getMapImage( mapname );
        while ( image == lastImage ) image = getMapImage( mapname );
        
        var advice = getAdvice( mapname );
        while ( advice == lastAdvice ) advice = getAdvice();
        
        CreatePicture( image, advice );

        lastImage = image;
        lastAdvice = advice;
    }, 10000 );
}

function SetFilesTotal( total ) {}

function DownloadingFile( fileName ) {}

function SetStatusChanged( status ) {}

function SetFilesNeeded( needed ) {}

// setTimeout( () => {
//     GameDetails( "Les Maréchaux", "liqjdzdqzd", "lmx_falaise_v2g", 32, "STEAMIDIDID", "lmx_military", 0.5, "fr" );
// }, 1000 );