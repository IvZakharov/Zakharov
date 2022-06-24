import type { NextPage } from 'next';
import { Layout } from '../layouts/Layout';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { Grid } from '@mui/material';

import { dataProjects } from '../data';

const Works: NextPage = () => {
  return (
    <>
      <Layout title="Works" description="">
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

export default Works;
