import React from 'react'
import {graphql} from 'gatsby'
import  Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { node } from 'prop-types';
const Blog = ({data}) => {
    const {title,published,text:{json}}=data.post


const options={
renderNode:{
"embedded-asset-block":node =>{
    return (
        <div className="rich">
        
        <h3>this is awesom image</h3>
        
        <img width="400" src={node.data.target.fields.file["en-US"].url}></img>
        <p>image provided by hero</p>
        </div> )
},
},

}

return ( 
    <Layout>
    <section className={styles.blog}>
    <div className={styles.center}>
    
    <h1>{title}</h1>
    <h4>Published to :{published}</h4>
   <article className={styles.post}>{
 documentToReactComponents(json,options)
   }</article>
   <AniLink fade to="/blog" className="btn-primary">all post</AniLink>
   
    </div>



    </section>


    </Layout>

)}

export const query=graphql`
query getPost($slug: String!) {
   post:contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString:"MMM Do YYYY")
      text{
          json
      }
    }
  }

`


export default Blog