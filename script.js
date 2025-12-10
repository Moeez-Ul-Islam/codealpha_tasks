const buttons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".image-card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".btn.active").classList.remove("active");
    button.classList.add("active");

    const category = button.getAttribute("data-category");

    cards.forEach(card => {
      card.style.display = "none";
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      }
    });
  });
});
