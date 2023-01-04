// ###################### menu navigation ######################

let htmlcol = document.getElementsByClassName("liste_nav");

let list2 = [...htmlcol];

const class_spe = ["accueil", "work", "lab", "who", "contact"];

function remove_class(element, className){
    element.classList.remove(className);
}

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
  
// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

list2.forEach((element, index) => {
    console.log(index)

    let bar = document.createElement("div");
    bar.classList.add("bar_overlay");
    bar.classList.add(class_spe[index]);
    element.appendChild(bar);

    element.addEventListener("mouseover", (e) => {
        
        if (element.children.length <= 1) { // Or just `if (element.childNodes.length)`
            console.log(element.children.length);
        }

    })

    element.addEventListener("click" , (e) => {
        list2.forEach((elm) => {
            remove_class(elm, "selected");
        });
        element.classList.add("selected");   


        list2.forEach((elm, index) => {
            elm.children[0].classList.remove("animation_forward");
            elm.children[0].children[0].classList.remove("animation_forward_img");
        });

        element.children[0].classList.add("animation_forward");
        element.children[0].children[0].classList.add("animation_forward_img");
    });
});


// ###################### auto change slected navigation ############  //! non faite car cest juste du graphisme
//#region 
// document.addEventListener("scroll", (event) => {
//     let ElmTitreContaint = document.getElementById("TitreContaint");
//     let ElmTitre = document.getElementById("Titre");
//     let Elmlabs = document.getElementById("labs");
//     let Elmwho = document.getElementById("who");
//     let Elmcontact = document.getElementById("contact");

//     let  arrayRect = [ElmTitreContaint,ElmTitre,Elmlabs,Elmwho,Elmcontact];


//     let actuelleSection;
//     arrayRect.forEach((element, index) => {

//         if (index != arrayRect.length-1) {
//             if (element.getBoundingClientRect().top <= 0) {
                
//                 list2.forEach((elm, index) => {
//                     elm.children[0].classList.remove("animation_forward");
//                     elm.children[0].children[0].classList.remove("animation_forward_img");
//                 });

//                 list2.forEach((elm) => {
                    
//                     if(elm.children[0].href.split("#")[1] === element.id){
//                         elm.children[0].classList.add("animation_forward");
//                         elm.children[0].children[0].classList.add("animation_forward_img");
//                     }
                    
//                 })
                
//             }
//         }else{

//         }
//     });

//     // console.log("titre", ElmTitreContaint.top, "travaux", ElmTitre.top, "lab", Elmlabs.top, "who", Elmwho.top,"who Taille ", -Elmwho.height / 2  ,"contact", Elmcontact.top);
// });
//#endregion


// ########################### lab's ###################################

let parentLabs = document.getElementById("galeryPhoto");
let ButtonElm = document.querySelectorAll(".galeryNav > a");

let button = [...ButtonElm];

const contenu3D = [{titre:"Sabre CyberPunk", image: "https://math-pixel.github.io/portfolio/image/sbre%20cyberpunk.png", link:""},{titre:"Usine", image: "https://math-pixel.github.io/portfolio/image/usine%20rendu.png", link:""},{titre:"Sabre Deamon Slayer", image: "https://math-pixel.github.io/portfolio/image/rengoku%20sword1.png", link:""}, {titre:"Maison Japonaise", image: "https://math-pixel.github.io/portfolio/image/japon%20blender3.png", link:""}];

const contenuPhoto = [{titre:"Drone", image: "./images/drone1.JPG", link:""},{titre:"Photoshop", image: "./images/constellation.png", link:""},{titre:"IA", image: "./images/ia1.png", link:""},{titre:"IA", image: "./images/ia2.png", link:""},{titre:"Photographie", image: "./images/moto.jpg", link:""},{titre:"Photographie", image: "./images/dos.jpg", link:""},{titre:"Photographie", image: "./images/voiture.JPG", link:""}];

const contenuCreation = [{titre:"3D Printer", image: "./images/3dprinter2.jpg", link:""},{titre:"Volet Automatique", image: "./images/volet.png", link:""},{titre:"Table de Mixage", image: "https://math-pixel.github.io/portfolio/image/tableMix.jpg", link:""},{titre:"Borne Arcade", image: "https://retropie.org.uk/wp-content/uploads/2016/04/Retropie_Splash.png", link:""}]

let arrayDisplay = [[...contenuCreation],[...contenu3D],[ ...contenuPhoto]];


function deleteChild(parent){
    parent.innerHTML = "";
}

function setCarrousel(index){
    deleteChild(parentLabs)

    //console.log(arrayDisplay[index])

    arrayDisplay[index].forEach((element) => {
    
        let container = document.createElement("div");
        container.classList.add("container_galery");
        container.style.backgroundImage = `url(${element.image})`;
        if (element.link !== "") {
            container.classList.add("clickable");
        }
    
        parentLabs.appendChild(container);
    
        let Title = document.createElement("h2");
        Title.classList.add("Title_galery");
        Title.innerHTML = element.titre;
    
        container.appendChild(Title);
    
    })
}



button.forEach((btn, index) => {
    console.log(btn)
    btn.addEventListener("click", () => {
        setCarrousel(index);

        button.forEach((btn2) =>{
            btn2.classList.remove("select");
        });
        btn.classList.add("select");
    });
});

setCarrousel(0);


// ################## Voir Plus #################

let contentVoirPlus = [
    {
        name:"Workshop",
        description:"Un premier Project effectuer en ecole qui consistait a travailler avec des graphistes. <br>L' Objectif etant de creer deux sites vitrines pour un festival avec la contrainte d' avoir une seule page HTML<br>Les deux sites devais avoir un styler etrange qui sorte de l'ordinaire",
        img1:"./images/paulWorkshop.png",
        titre1:"Site de Paul",
        paragraphe1:"Site realiser avec la colaboration de <a target=\"_blank\" href=\"https://readymag.com/u3810607477/4088804/\">Paul Figari</a> <br>Ici l'element principal est tourné vers l'oeuil en stopmotion et un theme un peu bleuatre avec des feuille.<br><a target=\"_blank\" href=\"https://math-pixel.github.io/workshop1/index.html?site=paul\">Lien du site</a>",
        img2:"./images/jeremyWorkshop.png",
        titre2:"Site de Jeremy",
        paragraphe2:"Site realiser avec la colaboration de <a target=\"_blank\" href=\"https://readymag.com/u3995653634/4056188/\">Jeremy Berthey</a> <br>Ici l'element principal est tourné vers le robot en stopmotion et un theme un peu blanchatre avec un contraste elever avec le orange.<br><a target=\"_blank\" href=\"https://math-pixel.github.io/workshop1/index.html?site=jeremy\">Lien du site</a>"        
    },{
        name:"Jeux Video (WEB)",
        description:"Jeux Video creé en HTML / CSS / JS, une direction artistique orienter illustration et un theme sur une taverne conviviale avec une ambiance sonore agreable<br>Le but : Retrouver la mascotte de la taverne qui ce cache derriere ces fut !",
        img1:"./images/cache-cache.png",
        titre1:"Interface de jeu",
        paragraphe1:"Le jeu possede plusieur niveaux et celon le niveau le nombre de click est limiter et la mascotte ce deplace aleatoirement toute les 2 secondes<br><a target=\"_blank\" href=\"https://math-pixel.github.io/taverne_game-web-/\">Lien du jeu</a>",
        img2:"",
        titre2:"",
        paragraphe2:""        
    },{
        name:"Volet Connecte",
        description:"Suite au renovation de notre coproprieter les anciens volet manuel ont été remplacé par des volets automatique avec telecommande<br>Donc pour commencer une partit d' un gros project qui est de creer une maison connecté soit même j'ai commencer a connecté mon volet a un ordinateur pour le controler a distance",
        img1:"./images/volet.png",
        titre1:"Hardware",
        paragraphe1:"Cette photo represente la partie Hardware ( electronique ) de mon volet<br>Il est constituer de trois elements <br>Un raspberry pi (RPI) qui sert dinterface entre le web ( le RPI est le serveur WEB ) et la telecommande,<br>Une plaque pcb qui sert de protection pour pouvoir piloter la telecommande sans cramer le RPI<br>Et la telecommande",
        img2:"./images/volet_ui.png",
        titre2:"Software",
        paragraphe2:"Voici les 3 ecrans de mon application pour mon volet, la premiere sert de \" home \" la deuxieme simule ma commande numeriquement avec une touche en plus qui dit au volet de sarreter a une certaine position ( millieu ), et la 3 eme interface c'est les heures programmables de mon volet pour q'uil souvre et ce ferme a des heures precises"        
    },{
        name:"Filmotheque",
        description:"Filmotheque collaborative creer lors d'un project final d'ecole. Une filmotheque est un site ou un endroit qui regroupe plusieur film et les tries pour pouvoir les retrouver et les harchivers",
        img1:"./images/filmotheque.PNG",
        titre1:"Page d'accueil",
        paragraphe1:"<a target=\"_blank\" href=\"https://math-pixel.github.io/Filmotheque/\">Lien du site</a>",
        img2:"./images/recherche.PNG",
        titre2:"Fonction de recherche",
        paragraphe2:"Parmis toutes les options du site une grosse fonction presente est la possibiliter de rechercher un film avec la bar de recherche ou avec un filtre près definie"        
    }
]

function open_project(nameSection){
    document.body.style.overflowY = "hidden";

    contentVoirPlus.forEach((element) => {
        if (element.name === nameSection) {
            // set content of section VoirPlus

            document.getElementById("titreVoirPlus").innerHTML = element.name;
            document.getElementById("description_voirPlus").innerHTML = element.description;
            document.getElementById("img_1").src = element.img1;
            document.getElementById("titre_project_VoirPlus1").innerHTML = element.titre1;
            document.getElementById("textDescription_VoirPlus1").innerHTML = element.paragraphe1;
            document.getElementById("img_2").src = element.img2;
            document.getElementById("titre_project_VoirPlus").innerHTML = element.titre2;
            document.getElementById("textDescription_VoirPlus").innerHTML = element.paragraphe2;

        }
    })
    

    document.getElementById("voirPlus").scrollTop = 0;
    document.getElementById("voirPlus").style.display = "block";
}

document.getElementById("cross").addEventListener( "click", (e) => {
    document.getElementById("voirPlus").style.display = "none";

    document.body.style.overflowY = "scroll";
})


// ################## mode mobile ###################

let menu_open = true;

document.getElementById("menu").addEventListener("click", (e) => {
    if (menu_open === true) {
        menu_open = false;
        document.getElementById("menu").style.backgroundImage = "url('./images/burger.png')";
        document.getElementById("menu").style.filter = "invert(1)";
        document.getElementById("navigation").style.display = "none";
        // enableScroll();
    }else{
        menu_open = true;
        document.getElementById("menu").style.backgroundImage = "url('./images/cross.png')";
        document.getElementById("menu").style.filter = "invert(0)";
        document.getElementById("navigation").style.display = "block";
        // disableScroll();
    }
});





// ################## start 


setTimeout(() => {
    document.getElementsByClassName("liste_nav")[0].classList.add("selected");
    document.getElementsByClassName("liste_nav")[0].children[0].classList.add("animation_forward");
}, 50);



//TODO faire les pages des voir plus des project principaux
//TODO rajouter la filmoteque  /!\ pas de iframe /!\ => link donc eberger le project sur github
//TODO refaire le text du qui suis je propre et /!\ SANS FAUTES /!\
//TODO mettre un cursor Onclick sur les element clickable => en css

//TODO nettoyer le github pour le referencement
//TODO ajouter une balise description et title propre referencement 


//TODO ( optionel ) ajouter un voir plus sur les element du labs
//TODO ( optionel ) utiliser getboncingrect() pour changer dans la nav 