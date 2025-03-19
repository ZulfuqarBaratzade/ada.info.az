import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      
      <div className="footer-services">
        <h2>Xidmətlərimiz</h2>
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
        <p className="sol">Created by <a href="#" target="_blank" rel="noopener noreferrer" className="crated">Algo Solution</a> &copy; {new Date().getFullYear()}</p>

      </div>
     
      </div>
  );
}

export default Footer;
