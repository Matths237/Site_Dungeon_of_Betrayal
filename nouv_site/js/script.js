var bosses = {
    "araignee": {
        "title": "Araignée, Souveraine de la Forêt Noire",
        "image": "../images/cartes_boss/araignee.png",
        "description": "L'Araignée règne sur les sombres et humides profondeurs de la Forêt Noire du Royaume des Ténèbres. Elle tisse des toiles impossibles à voir, où se perdent ceux qui s'y aventurent.<br><br>Entrave Fatale : Lorsqu’elle capture sa victime dans sa toile, elle l'a prive de toute liberté de mouvement. Mais après s'être assez débattu, sa victime peut s'échapper. Cependant, son déplacement sera amoindri à cause des résidus de ces chaînes collantes."
    },
    "dragon": {
        "title": "Dragon de Feu, Souverain des Montagnes Incandescentes",
        "image": "../images/cartes_boss/dragon_de_feu.png",
        "description": "Le Dragon de Feu est une créature dévastatrice, capable de réduire toute chose en cendres. Il règne sur les cimes volcaniques du Royaume des Ténèbres, où le sol brûle sous ses griffes acérées et où l'air est saturé de soufre.<br><br>Flamme Infernale : Chaque pas devient un supplice, ravivant les brûlures et consumant lentement la chaire de ses victimes les forçant à faire face à une douleur continue, réduisant lentement toute résistance en cendres."
    },
    "kraken": {
        "title": "Kraken, Souverain des Profondeurs Abyssales",
        "image": "../images/cartes_boss/kraken.png",
        "description": "Le Kraken garde les abysses du Royaume des Ténèbres avec une rage insondable. Il règne sur des cités englouties et ses cris résonnent comme un appel funeste dans l'eau glaciale.<br><br>Étreinte Abyssale : Ses tentacules titanesques émergent des flots sombres pour dérober les personnes un peu trop curieuses. Gardien des profondeurs, il s’empare de leurs précieuses possessions pour les ajouter à son incommensurable trésor englouti."
    },
    "squelette": {
        "title": "Squelette Géant, Souverain des Terres Dévastées",
        "image": "../images/cartes_boss/squelette_géant.png",
        "description": "Ce colosse d’ossements erre dans les terres désolées du Royaume des Ténèbres, vestige d’un empire oublié. Maudit pour l’éternité, il attend dans les ruines que de nouvelles âmes viennent alimenter son armée.<br><br>Assaut Spectral : D’un geste funeste, il invoque l’un de ses serviteurs pour traquer et abattre sa proie. Vaincre ces créatures ne rapporte rien car seul leur âme est en jeu, condamnée à errer sous son commandement."
    }
};

var bossKeys = Object.keys(bosses);
var currentBossIndex = 0;

function updateBoss(index) {
    var boss = bosses[bossKeys[index]];
    document.getElementById("card-title").innerHTML = boss.title;
    document.getElementById("card-image").src = boss.image;
    document.getElementById("card-description").innerHTML = boss.description;
}

document.getElementById("prev-boss").addEventListener("click", function() {
    currentBossIndex = (currentBossIndex - 1 + bossKeys.length) % bossKeys.length;
    updateBoss(currentBossIndex);
});

document.getElementById("next-boss").addEventListener("click", function() {
    currentBossIndex = (currentBossIndex + 1) % bossKeys.length;
    updateBoss(currentBossIndex);
});

var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    loop: true,
    flipEffect: {
        slideShadows: false, 
        limitRotation: true 
    }
});