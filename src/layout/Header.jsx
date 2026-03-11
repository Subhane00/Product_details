  import React, { use, useContext } from "react";
import { Link, NavLink } from "react-router";
import { LangContext } from "../context/LangProvider";
import StaticLang from "../utils/StaticLang";
import { ThemeContext } from "../context/ThemeProvider";
import { useCart } from "react-use-cart";

const Header = () => {
  const [lang, setLang] = useContext(LangContext);
  const [theme,setTheme] = useContext(ThemeContext);

  const { totalItems } = useCart();
  const changeLang = () => {
    if (lang === "AZ") {
      setLang("EN");
    } else {
      setLang("AZ");
    }
  };
  const changeTheme = ()=>{
    if (theme === 'Light'){
      setTheme('Dark');
    }else{
      setTheme('Light');
    }
  }
  return (
    <>
      <div className='bas'>
        <div id="carouselExample" className="carousel carousel-2 slide">
          <div className="carousel-inner inner-2">
            <div className="carousel-item carousel-item-2 active">
              <p>
                <StaticLang
                  az={
                    "Növbəti 3 sifariş üçün PULSUZ çatdırılma və 40% endirim! İlk sifarişinizi verin."
                  }
                  en={
                    "FREE delivery & 40% Discount for next 3 orders! Place your 1st order in."
                  }
                />
              </p>
            </div>
            <div className="carousel-item carousel-item-2 ">
              <p>
                <StaticLang
                  az={
                    "Növbəti 3 sifariş üçün PULSUZ çatdırılma və 40% endirim! İlk sifarişinizi verin."
                  }
                  en={
                    "FREE delivery & 40% Discount for next 3 orders! Place your 1st order in."
                  }
                />
              </p>
            </div>
            <div className="carousel-item carousel-item-2 ">
              <p>
                <StaticLang
                  az={
                    "Növbəti 3 sifariş üçün PULSUZ çatdırılma və 40% endirim! İlk sifarişinizi verin."
                  }
                  en={
                    "FREE delivery & 40% Discount for next 3 orders! Place your 1st order in."
                  }
                />
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container">
        <div className='header-one'>
          <img
            src="https://klbtheme.com/supgor/wp-content/uploads/2025/10/logo-dark-2.png"
            alt=""
          />
          <div className="location">
            <div className="location-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <p>
              <span>
                <StaticLang az={"Ancaq"} en={"ALL"} />
              </span>{" "}
              <StaticLang az={"sənin məkanın"} en={"your location"} />
            </p>
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search popular products..."
              aria-label="Recipient’s username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className="icons">
            <div className="icon-div-one">
              {/* <p style={{marginTop:'15px', color: 'white'}}>Login</p> */}
              <Link to='/login' style={{textDecoration: 'none', color: 'white'}}><i class="fa-solid fa-user-tie"></i></Link>
            </div>
            <div className="icon-div">
              {/* <i class="fa-regular fa-heart"></i> */}
              <button style={{ fontSize: "13px" }} onClick={changeLang}>
                {lang === "AZ" ? "EN" : "AZ"}
              </button>
            </div>
            <div className="icon-div">
              <button onClick={changeTheme} style={{ fontSize: "13px" }}>{theme}</button>
            </div>
           <Link to={'/basket/'} type="button" className="btn btn-dark position-relative basket-button">
 <i class="fa-solid fa-cart-shopping"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {totalItems}
  </span>
</Link>

          </div>
        </div>
      </div>

      <div className="container">
        <div className='asagi-header'>
          <div className="secim">
            <ul>
              <li>
                <NavLink to="/">
                  <StaticLang az={"Ana Səhifə"} en={"Home"} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/product">
                  <StaticLang az={"Alış-veriş"} en={"Shop"} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <StaticLang az={"Bloq"} en={"Blog"} />
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  <StaticLang az={"Əlaqə"} en={"Contact"} />
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="sale">
            <i class="fa-solid fa-percent"></i>
            <span>
              <StaticLang az={"Ən yaxşı satış"} en={"Best Seller"} />
            </span>
            <div className="sale-div">
              <span>SALE</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
