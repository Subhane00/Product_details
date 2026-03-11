import React, { useContext } from 'react'
import Footer from '../layout/Footer'
import StaticLang from '../utils/StaticLang'
import { ThemeContext } from '../context/ThemeProvider'

const Contact = () => {
    const [theme]= useContext(ThemeContext);
  return (
    <>
    <div className="container">
        <div className='contact'>
            <div className="sol-contact">
                <div className="ust-sol-contact">
                    <p><StaticLang az={'MAGAZALARIMIZ'} en={'OUR STORES'} /></p>
                    <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.</p>
                </div>
                <div className="asagi-sol-contact">
                    <div className="asagi-1">
                        <p>United States</p>
                        <p>United States</p>
                        <p>205 Middle Road, 2nd Floor, New York 2485</p>
                        <p>+02 1234 567 88</p>
                        <p>info@example.com</p>
                    </div>
                    <div className="asagi-1">
                        <p>Nedherlands</p>
                        <p>Amsterdam</p>
                        <p>205 Middle Road, 2nd Floor, New York 2485</p>
                        <p>+02 1234 567 88</p>
                        <p>info@example.com</p>
                    </div>
                </div>

            </div>


            <div className="sag-contact">
                <div className="sag-text-contact">
                    <p><StaticLang az={'Bize yaz...'} en={'Write us...'} /></p>
                    <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.</p>
                     </div>
                  <form action="">
                       <div className="name-email">
                       <div className="name">
                        <p><StaticLang az={'Adiniz *'} en={'Your name *'} /></p>
                        <input type="text" required/>
                       </div>
                       <div className="email">
                        <p><StaticLang az={'Emailiniz *'} en={'Your email *'} /></p>
                        <input type="email" required/>
                       </div>
                     </div>
                     <div className="subject">
                        <p><StaticLang az={'Movzu *'} en={'Subject *'} /></p>
                        <input type="text" required/>
                     </div>
                     <div className="message">
                        <p><StaticLang az={'Mesajiniz'} en={'Message'} /></p>
                        <input type="text" required/>
                     </div>
                     <input className='submit' type="submit" value={'Send Message'} />
                  </form>
            </div>
        </div>
    </div>

    <div className="container my-5">
        <Footer /> 
    </div>
    
    
    </>
  )
}

export default Contact