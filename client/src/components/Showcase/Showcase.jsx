import React, { useEffect, useState } from 'react'
import style from './Showcase.module.css'

const Showcase = () => {
  const [tags, setTags] = useState([])
  useEffect(()=>{
    setTags([
      {
        tag_name: '#big',
        tag_link: '',
      },
      {
        tag_name: '#fresh',
        tag_link: '',
      },
      {
        tag_name: '#pale',
        tag_link: '',
      },
      {
        tag_name: '#trending',
        tag_link: '',
      },
      {
        tag_name: '#popular',
        tag_link: '',
      },
    ])
  }, [])
  return (
    <div className={style.features}>
      <div className={style.sort_filter}>
        <div className={style.sort}>
          All
        </div>
        <div className={style.filter}>
          Filters
        </div>
      </div>

      <div className={style.tags}>
        {tags.map((tag, index) => (
          <div key={index} className={style.tag}>
            {tag.tag_name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Showcase