const selectedList = document.getElementById("selectedList");

// only carrot
const carrotCard = document.querySelector(".vegtables");

carrotCard.addEventListener("click", () => {
  const itemName = carrotCard.innerText.trim();

  if (
    itemName === "Carrot" &&
    selectedList.innerText.indexOf("Carrot") === -1
  ) {
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedList.appendChild(li);
  }
});
