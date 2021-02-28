function createItem1() {
  const box = document.getElementById("box");
  const item1 = document.createElement("div");
  const buttons = ["itemX", "itemO", "itemTri", "itemSq"];

  let pick = buttons[Math.floor(Math.random() * buttons.length)];

  item1.classList.add(pick);
  item1.style.top = Math.random() * (innerHeight - 160) + "px";

  item1.style.left = Math.random() * (innerWidth - 50) + "px";

  box.appendChild(item1);

  setTimeout(() => {
    item1.remove();
  }, 4000);
}

setInterval(createItem1, 270);
setInterval(createItem1, 130);
setInterval(createItem1, 420);

//setInterval(createItem2, 200);
