const itemList = document.getElementById("itemList");
const themeSelect = document.getElementById("themeSelect");
const listStyleSelect = document.getElementById("listStyleSelect");

// Sample items
const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Load preferences from localStorage or use defaults
let settings = JSON.parse(localStorage.getItem("settings")) || {
  theme: "light",
  listStyle: "expanded"
};

// Render the list dynamically
function renderList() {
  itemList.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.textContent = item;
    itemList.appendChild(div);
  });
  itemList.className = settings.listStyle;
}

// Apply theme to body
function applyTheme() {
  document.body.className = settings.theme;
}

// Save current settings
function saveSettings() {
  localStorage.setItem("settings", JSON.stringify(settings));
}

// Event listeners
themeSelect.addEventListener("change", () => {
  settings.theme = themeSelect.value;
  applyTheme();
  saveSettings();
});

listStyleSelect.addEventListener("change", () => {
  settings.listStyle = listStyleSelect.value;
  renderList();
  saveSettings();
});

// Initialize page
function init() {
  themeSelect.value = settings.theme;
  listStyleSelect.value = settings.listStyle;
  applyTheme();
  renderList();
}

init();