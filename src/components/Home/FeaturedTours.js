import React from 'react'
import Tour from "../Tours/Tour"
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const FeaturedTours = () => {
const response= useStaticQuery(getTours)
const tours = response.featuredTours.edges

console.log(tours)

    return (

     <section className={styles.tours}>   
    <Title title="feature"subtitle="tours"/>
    <div className={styles.center}>

    {
    //
      tours.map(({node})=> {
    return <Tour key={node.contentful_id} tour={node} />
      })}
</div>
        <AniLink fade to="/tours" className="btn-primary">All Tours</AniLink>
        </section>
    )
}

export default FeaturedTours
const getTours =  graphql`
   { featuredTours:allContentfulTour(filter:{feature:{eq:true}}) {
      edges {
        node {
          name
          price
          country
          slug
          country
          contentful_id
          days
          images{      
            fluid{
            ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
}
`

