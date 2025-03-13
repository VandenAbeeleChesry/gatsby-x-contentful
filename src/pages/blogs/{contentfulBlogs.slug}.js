import * as React from "react";
import Layout from '../../components/layout';
import { graphql, Link } from "gatsby";

// Gatsby image plugin (zonder plugin kunnnen we de url in src zetten)
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Seo from '../seo';
export const Head = () => <Seo pageTitle="Blogs detail" />

const BlogDetail = ({data}) => {  
    const image = getImage(data.contentfulBlogs.imageBlog);    
    return (
        <Layout>
            <h2>{data.contentfulBlogs.titleBlog}</h2>
            <p>{data.contentfulBlogs.descriptionBlog}</p>
            <p>{data.contentfulBlogs.dateBlog}</p>

            {data.contentfulBlogs.childFriendlyBlog ? (
                <p>Kind vriendelijk</p>
            ) : (
                <p>Niet kind vriendelijk</p>
            )}
            <GatsbyImage
                image={image}
                alt={data.contentfulBlogs.imageBlog.title}
            />
            <Link to="/blogs">Terug</Link>
        </Layout>
    )
}

export default BlogDetail;

export const query = graphql`
query MyQuery($id: String) {
    contentfulBlogs(id: {eq: $id}) {
        descriptionBlog
        titleBlog
        childFriendlyBlog
        dateBlog(formatString: "DD MMMM, YYYY - HH:mm")
        slug
        id
        imageBlog {
            title
            url
            filename
            gatsbyImage(
                placeholder: BLURRED
                width: 800
                formats: WEBP
                layout: CONSTRAINED
            )
        }
    }
}`;
