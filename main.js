const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") === "dark") {
    html.classList.add("dark");
    themeBtn.classList.add("ri-sun-line");
} else {
    html.classList.remove("dark");
    themeBtn.classList.remove("ri-sun-line");
}
