import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    {data.heroImage && <Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes} />}
    <div className={styles.heroDetails}>
      <h1 className={styles.heroHeadline}>{data.name}</h1>
      <p className={styles.heroTitle}>{data.title}</p>
      {data.shortBio && <p>{data.shortBio.shortBio}</p>}
    </div>
  </div>
)
