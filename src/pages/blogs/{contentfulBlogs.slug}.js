import * as React from "react";
import Layout from '../../components/layout';
import { graphql, Link } from "gatsby";

const BlogDetail = ({data}) => {  
    return (
        <Layout>
            <h2>{data.contentfulBlogs.titleBlog}</h2>
            <p>{data.contentfulBlogs.descriptionBlog}</p>
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
        slug
        id
    }
}`;
