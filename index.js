document.getElementById('body').style.backgroundColor = 'silver'

const title = document.querySelector('h1'); 
title.style.color = 'green';

document.getElementById('h3f').style.textTransform = 'uppercase'
document.getElementById('h3v').style.textTransform = 'uppercase'


  let newFruits=document.createElement("li");
  newFruits.innerHTML= 'orange';
  document.getElementById("fruList").appendChild(newFruits)
  


  let newVegetables=document.createElement("li");
  newVegetables.innerHTML= 'cabbage';
  document.getElementById("vegList").appendChild(newVegetables)
  