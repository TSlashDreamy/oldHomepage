function createItem2() {
  const box2 = document.getElementById("box2");
  const item2 = document.createElement("div");
  const buttons2 = ["itemXin", "itemOs", "itemTriang", "itemSquar"];

  let pick = buttons2[Math.floor(Math.random() * buttons2.length)];

  item2.classList.add(pick);
  item2.style.top = Math.random() * (innerHeight - 50) + "px";
  item2.style.left = Math.random() * (innerWidth - 20) + "px";

  box2.appendChild(item2);

  setTimeout(() => {
    item2.remove();
  }, 4000);
}

setInterval(createItem2, 270);
setInterval(createItem2, 130);
setInterval(createItem2, 420);

//setInterval(createItem2, 200);

// ?

function createItem3() {
  const box3 = document.getElementById("box3");
  const item3 = document.createElement("div");
  const buttons3 = ["itemXin", "itemOs", "itemTriang", "itemSquar"];

  let pick = buttons3[Math.floor(Math.random() * buttons3.length)];

  item3.classList.add(pick);
  item3.style.top = Math.random() * (innerHeight - 50) + "px";
  item3.style.left = Math.random() * (innerWidth - 20) + "px";

  box3.appendChild(item3);

  setTimeout(() => {
    item3.remove();
  }, 4000);
}

setInterval(createItem3, 270);
setInterval(createItem3, 130);
setInterval(createItem3, 420);

//setInterval(createItem2, 200);
