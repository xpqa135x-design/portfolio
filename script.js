// Dark Mode
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Contact Form Validation
document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            document.getElementById("result").innerHTML =
                "Please fill in all fields.";
        } else {
            document.getElementById("result").innerHTML =
                "Message sent successfully!";
        }
    });