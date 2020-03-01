import React from 'react'
import ToursList from "./TourList"
import {useStaticQuery,graphql} from "gatsby"

const getTours = graphql`
query {
    tours:allContentfulTour(filter:{feature:{eq:true}}) {
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
export const Tours = () => {
    const {tours}=useStaticQuery(getTours)   
    return <ToursList tours={tours}/>
}

export default Tours