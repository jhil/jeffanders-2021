const links = document.getElementsByTagName('a');
for (i = 0; i < links.length; i++) {
  if (links[i].href.match('#')) {
    links[i].addEventListener('click', function(e) {
      const pathname = new URL(e.currentTarget.href).pathname;
      const anchor = new URL(e.currentTarget.href).hash.slice(1);
	  console.log("TEST", anchor, pathname, window.location.pathname)
      if (window.location.pathname === pathname) {
        if (!window.scrollTo) return;
        const elem = document.getElementById(anchor);
        if (!elem) return;
		const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const top = Math.max(0,elem.getBoundingClientRect().top + scrollY - 3 * rem);
        e.preventDefault();
        try {
          window.scrollTo({
            behavior: "smooth",
            top: top,
          });
        } catch (error) {
          window.scroll({
            top: top,
          });
        }
      }
    })
  }
}
