import { Grid, Box } from '@mui/material';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  color: string;
};

export const ProjectCard = ({ title, imageUrl, color }: ProjectCardProps) => {
  return (
    <article className={styles.projectCard}>
      <style jsx>{`
        .imgWrap {
          background-color: ${color};
          border-radius: 30px;
          padding: 30px;
          display: flex;
          justify-content: center;
        }
      `}</style>
      <div className="imgWrap">
        <Image className={styles.img} src={imageUrl} width={500} height={300}></Image>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
};
