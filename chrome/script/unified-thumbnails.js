if (window.location.pathname === '/') {
  
  const banner = document.getElementById('banner');
  const stats = banner.getElementsByClassName('stat')
  const uElements = [];
  Array.from(stats).forEach((element) => {
    Array.from(element.getElementsByTagName('u')).forEach((e) => {
      uElements.push(e);
      const value = e.getAttribute('title');
      e.innerHTML = value;
      e.removeAttribute('title');
    });
  })
  
  const caps = banner.getElementsByClassName('stat-cap');
  
  while(caps[0]) { //the while condition kinda weird but we chill
    caps[0].parentElement.removeChild(caps[0]);
  } 
}
