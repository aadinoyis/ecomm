import React, { useEffect, useState } from 'react'
import style from './Product.module.css'
import img from '../../assets/images/3.jpg'
import ViewBox from '../../pages/ViewBox/ViewBox'

const Product = () => {
  const [products, setProducts] = useState([])
  const [activeProduct, setActiveProduct] = useState([])
  const [activeStatus, setActiveStatus] = useState(false)
  useEffect(()=>{
    setProducts([
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
    setActiveProduct(products[index])
  }

  return (
    <div className="container">
      <div className={style.box_title}>
        <h1>Hot Deals</h1>
        <p>Showing 5 through of 10 items</p>  
      </div>

      <div className={style.products}>
        {products.map((product, index) => (
          <figure key={index} className={style.product} onClick={() => clickedProduct(index)}>
            <img src={img} alt={product.title} />

            <figcaption>
              <h4 className={style.brand}>{product.brand}</h4>
              <h2 className={style.title}>{product.title}</h2>
              <h4 className={style.price}>From <strong>{product.price}</strong></h4>
            </figcaption>
          </figure>
        ))}
      </div>

      {activeStatus && <ViewBox productData={activeProduct} closeStatus={clickedProduct} />}
    </div>
  )
}

export default Product