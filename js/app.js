// main scripts
console.log("Hi there.");

const body = getFromPage('body');

const themeButton = makeDo("#themeButton", () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('dark', 'true');
    themeButton.innerText = "go light";
  } else {
    localStorage.setItem('dark', '');
    themeButton.innerText = "go dark";
  }
})

let storedSetting = localStorage.getItem('dark');

if (storedSetting === "true") {
  body.classList.toggle('dark');
  themeButton.innerText = "go light";
}

// Library functions

export function makeDo(selector, code) {
  const el = getFromPage(selector);
  el.addEventListener("click", code);
  return el;
}

export function getFromPage(el) {
  return document.querySelector(el);
}
