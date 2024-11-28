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




