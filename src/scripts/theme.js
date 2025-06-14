// Set the initial theme
const theme = localStorage.getItem("theme") || "dark";
document.documentElement.classList.toggle("dark", theme === "dark");
