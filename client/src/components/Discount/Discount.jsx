import React, { useEffect, useState } from 'react'
import style from './Discount.module.css'

const Discount = () => {
  const [discounts, setDiscounts] = useState([]);
  useEffect(()=>{
    setDiscounts([
      {
        image: '../../../src/assets/images/1.png',
        class: 'Fashion',
        title: 'Niki elastice shoe for you',
        price: '$ 40,000',
        brand: 'Amazon',
        link: 'amazon.com',
      },
      {
        image: '../../../src/assets/images/1.png',
        class: 'Fashion',
        title: 'Niki elastice shoe for you',
        price: '$ 40,000',
        brand: 'Amazon',
        link: 'amazon.com',
      },
      {
        image: '../../../src/assets/images/1.png',
        class: 'Fashion',
        title: 'Niki elastice shoe for you',
        price: '$ 40,000',
        brand: 'Amazon',
        link: 'amazon.com',
      },
      {
        image: '../../../src/assets/images/1.png',
        class: 'Fashion',
        title: 'Niki elastice shoe for you',
        price: '$ 40,000',
        brand: 'Amazon',
        link: 'amazon.com',
      },
      {
        image: '../../../src/assets/images/1.png',
        class: 'Fashion',
        title: 'Niki elastice shoe for you',
        price: '$ 40,000',
        brand: 'Amazon',
        link: 'amazon.com',
      },
    ])
  }, [])
  return (
    <aside className={style.aside}>
      <div className={style.box_title}>
        <h1>Discounts</h1>
        <p>Don't miss out on these!</p>  
      </div>
      <div className={style.discounts}>
        {discounts.map((discount, index) => (
          <div key={index} className={style.discount} style={{
            // backgroundImage: `url(${discount.image}})`,
          }}>

            <div className={style.discount_txt}>
              <div className={style.price}>{discount.price}</div>

              <h2 className={style.class}>{discount.class}</h2>
              <h4 className={style.title}>{discount.title}</h4>

              <a className='btn' href={discount.link}>Shop Now</a>
              <span>*available at <em>{discount.brand}</em> </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Discount