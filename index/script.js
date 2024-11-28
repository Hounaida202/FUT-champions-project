// let lw=document.getElementById("lw");
// let st=document.getElementById("st");
// let rw=document.getElementById("rw");
// let cm1=document.getElementById("cm1");
// let cm2=document.getElementById("cm2");
// let cm3=document.getElementById("cm3");
// let lb=document.getElementById("lb");
// let cb1=document.getElementById("cb1");
// let cb2=document.getElementById("cb2");
// let rb=document.getElementById("rb");
// let gk=document.getElementById("gk");

// let btnn = document.getElementById("btnn");
// btnn.addEventListener("click", function() {
//     fonction(data);
// });
        

fetch("./players.json")
.then(response => {
if(!response.ok){
    alert("errur de recuperation des data");
}
return response.json();
})

.then(data => {
    fonction(data);
})

.catch(error => {
    alert("errur");

});


function fonction(objet) {
    const players = objet.players;
    let cardes="";

    for(let i=0;i<players.length; i++){
cardes+=`
<div class="carte">
        <div class="player-card-js">
    <div class="rating">${players[i].rating}</div>
    <div class="image-div"><img  src="${players[i].photo}" alt=""></div>
    <div class="name">${players[i].name}</div>
      <div class="club-info">
           <div class="flag-div">
          <div class="nationality">${players[i].nationality}</div>
          <img src="${players[i].flag}" alt="">
           </div>
           <div class="club-div">
           <div class="club">${players[i].club}</div>
           <img src="${players[i].logo}" alt="">
           </div>
      </div>
      <div class="score">
           <div class="score-1">
               <div class="pas" > Pas:${players[i].passing}</div>
                <div class="shot" >Shoot:${players[i].shooting}</div>
                <div class="pace" >Pace:${players[i].pace}</div>
           </div>
           
           <div class="score-2">
               <div class="drib" >Drib:${players[i].dribbling}</div>
               <div class="phys" >Phys:${players[i].physical}</div>
               <div class="def" >Def:${players[i].defending}</div>
           </div>
      </div>
  </div>
</div> 
`
}
document.querySelector(".auto-remplissage-div").innerHTML = cardes;

};
let btn=document.getElementById("lw");
let btnn=document.getElementById("btnn");

let pageRemplissageContainer=document.querySelector(".page-remplissage-container");
btn.addEventListener("click",function(){
    pageRemplissageContainer.style.display="block"
});




