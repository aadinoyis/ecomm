import React, { useEffect, useState } from 'react'
import style from './Trending.module.css'
import img from '../../assets/images/2.jpg'
import ViewBox from '../../pages/ViewBox/ViewBox'

const Trending = () => {
  const [trending, setTrending] = useState([])
  const [activeProduct, setActiveProduct] = useState([])
  const [activeStatus, setActiveStatus] = useState(false)
  useEffect(()=>{
    setTrending([
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

  const clickedProduct = (index) => {
    setActiveStatus(!activeStatus)
    setActiveProduct(trending[index])
  }

  return (
    <div className='container'>
      <div className={style.box_title}>
        <h1>Trending</h1>
        <p>Showing 5 through of 10 items</p>  
      </div>

      <div className={style.trending_collection}>
        <div className={style.arrow_left} ></div>
        <main>
          {trending.map((trend, index) => (
            <figure key={index} className={style.trend} onClick={() => clickedProduct(index)}>
              <img src={img} alt={trend.title} />
              <figcaption>
                <span className={style.brand}>{trend.brand}</span>
                <span className={style.title}>{trend.title}</span>
                <span className={style.price}>From <strong> {trend.price}</strong></span>
              </figcaption>
            </figure>
          ))}
        </main>
        <div className={style.arrow_right} ></div>
      </div>
      {activeStatus && <ViewBox productData={activeProduct} closeStatus={clickedProduct} />}
    
    </div>
  )
}

export default Trending