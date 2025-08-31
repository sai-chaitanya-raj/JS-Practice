
const heading = document.getElementById("heading");
const para = document.getElementById("para");
const link = document.getElementById("myLink");
const input = document.getElementById("myInput");
const output = document.getElementById("output");

const btnGet = document.getElementById("btnGet");
const btnSet = document.getElementById("btnSet");
const btnRemove = document.getElementById("btnRemove");
const btnHas = document.getElementById("btnHas");
const btnList = document.getElementById("btnList");
const btnToggle = document.getElementById("btnToggle");


function log(msg) {
  output.innerHTML += `<p>${msg}</p>`;
}

btnGet.addEventListener("click", () => {
  log("Heading title: " + heading.getAttribute("title"));
  log("Paragraph data-owner: " + para.getAttribute("data-owner"));
  log("Link href: " + link.getAttribute("href"));
  log("Input placeholder: " + input.getAttribute("placeholder"));
});



btnSet.addEventListener("click", () => {
  heading.setAttribute("title", "Updated Heading Title");
  para.setAttribute("style", "color:green; font-weight:bold;");
  link.setAttribute("href", "https://google.com");
  input.setAttribute("value", "Changed via JS");
  log("Attributes updated successfully!");
});


btnRemove.addEventListener("click", () => {
  heading.removeAttribute("class");
  para.removeAttribute("data-owner");
  input.removeAttribute("placeholder");
  log("Removed class, data-owner, and placeholder attributes.");
});


btnHas.addEventListener("click", () => {
  log("Heading has 'title'? " + heading.hasAttribute("title"));
  log("Paragraph has 'data-owner'? " + para.hasAttribute("data-owner"));
});

btnList.addEventListener("click", () => {
  const names = input.getAttributeNames();
  log("Input attributes: " + names.join(", "));
});


btnToggle.addEventListener("click", () => {
  para.toggleAttribute("hidden");
  log("Toggled hidden attribute on paragraph.");
});