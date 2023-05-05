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

let previousValue;
document.addEventListener("scroll", (event) => {
    let ElmTitreContaint = document.getElementById("TitreContaint");
    let ElmTitre = document.getElementById("Titre");
    let Elmlabs = document.getElementById("labs");
    let Elmwho = document.getElementById("who");
    let Elmcontact = document.getElementById("contact");

    let  arrayRect = [ElmTitreContaint,ElmTitre,Elmlabs,Elmwho,Elmcontact];

    // console.log(document.documentElement.scrollTop)
    // console.log("boncing travaux :" , ElmTitre.getBoundingClientRect())

    arrayRect.forEach((element,index) => {

        if (element.getBoundingClientRect().top < 100 && element.getBoundingClientRect().top > -50) {
            if (element.id !== previousValue) {
                previousValue = element.id
                list2.forEach((e) => {
                    // console.log(element.id)
                    remove_class(e, "selected");

                    
                    e.children[0].classList.remove("animation_forward");
                    e.children[0].children[0].classList.remove("animation_forward_img");

                    if (e.firstChild.href.split("#")[1] === element.id) {
                        e.classList.add("selected");  
                        e.children[0].classList.add("animation_forward");
                        e.children[0].children[0].classList.add("animation_forward_img");
                    }

                }) 
            } 
        }

    })


    // let actuelleSection;
    // arrayRect.forEach((element, index) => {

    //     if (index != arrayRect.length-1) {
    //         if (element.getBoundingClientRect().top <= 0) {
                
    //             list2.forEach((elm, index) => {
    //                 elm.children[0].classList.remove("animation_forward");
    //                 elm.children[0].children[0].classList.remove("animation_forward_img");
    //             });

    //             list2.forEach((elm) => {
                    
    //                 if(elm.children[0].href.split("#")[1] === element.id){
    //                     elm.children[0].classList.add("animation_forward");
    //                     elm.children[0].children[0].classList.add("animation_forward_img");
    //                 }
                    
    //             })
                
    //         }
    //     }else{

    //     }
    // });

    // console.log("titre", ElmTitreContaint.top, "travaux", ElmTitre.top, "lab", Elmlabs.top, "who", Elmwho.top,"who Taille ", -Elmwho.height / 2  ,"contact", Elmcontact.top);
});
//#endregion


// ########################### lab's ###################################

let parentLabs = document.getElementById("galeryPhoto");
let ButtonElm = document.querySelectorAll(".galeryNav > a");

let button = [...ButtonElm];

const contenu3D = [{titre:"Sabre CyberPunk", image: "https://math-pixel.github.io/portfolio/image/sbre%20cyberpunk.png", link:""},{titre:"Usine", image: "https://math-pixel.github.io/portfolio/image/usine%20rendu.png", link:""},{titre:"Sabre Deamon Slayer", image: "https://math-pixel.github.io/portfolio/image/rengoku%20sword1.png", link:""}, {titre:"Maison Japonaise", image: "https://math-pixel.github.io/portfolio/image/japon%20blender3.png", link:""}];

const contenuPhoto = [{titre:"Drone", image: "./images/drone1.JPG", link:""},{titre:"Photographie", image: "./images/voiture.JPG", link:""},{titre:"Drone", image: "./images/drone2.jpg", link:""},{titre:"Drone", image: "./images/drone3.jpg", link:""},{titre:"Photographie", image: "./images/moto.jpg", link:""},{titre:"Photographie", image: "./images/dos.JPG", link:""}];

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
        description:"Un premier Projet effectué en école qui consistait à travailler avec des graphistes. <br>L' Objectif étant de créer deux sites vitrines pour un festival avec la contrainte d' avoir une seule page HTML<br>Les deux sites devais avoir un style étrange qui sorte de l'ordinaire",
        img1:"./images/paulWorkshop.PNG",
        titre1:"Site de Paul",
        paragraphe1:"Site realiser avec la colaboration de <a target=\"_blank\" href=\"https://readymag.com/u3810607477/4088804/\">Paul Figari</a> <br>Ici l'element principal est tourné vers l'oeuil en stopmotion et un theme un peu bleuatre avec des feuille.<br><a target=\"_blank\" href=\"https://math-pixel.github.io/workshop1/index.html?site=paul\">Lien du site</a>",
        img2:"./images/jeremyWorkshop.PNG",
        titre2:"Site de Jeremy",
        paragraphe2:"Site realiser avec la colaboration de <a target=\"_blank\" href=\"https://readymag.com/u3995653634/4056188/\">Jeremy Berthey</a> <br>Ici l'element principal est tourné vers le robot en stopmotion et un theme un peu blanchatre avec un contraste elever avec le orange.<br><a target=\"_blank\" href=\"https://math-pixel.github.io/workshop1/index.html?site=jeremy\">Lien du site</a>"        
    },{
        name:"Jeux Video (WEB)",
        description:"Jeux Vidéo créé en HTML / CSS / JS, une direction artistique orientée illustration et un thème sur une taverne conviviale avec une ambiance sonore agréable<br>Le but : Retrouver la mascotte de la taverne qui se cache derrière ces fûts !",
        img1:"./images/cache-cache.PNG",
        titre1:"Interface de jeu",
        paragraphe1:"Le jeu possede plusieur niveaux et selon le niveau le nombre de clics est limitée et la mascotte se déplace aléatoirement toute les 2 secondes<br><a target=\"_blank\" href=\"https://math-pixel.github.io/taverne_game-web-/\">Lien du jeu</a>",
        img2:"",
        titre2:"",
        paragraphe2:""        
    },{
        name:"Volet Connecte",
        description:"Suite au renovation de notre copropriété les anciens volet manuel ont été remplacé par des volets automatique avec télécommande<br>Donc pour commencer une partie d' un gros projet qui est de créer une maison connecté soit même j'ai commencer a connecté mon volet à un ordinateur pour le contrôler à distance",
        img1:"./images/volet.png",
        titre1:"Hardware",
        paragraphe1:"Cette photo représente la partie Hardware ( electronique ) de mon volet<br>Il est constitué de trois éléments <br>Un raspberry pi (RPI) qui sert d'interface entre le web ( le RPI est le serveur WEB ) et la télécommande,<br>Une plaque pcb qui sert de protection pour pouvoir piloter la télécommande sans cramer le RPI<br>Et la télécommande",
        img2:"./images/volet_ui.png",
        titre2:"Software",
        paragraphe2:"Voici les 3 écrans de mon application pour mon volet, la première sert de \" home \" la deuxième simule ma commande numériquement avec une touche en plus qui dit au volet de s'arrêter à une certaine position ( milieu ), et la 3 eme interface c'est les heures programmables de mon volet pour qu'il s'ouvre et se ferme à des heures précises"        
    },{
        name:"Filmotheque",
        description:"Filmothèque collaborative crée lors d'un projet final d'école. Une filmothèque est un site ou un endroit qui regroupe plusieur film et les tries pour pouvoir les retrouver et les archivés",
        img1:"./images/filmotheque.PNG",
        titre1:"Page d'accueil",
        paragraphe1:"<a target=\"_blank\" href=\"https://math-pixel.github.io/Filmotheque/\">Lien du site</a>",
        img2:"./images/recherche.PNG",
        titre2:"Fonction de recherche",
        paragraphe2:"Parmis toutes les options du site une grosse fonction présente est la possibilité de rechercher un film avec la bar de recherche ou avec un filtre pré définie"        
    },{
        name:"Masaru' s Adventure",
        description:"Masaru' s Adventure est un jeu d'exploration/aventure en 2 dimensions votre but est simple il faut sauver l'île Kyushu en rassemblant les 3 cordes du shamisen Si vous souhaitez jouer à ce jeu, vous pouvez aller sur ce <a target=\"_blank\" href=\"https://yey-team.com/Masarus-Adventure/\">lien</a>",
        img1:"./images/Masarus-adventure-vignet.png",
        titre1:"",
        paragraphe1:"Voici le menu de démarrage du jeu",
        img2:"./images/masaru.png",
        titre2:"",
        paragraphe2:"Sur cette image, nous sommes à l'intérieur du jeu en train de découvrir la carte."
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
