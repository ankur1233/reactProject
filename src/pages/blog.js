import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero';
import {graphql} from "gatsby"
import BlogList from "../components/Blog/BlogList"
export const blog = ({data}) => {
    return (
      <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList/>
 
  </Layout>
    )
}

export default blog



export const query= graphql`
{
    blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
`
