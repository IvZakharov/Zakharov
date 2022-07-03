import { Grid, Box } from '@mui/material';
import styles from './ProjectCard.module.scss';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  color: string;
  tags: string[];
  descriptions: string;
};

export const ProjectCard = ({ title, imageUrl, color, tags, descriptions }: ProjectCardProps) => {
  return (
    <article className={`${styles.projectCard} projectCard`}>
      <style jsx>{`
        .projectCard {
          background-color: ${color};
          display: flex;
          justify-content: center;
          align-content: center;
        }
      `}</style>

      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{descriptions}</p>
        <ul className={styles.tags}>
          {tags.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.imgWrap}>
        <Image className={styles.img} src={imageUrl} width={500} height={300}></Image>
      </div>
    </article>
  );
};
