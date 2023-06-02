// import React, { useState } from 'react'
import style from './ViewBox.module.css'
import img from '../../assets/images/3.jpg'
import Product from '../../components/Product/Product';

const ViewBox = ({productData, closeStatus}) => {

  return (
    <div className={style.alt_screen}>
      <div className={style.close_view} onClick={closeStatus}>x</div>
      <div className={style.view_box}>
        <div className={style.image_screen}>
          <img src={img} alt={productData.title} />
        </div>

        <div className={style.image_tab}>
          <img src={img} alt={productData.title} />
        </div>

        <ul className={style.actions}>
          <li>Wishlist</li>
          <li>Like</li>
          <li>Share</li>
        </ul>

        <div className={style.details}>
          <h1>{productData.price}</h1>

          <h4>{productData.title}</h4>

          <span>Available at</span>

          <ul className={style.brands}>
            <li>Jumia</li>
          </ul>

          <div className={style.buy_act}>
            <a className={style.btn} href={productData.link} >Shop Now</a>

            <span>*Disclaimer - Products are sold outside of gobstk</span>
            <span>we earn commision from your purchase</span>
          </div>
        </div>
                  
        <Product />
      </div>
    </div>
  )
}

export default ViewBox