import React from 'react'
import banner from '../Images/banner.jpg'
import '../Styles/MainBanner.css'
function MainBanner() {
  return (
    <div className='main-banner'>
        <div className='main-banner-content'>
            <h2>ADA – Xüsusi Uşaqlar Üçün Bağça və Psixoloji Mərkəzi</h2>
            <p>Ada Qayğı Mərkəzi Gəncə şəhərində yerləşən xüsusi qayğıya ehtiyacı olan uşaqlar üçün nəzərdə tutulmuş bağça və inkişaf mərkəzidir. Mərkəzimiz, uşaqların fiziki, psixoloji, sosial və intellektual inkişafını dəstəkləyərək onların cəmiyyətə daha rahat inteqrasiyasını təmin etməyi hədəfləyir. Peşəkar mütəxəssislərdən ibarət komandamız, hər bir uşağın fərdi ehtiyaclarına uyğun xüsusi proqramlar və terapiya xidmətləri təqdim edərək onların inkişafına töhfə verir.</p>
        </div>
        <div className='main-banner-poster'>
            <img src={banner} />
            
        </div>
    </div>
  )
}

export default MainBanner