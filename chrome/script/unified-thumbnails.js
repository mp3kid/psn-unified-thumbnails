// if (window.location.pathname === '/') {

//   const banner = document.getElementById('banner');
//   const stats = banner.getElementsByClassName('stat')
//   const uElements = [];
//   Array.from(stats).forEach((element) => {
//     Array.from(element.getElementsByTagName('u')).forEach((e) => {
//       uElements.push(e);
//       const value = e.getAttribute('title');
//       e.innerHTML = value;
//       e.removeAttribute('title');
//     });
//   })

//   const caps = banner.getElementsByClassName('stat-cap');

//   while(caps[0]) { //the while condition kinda weird but we chill
//     caps[0].parentElement.removeChild(caps[0]);
//   }
// }

const rankElements = document.getElementsByClassName("game-rank");

// function getRankByPercentage(percentage) {
//   if (percentage === null || percentage === undefined) return;

//   if (percentage === 100) return "S";
//   else if (percentage > 80) return "A";
//   else if (percentage > 60) return "B";
//   else if (percentage > 40) return "C";
//   else if (percentage > 20) return "D";
//   else if (percentage > 0) return "E";
//   else return "F";
// }

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

for (let i = 0; i < rankElements.length; i++) {
  const rankElement = rankElements[i];

  console.log("rank element", rankElement);

  // if (rankElement.tagName !== "span") continue;

  const ancestor = rankElement.parentElement?.parentElement?.parentElement;

  // const percentageParent = ancestor.getElementsByClassName("progress-bar")[0];

  // const percentageSpan = percentageParent?.getElementsByTagName("span")[0];

  // const percentage = percentageSpan?.innerText?.replace("%", "");

  // const percentageNumber = Number.parseInt(percentage);

  // const newRank = getRankByPercentage(percentageNumber);

  const smallInfoElement = ancestor.getElementsByClassName("small-info")[0];

  const smallInfoChildren = smallInfoElement.getElementsByTagName("b");

  const numTrophies = Number.parseInt(smallInfoChildren[0].innerText);

  const totalTrophies = Number.parseInt(smallInfoChildren[1].innerText);

  const newRank = getRankByTrophyNumbers(numTrophies, totalTrophies);

  console.log("new rank", newRank);

  if (newRank === undefined) continue;

  rankElement.innerText = newRank;

  rankElement.classList.remove("S", "A", "B", "C", "D", "E");

  rankElement.classList.add(newRank);
}
