import React, { useEffect, useState } from 'react'
import style from './BoxItem.module.css'
import img from '../../assets/images/3.jpg'

const BoxItem = () => {
  const [boxItems, setBoxItems] = useState([])
  useEffect(()=>{
    setBoxItems([
      {
        item_image: '',
        item_title: 'Just a Gift',
        item_link: '',
      },
      {
        item_image: '',
        item_title: 'Maybe a Gift',
        item_link: '',
      },
      {
        item_image: '',
        item_title: 'Maybe a Gift',
        item_link: '',
      },
      {
        item_image: '',
        item_title: 'Maybe a Gift',
        item_link: '',
      },
      {
        item_image: '',
        item_title: 'Maybe a Gift',
        item_link: '',
      },
    ])
  },[])
  return (
    <div className="container">
      <div className={style.box_items}>
        <div className={style.box_title}>
          <h1>What's</h1>
          <p>in the box</p>  
        </div>
        {boxItems.map((boxItem, index) => (
          <div key={index} className={style.box_item}>
            <img src={img} alt={boxItem.item_title} />
            <span>{boxItem.item_title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BoxItem