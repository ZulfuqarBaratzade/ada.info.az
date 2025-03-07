const nav_bars=document.getElementById("nav_bars")
nav_bars.addEventListener("click",()=>{
    const nav_links = document.querySelector(".nav-links")
    console.log(nav_links)
    nav_bars.style.display="block"
   
})
document.querySelectorAll(".owerview-active").forEach(button => {
    button.addEventListener("click", function () {
        const cardText = this.closest(".owerview-card-header").querySelector(".owerview-card-text");
        cardText.classList.toggle("active");

        // İkonu fırlatmaq üçün
        this.querySelector("i").classList.toggle("rotated");
    });
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Formun səhifəni yeniləməsinin qarşısını alır

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
      alert("Bütün xanaları doldurun!");
      return;
  }

  alert("Mesajınız uğurla göndərildi!");
  
  // Formu sıfırlamaq üçün
  this.reset();
});



document.querySelectorAll(".nav-btn").forEach(button => {
  button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
      }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          document.querySelector(".back-to-top").classList.add("show");
      } else {
          document.querySelector(".back-to-top").classList.remove("show");
      }
  });

  scrollToTopBtn.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

