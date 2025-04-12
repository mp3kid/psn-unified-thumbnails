function getMainTableBody() {
  return (rankElements =
    document.getElementsByClassName("game-rank")[0]?.parentElement.parentElement
      .parentElement.parentElement);
}

const table = getMainTableBody();

const mutationObserver = new MutationObserver(() => {
  setAlternateTrophyRanks();
  removeEmptyTrophySets();
});

if (table) {
  mutationObserver.observe(table, {
    attributes: true,
    characterData: true,
    childList: true,
  });
}
