"use strict"

let maincontainer=document.createElement("div");
maincontainer.setAttribute("class","maincontainer");

let container=document.createElement("div");
container.setAttribute("class","container");

let Btn1=document.createElement("button");
Btn1.setAttribute("id","Btn1");
Btn1.innerText="Click";

let Btn2=document.createElement("p");
Btn2.setAttribute("id","Btn2");
Btn2.innerText="Heyxa Color"

let body=document.body;

container.appendChild(Btn1);
container.appendChild(Btn2);

maincontainer.appendChild(container);
body.appendChild(maincontainer);


let value1=document.getElementById("Btn1");
let value2=document.getElementById("Btn2");
let Color=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];



value1.addEventListener("click",myFunction);
let value=0;
function myFunction(){


   if(value==Color.length){
    value=0;
    body.style.backgroundColor=Color[value];
    value2.innerText=Color[value];
   }
else{
    body.style.backgroundColor=Color[value];
  value2.innerText=Color[value];
}
    value++;



}
