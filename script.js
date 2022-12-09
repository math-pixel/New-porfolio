// menu navigation

let htmlcol = document.getElementsByClassName("liste_nav");

let list2 = [...htmlcol]

const class_spe = ["accueil", "work", "lab", "who", "contact"];

function remove_class(){
    list2.forEach((element) => {
        element.classList.remove("selected");
    });
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

    element.addEventListener("click" , () => {
        remove_class();
        element.classList.add("selected");
    });
});

// lab's

let parentLabs = document.getElementById("galeryPhoto");
let ButtonElm = document.querySelectorAll(".galeryNav > a");

let button = [...ButtonElm];

const contenu3D = [{titre:"Sabre CyberPunk", image: "https://math-pixel.github.io/portfolio/image/sbre%20cyberpunk.png", link:""},{titre:"Usine", image: "https://math-pixel.github.io/portfolio/image/usine%20rendu.png", link:""},{titre:"Sabre Deamon Slayer", image: "https://math-pixel.github.io/portfolio/image/rengoku%20sword1.png", link:""}, {titre:"Maison Japonaise", image: "https://math-pixel.github.io/portfolio/image/japon%20blender3.png", link:""}];

const contenuPhoto = [{titre:"", image: "", link:""},{titre:"", image: "", link:""}];

const contenuCreation = [{titre:"3D Printer", image: "https://math-pixel.github.io/portfolio/image/print_3d/65.jpg", link:""},{titre:"Volet Automatique", image: "", link:""},{titre:"Table de Mixage", image: "https://math-pixel.github.io/portfolio/image/tableMix.jpg", link:""},{titre:"Reveil Conecter", image: "", link:""},{titre:"Borne Arcade", image: "", link:""}]

let arrayDisplay = [[...contenu3D],[ ...contenuPhoto],[...contenuCreation]];


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
    
        parentLabs.appendChild(container);
    
        let Title = document.createElement("h2");
        Title.classList.add("Title_galery");
        Title.innerHTML = element.titre;
    
        container.appendChild(Title);
    
    })
}



button.forEach((button, index) => {
    button.addEventListener("click", () => {
        setCarrousel(index);
    });
});

setCarrousel(0);

