// menu navigation

let htmlcol = document.getElementsByClassName("liste_nav");

let list2 = [...htmlcol]

const class_spe = ["accueil", "work", "lab", "who", "contact"];

function remove_class(element, className){
    element.classList.remove(className);
}


function change_state(){

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

// lab's

let parentLabs = document.getElementById("galeryPhoto");
let ButtonElm = document.querySelectorAll(".galeryNav > a");

let button = [...ButtonElm];

const contenu3D = [{titre:"Sabre CyberPunk", image: "https://math-pixel.github.io/portfolio/image/sbre%20cyberpunk.png", link:""},{titre:"Usine", image: "https://math-pixel.github.io/portfolio/image/usine%20rendu.png", link:""},{titre:"Sabre Deamon Slayer", image: "https://math-pixel.github.io/portfolio/image/rengoku%20sword1.png", link:""}, {titre:"Maison Japonaise", image: "https://math-pixel.github.io/portfolio/image/japon%20blender3.png", link:""}];

const contenuPhoto = [{titre:"Drone", image: "./images/drone1.JPG", link:""},{titre:"Photoshop", image: "./images/constellation.png", link:""},{titre:"IA", image: "./images/ia1.png", link:""},{titre:"IA", image: "./images/ia2.png", link:""},{titre:"Photographie", image: "./images/moto.jpg", link:""},{titre:"Photographie", image: "./images/dos.jpg", link:""},{titre:"Photographie", image: "./images/voiture.jpg", link:""}];

const contenuCreation = [{titre:"3D Printer", image: "./images/3d printer.jpg", link:"a"},{titre:"Volet Automatique", image: "./images/volet.png", link:""},{titre:"Table de Mixage", image: "https://math-pixel.github.io/portfolio/image/tableMix.jpg", link:""},{titre:"Reveil Conecter", image: "", link:""},{titre:"Borne Arcade", image: "https://retropie.org.uk/wp-content/uploads/2016/04/Retropie_Splash.png", link:""}]

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



button.forEach((button, index) => {
    button.addEventListener("click", () => {
        setCarrousel(index);
    });
});

setCarrousel(0);
