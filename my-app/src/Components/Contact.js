import React from "react";
import logo from "../Images/logo.jpg";
import "../Styles/Contact.css";

function ContactUS() {
  return (
    <div id="contact" className="contact">
      <div className="contact-address">
        <img src={logo} alt="logo" />
        <div className="contact-content">
          <p>
            <a href="tel:+994 50 272 60 63">
              <i class="fas fa-phone"></i> +9950 272 60 63
            </a>
            
          </p>
          
          
          <p>
            <a href="adaqaygimerkezi@gmail.com">
              <i class="fa-solid fa-envelope"></i>adaqaygimerkezi@gmail.com
            </a>
          </p>
          <p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeXMFKMedIDC_1axXfkefaEVqSfNRsXRWpmlBOC73PRNGPfnA/viewform?fbclid=PAY2xjawI4A29leHRuA2FlbQIxMAABppqdqZuT3AmoYJkNYz4hUqnDyV4rFZjshCekJFY070TSewAXkXO42fH5yw_aem_T4-vQ5bl27pnvuAUODUjOQ"
              target="_blank"
            >
              <i class="fa-solid fa-link"></i> Qeydiyyat formu
            </a>
          </p>
          <div className="links">
            <a href="tel:+99450 272 60 63"><i class="fab fa-whatsapp"></i></a>
            <a href="https://www.instagram.com/ada.qaygimerkezi/" target="_blank"><i class="fab fa-instagram"></i></a>

          </div>
        </div>
      </div>
      <div className="contact-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4971823972755!2d46.3627141!3d40.68504659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403f51036f54da75%3A0xb42900649a3b724!2zQURBIFFhecSfxLEgTcmZcmvJmXpp!5e0!3m2!1str!2saz!4v1742282515759!5m2!1str!2saz"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUS;
