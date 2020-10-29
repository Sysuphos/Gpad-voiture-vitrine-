var btnAbout = document.querySelector(".about");
var btnAgence = document.querySelector(".agences");
var btnTarifs = document.querySelector(".tarifs");
var btnContact = document.querySelector(".contact");
 var btnMentions = document.querySelector(".mentions")
/* var btnCloseInfo = document.querySelector("#closeInfo"); */
var displayOn = false;

var btnCamionette = document.querySelector("#camionette");
var btnVelo = document.querySelector("#velo");
var btnVoiture = document.querySelector("#voiture");
var about = document.querySelector("#about");
var agence = document.querySelector("#agences");
var tarifs = document.querySelector("#tarifs");
var contact = document.querySelector("#contact");
var mentions = document.querySelector("#mentions");
var descriptionCam = document.querySelector("#description-camionette");
var descriptionVelo = document.querySelector("#description-velo");
var descriptionVoiture = document.querySelector("#description-voiture");
var layer = document.querySelector("#layers");
var scrollImg = document.querySelector("#scroll-section-img1");
var btnArray =[about,agence,tarifs,contact]

display(btnAbout, about);
display(btnAgence, agence);
display(btnTarifs, tarifs);
display(btnContact, contact);
display(btnMentions, mentions);

popDescription(btnCamionette, descriptionCam);
btnCamionette.addEventListener("mouseenter", function(){
    scrollImg.setAttribute("src", "CSS/media/new (2)/cam.png"); 
});
popDescription(btnVelo, descriptionVelo);
btnVelo.addEventListener("mouseenter", function(){
    scrollImg.setAttribute("src", "CSS/media/new (2)/vel.png"); 
});
popDescription(btnVoiture, descriptionVoiture);
btnVoiture.addEventListener("mouseenter", function(){
    scrollImg.setAttribute("src", "CSS/media/new (2)/voit.png"); 
});



function popDescription(btn, description){
    btn.addEventListener("mouseenter", function(){
        description.classList.toggle("hide")
        
    });
    btn.addEventListener("mouseout", function(){
        description.classList.toggle("hide")
    });
}


function display(btnElement, element) {
    
    btnElement.addEventListener("click", function(){ 

        if(!displayOn){
            layer.classList.toggle("display");
            layer.classList.toggle("layer");
            displayOn = true;

        }
        layer.innerHTML = element.innerHTML;
        
    });
};


/* display(about);
display(agence);
display(tarifs);
display(contact);

function display(element){
    element.addEventListener("click", function(){ 
        layer.innerHTML = element.innerHTML;
    });
}
 */