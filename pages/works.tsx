import type { NextPage } from 'next';
import { Layout } from '../layouts/Layout';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import styles from '../styles/works.module.scss';
import { dataProjects } from '../data';

const Works: NextPage = () => {
  return (
    <>
      <Layout title="Works" description="">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={styles.slider}>
          {dataProjects.map((obj, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                key={obj.id}
                title={obj.title}
                imageUrl={obj.imgUrls}
                color={obj.color}
                tags={obj.tags}
                description={obj.descriptions}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Layout>
    </>
  );
};

export default Works;
