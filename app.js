document.querySelectorAll('a[href^="."]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
  // ======================
    // PROJECT BUTTON CLICKS
    // ======================

    const simonBtn = document.querySelector(".simon-game a");
    const todoBtn = document.querySelector(".todo-app a");
    const spotifyBtn = document.querySelector(".spotify-clone a");

    simonBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://abhishek-gautam.github.io/simon-game/", "_blank");
    });

    todoBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://abhishek-gautam.github.io/todo-app/", "_blank");
    });

    spotifyBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://abhishek-gautam.github.io/spotify-clone/", "_blank");
    });


// Contact form validation and submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Page reload hone se rokta hai

        // Input values lena
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("Email").value.trim();
        const number = document.getElementById("Number").value.trim();
        const message = document.getElementById("Message").value.trim();

        // Basic validation
        if (username === "" || email === "" || number === "" || message === "") {
            alert("⚠️ Please fill in all fields before submitting.");
            return;
        }

        // Email validation (simple pattern)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("❌ Please enter a valid email address.");
            return;
        }

        // Number validation (minimum 10 digits)
        if (number.length < 10) {
            alert("📞 Please enter a valid 10-digit contact number.");
            return;
        }

        // Agar sab valid hai
        alert(`✅ Thank you, ${username}! Your message has been submitted successfully.`);

        // Form clear karne ke liye
        form.reset();
    });
});