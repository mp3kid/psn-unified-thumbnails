function removeEmptyTrophySets() {
  console.log("hello!");
  const trophyCountElements = document.getElementsByClassName("trophy-count");

  for (let i = 0; i < trophyCountElements.length; i++) {
    const element = trophyCountElements[i];

    const firstChild = element.children[0];

    if (!firstChild) continue;

    for (let j = 0; j < firstChild.children.length; j++) {
      const trophyCountElement = firstChild.children[j];

      if (trophyCountElement?.textContent === "0") {
        trophyCountElement.classList.add("display-none");

        if (
          trophyCountElement.classList.contains("icon-sprite") === false &&
          j > 0 &&
          firstChild.children[j - 1].classList.contains("icon-sprite")
        ) {
          firstChild.children[j - 1].classList.add("display-none");
        }
      } else if (
        (trophyCountElement?.textContent === "1" &&
          trophyCountElement.classList.contains("icon-sprite") &&
          trophyCountElement.classList.contains("platinum")) ||
        (trophyCountElement?.textContent === "1" &&
          trophyCountElement.classList.contains("icon-sprite") === false &&
          j > 0 &&
          firstChild.children[j - 1].classList.contains("icon-sprite") &&
          firstChild.children[j - 1].classList.contains("platinum"))
      ) {
        trophyCountElement.textContent = "✓";
      }
    }
  }
}

// new MutationObserver(removeEmptyTrophySets).observe(document, {
//   attributes: true,
//   characterData: true,
//   childList: true,
// });

removeEmptyTrophySets();
