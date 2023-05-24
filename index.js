document.getElementById('body').style.backgroundColor = 'silver'

const title = document.querySelector('h1'); 
title.style.color = 'green';

document.addEventListener('DOMContentLoaded', function() {
    const h3Titles = document.querySelectorAll('h3'); 
    h3Titles.forEach(title => {
      title.style.textTransform = 'uppercase'; 
    });
  });


  let newFruits=document.createElement("li");
  newFruits.innerHTML= 'orange';
  document.getElementById("fruList").appendChild(newFruits)
  


  let newVegetables=document.createElement("li");
  newVegatables.innerHTML= 'cabbage';
  document.getElementById("vegList").appendChild(newVegatables)
  