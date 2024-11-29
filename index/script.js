

let pageRemplissageContainer = document.querySelector(".page-remplissage-container");

fetch("./players.json")
.then(response => {
if(!response.ok){
    alert("errur de recuperation des data");
}
return response.json();
})

.then(data => {
    let lw=document.getElementById("lw");
    lw.addEventListener("click", function(){
    afficherJoueursFiltré(data.players,"LW");
    pageRemplissageContainer.style.display="block"
    
    });
    
    let st=document.getElementById("st");
    st.addEventListener("click", function(){
    afficherJoueursFiltré(data.players,"ST");
    pageRemplissageContainer.style.display="block"
    
    });
    let rw=document.getElementById("rw");
    rw.addEventListener("click", function(){
    afficherJoueursFiltré(data.players,"RW");
    pageRemplissageContainer.style.display="block"
    
    });
    let cm1=document.getElementById("cm1");
cm1.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"CM");
pageRemplissageContainer.style.display="block"

});
let cm2=document.getElementById("cm2");
cm2.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"CM");
pageRemplissageContainer.style.display="block"

});
let cm3=document.getElementById("cm3");
cm3.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"CM");
pageRemplissageContainer.style.display="block"

});
let lb=document.getElementById("lb");
lb.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"LB");
pageRemplissageContainer.style.display="block"

});
let cb1=document.getElementById("cb1");
cb1.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"CB");
pageRemplissageContainer.style.display="block"

});
let cb2=document.getElementById("cb2");
cb2.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"CB");
pageRemplissageContainer.style.display="block"

});
let rb=document.getElementById("rb");
rb.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"RB");
pageRemplissageContainer.style.display="block"

});
let gk=document.getElementById("gk");
gk.addEventListener("click", function(){
afficherJoueursFiltré(data.players,"GK");
pageRemplissageContainer.style.display="block"
});

})
.catch(error => {
    alert("errur");

});

function afficherJoueursFiltré(parametrepPourPlayer,parametrePourPosition){
    let joueursfiltré=parametrepPourPlayer.filter(joueur=>joueur.position===parametrePourPosition)
     FonctionAfficher(joueursfiltré);
    }
    function FonctionAfficher(joueursfiltré){
        let carte="";
        let container = document.querySelector(".auto-remplissage-div");
        for(let i=0 ; i < joueursfiltré.length ; i++){
        carte+=`
        <div class="carte">
                <div class="player-card-js">
            <div class="rating">${joueursfiltré[i].rating}</div>
            <div class="image-div"><img  src="${joueursfiltré[i].photo}" alt=""></div>
            <div class="name">${joueursfiltré[i].name}</div>
              <div class="club-info">
                   <div class="flag-div">
                  <div class="nationality">${joueursfiltré[i].nationality}</div>
                  <img src="${joueursfiltré[i].flag}" alt="">
                   </div>
                   <div class="club-div">
                   <div class="club">${joueursfiltré[i].club}</div>
                   <img src="${joueursfiltré[i].logo}" alt="">
                   </div>
              </div>
              <div class="score">
                   <div class="score-1">
                       <div class="pas" > Pas:${joueursfiltré[i].passing}</div>
                        <div class="shot" >Shoot:${joueursfiltré[i].shooting}</div>
                        <div class="pace" >Pace:${joueursfiltré[i].pace}</div>
                   </div>
                   
                   <div class="score-2">
                       <div class="drib" >Drib:${joueursfiltré[i].dribbling}</div>
                       <div class="phys" >Phys:${joueursfiltré[i].physical}</div>
                       <div class="def" >Def:${joueursfiltré[i].defending}</div>
                   </div>
              </div>
          </div>
        </div> 
        `
        container.innerHTML=carte;
        
                }
        
            }

// les fonction des quitter et entrer
let exitAll=document.getElementById("exit-all");
let btnn=document.getElementById("btnn");
let add=document.getElementById("manuel-add");
let pageRemplirManuel=document.querySelector(".page-manuel-remplir");


btnn.addEventListener("click",function(){
    pageRemplissageContainer.style.display="none"
});

add.addEventListener("click",function(){
    pageRemplirManuel.style.display="block"
});
exitAll.addEventListener("click",function(){
    pageRemplirManuel.style.display="none"

});



