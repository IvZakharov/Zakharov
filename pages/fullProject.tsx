import type { NextPage } from 'next';
import { Layout } from '../layouts/Layout';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import Grid from '@mui/material/Grid';

const Portfolio: NextPage = () => {
  return (
    <>
      <Layout title="Portfolio" description="">
        <Grid>
          <ProjectCard />
        </Grid>
      </Layout>
    </>
  );
};

export default Portfolio;
