function addImpossibleRarities() {
  console.log("adding impossible rarities...");

  const rarityElements = document.getElementsByClassName("rarity");

  for (let i = 0; i < rarityElements.length; i++) {
    const parentElement = rarityElements[i];

    console.log("logging rarity element...");
    console.log(parentElement);

    if (!parentElement || parentElement.tagName !== "SPAN") continue;

    if (parentElement.parentElement?.classList.contains("hover-show")) {
      parentElement.parentElement.classList.add("display-none");
      parentElement.parentElement.classList.remove("hover-show");
    }

    if (parentElement.parentElement?.classList.contains("hover-hide")) {
      parentElement.parentElement.classList.remove("hover-hide");
    }

    if (
      parentElement.children[0] &&
      parentElement.children[0].tagName === "SPAN" &&
      parentElement.children[2] &&
      parentElement.children[2].tagName === "SPAN" &&
      parentElement.children[0].textContent === "0.00%"
    ) {
      const rarityTextElement = parentElement.children[2].children[0];
      rarityTextElement.textContent = "Impossible";
      rarityTextElement.classList.add("rarity-impossible");
      parentElement.children[0].classList.add("rarity-impossible");
    }
  }
}

addImpossibleRarities();
