import React, { useState } from "react";
import logo from "./images/logo.svg";
import open_menu from "./images/icon-menu.svg";
import close_menu from "./images/icon-menu-close.svg";
import main_img from "./images/image-web-3-desktop.jpg";
import pc from "./images/image-retro-pcs.jpg";
import laptop from "./images/image-top-laptops.jpg";

import gaming from "./images/image-gaming-growth.jpg";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="home">
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="header__navbar">
          <ul
            className={
              isOpen ? "header__navbar__items_mobile" : "header__navbar__items"
            }>
            <li className="nav__item">Home</li>
            <li className="nav__item">New</li>
            <li className="nav__item">Popular</li>
            <li className="nav__item">Trending</li>
            <li className="nav__item">Categories</li>
          </ul>
        </nav>
        <div className="nav__mobile" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <img src={close_menu} alt="close" />
          ) : (
            <img src={open_menu} alt="open" />
          )}
        </div>
      </header>
      <main className="main">
        <div className="main__left">
          <div className="main__left__image">
            <img src={main_img} alt="main" />
          </div>
          <div className="main__left__content">
            <div className="main__left__content__ques">
              <h1 className="question">The Bright Feature of web 3.0?</h1>
            </div>
            <div className="main__left__content__ans">
              <p className="answer__content">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its Promise?
              </p>
              <button>Read more</button>
            </div>
          </div>
        </div>
        <aside className="main__side">
          <h1 className="side__heading">New</h1>
          <ul className="side__items">
            <li className="items">
              <h3 className="heading">Hydrogen vs electric cars</h3>
              <p className="des">
                will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </li>
            <li className="items">
              <h3 className="heading">Hydrogen vs electric cars</h3>
              <p className="des">
                will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </li>
            <li className="items last">
              <h3 className="heading">Hydrogen vs electric cars</h3>
              <p className="des">
                will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </li>
          </ul>
        </aside>
      </main>
      <section className="categories">
        <div className="category">
          <div className="image">
            <img src={pc} alt="pc" />
          </div>
          <div className="content">
            <h1 className="num">01</h1>
            <h3 className="heading">Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades</p>
          </div>
        </div>
        <div className="category">
          <div className="image">
            <img src={laptop} alt="laptop" />
          </div>
          <div className="content">
            <h1 className="num">02</h1>
            <h3 className="heading">Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades</p>
          </div>
        </div>
        <div className="category">
          <div className="image">
            <img src={gaming} alt="gaming" />
          </div>
          <div className="content">
            <h1 className="num">03</h1>
            <h3 className="heading">Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
