import React from 'react'
import '../Styles/About.css'
import person6 from '../Images/person-6.jpg'
function About() {
  return (
    <div className='about' id='about'>
        <div className='about-title'>
            <h2>Xidmətlərimiz</h2>
            {/* <img src={person6} /> */}
        </div>
        <div className='about-cards'>
            <div className='about-card'>
                <h2>Xüsusi Qayğıya Ehtiyacı Olan Uşaqlar Üçün Bağça</h2>
                <p>Bağçamız yalnız xüsusi qayğıya ehtiyacı olan uşaqlar üçün nəzərdə tutulub və onların ehtiyaclarına uyğun fərdi yanaşma ilə fəaliyyət göstərir. Tədris və inkişaf proqramlarımız aşağıdakı sahələri əhatə edir:</p>
                <ul>
                    <li>Sosial bacarıqların inkişafı</li>
                    <li>Ünsiyyət və nitq bacarıqlarının gücləndirilməsi</li>
                    <li>Motorika və hərəkət koordinasiyasının təkmilləşdirilməsi</li>
                    <li>Sensor inteqrasiya məşğələləri</li>
                    <li>Fərdi və qrup terapiyaları</li>
                    <li>Özünəxidmət və gündəlik həyat bacarıqlarının öyrədilməsi</li>
                </ul>
            </div>
            <div className='about-card'>
                <h2>Loqoped Xidməti</h2>
                <p>Nitq və ünsiyyət problemləri olan uşaqlar üçün peşəkar loqoped dəstəyi təklif edirik. Xidmətlərimizə aşağıdakılar daxildir</p>
                <ul>
                    <li>Nitq və ünsiyyət bacarıqlarının inkişaf etdirilməsi</li>
                    <li>Artikulyasiya və tələffüz problemlərinin həlli</li>
                    <li> Alternativ ünsiyyət metodlarının öyrədilməsi (məsələn, jestlər, şəkil və simvol sistemləri)</li>
                </ul>
            </div>
            <div className='about-card'>
                <h2>Psixoloji Dəstək və Davranış Terapiyası</h2>
                <p>Psixoloqlarımız uşaqların emosional inkişafını və davranış tənzimlənməsini dəstəkləyən fərdi və qrup terapiyaları aparır. Xidmətlərimizə daxildir:</p>
                <ul>
                    <li>Emosional tənzimləmə və özünü ifadə etmə bacarıqlarının inkişafı</li>
                    <li>Stress və həyəcanın idarə edilməsi</li>
                    <li>Davranış problemlərinin həlli üçün fərdi yanaşma</li>
                </ul>
            </div>
            <div className='about-card'>
                <h2>Xüsusi Təhsil və İnkişaf Proqramları</h2>
                <p>Hər bir uşağın fərdi ehtiyaclarına uyğun tərtib olunmuş tədris və inkişaf proqramları həyata keçirilir. Buraya daxildir:</p>
                <ul>
                    <li>Məktəbə hazırlıq proqramları</li>
                    <li>İnklüziv təhsilə hazırlıq</li>
                    <li>Fərdi öyrənmə metodları və alternativ tədris yanaşmaları</li>
                </ul>
            </div>
            <div className='about-card'>
                <h2>Valideynlər üçün Dəstək və Maarifləndirmə</h2>
                <p>Uşaqların inkişafında valideynlərin dəstəyi böyük rol oynayır. Bu məqsədlə valideynlər üçün:</p>
                <ul>
                    <li>Maarifləndirici seminarlar və təlimlər</li>
                    <li>Psixoloji məsləhətlər</li>
                    <li>Ailə üçün fərdi inkişaf planlarının hazırlanması</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default About