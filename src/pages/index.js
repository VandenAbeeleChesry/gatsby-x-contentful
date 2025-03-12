import * as React from "react";
import Layout from '../components/layout';

import Seo from './seo';
export const Head = () => <Seo pageTitle="Home" />

const Home = () => {
  return (
    <Layout>
      <div>
        <p>This is the home</p>
      </div>
    </Layout>
  )
}

export default Home;