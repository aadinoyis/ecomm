import React, { useEffect, useState } from 'react'
import style from './Header.module.css'

const Header = () => {
  const [banners, setBanners] = useState([]);
  useEffect(()=>{
    setBanners([
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
    <header className={style.header}>
      <div className={style.notify}>
        This is a notification panel
      </div>

      <div className={style.banners}>
        {banners.map((banner, index) => (
          <div key={index} className={style.banner} style={{
            // backgroundImage: `url(${banner.image}})`,
          }}>

            <div className={style.banner_txt}>
              <div className={style.price}>{banner.price}</div>

              <h2 className={style.class}>{banner.class}</h2>
              <h4 className={style.title}>{banner.title}</h4>

              <a className='btn' href={banner.link}>Shop Now</a>
              <span>*available at <em>{banner.brand}</em> </span>
            </div>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header