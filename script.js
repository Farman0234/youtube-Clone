const menuButton = document.querySelectorAll(".menu-button");
const themeButton = document.querySelector(".theme-button i");

if (localStorage.getItem("darkMode") === "enable") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-mon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-mon");
}

themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enable" : "disable");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-mon", !isDarkMode);
});

menuButton.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}
