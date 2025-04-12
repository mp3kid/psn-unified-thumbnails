function getRankByTrophyNumbers(numTrophies, totalTrophies) {
  if (
    numTrophies === null ||
    numTrophies === undefined ||
    totalTrophies === null ||
    totalTrophies === undefined
  )
    return;

  if (numTrophies === totalTrophies) return "S";

  const percentage = (100 * numTrophies) / totalTrophies;

  if (percentage > 83.335) return "A";
  else if (percentage > 66.668) return "B";
  else if (percentage > 50.001) return "C";
  else if (percentage > 33.334) return "D";
  else if (percentage > 16.667) return "E";
  else return "F";
}

function setAlternateTrophyRanks() {
  console.log("setting ranks......");
  const MODIFIED_RANK_CLASS = "modified-rank";
  const rankElements = document.getElementsByClassName("game-rank");

  for (let i = 0; i < rankElements.length; i++) {
    const rankElement = rankElements[i];

    if (rankElement.classList.contains(MODIFIED_RANK_CLASS)) {
      continue;
    }

    const ancestor = rankElement.parentElement?.parentElement?.parentElement;
    const smallInfoElement = ancestor.getElementsByClassName("small-info")[0];
    const smallInfoChildren = smallInfoElement.getElementsByTagName("b");

    if (smallInfoChildren.length < 2) {
      continue;
    }

    const numTrophies = Number.parseInt(smallInfoChildren[0].innerText);
    const totalTrophies = Number.parseInt(smallInfoChildren[1].innerText);
    const newRank = getRankByTrophyNumbers(numTrophies, totalTrophies);

    if (newRank === undefined) {
      continue;
    }

    rankElement.innerText = newRank;
    rankElement.classList.remove("S", "A", "B", "C", "D", "E");
    rankElement.classList.add(newRank);
    rankElement.classList.add(MODIFIED_RANK_CLASS);
  }
}

setAlternateTrophyRanks();
