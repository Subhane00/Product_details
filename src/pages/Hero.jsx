import React from 'react'
import StaticLang from '../utils/StaticLang'

const Hero = () => {
  return (
   <>
   <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/slider-01.webp" className="d-block w-100" alt="..." />
      <p className='hero1-p1'><StaticLang az={'Keyfiyyətli gündəlik həyat üçün hazırlanmış seçilmiş bazar kolleksiyaları.'} en={'Curated marketplace collections built for quality everyday living.'} /></p>
<p className='hero2-p2'><StaticLang az={'Gündəlik ehtiyaclar üçün keyfiyyət, dəyər və sorunsuz alış-veriş təcrübəsi təmin etmək üçün hazırlanmış, etibarlı satıcılardan diqqətlə seçilmiş məhsullar'} en={'Carefully curated products from trusted sellers, designed to deliver quality, value, and a seamless shopping experience for everyday needs.'} /></p>
<button><StaticLang az={'İNDİ AL'} en={'SHOP NOW'} /></button>
<p className='hero-price'>$24.99</p>
    </div>
    <div className="carousel-item">
      <img src="/images/slider-01-b.webp" className="d-block w-100" alt="..." />
      <p className='hero1-p1'><StaticLang az={'Müasir gündəlik ehtiyaclar üçün yaradılmış ağıllı bazar əşyalar.'} en={'Smart marketplace essentials created for modern daily needs.'} /></p>
<p className='hero2-p2'> <StaticLang az={'Gündəlik ehtiyaclar üçün keyfiyyət, dəyər və sorunsuz alış-veriş təcrübəsi təmin etmək üçün hazırlanmış, etibarlı satıcılardan diqqətlə seçilmiş məhsullar'} en={'Carefully curated products from trusted sellers, designed to deliver quality, value, and a seamless shopping experience for everyday needs.'} /></p>
<button><StaticLang az={'İNDİ AL'} en={'SHOP NOW'} /></button>
<p className='hero-price'>$24.99</p>
    </div>
  </div>
</div>
   
   </>
  )
}

export default Hero