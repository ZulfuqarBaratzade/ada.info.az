import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h2>Xidmətlərimiz</h2>
      <div className="footer-services">
        <ul className="footer-service">
          <li>
            <a href="#about">Bağça</a>
          </li>
          <li>
            <a href="#about">Loqoped Xidməti</a>
          </li>
        </ul>
  
        <ul className="footer-service">
          <li>
            <a href="#about">Psixoloji Dəstək və Davranış Terapiyası</a>
          </li>
          <li>
            <a href="#about">Xüsusi Təhsil və İnkişaf Proqramları</a>
          </li>
          <li>
            <a href="#about">Valideynlər üçün Dəstək və Maarifləndirmə</a>
          </li>
        </ul>
      </div>
      </div>
  );
}

export default Footer;
