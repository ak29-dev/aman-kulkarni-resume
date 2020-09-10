import React from 'react';
import Layout from '../components/Layout';
import Landing from '../sections/Landing';
import About from '../sections/About'
import Skillset from '../sections/Skillset';
import Education from '../sections/Education';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = () => (
  <Layout>
    <Header />
    <Landing />
    <About />
    <Skillset />
    <Education />
    <Footer />
  </Layout>
);

export default IndexPage;
