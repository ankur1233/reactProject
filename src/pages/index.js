import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout";
//import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services";
import services from "../constants/services";
import StyledHero from '../components/StyledHero';
import FeatureTours from '../components/Home/FeaturedTours';
import {graphql} from "gatsby"

export default ({data}) => (
<>
<Layout>

<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>

<Banner title="Explore & Travel" info="Feed Your Soul !!!">
<AniLink fade  to="/tours" className="btn-white">explore tour
</AniLink>

</Banner>

</StyledHero>


<About/>

<FeatureTours/>

<Services/>

</Layout>

</>
)



export const query= graphql`
{
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
  
`




