import React from 'react'
import style from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={style.about}>
          GOBSKT 
          <br /><br />

          Gobskt brings product to your doorstep, no need to visit all
          the e-commerce 's stores out there. with just a simple click, 
          one can find something to keep moving on the go. <br /><br />

          Apart from our recommendation system, we also have our power
          search tab that lets you search through our collections from different 
          e-commerce stores and shop from any of your favourites, and thats not all. <br /><br />

          Black Fridays, Discounts, Best buys are some of the things you don't
          want to miss and thats exactly what you can find in our gembox. Happy shopping! 
          
          <br /><br /><br />

          HELP AND SUPPORT
          <br /><br />

          Need help or do you want to learn more about the platform?
          Got something you want to put up for our users?
          Don't hesitate to reach out to our advertisement and sales team; <br /><br />
          <a href="mailto:hy.gobskt@gmail.com"> <b>hy.gobskt@gmail.com</b></a>

          <br /><br /><br />
          
          DISCLAIMER 
          <br /><br />

          *Gobskt is not an e-commerce store to buy and sell but rather a recommendation
          engine and thus, will not be responsible for any purchase made outside of the platform.

        </div>

        <div className={style.copy}>
          &copy; {new Date().getFullYear()} Gobskt.
        </div>
      </div>
    </footer>
  )
}

export default Footer