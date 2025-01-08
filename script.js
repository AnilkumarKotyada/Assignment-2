document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    const greetButton = document.getElementById("greetButton");
    const greetingMessage = document.getElementById("greetingMessage");
    const errorMessage = document.getElementById("errorMessage");

    greetButton.addEventListener("click", () => {
        const name = nameInput.value.trim();

        errorMessage.textContent = "";
        greetingMessage.classList.remove("visible");

        if (name === "") {
            errorMessage.textContent = "Please enter your name."
        } else {
            greetingMessage.textContent = `Hello, ${name}! Welcome to our site!`;
            greetingMessage.classList.add("visible");
        }
    });
});