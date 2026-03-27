// SELECT ELEMENTS
const itemsContainer = document.getElementById("itemsContainer");
const themeOption = document.getElementById("themeOption");
const layoutOption = document.getElementById("layoutOption");

// SAMPLE DATA
const colorItems = ["Red", "Blue", "Green", "Orange", "Purple"];

// RETRIEVE SAVED SETTINGS OR USE DEFAULTS
let userSettings = JSON.parse(localStorage.getItem("userSettings")) || {
  theme: "light-mode",
  layout: "expanded-view"
};

// DISPLAY LIST ITEMS
function displayItems() {
  itemsContainer.innerHTML = "";

  colorItems.forEach(color => {
    const itemBox = document.createElement("div");
    itemBox.textContent = color;
    itemsContainer.appendChild(itemBox);
  });

  itemsContainer.className = userSettings.layout;
}

// APPLY SELECTED THEME
function setTheme() {
  document.body.className = userSettings.theme;
}

// STORE SETTINGS
function storeSettings() {
  localStorage.setItem("userSettings", JSON.stringify(userSettings));
}

// HANDLE THEME CHANGE
themeOption.addEventListener("change", () => {
  userSettings.theme = themeOption.value;
  setTheme();
  storeSettings();
});

// HANDLE LAYOUT CHANGE
layoutOption.addEventListener("change", () => {
  userSettings.layout = layoutOption.value;
  displayItems();
  storeSettings();
});

// INITIAL SETUP
function loadApp() {
  // Sync dropdowns with saved values
  themeOption.value = userSettings.theme;
  layoutOption.value = userSettings.layout;

  setTheme();
  displayItems();
}

// RUN APP
loadApp();