import type { NextPage } from 'next';
import { Layout } from '../layouts/Layout';
import { Hero } from '../components/Hero/Hero';

import { Grid } from '@mui/material';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { dataProjects } from '../data';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Grid>
          {dataProjects.map((obj) => (
            <ProjectCard
              key={obj.id}
              title={obj.title}
              imageUrl={obj.imgUrls[0]}
              color={obj.color}
            />
          ))}
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
