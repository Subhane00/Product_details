import React, { useContext } from 'react'
import Footer from '../layout/Footer'
import StaticLang from '../utils/StaticLang'
import { ThemeContext } from '../context/ThemeProvider';

const About = () => {
        const [theme] = useContext(ThemeContext);
    
  return (
   <>
   <div className="container">
    <div className='blog'>
        <div className="sol-blog">
            <div className="image-one-blog">
                <img src="https://www.happycow.net/blog/wp-content/uploads/2022/01/Pick-Up-Limes-Vegan-Food-Blog-min-scaled.jpg" alt="" />
                <p><StaticLang az={'Məhsul Baxışlarının Gücünü açmaq'} en={'Unlocking the Power of Product Reviews'}/></p>
                <p>Integer mattis ultricies augue, ac bibendum arcu viverra vel. Etiam eu facilisis velit. Mauris auctor efficitur turpis feugiat laoreet. Nam ac posuere eros. Sed blandit et ipsum a porttitor. Curabitur sagittis ligula in ullamcorper vehicula. Sed consequat ipsum vitae ante ultricies tincidunt. Nulla egestas nisi non elementum semper. Aenean molestie mi purus, at commodo massa</p>
                <button><StaticLang az={'DAHA COX OXU'} en={'READ MORE'}/></button>

            </div>
            <div className="image-one-blog">
                <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/02/instagrammable_food_cover.jpg" alt="" />
                <p><StaticLang az={'Elektron ticarətdə müştəri davranışını anlamaq'} en={'Understanding Customer Behavior in E-commerce'}/></p>
                <p>Integer mattis ultricies augue, ac bibendum arcu viverra vel. Etiam eu facilisis velit. Mauris auctor efficitur turpis feugiat laoreet. Nam ac posuere eros. Sed blandit et ipsum a porttitor. Curabitur sagittis ligula in ullamcorper vehicula. Sed consequat ipsum vitae ante ultricies tincidunt. Nulla egestas nisi non elementum semper. Aenean molestie mi purus, at commodo massa</p>
                <button><StaticLang az={'DAHA COX OXU'} en={'READ MORE'}/></button>
                

            </div>
            <div className="image-one-blog">
                <img src="https://t3.ftcdn.net/jpg/13/50/74/80/360_F_1350748037_EJmQsd7YvnWQ992DjCDR8FXrpvmNIQak.jpg" alt="" />
                <p><StaticLang az={'Bazar Uğurunuzu Maksimumlaşdırın: Məsləhətlər və Strategiyalar'} en={'Maximize Your Marketplace Success: Tips & Strategies'}/></p>
                <p>Integer mattis ultricies augue, ac bibendum arcu viverra vel. Etiam eu facilisis velit. Mauris auctor efficitur turpis feugiat laoreet. Nam ac posuere eros. Sed blandit et ipsum a porttitor. Curabitur sagittis ligula in ullamcorper vehicula. Sed consequat ipsum vitae ante ultricies tincidunt. Nulla egestas nisi non elementum semper. Aenean molestie mi purus, at commodo massa</p>
                <button><StaticLang az={'DAHA COX OXU'} en={'READ MORE'}/></button>

                
            </div>
        </div>
        <div className="sag-blog">
            <div className="post-widget">
                <p>Post Widget</p>
                <div className="widget-card">
                    <div className="img-card">
                         <img src="https://www.happycow.net/blog/wp-content/uploads/2022/01/Pick-Up-Limes-Vegan-Food-Blog-min-scaled.jpg" alt="" />
                    </div>
                    <div className="text-card">
                                        <p><StaticLang az={'Məhsul Baxışlarının Gücünü açmaq'} en={'Unlocking the Power of Product Reviews'}/></p>

                        <p>November 4, 2025</p>
                    </div>

                </div>
                 <div className="widget-card">
                    <div className="img-card">
                         <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2022/02/instagrammable_food_cover.jpg" alt="" />
                    </div>
                    <div className="text-card">
                                        <p><StaticLang az={'Elektron ticarətdə müştəri davranışını anlamaq'} en={'Understanding Customer Behavior in E-commerce'}/></p>

                        <p>November 4, 2025</p>
                    </div>

                </div>
                 <div className="widget-card">
                    <div className="img-card">
                    <img src="https://t3.ftcdn.net/jpg/13/50/74/80/360_F_1350748037_EJmQsd7YvnWQ992DjCDR8FXrpvmNIQak.jpg" alt="" />
                    </div>
                    <div className="text-card">
                                        <p><StaticLang az={'Bazar Uğurunuzu Maksimumlaşdırın: Məsləhətlər və Strategiyalar'} en={'Maximize Your Marketplace Success: Tips & Strategies'}/></p>

                        <p>November 4, 2025</p>
                    </div>

                </div>
            </div>
            <div className="social-widget">
                <p>Social Widget</p>
                <div className="icon-widget-fc">
                    <i class="fa-brands fa-square-facebook"></i>
                    <p>FACEBOOK</p>
                    <p><StaticLang az={'IZLE'} en={'FOLLOW'}/></p>
                </div>
                 <div className="icon-widget-tw">
                    <i class="fa-brands fa-twitter"></i>
                    <p>TWITTER</p>
                                        <p><StaticLang az={'IZLE'} en={'FOLLOW'}/></p>

                </div>
                 <div className="icon-widget-inst">
                    <i class="fa-brands fa-instagram"></i>
                    <p>INSTAGRAM</p>
                                        <p><StaticLang az={'IZLE'} en={'FOLLOW'}/></p>

                </div>
                 <div className="icon-widget-yt">
                    <i class="fa-brands fa-youtube"></i>
                    <p>YOUTUBE</p>
                                        <p><StaticLang az={'IZLE'} en={'FOLLOW'}/></p>

                </div>
            </div>
        </div>
    </div>
   </div>

  <div className="container my-5">
    <Footer />

  </div>
   
   
   </>
  )
}

export default About