async function generatePlan(){

let budget=document.getElementById("budget").value;
let people=document.getElementById("people").value;
let mood=document.getElementById("mood").value;

let response=await fetch("/plan",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

budget:budget,
people:people,
mood:mood

})

});

let data=await response.json();

let html="<h2>Your Plan</h2>";

data.plan.forEach(p=>{

html+=`<p>${p.activity} - ₹${p.cost}</p>`;

});

html+=`<h3>Total Cost: ₹${data.totalCost}</h3>`;
html+=`<h3>Per Person: ₹${data.perPerson}</h3>`;

document.getElementById("result").innerHTML=html;

}
