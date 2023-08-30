export const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  let copyright = document.createElement("div");
  copyright.className = "copyright";
  let copyrightText = document.createElement("p");
  copyrightText.className = "copyright__text";
  copyrightText.innerText = `Copyright`;
  let copyrightLink = document.createElement("a");
  copyrightLink.className = "link";
  copyrightLink.href = "https://github.com/anthony-th";
  copyrightLink.innerText = "Anthony Th";
  let copyrightMark = document.createElement("p");
  copyrightMark.className = "copyright__text";
  copyrightMark.innerText = `© 2022`;

  let fragmentFooter = new DocumentFragment();
  fragmentFooter.appendChild(copyright);
  copyright.appendChild(copyrightText);
  copyright.appendChild(copyrightLink);
  copyright.appendChild(copyrightMark);
  footer.appendChild(fragmentFooter);

  return footer;
};
