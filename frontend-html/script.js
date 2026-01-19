// Shop Now button interaction
const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", () => {
    alert("Welcome to Ivy Blooms! Shopping feature coming soon 🌿");
});

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
