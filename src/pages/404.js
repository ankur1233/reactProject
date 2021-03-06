import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from '../components/Banner'
const error = () => {
    return (
<Layout>
          
<header className={styles.error}>
<Banner title="Opps You Just lost !!">
<AniLink fade to="/" className="btn-white">back to home page</AniLink>
</Banner>
</header>
</Layout>
    )
}

export default error
