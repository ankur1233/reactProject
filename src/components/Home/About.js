import React from 'react'
import Title from '../Title'
import styles from "../../css/about.module.css"
//import img from "../../images/defaultBcg.jpeg"
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
    aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"})
   {
   childImageSharp{
    
    fluid(maxWidth:600){
        ... GatsbyImageSharpFluid_tracedSVG
 }
  } 
    
  } 
  }`


const About = () => {
    
    const {aboutImage}=useStaticQuery(getAbout);
    
    return (
        <section className={styles.about}>
            <Title title="about" subtitle="us"/>
            <div className={styles.aboutCenter}>
            <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
            
            {/* <img src={img} alt="about company"/> */}

            <Img fluid={aboutImage.childImageSharp.fluid} alt="awesom landscape"/>
            
            </div>
            
            </article>

            <article className={styles.aboutInfo}>
            <h4>explore the diffrence</h4>
            <p>

                Ex pi dit
            </p>

             <p>

                E  x pi dit
                </p>
                <button type="button" className="btn-primary">read more</button>
            </article>


            </div>
        </section>
    )
}

export default About;