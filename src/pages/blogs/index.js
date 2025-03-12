import * as React from "react";
import Layout from '../../components/layout';
import { graphql, Link } from "gatsby";

import Seo from '../seo';
export const Head = () => <Seo pageTitle="Blogs" />

const Blogs = ({data}) => {        
    return (
        <Layout>
            <div>
                {
                    data.allContentfulBlogs.nodes.map((node) => (
                        <div key={node.id}>
                            <h2>{node.titleBlog}</h2>
                            <Link to={`/blogs/${node.slug}`}>Lees meer</Link>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}
export default Blogs;

export const query = graphql`
query {
    allContentfulBlogs(sort: {createdAt: ASC})  {
        nodes {
            descriptionBlog
            slug
            titleBlog
            id
        }
    }
}`;

