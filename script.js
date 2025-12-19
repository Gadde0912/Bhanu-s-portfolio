// Fade animation
const sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Dark mode toggle
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});


