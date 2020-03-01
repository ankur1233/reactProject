import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

 const BlogCard = ({blog}) => {

    const {slug,title,image,published}=blog
    return (
        <artical className={styles.blog}>

        <div className={styles.imgContainer}> 
        <Image fluid={image.fluid} className={styles.img}alt="single-img"/>
        <AniLink fade className={styles.link} to={`/blog/${slug}`} alt="single post">read more</AniLink>
      
        <h6 className={styles.date}>{published}</h6>
        </div>

<div className={styles.footer}>

<h4>{title}</h4>
</div>


        </artical>
    )
}

export default BlogCard
