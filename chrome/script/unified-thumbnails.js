
  const stats = document.getElementsByClassName('stat')
  const uElements = [];
  Array.from(stats).forEach((element) => {
    Array.from(element.getElementsByTagName('u')).forEach((e) => {
      uElements.push(e);
      const value = e.getAttribute('title');
      e.innerHTML = value;
    });
  })

  const caps = document.getElementsByClassName('stat-cap');
  
  while(caps[0]) { //the while condition kinda weird but we chill
    caps[0].parentElement.removeChild(caps[0]);
  }

