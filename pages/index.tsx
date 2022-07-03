import type { NextPage } from 'next';
import { Layout } from '../layouts/Layout';
import { Hero } from '../components/Hero/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />

      </Layout>
    </>
  );
};

export default Home;
