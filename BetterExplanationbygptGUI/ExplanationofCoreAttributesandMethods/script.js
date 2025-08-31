// Select elements
const demoText = document.getElementById("demo-text");
const demoInput = document.getElementById("demo-input");
const demoLink = document.getElementById("demo-link");
const output = document.getElementById("output");

// Buttons
const checkBtn = document.getElementById("checkAttrBtn");
const setBtn = document.getElementById("setAttrBtn");
const removeBtn = document.getElementById("removeAttrBtn");
const toggleBtn = document.getElementById("toggleAttrBtn");
const listBtn = document.getElementById("listAttrBtn");

// Utility: show messages
function log(msg) {
  output.innerHTML += `<p>${msg}</p>`;
}

// 1️⃣ getAttribute demo
checkBtn.addEventListener("click", () => {
  log("demoText title: " + demoText.getAttribute("title"));
  log("demoInput placeholder: " + demoInput.getAttribute("placeholder"));
  log("demoLink href (raw): " + demoLink.getAttribute("href"));
  log("demoLink href (property resolved): " + demoLink.href);
  log("demoInput data-owner (custom): " + demoInput.getAttribute("data-owner"));
});

// 2️⃣ setAttribute demo
setBtn.addEventListener("click", () => {
  demoText.setAttribute("title", "Changed tooltip!");
  demoInput.setAttribute("value", "Set via setAttribute()");
  demoLink.setAttribute("href", "https://google.com");
  demoLink.setAttribute("data-extra", "new-attr");
  log("Attributes updated via setAttribute()");
});

// 3️⃣ removeAttribute demo
removeBtn.addEventListener("click", () => {
  demoText.removeAttribute("class");
  demoInput.removeAttribute("placeholder");
  demoLink.removeAttribute("target");
  log("Removed class, placeholder, and target attributes");
});

// 4️⃣ toggleAttribute demo
toggleBtn.addEventListener("click", () => {
  demoText.toggleAttribute("hidden");
  log("Toggled hidden attribute on <p>");
});

// 5️⃣ getAttributeNames demo
listBtn.addEventListener("click", () => {
  const names = demoInput.getAttributeNames();
  log("demoInput attributes: " + names.join(", "));
});