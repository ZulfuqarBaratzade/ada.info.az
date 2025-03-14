import React from 'react'
import '../Styles/Services.css'
import person1 from '../Images/person-1.jpg'
import person2 from '../Images/person-2.jpg'
import person3 from '../Images/person-3.jpg'
import person4 from '../Images/person-4.jpg'
import person5 from '../Images/person-5.jpg'

function Services() {
  return (
    <div className='services' id='services'>
        <div className='services-title'>
        <h2>Mərkəzimizin Missiyası və Məqsədi</h2>
        <p>Uşaqların inkişafına dəstək olmaq və cəmiyyətə inteqrasiyasını təmin etmək.</p>

        </div>
       
        <div className='services-cards'>
            <div className='service-card'>
                <div className='service-card-content'><p>
                    Mərkəzimiz xüsusi qayğıya ehtiyacı olan uşaqlar üçün yaradılmış bağça və inkişaf mərkəzi kimi fəaliyyət göstərir. 
                    Məqsədimiz bu uşaqların sağlam inkişafını, cəmiyyətə inteqrasiyasını və öz potensiallarını tam şəkildə üzə çıxarmalarını təmin etməkdir. 
                    Biz inanırıq ki, hər bir uşaq özünəməxsus istedad və bacarıqlara malikdir və onların üzə çıxarılması üçün fərdi yanaşma və xüsusi dəstək vacibdir.</p>
                    </div>
                <div className='service-card-poster'>
                    <img src={person1}/>
                </div>
            </div>
            <div className='service-card'>
                <div className='service-card-content'>
                    <p>Bağçamız yalnız xüsusi qayğıya ehtiyacı olan uşaqlar üçün nəzərdə tutulub və onların ehtiyaclarına uyğun fərdi təhsil və inkişaf proqramları təqdim edir. Burada uşaqlara təkcə qayğı göstərilmir, həm də onların ünsiyyət, sosiallaşma, motorika və özünəxidmət bacarıqlarının inkişaf etdirilməsi üçün xüsusi metodlardan istifadə olunur. Məqsədimiz uşaqların gündəlik həyatda daha müstəqil və inamlı olmasına dəstək olmaqdır.</p>
                </div>
                <div className='service-card-poster'>
                    <img src={person2} />
                </div>
            </div>
            <div className='service-card'>
                <div className='service-card-content'>
                    <p>Bağçamızda çalışan psixoloqlar, loqopedlər, xüsusi təhsil müəllimləri və digər mütəxəssislər hər bir uşağın fərdi inkişaf planını hazırlayır və onların ehtiyaclarına uyğun fərqli metodlarla işləyirlər. Bağça proqramımız akademik biliklərdən çox, uşaqların emosional və sosial inkişafına, həmçinin gündəlik həyat bacarıqlarının formalaşmasına yönəlib. Oyun terapiyası, sensor məşğələlər, yaradıcılıq dərsləri və fərdi terapiya seansları uşaqların inkişafını dəstəkləyən əsas fəaliyyətlərimiz sırasındadır.</p>
                </div>
                <div className='service-card-poster'>
                    <img src={person3} />
                </div>
            </div>
            <div className='service-card'>
                <div className='service-card-content'>
                    <p>Bununla yanaşı, valideynlərə dəstək bizim üçün böyük önəm daşıyır. Xüsusi qayğıya ehtiyacı olan uşaqları böyütmək və tərbiyə etmək bəzən çətin ola bilər və biz bu yolda valideynlərin yanında olmaq istəyirik. Onlar üçün maarifləndirici seminarlar,fərdi məsləhətlər və emosional dəstək proqramları təşkil edirik. Məqsədimiz valideynlərin övladları ilə daha düzgün ünsiyyət qurmalarına, onların inkişafında fəal iştirak etmələrinə və bu prosesdə özlərini tək hiss etməmələrinə kömək etməkdir.</p>
                </div>
                <div className='service-card-poster'>
                    <img src={person5} />
                </div>
            
            </div>
            <div className='service-card'>
                <div className='service-card-content'>
                    <p>Bağçamız xüsusi qayğıya ehtiyacı olan uşaqların cəmiyyətin tamhüquqlu üzvləri kimi yetişməsinə töhfə verməyə çalışır. Onların öz potensiallarını tam dərk etmələrinə, bacarıqlarını inkişaf etdirmələrinə və həyatlarını sevinc, inam və müstəqillik içində yaşaya bilmələrinə dəstək olmaq bizim ən böyük amalımızdır.</p>
                </div>
                <div className='service-card-poster'>
                    <img src={person4} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Services